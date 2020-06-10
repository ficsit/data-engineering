/**
 * Parser and content of a .uexp file (serialized UObjectBase export).
 */
import { UExpFile } from '../UExpFile';
import { UDataTable } from '../structs/uexp/UDataTable';
import { UObjectBase } from '../structs/uexp/UObjectBase';

export class DataTableExp extends UExpFile {
  constructor(public exports: UObjectBase[]) {
    super(exports);
  }

  getData() {
    for (const exp of exports) {
      if (exp instanceof UDataTable) {
        return exp.rowMap;
      }
    }

    throw new Error('No datatable data found in DataTable');
  }
}
