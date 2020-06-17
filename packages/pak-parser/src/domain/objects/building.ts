import { AFGBuildable, UFGItemDescriptor } from '../../../../../.data-landing/interfaces/classes';
import { toItem, toKebabCase } from '../utils/utils';

export type BuildingEntry = {
  slug: string;
  item: AFGBuildable;
};

enum buildingType {
  EXTRACTOR,
  MANUFACTURER,
  GENERATOR,
  ITEMFLOWMANIPULATOR,
  FLUIDFLOWMANIPULATOR,
  ITEMPASSTHROUGH,
  FLUIDPASSTHROUGH,
  RESTRICTOR,
  SINK,
  FLUIDSTORAGE,
  ITEMSTORAGE,
  TRAINSTATION,
  TRUCKSTATION,
  PLAYERCRAFTER,
  CONVERTER,
}

export function getEnumName(enumObj: any): string {
  for (const name in buildingType) {
    if (buildingType[name] === enumObj && buildingType.hasOwnProperty(name)) {
      return name;
    }
  }

  throw new Error('Unknown Enum');
}

export function convertBuilding(buildingEntry: BuildingEntry, itemObjects: Map<string, UFGItemDescriptor>) {
  const { item } = buildingEntry;
  const buildingObject = {
    name: item.mDisplayName?.sourceString,
    translation: {
      namespace: item.mDisplayName?.namespace,
      key: item.mDisplayName?.key,
    },
    description: item.mDescription?.sourceString,
    descriptionTranslation: {
      namespace: item.mDescription?.namespace,
      key: item.mDescription?.key,
    },
  } as any;

  const castedItem = item as any;

  const fields = {
    powerConsumption: castedItem.mPowerConsumption,
    powerConsumptionExponent: castedItem.mPowerConsumptionExponent,
    minPotential: castedItem.mMinPotential,
    maxPotential: castedItem.mMaxPotential,
    maxPotentialIncreasePerCrystal: castedItem.mMaxPotentialIncreasePerCrystal,
  } as any;

  Object.keys(fields).forEach(key => {
    if (fields[key] !== undefined) {
      buildingObject[key] = fields[key];
    }
  });

  switch (castedItem.__type__) {
    case 'AFGBuildableTrainPlatformCargo':
      buildingObject.storageSizeX = castedItem.mStorageSizeX;
      buildingObject.storageSizeY = castedItem.mStorageSizeY;
      buildingObject.timeToCompleteUnload = castedItem.mTimeToCompleteUnload;
      buildingObject.timeToCompleteLoad = castedItem.mTimeToCompleteLoad;
      buildingObject.buildingType = getEnumName(buildingType.TRAINSTATION);
      break;
    case 'AFGBuildableDockingStation':
      buildingObject.transferSpeed = castedItem.mTransferSpeed;
      buildingObject.fuelTransferSpeed = castedItem.mFuelTransferSpeed;
      buildingObject.buildingType = getEnumName(buildingType.TRUCKSTATION);
      break;
    case 'AFGBuildableManufacturer':
      buildingObject.manufacturingSpeed = castedItem.mManufacturingSpeed;
      buildingObject.buildingType = getEnumName(buildingType.MANUFACTURER);
      break;
    case 'AFGBuildablePipeReservoir':
      buildingObject.storageCapacity = castedItem.mStorageCapacity;
      buildingObject.buildingType = getEnumName(buildingType.FLUIDSTORAGE);
      break;
    case 'AFGBuildableStorage':
      buildingObject.inventorySizeX = castedItem.mInventorySizeX;
      buildingObject.inventorySizeY = castedItem.mInventorySizeY;
      buildingObject.buildingType = getEnumName(buildingType.ITEMSTORAGE);
      break;
    case 'AFGBuildableGeneratorFuel':
    case 'AFGBuildableGeneratorGeoThermal':
    case 'AFGBuildableGeneratorNuclear':
      buildingObject.defaultFuelClasses = castedItem.mDefaultFuelClasses?.map((item: any) => {
        let itemName;
        try {
          itemName = toKebabCase(toItem(item.member.replace(/_C$/, '')));
        } catch (e) {
          return item.member;
        }

        if (itemObjects.has(itemName)) {
          return itemName;
        } else {
          throw new Error(`Invalid fuel class item ${itemName}`);
        }
      });
      buildingObject.powerProduction = castedItem.mPowerProduction;
      buildingObject.powerProductionExponent = castedItem.mPowerProductionExponent;
      buildingObject.fuelResourceForm = castedItem.mFuelResourceForm;
      buildingObject.supplementalResourceClass = castedItem.mSupplementalResourceClass?.name;
      buildingObject.requiresSupplementalResource = castedItem.mRequiresSupplementalResource;
      buildingObject.supplementalLoadAmount = castedItem.mSupplementalLoadAmount;
      buildingObject.supplementalToPowerRatio = castedItem.mSupplementalToPowerRatio;
      buildingObject.buildingType = getEnumName(buildingType.GENERATOR);
      break;
    case 'AFGBuildableResourceExtractor':
      const fields = {
        extractStartupTime: castedItem.mExtractStartupTime,
        extractCycleTime: castedItem.mExtractCycleTime,
        itemsPerCycle: castedItem.mItemsPerCycle,
        allowedResourceForms: castedItem.mAllowedResourceForms,
        onlyAllowCertainResources: castedItem.mOnlyAllowCertainResources,
        allowedResources: castedItem.mAllowedResources?.map((item: any) => toKebabCase(toItem(item.name))),
        extractorTypeName: castedItem.mExtractorTypeName,
      } as any;
      Object.keys(fields).forEach(key => {
        buildingObject[key] = fields[key];
      });
      buildingObject.buildingType = getEnumName(buildingType.EXTRACTOR);
      break;
    case 'AFGBuildablePipelinePump':
      buildingObject.flowLimit = castedItem.mFlowLimit;
      buildingObject.designPressure = castedItem.mDesignPressure;
      buildingObject.maxPressure = castedItem.mMaxPressure;
      buildingObject.buildingType = getEnumName(buildingType.RESTRICTOR);
      break;
    case 'AFGBuildableAttachmentMerger':
    case 'AFGBuildableAttachmentSplitter':
    case 'AFGBuildableSplitterSmart':
      buildingObject.buildingType = getEnumName(buildingType.ITEMFLOWMANIPULATOR);
      break;
    case 'AFGBuildablePipelineJunction':
      buildingObject.buildingType = getEnumName(buildingType.FLUIDFLOWMANIPULATOR);
      break;
    case 'AFGBuildableResourceSink':
    case 'AFGBuildableSpaceElevator':
      buildingObject.buildingType = getEnumName(buildingType.SINK);
      break;
    case 'AFGBuildableConveyorBelt':
      buildingObject.speed = castedItem.mSpeed;
      buildingObject.buildingType = getEnumName(buildingType.ITEMPASSTHROUGH);
      break;
    case 'AFGBuildablePipeline':
      buildingObject.flowLimit = castedItem.mFlowLimit;
      buildingObject.radius = castedItem.mRadius;
      buildingObject.buildingType = getEnumName(buildingType.FLUIDPASSTHROUGH);
      break;
    case 'AFGBuildableAutomatedWorkBench':
      buildingObject.buildingType = getEnumName(buildingType.PLAYERCRAFTER);
      break;
    //TODO: Finish this impl
    case 'AFGBuildableConverter':
      buildingObject.buildingType = getEnumName(buildingType.CONVERTER);
      return null;
    case 'AFGBuildablePole':
    case 'AFGBuildablePowerPole':
    case 'AFGConveyorPoleStackable':
    case 'AFGBuildableConveyorLift': // move this one above?
    case 'AFGBuildableFactory': // jump pads and such
    case 'AFGBuildableRailroadStation':
    case 'AFGBuildableTrainPlatformEmpty':
    case 'AFGPipeHyperStart':
    case 'AFGBuildableRadarTower':
    case 'AFGBuildableResourceSinkShop':
    case 'AFGBuildableTradingPost':
    case 'AFGBuildableWall':
    case 'AFGBuildableFoundation':
    case 'AFGBuildable':
    case 'AFGBuildableHubTerminal':
    case 'AFGBuildablePipelineSupport':
    case 'AFGBuildablePipeHyper':
    case 'AFGBuildableWire':
    case 'AFGBuildableRailroadTrack':
    case 'AFGBuildableStair':
    case 'AFGBuildableWalkway':
      return null;
    default:
      console.log(item);
      throw new Error('Unhandled building type ' + (item as any).__type__);
  }

  return buildingObject;
}

export function convertBatchBuildings(
  buildingEntries: BuildingEntry[],
  itemObjects: Map<string, UFGItemDescriptor>,
) {
  const buildingMap = {} as any;
  buildingEntries.forEach(buildingEntry => {
    const converted = convertBuilding(buildingEntry, itemObjects);
    if (converted) {
      buildingMap[buildingEntry.slug] = converted;
    }
  });
  return buildingMap;
}
