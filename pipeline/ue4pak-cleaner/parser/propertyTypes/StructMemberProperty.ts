import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class StructMemberProperty implements Ue4pakBasePropertyType {
  private name: string;
  private tag: string;
  private tagData: any;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag_data: tagData, tag } = property;
    this.name = cleanString(name);
    if (typeof tag === 'string') {
      this.tag = cleanString(tag);
    } else {
      this.tag = tag;
    }

    this.tagData = cleanString(tagData);
  }
}

export default StructMemberProperty;
