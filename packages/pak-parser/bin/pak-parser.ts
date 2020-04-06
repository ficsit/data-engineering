#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

import { PakFile } from '../src/PakFile';
import { FileReader } from '../src/readers';

main();
async function main() {
  const pakFilePath =
    '/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new FileReader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();

  const fileSummary = Array.from(pakFile.entries.entries()).map(([name, entry]) => `${name} (${entry.size})`);
  fs.writeFileSync('pak-files.txt', fileSummary.join('\n'));

  const files = [
    'Engine/Content/Slate/Checkerboard.png',
    'Engine/Content/Slate/Common/DropZoneIndicator_Above.png',
    'Engine/Content/Slate/Testing/Wireframe.png',
    'Engine/Plugins/Compositing/Composure/Config/BaseComposure.ini',
  ];
  for (const file of files) {
    const child = (await pakFile.getFile(file))!;
    const destination = path.join('files', path.basename(file));
    fs.writeFileSync(destination, await child.reader.readAll());
  }
}
