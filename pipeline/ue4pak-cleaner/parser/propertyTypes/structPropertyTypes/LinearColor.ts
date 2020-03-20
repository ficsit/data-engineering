import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class LinearColor implements Ue4pakBasePropertyType {
  private name: string;
  private r: string;
  private g: string;
  private b: string;
  private a: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.r = tag.value.a;
    this.g = tag.value.b;
    this.b = tag.value.c;
    this.a = tag.value.d;
  }
}

export default LinearColor;
