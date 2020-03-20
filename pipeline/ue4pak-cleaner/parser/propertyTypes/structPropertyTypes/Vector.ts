import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class Vector implements Ue4pakBasePropertyType {
  private name: string;
  private x: string;
  private y: string;
  private z: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.x = tag.value.x;
    this.y = tag.value.y;
    this.z = tag.value.z;
  }
}

export default Vector;
