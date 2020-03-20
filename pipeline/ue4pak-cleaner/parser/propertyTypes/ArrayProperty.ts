/* eslint-disable  @typescript-eslint/camelcase */
import produce from 'immer';

import { cleanString, stripNullTerminator } from '../../utils/textUtils';
import { SatisfactoryPropertyType } from '../propertyParser';

import EnumProperty from './EnumProperty';
import IntProperty from './IntProperty';
import NameProperty from './NameProperty';
import ObjectProperty from './ObjectProperty';
import SoftObjectProperty from './SoftObjectProperty';
import StructProperty from './StructProperty';
import Ue4pakBasePropertyType from "./marker/ue4pakBasePropertyType";

class ArrayProperty implements Ue4pakBasePropertyType {
  private name: string;
  private items: any[];

  constructor(property: SatisfactoryPropertyType) {

    const { name, tag_data: tagData, tag } = property;

    // The subtypes of this object are typed according to tagData.
    const subTypes = stripNullTerminator(tagData);

    switch (subTypes) {
      case 'ObjectProperty':
        // We can ignore things that don't have a reference because
        // they actually don't exist :(
        const possibleObjectTags: ObjectProperty[] = (tag.filter((item: any) => item.reference) as any[]).map(
          (item: any): ObjectProperty => {
            return new ObjectProperty({
              name,
              tag: item,
              property_type: null,
              tag_data: null,
              size: null,
              array_index: null,
            });
          },
        );
        break;
      case 'NameProperty':
        const possibleNameTags: NameProperty[] = tag.map(
          (item: any): NameProperty => {
            return new NameProperty({
              name,
              tag: item,
              property_type: null,
              tag_data: null,
              size: null,
              array_index: null,
            });
          },
        );
        break;
      case 'StructProperty':
        const possibleStructTags: StructProperty[] = tag.map(
          (item: any): StructProperty => {
            const newPropertyType = (produce(item.inner_tag_data, draftState => {
              draftState.tag = item.properties;
            }) as unknown) as SatisfactoryPropertyType;

            return new StructProperty(newPropertyType);
          },
        );
        break;
      case 'SoftObjectProperty':
        const possibleSoftObjectProperties: SoftObjectProperty[] = tag.map(
          (item: any): SoftObjectProperty => {
            return new SoftObjectProperty({
              name,
              tag: item,
              property_type: null,
              tag_data: null,
              size: null,
              array_index: null,
            });
          },
        );
        break;
      case 'EnumProperty':
        const possibleEnumProperty: EnumProperty[] = tag.map(
          (item: any): EnumProperty => {
            const tagData = item.split('::')[0];
            return new EnumProperty({
              name,
              tag: item,
              property_type: null,
              tag_data: tagData,
              size: null,
              array_index: null,
            });
          },
        );
        break;
      case 'IntProperty':
        const possibleIntProperty: IntProperty[] = tag.map(
          (item: any): IntProperty => {
            return new IntProperty({
              name,
              tag: item,
              property_type: null,
              tag_data: null,
              size: null,
              array_index: null,
            });
          },
        );
        break;
      default:
        throw new Error(`New array sub-property: ${subTypes}`);
        break;
    }



    this.name = cleanString(name);
  }
}

export default ArrayProperty;
