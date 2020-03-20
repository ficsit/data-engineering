import {cleanString} from '../../utils/textUtils';
import {SatisfactoryPropertyType} from '../propertyParser';
import Ue4pakBasePropertyType from "./marker/ue4pakBasePropertyType";

class SoftObjectProperty implements Ue4pakBasePropertyType  {
  private name: string;
  private assetPathName: string;
  private subPath: string;

  constructor(property: SatisfactoryPropertyType) {

    const { name, tag } = property;

    this.name = cleanString(name);
    this.assetPathName = cleanString(tag.asset_path_name);
    this.subPath = cleanString(tag.sub_path);
  }
}

export default SoftObjectProperty;
