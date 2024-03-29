import { Int32 } from '../primitive';
import { Reader } from '../readers';
import { Shape } from '../util/parsers';

import { FObjectExport } from './FObjectExport';
import { FObjectImport } from './FObjectImport';

// https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L19
// Deviates from the source because it also includes a reference to the javascript object

export function FPackageIndexInt(
  index: number,
  imports: Shape<typeof FObjectImport>[],
  exports: Shape<typeof FObjectExport>[],
) {
  return async function(reader: Reader) {
    let processedIndex = 0;
    let reference = null;
    if (index === undefined || index === 0) {
      //TODO: gather all top level linker packages
      processedIndex = Infinity;
    } else if (index < 0) {
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L76-L81
      // < 0 refers to imports
      const normalizedIndex = -1 * index - 1;
      if (normalizedIndex >= 0 && normalizedIndex < imports.length) {
        processedIndex = index;
        reference = imports[normalizedIndex];
        // TODO: put this somewhere else maybe?  (This makes a cyclic json)
        reference.outerImport = JSON.parse(
          JSON.stringify(await reader.read(FPackageIndexInt(reference.outerIndex, imports, exports))),
        );
      }
    } else if (index !== 0 && index - 1 < exports.length) {
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Public/UObject/ObjectResource.h#L83-L87
      // refers to the exports

      // TODO: Actually modifies the index, should we preserve?
      processedIndex = index - 1;
      reference = exports[index - 1];
      // TODO: put this somewhere else maybe? (This makes a cyclic json)
      reference.outerImport = JSON.parse(
        JSON.stringify(await reader.read(FPackageIndexInt(reference.outerIndex, imports, exports))),
      );
    } else {
      if (index !== 0) throw new Error(`FPackageIndex did not get a valid index: ` + index);
    }

    return {
      processedIndex,
      reference,
    };
  };
}

export function FPackageIndex(
  imports: Shape<typeof FObjectImport>[],
  exports: Shape<typeof FObjectExport>[],
) {
  return async function(reader: Reader) {
    const index = await reader.read(Int32);

    return await reader.read(FPackageIndexInt(index, imports, exports));
  };
}
