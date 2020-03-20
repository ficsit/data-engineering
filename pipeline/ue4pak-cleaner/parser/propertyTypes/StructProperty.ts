import { cleanString } from '../../utils/textUtils';
import processProperty, { SatisfactoryPropertyType } from '../propertyParser';

import Ue4pakBasePropertyType from './marker/ue4pakBasePropertyType';
import Color from './structPropertyTypes/Color';
import Guid from './structPropertyTypes/Guid';
import IntPoint from './structPropertyTypes/IntPoint';
import LinearColor from './structPropertyTypes/LinearColor';
import PointerToUberGraphFrame from './structPropertyTypes/PointerToUberGraphFrame';
import RichCurveKey from './structPropertyTypes/RichCurveKey';
import Rotator from './structPropertyTypes/Rotator';
import SoftClassPath from './structPropertyTypes/SoftClassPath';
import Vector from './structPropertyTypes/Vector';
import Vector2D from './structPropertyTypes/Vector2D';

class StructProperty implements Ue4pakBasePropertyType {
  private name: string;

  //TODO: make this inherit from some base class somewhere
  private members: any;
  constructor(property: SatisfactoryPropertyType) {
    const { name, tag_data: tagData, tag } = property;

    if (tag.length !== undefined) {
      // it's a list;
      tag.forEach((tagItem: any) => {
        const convertedTagItem = processProperty(tagItem);
        // console.log(convertedTagItem);
      });
    } else {
      // it's not a list, and there's always {type, value}. tagData.type === tag.type always in this scenario.
      let parsedTagItem;
      switch (cleanString(tag.type)) {
        case 'Vector':
          parsedTagItem = new Vector(property);
          break;
        case 'Vector2D':
          parsedTagItem = new Vector2D(property);
          break;
        case 'Rotator':
          parsedTagItem = new Rotator(property);
          break;
        case 'Guid':
          parsedTagItem = new Guid(property);
          break;
        case 'Color':
          parsedTagItem = new Color(property);
          break;
        case 'RichCurveKey':
          parsedTagItem = new RichCurveKey(property);
          break;
        case 'IntPoint':
          parsedTagItem = new IntPoint(property);
          break;
        case 'LinearColor':
          parsedTagItem = new LinearColor(property);
          break;
        case 'PointerToUberGraphFrame':
          parsedTagItem = new PointerToUberGraphFrame(property);
          break;
        case 'SoftClassPath':
          parsedTagItem = new SoftClassPath(property);
          break;
        default:
          throw new Error(`Unimplemented struct type ${tag.type}`);
      }
    }

    this.name = cleanString(name);
  }
}

export default StructProperty;
