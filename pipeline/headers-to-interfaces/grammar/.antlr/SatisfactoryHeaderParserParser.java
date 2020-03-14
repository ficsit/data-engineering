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
		MUTABLE=8, OVERRIDE=9, PRIVATE=10, PROTECTED=11, PUBLIC=12, STATIC=13, 
		STRUCT=14, TRUE=15, TYPEDEF=16, VIRTUAL=17, UCLASS=18, UENUM=19, UFUNCTION=20, 
		UINTERFACE=21, UMETA=22, UPARAM=23, UPROPERTY=24, USTRUCT=25, UE_DEPRECATED=26, 
		SF_CLASS_TAG=27, SF_GENERATED_BODY=28, AMPERSAND=29, BACKSLASH=30, BANG=31, 
		CLOSE_ANGLE=32, CLOSE_BRACE=33, CLOSE_PAREN=34, COLON=35, COMMA=36, EQUALS=37, 
		MINUS=38, OPEN_ANGLE=39, OPEN_BRACE=40, OPEN_PAREN=41, PERIOD=42, PIPE=43, 
		PLUS=44, QUESTION=45, SEMICOLON=46, STAR=47, IDENTIFIER=48, STRING_LITERAL=49, 
		FLOAT_LITERAL=50, INTEGER_LITERAL=51, PREPROCESSOR=52, LINE_COMMENT_START=53, 
		BLOCK_COMMENT_START=54, WHITESPACE=55, LINE_COMMENT_END=56, LINE_COMMENT_TEXT=57, 
		LINE_COMMENT_OTHER=58, BLOCK_COMMENT_END=59, BLOCK_COMMENT_NEW_LINE=60, 
		BLOCK_COMMENT_TEXT=61, BLOCK_COMMENT_OTHER=62;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_booleanLiteral = 7, 
		RULE_typeDeclaration = 8, RULE_templateType = 9, RULE_templateTypeList = 10, 
		RULE_typeModifier = 11, RULE_typeReferenceType = 12, RULE_classDeclaration = 13, 
		RULE_classHeader = 14, RULE_classMacro = 15, RULE_classKeyword = 16, RULE_classInheritance = 17, 
		RULE_classExtensionList = 18, RULE_classExtension = 19, RULE_classBody = 20, 
		RULE_classEntries = 21, RULE_classEntry = 22, RULE_classVisibility = 23, 
		RULE_classVisibilityModifier = 24, RULE_friendDeclaration = 25, RULE_classMethod = 26, 
		RULE_classMethodEnd = 27, RULE_classMethodResultModifier = 28, RULE_classMethodParameterList = 29, 
		RULE_classMethodParameterName = 30, RULE_classMethodParameter = 31, RULE_classMethodCallList = 32, 
		RULE_classMethodCall = 33, RULE_classProperty = 34, RULE_classPropertyDefaultValue = 35, 
		RULE_enumDeclaration = 36, RULE_enumHeader = 37, RULE_enumBody = 38, RULE_enumEntry = 39, 
		RULE_enumValue = 40, RULE_staticFunctionDeclaration = 41, RULE_staticMethodCall = 42, 
		RULE_typedef = 43, RULE_contentWithNestedParens = 44, RULE_contentWithNestedParensInner = 45, 
		RULE_contentWithNestedBraces = 46, RULE_contentWithNestedBracesInner = 47, 
		RULE_functionModifier = 48, RULE_uclassMacro = 49, RULE_uenumMacro = 50, 
		RULE_ufunctionMacro = 51, RULE_uinterfaceMacro = 52, RULE_umetaMacro = 53, 
		RULE_uParamMacro = 54, RULE_upropertyMacro = 55, RULE_ustructMacro = 56, 
		RULE_uedeprecatedMacro = 57, RULE_generatedBodyMacro = 58, RULE_macroPropertyList = 59, 
		RULE_macroPropertyListEntries = 60, RULE_macroProperty = 61, RULE_macroPropertyPair = 62;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"templateTypeList", "typeModifier", "typeReferenceType", "classDeclaration", 
		"classHeader", "classMacro", "classKeyword", "classInheritance", "classExtensionList", 
		"classExtension", "classBody", "classEntries", "classEntry", "classVisibility", 
		"classVisibilityModifier", "friendDeclaration", "classMethod", "classMethodEnd", 
		"classMethodResultModifier", "classMethodParameterList", "classMethodParameterName", 
		"classMethodParameter", "classMethodCallList", "classMethodCall", "classProperty", 
		"classPropertyDefaultValue", "enumDeclaration", "enumHeader", "enumBody", 
		"enumEntry", "enumValue", "staticFunctionDeclaration", "staticMethodCall", 
		"typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
		"contentWithNestedBraces", "contentWithNestedBracesInner", "functionModifier", 
		"uclassMacro", "uenumMacro", "ufunctionMacro", "uinterfaceMacro", "umetaMacro", 
		"uParamMacro", "upropertyMacro", "ustructMacro", "uedeprecatedMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", "'friend'", 
		"'inline'", "'mutable'", "'override'", "'private'", "'protected'", "'public'", 
		"'static'", "'struct'", "'true'", "'typedef'", "'virtual'", "'UCLASS'", 
		"'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'USTRUCT'", "'UE_DEPRECATED'", "'FACTORYGAME_API'", null, "'&'", "'/'", 
		"'!'", "'>'", "'}'", "')'", "':'", "','", "'='", "'-'", "'<'", "'{'", 
		"'('", "'.'", "'|'", "'+'", "'?'", "';'", "'*'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", "INLINE", 
		"MUTABLE", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "STRUCT", 
		"TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", 
		"UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", 
		"OPEN_BRACE", "OPEN_PAREN", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", 
		"STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
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
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << INLINE) | (1L << MUTABLE) | (1L << STATIC) | (1L << STRUCT) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UINTERFACE) | (1L << UPARAM) | (1L << USTRUCT) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(126);
				element();
				}
				}
				setState(131);
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
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				classDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				enumDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(134);
				staticMethodCall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(135);
				staticFunctionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(136);
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
			setState(141);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
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
				setState(140);
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
			setState(146);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(145);
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
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(148);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(149);
				match(IDENTIFIER);
				setState(150);
				match(COLON);
				setState(151);
				match(COLON);
				setState(152);
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
			setState(155);
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
			setState(157);
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
			setState(159);
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
			setState(164);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << MUTABLE) | (1L << STRUCT) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(161);
				typeModifier();
				}
				}
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(167);
			identifier();
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(168);
				templateType();
				}
			}

			setState(172);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AMPERSAND || _la==STAR) {
				{
				setState(171);
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
			setState(174);
			match(OPEN_ANGLE);
			setState(175);
			templateTypeList();
			setState(176);
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
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(178);
				typeDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(179);
				typeDeclaration();
				setState(180);
				match(COMMA);
				setState(181);
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
			setState(191);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(185);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(186);
				match(CONST);
				}
				break;
			case ENUM:
				enterOuterAlt(_localctx, 3);
				{
				setState(187);
				match(ENUM);
				}
				break;
			case STRUCT:
				enterOuterAlt(_localctx, 4);
				{
				setState(188);
				match(STRUCT);
				}
				break;
			case MUTABLE:
				enterOuterAlt(_localctx, 5);
				{
				setState(189);
				match(MUTABLE);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 6);
				{
				setState(190);
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
			setState(193);
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
			setState(195);
			classHeader();
			setState(196);
			match(OPEN_BRACE);
			setState(197);
			classBody();
			setState(198);
			match(CLOSE_BRACE);
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(199);
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
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UCLASS) | (1L << UINTERFACE) | (1L << USTRUCT))) != 0)) {
				{
				setState(202);
				classMacro();
				}
			}

			setState(205);
			classKeyword();
			setState(207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(206);
				match(SF_CLASS_TAG);
				}
			}

			setState(209);
			identifier();
			setState(211);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(210);
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
			setState(216);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(213);
				uclassMacro();
				}
				break;
			case UINTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(214);
				uinterfaceMacro();
				}
				break;
			case USTRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(215);
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
			setState(218);
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
			setState(220);
			match(COLON);
			setState(221);
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
			setState(228);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(224);
				classExtension();
				setState(225);
				match(COMMA);
				setState(226);
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
			setState(230);
			classVisibilityModifier();
			setState(231);
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
			setState(234);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(233);
				generatedBodyMacro();
				}
			}

			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(236);
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
			setState(239);
			classEntry();
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << UE_DEPRECATED) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(240);
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
		public ClassEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classEntry; }
	}

	public final ClassEntryContext classEntry() throws RecognitionException {
		ClassEntryContext _localctx = new ClassEntryContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_classEntry);
		try {
			setState(247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(243);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(244);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(245);
				friendDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(246);
				classProperty();
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
			setState(249);
			classVisibilityModifier();
			setState(250);
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
			setState(252);
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
			setState(254);
			match(FRIEND);
			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLASS) {
				{
				setState(255);
				match(CLASS);
				}
			}

			setState(258);
			identifier();
			setState(259);
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

	public static class ClassMethodContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public TerminalNode CLOSE_PAREN() { return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
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
		public ClassMethodParameterListContext classMethodParameterList() {
			return getRuleContext(ClassMethodParameterListContext.class,0);
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
		enterRule(_localctx, 52, RULE_classMethod);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UE_DEPRECATED) {
				{
				setState(261);
				uedeprecatedMacro();
				}
			}

			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(264);
				ufunctionMacro();
				}
			}

			setState(270);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(267);
					functionModifier();
					}
					} 
				}
				setState(272);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(274);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(273);
				typeDeclaration();
				}
				break;
			}
			setState(276);
			identifier();
			setState(277);
			match(OPEN_PAREN);
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << MUTABLE) | (1L << STRUCT) | (1L << UPARAM) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(278);
				classMethodParameterList();
				}
			}

			setState(281);
			match(CLOSE_PAREN);
			setState(285);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CONST || _la==OVERRIDE) {
				{
				{
				setState(282);
				classMethodResultModifier();
				}
				}
				setState(287);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(288);
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
		public ClassMethodCallListContext classMethodCallList() {
			return getRuleContext(ClassMethodCallListContext.class,0);
		}
		public ClassMethodEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodEnd; }
	}

	public final ClassMethodEndContext classMethodEnd() throws RecognitionException {
		ClassMethodEndContext _localctx = new ClassMethodEndContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_classMethodEnd);
		int _la;
		try {
			setState(301);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(290);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(291);
				contentWithNestedBraces();
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(292);
					match(SEMICOLON);
					}
				}

				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 3);
				{
				setState(295);
				match(COLON);
				setState(296);
				classMethodCallList();
				setState(297);
				contentWithNestedBraces();
				setState(299);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(298);
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
		enterRule(_localctx, 56, RULE_classMethodResultModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
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

	public static class ClassMethodParameterListContext extends ParserRuleContext {
		public ClassMethodParameterContext classMethodParameter() {
			return getRuleContext(ClassMethodParameterContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public ClassMethodParameterListContext classMethodParameterList() {
			return getRuleContext(ClassMethodParameterListContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassMethodParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodParameterList; }
	}

	public final ClassMethodParameterListContext classMethodParameterList() throws RecognitionException {
		ClassMethodParameterListContext _localctx = new ClassMethodParameterListContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_classMethodParameterList);
		try {
			setState(311);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(305);
				classMethodParameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(306);
				classMethodParameter();
				setState(307);
				match(COMMA);
				setState(308);
				classMethodParameterList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				identifier();
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

	public static class ClassMethodParameterNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassMethodParameterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodParameterName; }
	}

	public final ClassMethodParameterNameContext classMethodParameterName() throws RecognitionException {
		ClassMethodParameterNameContext _localctx = new ClassMethodParameterNameContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_classMethodParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
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

	public static class ClassMethodParameterContext extends ParserRuleContext {
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public ClassMethodParameterNameContext classMethodParameterName() {
			return getRuleContext(ClassMethodParameterNameContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ClassMethodParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodParameter; }
	}

	public final ClassMethodParameterContext classMethodParameter() throws RecognitionException {
		ClassMethodParameterContext _localctx = new ClassMethodParameterContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_classMethodParameter);
		try {
			setState(323);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(315);
				typeDeclaration();
				setState(316);
				classMethodParameterName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(318);
				typeDeclaration();
				setState(319);
				classMethodParameterName();
				setState(320);
				match(EQUALS);
				setState(321);
				value();
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

	public static class ClassMethodCallListContext extends ParserRuleContext {
		public ClassMethodCallContext classMethodCall() {
			return getRuleContext(ClassMethodCallContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(SatisfactoryHeaderParserParser.COMMA, 0); }
		public ClassMethodCallListContext classMethodCallList() {
			return getRuleContext(ClassMethodCallListContext.class,0);
		}
		public ClassMethodCallListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodCallList; }
	}

	public final ClassMethodCallListContext classMethodCallList() throws RecognitionException {
		ClassMethodCallListContext _localctx = new ClassMethodCallListContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_classMethodCallList);
		try {
			setState(330);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(325);
				classMethodCall();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(326);
				classMethodCall();
				setState(327);
				match(COMMA);
				setState(328);
				classMethodCallList();
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

	public static class ClassMethodCallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public List<TerminalNode> CLOSE_PAREN() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_PAREN); }
		public TerminalNode CLOSE_PAREN(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, i);
		}
		public ClassMethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodCall; }
	}

	public final ClassMethodCallContext classMethodCall() throws RecognitionException {
		ClassMethodCallContext _localctx = new ClassMethodCallContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_classMethodCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			identifier();
			setState(333);
			match(OPEN_PAREN);
			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FORCEINLINE) | (1L << FRIEND) | (1L << INLINE) | (1L << MUTABLE) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << UE_DEPRECATED) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << AMPERSAND) | (1L << BACKSLASH) | (1L << BANG) | (1L << CLOSE_ANGLE) | (1L << CLOSE_BRACE) | (1L << COLON) | (1L << COMMA) | (1L << EQUALS) | (1L << MINUS) | (1L << OPEN_ANGLE) | (1L << OPEN_BRACE) | (1L << OPEN_PAREN) | (1L << PERIOD) | (1L << PIPE) | (1L << PLUS) | (1L << QUESTION) | (1L << SEMICOLON) | (1L << STAR) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0)) {
				{
				{
				setState(334);
				_la = _input.LA(1);
				if ( _la <= 0 || (_la==CLOSE_PAREN) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(340);
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
		enterRule(_localctx, 68, RULE_classProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(342);
				upropertyMacro();
				}
			}

			setState(346);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(345);
				match(STATIC);
				}
			}

			setState(349);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(348);
				typeDeclaration();
				}
				break;
			}
			setState(351);
			identifier();
			setState(353);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==EQUALS) {
				{
				setState(352);
				classPropertyDefaultValue();
				}
			}

			setState(355);
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
		enterRule(_localctx, 70, RULE_classPropertyDefaultValue);
		try {
			setState(361);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(357);
				match(COLON);
				setState(358);
				literal();
				}
				break;
			case EQUALS:
				enterOuterAlt(_localctx, 2);
				{
				setState(359);
				match(EQUALS);
				setState(360);
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
			setState(363);
			enumHeader();
			setState(364);
			match(OPEN_BRACE);
			setState(365);
			enumBody();
			setState(367);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(366);
				match(COMMA);
				}
			}

			setState(369);
			match(CLOSE_BRACE);
			setState(371);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(370);
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
			setState(392);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(374);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(373);
					uenumMacro();
					}
				}

				setState(376);
				match(ENUM);
				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(377);
					match(CLASS);
					}
				}

				setState(380);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(382);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(381);
					uenumMacro();
					}
				}

				setState(384);
				match(ENUM);
				setState(386);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(385);
					match(CLASS);
					}
				}

				setState(388);
				identifier();
				setState(389);
				match(COLON);
				setState(390);
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
			setState(399);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(394);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(395);
				enumEntry();
				setState(396);
				match(COMMA);
				setState(397);
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
			setState(401);
			identifier();
			setState(403);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(402);
				enumValue();
				}
			}

			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UMETA) {
				{
				setState(405);
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
			setState(408);
			match(EQUALS);
			setState(409);
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
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
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
			setState(414);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(411);
					functionModifier();
					}
					} 
				}
				setState(416);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			setState(418);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(417);
				typeDeclaration();
				}
				break;
			}
			setState(420);
			identifier();
			setState(421);
			contentWithNestedParens();
			setState(422);
			contentWithNestedBraces();
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(423);
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
			setState(426);
			identifier();
			setState(427);
			contentWithNestedParens();
			setState(428);
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
			setState(439);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TYPEDEF:
				enterOuterAlt(_localctx, 1);
				{
				setState(430);
				match(TYPEDEF);
				setState(431);
				typeDeclaration();
				setState(432);
				identifier();
				setState(433);
				match(SEMICOLON);
				}
				break;
			case CLASS:
				enterOuterAlt(_localctx, 2);
				{
				setState(435);
				match(CLASS);
				setState(436);
				identifier();
				setState(437);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			match(OPEN_PAREN);
			setState(445);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(442);
					contentWithNestedParensInner();
					}
					} 
				}
				setState(447);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			}
			setState(448);
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
		try {
			setState(452);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(450);
				matchWildcard();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(451);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(OPEN_BRACE);
			setState(458);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(455);
					contentWithNestedBracesInner();
					}
					} 
				}
				setState(460);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
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
		try {
			setState(465);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(463);
				matchWildcard();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(464);
				contentWithNestedBraces();
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
		public FunctionModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionModifier; }
	}

	public final FunctionModifierContext functionModifier() throws RecognitionException {
		FunctionModifierContext _localctx = new FunctionModifierContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_functionModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << FORCEINLINE) | (1L << INLINE) | (1L << STATIC) | (1L << VIRTUAL))) != 0)) ) {
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
		enterRule(_localctx, 98, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(469);
			match(UCLASS);
			setState(470);
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
		enterRule(_localctx, 100, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(UENUM);
			setState(473);
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
		enterRule(_localctx, 102, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			match(UFUNCTION);
			setState(476);
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
		enterRule(_localctx, 104, RULE_uinterfaceMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(478);
			match(UINTERFACE);
			setState(479);
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
		enterRule(_localctx, 106, RULE_umetaMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(UMETA);
			setState(482);
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
		enterRule(_localctx, 108, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(484);
			match(UPARAM);
			setState(485);
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
		enterRule(_localctx, 110, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(487);
			match(UPROPERTY);
			setState(488);
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
		enterRule(_localctx, 112, RULE_ustructMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(490);
			match(USTRUCT);
			setState(491);
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
		enterRule(_localctx, 114, RULE_uedeprecatedMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			match(UE_DEPRECATED);
			setState(494);
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
		enterRule(_localctx, 116, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(496);
			match(SF_GENERATED_BODY);
			setState(497);
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
		enterRule(_localctx, 118, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(499);
			match(OPEN_PAREN);
			setState(501);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(500);
				macroPropertyListEntries();
				}
			}

			setState(503);
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
		enterRule(_localctx, 120, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(511);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(505);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(506);
				macroProperty();
				setState(507);
				match(COMMA);
				setState(509);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(508);
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
		enterRule(_localctx, 122, RULE_macroProperty);
		try {
			setState(517);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(513);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(514);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(515);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(516);
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
		enterRule(_localctx, 124, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(519);
			identifier();
			setState(520);
			match(EQUALS);
			setState(521);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3@\u020e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\3\2\7\2\u0082\n\2\f\2\16\2\u0085\13\2\3\3\3\3\3\3\3"+
		"\3\3\3\5\3\u008c\n\3\3\4\3\4\5\4\u0090\n\4\3\5\3\5\3\5\5\5\u0095\n\5\3"+
		"\6\3\6\3\6\3\6\3\6\5\6\u009c\n\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\7\n\u00a5"+
		"\n\n\f\n\16\n\u00a8\13\n\3\n\3\n\5\n\u00ac\n\n\3\n\5\n\u00af\n\n\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f\u00ba\n\f\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\5\r\u00c2\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\5\17\u00cb\n\17"+
		"\3\20\5\20\u00ce\n\20\3\20\3\20\5\20\u00d2\n\20\3\20\3\20\5\20\u00d6\n"+
		"\20\3\21\3\21\3\21\5\21\u00db\n\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24"+
		"\3\24\3\24\3\24\5\24\u00e7\n\24\3\25\3\25\3\25\3\26\5\26\u00ed\n\26\3"+
		"\26\5\26\u00f0\n\26\3\27\3\27\5\27\u00f4\n\27\3\30\3\30\3\30\3\30\5\30"+
		"\u00fa\n\30\3\31\3\31\3\31\3\32\3\32\3\33\3\33\5\33\u0103\n\33\3\33\3"+
		"\33\3\33\3\34\5\34\u0109\n\34\3\34\5\34\u010c\n\34\3\34\7\34\u010f\n\34"+
		"\f\34\16\34\u0112\13\34\3\34\5\34\u0115\n\34\3\34\3\34\3\34\5\34\u011a"+
		"\n\34\3\34\3\34\7\34\u011e\n\34\f\34\16\34\u0121\13\34\3\34\3\34\3\35"+
		"\3\35\3\35\5\35\u0128\n\35\3\35\3\35\3\35\3\35\5\35\u012e\n\35\5\35\u0130"+
		"\n\35\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u013a\n\37\3 \3 \3"+
		"!\3!\3!\3!\3!\3!\3!\3!\5!\u0146\n!\3\"\3\"\3\"\3\"\3\"\5\"\u014d\n\"\3"+
		"#\3#\3#\7#\u0152\n#\f#\16#\u0155\13#\3#\3#\3$\5$\u015a\n$\3$\5$\u015d"+
		"\n$\3$\5$\u0160\n$\3$\3$\5$\u0164\n$\3$\3$\3%\3%\3%\3%\5%\u016c\n%\3&"+
		"\3&\3&\3&\5&\u0172\n&\3&\3&\5&\u0176\n&\3\'\5\'\u0179\n\'\3\'\3\'\5\'"+
		"\u017d\n\'\3\'\3\'\5\'\u0181\n\'\3\'\3\'\5\'\u0185\n\'\3\'\3\'\3\'\3\'"+
		"\5\'\u018b\n\'\3(\3(\3(\3(\3(\5(\u0192\n(\3)\3)\5)\u0196\n)\3)\5)\u0199"+
		"\n)\3*\3*\3*\3+\7+\u019f\n+\f+\16+\u01a2\13+\3+\5+\u01a5\n+\3+\3+\3+\3"+
		"+\5+\u01ab\n+\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3-\3-\5-\u01ba\n-\3.\3"+
		".\7.\u01be\n.\f.\16.\u01c1\13.\3.\3.\3/\3/\5/\u01c7\n/\3\60\3\60\7\60"+
		"\u01cb\n\60\f\60\16\60\u01ce\13\60\3\60\3\60\3\61\3\61\5\61\u01d4\n\61"+
		"\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\66"+
		"\3\67\3\67\3\67\38\38\38\39\39\39\3:\3:\3:\3;\3;\3;\3<\3<\3<\3=\3=\5="+
		"\u01f8\n=\3=\3=\3>\3>\3>\3>\5>\u0200\n>\5>\u0202\n>\3?\3?\3?\3?\5?\u0208"+
		"\n?\3@\3@\3@\3@\3@\2\2A\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*"+
		",.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\2\n\3\2\64\65\4\2"+
		"\6\6\21\21\4\2\37\37\61\61\4\2\3\3\20\20\3\2\f\16\4\2\4\4\13\13\3\2$$"+
		"\7\2\4\4\7\7\t\t\17\17\23\23\2\u021a\2\u0083\3\2\2\2\4\u008b\3\2\2\2\6"+
		"\u008f\3\2\2\2\b\u0094\3\2\2\2\n\u009b\3\2\2\2\f\u009d\3\2\2\2\16\u009f"+
		"\3\2\2\2\20\u00a1\3\2\2\2\22\u00a6\3\2\2\2\24\u00b0\3\2\2\2\26\u00b9\3"+
		"\2\2\2\30\u00c1\3\2\2\2\32\u00c3\3\2\2\2\34\u00c5\3\2\2\2\36\u00cd\3\2"+
		"\2\2 \u00da\3\2\2\2\"\u00dc\3\2\2\2$\u00de\3\2\2\2&\u00e6\3\2\2\2(\u00e8"+
		"\3\2\2\2*\u00ec\3\2\2\2,\u00f1\3\2\2\2.\u00f9\3\2\2\2\60\u00fb\3\2\2\2"+
		"\62\u00fe\3\2\2\2\64\u0100\3\2\2\2\66\u0108\3\2\2\28\u012f\3\2\2\2:\u0131"+
		"\3\2\2\2<\u0139\3\2\2\2>\u013b\3\2\2\2@\u0145\3\2\2\2B\u014c\3\2\2\2D"+
		"\u014e\3\2\2\2F\u0159\3\2\2\2H\u016b\3\2\2\2J\u016d\3\2\2\2L\u018a\3\2"+
		"\2\2N\u0191\3\2\2\2P\u0193\3\2\2\2R\u019a\3\2\2\2T\u01a0\3\2\2\2V\u01ac"+
		"\3\2\2\2X\u01b9\3\2\2\2Z\u01bb\3\2\2\2\\\u01c6\3\2\2\2^\u01c8\3\2\2\2"+
		"`\u01d3\3\2\2\2b\u01d5\3\2\2\2d\u01d7\3\2\2\2f\u01da\3\2\2\2h\u01dd\3"+
		"\2\2\2j\u01e0\3\2\2\2l\u01e3\3\2\2\2n\u01e6\3\2\2\2p\u01e9\3\2\2\2r\u01ec"+
		"\3\2\2\2t\u01ef\3\2\2\2v\u01f2\3\2\2\2x\u01f5\3\2\2\2z\u0201\3\2\2\2|"+
		"\u0207\3\2\2\2~\u0209\3\2\2\2\u0080\u0082\5\4\3\2\u0081\u0080\3\2\2\2"+
		"\u0082\u0085\3\2\2\2\u0083\u0081\3\2\2\2\u0083\u0084\3\2\2\2\u0084\3\3"+
		"\2\2\2\u0085\u0083\3\2\2\2\u0086\u008c\5\34\17\2\u0087\u008c\5J&\2\u0088"+
		"\u008c\5V,\2\u0089\u008c\5T+\2\u008a\u008c\5X-\2\u008b\u0086\3\2\2\2\u008b"+
		"\u0087\3\2\2\2\u008b\u0088\3\2\2\2\u008b\u0089\3\2\2\2\u008b\u008a\3\2"+
		"\2\2\u008c\5\3\2\2\2\u008d\u0090\5\n\6\2\u008e\u0090\5\b\5\2\u008f\u008d"+
		"\3\2\2\2\u008f\u008e\3\2\2\2\u0090\7\3\2\2\2\u0091\u0095\5\f\7\2\u0092"+
		"\u0095\5\16\b\2\u0093\u0095\5\20\t\2\u0094\u0091\3\2\2\2\u0094\u0092\3"+
		"\2\2\2\u0094\u0093\3\2\2\2\u0095\t\3\2\2\2\u0096\u009c\7\62\2\2\u0097"+
		"\u0098\7\62\2\2\u0098\u0099\7%\2\2\u0099\u009a\7%\2\2\u009a\u009c\7\62"+
		"\2\2\u009b\u0096\3\2\2\2\u009b\u0097\3\2\2\2\u009c\13\3\2\2\2\u009d\u009e"+
		"\7\63\2\2\u009e\r\3\2\2\2\u009f\u00a0\t\2\2\2\u00a0\17\3\2\2\2\u00a1\u00a2"+
		"\t\3\2\2\u00a2\21\3\2\2\2\u00a3\u00a5\5\30\r\2\u00a4\u00a3\3\2\2\2\u00a5"+
		"\u00a8\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a9\3\2"+
		"\2\2\u00a8\u00a6\3\2\2\2\u00a9\u00ab\5\n\6\2\u00aa\u00ac\5\24\13\2\u00ab"+
		"\u00aa\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ae\3\2\2\2\u00ad\u00af\5\32"+
		"\16\2\u00ae\u00ad\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\23\3\2\2\2\u00b0\u00b1"+
		"\7)\2\2\u00b1\u00b2\5\26\f\2\u00b2\u00b3\7\"\2\2\u00b3\25\3\2\2\2\u00b4"+
		"\u00ba\5\22\n\2\u00b5\u00b6\5\22\n\2\u00b6\u00b7\7&\2\2\u00b7\u00b8\5"+
		"\26\f\2\u00b8\u00ba\3\2\2\2\u00b9\u00b4\3\2\2\2\u00b9\u00b5\3\2\2\2\u00ba"+
		"\27\3\2\2\2\u00bb\u00c2\7\3\2\2\u00bc\u00c2\7\4\2\2\u00bd\u00c2\7\5\2"+
		"\2\u00be\u00c2\7\20\2\2\u00bf\u00c2\7\n\2\2\u00c0\u00c2\5n8\2\u00c1\u00bb"+
		"\3\2\2\2\u00c1\u00bc\3\2\2\2\u00c1\u00bd\3\2\2\2\u00c1\u00be\3\2\2\2\u00c1"+
		"\u00bf\3\2\2\2\u00c1\u00c0\3\2\2\2\u00c2\31\3\2\2\2\u00c3\u00c4\t\4\2"+
		"\2\u00c4\33\3\2\2\2\u00c5\u00c6\5\36\20\2\u00c6\u00c7\7*\2\2\u00c7\u00c8"+
		"\5*\26\2\u00c8\u00ca\7#\2\2\u00c9\u00cb\7\60\2\2\u00ca\u00c9\3\2\2\2\u00ca"+
		"\u00cb\3\2\2\2\u00cb\35\3\2\2\2\u00cc\u00ce\5 \21\2\u00cd\u00cc\3\2\2"+
		"\2\u00cd\u00ce\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d1\5\"\22\2\u00d0"+
		"\u00d2\7\35\2\2\u00d1\u00d0\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d3\3"+
		"\2\2\2\u00d3\u00d5\5\n\6\2\u00d4\u00d6\5$\23\2\u00d5\u00d4\3\2\2\2\u00d5"+
		"\u00d6\3\2\2\2\u00d6\37\3\2\2\2\u00d7\u00db\5d\63\2\u00d8\u00db\5j\66"+
		"\2\u00d9\u00db\5r:\2\u00da\u00d7\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00d9"+
		"\3\2\2\2\u00db!\3\2\2\2\u00dc\u00dd\t\5\2\2\u00dd#\3\2\2\2\u00de\u00df"+
		"\7%\2\2\u00df\u00e0\5&\24\2\u00e0%\3\2\2\2\u00e1\u00e7\5(\25\2\u00e2\u00e3"+
		"\5(\25\2\u00e3\u00e4\7&\2\2\u00e4\u00e5\5&\24\2\u00e5\u00e7\3\2\2\2\u00e6"+
		"\u00e1\3\2\2\2\u00e6\u00e2\3\2\2\2\u00e7\'\3\2\2\2\u00e8\u00e9\5\62\32"+
		"\2\u00e9\u00ea\5\n\6\2\u00ea)\3\2\2\2\u00eb\u00ed\5v<\2\u00ec\u00eb\3"+
		"\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00ef\3\2\2\2\u00ee\u00f0\5,\27\2\u00ef"+
		"\u00ee\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0+\3\2\2\2\u00f1\u00f3\5.\30\2"+
		"\u00f2\u00f4\5,\27\2\u00f3\u00f2\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4-\3"+
		"\2\2\2\u00f5\u00fa\5\60\31\2\u00f6\u00fa\5\66\34\2\u00f7\u00fa\5\64\33"+
		"\2\u00f8\u00fa\5F$\2\u00f9\u00f5\3\2\2\2\u00f9\u00f6\3\2\2\2\u00f9\u00f7"+
		"\3\2\2\2\u00f9\u00f8\3\2\2\2\u00fa/\3\2\2\2\u00fb\u00fc\5\62\32\2\u00fc"+
		"\u00fd\7%\2\2\u00fd\61\3\2\2\2\u00fe\u00ff\t\6\2\2\u00ff\63\3\2\2\2\u0100"+
		"\u0102\7\b\2\2\u0101\u0103\7\3\2\2\u0102\u0101\3\2\2\2\u0102\u0103\3\2"+
		"\2\2\u0103\u0104\3\2\2\2\u0104\u0105\5\n\6\2\u0105\u0106\7\60\2\2\u0106"+
		"\65\3\2\2\2\u0107\u0109\5t;\2\u0108\u0107\3\2\2\2\u0108\u0109\3\2\2\2"+
		"\u0109\u010b\3\2\2\2\u010a\u010c\5h\65\2\u010b\u010a\3\2\2\2\u010b\u010c"+
		"\3\2\2\2\u010c\u0110\3\2\2\2\u010d\u010f\5b\62\2\u010e\u010d\3\2\2\2\u010f"+
		"\u0112\3\2\2\2\u0110\u010e\3\2\2\2\u0110\u0111\3\2\2\2\u0111\u0114\3\2"+
		"\2\2\u0112\u0110\3\2\2\2\u0113\u0115\5\22\n\2\u0114\u0113\3\2\2\2\u0114"+
		"\u0115\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0117\5\n\6\2\u0117\u0119\7+"+
		"\2\2\u0118\u011a\5<\37\2\u0119\u0118\3\2\2\2\u0119\u011a\3\2\2\2\u011a"+
		"\u011b\3\2\2\2\u011b\u011f\7$\2\2\u011c\u011e\5:\36\2\u011d\u011c\3\2"+
		"\2\2\u011e\u0121\3\2\2\2\u011f\u011d\3\2\2\2\u011f\u0120\3\2\2\2\u0120"+
		"\u0122\3\2\2\2\u0121\u011f\3\2\2\2\u0122\u0123\58\35\2\u0123\67\3\2\2"+
		"\2\u0124\u0130\7\60\2\2\u0125\u0127\5^\60\2\u0126\u0128\7\60\2\2\u0127"+
		"\u0126\3\2\2\2\u0127\u0128\3\2\2\2\u0128\u0130\3\2\2\2\u0129\u012a\7%"+
		"\2\2\u012a\u012b\5B\"\2\u012b\u012d\5^\60\2\u012c\u012e\7\60\2\2\u012d"+
		"\u012c\3\2\2\2\u012d\u012e\3\2\2\2\u012e\u0130\3\2\2\2\u012f\u0124\3\2"+
		"\2\2\u012f\u0125\3\2\2\2\u012f\u0129\3\2\2\2\u01309\3\2\2\2\u0131\u0132"+
		"\t\7\2\2\u0132;\3\2\2\2\u0133\u013a\5@!\2\u0134\u0135\5@!\2\u0135\u0136"+
		"\7&\2\2\u0136\u0137\5<\37\2\u0137\u013a\3\2\2\2\u0138\u013a\5\n\6\2\u0139"+
		"\u0133\3\2\2\2\u0139\u0134\3\2\2\2\u0139\u0138\3\2\2\2\u013a=\3\2\2\2"+
		"\u013b\u013c\5\n\6\2\u013c?\3\2\2\2\u013d\u013e\5\22\n\2\u013e\u013f\5"+
		"> \2\u013f\u0146\3\2\2\2\u0140\u0141\5\22\n\2\u0141\u0142\5> \2\u0142"+
		"\u0143\7\'\2\2\u0143\u0144\5\6\4\2\u0144\u0146\3\2\2\2\u0145\u013d\3\2"+
		"\2\2\u0145\u0140\3\2\2\2\u0146A\3\2\2\2\u0147\u014d\5D#\2\u0148\u0149"+
		"\5D#\2\u0149\u014a\7&\2\2\u014a\u014b\5B\"\2\u014b\u014d\3\2\2\2\u014c"+
		"\u0147\3\2\2\2\u014c\u0148\3\2\2\2\u014dC\3\2\2\2\u014e\u014f\5\n\6\2"+
		"\u014f\u0153\7+\2\2\u0150\u0152\n\b\2\2\u0151\u0150\3\2\2\2\u0152\u0155"+
		"\3\2\2\2\u0153\u0151\3\2\2\2\u0153\u0154\3\2\2\2\u0154\u0156\3\2\2\2\u0155"+
		"\u0153\3\2\2\2\u0156\u0157\7$\2\2\u0157E\3\2\2\2\u0158\u015a\5p9\2\u0159"+
		"\u0158\3\2\2\2\u0159\u015a\3\2\2\2\u015a\u015c\3\2\2\2\u015b\u015d\7\17"+
		"\2\2\u015c\u015b\3\2\2\2\u015c\u015d\3\2\2\2\u015d\u015f\3\2\2\2\u015e"+
		"\u0160\5\22\n\2\u015f\u015e\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161\3"+
		"\2\2\2\u0161\u0163\5\n\6\2\u0162\u0164\5H%\2\u0163\u0162\3\2\2\2\u0163"+
		"\u0164\3\2\2\2\u0164\u0165\3\2\2\2\u0165\u0166\7\60\2\2\u0166G\3\2\2\2"+
		"\u0167\u0168\7%\2\2\u0168\u016c\5\b\5\2\u0169\u016a\7\'\2\2\u016a\u016c"+
		"\5\b\5\2\u016b\u0167\3\2\2\2\u016b\u0169\3\2\2\2\u016cI\3\2\2\2\u016d"+
		"\u016e\5L\'\2\u016e\u016f\7*\2\2\u016f\u0171\5N(\2\u0170\u0172\7&\2\2"+
		"\u0171\u0170\3\2\2\2\u0171\u0172\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0175"+
		"\7#\2\2\u0174\u0176\7\60\2\2\u0175\u0174\3\2\2\2\u0175\u0176\3\2\2\2\u0176"+
		"K\3\2\2\2\u0177\u0179\5f\64\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2"+
		"\u0179\u017a\3\2\2\2\u017a\u017c\7\5\2\2\u017b\u017d\7\3\2\2\u017c\u017b"+
		"\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u018b\5\n\6\2\u017f"+
		"\u0181\5f\64\2\u0180\u017f\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0182\3\2"+
		"\2\2\u0182\u0184\7\5\2\2\u0183\u0185\7\3\2\2\u0184\u0183\3\2\2\2\u0184"+
		"\u0185\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0187\5\n\6\2\u0187\u0188\7%"+
		"\2\2\u0188\u0189\5\22\n\2\u0189\u018b\3\2\2\2\u018a\u0178\3\2\2\2\u018a"+
		"\u0180\3\2\2\2\u018bM\3\2\2\2\u018c\u0192\5P)\2\u018d\u018e\5P)\2\u018e"+
		"\u018f\7&\2\2\u018f\u0190\5N(\2\u0190\u0192\3\2\2\2\u0191\u018c\3\2\2"+
		"\2\u0191\u018d\3\2\2\2\u0192O\3\2\2\2\u0193\u0195\5\n\6\2\u0194\u0196"+
		"\5R*\2\u0195\u0194\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0198\3\2\2\2\u0197"+
		"\u0199\5l\67\2\u0198\u0197\3\2\2\2\u0198\u0199\3\2\2\2\u0199Q\3\2\2\2"+
		"\u019a\u019b\7\'\2\2\u019b\u019c\5\b\5\2\u019cS\3\2\2\2\u019d\u019f\5"+
		"b\62\2\u019e\u019d\3\2\2\2\u019f\u01a2\3\2\2\2\u01a0\u019e\3\2\2\2\u01a0"+
		"\u01a1\3\2\2\2\u01a1\u01a4\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a3\u01a5\5\22"+
		"\n\2\u01a4\u01a3\3\2\2\2\u01a4\u01a5\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6"+
		"\u01a7\5\n\6\2\u01a7\u01a8\5Z.\2\u01a8\u01aa\5^\60\2\u01a9\u01ab\7\60"+
		"\2\2\u01aa\u01a9\3\2\2\2\u01aa\u01ab\3\2\2\2\u01abU\3\2\2\2\u01ac\u01ad"+
		"\5\n\6\2\u01ad\u01ae\5Z.\2\u01ae\u01af\7\60\2\2\u01afW\3\2\2\2\u01b0\u01b1"+
		"\7\22\2\2\u01b1\u01b2\5\22\n\2\u01b2\u01b3\5\n\6\2\u01b3\u01b4\7\60\2"+
		"\2\u01b4\u01ba\3\2\2\2\u01b5\u01b6\7\3\2\2\u01b6\u01b7\5\n\6\2\u01b7\u01b8"+
		"\7\60\2\2\u01b8\u01ba\3\2\2\2\u01b9\u01b0\3\2\2\2\u01b9\u01b5\3\2\2\2"+
		"\u01baY\3\2\2\2\u01bb\u01bf\7+\2\2\u01bc\u01be\5\\/\2\u01bd\u01bc\3\2"+
		"\2\2\u01be\u01c1\3\2\2\2\u01bf\u01bd\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0"+
		"\u01c2\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c2\u01c3\7$\2\2\u01c3[\3\2\2\2\u01c4"+
		"\u01c7\13\2\2\2\u01c5\u01c7\5Z.\2\u01c6\u01c4\3\2\2\2\u01c6\u01c5\3\2"+
		"\2\2\u01c7]\3\2\2\2\u01c8\u01cc\7*\2\2\u01c9\u01cb\5`\61\2\u01ca\u01c9"+
		"\3\2\2\2\u01cb\u01ce\3\2\2\2\u01cc\u01ca\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd"+
		"\u01cf\3\2\2\2\u01ce\u01cc\3\2\2\2\u01cf\u01d0\7#\2\2\u01d0_\3\2\2\2\u01d1"+
		"\u01d4\13\2\2\2\u01d2\u01d4\5^\60\2\u01d3\u01d1\3\2\2\2\u01d3\u01d2\3"+
		"\2\2\2\u01d4a\3\2\2\2\u01d5\u01d6\t\t\2\2\u01d6c\3\2\2\2\u01d7\u01d8\7"+
		"\24\2\2\u01d8\u01d9\5x=\2\u01d9e\3\2\2\2\u01da\u01db\7\25\2\2\u01db\u01dc"+
		"\5x=\2\u01dcg\3\2\2\2\u01dd\u01de\7\26\2\2\u01de\u01df\5x=\2\u01dfi\3"+
		"\2\2\2\u01e0\u01e1\7\27\2\2\u01e1\u01e2\5x=\2\u01e2k\3\2\2\2\u01e3\u01e4"+
		"\7\30\2\2\u01e4\u01e5\5x=\2\u01e5m\3\2\2\2\u01e6\u01e7\7\31\2\2\u01e7"+
		"\u01e8\5x=\2\u01e8o\3\2\2\2\u01e9\u01ea\7\32\2\2\u01ea\u01eb\5x=\2\u01eb"+
		"q\3\2\2\2\u01ec\u01ed\7\33\2\2\u01ed\u01ee\5x=\2\u01ees\3\2\2\2\u01ef"+
		"\u01f0\7\34\2\2\u01f0\u01f1\5x=\2\u01f1u\3\2\2\2\u01f2\u01f3\7\36\2\2"+
		"\u01f3\u01f4\5x=\2\u01f4w\3\2\2\2\u01f5\u01f7\7+\2\2\u01f6\u01f8\5z>\2"+
		"\u01f7\u01f6\3\2\2\2\u01f7\u01f8\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fa"+
		"\7$\2\2\u01fay\3\2\2\2\u01fb\u0202\5|?\2\u01fc\u01fd\5|?\2\u01fd\u01ff"+
		"\7&\2\2\u01fe\u0200\5z>\2\u01ff\u01fe\3\2\2\2\u01ff\u0200\3\2\2\2\u0200"+
		"\u0202\3\2\2\2\u0201\u01fb\3\2\2\2\u0201\u01fc\3\2\2\2\u0202{\3\2\2\2"+
		"\u0203\u0208\5\n\6\2\u0204\u0208\5\b\5\2\u0205\u0208\5~@\2\u0206\u0208"+
		"\5x=\2\u0207\u0203\3\2\2\2\u0207\u0204\3\2\2\2\u0207\u0205\3\2\2\2\u0207"+
		"\u0206\3\2\2\2\u0208}\3\2\2\2\u0209\u020a\5\n\6\2\u020a\u020b\7\'\2\2"+
		"\u020b\u020c\5|?\2\u020c\177\3\2\2\2?\u0083\u008b\u008f\u0094\u009b\u00a6"+
		"\u00ab\u00ae\u00b9\u00c1\u00ca\u00cd\u00d1\u00d5\u00da\u00e6\u00ec\u00ef"+
		"\u00f3\u00f9\u0102\u0108\u010b\u0110\u0114\u0119\u011f\u0127\u012d\u012f"+
		"\u0139\u0145\u014c\u0153\u0159\u015c\u015f\u0163\u016b\u0171\u0175\u0178"+
		"\u017c\u0180\u0184\u018a\u0191\u0195\u0198\u01a0\u01a4\u01aa\u01b9\u01bf"+
		"\u01c6\u01cc\u01d3\u01f7\u01ff\u0201\u0207";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}