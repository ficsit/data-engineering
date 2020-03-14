lexer grammar SatisfactoryHeaderLexer;

channels { COMMENTS_CHANNEL, WHITESPACE_CHANNEL }

fragment Space:   [ \t];
fragment Newline: '\r'? '\n';

// Keywords

CLASS: 'class';
CONST: 'const';
FRIEND: 'friend';
PRIVATE: 'private';
PROTECTED: 'protected';
PUBLIC: 'public';
STATIC: 'static';
VIRTUAL: 'virtual';

// Satisfactory Specifics
UCLASS: 'UCLASS';
UFUNCTION: 'UFUNCTION';
UPARAM: 'UPARAM';
UPROPERTY: 'UPROPERTY';
SF_CLASS_TAG: 'FACTORYGAME_API';
SF_GENERATED_BODY: 'GENERATED_BODY';
FORCEINLINE: 'FORCEINLINE';

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




// // Paired Tokens



// // Channel Redirects

// START_SINGLE_COMMENT: '//' -> skip, pushMode(SINGLE_COMMENT);
// START_MULTI_COMMENT:  '/' '*'+ ' '? -> skip, pushMode(MULTI_COMMENT);

// PREPROCESSOR:   '#' ~[\r\n]*  -> skip;

// // MULTI_COMMENT:  '/*' .*? '*/' -> channel(COMMENTS_CHANNEL);
// // SINGLE_COMMENT: '//' ~[\r\n]* -> channel(COMMENTS_CHANNEL);

// mode SINGLE_COMMENT;

// END_SINGLE_COMMENT: Newline -> skip, popMode;
// SINGLE_COMMENT_TEXT: .+?    -> channel(COMMENTS_CHANNEL);

// mode MULTI_COMMENT;

// MULTI_COMMENT_LINE_WRAP_START: Newline {console.log('MULTI_COMMENT_LINE_WRAP_START')} -> channel(COMMENTS_CHANNEL), pushMode(MULTI_COMMENT_LINE_WRAP) ;
// END_MULTI_COMMENT:  '*/' -> skip, popMode;
// // MULTI_COMMENT_LINE_WRAP: '\n' ' '+ -> channel(COMMENTS_CHANNEL);

// MULTI_COMMENT_TEXT: ~'*'+  -> channel(COMMENTS_CHANNEL);
// MULTI_COMMENT_STAR: '*' -> channel(COMMENTS_CHANNEL);

// mode MULTI_COMMENT_LINE_WRAP;

// // MULTI_COMMENT_LINE_WRAP_SPACE: ' '*? '*' -> skip;
// MULTI_COMMENT_LINE_WRAP_SPACE: [ \t]+ -> channel(COMMENTS_CHANNEL);
// MULTI_COMMENT_LINE_WRAP_END: . -> channel(COMMENTS_CHANNEL), popMode;

// // MULTI_COMMENT_LINE_WRAP_SPACE: ' ' -> channel(COMMENTS_CHANNEL);
// // MULTI_COMMENT_LINE_WRAP_END: . -> channel(COMMENTS_CHANNEL), popMode;

// // MULTI_COMMENT_LINE_WRAP_TEXT: .+?  -> channel(COMMENTS_CHANNEL), popMode;
// // MULTI_COMMENT_LINE_WRAP_END: ~' ' -> channel(COMMENTS_CHANNEL), popMode;

// mode DEFAULT_MODE;

// fragment Whitespace: [ \t];
// fragment Newline:    '\r'? '\n';

// WHITESPACE: Whitespace+ -> skip;
// NEWLINE:    Newline     -> channel(COMMENTS_CHANNEL);

// WORD: [a-zA-Z]+;
// NUMBER: [0-9]+;
// SYMBOL: .+?;
