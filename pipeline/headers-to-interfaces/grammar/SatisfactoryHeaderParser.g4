grammar SatisfactoryHeaderParser;

options {
  tokenVocab = SatisfactoryHeaderLexer;
}

file
  : element*
  ;

element
  : classDeclaration
  ;

// Primitive

value
  : identifier
  | literal
  ;

literal
  : stringLiteral
  | numericLiteral
  ;

identifier
  : IDENTIFIER
  ;

stringLiteral
  : STRING_LITERAL
  ;

numericLiteral
  : INTEGER_LITERAL
  | FLOAT_LITERAL
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
  | uParamMacro
  ;

typeReferenceType
  : STAR
  | AMPERSAND
  ;

// Classes

classDeclaration
  : classHeader OPEN_BRACE classBody CLOSE_BRACE
  ;

classHeader
  : uclassMacro? CLASS SF_CLASS_TAG? identifier classInheritance?
  ;

classInheritance
  : COLON PUBLIC identifier
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
  : ufunctionMacro? classMethodModifier* typeDeclaration? identifier OPEN_PAREN classMethodParameterList? CLOSE_PAREN CONST? classMethodEnd
  ;

classMethodEnd
  : SEMICOLON
  | classMethodBody
  ;

classMethodModifier
  : STATIC
  | CONST
  | VIRTUAL
  | FORCEINLINE
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
  : OPEN_BRACE classMethodBody? ~OPEN_BRACE*? CLOSE_BRACE
  ;

// Class Properties

classProperty
  : upropertyMacro? typeDeclaration? identifier SEMICOLON
  ;

// Macros

uclassMacro
  : UCLASS macroPropertyList
  ;

ufunctionMacro
  : UFUNCTION macroPropertyList
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
  | stringLiteral
  | macroPropertyPair
  | macroPropertyList
  ;

macroPropertyPair
  : identifier EQUALS macroProperty
  ;
