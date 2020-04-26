import {Reader} from "../../readers";
import {FName, NameMap} from "../FName";
import {FPropertyTag, TagMetaData} from "../FPropertyTag";
import {Shape} from "../../util/parsers";
import {Int32} from "../../primitive";
import {FPackageFileSummary} from "../FPackageFileSummary";

export function ArrayPropertyTagMetaData(names: NameMap) {
  return async function ArrayPropertyParser(reader: Reader) {
    return {
      innerType: await reader.read(FName(names))
    }
  };
}

export function ArrayProperty(assetSummary: Shape<typeof FPackageFileSummary>, names: NameMap, tagMetaData: TagMetaData) {
  return async function ArrayPropertyParser(reader: Reader) {
    const innerType = (tagMetaData as Shape<typeof ArrayPropertyTagMetaData>).innerType;

    const totalEntries = await reader.read(Int32);

    let innerTagMetaData;

    if (innerType === 'StructProperty') {
      innerTagMetaData = await reader.read(FPropertyTag(assetSummary, names, false, 1))
    }

    return {
      innerType: await reader.read(FName(names))
    }
  };
}
