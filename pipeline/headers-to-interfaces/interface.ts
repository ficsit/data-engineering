// Classes

export interface ClassMetadata {
  name: string;
  category?: 'UCLASS' | 'UINTERFACE' | 'USTRUCT';
  comment?: string;
  extends: string[];
  methods: ClassMethod[];
  properties: ClassProperty[];
}

export interface ClassMethod {
  name: string;
  comment?: string;
  returnType: string;
}

export interface ClassProperty {
  name: string;
  comment?: string;
  type: string;
}

// Enums

export interface EnumMetadata {
  name: string;
  comment?: string;
  entries: EnumEntry[];
}

export interface EnumEntry {
  name: string;
  displayName?: string;
  comment?: string;
}
