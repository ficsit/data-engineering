import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

class EnumProperty {
  private name: string;
  private tag: string;
  private tagData: string;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag, tag_data: tagData} = property;

    //TODO: Probably gather all enums together to stitch together?
    this.name = cleanString(name);
    this.tag = cleanString(tag);
    this.tagData = cleanString(tagData);
  }
}

export default EnumProperty;