import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

class ObjectProperty {
  private name: string;
  private objectName: string = null;
  private className: string = null;
  private classPackage: string = null;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);

    if (tag.reference) {
      this.objectName = cleanString(tag.reference.object_name);
      this.className = cleanString(tag.reference.class_name);
      this.classPackage = cleanString(tag.reference.class_package);
    }
  }
}

export default ObjectProperty;
