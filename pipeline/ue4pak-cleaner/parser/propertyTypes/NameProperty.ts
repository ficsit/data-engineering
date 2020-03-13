import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

class NameProperty {
  private name: string;
  private tag: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.tag = cleanString(tag);
  }
}

export default NameProperty;
