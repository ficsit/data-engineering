#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';

import {PakFile} from '../src/PakFile';
import {FileReader} from '../src/readers';
import {UObject} from "../src/UObject";
import {UBaseFile} from "../src/UBaseFile";

main();
async function main() {
  //'/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const pakFilePath =
    '/mnt/a/Games/Epic/SatisfactoryExperimental/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';
  const reader = new FileReader(pakFilePath);
  await reader.open();

  const pakFile = new PakFile(reader);
  await pakFile.initialize();

  const fileNames = Array.from(pakFile.entries.keys());
  // Start with recipes;
  const recipeFiles = new Set<string>();
  for (const file of fileNames) {
    if (file.match(/\/Recipe_[A-Za-z_0-9]+\.uexp/g)) {
      recipeFiles.add(file)
    }
  }

  fs.mkdirSync('dump/images', { recursive: true });
  fs.mkdirSync('dump/converted', { recursive: true });

  const dummyRecipeFile = [...recipeFiles];
    // ['FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp'];
    //

    // ['FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp'];

  // Only use UObjects that aren't Texture2D.
  const retrievedRecipeFiles = (await pakFile.getFiles([...dummyRecipeFile])).filter((item) => {
    // if (item instanceof UObject) {
    //   console.log(item.uexp, !item.uexp.isFGRecipe())
    // }

    return item instanceof UObject && item.uexp.isFGRecipe();
  }).map((item: UBaseFile) => {
    if (!(item instanceof UObject)) throw new Error("Recipe is not of type UObject");
    return item.uexp.convert();
  });


  for (const file of retrievedRecipeFiles) {
    const dest = path.join('dump', 'converted', path.basename(file.asset.filename) + '.json');
    fs.writeFileSync(dest, JSON.stringify(file, null, 2));
  }

}
