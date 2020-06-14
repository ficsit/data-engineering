import { UAssetFile } from '../../UAssetFile';
import { FString } from '../../containers';
import { Int16, Int32, Int64, Int8, UInt16, UInt32, UInt64 } from '../../primitive';
import { Double, Float } from '../../primitive/decimals';
import { Reader } from '../../readers';
import { bigintToNumber } from '../../util';
import { Shape } from '../../util/parsers';
import { FName, NameMap } from '../FName';
import { FPackageIndex } from '../FPackageIndex';
import { FSoftObjectPath } from '../FSoftObjectPath';

import { DelegateProperty } from './DelegateProperty';
import { EnumProperty } from './EnumProperty';
import { InterfaceProperty } from './InterfaceProperty';
import { ColorMaterialInput } from './UScriptStruct/ColorMaterialInput';
import { FBox2D } from './UScriptStruct/FBox2D';
import { FColor } from './UScriptStruct/FColor';
import { FFrameNumber } from './UScriptStruct/FFrameNumber';
import { FGuid } from './UScriptStruct/FGuid';
import { FIntPoint } from './UScriptStruct/FIntPoint';
import { FLinearColor } from './UScriptStruct/FLinearColor';
import { FMaterialInput } from './UScriptStruct/FMaterialInput';
import { FMovieSceneEvaluationTemplate } from './UScriptStruct/FMovieSceneEvaluationTemplate';
import { FMovieSceneFrameRange } from './UScriptStruct/FMovieSceneFrameRange';
import { FPerPlatformFloat } from './UScriptStruct/FPerPlatformFloat';
import { FPerPlatformInt } from './UScriptStruct/FPerPlatformInt';
import { FQuat } from './UScriptStruct/FQuat';
import { FRichCurveKey } from './UScriptStruct/FRichCurveKey';
import { FRotator } from './UScriptStruct/FRotator';
import { FStructFallback } from './UScriptStruct/FStructFallback';
import { FText } from './UScriptStruct/FText';
import { FVector } from './UScriptStruct/FVector';
import { FVector2D } from './UScriptStruct/FVector2D';
import { FVector4 } from './UScriptStruct/FVector4';
import { VectorMaterialInput } from './UScriptStruct/FVectorMaterialInput';

export function StructPropertyTagMetaData(names: NameMap) {
  return async function StructParser(reader: Reader) {
    let result = {
      structName: '',
      structGuid: {},
    };
    try {
      result.structName = await reader.read(FName(names));
      result.structGuid = await reader.read(FGuid);
    } catch (e) {
      console.debug('StructPropertyMetaData could not be properly read');
      result = null as any;
    }

    return result;
  };
}

//TODO: remove these
export const unknowns = new Set();

export const bUnknowns = new Set();

// https://github.com/EpicGames/UnrealEngine/blob/7d9919ac7bfd80b7483012eab342cb427d60e8c9/Engine/Source/Runtime/CoreUObject/Private/UObject/Class.cpp#L2146
export function UScriptStruct(
  tagMetaData: Shape<typeof StructPropertyTagMetaData>,
  asset: UAssetFile,
  depth: number,
) {
  return async function StructParser(reader: Reader): Promise<any> {
    // Not generic StructProperty

    if (depth > 20) {
      return null;
    }

    let tag = null;
    if (tagMetaData) {
      switch (tagMetaData.structName) {
        case 'Int8Property':
          tag = await reader.read(Int8);
          break;
        case 'Int16Property':
          tag = await reader.read(Int16);
          break;
        case 'IntProperty':
          tag = await reader.read(Int32);
          break;
        case 'Int64Property':
          tag = bigintToNumber(await reader.read(Int64));
          break;
        case 'UInt16Property':
          tag = await reader.read(UInt16);
          break;
        case 'UInt32Property':
          tag = await reader.read(UInt32);
          break;
        case 'UInt64Property':
          tag = await reader.read(UInt64);
          break;
        case 'FloatProperty':
          tag = await reader.read(Float);
          break;
        case 'DoubleProperty':
          tag = await reader.read(Double);
          break;
        case 'ObjectProperty':
          tag = await reader.read(FPackageIndex(asset.imports, asset.exports));
          break;
        case 'InterfaceProperty':
          tag = await reader.read(InterfaceProperty);
          break;
        case 'StrProperty':
          tag = await reader.read(FString);
          break;
        case 'DelegateProperty':
          tag = await reader.read(DelegateProperty(asset.names));
          break;
        case 'SoftObjectProperty':
          tag = await reader.read(FSoftObjectPath(asset.names));
          break;
        case 'IntPoint':
          tag = await reader.read(FIntPoint);
          break;
        case 'Guid':
          tag = await reader.read(FGuid);
          break;
        case 'Box':
        case 'Vector':
          tag = await reader.read(FVector);
          break;
        case 'Vector2D':
          tag = await reader.read(FVector2D);
          break;
        case 'Rotator':
          tag = await reader.read(FRotator);
          break;
        case 'Color':
          tag = await reader.read(FColor);
          break;
        case 'LinearColor':
          tag = await reader.read(FLinearColor);
          break;
        case 'MovieSceneFloatValue':
        case 'RichCurveKey':
          tag = await reader.read(FRichCurveKey);
          break;
        case 'SoftClassPath':
          tag = await reader.read(FSoftObjectPath(asset.names));
          break;
        case 'ExpressionInput':
          tag = await reader.read(FMaterialInput(asset.names));
          break;
        case 'VectorMaterialInput':
          tag = await reader.read(VectorMaterialInput(asset.names));
          break;
        case 'ColorMaterialInput':
          tag = await reader.read(ColorMaterialInput(asset.names));
          break;
        case 'Box2D':
          tag = await reader.read(FBox2D);
          break;
        case 'Quat':
          tag = await reader.read(FQuat);
          break;
        case 'Vector4':
          tag = await reader.read(FVector4);
          break;
        case 'MovieSceneFrameRange':
          tag = await reader.read(FMovieSceneFrameRange);
          break;
        case 'FrameNumber':
          tag = await reader.read(FFrameNumber);
          break;
        case 'NameProperty':
          tag = await reader.read(FName(asset.names));
          break;
        case 'TextProperty':
          tag = await reader.read(FText(asset.names));
          break;
        case 'MovieSceneEvaluationTemplate':
          tag = await reader.read(FMovieSceneEvaluationTemplate);
          break;
        case 'EnumProperty':
          tag = await reader.read(EnumProperty(asset.names));
          break;
        case 'PerPlatformFloat':
          tag = await reader.read(FPerPlatformFloat);
          break;
        case 'PerPlatformInt':
          tag = await reader.read(FPerPlatformInt);
          break;
        case 'StructProperty':
          tag = await reader.read(UScriptStruct(tagMetaData, asset, depth + 1));
          break;
        //Whitelisted fallback entries. TODO: fix these? :(
        // case 'BodyInstance':
        // case 'CollisionResponse':
        // case 'ResponseChannel':
        // case 'SlateBrush':
        // case 'ItemView':
        // case 'ItemAmount':
        // case 'PointerToUberGraphFrame':
        // case 'ParticleMap':
        // case 'PoleHeightMesh':
        // case 'SingleAnimationPlayData':
        // case 'TimerHandle':
        // case 'FactoryTickFunction':
        // case 'ActorTickFunction':
        // case 'BlueprintComponentDelegateBinding':
        // case 'RichCurve':
        // case 'TTFloatTrack':
        // case 'FoundationSideSelectionFlags':
        // case 'SplitterSortRule':
        // case 'ActorComponentTickFunction':
        // case 'ComponentOverrideRecord':
        // case 'ComponentKey':
        // case 'BlueprintCookedComponentInstancingData':
        // case 'SplineCurves':
        // case 'InterpCurveVector':
        // case 'InterpCurvePointVector':
        // case 'InterpCurveFloat':
        // case 'InterpCurvePointFloat':
        // case 'StringPair':
        // case 'BPVariableMetaDataEntry':
        // case 'PostProcessSettings':
        // case 'WeightedBlendables':
        // case 'WeightedBlendable':
        // case 'MaterialFunctionInfo':
        // case 'KAggregateGeom':
        // case 'KBoxElem':
        // case 'StaticMaterial':
        // case 'MeshUVChannelInfo':
        // case 'BoxSphereBounds':
        // case 'FontImportOptionsData':
        // case 'KConvexElem':
        // case 'Transform':
        // case 'ScalarParameterValue':
        // case 'MaterialParameterInfo':
        // case 'MaterialInstanceBasePropertyOverrides':
        // case 'SoundConcurrencySettings':
        // case 'CompositeFont':
        // case 'Typeface':
        // case 'TypefaceEntry':
        // case 'KSphereElem':
        // case 'SoundClassProperties':
        // case 'TouchInputControl':
        // case 'Key':
        // case 'PaperTerrainMaterialRule':
        // case 'LightmassMaterialInterfaceSettings':
        // case 'DistanceBasedTickRate':
        // case 'SchematicMessagePair':
        // case 'ItemFoundData':
        // case 'ResearchTreeMessageData':
        // case 'TutorialHintData':
        // case 'RecipeAmountPair':
        // case 'CollectionScalarParameter':
        // case 'CollectionVectorParameter':
        // case 'Margin':
        // case 'ButtonStyle':
        // case 'SlateColor':
        // case 'AnchorData':
        // case 'Anchors':
        // case 'SlateChildSize':
        // case 'WidgetTransform':
        // case 'MovieScenePossessable':
        // case 'MovieSceneBinding':
        // case 'FrameRate':
        case 'ResourceDepositPackage':
        case 'Int32Interval':
          return await reader.read(FStructFallback(asset));
        case 'InventoryItem':
          tag = await reader.read(FPackageIndex(asset.imports, asset.exports));
          break;
        case 'SkeletalMeshSamplingLODBuiltData':
        case 'FontCharacter':
        case 'FontData':
        case 'MovieSceneFloatChannel':
        case 'ScalarMaterialInput':
        case 'MaterialAttributesInput':
        case 'ResponseChannel':
        case 'MovieSceneEventParameters':
        case 'MovieSceneParticleChannel':
        case 'RawCurveTracks':
        case 'SmartName':
        case 'FloatCurve':
          // // https://github.com/EpicGames/UnrealEngine/blob/4.22/Engine/Source/Runtime/MovieScene/Public/Channels/MovieSceneFloatChannel.h#L299
          return null;
        default:
          try {
            return await reader.read(FStructFallback(asset));
          } catch (e) {}
          return null;
        // throw new Error('Unknown struct type ' + tagMetaData.structName);
      }
    } else {
      throw new Error('No tagMetaData');
    }

    return tag;
  };
}
