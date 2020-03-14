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
  : ufunctionMacro? classMethodModifier* typeDeclaration? identifier OPEN_PAREN classMethodParameterList? CLOSE_PAREN classMethodResultModifier* classMethodEnd
  ;

classMethodEnd
  : SEMICOLON
  | classMethodBody SEMICOLON?
  | COLON classMethodCallList classMethodBody SEMICOLON?
  ;

classMethodModifier
  : STATIC
  | CONST
  | VIRTUAL
  | FORCEINLINE
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

classMethodBody
  : OPEN_BRACE classMethodBody? ~(OPEN_BRACE | CLOSE_BRACE)* CLOSE_BRACE
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
  : identifier umetaMacro?
  ;

// Miscellaneous

staticMethodCall
  : identifier OPEN_PAREN ~(CLOSE_PAREN)* CLOSE_PAREN SEMICOLON
  ;

typedef
  : TYPEDEF typeDeclaration identifier SEMICOLON
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
