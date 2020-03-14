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
		CLASS=1, CONST=2, FRIEND=3, PRIVATE=4, PROTECTED=5, PUBLIC=6, STATIC=7, 
		VIRTUAL=8, UCLASS=9, UFUNCTION=10, UPARAM=11, UPROPERTY=12, SF_CLASS_TAG=13, 
		SF_GENERATED_BODY=14, FORCEINLINE=15, COLON=16, OPEN_PAREN=17, CLOSE_PAREN=18, 
		OPEN_BRACE=19, CLOSE_BRACE=20, OPEN_ANGLE=21, CLOSE_ANGLE=22, COMMA=23, 
		PERIOD=24, EQUALS=25, SEMICOLON=26, STAR=27, AMPERSAND=28, IDENTIFIER=29, 
		STRING_LITERAL=30, FLOAT_LITERAL=31, INTEGER_LITERAL=32, PREPROCESSOR=33, 
		LINE_COMMENT_START=34, BLOCK_COMMENT_START=35, WHITESPACE=36, LINE_COMMENT_END=37, 
		LINE_COMMENT_TEXT=38, LINE_COMMENT_OTHER=39, BLOCK_COMMENT_END=40, BLOCK_COMMENT_NEW_LINE=41, 
		BLOCK_COMMENT_TEXT=42, BLOCK_COMMENT_OTHER=43;
	public static final int
		RULE_file = 0, RULE_element = 1, RULE_value = 2, RULE_literal = 3, RULE_identifier = 4, 
		RULE_stringLiteral = 5, RULE_numericLiteral = 6, RULE_typeDeclaration = 7, 
		RULE_templateType = 8, RULE_typeModifier = 9, RULE_typeReferenceType = 10, 
		RULE_classDeclaration = 11, RULE_classHeader = 12, RULE_classInheritance = 13, 
		RULE_classBody = 14, RULE_classEntries = 15, RULE_classEntry = 16, RULE_classVisibility = 17, 
		RULE_classVisibilityModifier = 18, RULE_friendClassDeclaration = 19, RULE_classMethod = 20, 
		RULE_classMethodEnd = 21, RULE_classMethodModifier = 22, RULE_classMethodParameterList = 23, 
		RULE_classMethodParameterName = 24, RULE_classMethodParameter = 25, RULE_classMethodBody = 26, 
		RULE_classProperty = 27, RULE_uclassMacro = 28, RULE_ufunctionMacro = 29, 
		RULE_uParamMacro = 30, RULE_upropertyMacro = 31, RULE_generatedBodyMacro = 32, 
		RULE_macroPropertyList = 33, RULE_macroPropertyListEntries = 34, RULE_macroProperty = 35, 
		RULE_macroPropertyPair = 36;
	public static final String[] ruleNames = {
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "typeDeclaration", "templateType", "typeModifier", "typeReferenceType", 
		"classDeclaration", "classHeader", "classInheritance", "classBody", "classEntries", 
		"classEntry", "classVisibility", "classVisibilityModifier", "friendClassDeclaration", 
		"classMethod", "classMethodEnd", "classMethodModifier", "classMethodParameterList", 
		"classMethodParameterName", "classMethodParameter", "classMethodBody", 
		"classProperty", "uclassMacro", "ufunctionMacro", "uParamMacro", "upropertyMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'friend'", "'private'", "'protected'", "'public'", 
		"'static'", "'virtual'", "'UCLASS'", "'UFUNCTION'", "'UPARAM'", "'UPROPERTY'", 
		"'FACTORYGAME_API'", "'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", 
		"')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", 
		"'&'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "FRIEND", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
		"VIRTUAL", "UCLASS", "UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "IDENTIFIER", "STRING_LITERAL", 
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
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CLASS || _la==UCLASS) {
				{
				{
				setState(74);
				element();
				}
				}
				setState(79);
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
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			classDeclaration();
			}
		}
		catch (RecognitionException re) {
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
			setState(84);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				identifier();
				}
				break;
			case STRING_LITERAL:
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
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
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_literal);
		try {
			setState(88);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				stringLiteral();
				}
				break;
			case FLOAT_LITERAL:
			case INTEGER_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SatisfactoryHeaderParserParser.IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
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
			setState(92);
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
			setState(94);
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
		enterRule(_localctx, 14, RULE_typeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CLASS || _la==UPARAM) {
				{
				{
				setState(96);
				typeModifier();
				}
				}
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(102);
			identifier();
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_ANGLE) {
				{
				setState(103);
				templateType();
				}
			}

			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STAR || _la==AMPERSAND) {
				{
				setState(106);
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
		enterRule(_localctx, 16, RULE_templateType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(OPEN_ANGLE);
			setState(110);
			typeDeclaration();
			setState(111);
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
		enterRule(_localctx, 18, RULE_typeModifier);
		try {
			setState(115);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CLASS:
				enterOuterAlt(_localctx, 1);
				{
				setState(113);
				match(CLASS);
				}
				break;
			case UPARAM:
				enterOuterAlt(_localctx, 2);
				{
				setState(114);
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
		enterRule(_localctx, 20, RULE_typeReferenceType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
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
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_classDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			classHeader();
			setState(120);
			match(OPEN_BRACE);
			setState(121);
			classBody();
			setState(122);
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
		enterRule(_localctx, 24, RULE_classHeader);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UCLASS) {
				{
				setState(124);
				uclassMacro();
				}
			}

			setState(127);
			match(CLASS);
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_CLASS_TAG) {
				{
				setState(128);
				match(SF_CLASS_TAG);
				}
			}

			setState(131);
			identifier();
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(132);
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
		public TerminalNode PUBLIC() { return getToken(SatisfactoryHeaderParserParser.PUBLIC, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassInheritanceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classInheritance; }
	}

	public final ClassInheritanceContext classInheritance() throws RecognitionException {
		ClassInheritanceContext _localctx = new ClassInheritanceContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_classInheritance);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(COLON);
			setState(136);
			match(PUBLIC);
			setState(137);
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
		enterRule(_localctx, 28, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SF_GENERATED_BODY) {
				{
				setState(139);
				generatedBodyMacro();
				}
			}

			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(142);
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
		enterRule(_localctx, 30, RULE_classEntries);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			classEntry();
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << CONST) | (1L << FRIEND) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << VIRTUAL) | (1L << UFUNCTION) | (1L << UPARAM) | (1L << UPROPERTY) | (1L << FORCEINLINE) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(146);
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
		enterRule(_localctx, 32, RULE_classEntry);
		try {
			setState(153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(149);
				classVisibility();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(150);
				classMethod();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(151);
				friendClassDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(152);
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
		enterRule(_localctx, 34, RULE_classVisibility);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			classVisibilityModifier();
			setState(156);
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
		enterRule(_localctx, 36, RULE_classVisibilityModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
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
		enterRule(_localctx, 38, RULE_friendClassDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			match(FRIEND);
			setState(161);
			match(CLASS);
			setState(162);
			identifier();
			setState(163);
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
		public TerminalNode CONST() { return getToken(SatisfactoryHeaderParserParser.CONST, 0); }
		public ClassMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMethod; }
	}

	public final ClassMethodContext classMethod() throws RecognitionException {
		ClassMethodContext _localctx = new ClassMethodContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_classMethod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UFUNCTION) {
				{
				setState(165);
				ufunctionMacro();
				}
			}

			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << STATIC) | (1L << VIRTUAL) | (1L << FORCEINLINE))) != 0)) {
				{
				{
				setState(168);
				classMethodModifier();
				}
				}
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(175);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(174);
				typeDeclaration();
				}
				break;
			}
			setState(177);
			identifier();
			setState(178);
			match(OPEN_PAREN);
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << UPARAM) | (1L << IDENTIFIER))) != 0)) {
				{
				setState(179);
				classMethodParameterList();
				}
			}

			setState(182);
			match(CLOSE_PAREN);
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CONST) {
				{
				setState(183);
				match(CONST);
				}
			}

			setState(186);
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
		enterRule(_localctx, 42, RULE_classMethodEnd);
		try {
			setState(190);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMICOLON:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				match(SEMICOLON);
				}
				break;
			case OPEN_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				classMethodBody();
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
		enterRule(_localctx, 44, RULE_classMethodModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
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
		enterRule(_localctx, 46, RULE_classMethodParameterList);
		try {
			setState(199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				classMethodParameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				classMethodParameter();
				setState(196);
				match(COMMA);
				setState(197);
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
		enterRule(_localctx, 48, RULE_classMethodParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
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
		enterRule(_localctx, 50, RULE_classMethodParameter);
		try {
			setState(211);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(203);
				typeDeclaration();
				setState(204);
				classMethodParameterName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(206);
				typeDeclaration();
				setState(207);
				classMethodParameterName();
				setState(208);
				match(EQUALS);
				setState(209);
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
		public TerminalNode CLOSE_BRACE() { return getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
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
		enterRule(_localctx, 52, RULE_classMethodBody);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(OPEN_BRACE);
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPEN_BRACE) {
				{
				setState(214);
				classMethodBody();
				}
			}

			setState(220);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(217);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==OPEN_BRACE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					} 
				}
				setState(222);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(223);
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
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public ClassPropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classProperty; }
	}

	public final ClassPropertyContext classProperty() throws RecognitionException {
		ClassPropertyContext _localctx = new ClassPropertyContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_classProperty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPROPERTY) {
				{
				setState(225);
				upropertyMacro();
				}
			}

			setState(229);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				setState(228);
				typeDeclaration();
				}
				break;
			}
			setState(231);
			identifier();
			setState(232);
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
		enterRule(_localctx, 56, RULE_uclassMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			match(UCLASS);
			setState(235);
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
		enterRule(_localctx, 58, RULE_ufunctionMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			match(UFUNCTION);
			setState(238);
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
		enterRule(_localctx, 60, RULE_uParamMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(UPARAM);
			setState(241);
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
		enterRule(_localctx, 62, RULE_upropertyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			match(UPROPERTY);
			setState(244);
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
		enterRule(_localctx, 64, RULE_generatedBodyMacro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(SF_GENERATED_BODY);
			setState(247);
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
		enterRule(_localctx, 66, RULE_macroPropertyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(OPEN_PAREN);
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL))) != 0)) {
				{
				setState(250);
				macroPropertyListEntries();
				}
			}

			setState(253);
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
		enterRule(_localctx, 68, RULE_macroPropertyListEntries);
		int _la;
		try {
			setState(261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(255);
				macroProperty();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(256);
				macroProperty();
				setState(257);
				match(COMMA);
				setState(259);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPEN_PAREN) | (1L << IDENTIFIER) | (1L << STRING_LITERAL))) != 0)) {
					{
					setState(258);
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
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
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
		enterRule(_localctx, 70, RULE_macroProperty);
		try {
			setState(267);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(263);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(264);
				stringLiteral();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(265);
				macroPropertyPair();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(266);
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
		enterRule(_localctx, 72, RULE_macroPropertyPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			identifier();
			setState(270);
			match(EQUALS);
			setState(271);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u0114\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\3\2\7\2N\n\2\f\2\16\2Q\13\2\3\3\3"+
		"\3\3\4\3\4\5\4W\n\4\3\5\3\5\5\5[\n\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\7\td"+
		"\n\t\f\t\16\tg\13\t\3\t\3\t\5\tk\n\t\3\t\5\tn\n\t\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\5\13v\n\13\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\16\5\16\u0080\n\16\3\16"+
		"\3\16\5\16\u0084\n\16\3\16\3\16\5\16\u0088\n\16\3\17\3\17\3\17\3\17\3"+
		"\20\5\20\u008f\n\20\3\20\5\20\u0092\n\20\3\21\3\21\5\21\u0096\n\21\3\22"+
		"\3\22\3\22\3\22\5\22\u009c\n\22\3\23\3\23\3\23\3\24\3\24\3\25\3\25\3\25"+
		"\3\25\3\25\3\26\5\26\u00a9\n\26\3\26\7\26\u00ac\n\26\f\26\16\26\u00af"+
		"\13\26\3\26\5\26\u00b2\n\26\3\26\3\26\3\26\5\26\u00b7\n\26\3\26\3\26\5"+
		"\26\u00bb\n\26\3\26\3\26\3\27\3\27\5\27\u00c1\n\27\3\30\3\30\3\31\3\31"+
		"\3\31\3\31\3\31\5\31\u00ca\n\31\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\5\33\u00d6\n\33\3\34\3\34\5\34\u00da\n\34\3\34\7\34\u00dd\n"+
		"\34\f\34\16\34\u00e0\13\34\3\34\3\34\3\35\5\35\u00e5\n\35\3\35\5\35\u00e8"+
		"\n\35\3\35\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3 \3!\3!\3!\3"+
		"\"\3\"\3\"\3#\3#\5#\u00fe\n#\3#\3#\3$\3$\3$\3$\5$\u0106\n$\5$\u0108\n"+
		"$\3%\3%\3%\3%\5%\u010e\n%\3&\3&\3&\3&\3&\3\u00de\2\'\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJ\2\7\3\2!\"\3\2\35"+
		"\36\3\2\6\b\5\2\4\4\t\n\21\21\3\2\25\25\2\u0110\2O\3\2\2\2\4R\3\2\2\2"+
		"\6V\3\2\2\2\bZ\3\2\2\2\n\\\3\2\2\2\f^\3\2\2\2\16`\3\2\2\2\20e\3\2\2\2"+
		"\22o\3\2\2\2\24u\3\2\2\2\26w\3\2\2\2\30y\3\2\2\2\32\177\3\2\2\2\34\u0089"+
		"\3\2\2\2\36\u008e\3\2\2\2 \u0093\3\2\2\2\"\u009b\3\2\2\2$\u009d\3\2\2"+
		"\2&\u00a0\3\2\2\2(\u00a2\3\2\2\2*\u00a8\3\2\2\2,\u00c0\3\2\2\2.\u00c2"+
		"\3\2\2\2\60\u00c9\3\2\2\2\62\u00cb\3\2\2\2\64\u00d5\3\2\2\2\66\u00d7\3"+
		"\2\2\28\u00e4\3\2\2\2:\u00ec\3\2\2\2<\u00ef\3\2\2\2>\u00f2\3\2\2\2@\u00f5"+
		"\3\2\2\2B\u00f8\3\2\2\2D\u00fb\3\2\2\2F\u0107\3\2\2\2H\u010d\3\2\2\2J"+
		"\u010f\3\2\2\2LN\5\4\3\2ML\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2P\3\3"+
		"\2\2\2QO\3\2\2\2RS\5\30\r\2S\5\3\2\2\2TW\5\n\6\2UW\5\b\5\2VT\3\2\2\2V"+
		"U\3\2\2\2W\7\3\2\2\2X[\5\f\7\2Y[\5\16\b\2ZX\3\2\2\2ZY\3\2\2\2[\t\3\2\2"+
		"\2\\]\7\37\2\2]\13\3\2\2\2^_\7 \2\2_\r\3\2\2\2`a\t\2\2\2a\17\3\2\2\2b"+
		"d\5\24\13\2cb\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2fh\3\2\2\2ge\3\2\2"+
		"\2hj\5\n\6\2ik\5\22\n\2ji\3\2\2\2jk\3\2\2\2km\3\2\2\2ln\5\26\f\2ml\3\2"+
		"\2\2mn\3\2\2\2n\21\3\2\2\2op\7\27\2\2pq\5\20\t\2qr\7\30\2\2r\23\3\2\2"+
		"\2sv\7\3\2\2tv\5> \2us\3\2\2\2ut\3\2\2\2v\25\3\2\2\2wx\t\3\2\2x\27\3\2"+
		"\2\2yz\5\32\16\2z{\7\25\2\2{|\5\36\20\2|}\7\26\2\2}\31\3\2\2\2~\u0080"+
		"\5:\36\2\177~\3\2\2\2\177\u0080\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0083"+
		"\7\3\2\2\u0082\u0084\7\17\2\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2"+
		"\u0084\u0085\3\2\2\2\u0085\u0087\5\n\6\2\u0086\u0088\5\34\17\2\u0087\u0086"+
		"\3\2\2\2\u0087\u0088\3\2\2\2\u0088\33\3\2\2\2\u0089\u008a\7\22\2\2\u008a"+
		"\u008b\7\b\2\2\u008b\u008c\5\n\6\2\u008c\35\3\2\2\2\u008d\u008f\5B\"\2"+
		"\u008e\u008d\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u0091\3\2\2\2\u0090\u0092"+
		"\5 \21\2\u0091\u0090\3\2\2\2\u0091\u0092\3\2\2\2\u0092\37\3\2\2\2\u0093"+
		"\u0095\5\"\22\2\u0094\u0096\5 \21\2\u0095\u0094\3\2\2\2\u0095\u0096\3"+
		"\2\2\2\u0096!\3\2\2\2\u0097\u009c\5$\23\2\u0098\u009c\5*\26\2\u0099\u009c"+
		"\5(\25\2\u009a\u009c\58\35\2\u009b\u0097\3\2\2\2\u009b\u0098\3\2\2\2\u009b"+
		"\u0099\3\2\2\2\u009b\u009a\3\2\2\2\u009c#\3\2\2\2\u009d\u009e\5&\24\2"+
		"\u009e\u009f\7\22\2\2\u009f%\3\2\2\2\u00a0\u00a1\t\4\2\2\u00a1\'\3\2\2"+
		"\2\u00a2\u00a3\7\5\2\2\u00a3\u00a4\7\3\2\2\u00a4\u00a5\5\n\6\2\u00a5\u00a6"+
		"\7\34\2\2\u00a6)\3\2\2\2\u00a7\u00a9\5<\37\2\u00a8\u00a7\3\2\2\2\u00a8"+
		"\u00a9\3\2\2\2\u00a9\u00ad\3\2\2\2\u00aa\u00ac\5.\30\2\u00ab\u00aa\3\2"+
		"\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae"+
		"\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00b0\u00b2\5\20\t\2\u00b1\u00b0\3"+
		"\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\5\n\6\2\u00b4"+
		"\u00b6\7\23\2\2\u00b5\u00b7\5\60\31\2\u00b6\u00b5\3\2\2\2\u00b6\u00b7"+
		"\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00ba\7\24\2\2\u00b9\u00bb\7\4\2\2"+
		"\u00ba\u00b9\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd"+
		"\5,\27\2\u00bd+\3\2\2\2\u00be\u00c1\7\34\2\2\u00bf\u00c1\5\66\34\2\u00c0"+
		"\u00be\3\2\2\2\u00c0\u00bf\3\2\2\2\u00c1-\3\2\2\2\u00c2\u00c3\t\5\2\2"+
		"\u00c3/\3\2\2\2\u00c4\u00ca\5\64\33\2\u00c5\u00c6\5\64\33\2\u00c6\u00c7"+
		"\7\31\2\2\u00c7\u00c8\5\60\31\2\u00c8\u00ca\3\2\2\2\u00c9\u00c4\3\2\2"+
		"\2\u00c9\u00c5\3\2\2\2\u00ca\61\3\2\2\2\u00cb\u00cc\5\n\6\2\u00cc\63\3"+
		"\2\2\2\u00cd\u00ce\5\20\t\2\u00ce\u00cf\5\62\32\2\u00cf\u00d6\3\2\2\2"+
		"\u00d0\u00d1\5\20\t\2\u00d1\u00d2\5\62\32\2\u00d2\u00d3\7\33\2\2\u00d3"+
		"\u00d4\5\6\4\2\u00d4\u00d6\3\2\2\2\u00d5\u00cd\3\2\2\2\u00d5\u00d0\3\2"+
		"\2\2\u00d6\65\3\2\2\2\u00d7\u00d9\7\25\2\2\u00d8\u00da\5\66\34\2\u00d9"+
		"\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00de\3\2\2\2\u00db\u00dd\n\6"+
		"\2\2\u00dc\u00db\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00df\3\2\2\2\u00de"+
		"\u00dc\3\2\2\2\u00df\u00e1\3\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u00e2\7\26"+
		"\2\2\u00e2\67\3\2\2\2\u00e3\u00e5\5@!\2\u00e4\u00e3\3\2\2\2\u00e4\u00e5"+
		"\3\2\2\2\u00e5\u00e7\3\2\2\2\u00e6\u00e8\5\20\t\2\u00e7\u00e6\3\2\2\2"+
		"\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea\5\n\6\2\u00ea\u00eb"+
		"\7\34\2\2\u00eb9\3\2\2\2\u00ec\u00ed\7\13\2\2\u00ed\u00ee\5D#\2\u00ee"+
		";\3\2\2\2\u00ef\u00f0\7\f\2\2\u00f0\u00f1\5D#\2\u00f1=\3\2\2\2\u00f2\u00f3"+
		"\7\r\2\2\u00f3\u00f4\5D#\2\u00f4?\3\2\2\2\u00f5\u00f6\7\16\2\2\u00f6\u00f7"+
		"\5D#\2\u00f7A\3\2\2\2\u00f8\u00f9\7\20\2\2\u00f9\u00fa\5D#\2\u00faC\3"+
		"\2\2\2\u00fb\u00fd\7\23\2\2\u00fc\u00fe\5F$\2\u00fd\u00fc\3\2\2\2\u00fd"+
		"\u00fe\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0100\7\24\2\2\u0100E\3\2\2\2"+
		"\u0101\u0108\5H%\2\u0102\u0103\5H%\2\u0103\u0105\7\31\2\2\u0104\u0106"+
		"\5F$\2\u0105\u0104\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0108\3\2\2\2\u0107"+
		"\u0101\3\2\2\2\u0107\u0102\3\2\2\2\u0108G\3\2\2\2\u0109\u010e\5\n\6\2"+
		"\u010a\u010e\5\f\7\2\u010b\u010e\5J&\2\u010c\u010e\5D#\2\u010d\u0109\3"+
		"\2\2\2\u010d\u010a\3\2\2\2\u010d\u010b\3\2\2\2\u010d\u010c\3\2\2\2\u010e"+
		"I\3\2\2\2\u010f\u0110\5\n\6\2\u0110\u0111\7\33\2\2\u0111\u0112\5H%\2\u0112"+
		"K\3\2\2\2 OVZejmu\177\u0083\u0087\u008e\u0091\u0095\u009b\u00a8\u00ad"+
		"\u00b1\u00b6\u00ba\u00c0\u00c9\u00d5\u00d9\u00de\u00e4\u00e7\u00fd\u0105"+
		"\u0107\u010d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}