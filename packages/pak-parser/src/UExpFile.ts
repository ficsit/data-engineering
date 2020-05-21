import { BlacklistSerializer } from './serializers/BlacklistSerializer';
import { UObjectBase } from './structs/uexp/UObjectBase';

/**
 * Parser and content of a .uexp file (serialized UObjectBase export).
 */
export class UExpFile extends BlacklistSerializer {
  constructor(public exports: UObjectBase[]) {
    super();
  }
}
