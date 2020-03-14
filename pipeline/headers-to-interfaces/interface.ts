export interface ClassMetadata {
  name: string;
  comment: string;
  methods: ClassMethod[];
  properties: ClassProperty[];
}

export interface ClassMethod {
  name: string;
  comment: string;
  returnType: string;
}

export interface ClassProperty {
  name: string;
  comment: string;
  type: string;
}
