import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

class StructProperty {
  private name: string;

  constructor(property: SatisfactoryPropertyType) {
    const {name} = property;

    // if (name === "mInventoryIcon\u0000") {
    //   if (property.tag_data.type === 'SlateBrush\u0000') {
    //     (property.tag || []).forEach((tag: any) => {
    //       if (tag.name === "ResourceObject\u0000") {
    //         I'm not sure why this exists. Only some objects
    //        have an inventory icon that's a resourceObject.
    //         console.log(JSON.stringify(property, null, 2));
    //       }
    //     })
    //
    //   }
    // }

    // TODO: These are the struct types.
    //   'Guid',
    //   'SlateBrush',
    //   'ItemView',
    //   'Vector',
    //   'FoundationSideSelectionFlags',
    //   'BodyInstance',
    //   'Rotator',
    //   'IntPoint',
    //   'PointerToUberGraphFrame',
    //   'SoftClassPath',
    //   'ActorTickFunction',
    //   'FactoryTickFunction',
    //   'ActorComponentTickFunction',
    //   'PostProcessSettings',
    //   'TimerHandle',
    //   'SplineCurves',
    //   'RichCurve',
    //   'SingleAnimationPlayData',
    //   'Color'

    this.name = cleanString(name);
  }
}

export default StructProperty;