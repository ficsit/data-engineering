import { EmitContext } from './EmitContext';

const primitiveTypes = {
  'bool': 'boolean',
  'FName': 'string',
  'FString': 'string',
};

const nativeTypes = {
  'float': { name: 'float', module: '../native/primitive' },
  'FText': { name: 'localized', module: '../native/primitive' },
  'int16': { name: 'int16', module: '../native/primitive' },
  'int32': { name: 'int32', module: '../native/primitive' },
  'int8': { name: 'int8', module: '../native/primitive' },
  'uint16': { name: 'uint16', module: '../native/primitive' },
  'uint32': { name: 'uint32', module: '../native/primitive' },
  'uint8': { name: 'uint8', module: '../native/primitive' },

  'FVector': { name: 'Vector', module: '../native/structs' },
  'FLinearColor': { name: 'LinearColor', module: '../native/structs' },
  'FColor': { name: 'Color', module: '../native/structs' },

  'set': { name: 'set', module: '../native/collections' },

  'classReference': { name: 'classReference', module: '../native/references' },
  'objectReference': { name: 'objectReference', module: '../native/references' },
  'ScriptInterface': { name: 'ScriptInterface', module: '../native/references' },

  'UObject': { name: 'UObject', module: '../native/classes' },
  'AActor': { name: 'AActor', module: '../native/classes' },

  'UStaticMesh': { name: 'UStaticMesh', module: '../native/assets' },
  'UTexture2D': { name: 'UTexture2D', module: '../native/assets' },
  'FSlateBrush': { name: 'FSlateBrush', module: '../native/assets' },
};

export class ReferenceEmitContext {
  private _dependencies = new Map<string, Set<string>>();

  constructor(private _context: EmitContext, private _sourceDir: string) {}

  emit(type: string, rootType = type) {
    if (!/^[a-z0-9_:]+$/i.test(type)) {
      throw new Error(`Unsupported type: ${rootType}`);
    }

    const primitive = primitiveTypes[type];
    if (primitive) return primitive;

    const native = nativeTypes[type];
    if (native) {
      this._addDependency(native.module, native.name);
      return native.name;
    }

    const reference = this._context.importPathTo(this._sourceDir, type);
    if (reference) {
      this._addDependency(reference, type);
      return type;
    }

    this._addDependency('../native/unknown', 'Unknown');
    return `Unknown<'${type}'>`;
  }

  addNativeDependency(type: string) {
    const native = nativeTypes[type];
    if (!native) {
      throw new Error(`Expected ${type} to be a native type`);
    }
    this._addDependency(native.module, native.name);
  }

  emitImports() {
    const lines = [];
    const sortedImports = Array.from(this._dependencies.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [module, names] of sortedImports) {
      if (module.startsWith('./') && lines[lines.length - 1]?.includes("'../")) {
        lines.push('');
      }

      const namesList = Array.from(names)
        .sort()
        .join(', ');
      lines.push(`import { ${namesList} } from '${module}';`);
    }

    return lines.join('\n');
  }

  private _addDependency(module: string, name: string) {
    if (!this._dependencies.has(module)) this._dependencies.set(module, new Set());
    this._dependencies.get(module)!.add(name);
  }
}