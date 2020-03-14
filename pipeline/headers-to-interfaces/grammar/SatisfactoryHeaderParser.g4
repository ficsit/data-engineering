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
  | typedef
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
  : generatedBodyMacro? classEntries?
  ;

classEntries
  : classEntry classEntries?
  ;

classEntry
  : classVisibility
  | classMethod
  | friendDeclaration
  | classProperty
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

// Class Methods

classMethod
  : uedeprecatedMacro? ufunctionMacro? functionModifier* typeDeclaration? identifier OPEN_PAREN classMethodParameterList? CLOSE_PAREN classMethodResultModifier* classMethodEnd
  ;

classMethodEnd
  : SEMICOLON
  | contentWithNestedBraces SEMICOLON?
  | COLON classMethodCallList contentWithNestedBraces SEMICOLON?
  ;

classMethodResultModifier
  : CONST
  | OVERRIDE
  ;

classMethodParameterList
  : classMethodParameter
  | classMethodParameter COMMA classMethodParameterList
  | identifier
  ;

classMethodParameterName
  : identifier
  ;

classMethodParameter
  : typeDeclaration classMethodParameterName
  | typeDeclaration classMethodParameterName EQUALS value
  ;

classMethodCallList
  : classMethodCall
  | classMethodCall COMMA classMethodCallList
  ;

classMethodCall
  : identifier OPEN_PAREN ~(CLOSE_PAREN)* CLOSE_PAREN
  ;

// Class Properties

classProperty
  : upropertyMacro? STATIC? typeDeclaration? identifier classPropertyDefaultValue? SEMICOLON
  ;

classPropertyDefaultValue
  : COLON literal
  | EQUALS literal
  ;

// Enums

enumDeclaration
  : enumHeader OPEN_BRACE enumBody CLOSE_BRACE SEMICOLON?
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

// Static Functions

staticFunctionDeclaration
  : functionModifier* typeDeclaration? identifier contentWithNestedParens contentWithNestedBraces SEMICOLON?
  ;

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
  : .
  | contentWithNestedParens
  ;

contentWithNestedBraces
  : OPEN_BRACE contentWithNestedBracesInner* CLOSE_BRACE
  ;

contentWithNestedBracesInner
  : .
  | contentWithNestedBraces
  ;

functionModifier
  : STATIC
  | CONST
  | VIRTUAL
  | FORCEINLINE
  | INLINE
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
