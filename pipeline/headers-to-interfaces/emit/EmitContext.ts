import * as path from 'path';
import * as util from 'util';

import { EntryType } from '../interface';

import { emitClass } from './emitClass';
import { emitEnum } from './emitEnum';

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

  public destinations: Record<EmittableCategory, string> = {
    [EntryCategory.CLASS]: path.join(this.destDir, 'classes'),
    [EntryCategory.ENUM]: path.join(this.destDir, 'enums'),
    [EntryCategory.INTERFACE]: path.join(this.destDir, 'interfaces'),
    [EntryCategory.STRUCT]: path.join(this.destDir, 'structs'),
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

  emit(name: string) {
    const { entry } = this._entries.get(name);

    if (entry.kind === 'class') {
      return emitClass(entry);
    } else if (entry.kind === 'enum') {
      return emitEnum(entry);
    }
  }

  pathTo(name: string) {
    const { category } = this._entries.get(name);
    return path.join(this.destinations[category], `${name}.ts`);
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
