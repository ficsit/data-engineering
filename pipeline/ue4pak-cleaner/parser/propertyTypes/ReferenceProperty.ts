import { cleanString } from '../../utils/textUtils';
import { SatisfactoryReferenceType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';

class ReferenceProperty implements Ue4pakBasePropertyType {
  private className: string;
  private objectName: string;

  constructor(property: SatisfactoryReferenceType) {
    const { class_name: className, object_name: objectName } = property;

    this.className = cleanString(className);
    this.objectName = cleanString(objectName);
  }
}

export default ReferenceProperty;
