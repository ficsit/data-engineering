import {Reader} from '../../readers';
import {FGuid} from './structs/FGuid';
import {FName, NameMap} from '../FName';
import {FPropertyTag, readFPropertyTagLoop, TagMetaData} from "../FPropertyTag";
import {Shape} from "../../util/parsers";
import {ObjectFile} from "../../ObjectFile";
import {FPackageFileSummary} from "../FPackageFileSummary";
import {IntPoint} from "./structs/IntPoint";
import Guid from "../../../../../pipeline/ue4pak-cleaner/parser/propertyTypes/structPropertyTypes/Guid";

export function StructPropertyTagMetaData(names: NameMap) {
  return async function StructParser(reader: Reader) {
    let result = {
      structName: '',
      structGuid: {}
    };
    try {
      result.structName = await reader.read(FName(names));
      result.structGuid = await reader.read(FGuid);
    } catch(e) {
      console.debug("StructPropertyMetaData could not be properly read");
      result = null;
    }

    return result;
  };
}

export function StructProperty(tagMetaData: Shape<typeof StructPropertyTagMetaData>, size: number, asset: ObjectFile, depth: number) {
  return async function StructParser(reader: Reader) {

    // Not generic StructProperty
    if (tagMetaData) {
      // Deviates from source, no success chck.
      return await reader.read(readStructData(tagMetaData, size, asset, depth));
    }

    return await readFPropertyTagLoop(reader, asset);
  };
}

function readStructData(tagMetaData: Shape<typeof StructPropertyTagMetaData>, size: number, asset: ObjectFile, depth: number) {
  return async function StructParser(reader: Reader) {

    // Not generic StructProperty
    let tag = null;
    if (tagMetaData) {
      switch(tagMetaData.structName) {
        case "IntPoint":
          tag = await reader.read(IntPoint);
          break;
        case "Guid":
          if (size == 16) {
            tag = await reader.read(FGuid);
          } else {
            throw new Error("GUID is not of size 16");
          }
          break;
        default:
          throw new Error("Unknown struct type " + tagMetaData.structName)
      }
    } else {
      throw new Error("No tagMetaData")
    }

    return tag;
  };
}