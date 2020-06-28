lexer grammar SatisfactoryHeaderLexer;

channels { COMMENTS_CHANNEL, WHITESPACE_CHANNEL }

fragment Space:   [ \t];
fragment Newline: '\r'? '\n';

// Keywords

CLASS: 'class';
CONST: 'const';
CONSTEXPR: 'constexpr';
ENUM: 'enum';
FALSE: 'false';
FORCEINLINE: 'FORCEINLINE';
FRIEND: 'friend';
INLINE: 'inline';
MUTABLE: 'mutable';
NAMESPACE: 'namespace';
OPERATOR: 'operator';
OVERRIDE: 'override';
PRIVATE: 'private';
PROTECTED: 'protected';
PUBLIC: 'public';
STATIC: 'static';
STRUCT: 'struct';
TEMPLATE: 'template';
TRUE: 'true';
TYPEDEF: 'typedef';
TYPENAME: 'typename';
USING: 'using';
VIRTUAL: 'virtual';

// Satisfactory Specifics
UCLASS: 'UCLASS';
UENUM: 'UENUM';
UFUNCTION: 'UFUNCTION';
UINTERFACE: 'UINTERFACE';
UMETA: 'UMETA';
UPARAM: 'UPARAM';
UPROPERTY: 'UPROPERTY';
USTRUCT: 'USTRUCT';
UE_DEPRECATED: 'UE_DEPRECATED';
STAT: 'STAT';

SF_CLASS_TAG: 'FACTORYGAME_API';
SF_GENERATED_BODY: 'GENERATED_' [A-Z_]* 'BODY';

// Symbols

AMPERSAND:    '&';
BACKSLASH:    '/';
BANG:         '!';
CLOSE_ANGLE:  '>';
CLOSE_BRACE:  '}';
CLOSE_PAREN:  ')';
CLOSE_SQUARE: ']';
COLON:        ':';
COMMA:        ',';
EQUALS:       '=';
MINUS:        '-';
OPEN_ANGLE:   '<';
OPEN_BRACE:   '{';
OPEN_PAREN:   '(';
OPEN_SQUARE:  '[';
PERCENT:      '%';
PERIOD:       '.';
PIPE:         '|';
PLUS:         '+';
QUESTION:     '?';
SEMICOLON:    ';';
SLASH:        '\\';
STAR:         '*';
TILDE:        '~';

// Generic
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
STRING_LITERAL: '"' .*? '"';
FLOAT_LITERAL: '-'? [0-9]+ '.' [0-9]* 'f'?;
INTEGER_LITERAL: '-'? [0-9]+;

// Blocks

MultiLineMacro
   : '#' (~ [\n]*? '\\' '\r'? '\n')+ ~ [\n]+ -> channel (HIDDEN)
   ;

Directive
   : '#' ~ [\n]* -> channel (HIDDEN)
   ;

LINE_COMMENT_START:  '//' '*'* Space? -> skip, pushMode(LINE_COMMENT);
BLOCK_COMMENT_START: '/*' '*'* Space? -> skip, pushMode(BLOCK_COMMENT);

// Fallback

WHITESPACE: [ \t\r\n]+ -> skip;

mode LINE_COMMENT;

LINE_COMMENT_END: Space? Newline -> skip, popMode;
LINE_COMMENT_TEXT: ~[\r\n]+ -> channel(COMMENTS_CHANNEL);
LINE_COMMENT_OTHER: . -> skip;

mode BLOCK_COMMENT;

BLOCK_COMMENT_END: Space* '*/' -> skip, popMode;
BLOCK_COMMENT_NEW_LINE: Newline Space* '*'+ ~[/*] -> skip;
BLOCK_COMMENT_TEXT: ~[*\r\n]+ -> channel(COMMENTS_CHANNEL);
BLOCK_COMMENT_OTHER: . -> skip;
