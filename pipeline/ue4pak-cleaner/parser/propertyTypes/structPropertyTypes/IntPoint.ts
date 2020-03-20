import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class IntPoint implements Ue4pakBasePropertyType {
  private name: string;
  private x: string;
  private y: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.x = tag.value.x;
    this.y = tag.value.y;
  }
}

export default IntPoint;
