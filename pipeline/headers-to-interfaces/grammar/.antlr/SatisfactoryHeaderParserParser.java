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
		CLASS=1, CONST=2, ENUM=3, FALSE=4, FORCEINLINE=5, FRIEND=6, INLINE=7, 
		MUTABLE=8, OPERATOR=9, OVERRIDE=10, PRIVATE=11, PROTECTED=12, PUBLIC=13, 
		STATIC=14, STRUCT=15, TEMPLATE=16, TRUE=17, TYPEDEF=18, VIRTUAL=19, UCLASS=20, 
		UENUM=21, UFUNCTION=22, UINTERFACE=23, UMETA=24, UPARAM=25, UPROPERTY=26, 
		USTRUCT=27, UE_DEPRECATED=28, STAT=29, SF_CLASS_TAG=30, SF_GENERATED_BODY=31, 
		AMPERSAND=32, BACKSLASH=33, BANG=34, CLOSE_ANGLE=35, CLOSE_BRACE=36, CLOSE_PAREN=37, 
		CLOSE_SQUARE=38, COLON=39, COMMA=40, EQUALS=41, MINUS=42, OPEN_ANGLE=43, 
		OPEN_BRACE=44, OPEN_PAREN=45, OPEN_SQUARE=46, PERIOD=47, PIPE=48, PLUS=49, 
		QUESTION=50, SEMICOLON=51, STAR=52, IDENTIFIER=53, STRING_LITERAL=54, 
		FLOAT_LITERAL=55, INTEGER_LITERAL=56, PREPROCESSOR=57, LINE_COMMENT_START=58, 
		BLOCK_COMMENT_START=59, WHITESPACE=60, LINE_COMMENT_END=61, LINE_COMMENT_TEXT=62, 
		LINE_COMMENT_OTHER=63, BLOCK_COMMENT_END=64, BLOCK_COMMENT_NEW_LINE=65, 
		BLOCK_COMMENT_TEXT=66, BLOCK_COMMENT_OTHER=67;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_booleanLiteral = 7, 
		RULE_typeDeclaration = 8, RULE_templateType = 9, RULE_templateTypeList = 10, 
		RULE_typeModifier = 11, RULE_typeReferenceType = 12, RULE_classDeclaration = 13, 
		RULE_classHeader = 14, RULE_classMacro = 15, RULE_classKeyword = 16, RULE_classInheritance = 17, 
		RULE_classExtensionList = 18, RULE_classExtension = 19, RULE_classBody = 20, 
		RULE_classEntries = 21, RULE_classEntry = 22, RULE_classVisibility = 23, 
		RULE_classVisibilityModifier = 24, RULE_friendDeclaration = 25, RULE_statDeclaration = 26, 
		RULE_classMethod = 27, RULE_classMethodEnd = 28, RULE_classMethodResultModifier = 29, 
		RULE_classInitializerList = 30, RULE_classInitializer = 31, RULE_classProperty = 32, 
		RULE_classPropertyDefaultValue = 33, RULE_classPropertyArraySizeDeclaration = 34, 
		RULE_classPropertyArraySize = 35, RULE_enumDeclaration = 36, RULE_enumHeader = 37, 
		RULE_enumBody = 38, RULE_enumEntry = 39, RULE_enumValue = 40, RULE_staticFunctionDeclaration = 41, 
		RULE_staticPropertyDeclaration = 42, RULE_staticMethodCall = 43, RULE_typedef = 44, 
		RULE_contentWithNestedParens = 45, RULE_contentWithNestedParensInner = 46, 
		RULE_contentWithNestedBraces = 47, RULE_contentWithNestedBracesInner = 48, 
		RULE_contentWithNestedAngles = 49, RULE_contentWithNestedAnglesInner = 50, 
		RULE_functionName = 51, RULE_functionModifier = 52, RULE_uclassMacro = 53, 
		RULE_uenumMacro = 54, RULE_ufunctionMacro = 55, RULE_uinterfaceMacro = 56, 
		RULE_umetaMacro = 57, RULE_uParamMacro = 58, RULE_upropertyMacro = 59, 
		RULE_ustructMacro = 60, RULE_uedeprecatedMacro = 61, RULE_generatedBodyMacro = 62, 
		RULE_macroPropertyList = 63, RULE_macroPropertyListEntries = 64, RULE_macroProperty = 65, 
		RULE_macroPropertyPair = 66;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"templateTypeList", "typeModifier", "typeReferenceType", "classDeclaration", 
		"classHeader", "classMacro", "classKeyword", "classInheritance", "classExtensionList", 
		"classExtension", "classBody", "classEntries", "classEntry", "classVisibility", 
		"classVisibilityModifier", "friendDeclaration", "statDeclaration", "classMethod", 
		"classMethodEnd", "classMethodResultModifier", "classInitializerList", 
		"classInitializer", "classProperty", "classPropertyDefaultValue", "classPropertyArraySizeDeclaration", 
		"classPropertyArraySize", "enumDeclaration", "enumHeader", "enumBody", 
		"enumEntry", "enumValue", "staticFunctionDeclaration", "staticPropertyDeclaration", 
		"staticMethodCall", "typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
		"contentWithNestedBraces", "contentWithNestedBracesInner", "contentWithNestedAngles", 
		"contentWithNestedAnglesInner", "functionName", "functionModifier", "uclassMacro", 
		"uenumMacro", "ufunctionMacro", "uinterfaceMacro", "umetaMacro", "uParamMacro", 
		"upropertyMacro", "ustructMacro", "uedeprecatedMacro", "generatedBodyMacro", 
		"macroPropertyList", "macroPropertyListEntries", "macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", "'friend'", 
		"'inline'", "'mutable'", "'operator'", "'override'", "'private'", "'protected'", 
		"'public'", "'static'", "'struct'", "'template'", "'true'", "'typedef'", 
		"'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", 
		"'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", 
		null, "'&'", "'/'", "'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", 
		"'-'", "'<'", "'{'", "'('", "'['", "'.'", "'|'", "'+'", "'?'", "';'", 
		"'*'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", "INLINE", 
		"MUTABLE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
		"STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "USTRUCT", 
		"UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", "AMPERSAND", 
		"BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", 
		"COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", 
		"OPEN_SQUARE", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "STAR", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
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
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UINTERFACE) | (1L << UPARAM) | (1L << USTRUCT) | (1L << SEMICOLON) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(134);
				element();
				}
				}
				setState(139);
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
		public StaticMethodCallContext staticMethodCall() {
			return getRuleContext(StaticMethodCallContext.class,0);
		}
		public StaticFunctionDeclarationContext staticFunctionDeclaration() {
			return getRuleContext(StaticFunctionDeclarationContext.class,0);
		}
		public StaticPropertyDeclarationContext staticPropertyDeclaration() {
			return getRuleContext(StaticPropertyDeclarationContext.class,0);
		}
		public TypedefContext typedef() {
			return getRuleContext(TypedefContext.class,0);
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
			setState(147);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(140);
				classDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				enumDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(142);
				staticMethodCall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(143);
				staticFunctionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(144);
				staticPropertyDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(145);
				typedef();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(146);
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
			setState(151);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
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
				setState(150);
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
			setState(156);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(153);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(155);
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
			setState(163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(158);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(159);
				match(IDENTIFIER);
				setState(160);
				match(COLON);
				setState(161);
				match(COLON);
				setState(162);
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
			setState(165);
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
			setState(167);
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
			setState(169);
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
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << MUTABLE) | (1L << STRUCT) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(171);
				typeModifier();
				}
				}
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(177);
			identifier();
			setState(179);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(178);
				templateType();
				}
			}

			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AMPERSAND || _la==STAR) {
				{
				setState(181);
				typeReferenceType();
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
		public TerminalNode OPEN_ANGLE() { return getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, 0); }
		public TemplateTypeListContext templateTypeList() {
			return getRuleContext(TemplateTypeListContext.class,0);
		}
		public TerminalNode CLOSE_ANGLE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, 0); }
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
			setState(184);
			match(OPEN_ANGLE);
			setState(185);
			templateTypeList();
			setState(186);
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

	public static class TemplateTypeListContext extends ParserRuleContext {
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public TemplateTypeListContext templateTypeList() {
			return getRuleContext(TemplateTypeListContext.class,0);
		}
		public TemplateTypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateTypeList; }
	}

	public final TemplateTypeListContext templateTypeList() throws RecognitionException {
		TemplateTypeListContext _localctx = new TemplateTypeListContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_templateTypeList);
		try {
			setState(193);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				typeDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				typeDeclaration();
				setState(190);
				match(COMMA);
				setState(191);
				templateTypeList();
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

	public static class TypeModifierContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public TerminalNode ENUM() { return getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
		public TerminalNode STRUCT() { return getToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
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
		enterRule(_localctx, 22, RULE_typeModifier);
		try {
			setState(201);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(195);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(196);
				match(CONST);
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(197);
				match(ENUM);
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 4);
				{
				setState(198);
				match(STRUCT);
				}
				break;
			case MUTABLE:
				enterOuterAlt(_localctx, 5);
				{
				setState(199);
				match(MUTABLE);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 6);
				{
				setState(200);
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
		enterRule(_localctx, 24, RULE_typeReferenceType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
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
		enterRule(_localctx, 26, RULE_classDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			classHeader();
			setState(206);
			match(OPEN_BRACE);
			setState(207);
			classBody();
			setState(208);
			match(CLOSE_BRACE);
			setState(210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(209);
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
		public TerminalNode SF_CLASS_TAG() { return getToken(SatisfactoryHeaderParserParser.SF_CLASS_TAG, 0); }
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
		enterRule(_localctx, 28, RULE_classHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UCLASS) | (1L << UINTERFACE) | (1L << USTRUCT))) != 0)) {
				{
				setState(212);
				classMacro();
				}
			}

			setState(215);
			classKeyword();
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(216);
				match(SF_CLASS_TAG);
				}
			}

			setState(219);
			identifier();
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(220);
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
		enterRule(_localctx, 30, RULE_classMacro);
		try {
			setState(226);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				uclassMacro();
				}
				break;
			case UINTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(224);
				uinterfaceMacro();
				}
				break;
			case USTRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(225);
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
			setState(228);
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
			setState(230);
			match(COLON);
			setState(231);
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
			setState(238);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(233);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(234);
				classExtension();
				setState(235);
				match(COMMA);
				setState(236);
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
		public ClassVisibilityModifierContext classVisibilityModifier() {
			return getRuleContext(ClassVisibilityModifierContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassExtensionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classExtension; }
	}

	public final ClassExtensionContext classExtension() throws RecognitionException {
		ClassExtensionContext _localctx = new ClassExtensionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_classExtension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			classVisibilityModifier();
			setState(241);
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

	public static class ClassBodyContext extends ParserRuleContext {
		public GeneratedBodyMacroContext generatedBodyMacro() {
			return getRuleContext(GeneratedBodyMacroContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
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
			setState(244);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(243);
				generatedBodyMacro();
				}
			}

			setState(247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(246);
				match(SEMICOLON);
				}
				break;
			}
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SEMICOLON) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(249);
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
			setState(252);
			classEntry();
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SEMICOLON) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(253);
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
		public TypedefContext typedef() {
			return getRuleContext(TypedefContext.class,0);
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
			setState(263);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(256);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(257);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(258);
				friendDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(259);
				classProperty();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(260);
				statDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(261);
				typedef();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(262);
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
			setState(265);
			classVisibilityModifier();
			setState(266);
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
			setState(268);
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
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
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
			setState(270);
			match(FRIEND);
			setState(272);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLASS) {
				{
				setState(271);
				match(CLASS);
				}
			}

			setState(274);
			identifier();
			setState(275);
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
			setState(277);
			match(STAT);
			setState(278);
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
			setState(281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UE_DEPRECATED) {
				{
				setState(280);
				uedeprecatedMacro();
				}
			}

			setState(284);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(283);
				ufunctionMacro();
				}
			}

			setState(289);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(286);
					functionModifier();
					}
					} 
				}
				setState(291);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(293);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(292);
				typeDeclaration();
				}
				break;
			}
			setState(295);
			functionName();
			setState(296);
			contentWithNestedParens();
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CONST || _la==OVERRIDE) {
				{
				{
				setState(297);
				classMethodResultModifier();
				}
				}
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(303);
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
		public ClassMethodEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodEnd; }
	}

	public final ClassMethodEndContext classMethodEnd() throws RecognitionException {
		ClassMethodEndContext _localctx = new ClassMethodEndContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_classMethodEnd);
		try {
			setState(316);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(305);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(306);
				contentWithNestedBraces();
				setState(308);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
				case 1:
					{
					setState(307);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				match(COLON);
				setState(311);
				classInitializerList();
				setState(312);
				contentWithNestedBraces();
				setState(314);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
				case 1:
					{
					setState(313);
					match(SEMICOLON);
					}
					break;
				}
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
			setState(318);
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
			setState(325);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(320);
				classInitializer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(321);
				classInitializer();
				setState(322);
				match(COMMA);
				setState(323);
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
			setState(327);
			identifier();
			setState(328);
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
		public TerminalNode STATIC() { return getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public ClassPropertyArraySizeDeclarationContext classPropertyArraySizeDeclaration() {
			return getRuleContext(ClassPropertyArraySizeDeclarationContext.class,0);
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
			setState(331);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(330);
				upropertyMacro();
				}
			}

			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(333);
				match(STATIC);
				}
			}

			setState(337);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(336);
				typeDeclaration();
				}
				break;
			}
			setState(339);
			identifier();
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_SQUARE) {
				{
				setState(340);
				classPropertyArraySizeDeclaration();
				}
			}

			setState(344);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==EQUALS) {
				{
				setState(343);
				classPropertyDefaultValue();
				}
			}

			setState(346);
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
			setState(358);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(348);
				match(COLON);
				setState(349);
				literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(350);
				match(EQUALS);
				setState(351);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(352);
				match(EQUALS);
				setState(353);
				identifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(354);
				match(EQUALS);
				setState(355);
				identifier();
				setState(356);
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

	public static class ClassPropertyArraySizeDeclarationContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
		public ClassPropertyArraySizeContext classPropertyArraySize() {
			return getRuleContext(ClassPropertyArraySizeContext.class,0);
		}
		public TerminalNode CLOSE_SQUARE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
		public ClassPropertyArraySizeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPropertyArraySizeDeclaration; }
	}

	public final ClassPropertyArraySizeDeclarationContext classPropertyArraySizeDeclaration() throws RecognitionException {
		ClassPropertyArraySizeDeclarationContext _localctx = new ClassPropertyArraySizeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_classPropertyArraySizeDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			match(OPEN_SQUARE);
			setState(361);
			classPropertyArraySize();
			setState(362);
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
			setState(366);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(364);
				identifier();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(365);
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
		enterRule(_localctx, 72, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			enumHeader();
			setState(369);
			match(OPEN_BRACE);
			setState(370);
			enumBody();
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(371);
				match(COMMA);
				}
			}

			setState(374);
			match(CLOSE_BRACE);
			setState(376);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(375);
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
		enterRule(_localctx, 74, RULE_enumHeader);
		int _la;
		try {
			setState(397);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(379);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(378);
					uenumMacro();
					}
				}

				setState(381);
				match(ENUM);
				setState(383);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(382);
					match(CLASS);
					}
				}

				setState(385);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(387);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(386);
					uenumMacro();
					}
				}

				setState(389);
				match(ENUM);
				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(390);
					match(CLASS);
					}
				}

				setState(393);
				identifier();
				setState(394);
				match(COLON);
				setState(395);
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
		enterRule(_localctx, 76, RULE_enumBody);
		try {
			setState(404);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(399);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(400);
				enumEntry();
				setState(401);
				match(COMMA);
				setState(402);
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
		enterRule(_localctx, 78, RULE_enumEntry);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
			identifier();
			setState(408);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(407);
				enumValue();
				}
			}

			setState(411);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UMETA) {
				{
				setState(410);
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
		enterRule(_localctx, 80, RULE_enumValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(EQUALS);
			setState(414);
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
		public ContentWithNestedBracesContext contentWithNestedBraces() {
			return getRuleContext(ContentWithNestedBracesContext.class,0);
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
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public StaticFunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_staticFunctionDeclaration; }
	}

	public final StaticFunctionDeclarationContext staticFunctionDeclaration() throws RecognitionException {
		StaticFunctionDeclarationContext _localctx = new StaticFunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_staticFunctionDeclaration);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(416);
					functionModifier();
					}
					} 
				}
				setState(421);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			setState(423);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(422);
				typeDeclaration();
				}
				break;
			}
			setState(425);
			functionName();
			setState(426);
			contentWithNestedParens();
			setState(428);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONST) {
				{
				setState(427);
				match(CONST);
				}
			}

			setState(430);
			contentWithNestedBraces();
			setState(432);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				setState(431);
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
		enterRule(_localctx, 84, RULE_staticPropertyDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(STATIC);
			setState(435);
			typeDeclaration();
			setState(436);
			identifier();
			setState(437);
			match(EQUALS);
			setState(438);
			literal();
			setState(439);
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
		enterRule(_localctx, 86, RULE_staticMethodCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			identifier();
			setState(442);
			contentWithNestedParens();
			setState(443);
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
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public TypedefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedef; }
	}

	public final TypedefContext typedef() throws RecognitionException {
		TypedefContext _localctx = new TypedefContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_typedef);
		try {
			setState(454);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPEDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(445);
				match(TYPEDEF);
				setState(446);
				typeDeclaration();
				setState(447);
				identifier();
				setState(448);
				match(SEMICOLON);
				}
				break;
			case CLASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(450);
				match(CLASS);
				setState(451);
				identifier();
				setState(452);
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
		enterRule(_localctx, 90, RULE_contentWithNestedParens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			match(OPEN_PAREN);
			setState(460);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_BRACE) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(457);
				contentWithNestedParensInner();
				}
				}
				setState(462);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(463);
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
		enterRule(_localctx, 92, RULE_contentWithNestedParensInner);
		int _la;
		try {
			int _alt;
			setState(471);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
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
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case STAR:
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
				enterOuterAlt(_localctx, 1);
				{
				setState(466); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(465);
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
					setState(468); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(470);
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
		enterRule(_localctx, 94, RULE_contentWithNestedBraces);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			match(OPEN_BRACE);
			setState(477);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(474);
				contentWithNestedBracesInner();
				}
				}
				setState(479);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(480);
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
		enterRule(_localctx, 96, RULE_contentWithNestedBracesInner);
		int _la;
		try {
			int _alt;
			setState(488);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
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
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case STAR:
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
				enterOuterAlt(_localctx, 1);
				{
				setState(483); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(482);
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
					setState(485); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,57,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(487);
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
		enterRule(_localctx, 98, RULE_contentWithNestedAngles);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			match(OPEN_ANGLE);
			setState(494);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_BRACE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(491);
				contentWithNestedAnglesInner();
				}
				}
				setState(496);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(497);
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
		enterRule(_localctx, 100, RULE_contentWithNestedAnglesInner);
		int _la;
		try {
			int _alt;
			setState(505);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case CONST:
			case ENUM:
			case FALSE:
			case FORCEINLINE:
			case FRIEND:
			case INLINE:
			case MUTABLE:
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
			case PERIOD:
			case PIPE:
			case PLUS:
			case QUESTION:
			case SEMICOLON:
			case STAR:
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
				enterOuterAlt(_localctx, 1);
				{
				setState(500); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(499);
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
					setState(502); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_ANGLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(504);
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

	public static class FunctionNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPERATOR() { return getToken(SatisfactoryHeaderParserParser.OPERATOR, 0); }
		public List<TerminalNode> EQUALS() { return getTokens(SatisfactoryHeaderParserParser.EQUALS); }
		public TerminalNode EQUALS(int i) {
			return getToken(SatisfactoryHeaderParserParser.EQUALS, i);
		}
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
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_functionName);
		try {
			setState(526);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(507);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(508);
				match(OPERATOR);
				setState(509);
				match(EQUALS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(510);
				match(OPERATOR);
				setState(511);
				match(EQUALS);
				setState(512);
				match(EQUALS);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(513);
				match(OPERATOR);
				setState(514);
				match(OPEN_SQUARE);
				setState(515);
				match(CLOSE_SQUARE);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(516);
				match(OPERATOR);
				setState(517);
				match(OPEN_ANGLE);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(518);
				match(OPERATOR);
				setState(519);
				match(OPEN_ANGLE);
				setState(520);
				match(OPEN_ANGLE);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(521);
				match(OPERATOR);
				setState(522);
				match(CLOSE_ANGLE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(523);
				match(OPERATOR);
				setState(524);
				match(CLOSE_ANGLE);
				setState(525);
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
		public TerminalNode VIRTUAL() { return getToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
		public TerminalNode FORCEINLINE() { return getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
		public TerminalNode INLINE() { return getToken(SatisfactoryHeaderParserParser.INLINE, 0); }
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
		enterRule(_localctx, 104, RULE_functionModifier);
		try {
			setState(535);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STATIC:
				enterOuterAlt(_localctx, 1);
				{
				setState(528);
				match(STATIC);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(529);
				match(CONST);
				}
				break;
			case VIRTUAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(530);
				match(VIRTUAL);
				}
				break;
			case FORCEINLINE:
				enterOuterAlt(_localctx, 4);
				{
				setState(531);
				match(FORCEINLINE);
				}
				break;
			case INLINE:
				enterOuterAlt(_localctx, 5);
				{
				setState(532);
				match(INLINE);
				}
				break;
			case TEMPLATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(533);
				match(TEMPLATE);
				setState(534);
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
		enterRule(_localctx, 106, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(UCLASS);
			setState(538);
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
		enterRule(_localctx, 108, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(UENUM);
			setState(541);
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
		public UfunctionMacroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ufunctionMacro; }
	}

	public final UfunctionMacroContext ufunctionMacro() throws RecognitionException {
		UfunctionMacroContext _localctx = new UfunctionMacroContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(543);
			match(UFUNCTION);
			setState(544);
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
		enterRule(_localctx, 112, RULE_uinterfaceMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(546);
			match(UINTERFACE);
			setState(547);
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
		enterRule(_localctx, 114, RULE_umetaMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			match(UMETA);
			setState(550);
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
		enterRule(_localctx, 116, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(UPARAM);
			setState(553);
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
		enterRule(_localctx, 118, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(555);
			match(UPROPERTY);
			setState(556);
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
		enterRule(_localctx, 120, RULE_ustructMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			match(USTRUCT);
			setState(559);
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
		enterRule(_localctx, 122, RULE_uedeprecatedMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(561);
			match(UE_DEPRECATED);
			setState(562);
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
		enterRule(_localctx, 124, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(564);
			match(SF_GENERATED_BODY);
			setState(565);
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
		enterRule(_localctx, 126, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(567);
			match(OPEN_PAREN);
			setState(569);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(568);
				macroPropertyListEntries();
				}
			}

			setState(571);
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
		enterRule(_localctx, 128, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(579);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(573);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(574);
				macroProperty();
				setState(575);
				match(COMMA);
				setState(577);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(576);
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
		enterRule(_localctx, 130, RULE_macroProperty);
		try {
			setState(585);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(581);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(582);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(583);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(584);
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
		enterRule(_localctx, 132, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(587);
			identifier();
			setState(588);
			match(EQUALS);
			setState(589);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3E\u0252\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\3\2\7\2\u008a\n\2\f\2\16\2"+
		"\u008d\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u0096\n\3\3\4\3\4\5\4\u009a"+
		"\n\4\3\5\3\5\3\5\5\5\u009f\n\5\3\6\3\6\3\6\3\6\3\6\5\6\u00a6\n\6\3\7\3"+
		"\7\3\b\3\b\3\t\3\t\3\n\7\n\u00af\n\n\f\n\16\n\u00b2\13\n\3\n\3\n\5\n\u00b6"+
		"\n\n\3\n\5\n\u00b9\n\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f\u00c4"+
		"\n\f\3\r\3\r\3\r\3\r\3\r\3\r\5\r\u00cc\n\r\3\16\3\16\3\17\3\17\3\17\3"+
		"\17\3\17\5\17\u00d5\n\17\3\20\5\20\u00d8\n\20\3\20\3\20\5\20\u00dc\n\20"+
		"\3\20\3\20\5\20\u00e0\n\20\3\21\3\21\3\21\5\21\u00e5\n\21\3\22\3\22\3"+
		"\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\5\24\u00f1\n\24\3\25\3\25\3\25"+
		"\3\26\5\26\u00f7\n\26\3\26\5\26\u00fa\n\26\3\26\5\26\u00fd\n\26\3\27\3"+
		"\27\5\27\u0101\n\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u010a\n\30"+
		"\3\31\3\31\3\31\3\32\3\32\3\33\3\33\5\33\u0113\n\33\3\33\3\33\3\33\3\34"+
		"\3\34\3\34\3\35\5\35\u011c\n\35\3\35\5\35\u011f\n\35\3\35\7\35\u0122\n"+
		"\35\f\35\16\35\u0125\13\35\3\35\5\35\u0128\n\35\3\35\3\35\3\35\7\35\u012d"+
		"\n\35\f\35\16\35\u0130\13\35\3\35\3\35\3\36\3\36\3\36\5\36\u0137\n\36"+
		"\3\36\3\36\3\36\3\36\5\36\u013d\n\36\5\36\u013f\n\36\3\37\3\37\3 \3 \3"+
		" \3 \3 \5 \u0148\n \3!\3!\3!\3\"\5\"\u014e\n\"\3\"\5\"\u0151\n\"\3\"\5"+
		"\"\u0154\n\"\3\"\3\"\5\"\u0158\n\"\3\"\5\"\u015b\n\"\3\"\3\"\3#\3#\3#"+
		"\3#\3#\3#\3#\3#\3#\3#\5#\u0169\n#\3$\3$\3$\3$\3%\3%\5%\u0171\n%\3&\3&"+
		"\3&\3&\5&\u0177\n&\3&\3&\5&\u017b\n&\3\'\5\'\u017e\n\'\3\'\3\'\5\'\u0182"+
		"\n\'\3\'\3\'\5\'\u0186\n\'\3\'\3\'\5\'\u018a\n\'\3\'\3\'\3\'\3\'\5\'\u0190"+
		"\n\'\3(\3(\3(\3(\3(\5(\u0197\n(\3)\3)\5)\u019b\n)\3)\5)\u019e\n)\3*\3"+
		"*\3*\3+\7+\u01a4\n+\f+\16+\u01a7\13+\3+\5+\u01aa\n+\3+\3+\3+\5+\u01af"+
		"\n+\3+\3+\5+\u01b3\n+\3,\3,\3,\3,\3,\3,\3,\3-\3-\3-\3-\3.\3.\3.\3.\3."+
		"\3.\3.\3.\3.\5.\u01c9\n.\3/\3/\7/\u01cd\n/\f/\16/\u01d0\13/\3/\3/\3\60"+
		"\6\60\u01d5\n\60\r\60\16\60\u01d6\3\60\5\60\u01da\n\60\3\61\3\61\7\61"+
		"\u01de\n\61\f\61\16\61\u01e1\13\61\3\61\3\61\3\62\6\62\u01e6\n\62\r\62"+
		"\16\62\u01e7\3\62\5\62\u01eb\n\62\3\63\3\63\7\63\u01ef\n\63\f\63\16\63"+
		"\u01f2\13\63\3\63\3\63\3\64\6\64\u01f7\n\64\r\64\16\64\u01f8\3\64\5\64"+
		"\u01fc\n\64\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\65\3\65\3\65\3\65\3\65\5\65\u0211\n\65\3\66\3\66\3\66\3\66"+
		"\3\66\3\66\3\66\5\66\u021a\n\66\3\67\3\67\3\67\38\38\38\39\39\39\3:\3"+
		":\3:\3;\3;\3;\3<\3<\3<\3=\3=\3=\3>\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\5A\u023c"+
		"\nA\3A\3A\3B\3B\3B\3B\5B\u0244\nB\5B\u0246\nB\3C\3C\3C\3C\5C\u024c\nC"+
		"\3D\3D\3D\3D\3D\2\2E\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60"+
		"\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086"+
		"\2\13\3\29:\4\2\6\6\23\23\4\2\"\"\66\66\4\2\3\3\21\21\3\2\r\17\4\2\4\4"+
		"\f\f\4\2\'\'//\4\2&&..\4\2%%--\2\u0271\2\u008b\3\2\2\2\4\u0095\3\2\2\2"+
		"\6\u0099\3\2\2\2\b\u009e\3\2\2\2\n\u00a5\3\2\2\2\f\u00a7\3\2\2\2\16\u00a9"+
		"\3\2\2\2\20\u00ab\3\2\2\2\22\u00b0\3\2\2\2\24\u00ba\3\2\2\2\26\u00c3\3"+
		"\2\2\2\30\u00cb\3\2\2\2\32\u00cd\3\2\2\2\34\u00cf\3\2\2\2\36\u00d7\3\2"+
		"\2\2 \u00e4\3\2\2\2\"\u00e6\3\2\2\2$\u00e8\3\2\2\2&\u00f0\3\2\2\2(\u00f2"+
		"\3\2\2\2*\u00f6\3\2\2\2,\u00fe\3\2\2\2.\u0109\3\2\2\2\60\u010b\3\2\2\2"+
		"\62\u010e\3\2\2\2\64\u0110\3\2\2\2\66\u0117\3\2\2\28\u011b\3\2\2\2:\u013e"+
		"\3\2\2\2<\u0140\3\2\2\2>\u0147\3\2\2\2@\u0149\3\2\2\2B\u014d\3\2\2\2D"+
		"\u0168\3\2\2\2F\u016a\3\2\2\2H\u0170\3\2\2\2J\u0172\3\2\2\2L\u018f\3\2"+
		"\2\2N\u0196\3\2\2\2P\u0198\3\2\2\2R\u019f\3\2\2\2T\u01a5\3\2\2\2V\u01b4"+
		"\3\2\2\2X\u01bb\3\2\2\2Z\u01c8\3\2\2\2\\\u01ca\3\2\2\2^\u01d9\3\2\2\2"+
		"`\u01db\3\2\2\2b\u01ea\3\2\2\2d\u01ec\3\2\2\2f\u01fb\3\2\2\2h\u0210\3"+
		"\2\2\2j\u0219\3\2\2\2l\u021b\3\2\2\2n\u021e\3\2\2\2p\u0221\3\2\2\2r\u0224"+
		"\3\2\2\2t\u0227\3\2\2\2v\u022a\3\2\2\2x\u022d\3\2\2\2z\u0230\3\2\2\2|"+
		"\u0233\3\2\2\2~\u0236\3\2\2\2\u0080\u0239\3\2\2\2\u0082\u0245\3\2\2\2"+
		"\u0084\u024b\3\2\2\2\u0086\u024d\3\2\2\2\u0088\u008a\5\4\3\2\u0089\u0088"+
		"\3\2\2\2\u008a\u008d\3\2\2\2\u008b\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c"+
		"\3\3\2\2\2\u008d\u008b\3\2\2\2\u008e\u0096\5\34\17\2\u008f\u0096\5J&\2"+
		"\u0090\u0096\5X-\2\u0091\u0096\5T+\2\u0092\u0096\5V,\2\u0093\u0096\5Z"+
		".\2\u0094\u0096\7\65\2\2\u0095\u008e\3\2\2\2\u0095\u008f\3\2\2\2\u0095"+
		"\u0090\3\2\2\2\u0095\u0091\3\2\2\2\u0095\u0092\3\2\2\2\u0095\u0093\3\2"+
		"\2\2\u0095\u0094\3\2\2\2\u0096\5\3\2\2\2\u0097\u009a\5\n\6\2\u0098\u009a"+
		"\5\b\5\2\u0099\u0097\3\2\2\2\u0099\u0098\3\2\2\2\u009a\7\3\2\2\2\u009b"+
		"\u009f\5\f\7\2\u009c\u009f\5\16\b\2\u009d\u009f\5\20\t\2\u009e\u009b\3"+
		"\2\2\2\u009e\u009c\3\2\2\2\u009e\u009d\3\2\2\2\u009f\t\3\2\2\2\u00a0\u00a6"+
		"\7\67\2\2\u00a1\u00a2\7\67\2\2\u00a2\u00a3\7)\2\2\u00a3\u00a4\7)\2\2\u00a4"+
		"\u00a6\7\67\2\2\u00a5\u00a0\3\2\2\2\u00a5\u00a1\3\2\2\2\u00a6\13\3\2\2"+
		"\2\u00a7\u00a8\78\2\2\u00a8\r\3\2\2\2\u00a9\u00aa\t\2\2\2\u00aa\17\3\2"+
		"\2\2\u00ab\u00ac\t\3\2\2\u00ac\21\3\2\2\2\u00ad\u00af\5\30\r\2\u00ae\u00ad"+
		"\3\2\2\2\u00af\u00b2\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1"+
		"\u00b3\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b3\u00b5\5\n\6\2\u00b4\u00b6\5\24"+
		"\13\2\u00b5\u00b4\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b8\3\2\2\2\u00b7"+
		"\u00b9\5\32\16\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\23\3\2"+
		"\2\2\u00ba\u00bb\7-\2\2\u00bb\u00bc\5\26\f\2\u00bc\u00bd\7%\2\2\u00bd"+
		"\25\3\2\2\2\u00be\u00c4\5\22\n\2\u00bf\u00c0\5\22\n\2\u00c0\u00c1\7*\2"+
		"\2\u00c1\u00c2\5\26\f\2\u00c2\u00c4\3\2\2\2\u00c3\u00be\3\2\2\2\u00c3"+
		"\u00bf\3\2\2\2\u00c4\27\3\2\2\2\u00c5\u00cc\7\3\2\2\u00c6\u00cc\7\4\2"+
		"\2\u00c7\u00cc\7\5\2\2\u00c8\u00cc\7\21\2\2\u00c9\u00cc\7\n\2\2\u00ca"+
		"\u00cc\5v<\2\u00cb\u00c5\3\2\2\2\u00cb\u00c6\3\2\2\2\u00cb\u00c7\3\2\2"+
		"\2\u00cb\u00c8\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cb\u00ca\3\2\2\2\u00cc\31"+
		"\3\2\2\2\u00cd\u00ce\t\4\2\2\u00ce\33\3\2\2\2\u00cf\u00d0\5\36\20\2\u00d0"+
		"\u00d1\7.\2\2\u00d1\u00d2\5*\26\2\u00d2\u00d4\7&\2\2\u00d3\u00d5\7\65"+
		"\2\2\u00d4\u00d3\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\35\3\2\2\2\u00d6\u00d8"+
		"\5 \21\2\u00d7\u00d6\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9"+
		"\u00db\5\"\22\2\u00da\u00dc\7 \2\2\u00db\u00da\3\2\2\2\u00db\u00dc\3\2"+
		"\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00df\5\n\6\2\u00de\u00e0\5$\23\2\u00df"+
		"\u00de\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\37\3\2\2\2\u00e1\u00e5\5l\67"+
		"\2\u00e2\u00e5\5r:\2\u00e3\u00e5\5z>\2\u00e4\u00e1\3\2\2\2\u00e4\u00e2"+
		"\3\2\2\2\u00e4\u00e3\3\2\2\2\u00e5!\3\2\2\2\u00e6\u00e7\t\5\2\2\u00e7"+
		"#\3\2\2\2\u00e8\u00e9\7)\2\2\u00e9\u00ea\5&\24\2\u00ea%\3\2\2\2\u00eb"+
		"\u00f1\5(\25\2\u00ec\u00ed\5(\25\2\u00ed\u00ee\7*\2\2\u00ee\u00ef\5&\24"+
		"\2\u00ef\u00f1\3\2\2\2\u00f0\u00eb\3\2\2\2\u00f0\u00ec\3\2\2\2\u00f1\'"+
		"\3\2\2\2\u00f2\u00f3\5\62\32\2\u00f3\u00f4\5\n\6\2\u00f4)\3\2\2\2\u00f5"+
		"\u00f7\5~@\2\u00f6\u00f5\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f9\3\2\2"+
		"\2\u00f8\u00fa\7\65\2\2\u00f9\u00f8\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa"+
		"\u00fc\3\2\2\2\u00fb\u00fd\5,\27\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2"+
		"\2\2\u00fd+\3\2\2\2\u00fe\u0100\5.\30\2\u00ff\u0101\5,\27\2\u0100\u00ff"+
		"\3\2\2\2\u0100\u0101\3\2\2\2\u0101-\3\2\2\2\u0102\u010a\5\60\31\2\u0103"+
		"\u010a\58\35\2\u0104\u010a\5\64\33\2\u0105\u010a\5B\"\2\u0106\u010a\5"+
		"\66\34\2\u0107\u010a\5Z.\2\u0108\u010a\7\65\2\2\u0109\u0102\3\2\2\2\u0109"+
		"\u0103\3\2\2\2\u0109\u0104\3\2\2\2\u0109\u0105\3\2\2\2\u0109\u0106\3\2"+
		"\2\2\u0109\u0107\3\2\2\2\u0109\u0108\3\2\2\2\u010a/\3\2\2\2\u010b\u010c"+
		"\5\62\32\2\u010c\u010d\7)\2\2\u010d\61\3\2\2\2\u010e\u010f\t\6\2\2\u010f"+
		"\63\3\2\2\2\u0110\u0112\7\b\2\2\u0111\u0113\7\3\2\2\u0112\u0111\3\2\2"+
		"\2\u0112\u0113\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0115\5\n\6\2\u0115\u0116"+
		"\7\65\2\2\u0116\65\3\2\2\2\u0117\u0118\7\37\2\2\u0118\u0119\5\\/\2\u0119"+
		"\67\3\2\2\2\u011a\u011c\5|?\2\u011b\u011a\3\2\2\2\u011b\u011c\3\2\2\2"+
		"\u011c\u011e\3\2\2\2\u011d\u011f\5p9\2\u011e\u011d\3\2\2\2\u011e\u011f"+
		"\3\2\2\2\u011f\u0123\3\2\2\2\u0120\u0122\5j\66\2\u0121\u0120\3\2\2\2\u0122"+
		"\u0125\3\2\2\2\u0123\u0121\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0127\3\2"+
		"\2\2\u0125\u0123\3\2\2\2\u0126\u0128\5\22\n\2\u0127\u0126\3\2\2\2\u0127"+
		"\u0128\3\2\2\2\u0128\u0129\3\2\2\2\u0129\u012a\5h\65\2\u012a\u012e\5\\"+
		"/\2\u012b\u012d\5<\37\2\u012c\u012b\3\2\2\2\u012d\u0130\3\2\2\2\u012e"+
		"\u012c\3\2\2\2\u012e\u012f\3\2\2\2\u012f\u0131\3\2\2\2\u0130\u012e\3\2"+
		"\2\2\u0131\u0132\5:\36\2\u01329\3\2\2\2\u0133\u013f\7\65\2\2\u0134\u0136"+
		"\5`\61\2\u0135\u0137\7\65\2\2\u0136\u0135\3\2\2\2\u0136\u0137\3\2\2\2"+
		"\u0137\u013f\3\2\2\2\u0138\u0139\7)\2\2\u0139\u013a\5> \2\u013a\u013c"+
		"\5`\61\2\u013b\u013d\7\65\2\2\u013c\u013b\3\2\2\2\u013c\u013d\3\2\2\2"+
		"\u013d\u013f\3\2\2\2\u013e\u0133\3\2\2\2\u013e\u0134\3\2\2\2\u013e\u0138"+
		"\3\2\2\2\u013f;\3\2\2\2\u0140\u0141\t\7\2\2\u0141=\3\2\2\2\u0142\u0148"+
		"\5@!\2\u0143\u0144\5@!\2\u0144\u0145\7*\2\2\u0145\u0146\5> \2\u0146\u0148"+
		"\3\2\2\2\u0147\u0142\3\2\2\2\u0147\u0143\3\2\2\2\u0148?\3\2\2\2\u0149"+
		"\u014a\5\n\6\2\u014a\u014b\5\\/\2\u014bA\3\2\2\2\u014c\u014e\5x=\2\u014d"+
		"\u014c\3\2\2\2\u014d\u014e\3\2\2\2\u014e\u0150\3\2\2\2\u014f\u0151\7\20"+
		"\2\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153\3\2\2\2\u0152"+
		"\u0154\5\22\n\2\u0153\u0152\3\2\2\2\u0153\u0154\3\2\2\2\u0154\u0155\3"+
		"\2\2\2\u0155\u0157\5\n\6\2\u0156\u0158\5F$\2\u0157\u0156\3\2\2\2\u0157"+
		"\u0158\3\2\2\2\u0158\u015a\3\2\2\2\u0159\u015b\5D#\2\u015a\u0159\3\2\2"+
		"\2\u015a\u015b\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015d\7\65\2\2\u015d"+
		"C\3\2\2\2\u015e\u015f\7)\2\2\u015f\u0169\5\b\5\2\u0160\u0161\7+\2\2\u0161"+
		"\u0169\5\b\5\2\u0162\u0163\7+\2\2\u0163\u0169\5\n\6\2\u0164\u0165\7+\2"+
		"\2\u0165\u0166\5\n\6\2\u0166\u0167\5\\/\2\u0167\u0169\3\2\2\2\u0168\u015e"+
		"\3\2\2\2\u0168\u0160\3\2\2\2\u0168\u0162\3\2\2\2\u0168\u0164\3\2\2\2\u0169"+
		"E\3\2\2\2\u016a\u016b\7\60\2\2\u016b\u016c\5H%\2\u016c\u016d\7(\2\2\u016d"+
		"G\3\2\2\2\u016e\u0171\5\n\6\2\u016f\u0171\5\16\b\2\u0170\u016e\3\2\2\2"+
		"\u0170\u016f\3\2\2\2\u0171I\3\2\2\2\u0172\u0173\5L\'\2\u0173\u0174\7."+
		"\2\2\u0174\u0176\5N(\2\u0175\u0177\7*\2\2\u0176\u0175\3\2\2\2\u0176\u0177"+
		"\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017a\7&\2\2\u0179\u017b\7\65\2\2\u017a"+
		"\u0179\3\2\2\2\u017a\u017b\3\2\2\2\u017bK\3\2\2\2\u017c\u017e\5n8\2\u017d"+
		"\u017c\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0181\7\5"+
		"\2\2\u0180\u0182\7\3\2\2\u0181\u0180\3\2\2\2\u0181\u0182\3\2\2\2\u0182"+
		"\u0183\3\2\2\2\u0183\u0190\5\n\6\2\u0184\u0186\5n8\2\u0185\u0184\3\2\2"+
		"\2\u0185\u0186\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0189\7\5\2\2\u0188\u018a"+
		"\7\3\2\2\u0189\u0188\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\3\2\2\2\u018b"+
		"\u018c\5\n\6\2\u018c\u018d\7)\2\2\u018d\u018e\5\22\n\2\u018e\u0190\3\2"+
		"\2\2\u018f\u017d\3\2\2\2\u018f\u0185\3\2\2\2\u0190M\3\2\2\2\u0191\u0197"+
		"\5P)\2\u0192\u0193\5P)\2\u0193\u0194\7*\2\2\u0194\u0195\5N(\2\u0195\u0197"+
		"\3\2\2\2\u0196\u0191\3\2\2\2\u0196\u0192\3\2\2\2\u0197O\3\2\2\2\u0198"+
		"\u019a\5\n\6\2\u0199\u019b\5R*\2\u019a\u0199\3\2\2\2\u019a\u019b\3\2\2"+
		"\2\u019b\u019d\3\2\2\2\u019c\u019e\5t;\2\u019d\u019c\3\2\2\2\u019d\u019e"+
		"\3\2\2\2\u019eQ\3\2\2\2\u019f\u01a0\7+\2\2\u01a0\u01a1\5\b\5\2\u01a1S"+
		"\3\2\2\2\u01a2\u01a4\5j\66\2\u01a3\u01a2\3\2\2\2\u01a4\u01a7\3\2\2\2\u01a5"+
		"\u01a3\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5\3\2"+
		"\2\2\u01a8\u01aa\5\22\n\2\u01a9\u01a8\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa"+
		"\u01ab\3\2\2\2\u01ab\u01ac\5h\65\2\u01ac\u01ae\5\\/\2\u01ad\u01af\7\4"+
		"\2\2\u01ae\u01ad\3\2\2\2\u01ae\u01af\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0"+
		"\u01b2\5`\61\2\u01b1\u01b3\7\65\2\2\u01b2\u01b1\3\2\2\2\u01b2\u01b3\3"+
		"\2\2\2\u01b3U\3\2\2\2\u01b4\u01b5\7\20\2\2\u01b5\u01b6\5\22\n\2\u01b6"+
		"\u01b7\5\n\6\2\u01b7\u01b8\7+\2\2\u01b8\u01b9\5\b\5\2\u01b9\u01ba\7\65"+
		"\2\2\u01baW\3\2\2\2\u01bb\u01bc\5\n\6\2\u01bc\u01bd\5\\/\2\u01bd\u01be"+
		"\7\65\2\2\u01beY\3\2\2\2\u01bf\u01c0\7\24\2\2\u01c0\u01c1\5\22\n\2\u01c1"+
		"\u01c2\5\n\6\2\u01c2\u01c3\7\65\2\2\u01c3\u01c9\3\2\2\2\u01c4\u01c5\7"+
		"\3\2\2\u01c5\u01c6\5\n\6\2\u01c6\u01c7\7\65\2\2\u01c7\u01c9\3\2\2\2\u01c8"+
		"\u01bf\3\2\2\2\u01c8\u01c4\3\2\2\2\u01c9[\3\2\2\2\u01ca\u01ce\7/\2\2\u01cb"+
		"\u01cd\5^\60\2\u01cc\u01cb\3\2\2\2\u01cd\u01d0\3\2\2\2\u01ce\u01cc\3\2"+
		"\2\2\u01ce\u01cf\3\2\2\2\u01cf\u01d1\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d1"+
		"\u01d2\7\'\2\2\u01d2]\3\2\2\2\u01d3\u01d5\n\b\2\2\u01d4\u01d3\3\2\2\2"+
		"\u01d5\u01d6\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01da"+
		"\3\2\2\2\u01d8\u01da\5\\/\2\u01d9\u01d4\3\2\2\2\u01d9\u01d8\3\2\2\2\u01da"+
		"_\3\2\2\2\u01db\u01df\7.\2\2\u01dc\u01de\5b\62\2\u01dd\u01dc\3\2\2\2\u01de"+
		"\u01e1\3\2\2\2\u01df\u01dd\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e2\3\2"+
		"\2\2\u01e1\u01df\3\2\2\2\u01e2\u01e3\7&\2\2\u01e3a\3\2\2\2\u01e4\u01e6"+
		"\n\t\2\2\u01e5\u01e4\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7\u01e5\3\2\2\2\u01e7"+
		"\u01e8\3\2\2\2\u01e8\u01eb\3\2\2\2\u01e9\u01eb\5`\61\2\u01ea\u01e5\3\2"+
		"\2\2\u01ea\u01e9\3\2\2\2\u01ebc\3\2\2\2\u01ec\u01f0\7-\2\2\u01ed\u01ef"+
		"\5f\64\2\u01ee\u01ed\3\2\2\2\u01ef\u01f2\3\2\2\2\u01f0\u01ee\3\2\2\2\u01f0"+
		"\u01f1\3\2\2\2\u01f1\u01f3\3\2\2\2\u01f2\u01f0\3\2\2\2\u01f3\u01f4\7%"+
		"\2\2\u01f4e\3\2\2\2\u01f5\u01f7\n\n\2\2\u01f6\u01f5\3\2\2\2\u01f7\u01f8"+
		"\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fc\3\2\2\2\u01fa"+
		"\u01fc\5d\63\2\u01fb\u01f6\3\2\2\2\u01fb\u01fa\3\2\2\2\u01fcg\3\2\2\2"+
		"\u01fd\u0211\5\n\6\2\u01fe\u01ff\7\13\2\2\u01ff\u0211\7+\2\2\u0200\u0201"+
		"\7\13\2\2\u0201\u0202\7+\2\2\u0202\u0211\7+\2\2\u0203\u0204\7\13\2\2\u0204"+
		"\u0205\7\60\2\2\u0205\u0211\7(\2\2\u0206\u0207\7\13\2\2\u0207\u0211\7"+
		"-\2\2\u0208\u0209\7\13\2\2\u0209\u020a\7-\2\2\u020a\u0211\7-\2\2\u020b"+
		"\u020c\7\13\2\2\u020c\u0211\7%\2\2\u020d\u020e\7\13\2\2\u020e\u020f\7"+
		"%\2\2\u020f\u0211\7%\2\2\u0210\u01fd\3\2\2\2\u0210\u01fe\3\2\2\2\u0210"+
		"\u0200\3\2\2\2\u0210\u0203\3\2\2\2\u0210\u0206\3\2\2\2\u0210\u0208\3\2"+
		"\2\2\u0210\u020b\3\2\2\2\u0210\u020d\3\2\2\2\u0211i\3\2\2\2\u0212\u021a"+
		"\7\20\2\2\u0213\u021a\7\4\2\2\u0214\u021a\7\25\2\2\u0215\u021a\7\7\2\2"+
		"\u0216\u021a\7\t\2\2\u0217\u0218\7\22\2\2\u0218\u021a\5d\63\2\u0219\u0212"+
		"\3\2\2\2\u0219\u0213\3\2\2\2\u0219\u0214\3\2\2\2\u0219\u0215\3\2\2\2\u0219"+
		"\u0216\3\2\2\2\u0219\u0217\3\2\2\2\u021ak\3\2\2\2\u021b\u021c\7\26\2\2"+
		"\u021c\u021d\5\u0080A\2\u021dm\3\2\2\2\u021e\u021f\7\27\2\2\u021f\u0220"+
		"\5\u0080A\2\u0220o\3\2\2\2\u0221\u0222\7\30\2\2\u0222\u0223\5\u0080A\2"+
		"\u0223q\3\2\2\2\u0224\u0225\7\31\2\2\u0225\u0226\5\u0080A\2\u0226s\3\2"+
		"\2\2\u0227\u0228\7\32\2\2\u0228\u0229\5\u0080A\2\u0229u\3\2\2\2\u022a"+
		"\u022b\7\33\2\2\u022b\u022c\5\u0080A\2\u022cw\3\2\2\2\u022d\u022e\7\34"+
		"\2\2\u022e\u022f\5\u0080A\2\u022fy\3\2\2\2\u0230\u0231\7\35\2\2\u0231"+
		"\u0232\5\u0080A\2\u0232{\3\2\2\2\u0233\u0234\7\36\2\2\u0234\u0235\5\u0080"+
		"A\2\u0235}\3\2\2\2\u0236\u0237\7!\2\2\u0237\u0238\5\u0080A\2\u0238\177"+
		"\3\2\2\2\u0239\u023b\7/\2\2\u023a\u023c\5\u0082B\2\u023b\u023a\3\2\2\2"+
		"\u023b\u023c\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023e\7\'\2\2\u023e\u0081"+
		"\3\2\2\2\u023f\u0246\5\u0084C\2\u0240\u0241\5\u0084C\2\u0241\u0243\7*"+
		"\2\2\u0242\u0244\5\u0082B\2\u0243\u0242\3\2\2\2\u0243\u0244\3\2\2\2\u0244"+
		"\u0246\3\2\2\2\u0245\u023f\3\2\2\2\u0245\u0240\3\2\2\2\u0246\u0083\3\2"+
		"\2\2\u0247\u024c\5\n\6\2\u0248\u024c\5\b\5\2\u0249\u024c\5\u0086D\2\u024a"+
		"\u024c\5\u0080A\2\u024b\u0247\3\2\2\2\u024b\u0248\3\2\2\2\u024b\u0249"+
		"\3\2\2\2\u024b\u024a\3\2\2\2\u024c\u0085\3\2\2\2\u024d\u024e\5\n\6\2\u024e"+
		"\u024f\7+\2\2\u024f\u0250\5\u0084C\2\u0250\u0087\3\2\2\2F\u008b\u0095"+
		"\u0099\u009e\u00a5\u00b0\u00b5\u00b8\u00c3\u00cb\u00d4\u00d7\u00db\u00df"+
		"\u00e4\u00f0\u00f6\u00f9\u00fc\u0100\u0109\u0112\u011b\u011e\u0123\u0127"+
		"\u012e\u0136\u013c\u013e\u0147\u014d\u0150\u0153\u0157\u015a\u0168\u0170"+
		"\u0176\u017a\u017d\u0181\u0185\u0189\u018f\u0196\u019a\u019d\u01a5\u01a9"+
		"\u01ae\u01b2\u01c8\u01ce\u01d6\u01d9\u01df\u01e7\u01ea\u01f0\u01f8\u01fb"+
		"\u0210\u0219\u023b\u0243\u0245\u024b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}