import {ReferenceEmitContext} from './ReferenceEmitContext';

export function emitType(context: ReferenceEmitContext, type: string, rootType = type): string {
  const { templateType, templateParams } = _parseTemplateType(type);
  if (templateType === 'TArray') return _emitArray(context, templateParams, rootType);
  if (templateType === 'TAssetSubclassOf') return _emitAssetSubclassOf(context, templateParams, rootType);
  if (templateType === 'TClassMap') return _emitClassMap(context, templateParams, rootType);
  if (templateType === 'TEnumAsByte') return _emitEnumAsByte(context, templateParams, rootType);
  if (templateType === 'TMap') return _emitMap(context, templateParams, rootType);
  if (templateType === 'TScriptInterface') return _emitScriptInterface(context, templateParams, rootType);
  if (templateType === 'TSet') return _emitSet(context, templateParams, rootType);
  if (templateType === 'TSoftClassPtr') return _emitSoftClassPtr(context, templateParams, rootType);
  if (templateType === 'TSoftObjectPtr') return _emitSoftObjectPtr(context, templateParams, rootType);
  if (templateType === 'TSubclassOf') return _emitSubclassOf(context, templateParams, rootType);
  if (templateType === 'TWeakObjectPtr') return _emitWeakObjectPtr(context, templateParams, rootType);

  if (type.endsWith('*')) type = type.substr(0, type.length - 1);

  // haaaaack.
  const modifiers = /^(class|const|static|mutable)+(.+)$/.exec(type);
  if (modifiers) {
    type = modifiers[2];
  }

  return context.emit(type);
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TArray/index.html
function _emitArray(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  return `${emitType(context, type, rootType)}[]`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TSet/index.html
function _emitSet(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('set');
  return `set<${emitType(context, type, rootType)}>[]`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TMap/index.html
function _emitMap(context: ReferenceEmitContext, [key, value]: string[], rootType: string) {
  return `Map<${emitType(context, key, rootType)}, ${emitType(context, value, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Plugins/ReplicationGraph/TClassMap/index.html
function _emitClassMap(context: ReferenceEmitContext, [value]: string[], rootType: string) {
  context.addNativeDependency('classReference');
  return `Map<classReference, ${emitType(context, value, rootType)}>`;
}

//docs.unrealengine.com/en-US/API/Runtime/CoreUObject/Templates/TSubclassOf/index.html
function _emitSubclassOf(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('classReference');
  return `classReference<${emitType(context, type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TScriptInterface/index.html
function _emitScriptInterface(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('ScriptInterface');
  return `ScriptInterface<${emitType(context, type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TSoftClassPtr/index.html
function _emitSoftClassPtr(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('classReference');
  return `classReference<${emitType(context, type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/UObject/TWeakObjectPtr/index.html
function _emitWeakObjectPtr(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('objectReference');
  return `objectReference<${emitType(context, type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/UObject/TSoftObjectPtr/index.html
function _emitSoftObjectPtr(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  context.addNativeDependency('objectReference');
  return `objectReference<${emitType(context, type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TEnumAsByte/index.html
function _emitEnumAsByte(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  return emitType(context, type, rootType);
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TAssetSubclassOf/index.html
function _emitAssetSubclassOf(context: ReferenceEmitContext, [type]: string[], rootType: string) {
  // TODO: Type specific to assets?
  context.addNativeDependency('classReference');
  return `classReference<${emitType(context, type, rootType)}>`;
}

function _parseTemplateType(expression: string) {
  const match = /^([^<]+)<(.*)>$/.exec(expression);
  if (!match) return {};
  const [, templateType, body] = match;

  let current = '';
  let depth = 0;
  const templateParams = [] as string[];
  for (let i = 0; i < body.length; i++) {
    const char = body.charAt(i);
    if (char === '<') {
      depth += 1;
    } else if (char === '>') {
      depth -= 1;
    }

    if (char === ',' && depth === 0) {
      templateParams.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  if (current) templateParams.push(current);

  return { templateType, templateParams };
}
