export function emitType(type: string, rootType = type) {
  const { templateType, templateParams } = _parseTemplateType(type);
  if (templateType === 'TArray') return _emitArray(templateParams, rootType);
  if (templateType === 'TAssetSubclassOf') return _emitAssetSubclassOf(templateParams, rootType);
  if (templateType === 'TClassMap') return _emitClassMap(templateParams, rootType);
  if (templateType === 'TEnumAsByte') return _emitEnumAsByte(templateParams, rootType);
  if (templateType === 'TMap') return _emitMap(templateParams, rootType);
  if (templateType === 'TScriptInterface') return _emitScriptInterface(templateParams, rootType);
  if (templateType === 'TSet') return _emitSet(templateParams, rootType);
  if (templateType === 'TSoftClassPtr') return _emitSoftClassPtr(templateParams, rootType);
  if (templateType === 'TSoftObjectPtr') return _emitSoftObjectPtr(templateParams, rootType);
  if (templateType === 'TSubclassOf') return _emitSubclassOf(templateParams, rootType);
  if (templateType === 'TWeakObjectPtr') return _emitWeakObjectPtr(templateParams, rootType);

  if (type.endsWith('*')) type = type.substr(0, type.length - 1);
  if (type === 'bool') {
    return 'boolean';
  }

  if (!/^[a-z0-9_:]+$/i.test(type)) {
    throw new Error(`Unsupported type: ${rootType}`);
  }

  // haaaaack.
  const modifiers = /^(class|const|static)+([A-Z][a-zA-Z0-9_]+)$/.exec(type);
  if (modifiers) {
    type = modifiers[2];
  }

  return `'${type}'`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TArray/index.html
function _emitArray([type]: string[], rootType: string) {
  return `${emitType(type, rootType)}[]`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TSet/index.html
function _emitSet([type]: string[], rootType: string) {
  return `set<${emitType(type, rootType)}>[]`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TMap/index.html
function _emitMap([key, value]: string[], rootType: string) {
  return `Record<${emitType(key, rootType)}, ${emitType(value, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Plugins/ReplicationGraph/TClassMap/index.html
function _emitClassMap([value]: string[], rootType: string) {
  return `Record<ClassReference, ${emitType(value, rootType)}>`;
}

//docs.unrealengine.com/en-US/API/Runtime/CoreUObject/Templates/TSubclassOf/index.html
function _emitSubclassOf([type]: string[], rootType: string) {
  return `ClassReference<${emitType(type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TScriptInterface/index.html
function _emitScriptInterface([type]: string[], rootType: string) {
  return `ScriptInterface<${emitType(type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TSoftClassPtr/index.html
function _emitSoftClassPtr([type]: string[], rootType: string) {
  return `ClassReference<${emitType(type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/UObject/TWeakObjectPtr/index.html
function _emitWeakObjectPtr([type]: string[], rootType: string) {
  return `ObjectReference<${emitType(type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/UObject/TSoftObjectPtr/index.html
function _emitSoftObjectPtr([type]: string[], rootType: string) {
  return `ObjectReference<${emitType(type, rootType)}>`;
}

// https://docs.unrealengine.com/en-US/API/Runtime/Core/Containers/TEnumAsByte/index.html
function _emitEnumAsByte([type]: string[], rootType: string) {
  return emitType(type, rootType);
}

// https://docs.unrealengine.com/en-US/API/Runtime/CoreUObject/UObject/TAssetSubclassOf/index.html
function _emitAssetSubclassOf([type]: string[], rootType: string) {
  // TODO: Type specific to assets?
  return `ClassReference<${emitType(type, rootType)}>`;
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
