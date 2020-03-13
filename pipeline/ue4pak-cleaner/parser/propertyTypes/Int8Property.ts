import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

class Int8Property {
  private name: string;
  private tag: number;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.tag = tag;
  }
}

export default Int8Property;
