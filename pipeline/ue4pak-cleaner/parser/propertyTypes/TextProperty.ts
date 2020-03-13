import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString, stripNullTerminator} from "../../utils/textUtils";

class TextProperty {
  private name: string;
  private sourceString: string;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag} = property;
    this.sourceString = cleanString(tag.source_string);
    this.name = stripNullTerminator(name);
  }
}

export default TextProperty;