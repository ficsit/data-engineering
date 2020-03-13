import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

class ByteProperty {
  private name: string;
  private tag: string;
  private tagData: string;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag, tag_data: tagData} = property;

    //TODO: I'm still not sure why the tag is mixed here. Should I tread everything as bytes?
    this.name = cleanString(name);

    if (typeof tag === 'string') {
      this.tag = cleanString(tag);
    } else {
      this.tag = tag;
    }
    this.tagData = cleanString(tagData);
  }
}

export default ByteProperty;