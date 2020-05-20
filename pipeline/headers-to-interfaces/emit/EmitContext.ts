import * as path from 'path';
import * as util from 'util';

import {EntryType} from '../interface';

import {ReferenceEmitContext} from './ReferenceEmitContext';
import {emitClass} from './emitClass';
import {emitEnum} from './emitEnum';

export const enum EntryCategory {
  UNKNOWN,
  CLASS,
  ENUM,
  INTERFACE_STUB,
  INTERFACE,
  STRUCT,
}

export const emittableCategories = [
  EntryCategory.CLASS,
  EntryCategory.ENUM,
  EntryCategory.INTERFACE,
  EntryCategory.STRUCT,
] as const;

export type EmittableCategory = typeof emittableCategories[any];

export interface EntryData {
  entry: EntryType;
  category: EntryCategory;
}

/**
 * Manages state for emitting headers and relationships between them.
 */
export class EmitContext {
  constructor(public destDir: string) {}

  private _relativeDestinations: Record<EmittableCategory, string> = {
    [EntryCategory.CLASS]: 'classes',
    [EntryCategory.ENUM]: 'enums',
    [EntryCategory.INTERFACE]: 'interfaces',
    [EntryCategory.STRUCT]: 'structs',
  };

  private _entries = new Map<string, EntryData>();

  addEntries(entries: EntryType[]) {
    for (const entry of entries) {
      const category = this._categoryFor(entry);
      if (!_isEmittable(category)) continue;

      if (this._entries.has(entry.name)) {
        const original = util.format(this._entries.get(entry.name));
        const after = util.format(entry);
        throw new Error(`Duplicate entry ${entry.name} (original: ${original}) (new: ${after})`);
      }

      this._entries.set(entry.name, { entry, category: this._categoryFor(entry) });
    }
  }

  entriesInCategory(category: EmittableCategory) {
    return Array.from(this._entries.values())
      .filter(e => e.category === category)
      .map(e => e.entry.name);
  }

  relativeDestination(category: EmittableCategory) {
    return this._relativeDestinations[category];
  }

  destination(category: EmittableCategory) {
    return path.join(this.destDir, this._relativeDestinations[category]);
  }

  emit(name: string) {
    const { entry, category } = this._entries.get(name);
    if (!_isEmittable(category)) {
      throw new Error(`${name} is not of an emittable category`);
    }

    const referenceContext = new ReferenceEmitContext(this, this.destination(category), name);

    let content: string;
    if (entry.kind === 'class') {
      content = emitClass(referenceContext, entry);
    } else if (entry.kind === 'enum') {
      content = emitEnum(entry);
    }

    const imports = referenceContext.emitImports();
    if (imports) {
      return `${imports}\n\n${content}`;
    } else {
      return content;
    }
  }

  pathTo(name: string) {
    const entry = this._entries.get(name);
    if (!entry) return;
    if (!_isEmittable(entry.category)) return;
    return path.join(this.destination(entry.category), `${name}.ts`);
  }

  importPathTo(sourceDir: string, name: string) {
    const fullPath = this.pathTo(name);
    if (!fullPath) return;
    let relativePath = path.relative(sourceDir, fullPath);
    relativePath = relativePath.substr(0, relativePath.length - 3);
    if (!relativePath.startsWith('.')) relativePath = `./${relativePath}`;

    return relativePath;
  }

  private _categoryFor(entry: EntryType) {
    if (entry.kind === 'class' && entry.engineAnnotation === 'UCLASS') {
      return EntryCategory.CLASS;
    } else if (entry.kind === 'class' && entry.engineAnnotation === 'USTRUCT') {
      return EntryCategory.STRUCT;
    } else if (entry.kind === 'class' && entry.engineAnnotation === 'UINTERFACE') {
      return EntryCategory.INTERFACE_STUB;
    } else if (entry.kind === 'class' && entry.name.startsWith('I')) {
      // TODO: Should we detect via UINTERFACE stubs?
      return EntryCategory.INTERFACE;
    } else if (entry.kind === 'enum') {
      return EntryCategory.ENUM;
    } else {
      return EntryCategory.UNKNOWN;
    }
  }
}

function _isEmittable(category: EntryCategory): category is EmittableCategory {
  return emittableCategories.includes(category as any);
}
