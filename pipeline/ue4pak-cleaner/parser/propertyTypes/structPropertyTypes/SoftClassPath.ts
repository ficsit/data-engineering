import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class SoftClassPath implements Ue4pakBasePropertyType {
  private name: string;
  private value: any;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    //TODO: figure out what the heck PointerToUberGraphFrame contains
    this.name = cleanString(name);
    this.value = tag.value;
  }
}

export default SoftClassPath;
