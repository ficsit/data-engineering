#!/usr/bin/env node
import * as fs from 'fs';

import { PakFile } from '../src/PakFile';
import { UObject } from '../src/UObject';
import { FileReader } from '../src/readers';
import { FGRecipeExp } from '../src/uexpTypes/FGRecipeExp';
import {Marshaller} from "../src/domain/marshaller/Marshaller";
import {UFGRecipe} from "../../../.data-landing/interfaces/classes";

import hotImport from 'hot-import';
import {UBaseFile} from "../src/UBaseFile";

if (process.env.NODE_ENV !== 'production') {
  const express = require("express");
  const port = parseInt(process.env.PORT as string, 10) || 3000;

  console.log("Loading pakfile before starting server...");
  loadPak().then(pak => {
    const app = express();

    app.use((req: any, res: any, next: any) => {
      hotImport('../src/developmentDebugging/converterProcessor').then(imp => {
        imp.pp(req, res, next, pak)
      })
    });

    app.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
} else {
  main();
}

async function loadPak() {
  //'/Volumes/[C] Windows 10/Program Files/Epic Games/SatisfactoryEarlyAccess/FactoryGame/Content/Paks/FactoryGame-WindowsNoEditor.pak';

  const pakFilePath =
    process.env.PAK_PATH ||
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
      recipeFiles.add(file);
    }
  }

  fs.mkdirSync('dump/images', { recursive: true });
  fs.mkdirSync('dump/converted', { recursive: true });

  const dummyRecipeFile = [...recipeFiles];
  // // ['FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp'];

  // const dummyRecipeFile = ['FactoryGame/Content/FactoryGame/Recipes/Smelter/Recipe_IngotIron.uexp'];

  // Only use UObjects that aren't Texture2D.

  const recipeMarshaller = new Marshaller();

  const retrievedRecipeFiles = (await pakFile.getFiles([...dummyRecipeFile]))
    .filter(item => {
      return item instanceof UObject && item.uexp instanceof FGRecipeExp;
    })
    .map((itemTmp: UBaseFile) => {
      const item = itemTmp as UObject;
      if (!(item.uexp instanceof FGRecipeExp)) throw new Error('Recipe is not of type UObject');
      return item.uexp.data(recipeMarshaller);
    }) as UFGRecipe[];

  // console.log(retrievedRecipeFiles);

  const recipeDeps = recipeMarshaller.getDependencies();

  return {pakFile, recipeDeps};
}

async function main() {

  // const pakFile = await loadPak();

  // To be filled in from /src/developmentDebugging after things have been solidified.
}
