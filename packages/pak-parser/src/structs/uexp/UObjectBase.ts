import { UAssetFile } from '../../UAssetFile';
import { UInt32 } from '../../primitive';
import { Reader } from '../../readers';
import { BlacklistSerializer } from '../../serializers/BlacklistSerializer';
import { Shape } from '../../util/parsers';
import { FPropertyTag, readFPropertyTagLoop } from '../FPropertyTag';
import { FGuid } from '../UScript/UScriptStruct/FGuid';

/**
 * Parser and content of a .uexp file (serialized UObjectBase exports).
 */
export class UObjectBase extends BlacklistSerializer {
  propertyList = [] as Shape<typeof FPropertyTag>[];
  guid = null as any;
  reader: Reader;

  blacklistedPropertyNames = ['reader', 'asset'];

  constructor(
    reader: Reader,
    public asset: UAssetFile,
    public exportTypes: string,
    private readGuid: boolean,
  ) {
    super();
    this.reader = reader;
  }

  async initialize() {
    this.propertyList = await readFPropertyTagLoop(this.reader, this.asset);

    if (this.readGuid && (await this.reader.read(UInt32)) !== 0) {
      if (this.reader.position + 16 <= this.reader.getSize()) {
        this.guid = await this.reader.read(FGuid);
      }
    }
  }
}
