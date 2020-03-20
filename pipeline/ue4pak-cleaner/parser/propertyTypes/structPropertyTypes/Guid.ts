import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class Guid implements Ue4pakBasePropertyType {
  private name: string;
  private a: string;
  private b: string;
  private c: string;
  private d: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.a = tag.value.a;
    this.b = tag.value.b;
    this.c = tag.value.c;
    this.d = tag.value.d;
  }
}

export default Guid;
