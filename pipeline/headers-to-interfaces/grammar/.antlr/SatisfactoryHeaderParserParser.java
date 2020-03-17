// Generated from /Users/ianm/code/ficsit/data-engineering/pipeline/headers-to-interfaces/grammar/SatisfactoryHeaderParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SatisfactoryHeaderParserParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CLASS=1, CONST=2, CONSTEXPR=3, ENUM=4, FALSE=5, FORCEINLINE=6, FRIEND=7, 
		INLINE=8, MUTABLE=9, NAMESPACE=10, OPERATOR=11, OVERRIDE=12, PRIVATE=13, 
		PROTECTED=14, PUBLIC=15, STATIC=16, STRUCT=17, TEMPLATE=18, TRUE=19, TYPEDEF=20, 
		TYPENAME=21, USING=22, VIRTUAL=23, UCLASS=24, UENUM=25, UFUNCTION=26, 
		UINTERFACE=27, UMETA=28, UPARAM=29, UPROPERTY=30, USTRUCT=31, UE_DEPRECATED=32, 
		STAT=33, SF_CLASS_TAG=34, SF_GENERATED_BODY=35, AMPERSAND=36, BACKSLASH=37, 
		BANG=38, CLOSE_ANGLE=39, CLOSE_BRACE=40, CLOSE_PAREN=41, CLOSE_SQUARE=42, 
		COLON=43, COMMA=44, EQUALS=45, MINUS=46, OPEN_ANGLE=47, OPEN_BRACE=48, 
		OPEN_PAREN=49, OPEN_SQUARE=50, PERCENT=51, PERIOD=52, PIPE=53, PLUS=54, 
		QUESTION=55, SEMICOLON=56, SLASH=57, STAR=58, TILDE=59, IDENTIFIER=60, 
		STRING_LITERAL=61, FLOAT_LITERAL=62, INTEGER_LITERAL=63, PREPROCESSOR=64, 
		LINE_COMMENT_START=65, BLOCK_COMMENT_START=66, WHITESPACE=67, LINE_COMMENT_END=68, 
		LINE_COMMENT_TEXT=69, LINE_COMMENT_OTHER=70, BLOCK_COMMENT_END=71, BLOCK_COMMENT_NEW_LINE=72, 
		BLOCK_COMMENT_TEXT=73, BLOCK_COMMENT_OTHER=74, PREPROCESSOR_MACRO_SKIPPED_NEWLINE=75, 
		PREPROCESSOR_MACRO_NEWLINE=76, PREPROCESSOR_MACRO_OTHER=77;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_booleanLiteral = 7, 
		RULE_typeDeclaration = 8, RULE_templateType = 9, RULE_typeModifier = 10, 
		RULE_typeReferenceType = 11, RULE_classDeclaration = 12, RULE_classHeader = 13, 
		RULE_classMacro = 14, RULE_templateDeclaration = 15, RULE_classKeyword = 16, 
		RULE_classInheritance = 17, RULE_classExtensionList = 18, RULE_classExtension = 19, 
		RULE_classBody = 20, RULE_classEntries = 21, RULE_classEntry = 22, RULE_classVisibility = 23, 
		RULE_classVisibilityModifier = 24, RULE_friendDeclaration = 25, RULE_statDeclaration = 26, 
		RULE_classMethod = 27, RULE_classMethodEnd = 28, RULE_classMethodResultModifier = 29, 
		RULE_classInitializerList = 30, RULE_classInitializer = 31, RULE_classProperty = 32, 
		RULE_classPropertyDefaultValue = 33, RULE_literalExpression = 34, RULE_classPropertyArraySize = 35, 
		RULE_nestedEnum = 36, RULE_nestedClass = 37, RULE_nestedStruct = 38, RULE_enumDeclaration = 39, 
		RULE_enumHeader = 40, RULE_enumBody = 41, RULE_enumEntry = 42, RULE_enumValue = 43, 
		RULE_staticFunctionDeclaration = 44, RULE_staticPropertyDeclaration = 45, 
		RULE_staticInlineFunctionDeclaration = 46, RULE_staticMethodCall = 47, 
		RULE_typedef = 48, RULE_contentWithNestedParens = 49, RULE_contentWithNestedParensInner = 50, 
		RULE_contentWithNestedBraces = 51, RULE_contentWithNestedBracesInner = 52, 
		RULE_contentWithNestedAngles = 53, RULE_contentWithNestedAnglesInner = 54, 
		RULE_contentWithNestedSquares = 55, RULE_contentWithNestedSquaresInner = 56, 
		RULE_functionName = 57, RULE_functionModifier = 58, RULE_namespaceDeclaration = 59, 
		RULE_usingNamespace = 60, RULE_uclassMacro = 61, RULE_uenumMacro = 62, 
		RULE_ufunctionMacro = 63, RULE_uinterfaceMacro = 64, RULE_umetaMacro = 65, 
		RULE_uParamMacro = 66, RULE_upropertyMacro = 67, RULE_ustructMacro = 68, 
		RULE_uedeprecatedMacro = 69, RULE_generatedBodyMacro = 70, RULE_macroPropertyList = 71, 
		RULE_macroPropertyListEntries = 72, RULE_macroProperty = 73, RULE_macroPropertyPair = 74;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"typeModifier", "typeReferenceType", "classDeclaration", "classHeader", 
		"classMacro", "templateDeclaration", "classKeyword", "classInheritance", 
		"classExtensionList", "classExtension", "classBody", "classEntries", "classEntry", 
		"classVisibility", "classVisibilityModifier", "friendDeclaration", "statDeclaration", 
		"classMethod", "classMethodEnd", "classMethodResultModifier", "classInitializerList", 
		"classInitializer", "classProperty", "classPropertyDefaultValue", "literalExpression", 
		"classPropertyArraySize", "nestedEnum", "nestedClass", "nestedStruct", 
		"enumDeclaration", "enumHeader", "enumBody", "enumEntry", "enumValue", 
		"staticFunctionDeclaration", "staticPropertyDeclaration", "staticInlineFunctionDeclaration", 
		"staticMethodCall", "typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
		"contentWithNestedBraces", "contentWithNestedBracesInner", "contentWithNestedAngles", 
		"contentWithNestedAnglesInner", "contentWithNestedSquares", "contentWithNestedSquaresInner", 
		"functionName", "functionModifier", "namespaceDeclaration", "usingNamespace", 
		"uclassMacro", "uenumMacro", "ufunctionMacro", "uinterfaceMacro", "umetaMacro", 
		"uParamMacro", "upropertyMacro", "ustructMacro", "uedeprecatedMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'constexpr'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'namespace'", "'operator'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'template'", 
		"'true'", "'typedef'", "'typename'", "'using'", "'virtual'", "'UCLASS'", 
		"'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'USTRUCT'", "'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", null, "'&'", 
		"'/'", "'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", "'-'", 
		"'<'", "'{'", "'('", "'['", "'%'", "'.'", "'|'", "'+'", "'?'", "';'", 
		"'\\'", "'*'", "'~'", null, null, null, null, "'#'", null, null, null, 
		null, null, null, null, null, null, null, "'\\\n'", "'\n'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", 
		"INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "TYPENAME", 
		"USING", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", 
		"UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "OPEN_SQUARE", "PERCENT", 
		"PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "SLASH", "STAR", "TILDE", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER", "PREPROCESSOR_MACRO_SKIPPED_NEWLINE", 
		"PREPROCESSOR_MACRO_NEWLINE", "PREPROCESSOR_MACRO_OTHER"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SatisfactoryHeaderParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SatisfactoryHeaderParserParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class FileContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << NAMESPACE) | (1L << OPERATOR) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << USING) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UINTERFACE) | (1L << UPARAM) | (1L << USTRUCT) | (1L << SEMICOLON) | (1L << TILDE) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(150);
				element();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public NamespaceDeclarationContext namespaceDeclaration() {
			return getRuleContext(NamespaceDeclarationContext.class,0);
		}
		public StaticMethodCallContext staticMethodCall() {
			return getRuleContext(StaticMethodCallContext.class,0);
		}
		public StaticFunctionDeclarationContext staticFunctionDeclaration() {
			return getRuleContext(StaticFunctionDeclarationContext.class,0);
		}
		public StaticInlineFunctionDeclarationContext staticInlineFunctionDeclaration() {
			return getRuleContext(StaticInlineFunctionDeclarationContext.class,0);
		}
		public StaticPropertyDeclarationContext staticPropertyDeclaration() {
			return getRuleContext(StaticPropertyDeclarationContext.class,0);
		}
		public TypedefContext typedef() {
			return getRuleContext(TypedefContext.class,0);
		}
		public UsingNamespaceContext usingNamespace() {
			return getRuleContext(UsingNamespaceContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_element);
		try {
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(156);
				classDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(157);
				enumDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(158);
				namespaceDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(159);
				staticMethodCall();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(160);
				staticFunctionDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(161);
				staticInlineFunctionDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(162);
				staticPropertyDeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(163);
				typedef();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(164);
				usingNamespace();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(165);
				match(SEMICOLON);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_value);
		try {
			setState(170);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(168);
				identifier();
				}
				break;
			case FALSE:
			case TRUE:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(169);
				literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_literal);
		try {
			setState(175);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(174);
				booleanLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(SatisfactoryHeaderParserParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(SatisfactoryHeaderParserParser.IDENTIFIER, i);
		}
		public List<TerminalNode> COLON() { return getTokens(SatisfactoryHeaderParserParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(SatisfactoryHeaderParserParser.COLON, i);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_identifier);
		try {
			setState(182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(177);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(178);
				match(IDENTIFIER);
				setState(179);
				match(COLON);
				setState(180);
				match(COLON);
				setState(181);
				match(IDENTIFIER);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STRING_LITERAL() { return getToken(SatisfactoryHeaderParserParser.STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_stringLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode INTEGER_LITERAL() { return getToken(SatisfactoryHeaderParserParser.INTEGER_LITERAL, 0); }
		public TerminalNode FLOAT_LITERAL() { return getToken(SatisfactoryHeaderParserParser.FLOAT_LITERAL, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			_la = _input.LA(1);
			if ( !(_la==FLOAT_LITERAL || _la==INTEGER_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanLiteralContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(SatisfactoryHeaderParserParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(SatisfactoryHeaderParserParser.FALSE, 0); }
		public BooleanLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanLiteral; }
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_la = _input.LA(1);
			if ( !(_la==FALSE || _la==TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDeclarationContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TypeModifierContext> typeModifier() {
			return getRuleContexts(TypeModifierContext.class);
		}
		public TypeModifierContext typeModifier(int i) {
			return getRuleContext(TypeModifierContext.class,i);
		}
		public TemplateTypeContext templateType() {
			return getRuleContext(TemplateTypeContext.class,0);
		}
		public TypeReferenceTypeContext typeReferenceType() {
			return getRuleContext(TypeReferenceTypeContext.class,0);
		}
		public TerminalNode CONSTEXPR() { return getToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
		public TypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDeclaration; }
	}

	public final TypeDeclarationContext typeDeclaration() throws RecognitionException {
		TypeDeclarationContext _localctx = new TypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << MUTABLE) | (1L << STATIC) | (1L << STRUCT) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(190);
				typeModifier();
				}
				}
				setState(195);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(196);
			identifier();
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(197);
				templateType();
				}
			}

			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AMPERSAND || _la==STAR) {
				{
				setState(200);
				typeReferenceType();
				}
			}

			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONSTEXPR) {
				{
				setState(203);
				match(CONSTEXPR);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateTypeContext extends ParserRuleContext {
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public TemplateTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateType; }
	}

	public final TemplateTypeContext templateType() throws RecognitionException {
		TemplateTypeContext _localctx = new TemplateTypeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_templateType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			contentWithNestedAngles();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeModifierContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public TerminalNode CONSTEXPR() { return getToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
		public TerminalNode ENUM() { return getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
		public TerminalNode STRUCT() { return getToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
		public TerminalNode STATIC() { return getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
		public TerminalNode MUTABLE() { return getToken(SatisfactoryHeaderParserParser.MUTABLE, 0); }
		public UParamMacroContext uParamMacro() {
			return getRuleContext(UParamMacroContext.class,0);
		}
		public TypeModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeModifier; }
	}

	public final TypeModifierContext typeModifier() throws RecognitionException {
		TypeModifierContext _localctx = new TypeModifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_typeModifier);
		try {
			setState(216);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(209);
				match(CONST);
				}
				break;
			case CONSTEXPR:
				enterOuterAlt(_localctx, 3);
				{
				setState(210);
				match(CONSTEXPR);
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 4);
				{
				setState(211);
				match(ENUM);
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 5);
				{
				setState(212);
				match(STRUCT);
				}
				break;
			case STATIC:
				enterOuterAlt(_localctx, 6);
				{
				setState(213);
				match(STATIC);
				}
				break;
			case MUTABLE:
				enterOuterAlt(_localctx, 7);
				{
				setState(214);
				match(MUTABLE);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 8);
				{
				setState(215);
				uParamMacro();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeReferenceTypeContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(SatisfactoryHeaderParserParser.STAR, 0); }
		public TerminalNode AMPERSAND() { return getToken(SatisfactoryHeaderParserParser.AMPERSAND, 0); }
		public TypeReferenceTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeReferenceType; }
	}

	public final TypeReferenceTypeContext typeReferenceType() throws RecognitionException {
		TypeReferenceTypeContext _localctx = new TypeReferenceTypeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_typeReferenceType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_la = _input.LA(1);
			if ( !(_la==AMPERSAND || _la==STAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public ClassHeaderContext classHeader() {
			return getRuleContext(ClassHeaderContext.class,0);
		}
		public TerminalNode OPEN_BRACE() { return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_classDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			classHeader();
			setState(221);
			match(OPEN_BRACE);
			setState(222);
			classBody();
			setState(223);
			match(CLOSE_BRACE);
			setState(225);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(224);
				match(SEMICOLON);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassHeaderContext extends ParserRuleContext {
		public ClassKeywordContext classKeyword() {
			return getRuleContext(ClassKeywordContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassMacroContext classMacro() {
			return getRuleContext(ClassMacroContext.class,0);
		}
		public TemplateDeclarationContext templateDeclaration() {
			return getRuleContext(TemplateDeclarationContext.class,0);
		}
		public TerminalNode SF_CLASS_TAG() { return getToken(SatisfactoryHeaderParserParser.SF_CLASS_TAG, 0); }
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public ClassInheritanceContext classInheritance() {
			return getRuleContext(ClassInheritanceContext.class,0);
		}
		public ClassHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classHeader; }
	}

	public final ClassHeaderContext classHeader() throws RecognitionException {
		ClassHeaderContext _localctx = new ClassHeaderContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_classHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UCLASS) | (1L << UINTERFACE) | (1L << USTRUCT))) != 0)) {
				{
				setState(227);
				classMacro();
				}
			}

			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TEMPLATE) {
				{
				setState(230);
				templateDeclaration();
				}
			}

			setState(233);
			classKeyword();
			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(234);
				match(SF_CLASS_TAG);
				}
			}

			setState(237);
			identifier();
			setState(239);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(238);
				contentWithNestedAngles();
				}
			}

			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(241);
				classInheritance();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMacroContext extends ParserRuleContext {
		public UclassMacroContext uclassMacro() {
			return getRuleContext(UclassMacroContext.class,0);
		}
		public UinterfaceMacroContext uinterfaceMacro() {
			return getRuleContext(UinterfaceMacroContext.class,0);
		}
		public UstructMacroContext ustructMacro() {
			return getRuleContext(UstructMacroContext.class,0);
		}
		public ClassMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMacro; }
	}

	public final ClassMacroContext classMacro() throws RecognitionException {
		ClassMacroContext _localctx = new ClassMacroContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_classMacro);
		try {
			setState(247);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(244);
				uclassMacro();
				}
				break;
			case UINTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(245);
				uinterfaceMacro();
				}
				break;
			case USTRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(246);
				ustructMacro();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateDeclarationContext extends ParserRuleContext {
		public TerminalNode TEMPLATE() { return getToken(SatisfactoryHeaderParserParser.TEMPLATE, 0); }
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public TemplateDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateDeclaration; }
	}

	public final TemplateDeclarationContext templateDeclaration() throws RecognitionException {
		TemplateDeclarationContext _localctx = new TemplateDeclarationContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_templateDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(TEMPLATE);
			setState(250);
			contentWithNestedAngles();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassKeywordContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TerminalNode STRUCT() { return getToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
		public ClassKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classKeyword; }
	}

	public final ClassKeywordContext classKeyword() throws RecognitionException {
		ClassKeywordContext _localctx = new ClassKeywordContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_classKeyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			_la = _input.LA(1);
			if ( !(_la==CLASS || _la==STRUCT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassInheritanceContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(SatisfactoryHeaderParserParser.COLON, 0); }
		public ClassExtensionListContext classExtensionList() {
			return getRuleContext(ClassExtensionListContext.class,0);
		}
		public ClassInheritanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classInheritance; }
	}

	public final ClassInheritanceContext classInheritance() throws RecognitionException {
		ClassInheritanceContext _localctx = new ClassInheritanceContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_classInheritance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			match(COLON);
			setState(255);
			classExtensionList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassExtensionListContext extends ParserRuleContext {
		public ClassExtensionContext classExtension() {
			return getRuleContext(ClassExtensionContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public ClassExtensionListContext classExtensionList() {
			return getRuleContext(ClassExtensionListContext.class,0);
		}
		public ClassExtensionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classExtensionList; }
	}

	public final ClassExtensionListContext classExtensionList() throws RecognitionException {
		ClassExtensionListContext _localctx = new ClassExtensionListContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_classExtensionList);
		try {
			setState(262);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(257);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(258);
				classExtension();
				setState(259);
				match(COMMA);
				setState(260);
				classExtensionList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassExtensionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassVisibilityModifierContext classVisibilityModifier() {
			return getRuleContext(ClassVisibilityModifierContext.class,0);
		}
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public ClassExtensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classExtension; }
	}

	public final ClassExtensionContext classExtension() throws RecognitionException {
		ClassExtensionContext _localctx = new ClassExtensionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_classExtension);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC))) != 0)) {
				{
				setState(264);
				classVisibilityModifier();
				}
			}

			setState(267);
			identifier();
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(268);
				contentWithNestedAngles();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyContext extends ParserRuleContext {
		public ClassEntriesContext classEntries() {
			return getRuleContext(ClassEntriesContext.class,0);
		}
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_GENERATED_BODY) | (1L << SEMICOLON) | (1L << TILDE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(271);
				classEntries();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassEntriesContext extends ParserRuleContext {
		public ClassEntryContext classEntry() {
			return getRuleContext(ClassEntryContext.class,0);
		}
		public ClassEntriesContext classEntries() {
			return getRuleContext(ClassEntriesContext.class,0);
		}
		public ClassEntriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classEntries; }
	}

	public final ClassEntriesContext classEntries() throws RecognitionException {
		ClassEntriesContext _localctx = new ClassEntriesContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_classEntries);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			classEntry();
			setState(276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_GENERATED_BODY) | (1L << SEMICOLON) | (1L << TILDE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(275);
				classEntries();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassEntryContext extends ParserRuleContext {
		public ClassVisibilityContext classVisibility() {
			return getRuleContext(ClassVisibilityContext.class,0);
		}
		public ClassMethodContext classMethod() {
			return getRuleContext(ClassMethodContext.class,0);
		}
		public FriendDeclarationContext friendDeclaration() {
			return getRuleContext(FriendDeclarationContext.class,0);
		}
		public ClassPropertyContext classProperty() {
			return getRuleContext(ClassPropertyContext.class,0);
		}
		public StatDeclarationContext statDeclaration() {
			return getRuleContext(StatDeclarationContext.class,0);
		}
		public NestedEnumContext nestedEnum() {
			return getRuleContext(NestedEnumContext.class,0);
		}
		public NestedClassContext nestedClass() {
			return getRuleContext(NestedClassContext.class,0);
		}
		public NestedStructContext nestedStruct() {
			return getRuleContext(NestedStructContext.class,0);
		}
		public TypedefContext typedef() {
			return getRuleContext(TypedefContext.class,0);
		}
		public GeneratedBodyMacroContext generatedBodyMacro() {
			return getRuleContext(GeneratedBodyMacroContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public ClassEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classEntry; }
	}

	public final ClassEntryContext classEntry() throws RecognitionException {
		ClassEntryContext _localctx = new ClassEntryContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_classEntry);
		try {
			setState(289);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(278);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(279);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(280);
				friendDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(281);
				classProperty();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(282);
				statDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(283);
				nestedEnum();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(284);
				nestedClass();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(285);
				nestedStruct();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(286);
				typedef();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(287);
				generatedBodyMacro();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(288);
				match(SEMICOLON);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassVisibilityContext extends ParserRuleContext {
		public ClassVisibilityModifierContext classVisibilityModifier() {
			return getRuleContext(ClassVisibilityModifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(SatisfactoryHeaderParserParser.COLON, 0); }
		public ClassVisibilityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classVisibility; }
	}

	public final ClassVisibilityContext classVisibility() throws RecognitionException {
		ClassVisibilityContext _localctx = new ClassVisibilityContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_classVisibility);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			classVisibilityModifier();
			setState(292);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassVisibilityModifierContext extends ParserRuleContext {
		public TerminalNode PUBLIC() { return getToken(SatisfactoryHeaderParserParser.PUBLIC, 0); }
		public TerminalNode PROTECTED() { return getToken(SatisfactoryHeaderParserParser.PROTECTED, 0); }
		public TerminalNode PRIVATE() { return getToken(SatisfactoryHeaderParserParser.PRIVATE, 0); }
		public ClassVisibilityModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classVisibilityModifier; }
	}

	public final ClassVisibilityModifierContext classVisibilityModifier() throws RecognitionException {
		ClassVisibilityModifierContext _localctx = new ClassVisibilityModifierContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_classVisibilityModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FriendDeclarationContext extends ParserRuleContext {
		public TerminalNode FRIEND() { return getToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public ClassKeywordContext classKeyword() {
			return getRuleContext(ClassKeywordContext.class,0);
		}
		public FriendDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_friendDeclaration; }
	}

	public final FriendDeclarationContext friendDeclaration() throws RecognitionException {
		FriendDeclarationContext _localctx = new FriendDeclarationContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_friendDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			match(FRIEND);
			setState(298);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLASS || _la==STRUCT) {
				{
				setState(297);
				classKeyword();
				}
			}

			setState(300);
			identifier();
			setState(301);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatDeclarationContext extends ParserRuleContext {
		public TerminalNode STAT() { return getToken(SatisfactoryHeaderParserParser.STAT, 0); }
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public StatDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statDeclaration; }
	}

	public final StatDeclarationContext statDeclaration() throws RecognitionException {
		StatDeclarationContext _localctx = new StatDeclarationContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_statDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(STAT);
			setState(304);
			contentWithNestedParens();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMethodContext extends ParserRuleContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public ClassMethodEndContext classMethodEnd() {
			return getRuleContext(ClassMethodEndContext.class,0);
		}
		public UedeprecatedMacroContext uedeprecatedMacro() {
			return getRuleContext(UedeprecatedMacroContext.class,0);
		}
		public UfunctionMacroContext ufunctionMacro() {
			return getRuleContext(UfunctionMacroContext.class,0);
		}
		public List<FunctionModifierContext> functionModifier() {
			return getRuleContexts(FunctionModifierContext.class);
		}
		public FunctionModifierContext functionModifier(int i) {
			return getRuleContext(FunctionModifierContext.class,i);
		}
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public List<ClassMethodResultModifierContext> classMethodResultModifier() {
			return getRuleContexts(ClassMethodResultModifierContext.class);
		}
		public ClassMethodResultModifierContext classMethodResultModifier(int i) {
			return getRuleContext(ClassMethodResultModifierContext.class,i);
		}
		public ClassMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethod; }
	}

	public final ClassMethodContext classMethod() throws RecognitionException {
		ClassMethodContext _localctx = new ClassMethodContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_classMethod);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UE_DEPRECATED) {
				{
				setState(306);
				uedeprecatedMacro();
				}
			}

			setState(310);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(309);
				ufunctionMacro();
				}
				break;
			}
			setState(315);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(312);
					functionModifier();
					}
					} 
				}
				setState(317);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			setState(319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(318);
				typeDeclaration();
				}
				break;
			}
			setState(321);
			functionName();
			setState(322);
			contentWithNestedParens();
			setState(326);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(323);
					classMethodResultModifier();
					}
					} 
				}
				setState(328);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			setState(329);
			classMethodEnd();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMethodEndContext extends ParserRuleContext {
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public TerminalNode COLON() { return getToken(SatisfactoryHeaderParserParser.COLON, 0); }
		public ClassInitializerListContext classInitializerList() {
			return getRuleContext(ClassInitializerListContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public ClassMethodEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodEnd; }
	}

	public final ClassMethodEndContext classMethodEnd() throws RecognitionException {
		ClassMethodEndContext _localctx = new ClassMethodEndContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_classMethodEnd);
		try {
			setState(348);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case CONSTEXPR:
			case ENUM:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
			case OPERATOR:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRUCT:
			case TEMPLATE:
			case TYPEDEF:
			case VIRTUAL:
			case UFUNCTION:
			case UPARAM:
			case UPROPERTY:
			case UE_DEPRECATED:
			case STAT:
			case SF_GENERATED_BODY:
			case CLOSE_BRACE:
			case SEMICOLON:
			case TILDE:
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(332);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(331);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(334);
				contentWithNestedBraces();
				setState(336);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(335);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 3);
				{
				setState(338);
				match(COLON);
				setState(339);
				classInitializerList();
				setState(340);
				contentWithNestedBraces();
				setState(342);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(341);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case EQUALS:
				enterOuterAlt(_localctx, 4);
				{
				setState(344);
				match(EQUALS);
				setState(345);
				numericLiteral();
				setState(346);
				match(SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMethodResultModifierContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public TerminalNode OVERRIDE() { return getToken(SatisfactoryHeaderParserParser.OVERRIDE, 0); }
		public ClassMethodResultModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodResultModifier; }
	}

	public final ClassMethodResultModifierContext classMethodResultModifier() throws RecognitionException {
		ClassMethodResultModifierContext _localctx = new ClassMethodResultModifierContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_classMethodResultModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			_la = _input.LA(1);
			if ( !(_la==CONST || _la==OVERRIDE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassInitializerListContext extends ParserRuleContext {
		public ClassInitializerContext classInitializer() {
			return getRuleContext(ClassInitializerContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public ClassInitializerListContext classInitializerList() {
			return getRuleContext(ClassInitializerListContext.class,0);
		}
		public ClassInitializerListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classInitializerList; }
	}

	public final ClassInitializerListContext classInitializerList() throws RecognitionException {
		ClassInitializerListContext _localctx = new ClassInitializerListContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_classInitializerList);
		try {
			setState(357);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(352);
				classInitializer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(353);
				classInitializer();
				setState(354);
				match(COMMA);
				setState(355);
				classInitializerList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassInitializerContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public ClassInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classInitializer; }
	}

	public final ClassInitializerContext classInitializer() throws RecognitionException {
		ClassInitializerContext _localctx = new ClassInitializerContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_classInitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			identifier();
			setState(360);
			contentWithNestedParens();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassPropertyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public UpropertyMacroContext upropertyMacro() {
			return getRuleContext(UpropertyMacroContext.class,0);
		}
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public ContentWithNestedSquaresContext contentWithNestedSquares() {
			return getRuleContext(ContentWithNestedSquaresContext.class,0);
		}
		public ClassPropertyDefaultValueContext classPropertyDefaultValue() {
			return getRuleContext(ClassPropertyDefaultValueContext.class,0);
		}
		public ClassPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classProperty; }
	}

	public final ClassPropertyContext classProperty() throws RecognitionException {
		ClassPropertyContext _localctx = new ClassPropertyContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_classProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(362);
				upropertyMacro();
				}
			}

			setState(366);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(365);
				typeDeclaration();
				}
				break;
			}
			setState(368);
			identifier();
			setState(370);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_SQUARE) {
				{
				setState(369);
				contentWithNestedSquares();
				}
			}

			setState(373);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==EQUALS) {
				{
				setState(372);
				classPropertyDefaultValue();
				}
			}

			setState(375);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassPropertyDefaultValueContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(SatisfactoryHeaderParserParser.COLON, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public LiteralExpressionContext literalExpression() {
			return getRuleContext(LiteralExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public ClassPropertyDefaultValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPropertyDefaultValue; }
	}

	public final ClassPropertyDefaultValueContext classPropertyDefaultValue() throws RecognitionException {
		ClassPropertyDefaultValueContext _localctx = new ClassPropertyDefaultValueContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_classPropertyDefaultValue);
		try {
			setState(385);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(377);
				match(COLON);
				setState(378);
				literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(379);
				match(EQUALS);
				setState(380);
				literalExpression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(381);
				match(EQUALS);
				setState(382);
				identifier();
				setState(383);
				contentWithNestedParens();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralExpressionContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<LiteralExpressionContext> literalExpression() {
			return getRuleContexts(LiteralExpressionContext.class);
		}
		public LiteralExpressionContext literalExpression(int i) {
			return getRuleContext(LiteralExpressionContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(SatisfactoryHeaderParserParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(SatisfactoryHeaderParserParser.MINUS, 0); }
		public TerminalNode STAR() { return getToken(SatisfactoryHeaderParserParser.STAR, 0); }
		public TerminalNode BACKSLASH() { return getToken(SatisfactoryHeaderParserParser.BACKSLASH, 0); }
		public LiteralExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalExpression; }
	}

	public final LiteralExpressionContext literalExpression() throws RecognitionException {
		return literalExpression(0);
	}

	private LiteralExpressionContext literalExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LiteralExpressionContext _localctx = new LiteralExpressionContext(_ctx, _parentState);
		LiteralExpressionContext _prevctx = _localctx;
		int _startState = 68;
		enterRecursionRule(_localctx, 68, RULE_literalExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FALSE:
			case TRUE:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				{
				setState(388);
				literal();
				}
				break;
			case IDENTIFIER:
				{
				setState(389);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(406);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(404);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
					case 1:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literalExpression);
						setState(392);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(393);
						match(PLUS);
						setState(394);
						literalExpression(5);
						}
						break;
					case 2:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literalExpression);
						setState(395);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(396);
						match(MINUS);
						setState(397);
						literalExpression(4);
						}
						break;
					case 3:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literalExpression);
						setState(398);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(399);
						match(STAR);
						setState(400);
						literalExpression(3);
						}
						break;
					case 4:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literalExpression);
						setState(401);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(402);
						match(BACKSLASH);
						setState(403);
						literalExpression(2);
						}
						break;
					}
					} 
				}
				setState(408);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ClassPropertyArraySizeContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public ClassPropertyArraySizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPropertyArraySize; }
	}

	public final ClassPropertyArraySizeContext classPropertyArraySize() throws RecognitionException {
		ClassPropertyArraySizeContext _localctx = new ClassPropertyArraySizeContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_classPropertyArraySize);
		try {
			setState(411);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(409);
				identifier();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(410);
				numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestedEnumContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public NestedEnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedEnum; }
	}

	public final NestedEnumContext nestedEnum() throws RecognitionException {
		NestedEnumContext _localctx = new NestedEnumContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_nestedEnum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(ENUM);
			setState(415);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(414);
				identifier();
				}
			}

			setState(417);
			contentWithNestedBraces();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestedClassContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public ClassInheritanceContext classInheritance() {
			return getRuleContext(ClassInheritanceContext.class,0);
		}
		public NestedClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedClass; }
	}

	public final NestedClassContext nestedClass() throws RecognitionException {
		NestedClassContext _localctx = new NestedClassContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_nestedClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			match(CLASS);
			setState(420);
			identifier();
			setState(422);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(421);
				classInheritance();
				}
			}

			setState(424);
			contentWithNestedBraces();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestedStructContext extends ParserRuleContext {
		public TerminalNode STRUCT() { return getToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public ClassInheritanceContext classInheritance() {
			return getRuleContext(ClassInheritanceContext.class,0);
		}
		public NestedStructContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedStruct; }
	}

	public final NestedStructContext nestedStruct() throws RecognitionException {
		NestedStructContext _localctx = new NestedStructContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_nestedStruct);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(STRUCT);
			setState(427);
			identifier();
			setState(429);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(428);
				classInheritance();
				}
			}

			setState(431);
			contentWithNestedBraces();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public EnumHeaderContext enumHeader() {
			return getRuleContext(EnumHeaderContext.class,0);
		}
		public TerminalNode OPEN_BRACE() { return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
		public EnumBodyContext enumBody() {
			return getRuleContext(EnumBodyContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			enumHeader();
			setState(434);
			match(OPEN_BRACE);
			setState(435);
			enumBody();
			setState(437);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(436);
				match(COMMA);
				}
			}

			setState(439);
			match(CLOSE_BRACE);
			setState(441);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				setState(440);
				match(SEMICOLON);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumHeaderContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public UenumMacroContext uenumMacro() {
			return getRuleContext(UenumMacroContext.class,0);
		}
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TerminalNode COLON() { return getToken(SatisfactoryHeaderParserParser.COLON, 0); }
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public EnumHeaderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumHeader; }
	}

	public final EnumHeaderContext enumHeader() throws RecognitionException {
		EnumHeaderContext _localctx = new EnumHeaderContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_enumHeader);
		int _la;
		try {
			setState(462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(444);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(443);
					uenumMacro();
					}
				}

				setState(446);
				match(ENUM);
				setState(448);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(447);
					match(CLASS);
					}
				}

				setState(450);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(452);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(451);
					uenumMacro();
					}
				}

				setState(454);
				match(ENUM);
				setState(456);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(455);
					match(CLASS);
					}
				}

				setState(458);
				identifier();
				setState(459);
				match(COLON);
				setState(460);
				typeDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumBodyContext extends ParserRuleContext {
		public EnumEntryContext enumEntry() {
			return getRuleContext(EnumEntryContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public EnumBodyContext enumBody() {
			return getRuleContext(EnumBodyContext.class,0);
		}
		public EnumBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumBody; }
	}

	public final EnumBodyContext enumBody() throws RecognitionException {
		EnumBodyContext _localctx = new EnumBodyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_enumBody);
		try {
			setState(469);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(464);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(465);
				enumEntry();
				setState(466);
				match(COMMA);
				setState(467);
				enumBody();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumEntryContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EnumValueContext enumValue() {
			return getRuleContext(EnumValueContext.class,0);
		}
		public UmetaMacroContext umetaMacro() {
			return getRuleContext(UmetaMacroContext.class,0);
		}
		public EnumEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumEntry; }
	}

	public final EnumEntryContext enumEntry() throws RecognitionException {
		EnumEntryContext _localctx = new EnumEntryContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_enumEntry);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			identifier();
			setState(473);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(472);
				enumValue();
				}
			}

			setState(476);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UMETA) {
				{
				setState(475);
				umetaMacro();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumValueContext extends ParserRuleContext {
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public EnumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumValue; }
	}

	public final EnumValueContext enumValue() throws RecognitionException {
		EnumValueContext _localctx = new EnumValueContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_enumValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(478);
			match(EQUALS);
			setState(479);
			literal();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaticFunctionDeclarationContext extends ParserRuleContext {
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public List<FunctionModifierContext> functionModifier() {
			return getRuleContexts(FunctionModifierContext.class);
		}
		public FunctionModifierContext functionModifier(int i) {
			return getRuleContext(FunctionModifierContext.class,i);
		}
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public StaticFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticFunctionDeclaration; }
	}

	public final StaticFunctionDeclarationContext staticFunctionDeclaration() throws RecognitionException {
		StaticFunctionDeclarationContext _localctx = new StaticFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_staticFunctionDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(484);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,56,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(481);
					functionModifier();
					}
					} 
				}
				setState(486);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,56,_ctx);
			}
			setState(488);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				{
				setState(487);
				typeDeclaration();
				}
				break;
			}
			setState(490);
			functionName();
			setState(491);
			contentWithNestedParens();
			setState(493);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
			case 1:
				{
				setState(492);
				match(CONST);
				}
				break;
			}
			setState(496);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_BRACE) {
				{
				setState(495);
				contentWithNestedBraces();
				}
			}

			setState(499);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				{
				setState(498);
				match(SEMICOLON);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaticPropertyDeclarationContext extends ParserRuleContext {
		public TerminalNode STATIC() { return getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public StaticPropertyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticPropertyDeclaration; }
	}

	public final StaticPropertyDeclarationContext staticPropertyDeclaration() throws RecognitionException {
		StaticPropertyDeclarationContext _localctx = new StaticPropertyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_staticPropertyDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(501);
			match(STATIC);
			setState(502);
			typeDeclaration();
			setState(503);
			identifier();
			setState(504);
			match(EQUALS);
			setState(505);
			literal();
			setState(506);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaticInlineFunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode FORCEINLINE() { return getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public StaticInlineFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticInlineFunctionDeclaration; }
	}

	public final StaticInlineFunctionDeclarationContext staticInlineFunctionDeclaration() throws RecognitionException {
		StaticInlineFunctionDeclarationContext _localctx = new StaticInlineFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_staticInlineFunctionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			match(FORCEINLINE);
			setState(509);
			typeDeclaration();
			setState(510);
			identifier();
			setState(511);
			contentWithNestedParens();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StaticMethodCallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public StaticMethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticMethodCall; }
	}

	public final StaticMethodCallContext staticMethodCall() throws RecognitionException {
		StaticMethodCallContext _localctx = new StaticMethodCallContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_staticMethodCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			identifier();
			setState(514);
			contentWithNestedParens();
			setState(515);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypedefContext extends ParserRuleContext {
		public TerminalNode TYPEDEF() { return getToken(SatisfactoryHeaderParserParser.TYPEDEF, 0); }
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public TerminalNode TYPENAME() { return getToken(SatisfactoryHeaderParserParser.TYPENAME, 0); }
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TypedefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedef; }
	}

	public final TypedefContext typedef() throws RecognitionException {
		TypedefContext _localctx = new TypedefContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_typedef);
		int _la;
		try {
			setState(529);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPEDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(517);
				match(TYPEDEF);
				setState(519);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TYPENAME) {
					{
					setState(518);
					match(TYPENAME);
					}
				}

				setState(521);
				typeDeclaration();
				setState(522);
				identifier();
				setState(523);
				match(SEMICOLON);
				}
				break;
			case CLASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(525);
				match(CLASS);
				setState(526);
				identifier();
				setState(527);
				match(SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedParensContext extends ParserRuleContext {
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public TerminalNode CLOSE_PAREN() { return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
		public List<ContentWithNestedParensInnerContext> contentWithNestedParensInner() {
			return getRuleContexts(ContentWithNestedParensInnerContext.class);
		}
		public ContentWithNestedParensInnerContext contentWithNestedParensInner(int i) {
			return getRuleContext(ContentWithNestedParensInnerContext.class,i);
		}
		public ContentWithNestedParensContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedParens; }
	}

	public final ContentWithNestedParensContext contentWithNestedParens() throws RecognitionException {
		ContentWithNestedParensContext _localctx = new ContentWithNestedParensContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_contentWithNestedParens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			match(OPEN_PAREN);
			setState(535);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << NAMESPACE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << TYPENAME) | (1L << USING) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_BRACE) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERCENT) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << SLASH) | (1L << STAR) | (1L << TILDE) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (PREPROCESSOR - 64)) | (1L << (LINE_COMMENT_START - 64)) | (1L << (BLOCK_COMMENT_START - 64)) | (1L << (WHITESPACE - 64)) | (1L << (LINE_COMMENT_END - 64)) | (1L << (LINE_COMMENT_TEXT - 64)) | (1L << (LINE_COMMENT_OTHER - 64)) | (1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)) | (1L << (PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_OTHER - 64)))) != 0)) {
				{
				{
				setState(532);
				contentWithNestedParensInner();
				}
				}
				setState(537);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(538);
			match(CLOSE_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedParensInnerContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_PAREN() { return getTokens(SatisfactoryHeaderParserParser.OPEN_PAREN); }
		public TerminalNode OPEN_PAREN(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, i);
		}
		public List<TerminalNode> CLOSE_PAREN() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_PAREN); }
		public TerminalNode CLOSE_PAREN(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, i);
		}
		public ContentWithNestedParensContext contentWithNestedParens() {
			return getRuleContext(ContentWithNestedParensContext.class,0);
		}
		public ContentWithNestedParensInnerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedParensInner; }
	}

	public final ContentWithNestedParensInnerContext contentWithNestedParensInner() throws RecognitionException {
		ContentWithNestedParensInnerContext _localctx = new ContentWithNestedParensInnerContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_contentWithNestedParensInner);
		int _la;
		try {
			int _alt;
			setState(546);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case CONSTEXPR:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
			case NAMESPACE:
			case OPERATOR:
			case OVERRIDE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRUCT:
			case TEMPLATE:
			case TRUE:
			case TYPEDEF:
			case TYPENAME:
			case USING:
			case VIRTUAL:
			case UCLASS:
			case UENUM:
			case UFUNCTION:
			case UINTERFACE:
			case UMETA:
			case UPARAM:
			case UPROPERTY:
			case USTRUCT:
			case UE_DEPRECATED:
			case STAT:
			case SF_CLASS_TAG:
			case SF_GENERATED_BODY:
			case AMPERSAND:
			case BACKSLASH:
			case BANG:
			case CLOSE_ANGLE:
			case CLOSE_BRACE:
			case CLOSE_SQUARE:
			case COLON:
			case COMMA:
			case EQUALS:
			case MINUS:
			case OPEN_ANGLE:
			case OPEN_BRACE:
			case OPEN_SQUARE:
			case PERCENT:
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case SLASH:
			case STAR:
			case TILDE:
			case IDENTIFIER:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
			case PREPROCESSOR:
			case LINE_COMMENT_START:
			case BLOCK_COMMENT_START:
			case WHITESPACE:
			case LINE_COMMENT_END:
			case LINE_COMMENT_TEXT:
			case LINE_COMMENT_OTHER:
			case BLOCK_COMMENT_END:
			case BLOCK_COMMENT_NEW_LINE:
			case BLOCK_COMMENT_TEXT:
			case BLOCK_COMMENT_OTHER:
			case PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case PREPROCESSOR_MACRO_NEWLINE:
			case PREPROCESSOR_MACRO_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(541); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(540);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==CLOSE_PAREN || _la==OPEN_PAREN) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(543); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,64,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(545);
				contentWithNestedParens();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedBracesContext extends ParserRuleContext {
		public TerminalNode OPEN_BRACE() { return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
		public List<ContentWithNestedBracesInnerContext> contentWithNestedBracesInner() {
			return getRuleContexts(ContentWithNestedBracesInnerContext.class);
		}
		public ContentWithNestedBracesInnerContext contentWithNestedBracesInner(int i) {
			return getRuleContext(ContentWithNestedBracesInnerContext.class,i);
		}
		public ContentWithNestedBracesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedBraces; }
	}

	public final ContentWithNestedBracesContext contentWithNestedBraces() throws RecognitionException {
		ContentWithNestedBracesContext _localctx = new ContentWithNestedBracesContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_contentWithNestedBraces);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(548);
			match(OPEN_BRACE);
			setState(552);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << NAMESPACE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << TYPENAME) | (1L << USING) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERCENT) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << SLASH) | (1L << STAR) | (1L << TILDE) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (PREPROCESSOR - 64)) | (1L << (LINE_COMMENT_START - 64)) | (1L << (BLOCK_COMMENT_START - 64)) | (1L << (WHITESPACE - 64)) | (1L << (LINE_COMMENT_END - 64)) | (1L << (LINE_COMMENT_TEXT - 64)) | (1L << (LINE_COMMENT_OTHER - 64)) | (1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)) | (1L << (PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_OTHER - 64)))) != 0)) {
				{
				{
				setState(549);
				contentWithNestedBracesInner();
				}
				}
				setState(554);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(555);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedBracesInnerContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_BRACE() { return getTokens(SatisfactoryHeaderParserParser.OPEN_BRACE); }
		public TerminalNode OPEN_BRACE(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, i);
		}
		public List<TerminalNode> CLOSE_BRACE() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_BRACE); }
		public TerminalNode CLOSE_BRACE(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, i);
		}
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public ContentWithNestedBracesInnerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedBracesInner; }
	}

	public final ContentWithNestedBracesInnerContext contentWithNestedBracesInner() throws RecognitionException {
		ContentWithNestedBracesInnerContext _localctx = new ContentWithNestedBracesInnerContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_contentWithNestedBracesInner);
		int _la;
		try {
			int _alt;
			setState(563);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case CONSTEXPR:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
			case NAMESPACE:
			case OPERATOR:
			case OVERRIDE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRUCT:
			case TEMPLATE:
			case TRUE:
			case TYPEDEF:
			case TYPENAME:
			case USING:
			case VIRTUAL:
			case UCLASS:
			case UENUM:
			case UFUNCTION:
			case UINTERFACE:
			case UMETA:
			case UPARAM:
			case UPROPERTY:
			case USTRUCT:
			case UE_DEPRECATED:
			case STAT:
			case SF_CLASS_TAG:
			case SF_GENERATED_BODY:
			case AMPERSAND:
			case BACKSLASH:
			case BANG:
			case CLOSE_ANGLE:
			case CLOSE_PAREN:
			case CLOSE_SQUARE:
			case COLON:
			case COMMA:
			case EQUALS:
			case MINUS:
			case OPEN_ANGLE:
			case OPEN_PAREN:
			case OPEN_SQUARE:
			case PERCENT:
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case SLASH:
			case STAR:
			case TILDE:
			case IDENTIFIER:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
			case PREPROCESSOR:
			case LINE_COMMENT_START:
			case BLOCK_COMMENT_START:
			case WHITESPACE:
			case LINE_COMMENT_END:
			case LINE_COMMENT_TEXT:
			case LINE_COMMENT_OTHER:
			case BLOCK_COMMENT_END:
			case BLOCK_COMMENT_NEW_LINE:
			case BLOCK_COMMENT_TEXT:
			case BLOCK_COMMENT_OTHER:
			case PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case PREPROCESSOR_MACRO_NEWLINE:
			case PREPROCESSOR_MACRO_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(558); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(557);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==CLOSE_BRACE || _la==OPEN_BRACE) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(560); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(562);
				contentWithNestedBraces();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedAnglesContext extends ParserRuleContext {
		public TerminalNode OPEN_ANGLE() { return getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, 0); }
		public TerminalNode CLOSE_ANGLE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, 0); }
		public List<ContentWithNestedAnglesInnerContext> contentWithNestedAnglesInner() {
			return getRuleContexts(ContentWithNestedAnglesInnerContext.class);
		}
		public ContentWithNestedAnglesInnerContext contentWithNestedAnglesInner(int i) {
			return getRuleContext(ContentWithNestedAnglesInnerContext.class,i);
		}
		public ContentWithNestedAnglesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedAngles; }
	}

	public final ContentWithNestedAnglesContext contentWithNestedAngles() throws RecognitionException {
		ContentWithNestedAnglesContext _localctx = new ContentWithNestedAnglesContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_contentWithNestedAngles);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(565);
			match(OPEN_ANGLE);
			setState(569);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << NAMESPACE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << TYPENAME) | (1L << USING) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_BRACE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERCENT) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << SLASH) | (1L << STAR) | (1L << TILDE) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (PREPROCESSOR - 64)) | (1L << (LINE_COMMENT_START - 64)) | (1L << (BLOCK_COMMENT_START - 64)) | (1L << (WHITESPACE - 64)) | (1L << (LINE_COMMENT_END - 64)) | (1L << (LINE_COMMENT_TEXT - 64)) | (1L << (LINE_COMMENT_OTHER - 64)) | (1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)) | (1L << (PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_OTHER - 64)))) != 0)) {
				{
				{
				setState(566);
				contentWithNestedAnglesInner();
				}
				}
				setState(571);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(572);
			match(CLOSE_ANGLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedAnglesInnerContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_ANGLE() { return getTokens(SatisfactoryHeaderParserParser.OPEN_ANGLE); }
		public TerminalNode OPEN_ANGLE(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, i);
		}
		public List<TerminalNode> CLOSE_ANGLE() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_ANGLE); }
		public TerminalNode CLOSE_ANGLE(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, i);
		}
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public ContentWithNestedAnglesInnerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedAnglesInner; }
	}

	public final ContentWithNestedAnglesInnerContext contentWithNestedAnglesInner() throws RecognitionException {
		ContentWithNestedAnglesInnerContext _localctx = new ContentWithNestedAnglesInnerContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_contentWithNestedAnglesInner);
		int _la;
		try {
			int _alt;
			setState(580);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case CONSTEXPR:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
			case NAMESPACE:
			case OPERATOR:
			case OVERRIDE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRUCT:
			case TEMPLATE:
			case TRUE:
			case TYPEDEF:
			case TYPENAME:
			case USING:
			case VIRTUAL:
			case UCLASS:
			case UENUM:
			case UFUNCTION:
			case UINTERFACE:
			case UMETA:
			case UPARAM:
			case UPROPERTY:
			case USTRUCT:
			case UE_DEPRECATED:
			case STAT:
			case SF_CLASS_TAG:
			case SF_GENERATED_BODY:
			case AMPERSAND:
			case BACKSLASH:
			case BANG:
			case CLOSE_BRACE:
			case CLOSE_PAREN:
			case CLOSE_SQUARE:
			case COLON:
			case COMMA:
			case EQUALS:
			case MINUS:
			case OPEN_BRACE:
			case OPEN_PAREN:
			case OPEN_SQUARE:
			case PERCENT:
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case SLASH:
			case STAR:
			case TILDE:
			case IDENTIFIER:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
			case PREPROCESSOR:
			case LINE_COMMENT_START:
			case BLOCK_COMMENT_START:
			case WHITESPACE:
			case LINE_COMMENT_END:
			case LINE_COMMENT_TEXT:
			case LINE_COMMENT_OTHER:
			case BLOCK_COMMENT_END:
			case BLOCK_COMMENT_NEW_LINE:
			case BLOCK_COMMENT_TEXT:
			case BLOCK_COMMENT_OTHER:
			case PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case PREPROCESSOR_MACRO_NEWLINE:
			case PREPROCESSOR_MACRO_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(575); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(574);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==CLOSE_ANGLE || _la==OPEN_ANGLE) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(577); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_ANGLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(579);
				contentWithNestedAngles();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedSquaresContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
		public List<ContentWithNestedSquaresInnerContext> contentWithNestedSquaresInner() {
			return getRuleContexts(ContentWithNestedSquaresInnerContext.class);
		}
		public ContentWithNestedSquaresInnerContext contentWithNestedSquaresInner(int i) {
			return getRuleContext(ContentWithNestedSquaresInnerContext.class,i);
		}
		public ContentWithNestedSquaresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedSquares; }
	}

	public final ContentWithNestedSquaresContext contentWithNestedSquares() throws RecognitionException {
		ContentWithNestedSquaresContext _localctx = new ContentWithNestedSquaresContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_contentWithNestedSquares);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(582);
			match(OPEN_SQUARE);
			setState(586);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << CONSTEXPR) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << NAMESPACE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << TYPENAME) | (1L << USING) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_BRACE) | (1L << CLOSE_PAREN) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERCENT) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << SLASH) | (1L << STAR) | (1L << TILDE) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (PREPROCESSOR - 64)) | (1L << (LINE_COMMENT_START - 64)) | (1L << (BLOCK_COMMENT_START - 64)) | (1L << (WHITESPACE - 64)) | (1L << (LINE_COMMENT_END - 64)) | (1L << (LINE_COMMENT_TEXT - 64)) | (1L << (LINE_COMMENT_OTHER - 64)) | (1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)) | (1L << (PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_NEWLINE - 64)) | (1L << (PREPROCESSOR_MACRO_OTHER - 64)))) != 0)) {
				{
				{
				setState(583);
				contentWithNestedSquaresInner();
				}
				}
				setState(588);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(589);
			match(CLOSE_SQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentWithNestedSquaresInnerContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_SQUARE() { return getTokens(SatisfactoryHeaderParserParser.OPEN_SQUARE); }
		public TerminalNode OPEN_SQUARE(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, i);
		}
		public List<TerminalNode> CLOSE_SQUARE() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_SQUARE); }
		public TerminalNode CLOSE_SQUARE(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, i);
		}
		public ContentWithNestedSquaresContext contentWithNestedSquares() {
			return getRuleContext(ContentWithNestedSquaresContext.class,0);
		}
		public ContentWithNestedSquaresInnerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contentWithNestedSquaresInner; }
	}

	public final ContentWithNestedSquaresInnerContext contentWithNestedSquaresInner() throws RecognitionException {
		ContentWithNestedSquaresInnerContext _localctx = new ContentWithNestedSquaresInnerContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_contentWithNestedSquaresInner);
		int _la;
		try {
			int _alt;
			setState(597);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case CONSTEXPR:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
			case NAMESPACE:
			case OPERATOR:
			case OVERRIDE:
			case PRIVATE:
			case PROTECTED:
			case PUBLIC:
			case STATIC:
			case STRUCT:
			case TEMPLATE:
			case TRUE:
			case TYPEDEF:
			case TYPENAME:
			case USING:
			case VIRTUAL:
			case UCLASS:
			case UENUM:
			case UFUNCTION:
			case UINTERFACE:
			case UMETA:
			case UPARAM:
			case UPROPERTY:
			case USTRUCT:
			case UE_DEPRECATED:
			case STAT:
			case SF_CLASS_TAG:
			case SF_GENERATED_BODY:
			case AMPERSAND:
			case BACKSLASH:
			case BANG:
			case CLOSE_ANGLE:
			case CLOSE_BRACE:
			case CLOSE_PAREN:
			case COLON:
			case COMMA:
			case EQUALS:
			case MINUS:
			case OPEN_ANGLE:
			case OPEN_BRACE:
			case OPEN_PAREN:
			case PERCENT:
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case SLASH:
			case STAR:
			case TILDE:
			case IDENTIFIER:
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
			case PREPROCESSOR:
			case LINE_COMMENT_START:
			case BLOCK_COMMENT_START:
			case WHITESPACE:
			case LINE_COMMENT_END:
			case LINE_COMMENT_TEXT:
			case LINE_COMMENT_OTHER:
			case BLOCK_COMMENT_END:
			case BLOCK_COMMENT_NEW_LINE:
			case BLOCK_COMMENT_TEXT:
			case BLOCK_COMMENT_OTHER:
			case PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case PREPROCESSOR_MACRO_NEWLINE:
			case PREPROCESSOR_MACRO_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(592); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(591);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==CLOSE_SQUARE || _la==OPEN_SQUARE) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(594); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,73,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_SQUARE:
				enterOuterAlt(_localctx, 2);
				{
				setState(596);
				contentWithNestedSquares();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode TILDE() { return getToken(SatisfactoryHeaderParserParser.TILDE, 0); }
		public TerminalNode OPERATOR() { return getToken(SatisfactoryHeaderParserParser.OPERATOR, 0); }
		public List<TerminalNode> EQUALS() { return getTokens(SatisfactoryHeaderParserParser.EQUALS); }
		public TerminalNode EQUALS(int i) {
			return getToken(SatisfactoryHeaderParserParser.EQUALS, i);
		}
		public TerminalNode BANG() { return getToken(SatisfactoryHeaderParserParser.BANG, 0); }
		public TerminalNode PLUS() { return getToken(SatisfactoryHeaderParserParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(SatisfactoryHeaderParserParser.MINUS, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
		public List<TerminalNode> OPEN_ANGLE() { return getTokens(SatisfactoryHeaderParserParser.OPEN_ANGLE); }
		public TerminalNode OPEN_ANGLE(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, i);
		}
		public List<TerminalNode> CLOSE_ANGLE() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_ANGLE); }
		public TerminalNode CLOSE_ANGLE(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, i);
		}
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public TerminalNode CLOSE_PAREN() { return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_functionName);
		int _la;
		try {
			setState(634);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(600);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==TILDE) {
					{
					setState(599);
					match(TILDE);
					}
				}

				setState(602);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(603);
				match(OPERATOR);
				setState(604);
				match(EQUALS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(605);
				match(OPERATOR);
				setState(606);
				match(EQUALS);
				setState(607);
				match(EQUALS);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(608);
				match(OPERATOR);
				setState(609);
				match(BANG);
				setState(610);
				match(EQUALS);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(611);
				match(OPERATOR);
				setState(612);
				match(PLUS);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(613);
				match(OPERATOR);
				setState(614);
				match(MINUS);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(615);
				match(OPERATOR);
				setState(616);
				match(OPEN_SQUARE);
				setState(617);
				match(CLOSE_SQUARE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(618);
				match(OPERATOR);
				setState(619);
				match(OPEN_ANGLE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(620);
				match(OPERATOR);
				setState(621);
				match(OPEN_ANGLE);
				setState(622);
				match(OPEN_ANGLE);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(623);
				match(OPERATOR);
				setState(624);
				match(CLOSE_ANGLE);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(625);
				match(OPERATOR);
				setState(626);
				match(CLOSE_ANGLE);
				setState(627);
				match(CLOSE_ANGLE);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(628);
				match(OPERATOR);
				setState(629);
				match(OPEN_PAREN);
				setState(630);
				match(CLOSE_PAREN);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(631);
				match(OPERATOR);
				setState(632);
				match(MINUS);
				setState(633);
				match(CLOSE_ANGLE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionModifierContext extends ParserRuleContext {
		public TerminalNode STATIC() { return getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public TerminalNode CONSTEXPR() { return getToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
		public TerminalNode VIRTUAL() { return getToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
		public TerminalNode FORCEINLINE() { return getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
		public TerminalNode INLINE() { return getToken(SatisfactoryHeaderParserParser.INLINE, 0); }
		public TerminalNode FRIEND() { return getToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
		public TerminalNode TEMPLATE() { return getToken(SatisfactoryHeaderParserParser.TEMPLATE, 0); }
		public ContentWithNestedAnglesContext contentWithNestedAngles() {
			return getRuleContext(ContentWithNestedAnglesContext.class,0);
		}
		public FunctionModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionModifier; }
	}

	public final FunctionModifierContext functionModifier() throws RecognitionException {
		FunctionModifierContext _localctx = new FunctionModifierContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_functionModifier);
		try {
			setState(645);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STATIC:
				enterOuterAlt(_localctx, 1);
				{
				setState(636);
				match(STATIC);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(637);
				match(CONST);
				}
				break;
			case CONSTEXPR:
				enterOuterAlt(_localctx, 3);
				{
				setState(638);
				match(CONSTEXPR);
				}
				break;
			case VIRTUAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(639);
				match(VIRTUAL);
				}
				break;
			case FORCEINLINE:
				enterOuterAlt(_localctx, 5);
				{
				setState(640);
				match(FORCEINLINE);
				}
				break;
			case INLINE:
				enterOuterAlt(_localctx, 6);
				{
				setState(641);
				match(INLINE);
				}
				break;
			case FRIEND:
				enterOuterAlt(_localctx, 7);
				{
				setState(642);
				match(FRIEND);
				}
				break;
			case TEMPLATE:
				enterOuterAlt(_localctx, 8);
				{
				setState(643);
				match(TEMPLATE);
				setState(644);
				contentWithNestedAngles();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespaceDeclarationContext extends ParserRuleContext {
		public TerminalNode NAMESPACE() { return getToken(SatisfactoryHeaderParserParser.NAMESPACE, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
		}
		public NamespaceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespaceDeclaration; }
	}

	public final NamespaceDeclarationContext namespaceDeclaration() throws RecognitionException {
		NamespaceDeclarationContext _localctx = new NamespaceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_namespaceDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(647);
			match(NAMESPACE);
			setState(648);
			identifier();
			setState(649);
			contentWithNestedBraces();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingNamespaceContext extends ParserRuleContext {
		public TerminalNode USING() { return getToken(SatisfactoryHeaderParserParser.USING, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public UsingNamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingNamespace; }
	}

	public final UsingNamespaceContext usingNamespace() throws RecognitionException {
		UsingNamespaceContext _localctx = new UsingNamespaceContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_usingNamespace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(651);
			match(USING);
			setState(652);
			identifier();
			setState(653);
			match(EQUALS);
			setState(654);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UclassMacroContext extends ParserRuleContext {
		public TerminalNode UCLASS() { return getToken(SatisfactoryHeaderParserParser.UCLASS, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UclassMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uclassMacro; }
	}

	public final UclassMacroContext uclassMacro() throws RecognitionException {
		UclassMacroContext _localctx = new UclassMacroContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(656);
			match(UCLASS);
			setState(657);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UenumMacroContext extends ParserRuleContext {
		public TerminalNode UENUM() { return getToken(SatisfactoryHeaderParserParser.UENUM, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UenumMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uenumMacro; }
	}

	public final UenumMacroContext uenumMacro() throws RecognitionException {
		UenumMacroContext _localctx = new UenumMacroContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(659);
			match(UENUM);
			setState(660);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UfunctionMacroContext extends ParserRuleContext {
		public TerminalNode UFUNCTION() { return getToken(SatisfactoryHeaderParserParser.UFUNCTION, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public TerminalNode FORCEINLINE() { return getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
		public UfunctionMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ufunctionMacro; }
	}

	public final UfunctionMacroContext ufunctionMacro() throws RecognitionException {
		UfunctionMacroContext _localctx = new UfunctionMacroContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_ufunctionMacro);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(663);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FORCEINLINE) {
				{
				setState(662);
				match(FORCEINLINE);
				}
			}

			setState(665);
			match(UFUNCTION);
			setState(666);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UinterfaceMacroContext extends ParserRuleContext {
		public TerminalNode UINTERFACE() { return getToken(SatisfactoryHeaderParserParser.UINTERFACE, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UinterfaceMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uinterfaceMacro; }
	}

	public final UinterfaceMacroContext uinterfaceMacro() throws RecognitionException {
		UinterfaceMacroContext _localctx = new UinterfaceMacroContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_uinterfaceMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(668);
			match(UINTERFACE);
			setState(669);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UmetaMacroContext extends ParserRuleContext {
		public TerminalNode UMETA() { return getToken(SatisfactoryHeaderParserParser.UMETA, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UmetaMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_umetaMacro; }
	}

	public final UmetaMacroContext umetaMacro() throws RecognitionException {
		UmetaMacroContext _localctx = new UmetaMacroContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_umetaMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(671);
			match(UMETA);
			setState(672);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UParamMacroContext extends ParserRuleContext {
		public TerminalNode UPARAM() { return getToken(SatisfactoryHeaderParserParser.UPARAM, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UParamMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uParamMacro; }
	}

	public final UParamMacroContext uParamMacro() throws RecognitionException {
		UParamMacroContext _localctx = new UParamMacroContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(674);
			match(UPARAM);
			setState(675);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpropertyMacroContext extends ParserRuleContext {
		public TerminalNode UPROPERTY() { return getToken(SatisfactoryHeaderParserParser.UPROPERTY, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UpropertyMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upropertyMacro; }
	}

	public final UpropertyMacroContext upropertyMacro() throws RecognitionException {
		UpropertyMacroContext _localctx = new UpropertyMacroContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(677);
			match(UPROPERTY);
			setState(678);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UstructMacroContext extends ParserRuleContext {
		public TerminalNode USTRUCT() { return getToken(SatisfactoryHeaderParserParser.USTRUCT, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UstructMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ustructMacro; }
	}

	public final UstructMacroContext ustructMacro() throws RecognitionException {
		UstructMacroContext _localctx = new UstructMacroContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_ustructMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(680);
			match(USTRUCT);
			setState(681);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UedeprecatedMacroContext extends ParserRuleContext {
		public TerminalNode UE_DEPRECATED() { return getToken(SatisfactoryHeaderParserParser.UE_DEPRECATED, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public UedeprecatedMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uedeprecatedMacro; }
	}

	public final UedeprecatedMacroContext uedeprecatedMacro() throws RecognitionException {
		UedeprecatedMacroContext _localctx = new UedeprecatedMacroContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_uedeprecatedMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(683);
			match(UE_DEPRECATED);
			setState(684);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GeneratedBodyMacroContext extends ParserRuleContext {
		public TerminalNode SF_GENERATED_BODY() { return getToken(SatisfactoryHeaderParserParser.SF_GENERATED_BODY, 0); }
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public GeneratedBodyMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_generatedBodyMacro; }
	}

	public final GeneratedBodyMacroContext generatedBodyMacro() throws RecognitionException {
		GeneratedBodyMacroContext _localctx = new GeneratedBodyMacroContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(686);
			match(SF_GENERATED_BODY);
			setState(687);
			macroPropertyList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroPropertyListContext extends ParserRuleContext {
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public TerminalNode CLOSE_PAREN() { return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
		public MacroPropertyListEntriesContext macroPropertyListEntries() {
			return getRuleContext(MacroPropertyListEntriesContext.class,0);
		}
		public MacroPropertyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroPropertyList; }
	}

	public final MacroPropertyListContext macroPropertyList() throws RecognitionException {
		MacroPropertyListContext _localctx = new MacroPropertyListContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			match(OPEN_PAREN);
			setState(691);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(690);
				macroPropertyListEntries();
				}
			}

			setState(693);
			match(CLOSE_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroPropertyListEntriesContext extends ParserRuleContext {
		public MacroPropertyContext macroProperty() {
			return getRuleContext(MacroPropertyContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public MacroPropertyListEntriesContext macroPropertyListEntries() {
			return getRuleContext(MacroPropertyListEntriesContext.class,0);
		}
		public MacroPropertyListEntriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroPropertyListEntries; }
	}

	public final MacroPropertyListEntriesContext macroPropertyListEntries() throws RecognitionException {
		MacroPropertyListEntriesContext _localctx = new MacroPropertyListEntriesContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(701);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(695);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(696);
				macroProperty();
				setState(697);
				match(COMMA);
				setState(699);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(698);
					macroPropertyListEntries();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroPropertyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public MacroPropertyPairContext macroPropertyPair() {
			return getRuleContext(MacroPropertyPairContext.class,0);
		}
		public MacroPropertyListContext macroPropertyList() {
			return getRuleContext(MacroPropertyListContext.class,0);
		}
		public MacroPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroProperty; }
	}

	public final MacroPropertyContext macroProperty() throws RecognitionException {
		MacroPropertyContext _localctx = new MacroPropertyContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_macroProperty);
		try {
			setState(707);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,82,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(703);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(704);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(705);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(706);
				macroPropertyList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroPropertyPairContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public MacroPropertyContext macroProperty() {
			return getRuleContext(MacroPropertyContext.class,0);
		}
		public MacroPropertyPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroPropertyPair; }
	}

	public final MacroPropertyPairContext macroPropertyPair() throws RecognitionException {
		MacroPropertyPairContext _localctx = new MacroPropertyPairContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(709);
			identifier();
			setState(710);
			match(EQUALS);
			setState(711);
			macroProperty();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 34:
			return literalExpression_sempred((LiteralExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean literalExpression_sempred(LiteralExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3O\u02cc\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\3\2\7\2\u009a\n\2\f\2\16\2\u009d\13\2\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u00a9\n\3\3\4\3\4\5\4\u00ad\n\4\3\5"+
		"\3\5\3\5\5\5\u00b2\n\5\3\6\3\6\3\6\3\6\3\6\5\6\u00b9\n\6\3\7\3\7\3\b\3"+
		"\b\3\t\3\t\3\n\7\n\u00c2\n\n\f\n\16\n\u00c5\13\n\3\n\3\n\5\n\u00c9\n\n"+
		"\3\n\5\n\u00cc\n\n\3\n\5\n\u00cf\n\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\5\f\u00db\n\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\5\16\u00e4\n\16"+
		"\3\17\5\17\u00e7\n\17\3\17\5\17\u00ea\n\17\3\17\3\17\5\17\u00ee\n\17\3"+
		"\17\3\17\5\17\u00f2\n\17\3\17\5\17\u00f5\n\17\3\20\3\20\3\20\5\20\u00fa"+
		"\n\20\3\21\3\21\3\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24"+
		"\5\24\u0109\n\24\3\25\5\25\u010c\n\25\3\25\3\25\5\25\u0110\n\25\3\26\5"+
		"\26\u0113\n\26\3\27\3\27\5\27\u0117\n\27\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\5\30\u0124\n\30\3\31\3\31\3\31\3\32\3\32\3\33"+
		"\3\33\5\33\u012d\n\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35\5\35\u0136\n"+
		"\35\3\35\5\35\u0139\n\35\3\35\7\35\u013c\n\35\f\35\16\35\u013f\13\35\3"+
		"\35\5\35\u0142\n\35\3\35\3\35\3\35\7\35\u0147\n\35\f\35\16\35\u014a\13"+
		"\35\3\35\3\35\3\36\5\36\u014f\n\36\3\36\3\36\5\36\u0153\n\36\3\36\3\36"+
		"\3\36\3\36\5\36\u0159\n\36\3\36\3\36\3\36\3\36\5\36\u015f\n\36\3\37\3"+
		"\37\3 \3 \3 \3 \3 \5 \u0168\n \3!\3!\3!\3\"\5\"\u016e\n\"\3\"\5\"\u0171"+
		"\n\"\3\"\3\"\5\"\u0175\n\"\3\"\5\"\u0178\n\"\3\"\3\"\3#\3#\3#\3#\3#\3"+
		"#\3#\3#\5#\u0184\n#\3$\3$\3$\5$\u0189\n$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3"+
		"$\3$\3$\7$\u0197\n$\f$\16$\u019a\13$\3%\3%\5%\u019e\n%\3&\3&\5&\u01a2"+
		"\n&\3&\3&\3\'\3\'\3\'\5\'\u01a9\n\'\3\'\3\'\3(\3(\3(\5(\u01b0\n(\3(\3"+
		"(\3)\3)\3)\3)\5)\u01b8\n)\3)\3)\5)\u01bc\n)\3*\5*\u01bf\n*\3*\3*\5*\u01c3"+
		"\n*\3*\3*\5*\u01c7\n*\3*\3*\5*\u01cb\n*\3*\3*\3*\3*\5*\u01d1\n*\3+\3+"+
		"\3+\3+\3+\5+\u01d8\n+\3,\3,\5,\u01dc\n,\3,\5,\u01df\n,\3-\3-\3-\3.\7."+
		"\u01e5\n.\f.\16.\u01e8\13.\3.\5.\u01eb\n.\3.\3.\3.\5.\u01f0\n.\3.\5.\u01f3"+
		"\n.\3.\5.\u01f6\n.\3/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\61"+
		"\3\61\3\61\3\61\3\62\3\62\5\62\u020a\n\62\3\62\3\62\3\62\3\62\3\62\3\62"+
		"\3\62\3\62\5\62\u0214\n\62\3\63\3\63\7\63\u0218\n\63\f\63\16\63\u021b"+
		"\13\63\3\63\3\63\3\64\6\64\u0220\n\64\r\64\16\64\u0221\3\64\5\64\u0225"+
		"\n\64\3\65\3\65\7\65\u0229\n\65\f\65\16\65\u022c\13\65\3\65\3\65\3\66"+
		"\6\66\u0231\n\66\r\66\16\66\u0232\3\66\5\66\u0236\n\66\3\67\3\67\7\67"+
		"\u023a\n\67\f\67\16\67\u023d\13\67\3\67\3\67\38\68\u0242\n8\r8\168\u0243"+
		"\38\58\u0247\n8\39\39\79\u024b\n9\f9\169\u024e\139\39\39\3:\6:\u0253\n"+
		":\r:\16:\u0254\3:\5:\u0258\n:\3;\5;\u025b\n;\3;\3;\3;\3;\3;\3;\3;\3;\3"+
		";\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3;\3"+
		";\5;\u027d\n;\3<\3<\3<\3<\3<\3<\3<\3<\3<\5<\u0288\n<\3=\3=\3=\3=\3>\3"+
		">\3>\3>\3>\3?\3?\3?\3@\3@\3@\3A\5A\u029a\nA\3A\3A\3A\3B\3B\3B\3C\3C\3"+
		"C\3D\3D\3D\3E\3E\3E\3F\3F\3F\3G\3G\3G\3H\3H\3H\3I\3I\5I\u02b6\nI\3I\3"+
		"I\3J\3J\3J\3J\5J\u02be\nJ\5J\u02c0\nJ\3K\3K\3K\3K\5K\u02c6\nK\3L\3L\3"+
		"L\3L\3L\2\3FM\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64"+
		"\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0096\2\f\3\2@A\4\2\7\7\25\25\4\2"+
		"&&<<\4\2\3\3\23\23\3\2\17\21\4\2\4\4\16\16\4\2++\63\63\4\2**\62\62\4\2"+
		"))\61\61\4\2,,\64\64\2\u0304\2\u009b\3\2\2\2\4\u00a8\3\2\2\2\6\u00ac\3"+
		"\2\2\2\b\u00b1\3\2\2\2\n\u00b8\3\2\2\2\f\u00ba\3\2\2\2\16\u00bc\3\2\2"+
		"\2\20\u00be\3\2\2\2\22\u00c3\3\2\2\2\24\u00d0\3\2\2\2\26\u00da\3\2\2\2"+
		"\30\u00dc\3\2\2\2\32\u00de\3\2\2\2\34\u00e6\3\2\2\2\36\u00f9\3\2\2\2 "+
		"\u00fb\3\2\2\2\"\u00fe\3\2\2\2$\u0100\3\2\2\2&\u0108\3\2\2\2(\u010b\3"+
		"\2\2\2*\u0112\3\2\2\2,\u0114\3\2\2\2.\u0123\3\2\2\2\60\u0125\3\2\2\2\62"+
		"\u0128\3\2\2\2\64\u012a\3\2\2\2\66\u0131\3\2\2\28\u0135\3\2\2\2:\u015e"+
		"\3\2\2\2<\u0160\3\2\2\2>\u0167\3\2\2\2@\u0169\3\2\2\2B\u016d\3\2\2\2D"+
		"\u0183\3\2\2\2F\u0188\3\2\2\2H\u019d\3\2\2\2J\u019f\3\2\2\2L\u01a5\3\2"+
		"\2\2N\u01ac\3\2\2\2P\u01b3\3\2\2\2R\u01d0\3\2\2\2T\u01d7\3\2\2\2V\u01d9"+
		"\3\2\2\2X\u01e0\3\2\2\2Z\u01e6\3\2\2\2\\\u01f7\3\2\2\2^\u01fe\3\2\2\2"+
		"`\u0203\3\2\2\2b\u0213\3\2\2\2d\u0215\3\2\2\2f\u0224\3\2\2\2h\u0226\3"+
		"\2\2\2j\u0235\3\2\2\2l\u0237\3\2\2\2n\u0246\3\2\2\2p\u0248\3\2\2\2r\u0257"+
		"\3\2\2\2t\u027c\3\2\2\2v\u0287\3\2\2\2x\u0289\3\2\2\2z\u028d\3\2\2\2|"+
		"\u0292\3\2\2\2~\u0295\3\2\2\2\u0080\u0299\3\2\2\2\u0082\u029e\3\2\2\2"+
		"\u0084\u02a1\3\2\2\2\u0086\u02a4\3\2\2\2\u0088\u02a7\3\2\2\2\u008a\u02aa"+
		"\3\2\2\2\u008c\u02ad\3\2\2\2\u008e\u02b0\3\2\2\2\u0090\u02b3\3\2\2\2\u0092"+
		"\u02bf\3\2\2\2\u0094\u02c5\3\2\2\2\u0096\u02c7\3\2\2\2\u0098\u009a\5\4"+
		"\3\2\u0099\u0098\3\2\2\2\u009a\u009d\3\2\2\2\u009b\u0099\3\2\2\2\u009b"+
		"\u009c\3\2\2\2\u009c\3\3\2\2\2\u009d\u009b\3\2\2\2\u009e\u00a9\5\32\16"+
		"\2\u009f\u00a9\5P)\2\u00a0\u00a9\5x=\2\u00a1\u00a9\5`\61\2\u00a2\u00a9"+
		"\5Z.\2\u00a3\u00a9\5^\60\2\u00a4\u00a9\5\\/\2\u00a5\u00a9\5b\62\2\u00a6"+
		"\u00a9\5z>\2\u00a7\u00a9\7:\2\2\u00a8\u009e\3\2\2\2\u00a8\u009f\3\2\2"+
		"\2\u00a8\u00a0\3\2\2\2\u00a8\u00a1\3\2\2\2\u00a8\u00a2\3\2\2\2\u00a8\u00a3"+
		"\3\2\2\2\u00a8\u00a4\3\2\2\2\u00a8\u00a5\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8"+
		"\u00a7\3\2\2\2\u00a9\5\3\2\2\2\u00aa\u00ad\5\n\6\2\u00ab\u00ad\5\b\5\2"+
		"\u00ac\u00aa\3\2\2\2\u00ac\u00ab\3\2\2\2\u00ad\7\3\2\2\2\u00ae\u00b2\5"+
		"\f\7\2\u00af\u00b2\5\16\b\2\u00b0\u00b2\5\20\t\2\u00b1\u00ae\3\2\2\2\u00b1"+
		"\u00af\3\2\2\2\u00b1\u00b0\3\2\2\2\u00b2\t\3\2\2\2\u00b3\u00b9\7>\2\2"+
		"\u00b4\u00b5\7>\2\2\u00b5\u00b6\7-\2\2\u00b6\u00b7\7-\2\2\u00b7\u00b9"+
		"\7>\2\2\u00b8\u00b3\3\2\2\2\u00b8\u00b4\3\2\2\2\u00b9\13\3\2\2\2\u00ba"+
		"\u00bb\7?\2\2\u00bb\r\3\2\2\2\u00bc\u00bd\t\2\2\2\u00bd\17\3\2\2\2\u00be"+
		"\u00bf\t\3\2\2\u00bf\21\3\2\2\2\u00c0\u00c2\5\26\f\2\u00c1\u00c0\3\2\2"+
		"\2\u00c2\u00c5\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c6"+
		"\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c6\u00c8\5\n\6\2\u00c7\u00c9\5\24\13\2"+
		"\u00c8\u00c7\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cb\3\2\2\2\u00ca\u00cc"+
		"\5\30\r\2\u00cb\u00ca\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00ce\3\2\2\2"+
		"\u00cd\u00cf\7\5\2\2\u00ce\u00cd\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\23"+
		"\3\2\2\2\u00d0\u00d1\5l\67\2\u00d1\25\3\2\2\2\u00d2\u00db\7\3\2\2\u00d3"+
		"\u00db\7\4\2\2\u00d4\u00db\7\5\2\2\u00d5\u00db\7\6\2\2\u00d6\u00db\7\23"+
		"\2\2\u00d7\u00db\7\22\2\2\u00d8\u00db\7\13\2\2\u00d9\u00db\5\u0086D\2"+
		"\u00da\u00d2\3\2\2\2\u00da\u00d3\3\2\2\2\u00da\u00d4\3\2\2\2\u00da\u00d5"+
		"\3\2\2\2\u00da\u00d6\3\2\2\2\u00da\u00d7\3\2\2\2\u00da\u00d8\3\2\2\2\u00da"+
		"\u00d9\3\2\2\2\u00db\27\3\2\2\2\u00dc\u00dd\t\4\2\2\u00dd\31\3\2\2\2\u00de"+
		"\u00df\5\34\17\2\u00df\u00e0\7\62\2\2\u00e0\u00e1\5*\26\2\u00e1\u00e3"+
		"\7*\2\2\u00e2\u00e4\7:\2\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4"+
		"\33\3\2\2\2\u00e5\u00e7\5\36\20\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3\2"+
		"\2\2\u00e7\u00e9\3\2\2\2\u00e8\u00ea\5 \21\2\u00e9\u00e8\3\2\2\2\u00e9"+
		"\u00ea\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ed\5\"\22\2\u00ec\u00ee\7"+
		"$\2\2\u00ed\u00ec\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u00f1\5\n\6\2\u00f0\u00f2\5l\67\2\u00f1\u00f0\3\2\2\2\u00f1\u00f2\3\2"+
		"\2\2\u00f2\u00f4\3\2\2\2\u00f3\u00f5\5$\23\2\u00f4\u00f3\3\2\2\2\u00f4"+
		"\u00f5\3\2\2\2\u00f5\35\3\2\2\2\u00f6\u00fa\5|?\2\u00f7\u00fa\5\u0082"+
		"B\2\u00f8\u00fa\5\u008aF\2\u00f9\u00f6\3\2\2\2\u00f9\u00f7\3\2\2\2\u00f9"+
		"\u00f8\3\2\2\2\u00fa\37\3\2\2\2\u00fb\u00fc\7\24\2\2\u00fc\u00fd\5l\67"+
		"\2\u00fd!\3\2\2\2\u00fe\u00ff\t\5\2\2\u00ff#\3\2\2\2\u0100\u0101\7-\2"+
		"\2\u0101\u0102\5&\24\2\u0102%\3\2\2\2\u0103\u0109\5(\25\2\u0104\u0105"+
		"\5(\25\2\u0105\u0106\7.\2\2\u0106\u0107\5&\24\2\u0107\u0109\3\2\2\2\u0108"+
		"\u0103\3\2\2\2\u0108\u0104\3\2\2\2\u0109\'\3\2\2\2\u010a\u010c\5\62\32"+
		"\2\u010b\u010a\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010f"+
		"\5\n\6\2\u010e\u0110\5l\67\2\u010f\u010e\3\2\2\2\u010f\u0110\3\2\2\2\u0110"+
		")\3\2\2\2\u0111\u0113\5,\27\2\u0112\u0111\3\2\2\2\u0112\u0113\3\2\2\2"+
		"\u0113+\3\2\2\2\u0114\u0116\5.\30\2\u0115\u0117\5,\27\2\u0116\u0115\3"+
		"\2\2\2\u0116\u0117\3\2\2\2\u0117-\3\2\2\2\u0118\u0124\5\60\31\2\u0119"+
		"\u0124\58\35\2\u011a\u0124\5\64\33\2\u011b\u0124\5B\"\2\u011c\u0124\5"+
		"\66\34\2\u011d\u0124\5J&\2\u011e\u0124\5L\'\2\u011f\u0124\5N(\2\u0120"+
		"\u0124\5b\62\2\u0121\u0124\5\u008eH\2\u0122\u0124\7:\2\2\u0123\u0118\3"+
		"\2\2\2\u0123\u0119\3\2\2\2\u0123\u011a\3\2\2\2\u0123\u011b\3\2\2\2\u0123"+
		"\u011c\3\2\2\2\u0123\u011d\3\2\2\2\u0123\u011e\3\2\2\2\u0123\u011f\3\2"+
		"\2\2\u0123\u0120\3\2\2\2\u0123\u0121\3\2\2\2\u0123\u0122\3\2\2\2\u0124"+
		"/\3\2\2\2\u0125\u0126\5\62\32\2\u0126\u0127\7-\2\2\u0127\61\3\2\2\2\u0128"+
		"\u0129\t\6\2\2\u0129\63\3\2\2\2\u012a\u012c\7\t\2\2\u012b\u012d\5\"\22"+
		"\2\u012c\u012b\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012e\3\2\2\2\u012e\u012f"+
		"\5\n\6\2\u012f\u0130\7:\2\2\u0130\65\3\2\2\2\u0131\u0132\7#\2\2\u0132"+
		"\u0133\5d\63\2\u0133\67\3\2\2\2\u0134\u0136\5\u008cG\2\u0135\u0134\3\2"+
		"\2\2\u0135\u0136\3\2\2\2\u0136\u0138\3\2\2\2\u0137\u0139\5\u0080A\2\u0138"+
		"\u0137\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u013d\3\2\2\2\u013a\u013c\5v"+
		"<\2\u013b\u013a\3\2\2\2\u013c\u013f\3\2\2\2\u013d\u013b\3\2\2\2\u013d"+
		"\u013e\3\2\2\2\u013e\u0141\3\2\2\2\u013f\u013d\3\2\2\2\u0140\u0142\5\22"+
		"\n\2\u0141\u0140\3\2\2\2\u0141\u0142\3\2\2\2\u0142\u0143\3\2\2\2\u0143"+
		"\u0144\5t;\2\u0144\u0148\5d\63\2\u0145\u0147\5<\37\2\u0146\u0145\3\2\2"+
		"\2\u0147\u014a\3\2\2\2\u0148\u0146\3\2\2\2\u0148\u0149\3\2\2\2\u0149\u014b"+
		"\3\2\2\2\u014a\u0148\3\2\2\2\u014b\u014c\5:\36\2\u014c9\3\2\2\2\u014d"+
		"\u014f\7:\2\2\u014e\u014d\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u015f\3\2"+
		"\2\2\u0150\u0152\5h\65\2\u0151\u0153\7:\2\2\u0152\u0151\3\2\2\2\u0152"+
		"\u0153\3\2\2\2\u0153\u015f\3\2\2\2\u0154\u0155\7-\2\2\u0155\u0156\5> "+
		"\2\u0156\u0158\5h\65\2\u0157\u0159\7:\2\2\u0158\u0157\3\2\2\2\u0158\u0159"+
		"\3\2\2\2\u0159\u015f\3\2\2\2\u015a\u015b\7/\2\2\u015b\u015c\5\16\b\2\u015c"+
		"\u015d\7:\2\2\u015d\u015f\3\2\2\2\u015e\u014e\3\2\2\2\u015e\u0150\3\2"+
		"\2\2\u015e\u0154\3\2\2\2\u015e\u015a\3\2\2\2\u015f;\3\2\2\2\u0160\u0161"+
		"\t\7\2\2\u0161=\3\2\2\2\u0162\u0168\5@!\2\u0163\u0164\5@!\2\u0164\u0165"+
		"\7.\2\2\u0165\u0166\5> \2\u0166\u0168\3\2\2\2\u0167\u0162\3\2\2\2\u0167"+
		"\u0163\3\2\2\2\u0168?\3\2\2\2\u0169\u016a\5\n\6\2\u016a\u016b\5d\63\2"+
		"\u016bA\3\2\2\2\u016c\u016e\5\u0088E\2\u016d\u016c\3\2\2\2\u016d\u016e"+
		"\3\2\2\2\u016e\u0170\3\2\2\2\u016f\u0171\5\22\n\2\u0170\u016f\3\2\2\2"+
		"\u0170\u0171\3\2\2\2\u0171\u0172\3\2\2\2\u0172\u0174\5\n\6\2\u0173\u0175"+
		"\5p9\2\u0174\u0173\3\2\2\2\u0174\u0175\3\2\2\2\u0175\u0177\3\2\2\2\u0176"+
		"\u0178\5D#\2\u0177\u0176\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u0179\3\2\2"+
		"\2\u0179\u017a\7:\2\2\u017aC\3\2\2\2\u017b\u017c\7-\2\2\u017c\u0184\5"+
		"\b\5\2\u017d\u017e\7/\2\2\u017e\u0184\5F$\2\u017f\u0180\7/\2\2\u0180\u0181"+
		"\5\n\6\2\u0181\u0182\5d\63\2\u0182\u0184\3\2\2\2\u0183\u017b\3\2\2\2\u0183"+
		"\u017d\3\2\2\2\u0183\u017f\3\2\2\2\u0184E\3\2\2\2\u0185\u0186\b$\1\2\u0186"+
		"\u0189\5\b\5\2\u0187\u0189\5\n\6\2\u0188\u0185\3\2\2\2\u0188\u0187\3\2"+
		"\2\2\u0189\u0198\3\2\2\2\u018a\u018b\f\6\2\2\u018b\u018c\78\2\2\u018c"+
		"\u0197\5F$\7\u018d\u018e\f\5\2\2\u018e\u018f\7\60\2\2\u018f\u0197\5F$"+
		"\6\u0190\u0191\f\4\2\2\u0191\u0192\7<\2\2\u0192\u0197\5F$\5\u0193\u0194"+
		"\f\3\2\2\u0194\u0195\7\'\2\2\u0195\u0197\5F$\4\u0196\u018a\3\2\2\2\u0196"+
		"\u018d\3\2\2\2\u0196\u0190\3\2\2\2\u0196\u0193\3\2\2\2\u0197\u019a\3\2"+
		"\2\2\u0198\u0196\3\2\2\2\u0198\u0199\3\2\2\2\u0199G\3\2\2\2\u019a\u0198"+
		"\3\2\2\2\u019b\u019e\5\n\6\2\u019c\u019e\5\16\b\2\u019d\u019b\3\2\2\2"+
		"\u019d\u019c\3\2\2\2\u019eI\3\2\2\2\u019f\u01a1\7\6\2\2\u01a0\u01a2\5"+
		"\n\6\2\u01a1\u01a0\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3"+
		"\u01a4\5h\65\2\u01a4K\3\2\2\2\u01a5\u01a6\7\3\2\2\u01a6\u01a8\5\n\6\2"+
		"\u01a7\u01a9\5$\23\2\u01a8\u01a7\3\2\2\2\u01a8\u01a9\3\2\2\2\u01a9\u01aa"+
		"\3\2\2\2\u01aa\u01ab\5h\65\2\u01abM\3\2\2\2\u01ac\u01ad\7\23\2\2\u01ad"+
		"\u01af\5\n\6\2\u01ae\u01b0\5$\23\2\u01af\u01ae\3\2\2\2\u01af\u01b0\3\2"+
		"\2\2\u01b0\u01b1\3\2\2\2\u01b1\u01b2\5h\65\2\u01b2O\3\2\2\2\u01b3\u01b4"+
		"\5R*\2\u01b4\u01b5\7\62\2\2\u01b5\u01b7\5T+\2\u01b6\u01b8\7.\2\2\u01b7"+
		"\u01b6\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u01b9\3\2\2\2\u01b9\u01bb\7*"+
		"\2\2\u01ba\u01bc\7:\2\2\u01bb\u01ba\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc"+
		"Q\3\2\2\2\u01bd\u01bf\5~@\2\u01be\u01bd\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf"+
		"\u01c0\3\2\2\2\u01c0\u01c2\7\6\2\2\u01c1\u01c3\7\3\2\2\u01c2\u01c1\3\2"+
		"\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01d1\5\n\6\2\u01c5"+
		"\u01c7\5~@\2\u01c6\u01c5\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c8\3\2\2"+
		"\2\u01c8\u01ca\7\6\2\2\u01c9\u01cb\7\3\2\2\u01ca\u01c9\3\2\2\2\u01ca\u01cb"+
		"\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc\u01cd\5\n\6\2\u01cd\u01ce\7-\2\2\u01ce"+
		"\u01cf\5\22\n\2\u01cf\u01d1\3\2\2\2\u01d0\u01be\3\2\2\2\u01d0\u01c6\3"+
		"\2\2\2\u01d1S\3\2\2\2\u01d2\u01d8\5V,\2\u01d3\u01d4\5V,\2\u01d4\u01d5"+
		"\7.\2\2\u01d5\u01d6\5T+\2\u01d6\u01d8\3\2\2\2\u01d7\u01d2\3\2\2\2\u01d7"+
		"\u01d3\3\2\2\2\u01d8U\3\2\2\2\u01d9\u01db\5\n\6\2\u01da\u01dc\5X-\2\u01db"+
		"\u01da\3\2\2\2\u01db\u01dc\3\2\2\2\u01dc\u01de\3\2\2\2\u01dd\u01df\5\u0084"+
		"C\2\u01de\u01dd\3\2\2\2\u01de\u01df\3\2\2\2\u01dfW\3\2\2\2\u01e0\u01e1"+
		"\7/\2\2\u01e1\u01e2\5\b\5\2\u01e2Y\3\2\2\2\u01e3\u01e5\5v<\2\u01e4\u01e3"+
		"\3\2\2\2\u01e5\u01e8\3\2\2\2\u01e6\u01e4\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7"+
		"\u01ea\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e9\u01eb\5\22\n\2\u01ea\u01e9\3"+
		"\2\2\2\u01ea\u01eb\3\2\2\2\u01eb\u01ec\3\2\2\2\u01ec\u01ed\5t;\2\u01ed"+
		"\u01ef\5d\63\2\u01ee\u01f0\7\4\2\2\u01ef\u01ee\3\2\2\2\u01ef\u01f0\3\2"+
		"\2\2\u01f0\u01f2\3\2\2\2\u01f1\u01f3\5h\65\2\u01f2\u01f1\3\2\2\2\u01f2"+
		"\u01f3\3\2\2\2\u01f3\u01f5\3\2\2\2\u01f4\u01f6\7:\2\2\u01f5\u01f4\3\2"+
		"\2\2\u01f5\u01f6\3\2\2\2\u01f6[\3\2\2\2\u01f7\u01f8\7\22\2\2\u01f8\u01f9"+
		"\5\22\n\2\u01f9\u01fa\5\n\6\2\u01fa\u01fb\7/\2\2\u01fb\u01fc\5\b\5\2\u01fc"+
		"\u01fd\7:\2\2\u01fd]\3\2\2\2\u01fe\u01ff\7\b\2\2\u01ff\u0200\5\22\n\2"+
		"\u0200\u0201\5\n\6\2\u0201\u0202\5d\63\2\u0202_\3\2\2\2\u0203\u0204\5"+
		"\n\6\2\u0204\u0205\5d\63\2\u0205\u0206\7:\2\2\u0206a\3\2\2\2\u0207\u0209"+
		"\7\26\2\2\u0208\u020a\7\27\2\2\u0209\u0208\3\2\2\2\u0209\u020a\3\2\2\2"+
		"\u020a\u020b\3\2\2\2\u020b\u020c\5\22\n\2\u020c\u020d\5\n\6\2\u020d\u020e"+
		"\7:\2\2\u020e\u0214\3\2\2\2\u020f\u0210\7\3\2\2\u0210\u0211\5\n\6\2\u0211"+
		"\u0212\7:\2\2\u0212\u0214\3\2\2\2\u0213\u0207\3\2\2\2\u0213\u020f\3\2"+
		"\2\2\u0214c\3\2\2\2\u0215\u0219\7\63\2\2\u0216\u0218\5f\64\2\u0217\u0216"+
		"\3\2\2\2\u0218\u021b\3\2\2\2\u0219\u0217\3\2\2\2\u0219\u021a\3\2\2\2\u021a"+
		"\u021c\3\2\2\2\u021b\u0219\3\2\2\2\u021c\u021d\7+\2\2\u021de\3\2\2\2\u021e"+
		"\u0220\n\b\2\2\u021f\u021e\3\2\2\2\u0220\u0221\3\2\2\2\u0221\u021f\3\2"+
		"\2\2\u0221\u0222\3\2\2\2\u0222\u0225\3\2\2\2\u0223\u0225\5d\63\2\u0224"+
		"\u021f\3\2\2\2\u0224\u0223\3\2\2\2\u0225g\3\2\2\2\u0226\u022a\7\62\2\2"+
		"\u0227\u0229\5j\66\2\u0228\u0227\3\2\2\2\u0229\u022c\3\2\2\2\u022a\u0228"+
		"\3\2\2\2\u022a\u022b\3\2\2\2\u022b\u022d\3\2\2\2\u022c\u022a\3\2\2\2\u022d"+
		"\u022e\7*\2\2\u022ei\3\2\2\2\u022f\u0231\n\t\2\2\u0230\u022f\3\2\2\2\u0231"+
		"\u0232\3\2\2\2\u0232\u0230\3\2\2\2\u0232\u0233\3\2\2\2\u0233\u0236\3\2"+
		"\2\2\u0234\u0236\5h\65\2\u0235\u0230\3\2\2\2\u0235\u0234\3\2\2\2\u0236"+
		"k\3\2\2\2\u0237\u023b\7\61\2\2\u0238\u023a\5n8\2\u0239\u0238\3\2\2\2\u023a"+
		"\u023d\3\2\2\2\u023b\u0239\3\2\2\2\u023b\u023c\3\2\2\2\u023c\u023e\3\2"+
		"\2\2\u023d\u023b\3\2\2\2\u023e\u023f\7)\2\2\u023fm\3\2\2\2\u0240\u0242"+
		"\n\n\2\2\u0241\u0240\3\2\2\2\u0242\u0243\3\2\2\2\u0243\u0241\3\2\2\2\u0243"+
		"\u0244\3\2\2\2\u0244\u0247\3\2\2\2\u0245\u0247\5l\67\2\u0246\u0241\3\2"+
		"\2\2\u0246\u0245\3\2\2\2\u0247o\3\2\2\2\u0248\u024c\7\64\2\2\u0249\u024b"+
		"\5r:\2\u024a\u0249\3\2\2\2\u024b\u024e\3\2\2\2\u024c\u024a\3\2\2\2\u024c"+
		"\u024d\3\2\2\2\u024d\u024f\3\2\2\2\u024e\u024c\3\2\2\2\u024f\u0250\7,"+
		"\2\2\u0250q\3\2\2\2\u0251\u0253\n\13\2\2\u0252\u0251\3\2\2\2\u0253\u0254"+
		"\3\2\2\2\u0254\u0252\3\2\2\2\u0254\u0255\3\2\2\2\u0255\u0258\3\2\2\2\u0256"+
		"\u0258\5p9\2\u0257\u0252\3\2\2\2\u0257\u0256\3\2\2\2\u0258s\3\2\2\2\u0259"+
		"\u025b\7=\2\2\u025a\u0259\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025c\3\2"+
		"\2\2\u025c\u027d\5\n\6\2\u025d\u025e\7\r\2\2\u025e\u027d\7/\2\2\u025f"+
		"\u0260\7\r\2\2\u0260\u0261\7/\2\2\u0261\u027d\7/\2\2\u0262\u0263\7\r\2"+
		"\2\u0263\u0264\7(\2\2\u0264\u027d\7/\2\2\u0265\u0266\7\r\2\2\u0266\u027d"+
		"\78\2\2\u0267\u0268\7\r\2\2\u0268\u027d\7\60\2\2\u0269\u026a\7\r\2\2\u026a"+
		"\u026b\7\64\2\2\u026b\u027d\7,\2\2\u026c\u026d\7\r\2\2\u026d\u027d\7\61"+
		"\2\2\u026e\u026f\7\r\2\2\u026f\u0270\7\61\2\2\u0270\u027d\7\61\2\2\u0271"+
		"\u0272\7\r\2\2\u0272\u027d\7)\2\2\u0273\u0274\7\r\2\2\u0274\u0275\7)\2"+
		"\2\u0275\u027d\7)\2\2\u0276\u0277\7\r\2\2\u0277\u0278\7\63\2\2\u0278\u027d"+
		"\7+\2\2\u0279\u027a\7\r\2\2\u027a\u027b\7\60\2\2\u027b\u027d\7)\2\2\u027c"+
		"\u025a\3\2\2\2\u027c\u025d\3\2\2\2\u027c\u025f\3\2\2\2\u027c\u0262\3\2"+
		"\2\2\u027c\u0265\3\2\2\2\u027c\u0267\3\2\2\2\u027c\u0269\3\2\2\2\u027c"+
		"\u026c\3\2\2\2\u027c\u026e\3\2\2\2\u027c\u0271\3\2\2\2\u027c\u0273\3\2"+
		"\2\2\u027c\u0276\3\2\2\2\u027c\u0279\3\2\2\2\u027du\3\2\2\2\u027e\u0288"+
		"\7\22\2\2\u027f\u0288\7\4\2\2\u0280\u0288\7\5\2\2\u0281\u0288\7\31\2\2"+
		"\u0282\u0288\7\b\2\2\u0283\u0288\7\n\2\2\u0284\u0288\7\t\2\2\u0285\u0286"+
		"\7\24\2\2\u0286\u0288\5l\67\2\u0287\u027e\3\2\2\2\u0287\u027f\3\2\2\2"+
		"\u0287\u0280\3\2\2\2\u0287\u0281\3\2\2\2\u0287\u0282\3\2\2\2\u0287\u0283"+
		"\3\2\2\2\u0287\u0284\3\2\2\2\u0287\u0285\3\2\2\2\u0288w\3\2\2\2\u0289"+
		"\u028a\7\f\2\2\u028a\u028b\5\n\6\2\u028b\u028c\5h\65\2\u028cy\3\2\2\2"+
		"\u028d\u028e\7\30\2\2\u028e\u028f\5\n\6\2\u028f\u0290\7/\2\2\u0290\u0291"+
		"\5\n\6\2\u0291{\3\2\2\2\u0292\u0293\7\32\2\2\u0293\u0294\5\u0090I\2\u0294"+
		"}\3\2\2\2\u0295\u0296\7\33\2\2\u0296\u0297\5\u0090I\2\u0297\177\3\2\2"+
		"\2\u0298\u029a\7\b\2\2\u0299\u0298\3\2\2\2\u0299\u029a\3\2\2\2\u029a\u029b"+
		"\3\2\2\2\u029b\u029c\7\34\2\2\u029c\u029d\5\u0090I\2\u029d\u0081\3\2\2"+
		"\2\u029e\u029f\7\35\2\2\u029f\u02a0\5\u0090I\2\u02a0\u0083\3\2\2\2\u02a1"+
		"\u02a2\7\36\2\2\u02a2\u02a3\5\u0090I\2\u02a3\u0085\3\2\2\2\u02a4\u02a5"+
		"\7\37\2\2\u02a5\u02a6\5\u0090I\2\u02a6\u0087\3\2\2\2\u02a7\u02a8\7 \2"+
		"\2\u02a8\u02a9\5\u0090I\2\u02a9\u0089\3\2\2\2\u02aa\u02ab\7!\2\2\u02ab"+
		"\u02ac\5\u0090I\2\u02ac\u008b\3\2\2\2\u02ad\u02ae\7\"\2\2\u02ae\u02af"+
		"\5\u0090I\2\u02af\u008d\3\2\2\2\u02b0\u02b1\7%\2\2\u02b1\u02b2\5\u0090"+
		"I\2\u02b2\u008f\3\2\2\2\u02b3\u02b5\7\63\2\2\u02b4\u02b6\5\u0092J\2\u02b5"+
		"\u02b4\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7\u02b8\7+"+
		"\2\2\u02b8\u0091\3\2\2\2\u02b9\u02c0\5\u0094K\2\u02ba\u02bb\5\u0094K\2"+
		"\u02bb\u02bd\7.\2\2\u02bc\u02be\5\u0092J\2\u02bd\u02bc\3\2\2\2\u02bd\u02be"+
		"\3\2\2\2\u02be\u02c0\3\2\2\2\u02bf\u02b9\3\2\2\2\u02bf\u02ba\3\2\2\2\u02c0"+
		"\u0093\3\2\2\2\u02c1\u02c6\5\n\6\2\u02c2\u02c6\5\b\5\2\u02c3\u02c6\5\u0096"+
		"L\2\u02c4\u02c6\5\u0090I\2\u02c5\u02c1\3\2\2\2\u02c5\u02c2\3\2\2\2\u02c5"+
		"\u02c3\3\2\2\2\u02c5\u02c4\3\2\2\2\u02c6\u0095\3\2\2\2\u02c7\u02c8\5\n"+
		"\6\2\u02c8\u02c9\7/\2\2\u02c9\u02ca\5\u0094K\2\u02ca\u0097\3\2\2\2U\u009b"+
		"\u00a8\u00ac\u00b1\u00b8\u00c3\u00c8\u00cb\u00ce\u00da\u00e3\u00e6\u00e9"+
		"\u00ed\u00f1\u00f4\u00f9\u0108\u010b\u010f\u0112\u0116\u0123\u012c\u0135"+
		"\u0138\u013d\u0141\u0148\u014e\u0152\u0158\u015e\u0167\u016d\u0170\u0174"+
		"\u0177\u0183\u0188\u0196\u0198\u019d\u01a1\u01a8\u01af\u01b7\u01bb\u01be"+
		"\u01c2\u01c6\u01ca\u01d0\u01d7\u01db\u01de\u01e6\u01ea\u01ef\u01f2\u01f5"+
		"\u0209\u0213\u0219\u0221\u0224\u022a\u0232\u0235\u023b\u0243\u0246\u024c"+
		"\u0254\u0257\u025a\u027c\u0287\u0299\u02b5\u02bd\u02bf\u02c5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}