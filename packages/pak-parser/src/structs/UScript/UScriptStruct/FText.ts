import { FString } from '../../../containers';
import { Int32, Int64, UInt32, UInt8 } from '../../../primitive';
import { Reader } from '../../../readers';
import { Shape } from '../../../util/parsers';
import { FName, FNameEntrySerialized, NameMap } from '../../FName';
import { FFormatArgumentValue } from '../FFormatArgumentValue';

enum ETextHistoryType {
  None = -1,
  Base = 0,
  NamedFormat,
  OrderedFormat,
  ArgumentFormat,
  AsNumber,
  AsPercent,
  AsCurrency,
  AsDate,
  AsTime,
  AsDateTime,
  Transform,
  StringTableEntry,
  TextGenerator,
  // Add new enum types at the end only! They are serialized by index.
}

async function readOrderedFormat(reader: Reader, names: Shape<typeof FNameEntrySerialized>[]) {
  const SourceFmt: any = await reader.read(FText(names));
  const numEntries = await reader.read(Int32);
  const Arguments: any[] = [];
  for (let i = 0; i < numEntries; i++) {
    Arguments.push(await reader.read(FFormatArgumentValue(names)));
  }
  return {
    SourceFmt,
    Arguments,
  };
}

export function FText(names: NameMap) {
  return async function FTextParser(reader: Reader): Promise<any> {
    // These are flags
    await reader.read(UInt32);
    const historyType = await reader.read(UInt8);
    switch (historyType) {
      case ETextHistoryType.Base:
        return {
          namespace: (await reader.read(FString)) || '',
          key: await reader.read(FString),
          sourceString: await reader.read(FString),
        };
      case ETextHistoryType.AsDateTime:
        return {
          SourceDateTime: {
            Ticks: await reader.read(Int64),
          },
          DateStyle: await reader.read(UInt8),
          TimeStyle: await reader.read(UInt8),
          TimeZone: await reader.read(FString),
          TargetCulture: await reader.read(FString),
        };
      // https://github.com/EpicGames/UnrealEngine/blob/bf95c2cbc703123e08ab54e3ceccdd47e48d224a/Engine/Source/Runtime/Core/Private/Internationalization/TextHistory.cpp
      // https://github.com/EpicGames/UnrealEngine/blob/bf95c2cbc703123e08ab54e3ceccdd47e48d224a/Engine/Source/Runtime/Core/Private/Internationalization/TextData.h
      case ETextHistoryType.NamedFormat:
      case ETextHistoryType.OrderedFormat:
        return await readOrderedFormat(reader, names);
      case ETextHistoryType.AsNumber:
      case ETextHistoryType.AsPercent:
      case ETextHistoryType.AsCurrency:
        return {
          SourceValue: await reader.read(FFormatArgumentValue(names)),
          TimeZone: await reader.read(FString),
          TargetCulture: await reader.read(FString),
        };
      case ETextHistoryType.StringTableEntry:
        return {
          TableId: await reader.read(FName(names)),
          Key: await reader.read(FString),
        };
      case ETextHistoryType.ArgumentFormat:
      case ETextHistoryType.AsDate:
      case ETextHistoryType.AsTime:
      case ETextHistoryType.Transform:
      case ETextHistoryType.TextGenerator:
        throw new Error('History type ' + historyType + ' not supported');
      default:
        return null;
    }
  };
}
