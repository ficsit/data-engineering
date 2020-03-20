import { cleanString, stripNullTerminator } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';
import Ue4pakBasePropertyType from "./marker/ue4pakBasePropertyType";

class TextProperty implements Ue4pakBasePropertyType  {
  private name: string;
  private sourceString: string;

  constructor(property: SatisfactoryPropertyType) {

    const { name, tag } = property;
    this.sourceString = cleanString(tag.source_string);
    this.name = stripNullTerminator(name);
  }
}

export default TextProperty;
