import { cleanString } from '../../../utils/textUtils';
import { SatisfactoryPropertyType } from '../../propertyParser';
import Ue4pakBasePropertyType from '../marker/ue4pakBasePropertyType';

class RichCurveKey implements Ue4pakBasePropertyType {
  private name: string;
  private interpMode: number;
  private tangentMode: number;
  private tangentWeightMode: number;
  private time: number;
  private arriveTangent: number;
  private arriveTangentWeight: number;
  private leaveTangent: number;
  private leaveTangentWeight: number;

  constructor(property: SatisfactoryPropertyType) {
    const { name, tag } = property;

    this.name = cleanString(name);
    this.interpMode = tag.value.interp_mode;
    this.tangentMode = tag.value.tangent_mode;
    this.tangentWeightMode = tag.value.tangent_weight_mode;
    this.time = tag.value.time;
    this.arriveTangent = tag.value.arrive_tangent;
    this.arriveTangentWeight = tag.value.arrive_tangent_weight;
    this.leaveTangent = tag.value.leave_tangent;
    this.leaveTangentWeight = tag.value.leave_tangent_weight;
  }
}

export default RichCurveKey;
