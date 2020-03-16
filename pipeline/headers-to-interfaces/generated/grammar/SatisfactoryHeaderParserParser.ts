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
	public static readonly CONSTEXPR = 3;
	public static readonly ENUM = 4;
	public static readonly FALSE = 5;
	public static readonly FORCEINLINE = 6;
	public static readonly FRIEND = 7;
	public static readonly INLINE = 8;
	public static readonly MUTABLE = 9;
	public static readonly OPERATOR = 10;
	public static readonly OVERRIDE = 11;
	public static readonly PRIVATE = 12;
	public static readonly PROTECTED = 13;
	public static readonly PUBLIC = 14;
	public static readonly STATIC = 15;
	public static readonly STRUCT = 16;
	public static readonly TEMPLATE = 17;
	public static readonly TRUE = 18;
	public static readonly TYPEDEF = 19;
	public static readonly VIRTUAL = 20;
	public static readonly UCLASS = 21;
	public static readonly UENUM = 22;
	public static readonly UFUNCTION = 23;
	public static readonly UINTERFACE = 24;
	public static readonly UMETA = 25;
	public static readonly UPARAM = 26;
	public static readonly UPROPERTY = 27;
	public static readonly USTRUCT = 28;
	public static readonly UE_DEPRECATED = 29;
	public static readonly STAT = 30;
	public static readonly SF_CLASS_TAG = 31;
	public static readonly SF_GENERATED_BODY = 32;
	public static readonly AMPERSAND = 33;
	public static readonly BACKSLASH = 34;
	public static readonly BANG = 35;
	public static readonly CLOSE_ANGLE = 36;
	public static readonly CLOSE_BRACE = 37;
	public static readonly CLOSE_PAREN = 38;
	public static readonly CLOSE_SQUARE = 39;
	public static readonly COLON = 40;
	public static readonly COMMA = 41;
	public static readonly EQUALS = 42;
	public static readonly MINUS = 43;
	public static readonly OPEN_ANGLE = 44;
	public static readonly OPEN_BRACE = 45;
	public static readonly OPEN_PAREN = 46;
	public static readonly OPEN_SQUARE = 47;
	public static readonly PERIOD = 48;
	public static readonly PIPE = 49;
	public static readonly PLUS = 50;
	public static readonly QUESTION = 51;
	public static readonly SEMICOLON = 52;
	public static readonly STAR = 53;
	public static readonly IDENTIFIER = 54;
	public static readonly STRING_LITERAL = 55;
	public static readonly FLOAT_LITERAL = 56;
	public static readonly INTEGER_LITERAL = 57;
	public static readonly PREPROCESSOR = 58;
	public static readonly LINE_COMMENT_START = 59;
	public static readonly BLOCK_COMMENT_START = 60;
	public static readonly WHITESPACE = 61;
	public static readonly LINE_COMMENT_END = 62;
	public static readonly LINE_COMMENT_TEXT = 63;
	public static readonly LINE_COMMENT_OTHER = 64;
	public static readonly BLOCK_COMMENT_END = 65;
	public static readonly BLOCK_COMMENT_NEW_LINE = 66;
	public static readonly BLOCK_COMMENT_TEXT = 67;
	public static readonly BLOCK_COMMENT_OTHER = 68;
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
	public static readonly RULE_templateDeclaration = 16;
	public static readonly RULE_classKeyword = 17;
	public static readonly RULE_classInheritance = 18;
	public static readonly RULE_classExtensionList = 19;
	public static readonly RULE_classExtension = 20;
	public static readonly RULE_classBody = 21;
	public static readonly RULE_classEntries = 22;
	public static readonly RULE_classEntry = 23;
	public static readonly RULE_classVisibility = 24;
	public static readonly RULE_classVisibilityModifier = 25;
	public static readonly RULE_friendDeclaration = 26;
	public static readonly RULE_statDeclaration = 27;
	public static readonly RULE_classMethod = 28;
	public static readonly RULE_classMethodEnd = 29;
	public static readonly RULE_classMethodResultModifier = 30;
	public static readonly RULE_classInitializerList = 31;
	public static readonly RULE_classInitializer = 32;
	public static readonly RULE_classProperty = 33;
	public static readonly RULE_classPropertyDefaultValue = 34;
	public static readonly RULE_classPropertyArraySizeDeclaration = 35;
	public static readonly RULE_classPropertyArraySize = 36;
	public static readonly RULE_classEnum = 37;
	public static readonly RULE_enumDeclaration = 38;
	public static readonly RULE_enumHeader = 39;
	public static readonly RULE_enumBody = 40;
	public static readonly RULE_enumEntry = 41;
	public static readonly RULE_enumValue = 42;
	public static readonly RULE_staticFunctionDeclaration = 43;
	public static readonly RULE_staticPropertyDeclaration = 44;
	public static readonly RULE_staticMethodCall = 45;
	public static readonly RULE_typedef = 46;
	public static readonly RULE_contentWithNestedParens = 47;
	public static readonly RULE_contentWithNestedParensInner = 48;
	public static readonly RULE_contentWithNestedBraces = 49;
	public static readonly RULE_contentWithNestedBracesInner = 50;
	public static readonly RULE_contentWithNestedAngles = 51;
	public static readonly RULE_contentWithNestedAnglesInner = 52;
	public static readonly RULE_functionName = 53;
	public static readonly RULE_functionModifier = 54;
	public static readonly RULE_uclassMacro = 55;
	public static readonly RULE_uenumMacro = 56;
	public static readonly RULE_ufunctionMacro = 57;
	public static readonly RULE_uinterfaceMacro = 58;
	public static readonly RULE_umetaMacro = 59;
	public static readonly RULE_uParamMacro = 60;
	public static readonly RULE_upropertyMacro = 61;
	public static readonly RULE_ustructMacro = 62;
	public static readonly RULE_uedeprecatedMacro = 63;
	public static readonly RULE_generatedBodyMacro = 64;
	public static readonly RULE_macroPropertyList = 65;
	public static readonly RULE_macroPropertyListEntries = 66;
	public static readonly RULE_macroProperty = 67;
	public static readonly RULE_macroPropertyPair = 68;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"templateTypeList", "typeModifier", "typeReferenceType", "classDeclaration", 
		"classHeader", "classMacro", "templateDeclaration", "classKeyword", "classInheritance", 
		"classExtensionList", "classExtension", "classBody", "classEntries", "classEntry", 
		"classVisibility", "classVisibilityModifier", "friendDeclaration", "statDeclaration", 
		"classMethod", "classMethodEnd", "classMethodResultModifier", "classInitializerList", 
		"classInitializer", "classProperty", "classPropertyDefaultValue", "classPropertyArraySizeDeclaration", 
		"classPropertyArraySize", "classEnum", "enumDeclaration", "enumHeader", 
		"enumBody", "enumEntry", "enumValue", "staticFunctionDeclaration", "staticPropertyDeclaration", 
		"staticMethodCall", "typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
		"contentWithNestedBraces", "contentWithNestedBracesInner", "contentWithNestedAngles", 
		"contentWithNestedAnglesInner", "functionName", "functionModifier", "uclassMacro", 
		"uenumMacro", "ufunctionMacro", "uinterfaceMacro", "umetaMacro", "uParamMacro", 
		"upropertyMacro", "ustructMacro", "uedeprecatedMacro", "generatedBodyMacro", 
		"macroPropertyList", "macroPropertyListEntries", "macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'constexpr'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'operator'", "'override'", "'private'", 
		"'protected'", "'public'", "'static'", "'struct'", "'template'", "'true'", 
		"'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", 
		"'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", 
		"'STAT'", "'FACTORYGAME_API'", undefined, "'&'", "'/'", "'!'", "'>'", 
		"'}'", "')'", "']'", "':'", "','", "'='", "'-'", "'<'", "'{'", "'('", 
		"'['", "'.'", "'|'", "'+'", "'?'", "';'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", 
		"FRIEND", "INLINE", "MUTABLE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "VIRTUAL", 
		"UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", 
		"USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", 
		"CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", 
		"OPEN_PAREN", "OPEN_SQUARE", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", 
		"STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
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
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				{
				this.state = 138;
				this.element();
				}
				}
				this.state = 143;
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
			this.state = 151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.staticMethodCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 147;
				this.staticFunctionDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 148;
				this.staticPropertyDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 149;
				this.typedef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 150;
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
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
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
				this.state = 154;
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
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 157;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 159;
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
			this.state = 167;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 164;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 165;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 166;
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
			this.state = 169;
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
			this.state = 171;
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
			this.state = 173;
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
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 175;
				this.typeModifier();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
			this.identifier();
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 182;
				this.templateType();
				}
			}

			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.AMPERSAND || _la === SatisfactoryHeaderParserParser.STAR) {
				{
				this.state = 185;
				this.typeReferenceType();
				}
			}

			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CONSTEXPR) {
				{
				this.state = 188;
				this.match(SatisfactoryHeaderParserParser.CONSTEXPR);
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
			this.state = 191;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 192;
			this.templateTypeList();
			this.state = 193;
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
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.typeDeclaration();
				this.state = 197;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 198;
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
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.CONSTEXPR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 204;
				this.match(SatisfactoryHeaderParserParser.CONSTEXPR);
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 205;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				}
				break;
			case SatisfactoryHeaderParserParser.STRUCT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 206;
				this.match(SatisfactoryHeaderParserParser.STRUCT);
				}
				break;
			case SatisfactoryHeaderParserParser.MUTABLE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 207;
				this.match(SatisfactoryHeaderParserParser.MUTABLE);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 208;
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
			this.state = 211;
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
			this.state = 213;
			this.classHeader();
			this.state = 214;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 215;
			this.classBody();
			this.state = 216;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 217;
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
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0)) {
				{
				this.state = 220;
				this.classMacro();
				}
			}

			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.TEMPLATE) {
				{
				this.state = 223;
				this.templateDeclaration();
				}
			}

			this.state = 226;
			this.classKeyword();
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 227;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 230;
			this.identifier();
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 231;
				this.contentWithNestedAngles();
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 234;
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
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.uclassMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
				this.uinterfaceMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.USTRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
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
	public templateDeclaration(): TemplateDeclarationContext {
		let _localctx: TemplateDeclarationContext = new TemplateDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(SatisfactoryHeaderParserParser.TEMPLATE);
			this.state = 243;
			this.contentWithNestedAngles();
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
		this.enterRule(_localctx, 34, SatisfactoryHeaderParserParser.RULE_classKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
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
		this.enterRule(_localctx, 36, SatisfactoryHeaderParserParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 248;
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
		this.enterRule(_localctx, 38, SatisfactoryHeaderParserParser.RULE_classExtensionList);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.classExtension();
				this.state = 252;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 253;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classExtension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.classVisibilityModifier();
			this.state = 258;
			this.identifier();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 259;
				this.contentWithNestedAngles();
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
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 262;
				this.generatedBodyMacro();
				}
			}

			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 265;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			}
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 268;
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
		this.enterRule(_localctx, 44, SatisfactoryHeaderParserParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.classEntry();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT))) !== 0) || _la === SatisfactoryHeaderParserParser.SEMICOLON || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 272;
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
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_classEntry);
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this.classProperty();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 279;
				this.statDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 280;
				this.classEnum();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 281;
				this.typedef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 282;
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
		this.enterRule(_localctx, 48, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.classVisibilityModifier();
			this.state = 286;
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
		this.enterRule(_localctx, 50, SatisfactoryHeaderParserParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
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
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_friendDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CLASS) {
				{
				this.state = 291;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
			}

			this.state = 294;
			this.identifier();
			this.state = 295;
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_statDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(SatisfactoryHeaderParserParser.STAT);
			this.state = 298;
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
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UE_DEPRECATED) {
				{
				this.state = 300;
				this.uedeprecatedMacro();
				}
			}

			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 303;
				this.ufunctionMacro();
				}
			}

			this.state = 309;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 306;
					this.functionModifier();
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 312;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 315;
			this.functionName();
			this.state = 316;
			this.contentWithNestedParens();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE) {
				{
				{
				this.state = 317;
				this.classMethodResultModifier();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 323;
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.contentWithNestedBraces();
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 327;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.COLON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 330;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 331;
				this.classInitializerList();
				this.state = 332;
				this.contentWithNestedBraces();
				this.state = 334;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 333;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.EQUALS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 336;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 337;
				this.numericLiteral();
				this.state = 338;
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
	public classMethodResultModifier(): ClassMethodResultModifierContext {
		let _localctx: ClassMethodResultModifierContext = new ClassMethodResultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
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
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_classInitializerList);
		try {
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 344;
				this.classInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.classInitializer();
				this.state = 346;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 347;
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
		this.enterRule(_localctx, 64, SatisfactoryHeaderParserParser.RULE_classInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.identifier();
			this.state = 352;
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
		this.enterRule(_localctx, 66, SatisfactoryHeaderParserParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 354;
				this.upropertyMacro();
				}
			}

			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STATIC) {
				{
				this.state = 357;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 363;
			this.identifier();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_SQUARE) {
				{
				this.state = 364;
				this.classPropertyArraySizeDeclaration();
				}
			}

			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON || _la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 367;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 370;
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
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_classPropertyDefaultValue);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 373;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 375;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 376;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 377;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 378;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 379;
				this.identifier();
				this.state = 380;
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
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_classPropertyArraySizeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
			this.state = 385;
			this.classPropertyArraySize();
			this.state = 386;
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
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_classPropertyArraySize);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 389;
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
	public classEnum(): ClassEnumContext {
		let _localctx: ClassEnumContext = new ClassEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_classEnum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(SatisfactoryHeaderParserParser.ENUM);
			this.state = 393;
			this.contentWithNestedBraces();
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
		this.enterRule(_localctx, 76, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.enumHeader();
			this.state = 396;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 397;
			this.enumBody();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COMMA) {
				{
				this.state = 398;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				}
			}

			this.state = 401;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 402;
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
		this.enterRule(_localctx, 78, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 405;
					this.uenumMacro();
					}
				}

				this.state = 408;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 409;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 412;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 413;
					this.uenumMacro();
					}
				}

				this.state = 416;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 417;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 420;
				this.identifier();
				this.state = 421;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 422;
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
		this.enterRule(_localctx, 80, SatisfactoryHeaderParserParser.RULE_enumBody);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 427;
				this.enumEntry();
				this.state = 428;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 429;
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
		this.enterRule(_localctx, 82, SatisfactoryHeaderParserParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.identifier();
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 434;
				this.enumValue();
				}
			}

			this.state = 438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UMETA) {
				{
				this.state = 437;
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
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 441;
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
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_staticFunctionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 443;
					this.functionModifier();
					}
					}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 450;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 452;
			this.functionName();
			this.state = 453;
			this.contentWithNestedParens();
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CONST) {
				{
				this.state = 454;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
			}

			this.state = 457;
			this.contentWithNestedBraces();
			this.state = 459;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 458;
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
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_staticPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(SatisfactoryHeaderParserParser.STATIC);
			this.state = 462;
			this.typeDeclaration();
			this.state = 463;
			this.identifier();
			this.state = 464;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 465;
			this.literal();
			this.state = 466;
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
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.identifier();
			this.state = 469;
			this.contentWithNestedParens();
			this.state = 470;
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
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_typedef);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 472;
				this.match(SatisfactoryHeaderParserParser.TYPEDEF);
				this.state = 473;
				this.typeDeclaration();
				this.state = 474;
				this.identifier();
				this.state = 475;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				this.state = 478;
				this.identifier();
				this.state = 479;
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
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_contentWithNestedParens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 484;
				this.contentWithNestedParensInner();
				}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 490;
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
		this.enterRule(_localctx, 96, SatisfactoryHeaderParserParser.RULE_contentWithNestedParensInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.CONSTEXPR:
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
				this.state = 493;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 492;
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
					this.state = 495;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
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
		this.enterRule(_localctx, 98, SatisfactoryHeaderParserParser.RULE_contentWithNestedBraces);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 501;
				this.contentWithNestedBracesInner();
				}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 507;
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
		this.enterRule(_localctx, 100, SatisfactoryHeaderParserParser.RULE_contentWithNestedBracesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.CONSTEXPR:
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
				this.state = 510;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 509;
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
					this.state = 512;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
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
		this.enterRule(_localctx, 102, SatisfactoryHeaderParserParser.RULE_contentWithNestedAngles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.STAT) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 518;
				this.contentWithNestedAnglesInner();
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 524;
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
		this.enterRule(_localctx, 104, SatisfactoryHeaderParserParser.RULE_contentWithNestedAnglesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 532;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.CONSTEXPR:
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
				this.state = 527;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 526;
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
					this.state = 529;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
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
		this.enterRule(_localctx, 106, SatisfactoryHeaderParserParser.RULE_functionName);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 534;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 536;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 537;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 538;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 539;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 540;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 541;
				this.match(SatisfactoryHeaderParserParser.BANG);
				this.state = 542;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 543;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 544;
				this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
				this.state = 545;
				this.match(SatisfactoryHeaderParserParser.CLOSE_SQUARE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 546;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 547;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 548;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 549;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				this.state = 550;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 551;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 552;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 553;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 554;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				this.state = 555;
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
		this.enterRule(_localctx, 108, SatisfactoryHeaderParserParser.RULE_functionModifier);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STATIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 560;
				this.match(SatisfactoryHeaderParserParser.VIRTUAL);
				}
				break;
			case SatisfactoryHeaderParserParser.FORCEINLINE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 561;
				this.match(SatisfactoryHeaderParserParser.FORCEINLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.INLINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 562;
				this.match(SatisfactoryHeaderParserParser.INLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.TEMPLATE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 563;
				this.match(SatisfactoryHeaderParserParser.TEMPLATE);
				this.state = 564;
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
		this.enterRule(_localctx, 110, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 568;
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
		this.enterRule(_localctx, 112, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 571;
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
		this.enterRule(_localctx, 114, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 574;
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
		this.enterRule(_localctx, 116, SatisfactoryHeaderParserParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(SatisfactoryHeaderParserParser.UINTERFACE);
			this.state = 577;
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
		this.enterRule(_localctx, 118, SatisfactoryHeaderParserParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(SatisfactoryHeaderParserParser.UMETA);
			this.state = 580;
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
		this.enterRule(_localctx, 120, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 583;
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
		this.enterRule(_localctx, 122, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 586;
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
		this.enterRule(_localctx, 124, SatisfactoryHeaderParserParser.RULE_ustructMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(SatisfactoryHeaderParserParser.USTRUCT);
			this.state = 589;
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
		this.enterRule(_localctx, 126, SatisfactoryHeaderParserParser.RULE_uedeprecatedMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(SatisfactoryHeaderParserParser.UE_DEPRECATED);
			this.state = 592;
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
		this.enterRule(_localctx, 128, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 595;
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
		this.enterRule(_localctx, 130, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 46)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 46)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 46)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 46)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 46)))) !== 0)) {
				{
				this.state = 598;
				this.macroPropertyListEntries();
				}
			}

			this.state = 601;
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
		this.enterRule(_localctx, 132, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 603;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 604;
				this.macroProperty();
				this.state = 605;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 46)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 46)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 46)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 46)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 46)))) !== 0)) {
					{
					this.state = 606;
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
		this.enterRule(_localctx, 134, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 611;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 613;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 614;
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
		this.enterRule(_localctx, 136, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.identifier();
			this.state = 618;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 619;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\u0270\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x07\x02\x8E\n\x02\f\x02\x0E\x02\x91\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9A\n\x03\x03\x04\x03" +
		"\x04\x05\x04\x9E\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\xA3\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAA\n\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x07\n\xB3\n\n\f\n\x0E\n\xB6\v\n\x03\n\x03\n" +
		"\x05\n\xBA\n\n\x03\n\x05\n\xBD\n\n\x03\n\x05\n\xC0\n\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xCB\n\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\xD4\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDD\n\x0F\x03\x10\x05\x10\xE0\n\x10\x03" +
		"\x10\x05\x10\xE3\n\x10\x03\x10\x03\x10\x05\x10\xE7\n\x10\x03\x10\x03\x10" +
		"\x05\x10\xEB\n\x10\x03\x10\x05\x10\xEE\n\x10\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\xF3\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0102\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u0107\n\x16\x03\x17\x05\x17\u010A\n\x17\x03" +
		"\x17\x05\x17\u010D\n\x17\x03\x17\x05\x17\u0110\n\x17\x03\x18\x03\x18\x05" +
		"\x18\u0114\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u011E\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x05\x1C\u0127\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x05\x1E\u0130\n\x1E\x03\x1E\x05\x1E\u0133\n\x1E\x03\x1E" +
		"\x07\x1E\u0136\n\x1E\f\x1E\x0E\x1E\u0139\v\x1E\x03\x1E\x05\x1E\u013C\n" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0141\n\x1E\f\x1E\x0E\x1E\u0144\v" +
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u014B\n\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0151\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u0157\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u0160" +
		"\n!\x03\"\x03\"\x03\"\x03#\x05#\u0166\n#\x03#\x05#\u0169\n#\x03#\x05#" +
		"\u016C\n#\x03#\x03#\x05#\u0170\n#\x03#\x05#\u0173\n#\x03#\x03#\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0181\n$\x03%\x03%\x03" +
		"%\x03%\x03&\x03&\x05&\u0189\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05" +
		"(\u0192\n(\x03(\x03(\x05(\u0196\n(\x03)\x05)\u0199\n)\x03)\x03)\x05)\u019D" +
		"\n)\x03)\x03)\x05)\u01A1\n)\x03)\x03)\x05)\u01A5\n)\x03)\x03)\x03)\x03" +
		")\x05)\u01AB\n)\x03*\x03*\x03*\x03*\x03*\x05*\u01B2\n*\x03+\x03+\x05+" +
		"\u01B6\n+\x03+\x05+\u01B9\n+\x03,\x03,\x03,\x03-\x07-\u01BF\n-\f-\x0E" +
		"-\u01C2\v-\x03-\x05-\u01C5\n-\x03-\x03-\x03-\x05-\u01CA\n-\x03-\x03-\x05" +
		"-\u01CE\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x050\u01E4\n0\x031\x031\x07" +
		"1\u01E8\n1\f1\x0E1\u01EB\v1\x031\x031\x032\x062\u01F0\n2\r2\x0E2\u01F1" +
		"\x032\x052\u01F5\n2\x033\x033\x073\u01F9\n3\f3\x0E3\u01FC\v3\x033\x03" +
		"3\x034\x064\u0201\n4\r4\x0E4\u0202\x034\x054\u0206\n4\x035\x035\x075\u020A" +
		"\n5\f5\x0E5\u020D\v5\x035\x035\x036\x066\u0212\n6\r6\x0E6\u0213\x036\x05" +
		"6\u0217\n6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u022F\n7\x03" +
		"8\x038\x038\x038\x038\x038\x038\x058\u0238\n8\x039\x039\x039\x03:\x03" +
		":\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
		"?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x05" +
		"C\u025A\nC\x03C\x03C\x03D\x03D\x03D\x03D\x05D\u0262\nD\x05D\u0264\nD\x03" +
		"E\x03E\x03E\x03E\x05E\u026A\nE\x03F\x03F\x03F\x03F\x03F\x02\x02\x02G\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x02\v\x03\x02:;\x04\x02" +
		"\x07\x07\x14\x14\x04\x02##77\x04\x02\x03\x03\x12\x12\x03\x02\x0E\x10\x04" +
		"\x02\x04\x04\r\r\x04\x02((00\x04\x02\'\'//\x04\x02&&..\x02\u0295\x02\x8F" +
		"\x03\x02\x02\x02\x04\x99\x03\x02\x02\x02\x06\x9D\x03\x02\x02\x02\b\xA2" +
		"\x03\x02\x02\x02\n\xA9\x03\x02\x02\x02\f\xAB\x03\x02\x02\x02\x0E\xAD\x03" +
		"\x02\x02\x02\x10\xAF\x03\x02\x02\x02\x12\xB4\x03\x02\x02\x02\x14\xC1\x03" +
		"\x02\x02\x02\x16\xCA\x03\x02\x02\x02\x18\xD3\x03\x02\x02\x02\x1A\xD5\x03" +
		"\x02\x02\x02\x1C\xD7\x03\x02\x02\x02\x1E\xDF\x03\x02\x02\x02 \xF2\x03" +
		"\x02\x02\x02\"\xF4\x03\x02\x02\x02$\xF7\x03\x02\x02\x02&\xF9\x03\x02\x02" +
		"\x02(\u0101\x03\x02\x02\x02*\u0103\x03\x02\x02\x02,\u0109\x03\x02\x02" +
		"\x02.\u0111\x03\x02\x02\x020\u011D\x03\x02\x02\x022\u011F\x03\x02\x02" +
		"\x024\u0122\x03\x02\x02\x026\u0124\x03\x02\x02\x028\u012B\x03\x02\x02" +
		"\x02:\u012F\x03\x02\x02\x02<\u0156\x03\x02\x02\x02>\u0158\x03\x02\x02" +
		"\x02@\u015F\x03\x02\x02\x02B\u0161\x03\x02\x02\x02D\u0165\x03\x02\x02" +
		"\x02F\u0180\x03\x02\x02\x02H\u0182\x03\x02\x02\x02J\u0188\x03\x02\x02" +
		"\x02L\u018A\x03\x02\x02\x02N\u018D\x03\x02\x02\x02P\u01AA\x03\x02\x02" +
		"\x02R\u01B1\x03\x02\x02\x02T\u01B3\x03\x02\x02\x02V\u01BA\x03\x02\x02" +
		"\x02X\u01C0\x03\x02\x02\x02Z\u01CF\x03\x02\x02\x02\\\u01D6\x03\x02\x02" +
		"\x02^\u01E3\x03\x02\x02\x02`\u01E5\x03\x02\x02\x02b\u01F4\x03\x02\x02" +
		"\x02d\u01F6\x03\x02\x02\x02f\u0205\x03\x02\x02\x02h\u0207\x03\x02\x02" +
		"\x02j\u0216\x03\x02\x02\x02l\u022E\x03\x02\x02\x02n\u0237\x03\x02\x02" +
		"\x02p\u0239\x03\x02\x02\x02r\u023C\x03\x02\x02\x02t\u023F\x03\x02\x02" +
		"\x02v\u0242\x03\x02\x02\x02x\u0245\x03\x02\x02\x02z\u0248\x03\x02\x02" +
		"\x02|\u024B\x03\x02\x02\x02~\u024E\x03\x02\x02\x02\x80\u0251\x03\x02\x02" +
		"\x02\x82\u0254\x03\x02\x02\x02\x84\u0257\x03\x02\x02\x02\x86\u0263\x03" +
		"\x02\x02\x02\x88\u0269\x03\x02\x02\x02\x8A\u026B\x03\x02\x02\x02\x8C\x8E" +
		"\x05\x04\x03\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D" +
		"\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x03\x03\x02\x02\x02\x91\x8F" +
		"\x03\x02\x02\x02\x92\x9A\x05\x1C\x0F\x02\x93\x9A\x05N(\x02\x94\x9A\x05" +
		"\\/\x02\x95\x9A\x05X-\x02\x96\x9A\x05Z.\x02\x97\x9A\x05^0\x02\x98\x9A" +
		"\x076\x02\x02\x99\x92\x03\x02\x02\x02\x99\x93\x03\x02\x02\x02\x99\x94" +
		"\x03\x02\x02\x02\x99\x95\x03\x02\x02\x02\x99\x96\x03\x02\x02\x02\x99\x97" +
		"\x03\x02\x02\x02\x99\x98\x03\x02\x02\x02\x9A\x05\x03\x02\x02\x02\x9B\x9E" +
		"\x05\n\x06\x02\x9C\x9E\x05\b\x05\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9C\x03" +
		"\x02\x02\x02\x9E\x07\x03\x02\x02\x02\x9F\xA3\x05\f\x07\x02\xA0\xA3\x05" +
		"\x0E\b\x02\xA1\xA3\x05\x10\t\x02\xA2\x9F\x03\x02\x02\x02\xA2\xA0\x03\x02" +
		"\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\t\x03\x02\x02\x02\xA4\xAA\x078\x02" +
		"\x02\xA5\xA6\x078\x02\x02\xA6\xA7\x07*\x02\x02\xA7\xA8\x07*\x02\x02\xA8" +
		"\xAA\x078\x02\x02\xA9\xA4\x03\x02\x02\x02\xA9\xA5\x03\x02\x02\x02\xAA" +
		"\v\x03\x02\x02\x02\xAB\xAC\x079\x02\x02\xAC\r\x03\x02\x02\x02\xAD\xAE" +
		"\t\x02\x02\x02\xAE\x0F\x03\x02\x02\x02\xAF\xB0\t\x03\x02\x02\xB0\x11\x03" +
		"\x02\x02\x02\xB1\xB3\x05\x18\r\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03" +
		"\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x03" +
		"\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB9\x05\n\x06\x02\xB8\xBA\x05" +
		"\x14\v\x02\xB9\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03" +
		"\x02\x02\x02\xBB\xBD\x05\x1A\x0E\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03" +
		"\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xC0\x07\x05\x02\x02\xBF\xBE\x03" +
		"\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\x13\x03\x02\x02\x02\xC1\xC2\x07" +
		".\x02\x02\xC2\xC3\x05\x16\f\x02\xC3\xC4\x07&\x02\x02\xC4\x15\x03\x02\x02" +
		"\x02\xC5\xCB\x05\x12\n\x02\xC6\xC7\x05\x12\n\x02\xC7\xC8\x07+\x02\x02" +
		"\xC8\xC9\x05\x16\f\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC5\x03\x02\x02\x02" +
		"\xCA\xC6\x03\x02\x02\x02\xCB\x17\x03\x02\x02\x02\xCC\xD4\x07\x03\x02\x02" +
		"\xCD\xD4\x07\x04\x02\x02\xCE\xD4\x07\x05\x02\x02\xCF\xD4\x07\x06\x02\x02" +
		"\xD0\xD4\x07\x12\x02\x02\xD1\xD4\x07\v\x02\x02\xD2\xD4\x05z>\x02\xD3\xCC" +
		"\x03\x02\x02\x02\xD3\xCD\x03\x02\x02\x02\xD3\xCE\x03\x02\x02\x02\xD3\xCF" +
		"\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2" +
		"\x03\x02\x02\x02\xD4\x19\x03\x02\x02\x02\xD5\xD6\t\x04\x02\x02\xD6\x1B" +
		"\x03\x02\x02\x02\xD7\xD8\x05\x1E\x10\x02\xD8\xD9\x07/\x02\x02\xD9\xDA" +
		"\x05,\x17\x02\xDA\xDC\x07\'\x02\x02\xDB\xDD\x076\x02\x02\xDC\xDB\x03\x02" +
		"\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\x1D\x03\x02\x02\x02\xDE\xE0\x05 " +
		"\x11\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02" +
		"\x02\x02\xE1\xE3\x05\"\x12\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x05$\x13\x02\xE5\xE7\x07!\x02" +
		"\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02\x02" +
		"\x02\xE8\xEA\x05\n\x06\x02\xE9\xEB\x05h5\x02\xEA\xE9\x03\x02\x02\x02\xEA" +
		"\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEE\x05&\x14\x02\xED" +
		"\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x1F\x03\x02\x02\x02\xEF" +
		"\xF3\x05p9\x02\xF0\xF3\x05v<\x02\xF1\xF3\x05~@\x02\xF2\xEF\x03\x02\x02" +
		"\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF1\x03\x02\x02\x02\xF3!\x03\x02\x02" +
		"\x02\xF4\xF5\x07\x13\x02\x02\xF5\xF6\x05h5\x02\xF6#\x03\x02\x02\x02\xF7" +
		"\xF8\t\x05\x02\x02\xF8%\x03\x02\x02\x02\xF9\xFA\x07*\x02\x02\xFA\xFB\x05" +
		"(\x15\x02\xFB\'\x03\x02\x02\x02\xFC\u0102\x05*\x16\x02\xFD\xFE\x05*\x16" +
		"\x02\xFE\xFF\x07+\x02\x02\xFF\u0100\x05(\x15\x02\u0100\u0102\x03\x02\x02" +
		"\x02\u0101\xFC\x03\x02\x02\x02\u0101\xFD\x03\x02\x02\x02\u0102)\x03\x02" +
		"\x02\x02\u0103\u0104\x054\x1B\x02\u0104\u0106\x05\n\x06\x02\u0105\u0107" +
		"\x05h5\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107" +
		"+\x03\x02\x02\x02\u0108\u010A\x05\x82B\x02\u0109\u0108\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03\x02\x02\x02\u010B\u010D\x07" +
		"6\x02\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\u010F\x03\x02\x02\x02\u010E\u0110\x05.\x18\x02\u010F\u010E\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110-\x03\x02\x02\x02\u0111\u0113\x05" +
		"0\x19\x02\u0112\u0114\x05.\x18\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114" +
		"\x03\x02\x02\x02\u0114/\x03\x02\x02\x02\u0115\u011E\x052\x1A\x02\u0116" +
		"\u011E\x05:\x1E\x02\u0117\u011E\x056\x1C\x02\u0118\u011E\x05D#\x02\u0119" +
		"\u011E\x058\x1D\x02\u011A\u011E\x05L\'\x02\u011B\u011E\x05^0\x02\u011C" +
		"\u011E\x076\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D\u0116\x03\x02\x02" +
		"\x02\u011D\u0117\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u0119" +
		"\x03\x02\x02\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02" +
		"\u011D\u011C\x03\x02\x02\x02\u011E1\x03\x02\x02\x02\u011F\u0120\x054\x1B" +
		"\x02\u0120\u0121\x07*\x02\x02\u01213\x03\x02\x02\x02\u0122\u0123\t\x06" +
		"\x02\x02\u01235\x03\x02\x02\x02\u0124\u0126\x07\t\x02\x02\u0125\u0127" +
		"\x07\x03\x02\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02" +
		"\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x05\n\x06\x02\u0129\u012A\x07" +
		"6\x02\x02\u012A7\x03\x02\x02\x02\u012B\u012C\x07 \x02\x02\u012C\u012D" +
		"\x05`1\x02\u012D9\x03\x02\x02\x02\u012E\u0130\x05\x80A\x02\u012F\u012E" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x03\x02\x02\x02" +
		"\u0131\u0133\x05t;\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0137\x03\x02\x02\x02\u0134\u0136\x05n8\x02\u0135\u0134" +
		"\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03" +
		"\x02\x02\x02\u013A\u013C\x05\x12\n\x02\u013B\u013A\x03\x02\x02\x02\u013B" +
		"\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x05l7\x02" +
		"\u013E\u0142\x05`1\x02\u013F\u0141\x05> \x02\u0140\u013F\x03\x02\x02\x02" +
		"\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03" +
		"\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145" +
		"\u0146\x05<\x1F\x02\u0146;\x03\x02\x02\x02\u0147\u0157\x076\x02\x02\u0148" +
		"\u014A\x05d3\x02\u0149\u014B\x076\x02\x02\u014A\u0149\x03\x02\x02\x02" +
		"\u014A\u014B\x03\x02\x02\x02\u014B\u0157\x03\x02\x02\x02\u014C\u014D\x07" +
		"*\x02\x02\u014D\u014E\x05@!\x02\u014E\u0150\x05d3\x02\u014F\u0151\x07" +
		"6\x02\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0157\x03\x02\x02\x02\u0152\u0153\x07,\x02\x02\u0153\u0154\x05\x0E\b" +
		"\x02\u0154\u0155\x076\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0147" +
		"\x03\x02\x02\x02\u0156\u0148\x03\x02\x02\x02\u0156\u014C\x03\x02\x02\x02" +
		"\u0156\u0152\x03\x02\x02\x02\u0157=\x03\x02\x02\x02\u0158\u0159\t\x07" +
		"\x02\x02\u0159?\x03\x02\x02\x02\u015A\u0160\x05B\"\x02\u015B\u015C\x05" +
		"B\"\x02\u015C\u015D\x07+\x02\x02\u015D\u015E\x05@!\x02\u015E\u0160\x03" +
		"\x02\x02\x02\u015F\u015A\x03\x02\x02\x02\u015F\u015B\x03\x02\x02\x02\u0160" +
		"A\x03\x02\x02\x02\u0161\u0162\x05\n\x06\x02\u0162\u0163\x05`1\x02\u0163" +
		"C\x03\x02\x02\x02\u0164\u0166\x05|?\x02\u0165\u0164\x03\x02\x02\x02\u0165" +
		"\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0169\x07\x11" +
		"\x02\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"\u016B\x03\x02\x02\x02\u016A\u016C\x05\x12\n\x02\u016B\u016A\x03\x02\x02" +
		"\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F" +
		"\x05\n\x06\x02\u016E\u0170\x05H%\x02\u016F\u016E\x03\x02\x02\x02\u016F" +
		"\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02\x02\x02\u0171\u0173\x05F$\x02" +
		"\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03" +
		"\x02\x02\x02\u0174\u0175\x076\x02\x02\u0175E\x03\x02\x02\x02\u0176\u0177" +
		"\x07*\x02\x02\u0177\u0181\x05\b\x05\x02\u0178\u0179\x07,\x02\x02\u0179" +
		"\u0181\x05\b\x05\x02\u017A\u017B\x07,\x02\x02\u017B\u0181\x05\n\x06\x02" +
		"\u017C\u017D\x07,\x02\x02\u017D\u017E\x05\n\x06\x02\u017E\u017F\x05`1" +
		"\x02\u017F\u0181\x03\x02\x02\x02\u0180\u0176\x03\x02\x02\x02\u0180\u0178" +
		"\x03\x02\x02\x02\u0180\u017A\x03\x02\x02\x02\u0180\u017C\x03\x02\x02\x02" +
		"\u0181G\x03\x02\x02\x02\u0182\u0183\x071\x02\x02\u0183\u0184\x05J&\x02" +
		"\u0184\u0185\x07)\x02\x02\u0185I\x03\x02\x02\x02\u0186\u0189\x05\n\x06" +
		"\x02\u0187\u0189\x05\x0E\b\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0187" +
		"\x03\x02\x02\x02\u0189K\x03\x02\x02\x02\u018A\u018B\x07\x06\x02\x02\u018B" +
		"\u018C\x05d3\x02\u018CM\x03\x02\x02\x02\u018D\u018E\x05P)\x02\u018E\u018F" +
		"\x07/\x02\x02\u018F\u0191\x05R*\x02\u0190\u0192\x07+\x02\x02\u0191\u0190" +
		"\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02" +
		"\u0193\u0195\x07\'\x02\x02\u0194\u0196\x076\x02\x02\u0195\u0194\x03\x02" +
		"\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196O\x03\x02\x02\x02\u0197\u0199" +
		"\x05r:\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\u019A\x03\x02\x02\x02\u019A\u019C\x07\x06\x02\x02\u019B\u019D\x07\x03" +
		"\x02\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E\u01AB\x05\n\x06\x02\u019F\u01A1\x05r:\x02" +
		"\u01A0\u019F\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x03" +
		"\x02\x02\x02\u01A2\u01A4\x07\x06\x02\x02\u01A3\u01A5\x07\x03\x02\x02\u01A4" +
		"\u01A3\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02" +
		"\x02\x02\u01A6\u01A7\x05\n\x06\x02\u01A7\u01A8\x07*\x02\x02\u01A8\u01A9" +
		"\x05\x12\n\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u0198\x03\x02\x02\x02" +
		"\u01AA\u01A0\x03\x02\x02\x02\u01ABQ\x03\x02\x02\x02\u01AC\u01B2\x05T+" +
		"\x02\u01AD\u01AE\x05T+\x02\u01AE\u01AF\x07+\x02\x02\u01AF\u01B0\x05R*" +
		"\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01AC\x03\x02\x02\x02\u01B1\u01AD" +
		"\x03\x02\x02\x02\u01B2S\x03\x02\x02\x02\u01B3\u01B5\x05\n\x06\x02\u01B4" +
		"\u01B6\x05V,\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02" +
		"\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B9\x05x=\x02\u01B8\u01B7\x03\x02" +
		"\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9U\x03\x02\x02\x02\u01BA\u01BB" +
		"\x07,\x02\x02\u01BB\u01BC\x05\b\x05\x02\u01BCW\x03\x02\x02\x02\u01BD\u01BF" +
		"\x05n8\x02\u01BE\u01BD\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0" +
		"\u01BE\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C3\u01C5\x05\x12\n\x02\u01C4\u01C3" +
		"\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02" +
		"\u01C6\u01C7\x05l7\x02\u01C7\u01C9\x05`1\x02\u01C8\u01CA\x07\x04\x02\x02" +
		"\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03" +
		"\x02\x02\x02\u01CB\u01CD\x05d3\x02\u01CC\u01CE\x076\x02\x02\u01CD\u01CC" +
		"\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CEY\x03\x02\x02\x02\u01CF" +
		"\u01D0\x07\x11\x02\x02\u01D0\u01D1\x05\x12\n\x02\u01D1\u01D2\x05\n\x06" +
		"\x02\u01D2\u01D3\x07,\x02\x02\u01D3\u01D4\x05\b\x05\x02\u01D4\u01D5\x07" +
		"6\x02\x02\u01D5[\x03\x02\x02\x02\u01D6\u01D7\x05\n\x06\x02\u01D7\u01D8" +
		"\x05`1\x02\u01D8\u01D9\x076\x02\x02\u01D9]\x03\x02\x02\x02\u01DA\u01DB" +
		"\x07\x15\x02\x02\u01DB\u01DC\x05\x12\n\x02\u01DC\u01DD\x05\n\x06\x02\u01DD" +
		"\u01DE\x076\x02\x02\u01DE\u01E4\x03\x02\x02\x02\u01DF\u01E0\x07\x03\x02" +
		"\x02\u01E0\u01E1\x05\n\x06\x02\u01E1\u01E2\x076\x02\x02\u01E2\u01E4\x03" +
		"\x02\x02\x02\u01E3\u01DA\x03\x02\x02\x02\u01E3\u01DF\x03\x02\x02\x02\u01E4" +
		"_\x03\x02\x02\x02\u01E5\u01E9\x070\x02\x02\u01E6\u01E8\x05b2\x02\u01E7" +
		"\u01E6\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02" +
		"\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EC\u01ED\x07(\x02\x02\u01EDa\x03\x02\x02\x02" +
		"\u01EE\u01F0\n\b\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"\u01F5\x03\x02\x02\x02\u01F3\u01F5\x05`1\x02\u01F4\u01EF\x03\x02\x02\x02" +
		"\u01F4\u01F3\x03\x02\x02\x02\u01F5c\x03\x02\x02\x02\u01F6\u01FA\x07/\x02" +
		"\x02\u01F7\u01F9\x05f4\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FC\x03" +
		"\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
		"\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07\'\x02" +
		"\x02\u01FEe\x03\x02\x02\x02\u01FF\u0201\n\t\x02\x02\u0200\u01FF\x03\x02" +
		"\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202" +
		"\u0203\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0206\x05d3\x02" +
		"\u0205\u0200\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206g\x03\x02" +
		"\x02\x02\u0207\u020B\x07.\x02\x02\u0208\u020A\x05j6\x02\u0209\u0208\x03" +
		"\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02\u020D\u020B\x03\x02" +
		"\x02\x02\u020E\u020F\x07&\x02\x02\u020Fi\x03\x02\x02\x02\u0210\u0212\n" +
		"\n\x02\x02\u0211\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0217\x03\x02" +
		"\x02\x02\u0215\u0217\x05h5\x02\u0216\u0211\x03\x02\x02\x02\u0216\u0215" +
		"\x03\x02\x02\x02\u0217k\x03\x02\x02\x02\u0218\u022F\x05\n\x06\x02\u0219" +
		"\u021A\x07\f\x02\x02\u021A\u022F\x07,\x02\x02\u021B\u021C\x07\f\x02\x02" +
		"\u021C\u021D\x07,\x02\x02\u021D\u022F\x07,\x02\x02\u021E\u021F\x07\f\x02" +
		"\x02\u021F\u0220\x07%\x02\x02\u0220\u022F\x07,\x02\x02\u0221\u0222\x07" +
		"\f\x02\x02\u0222\u0223\x071\x02\x02\u0223\u022F\x07)\x02\x02\u0224\u0225" +
		"\x07\f\x02\x02\u0225\u022F\x07.\x02\x02\u0226\u0227\x07\f\x02\x02\u0227" +
		"\u0228\x07.\x02\x02\u0228\u022F\x07.\x02\x02\u0229\u022A\x07\f\x02\x02" +
		"\u022A\u022F\x07&\x02\x02\u022B\u022C\x07\f\x02\x02\u022C\u022D\x07&\x02" +
		"\x02\u022D\u022F\x07&\x02\x02\u022E\u0218\x03\x02\x02\x02\u022E\u0219" +
		"\x03\x02\x02\x02\u022E\u021B\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u022E\u021E\x03\x02\x02\x02\u022E\u0221\x03\x02\x02\x02\u022E" +
		"\u0224\x03\x02\x02\x02\u022E\u0226\x03\x02\x02\x02\u022E\u0229\x03\x02" +
		"\x02\x02\u022E\u022B\x03\x02\x02\x02\u022Fm\x03\x02\x02\x02\u0230\u0238" +
		"\x07\x11\x02\x02\u0231\u0238\x07\x04\x02\x02\u0232\u0238\x07\x16\x02\x02" +
		"\u0233\u0238\x07\b\x02\x02\u0234\u0238\x07\n\x02\x02\u0235\u0236\x07\x13" +
		"\x02\x02\u0236\u0238\x05h5\x02\u0237\u0230\x03\x02\x02\x02\u0237\u0231" +
		"\x03\x02\x02\x02\u0237\u0232\x03\x02\x02\x02\u0237\u0233\x03\x02\x02\x02" +
		"\u0237\u0234\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238o\x03\x02" +
		"\x02\x02\u0239\u023A\x07\x17\x02\x02\u023A\u023B\x05\x84C\x02\u023Bq\x03" +
		"\x02\x02\x02\u023C\u023D\x07\x18\x02\x02\u023D\u023E\x05\x84C\x02\u023E" +
		"s\x03\x02\x02\x02\u023F\u0240\x07\x19\x02\x02\u0240\u0241\x05\x84C\x02" +
		"\u0241u\x03\x02\x02\x02\u0242\u0243\x07\x1A\x02\x02\u0243\u0244\x05\x84" +
		"C\x02\u0244w\x03\x02\x02\x02\u0245\u0246\x07\x1B\x02\x02\u0246\u0247\x05" +
		"\x84C\x02\u0247y\x03\x02\x02\x02\u0248\u0249\x07\x1C\x02\x02\u0249\u024A" +
		"\x05\x84C\x02\u024A{\x03\x02\x02\x02\u024B\u024C\x07\x1D\x02\x02\u024C" +
		"\u024D\x05\x84C\x02\u024D}\x03\x02\x02\x02\u024E\u024F\x07\x1E\x02\x02" +
		"\u024F\u0250\x05\x84C\x02\u0250\x7F\x03\x02\x02\x02\u0251\u0252\x07\x1F" +
		"\x02\x02\u0252\u0253\x05\x84C\x02\u0253\x81\x03\x02\x02\x02\u0254\u0255" +
		"\x07\"\x02\x02\u0255\u0256\x05\x84C\x02\u0256\x83\x03\x02\x02\x02\u0257" +
		"\u0259\x070\x02\x02\u0258\u025A\x05\x86D\x02\u0259\u0258\x03\x02\x02\x02" +
		"\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x07" +
		"(\x02\x02\u025C\x85\x03\x02\x02\x02\u025D\u0264\x05\x88E\x02\u025E\u025F" +
		"\x05\x88E\x02\u025F\u0261\x07+\x02\x02\u0260\u0262\x05\x86D\x02\u0261" +
		"\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264\x03\x02" +
		"\x02\x02\u0263\u025D\x03\x02\x02\x02\u0263\u025E\x03\x02\x02\x02\u0264" +
		"\x87\x03\x02\x02\x02\u0265\u026A\x05\n\x06\x02\u0266\u026A\x05\b\x05\x02" +
		"\u0267\u026A\x05\x8AF\x02\u0268\u026A\x05\x84C\x02\u0269\u0265\x03\x02" +
		"\x02\x02\u0269\u0266\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269" +
		"\u0268\x03\x02\x02\x02\u026A\x89\x03\x02\x02\x02\u026B\u026C\x05\n\x06" +
		"\x02\u026C\u026D\x07,\x02\x02\u026D\u026E\x05\x88E\x02\u026E\x8B\x03\x02" +
		"\x02\x02J\x8F\x99\x9D\xA2\xA9\xB4\xB9\xBC\xBF\xCA\xD3\xDC\xDF\xE2\xE6" +
		"\xEA\xED\xF2\u0101\u0106\u0109\u010C\u010F\u0113\u011D\u0126\u012F\u0132" +
		"\u0137\u013B\u0142\u014A\u0150\u0156\u015F\u0165\u0168\u016B\u016F\u0172" +
		"\u0180\u0188\u0191\u0195\u0198\u019C\u01A0\u01A4\u01AA\u01B1\u01B5\u01B8" +
		"\u01C0\u01C4\u01C9\u01CD\u01E3\u01E9\u01F1\u01F4\u01FA\u0202\u0205\u020B" +
		"\u0213\u0216\u022E\u0237\u0259\u0261\u0263\u0269";
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
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
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
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
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
	public templateDeclaration(): TemplateDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplateDeclarationContext);
	}
	public SF_CLASS_TAG(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.SF_CLASS_TAG, 0); }
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
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


export class TemplateDeclarationContext extends ParserRuleContext {
	public TEMPLATE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.TEMPLATE, 0); }
	public contentWithNestedAngles(): ContentWithNestedAnglesContext {
		return this.getRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_templateDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterTemplateDeclaration) {
			listener.enterTemplateDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitTemplateDeclaration) {
			listener.exitTemplateDeclaration(this);
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
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
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
	public classEnum(): ClassEnumContext | undefined {
		return this.tryGetRuleContext(0, ClassEnumContext);
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
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
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


export class ClassEnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classEnum; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassEnum) {
			listener.enterClassEnum(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassEnum) {
			listener.exitClassEnum(this);
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
	public BANG(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.BANG, 0); }
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


