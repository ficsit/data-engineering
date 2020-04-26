import {ObjectFile} from '../../ObjectFile';
import {Int32} from '../../primitive';
import {Reader} from '../../readers';
import {Shape} from '../../util/parsers';
import {FName, NameMap} from '../FName';
import {FPropertyTag, TagMetaData} from '../FPropertyTag';

export function ArrayPropertyTagMetaData(names: NameMap) {
  return async function ArrayPropertyParser(reader: Reader) {
    return {
      innerType: await reader.read(FName(names)),
    };
  };
}

export function ArrayProperty(asset: ObjectFile, names: NameMap, tagMetaData: TagMetaData) {
  return async function ArrayPropertyParser(reader: Reader) {
    const innerType = (tagMetaData as Shape<typeof ArrayPropertyTagMetaData>).innerType;

    const totalEntries = await reader.read(Int32);

    let innerTagMetaData;

    if (innerType === 'StructProperty') {
      innerTagMetaData = await reader.read(FPropertyTag(asset, false, 1));
    }

    return {
      innerType: await reader.read(FName(names)),
    };
  };
}
