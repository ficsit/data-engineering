import {SatisfactoryPropertyType} from "../propertyParser";
import {cleanString} from "../../utils/textUtils";

const allNames = new Set();

class ArrayProperty {
  private name: string;
  private tag_data: number;

  constructor(property: SatisfactoryPropertyType) {
    const {name, tag_data: tagData, tag} = property;

    // The subtypes of this object are typed according to tagData.
    const subTypes = tagData;

    // 'ObjectProperty\u0000',
    // possible names:
    // 'mSubCategories\u0000',
    // 'RootNodes\u0000',
    // 'AllNodes\u0000',
    // 'ChildNodes\u0000',
    // 'OverrideMaterials\u0000',
    // 'DynamicBindingObjects\u0000',
    // 'mAllowedResources\u0000',
    // 'Timelines\u0000',
    // 'Meshes\u0000',
    // 'mPlatformConnections\u0000'


    //   'NameProperty\u0000',
    // Possible names:  'mLegSocketNames\u0000', 'ComponentTags\u0000', 'Tags\u0000'
    // {
    //   "name": "mLegSocketNames\u0000",
    //   "property_type": "ArrayProperty\u0000",
    //   "tag_data": "NameProperty\u0000",
    //   "size": 68,
    //   "array_index": 0,
    //   "property_guid": null,
    //   "tag": [
    //   "Foot_01\u0000",
    //   "Foot_02\u0000",
    //   "Foot_03\u0000",
    //   "Foot_04\u0000",
    //   "Foot_05\u0000",
    //   "Foot_06\u0000",
    //   "Foot_07\u0000",
    //   "Foot_08\u0000"
    // ]
    // }


    //   'StructProperty\u0000',
    // 'mSortRules\u0000',
    //   'mHeightMeshes\u0000',
    //   'ComponentDelegateBindings\u0000',
    //   'Records\u0000',
    //   'mParticleMap\u0000',
    //   'FloatTracks\u0000',
    //   'mFluidNames\u0000',
    //   'MetaDataArray\u0000'
    // For FluidNames:
    // {
    //   "name": "mFluidNames\u0000",
    //   "property_type": "ArrayProperty\u0000",
    //   "tag_data": "StructProperty\u0000",
    //   "size": 474,
    //   "array_index": 0,
    //   "property_guid": null,
    //   "tag": [
    //   {
    //     "inner_tag_data": {
    //       "name": "mFluidNames\u0000",
    //       "property_type": "StructProperty\u0000",
    //       "tag_data": {
    //         "type": "StringPair\u0000",
    //         "guid": {
    //           "a": 0,
    //           "b": 0,
    //           "c": 0,
    //           "d": 0
    //         }
    //       },
    //       "size": 421,
    //       "array_index": 0,
    //       "property_guid": null,
    //       "tag": null
    //     },
    //     "properties": [
    //       {
    //         "name": "WwiseSafeName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 14,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Crude_Oil\u0000"
    //       },
    //       {
    //         "name": "ActualName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 14,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Crude Oil\u0000"
    //       }
    //     ]
    //   },
    //   {
    //     "inner_tag_data": {
    //       "name": "mFluidNames\u0000",
    //       "property_type": "StructProperty\u0000",
    //       "tag_data": {
    //         "type": "StringPair\u0000",
    //         "guid": {
    //           "a": 0,
    //           "b": 0,
    //           "c": 0,
    //           "d": 0
    //         }
    //       },
    //       "size": 421,
    //       "array_index": 0,
    //       "property_guid": null,
    //       "tag": null
    //     },
    //     "properties": [
    //       {
    //         "name": "WwiseSafeName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 9,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Fuel\u0000"
    //       },
    //       {
    //         "name": "ActualName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 9,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Fuel\u0000"
    //       }
    //     ]
    //   },
    //   {
    //     "inner_tag_data": {
    //       "name": "mFluidNames\u0000",
    //       "property_type": "StructProperty\u0000",
    //       "tag_data": {
    //         "type": "StringPair\u0000",
    //         "guid": {
    //           "a": 0,
    //           "b": 0,
    //           "c": 0,
    //           "d": 0
    //         }
    //       },
    //       "size": 421,
    //       "array_index": 0,
    //       "property_guid": null,
    //       "tag": null
    //     },
    //     "properties": [
    //       {
    //         "name": "WwiseSafeName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 22,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Heavy_Oil_Residue\u0000"
    //       },
    //       {
    //         "name": "ActualName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 22,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Heavy Oil Residue\u0000"
    //       }
    //     ]
    //   },
    //   {
    //     "inner_tag_data": {
    //       "name": "mFluidNames\u0000",
    //       "property_type": "StructProperty\u0000",
    //       "tag_data": {
    //         "type": "StringPair\u0000",
    //         "guid": {
    //           "a": 0,
    //           "b": 0,
    //           "c": 0,
    //           "d": 0
    //         }
    //       },
    //       "size": 421,
    //       "array_index": 0,
    //       "property_guid": null,
    //       "tag": null
    //     },
    //     "properties": [
    //       {
    //         "name": "WwiseSafeName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 10,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Water\u0000"
    //       },
    //       {
    //         "name": "ActualName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 10,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "Water\u0000"
    //       }
    //     ]
    //   },
    //   {
    //     "inner_tag_data": {
    //       "name": "mFluidNames\u0000",
    //       "property_type": "StructProperty\u0000",
    //       "tag_data": {
    //         "type": "StringPair\u0000",
    //         "guid": {
    //           "a": 0,
    //           "b": 0,
    //           "c": 0,
    //           "d": 0
    //         }
    //       },
    //       "size": 421,
    //       "array_index": 0,
    //       "property_guid": null,
    //       "tag": null
    //     },
    //     "properties": [
    //       {
    //         "name": "WwiseSafeName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 13,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "No_Fluid\u0000"
    //       },
    //       {
    //         "name": "ActualName\u0000",
    //         "property_type": "StrProperty\u0000",
    //         "tag_data": null,
    //         "size": 8,
    //         "array_index": 0,
    //         "property_guid": null,
    //         "tag": "N/A\u0000"
    //       }
    //     ]
    //   }
    // ]
    // }


    //   'SoftObjectProperty\u0000',
    // possible names:  'mDefaultFuelClasses\u0000' }
    // {
    //   "name": "mDefaultFuelClasses\u0000",
    //   "property_type": "ArrayProperty\u0000",
    //   "tag_data": "SoftObjectProperty\u0000",
    //   "size": 16,
    //   "array_index": 0,
    //   "property_guid": null,
    //   "tag": [
    //   {
    //     "asset_path_name": "/Game/FactoryGame/Resource/Parts/NuclearFuelRod/Desc_NuclearFuelRod.Desc_NuclearFuelRod_C\u0000",
    //     "sub_path": ""
    //   }
    // ]
    // }


    //   'EnumProperty\u0000',
    // possible names:  'mAllowedResourceForms\u0000'
    // {
    //   "name": "mAllowedResourceForms\u0000",
    //   "property_type": "ArrayProperty\u0000",
    //   "tag_data": "EnumProperty\u0000",
    //   "size": 12,
    //   "array_index": 0,
    //   "property_guid": null,
    //   "tag": [
    //   "EResourceForm::RF_LIQUID\u0000"
    // ]
    // }


    //   'IntProperty\u0000'
    // Possible names: mGeneratorVisibilityLevels
    // {
    //   "name": "mGeneratorVisibilityLevels\u0000",
    //   "property_type": "ArrayProperty\u0000",
    //   "tag_data": "IntProperty\u0000",
    //   "size": 12,
    //   "array_index": 0,
    //   "property_guid": null,
    //   "tag": [
    //   2,
    //   5
    // ]
    // }

    // console.log(allTypes)

    if (subTypes === "ObjectProperty\u0000" && property.name === 'mAllowedResources\u0000') {
      console.log(JSON.stringify(property, null, 2));
      allNames.add(property.name);
      console.log(allNames);
    }

    // console.log(subTypes, tag[0].reference)
    this.name = cleanString(name);
  }
}

export default ArrayProperty;