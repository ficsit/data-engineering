import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class EnumProperty implements Ue4pakBasePropertyType {
  private name: string;
  private tag: string;
  private tagData: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag, tag_data: tagData } = property;

    //TODO: Probably gather all enums together to stitch together?
    this.name = cleanString(name);
    this.tag = cleanString(tag);
    this.tagData = cleanString(tagData);
  }
}

export default EnumProperty;
