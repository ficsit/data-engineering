import {Reader} from "../readers";
import {Shape} from "../util/parsers";
import {FPackageFileSummary} from "./FPackageFileSummary";
import {FName, NameMap} from "./FName";
import {ByteBoolean, Int16, Int32, Int64, Int8, UInt16, UInt32, UInt64} from "../primitive";
import {FGuid} from "./FGuid";
import {StructPropertyTagMetaData} from "./properties/StructProperty";
import {BoolProperty} from "./properties/BoolProperry";
import {ByteProperty, BytePropertyTagMetaData} from "./properties/ByteProperty";
import {EnumProperty, EnumPropertyTagMetaData} from "./properties/EnumProperty";
import {ArrayProperty, ArrayPropertyTagMetaData} from "./properties/ArrayProperty";
import {SetPropertyTagMetaData} from "./properties/SetProperty";
import {MapPropertyTagMetaData} from "./properties/MapProperty";
import {Double, Float} from "../primitive/decimals";

export type TagMetaData = Shape<typeof StructPropertyTagMetaData> | Shape<typeof BytePropertyTagMetaData> | Shape<typeof EnumPropertyTagMetaData> |
  Shape<typeof ArrayPropertyTagMetaData> | Shape<typeof SetPropertyTagMetaData> | Shape<typeof MapPropertyTagMetaData> | Shape<typeof ByteBoolean>;

// https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L80-L169
export function FPropertyTag(assetSummary: Shape<typeof FPackageFileSummary>, names: NameMap, shouldRead: boolean, depth: number) {
  return async function (reader: Reader) {
    let name = await reader.read(FName(names));

    // https://docs.unrealengine.com/en-US/API/Runtime/Core/UObject/EName/index.html
    // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L90
    if (name === 'None') {
      return null;
    }


    const baseTag = {
      name,
      propertyType: await reader.read(FName(names)),
      size: await reader.read(Int32),
      arrayIndex: await reader.read(Int32)
    };

    let tagMetaData: TagMetaData = null;

    switch(baseTag.propertyType) {

      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L112-L119
      case "StructProperty":
        tagMetaData = await reader.read(StructPropertyTagMetaData(names));
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L121-L132
      case "BoolProperty":
        // This should actually be switched with the tag itself.
        tagMetaData = await reader.read(ByteBoolean);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L134-L137
      case 'ByteProperty':
        tagMetaData = await reader.read(BytePropertyTagMetaData(names));
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L134-L137
      case 'EnumProperty':
        tagMetaData = await reader.read(EnumPropertyTagMetaData(names));
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L139-L145
      case 'ArrayProperty':
        tagMetaData = await reader.read(ArrayPropertyTagMetaData(names));
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L148-L151
      case 'SetProperty':
        tagMetaData = await reader.read(SetPropertyTagMetaData(names));
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyTag.cpp#L152-L156
      case 'MapProperty':
        tagMetaData = await reader.read(MapPropertyTagMetaData(names));
        break;
      default:
        break;
    }

    const hasGuid = await reader.read(ByteBoolean);
    let propertyGuid = null;

    if (hasGuid) {
      propertyGuid = await reader.read(FGuid);
    }

    let tag = null;


    if (shouldRead && baseTag.size > 0) {
      reader.trackReads();
      tag = await reader.read(Tag(baseTag.size, assetSummary, baseTag.propertyType, tagMetaData, baseTag.name, depth, names));

      if (reader.getTrackedBytesRead() !== baseTag.size) {
        console.error(`${baseTag.name} (${baseTag.propertyType}) property not read fully, ${reader.getTrackedBytesRead()}/${baseTag.size} bytes read.`);

        if (reader.getTrackedBytesRead() > baseTag.size) {
          throw new Error("More bytes were read than available!")
        } else {
          await reader.readBytes(baseTag.size - reader.getTrackedBytesRead());
        }
      }

      reader.untrackReads();
    }

    // Swap the meta and the data fields for boolean
    if (baseTag.propertyType === 'Boolean') {
      tag = tagMetaData;
      tagMetaData = null;
    }

    console.log("THIS INDEX IS", baseTag.arrayIndex);

    return {
      ...baseTag,
      tagMetaData,
      propertyGuid,
      tag
    }
  }
}

function Tag(size: number, assetSummary: Shape<typeof FPackageFileSummary>, propertyType: string, tagMetaData: TagMetaData, name: string, depth: number, names: NameMap) {
  return async function (reader: Reader) {
    let tag = null;
    switch(propertyType) {
      case 'BooleanProperty':
        break;
      // return null since it was already parsed above.
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1336-L1338
      case 'Int8Property':
        tag = await reader.read(Int8);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1340-L1342
      case 'Int16Property':
        tag = await reader.read(Int16);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1344-L1346
      case 'IntProperty':
        tag = await reader.read(Int32);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1348-L1350
      case 'Int64Property':
        tag = await reader.read(Int64);
        break;
      // Deviates from this: https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1352-L1362
      case 'ByteProperty':
        if (size === 4 || size === -4) {
          tag = await reader.read(UInt32);
        } else if (size == 8) {
          // Is this actually an enum?
          // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyByte.cpp#L70-L79
          tag = await reader.read(EnumProperty(names));
        } else if (size === 1) {
          tag = await reader.read(ByteProperty);
        } else {
          throw new Error(`ByteProperty cannot be read with size ${size}`);
        }
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1364-L1369
      case 'EnumProperty':
        if (size === 0) {
          // It's "None" which isn't serialized
          break;
        } else if (size == 8) {
          // Is actually an enum
          tag = await reader.read(EnumProperty(names));
        } else {
          throw new Error(`EnumProperty cannot be read with size ${size}`);
        }
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1371-L1373
      case 'UInt16Property':
        tag = await reader.read(UInt16);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1375-L1377
      case 'UInt32Property':
        tag = await reader.read(UInt32);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1379-L1381
      case 'UInt64Property':
        tag = await reader.read(UInt64);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1383-L1385
      case 'FloatProperty':
        tag = await reader.read(Float);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/4f421ab90c6e9ff4f0b5c9ec4de6dcd3297ad488/Engine/Source/Runtime/CoreUObject/Public/UObject/UnrealType.h#L1387-L1389
      case 'DoubleProperty':
        tag = await reader.read(Double);
        break;
      // https://github.com/EpicGames/UnrealEngine/blob/6c20d9831a968ad3cb156442bebb41a883e62152/Engine/Source/Runtime/CoreUObject/Private/UObject/PropertyArray.cpp#L61-L243
      case 'ArrayProperty':
        tag = await reader.read(ArrayProperty(assetSummary, names, tagMetaData));
        break;
      default:
        throw new Error(`Unparsed Property type ${propertyType}`);
    }
  }
}

