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
		CLASS=1, CONST=2, ENUM=3, FALSE=4, FRIEND=5, OVERRIDE=6, PRIVATE=7, PROTECTED=8, 
		PUBLIC=9, STATIC=10, STRUCT=11, TRUE=12, TYPEDEF=13, VIRTUAL=14, UCLASS=15, 
		UENUM=16, UFUNCTION=17, UINTERFACE=18, UMETA=19, UPARAM=20, UPROPERTY=21, 
		USTRUCT=22, FORCEINLINE=23, SF_CLASS_TAG=24, SF_GENERATED_BODY=25, COLON=26, 
		OPEN_PAREN=27, CLOSE_PAREN=28, OPEN_BRACE=29, CLOSE_BRACE=30, OPEN_ANGLE=31, 
		CLOSE_ANGLE=32, COMMA=33, PERIOD=34, EQUALS=35, SEMICOLON=36, STAR=37, 
		AMPERSAND=38, HYPHEN=39, PIPE=40, BANG=41, IDENTIFIER=42, STRING_LITERAL=43, 
		FLOAT_LITERAL=44, INTEGER_LITERAL=45, PREPROCESSOR=46, LINE_COMMENT_START=47, 
		BLOCK_COMMENT_START=48, WHITESPACE=49, LINE_COMMENT_END=50, LINE_COMMENT_TEXT=51, 
		LINE_COMMENT_OTHER=52, BLOCK_COMMENT_END=53, BLOCK_COMMENT_NEW_LINE=54, 
		BLOCK_COMMENT_TEXT=55, BLOCK_COMMENT_OTHER=56;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_booleanLiteral = 7, 
		RULE_typeDeclaration = 8, RULE_templateType = 9, RULE_templateTypeList = 10, 
		RULE_typeModifier = 11, RULE_typeReferenceType = 12, RULE_classDeclaration = 13, 
		RULE_classHeader = 14, RULE_classMacro = 15, RULE_classKeyword = 16, RULE_classInheritance = 17, 
		RULE_classExtensionList = 18, RULE_classExtension = 19, RULE_classBody = 20, 
		RULE_classEntries = 21, RULE_classEntry = 22, RULE_classVisibility = 23, 
		RULE_classVisibilityModifier = 24, RULE_friendDeclaration = 25, RULE_classMethod = 26, 
		RULE_classMethodEnd = 27, RULE_classMethodModifier = 28, RULE_classMethodResultModifier = 29, 
		RULE_classMethodParameterList = 30, RULE_classMethodParameterName = 31, 
		RULE_classMethodParameter = 32, RULE_classMethodBody = 33, RULE_classMethodCallList = 34, 
		RULE_classMethodCall = 35, RULE_classProperty = 36, RULE_classPropertyDefaultValue = 37, 
		RULE_enumDeclaration = 38, RULE_enumHeader = 39, RULE_enumBody = 40, RULE_enumEntry = 41, 
		RULE_staticMethodCall = 42, RULE_typedef = 43, RULE_uclassMacro = 44, 
		RULE_uenumMacro = 45, RULE_ufunctionMacro = 46, RULE_uinterfaceMacro = 47, 
		RULE_umetaMacro = 48, RULE_uParamMacro = 49, RULE_upropertyMacro = 50, 
		RULE_ustructMacro = 51, RULE_generatedBodyMacro = 52, RULE_macroPropertyList = 53, 
		RULE_macroPropertyListEntries = 54, RULE_macroProperty = 55, RULE_macroPropertyPair = 56;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"templateTypeList", "typeModifier", "typeReferenceType", "classDeclaration", 
		"classHeader", "classMacro", "classKeyword", "classInheritance", "classExtensionList", 
		"classExtension", "classBody", "classEntries", "classEntry", "classVisibility", 
		"classVisibilityModifier", "friendDeclaration", "classMethod", "classMethodEnd", 
		"classMethodModifier", "classMethodResultModifier", "classMethodParameterList", 
		"classMethodParameterName", "classMethodParameter", "classMethodBody", 
		"classMethodCallList", "classMethodCall", "classProperty", "classPropertyDefaultValue", 
		"enumDeclaration", "enumHeader", "enumBody", "enumEntry", "staticMethodCall", 
		"typedef", "uclassMacro", "uenumMacro", "ufunctionMacro", "uinterfaceMacro", 
		"umetaMacro", "uParamMacro", "upropertyMacro", "ustructMacro", "generatedBodyMacro", 
		"macroPropertyList", "macroPropertyListEntries", "macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'true'", 
		"'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", 
		"'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'FORCEINLINE'", "'FACTORYGAME_API'", 
		null, "':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", 
		"';'", "'*'", "'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TRUE", "TYPEDEF", "VIRTUAL", 
		"UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", 
		"USTRUCT", "FORCEINLINE", "SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", 
		"CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", 
		"HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
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
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << ENUM) | (1L << STRUCT) | (1L << TYPEDEF) | (1L << UCLASS) | (1L << UENUM) | (1L << UINTERFACE) | (1L << USTRUCT) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(114);
				element();
				}
				}
				setState(119);
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
			setState(124);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case STRUCT:
			case UCLASS:
			case UINTERFACE:
			case USTRUCT:
				enterOuterAlt(_localctx, 1);
				{
				setState(120);
				classDeclaration();
				}
				break;
			case ENUM:
			case UENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				enumDeclaration();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 3);
				{
				setState(122);
				staticMethodCall();
				}
				break;
			case TYPEDEF:
				enterOuterAlt(_localctx, 4);
				{
				setState(123);
				typedef();
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
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
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
				setState(127);
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
			setState(133);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(130);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(131);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(132);
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
			setState(140);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(135);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(136);
				match(IDENTIFIER);
				setState(137);
				match(COLON);
				setState(138);
				match(COLON);
				setState(139);
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
			setState(142);
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
			setState(144);
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
			setState(146);
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
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(148);
				typeModifier();
				}
				}
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(154);
			identifier();
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(155);
				templateType();
				}
			}

			setState(159);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STAR || _la==AMPERSAND) {
				{
				setState(158);
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
			setState(161);
			match(OPEN_ANGLE);
			setState(162);
			templateTypeList();
			setState(163);
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
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(165);
				typeDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(166);
				typeDeclaration();
				setState(167);
				match(COMMA);
				setState(168);
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
			setState(175);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(173);
				match(CONST);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 3);
				{
				setState(174);
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
			setState(177);
			_la = _input.LA(1);
			if ( !(_la==STAR || _la==AMPERSAND) ) {
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
			setState(179);
			classHeader();
			setState(180);
			match(OPEN_BRACE);
			setState(181);
			classBody();
			setState(182);
			match(CLOSE_BRACE);
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(183);
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
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << UCLASS) | (1L << UINTERFACE) | (1L << USTRUCT))) != 0)) {
				{
				setState(186);
				classMacro();
				}
			}

			setState(189);
			classKeyword();
			setState(191);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(190);
				match(SF_CLASS_TAG);
				}
			}

			setState(193);
			identifier();
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(194);
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
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				uclassMacro();
				}
				break;
			case UINTERFACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
				uinterfaceMacro();
				}
				break;
			case USTRUCT:
				enterOuterAlt(_localctx, 3);
				{
				setState(199);
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
			setState(202);
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
			setState(204);
			match(COLON);
			setState(205);
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
			setState(212);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(207);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(208);
				classExtension();
				setState(209);
				match(COMMA);
				setState(210);
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
			setState(214);
			classVisibilityModifier();
			setState(215);
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
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(217);
				generatedBodyMacro();
				}
			}

			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(220);
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
			setState(223);
			classEntry();
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(224);
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
			setState(231);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(227);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(228);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(229);
				friendDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(230);
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
			setState(233);
			classVisibilityModifier();
			setState(234);
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
			setState(236);
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
			setState(238);
			match(FRIEND);
			setState(240);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CLASS) {
				{
				setState(239);
				match(CLASS);
				}
			}

			setState(242);
			identifier();
			setState(243);
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
		public UfunctionMacroContext ufunctionMacro() {
			return getRuleContext(UfunctionMacroContext.class,0);
		}
		public List<ClassMethodModifierContext> classMethodModifier() {
			return getRuleContexts(ClassMethodModifierContext.class);
		}
		public ClassMethodModifierContext classMethodModifier(int i) {
			return getRuleContext(ClassMethodModifierContext.class,i);
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
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(245);
				ufunctionMacro();
				}
			}

			setState(251);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(248);
					classMethodModifier();
					}
					} 
				}
				setState(253);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			}
			setState(255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(254);
				typeDeclaration();
				}
				break;
			}
			setState(257);
			identifier();
			setState(258);
			match(OPEN_PAREN);
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << UPARAM) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(259);
				classMethodParameterList();
				}
			}

			setState(262);
			match(CLOSE_PAREN);
			setState(266);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CONST || _la==OVERRIDE) {
				{
				{
				setState(263);
				classMethodResultModifier();
				}
				}
				setState(268);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(269);
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
		public ClassMethodBodyContext classMethodBody() {
			return getRuleContext(ClassMethodBodyContext.class,0);
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
			setState(282);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(271);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(272);
				classMethodBody();
				setState(274);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(273);
					match(SEMICOLON);
					}
				}

				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 3);
				{
				setState(276);
				match(COLON);
				setState(277);
				classMethodCallList();
				setState(278);
				classMethodBody();
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(279);
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

	public static class ClassMethodModifierContext extends ParserRuleContext {
		public TerminalNode STATIC() { return getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public TerminalNode VIRTUAL() { return getToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
		public TerminalNode FORCEINLINE() { return getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
		public ClassMethodModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodModifier; }
	}

	public final ClassMethodModifierContext classMethodModifier() throws RecognitionException {
		ClassMethodModifierContext _localctx = new ClassMethodModifierContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_classMethodModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << STATIC) | (1L << VIRTUAL) | (1L << FORCEINLINE))) != 0)) ) {
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
			setState(286);
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
		enterRule(_localctx, 60, RULE_classMethodParameterList);
		try {
			setState(294);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(288);
				classMethodParameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(289);
				classMethodParameter();
				setState(290);
				match(COMMA);
				setState(291);
				classMethodParameterList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(293);
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
		enterRule(_localctx, 62, RULE_classMethodParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
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
		enterRule(_localctx, 64, RULE_classMethodParameter);
		try {
			setState(306);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(298);
				typeDeclaration();
				setState(299);
				classMethodParameterName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(301);
				typeDeclaration();
				setState(302);
				classMethodParameterName();
				setState(303);
				match(EQUALS);
				setState(304);
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

	public static class ClassMethodBodyContext extends ParserRuleContext {
		public List<TerminalNode> OPEN_BRACE() { return getTokens(SatisfactoryHeaderParserParser.OPEN_BRACE); }
		public TerminalNode OPEN_BRACE(int i) {
			return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, i);
		}
		public List<TerminalNode> CLOSE_BRACE() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_BRACE); }
		public TerminalNode CLOSE_BRACE(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, i);
		}
		public ClassMethodBodyContext classMethodBody() {
			return getRuleContext(ClassMethodBodyContext.class,0);
		}
		public ClassMethodBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodBody; }
	}

	public final ClassMethodBodyContext classMethodBody() throws RecognitionException {
		ClassMethodBodyContext _localctx = new ClassMethodBodyContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_classMethodBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			match(OPEN_BRACE);
			setState(310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_BRACE) {
				{
				setState(309);
				classMethodBody();
				}
			}

			setState(315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FRIEND) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << FORCEINLINE) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << COLON) | (1L << OPEN_PAREN) | (1L << CLOSE_PAREN) | (1L << OPEN_ANGLE) | (1L << CLOSE_ANGLE) | (1L << COMMA) | (1L << PERIOD) | (1L << EQUALS) | (1L << SEMICOLON) | (1L << STAR) | (1L << AMPERSAND) | (1L << HYPHEN) | (1L << PIPE) | (1L << BANG) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0)) {
				{
				{
				setState(312);
				_la = _input.LA(1);
				if ( _la <= 0 || (_la==OPEN_BRACE || _la==CLOSE_BRACE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(317);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(318);
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
		enterRule(_localctx, 68, RULE_classMethodCallList);
		try {
			setState(325);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(320);
				classMethodCall();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(321);
				classMethodCall();
				setState(322);
				match(COMMA);
				setState(323);
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
		enterRule(_localctx, 70, RULE_classMethodCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(327);
			identifier();
			setState(328);
			match(OPEN_PAREN);
			setState(332);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FRIEND) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << FORCEINLINE) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << COLON) | (1L << OPEN_PAREN) | (1L << OPEN_BRACE) | (1L << CLOSE_BRACE) | (1L << OPEN_ANGLE) | (1L << CLOSE_ANGLE) | (1L << COMMA) | (1L << PERIOD) | (1L << EQUALS) | (1L << SEMICOLON) | (1L << STAR) | (1L << AMPERSAND) | (1L << HYPHEN) | (1L << PIPE) | (1L << BANG) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0)) {
				{
				{
				setState(329);
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
				setState(334);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(335);
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
		enterRule(_localctx, 72, RULE_classProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(337);
				upropertyMacro();
				}
			}

			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(340);
				match(STATIC);
				}
			}

			setState(344);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				{
				setState(343);
				typeDeclaration();
				}
				break;
			}
			setState(346);
			identifier();
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(347);
				classPropertyDefaultValue();
				}
			}

			setState(350);
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
		public ClassPropertyDefaultValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPropertyDefaultValue; }
	}

	public final ClassPropertyDefaultValueContext classPropertyDefaultValue() throws RecognitionException {
		ClassPropertyDefaultValueContext _localctx = new ClassPropertyDefaultValueContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_classPropertyDefaultValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(COLON);
			setState(353);
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

	public static class EnumDeclarationContext extends ParserRuleContext {
		public EnumHeaderContext enumHeader() {
			return getRuleContext(EnumHeaderContext.class,0);
		}
		public TerminalNode OPEN_BRACE() { return getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
		public EnumBodyContext enumBody() {
			return getRuleContext(EnumBodyContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			enumHeader();
			setState(356);
			match(OPEN_BRACE);
			setState(357);
			enumBody();
			setState(358);
			match(CLOSE_BRACE);
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(359);
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
		enterRule(_localctx, 78, RULE_enumHeader);
		int _la;
		try {
			setState(381);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(363);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(362);
					uenumMacro();
					}
				}

				setState(365);
				match(ENUM);
				setState(367);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(366);
					match(CLASS);
					}
				}

				setState(369);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(370);
					uenumMacro();
					}
				}

				setState(373);
				match(ENUM);
				setState(375);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(374);
					match(CLASS);
					}
				}

				setState(377);
				identifier();
				setState(378);
				match(COLON);
				setState(379);
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
		enterRule(_localctx, 80, RULE_enumBody);
		try {
			setState(388);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(383);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(384);
				enumEntry();
				setState(385);
				match(COMMA);
				setState(386);
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
		enterRule(_localctx, 82, RULE_enumEntry);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			identifier();
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UMETA) {
				{
				setState(391);
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

	public static class StaticMethodCallContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OPEN_PAREN() { return getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
		public List<TerminalNode> CLOSE_PAREN() { return getTokens(SatisfactoryHeaderParserParser.CLOSE_PAREN); }
		public TerminalNode CLOSE_PAREN(int i) {
			return getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, i);
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
			identifier();
			setState(395);
			match(OPEN_PAREN);
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FRIEND) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << STRUCT) | (1L << TRUE) | (1L << TYPEDEF) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UINTERFACE) | (1L << UMETA) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << USTRUCT) | (1L << FORCEINLINE) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << COLON) | (1L << OPEN_PAREN) | (1L << OPEN_BRACE) | (1L << CLOSE_BRACE) | (1L << OPEN_ANGLE) | (1L << CLOSE_ANGLE) | (1L << COMMA) | (1L << PERIOD) | (1L << EQUALS) | (1L << SEMICOLON) | (1L << STAR) | (1L << AMPERSAND) | (1L << HYPHEN) | (1L << PIPE) | (1L << BANG) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0)) {
				{
				{
				setState(396);
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
				setState(401);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(402);
			match(CLOSE_PAREN);
			setState(403);
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
		public TypedefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedef; }
	}

	public final TypedefContext typedef() throws RecognitionException {
		TypedefContext _localctx = new TypedefContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_typedef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			match(TYPEDEF);
			setState(406);
			typeDeclaration();
			setState(407);
			identifier();
			setState(408);
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
		enterRule(_localctx, 88, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
			match(UCLASS);
			setState(411);
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
		enterRule(_localctx, 90, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(UENUM);
			setState(414);
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
		enterRule(_localctx, 92, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
			match(UFUNCTION);
			setState(417);
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
		enterRule(_localctx, 94, RULE_uinterfaceMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			match(UINTERFACE);
			setState(420);
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
		enterRule(_localctx, 96, RULE_umetaMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(UMETA);
			setState(423);
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
		enterRule(_localctx, 98, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			match(UPARAM);
			setState(426);
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
		enterRule(_localctx, 100, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(UPROPERTY);
			setState(429);
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
		enterRule(_localctx, 102, RULE_ustructMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(431);
			match(USTRUCT);
			setState(432);
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
		enterRule(_localctx, 104, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			match(SF_GENERATED_BODY);
			setState(435);
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
		enterRule(_localctx, 106, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
			match(OPEN_PAREN);
			setState(439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(438);
				macroPropertyListEntries();
				}
			}

			setState(441);
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
		enterRule(_localctx, 108, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(449);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(443);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(444);
				macroProperty();
				setState(445);
				match(COMMA);
				setState(447);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(446);
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
		enterRule(_localctx, 110, RULE_macroProperty);
		try {
			setState(455);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(451);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(452);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(453);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(454);
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
		enterRule(_localctx, 112, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			identifier();
			setState(458);
			match(EQUALS);
			setState(459);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3:\u01d0\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\3\2\7\2v\n\2\f\2\16"+
		"\2y\13\2\3\3\3\3\3\3\3\3\5\3\177\n\3\3\4\3\4\5\4\u0083\n\4\3\5\3\5\3\5"+
		"\5\5\u0088\n\5\3\6\3\6\3\6\3\6\3\6\5\6\u008f\n\6\3\7\3\7\3\b\3\b\3\t\3"+
		"\t\3\n\7\n\u0098\n\n\f\n\16\n\u009b\13\n\3\n\3\n\5\n\u009f\n\n\3\n\5\n"+
		"\u00a2\n\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\5\f\u00ad\n\f\3\r\3"+
		"\r\3\r\5\r\u00b2\n\r\3\16\3\16\3\17\3\17\3\17\3\17\3\17\5\17\u00bb\n\17"+
		"\3\20\5\20\u00be\n\20\3\20\3\20\5\20\u00c2\n\20\3\20\3\20\5\20\u00c6\n"+
		"\20\3\21\3\21\3\21\5\21\u00cb\n\21\3\22\3\22\3\23\3\23\3\23\3\24\3\24"+
		"\3\24\3\24\3\24\5\24\u00d7\n\24\3\25\3\25\3\25\3\26\5\26\u00dd\n\26\3"+
		"\26\5\26\u00e0\n\26\3\27\3\27\5\27\u00e4\n\27\3\30\3\30\3\30\3\30\5\30"+
		"\u00ea\n\30\3\31\3\31\3\31\3\32\3\32\3\33\3\33\5\33\u00f3\n\33\3\33\3"+
		"\33\3\33\3\34\5\34\u00f9\n\34\3\34\7\34\u00fc\n\34\f\34\16\34\u00ff\13"+
		"\34\3\34\5\34\u0102\n\34\3\34\3\34\3\34\5\34\u0107\n\34\3\34\3\34\7\34"+
		"\u010b\n\34\f\34\16\34\u010e\13\34\3\34\3\34\3\35\3\35\3\35\5\35\u0115"+
		"\n\35\3\35\3\35\3\35\3\35\5\35\u011b\n\35\5\35\u011d\n\35\3\36\3\36\3"+
		"\37\3\37\3 \3 \3 \3 \3 \3 \5 \u0129\n \3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3"+
		"\"\3\"\5\"\u0135\n\"\3#\3#\5#\u0139\n#\3#\7#\u013c\n#\f#\16#\u013f\13"+
		"#\3#\3#\3$\3$\3$\3$\3$\5$\u0148\n$\3%\3%\3%\7%\u014d\n%\f%\16%\u0150\13"+
		"%\3%\3%\3&\5&\u0155\n&\3&\5&\u0158\n&\3&\5&\u015b\n&\3&\3&\5&\u015f\n"+
		"&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3(\3(\5(\u016b\n(\3)\5)\u016e\n)\3)\3)\5"+
		")\u0172\n)\3)\3)\5)\u0176\n)\3)\3)\5)\u017a\n)\3)\3)\3)\3)\5)\u0180\n"+
		")\3*\3*\3*\3*\3*\5*\u0187\n*\3+\3+\5+\u018b\n+\3,\3,\3,\7,\u0190\n,\f"+
		",\16,\u0193\13,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3.\3/\3/\3/\3\60\3\60\3"+
		"\60\3\61\3\61\3\61\3\62\3\62\3\62\3\63\3\63\3\63\3\64\3\64\3\64\3\65\3"+
		"\65\3\65\3\66\3\66\3\66\3\67\3\67\5\67\u01ba\n\67\3\67\3\67\38\38\38\3"+
		"8\58\u01c2\n8\58\u01c4\n8\39\39\39\39\59\u01ca\n9\3:\3:\3:\3:\3:\2\2;"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFH"+
		"JLNPRTVXZ\\^`bdfhjlnpr\2\13\3\2./\4\2\6\6\16\16\3\2\'(\4\2\3\3\r\r\3\2"+
		"\t\13\6\2\4\4\f\f\20\20\31\31\4\2\4\4\b\b\3\2\37 \3\2\36\36\2\u01d5\2"+
		"w\3\2\2\2\4~\3\2\2\2\6\u0082\3\2\2\2\b\u0087\3\2\2\2\n\u008e\3\2\2\2\f"+
		"\u0090\3\2\2\2\16\u0092\3\2\2\2\20\u0094\3\2\2\2\22\u0099\3\2\2\2\24\u00a3"+
		"\3\2\2\2\26\u00ac\3\2\2\2\30\u00b1\3\2\2\2\32\u00b3\3\2\2\2\34\u00b5\3"+
		"\2\2\2\36\u00bd\3\2\2\2 \u00ca\3\2\2\2\"\u00cc\3\2\2\2$\u00ce\3\2\2\2"+
		"&\u00d6\3\2\2\2(\u00d8\3\2\2\2*\u00dc\3\2\2\2,\u00e1\3\2\2\2.\u00e9\3"+
		"\2\2\2\60\u00eb\3\2\2\2\62\u00ee\3\2\2\2\64\u00f0\3\2\2\2\66\u00f8\3\2"+
		"\2\28\u011c\3\2\2\2:\u011e\3\2\2\2<\u0120\3\2\2\2>\u0128\3\2\2\2@\u012a"+
		"\3\2\2\2B\u0134\3\2\2\2D\u0136\3\2\2\2F\u0147\3\2\2\2H\u0149\3\2\2\2J"+
		"\u0154\3\2\2\2L\u0162\3\2\2\2N\u0165\3\2\2\2P\u017f\3\2\2\2R\u0186\3\2"+
		"\2\2T\u0188\3\2\2\2V\u018c\3\2\2\2X\u0197\3\2\2\2Z\u019c\3\2\2\2\\\u019f"+
		"\3\2\2\2^\u01a2\3\2\2\2`\u01a5\3\2\2\2b\u01a8\3\2\2\2d\u01ab\3\2\2\2f"+
		"\u01ae\3\2\2\2h\u01b1\3\2\2\2j\u01b4\3\2\2\2l\u01b7\3\2\2\2n\u01c3\3\2"+
		"\2\2p\u01c9\3\2\2\2r\u01cb\3\2\2\2tv\5\4\3\2ut\3\2\2\2vy\3\2\2\2wu\3\2"+
		"\2\2wx\3\2\2\2x\3\3\2\2\2yw\3\2\2\2z\177\5\34\17\2{\177\5N(\2|\177\5V"+
		",\2}\177\5X-\2~z\3\2\2\2~{\3\2\2\2~|\3\2\2\2~}\3\2\2\2\177\5\3\2\2\2\u0080"+
		"\u0083\5\n\6\2\u0081\u0083\5\b\5\2\u0082\u0080\3\2\2\2\u0082\u0081\3\2"+
		"\2\2\u0083\7\3\2\2\2\u0084\u0088\5\f\7\2\u0085\u0088\5\16\b\2\u0086\u0088"+
		"\5\20\t\2\u0087\u0084\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0086\3\2\2\2"+
		"\u0088\t\3\2\2\2\u0089\u008f\7,\2\2\u008a\u008b\7,\2\2\u008b\u008c\7\34"+
		"\2\2\u008c\u008d\7\34\2\2\u008d\u008f\7,\2\2\u008e\u0089\3\2\2\2\u008e"+
		"\u008a\3\2\2\2\u008f\13\3\2\2\2\u0090\u0091\7-\2\2\u0091\r\3\2\2\2\u0092"+
		"\u0093\t\2\2\2\u0093\17\3\2\2\2\u0094\u0095\t\3\2\2\u0095\21\3\2\2\2\u0096"+
		"\u0098\5\30\r\2\u0097\u0096\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u0097\3"+
		"\2\2\2\u0099\u009a\3\2\2\2\u009a\u009c\3\2\2\2\u009b\u0099\3\2\2\2\u009c"+
		"\u009e\5\n\6\2\u009d\u009f\5\24\13\2\u009e\u009d\3\2\2\2\u009e\u009f\3"+
		"\2\2\2\u009f\u00a1\3\2\2\2\u00a0\u00a2\5\32\16\2\u00a1\u00a0\3\2\2\2\u00a1"+
		"\u00a2\3\2\2\2\u00a2\23\3\2\2\2\u00a3\u00a4\7!\2\2\u00a4\u00a5\5\26\f"+
		"\2\u00a5\u00a6\7\"\2\2\u00a6\25\3\2\2\2\u00a7\u00ad\5\22\n\2\u00a8\u00a9"+
		"\5\22\n\2\u00a9\u00aa\7#\2\2\u00aa\u00ab\5\26\f\2\u00ab\u00ad\3\2\2\2"+
		"\u00ac\u00a7\3\2\2\2\u00ac\u00a8\3\2\2\2\u00ad\27\3\2\2\2\u00ae\u00b2"+
		"\7\3\2\2\u00af\u00b2\7\4\2\2\u00b0\u00b2\5d\63\2\u00b1\u00ae\3\2\2\2\u00b1"+
		"\u00af\3\2\2\2\u00b1\u00b0\3\2\2\2\u00b2\31\3\2\2\2\u00b3\u00b4\t\4\2"+
		"\2\u00b4\33\3\2\2\2\u00b5\u00b6\5\36\20\2\u00b6\u00b7\7\37\2\2\u00b7\u00b8"+
		"\5*\26\2\u00b8\u00ba\7 \2\2\u00b9\u00bb\7&\2\2\u00ba\u00b9\3\2\2\2\u00ba"+
		"\u00bb\3\2\2\2\u00bb\35\3\2\2\2\u00bc\u00be\5 \21\2\u00bd\u00bc\3\2\2"+
		"\2\u00bd\u00be\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c1\5\"\22\2\u00c0"+
		"\u00c2\7\32\2\2\u00c1\u00c0\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c3\3"+
		"\2\2\2\u00c3\u00c5\5\n\6\2\u00c4\u00c6\5$\23\2\u00c5\u00c4\3\2\2\2\u00c5"+
		"\u00c6\3\2\2\2\u00c6\37\3\2\2\2\u00c7\u00cb\5Z.\2\u00c8\u00cb\5`\61\2"+
		"\u00c9\u00cb\5h\65\2\u00ca\u00c7\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00c9"+
		"\3\2\2\2\u00cb!\3\2\2\2\u00cc\u00cd\t\5\2\2\u00cd#\3\2\2\2\u00ce\u00cf"+
		"\7\34\2\2\u00cf\u00d0\5&\24\2\u00d0%\3\2\2\2\u00d1\u00d7\5(\25\2\u00d2"+
		"\u00d3\5(\25\2\u00d3\u00d4\7#\2\2\u00d4\u00d5\5&\24\2\u00d5\u00d7\3\2"+
		"\2\2\u00d6\u00d1\3\2\2\2\u00d6\u00d2\3\2\2\2\u00d7\'\3\2\2\2\u00d8\u00d9"+
		"\5\62\32\2\u00d9\u00da\5\n\6\2\u00da)\3\2\2\2\u00db\u00dd\5j\66\2\u00dc"+
		"\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00df\3\2\2\2\u00de\u00e0\5,"+
		"\27\2\u00df\u00de\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0+\3\2\2\2\u00e1\u00e3"+
		"\5.\30\2\u00e2\u00e4\5,\27\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4"+
		"-\3\2\2\2\u00e5\u00ea\5\60\31\2\u00e6\u00ea\5\66\34\2\u00e7\u00ea\5\64"+
		"\33\2\u00e8\u00ea\5J&\2\u00e9\u00e5\3\2\2\2\u00e9\u00e6\3\2\2\2\u00e9"+
		"\u00e7\3\2\2\2\u00e9\u00e8\3\2\2\2\u00ea/\3\2\2\2\u00eb\u00ec\5\62\32"+
		"\2\u00ec\u00ed\7\34\2\2\u00ed\61\3\2\2\2\u00ee\u00ef\t\6\2\2\u00ef\63"+
		"\3\2\2\2\u00f0\u00f2\7\7\2\2\u00f1\u00f3\7\3\2\2\u00f2\u00f1\3\2\2\2\u00f2"+
		"\u00f3\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f5\5\n\6\2\u00f5\u00f6\7&"+
		"\2\2\u00f6\65\3\2\2\2\u00f7\u00f9\5^\60\2\u00f8\u00f7\3\2\2\2\u00f8\u00f9"+
		"\3\2\2\2\u00f9\u00fd\3\2\2\2\u00fa\u00fc\5:\36\2\u00fb\u00fa\3\2\2\2\u00fc"+
		"\u00ff\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u0101\3\2"+
		"\2\2\u00ff\u00fd\3\2\2\2\u0100\u0102\5\22\n\2\u0101\u0100\3\2\2\2\u0101"+
		"\u0102\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\5\n\6\2\u0104\u0106\7\35"+
		"\2\2\u0105\u0107\5> \2\u0106\u0105\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0108"+
		"\3\2\2\2\u0108\u010c\7\36\2\2\u0109\u010b\5<\37\2\u010a\u0109\3\2\2\2"+
		"\u010b\u010e\3\2\2\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010f"+
		"\3\2\2\2\u010e\u010c\3\2\2\2\u010f\u0110\58\35\2\u0110\67\3\2\2\2\u0111"+
		"\u011d\7&\2\2\u0112\u0114\5D#\2\u0113\u0115\7&\2\2\u0114\u0113\3\2\2\2"+
		"\u0114\u0115\3\2\2\2\u0115\u011d\3\2\2\2\u0116\u0117\7\34\2\2\u0117\u0118"+
		"\5F$\2\u0118\u011a\5D#\2\u0119\u011b\7&\2\2\u011a\u0119\3\2\2\2\u011a"+
		"\u011b\3\2\2\2\u011b\u011d\3\2\2\2\u011c\u0111\3\2\2\2\u011c\u0112\3\2"+
		"\2\2\u011c\u0116\3\2\2\2\u011d9\3\2\2\2\u011e\u011f\t\7\2\2\u011f;\3\2"+
		"\2\2\u0120\u0121\t\b\2\2\u0121=\3\2\2\2\u0122\u0129\5B\"\2\u0123\u0124"+
		"\5B\"\2\u0124\u0125\7#\2\2\u0125\u0126\5> \2\u0126\u0129\3\2\2\2\u0127"+
		"\u0129\5\n\6\2\u0128\u0122\3\2\2\2\u0128\u0123\3\2\2\2\u0128\u0127\3\2"+
		"\2\2\u0129?\3\2\2\2\u012a\u012b\5\n\6\2\u012bA\3\2\2\2\u012c\u012d\5\22"+
		"\n\2\u012d\u012e\5@!\2\u012e\u0135\3\2\2\2\u012f\u0130\5\22\n\2\u0130"+
		"\u0131\5@!\2\u0131\u0132\7%\2\2\u0132\u0133\5\6\4\2\u0133\u0135\3\2\2"+
		"\2\u0134\u012c\3\2\2\2\u0134\u012f\3\2\2\2\u0135C\3\2\2\2\u0136\u0138"+
		"\7\37\2\2\u0137\u0139\5D#\2\u0138\u0137\3\2\2\2\u0138\u0139\3\2\2\2\u0139"+
		"\u013d\3\2\2\2\u013a\u013c\n\t\2\2\u013b\u013a\3\2\2\2\u013c\u013f\3\2"+
		"\2\2\u013d\u013b\3\2\2\2\u013d\u013e\3\2\2\2\u013e\u0140\3\2\2\2\u013f"+
		"\u013d\3\2\2\2\u0140\u0141\7 \2\2\u0141E\3\2\2\2\u0142\u0148\5H%\2\u0143"+
		"\u0144\5H%\2\u0144\u0145\7#\2\2\u0145\u0146\5F$\2\u0146\u0148\3\2\2\2"+
		"\u0147\u0142\3\2\2\2\u0147\u0143\3\2\2\2\u0148G\3\2\2\2\u0149\u014a\5"+
		"\n\6\2\u014a\u014e\7\35\2\2\u014b\u014d\n\n\2\2\u014c\u014b\3\2\2\2\u014d"+
		"\u0150\3\2\2\2\u014e\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\3\2"+
		"\2\2\u0150\u014e\3\2\2\2\u0151\u0152\7\36\2\2\u0152I\3\2\2\2\u0153\u0155"+
		"\5f\64\2\u0154\u0153\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0157\3\2\2\2\u0156"+
		"\u0158\7\f\2\2\u0157\u0156\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u015a\3\2"+
		"\2\2\u0159\u015b\5\22\n\2\u015a\u0159\3\2\2\2\u015a\u015b\3\2\2\2\u015b"+
		"\u015c\3\2\2\2\u015c\u015e\5\n\6\2\u015d\u015f\5L\'\2\u015e\u015d\3\2"+
		"\2\2\u015e\u015f\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161\7&\2\2\u0161"+
		"K\3\2\2\2\u0162\u0163\7\34\2\2\u0163\u0164\5\b\5\2\u0164M\3\2\2\2\u0165"+
		"\u0166\5P)\2\u0166\u0167\7\37\2\2\u0167\u0168\5R*\2\u0168\u016a\7 \2\2"+
		"\u0169\u016b\7&\2\2\u016a\u0169\3\2\2\2\u016a\u016b\3\2\2\2\u016bO\3\2"+
		"\2\2\u016c\u016e\5\\/\2\u016d\u016c\3\2\2\2\u016d\u016e\3\2\2\2\u016e"+
		"\u016f\3\2\2\2\u016f\u0171\7\5\2\2\u0170\u0172\7\3\2\2\u0171\u0170\3\2"+
		"\2\2\u0171\u0172\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0180\5\n\6\2\u0174"+
		"\u0176\5\\/\2\u0175\u0174\3\2\2\2\u0175\u0176\3\2\2\2\u0176\u0177\3\2"+
		"\2\2\u0177\u0179\7\5\2\2\u0178\u017a\7\3\2\2\u0179\u0178\3\2\2\2\u0179"+
		"\u017a\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017c\5\n\6\2\u017c\u017d\7\34"+
		"\2\2\u017d\u017e\5\22\n\2\u017e\u0180\3\2\2\2\u017f\u016d\3\2\2\2\u017f"+
		"\u0175\3\2\2\2\u0180Q\3\2\2\2\u0181\u0187\5T+\2\u0182\u0183\5T+\2\u0183"+
		"\u0184\7#\2\2\u0184\u0185\5R*\2\u0185\u0187\3\2\2\2\u0186\u0181\3\2\2"+
		"\2\u0186\u0182\3\2\2\2\u0187S\3\2\2\2\u0188\u018a\5\n\6\2\u0189\u018b"+
		"\5b\62\2\u018a\u0189\3\2\2\2\u018a\u018b\3\2\2\2\u018bU\3\2\2\2\u018c"+
		"\u018d\5\n\6\2\u018d\u0191\7\35\2\2\u018e\u0190\n\n\2\2\u018f\u018e\3"+
		"\2\2\2\u0190\u0193\3\2\2\2\u0191\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192"+
		"\u0194\3\2\2\2\u0193\u0191\3\2\2\2\u0194\u0195\7\36\2\2\u0195\u0196\7"+
		"&\2\2\u0196W\3\2\2\2\u0197\u0198\7\17\2\2\u0198\u0199\5\22\n\2\u0199\u019a"+
		"\5\n\6\2\u019a\u019b\7&\2\2\u019bY\3\2\2\2\u019c\u019d\7\21\2\2\u019d"+
		"\u019e\5l\67\2\u019e[\3\2\2\2\u019f\u01a0\7\22\2\2\u01a0\u01a1\5l\67\2"+
		"\u01a1]\3\2\2\2\u01a2\u01a3\7\23\2\2\u01a3\u01a4\5l\67\2\u01a4_\3\2\2"+
		"\2\u01a5\u01a6\7\24\2\2\u01a6\u01a7\5l\67\2\u01a7a\3\2\2\2\u01a8\u01a9"+
		"\7\25\2\2\u01a9\u01aa\5l\67\2\u01aac\3\2\2\2\u01ab\u01ac\7\26\2\2\u01ac"+
		"\u01ad\5l\67\2\u01ade\3\2\2\2\u01ae\u01af\7\27\2\2\u01af\u01b0\5l\67\2"+
		"\u01b0g\3\2\2\2\u01b1\u01b2\7\30\2\2\u01b2\u01b3\5l\67\2\u01b3i\3\2\2"+
		"\2\u01b4\u01b5\7\33\2\2\u01b5\u01b6\5l\67\2\u01b6k\3\2\2\2\u01b7\u01b9"+
		"\7\35\2\2\u01b8\u01ba\5n8\2\u01b9\u01b8\3\2\2\2\u01b9\u01ba\3\2\2\2\u01ba"+
		"\u01bb\3\2\2\2\u01bb\u01bc\7\36\2\2\u01bcm\3\2\2\2\u01bd\u01c4\5p9\2\u01be"+
		"\u01bf\5p9\2\u01bf\u01c1\7#\2\2\u01c0\u01c2\5n8\2\u01c1\u01c0\3\2\2\2"+
		"\u01c1\u01c2\3\2\2\2\u01c2\u01c4\3\2\2\2\u01c3\u01bd\3\2\2\2\u01c3\u01be"+
		"\3\2\2\2\u01c4o\3\2\2\2\u01c5\u01ca\5\n\6\2\u01c6\u01ca\5\b\5\2\u01c7"+
		"\u01ca\5r:\2\u01c8\u01ca\5l\67\2\u01c9\u01c5\3\2\2\2\u01c9\u01c6\3\2\2"+
		"\2\u01c9\u01c7\3\2\2\2\u01c9\u01c8\3\2\2\2\u01caq\3\2\2\2\u01cb\u01cc"+
		"\5\n\6\2\u01cc\u01cd\7%\2\2\u01cd\u01ce\5p9\2\u01ces\3\2\2\2\66w~\u0082"+
		"\u0087\u008e\u0099\u009e\u00a1\u00ac\u00b1\u00ba\u00bd\u00c1\u00c5\u00ca"+
		"\u00d6\u00dc\u00df\u00e3\u00e9\u00f2\u00f8\u00fd\u0101\u0106\u010c\u0114"+
		"\u011a\u011c\u0128\u0134\u0138\u013d\u0147\u014e\u0154\u0157\u015a\u015e"+
		"\u016a\u016d\u0171\u0175\u0179\u017f\u0186\u018a\u0191\u01b9\u01c1\u01c3"+
		"\u01c9";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}