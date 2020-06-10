import { Int32 } from '../../../primitive';
import { Reader } from '../../../readers';
import { FName, NameMap } from '../../FName';

export function FMaterialInput(names: NameMap) {
  return async function FMaterialInputReader(reader: Reader) {
    return {
      OutputIndex: await reader.read(Int32),
      InputName: await reader.read(FName(names)),
      Mask: await reader.read(Int32),
      MaskR: await reader.read(Int32),
      MaskG: await reader.read(Int32),
      MaskB: await reader.read(Int32),
      MaskA: await reader.read(Int32),
      ExpressionName: await reader.read(FName(names)),
    };
  };
}
