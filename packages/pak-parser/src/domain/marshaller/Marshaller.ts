import * as interfaces from '../../../../../.data-landing/interfaces';
import { classReference } from '../../../../../.data-landing/interfaces/native/references';
import { TextProperty } from '../../../../../.data-landing/interfaces/native/structs';
import { packageReferenceJSON } from '../../../../../.data-landing/json/native';
import { FPropertyTag } from '../../structs/FPropertyTag';
import { Shape } from '../../util/parsers';
import { findJsonObject, getJsonForObject } from '../loaders/JsonLoader';

export class Marshaller {
  public dependencies: Set<string> = new Set();

  getDependencies(): string[] {
    return [...this.dependencies];
  }

  marshalTextProperty(property: Shape<typeof FPropertyTag>): TextProperty {
    const propertyMeta = getJsonForObject('TextPropertyJSON');

    const returnedTextProperty = {
      namespace: '',
      key: '',
      sourceString: '',
    };

    for (const propertyName of Object.keys(propertyMeta.properties)) {
      (returnedTextProperty as any)[propertyName] = (property as any).tag[propertyName];
    }

    return returnedTextProperty;
  }

  marshalNumberProperty(property: Shape<typeof FPropertyTag>) {
    return property?.tag;
  }

  marshalBooleanProperty(property: Shape<typeof FPropertyTag>) {
    return property?.tag;
  }

  marshalSoftClassReference(property: Shape<typeof FPropertyTag>) {
    const objectPath = (property as any).assetPathName;

    const paths = objectPath.split('/');

    const fullName = paths.pop();

    const classNameParts = fullName.split('.');

    const className = classNameParts.pop();

    const name = classNameParts[0];
    const pkg = paths.join('/').replace('/Game/', 'FactoryGame/Content/');

    this.dependencies.add(`${[pkg, name].join('/')}.${className}`);

    return {
      subPath: (property as any).subPath,
      package: pkg,
      name,
      member: className,
    };
  }

  marshalClassReference(property: Shape<typeof FPropertyTag>): null | classReference<any> {
    // It's a classReference
    let previousTraversalNode = null as any;
    let traversalNode = property!.tag ? (property?.tag).reference : (property as any).reference;
    if (!traversalNode) {
      return null;
    }
    while (traversalNode.outerImport.reference) {
      previousTraversalNode = traversalNode;
      traversalNode = traversalNode.outerImport.reference;
    }

    const paths = traversalNode.objectName.split('/');

    // We remove the last part and instead replace it with the objectName in the previous traversal
    paths.pop();

    // {
    //   "name": "ItemClass",
    //   "propertyType": "ObjectProperty",
    //   "size": 4,
    //   "arrayIndex": 0,
    //   "tagMetaData": null,
    //   "propertyGuid": null,
    //   "tag": {
    //   "processedIndex": -2,
    //     "reference": {
    //     "classPackage": "/Script/Engine",
    //       "className": "BlueprintGeneratedClass",
    //       "outerIndex": -13,
    //       "objectName": "Desc_SpaceElevatorPart_3_C",
    //       "outerImport": {
    //       "processedIndex": -13,
    //         "reference": {
    //         "classPackage": "/Script/CoreUObject",
    //           "className": "Package",
    //           "outerIndex": 0,
    //           "objectName": "/Game/FactoryGame/Resource/Parts/SpaceElevatorParts/Desc_SpaceElevatorPart",
    //           "outerImport": {
    //           "processedIndex": null,
    //             "reference": null
    //         }
    //       }
    //     }
    //   }
    // }

    // To get the proper object name, we need to replace the class name from the previous traversal.
    const name = previousTraversalNode.objectName.replace(/_C$/g, '');

    const pkg = paths.join('/').replace('/Game/', 'FactoryGame/Content/');

    this.dependencies.add([pkg, name].join('/'));

    return {
      // In-place replacement of the proper pakfile structure
      package: pkg,
      name,
    };
  }

  marshalArrayProperty(property: Shape<typeof FPropertyTag>, innerType: string) {
    const [innerObject] = this.getType(innerType);

    const propertyData = property?.tag;

    const returnValue = [];

    for (const arrayProperty of propertyData) {
      if (arrayProperty.name) {
        throw new Error('Stop here');
      } else {
        // It's an object of type innerObject.
        if (Array.isArray(arrayProperty)) {
          const innerMarshal = this.marshalFromPropertyList(arrayProperty, innerObject);
          returnValue.push(innerMarshal);
        } else {
          switch (innerObject) {
            case 'softClassReference':
              returnValue.push(this.marshalSoftClassReference(arrayProperty));
              break;
            case 'classReference':
              returnValue.push(this.marshalClassReference(arrayProperty));
              break;
            default:
              if (/^E[A-Z].*/g.test(innerObject)) {
                // Maybe it's an enum?
                try {
                  findJsonObject(innerObject);
                  const dummyProp = {
                    tag: arrayProperty,
                  } as any;
                  returnValue.push(this.marshalEnumProperty(dummyProp, innerObject));
                  continue;
                } catch (e) {}
              }
              try {
                returnValue.push(this.marshalClassReference(arrayProperty));
                continue;
              } catch (e) {
                console.log(e);
              }
              throw new Error('Cannot handle array property ' + innerObject);
          }
        }
      }
    }

    return returnValue;
  }

  getType(property: any) {
    let isRef = false;
    let typeName;
    let templateType = null;

    if (property === null) {
      throw new Error('type Property is null');
    }

    // This is a ref to another def
    if (property['$ref']) {
      isRef = true;
      typeName = /^#\/definitions\/(.*)$/g.exec(property['$ref']!)![1];
      if (!typeName) {
        throw new Error('Could not extract typeName from ' + property['$ref']);
      }

      if (typeName.endsWith('>')) {
        const typeNameParts = /^(.*)<(.*)>$/g.exec(typeName);

        if (!typeNameParts) {
          throw new Error('Error parsing for brackets' + typeName);
        }

        typeName = typeNameParts[1];
        templateType = typeNameParts[2];
      }
    } else if (property.type) {
      typeName = property.type;
    }

    // else {
    // This used to throw an error but it just means that this doesn't have a defined type.
    // console.log("Could not resolve property: ", property);
    // }

    return [typeName, isRef, templateType];
  }

  marshalEnumProperty(property: Shape<typeof FPropertyTag>, enumName: string) {
    const loadedEnum = (interfaces as any)[enumName];
    const data = /^.*::(.*)$/g.exec(property!.tag as string)![1];

    return loadedEnum[data] as number;
  }

  marshalFromPropertyList(
    propertyListIncoming: Shape<typeof FPropertyTag>[],
    className: string,
    defaultsMap: Map<string, any> = new Map(),
  ) {
    const propertyList = [...propertyListIncoming];

    const classMeta = getJsonForObject(`${className}`);

    //TODO: finish the impl of this?
    const namesToProcess = new Set(Object.keys(classMeta.properties || {}));

    const returnValue = {} as any;

    if (classMeta) {
      returnValue.__type__ = findJsonObject(className);
    }

    for (const prop of propertyList) {
      const propName = prop?.name as string;
      const propertyMeta = (classMeta?.properties || {})[propName];

      namesToProcess.delete(propName);

      if (propertyMeta || className.startsWith('BP_')) {
        if (propertyMeta) {
          const [typeName] = this.getType(propertyMeta);
          if (className.startsWith('BP_') && !typeName) {
            this.populateByInferredType(prop, returnValue, propName);
          } else {
            this.populateByType(prop, propertyMeta, returnValue, propName);
          }
        } else {
          this.populateByInferredType(prop, returnValue, propName);
        }
      }
    }

    for (const leftoverProperty of [...namesToProcess]) {
      if (defaultsMap.get(leftoverProperty)) {
        returnValue[leftoverProperty] = defaultsMap.get(leftoverProperty);
        continue;
      }

      const propertyMeta = classMeta.properties[leftoverProperty];
      const [type] = this.getType(propertyMeta);
      switch (type) {
        case 'boolean':
          returnValue[leftoverProperty] = false;
          break;
        case 'number':
          returnValue[leftoverProperty] = 0;
          break;
        case 'localized':
          returnValue[leftoverProperty] = {
            namespace: null,
            key: null,
            sourceString: null,
          };
          break;
        case 'array':
          returnValue[leftoverProperty] = [];
          break;
        default:
          if (/^E[A-Z].*/g.test(type)) {
            // Maybe it's an enum?
            try {
              findJsonObject(type);
              returnValue[leftoverProperty] = 0;
              continue;
            } catch (e) {}
          }

          //TODO: Implement object stubbing in the cases where the type of leftover object is not a base type.

          returnValue[leftoverProperty] = null;
        // console.log(`Unhandled missing default type ${type} with name ${leftoverProperty}`);
      }
    }

    return returnValue;
  }

  populateByType(
    property: Shape<typeof FPropertyTag>,
    propertyMeta: any,
    returnObject: any,
    propName: string,
  ) {
    const [typeName] = this.getType(propertyMeta);
    switch (typeName) {
      case 'string':
        returnObject[propName] = property?.tag as string;
        break;
      case 'localized':
        returnObject[propName] = this.marshalTextProperty(property);
        break;
      case 'array':
        returnObject[propName] = this.marshalArrayProperty(property, propertyMeta.items);
        break;
      case 'number':
        returnObject[propName] = this.marshalNumberProperty(property);
        break;
      case 'classReference':
        returnObject[propName] = this.marshalClassReference(property);
        break;
      case 'boolean':
        returnObject[propName] = this.marshalBooleanProperty(property);
        break;
      case 'UTexture2D':
        returnObject[propName] = this.marshalClassReference(property);
        //TODO: handle this better. Link it to the image database maybe?
        break;
      case 'FSlateBrush':
        //TODO: handle this better. The packageReference isn't exactly correct.
        break;
      // case undefined:
      //   break;
      default:
        if (/^E[A-Z].*/g.test(typeName)) {
          // Maybe it's an enum?
          try {
            findJsonObject(typeName);
            returnObject[propName] = this.marshalEnumProperty(property, typeName);
            return;
          } catch (e) {}
        }

        try {
          returnObject[propName] = this.marshalPropertyFromProperty(property, typeName);
          return;
        } catch (e) {}

        try {
          // We will treat it as a reference
          if (property?.tag?.reference) {
            let traversalNode = property.tag ? (property?.tag).reference : (property as any).reference;
            while (traversalNode.outerImport.reference) {
              traversalNode = traversalNode.outerImport.reference;
            }

            // TODO: Simplify this section. Right now it was meant for debugging.
            if (traversalNode.objectName.startsWith('Default__')) {
              if (traversalNode.objectName === 'Default__Build_TrainDockingStation_C') {
                return;
              }
              if (traversalNode.objectName === 'Default__Build_TrainDockingStationLiquid_C') {
                return;
              }
              if (traversalNode.objectName === 'Default__Build_TrainPlatformEmpty_C') {
                return;
              }
              //TODO: fix this default stack
              return;
            } else {
              console.log('Unhandled default:', traversalNode);
              return;
            }
          }
        } catch (e) {}
        // console.log("Unhandled: ",JSON.stringify(property, null, 2), propertyMeta, propName);
        throw new Error('Unhandled type ' + typeName);
    }
  }

  populateByInferredType(property: Shape<typeof FPropertyTag>, returnObject: any, propName: string) {
    const typeName = property!.propertyType;

    switch (typeName) {
      case 'FloatProperty':
        returnObject[propName] = property!.tag;
        break;
      default:
        console.log('Unhandled: ', JSON.stringify(property, null, 2), typeName, propName);
        throw new Error('Unhandled inferred type ' + typeName);
    }
  }

  private packageReference = JSON.stringify(packageReferenceJSON);

  typeIsPackageReference(pkgRef: any) {
    return JSON.stringify(pkgRef) === this.packageReference;
  }

  marshalPropertyFromProperty(property: Shape<typeof FPropertyTag>, typeName: string) {
    if (typeName === undefined) {
      return null;
    }

    const classMeta = getJsonForObject(typeName);
    if (this.typeIsPackageReference(classMeta)) {
      return this.marshalClassReference(property);
    } else {
      if (Array.isArray(property?.tag)) {
        return this.marshalFromPropertyList((property?.tag as Shape<typeof FPropertyTag>[]) || [], typeName);
      } else {
        const conversionList: Shape<typeof FPropertyTag>[] = [];
        Object.keys(property?.tag).forEach(key => {
          const dummyFPropertyTag = ({
            name: key,
            tag: (property?.tag)[key],
          } as unknown) as Shape<typeof FPropertyTag>;

          conversionList.push(dummyFPropertyTag);
        });

        return this.marshalFromPropertyList(conversionList || [], typeName);
      }
    }
  }
}
