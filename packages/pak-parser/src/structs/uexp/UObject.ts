import { ObjectFile } from '../../ObjectFile';
import { UInt32 } from '../../primitive';
import { Reader } from '../../readers';
import { Shape } from '../../util/parsers';
import { FPropertyTag, readFPropertyTagLoop } from '../FPropertyTag';
import { FGuid } from '../properties/structs/FGuid';

/**
 * Parser and content of a .uexp file (serialized UObject exports).
 */
export class UObject {
  propertyList = [] as Shape<typeof FPropertyTag>[];
  guid = null;

  constructor(
    private reader: Reader,
    public asset: ObjectFile,
    public exportTypes: string,
    private readGuid: boolean,
  ) {}

  async initialize() {
    this.propertyList = await readFPropertyTagLoop(this.reader, this.asset);

    if (this.readGuid && (await this.reader.read(UInt32)) !== 0) {
      if (this.reader.position + 16 <= this.reader.getSize()) {
        this.guid = await this.reader.read(FGuid);
      }
    }
  }
}
