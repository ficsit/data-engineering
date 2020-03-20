import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';
import Ue4pakBasePropertyType from "./marker/ue4pakBasePropertyType";

class BoolProperty implements Ue4pakBasePropertyType  {
  private name: string;
  private tag: boolean;

  constructor(property: SatisfactoryPropertyType) {

    const { name, tag } = property;

    this.name = cleanString(name);
    this.tag = tag;
  }
}

export default BoolProperty;
