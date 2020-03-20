import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class UInt64Property implements Ue4pakBasePropertyType {
  private name: string;
  private tag: number;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.tag = tag;
  }
}

export default UInt64Property;