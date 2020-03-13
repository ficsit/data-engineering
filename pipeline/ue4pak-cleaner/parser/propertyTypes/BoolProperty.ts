import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

class BoolProperty {
  private name: string;
  private tag: boolean;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag} = property;

    this.name = cleanString(name);
    this.tag = tag;
  }
}

export default BoolProperty;