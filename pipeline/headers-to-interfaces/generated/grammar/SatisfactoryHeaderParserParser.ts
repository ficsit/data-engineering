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
	public static readonly OVERRIDE = 9;
	public static readonly PRIVATE = 10;
	public static readonly PROTECTED = 11;
	public static readonly PUBLIC = 12;
	public static readonly STATIC = 13;
	public static readonly STRUCT = 14;
	public static readonly TRUE = 15;
	public static readonly TYPEDEF = 16;
	public static readonly VIRTUAL = 17;
	public static readonly UCLASS = 18;
	public static readonly UENUM = 19;
	public static readonly UFUNCTION = 20;
	public static readonly UINTERFACE = 21;
	public static readonly UMETA = 22;
	public static readonly UPARAM = 23;
	public static readonly UPROPERTY = 24;
	public static readonly USTRUCT = 25;
	public static readonly UE_DEPRECATED = 26;
	public static readonly SF_CLASS_TAG = 27;
	public static readonly SF_GENERATED_BODY = 28;
	public static readonly AMPERSAND = 29;
	public static readonly BACKSLASH = 30;
	public static readonly BANG = 31;
	public static readonly CLOSE_ANGLE = 32;
	public static readonly CLOSE_BRACE = 33;
	public static readonly CLOSE_PAREN = 34;
	public static readonly COLON = 35;
	public static readonly COMMA = 36;
	public static readonly EQUALS = 37;
	public static readonly MINUS = 38;
	public static readonly OPEN_ANGLE = 39;
	public static readonly OPEN_BRACE = 40;
	public static readonly OPEN_PAREN = 41;
	public static readonly PERIOD = 42;
	public static readonly PIPE = 43;
	public static readonly PLUS = 44;
	public static readonly QUESTION = 45;
	public static readonly SEMICOLON = 46;
	public static readonly STAR = 47;
	public static readonly IDENTIFIER = 48;
	public static readonly STRING_LITERAL = 49;
	public static readonly FLOAT_LITERAL = 50;
	public static readonly INTEGER_LITERAL = 51;
	public static readonly PREPROCESSOR = 52;
	public static readonly LINE_COMMENT_START = 53;
	public static readonly BLOCK_COMMENT_START = 54;
	public static readonly WHITESPACE = 55;
	public static readonly LINE_COMMENT_END = 56;
	public static readonly LINE_COMMENT_TEXT = 57;
	public static readonly LINE_COMMENT_OTHER = 58;
	public static readonly BLOCK_COMMENT_END = 59;
	public static readonly BLOCK_COMMENT_NEW_LINE = 60;
	public static readonly BLOCK_COMMENT_TEXT = 61;
	public static readonly BLOCK_COMMENT_OTHER = 62;
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
	public static readonly RULE_classMethod = 26;
	public static readonly RULE_classMethodEnd = 27;
	public static readonly RULE_classMethodResultModifier = 28;
	public static readonly RULE_classMethodParameterList = 29;
	public static readonly RULE_classMethodParameterName = 30;
	public static readonly RULE_classMethodParameter = 31;
	public static readonly RULE_classMethodCallList = 32;
	public static readonly RULE_classMethodCall = 33;
	public static readonly RULE_classProperty = 34;
	public static readonly RULE_classPropertyDefaultValue = 35;
	public static readonly RULE_enumDeclaration = 36;
	public static readonly RULE_enumHeader = 37;
	public static readonly RULE_enumBody = 38;
	public static readonly RULE_enumEntry = 39;
	public static readonly RULE_enumValue = 40;
	public static readonly RULE_staticFunctionDeclaration = 41;
	public static readonly RULE_staticMethodCall = 42;
	public static readonly RULE_typedef = 43;
	public static readonly RULE_contentWithNestedParens = 44;
	public static readonly RULE_contentWithNestedParensInner = 45;
	public static readonly RULE_contentWithNestedBraces = 46;
	public static readonly RULE_contentWithNestedBracesInner = 47;
	public static readonly RULE_functionModifier = 48;
	public static readonly RULE_uclassMacro = 49;
	public static readonly RULE_uenumMacro = 50;
	public static readonly RULE_ufunctionMacro = 51;
	public static readonly RULE_uinterfaceMacro = 52;
	public static readonly RULE_umetaMacro = 53;
	public static readonly RULE_uParamMacro = 54;
	public static readonly RULE_upropertyMacro = 55;
	public static readonly RULE_ustructMacro = 56;
	public static readonly RULE_uedeprecatedMacro = 57;
	public static readonly RULE_generatedBodyMacro = 58;
	public static readonly RULE_macroPropertyList = 59;
	public static readonly RULE_macroPropertyListEntries = 60;
	public static readonly RULE_macroProperty = 61;
	public static readonly RULE_macroPropertyPair = 62;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'override'", "'private'", "'protected'", 
		"'public'", "'static'", "'struct'", "'true'", "'typedef'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", 
		"'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", "'FACTORYGAME_API'", undefined, 
		"'&'", "'/'", "'!'", "'>'", "'}'", "')'", "':'", "','", "'='", "'-'", 
		"'<'", "'{'", "'('", "'.'", "'|'", "'+'", "'?'", "';'", "'*'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", 
		"INLINE", "MUTABLE", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
		"STRUCT", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", 
		"UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", 
		"CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "PERIOD", "PIPE", "PLUS", 
		"QUESTION", "SEMICOLON", "STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
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
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				{
				this.state = 126;
				this.element();
				}
				}
				this.state = 131;
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
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 133;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.staticMethodCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 135;
				this.staticFunctionDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 136;
				this.typedef();
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
			this.state = 141;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 139;
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
				this.state = 140;
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
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 145;
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
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 148;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 149;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 150;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 151;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 152;
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
			this.state = 155;
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
			this.state = 157;
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
			this.state = 159;
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
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 161;
				this.typeModifier();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this.identifier();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 168;
				this.templateType();
				}
			}

			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.AMPERSAND || _la === SatisfactoryHeaderParserParser.STAR) {
				{
				this.state = 171;
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
			this.state = 174;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 175;
			this.templateTypeList();
			this.state = 176;
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
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.typeDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.typeDeclaration();
				this.state = 180;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 181;
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
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 186;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 187;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				}
				break;
			case SatisfactoryHeaderParserParser.STRUCT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 188;
				this.match(SatisfactoryHeaderParserParser.STRUCT);
				}
				break;
			case SatisfactoryHeaderParserParser.MUTABLE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 189;
				this.match(SatisfactoryHeaderParserParser.MUTABLE);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 190;
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
			this.state = 193;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.classHeader();
			this.state = 196;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 197;
			this.classBody();
			this.state = 198;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 199;
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
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0)) {
				{
				this.state = 202;
				this.classMacro();
				}
			}

			this.state = 205;
			this.classKeyword();
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 206;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 209;
			this.identifier();
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 210;
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
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.uclassMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.uinterfaceMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.USTRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 215;
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
			this.state = 218;
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
			this.state = 220;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 221;
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
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 223;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.classExtension();
				this.state = 225;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 226;
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
			this.state = 230;
			this.classVisibilityModifier();
			this.state = 231;
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
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 233;
				this.generatedBodyMacro();
				}
			}

			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 236;
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
			this.state = 239;
			this.classEntry();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 240;
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
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 245;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 246;
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
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.classVisibilityModifier();
			this.state = 250;
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
			this.state = 252;
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
			this.state = 254;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CLASS) {
				{
				this.state = 255;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
			}

			this.state = 258;
			this.identifier();
			this.state = 259;
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
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UE_DEPRECATED) {
				{
				this.state = 261;
				this.uedeprecatedMacro();
				}
			}

			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 264;
				this.ufunctionMacro();
				}
			}

			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 267;
					this.functionModifier();
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 273;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 276;
			this.identifier();
			this.state = 277;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0) || _la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 278;
				this.classMethodParameterList();
				}
			}

			this.state = 281;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CONST || _la === SatisfactoryHeaderParserParser.OVERRIDE) {
				{
				{
				this.state = 282;
				this.classMethodResultModifier();
				}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 288;
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		let _la: number;
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.contentWithNestedBraces();
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
					{
					this.state = 292;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
				}

				}
				break;
			case SatisfactoryHeaderParserParser.COLON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 296;
				this.classMethodCallList();
				this.state = 297;
				this.contentWithNestedBraces();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
					{
					this.state = 298;
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
	public classMethodResultModifier(): ClassMethodResultModifierContext {
		let _localctx: ClassMethodResultModifierContext = new ClassMethodResultModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodParameterList);
		try {
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.classMethodParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.classMethodParameter();
				this.state = 307;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 308;
				this.classMethodParameterList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
				this.identifier();
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
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_classMethodParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
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
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_classMethodParameter);
		try {
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.typeDeclaration();
				this.state = 316;
				this.classMethodParameterName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 318;
				this.typeDeclaration();
				this.state = 319;
				this.classMethodParameterName();
				this.state = 320;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 321;
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
	public classMethodCallList(): ClassMethodCallListContext {
		let _localctx: ClassMethodCallListContext = new ClassMethodCallListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SatisfactoryHeaderParserParser.RULE_classMethodCallList);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.classMethodCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.classMethodCall();
				this.state = 327;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 328;
				this.classMethodCallList();
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
	public classMethodCall(): ClassMethodCallContext {
		let _localctx: ClassMethodCallContext = new ClassMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SatisfactoryHeaderParserParser.RULE_classMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.identifier();
			this.state = 333;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT) | (1 << SatisfactoryHeaderParserParser.UE_DEPRECATED) | (1 << SatisfactoryHeaderParserParser.SF_CLASS_TAG) | (1 << SatisfactoryHeaderParserParser.SF_GENERATED_BODY) | (1 << SatisfactoryHeaderParserParser.AMPERSAND) | (1 << SatisfactoryHeaderParserParser.BACKSLASH) | (1 << SatisfactoryHeaderParserParser.BANG))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 32)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 32)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 32)))) !== 0)) {
				{
				{
				this.state = 334;
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
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 340;
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
	public classProperty(): ClassPropertyContext {
		let _localctx: ClassPropertyContext = new ClassPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 342;
				this.upropertyMacro();
				}
			}

			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STATIC) {
				{
				this.state = 345;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
			}

			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 351;
			this.identifier();
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON || _la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 352;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 355;
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
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_classPropertyDefaultValue);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.COLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 358;
				this.literal();
				}
				break;
			case SatisfactoryHeaderParserParser.EQUALS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 359;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 360;
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
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.enumHeader();
			this.state = 364;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 365;
			this.enumBody();
			this.state = 366;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 367;
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
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 370;
					this.uenumMacro();
					}
				}

				this.state = 373;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 374;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 377;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
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
				this.state = 386;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 387;
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
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 391;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 392;
				this.enumEntry();
				this.state = 393;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 394;
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
			this.state = 398;
			this.identifier();
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 399;
				this.enumValue();
				}
			}

			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UMETA) {
				{
				this.state = 402;
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
			this.state = 405;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 406;
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
			this.state = 411;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.functionModifier();
					}
					}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 414;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 417;
			this.identifier();
			this.state = 418;
			this.contentWithNestedParens();
			this.state = 419;
			this.contentWithNestedBraces();
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SEMICOLON) {
				{
				this.state = 420;
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
	public staticMethodCall(): StaticMethodCallContext {
		let _localctx: StaticMethodCallContext = new StaticMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.identifier();
			this.state = 424;
			this.contentWithNestedParens();
			this.state = 425;
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
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_typedef);
		try {
			this.state = 436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.match(SatisfactoryHeaderParserParser.TYPEDEF);
				this.state = 428;
				this.typeDeclaration();
				this.state = 429;
				this.identifier();
				this.state = 430;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				this.state = 433;
				this.identifier();
				this.state = 434;
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
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_contentWithNestedParens);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 439;
					this.contentWithNestedParensInner();
					}
					}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 445;
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
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_contentWithNestedParensInner);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.matchWildcard();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		let _localctx: ContentWithNestedBracesContext = new ContentWithNestedBracesContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_contentWithNestedBraces);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 452;
					this.contentWithNestedBracesInner();
					}
					}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 458;
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
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_contentWithNestedBracesInner);
		try {
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.matchWildcard();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.contentWithNestedBraces();
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
		this.enterRule(_localctx, 96, SatisfactoryHeaderParserParser.RULE_functionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL))) !== 0))) {
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
	public uclassMacro(): UclassMacroContext {
		let _localctx: UclassMacroContext = new UclassMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 467;
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
		this.enterRule(_localctx, 100, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 470;
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
		this.enterRule(_localctx, 102, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 473;
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
		this.enterRule(_localctx, 104, SatisfactoryHeaderParserParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(SatisfactoryHeaderParserParser.UINTERFACE);
			this.state = 476;
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
		this.enterRule(_localctx, 106, SatisfactoryHeaderParserParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(SatisfactoryHeaderParserParser.UMETA);
			this.state = 479;
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
		this.enterRule(_localctx, 108, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 482;
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
		this.enterRule(_localctx, 110, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 485;
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
		this.enterRule(_localctx, 112, SatisfactoryHeaderParserParser.RULE_ustructMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(SatisfactoryHeaderParserParser.USTRUCT);
			this.state = 488;
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
		this.enterRule(_localctx, 114, SatisfactoryHeaderParserParser.RULE_uedeprecatedMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(SatisfactoryHeaderParserParser.UE_DEPRECATED);
			this.state = 491;
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
		this.enterRule(_localctx, 116, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 494;
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
		this.enterRule(_localctx, 118, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 41)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 41)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 41)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 41)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 41)))) !== 0)) {
				{
				this.state = 497;
				this.macroPropertyListEntries();
				}
			}

			this.state = 500;
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
		this.enterRule(_localctx, 120, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 503;
				this.macroProperty();
				this.state = 504;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 41)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 41)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 41)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 41)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 41)))) !== 0)) {
					{
					this.state = 505;
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
		this.enterRule(_localctx, 122, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 512;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 513;
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
		this.enterRule(_localctx, 124, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.identifier();
			this.state = 517;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 518;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u020B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x07\x02\x82\n\x02\f\x02\x0E\x02\x85" +
		"\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x8C\n\x03\x03\x04" +
		"\x03\x04\x05\x04\x90\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\x95\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x9C\n\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x07\n\xA5\n\n\f\n\x0E\n\xA8\v\n\x03\n\x03" +
		"\n\x05\n\xAC\n\n\x03\n\x05\n\xAF\n\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x05\f\xBA\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x05\r\xC2\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xCB\n\x0F\x03\x10\x05\x10\xCE\n\x10\x03\x10\x03\x10\x05\x10\xD2" +
		"\n\x10\x03\x10\x03\x10\x05\x10\xD6\n\x10\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xDB\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\xE7\n\x14\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x05\x16\xED\n\x16\x03\x16\x05\x16\xF0\n\x16\x03\x17\x03\x17\x05\x17\xF4" +
		"\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xFA\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0103\n\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x05\x1C\u0109\n\x1C\x03\x1C\x05\x1C\u010C\n\x1C\x03" +
		"\x1C\x07\x1C\u010F\n\x1C\f\x1C\x0E\x1C\u0112\v\x1C\x03\x1C\x05\x1C\u0115" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u011A\n\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u011E\n\x1C\f\x1C\x0E\x1C\u0121\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u0128\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\u012E\n\x1D\x05\x1D\u0130\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u013A\n\x1F\x03 \x03 \x03!\x03!\x03!" +
		"\x03!\x03!\x03!\x03!\x03!\x05!\u0146\n!\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x05\"\u014D\n\"\x03#\x03#\x03#\x07#\u0152\n#\f#\x0E#\u0155\v#\x03#\x03" +
		"#\x03$\x05$\u015A\n$\x03$\x05$\u015D\n$\x03$\x05$\u0160\n$\x03$\x03$\x05" +
		"$\u0164\n$\x03$\x03$\x03%\x03%\x03%\x03%\x05%\u016C\n%\x03&\x03&\x03&" +
		"\x03&\x03&\x05&\u0173\n&\x03\'\x05\'\u0176\n\'\x03\'\x03\'\x05\'\u017A" +
		"\n\'\x03\'\x03\'\x05\'\u017E\n\'\x03\'\x03\'\x05\'\u0182\n\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u0188\n\'\x03(\x03(\x03(\x03(\x03(\x05(\u018F\n(" +
		"\x03)\x03)\x05)\u0193\n)\x03)\x05)\u0196\n)\x03*\x03*\x03*\x03+\x07+\u019C" +
		"\n+\f+\x0E+\u019F\v+\x03+\x05+\u01A2\n+\x03+\x03+\x03+\x03+\x05+\u01A8" +
		"\n+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05" +
		"-\u01B7\n-\x03.\x03.\x07.\u01BB\n.\f.\x0E.\u01BE\v.\x03.\x03.\x03/\x03" +
		"/\x05/\u01C4\n/\x030\x030\x070\u01C8\n0\f0\x0E0\u01CB\v0\x030\x030\x03" +
		"1\x031\x051\u01D1\n1\x032\x032\x033\x033\x033\x034\x034\x034\x035\x03" +
		"5\x035\x036\x036\x036\x037\x037\x037\x038\x038\x038\x039\x039\x039\x03" +
		":\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x05=\u01F5\n=\x03" +
		"=\x03=\x03>\x03>\x03>\x03>\x05>\u01FD\n>\x05>\u01FF\n>\x03?\x03?\x03?" +
		"\x03?\x05?\u0205\n?\x03@\x03@\x03@\x03@\x03@\x02\x02\x02A\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x02" +
		"\n\x03\x0245\x04\x02\x06\x06\x11\x11\x04\x02\x1F\x1F11\x04\x02\x03\x03" +
		"\x10\x10\x03\x02\f\x0E\x04\x02\x04\x04\v\v\x03\x02$$\x07\x02\x04\x04\x07" +
		"\x07\t\t\x0F\x0F\x13\x13\x02\u0216\x02\x83\x03\x02\x02\x02\x04\x8B\x03" +
		"\x02\x02\x02\x06\x8F\x03\x02\x02\x02\b\x94\x03\x02\x02\x02\n\x9B\x03\x02" +
		"\x02\x02\f\x9D\x03\x02\x02\x02\x0E\x9F\x03\x02\x02\x02\x10\xA1\x03\x02" +
		"\x02\x02\x12\xA6\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xB9\x03\x02" +
		"\x02\x02\x18\xC1\x03\x02\x02\x02\x1A\xC3\x03\x02\x02\x02\x1C\xC5\x03\x02" +
		"\x02\x02\x1E\xCD\x03\x02\x02\x02 \xDA\x03\x02\x02\x02\"\xDC\x03\x02\x02" +
		"\x02$\xDE\x03\x02\x02\x02&\xE6\x03\x02\x02\x02(\xE8\x03\x02\x02\x02*\xEC" +
		"\x03\x02\x02\x02,\xF1\x03\x02\x02\x02.\xF9\x03\x02\x02\x020\xFB\x03\x02" +
		"\x02\x022\xFE\x03\x02\x02\x024\u0100\x03\x02\x02\x026\u0108\x03\x02\x02" +
		"\x028\u012F\x03\x02\x02\x02:\u0131\x03\x02\x02\x02<\u0139\x03\x02\x02" +
		"\x02>\u013B\x03\x02\x02\x02@\u0145\x03\x02\x02\x02B\u014C\x03\x02\x02" +
		"\x02D\u014E\x03\x02\x02\x02F\u0159\x03\x02\x02\x02H\u016B\x03\x02\x02" +
		"\x02J\u016D\x03\x02\x02\x02L\u0187\x03\x02\x02\x02N\u018E\x03\x02\x02" +
		"\x02P\u0190\x03\x02\x02\x02R\u0197\x03\x02\x02\x02T\u019D\x03\x02\x02" +
		"\x02V\u01A9\x03\x02\x02\x02X\u01B6\x03\x02\x02\x02Z\u01B8\x03\x02\x02" +
		"\x02\\\u01C3\x03\x02\x02\x02^\u01C5\x03\x02\x02\x02`\u01D0\x03\x02\x02" +
		"\x02b\u01D2\x03\x02\x02\x02d\u01D4\x03\x02\x02\x02f\u01D7\x03\x02\x02" +
		"\x02h\u01DA\x03\x02\x02\x02j\u01DD\x03\x02\x02\x02l\u01E0\x03\x02\x02" +
		"\x02n\u01E3\x03\x02\x02\x02p\u01E6\x03\x02\x02\x02r\u01E9\x03\x02\x02" +
		"\x02t\u01EC\x03\x02\x02\x02v\u01EF\x03\x02\x02\x02x\u01F2\x03\x02\x02" +
		"\x02z\u01FE\x03\x02\x02\x02|\u0204\x03\x02\x02\x02~\u0206\x03\x02\x02" +
		"\x02\x80\x82\x05\x04\x03\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02" +
		"\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x03\x03\x02\x02" +
		"\x02\x85\x83\x03\x02\x02\x02\x86\x8C\x05\x1C\x0F\x02\x87\x8C\x05J&\x02" +
		"\x88\x8C\x05V,\x02\x89\x8C\x05T+\x02\x8A\x8C\x05X-\x02\x8B\x86\x03\x02" +
		"\x02\x02\x8B\x87\x03\x02\x02\x02\x8B\x88\x03\x02\x02\x02\x8B\x89\x03\x02" +
		"\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x05\x03\x02\x02\x02\x8D\x90\x05\n" +
		"\x06\x02\x8E\x90\x05\b\x05\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02" +
		"\x02\x02\x90\x07\x03\x02\x02\x02\x91\x95\x05\f\x07\x02\x92\x95\x05\x0E" +
		"\b\x02\x93\x95\x05\x10\t\x02\x94\x91\x03\x02\x02\x02\x94\x92\x03\x02\x02" +
		"\x02\x94\x93\x03\x02\x02\x02\x95\t\x03\x02\x02\x02\x96\x9C\x072\x02\x02" +
		"\x97\x98\x072\x02\x02\x98\x99\x07%\x02\x02\x99\x9A\x07%\x02\x02\x9A\x9C" +
		"\x072\x02\x02\x9B\x96\x03\x02\x02\x02\x9B\x97\x03\x02\x02\x02\x9C\v\x03" +
		"\x02\x02\x02\x9D\x9E\x073\x02\x02\x9E\r\x03\x02\x02\x02\x9F\xA0\t\x02" +
		"\x02\x02\xA0\x0F\x03\x02\x02\x02\xA1\xA2\t\x03\x02\x02\xA2\x11\x03\x02" +
		"\x02\x02\xA3\xA5\x05\x18\r\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02" +
		"\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02" +
		"\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAB\x05\n\x06\x02\xAA\xAC\x05\x14" +
		"\v\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02" +
		"\x02\x02\xAD\xAF\x05\x1A\x0E\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02" +
		"\x02\x02\xAF\x13\x03\x02\x02\x02\xB0\xB1\x07)\x02\x02\xB1\xB2\x05\x16" +
		"\f\x02\xB2\xB3\x07\"\x02\x02\xB3\x15\x03\x02\x02\x02\xB4\xBA\x05\x12\n" +
		"\x02\xB5\xB6\x05\x12\n\x02\xB6\xB7\x07&\x02\x02\xB7\xB8\x05\x16\f\x02" +
		"\xB8\xBA\x03\x02\x02\x02\xB9\xB4\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02" +
		"\xBA\x17\x03\x02\x02\x02\xBB\xC2\x07\x03\x02\x02\xBC\xC2\x07\x04\x02\x02" +
		"\xBD\xC2\x07\x05\x02\x02\xBE\xC2\x07\x10\x02\x02\xBF\xC2\x07\n\x02\x02" +
		"\xC0\xC2\x05n8\x02\xC1\xBB\x03\x02\x02\x02\xC1\xBC\x03\x02\x02\x02\xC1" +
		"\xBD\x03\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1" +
		"\xC0\x03\x02\x02\x02\xC2\x19\x03\x02\x02\x02\xC3\xC4\t\x04\x02\x02\xC4" +
		"\x1B\x03\x02\x02\x02\xC5\xC6\x05\x1E\x10\x02\xC6\xC7\x07*\x02\x02\xC7" +
		"\xC8\x05*\x16\x02\xC8\xCA\x07#\x02\x02\xC9\xCB\x070\x02\x02\xCA\xC9\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\x1D\x03\x02\x02\x02\xCC\xCE\x05" +
		" \x11\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03" +
		"\x02\x02\x02\xCF\xD1\x05\"\x12\x02\xD0\xD2\x07\x1D\x02\x02\xD1\xD0\x03" +
		"\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x05" +
		"\n\x06\x02\xD4\xD6\x05$\x13\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02" +
		"\x02\x02\xD6\x1F\x03\x02\x02\x02\xD7\xDB\x05d3\x02\xD8\xDB\x05j6\x02\xD9" +
		"\xDB\x05r:\x02\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9" +
		"\x03\x02\x02\x02\xDB!\x03\x02\x02\x02\xDC\xDD\t\x05\x02\x02\xDD#\x03\x02" +
		"\x02\x02\xDE\xDF\x07%\x02\x02\xDF\xE0\x05&\x14\x02\xE0%\x03\x02\x02\x02" +
		"\xE1\xE7\x05(\x15\x02\xE2\xE3\x05(\x15\x02\xE3\xE4\x07&\x02\x02\xE4\xE5" +
		"\x05&\x14\x02\xE5\xE7\x03\x02\x02\x02\xE6\xE1\x03\x02\x02\x02\xE6\xE2" +
		"\x03\x02\x02\x02\xE7\'\x03\x02\x02\x02\xE8\xE9\x052\x1A\x02\xE9\xEA\x05" +
		"\n\x06\x02\xEA)\x03\x02\x02\x02\xEB\xED\x05v<\x02\xEC\xEB\x03\x02\x02" +
		"\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xF0\x05,\x17" +
		"\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0+\x03\x02\x02" +
		"\x02\xF1\xF3\x05.\x18\x02\xF2\xF4\x05,\x17\x02\xF3\xF2\x03\x02\x02\x02" +
		"\xF3\xF4\x03\x02\x02\x02\xF4-\x03\x02\x02\x02\xF5\xFA\x050\x19\x02\xF6" +
		"\xFA\x056\x1C\x02\xF7\xFA\x054\x1B\x02\xF8\xFA\x05F$\x02\xF9\xF5\x03\x02" +
		"\x02\x02\xF9\xF6\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02" +
		"\x02\x02\xFA/\x03\x02\x02\x02\xFB\xFC\x052\x1A\x02\xFC\xFD\x07%\x02\x02" +
		"\xFD1\x03\x02\x02\x02\xFE\xFF\t\x06\x02\x02\xFF3\x03\x02\x02\x02\u0100" +
		"\u0102\x07\b\x02\x02\u0101\u0103\x07\x03\x02\x02\u0102\u0101\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105" +
		"\x05\n\x06\x02\u0105\u0106\x070\x02\x02\u01065\x03\x02\x02\x02\u0107\u0109" +
		"\x05t;\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109" +
		"\u010B\x03\x02\x02\x02\u010A\u010C\x05h5\x02\u010B\u010A\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u0110\x03\x02\x02\x02\u010D\u010F\x05" +
		"b2\x02\u010E\u010D\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0113\u0115\x05\x12\n\x02\u0114\u0113\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116" +
		"\u0117\x05\n\x06\x02\u0117\u0119\x07+\x02\x02\u0118\u011A\x05<\x1F\x02" +
		"\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x03" +
		"\x02\x02\x02\u011B\u011F\x07$\x02\x02\u011C\u011E\x05:\x1E\x02\u011D\u011C" +
		"\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02" +
		"\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011F\x03" +
		"\x02\x02\x02\u0122\u0123\x058\x1D\x02\u01237\x03\x02\x02\x02\u0124\u0130" +
		"\x070\x02\x02\u0125\u0127\x05^0\x02\u0126\u0128\x070\x02\x02\u0127\u0126" +
		"\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0130\x03\x02\x02\x02" +
		"\u0129\u012A\x07%\x02\x02\u012A\u012B\x05B\"\x02\u012B\u012D\x05^0\x02" +
		"\u012C\u012E\x070\x02\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03" +
		"\x02\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0124\x03\x02\x02\x02\u012F" +
		"\u0125\x03\x02\x02\x02\u012F\u0129\x03\x02\x02\x02\u01309\x03\x02\x02" +
		"\x02\u0131\u0132\t\x07\x02\x02\u0132;\x03\x02\x02\x02\u0133\u013A\x05" +
		"@!\x02\u0134\u0135\x05@!\x02\u0135\u0136\x07&\x02\x02\u0136\u0137\x05" +
		"<\x1F\x02\u0137\u013A\x03\x02\x02\x02\u0138\u013A\x05\n\x06\x02\u0139" +
		"\u0133\x03\x02\x02\x02\u0139\u0134\x03\x02\x02\x02\u0139\u0138\x03\x02" +
		"\x02\x02\u013A=\x03\x02\x02\x02\u013B\u013C\x05\n\x06\x02\u013C?\x03\x02" +
		"\x02\x02\u013D\u013E\x05\x12\n\x02\u013E\u013F\x05> \x02\u013F\u0146\x03" +
		"\x02\x02\x02\u0140\u0141\x05\x12\n\x02\u0141\u0142\x05> \x02\u0142\u0143" +
		"\x07\'\x02\x02\u0143\u0144\x05\x06\x04\x02\u0144\u0146\x03\x02\x02\x02" +
		"\u0145\u013D\x03\x02\x02\x02\u0145\u0140\x03\x02\x02\x02\u0146A\x03\x02" +
		"\x02\x02\u0147\u014D\x05D#\x02\u0148\u0149\x05D#\x02\u0149\u014A\x07&" +
		"\x02\x02\u014A\u014B\x05B\"\x02\u014B\u014D\x03\x02\x02\x02\u014C\u0147" +
		"\x03\x02\x02\x02\u014C\u0148\x03\x02\x02\x02\u014DC\x03\x02\x02\x02\u014E" +
		"\u014F\x05\n\x06\x02\u014F\u0153\x07+\x02\x02\u0150\u0152\n\b\x02\x02" +
		"\u0151\u0150\x03\x02\x02\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03" +
		"\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0156\u0157\x07$\x02\x02\u0157E\x03\x02\x02\x02" +
		"\u0158\u015A\x05p9\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02" +
		"\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u015D\x07\x0F\x02\x02\u015C" +
		"\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02" +
		"\x02\x02\u015E\u0160\x05\x12\n\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160" +
		"\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x05\n\x06\x02" +
		"\u0162\u0164\x05H%\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02" +
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x070\x02\x02\u0166G\x03" +
		"\x02\x02\x02\u0167\u0168\x07%\x02\x02\u0168\u016C\x05\b\x05\x02\u0169" +
		"\u016A\x07\'\x02\x02\u016A\u016C\x05\b\x05\x02\u016B\u0167\x03\x02\x02" +
		"\x02\u016B\u0169\x03\x02\x02\x02\u016CI\x03\x02\x02\x02\u016D\u016E\x05" +
		"L\'\x02\u016E\u016F\x07*\x02\x02\u016F\u0170\x05N(\x02\u0170\u0172\x07" +
		"#\x02\x02\u0171\u0173\x070\x02\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173K\x03\x02\x02\x02\u0174\u0176\x05f4\x02\u0175\u0174" +
		"\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02" +
		"\u0177\u0179\x07\x05\x02\x02\u0178\u017A\x07\x03\x02\x02\u0179\u0178\x03" +
		"\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B" +
		"\u0188\x05\n\x06\x02\u017C\u017E\x05f4\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0181\x07" +
		"\x05\x02\x02\u0180\u0182\x07\x03\x02\x02\u0181\u0180\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x05\n\x06" +
		"\x02\u0184\u0185\x07%\x02\x02\u0185\u0186\x05\x12\n\x02\u0186\u0188\x03" +
		"\x02\x02\x02\u0187\u0175\x03\x02\x02\x02\u0187\u017D\x03\x02\x02\x02\u0188" +
		"M\x03\x02\x02\x02\u0189\u018F\x05P)\x02\u018A\u018B\x05P)\x02\u018B\u018C" +
		"\x07&\x02\x02\u018C\u018D\x05N(\x02\u018D\u018F\x03\x02\x02\x02\u018E" +
		"\u0189\x03\x02\x02\x02\u018E\u018A\x03\x02\x02\x02\u018FO\x03\x02\x02" +
		"\x02\u0190\u0192\x05\n\x06\x02\u0191\u0193\x05R*\x02\u0192\u0191\x03\x02" +
		"\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194" +
		"\u0196\x05l7\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02" +
		"\u0196Q\x03\x02\x02\x02\u0197\u0198\x07\'\x02\x02\u0198\u0199\x05\b\x05" +
		"\x02\u0199S\x03\x02\x02\x02\u019A\u019C\x05b2\x02\u019B\u019A\x03\x02" +
		"\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02" +
		"\x02\x02\u01A0\u01A2\x05\x12\n\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2" +
		"\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x05\n\x06\x02" +
		"\u01A4\u01A5\x05Z.\x02\u01A5\u01A7\x05^0\x02\u01A6\u01A8\x070\x02\x02" +
		"\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8U\x03\x02" +
		"\x02\x02\u01A9\u01AA\x05\n\x06\x02\u01AA\u01AB\x05Z.\x02\u01AB\u01AC\x07" +
		"0\x02\x02\u01ACW\x03\x02\x02\x02\u01AD\u01AE\x07\x12\x02\x02\u01AE\u01AF" +
		"\x05\x12\n\x02\u01AF\u01B0\x05\n\x06\x02\u01B0\u01B1\x070\x02\x02\u01B1" +
		"\u01B7\x03\x02\x02\x02\u01B2\u01B3\x07\x03\x02\x02\u01B3\u01B4\x05\n\x06" +
		"\x02\u01B4\u01B5\x070\x02\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01AD" +
		"\x03\x02\x02\x02\u01B6\u01B2\x03\x02\x02\x02\u01B7Y\x03\x02\x02\x02\u01B8" +
		"\u01BC\x07+\x02\x02\u01B9\u01BB\x05\\/\x02\u01BA\u01B9\x03\x02\x02\x02" +
		"\u01BB\u01BE\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07$\x02\x02\u01C0[\x03\x02\x02\x02\u01C1\u01C4\v\x02\x02\x02\u01C2" +
		"\u01C4\x05Z.\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C4]\x03\x02\x02\x02\u01C5\u01C9\x07*\x02\x02\u01C6\u01C8\x05`1\x02" +
		"\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03" +
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB" +
		"\u01C9\x03\x02\x02\x02\u01CC\u01CD\x07#\x02\x02\u01CD_\x03\x02\x02\x02" +
		"\u01CE\u01D1\v\x02\x02\x02\u01CF\u01D1\x05^0\x02\u01D0\u01CE\x03\x02\x02" +
		"\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1a\x03\x02\x02\x02\u01D2\u01D3\t" +
		"\t\x02\x02\u01D3c\x03\x02\x02\x02\u01D4\u01D5\x07\x14\x02\x02\u01D5\u01D6" +
		"\x05x=\x02\u01D6e\x03\x02\x02\x02\u01D7\u01D8\x07\x15\x02\x02\u01D8\u01D9" +
		"\x05x=\x02\u01D9g\x03\x02\x02\x02\u01DA\u01DB\x07\x16\x02\x02\u01DB\u01DC" +
		"\x05x=\x02\u01DCi\x03\x02\x02\x02\u01DD\u01DE\x07\x17\x02\x02\u01DE\u01DF" +
		"\x05x=\x02\u01DFk\x03\x02\x02\x02\u01E0\u01E1\x07\x18\x02\x02\u01E1\u01E2" +
		"\x05x=\x02\u01E2m\x03\x02\x02\x02\u01E3\u01E4\x07\x19\x02\x02\u01E4\u01E5" +
		"\x05x=\x02\u01E5o\x03\x02\x02\x02\u01E6\u01E7\x07\x1A\x02\x02\u01E7\u01E8" +
		"\x05x=\x02\u01E8q\x03\x02\x02\x02\u01E9\u01EA\x07\x1B\x02\x02\u01EA\u01EB" +
		"\x05x=\x02\u01EBs\x03\x02\x02\x02\u01EC\u01ED\x07\x1C\x02\x02\u01ED\u01EE" +
		"\x05x=\x02\u01EEu\x03\x02\x02\x02\u01EF\u01F0\x07\x1E\x02\x02\u01F0\u01F1" +
		"\x05x=\x02\u01F1w\x03\x02\x02\x02\u01F2\u01F4\x07+\x02\x02\u01F3\u01F5" +
		"\x05z>\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5" +
		"\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07$\x02\x02\u01F7y\x03\x02\x02\x02" +
		"\u01F8\u01FF\x05|?\x02\u01F9\u01FA\x05|?\x02\u01FA\u01FC\x07&\x02\x02" +
		"\u01FB\u01FD\x05z>\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02" +
		"\x02\x02\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01F8\x03\x02\x02\x02\u01FE" +
		"\u01F9\x03\x02\x02\x02\u01FF{\x03\x02\x02\x02\u0200\u0205\x05\n\x06\x02" +
		"\u0201\u0205\x05\b\x05\x02\u0202\u0205\x05~@\x02\u0203\u0205\x05x=\x02" +
		"\u0204\u0200\x03\x02\x02\x02\u0204\u0201\x03\x02\x02\x02\u0204\u0202\x03" +
		"\x02\x02\x02\u0204\u0203\x03\x02\x02\x02\u0205}\x03\x02\x02\x02\u0206" +
		"\u0207\x05\n\x06\x02\u0207\u0208\x07\'\x02\x02\u0208\u0209\x05|?\x02\u0209" +
		"\x7F\x03\x02\x02\x02>\x83\x8B\x8F\x94\x9B\xA6\xAB\xAE\xB9\xC1\xCA\xCD" +
		"\xD1\xD5\xDA\xE6\xEC\xEF\xF3\xF9\u0102\u0108\u010B\u0110\u0114\u0119\u011F" +
		"\u0127\u012D\u012F\u0139\u0145\u014C\u0153\u0159\u015C\u015F\u0163\u016B" +
		"\u0172\u0175\u0179\u017D\u0181\u0187\u018E\u0192\u0195\u019D\u01A1\u01A7" +
		"\u01B6\u01BC\u01C3\u01C9\u01D0\u01F4\u01FC\u01FE\u0204";
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public classMethodCallList(): ClassMethodCallListContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodCallListContext);
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


export class ClassMethodParameterListContext extends ParserRuleContext {
	public classMethodParameter(): ClassMethodParameterContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodParameterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public classMethodParameterList(): ClassMethodParameterListContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
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


export class ClassMethodCallListContext extends ParserRuleContext {
	public classMethodCall(): ClassMethodCallContext {
		return this.getRuleContext(0, ClassMethodCallContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COMMA, 0); }
	public classMethodCallList(): ClassMethodCallListContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodCallListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodCallList; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodCallList) {
			listener.enterClassMethodCallList(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodCallList) {
			listener.exitClassMethodCallList(this);
		}
	}
}


export class ClassMethodCallContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_classMethodCall; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterClassMethodCall) {
			listener.enterClassMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitClassMethodCall) {
			listener.exitClassMethodCall(this);
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.COLON, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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


export class FunctionModifierContext extends ParserRuleContext {
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STATIC, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
	public INLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.INLINE, 0); }
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


