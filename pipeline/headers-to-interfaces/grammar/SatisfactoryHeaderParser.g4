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
  | namespaceDeclaration
  | staticMethodCall
  | staticFunctionDeclaration
  | staticInlineFunctionDeclaration
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
  : typeModifier* identifier templateType? typeReferenceType? CONSTEXPR?
  ;

templateType
  : contentWithNestedAngles
  ;

typeModifier
  : CLASS
  | CONST
  | CONSTEXPR
  | ENUM
  | STRUCT
  | STATIC
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
  : classMacro? templateDeclaration? classKeyword SF_CLASS_TAG? identifier contentWithNestedAngles? classInheritance?
  ;

classMacro
  : uclassMacro
  | uinterfaceMacro
  | ustructMacro
  ;

templateDeclaration
  : TEMPLATE contentWithNestedAngles
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
  : classVisibilityModifier identifier contentWithNestedAngles?
  ;

classBody
  : classEntries?
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
  | nestedEnum
  | nestedClass
  | nestedStruct
  | typedef
  | generatedBodyMacro
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
  : FRIEND classKeyword? identifier SEMICOLON
  ;

statDeclaration
  : STAT contentWithNestedParens
  ;

// Class Methods

classMethod
  : uedeprecatedMacro? ufunctionMacro? functionModifier* typeDeclaration? functionName contentWithNestedParens classMethodResultModifier* classMethodEnd
  ;

classMethodEnd
  : SEMICOLON?
  | contentWithNestedBraces SEMICOLON?
  | COLON classInitializerList contentWithNestedBraces SEMICOLON?
  | EQUALS numericLiteral SEMICOLON
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
  : upropertyMacro? typeDeclaration? identifier contentWithNestedSquares? classPropertyDefaultValue? SEMICOLON
  ;

classPropertyDefaultValue
  : COLON literal
  | EQUALS literal
  | EQUALS identifier
  | EQUALS identifier contentWithNestedParens
  ;


classPropertyArraySize
  : identifier
  | numericLiteral
  ;

// Nested Elements

nestedEnum
  : ENUM identifier? contentWithNestedBraces
  ;

nestedClass
  : CLASS identifier classInheritance? contentWithNestedBraces
  ;

nestedStruct
  : STRUCT identifier classInheritance? contentWithNestedBraces
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

staticInlineFunctionDeclaration
  : FORCEINLINE typeDeclaration identifier contentWithNestedParens
  ;

// Miscellaneous

staticMethodCall
  : identifier contentWithNestedParens SEMICOLON
  ;

typedef
  : TYPEDEF TYPENAME? typeDeclaration identifier SEMICOLON
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

contentWithNestedSquares
  : OPEN_SQUARE contentWithNestedSquaresInner* CLOSE_SQUARE
  ;

contentWithNestedSquaresInner
  : ~(OPEN_SQUARE | CLOSE_SQUARE)+
  | contentWithNestedSquares
  ;

functionName
  : TILDE? identifier
  | OPERATOR EQUALS
  | OPERATOR EQUALS EQUALS
  | OPERATOR BANG EQUALS
  | OPERATOR PLUS
  | OPERATOR MINUS
  | OPERATOR OPEN_SQUARE CLOSE_SQUARE
  | OPERATOR OPEN_ANGLE
  | OPERATOR OPEN_ANGLE OPEN_ANGLE
  | OPERATOR CLOSE_ANGLE
  | OPERATOR CLOSE_ANGLE CLOSE_ANGLE
  | OPERATOR OPEN_PAREN CLOSE_PAREN
  ;

functionModifier
  : STATIC
  | CONST
  | VIRTUAL
  | FORCEINLINE
  | INLINE
  | FRIEND
  | TEMPLATE contentWithNestedAngles
  ;

namespaceDeclaration
  : NAMESPACE identifier contentWithNestedBraces
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
