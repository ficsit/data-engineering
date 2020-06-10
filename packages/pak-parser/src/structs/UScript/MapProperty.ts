import { UAssetFile } from '../../UAssetFile';
import { Int32 } from '../../primitive';
import { Reader } from '../../readers';
import { Shape } from '../../util/parsers';
import { FName, NameMap } from '../FName';

import { StructPropertyTagMetaData, UScriptStruct } from './UScriptStruct';

export function MapPropertyTagMetaData(names: NameMap) {
  return async function MapPropertyParser(reader: Reader) {
    return {
      keyType: await reader.read(FName(names)),
      valueType: await reader.read(FName(names)),
    };
  };
}

export function MapProperty(
  tagMetaData: Shape<typeof MapPropertyTagMetaData>,
  asset: UAssetFile,
  depth: number,
) {
  return async function MapPropertyParser(reader: Reader) {
    const numKeysToRemove = await reader.read(Int32);

    const keyType = tagMetaData.keyType;
    const valueType = tagMetaData.valueType;
    const nameMeta: Shape<typeof StructPropertyTagMetaData> = {
      structName: keyType,
      structGuid: {},
    };

    const keyMeta: Shape<typeof StructPropertyTagMetaData> = {
      structName: valueType,
      structGuid: {},
    };

    for (let i = 0; i < numKeysToRemove; i++) {
      console.log('Removed key: ', await reader.read(UScriptStruct(nameMeta, asset, depth + 1)));
    }

    const numEntries = await reader.read(Int32);

    const tag = {} as any;

    for (let i = 0; i < numEntries; i++) {
      const name = ((await reader.read(UScriptStruct(nameMeta, asset, depth + 1))) as unknown) as string;

      tag[name] = await reader.read(UScriptStruct(keyMeta, asset, depth + 1));
    }

    return tag;
  };
}
