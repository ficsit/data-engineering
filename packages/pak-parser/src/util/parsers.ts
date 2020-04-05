import { Reader } from '../readers';

export interface Parser<TShape> {
  (reader: Reader): Promise<TShape>;
}

export type Shape<TParser> = TParser extends Parser<infer TShape>
  ? TShape
  : TParser extends (...args: any[]) => Parser<infer TShape>
  ? TShape
  : never;
