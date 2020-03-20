import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class Rotator implements Ue4pakBasePropertyType {
  private name: string;
  private pitch: string;
  private yaw: string;
  private roll: string;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.pitch = tag.value.pitch;
    this.yaw = tag.value.yaw;
    this.roll = tag.value.roll;
  }
}

export default Rotator;
