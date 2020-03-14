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
		PUBLIC=9, STATIC=10, TRUE=11, VIRTUAL=12, UCLASS=13, UENUM=14, UFUNCTION=15, 
		UPARAM=16, UPROPERTY=17, SF_CLASS_TAG=18, SF_GENERATED_BODY=19, FORCEINLINE=20, 
		COLON=21, OPEN_PAREN=22, CLOSE_PAREN=23, OPEN_BRACE=24, CLOSE_BRACE=25, 
		OPEN_ANGLE=26, CLOSE_ANGLE=27, COMMA=28, PERIOD=29, EQUALS=30, SEMICOLON=31, 
		STAR=32, AMPERSAND=33, HYPHEN=34, PIPE=35, BANG=36, IDENTIFIER=37, STRING_LITERAL=38, 
		FLOAT_LITERAL=39, INTEGER_LITERAL=40, PREPROCESSOR=41, LINE_COMMENT_START=42, 
		BLOCK_COMMENT_START=43, WHITESPACE=44, LINE_COMMENT_END=45, LINE_COMMENT_TEXT=46, 
		LINE_COMMENT_OTHER=47, BLOCK_COMMENT_END=48, BLOCK_COMMENT_NEW_LINE=49, 
		BLOCK_COMMENT_TEXT=50, BLOCK_COMMENT_OTHER=51;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_booleanLiteral = 7, 
		RULE_typeDeclaration = 8, RULE_templateType = 9, RULE_typeModifier = 10, 
		RULE_typeReferenceType = 11, RULE_classDeclaration = 12, RULE_classHeader = 13, 
		RULE_classInheritance = 14, RULE_classExtensionList = 15, RULE_classExtension = 16, 
		RULE_classBody = 17, RULE_classEntries = 18, RULE_classEntry = 19, RULE_classVisibility = 20, 
		RULE_classVisibilityModifier = 21, RULE_friendClassDeclaration = 22, RULE_classMethod = 23, 
		RULE_classMethodEnd = 24, RULE_classMethodModifier = 25, RULE_classMethodResultModifier = 26, 
		RULE_classMethodParameterList = 27, RULE_classMethodParameterName = 28, 
		RULE_classMethodParameter = 29, RULE_classMethodBody = 30, RULE_classProperty = 31, 
		RULE_classPropertyDefaultValue = 32, RULE_enumDeclaration = 33, RULE_enumHeader = 34, 
		RULE_enumBody = 35, RULE_enumEntry = 36, RULE_staticMethodCall = 37, RULE_uclassMacro = 38, 
		RULE_uenumMacro = 39, RULE_ufunctionMacro = 40, RULE_uParamMacro = 41, 
		RULE_upropertyMacro = 42, RULE_generatedBodyMacro = 43, RULE_macroPropertyList = 44, 
		RULE_macroPropertyListEntries = 45, RULE_macroProperty = 46, RULE_macroPropertyPair = 47;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"typeModifier", "typeReferenceType", "classDeclaration", "classHeader", 
		"classInheritance", "classExtensionList", "classExtension", "classBody", 
		"classEntries", "classEntry", "classVisibility", "classVisibilityModifier", 
		"friendClassDeclaration", "classMethod", "classMethodEnd", "classMethodModifier", 
		"classMethodResultModifier", "classMethodParameterList", "classMethodParameterName", 
		"classMethodParameter", "classMethodBody", "classProperty", "classPropertyDefaultValue", 
		"enumDeclaration", "enumHeader", "enumBody", "enumEntry", "staticMethodCall", 
		"uclassMacro", "uenumMacro", "ufunctionMacro", "uParamMacro", "upropertyMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UPARAM'", "'UPROPERTY'", "'FACTORYGAME_API'", 
		"'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", "')'", "'{'", "'}'", 
		"'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", "'&'", "'-'", "'|'", 
		"'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", 
		"STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", 
		"BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", 
		"LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", 
		"BLOCK_COMMENT_OTHER"
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
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << ENUM) | (1L << UCLASS) | (1L << UENUM) | (1L << IDENTIFIER))) != 0)) {
				{
				{
				setState(96);
				element();
				}
				}
				setState(101);
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
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_element);
		try {
			setState(105);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
			case UCLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				classDeclaration();
				}
				break;
			case ENUM:
			case UENUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				enumDeclaration();
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 3);
				{
				setState(104);
				staticMethodCall();
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
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(107);
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
				setState(108);
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
			setState(114);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				numericLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
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
			setState(121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(116);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(117);
				match(IDENTIFIER);
				setState(118);
				match(COLON);
				setState(119);
				match(COLON);
				setState(120);
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
			setState(123);
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
			setState(125);
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
			setState(127);
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
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << UPARAM))) != 0)) {
				{
				{
				setState(129);
				typeModifier();
				}
				}
				setState(134);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(135);
			identifier();
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(136);
				templateType();
				}
			}

			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STAR || _la==AMPERSAND) {
				{
				setState(139);
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
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
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
			setState(142);
			match(OPEN_ANGLE);
			setState(143);
			typeDeclaration();
			setState(144);
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
		enterRule(_localctx, 20, RULE_typeModifier);
		try {
			setState(149);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(146);
				match(CLASS);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				match(CONST);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 3);
				{
				setState(148);
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
			setState(151);
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
		enterRule(_localctx, 24, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			classHeader();
			setState(154);
			match(OPEN_BRACE);
			setState(155);
			classBody();
			setState(156);
			match(CLOSE_BRACE);
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(157);
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
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public UclassMacroContext uclassMacro() {
			return getRuleContext(UclassMacroContext.class,0);
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
		enterRule(_localctx, 26, RULE_classHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UCLASS) {
				{
				setState(160);
				uclassMacro();
				}
			}

			setState(163);
			match(CLASS);
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(164);
				match(SF_CLASS_TAG);
				}
			}

			setState(167);
			identifier();
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(168);
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
		enterRule(_localctx, 28, RULE_classInheritance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(COLON);
			setState(172);
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
		enterRule(_localctx, 30, RULE_classExtensionList);
		try {
			setState(179);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(174);
				classExtension();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(175);
				classExtension();
				setState(176);
				match(COMMA);
				setState(177);
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
		enterRule(_localctx, 32, RULE_classExtension);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			classVisibilityModifier();
			setState(182);
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
		enterRule(_localctx, 34, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(184);
				generatedBodyMacro();
				}
			}

			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(187);
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
		enterRule(_localctx, 36, RULE_classEntries);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			classEntry();
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(191);
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
		public FriendClassDeclarationContext friendClassDeclaration() {
			return getRuleContext(FriendClassDeclarationContext.class,0);
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
		enterRule(_localctx, 38, RULE_classEntry);
		try {
			setState(198);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(196);
				friendClassDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(197);
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
		enterRule(_localctx, 40, RULE_classVisibility);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			classVisibilityModifier();
			setState(201);
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
		enterRule(_localctx, 42, RULE_classVisibilityModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
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

	public static class FriendClassDeclarationContext extends ParserRuleContext {
		public TerminalNode FRIEND() { return getToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
		public TerminalNode CLASS() { return getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
		public FriendClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_friendClassDeclaration; }
	}

	public final FriendClassDeclarationContext friendClassDeclaration() throws RecognitionException {
		FriendClassDeclarationContext _localctx = new FriendClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_friendClassDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(FRIEND);
			setState(206);
			match(CLASS);
			setState(207);
			identifier();
			setState(208);
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
		enterRule(_localctx, 46, RULE_classMethod);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(210);
				ufunctionMacro();
				}
			}

			setState(216);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(213);
					classMethodModifier();
					}
					} 
				}
				setState(218);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			setState(220);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(219);
				typeDeclaration();
				}
				break;
			}
			setState(222);
			identifier();
			setState(223);
			match(OPEN_PAREN);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << UPARAM) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(224);
				classMethodParameterList();
				}
			}

			setState(227);
			match(CLOSE_PAREN);
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CONST || _la==OVERRIDE) {
				{
				{
				setState(228);
				classMethodResultModifier();
				}
				}
				setState(233);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(234);
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
		public ClassMethodEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodEnd; }
	}

	public final ClassMethodEndContext classMethodEnd() throws RecognitionException {
		ClassMethodEndContext _localctx = new ClassMethodEndContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_classMethodEnd);
		int _la;
		try {
			setState(241);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(236);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(237);
				classMethodBody();
				setState(239);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(238);
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
		enterRule(_localctx, 50, RULE_classMethodModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
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
		enterRule(_localctx, 52, RULE_classMethodResultModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
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
		public ClassMethodParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethodParameterList; }
	}

	public final ClassMethodParameterListContext classMethodParameterList() throws RecognitionException {
		ClassMethodParameterListContext _localctx = new ClassMethodParameterListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_classMethodParameterList);
		try {
			setState(252);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(247);
				classMethodParameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(248);
				classMethodParameter();
				setState(249);
				match(COMMA);
				setState(250);
				classMethodParameterList();
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
		enterRule(_localctx, 56, RULE_classMethodParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
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
		enterRule(_localctx, 58, RULE_classMethodParameter);
		try {
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(256);
				typeDeclaration();
				setState(257);
				classMethodParameterName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(259);
				typeDeclaration();
				setState(260);
				classMethodParameterName();
				setState(261);
				match(EQUALS);
				setState(262);
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
		enterRule(_localctx, 60, RULE_classMethodBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(OPEN_BRACE);
			setState(268);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_BRACE) {
				{
				setState(267);
				classMethodBody();
				}
			}

			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FRIEND) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TRUE) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << FORCEINLINE) | (1L << COLON) | (1L << OPEN_PAREN) | (1L << CLOSE_PAREN) | (1L << OPEN_ANGLE) | (1L << CLOSE_ANGLE) | (1L << COMMA) | (1L << PERIOD) | (1L << EQUALS) | (1L << SEMICOLON) | (1L << STAR) | (1L << AMPERSAND) | (1L << HYPHEN) | (1L << PIPE) | (1L << BANG) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0)) {
				{
				{
				setState(270);
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
				setState(275);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(276);
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
		enterRule(_localctx, 62, RULE_classProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(278);
				upropertyMacro();
				}
			}

			setState(282);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(281);
				match(STATIC);
				}
			}

			setState(285);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(284);
				typeDeclaration();
				}
				break;
			}
			setState(287);
			identifier();
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(288);
				classPropertyDefaultValue();
				}
			}

			setState(291);
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
		enterRule(_localctx, 64, RULE_classPropertyDefaultValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			match(COLON);
			setState(294);
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
		enterRule(_localctx, 66, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			enumHeader();
			setState(297);
			match(OPEN_BRACE);
			setState(298);
			enumBody();
			setState(299);
			match(CLOSE_BRACE);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(300);
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
		enterRule(_localctx, 68, RULE_enumHeader);
		int _la;
		try {
			setState(322);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(303);
					uenumMacro();
					}
				}

				setState(306);
				match(ENUM);
				setState(308);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(307);
					match(CLASS);
					}
				}

				setState(310);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UENUM) {
					{
					setState(311);
					uenumMacro();
					}
				}

				setState(314);
				match(ENUM);
				setState(316);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CLASS) {
					{
					setState(315);
					match(CLASS);
					}
				}

				setState(318);
				identifier();
				setState(319);
				match(COLON);
				setState(320);
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
		enterRule(_localctx, 70, RULE_enumBody);
		try {
			setState(329);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(324);
				enumEntry();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(325);
				enumEntry();
				setState(326);
				match(COMMA);
				setState(327);
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
		public EnumEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumEntry; }
	}

	public final EnumEntryContext enumEntry() throws RecognitionException {
		EnumEntryContext _localctx = new EnumEntryContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_enumEntry);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
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
		enterRule(_localctx, 74, RULE_staticMethodCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			identifier();
			setState(334);
			match(OPEN_PAREN);
			setState(336); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(335);
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
				setState(338); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << ENUM) | (1L << FALSE) | (1L << FRIEND) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TRUE) | (1L << VIRTUAL) | (1L << UCLASS) | (1L << UENUM) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << SF_CLASS_TAG) | (1L << SF_GENERATED_BODY) | (1L << FORCEINLINE) | (1L << COLON) | (1L << OPEN_PAREN) | (1L << OPEN_BRACE) | (1L << CLOSE_BRACE) | (1L << OPEN_ANGLE) | (1L << CLOSE_ANGLE) | (1L << COMMA) | (1L << PERIOD) | (1L << EQUALS) | (1L << SEMICOLON) | (1L << STAR) | (1L << AMPERSAND) | (1L << HYPHEN) | (1L << PIPE) | (1L << BANG) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL) | (1L << PREPROCESSOR) | (1L << LINE_COMMENT_START) | (1L << BLOCK_COMMENT_START) | (1L << WHITESPACE) | (1L << LINE_COMMENT_END) | (1L << LINE_COMMENT_TEXT) | (1L << LINE_COMMENT_OTHER) | (1L << BLOCK_COMMENT_END) | (1L << BLOCK_COMMENT_NEW_LINE) | (1L << BLOCK_COMMENT_TEXT) | (1L << BLOCK_COMMENT_OTHER))) != 0) );
			setState(340);
			match(CLOSE_PAREN);
			setState(341);
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
		enterRule(_localctx, 76, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			match(UCLASS);
			setState(344);
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
		enterRule(_localctx, 78, RULE_uenumMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(UENUM);
			setState(347);
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
		enterRule(_localctx, 80, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(349);
			match(UFUNCTION);
			setState(350);
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
		enterRule(_localctx, 82, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			match(UPARAM);
			setState(353);
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
		enterRule(_localctx, 84, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(UPROPERTY);
			setState(356);
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
		enterRule(_localctx, 86, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			match(SF_GENERATED_BODY);
			setState(359);
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
		enterRule(_localctx, 88, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(OPEN_PAREN);
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
				{
				setState(362);
				macroPropertyListEntries();
				}
			}

			setState(365);
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
		enterRule(_localctx, 90, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(373);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(367);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(368);
				macroProperty();
				setState(369);
				match(COMMA);
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << TRUE) | (1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL) | (1L << FLOAT_LITERAL) | (1L << INTEGER_LITERAL))) != 0)) {
					{
					setState(370);
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
		enterRule(_localctx, 92, RULE_macroProperty);
		try {
			setState(379);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(375);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(376);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(377);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(378);
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
		enterRule(_localctx, 94, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			identifier();
			setState(382);
			match(EQUALS);
			setState(383);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\65\u0184\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\3\2\7\2d\n\2\f\2\16\2g\13\2"+
		"\3\3\3\3\3\3\5\3l\n\3\3\4\3\4\5\4p\n\4\3\5\3\5\3\5\5\5u\n\5\3\6\3\6\3"+
		"\6\3\6\3\6\5\6|\n\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\7\n\u0085\n\n\f\n\16\n"+
		"\u0088\13\n\3\n\3\n\5\n\u008c\n\n\3\n\5\n\u008f\n\n\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\5\f\u0098\n\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\5\16\u00a1"+
		"\n\16\3\17\5\17\u00a4\n\17\3\17\3\17\5\17\u00a8\n\17\3\17\3\17\5\17\u00ac"+
		"\n\17\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\5\21\u00b6\n\21\3\22\3\22"+
		"\3\22\3\23\5\23\u00bc\n\23\3\23\5\23\u00bf\n\23\3\24\3\24\5\24\u00c3\n"+
		"\24\3\25\3\25\3\25\3\25\5\25\u00c9\n\25\3\26\3\26\3\26\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\30\3\31\5\31\u00d6\n\31\3\31\7\31\u00d9\n\31\f\31\16"+
		"\31\u00dc\13\31\3\31\5\31\u00df\n\31\3\31\3\31\3\31\5\31\u00e4\n\31\3"+
		"\31\3\31\7\31\u00e8\n\31\f\31\16\31\u00eb\13\31\3\31\3\31\3\32\3\32\3"+
		"\32\5\32\u00f2\n\32\5\32\u00f4\n\32\3\33\3\33\3\34\3\34\3\35\3\35\3\35"+
		"\3\35\3\35\5\35\u00ff\n\35\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\5\37\u010b\n\37\3 \3 \5 \u010f\n \3 \7 \u0112\n \f \16 \u0115\13"+
		" \3 \3 \3!\5!\u011a\n!\3!\5!\u011d\n!\3!\5!\u0120\n!\3!\3!\5!\u0124\n"+
		"!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3#\3#\5#\u0130\n#\3$\5$\u0133\n$\3$\3$\5"+
		"$\u0137\n$\3$\3$\5$\u013b\n$\3$\3$\5$\u013f\n$\3$\3$\3$\3$\5$\u0145\n"+
		"$\3%\3%\3%\3%\3%\5%\u014c\n%\3&\3&\3\'\3\'\3\'\6\'\u0153\n\'\r\'\16\'"+
		"\u0154\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3+\3+\3,\3,\3,\3-\3-"+
		"\3-\3.\3.\5.\u016e\n.\3.\3.\3/\3/\3/\3/\5/\u0176\n/\5/\u0178\n/\3\60\3"+
		"\60\3\60\3\60\5\60\u017e\n\60\3\61\3\61\3\61\3\61\3\61\2\2\62\2\4\6\b"+
		"\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVX"+
		"Z\\^`\2\n\3\2)*\4\2\6\6\r\r\3\2\"#\3\2\t\13\6\2\4\4\f\f\16\16\26\26\4"+
		"\2\4\4\b\b\3\2\32\33\3\2\31\31\2\u0187\2e\3\2\2\2\4k\3\2\2\2\6o\3\2\2"+
		"\2\bt\3\2\2\2\n{\3\2\2\2\f}\3\2\2\2\16\177\3\2\2\2\20\u0081\3\2\2\2\22"+
		"\u0086\3\2\2\2\24\u0090\3\2\2\2\26\u0097\3\2\2\2\30\u0099\3\2\2\2\32\u009b"+
		"\3\2\2\2\34\u00a3\3\2\2\2\36\u00ad\3\2\2\2 \u00b5\3\2\2\2\"\u00b7\3\2"+
		"\2\2$\u00bb\3\2\2\2&\u00c0\3\2\2\2(\u00c8\3\2\2\2*\u00ca\3\2\2\2,\u00cd"+
		"\3\2\2\2.\u00cf\3\2\2\2\60\u00d5\3\2\2\2\62\u00f3\3\2\2\2\64\u00f5\3\2"+
		"\2\2\66\u00f7\3\2\2\28\u00fe\3\2\2\2:\u0100\3\2\2\2<\u010a\3\2\2\2>\u010c"+
		"\3\2\2\2@\u0119\3\2\2\2B\u0127\3\2\2\2D\u012a\3\2\2\2F\u0144\3\2\2\2H"+
		"\u014b\3\2\2\2J\u014d\3\2\2\2L\u014f\3\2\2\2N\u0159\3\2\2\2P\u015c\3\2"+
		"\2\2R\u015f\3\2\2\2T\u0162\3\2\2\2V\u0165\3\2\2\2X\u0168\3\2\2\2Z\u016b"+
		"\3\2\2\2\\\u0177\3\2\2\2^\u017d\3\2\2\2`\u017f\3\2\2\2bd\5\4\3\2cb\3\2"+
		"\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2f\3\3\2\2\2ge\3\2\2\2hl\5\32\16\2il"+
		"\5D#\2jl\5L\'\2kh\3\2\2\2ki\3\2\2\2kj\3\2\2\2l\5\3\2\2\2mp\5\n\6\2np\5"+
		"\b\5\2om\3\2\2\2on\3\2\2\2p\7\3\2\2\2qu\5\f\7\2ru\5\16\b\2su\5\20\t\2"+
		"tq\3\2\2\2tr\3\2\2\2ts\3\2\2\2u\t\3\2\2\2v|\7\'\2\2wx\7\'\2\2xy\7\27\2"+
		"\2yz\7\27\2\2z|\7\'\2\2{v\3\2\2\2{w\3\2\2\2|\13\3\2\2\2}~\7(\2\2~\r\3"+
		"\2\2\2\177\u0080\t\2\2\2\u0080\17\3\2\2\2\u0081\u0082\t\3\2\2\u0082\21"+
		"\3\2\2\2\u0083\u0085\5\26\f\2\u0084\u0083\3\2\2\2\u0085\u0088\3\2\2\2"+
		"\u0086\u0084\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0089\3\2\2\2\u0088\u0086"+
		"\3\2\2\2\u0089\u008b\5\n\6\2\u008a\u008c\5\24\13\2\u008b\u008a\3\2\2\2"+
		"\u008b\u008c\3\2\2\2\u008c\u008e\3\2\2\2\u008d\u008f\5\30\r\2\u008e\u008d"+
		"\3\2\2\2\u008e\u008f\3\2\2\2\u008f\23\3\2\2\2\u0090\u0091\7\34\2\2\u0091"+
		"\u0092\5\22\n\2\u0092\u0093\7\35\2\2\u0093\25\3\2\2\2\u0094\u0098\7\3"+
		"\2\2\u0095\u0098\7\4\2\2\u0096\u0098\5T+\2\u0097\u0094\3\2\2\2\u0097\u0095"+
		"\3\2\2\2\u0097\u0096\3\2\2\2\u0098\27\3\2\2\2\u0099\u009a\t\4\2\2\u009a"+
		"\31\3\2\2\2\u009b\u009c\5\34\17\2\u009c\u009d\7\32\2\2\u009d\u009e\5$"+
		"\23\2\u009e\u00a0\7\33\2\2\u009f\u00a1\7!\2\2\u00a0\u009f\3\2\2\2\u00a0"+
		"\u00a1\3\2\2\2\u00a1\33\3\2\2\2\u00a2\u00a4\5N(\2\u00a3\u00a2\3\2\2\2"+
		"\u00a3\u00a4\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a7\7\3\2\2\u00a6\u00a8"+
		"\7\24\2\2\u00a7\u00a6\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a9\3\2\2\2"+
		"\u00a9\u00ab\5\n\6\2\u00aa\u00ac\5\36\20\2\u00ab\u00aa\3\2\2\2\u00ab\u00ac"+
		"\3\2\2\2\u00ac\35\3\2\2\2\u00ad\u00ae\7\27\2\2\u00ae\u00af\5 \21\2\u00af"+
		"\37\3\2\2\2\u00b0\u00b6\5\"\22\2\u00b1\u00b2\5\"\22\2\u00b2\u00b3\7\36"+
		"\2\2\u00b3\u00b4\5 \21\2\u00b4\u00b6\3\2\2\2\u00b5\u00b0\3\2\2\2\u00b5"+
		"\u00b1\3\2\2\2\u00b6!\3\2\2\2\u00b7\u00b8\5,\27\2\u00b8\u00b9\5\n\6\2"+
		"\u00b9#\3\2\2\2\u00ba\u00bc\5X-\2\u00bb\u00ba\3\2\2\2\u00bb\u00bc\3\2"+
		"\2\2\u00bc\u00be\3\2\2\2\u00bd\u00bf\5&\24\2\u00be\u00bd\3\2\2\2\u00be"+
		"\u00bf\3\2\2\2\u00bf%\3\2\2\2\u00c0\u00c2\5(\25\2\u00c1\u00c3\5&\24\2"+
		"\u00c2\u00c1\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\'\3\2\2\2\u00c4\u00c9\5"+
		"*\26\2\u00c5\u00c9\5\60\31\2\u00c6\u00c9\5.\30\2\u00c7\u00c9\5@!\2\u00c8"+
		"\u00c4\3\2\2\2\u00c8\u00c5\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c7\3\2"+
		"\2\2\u00c9)\3\2\2\2\u00ca\u00cb\5,\27\2\u00cb\u00cc\7\27\2\2\u00cc+\3"+
		"\2\2\2\u00cd\u00ce\t\5\2\2\u00ce-\3\2\2\2\u00cf\u00d0\7\7\2\2\u00d0\u00d1"+
		"\7\3\2\2\u00d1\u00d2\5\n\6\2\u00d2\u00d3\7!\2\2\u00d3/\3\2\2\2\u00d4\u00d6"+
		"\5R*\2\u00d5\u00d4\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6\u00da\3\2\2\2\u00d7"+
		"\u00d9\5\64\33\2\u00d8\u00d7\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3"+
		"\2\2\2\u00da\u00db\3\2\2\2\u00db\u00de\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd"+
		"\u00df\5\22\n\2\u00de\u00dd\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e0\3"+
		"\2\2\2\u00e0\u00e1\5\n\6\2\u00e1\u00e3\7\30\2\2\u00e2\u00e4\58\35\2\u00e3"+
		"\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5\u00e9\7\31"+
		"\2\2\u00e6\u00e8\5\66\34\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9"+
		"\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00ec\3\2\2\2\u00eb\u00e9\3\2"+
		"\2\2\u00ec\u00ed\5\62\32\2\u00ed\61\3\2\2\2\u00ee\u00f4\7!\2\2\u00ef\u00f1"+
		"\5> \2\u00f0\u00f2\7!\2\2\u00f1\u00f0\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2"+
		"\u00f4\3\2\2\2\u00f3\u00ee\3\2\2\2\u00f3\u00ef\3\2\2\2\u00f4\63\3\2\2"+
		"\2\u00f5\u00f6\t\6\2\2\u00f6\65\3\2\2\2\u00f7\u00f8\t\7\2\2\u00f8\67\3"+
		"\2\2\2\u00f9\u00ff\5<\37\2\u00fa\u00fb\5<\37\2\u00fb\u00fc\7\36\2\2\u00fc"+
		"\u00fd\58\35\2\u00fd\u00ff\3\2\2\2\u00fe\u00f9\3\2\2\2\u00fe\u00fa\3\2"+
		"\2\2\u00ff9\3\2\2\2\u0100\u0101\5\n\6\2\u0101;\3\2\2\2\u0102\u0103\5\22"+
		"\n\2\u0103\u0104\5:\36\2\u0104\u010b\3\2\2\2\u0105\u0106\5\22\n\2\u0106"+
		"\u0107\5:\36\2\u0107\u0108\7 \2\2\u0108\u0109\5\6\4\2\u0109\u010b\3\2"+
		"\2\2\u010a\u0102\3\2\2\2\u010a\u0105\3\2\2\2\u010b=\3\2\2\2\u010c\u010e"+
		"\7\32\2\2\u010d\u010f\5> \2\u010e\u010d\3\2\2\2\u010e\u010f\3\2\2\2\u010f"+
		"\u0113\3\2\2\2\u0110\u0112\n\b\2\2\u0111\u0110\3\2\2\2\u0112\u0115\3\2"+
		"\2\2\u0113\u0111\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0116\3\2\2\2\u0115"+
		"\u0113\3\2\2\2\u0116\u0117\7\33\2\2\u0117?\3\2\2\2\u0118\u011a\5V,\2\u0119"+
		"\u0118\3\2\2\2\u0119\u011a\3\2\2\2\u011a\u011c\3\2\2\2\u011b\u011d\7\f"+
		"\2\2\u011c\u011b\3\2\2\2\u011c\u011d\3\2\2\2\u011d\u011f\3\2\2\2\u011e"+
		"\u0120\5\22\n\2\u011f\u011e\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u0121\3"+
		"\2\2\2\u0121\u0123\5\n\6\2\u0122\u0124\5B\"\2\u0123\u0122\3\2\2\2\u0123"+
		"\u0124\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0126\7!\2\2\u0126A\3\2\2\2\u0127"+
		"\u0128\7\27\2\2\u0128\u0129\5\b\5\2\u0129C\3\2\2\2\u012a\u012b\5F$\2\u012b"+
		"\u012c\7\32\2\2\u012c\u012d\5H%\2\u012d\u012f\7\33\2\2\u012e\u0130\7!"+
		"\2\2\u012f\u012e\3\2\2\2\u012f\u0130\3\2\2\2\u0130E\3\2\2\2\u0131\u0133"+
		"\5P)\2\u0132\u0131\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u0134\3\2\2\2\u0134"+
		"\u0136\7\5\2\2\u0135\u0137\7\3\2\2\u0136\u0135\3\2\2\2\u0136\u0137\3\2"+
		"\2\2\u0137\u0138\3\2\2\2\u0138\u0145\5\n\6\2\u0139\u013b\5P)\2\u013a\u0139"+
		"\3\2\2\2\u013a\u013b\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013e\7\5\2\2\u013d"+
		"\u013f\7\3\2\2\u013e\u013d\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0140\3\2"+
		"\2\2\u0140\u0141\5\n\6\2\u0141\u0142\7\27\2\2\u0142\u0143\5\22\n\2\u0143"+
		"\u0145\3\2\2\2\u0144\u0132\3\2\2\2\u0144\u013a\3\2\2\2\u0145G\3\2\2\2"+
		"\u0146\u014c\5J&\2\u0147\u0148\5J&\2\u0148\u0149\7\36\2\2\u0149\u014a"+
		"\5H%\2\u014a\u014c\3\2\2\2\u014b\u0146\3\2\2\2\u014b\u0147\3\2\2\2\u014c"+
		"I\3\2\2\2\u014d\u014e\5\n\6\2\u014eK\3\2\2\2\u014f\u0150\5\n\6\2\u0150"+
		"\u0152\7\30\2\2\u0151\u0153\n\t\2\2\u0152\u0151\3\2\2\2\u0153\u0154\3"+
		"\2\2\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0156\3\2\2\2\u0156"+
		"\u0157\7\31\2\2\u0157\u0158\7!\2\2\u0158M\3\2\2\2\u0159\u015a\7\17\2\2"+
		"\u015a\u015b\5Z.\2\u015bO\3\2\2\2\u015c\u015d\7\20\2\2\u015d\u015e\5Z"+
		".\2\u015eQ\3\2\2\2\u015f\u0160\7\21\2\2\u0160\u0161\5Z.\2\u0161S\3\2\2"+
		"\2\u0162\u0163\7\22\2\2\u0163\u0164\5Z.\2\u0164U\3\2\2\2\u0165\u0166\7"+
		"\23\2\2\u0166\u0167\5Z.\2\u0167W\3\2\2\2\u0168\u0169\7\25\2\2\u0169\u016a"+
		"\5Z.\2\u016aY\3\2\2\2\u016b\u016d\7\30\2\2\u016c\u016e\5\\/\2\u016d\u016c"+
		"\3\2\2\2\u016d\u016e\3\2\2\2\u016e\u016f\3\2\2\2\u016f\u0170\7\31\2\2"+
		"\u0170[\3\2\2\2\u0171\u0178\5^\60\2\u0172\u0173\5^\60\2\u0173\u0175\7"+
		"\36\2\2\u0174\u0176\5\\/\2\u0175\u0174\3\2\2\2\u0175\u0176\3\2\2\2\u0176"+
		"\u0178\3\2\2\2\u0177\u0171\3\2\2\2\u0177\u0172\3\2\2\2\u0178]\3\2\2\2"+
		"\u0179\u017e\5\n\6\2\u017a\u017e\5\b\5\2\u017b\u017e\5`\61\2\u017c\u017e"+
		"\5Z.\2\u017d\u0179\3\2\2\2\u017d\u017a\3\2\2\2\u017d\u017b\3\2\2\2\u017d"+
		"\u017c\3\2\2\2\u017e_\3\2\2\2\u017f\u0180\5\n\6\2\u0180\u0181\7 \2\2\u0181"+
		"\u0182\5^\60\2\u0182a\3\2\2\2/ekot{\u0086\u008b\u008e\u0097\u00a0\u00a3"+
		"\u00a7\u00ab\u00b5\u00bb\u00be\u00c2\u00c8\u00d5\u00da\u00de\u00e3\u00e9"+
		"\u00f1\u00f3\u00fe\u010a\u010e\u0113\u0119\u011c\u011f\u0123\u012f\u0132"+
		"\u0136\u013a\u013e\u0144\u014b\u0154\u016d\u0175\u0177\u017d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}