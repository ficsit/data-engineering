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
	public static readonly FORCEINLINE = 5;
	public static readonly FRIEND = 6;
	public static readonly INLINE = 7;
	public static readonly MUTABLE = 8;
	public static readonly OPERATOR = 9;
	public static readonly OVERRIDE = 10;
	public static readonly PRIVATE = 11;
	public static readonly PROTECTED = 12;
	public static readonly PUBLIC = 13;
	public static readonly STATIC = 14;
	public static readonly STRUCT = 15;
	public static readonly TEMPLATE = 16;
	public static readonly TRUE = 17;
	public static readonly TYPEDEF = 18;
	public static readonly VIRTUAL = 19;
	public static readonly UCLASS = 20;
	public static readonly UENUM = 21;
	public static readonly UFUNCTION = 22;
	public static readonly UINTERFACE = 23;
	public static readonly UMETA = 24;
	public static readonly UPARAM = 25;
	public static readonly UPROPERTY = 26;
	public static readonly USTRUCT = 27;
	public static readonly UE_DEPRECATED = 28;
	public static readonly STAT = 29;
	public static readonly SF_CLASS_TAG = 30;
	public static readonly SF_GENERATED_BODY = 31;
	public static readonly AMPERSAND = 32;
	public static readonly BACKSLASH = 33;
	public static readonly BANG = 34;
	public static readonly CLOSE_ANGLE = 35;
	public static readonly CLOSE_BRACE = 36;
	public static readonly CLOSE_PAREN = 37;
	public static readonly CLOSE_SQUARE = 38;
	public static readonly COLON = 39;
	public static readonly COMMA = 40;
	public static readonly EQUALS = 41;
	public static readonly MINUS = 42;
	public static readonly OPEN_ANGLE = 43;
	public static readonly OPEN_BRACE = 44;
	public static readonly OPEN_PAREN = 45;
	public static readonly OPEN_SQUARE = 46;
	public static readonly PERIOD = 47;
	public static readonly PIPE = 48;
	public static readonly PLUS = 49;
	public static readonly QUESTION = 50;
	public static readonly SEMICOLON = 51;
	public static readonly STAR = 52;
	public static readonly IDENTIFIER = 53;
	public static readonly STRING_LITERAL = 54;
	public static readonly FLOAT_LITERAL = 55;
	public static readonly INTEGER_LITERAL = 56;
	public static readonly PREPROCESSOR = 57;
	public static readonly LINE_COMMENT_START = 58;
	public static readonly BLOCK_COMMENT_START = 59;
	public static readonly WHITESPACE = 60;
	public static readonly LINE_COMMENT_END = 61;
	public static readonly LINE_COMMENT_TEXT = 62;
	public static readonly LINE_COMMENT_OTHER = 63;
	public static readonly BLOCK_COMMENT_END = 64;
	public static readonly BLOCK_COMMENT_NEW_LINE = 65;
	public static readonly BLOCK_COMMENT_TEXT = 66;
	public static readonly BLOCK_COMMENT_OTHER = 67;
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
	public static readonly RULE_classMacro = 15;
	public static readonly RULE_classKeyword = 16;
	public static readonly RULE_classInheritance = 17;
	public static readonly RULE_classExtensionList = 18;
	public static readonly RULE_classExtension = 19;
	public static readonly RULE_classBody = 20;
	public static readonly RULE_classEntries = 21;
	public static readonly RULE_classEntry = 22;
	public static readonly RULE_classVisibility = 23;
	public static readonly RULE_classVisibilityModifier = 24;
	public static readonly RULE_friendDeclaration = 25;
	public static readonly RULE_statDeclaration = 26;
	public static readonly RULE_classMethod = 27;
	public static readonly RULE_classMethodEnd = 28;
	public static readonly RULE_classMethodResultModifier = 29;
	public static readonly RULE_classInitializerList = 30;
	public static readonly RULE_classInitializer = 31;
	public static readonly RULE_classProperty = 32;
	public static readonly RULE_classPropertyDefaultValue = 33;
	public static readonly RULE_classPropertyArraySizeDeclaration = 34;
	public static readonly RULE_classPropertyArraySize = 35;
	public static readonly RULE_enumDeclaration = 36;
	public static readonly RULE_enumHeader = 37;
	public static readonly RULE_enumBody = 38;
	public static readonly RULE_enumEntry = 39;
	public static readonly RULE_enumValue = 40;
	public static readonly RULE_staticFunctionDeclaration = 41;
	public static readonly RULE_staticPropertyDeclaration = 42;
	public static readonly RULE_staticMethodCall = 43;
	public static readonly RULE_typedef = 44;
	public static readonly RULE_contentWithNestedParens = 45;
	public static readonly RULE_contentWithNestedParensInner = 46;
	public static readonly RULE_contentWithNestedBraces = 47;
	public static readonly RULE_contentWithNestedBracesInner = 48;
	public static readonly RULE_contentWithNestedAngles = 49;
	public static readonly RULE_contentWithNestedAnglesInner = 50;
	public static readonly RULE_functionName = 51;
	public static readonly RULE_functionModifier = 52;
	public static readonly RULE_uclassMacro = 53;
	public static readonly RULE_uenumMacro = 54;
	public static readonly RULE_ufunctionMacro = 55;
	public static readonly RULE_uinterfaceMacro = 56;
	public static readonly RULE_umetaMacro = 57;
	public static readonly RULE_uParamMacro = 58;
	public static readonly RULE_upropertyMacro = 59;
	public static readonly RULE_ustructMacro = 60;
	public static readonly RULE_uedeprecatedMacro = 61;
	public static readonly RULE_generatedBodyMacro = 62;
	public static readonly RULE_macroPropertyList = 63;
	public static readonly RULE_macroPropertyListEntries = 64;
	public static readonly RULE_macroProperty = 65;
	public static readonly RULE_macroPropertyPair = 66;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"macroPropertyList", "macroPropertyListEntries", "macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'operator'", "'override'", "'private'", 
		"'protected'", "'public'", "'static'", "'struct'", "'template'", "'true'", 
		"'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", 
		"'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", 
		"'STAT'", "'FACTORYGAME_API'", undefined, "'&'", "'/'", "'!'", "'>'", 
		"'}'", "')'", "']'", "':'", "','", "'='", "'-'", "'<'", "'{'", "'('", 
		"'['", "'.'", "'|'", "'+'", "'?'", "';'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", 
		"INLINE", "MUTABLE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", 
		"STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", 
		"UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "USTRUCT", 
		"UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", "AMPERSAND", 
		"BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", 
		"COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", 
		"OPEN_SQUARE", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "STAR", 
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
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				{
				this.state = 134;
				this.element();
				}
				}
				this.state = 139;
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
			this.state = 147;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 142;
				this.staticMethodCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 143;
				this.staticFunctionDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 144;
				this.staticPropertyDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 145;
				this.typedef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 146;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SatisfactoryHeaderParserParser.RULE_value);
		try {
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
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
				this.state = 150;
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
			this.state = 156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 155;
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
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 160;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 161;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 162;
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
			this.state = 165;
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
			this.state = 167;
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
			this.state = 169;
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
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 171;
				this.typeModifier();
				}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 177;
			this.identifier();
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 178;
				this.templateType();
				}
			}

			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.AMPERSAND || _la === SatisfactoryHeaderParserParser.STAR) {
				{
				this.state = 181;
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
			this.state = 184;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 185;
			this.templateTypeList();
			this.state = 186;
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
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.typeDeclaration();
				this.state = 190;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 191;
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
			this.state = 201;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 197;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				}
				break;
			case SatisfactoryHeaderParserParser.STRUCT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 198;
				this.match(SatisfactoryHeaderParserParser.STRUCT);
				}
				break;
			case SatisfactoryHeaderParserParser.MUTABLE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 199;
				this.match(SatisfactoryHeaderParserParser.MUTABLE);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 200;
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
			this.state = 203;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.AMPERSAND || _la === SatisfactoryHeaderParserParser.STAR)) {
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.classHeader();
			this.state = 206;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 207;
			this.classBody();
			this.state = 208;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 209;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
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
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0)) {
				{
				this.state = 212;
				this.classMacro();
				}
			}

			this.state = 215;
			this.classKeyword();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 216;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 219;
			this.identifier();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 220;
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
	public classMacro(): ClassMacroContext {
		let _localctx: ClassMacroContext = new ClassMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SatisfactoryHeaderParserParser.RULE_classMacro);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				this.uclassMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.uinterfaceMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.USTRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 225;
				this.ustructMacro();
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
	public classKeyword(): ClassKeywordContext {
		let _localctx: ClassKeywordContext = new ClassKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_classKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParserParser.CLASS || _la === SatisfactoryHeaderParserParser.STRUCT)) {
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
	public classInheritance(): ClassInheritanceContext {
		let _localctx: ClassInheritanceContext = new ClassInheritanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SatisfactoryHeaderParserParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 231;
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
		this.enterRule(_localctx, 36, SatisfactoryHeaderParserParser.RULE_classExtensionList);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.classExtension();
				this.state = 235;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 236;
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
		this.enterRule(_localctx, 38, SatisfactoryHeaderParserParser.RULE_classExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.classVisibilityModifier();
			this.state = 241;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 243;
				this.generatedBodyMacro();
				}
			}

			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 246;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			}
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 249;
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
		this.enterRule(_localctx, 42, SatisfactoryHeaderParserParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.classEntry();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 253;
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
		this.enterRule(_localctx, 44, SatisfactoryHeaderParserParser.RULE_classEntry);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 256;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 257;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 258;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 259;
				this.classProperty();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 260;
				this.statDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 261;
				this.typedef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 262;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
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
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.classVisibilityModifier();
			this.state = 266;
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
		this.enterRule(_localctx, 48, SatisfactoryHeaderParserParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
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
		this.enterRule(_localctx, 50, SatisfactoryHeaderParserParser.RULE_friendDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CLASS) {
				{
				this.state = 271;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
			}

			this.state = 274;
			this.identifier();
			this.state = 275;
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
	public statDeclaration(): StatDeclarationContext {
		let _localctx: StatDeclarationContext = new StatDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_statDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(SatisfactoryHeaderParserParser.STAT);
			this.state = 278;
			this.contentWithNestedParens();
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UE_DEPRECATED) {
				{
				this.state = 280;
				this.uedeprecatedMacro();
				}
			}

			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 283;
				this.ufunctionMacro();
				}
			}

			this.state = 289;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.functionModifier();
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 292;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 295;
			this.functionName();
			this.state = 296;
			this.contentWithNestedParens();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE) {
				{
				{
				this.state = 297;
				this.classMethodResultModifier();
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
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
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.contentWithNestedBraces();
				this.state = 308;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.COLON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 311;
				this.classInitializerList();
				this.state = 312;
				this.contentWithNestedBraces();
				this.state = 314;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 313;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
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
	public classMethodResultModifier(): ClassMethodResultModifierContext {
		let _localctx: ClassMethodResultModifierContext = new ClassMethodResultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
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
	public classInitializerList(): ClassInitializerListContext {
		let _localctx: ClassInitializerListContext = new ClassInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_classInitializerList);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 320;
				this.classInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.classInitializer();
				this.state = 322;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 323;
				this.classInitializerList();
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
	public classInitializer(): ClassInitializerContext {
		let _localctx: ClassInitializerContext = new ClassInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_classInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.identifier();
			this.state = 328;
			this.contentWithNestedParens();
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
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 330;
				this.upropertyMacro();
				}
			}

			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STATIC) {
				{
				this.state = 333;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
			}

			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 336;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 339;
			this.identifier();
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_SQUARE) {
				{
				this.state = 340;
				this.classPropertyArraySizeDeclaration();
				}
			}

			this.state = 344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON || _la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 343;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 346;
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
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 348;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 349;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 351;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 352;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 353;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 354;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 355;
				this.identifier();
				this.state = 356;
				this.contentWithNestedParens();
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
	public classPropertyArraySizeDeclaration(): ClassPropertyArraySizeDeclarationContext {
		let _localctx: ClassPropertyArraySizeDeclarationContext = new ClassPropertyArraySizeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_classPropertyArraySizeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
			this.state = 361;
			this.classPropertyArraySize();
			this.state = 362;
			this.match(SatisfactoryHeaderParserParser.CLOSE_SQUARE);
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
	public classPropertyArraySize(): ClassPropertyArraySizeContext {
		let _localctx: ClassPropertyArraySizeContext = new ClassPropertyArraySizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_classPropertyArraySize);
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 364;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 365;
				this.numericLiteral();
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.enumHeader();
			this.state = 369;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 370;
			this.enumBody();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COMMA) {
				{
				this.state = 371;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				}
			}

			this.state = 374;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
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
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 378;
					this.uenumMacro();
					}
				}

				this.state = 381;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 382;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 385;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 386;
					this.uenumMacro();
					}
				}

				this.state = 389;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 390;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 393;
				this.identifier();
				this.state = 394;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 395;
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
		this.enterRule(_localctx, 76, SatisfactoryHeaderParserParser.RULE_enumBody);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.enumEntry();
				this.state = 401;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 402;
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
		this.enterRule(_localctx, 78, SatisfactoryHeaderParserParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.identifier();
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 407;
				this.enumValue();
				}
			}

			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UMETA) {
				{
				this.state = 410;
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
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SatisfactoryHeaderParserParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 414;
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
	public staticFunctionDeclaration(): StaticFunctionDeclarationContext {
		let _localctx: StaticFunctionDeclarationContext = new StaticFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SatisfactoryHeaderParserParser.RULE_staticFunctionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 416;
					this.functionModifier();
					}
					}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 422;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 425;
			this.functionName();
			this.state = 426;
			this.contentWithNestedParens();
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CONST) {
				{
				this.state = 427;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
			}

			this.state = 430;
			this.contentWithNestedBraces();
			this.state = 432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 431;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
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
	public staticPropertyDeclaration(): StaticPropertyDeclarationContext {
		let _localctx: StaticPropertyDeclarationContext = new StaticPropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_staticPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(SatisfactoryHeaderParserParser.STATIC);
			this.state = 435;
			this.typeDeclaration();
			this.state = 436;
			this.identifier();
			this.state = 437;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 438;
			this.literal();
			this.state = 439;
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
	public staticMethodCall(): StaticMethodCallContext {
		let _localctx: StaticMethodCallContext = new StaticMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.identifier();
			this.state = 442;
			this.contentWithNestedParens();
			this.state = 443;
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
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_typedef);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.match(SatisfactoryHeaderParserParser.TYPEDEF);
				this.state = 446;
				this.typeDeclaration();
				this.state = 447;
				this.identifier();
				this.state = 448;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 450;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				this.state = 451;
				this.identifier();
				this.state = 452;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
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
	public contentWithNestedParens(): ContentWithNestedParensContext {
		let _localctx: ContentWithNestedParensContext = new ContentWithNestedParensContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_contentWithNestedParens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 457;
				this.contentWithNestedParensInner();
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 463;
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
	public contentWithNestedParensInner(): ContentWithNestedParensInnerContext {
		let _localctx: ContentWithNestedParensInnerContext = new ContentWithNestedParensInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_contentWithNestedParensInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.FORCEINLINE:
			case SatisfactoryHeaderParserParser.FRIEND:
			case SatisfactoryHeaderParserParser.INLINE:
			case SatisfactoryHeaderParserParser.MUTABLE:
			case SatisfactoryHeaderParserParser.OPERATOR:
			case SatisfactoryHeaderParserParser.OVERRIDE:
			case SatisfactoryHeaderParserParser.PRIVATE:
			case SatisfactoryHeaderParserParser.PROTECTED:
			case SatisfactoryHeaderParserParser.PUBLIC:
			case SatisfactoryHeaderParserParser.STATIC:
			case SatisfactoryHeaderParserParser.STRUCT:
			case SatisfactoryHeaderParserParser.TEMPLATE:
			case SatisfactoryHeaderParserParser.TRUE:
			case SatisfactoryHeaderParserParser.TYPEDEF:
			case SatisfactoryHeaderParserParser.VIRTUAL:
			case SatisfactoryHeaderParserParser.UCLASS:
			case SatisfactoryHeaderParserParser.UENUM:
			case SatisfactoryHeaderParserParser.UFUNCTION:
			case SatisfactoryHeaderParserParser.UINTERFACE:
			case SatisfactoryHeaderParserParser.UMETA:
			case SatisfactoryHeaderParserParser.UPARAM:
			case SatisfactoryHeaderParserParser.UPROPERTY:
			case SatisfactoryHeaderParserParser.USTRUCT:
			case SatisfactoryHeaderParserParser.UE_DEPRECATED:
			case SatisfactoryHeaderParserParser.STAT:
			case SatisfactoryHeaderParserParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParserParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParserParser.AMPERSAND:
			case SatisfactoryHeaderParserParser.BACKSLASH:
			case SatisfactoryHeaderParserParser.BANG:
			case SatisfactoryHeaderParserParser.CLOSE_ANGLE:
			case SatisfactoryHeaderParserParser.CLOSE_BRACE:
			case SatisfactoryHeaderParserParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParserParser.COLON:
			case SatisfactoryHeaderParserParser.COMMA:
			case SatisfactoryHeaderParserParser.EQUALS:
			case SatisfactoryHeaderParserParser.MINUS:
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
			case SatisfactoryHeaderParserParser.OPEN_SQUARE:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.IDENTIFIER:
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParserParser.PREPROCESSOR:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParserParser.WHITESPACE:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 465;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.CLOSE_PAREN || _la === SatisfactoryHeaderParserParser.OPEN_PAREN)) {
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
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 468;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 470;
				this.contentWithNestedParens();
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		let _localctx: ContentWithNestedBracesContext = new ContentWithNestedBracesContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_contentWithNestedBraces);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 474;
				this.contentWithNestedBracesInner();
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 480;
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
	public contentWithNestedBracesInner(): ContentWithNestedBracesInnerContext {
		let _localctx: ContentWithNestedBracesInnerContext = new ContentWithNestedBracesInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SatisfactoryHeaderParserParser.RULE_contentWithNestedBracesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.FORCEINLINE:
			case SatisfactoryHeaderParserParser.FRIEND:
			case SatisfactoryHeaderParserParser.INLINE:
			case SatisfactoryHeaderParserParser.MUTABLE:
			case SatisfactoryHeaderParserParser.OPERATOR:
			case SatisfactoryHeaderParserParser.OVERRIDE:
			case SatisfactoryHeaderParserParser.PRIVATE:
			case SatisfactoryHeaderParserParser.PROTECTED:
			case SatisfactoryHeaderParserParser.PUBLIC:
			case SatisfactoryHeaderParserParser.STATIC:
			case SatisfactoryHeaderParserParser.STRUCT:
			case SatisfactoryHeaderParserParser.TEMPLATE:
			case SatisfactoryHeaderParserParser.TRUE:
			case SatisfactoryHeaderParserParser.TYPEDEF:
			case SatisfactoryHeaderParserParser.VIRTUAL:
			case SatisfactoryHeaderParserParser.UCLASS:
			case SatisfactoryHeaderParserParser.UENUM:
			case SatisfactoryHeaderParserParser.UFUNCTION:
			case SatisfactoryHeaderParserParser.UINTERFACE:
			case SatisfactoryHeaderParserParser.UMETA:
			case SatisfactoryHeaderParserParser.UPARAM:
			case SatisfactoryHeaderParserParser.UPROPERTY:
			case SatisfactoryHeaderParserParser.USTRUCT:
			case SatisfactoryHeaderParserParser.UE_DEPRECATED:
			case SatisfactoryHeaderParserParser.STAT:
			case SatisfactoryHeaderParserParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParserParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParserParser.AMPERSAND:
			case SatisfactoryHeaderParserParser.BACKSLASH:
			case SatisfactoryHeaderParserParser.BANG:
			case SatisfactoryHeaderParserParser.CLOSE_ANGLE:
			case SatisfactoryHeaderParserParser.CLOSE_PAREN:
			case SatisfactoryHeaderParserParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParserParser.COLON:
			case SatisfactoryHeaderParserParser.COMMA:
			case SatisfactoryHeaderParserParser.EQUALS:
			case SatisfactoryHeaderParserParser.MINUS:
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
			case SatisfactoryHeaderParserParser.OPEN_SQUARE:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.IDENTIFIER:
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParserParser.PREPROCESSOR:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParserParser.WHITESPACE:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 482;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.CLOSE_BRACE || _la === SatisfactoryHeaderParserParser.OPEN_BRACE)) {
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
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 485;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 487;
				this.contentWithNestedBraces();
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
	public contentWithNestedAngles(): ContentWithNestedAnglesContext {
		let _localctx: ContentWithNestedAnglesContext = new ContentWithNestedAnglesContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SatisfactoryHeaderParserParser.RULE_contentWithNestedAngles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 491;
				this.contentWithNestedAnglesInner();
				}
				}
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 497;
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
	public contentWithNestedAnglesInner(): ContentWithNestedAnglesInnerContext {
		let _localctx: ContentWithNestedAnglesInnerContext = new ContentWithNestedAnglesInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SatisfactoryHeaderParserParser.RULE_contentWithNestedAnglesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.FORCEINLINE:
			case SatisfactoryHeaderParserParser.FRIEND:
			case SatisfactoryHeaderParserParser.INLINE:
			case SatisfactoryHeaderParserParser.MUTABLE:
			case SatisfactoryHeaderParserParser.OPERATOR:
			case SatisfactoryHeaderParserParser.OVERRIDE:
			case SatisfactoryHeaderParserParser.PRIVATE:
			case SatisfactoryHeaderParserParser.PROTECTED:
			case SatisfactoryHeaderParserParser.PUBLIC:
			case SatisfactoryHeaderParserParser.STATIC:
			case SatisfactoryHeaderParserParser.STRUCT:
			case SatisfactoryHeaderParserParser.TEMPLATE:
			case SatisfactoryHeaderParserParser.TRUE:
			case SatisfactoryHeaderParserParser.TYPEDEF:
			case SatisfactoryHeaderParserParser.VIRTUAL:
			case SatisfactoryHeaderParserParser.UCLASS:
			case SatisfactoryHeaderParserParser.UENUM:
			case SatisfactoryHeaderParserParser.UFUNCTION:
			case SatisfactoryHeaderParserParser.UINTERFACE:
			case SatisfactoryHeaderParserParser.UMETA:
			case SatisfactoryHeaderParserParser.UPARAM:
			case SatisfactoryHeaderParserParser.UPROPERTY:
			case SatisfactoryHeaderParserParser.USTRUCT:
			case SatisfactoryHeaderParserParser.UE_DEPRECATED:
			case SatisfactoryHeaderParserParser.STAT:
			case SatisfactoryHeaderParserParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParserParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParserParser.AMPERSAND:
			case SatisfactoryHeaderParserParser.BACKSLASH:
			case SatisfactoryHeaderParserParser.BANG:
			case SatisfactoryHeaderParserParser.CLOSE_BRACE:
			case SatisfactoryHeaderParserParser.CLOSE_PAREN:
			case SatisfactoryHeaderParserParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParserParser.COLON:
			case SatisfactoryHeaderParserParser.COMMA:
			case SatisfactoryHeaderParserParser.EQUALS:
			case SatisfactoryHeaderParserParser.MINUS:
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
			case SatisfactoryHeaderParserParser.OPEN_SQUARE:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.IDENTIFIER:
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParserParser.PREPROCESSOR:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParserParser.WHITESPACE:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 499;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.CLOSE_ANGLE || _la === SatisfactoryHeaderParserParser.OPEN_ANGLE)) {
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
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 502;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.contentWithNestedAngles();
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SatisfactoryHeaderParserParser.RULE_functionName);
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 509;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 510;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 511;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 512;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 513;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 514;
				this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
				this.state = 515;
				this.match(SatisfactoryHeaderParserParser.CLOSE_SQUARE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 516;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 517;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 518;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 519;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				this.state = 520;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 521;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 522;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 523;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 524;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				this.state = 525;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
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
	public functionModifier(): FunctionModifierContext {
		let _localctx: FunctionModifierContext = new FunctionModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SatisfactoryHeaderParserParser.RULE_functionModifier);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STATIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 528;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 529;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 530;
				this.match(SatisfactoryHeaderParserParser.VIRTUAL);
				}
				break;
			case SatisfactoryHeaderParserParser.FORCEINLINE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 531;
				this.match(SatisfactoryHeaderParserParser.FORCEINLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.INLINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 532;
				this.match(SatisfactoryHeaderParserParser.INLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.TEMPLATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 533;
				this.match(SatisfactoryHeaderParserParser.TEMPLATE);
				this.state = 534;
				this.contentWithNestedAngles();
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
	public uclassMacro(): UclassMacroContext {
		let _localctx: UclassMacroContext = new UclassMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 538;
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
		this.enterRule(_localctx, 108, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 541;
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
		this.enterRule(_localctx, 110, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 544;
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
		this.enterRule(_localctx, 112, SatisfactoryHeaderParserParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(SatisfactoryHeaderParserParser.UINTERFACE);
			this.state = 547;
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
		this.enterRule(_localctx, 114, SatisfactoryHeaderParserParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(SatisfactoryHeaderParserParser.UMETA);
			this.state = 550;
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
		this.enterRule(_localctx, 116, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 553;
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
		this.enterRule(_localctx, 118, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 556;
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
	public ustructMacro(): UstructMacroContext {
		let _localctx: UstructMacroContext = new UstructMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SatisfactoryHeaderParserParser.RULE_ustructMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(SatisfactoryHeaderParserParser.USTRUCT);
			this.state = 559;
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
	public uedeprecatedMacro(): UedeprecatedMacroContext {
		let _localctx: UedeprecatedMacroContext = new UedeprecatedMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SatisfactoryHeaderParserParser.RULE_uedeprecatedMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(SatisfactoryHeaderParserParser.UE_DEPRECATED);
			this.state = 562;
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
		this.enterRule(_localctx, 124, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 565;
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
		this.enterRule(_localctx, 126, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 45)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 45)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 45)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 45)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 45)))) !== 0)) {
				{
				this.state = 568;
				this.macroPropertyListEntries();
				}
			}

			this.state = 571;
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
		this.enterRule(_localctx, 128, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.macroProperty();
				this.state = 575;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 45)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 45)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 45)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 45)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 45)))) !== 0)) {
					{
					this.state = 576;
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
		this.enterRule(_localctx, 130, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 583;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 584;
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
		this.enterRule(_localctx, 132, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.identifier();
			this.state = 588;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 589;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0252\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x07" +
		"\x02\x8A\n\x02\f\x02\x0E\x02\x8D\v\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x96\n\x03\x03\x04\x03\x04\x05\x04\x9A" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\x9F\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\xA6\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x03\n\x07\n\xAF\n\n\f\n\x0E\n\xB2\v\n\x03\n\x03\n\x05\n\xB6\n\n\x03" +
		"\n\x05\n\xB9\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\xC4\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCC\n\r\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xD5\n\x0F\x03" +
		"\x10\x05\x10\xD8\n\x10\x03\x10\x03\x10\x05\x10\xDC\n\x10\x03\x10\x03\x10" +
		"\x05\x10\xE0\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xE5\n\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\xF1\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x05\x16\xF7\n\x16\x03\x16" +
		"\x05\x16\xFA\n\x16\x03\x16\x05\x16\xFD\n\x16\x03\x17\x03\x17\x05\x17\u0101" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u010A\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05" +
		"\x1B\u0113\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x05\x1D\u011C\n\x1D\x03\x1D\x05\x1D\u011F\n\x1D\x03\x1D\x07\x1D\u0122" +
		"\n\x1D\f\x1D\x0E\x1D\u0125\v\x1D\x03\x1D\x05\x1D\u0128\n\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x07\x1D\u012D\n\x1D\f\x1D\x0E\x1D\u0130\v\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0137\n\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u013D\n\x1E\x05\x1E\u013F\n\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x03 \x05 \u0148\n \x03!\x03!\x03!\x03\"\x05\"\u014E\n" +
		"\"\x03\"\x05\"\u0151\n\"\x03\"\x05\"\u0154\n\"\x03\"\x03\"\x05\"\u0158" +
		"\n\"\x03\"\x05\"\u015B\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x05#\u0169\n#\x03$\x03$\x03$\x03$\x03%\x03%\x05%\u0171" +
		"\n%\x03&\x03&\x03&\x03&\x05&\u0177\n&\x03&\x03&\x05&\u017B\n&\x03\'\x05" +
		"\'\u017E\n\'\x03\'\x03\'\x05\'\u0182\n\'\x03\'\x03\'\x05\'\u0186\n\'\x03" +
		"\'\x03\'\x05\'\u018A\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0190\n\'\x03(" +
		"\x03(\x03(\x03(\x03(\x05(\u0197\n(\x03)\x03)\x05)\u019B\n)\x03)\x05)\u019E" +
		"\n)\x03*\x03*\x03*\x03+\x07+\u01A4\n+\f+\x0E+\u01A7\v+\x03+\x05+\u01AA" +
		"\n+\x03+\x03+\x03+\x05+\u01AF\n+\x03+\x03+\x05+\u01B3\n+\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x05.\u01C9\n.\x03/\x03/\x07/\u01CD\n/\f/\x0E/\u01D0\v" +
		"/\x03/\x03/\x030\x060\u01D5\n0\r0\x0E0\u01D6\x030\x050\u01DA\n0\x031\x03" +
		"1\x071\u01DE\n1\f1\x0E1\u01E1\v1\x031\x031\x032\x062\u01E6\n2\r2\x0E2" +
		"\u01E7\x032\x052\u01EB\n2\x033\x033\x073\u01EF\n3\f3\x0E3\u01F2\v3\x03" +
		"3\x033\x034\x064\u01F7\n4\r4\x0E4\u01F8\x034\x054\u01FC\n4\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x055\u0211\n5\x036\x036\x036\x036\x036\x036\x036\x056\u021A" +
		"\n6\x037\x037\x037\x038\x038\x038\x039\x039\x039\x03:\x03:\x03:\x03;\x03" +
		";\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03" +
		"@\x03@\x03@\x03A\x03A\x05A\u023C\nA\x03A\x03A\x03B\x03B\x03B\x03B\x05" +
		"B\u0244\nB\x05B\u0246\nB\x03C\x03C\x03C\x03C\x05C\u024C\nC\x03D\x03D\x03" +
		"D\x03D\x03D\x02\x02\x02E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x02\v\x03" +
		"\x029:\x04\x02\x06\x06\x13\x13\x04\x02\"\"66\x04\x02\x03\x03\x11\x11\x03" +
		"\x02\r\x0F\x04\x02\x04\x04\f\f\x04\x02\'\'//\x04\x02&&..\x04\x02%%--\x02" +
		"\u0271\x02\x8B\x03\x02\x02\x02\x04\x95\x03\x02\x02\x02\x06\x99\x03\x02" +
		"\x02\x02\b\x9E\x03\x02\x02\x02\n\xA5\x03\x02\x02\x02\f\xA7\x03\x02\x02" +
		"\x02\x0E\xA9\x03\x02\x02\x02\x10\xAB\x03\x02\x02\x02\x12\xB0\x03\x02\x02" +
		"\x02\x14\xBA\x03\x02\x02\x02\x16\xC3\x03\x02\x02\x02\x18\xCB\x03\x02\x02" +
		"\x02\x1A\xCD\x03\x02\x02\x02\x1C\xCF\x03\x02\x02\x02\x1E\xD7\x03\x02\x02" +
		"\x02 \xE4\x03\x02\x02\x02\"\xE6\x03\x02\x02\x02$\xE8\x03\x02\x02\x02&" +
		"\xF0\x03\x02\x02\x02(\xF2\x03\x02\x02\x02*\xF6\x03\x02\x02\x02,\xFE\x03" +
		"\x02\x02\x02.\u0109\x03\x02\x02\x020\u010B\x03\x02\x02\x022\u010E\x03" +
		"\x02\x02\x024\u0110\x03\x02\x02\x026\u0117\x03\x02\x02\x028\u011B\x03" +
		"\x02\x02\x02:\u013E\x03\x02\x02\x02<\u0140\x03\x02\x02\x02>\u0147\x03" +
		"\x02\x02\x02@\u0149\x03\x02\x02\x02B\u014D\x03\x02\x02\x02D\u0168\x03" +
		"\x02\x02\x02F\u016A\x03\x02\x02\x02H\u0170\x03\x02\x02\x02J\u0172\x03" +
		"\x02\x02\x02L\u018F\x03\x02\x02\x02N\u0196\x03\x02\x02\x02P\u0198\x03" +
		"\x02\x02\x02R\u019F\x03\x02\x02\x02T\u01A5\x03\x02\x02\x02V\u01B4\x03" +
		"\x02\x02\x02X\u01BB\x03\x02\x02\x02Z\u01C8\x03\x02\x02\x02\\\u01CA\x03" +
		"\x02\x02\x02^\u01D9\x03\x02\x02\x02`\u01DB\x03\x02\x02\x02b\u01EA\x03" +
		"\x02\x02\x02d\u01EC\x03\x02\x02\x02f\u01FB\x03\x02\x02\x02h\u0210\x03" +
		"\x02\x02\x02j\u0219\x03\x02\x02\x02l\u021B\x03\x02\x02\x02n\u021E\x03" +
		"\x02\x02\x02p\u0221\x03\x02\x02\x02r\u0224\x03\x02\x02\x02t\u0227\x03" +
		"\x02\x02\x02v\u022A\x03\x02\x02\x02x\u022D\x03\x02\x02\x02z\u0230\x03" +
		"\x02\x02\x02|\u0233\x03\x02\x02\x02~\u0236\x03\x02\x02\x02\x80\u0239\x03" +
		"\x02\x02\x02\x82\u0245\x03\x02\x02\x02\x84\u024B\x03\x02\x02\x02\x86\u024D" +
		"\x03\x02\x02\x02\x88\x8A\x05\x04\x03\x02\x89\x88\x03\x02\x02\x02\x8A\x8D" +
		"\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x03" +
		"\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x96\x05\x1C\x0F\x02\x8F\x96" +
		"\x05J&\x02\x90\x96\x05X-\x02\x91\x96\x05T+\x02\x92\x96\x05V,\x02\x93\x96" +
		"\x05Z.\x02\x94\x96\x075\x02\x02\x95\x8E\x03\x02\x02\x02\x95\x8F\x03\x02" +
		"\x02\x02\x95\x90\x03\x02\x02\x02\x95\x91\x03\x02\x02\x02\x95\x92\x03\x02" +
		"\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96\x05\x03\x02" +
		"\x02\x02\x97\x9A\x05\n\x06\x02\x98\x9A\x05\b\x05\x02\x99\x97\x03\x02\x02" +
		"\x02\x99\x98\x03\x02\x02\x02\x9A\x07\x03\x02\x02\x02\x9B\x9F\x05\f\x07" +
		"\x02\x9C\x9F\x05\x0E\b\x02\x9D\x9F\x05\x10\t\x02\x9E\x9B\x03\x02\x02\x02" +
		"\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\t\x03\x02\x02\x02" +
		"\xA0\xA6\x077\x02\x02\xA1\xA2\x077\x02\x02\xA2\xA3\x07)\x02\x02\xA3\xA4" +
		"\x07)\x02\x02\xA4\xA6\x077\x02\x02\xA5\xA0\x03\x02\x02\x02\xA5\xA1\x03" +
		"\x02\x02\x02\xA6\v\x03\x02\x02\x02\xA7\xA8\x078\x02\x02\xA8\r\x03\x02" +
		"\x02\x02\xA9\xAA\t\x02\x02\x02\xAA\x0F\x03\x02\x02\x02\xAB\xAC\t\x03\x02" +
		"\x02\xAC\x11\x03\x02\x02\x02\xAD\xAF\x05\x18\r\x02\xAE\xAD\x03\x02\x02" +
		"\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
		"\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB5\x05\n\x06" +
		"\x02\xB4\xB6\x05\x14\v\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
		"\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB9\x05\x1A\x0E\x02\xB8\xB7\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\x13\x03\x02\x02\x02\xBA\xBB\x07-\x02" +
		"\x02\xBB\xBC\x05\x16\f\x02\xBC\xBD\x07%\x02\x02\xBD\x15\x03\x02\x02\x02" +
		"\xBE\xC4\x05\x12\n\x02\xBF\xC0\x05\x12\n\x02\xC0\xC1\x07*\x02\x02\xC1" +
		"\xC2\x05\x16\f\x02\xC2\xC4\x03\x02\x02\x02\xC3\xBE\x03\x02\x02\x02\xC3" +
		"\xBF\x03\x02\x02\x02\xC4\x17\x03\x02\x02\x02\xC5\xCC\x07\x03\x02\x02\xC6" +
		"\xCC\x07\x04\x02\x02\xC7\xCC\x07\x05\x02\x02\xC8\xCC\x07\x11\x02\x02\xC9" +
		"\xCC\x07\n\x02\x02\xCA\xCC\x05v<\x02\xCB\xC5\x03\x02\x02\x02\xCB\xC6\x03" +
		"\x02\x02\x02\xCB\xC7\x03\x02\x02\x02\xCB\xC8\x03\x02\x02\x02\xCB\xC9\x03" +
		"\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\x19\x03\x02\x02\x02\xCD\xCE\t" +
		"\x04\x02\x02\xCE\x1B\x03\x02\x02\x02\xCF\xD0\x05\x1E\x10\x02\xD0\xD1\x07" +
		".\x02\x02\xD1\xD2\x05*\x16\x02\xD2\xD4\x07&\x02\x02\xD3\xD5\x075\x02\x02" +
		"\xD4\xD3\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\x1D\x03\x02\x02\x02" +
		"\xD6\xD8\x05 \x11\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
		"\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x05\"\x12\x02\xDA\xDC\x07 \x02\x02\xDB" +
		"\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD" +
		"\xDF\x05\n\x06\x02\xDE\xE0\x05$\x13\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\x1F\x03\x02\x02\x02\xE1\xE5\x05l7\x02\xE2\xE5\x05" +
		"r:\x02\xE3\xE5\x05z>\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02" +
		"\xE4\xE3\x03\x02\x02\x02\xE5!\x03\x02\x02\x02\xE6\xE7\t\x05\x02\x02\xE7" +
		"#\x03\x02\x02\x02\xE8\xE9\x07)\x02\x02\xE9\xEA\x05&\x14\x02\xEA%\x03\x02" +
		"\x02\x02\xEB\xF1\x05(\x15\x02\xEC\xED\x05(\x15\x02\xED\xEE\x07*\x02\x02" +
		"\xEE\xEF\x05&\x14\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEB\x03\x02\x02\x02" +
		"\xF0\xEC\x03\x02\x02\x02\xF1\'\x03\x02\x02\x02\xF2\xF3\x052\x1A\x02\xF3" +
		"\xF4\x05\n\x06\x02\xF4)\x03\x02\x02\x02\xF5\xF7\x05~@\x02\xF6\xF5\x03" +
		"\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x07" +
		"5\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03" +
		"\x02\x02\x02\xFB\xFD\x05,\x17\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03" +
		"\x02\x02\x02\xFD+\x03\x02\x02\x02\xFE\u0100\x05.\x18\x02\xFF\u0101\x05" +
		",\x17\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"-\x03\x02\x02\x02\u0102\u010A\x050\x19\x02\u0103\u010A\x058\x1D\x02\u0104" +
		"\u010A\x054\x1B\x02\u0105\u010A\x05B\"\x02\u0106\u010A\x056\x1C\x02\u0107" +
		"\u010A\x05Z.\x02\u0108\u010A\x075\x02\x02\u0109\u0102\x03\x02\x02\x02" +
		"\u0109\u0103\x03\x02\x02\x02\u0109\u0104\x03\x02\x02\x02\u0109\u0105\x03" +
		"\x02\x02\x02\u0109\u0106\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109" +
		"\u0108\x03\x02\x02\x02\u010A/\x03\x02\x02\x02\u010B\u010C\x052\x1A\x02" +
		"\u010C\u010D\x07)\x02\x02\u010D1\x03\x02\x02\x02\u010E\u010F\t\x06\x02" +
		"\x02\u010F3\x03\x02\x02\x02\u0110\u0112\x07\b\x02\x02\u0111\u0113\x07" +
		"\x03\x02\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"\u0114\x03\x02\x02\x02\u0114\u0115\x05\n\x06\x02\u0115\u0116\x075\x02" +
		"\x02\u01165\x03\x02\x02\x02\u0117\u0118\x07\x1F\x02\x02\u0118\u0119\x05" +
		"\\/\x02\u01197\x03\x02\x02\x02\u011A\u011C\x05|?\x02\u011B\u011A\x03\x02" +
		"\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D" +
		"\u011F\x05p9\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02" +
		"\u011F\u0123\x03\x02\x02\x02\u0120\u0122\x05j6\x02\u0121\u0120\x03\x02" +
		"\x02\x02\u0122\u0125\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123" +
		"\u0124\x03\x02\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02" +
		"\x02\x02\u0126\u0128\x05\x12\n\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128" +
		"\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x05h5\x02\u012A" +
		"\u012E\x05\\/\x02\u012B\u012D\x05<\x1F\x02\u012C\u012B\x03\x02\x02\x02" +
		"\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03" +
		"\x02\x02\x02\u012F\u0131\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131" +
		"\u0132\x05:\x1E\x02\u01329\x03\x02\x02\x02\u0133\u013F\x075\x02\x02\u0134" +
		"\u0136\x05`1\x02\u0135\u0137\x075\x02\x02\u0136\u0135\x03\x02\x02\x02" +
		"\u0136\u0137\x03\x02\x02\x02\u0137\u013F\x03\x02\x02\x02\u0138\u0139\x07" +
		")\x02\x02\u0139\u013A\x05> \x02\u013A\u013C\x05`1\x02\u013B\u013D\x07" +
		"5\x02\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D" +
		"\u013F\x03\x02\x02\x02\u013E\u0133\x03\x02\x02\x02\u013E\u0134\x03\x02" +
		"\x02\x02\u013E\u0138\x03\x02\x02\x02\u013F;\x03\x02\x02\x02\u0140\u0141" +
		"\t\x07\x02\x02\u0141=\x03\x02\x02\x02\u0142\u0148\x05@!\x02\u0143\u0144" +
		"\x05@!\x02\u0144\u0145\x07*\x02\x02\u0145\u0146\x05> \x02\u0146\u0148" +
		"\x03\x02\x02\x02\u0147\u0142\x03\x02\x02\x02\u0147\u0143\x03\x02\x02\x02" +
		"\u0148?\x03\x02\x02\x02\u0149\u014A\x05\n\x06\x02\u014A\u014B\x05\\/\x02" +
		"\u014BA\x03\x02\x02\x02\u014C\u014E\x05x=\x02\u014D\u014C\x03\x02\x02" +
		"\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u0151" +
		"\x07\x10\x02\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02" +
		"\u0151\u0153\x03\x02\x02\x02\u0152\u0154\x05\x12\n\x02\u0153\u0152\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155" +
		"\u0157\x05\n\x06\x02\u0156\u0158\x05F$\x02\u0157\u0156\x03\x02\x02\x02" +
		"\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159\u015B\x05" +
		"D#\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C" +
		"\x03\x02\x02\x02\u015C\u015D\x075\x02\x02\u015DC\x03\x02\x02\x02\u015E" +
		"\u015F\x07)\x02\x02\u015F\u0169\x05\b\x05\x02\u0160\u0161\x07+\x02\x02" +
		"\u0161\u0169\x05\b\x05\x02\u0162\u0163\x07+\x02\x02\u0163\u0169\x05\n" +
		"\x06\x02\u0164\u0165\x07+\x02\x02\u0165\u0166\x05\n\x06\x02\u0166\u0167" +
		"\x05\\/\x02\u0167\u0169\x03\x02\x02\x02\u0168\u015E\x03\x02\x02\x02\u0168" +
		"\u0160\x03\x02\x02\x02\u0168\u0162\x03\x02\x02\x02\u0168\u0164\x03\x02" +
		"\x02\x02\u0169E\x03\x02\x02\x02\u016A\u016B\x070\x02\x02\u016B\u016C\x05" +
		"H%\x02\u016C\u016D\x07(\x02\x02\u016DG\x03\x02\x02\x02\u016E\u0171\x05" +
		"\n\x06\x02\u016F\u0171\x05\x0E\b\x02\u0170\u016E\x03\x02\x02\x02\u0170" +
		"\u016F\x03\x02\x02\x02\u0171I\x03\x02\x02\x02\u0172\u0173\x05L\'\x02\u0173" +
		"\u0174\x07.\x02\x02\u0174\u0176\x05N(\x02\u0175\u0177\x07*\x02\x02\u0176" +
		"\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\u017A\x07&\x02\x02\u0179\u017B\x075\x02\x02\u017A\u0179" +
		"\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017BK\x03\x02\x02\x02\u017C" +
		"\u017E\x05n8\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x07\x05\x02\x02\u0180\u0182\x07" +
		"\x03\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0183\u0190\x05\n\x06\x02\u0184\u0186\x05n8\x02" +
		"\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03" +
		"\x02\x02\x02\u0187\u0189\x07\x05\x02\x02\u0188\u018A\x07\x03\x02\x02\u0189" +
		"\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02" +
		"\x02\x02\u018B\u018C\x05\n\x06\x02\u018C\u018D\x07)\x02\x02\u018D\u018E" +
		"\x05\x12\n\x02\u018E\u0190\x03\x02\x02\x02\u018F\u017D\x03\x02\x02\x02" +
		"\u018F\u0185\x03\x02\x02\x02\u0190M\x03\x02\x02\x02\u0191\u0197\x05P)" +
		"\x02\u0192\u0193\x05P)\x02\u0193\u0194\x07*\x02\x02\u0194\u0195\x05N(" +
		"\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0191\x03\x02\x02\x02\u0196\u0192" +
		"\x03\x02\x02\x02\u0197O\x03\x02\x02\x02\u0198\u019A\x05\n\x06\x02\u0199" +
		"\u019B\x05R*\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
		"\u019B\u019D\x03\x02\x02\x02\u019C\u019E\x05t;\x02\u019D\u019C\x03\x02" +
		"\x02\x02\u019D\u019E\x03\x02\x02\x02\u019EQ\x03\x02\x02\x02\u019F\u01A0" +
		"\x07+\x02\x02\u01A0\u01A1\x05\b\x05\x02\u01A1S\x03\x02\x02\x02\u01A2\u01A4" +
		"\x05j6\x02\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5" +
		"\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A9\x03\x02" +
		"\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AA\x05\x12\n\x02\u01A9\u01A8" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x05h5\x02\u01AC\u01AE\x05\\/\x02\u01AD\u01AF\x07\x04\x02" +
		"\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01B2\x05`1\x02\u01B1\u01B3\x075\x02\x02\u01B2" +
		"\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3U\x03\x02\x02" +
		"\x02\u01B4\u01B5\x07\x10\x02\x02\u01B5\u01B6\x05\x12\n\x02\u01B6\u01B7" +
		"\x05\n\x06\x02\u01B7\u01B8\x07+\x02\x02\u01B8\u01B9\x05\b\x05\x02\u01B9" +
		"\u01BA\x075\x02\x02\u01BAW\x03\x02\x02\x02\u01BB\u01BC\x05\n\x06\x02\u01BC" +
		"\u01BD\x05\\/\x02\u01BD\u01BE\x075\x02\x02\u01BEY\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07\x14\x02\x02\u01C0\u01C1\x05\x12\n\x02\u01C1\u01C2\x05\n\x06" +
		"\x02\u01C2\u01C3\x075\x02\x02\u01C3\u01C9\x03\x02\x02\x02\u01C4\u01C5" +
		"\x07\x03\x02\x02\u01C5\u01C6\x05\n\x06\x02\u01C6\u01C7\x075\x02\x02\u01C7" +
		"\u01C9\x03\x02\x02\x02\u01C8\u01BF\x03\x02\x02\x02\u01C8\u01C4\x03\x02" +
		"\x02\x02\u01C9[\x03\x02\x02\x02\u01CA\u01CE\x07/\x02\x02\u01CB\u01CD\x05" +
		"^0\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02\x02\x02" +
		"\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x07\'\x02\x02\u01D2]\x03\x02" +
		"\x02\x02\u01D3\u01D5\n\b\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5\u01D6" +
		"\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02" +
		"\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01DA\x05\\/\x02\u01D9\u01D4\x03\x02" +
		"\x02\x02\u01D9\u01D8\x03\x02\x02\x02\u01DA_\x03\x02\x02\x02\u01DB\u01DF" +
		"\x07.\x02\x02\u01DC\u01DE\x05b2\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE" +
		"\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
		"\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E2" +
		"\u01E3\x07&\x02\x02\u01E3a\x03\x02\x02\x02\u01E4\u01E6\n\t\x02\x02\u01E5" +
		"\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03\x02" +
		"\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9" +
		"\u01EB\x05`1\x02\u01EA\u01E5\x03\x02\x02\x02\u01EA\u01E9\x03\x02\x02\x02" +
		"\u01EBc\x03\x02\x02\x02\u01EC\u01F0\x07-\x02\x02\u01ED\u01EF\x05f4\x02" +
		"\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07%\x02\x02\u01F4e\x03\x02\x02\x02" +
		"\u01F5\u01F7\n\n\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02" +
		"\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
		"\u01FC\x03\x02\x02\x02\u01FA\u01FC\x05d3\x02\u01FB\u01F6\x03\x02\x02\x02" +
		"\u01FB\u01FA\x03\x02\x02\x02\u01FCg\x03\x02\x02\x02\u01FD\u0211\x05\n" +
		"\x06\x02\u01FE\u01FF\x07\v\x02\x02\u01FF\u0211\x07+\x02\x02\u0200\u0201" +
		"\x07\v\x02\x02\u0201\u0202\x07+\x02\x02\u0202\u0211\x07+\x02\x02\u0203" +
		"\u0204\x07\v\x02\x02\u0204\u0205\x070\x02\x02\u0205\u0211\x07(\x02\x02" +
		"\u0206\u0207\x07\v\x02\x02\u0207\u0211\x07-\x02\x02\u0208\u0209\x07\v" +
		"\x02\x02\u0209\u020A\x07-\x02\x02\u020A\u0211\x07-\x02\x02\u020B\u020C" +
		"\x07\v\x02\x02\u020C\u0211\x07%\x02\x02\u020D\u020E\x07\v\x02\x02\u020E" +
		"\u020F\x07%\x02\x02\u020F\u0211\x07%\x02\x02\u0210\u01FD\x03\x02\x02\x02" +
		"\u0210\u01FE\x03\x02\x02\x02\u0210\u0200\x03\x02\x02\x02\u0210\u0203\x03" +
		"\x02\x02\x02\u0210\u0206\x03\x02\x02\x02\u0210\u0208\x03\x02\x02\x02\u0210" +
		"\u020B\x03\x02\x02\x02\u0210\u020D\x03\x02\x02\x02\u0211i\x03\x02\x02" +
		"\x02\u0212\u021A\x07\x10\x02\x02\u0213\u021A\x07\x04\x02\x02\u0214\u021A" +
		"\x07\x15\x02\x02\u0215\u021A\x07\x07\x02\x02\u0216\u021A\x07\t\x02\x02" +
		"\u0217\u0218\x07\x12\x02\x02\u0218\u021A\x05d3\x02\u0219\u0212\x03\x02" +
		"\x02\x02\u0219\u0213\x03\x02\x02\x02\u0219\u0214\x03\x02\x02\x02\u0219" +
		"\u0215\x03\x02\x02\x02\u0219\u0216\x03\x02\x02\x02\u0219\u0217\x03\x02" +
		"\x02\x02\u021Ak\x03\x02\x02\x02\u021B\u021C\x07\x16\x02\x02\u021C\u021D" +
		"\x05\x80A\x02\u021Dm\x03\x02\x02\x02\u021E\u021F\x07\x17\x02\x02\u021F" +
		"\u0220\x05\x80A\x02\u0220o\x03\x02\x02\x02\u0221\u0222\x07\x18\x02\x02" +
		"\u0222\u0223\x05\x80A\x02\u0223q\x03\x02\x02\x02\u0224\u0225\x07\x19\x02" +
		"\x02\u0225\u0226\x05\x80A\x02\u0226s\x03\x02\x02\x02\u0227\u0228\x07\x1A" +
		"\x02\x02\u0228\u0229\x05\x80A\x02\u0229u\x03\x02\x02\x02\u022A\u022B\x07" +
		"\x1B\x02\x02\u022B\u022C\x05\x80A\x02\u022Cw\x03\x02\x02\x02\u022D\u022E" +
		"\x07\x1C\x02\x02\u022E\u022F\x05\x80A\x02\u022Fy\x03\x02\x02\x02\u0230" +
		"\u0231\x07\x1D\x02\x02\u0231\u0232\x05\x80A\x02\u0232{\x03\x02\x02\x02" +
		"\u0233\u0234\x07\x1E\x02\x02\u0234\u0235\x05\x80A";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0235}\x03\x02\x02\x02\u0236\u0237\x07!\x02\x02\u0237\u0238\x05\x80" +
		"A\x02\u0238\x7F\x03\x02\x02\x02\u0239\u023B\x07/\x02\x02\u023A\u023C\x05" +
		"\x82B\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C" +
		"\u023D\x03\x02\x02\x02\u023D\u023E\x07\'\x02\x02\u023E\x81\x03\x02\x02" +
		"\x02\u023F\u0246\x05\x84C\x02\u0240\u0241\x05\x84C\x02\u0241\u0243\x07" +
		"*\x02\x02\u0242\u0244\x05\x82B\x02\u0243\u0242\x03\x02\x02\x02\u0243\u0244" +
		"\x03\x02\x02\x02\u0244\u0246\x03\x02\x02\x02\u0245\u023F\x03\x02\x02\x02" +
		"\u0245\u0240\x03\x02\x02\x02\u0246\x83\x03\x02\x02\x02\u0247\u024C\x05" +
		"\n\x06\x02\u0248\u024C\x05\b\x05\x02\u0249\u024C\x05\x86D\x02\u024A\u024C" +
		"\x05\x80A\x02\u024B\u0247\x03\x02\x02\x02\u024B\u0248\x03\x02\x02\x02" +
		"\u024B\u0249\x03\x02\x02\x02\u024B\u024A\x03\x02\x02\x02\u024C\x85\x03" +
		"\x02\x02\x02\u024D\u024E\x05\n\x06\x02\u024E\u024F\x07+\x02\x02\u024F" +
		"\u0250\x05\x84C\x02\u0250\x87\x03\x02\x02\x02F\x8B\x95\x99\x9E\xA5\xB0" +
		"\xB5\xB8\xC3\xCB\xD4\xD7\xDB\xDF\xE4\xF0\xF6\xF9\xFC\u0100\u0109\u0112" +
		"\u011B\u011E\u0123\u0127\u012E\u0136\u013C\u013E\u0147\u014D\u0150\u0153" +
		"\u0157\u015A\u0168\u0170\u0176\u017A\u017D\u0181\u0185\u0189\u018F\u0196" +
		"\u019A\u019D\u01A5\u01A9\u01AE\u01B2\u01C8\u01CE\u01D6\u01D9\u01DF\u01E7" +
		"\u01EA\u01F0\u01F8\u01FB\u0210\u0219\u023B\u0243\u0245\u024B";
	public static readonly _serializedATN: string = Utils.join(
		[
			SatisfactoryHeaderParserParser._serializedATNSegment0,
			SatisfactoryHeaderParserParser._serializedATNSegment1,
		],
		"",
	);
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
	public staticFunctionDeclaration(): StaticFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticFunctionDeclarationContext);
	}
	public staticPropertyDeclaration(): StaticPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticPropertyDeclarationContext);
	}
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
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
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.ENUM, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
	public MUTABLE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.MUTABLE, 0); }
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
	public classKeyword(): ClassKeywordContext {
		return this.getRuleContext(0, ClassKeywordContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classMacro(): ClassMacroContext | undefined {
		return this.tryGetRuleContext(0, ClassMacroContext);
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


export class ClassMacroContext extends ParserRuleContext {
	public uclassMacro(): UclassMacroContext | undefined {
		return this.tryGetRuleContext(0, UclassMacroContext);
	}
	public uinterfaceMacro(): UinterfaceMacroContext | undefined {
		return this.tryGetRuleContext(0, UinterfaceMacroContext);
	}
	public ustructMacro(): UstructMacroContext | undefined {
		return this.tryGetRuleContext(0, UstructMacroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMacro) {
			listener.enterClassMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMacro) {
			listener.exitClassMacro(this);
		}
	}
}


export class ClassKeywordContext extends ParserRuleContext {
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLASS, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classKeyword; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassKeyword) {
			listener.enterClassKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassKeyword) {
			listener.exitClassKeyword(this);
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
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
	public statDeclaration(): StatDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StatDeclarationContext);
	}
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
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


export class StatDeclarationContext extends ParserRuleContext {
	public STAT(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.STAT, 0); }
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_statDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStatDeclaration) {
			listener.enterStatDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStatDeclaration) {
			listener.exitStatDeclaration(this);
		}
	}
}


export class ClassMethodContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
	}
	public classMethodEnd(): ClassMethodEndContext {
		return this.getRuleContext(0, ClassMethodEndContext);
	}
	public uedeprecatedMacro(): UedeprecatedMacroContext | undefined {
		return this.tryGetRuleContext(0, UedeprecatedMacroContext);
	}
	public ufunctionMacro(): UfunctionMacroContext | undefined {
		return this.tryGetRuleContext(0, UfunctionMacroContext);
	}
	public functionModifier(): FunctionModifierContext[];
	public functionModifier(i: number): FunctionModifierContext;
	public functionModifier(i?: number): FunctionModifierContext | FunctionModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionModifierContext);
		} else {
			return this.getRuleContext(i, FunctionModifierContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public classInitializerList(): ClassInitializerListContext | undefined {
		return this.tryGetRuleContext(0, ClassInitializerListContext);
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


export class ClassInitializerListContext extends ParserRuleContext {
	public classInitializer(): ClassInitializerContext {
		return this.getRuleContext(0, ClassInitializerContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public classInitializerList(): ClassInitializerListContext | undefined {
		return this.tryGetRuleContext(0, ClassInitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classInitializerList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassInitializerList) {
			listener.enterClassInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassInitializerList) {
			listener.exitClassInitializerList(this);
		}
	}
}


export class ClassInitializerContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classInitializer; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassInitializer) {
			listener.enterClassInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassInitializer) {
			listener.exitClassInitializer(this);
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
	public classPropertyArraySizeDeclaration(): ClassPropertyArraySizeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertyArraySizeDeclarationContext);
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public contentWithNestedParens(): ContentWithNestedParensContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedParensContext);
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


export class ClassPropertyArraySizeDeclarationContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
	public classPropertyArraySize(): ClassPropertyArraySizeContext {
		return this.getRuleContext(0, ClassPropertyArraySizeContext);
	}
	public CLOSE_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classPropertyArraySizeDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassPropertyArraySizeDeclaration) {
			listener.enterClassPropertyArraySizeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassPropertyArraySizeDeclaration) {
			listener.exitClassPropertyArraySizeDeclaration(this);
		}
	}
}


export class ClassPropertyArraySizeContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classPropertyArraySize; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassPropertyArraySize) {
			listener.enterClassPropertyArraySize(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassPropertyArraySize) {
			listener.exitClassPropertyArraySize(this);
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
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
	public enumValue(): EnumValueContext | undefined {
		return this.tryGetRuleContext(0, EnumValueContext);
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


export class EnumValueContext extends ParserRuleContext {
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
}


export class StaticFunctionDeclarationContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public functionModifier(): FunctionModifierContext[];
	public functionModifier(i: number): FunctionModifierContext;
	public functionModifier(i?: number): FunctionModifierContext | FunctionModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionModifierContext);
		} else {
			return this.getRuleContext(i, FunctionModifierContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_staticFunctionDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStaticFunctionDeclaration) {
			listener.enterStaticFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStaticFunctionDeclaration) {
			listener.exitStaticFunctionDeclaration(this);
		}
	}
}


export class StaticPropertyDeclarationContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.STATIC, 0); }
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_staticPropertyDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStaticPropertyDeclaration) {
			listener.enterStaticPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStaticPropertyDeclaration) {
			listener.exitStaticPropertyDeclaration(this);
		}
	}
}


export class StaticMethodCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
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
	public TYPEDEF(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.TYPEDEF, 0); }
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.SEMICOLON, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLASS, 0); }
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


export class ContentWithNestedParensContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
	public contentWithNestedParensInner(): ContentWithNestedParensInnerContext[];
	public contentWithNestedParensInner(i: number): ContentWithNestedParensInnerContext;
	public contentWithNestedParensInner(i?: number): ContentWithNestedParensInnerContext | ContentWithNestedParensInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentWithNestedParensInnerContext);
		} else {
			return this.getRuleContext(i, ContentWithNestedParensInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedParens; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedParens) {
			listener.enterContentWithNestedParens(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedParens) {
			listener.exitContentWithNestedParens(this);
		}
	}
}


export class ContentWithNestedParensInnerContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode[];
	public OPEN_PAREN(i: number): TerminalNode;
	public OPEN_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.OPEN_PAREN);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.OPEN_PAREN, i);
		}
	}
	public CLOSE_PAREN(): TerminalNode[];
	public CLOSE_PAREN(i: number): TerminalNode;
	public CLOSE_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_PAREN);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, i);
		}
	}
	public contentWithNestedParens(): ContentWithNestedParensContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedParensInner; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedParensInner) {
			listener.enterContentWithNestedParensInner(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedParensInner) {
			listener.exitContentWithNestedParensInner(this);
		}
	}
}


export class ContentWithNestedBracesContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
	public contentWithNestedBracesInner(): ContentWithNestedBracesInnerContext[];
	public contentWithNestedBracesInner(i: number): ContentWithNestedBracesInnerContext;
	public contentWithNestedBracesInner(i?: number): ContentWithNestedBracesInnerContext | ContentWithNestedBracesInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentWithNestedBracesInnerContext);
		} else {
			return this.getRuleContext(i, ContentWithNestedBracesInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedBraces; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedBraces) {
			listener.enterContentWithNestedBraces(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedBraces) {
			listener.exitContentWithNestedBraces(this);
		}
	}
}


export class ContentWithNestedBracesInnerContext extends ParserRuleContext {
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedBracesInner; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedBracesInner) {
			listener.enterContentWithNestedBracesInner(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedBracesInner) {
			listener.exitContentWithNestedBracesInner(this);
		}
	}
}


export class ContentWithNestedAnglesContext extends ParserRuleContext {
	public OPEN_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, 0); }
	public CLOSE_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, 0); }
	public contentWithNestedAnglesInner(): ContentWithNestedAnglesInnerContext[];
	public contentWithNestedAnglesInner(i: number): ContentWithNestedAnglesInnerContext;
	public contentWithNestedAnglesInner(i?: number): ContentWithNestedAnglesInnerContext | ContentWithNestedAnglesInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentWithNestedAnglesInnerContext);
		} else {
			return this.getRuleContext(i, ContentWithNestedAnglesInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedAngles; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedAngles) {
			listener.enterContentWithNestedAngles(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedAngles) {
			listener.exitContentWithNestedAngles(this);
		}
	}
}


export class ContentWithNestedAnglesInnerContext extends ParserRuleContext {
	public OPEN_ANGLE(): TerminalNode[];
	public OPEN_ANGLE(i: number): TerminalNode;
	public OPEN_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.OPEN_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, i);
		}
	}
	public CLOSE_ANGLE(): TerminalNode[];
	public CLOSE_ANGLE(i: number): TerminalNode;
	public CLOSE_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, i);
		}
	}
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedAnglesInner; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedAnglesInner) {
			listener.enterContentWithNestedAnglesInner(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedAnglesInner) {
			listener.exitContentWithNestedAnglesInner(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.OPERATOR, 0); }
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.EQUALS);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.EQUALS, i);
		}
	}
	public OPEN_SQUARE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
	public CLOSE_SQUARE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
	public OPEN_ANGLE(): TerminalNode[];
	public OPEN_ANGLE(i: number): TerminalNode;
	public OPEN_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.OPEN_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.OPEN_ANGLE, i);
		}
	}
	public CLOSE_ANGLE(): TerminalNode[];
	public CLOSE_ANGLE(i: number): TerminalNode;
	public CLOSE_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_ANGLE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_functionName; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
}


export class FunctionModifierContext extends ParserRuleContext {
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STATIC, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
	public INLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.INLINE, 0); }
	public TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.TEMPLATE, 0); }
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_functionModifier; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterFunctionModifier) {
			listener.enterFunctionModifier(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitFunctionModifier) {
			listener.exitFunctionModifier(this);
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


export class UstructMacroContext extends ParserRuleContext {
	public USTRUCT(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.USTRUCT, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_ustructMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUstructMacro) {
			listener.enterUstructMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUstructMacro) {
			listener.exitUstructMacro(this);
		}
	}
}


export class UedeprecatedMacroContext extends ParserRuleContext {
	public UE_DEPRECATED(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.UE_DEPRECATED, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_uedeprecatedMacro; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUedeprecatedMacro) {
			listener.enterUedeprecatedMacro(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUedeprecatedMacro) {
			listener.exitUedeprecatedMacro(this);
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


