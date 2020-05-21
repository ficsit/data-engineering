import { paths } from '@local/pipeline';
import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';
import * as TJS from 'typescript-json-schema';
// import * as jsonImportTest from '../../.data-landing/json';
//
// console.log(Object.keys(jsonImportTest));
parseAll(process.argv[2], process.argv[3]);

function shallowClone(sourceDict) {
  const returnDict = {};
  const blacklistedAttribute = new Set(['$schema', 'definitions']);
  Object.keys(sourceDict).forEach(key => {
    if (!blacklistedAttribute.has(key)) {
      returnDict[key] = sourceDict[key];
    }
  });

  return returnDict;
}

function parseAll(sourceDir = paths.dataLanding.interfaces, destDir = paths.dataLanding.json) {
  sourceDir = path.resolve(sourceDir);
  destDir = path.resolve(destDir);

  const globExpression = `${sourceDir}/**/*.ts`;

  const nativeGlobExpression = `${sourceDir}/**/native/*.ts`;

  // optionally pass argument to schema generator
  const settings: TJS.PartialArgs = {
    required: true,
  };

  // optionally pass ts compiler options
  const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true,
  };

  const program = TJS.getProgramFromFiles(glob.sync(globExpression), compilerOptions);
  const generator = TJS.buildGenerator(program, settings);

  const filesByDir = new Map<string, string[]>();

  for (const header of glob.sync(globExpression)) {
    if (header.endsWith('/index.ts')) continue;
    if (header.includes('/native/')) continue;
    const portedPath = path.relative(sourceDir, header);

    const newFilePath = path.join(
      path.dirname(portedPath),
      path.basename(portedPath).replace(/\.ts$/g, '.json'),
    );

    const fullPath = path.join(destDir, newFilePath);
    if (!filesByDir.has(path.dirname(fullPath))) {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      filesByDir.set(path.dirname(fullPath), []);
    }
    filesByDir.get(path.dirname(fullPath)).push(newFilePath);

    const schema = generator.getSchemaForSymbol(path.basename(portedPath).replace(/\.ts$/g, ''));
    const schemaString = JSON.stringify(shallowClone(schema), null, 2);

    process.stderr.write(`\u001b[2Kconverting: ${fullPath}\r`);
    fs.writeFileSync(fullPath, schemaString);
  }

  for (const parentDir of filesByDir.keys()) {
    const children = filesByDir.get(parentDir)!;

    const indexLines = [];

    for (const child of children) {
      if (path.parse(child).name.includes('.')) {
        throw new Error('Filename has an illegal character: ' + child);
      }

      indexLines.push(`export * as ${path.parse(child).name + 'JSON'} from './${path.basename(child)}';`);
    }

    fs.writeFileSync(path.join(parentDir, 'index.ts'), indexLines.join('\n'));
  }

  const nativeProgram = TJS.getProgramFromFiles(glob.sync(nativeGlobExpression), compilerOptions);
  const nativeGenerator = TJS.buildGenerator(nativeProgram, settings);

  const allSymbols = nativeGenerator.getMainFileSymbols(nativeProgram, glob.sync(nativeGlobExpression));

  const nativeDir = path.join(destDir, 'native');

  fs.mkdirSync(nativeDir, { recursive: true });

  const nativeIndexLines = [];

  for (const symbol of allSymbols) {
    const newPath = path.join(nativeDir, `${symbol}.json`);
    try {
      const schema = generator.getSchemaForSymbol(symbol);
      const schemaString = JSON.stringify(shallowClone(schema), null, 2);

      nativeIndexLines.push(
        `export * as ${path.parse(newPath).name + 'JSON'} from './${path.basename(newPath)}';`,
      );

      process.stderr.write(`\u001b[2Kconverting: ${newPath}\r`);
      fs.writeFileSync(newPath, schemaString);
    } catch (e) {
      process.stderr.write(`\u001b[2Kfailure writing: ${newPath}\r`);
    }
  }

  fs.writeFileSync(path.join(nativeDir, 'index.ts'), nativeIndexLines.join('\n'));

  const allSubDirs = [...filesByDir.keys(), nativeDir];

  const relativeDirs = allSubDirs.map(dir => path.relative(destDir, dir));

  const masterIndexLines = [];

  relativeDirs.forEach(relDir => {
    masterIndexLines.push(`export * from './${relDir}';`);
  });

  fs.writeFileSync(path.join(destDir, 'index.ts'), masterIndexLines.join('\n'), 'utf-8');
}
