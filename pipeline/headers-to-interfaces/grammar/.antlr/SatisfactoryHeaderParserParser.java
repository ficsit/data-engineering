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
		RULE_staticMethodCall = 42, RULE_typedef = 43, RULE_contentWithNestedParens = 44, 
		RULE_contentWithNestedParensInner = 45, RULE_contentWithNestedBraces = 46, 
		RULE_contentWithNestedBracesInner = 47, RULE_contentWithNestedAngles = 48, 
		RULE_contentWithNestedAnglesInner = 49, RULE_functionName = 50, RULE_functionModifier = 51, 
		RULE_uclassMacro = 52, RULE_uenumMacro = 53, RULE_ufunctionMacro = 54, 
		RULE_uinterfaceMacro = 55, RULE_umetaMacro = 56, RULE_uParamMacro = 57, 
		RULE_upropertyMacro = 58, RULE_ustructMacro = 59, RULE_uedeprecatedMacro = 60, 
		RULE_generatedBodyMacro = 61, RULE_macroPropertyList = 62, RULE_macroPropertyListEntries = 63, 
		RULE_macroProperty = 64, RULE_macroPropertyPair = 65;
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
		"enumEntry", "enumValue", "staticFunctionDeclaration", "staticMethodCall", 
		"typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
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
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UINTERFACE) | (1L << UPARAM) | (1L << USTRUCT) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(132);
				element();
				}
				}
				setState(137);
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
		public TypedefContext typedef() {
			return getRuleContext(TypedefContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_element);
		try {
			setState(143);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				classDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(139);
				enumDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(140);
				staticMethodCall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(141);
				staticFunctionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(142);
				typedef();
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
			setState(147);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
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
				setState(146);
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
			setState(152);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(151);
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
			setState(159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				match(IDENTIFIER);
				setState(156);
				match(COLON);
				setState(157);
				match(COLON);
				setState(158);
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
			setState(161);
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
			setState(163);
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
			setState(165);
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
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << MUTABLE) | (1L << STRUCT) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(167);
				typeModifier();
				}
				}
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(173);
			identifier();
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(174);
				templateType();
				}
			}

			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AMPERSAND || _la==STAR) {
				{
				setState(177);
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
			setState(180);
			match(OPEN_ANGLE);
			setState(181);
			templateTypeList();
			setState(182);
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
			setState(189);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(184);
				typeDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				typeDeclaration();
				setState(186);
				match(COMMA);
				setState(187);
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
			setState(197);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(191);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(192);
				match(CONST);
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(193);
				match(ENUM);
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 4);
				{
				setState(194);
				match(STRUCT);
				}
				break;
			case MUTABLE:
				enterOuterAlt(_localctx, 5);
				{
				setState(195);
				match(MUTABLE);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 6);
				{
				setState(196);
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
			setState(199);
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			classHeader();
			setState(202);
			match(OPEN_BRACE);
			setState(203);
			classBody();
			setState(204);
			match(CLOSE_BRACE);
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(205);
				match(SEMICOLON);
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
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UCLASS) | (1L << UINTERFACE) | (1L << USTRUCT))) != 0)) {
				{
				setState(208);
				classMacro();
				}
			}

			setState(211);
			classKeyword();
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(212);
				match(SF_CLASS_TAG);
				}
			}

			setState(215);
			identifier();
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(216);
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
			setState(222);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(219);
				uclassMacro();
				}
				break;
			case UINTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(220);
				uinterfaceMacro();
				}
				break;
			case USTRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(221);
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
			setState(224);
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
			setState(226);
			match(COLON);
			setState(227);
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
			setState(234);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(229);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(230);
				classExtension();
				setState(231);
				match(COMMA);
				setState(232);
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
			setState(236);
			classVisibilityModifier();
			setState(237);
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
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(239);
				generatedBodyMacro();
				}
			}

			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(242);
				match(SEMICOLON);
				}
			}

			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(245);
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
			setState(248);
			classEntry();
			setState(250);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << IDENTIFIER))) != 0)) {
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
		public ClassEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classEntry; }
	}

	public final ClassEntryContext classEntry() throws RecognitionException {
		ClassEntryContext _localctx = new ClassEntryContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_classEntry);
		try {
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(252);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(253);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(254);
				friendDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(255);
				classProperty();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(256);
				statDeclaration();
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
			setState(259);
			classVisibilityModifier();
			setState(260);
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
			setState(262);
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
			setState(264);
			match(FRIEND);
			setState(266);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLASS) {
				{
				setState(265);
				match(CLASS);
				}
			}

			setState(268);
			identifier();
			setState(269);
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
			setState(271);
			match(STAT);
			setState(272);
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
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UE_DEPRECATED) {
				{
				setState(274);
				uedeprecatedMacro();
				}
			}

			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(277);
				ufunctionMacro();
				}
			}

			setState(283);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(280);
					functionModifier();
					}
					} 
				}
				setState(285);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			setState(287);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(286);
				typeDeclaration();
				}
				break;
			}
			setState(289);
			functionName();
			setState(290);
			contentWithNestedParens();
			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CONST || _la==OVERRIDE) {
				{
				{
				setState(291);
				classMethodResultModifier();
				}
				}
				setState(296);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(297);
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
		int _la;
		try {
			setState(310);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(299);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(300);
				contentWithNestedBraces();
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(301);
					match(SEMICOLON);
					}
				}

				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 3);
				{
				setState(304);
				match(COLON);
				setState(305);
				classInitializerList();
				setState(306);
				contentWithNestedBraces();
				setState(308);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(307);
					match(SEMICOLON);
					}
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
			setState(312);
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
			setState(319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(314);
				classInitializer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(315);
				classInitializer();
				setState(316);
				match(COMMA);
				setState(317);
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
			setState(321);
			identifier();
			setState(322);
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
			setState(325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(324);
				upropertyMacro();
				}
			}

			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(327);
				match(STATIC);
				}
			}

			setState(331);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(330);
				typeDeclaration();
				}
				break;
			}
			setState(333);
			identifier();
			setState(335);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_SQUARE) {
				{
				setState(334);
				classPropertyArraySizeDeclaration();
				}
			}

			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==EQUALS) {
				{
				setState(337);
				classPropertyDefaultValue();
				}
			}

			setState(340);
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
		public ClassPropertyDefaultValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPropertyDefaultValue; }
	}

	public final ClassPropertyDefaultValueContext classPropertyDefaultValue() throws RecognitionException {
		ClassPropertyDefaultValueContext _localctx = new ClassPropertyDefaultValueContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_classPropertyDefaultValue);
		try {
			setState(346);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(342);
				match(COLON);
				setState(343);
				literal();
				}
				break;
			case EQUALS:
				enterOuterAlt(_localctx, 2);
				{
				setState(344);
				match(EQUALS);
				setState(345);
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
			setState(348);
			match(OPEN_SQUARE);
			setState(349);
			classPropertyArraySize();
			setState(350);
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
			setState(354);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(352);
				identifier();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(353);
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
			setState(356);
			enumHeader();
			setState(357);
			match(OPEN_BRACE);
			setState(358);
			enumBody();
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(359);
				match(COMMA);
				}
			}

			setState(362);
			match(CLOSE_BRACE);
			setState(364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(363);
				match(SEMICOLON);
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
			setState(385);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(367);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(366);
					uenumMacro();
					}
				}

				setState(369);
				match(ENUM);
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(370);
					match(CLASS);
					}
				}

				setState(373);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(375);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(374);
					uenumMacro();
					}
				}

				setState(377);
				match(ENUM);
				setState(379);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(378);
					match(CLASS);
					}
				}

				setState(381);
				identifier();
				setState(382);
				match(COLON);
				setState(383);
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
			setState(392);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(387);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(388);
				enumEntry();
				setState(389);
				match(COMMA);
				setState(390);
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
			setState(394);
			identifier();
			setState(396);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(395);
				enumValue();
				}
			}

			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UMETA) {
				{
				setState(398);
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
			setState(401);
			match(EQUALS);
			setState(402);
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
			setState(407);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(404);
					functionModifier();
					}
					} 
				}
				setState(409);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			setState(411);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				setState(410);
				typeDeclaration();
				}
				break;
			}
			setState(413);
			functionName();
			setState(414);
			contentWithNestedParens();
			setState(416);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONST) {
				{
				setState(415);
				match(CONST);
				}
			}

			setState(418);
			contentWithNestedBraces();
			setState(420);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(419);
				match(SEMICOLON);
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
		enterRule(_localctx, 84, RULE_staticMethodCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			identifier();
			setState(423);
			contentWithNestedParens();
			setState(424);
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
		enterRule(_localctx, 86, RULE_typedef);
		try {
			setState(435);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPEDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(426);
				match(TYPEDEF);
				setState(427);
				typeDeclaration();
				setState(428);
				identifier();
				setState(429);
				match(SEMICOLON);
				}
				break;
			case CLASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(431);
				match(CLASS);
				setState(432);
				identifier();
				setState(433);
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
		enterRule(_localctx, 88, RULE_contentWithNestedParens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
			match(OPEN_PAREN);
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_BRACE) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(438);
				contentWithNestedParensInner();
				}
				}
				setState(443);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(444);
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
		enterRule(_localctx, 90, RULE_contentWithNestedParensInner);
		int _la;
		try {
			int _alt;
			setState(452);
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
				setState(447); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(446);
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
					setState(449); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(451);
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
		enterRule(_localctx, 92, RULE_contentWithNestedBraces);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(OPEN_BRACE);
			setState(458);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(455);
				contentWithNestedBracesInner();
				}
				}
				setState(460);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(461);
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
		enterRule(_localctx, 94, RULE_contentWithNestedBracesInner);
		int _la;
		try {
			int _alt;
			setState(469);
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
				setState(464); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(463);
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
					setState(466); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,57,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(468);
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
		enterRule(_localctx, 96, RULE_contentWithNestedAngles);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			match(OPEN_ANGLE);
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OPERATOR) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TEMPLATE) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << STAT) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_BRACE) | (1L << CLOSE_PAREN) | (1L << CLOSE_SQUARE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << OPEN_SQUARE) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (BLOCK_COMMENT_END - 64)) | (1L << (BLOCK_COMMENT_NEW_LINE - 64)) | (1L << (BLOCK_COMMENT_TEXT - 64)) | (1L << (BLOCK_COMMENT_OTHER - 64)))) != 0)) {
				{
				{
				setState(472);
				contentWithNestedAnglesInner();
				}
				}
				setState(477);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(478);
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
		enterRule(_localctx, 98, RULE_contentWithNestedAnglesInner);
		int _la;
		try {
			int _alt;
			setState(486);
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
				setState(481); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(480);
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
					setState(483); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case OPEN_ANGLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(485);
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
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_functionName);
		try {
			setState(497);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(488);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(489);
				match(OPERATOR);
				setState(490);
				match(EQUALS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(491);
				match(OPERATOR);
				setState(492);
				match(EQUALS);
				setState(493);
				match(EQUALS);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(494);
				match(OPERATOR);
				setState(495);
				match(OPEN_SQUARE);
				setState(496);
				match(CLOSE_SQUARE);
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
		enterRule(_localctx, 102, RULE_functionModifier);
		try {
			setState(506);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STATIC:
				enterOuterAlt(_localctx, 1);
				{
				setState(499);
				match(STATIC);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(500);
				match(CONST);
				}
				break;
			case VIRTUAL:
				enterOuterAlt(_localctx, 3);
				{
				setState(501);
				match(VIRTUAL);
				}
				break;
			case FORCEINLINE:
				enterOuterAlt(_localctx, 4);
				{
				setState(502);
				match(FORCEINLINE);
				}
				break;
			case INLINE:
				enterOuterAlt(_localctx, 5);
				{
				setState(503);
				match(INLINE);
				}
				break;
			case TEMPLATE:
				enterOuterAlt(_localctx, 6);
				{
				setState(504);
				match(TEMPLATE);
				setState(505);
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
		enterRule(_localctx, 104, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			match(UCLASS);
			setState(509);
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
		enterRule(_localctx, 106, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
			match(UENUM);
			setState(512);
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
		enterRule(_localctx, 108, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(514);
			match(UFUNCTION);
			setState(515);
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
		enterRule(_localctx, 110, RULE_uinterfaceMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
			match(UINTERFACE);
			setState(518);
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
		enterRule(_localctx, 112, RULE_umetaMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(520);
			match(UMETA);
			setState(521);
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
		enterRule(_localctx, 114, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			match(UPARAM);
			setState(524);
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
		enterRule(_localctx, 116, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			match(UPROPERTY);
			setState(527);
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
		enterRule(_localctx, 118, RULE_ustructMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(529);
			match(USTRUCT);
			setState(530);
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
		enterRule(_localctx, 120, RULE_uedeprecatedMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(532);
			match(UE_DEPRECATED);
			setState(533);
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
		enterRule(_localctx, 122, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(535);
			match(SF_GENERATED_BODY);
			setState(536);
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
		enterRule(_localctx, 124, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			match(OPEN_PAREN);
			setState(540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(539);
				macroPropertyListEntries();
				}
			}

			setState(542);
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
		enterRule(_localctx, 126, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(550);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(544);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(545);
				macroProperty();
				setState(546);
				match(COMMA);
				setState(548);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(547);
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
		enterRule(_localctx, 128, RULE_macroProperty);
		try {
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(552);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(553);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(554);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(555);
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
		enterRule(_localctx, 130, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			identifier();
			setState(559);
			match(EQUALS);
			setState(560);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3E\u0235\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\3\2\7\2\u0088\n\2\f\2\16\2\u008b"+
		"\13\2\3\3\3\3\3\3\3\3\3\3\5\3\u0092\n\3\3\4\3\4\5\4\u0096\n\4\3\5\3\5"+
		"\3\5\5\5\u009b\n\5\3\6\3\6\3\6\3\6\3\6\5\6\u00a2\n\6\3\7\3\7\3\b\3\b\3"+
		"\t\3\t\3\n\7\n\u00ab\n\n\f\n\16\n\u00ae\13\n\3\n\3\n\5\n\u00b2\n\n\3\n"+
		"\5\n\u00b5\n\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f\u00c0\n\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\5\r\u00c8\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\5\17\u00d1\n\17\3\20\5\20\u00d4\n\20\3\20\3\20\5\20\u00d8\n\20\3\20\3"+
		"\20\5\20\u00dc\n\20\3\21\3\21\3\21\5\21\u00e1\n\21\3\22\3\22\3\23\3\23"+
		"\3\23\3\24\3\24\3\24\3\24\3\24\5\24\u00ed\n\24\3\25\3\25\3\25\3\26\5\26"+
		"\u00f3\n\26\3\26\5\26\u00f6\n\26\3\26\5\26\u00f9\n\26\3\27\3\27\5\27\u00fd"+
		"\n\27\3\30\3\30\3\30\3\30\3\30\5\30\u0104\n\30\3\31\3\31\3\31\3\32\3\32"+
		"\3\33\3\33\5\33\u010d\n\33\3\33\3\33\3\33\3\34\3\34\3\34\3\35\5\35\u0116"+
		"\n\35\3\35\5\35\u0119\n\35\3\35\7\35\u011c\n\35\f\35\16\35\u011f\13\35"+
		"\3\35\5\35\u0122\n\35\3\35\3\35\3\35\7\35\u0127\n\35\f\35\16\35\u012a"+
		"\13\35\3\35\3\35\3\36\3\36\3\36\5\36\u0131\n\36\3\36\3\36\3\36\3\36\5"+
		"\36\u0137\n\36\5\36\u0139\n\36\3\37\3\37\3 \3 \3 \3 \3 \5 \u0142\n \3"+
		"!\3!\3!\3\"\5\"\u0148\n\"\3\"\5\"\u014b\n\"\3\"\5\"\u014e\n\"\3\"\3\""+
		"\5\"\u0152\n\"\3\"\5\"\u0155\n\"\3\"\3\"\3#\3#\3#\3#\5#\u015d\n#\3$\3"+
		"$\3$\3$\3%\3%\5%\u0165\n%\3&\3&\3&\3&\5&\u016b\n&\3&\3&\5&\u016f\n&\3"+
		"\'\5\'\u0172\n\'\3\'\3\'\5\'\u0176\n\'\3\'\3\'\5\'\u017a\n\'\3\'\3\'\5"+
		"\'\u017e\n\'\3\'\3\'\3\'\3\'\5\'\u0184\n\'\3(\3(\3(\3(\3(\5(\u018b\n("+
		"\3)\3)\5)\u018f\n)\3)\5)\u0192\n)\3*\3*\3*\3+\7+\u0198\n+\f+\16+\u019b"+
		"\13+\3+\5+\u019e\n+\3+\3+\3+\5+\u01a3\n+\3+\3+\5+\u01a7\n+\3,\3,\3,\3"+
		",\3-\3-\3-\3-\3-\3-\3-\3-\3-\5-\u01b6\n-\3.\3.\7.\u01ba\n.\f.\16.\u01bd"+
		"\13.\3.\3.\3/\6/\u01c2\n/\r/\16/\u01c3\3/\5/\u01c7\n/\3\60\3\60\7\60\u01cb"+
		"\n\60\f\60\16\60\u01ce\13\60\3\60\3\60\3\61\6\61\u01d3\n\61\r\61\16\61"+
		"\u01d4\3\61\5\61\u01d8\n\61\3\62\3\62\7\62\u01dc\n\62\f\62\16\62\u01df"+
		"\13\62\3\62\3\62\3\63\6\63\u01e4\n\63\r\63\16\63\u01e5\3\63\5\63\u01e9"+
		"\n\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\5\64\u01f4\n\64\3\65"+
		"\3\65\3\65\3\65\3\65\3\65\3\65\5\65\u01fd\n\65\3\66\3\66\3\66\3\67\3\67"+
		"\3\67\38\38\38\39\39\39\3:\3:\3:\3;\3;\3;\3<\3<\3<\3=\3=\3=\3>\3>\3>\3"+
		"?\3?\3?\3@\3@\5@\u021f\n@\3@\3@\3A\3A\3A\3A\5A\u0227\nA\5A\u0229\nA\3"+
		"B\3B\3B\3B\5B\u022f\nB\3C\3C\3C\3C\3C\2\2D\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|"+
		"~\u0080\u0082\u0084\2\13\3\29:\4\2\6\6\23\23\4\2\"\"\66\66\4\2\3\3\21"+
		"\21\3\2\r\17\4\2\4\4\f\f\4\2\'\'//\4\2&&..\4\2%%--\2\u024b\2\u0089\3\2"+
		"\2\2\4\u0091\3\2\2\2\6\u0095\3\2\2\2\b\u009a\3\2\2\2\n\u00a1\3\2\2\2\f"+
		"\u00a3\3\2\2\2\16\u00a5\3\2\2\2\20\u00a7\3\2\2\2\22\u00ac\3\2\2\2\24\u00b6"+
		"\3\2\2\2\26\u00bf\3\2\2\2\30\u00c7\3\2\2\2\32\u00c9\3\2\2\2\34\u00cb\3"+
		"\2\2\2\36\u00d3\3\2\2\2 \u00e0\3\2\2\2\"\u00e2\3\2\2\2$\u00e4\3\2\2\2"+
		"&\u00ec\3\2\2\2(\u00ee\3\2\2\2*\u00f2\3\2\2\2,\u00fa\3\2\2\2.\u0103\3"+
		"\2\2\2\60\u0105\3\2\2\2\62\u0108\3\2\2\2\64\u010a\3\2\2\2\66\u0111\3\2"+
		"\2\28\u0115\3\2\2\2:\u0138\3\2\2\2<\u013a\3\2\2\2>\u0141\3\2\2\2@\u0143"+
		"\3\2\2\2B\u0147\3\2\2\2D\u015c\3\2\2\2F\u015e\3\2\2\2H\u0164\3\2\2\2J"+
		"\u0166\3\2\2\2L\u0183\3\2\2\2N\u018a\3\2\2\2P\u018c\3\2\2\2R\u0193\3\2"+
		"\2\2T\u0199\3\2\2\2V\u01a8\3\2\2\2X\u01b5\3\2\2\2Z\u01b7\3\2\2\2\\\u01c6"+
		"\3\2\2\2^\u01c8\3\2\2\2`\u01d7\3\2\2\2b\u01d9\3\2\2\2d\u01e8\3\2\2\2f"+
		"\u01f3\3\2\2\2h\u01fc\3\2\2\2j\u01fe\3\2\2\2l\u0201\3\2\2\2n\u0204\3\2"+
		"\2\2p\u0207\3\2\2\2r\u020a\3\2\2\2t\u020d\3\2\2\2v\u0210\3\2\2\2x\u0213"+
		"\3\2\2\2z\u0216\3\2\2\2|\u0219\3\2\2\2~\u021c\3\2\2\2\u0080\u0228\3\2"+
		"\2\2\u0082\u022e\3\2\2\2\u0084\u0230\3\2\2\2\u0086\u0088\5\4\3\2\u0087"+
		"\u0086\3\2\2\2\u0088\u008b\3\2\2\2\u0089\u0087\3\2\2\2\u0089\u008a\3\2"+
		"\2\2\u008a\3\3\2\2\2\u008b\u0089\3\2\2\2\u008c\u0092\5\34\17\2\u008d\u0092"+
		"\5J&\2\u008e\u0092\5V,\2\u008f\u0092\5T+\2\u0090\u0092\5X-\2\u0091\u008c"+
		"\3\2\2\2\u0091\u008d\3\2\2\2\u0091\u008e\3\2\2\2\u0091\u008f\3\2\2\2\u0091"+
		"\u0090\3\2\2\2\u0092\5\3\2\2\2\u0093\u0096\5\n\6\2\u0094\u0096\5\b\5\2"+
		"\u0095\u0093\3\2\2\2\u0095\u0094\3\2\2\2\u0096\7\3\2\2\2\u0097\u009b\5"+
		"\f\7\2\u0098\u009b\5\16\b\2\u0099\u009b\5\20\t\2\u009a\u0097\3\2\2\2\u009a"+
		"\u0098\3\2\2\2\u009a\u0099\3\2\2\2\u009b\t\3\2\2\2\u009c\u00a2\7\67\2"+
		"\2\u009d\u009e\7\67\2\2\u009e\u009f\7)\2\2\u009f\u00a0\7)\2\2\u00a0\u00a2"+
		"\7\67\2\2\u00a1\u009c\3\2\2\2\u00a1\u009d\3\2\2\2\u00a2\13\3\2\2\2\u00a3"+
		"\u00a4\78\2\2\u00a4\r\3\2\2\2\u00a5\u00a6\t\2\2\2\u00a6\17\3\2\2\2\u00a7"+
		"\u00a8\t\3\2\2\u00a8\21\3\2\2\2\u00a9\u00ab\5\30\r\2\u00aa\u00a9\3\2\2"+
		"\2\u00ab\u00ae\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00af"+
		"\3\2\2\2\u00ae\u00ac\3\2\2\2\u00af\u00b1\5\n\6\2\u00b0\u00b2\5\24\13\2"+
		"\u00b1\u00b0\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b4\3\2\2\2\u00b3\u00b5"+
		"\5\32\16\2\u00b4\u00b3\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\23\3\2\2\2\u00b6"+
		"\u00b7\7-\2\2\u00b7\u00b8\5\26\f\2\u00b8\u00b9\7%\2\2\u00b9\25\3\2\2\2"+
		"\u00ba\u00c0\5\22\n\2\u00bb\u00bc\5\22\n\2\u00bc\u00bd\7*\2\2\u00bd\u00be"+
		"\5\26\f\2\u00be\u00c0\3\2\2\2\u00bf\u00ba\3\2\2\2\u00bf\u00bb\3\2\2\2"+
		"\u00c0\27\3\2\2\2\u00c1\u00c8\7\3\2\2\u00c2\u00c8\7\4\2\2\u00c3\u00c8"+
		"\7\5\2\2\u00c4\u00c8\7\21\2\2\u00c5\u00c8\7\n\2\2\u00c6\u00c8\5t;\2\u00c7"+
		"\u00c1\3\2\2\2\u00c7\u00c2\3\2\2\2\u00c7\u00c3\3\2\2\2\u00c7\u00c4\3\2"+
		"\2\2\u00c7\u00c5\3\2\2\2\u00c7\u00c6\3\2\2\2\u00c8\31\3\2\2\2\u00c9\u00ca"+
		"\t\4\2\2\u00ca\33\3\2\2\2\u00cb\u00cc\5\36\20\2\u00cc\u00cd\7.\2\2\u00cd"+
		"\u00ce\5*\26\2\u00ce\u00d0\7&\2\2\u00cf\u00d1\7\65\2\2\u00d0\u00cf\3\2"+
		"\2\2\u00d0\u00d1\3\2\2\2\u00d1\35\3\2\2\2\u00d2\u00d4\5 \21\2\u00d3\u00d2"+
		"\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d7\5\"\22\2"+
		"\u00d6\u00d8\7 \2\2\u00d7\u00d6\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d9"+
		"\3\2\2\2\u00d9\u00db\5\n\6\2\u00da\u00dc\5$\23\2\u00db\u00da\3\2\2\2\u00db"+
		"\u00dc\3\2\2\2\u00dc\37\3\2\2\2\u00dd\u00e1\5j\66\2\u00de\u00e1\5p9\2"+
		"\u00df\u00e1\5x=\2\u00e0\u00dd\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0\u00df"+
		"\3\2\2\2\u00e1!\3\2\2\2\u00e2\u00e3\t\5\2\2\u00e3#\3\2\2\2\u00e4\u00e5"+
		"\7)\2\2\u00e5\u00e6\5&\24\2\u00e6%\3\2\2\2\u00e7\u00ed\5(\25\2\u00e8\u00e9"+
		"\5(\25\2\u00e9\u00ea\7*\2\2\u00ea\u00eb\5&\24\2\u00eb\u00ed\3\2\2\2\u00ec"+
		"\u00e7\3\2\2\2\u00ec\u00e8\3\2\2\2\u00ed\'\3\2\2\2\u00ee\u00ef\5\62\32"+
		"\2\u00ef\u00f0\5\n\6\2\u00f0)\3\2\2\2\u00f1\u00f3\5|?\2\u00f2\u00f1\3"+
		"\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f5\3\2\2\2\u00f4\u00f6\7\65\2\2\u00f5"+
		"\u00f4\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7\u00f9\5,"+
		"\27\2\u00f8\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9+\3\2\2\2\u00fa\u00fc"+
		"\5.\30\2\u00fb\u00fd\5,\27\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd"+
		"-\3\2\2\2\u00fe\u0104\5\60\31\2\u00ff\u0104\58\35\2\u0100\u0104\5\64\33"+
		"\2\u0101\u0104\5B\"\2\u0102\u0104\5\66\34\2\u0103\u00fe\3\2\2\2\u0103"+
		"\u00ff\3\2\2\2\u0103\u0100\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0102\3\2"+
		"\2\2\u0104/\3\2\2\2\u0105\u0106\5\62\32\2\u0106\u0107\7)\2\2\u0107\61"+
		"\3\2\2\2\u0108\u0109\t\6\2\2\u0109\63\3\2\2\2\u010a\u010c\7\b\2\2\u010b"+
		"\u010d\7\3\2\2\u010c\u010b\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010e\3\2"+
		"\2\2\u010e\u010f\5\n\6\2\u010f\u0110\7\65\2\2\u0110\65\3\2\2\2\u0111\u0112"+
		"\7\37\2\2\u0112\u0113\5Z.\2\u0113\67\3\2\2\2\u0114\u0116\5z>\2\u0115\u0114"+
		"\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0118\3\2\2\2\u0117\u0119\5n8\2\u0118"+
		"\u0117\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011d\3\2\2\2\u011a\u011c\5h"+
		"\65\2\u011b\u011a\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2\2\u011d"+
		"\u011e\3\2\2\2\u011e\u0121\3\2\2\2\u011f\u011d\3\2\2\2\u0120\u0122\5\22"+
		"\n\2\u0121\u0120\3\2\2\2\u0121\u0122\3\2\2\2\u0122\u0123\3\2\2\2\u0123"+
		"\u0124\5f\64\2\u0124\u0128\5Z.\2\u0125\u0127\5<\37\2\u0126\u0125\3\2\2"+
		"\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2\2\2\u0129\u012b"+
		"\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012c\5:\36\2\u012c9\3\2\2\2\u012d"+
		"\u0139\7\65\2\2\u012e\u0130\5^\60\2\u012f\u0131\7\65\2\2\u0130\u012f\3"+
		"\2\2\2\u0130\u0131\3\2\2\2\u0131\u0139\3\2\2\2\u0132\u0133\7)\2\2\u0133"+
		"\u0134\5> \2\u0134\u0136\5^\60\2\u0135\u0137\7\65\2\2\u0136\u0135\3\2"+
		"\2\2\u0136\u0137\3\2\2\2\u0137\u0139\3\2\2\2\u0138\u012d\3\2\2\2\u0138"+
		"\u012e\3\2\2\2\u0138\u0132\3\2\2\2\u0139;\3\2\2\2\u013a\u013b\t\7\2\2"+
		"\u013b=\3\2\2\2\u013c\u0142\5@!\2\u013d\u013e\5@!\2\u013e\u013f\7*\2\2"+
		"\u013f\u0140\5> \2\u0140\u0142\3\2\2\2\u0141\u013c\3\2\2\2\u0141\u013d"+
		"\3\2\2\2\u0142?\3\2\2\2\u0143\u0144\5\n\6\2\u0144\u0145\5Z.\2\u0145A\3"+
		"\2\2\2\u0146\u0148\5v<\2\u0147\u0146\3\2\2\2\u0147\u0148\3\2\2\2\u0148"+
		"\u014a\3\2\2\2\u0149\u014b\7\20\2\2\u014a\u0149\3\2\2\2\u014a\u014b\3"+
		"\2\2\2\u014b\u014d\3\2\2\2\u014c\u014e\5\22\n\2\u014d\u014c\3\2\2\2\u014d"+
		"\u014e\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\5\n\6\2\u0150\u0152\5F"+
		"$\2\u0151\u0150\3\2\2\2\u0151\u0152\3\2\2\2\u0152\u0154\3\2\2\2\u0153"+
		"\u0155\5D#\2\u0154\u0153\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0156\3\2\2"+
		"\2\u0156\u0157\7\65\2\2\u0157C\3\2\2\2\u0158\u0159\7)\2\2\u0159\u015d"+
		"\5\b\5\2\u015a\u015b\7+\2\2\u015b\u015d\5\b\5\2\u015c\u0158\3\2\2\2\u015c"+
		"\u015a\3\2\2\2\u015dE\3\2\2\2\u015e\u015f\7\60\2\2\u015f\u0160\5H%\2\u0160"+
		"\u0161\7(\2\2\u0161G\3\2\2\2\u0162\u0165\5\n\6\2\u0163\u0165\5\16\b\2"+
		"\u0164\u0162\3\2\2\2\u0164\u0163\3\2\2\2\u0165I\3\2\2\2\u0166\u0167\5"+
		"L\'\2\u0167\u0168\7.\2\2\u0168\u016a\5N(\2\u0169\u016b\7*\2\2\u016a\u0169"+
		"\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016e\7&\2\2\u016d"+
		"\u016f\7\65\2\2\u016e\u016d\3\2\2\2\u016e\u016f\3\2\2\2\u016fK\3\2\2\2"+
		"\u0170\u0172\5l\67\2\u0171\u0170\3\2\2\2\u0171\u0172\3\2\2\2\u0172\u0173"+
		"\3\2\2\2\u0173\u0175\7\5\2\2\u0174\u0176\7\3\2\2\u0175\u0174\3\2\2\2\u0175"+
		"\u0176\3\2\2\2\u0176\u0177\3\2\2\2\u0177\u0184\5\n\6\2\u0178\u017a\5l"+
		"\67\2\u0179\u0178\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017b\3\2\2\2\u017b"+
		"\u017d\7\5\2\2\u017c\u017e\7\3\2\2\u017d\u017c\3\2\2\2\u017d\u017e\3\2"+
		"\2\2\u017e\u017f\3\2\2\2\u017f\u0180\5\n\6\2\u0180\u0181\7)\2\2\u0181"+
		"\u0182\5\22\n\2\u0182\u0184\3\2\2\2\u0183\u0171\3\2\2\2\u0183\u0179\3"+
		"\2\2\2\u0184M\3\2\2\2\u0185\u018b\5P)\2\u0186\u0187\5P)\2\u0187\u0188"+
		"\7*\2\2\u0188\u0189\5N(\2\u0189\u018b\3\2\2\2\u018a\u0185\3\2\2\2\u018a"+
		"\u0186\3\2\2\2\u018bO\3\2\2\2\u018c\u018e\5\n\6\2\u018d\u018f\5R*\2\u018e"+
		"\u018d\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0191\3\2\2\2\u0190\u0192\5r"+
		":\2\u0191\u0190\3\2\2\2\u0191\u0192\3\2\2\2\u0192Q\3\2\2\2\u0193\u0194"+
		"\7+\2\2\u0194\u0195\5\b\5\2\u0195S\3\2\2\2\u0196\u0198\5h\65\2\u0197\u0196"+
		"\3\2\2\2\u0198\u019b\3\2\2\2\u0199\u0197\3\2\2\2\u0199\u019a\3\2\2\2\u019a"+
		"\u019d\3\2\2\2\u019b\u0199\3\2\2\2\u019c\u019e\5\22\n\2\u019d\u019c\3"+
		"\2\2\2\u019d\u019e\3\2\2\2\u019e\u019f\3\2\2\2\u019f\u01a0\5f\64\2\u01a0"+
		"\u01a2\5Z.\2\u01a1\u01a3\7\4\2\2\u01a2\u01a1\3\2\2\2\u01a2\u01a3\3\2\2"+
		"\2\u01a3\u01a4\3\2\2\2\u01a4\u01a6\5^\60\2\u01a5\u01a7\7\65\2\2\u01a6"+
		"\u01a5\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7U\3\2\2\2\u01a8\u01a9\5\n\6\2"+
		"\u01a9\u01aa\5Z.\2\u01aa\u01ab\7\65\2\2\u01abW\3\2\2\2\u01ac\u01ad\7\24"+
		"\2\2\u01ad\u01ae\5\22\n\2\u01ae\u01af\5\n\6\2\u01af\u01b0\7\65\2\2\u01b0"+
		"\u01b6\3\2\2\2\u01b1\u01b2\7\3\2\2\u01b2\u01b3\5\n\6\2\u01b3\u01b4\7\65"+
		"\2\2\u01b4\u01b6\3\2\2\2\u01b5\u01ac\3\2\2\2\u01b5\u01b1\3\2\2\2\u01b6"+
		"Y\3\2\2\2\u01b7\u01bb\7/\2\2\u01b8\u01ba\5\\/\2\u01b9\u01b8\3\2\2\2\u01ba"+
		"\u01bd\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01be\3\2"+
		"\2\2\u01bd\u01bb\3\2\2\2\u01be\u01bf\7\'\2\2\u01bf[\3\2\2\2\u01c0\u01c2"+
		"\n\b\2\2\u01c1\u01c0\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c3"+
		"\u01c4\3\2\2\2\u01c4\u01c7\3\2\2\2\u01c5\u01c7\5Z.\2\u01c6\u01c1\3\2\2"+
		"\2\u01c6\u01c5\3\2\2\2\u01c7]\3\2\2\2\u01c8\u01cc\7.\2\2\u01c9\u01cb\5"+
		"`\61\2\u01ca\u01c9\3\2\2\2\u01cb\u01ce\3\2\2\2\u01cc\u01ca\3\2\2\2\u01cc"+
		"\u01cd\3\2\2\2\u01cd\u01cf\3\2\2\2\u01ce\u01cc\3\2\2\2\u01cf\u01d0\7&"+
		"\2\2\u01d0_\3\2\2\2\u01d1\u01d3\n\t\2\2\u01d2\u01d1\3\2\2\2\u01d3\u01d4"+
		"\3\2\2\2\u01d4\u01d2\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5\u01d8\3\2\2\2\u01d6"+
		"\u01d8\5^\60\2\u01d7\u01d2\3\2\2\2\u01d7\u01d6\3\2\2\2\u01d8a\3\2\2\2"+
		"\u01d9\u01dd\7-\2\2\u01da\u01dc\5d\63\2\u01db\u01da\3\2\2\2\u01dc\u01df"+
		"\3\2\2\2\u01dd\u01db\3\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01e0\3\2\2\2\u01df"+
		"\u01dd\3\2\2\2\u01e0\u01e1\7%\2\2\u01e1c\3\2\2\2\u01e2\u01e4\n\n\2\2\u01e3"+
		"\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e3\3\2\2\2\u01e5\u01e6\3\2"+
		"\2\2\u01e6\u01e9\3\2\2\2\u01e7\u01e9\5b\62\2\u01e8\u01e3\3\2\2\2\u01e8"+
		"\u01e7\3\2\2\2\u01e9e\3\2\2\2\u01ea\u01f4\5\n\6\2\u01eb\u01ec\7\13\2\2"+
		"\u01ec\u01f4\7+\2\2\u01ed\u01ee\7\13\2\2\u01ee\u01ef\7+\2\2\u01ef\u01f4"+
		"\7+\2\2\u01f0\u01f1\7\13\2\2\u01f1\u01f2\7\60\2\2\u01f2\u01f4\7(\2\2\u01f3"+
		"\u01ea\3\2\2\2\u01f3\u01eb\3\2\2\2\u01f3\u01ed\3\2\2\2\u01f3\u01f0\3\2"+
		"\2\2\u01f4g\3\2\2\2\u01f5\u01fd\7\20\2\2\u01f6\u01fd\7\4\2\2\u01f7\u01fd"+
		"\7\25\2\2\u01f8\u01fd\7\7\2\2\u01f9\u01fd\7\t\2\2\u01fa\u01fb\7\22\2\2"+
		"\u01fb\u01fd\5b\62\2\u01fc\u01f5\3\2\2\2\u01fc\u01f6\3\2\2\2\u01fc\u01f7"+
		"\3\2\2\2\u01fc\u01f8\3\2\2\2\u01fc\u01f9\3\2\2\2\u01fc\u01fa\3\2\2\2\u01fd"+
		"i\3\2\2\2\u01fe\u01ff\7\26\2\2\u01ff\u0200\5~@\2\u0200k\3\2\2\2\u0201"+
		"\u0202\7\27\2\2\u0202\u0203\5~@\2\u0203m\3\2\2\2\u0204\u0205\7\30\2\2"+
		"\u0205\u0206\5~@\2\u0206o\3\2\2\2\u0207\u0208\7\31\2\2\u0208\u0209\5~"+
		"@\2\u0209q\3\2\2\2\u020a\u020b\7\32\2\2\u020b\u020c\5~@\2\u020cs\3\2\2"+
		"\2\u020d\u020e\7\33\2\2\u020e\u020f\5~@\2\u020fu\3\2\2\2\u0210\u0211\7"+
		"\34\2\2\u0211\u0212\5~@\2\u0212w\3\2\2\2\u0213\u0214\7\35\2\2\u0214\u0215"+
		"\5~@\2\u0215y\3\2\2\2\u0216\u0217\7\36\2\2\u0217\u0218\5~@\2\u0218{\3"+
		"\2\2\2\u0219\u021a\7!\2\2\u021a\u021b\5~@\2\u021b}\3\2\2\2\u021c\u021e"+
		"\7/\2\2\u021d\u021f\5\u0080A\2\u021e\u021d\3\2\2\2\u021e\u021f\3\2\2\2"+
		"\u021f\u0220\3\2\2\2\u0220\u0221\7\'\2\2\u0221\177\3\2\2\2\u0222\u0229"+
		"\5\u0082B\2\u0223\u0224\5\u0082B\2\u0224\u0226\7*\2\2\u0225\u0227\5\u0080"+
		"A\2\u0226\u0225\3\2\2\2\u0226\u0227\3\2\2\2\u0227\u0229\3\2\2\2\u0228"+
		"\u0222\3\2\2\2\u0228\u0223\3\2\2\2\u0229\u0081\3\2\2\2\u022a\u022f\5\n"+
		"\6\2\u022b\u022f\5\b\5\2\u022c\u022f\5\u0084C\2\u022d\u022f\5~@\2\u022e"+
		"\u022a\3\2\2\2\u022e\u022b\3\2\2\2\u022e\u022c\3\2\2\2\u022e\u022d\3\2"+
		"\2\2\u022f\u0083\3\2\2\2\u0230\u0231\5\n\6\2\u0231\u0232\7+\2\2\u0232"+
		"\u0233\5\u0082B\2\u0233\u0085\3\2\2\2F\u0089\u0091\u0095\u009a\u00a1\u00ac"+
		"\u00b1\u00b4\u00bf\u00c7\u00d0\u00d3\u00d7\u00db\u00e0\u00ec\u00f2\u00f5"+
		"\u00f8\u00fc\u0103\u010c\u0115\u0118\u011d\u0121\u0128\u0130\u0136\u0138"+
		"\u0141\u0147\u014a\u014d\u0151\u0154\u015c\u0164\u016a\u016e\u0171\u0175"+
		"\u0179\u017d\u0183\u018a\u018e\u0191\u0199\u019d\u01a2\u01a6\u01b5\u01bb"+
		"\u01c3\u01c6\u01cc\u01d4\u01d7\u01dd\u01e5\u01e8\u01f3\u01fc\u021e\u0226"+
		"\u0228\u022e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}