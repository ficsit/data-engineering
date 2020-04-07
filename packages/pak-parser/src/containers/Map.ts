import { UInt32 } from '../primitive/integers';
import { Reader } from '../readers';
import { Parser } from '../util/parsers';

// https://github.com/SatisfactoryModdingUE/UnrealEngine/blob/4.22-CSS/Engine/Source/Runtime/Core/Public/Containers/Array.h#L1074-L1133
export function Array<TShape>(parser: Parser<TShape>): Parser<TShape[]> {
  return async function ArrayParser(reader: Reader) {
    const length = await reader.read(UInt32);
    return await reader.readList(length, parser);
  };
}