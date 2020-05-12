import {UAssetFile} from '../../../UAssetFile';
import {ByteBoolean, UInt32, UInt8} from '../../../primitive';
import {Reader} from '../../../readers';
import {Shape} from '../../../util/parsers';
import {FName, NameMap} from '../../FName';
import {FPropertyTag, Tag} from '../../FPropertyTag';
import {FPackageIndex} from "../../FPackageIndex";
import {SoftObjectProperty} from "../SoftObjectProperty";

export function UScriptArrayMetaData(names: NameMap) {
  return async function UScriptArrayMetaData(reader: Reader) {
    return {
      innerType: await reader.read(FName(names)),
    };
  };
}

export function UScriptArray(metaData: Shape<typeof UScriptArrayMetaData>, asset: UAssetFile, depth: number) {
  return async function UScriptArrayParser(reader: Reader) {
    const elementCount = await reader.read(UInt32);
    let tag = null;

    if (metaData.innerType === 'StructProperty' || metaData.innerType === 'ArrayProperty') {
      tag = await reader.read(FPropertyTag(asset, false, depth + 1));

      if (tag === null) {
        throw new Error('Could not read property tag inside a UScriptArray');
      }
    }

    const innerTagData = tag ? tag.tagMetaData : null;

    const data = [];

    for (let i = 0; i < elementCount; i++) {
      if (metaData.innerType == 'BoolProperty') {
        data.push(await reader.read(ByteBoolean));
      } else if (metaData.innerType == 'EnumProperty' || metaData.innerType == 'NameProperty') {
        const innerTag = await reader.read(FName(asset.names));
        data.push(innerTag);
      } else if (metaData.innerType == 'ByteProperty') {
        data.push(await reader.read(UInt8));
      } else if (metaData.innerType == 'ObjectProperty') {
        data.push(await reader.read(FPackageIndex(asset.imports, asset.exports)));
      } else if (metaData.innerType == 'SoftObjectProperty') {
        data.push(await reader.read(SoftObjectProperty(asset.names)));
      } else if (metaData.innerType == 'StructProperty') {
        const innerTag = await reader.read(Tag(asset, metaData.innerType, innerTagData, depth + 1));
        if (innerTag) {
          data.push(innerTag);
        }
      } else {
        throw new Error("Unhandled UScriptArrayType")
        //
        // const innerTag = await reader.read(Tag(asset, metaData.innerType, innerTagData, depth + 1));
        // // https://github.com/iAmAsval/FModel/blob/92ab3521ca27bd31cd29d165e7346a7bf78c52ff/FModel/Methods/PakReader/ExportObject/UScript/UScriptArray.cs#L40
        // //TODO Check this somehow please
        // if (innerTag) {
        //   data.push(innerTag);
        // }
      }
    }

    return data;
  };
}
