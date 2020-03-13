import { cleanString, stripNullTerminator } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

class TextProperty {
  private name: string;
  private sourceString: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;
    this.sourceString = cleanString(tag.source_string);
    this.name = stripNullTerminator(name);
  }
}

export default TextProperty;
