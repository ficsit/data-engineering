lexer grammar SatisfactoryHeaderLexer;

channels { COMMENTS_CHANNEL, WHITESPACE_CHANNEL }

fragment Space:   [ \t];
fragment Newline: '\r'? '\n';

// Keywords

CLASS: 'class';
CONST: 'const';
ENUM: 'enum';
FALSE: 'false';
FRIEND: 'friend';
OVERRIDE: 'override';
PRIVATE: 'private';
PROTECTED: 'protected';
PUBLIC: 'public';
STATIC: 'static';
TRUE: 'true';
VIRTUAL: 'virtual';

// Satisfactory Specifics
UCLASS: 'UCLASS';
UENUM: 'UENUM';
UFUNCTION: 'UFUNCTION';
UINTERFACE: 'UINTERFACE';
UMETA: 'UMETA';
UPARAM: 'UPARAM';
UPROPERTY: 'UPROPERTY';
FORCEINLINE: 'FORCEINLINE';
SF_CLASS_TAG: 'FACTORYGAME_API';
SF_GENERATED_BODY: 'GENERATED_' [A-Z_]* 'BODY';

// Symbols

COLON:       ':';
OPEN_PAREN:  '(';
CLOSE_PAREN: ')';
OPEN_BRACE:  '{';
CLOSE_BRACE: '}';
OPEN_ANGLE:  '<';
CLOSE_ANGLE: '>';
COMMA:       ',';
PERIOD:      '.';
EQUALS:      '=';
SEMICOLON:   ';';
STAR:        '*';
AMPERSAND:   '&';
HYPHEN:      '-';
PIPE:        '|';
BANG:        '!';

// Generic
IDENTIFIER: [a-zA-Z][a-zA-Z0-9_]+;
STRING_LITERAL: '"' .*? '"';
FLOAT_LITERAL: [0-9]+ '.' [0-9]+;
INTEGER_LITERAL: [0-9]+;

// Blocks

PREPROCESSOR:   '#' ~[\r\n]*  -> skip;
LINE_COMMENT_START:  '//' Space? -> skip, pushMode(LINE_COMMENT);
BLOCK_COMMENT_START: '/*' '*'* Space? -> skip, pushMode(BLOCK_COMMENT);

// Fallback

WHITESPACE: [ \t\r\n]+ -> skip;

mode LINE_COMMENT;

LINE_COMMENT_END: Space? Newline -> skip, popMode;
LINE_COMMENT_TEXT: ~[\r\n]+ -> channel(COMMENTS_CHANNEL);
LINE_COMMENT_OTHER: . -> skip;

mode BLOCK_COMMENT;

BLOCK_COMMENT_END: Space* '*/' -> skip, popMode;
BLOCK_COMMENT_NEW_LINE: Newline Space* '*' ~'/' -> skip;
BLOCK_COMMENT_TEXT: ~[*\r\n]+ -> channel(COMMENTS_CHANNEL);
BLOCK_COMMENT_OTHER: . -> skip;
