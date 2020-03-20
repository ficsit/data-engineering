import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class NameProperty implements Ue4pakBasePropertyType {
  private name: string;
  private tag: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.tag = cleanString(tag);
  }
}

export default NameProperty;
