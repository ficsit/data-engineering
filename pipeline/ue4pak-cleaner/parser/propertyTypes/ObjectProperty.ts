import { cleanString } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class ObjectProperty implements Ue4pakBasePropertyType {
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

      // TODO: should this be checked first?
      if (!this.className) {
        this.className = cleanString(tag.reference.class_index.reference.object_name);
      }

      if (!this.classPackage) {
        this.classPackage = cleanString(tag.reference.class_index.reference.class_package);
      }
    }

    // TODO: add some custom processing for things such as dataTables.
  }
}

export default ObjectProperty;
