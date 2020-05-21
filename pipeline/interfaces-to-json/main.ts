import { paths } from '@local/pipeline';
import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';
import * as TJS from 'typescript-json-schema';

parseAll(process.argv[2], process.argv[3]);

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

  const createdDirs = new Set();

  for (const header of glob.sync(globExpression)) {
    if (header.endsWith('/index.ts')) continue;
    if (header.includes('/native/')) continue;
    const portedPath = path.relative(sourceDir, header);

    const newFilePath = path.join(
      path.dirname(portedPath),
      path.basename(portedPath).replace(/\.ts$/g, '.json'),
    );

    const fullPath = path.join(destDir, newFilePath);
    if (!createdDirs.has(path.dirname(fullPath))) {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      createdDirs.add(path.dirname(fullPath));
    }

    const schema = generator.getSchemaForSymbol(path.basename(portedPath).replace(/\.ts$/g, ''));
    const schemaString = JSON.stringify(schema, null, 2);

    process.stderr.write(`\u001b[2Kconverting: ${fullPath}\r`);
    fs.writeFileSync(fullPath, schemaString);
  }

  const nativeProgram = TJS.getProgramFromFiles(glob.sync(nativeGlobExpression), compilerOptions);
  const nativeGenerator = TJS.buildGenerator(nativeProgram, settings);

  const allSymbols = nativeGenerator.getMainFileSymbols(nativeProgram, glob.sync(nativeGlobExpression));

  fs.mkdirSync(path.join(destDir, 'native'), { recursive: true });

  for (const symbol of allSymbols) {
    const newPath = path.join(destDir, 'native', `${symbol}.json`);
    try {
      const schema = generator.getSchemaForSymbol(symbol);
      const schemaString = JSON.stringify(schema, null, 2);
      process.stderr.write(`\u001b[2Kconverting: ${newPath}\r`);
      fs.writeFileSync(newPath, schemaString);
    } catch (e) {
      process.stderr.write(`\u001b[2Kfailure writing: ${newPath}\r`);
    }
  }
}
