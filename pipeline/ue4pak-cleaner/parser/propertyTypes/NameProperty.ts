import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

class NameProperty {
  private name: string;
  private tag: string;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag} = property;

    this.name = cleanString(name);
    this.tag = cleanString(tag);
  }
}

export default NameProperty;