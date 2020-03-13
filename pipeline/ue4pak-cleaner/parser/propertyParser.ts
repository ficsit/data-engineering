import TextProperty from "./propertyTypes/TextProperty";
import {stripNullTerminator} from "../utils/textUtils";
import ObjectProperty from "./propertyTypes/ObjectProperty";
import StructProperty from "./propertyTypes/StructProperty";
import NameProperty from "./propertyTypes/NameProperty";
import FloatProperty from "./propertyTypes/FloatProperty";
import BoolProperty from "./propertyTypes/BoolProperty";
import ByteProperty from "./propertyTypes/ByteProperty";
import EnumProperty from "./propertyTypes/EnumProperty";
import IntProperty from "./propertyTypes/IntProperty";
import Int8Property from "./propertyTypes/Int8Property";
import ArrayProperty from "./propertyTypes/ArrayProperty";

export interface SatisfactoryPropertyType {
  name: string,
  property_type: string,
  tag_data: any,
  size: number,
  array_index: number,
  tag: any
}

const processProperty = (property: SatisfactoryPropertyType, overriddenPropertyType: string = null): any => {
  const {property_type: propertyType} = property;

  const cleanedPropertyType = overriddenPropertyType !==
  null ? overriddenPropertyType : stripNullTerminator(propertyType);

  switch (cleanedPropertyType) {
    case 'ObjectProperty':
      return new ObjectProperty(property);
    case 'StructProperty':
      return new StructProperty(property);
    case 'NameProperty':
      return new NameProperty(property);
    case 'FloatProperty':
      return new FloatProperty(property);
    case 'TextProperty':
      return new TextProperty(property);
    case 'ArrayProperty':
      return new ArrayProperty(property);
    case 'BoolProperty':
      return new BoolProperty(property);
    case 'ByteProperty':
      return new ByteProperty(property);
    case 'EnumProperty':
      return new EnumProperty(property);
    case 'IntProperty':
      return new IntProperty(property);
    case 'Int8Property':
      return new Int8Property(property);
    default:
      throw new Error(`Unimplemented property type: ${cleanedPropertyType}`)
  }
};

export default processProperty;