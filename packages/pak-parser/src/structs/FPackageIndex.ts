import {Shape} from "../util/parsers";
import {FObjectExport} from "./FObjectExport";
import {FObjectImport} from "./FObjectImport";
import {Reader} from "../readers";

// https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L19
// Deviates from the source because it also includes a reference to the javascript object

export function FPackageIndex(imports: Shape<typeof FObjectImport>[], exports: Shape<typeof FObjectExport>[], index: number) {
  return async function (reader: Reader) {
    let processedIndex = 0;
    let reference = null;
    if (index === 0) {
      //TODO: gather all top level linker packages
      processedIndex = null;
    }

    if (index < 0) {
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L76-L81
      // < 0 refers to imports
      const normalizedIndex = -1 * index - 1;
      if (normalizedIndex >= 0 && normalizedIndex < imports.length) {
        processedIndex = index;
        reference = imports[normalizedIndex];
      }
    } else if (index !== 0 && index - 1 < exports.length) {
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L83-L87
      // refers to the exports

      // TODO: Actually modifies the index, should we preserve?
      processedIndex = index - 1;
      reference = exports[index - 1];
    } else {
      if (index !== 0)
        throw new Error(`FPackageIndex did not get a valid index.`);
    }

    return {
      processedIndex,
      reference
    }
  }
}

