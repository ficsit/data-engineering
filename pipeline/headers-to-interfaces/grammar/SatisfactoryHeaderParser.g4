grammar SatisfactoryHeaderParser;

options {
  tokenVocab = SatisfactoryHeaderLexer;
}

file
  : element*
  ;

element
  : classDeclaration
  | enumDeclaration
  | staticMethodCall
  | staticFunctionDeclaration
  | staticPropertyDeclaration
  | typedef
  | SEMICOLON
  ;

// Primitive

value
  : identifier
  | literal
  ;

literal
  : stringLiteral
  | numericLiteral
  | booleanLiteral
  ;

identifier
  : IDENTIFIER
  | IDENTIFIER COLON COLON IDENTIFIER
  ;

stringLiteral
  : STRING_LITERAL
  ;

numericLiteral
  : INTEGER_LITERAL
  | FLOAT_LITERAL
  ;

booleanLiteral
  : TRUE
  | FALSE
  ;

// Types

typeDeclaration
  : typeModifier* identifier templateType? typeReferenceType?
  ;

templateType
  : OPEN_ANGLE templateTypeList CLOSE_ANGLE
  ;

templateTypeList
  : typeDeclaration
  | typeDeclaration COMMA templateTypeList
  ;

typeModifier
  : CLASS
  | CONST
  | ENUM
  | STRUCT
  | MUTABLE
  | uParamMacro
  ;

typeReferenceType
  : STAR
  | AMPERSAND
  ;

// Classes

classDeclaration
  : classHeader OPEN_BRACE classBody CLOSE_BRACE SEMICOLON?
  ;

classHeader
  : classMacro? classKeyword SF_CLASS_TAG? identifier classInheritance?
  ;

classMacro
  : uclassMacro
  | uinterfaceMacro
  | ustructMacro
  ;

classKeyword
  : CLASS
  | STRUCT
  ;

classInheritance
  : COLON classExtensionList
  ;

classExtensionList
  : classExtension
  | classExtension COMMA classExtensionList
  ;

classExtension
  : classVisibilityModifier identifier
  ;

classBody
  : generatedBodyMacro? SEMICOLON? classEntries?
  ;

classEntries
  : classEntry classEntries?
  ;

classEntry
  : classVisibility
  | classMethod
  | friendDeclaration
  | classProperty
  | statDeclaration
  | typedef
  | SEMICOLON
  ;

classVisibility
  : classVisibilityModifier COLON
  ;

classVisibilityModifier
  : PUBLIC
  | PROTECTED
  | PRIVATE
  ;

friendDeclaration
  : FRIEND CLASS? identifier SEMICOLON
  ;

statDeclaration
  : STAT contentWithNestedParens
  ;

// Class Methods

classMethod
  : uedeprecatedMacro? ufunctionMacro? functionModifier* typeDeclaration? functionName contentWithNestedParens classMethodResultModifier* classMethodEnd
  ;

classMethodEnd
  : SEMICOLON
  | contentWithNestedBraces SEMICOLON?
  | COLON classInitializerList contentWithNestedBraces SEMICOLON?
  ;

classMethodResultModifier
  : CONST
  | OVERRIDE
  ;

classInitializerList
  : classInitializer
  | classInitializer COMMA classInitializerList
  ;

classInitializer
  : identifier contentWithNestedParens
  ;

// Class Properties

classProperty
  : upropertyMacro? STATIC? typeDeclaration? identifier classPropertyArraySizeDeclaration? classPropertyDefaultValue? SEMICOLON
  ;

classPropertyDefaultValue
  : COLON literal
  | EQUALS literal
  | EQUALS identifier
  | EQUALS identifier contentWithNestedParens
  ;

classPropertyArraySizeDeclaration
  : OPEN_SQUARE classPropertyArraySize CLOSE_SQUARE
  ;

classPropertyArraySize
  : identifier
  | numericLiteral
  ;

// Enums

enumDeclaration
  : enumHeader OPEN_BRACE enumBody COMMA? CLOSE_BRACE SEMICOLON?
  ;

enumHeader
  : uenumMacro? ENUM CLASS? identifier
  | uenumMacro? ENUM CLASS? identifier COLON typeDeclaration
  ;

enumBody
  : enumEntry
  | enumEntry COMMA enumBody
  ;

enumEntry
  : identifier enumValue? umetaMacro?
  ;

enumValue
  : EQUALS literal
  ;

// Statics

staticFunctionDeclaration
  : functionModifier* typeDeclaration? functionName contentWithNestedParens CONST? contentWithNestedBraces SEMICOLON?
  ;

staticPropertyDeclaration
  : STATIC typeDeclaration identifier EQUALS literal SEMICOLON;

// Miscellaneous

staticMethodCall
  : identifier contentWithNestedParens SEMICOLON
  ;

typedef
  : TYPEDEF typeDeclaration identifier SEMICOLON
  | CLASS identifier SEMICOLON
  ;

contentWithNestedParens
  : OPEN_PAREN contentWithNestedParensInner* CLOSE_PAREN
  ;

contentWithNestedParensInner
  : ~(OPEN_PAREN | CLOSE_PAREN)+
  | contentWithNestedParens
  ;

contentWithNestedBraces
  : OPEN_BRACE contentWithNestedBracesInner* CLOSE_BRACE
  ;

contentWithNestedBracesInner
  : ~(OPEN_BRACE | CLOSE_BRACE)+
  | contentWithNestedBraces
  ;

contentWithNestedAngles
  : OPEN_ANGLE contentWithNestedAnglesInner* CLOSE_ANGLE
  ;

contentWithNestedAnglesInner
  : ~(OPEN_ANGLE | CLOSE_ANGLE)+
  | contentWithNestedAngles
  ;

functionName
  : identifier
  | OPERATOR EQUALS
  | OPERATOR EQUALS EQUALS
  | OPERATOR OPEN_SQUARE CLOSE_SQUARE
  | OPERATOR OPEN_ANGLE
  | OPERATOR OPEN_ANGLE OPEN_ANGLE
  | OPERATOR CLOSE_ANGLE
  | OPERATOR CLOSE_ANGLE CLOSE_ANGLE
  ;

functionModifier
  : STATIC
  | CONST
  | VIRTUAL
  | FORCEINLINE
  | INLINE
  | TEMPLATE contentWithNestedAngles
  ;

// Macros

uclassMacro
  : UCLASS macroPropertyList
  ;

uenumMacro
  : UENUM macroPropertyList
  ;

ufunctionMacro
  : UFUNCTION macroPropertyList
  ;

uinterfaceMacro
  : UINTERFACE macroPropertyList
  ;

umetaMacro
  : UMETA macroPropertyList
  ;

uParamMacro
  : UPARAM macroPropertyList
  ;

upropertyMacro
  : UPROPERTY macroPropertyList
  ;

ustructMacro
  : USTRUCT macroPropertyList
  ;

uedeprecatedMacro
  : UE_DEPRECATED macroPropertyList
  ;

generatedBodyMacro
  : SF_GENERATED_BODY macroPropertyList
  ;

macroPropertyList
  : OPEN_PAREN macroPropertyListEntries? CLOSE_PAREN
  ;

macroPropertyListEntries
  : macroProperty
  | macroProperty COMMA macroPropertyListEntries?
  ;

macroProperty
  : identifier
  | literal
  | macroPropertyPair
  | macroPropertyList
  ;

macroPropertyPair
  : identifier EQUALS macroProperty
  ;
