export type EntryType = ClassMetadata | EnumMetadata;

// Classes

export interface ClassMetadata {
  kind: 'class';
  name: string;
  engineAnnotation?: 'UCLASS' | 'UINTERFACE' | 'USTRUCT';
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
  engineAnnotation?: 'UPROPERTY';
}

// Enums

export interface EnumMetadata {
  kind: 'enum';
  name: string;
  comment?: string;
  entries: EnumEntry[];
}

export interface EnumEntry {
  name: string;
  displayName?: string;
  comment?: string;
}
