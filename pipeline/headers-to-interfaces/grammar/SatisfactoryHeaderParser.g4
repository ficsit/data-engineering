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
  : OPEN_ANGLE typeDeclaration CLOSE_ANGLE
  ;

typeModifier
  : CLASS
  | CONST
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
  : uclassMacro? uinterfaceMacro? CLASS SF_CLASS_TAG? identifier classInheritance?
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
  | friendClassDeclaration
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

friendClassDeclaration
  : FRIEND CLASS identifier SEMICOLON
  ;

// Class Methods

classMethod
  : ufunctionMacro? classMethodModifier* typeDeclaration? identifier OPEN_PAREN classMethodParameterList? CLOSE_PAREN classMethodResultModifier* classMethodEnd
  ;

classMethodEnd
  : SEMICOLON
  | classMethodBody SEMICOLON?
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
  : identifier OPEN_PAREN ~(CLOSE_PAREN)+ CLOSE_PAREN SEMICOLON
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
