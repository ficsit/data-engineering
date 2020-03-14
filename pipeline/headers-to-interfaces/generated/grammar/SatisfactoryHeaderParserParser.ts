// Generated from ./grammar/SatisfactoryHeaderParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SatisfactoryHeaderParserListener } from "./SatisfactoryHeaderParserListener";

export class SatisfactoryHeaderParserParser extends Parser {
	public static readonly CLASS = 1;
	public static readonly CONST = 2;
	public static readonly ENUM = 3;
	public static readonly FALSE = 4;
	public static readonly FRIEND = 5;
	public static readonly OVERRIDE = 6;
	public static readonly PRIVATE = 7;
	public static readonly PROTECTED = 8;
	public static readonly PUBLIC = 9;
	public static readonly STATIC = 10;
	public static readonly TRUE = 11;
	public static readonly VIRTUAL = 12;
	public static readonly UCLASS = 13;
	public static readonly UENUM = 14;
	public static readonly UFUNCTION = 15;
	public static readonly UPARAM = 16;
	public static readonly UPROPERTY = 17;
	public static readonly SF_CLASS_TAG = 18;
	public static readonly SF_GENERATED_BODY = 19;
	public static readonly FORCEINLINE = 20;
	public static readonly COLON = 21;
	public static readonly OPEN_PAREN = 22;
	public static readonly CLOSE_PAREN = 23;
	public static readonly OPEN_BRACE = 24;
	public static readonly CLOSE_BRACE = 25;
	public static readonly OPEN_ANGLE = 26;
	public static readonly CLOSE_ANGLE = 27;
	public static readonly COMMA = 28;
	public static readonly PERIOD = 29;
	public static readonly EQUALS = 30;
	public static readonly SEMICOLON = 31;
	public static readonly STAR = 32;
	public static readonly AMPERSAND = 33;
	public static readonly HYPHEN = 34;
	public static readonly PIPE = 35;
	public static readonly BANG = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly STRING_LITERAL = 38;
	public static readonly FLOAT_LITERAL = 39;
	public static readonly INTEGER_LITERAL = 40;
	public static readonly PREPROCESSOR = 41;
	public static readonly LINE_COMMENT_START = 42;
	public static readonly BLOCK_COMMENT_START = 43;
	public static readonly WHITESPACE = 44;
	public static readonly LINE_COMMENT_END = 45;
	public static readonly LINE_COMMENT_TEXT = 46;
	public static readonly LINE_COMMENT_OTHER = 47;
	public static readonly BLOCK_COMMENT_END = 48;
	public static readonly BLOCK_COMMENT_NEW_LINE = 49;
	public static readonly BLOCK_COMMENT_TEXT = 50;
	public static readonly BLOCK_COMMENT_OTHER = 51;
	public static readonly RULE_file = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_value = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_identifier = 4;
	public static readonly RULE_stringLiteral = 5;
	public static readonly RULE_numericLiteral = 6;
	public static readonly RULE_booleanLiteral = 7;
	public static readonly RULE_typeDeclaration = 8;
	public static readonly RULE_templateType = 9;
	public static readonly RULE_typeModifier = 10;
	public static readonly RULE_typeReferenceType = 11;
	public static readonly RULE_classDeclaration = 12;
	public static readonly RULE_classHeader = 13;
	public static readonly RULE_classInheritance = 14;
	public static readonly RULE_classExtensionList = 15;
	public static readonly RULE_classExtension = 16;
	public static readonly RULE_classBody = 17;
	public static readonly RULE_classEntries = 18;
	public static readonly RULE_classEntry = 19;
	public static readonly RULE_classVisibility = 20;
	public static readonly RULE_classVisibilityModifier = 21;
	public static readonly RULE_friendClassDeclaration = 22;
	public static readonly RULE_classMethod = 23;
	public static readonly RULE_classMethodEnd = 24;
	public static readonly RULE_classMethodModifier = 25;
	public static readonly RULE_classMethodResultModifier = 26;
	public static readonly RULE_classMethodParameterList = 27;
	public static readonly RULE_classMethodParameterName = 28;
	public static readonly RULE_classMethodParameter = 29;
	public static readonly RULE_classMethodBody = 30;
	public static readonly RULE_classProperty = 31;
	public static readonly RULE_classPropertyDefaultValue = 32;
	public static readonly RULE_enumDeclaration = 33;
	public static readonly RULE_enumHeader = 34;
	public static readonly RULE_enumBody = 35;
	public static readonly RULE_enumEntry = 36;
	public static readonly RULE_staticMethodCall = 37;
	public static readonly RULE_uclassMacro = 38;
	public static readonly RULE_uenumMacro = 39;
	public static readonly RULE_ufunctionMacro = 40;
	public static readonly RULE_uParamMacro = 41;
	public static readonly RULE_upropertyMacro = 42;
	public static readonly RULE_generatedBodyMacro = 43;
	public static readonly RULE_macroPropertyList = 44;
	public static readonly RULE_macroPropertyListEntries = 45;
	public static readonly RULE_macroProperty = 46;
	public static readonly RULE_macroPropertyPair = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UPARAM'", "'UPROPERTY'", "'FACTORYGAME_API'", 
		"'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", "')'", "'{'", "'}'", 
		"'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", "'&'", "'-'", "'|'", 
		"'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", 
		"STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", 
		"BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", 
		"LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", 
		"BLOCK_COMMENT_OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SatisfactoryHeaderParserParser._LITERAL_NAMES, SatisfactoryHeaderParserParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SatisfactoryHeaderParserParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SatisfactoryHeaderParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SatisfactoryHeaderParserParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SatisfactoryHeaderParserParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SatisfactoryHeaderParserParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SatisfactoryHeaderParserParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				{
				this.state = 96;
				this.element();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SatisfactoryHeaderParserParser.RULE_element);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.classDeclaration();
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.UENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.enumDeclaration();
				}
				break;
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 104;
				this.staticMethodCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SatisfactoryHeaderParserParser.RULE_value);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SatisfactoryHeaderParserParser.RULE_literal);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 112;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 113;
				this.booleanLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SatisfactoryHeaderParserParser.RULE_identifier);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 118;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 119;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 120;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SatisfactoryHeaderParserParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(SatisfactoryHeaderParserParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SatisfactoryHeaderParserParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.FLOAT_LITERAL || _la === SatisfactoryHeaderParserParser.INTEGER_LITERAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SatisfactoryHeaderParserParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SatisfactoryHeaderParserParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 129;
				this.typeModifier();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
			this.identifier();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 136;
				this.templateType();
				}
			}

			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STAR || _la === SatisfactoryHeaderParserParser.AMPERSAND) {
				{
				this.state = 139;
				this.typeReferenceType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateType(): TemplateTypeContext {
		let _localctx: TemplateTypeContext = new TemplateTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SatisfactoryHeaderParserParser.RULE_templateType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 143;
			this.typeDeclaration();
			this.state = 144;
			this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeModifier(): TypeModifierContext {
		let _localctx: TypeModifierContext = new TypeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SatisfactoryHeaderParserParser.RULE_typeModifier);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 148;
				this.uParamMacro();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReferenceType(): TypeReferenceTypeContext {
		let _localctx: TypeReferenceTypeContext = new TypeReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SatisfactoryHeaderParserParser.RULE_typeReferenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.STAR || _la === SatisfactoryHeaderParserParser.AMPERSAND)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SatisfactoryHeaderParserParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.classHeader();
			this.state = 154;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 155;
			this.classBody();
			this.state = 156;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 157;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classHeader(): ClassHeaderContext {
		let _localctx: ClassHeaderContext = new ClassHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SatisfactoryHeaderParserParser.RULE_classHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UCLASS) {
				{
				this.state = 160;
				this.uclassMacro();
				}
			}

			this.state = 163;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 164;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 167;
			this.identifier();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 168;
				this.classInheritance();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classInheritance(): ClassInheritanceContext {
		let _localctx: ClassInheritanceContext = new ClassInheritanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SatisfactoryHeaderParserParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 172;
			this.classExtensionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExtensionList(): ClassExtensionListContext {
		let _localctx: ClassExtensionListContext = new ClassExtensionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SatisfactoryHeaderParserParser.RULE_classExtensionList);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.classExtension();
				this.state = 176;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 177;
				this.classExtensionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classExtension(): ClassExtensionContext {
		let _localctx: ClassExtensionContext = new ClassExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_classExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.classVisibilityModifier();
			this.state = 182;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 184;
				this.generatedBodyMacro();
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 187;
				this.classEntries();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classEntries(): ClassEntriesContext {
		let _localctx: ClassEntriesContext = new ClassEntriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SatisfactoryHeaderParserParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.classEntry();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 191;
				this.classEntries();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classEntry(): ClassEntryContext {
		let _localctx: ClassEntryContext = new ClassEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SatisfactoryHeaderParserParser.RULE_classEntry);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.friendClassDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				this.classProperty();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classVisibility(): ClassVisibilityContext {
		let _localctx: ClassVisibilityContext = new ClassVisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.classVisibilityModifier();
			this.state = 201;
			this.match(SatisfactoryHeaderParserParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classVisibilityModifier(): ClassVisibilityModifierContext {
		let _localctx: ClassVisibilityModifierContext = new ClassVisibilityModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SatisfactoryHeaderParserParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public friendClassDeclaration(): FriendClassDeclarationContext {
		let _localctx: FriendClassDeclarationContext = new FriendClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SatisfactoryHeaderParserParser.RULE_friendClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 206;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 207;
			this.identifier();
			this.state = 208;
			this.match(SatisfactoryHeaderParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethod(): ClassMethodContext {
		let _localctx: ClassMethodContext = new ClassMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 210;
				this.ufunctionMacro();
				}
			}

			this.state = 216;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 213;
					this.classMethodModifier();
					}
					}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 222;
			this.identifier();
			this.state = 223;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 224;
				this.classMethodParameterList();
				}
			}

			this.state = 227;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE) {
				{
				{
				this.state = 228;
				this.classMethodResultModifier();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this.classMethodEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodEnd(): ClassMethodEndContext {
		let _localctx: ClassMethodEndContext = new ClassMethodEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		let _la: number;
		try {
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.classMethodBody();
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
					{
					this.state = 238;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodModifier(): ClassMethodModifierContext {
		let _localctx: ClassMethodModifierContext = new ClassMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SatisfactoryHeaderParserParser.RULE_classMethodModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodResultModifier(): ClassMethodResultModifierContext {
		let _localctx: ClassMethodResultModifierContext = new ClassMethodResultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodParameterList(): ClassMethodParameterListContext {
		let _localctx: ClassMethodParameterListContext = new ClassMethodParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_classMethodParameterList);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.classMethodParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.classMethodParameter();
				this.state = 249;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 250;
				this.classMethodParameterList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodParameterName(): ClassMethodParameterNameContext {
		let _localctx: ClassMethodParameterNameContext = new ClassMethodParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_classMethodParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodParameter(): ClassMethodParameterContext {
		let _localctx: ClassMethodParameterContext = new ClassMethodParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodParameter);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.typeDeclaration();
				this.state = 257;
				this.classMethodParameterName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.typeDeclaration();
				this.state = 260;
				this.classMethodParameterName();
				this.state = 261;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 262;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classMethodBody(): ClassMethodBodyContext {
		let _localctx: ClassMethodBodyContext = new ClassMethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_classMethodBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_BRACE) {
				{
				this.state = 267;
				this.classMethodBody();
				}
			}

			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.COLON) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.CLOSE_PAREN) | (1 << SatisfactoryHeaderParserParser.OPEN_ANGLE) | (1 << SatisfactoryHeaderParserParser.CLOSE_ANGLE) | (1 << SatisfactoryHeaderParserParser.COMMA) | (1 << SatisfactoryHeaderParserParser.PERIOD) | (1 << SatisfactoryHeaderParserParser.EQUALS) | (1 << SatisfactoryHeaderParserParser.SEMICOLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.HYPHEN - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 32)))) !== 0)) {
				{
				{
				this.state = 270;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.OPEN_BRACE || _la === SatisfactoryHeaderParserParser.CLOSE_BRACE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classProperty(): ClassPropertyContext {
		let _localctx: ClassPropertyContext = new ClassPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 278;
				this.upropertyMacro();
				}
			}

			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STATIC) {
				{
				this.state = 281;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
			}

			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 287;
			this.identifier();
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 288;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 291;
			this.match(SatisfactoryHeaderParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classPropertyDefaultValue(): ClassPropertyDefaultValueContext {
		let _localctx: ClassPropertyDefaultValueContext = new ClassPropertyDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SatisfactoryHeaderParserParser.RULE_classPropertyDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 294;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.enumHeader();
			this.state = 297;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 298;
			this.enumBody();
			this.state = 299;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 300;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumHeader(): EnumHeaderContext {
		let _localctx: EnumHeaderContext = new EnumHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 303;
					this.uenumMacro();
					}
				}

				this.state = 306;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 307;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 310;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 311;
					this.uenumMacro();
					}
				}

				this.state = 314;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 315;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 318;
				this.identifier();
				this.state = 319;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 320;
				this.typeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_enumBody);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 324;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 325;
				this.enumEntry();
				this.state = 326;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 327;
				this.enumBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_enumEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticMethodCall(): StaticMethodCallContext {
		let _localctx: StaticMethodCallContext = new StaticMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.identifier();
			this.state = 334;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 335;
				_la = this._input.LA(1);
				if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.CLOSE_PAREN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.COLON) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.OPEN_BRACE) | (1 << SatisfactoryHeaderParserParser.CLOSE_BRACE) | (1 << SatisfactoryHeaderParserParser.OPEN_ANGLE) | (1 << SatisfactoryHeaderParserParser.CLOSE_ANGLE) | (1 << SatisfactoryHeaderParserParser.COMMA) | (1 << SatisfactoryHeaderParserParser.PERIOD) | (1 << SatisfactoryHeaderParserParser.EQUALS) | (1 << SatisfactoryHeaderParserParser.SEMICOLON))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.HYPHEN - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 32)))) !== 0));
			this.state = 340;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 341;
			this.match(SatisfactoryHeaderParserParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uclassMacro(): UclassMacroContext {
		let _localctx: UclassMacroContext = new UclassMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 344;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uenumMacro(): UenumMacroContext {
		let _localctx: UenumMacroContext = new UenumMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 347;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ufunctionMacro(): UfunctionMacroContext {
		let _localctx: UfunctionMacroContext = new UfunctionMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 350;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uParamMacro(): UParamMacroContext {
		let _localctx: UParamMacroContext = new UParamMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 353;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upropertyMacro(): UpropertyMacroContext {
		let _localctx: UpropertyMacroContext = new UpropertyMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 356;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatedBodyMacro(): GeneratedBodyMacroContext {
		let _localctx: GeneratedBodyMacroContext = new GeneratedBodyMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 359;
			this.macroPropertyList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroPropertyList(): MacroPropertyListContext {
		let _localctx: MacroPropertyListContext = new MacroPropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 37)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 37)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 37)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 37)))) !== 0)) {
				{
				this.state = 362;
				this.macroPropertyListEntries();
				}
			}

			this.state = 365;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroPropertyListEntries(): MacroPropertyListEntriesContext {
		let _localctx: MacroPropertyListEntriesContext = new MacroPropertyListEntriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.macroProperty();
				this.state = 369;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 37)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 37)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 37)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 37)))) !== 0)) {
					{
					this.state = 370;
					this.macroPropertyListEntries();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroProperty(): MacroPropertyContext {
		let _localctx: MacroPropertyContext = new MacroPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 375;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 376;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 377;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 378;
				this.macroPropertyList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroPropertyPair(): MacroPropertyPairContext {
		let _localctx: MacroPropertyPairContext = new MacroPropertyPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.identifier();
			this.state = 382;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 383;
			this.macroProperty();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\u0184\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x07\x02d\n\x02" +
		"\f\x02\x0E\x02g\v\x02\x03\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x04\x03" +
		"\x04\x05\x04p\n\x04\x03\x05\x03\x05\x03\x05\x05\x05u\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06|\n\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x07\n\x85\n\n\f\n\x0E\n\x88\v\n\x03\n\x03\n\x05\n" +
		"\x8C\n\n\x03\n\x05\n\x8F\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x05\f\x98\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xA1\n\x0E\x03\x0F\x05\x0F\xA4\n\x0F\x03\x0F\x03\x0F\x05\x0F\xA8\n" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xAC\n\x0F\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB6\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x13\x05\x13\xBC\n\x13\x03\x13\x05\x13\xBF\n\x13\x03\x14\x03\x14" +
		"\x05\x14\xC3\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xC9\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x05\x19\xD6\n\x19\x03\x19\x07\x19\xD9\n\x19\f\x19\x0E\x19" +
		"\xDC\v\x19\x03\x19\x05\x19\xDF\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\xE4" +
		"\n\x19\x03\x19\x03\x19\x07\x19\xE8\n\x19\f\x19\x0E\x19\xEB\v\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xF2\n\x1A\x05\x1A\xF4\n\x1A\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\xFF\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u010B\n\x1F\x03 \x03 \x05 \u010F\n \x03" +
		" \x07 \u0112\n \f \x0E \u0115\v \x03 \x03 \x03!\x05!\u011A\n!\x03!\x05" +
		"!\u011D\n!\x03!\x05!\u0120\n!\x03!\x03!\x05!\u0124\n!\x03!\x03!\x03\"" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x05#\u0130\n#\x03$\x05$\u0133\n" +
		"$\x03$\x03$\x05$\u0137\n$\x03$\x03$\x05$\u013B\n$\x03$\x03$\x05$\u013F" +
		"\n$\x03$\x03$\x03$\x03$\x05$\u0145\n$\x03%\x03%\x03%\x03%\x03%\x05%\u014C" +
		"\n%\x03&\x03&\x03\'\x03\'\x03\'\x06\'\u0153\n\'\r\'\x0E\'\u0154\x03\'" +
		"\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03" +
		"+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x05.\u016E\n.\x03.\x03.\x03" +
		"/\x03/\x03/\x03/\x05/\u0176\n/\x05/\u0178\n/\x030\x030\x030\x030\x050" +
		"\u017E\n0\x031\x031\x031\x031\x031\x02\x02\x022\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02\x02\n\x03\x02)*\x04\x02" +
		"\x06\x06\r\r\x03\x02\"#\x03\x02\t\v\x06\x02\x04\x04\f\f\x0E\x0E\x16\x16" +
		"\x04\x02\x04\x04\b\b\x03\x02\x1A\x1B\x03\x02\x19\x19\x02\u0187\x02e\x03" +
		"\x02\x02\x02\x04k\x03\x02\x02\x02\x06o\x03\x02\x02\x02\bt\x03\x02\x02" +
		"\x02\n{\x03\x02\x02\x02\f}\x03\x02\x02\x02\x0E\x7F\x03\x02\x02\x02\x10" +
		"\x81\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\x90\x03\x02\x02\x02\x16" +
		"\x97\x03\x02\x02\x02\x18\x99\x03\x02\x02\x02\x1A\x9B\x03\x02\x02\x02\x1C" +
		"\xA3\x03\x02\x02\x02\x1E\xAD\x03\x02\x02\x02 \xB5\x03\x02\x02\x02\"\xB7" +
		"\x03\x02\x02\x02$\xBB\x03\x02\x02\x02&\xC0\x03\x02\x02\x02(\xC8\x03\x02" +
		"\x02\x02*\xCA\x03\x02\x02\x02,\xCD\x03\x02\x02\x02.\xCF\x03\x02\x02\x02" +
		"0\xD5\x03\x02\x02\x022\xF3\x03\x02\x02\x024\xF5\x03\x02\x02\x026\xF7\x03" +
		"\x02\x02\x028\xFE\x03\x02\x02\x02:\u0100\x03\x02\x02\x02<\u010A\x03\x02" +
		"\x02\x02>\u010C\x03\x02\x02\x02@\u0119\x03\x02\x02\x02B\u0127\x03\x02" +
		"\x02\x02D\u012A\x03\x02\x02\x02F\u0144\x03\x02\x02\x02H\u014B\x03\x02" +
		"\x02\x02J\u014D\x03\x02\x02\x02L\u014F\x03\x02\x02\x02N\u0159\x03\x02" +
		"\x02\x02P\u015C\x03\x02\x02\x02R\u015F\x03\x02\x02\x02T\u0162\x03\x02" +
		"\x02\x02V\u0165\x03\x02\x02\x02X\u0168\x03\x02\x02\x02Z\u016B\x03\x02" +
		"\x02\x02\\\u0177\x03\x02\x02\x02^\u017D\x03\x02\x02\x02`\u017F\x03\x02" +
		"\x02\x02bd\x05\x04\x03\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02" +
		"\x02\x02ef\x03\x02\x02\x02f\x03\x03\x02\x02\x02ge\x03\x02\x02\x02hl\x05" +
		"\x1A\x0E\x02il\x05D#\x02jl\x05L\'\x02kh\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02kj\x03\x02\x02\x02l\x05\x03\x02\x02\x02mp\x05\n\x06\x02np\x05\b\x05" +
		"\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\x07\x03\x02\x02\x02qu\x05\f" +
		"\x07\x02ru\x05\x0E\b\x02su\x05\x10\t\x02tq\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02ts\x03\x02\x02\x02u\t\x03\x02\x02\x02v|\x07\'\x02\x02wx\x07\'\x02" +
		"\x02xy\x07\x17\x02\x02yz\x07\x17\x02\x02z|\x07\'\x02\x02{v\x03\x02\x02" +
		"\x02{w\x03\x02\x02\x02|\v\x03\x02\x02\x02}~\x07(\x02\x02~\r\x03\x02\x02" +
		"\x02\x7F\x80\t\x02\x02\x02\x80\x0F\x03\x02\x02\x02\x81\x82\t\x03\x02\x02" +
		"\x82\x11\x03\x02\x02\x02\x83\x85\x05\x16\f\x02\x84\x83\x03\x02\x02\x02" +
		"\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
		"\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8B\x05\n\x06\x02" +
		"\x8A\x8C\x05\x14\v\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02" +
		"\x8C\x8E\x03\x02\x02\x02\x8D\x8F\x05\x18\r\x02\x8E\x8D\x03\x02\x02\x02" +
		"\x8E\x8F\x03\x02\x02\x02\x8F\x13\x03\x02\x02\x02\x90\x91\x07\x1C\x02\x02" +
		"\x91\x92\x05\x12\n\x02\x92\x93\x07\x1D\x02\x02\x93\x15\x03\x02\x02\x02" +
		"\x94\x98\x07\x03\x02\x02\x95\x98\x07\x04\x02\x02\x96\x98\x05T+\x02\x97" +
		"\x94\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98" +
		"\x17\x03\x02\x02\x02\x99\x9A\t\x04\x02\x02\x9A\x19\x03\x02\x02\x02\x9B" +
		"\x9C\x05\x1C\x0F\x02\x9C\x9D\x07\x1A\x02\x02\x9D\x9E\x05$\x13\x02\x9E" +
		"\xA0\x07\x1B\x02\x02\x9F\xA1\x07!\x02\x02\xA0\x9F\x03\x02\x02\x02\xA0" +
		"\xA1\x03\x02\x02\x02\xA1\x1B\x03\x02\x02\x02\xA2\xA4\x05N(\x02\xA3\xA2" +
		"\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA7" +
		"\x07\x03\x02\x02\xA6\xA8\x07\x14\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8" +
		"\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x05\n\x06\x02\xAA\xAC" +
		"\x05\x1E\x10\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\x1D" +
		"\x03\x02\x02\x02\xAD\xAE\x07\x17\x02\x02\xAE\xAF\x05 \x11\x02\xAF\x1F" +
		"\x03\x02\x02\x02\xB0\xB6\x05\"\x12\x02\xB1\xB2\x05\"\x12\x02\xB2\xB3\x07" +
		"\x1E\x02\x02\xB3\xB4\x05 \x11\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB0\x03" +
		"\x02\x02\x02\xB5\xB1\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7\xB8\x05" +
		",\x17\x02\xB8\xB9\x05\n\x06\x02\xB9#\x03\x02\x02\x02\xBA\xBC\x05X-\x02" +
		"\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02" +
		"\xBD\xBF\x05&\x14\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF%\x03\x02\x02\x02\xC0\xC2\x05(\x15\x02\xC1\xC3\x05&\x14\x02\xC2\xC1" +
		"\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\'\x03\x02\x02\x02\xC4\xC9" +
		"\x05*\x16\x02\xC5\xC9\x050\x19\x02\xC6\xC9\x05.\x18\x02\xC7\xC9\x05@!" +
		"\x02\xC8\xC4\x03\x02\x02\x02\xC8\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02" +
		"\x02\xC8\xC7\x03\x02\x02\x02\xC9)\x03\x02\x02\x02\xCA\xCB\x05,\x17\x02" +
		"\xCB\xCC\x07\x17\x02\x02\xCC+\x03\x02\x02\x02\xCD\xCE\t\x05\x02\x02\xCE" +
		"-\x03\x02\x02\x02\xCF\xD0\x07\x07\x02\x02\xD0\xD1\x07\x03\x02\x02\xD1" +
		"\xD2\x05\n\x06\x02\xD2\xD3\x07!\x02\x02\xD3/\x03\x02\x02\x02\xD4\xD6\x05" +
		"R*\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xDA\x03\x02" +
		"\x02\x02\xD7\xD9\x054\x1B\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02" +
		"\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE\x03\x02" +
		"\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x05\x12\n\x02\xDE\xDD\x03\x02" +
		"\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x05\n" +
		"\x06\x02\xE1\xE3\x07\x18\x02\x02\xE2\xE4\x058\x1D\x02\xE3\xE2\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE9\x07\x19" +
		"\x02\x02\xE6\xE8\x056\x1C\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02" +
		"\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\x052\x1A\x02\xED1\x03\x02\x02" +
		"\x02\xEE\xF4\x07!\x02\x02\xEF\xF1\x05> \x02\xF0\xF2\x07!\x02\x02\xF1\xF0" +
		"\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xEE" +
		"\x03\x02\x02\x02\xF3\xEF\x03\x02\x02\x02\xF43\x03\x02\x02\x02\xF5\xF6" +
		"\t\x06\x02\x02\xF65\x03\x02\x02\x02\xF7\xF8\t\x07\x02\x02\xF87\x03\x02" +
		"\x02\x02\xF9\xFF\x05<\x1F\x02\xFA\xFB\x05<\x1F\x02\xFB\xFC\x07\x1E\x02" +
		"\x02\xFC\xFD\x058\x1D\x02\xFD\xFF\x03\x02\x02\x02\xFE\xF9\x03\x02\x02" +
		"\x02\xFE\xFA\x03\x02\x02\x02\xFF9\x03\x02\x02\x02\u0100\u0101\x05\n\x06" +
		"\x02\u0101;\x03\x02\x02\x02\u0102\u0103\x05\x12\n\x02\u0103\u0104\x05" +
		":\x1E\x02\u0104\u010B\x03\x02\x02\x02\u0105\u0106\x05\x12\n\x02\u0106" +
		"\u0107\x05:\x1E\x02\u0107\u0108\x07 \x02\x02\u0108\u0109\x05\x06\x04\x02" +
		"\u0109\u010B\x03\x02\x02\x02\u010A\u0102\x03\x02\x02\x02\u010A\u0105\x03" +
		"\x02\x02\x02\u010B=\x03\x02\x02\x02\u010C\u010E\x07\x1A\x02\x02\u010D" +
		"\u010F\x05> \x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02" +
		"\u010F\u0113\x03\x02\x02\x02\u0110\u0112\n\b\x02\x02\u0111\u0110\x03\x02" +
		"\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113" +
		"\u0114\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0113\x03\x02" +
		"\x02\x02\u0116\u0117\x07\x1B\x02\x02\u0117?\x03\x02\x02\x02\u0118\u011A" +
		"\x05V,\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"\u011C\x03\x02\x02\x02\u011B\u011D\x07\f\x02\x02\u011C\u011B\x03\x02\x02" +
		"\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\u0120" +
		"\x05\x12\n\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02" +
		"\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x05\n\x06\x02\u0122\u0124\x05" +
		"B\"\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0126\x07!\x02\x02\u0126A\x03\x02\x02\x02" +
		"\u0127\u0128\x07\x17\x02\x02\u0128\u0129\x05\b\x05\x02\u0129C\x03\x02" +
		"\x02\x02\u012A\u012B\x05F$\x02\u012B\u012C\x07\x1A\x02\x02\u012C\u012D" +
		"\x05H%\x02\u012D\u012F\x07\x1B\x02\x02\u012E\u0130\x07!\x02\x02\u012F" +
		"\u012E\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130E\x03\x02\x02" +
		"\x02\u0131\u0133\x05P)\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0136\x07\x05\x02\x02\u0135" +
		"\u0137\x07\x03\x02\x02\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02" +
		"\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0145\x05\n\x06\x02\u0139\u013B" +
		"\x05P)\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u013E\x07\x05\x02\x02\u013D\u013F\x07\x03" +
		"\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\u0141\x05\n\x06\x02\u0141\u0142\x07\x17\x02" +
		"\x02\u0142\u0143\x05\x12\n\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0132" +
		"\x03\x02\x02\x02\u0144\u013A\x03\x02\x02\x02\u0145G\x03\x02\x02\x02\u0146" +
		"\u014C\x05J&\x02\u0147\u0148\x05J&\x02\u0148\u0149\x07\x1E\x02\x02\u0149" +
		"\u014A\x05H%\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0146\x03\x02\x02\x02" +
		"\u014B\u0147\x03\x02\x02\x02\u014CI\x03\x02\x02\x02\u014D\u014E\x05\n" +
		"\x06\x02\u014EK\x03\x02\x02\x02\u014F\u0150\x05\n\x06\x02\u0150\u0152" +
		"\x07\x18\x02\x02\u0151\u0153\n\t\x02\x02\u0152\u0151\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02" +
		"\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x07\x19\x02\x02\u0157" +
		"\u0158\x07!\x02\x02\u0158M\x03\x02\x02\x02\u0159\u015A\x07\x0F\x02\x02" +
		"\u015A\u015B\x05Z.\x02\u015BO\x03\x02\x02\x02\u015C\u015D\x07\x10\x02" +
		"\x02\u015D\u015E\x05Z.\x02\u015EQ\x03\x02\x02\x02\u015F\u0160\x07\x11" +
		"\x02\x02\u0160\u0161\x05Z.\x02\u0161S\x03\x02\x02\x02\u0162\u0163\x07" +
		"\x12\x02\x02\u0163\u0164\x05Z.\x02\u0164U\x03\x02\x02\x02\u0165\u0166" +
		"\x07\x13\x02\x02\u0166\u0167\x05Z.\x02\u0167W\x03\x02\x02\x02\u0168\u0169" +
		"\x07\x15\x02\x02\u0169\u016A\x05Z.\x02\u016AY\x03\x02\x02\x02\u016B\u016D" +
		"\x07\x18\x02\x02\u016C\u016E\x05\\/\x02\u016D\u016C\x03\x02\x02\x02\u016D" +
		"\u016E\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x07\x19" +
		"\x02\x02\u0170[\x03\x02\x02\x02\u0171\u0178\x05^0\x02\u0172\u0173\x05" +
		"^0\x02\u0173\u0175\x07\x1E\x02\x02\u0174\u0176\x05\\/\x02\u0175\u0174" +
		"\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02\x02\x02" +
		"\u0177\u0171\x03\x02\x02\x02\u0177\u0172\x03\x02\x02\x02\u0178]\x03\x02" +
		"\x02\x02\u0179\u017E\x05\n\x06\x02\u017A\u017E\x05\b\x05\x02\u017B\u017E" +
		"\x05`1\x02\u017C\u017E\x05Z.\x02\u017D\u0179\x03\x02\x02\x02\u017D\u017A" +
		"\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017E_\x03\x02\x02\x02\u017F\u0180\x05\n\x06\x02\u0180\u0181\x07 \x02" +
		"\x02\u0181\u0182\x05^0\x02\u0182a\x03\x02\x02\x02/ekot{\x86\x8B\x8E\x97" +
		"\xA0\xA3\xA7\xAB\xB5\xBB\xBE\xC2\xC8\xD5\xDA\xDE\xE3\xE9\xF1\xF3\xFE\u010A" +
		"\u010E\u0113\u0119\u011C\u011F\u0123\u012F\u0132\u0136\u013A\u013E\u0144" +
		"\u014B\u0154\u016D\u0175\u0177\u017D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SatisfactoryHeaderParserParser.__ATN) {
			SatisfactoryHeaderParserParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SatisfactoryHeaderParserParser._serializedATN));
		}

		return SatisfactoryHeaderParserParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_file; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public staticMethodCall(): StaticMethodCallContext | undefined {
		return this.tryGetRuleContext(0, StaticMethodCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_element; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_value; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_literal; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.IDENTIFIER);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.IDENTIFIER, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.COLON);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.INTEGER_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeModifier(): TypeModifierContext[];
	public typeModifier(i: number): TypeModifierContext;
	public typeModifier(i?: number): TypeModifierContext | TypeModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeModifierContext);
		} else {
			return this.getRuleContext(i, TypeModifierContext);
		}
	}
	public templateType(): TemplateTypeContext | undefined {
		return this.tryGetRuleContext(0, TemplateTypeContext);
	}
	public typeReferenceType(): TypeReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class TemplateTypeContext extends ParserRuleContext {
	public OPEN_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, 0); }
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public CLOSE_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_templateType; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTemplateType) {
			listener.enterTemplateType(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTemplateType) {
			listener.exitTemplateType(this);
		}
	}
}


export class TypeModifierContext extends ParserRuleContext {
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public uParamMacro(): UParamMacroContext | undefined {
		return this.tryGetRuleContext(0, UParamMacroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_typeModifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTypeModifier) {
			listener.enterTypeModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTypeModifier) {
			listener.exitTypeModifier(this);
		}
	}
}


export class TypeReferenceTypeContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STAR, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_typeReferenceType; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTypeReferenceType) {
			listener.enterTypeReferenceType(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTypeReferenceType) {
			listener.exitTypeReferenceType(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public classHeader(): ClassHeaderContext {
		return this.getRuleContext(0, ClassHeaderContext);
	}
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class ClassHeaderContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public uclassMacro(): UclassMacroContext | undefined {
		return this.tryGetRuleContext(0, UclassMacroContext);
	}
	public SF_CLASS_TAG(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SF_CLASS_TAG, 0); }
	public classInheritance(): ClassInheritanceContext | undefined {
		return this.tryGetRuleContext(0, ClassInheritanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classHeader; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassHeader) {
			listener.enterClassHeader(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassHeader) {
			listener.exitClassHeader(this);
		}
	}
}


export class ClassInheritanceContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public classExtensionList(): ClassExtensionListContext {
		return this.getRuleContext(0, ClassExtensionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classInheritance; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassInheritance) {
			listener.enterClassInheritance(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassInheritance) {
			listener.exitClassInheritance(this);
		}
	}
}


export class ClassExtensionListContext extends ParserRuleContext {
	public classExtension(): ClassExtensionContext {
		return this.getRuleContext(0, ClassExtensionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public classExtensionList(): ClassExtensionListContext | undefined {
		return this.tryGetRuleContext(0, ClassExtensionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classExtensionList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassExtensionList) {
			listener.enterClassExtensionList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassExtensionList) {
			listener.exitClassExtensionList(this);
		}
	}
}


export class ClassExtensionContext extends ParserRuleContext {
	public classVisibilityModifier(): ClassVisibilityModifierContext {
		return this.getRuleContext(0, ClassVisibilityModifierContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classExtension; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassExtension) {
			listener.enterClassExtension(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassExtension) {
			listener.exitClassExtension(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public generatedBodyMacro(): GeneratedBodyMacroContext | undefined {
		return this.tryGetRuleContext(0, GeneratedBodyMacroContext);
	}
	public classEntries(): ClassEntriesContext | undefined {
		return this.tryGetRuleContext(0, ClassEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classBody; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class ClassEntriesContext extends ParserRuleContext {
	public classEntry(): ClassEntryContext {
		return this.getRuleContext(0, ClassEntryContext);
	}
	public classEntries(): ClassEntriesContext | undefined {
		return this.tryGetRuleContext(0, ClassEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classEntries; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassEntries) {
			listener.enterClassEntries(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassEntries) {
			listener.exitClassEntries(this);
		}
	}
}


export class ClassEntryContext extends ParserRuleContext {
	public classVisibility(): ClassVisibilityContext | undefined {
		return this.tryGetRuleContext(0, ClassVisibilityContext);
	}
	public classMethod(): ClassMethodContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodContext);
	}
	public friendClassDeclaration(): FriendClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FriendClassDeclarationContext);
	}
	public classProperty(): ClassPropertyContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classEntry; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassEntry) {
			listener.enterClassEntry(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassEntry) {
			listener.exitClassEntry(this);
		}
	}
}


export class ClassVisibilityContext extends ParserRuleContext {
	public classVisibilityModifier(): ClassVisibilityModifierContext {
		return this.getRuleContext(0, ClassVisibilityModifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classVisibility; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassVisibility) {
			listener.enterClassVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassVisibility) {
			listener.exitClassVisibility(this);
		}
	}
}


export class ClassVisibilityModifierContext extends ParserRuleContext {
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classVisibilityModifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassVisibilityModifier) {
			listener.enterClassVisibilityModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassVisibilityModifier) {
			listener.exitClassVisibilityModifier(this);
		}
	}
}


export class FriendClassDeclarationContext extends ParserRuleContext {
	public FRIEND(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
	public CLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_friendClassDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterFriendClassDeclaration) {
			listener.enterFriendClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitFriendClassDeclaration) {
			listener.exitFriendClassDeclaration(this);
		}
	}
}


export class ClassMethodContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
	public classMethodEnd(): ClassMethodEndContext {
		return this.getRuleContext(0, ClassMethodEndContext);
	}
	public ufunctionMacro(): UfunctionMacroContext | undefined {
		return this.tryGetRuleContext(0, UfunctionMacroContext);
	}
	public classMethodModifier(): ClassMethodModifierContext[];
	public classMethodModifier(i: number): ClassMethodModifierContext;
	public classMethodModifier(i?: number): ClassMethodModifierContext | ClassMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMethodModifierContext);
		} else {
			return this.getRuleContext(i, ClassMethodModifierContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public classMethodParameterList(): ClassMethodParameterListContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodParameterListContext);
	}
	public classMethodResultModifier(): ClassMethodResultModifierContext[];
	public classMethodResultModifier(i: number): ClassMethodResultModifierContext;
	public classMethodResultModifier(i?: number): ClassMethodResultModifierContext | ClassMethodResultModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMethodResultModifierContext);
		} else {
			return this.getRuleContext(i, ClassMethodResultModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethod; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethod) {
			listener.enterClassMethod(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethod) {
			listener.exitClassMethod(this);
		}
	}
}


export class ClassMethodEndContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	public classMethodBody(): ClassMethodBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodEnd; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodEnd) {
			listener.enterClassMethodEnd(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodEnd) {
			listener.exitClassMethodEnd(this);
		}
	}
}


export class ClassMethodModifierContext extends ParserRuleContext {
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STATIC, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodModifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodModifier) {
			listener.enterClassMethodModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodModifier) {
			listener.exitClassMethodModifier(this);
		}
	}
}


export class ClassMethodResultModifierContext extends ParserRuleContext {
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.OVERRIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodResultModifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodResultModifier) {
			listener.enterClassMethodResultModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodResultModifier) {
			listener.exitClassMethodResultModifier(this);
		}
	}
}


export class ClassMethodParameterListContext extends ParserRuleContext {
	public classMethodParameter(): ClassMethodParameterContext {
		return this.getRuleContext(0, ClassMethodParameterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public classMethodParameterList(): ClassMethodParameterListContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodParameterList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodParameterList) {
			listener.enterClassMethodParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodParameterList) {
			listener.exitClassMethodParameterList(this);
		}
	}
}


export class ClassMethodParameterNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodParameterName; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodParameterName) {
			listener.enterClassMethodParameterName(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodParameterName) {
			listener.exitClassMethodParameterName(this);
		}
	}
}


export class ClassMethodParameterContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public classMethodParameterName(): ClassMethodParameterNameContext {
		return this.getRuleContext(0, ClassMethodParameterNameContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodParameter; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodParameter) {
			listener.enterClassMethodParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodParameter) {
			listener.exitClassMethodParameter(this);
		}
	}
}


export class ClassMethodBodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode[];
	public OPEN_BRACE(i: number): TerminalNode;
	public OPEN_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.OPEN_BRACE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, i);
		}
	}
	public CLOSE_BRACE(): TerminalNode[];
	public CLOSE_BRACE(i: number): TerminalNode;
	public CLOSE_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_BRACE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, i);
		}
	}
	public classMethodBody(): ClassMethodBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodBody; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodBody) {
			listener.enterClassMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodBody) {
			listener.exitClassMethodBody(this);
		}
	}
}


export class ClassPropertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	public upropertyMacro(): UpropertyMacroContext | undefined {
		return this.tryGetRuleContext(0, UpropertyMacroContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STATIC, 0); }
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public classPropertyDefaultValue(): ClassPropertyDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertyDefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classProperty; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassProperty) {
			listener.enterClassProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassProperty) {
			listener.exitClassProperty(this);
		}
	}
}


export class ClassPropertyDefaultValueContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classPropertyDefaultValue; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassPropertyDefaultValue) {
			listener.enterClassPropertyDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassPropertyDefaultValue) {
			listener.exitClassPropertyDefaultValue(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public enumHeader(): EnumHeaderContext {
		return this.getRuleContext(0, EnumHeaderContext);
	}
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class EnumHeaderContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public uenumMacro(): UenumMacroContext | undefined {
		return this.tryGetRuleContext(0, UenumMacroContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_enumHeader; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterEnumHeader) {
			listener.enterEnumHeader(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitEnumHeader) {
			listener.exitEnumHeader(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public enumEntry(): EnumEntryContext {
		return this.getRuleContext(0, EnumEntryContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public enumBody(): EnumBodyContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
}


export class EnumEntryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_enumEntry; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterEnumEntry) {
			listener.enterEnumEntry(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitEnumEntry) {
			listener.exitEnumEntry(this);
		}
	}
}


export class StaticMethodCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode[];
	public CLOSE_PAREN(i: number): TerminalNode;
	public CLOSE_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_PAREN);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, i);
		}
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_staticMethodCall; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStaticMethodCall) {
			listener.enterStaticMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStaticMethodCall) {
			listener.exitStaticMethodCall(this);
		}
	}
}


export class UclassMacroContext extends ParserRuleContext {
	public UCLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UCLASS, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_uclassMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUclassMacro) {
			listener.enterUclassMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUclassMacro) {
			listener.exitUclassMacro(this);
		}
	}
}


export class UenumMacroContext extends ParserRuleContext {
	public UENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UENUM, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_uenumMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUenumMacro) {
			listener.enterUenumMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUenumMacro) {
			listener.exitUenumMacro(this);
		}
	}
}


export class UfunctionMacroContext extends ParserRuleContext {
	public UFUNCTION(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UFUNCTION, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_ufunctionMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUfunctionMacro) {
			listener.enterUfunctionMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUfunctionMacro) {
			listener.exitUfunctionMacro(this);
		}
	}
}


export class UParamMacroContext extends ParserRuleContext {
	public UPARAM(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UPARAM, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_uParamMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUParamMacro) {
			listener.enterUParamMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUParamMacro) {
			listener.exitUParamMacro(this);
		}
	}
}


export class UpropertyMacroContext extends ParserRuleContext {
	public UPROPERTY(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UPROPERTY, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_upropertyMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUpropertyMacro) {
			listener.enterUpropertyMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUpropertyMacro) {
			listener.exitUpropertyMacro(this);
		}
	}
}


export class GeneratedBodyMacroContext extends ParserRuleContext {
	public SF_GENERATED_BODY(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SF_GENERATED_BODY, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_generatedBodyMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterGeneratedBodyMacro) {
			listener.enterGeneratedBodyMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitGeneratedBodyMacro) {
			listener.exitGeneratedBodyMacro(this);
		}
	}
}


export class MacroPropertyListContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
	public macroPropertyListEntries(): MacroPropertyListEntriesContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyListEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_macroPropertyList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterMacroPropertyList) {
			listener.enterMacroPropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitMacroPropertyList) {
			listener.exitMacroPropertyList(this);
		}
	}
}


export class MacroPropertyListEntriesContext extends ParserRuleContext {
	public macroProperty(): MacroPropertyContext {
		return this.getRuleContext(0, MacroPropertyContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public macroPropertyListEntries(): MacroPropertyListEntriesContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyListEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterMacroPropertyListEntries) {
			listener.enterMacroPropertyListEntries(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitMacroPropertyListEntries) {
			listener.exitMacroPropertyListEntries(this);
		}
	}
}


export class MacroPropertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public macroPropertyPair(): MacroPropertyPairContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyPairContext);
	}
	public macroPropertyList(): MacroPropertyListContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_macroProperty; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterMacroProperty) {
			listener.enterMacroProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitMacroProperty) {
			listener.exitMacroProperty(this);
		}
	}
}


export class MacroPropertyPairContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public macroProperty(): MacroPropertyContext {
		return this.getRuleContext(0, MacroPropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_macroPropertyPair; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterMacroPropertyPair) {
			listener.enterMacroPropertyPair(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitMacroPropertyPair) {
			listener.exitMacroPropertyPair(this);
		}
	}
}


