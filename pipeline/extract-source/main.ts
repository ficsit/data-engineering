import extractZip from 'extract-zip';
import * as fs from 'fs';
import * as inquirer from 'inquirer';
import * as os from 'os';
import * as path from 'path';
import * as shell from 'shelljs';

shell.config.fatal = true;

const binSuffix = os.type().startsWith('Windows') ? '.exe' : '';
const ue4pak = path.join(__dirname, 'vendor', 'ue4pak', 'ue4pak' + binSuffix);

// Entry

main(process.argv[2], process.argv[3]);
async function main(gameDir = defaultGameDir(), destDir = defaultDestDir()) {
  console.log(`Extracting: ${gameDir}`);
  console.log(`Writing To: ${destDir}`);

  await setupDestination(destDir);

  const { branch, version, build } = await extractMetadata(gameDir, destDir);
  await extractPakData(gameDir, destDir);
  await extractHeaders(gameDir, destDir);
  await extractResources(gameDir, destDir);

  await commit(destDir, branch, version, build);
}

// Workflow

async function setupDestination(destDir: string) {
  await run(`git pull`, { cwd: destDir });
}

async function extractMetadata(_gameDir: string, destDir: string) {
  const { branch, version, build } = await inquirer.prompt([
    {
      name: 'branch',
      type: 'list',
      choices: ['master', 'experimental'],
    },
    {
      name: 'version',
      type: 'input',
      message: 'Public Version:',
      validate(value) {
        if (/^\d+\.\d+\.\d+\.\d+$/.test(value)) return true;
        return `Must be #.#.#.#`;
      },
    },
    {
      name: 'build',
      type: 'number',
      message: 'Build Number:',
    },
  ]);

  writeJSON(path.join(destDir, 'metadata.json'), {
    version: {
      branch,
      public: version,
      build,
    },
  });

  return { branch, version, build };
}

async function extractPakData(gameDir: string, destDir: string) {
  const dataDir = path.join(destDir, 'data');
  shell.rm('-rf', dataDir);

  await run(
    `"${ue4pak}" extract \
      --pretty \
      --assets "*" \
      --output "${dataDir}" \
      --split \
      --compact \
      --pak ./FactoryGame-WindowsNoEditor.pak
  `,
    {
      cwd: path.join(gameDir, 'FactoryGame', 'Content', 'Paks'),
    },
  );
}

async function extractHeaders(gameDir: string, destDir: string) {
  const headersZip = path.join(gameDir, 'CommunityResources', 'Headers.zip');
  const headerDir = path.join(destDir, 'headers');
  shell.rm('-rf', headerDir);

  await extractZip(headersZip, { dir: headerDir });
}

async function extractResources(gameDir: string, destDir: string) {
  const sourcePath = path.join(gameDir, 'CommunityResources', 'Docs');
  const destPath = path.join(destDir, 'resources');
  shell.rm('-rf', destPath);
  shell.cp('-R', sourcePath, destPath);
}

async function commit(destDir: string, branch: string, version: string, build: number) {
  await run(`git add .`, { cwd: destDir });
  await run(`git commit -m "v${version} (CL${build})"`, { cwd: destDir });
  await run(`git push`, { cwd: destDir });

  await run(`git tag -m "v${version} (CL${build})" b${build}`, { cwd: destDir });
  await run(`git tag -f v${version}`, { cwd: destDir });
  if (branch !== 'master') {
    await run(`git tag -f ${branch}`, { cwd: destDir });
  }
  await run(`git push --tags --force`, { cwd: destDir });
}

// Helpers

function defaultGameDir() {
  if (os.type() == 'Windows_NT') {
    return 'C:/Program Files/Epic Games/SatisfactoryEarlyAccess';
  } else {
    throw new Error(`Satisfactory is currently Windows only.`);
  }
}

function defaultDestDir() {
  return path.resolve(__dirname, '..', '..', '..', 'source-data');
}

async function run(command: string, options: shell.ExecOptions = {}) {
  console.log(`> ${command}`);
  const child = shell.exec(command, { ...options, async: true });

  await new Promise((resolve, reject) => {
    child.on('close', (code, signal) => {
      if (code || signal) {
        reject(`command exited with: ${code || signal}`);
      } else {
        resolve();
      }
    });
  });
}

function writeJSON(filePath: string, content: any) {
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf-8');
}
