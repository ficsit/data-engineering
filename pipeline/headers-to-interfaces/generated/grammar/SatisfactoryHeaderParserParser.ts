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
	public static readonly TYPEDEF = 12;
	public static readonly VIRTUAL = 13;
	public static readonly UCLASS = 14;
	public static readonly UENUM = 15;
	public static readonly UFUNCTION = 16;
	public static readonly UINTERFACE = 17;
	public static readonly UMETA = 18;
	public static readonly UPARAM = 19;
	public static readonly UPROPERTY = 20;
	public static readonly FORCEINLINE = 21;
	public static readonly SF_CLASS_TAG = 22;
	public static readonly SF_GENERATED_BODY = 23;
	public static readonly COLON = 24;
	public static readonly OPEN_PAREN = 25;
	public static readonly CLOSE_PAREN = 26;
	public static readonly OPEN_BRACE = 27;
	public static readonly CLOSE_BRACE = 28;
	public static readonly OPEN_ANGLE = 29;
	public static readonly CLOSE_ANGLE = 30;
	public static readonly COMMA = 31;
	public static readonly PERIOD = 32;
	public static readonly EQUALS = 33;
	public static readonly SEMICOLON = 34;
	public static readonly STAR = 35;
	public static readonly AMPERSAND = 36;
	public static readonly HYPHEN = 37;
	public static readonly PIPE = 38;
	public static readonly BANG = 39;
	public static readonly IDENTIFIER = 40;
	public static readonly STRING_LITERAL = 41;
	public static readonly FLOAT_LITERAL = 42;
	public static readonly INTEGER_LITERAL = 43;
	public static readonly PREPROCESSOR = 44;
	public static readonly LINE_COMMENT_START = 45;
	public static readonly BLOCK_COMMENT_START = 46;
	public static readonly WHITESPACE = 47;
	public static readonly LINE_COMMENT_END = 48;
	public static readonly LINE_COMMENT_TEXT = 49;
	public static readonly LINE_COMMENT_OTHER = 50;
	public static readonly BLOCK_COMMENT_END = 51;
	public static readonly BLOCK_COMMENT_NEW_LINE = 52;
	public static readonly BLOCK_COMMENT_TEXT = 53;
	public static readonly BLOCK_COMMENT_OTHER = 54;
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
	public static readonly RULE_templateTypeList = 10;
	public static readonly RULE_typeModifier = 11;
	public static readonly RULE_typeReferenceType = 12;
	public static readonly RULE_classDeclaration = 13;
	public static readonly RULE_classHeader = 14;
	public static readonly RULE_classInheritance = 15;
	public static readonly RULE_classExtensionList = 16;
	public static readonly RULE_classExtension = 17;
	public static readonly RULE_classBody = 18;
	public static readonly RULE_classEntries = 19;
	public static readonly RULE_classEntry = 20;
	public static readonly RULE_classVisibility = 21;
	public static readonly RULE_classVisibilityModifier = 22;
	public static readonly RULE_friendDeclaration = 23;
	public static readonly RULE_classMethod = 24;
	public static readonly RULE_classMethodEnd = 25;
	public static readonly RULE_classMethodModifier = 26;
	public static readonly RULE_classMethodResultModifier = 27;
	public static readonly RULE_classMethodParameterList = 28;
	public static readonly RULE_classMethodParameterName = 29;
	public static readonly RULE_classMethodParameter = 30;
	public static readonly RULE_classMethodBody = 31;
	public static readonly RULE_classProperty = 32;
	public static readonly RULE_classPropertyDefaultValue = 33;
	public static readonly RULE_enumDeclaration = 34;
	public static readonly RULE_enumHeader = 35;
	public static readonly RULE_enumBody = 36;
	public static readonly RULE_enumEntry = 37;
	public static readonly RULE_staticMethodCall = 38;
	public static readonly RULE_typedef = 39;
	public static readonly RULE_uclassMacro = 40;
	public static readonly RULE_uenumMacro = 41;
	public static readonly RULE_ufunctionMacro = 42;
	public static readonly RULE_uinterfaceMacro = 43;
	public static readonly RULE_umetaMacro = 44;
	public static readonly RULE_uParamMacro = 45;
	public static readonly RULE_upropertyMacro = 46;
	public static readonly RULE_generatedBodyMacro = 47;
	public static readonly RULE_macroPropertyList = 48;
	public static readonly RULE_macroPropertyListEntries = 49;
	public static readonly RULE_macroProperty = 50;
	public static readonly RULE_macroPropertyPair = 51;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"templateTypeList", "typeModifier", "typeReferenceType", "classDeclaration", 
		"classHeader", "classInheritance", "classExtensionList", "classExtension", 
		"classBody", "classEntries", "classEntry", "classVisibility", "classVisibilityModifier", 
		"friendDeclaration", "classMethod", "classMethodEnd", "classMethodModifier", 
		"classMethodResultModifier", "classMethodParameterList", "classMethodParameterName", 
		"classMethodParameter", "classMethodBody", "classProperty", "classPropertyDefaultValue", 
		"enumDeclaration", "enumHeader", "enumBody", "enumEntry", "staticMethodCall", 
		"typedef", "uclassMacro", "uenumMacro", "ufunctionMacro", "uinterfaceMacro", 
		"umetaMacro", "uParamMacro", "upropertyMacro", "generatedBodyMacro", "macroPropertyList", 
		"macroPropertyListEntries", "macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'typedef'", 
		"'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", 
		"'UPARAM'", "'UPROPERTY'", "'FORCEINLINE'", "'FACTORYGAME_API'", undefined, 
		"':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", 
		"';'", "'*'", "'&'", "'-'", "'|'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", 
		"UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "FORCEINLINE", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
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
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UINTERFACE))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				{
				this.state = 104;
				this.element();
				}
				}
				this.state = 109;
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
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.UCLASS:
			case SatisfactoryHeaderParserParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.classDeclaration();
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.UENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.enumDeclaration();
				}
				break;
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 112;
				this.staticMethodCall();
				}
				break;
			case SatisfactoryHeaderParserParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 113;
				this.typedef();
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
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
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
				this.state = 117;
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
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 122;
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
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 127;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 128;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 129;
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
			this.state = 132;
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
			this.state = 134;
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
			this.state = 136;
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
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 138;
				this.typeModifier();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
			this.identifier();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 145;
				this.templateType();
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STAR || _la === SatisfactoryHeaderParserParser.AMPERSAND) {
				{
				this.state = 148;
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
			this.state = 151;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 152;
			this.templateTypeList();
			this.state = 153;
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
	public templateTypeList(): TemplateTypeListContext {
		let _localctx: TemplateTypeListContext = new TemplateTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SatisfactoryHeaderParserParser.RULE_templateTypeList);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.typeDeclaration();
				this.state = 157;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 158;
				this.templateTypeList();
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
	public typeModifier(): TypeModifierContext {
		let _localctx: TypeModifierContext = new TypeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SatisfactoryHeaderParserParser.RULE_typeModifier);
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 164;
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
		this.enterRule(_localctx, 24, SatisfactoryHeaderParserParser.RULE_typeReferenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
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
		this.enterRule(_localctx, 26, SatisfactoryHeaderParserParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.classHeader();
			this.state = 170;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 171;
			this.classBody();
			this.state = 172;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 173;
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
		this.enterRule(_localctx, 28, SatisfactoryHeaderParserParser.RULE_classHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UCLASS) {
				{
				this.state = 176;
				this.uclassMacro();
				}
			}

			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UINTERFACE) {
				{
				this.state = 179;
				this.uinterfaceMacro();
				}
			}

			this.state = 182;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 183;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 186;
			this.identifier();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 187;
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
		this.enterRule(_localctx, 30, SatisfactoryHeaderParserParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 191;
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
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_classExtensionList);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 193;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.classExtension();
				this.state = 195;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 196;
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
		this.enterRule(_localctx, 34, SatisfactoryHeaderParserParser.RULE_classExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.classVisibilityModifier();
			this.state = 201;
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
		this.enterRule(_localctx, 36, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 203;
				this.generatedBodyMacro();
				}
			}

			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 206;
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
		this.enterRule(_localctx, 38, SatisfactoryHeaderParserParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.classEntry();
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 210;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classEntry);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 216;
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
		this.enterRule(_localctx, 42, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.classVisibilityModifier();
			this.state = 220;
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
		this.enterRule(_localctx, 44, SatisfactoryHeaderParserParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
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
	public friendDeclaration(): FriendDeclarationContext {
		let _localctx: FriendDeclarationContext = new FriendDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_friendDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CLASS) {
				{
				this.state = 225;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
			}

			this.state = 228;
			this.identifier();
			this.state = 229;
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
		this.enterRule(_localctx, 48, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 231;
				this.ufunctionMacro();
				}
			}

			this.state = 237;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 234;
					this.classMethodModifier();
					}
					}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 240;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 243;
			this.identifier();
			this.state = 244;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 245;
				this.classMethodParameterList();
				}
			}

			this.state = 248;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE) {
				{
				{
				this.state = 249;
				this.classMethodResultModifier();
				}
				}
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 255;
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
		this.enterRule(_localctx, 50, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		let _la: number;
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.classMethodBody();
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
					{
					this.state = 259;
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
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_classMethodModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
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
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_classMethodParameterList);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.classMethodParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 269;
				this.classMethodParameter();
				this.state = 270;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 271;
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
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
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_classMethodParameter);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.typeDeclaration();
				this.state = 278;
				this.classMethodParameterName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.typeDeclaration();
				this.state = 281;
				this.classMethodParameterName();
				this.state = 282;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 283;
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
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_classMethodBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_BRACE) {
				{
				this.state = 288;
				this.classMethodBody();
				}
			}

			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY) | (1 << SatisfactoryHeaderParserParser.COLON) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.CLOSE_PAREN) | (1 << SatisfactoryHeaderParserParser.OPEN_ANGLE) | (1 << SatisfactoryHeaderParserParser.CLOSE_ANGLE) | (1 << SatisfactoryHeaderParserParser.COMMA))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.HYPHEN - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 32)))) !== 0)) {
				{
				{
				this.state = 291;
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
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
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
		this.enterRule(_localctx, 64, SatisfactoryHeaderParserParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 299;
				this.upropertyMacro();
				}
			}

			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STATIC) {
				{
				this.state = 302;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
			}

			this.state = 306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 308;
			this.identifier();
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 309;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 312;
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
		this.enterRule(_localctx, 66, SatisfactoryHeaderParserParser.RULE_classPropertyDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 315;
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
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.enumHeader();
			this.state = 318;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 319;
			this.enumBody();
			this.state = 320;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 321;
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
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 324;
					this.uenumMacro();
					}
				}

				this.state = 327;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 328;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 331;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 332;
					this.uenumMacro();
					}
				}

				this.state = 335;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 336;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 339;
				this.identifier();
				this.state = 340;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 341;
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
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_enumBody);
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 345;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 346;
				this.enumEntry();
				this.state = 347;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 348;
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
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.identifier();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UMETA) {
				{
				this.state = 353;
				this.umetaMacro();
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
	public staticMethodCall(): StaticMethodCallContext {
		let _localctx: StaticMethodCallContext = new StaticMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.identifier();
			this.state = 357;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 358;
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
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY) | (1 << SatisfactoryHeaderParserParser.COLON) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.OPEN_BRACE) | (1 << SatisfactoryHeaderParserParser.CLOSE_BRACE) | (1 << SatisfactoryHeaderParserParser.OPEN_ANGLE) | (1 << SatisfactoryHeaderParserParser.CLOSE_ANGLE) | (1 << SatisfactoryHeaderParserParser.COMMA))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.HYPHEN - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 32)))) !== 0));
			this.state = 363;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 364;
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
	public typedef(): TypedefContext {
		let _localctx: TypedefContext = new TypedefContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SatisfactoryHeaderParserParser.RULE_typedef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(SatisfactoryHeaderParserParser.TYPEDEF);
			this.state = 367;
			this.typeDeclaration();
			this.state = 368;
			this.identifier();
			this.state = 369;
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
		this.enterRule(_localctx, 80, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 372;
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
		this.enterRule(_localctx, 82, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 375;
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
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 378;
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
	public uinterfaceMacro(): UinterfaceMacroContext {
		let _localctx: UinterfaceMacroContext = new UinterfaceMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(SatisfactoryHeaderParserParser.UINTERFACE);
			this.state = 381;
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
	public umetaMacro(): UmetaMacroContext {
		let _localctx: UmetaMacroContext = new UmetaMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(SatisfactoryHeaderParserParser.UMETA);
			this.state = 384;
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
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 387;
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
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 390;
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
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 393;
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
		this.enterRule(_localctx, 96, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 40)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 40)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 40)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 40)))) !== 0)) {
				{
				this.state = 396;
				this.macroPropertyListEntries();
				}
			}

			this.state = 399;
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
		this.enterRule(_localctx, 98, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.macroProperty();
				this.state = 403;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.OPEN_PAREN))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 40)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 40)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 40)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 40)))) !== 0)) {
					{
					this.state = 404;
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
		this.enterRule(_localctx, 100, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 411;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 412;
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
		this.enterRule(_localctx, 102, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.identifier();
			this.state = 416;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 417;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u01A6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x03\x02\x07\x02l\n\x02\f\x02\x0E\x02o\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03u\n\x03\x03\x04\x03\x04\x05\x04y\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05~\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\x85\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x07\n" +
		"\x8E\n\n\f\n\x0E\n\x91\v\n\x03\n\x03\n\x05\n\x95\n\n\x03\n\x05\n\x98\n" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA3\n\f" +
		"\x03\r\x03\r\x03\r\x05\r\xA8\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xB1\n\x0F\x03\x10\x05\x10\xB4\n\x10\x03\x10\x05" +
		"\x10\xB7\n\x10\x03\x10\x03\x10\x05\x10\xBB\n\x10\x03\x10\x03\x10\x05\x10" +
		"\xBF\n\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\xC9\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x05\x14\xCF\n\x14" +
		"\x03\x14\x05\x14\xD2\n\x14\x03\x15\x03\x15\x05\x15\xD6\n\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\xDC\n\x16\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x05\x19\xE5\n\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x05\x1A\xEB\n\x1A\x03\x1A\x07\x1A\xEE\n\x1A\f\x1A\x0E\x1A\xF1\v\x1A" +
		"\x03\x1A\x05\x1A\xF4\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xF9\n\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\xFD\n\x1A\f\x1A\x0E\x1A\u0100\v\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0107\n\x1B\x05\x1B\u0109\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u0114\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05" +
		" \u0120\n \x03!\x03!\x05!\u0124\n!\x03!\x07!\u0127\n!\f!\x0E!\u012A\v" +
		"!\x03!\x03!\x03\"\x05\"\u012F\n\"\x03\"\x05\"\u0132\n\"\x03\"\x05\"\u0135" +
		"\n\"\x03\"\x03\"\x05\"\u0139\n\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$" +
		"\x03$\x03$\x03$\x05$\u0145\n$\x03%\x05%\u0148\n%\x03%\x03%\x05%\u014C" +
		"\n%\x03%\x03%\x05%\u0150\n%\x03%\x03%\x05%\u0154\n%\x03%\x03%\x03%\x03" +
		"%\x05%\u015A\n%\x03&\x03&\x03&\x03&\x03&\x05&\u0161\n&\x03\'\x03\'\x05" +
		"\'\u0165\n\'\x03(\x03(\x03(\x06(\u016A\n(\r(\x0E(\u016B\x03(\x03(\x03" +
		"(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x03" +
		"1\x031\x032\x032\x052\u0190\n2\x032\x032\x033\x033\x033\x033\x053\u0198" +
		"\n3\x053\u019A\n3\x034\x034\x034\x034\x054\u01A0\n4\x035\x035\x035\x03" +
		"5\x035\x02\x02\x026\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02\x02\n\x03\x02,-\x04\x02\x06" +
		"\x06\r\r\x03\x02%&\x03\x02\t\v\x06\x02\x04\x04\f\f\x0F\x0F\x17\x17\x04" +
		"\x02\x04\x04\b\b\x03\x02\x1D\x1E\x03\x02\x1C\x1C\x02\u01AA\x02m\x03\x02" +
		"\x02\x02\x04t\x03\x02\x02\x02\x06x\x03\x02\x02\x02\b}\x03\x02\x02\x02" +
		"\n\x84\x03\x02\x02\x02\f\x86\x03\x02\x02\x02\x0E\x88\x03\x02\x02\x02\x10" +
		"\x8A\x03\x02\x02\x02\x12\x8F\x03\x02\x02\x02\x14\x99\x03\x02\x02\x02\x16" +
		"\xA2\x03\x02\x02\x02\x18\xA7\x03\x02\x02\x02\x1A\xA9\x03\x02\x02\x02\x1C" +
		"\xAB\x03\x02\x02\x02\x1E\xB3\x03\x02\x02\x02 \xC0\x03\x02\x02\x02\"\xC8" +
		"\x03\x02\x02\x02$\xCA\x03\x02\x02\x02&\xCE\x03\x02\x02\x02(\xD3\x03\x02" +
		"\x02\x02*\xDB\x03\x02\x02\x02,\xDD\x03\x02\x02\x02.\xE0\x03\x02\x02\x02" +
		"0\xE2\x03\x02\x02\x022\xEA\x03\x02\x02\x024\u0108\x03\x02\x02\x026\u010A" +
		"\x03\x02\x02\x028\u010C\x03\x02\x02\x02:\u0113\x03\x02\x02\x02<\u0115" +
		"\x03\x02\x02\x02>\u011F\x03\x02\x02\x02@\u0121\x03\x02\x02\x02B\u012E" +
		"\x03\x02\x02\x02D\u013C\x03\x02\x02\x02F\u013F\x03\x02\x02\x02H\u0159" +
		"\x03\x02\x02\x02J\u0160\x03\x02\x02\x02L\u0162\x03\x02\x02\x02N\u0166" +
		"\x03\x02\x02\x02P\u0170\x03\x02\x02\x02R\u0175\x03\x02\x02\x02T\u0178" +
		"\x03\x02\x02\x02V\u017B\x03\x02\x02\x02X\u017E\x03\x02\x02\x02Z\u0181" +
		"\x03\x02\x02\x02\\\u0184\x03\x02\x02\x02^\u0187\x03\x02\x02\x02`\u018A" +
		"\x03\x02\x02\x02b\u018D\x03\x02\x02\x02d\u0199\x03\x02\x02\x02f\u019F" +
		"\x03\x02\x02\x02h\u01A1\x03\x02\x02\x02jl\x05\x04\x03\x02kj\x03\x02\x02" +
		"\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\x03\x03\x02" +
		"\x02\x02om\x03\x02\x02\x02pu\x05\x1C\x0F\x02qu\x05F$\x02ru\x05N(\x02s" +
		"u\x05P)\x02tp\x03\x02\x02\x02tq\x03\x02\x02\x02tr\x03\x02\x02\x02ts\x03" +
		"\x02\x02\x02u\x05\x03\x02\x02\x02vy\x05\n\x06\x02wy\x05\b\x05\x02xv\x03" +
		"\x02\x02\x02xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z~\x05\f\x07\x02{~" +
		"\x05\x0E\b\x02|~\x05\x10\t\x02}z\x03\x02\x02\x02}{\x03\x02\x02\x02}|\x03" +
		"\x02\x02\x02~\t\x03\x02\x02\x02\x7F\x85\x07*\x02\x02\x80\x81\x07*\x02" +
		"\x02\x81\x82\x07\x1A\x02\x02\x82\x83\x07\x1A\x02\x02\x83\x85\x07*\x02" +
		"\x02\x84\x7F\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x85\v\x03\x02\x02" +
		"\x02\x86\x87\x07+\x02\x02\x87\r\x03\x02\x02\x02\x88\x89\t\x02\x02\x02" +
		"\x89\x0F\x03\x02\x02\x02\x8A\x8B\t\x03\x02\x02\x8B\x11\x03\x02\x02\x02" +
		"\x8C\x8E\x05\x18\r\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02" +
		"\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02" +
		"\x91\x8F\x03\x02\x02\x02\x92\x94\x05\n\x06\x02\x93\x95\x05\x14\v\x02\x94" +
		"\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96" +
		"\x98\x05\x1A\x0E\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
		"\x13\x03\x02\x02\x02\x99\x9A\x07\x1F\x02\x02\x9A\x9B\x05\x16\f\x02\x9B" +
		"\x9C\x07 \x02\x02\x9C\x15\x03\x02\x02\x02\x9D\xA3\x05\x12\n\x02\x9E\x9F" +
		"\x05\x12\n\x02\x9F\xA0\x07!\x02\x02\xA0\xA1\x05\x16\f\x02\xA1\xA3\x03" +
		"\x02\x02\x02\xA2\x9D\x03\x02\x02\x02\xA2\x9E\x03\x02\x02\x02\xA3\x17\x03" +
		"\x02\x02\x02\xA4\xA8\x07\x03\x02\x02\xA5\xA8\x07\x04\x02\x02\xA6\xA8\x05" +
		"\\/\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02" +
		"\x02\x02\xA8\x19\x03\x02\x02\x02\xA9\xAA\t\x04\x02\x02\xAA\x1B\x03\x02" +
		"\x02\x02\xAB\xAC\x05\x1E\x10\x02\xAC\xAD\x07\x1D\x02\x02\xAD\xAE\x05&" +
		"\x14\x02\xAE\xB0\x07\x1E\x02\x02\xAF\xB1\x07$\x02\x02\xB0\xAF\x03\x02" +
		"\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\x1D\x03\x02\x02\x02\xB2\xB4\x05R" +
		"*\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x03\x02" +
		"\x02\x02\xB5\xB7\x05X-\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02" +
		"\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x07\x03\x02\x02\xB9\xBB\x07\x18\x02" +
		"\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02" +
		"\x02\xBC\xBE\x05\n\x06\x02\xBD\xBF\x05 \x11\x02\xBE\xBD\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1\x07\x1A\x02\x02" +
		"\xC1\xC2\x05\"\x12\x02\xC2!\x03\x02\x02\x02\xC3\xC9\x05$\x13\x02\xC4\xC5" +
		"\x05$\x13\x02\xC5\xC6\x07!\x02\x02\xC6\xC7\x05\"\x12\x02\xC7\xC9\x03\x02" +
		"\x02\x02\xC8\xC3\x03\x02\x02\x02\xC8\xC4\x03\x02\x02\x02\xC9#\x03\x02" +
		"\x02\x02\xCA\xCB\x05.\x18\x02\xCB\xCC\x05\n\x06\x02\xCC%\x03\x02\x02\x02" +
		"\xCD\xCF\x05`1\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF" +
		"\xD1\x03\x02\x02\x02\xD0\xD2\x05(\x15\x02\xD1\xD0\x03\x02\x02\x02\xD1" +
		"\xD2\x03\x02\x02\x02\xD2\'\x03\x02\x02\x02\xD3\xD5\x05*\x16\x02\xD4\xD6" +
		"\x05(\x15\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6)\x03" +
		"\x02\x02\x02\xD7\xDC\x05,\x17\x02\xD8\xDC\x052\x1A\x02\xD9\xDC\x050\x19" +
		"\x02\xDA\xDC\x05B\"\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02" +
		"\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC+\x03\x02\x02\x02" +
		"\xDD\xDE\x05.\x18\x02\xDE\xDF\x07\x1A\x02\x02\xDF-\x03\x02\x02\x02\xE0" +
		"\xE1\t\x05\x02\x02\xE1/\x03\x02\x02\x02\xE2\xE4\x07\x07\x02\x02\xE3\xE5" +
		"\x07\x03\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6" +
		"\x03\x02\x02\x02\xE6\xE7\x05\n\x06\x02\xE7\xE8\x07$\x02\x02\xE81\x03\x02" +
		"\x02\x02\xE9\xEB\x05V,\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02" +
		"\x02\xEB\xEF\x03\x02\x02\x02\xEC\xEE\x056\x1C\x02\xED\xEC\x03\x02\x02" +
		"\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02" +
		"\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF4\x05\x12\n" +
		"\x02\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
		"\x02\xF5\xF6\x05\n\x06\x02\xF6\xF8\x07\x1B\x02\x02\xF7\xF9\x05:\x1E\x02" +
		"\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFA\xFE\x07\x1C\x02\x02\xFB\xFD\x058\x1D\x02\xFC\xFB\x03\x02\x02\x02" +
		"\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02" +
		"\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0102\x05" +
		"4\x1B\x02\u01023\x03\x02\x02\x02\u0103\u0109\x07$\x02\x02\u0104\u0106" +
		"\x05@!\x02\u0105\u0107\x07$\x02\x02\u0106\u0105\x03\x02\x02\x02\u0106" +
		"\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108\u0103\x03\x02" +
		"\x02\x02\u0108\u0104\x03\x02\x02\x02\u01095\x03\x02\x02\x02\u010A\u010B" +
		"\t\x06\x02\x02\u010B7\x03\x02\x02\x02\u010C\u010D\t\x07\x02\x02\u010D" +
		"9\x03\x02\x02\x02\u010E\u0114\x05> \x02\u010F\u0110\x05> \x02\u0110\u0111" +
		"\x07!\x02\x02\u0111\u0112\x05:\x1E\x02\u0112\u0114\x03\x02\x02\x02\u0113" +
		"\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0114;\x03\x02\x02" +
		"\x02\u0115\u0116\x05\n\x06\x02\u0116=\x03\x02\x02\x02\u0117\u0118\x05" +
		"\x12\n\x02\u0118\u0119\x05<\x1F\x02\u0119\u0120\x03\x02\x02\x02\u011A" +
		"\u011B\x05\x12\n\x02\u011B\u011C\x05<\x1F\x02\u011C\u011D\x07#\x02\x02" +
		"\u011D\u011E\x05\x06\x04\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0117\x03" +
		"\x02\x02\x02\u011F\u011A\x03\x02\x02\x02\u0120?\x03\x02\x02\x02\u0121" +
		"\u0123\x07\x1D\x02\x02\u0122\u0124\x05@!\x02\u0123\u0122\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u0124\u0128\x03\x02\x02\x02\u0125\u0127\n" +
		"\b\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128" +
		"\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02" +
		"\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012C\x07\x1E\x02\x02\u012C" +
		"A\x03\x02\x02\x02\u012D\u012F\x05^0\x02\u012E\u012D\x03\x02\x02\x02\u012E" +
		"\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u0132\x07\f\x02" +
		"\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134" +
		"\x03\x02\x02\x02\u0133\u0135\x05\x12\n\x02\u0134\u0133\x03\x02\x02\x02" +
		"\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138\x05" +
		"\n\x06\x02\u0137\u0139\x05D#\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139" +
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x07$\x02\x02" +
		"\u013BC\x03\x02\x02\x02\u013C\u013D\x07\x1A\x02\x02\u013D\u013E\x05\b" +
		"\x05\x02\u013EE\x03\x02\x02\x02\u013F\u0140\x05H%\x02\u0140\u0141\x07" +
		"\x1D\x02\x02\u0141\u0142\x05J&\x02\u0142\u0144\x07\x1E\x02\x02\u0143\u0145" +
		"\x07$\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02" +
		"\u0145G\x03\x02\x02\x02\u0146\u0148\x05T+\x02\u0147\u0146\x03\x02\x02" +
		"\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B" +
		"\x07\x05\x02\x02\u014A\u014C\x07\x03\x02\x02\u014B\u014A\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u015A\x05" +
		"\n\x06\x02\u014E\u0150\x05T+\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x07\x05\x02\x02" +
		"\u0152\u0154\x07\x03\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x05\n\x06\x02\u0156" +
		"\u0157\x07\x1A\x02\x02\u0157\u0158\x05\x12\n\x02\u0158\u015A\x03\x02\x02" +
		"\x02\u0159\u0147\x03\x02\x02\x02\u0159\u014F\x03\x02\x02\x02\u015AI\x03" +
		"\x02\x02\x02\u015B\u0161\x05L\'\x02\u015C\u015D\x05L\'\x02\u015D\u015E" +
		"\x07!\x02\x02\u015E\u015F\x05J&\x02\u015F\u0161\x03\x02\x02\x02\u0160" +
		"\u015B\x03\x02\x02\x02\u0160\u015C\x03\x02\x02\x02\u0161K\x03\x02\x02" +
		"\x02\u0162\u0164\x05\n\x06\x02\u0163\u0165\x05Z.\x02\u0164\u0163\x03\x02" +
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165M\x03\x02\x02\x02\u0166\u0167" +
		"\x05\n\x06\x02\u0167\u0169\x07\x1B\x02\x02\u0168\u016A\n\t\x02\x02\u0169" +
		"\u0168\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u0169\x03\x02" +
		"\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D" +
		"\u016E\x07\x1C\x02\x02\u016E\u016F\x07$\x02\x02\u016FO\x03\x02\x02\x02" +
		"\u0170\u0171\x07\x0E\x02\x02\u0171\u0172\x05\x12\n\x02\u0172\u0173\x05" +
		"\n\x06\x02\u0173\u0174\x07$\x02\x02\u0174Q\x03\x02\x02\x02\u0175\u0176" +
		"\x07\x10\x02\x02\u0176\u0177\x05b2\x02\u0177S\x03\x02\x02\x02\u0178\u0179" +
		"\x07\x11\x02\x02\u0179\u017A\x05b2\x02\u017AU\x03\x02\x02\x02\u017B\u017C" +
		"\x07\x12\x02\x02\u017C\u017D\x05b2\x02\u017DW\x03\x02\x02\x02\u017E\u017F" +
		"\x07\x13\x02\x02\u017F\u0180\x05b2\x02\u0180Y\x03\x02\x02\x02\u0181\u0182" +
		"\x07\x14\x02\x02\u0182\u0183\x05b2\x02\u0183[\x03\x02\x02\x02\u0184\u0185" +
		"\x07\x15\x02\x02\u0185\u0186\x05b2\x02\u0186]\x03\x02\x02\x02\u0187\u0188" +
		"\x07\x16\x02\x02\u0188\u0189\x05b2\x02\u0189_\x03\x02\x02\x02\u018A\u018B" +
		"\x07\x19\x02\x02\u018B\u018C\x05b2\x02\u018Ca\x03\x02\x02\x02\u018D\u018F" +
		"\x07\x1B\x02\x02\u018E\u0190\x05d3\x02\u018F\u018E\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07\x1C" +
		"\x02\x02\u0192c\x03\x02\x02\x02\u0193\u019A\x05f4\x02\u0194\u0195\x05" +
		"f4\x02\u0195\u0197\x07!\x02\x02\u0196\u0198\x05d3\x02\u0197\u0196\x03" +
		"\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199" +
		"\u0193\x03\x02\x02\x02\u0199\u0194\x03\x02\x02\x02\u019Ae\x03\x02\x02" +
		"\x02\u019B\u01A0\x05\n\x06\x02\u019C\u01A0\x05\b\x05\x02\u019D\u01A0\x05" +
		"h5\x02\u019E\u01A0\x05b2\x02\u019F\u019B\x03\x02\x02\x02\u019F\u019C\x03" +
		"\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0" +
		"g\x03\x02\x02\x02\u01A1\u01A2\x05\n\x06\x02\u01A2\u01A3\x07#\x02\x02\u01A3" +
		"\u01A4\x05f4\x02\u01A4i\x03\x02\x02\x023mtx}\x84\x8F\x94\x97\xA2\xA7\xB0" +
		"\xB3\xB6\xBA\xBE\xC8\xCE\xD1\xD5\xDB\xE4\xEA\xEF\xF3\xF8\xFE\u0106\u0108" +
		"\u0113\u011F\u0123\u0128\u012E\u0131\u0134\u0138\u0144\u0147\u014B\u014F" +
		"\u0153\u0159\u0160\u0164\u016B\u018F\u0197\u0199\u019F";
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
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
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
	public templateTypeList(): TemplateTypeListContext {
		return this.getRuleContext(0, TemplateTypeListContext);
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


export class TemplateTypeListContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public templateTypeList(): TemplateTypeListContext | undefined {
		return this.tryGetRuleContext(0, TemplateTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_templateTypeList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTemplateTypeList) {
			listener.enterTemplateTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTemplateTypeList) {
			listener.exitTemplateTypeList(this);
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
	public uinterfaceMacro(): UinterfaceMacroContext | undefined {
		return this.tryGetRuleContext(0, UinterfaceMacroContext);
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
	public friendDeclaration(): FriendDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FriendDeclarationContext);
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


export class FriendDeclarationContext extends ParserRuleContext {
	public FRIEND(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_friendDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterFriendDeclaration) {
			listener.enterFriendDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitFriendDeclaration) {
			listener.exitFriendDeclaration(this);
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
	public umetaMacro(): UmetaMacroContext | undefined {
		return this.tryGetRuleContext(0, UmetaMacroContext);
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


export class TypedefContext extends ParserRuleContext {
	public TYPEDEF(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.TYPEDEF, 0); }
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_typedef; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTypedef) {
			listener.enterTypedef(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTypedef) {
			listener.exitTypedef(this);
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


export class UinterfaceMacroContext extends ParserRuleContext {
	public UINTERFACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UINTERFACE, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_uinterfaceMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUinterfaceMacro) {
			listener.enterUinterfaceMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUinterfaceMacro) {
			listener.exitUinterfaceMacro(this);
		}
	}
}


export class UmetaMacroContext extends ParserRuleContext {
	public UMETA(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UMETA, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_umetaMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUmetaMacro) {
			listener.enterUmetaMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUmetaMacro) {
			listener.exitUmetaMacro(this);
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


