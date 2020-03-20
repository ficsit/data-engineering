import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';

class Vector2D {
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

export default Vector2D;