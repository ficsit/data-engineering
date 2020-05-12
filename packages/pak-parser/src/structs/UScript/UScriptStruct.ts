import { UAssetFile } from '../../UAssetFile';
import { Reader } from '../../readers';
import { Shape } from '../../util/parsers';
import { FName, NameMap } from '../FName';

import { FGuid } from './UScriptStruct/FGuid';
import { FIntPoint } from './UScriptStruct/FIntPoint';
import { FRotator } from './UScriptStruct/FRotator';
import { FStructFallback } from './UScriptStruct/FStructFallback';
import { FVector } from './UScriptStruct/FVector';
import { FVector2D } from './UScriptStruct/FVector2D';

export function StructPropertyTagMetaData(names: NameMap) {
  return async function StructParser(reader: Reader) {
    let result = {
      structName: '',
      structGuid: {},
    };
    try {
      result.structName = await reader.read(FName(names));
      result.structGuid = await reader.read(FGuid);
    } catch (e) {
      console.debug('StructPropertyMetaData could not be properly read');
      result = null;
    }

    return result;
  };
}

export function UScriptStruct(
  tagMetaData: Shape<typeof StructPropertyTagMetaData>,
  asset: UAssetFile,
  depth: number,
) {
  return async function StructParser(reader: Reader) {
    // Not generic StructProperty
    let tag = null;
    if (tagMetaData) {
      switch (tagMetaData.structName) {
        case 'IntPoint':
          tag = await reader.read(FIntPoint);
          break;
        case 'Guid':
          tag = await reader.read(FGuid);
          break;
        case 'Vector':
          tag = await reader.read(FVector);
          break;
        case 'Vector2D':
          tag = await reader.read(FVector2D);
          break;
        case 'Rotator':
          tag = await reader.read(FRotator);
          break;

        //Whitelisted fallback entries. TODO: fix these? :(
        case 'BodyInstance':
        case 'CollisionResponse':
        case 'ResponseChannel':
        case 'SlateBrush':
        case 'ItemView':
        case 'ItemAmount':
        case 'PointerToUberGraphFrame':
        case 'ParticleMap':
          return await reader.read(FStructFallback(asset));
        default:
          throw new Error('Unknown struct type ' + tagMetaData.structName);
      }
    } else {
      throw new Error('No tagMetaData');
    }

    return tag;
  };
}
