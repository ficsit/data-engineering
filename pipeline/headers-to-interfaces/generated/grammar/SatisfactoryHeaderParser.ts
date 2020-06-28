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

export class SatisfactoryHeaderParser extends Parser {
	public static readonly CLASS = 1;
	public static readonly CONST = 2;
	public static readonly CONSTEXPR = 3;
	public static readonly ENUM = 4;
	public static readonly FALSE = 5;
	public static readonly FORCEINLINE = 6;
	public static readonly FRIEND = 7;
	public static readonly INLINE = 8;
	public static readonly MUTABLE = 9;
	public static readonly NAMESPACE = 10;
	public static readonly OPERATOR = 11;
	public static readonly OVERRIDE = 12;
	public static readonly PRIVATE = 13;
	public static readonly PROTECTED = 14;
	public static readonly PUBLIC = 15;
	public static readonly STATIC = 16;
	public static readonly STRUCT = 17;
	public static readonly TEMPLATE = 18;
	public static readonly TRUE = 19;
	public static readonly TYPEDEF = 20;
	public static readonly TYPENAME = 21;
	public static readonly USING = 22;
	public static readonly VIRTUAL = 23;
	public static readonly UCLASS = 24;
	public static readonly UENUM = 25;
	public static readonly UFUNCTION = 26;
	public static readonly UINTERFACE = 27;
	public static readonly UMETA = 28;
	public static readonly UPARAM = 29;
	public static readonly UPROPERTY = 30;
	public static readonly USTRUCT = 31;
	public static readonly UE_DEPRECATED = 32;
	public static readonly STAT = 33;
	public static readonly SF_CLASS_TAG = 34;
	public static readonly SF_GENERATED_BODY = 35;
	public static readonly AMPERSAND = 36;
	public static readonly BACKSLASH = 37;
	public static readonly BANG = 38;
	public static readonly CLOSE_ANGLE = 39;
	public static readonly CLOSE_BRACE = 40;
	public static readonly CLOSE_PAREN = 41;
	public static readonly CLOSE_SQUARE = 42;
	public static readonly COLON = 43;
	public static readonly COMMA = 44;
	public static readonly EQUALS = 45;
	public static readonly MINUS = 46;
	public static readonly OPEN_ANGLE = 47;
	public static readonly OPEN_BRACE = 48;
	public static readonly OPEN_PAREN = 49;
	public static readonly OPEN_SQUARE = 50;
	public static readonly PERCENT = 51;
	public static readonly PERIOD = 52;
	public static readonly PIPE = 53;
	public static readonly PLUS = 54;
	public static readonly QUESTION = 55;
	public static readonly SEMICOLON = 56;
	public static readonly SLASH = 57;
	public static readonly STAR = 58;
	public static readonly TILDE = 59;
	public static readonly IDENTIFIER = 60;
	public static readonly STRING_LITERAL = 61;
	public static readonly FLOAT_LITERAL = 62;
	public static readonly INTEGER_LITERAL = 63;
	public static readonly MultiLineMacro = 64;
	public static readonly Directive = 65;
	public static readonly LINE_COMMENT_START = 66;
	public static readonly BLOCK_COMMENT_START = 67;
	public static readonly WHITESPACE = 68;
	public static readonly LINE_COMMENT_END = 69;
	public static readonly LINE_COMMENT_TEXT = 70;
	public static readonly LINE_COMMENT_OTHER = 71;
	public static readonly BLOCK_COMMENT_END = 72;
	public static readonly BLOCK_COMMENT_NEW_LINE = 73;
	public static readonly BLOCK_COMMENT_TEXT = 74;
	public static readonly BLOCK_COMMENT_OTHER = 75;
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
	public static readonly RULE_classMacro = 14;
	public static readonly RULE_templateDeclaration = 15;
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
	public static readonly RULE_literalExpression = 34;
	public static readonly RULE_classPropertyArraySize = 35;
	public static readonly RULE_nestedEnum = 36;
	public static readonly RULE_nestedEnumInheritance = 37;
	public static readonly RULE_nestedEnumClass = 38;
	public static readonly RULE_nestedClass = 39;
	public static readonly RULE_nestedStruct = 40;
	public static readonly RULE_enumDeclaration = 41;
	public static readonly RULE_enumHeader = 42;
	public static readonly RULE_enumBody = 43;
	public static readonly RULE_enumEntry = 44;
	public static readonly RULE_enumValue = 45;
	public static readonly RULE_staticFunctionDeclaration = 46;
	public static readonly RULE_staticArrayDeclaration = 47;
	public static readonly RULE_staticPropertyDeclaration = 48;
	public static readonly RULE_staticInlineFunctionDeclaration = 49;
	public static readonly RULE_staticMethodCall = 50;
	public static readonly RULE_typedef = 51;
	public static readonly RULE_contentWithNestedParens = 52;
	public static readonly RULE_contentWithNestedParensInner = 53;
	public static readonly RULE_contentWithNestedBraces = 54;
	public static readonly RULE_contentWithNestedBracesInner = 55;
	public static readonly RULE_contentWithNestedAngles = 56;
	public static readonly RULE_contentWithNestedAnglesInner = 57;
	public static readonly RULE_contentWithNestedSquares = 58;
	public static readonly RULE_contentWithNestedSquaresInner = 59;
	public static readonly RULE_functionName = 60;
	public static readonly RULE_functionModifier = 61;
	public static readonly RULE_namespaceDeclaration = 62;
	public static readonly RULE_usingNamespace = 63;
	public static readonly RULE_uclassMacro = 64;
	public static readonly RULE_uenumMacro = 65;
	public static readonly RULE_ufunctionMacro = 66;
	public static readonly RULE_uinterfaceMacro = 67;
	public static readonly RULE_umetaMacro = 68;
	public static readonly RULE_uParamMacro = 69;
	public static readonly RULE_upropertyMacro = 70;
	public static readonly RULE_ustructMacro = 71;
	public static readonly RULE_uedeprecatedMacro = 72;
	public static readonly RULE_generatedBodyMacro = 73;
	public static readonly RULE_macroPropertyList = 74;
	public static readonly RULE_macroPropertyListEntries = 75;
	public static readonly RULE_macroProperty = 76;
	public static readonly RULE_macroPropertyPair = 77;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "booleanLiteral", "typeDeclaration", "templateType", 
		"typeModifier", "typeReferenceType", "classDeclaration", "classHeader", 
		"classMacro", "templateDeclaration", "classKeyword", "classInheritance", 
		"classExtensionList", "classExtension", "classBody", "classEntries", "classEntry", 
		"classVisibility", "classVisibilityModifier", "friendDeclaration", "statDeclaration", 
		"classMethod", "classMethodEnd", "classMethodResultModifier", "classInitializerList", 
		"classInitializer", "classProperty", "classPropertyDefaultValue", "literalExpression", 
		"classPropertyArraySize", "nestedEnum", "nestedEnumInheritance", "nestedEnumClass", 
		"nestedClass", "nestedStruct", "enumDeclaration", "enumHeader", "enumBody", 
		"enumEntry", "enumValue", "staticFunctionDeclaration", "staticArrayDeclaration", 
		"staticPropertyDeclaration", "staticInlineFunctionDeclaration", "staticMethodCall", 
		"typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
		"contentWithNestedBraces", "contentWithNestedBracesInner", "contentWithNestedAngles", 
		"contentWithNestedAnglesInner", "contentWithNestedSquares", "contentWithNestedSquaresInner", 
		"functionName", "functionModifier", "namespaceDeclaration", "usingNamespace", 
		"uclassMacro", "uenumMacro", "ufunctionMacro", "uinterfaceMacro", "umetaMacro", 
		"uParamMacro", "upropertyMacro", "ustructMacro", "uedeprecatedMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'constexpr'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'namespace'", "'operator'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'template'", 
		"'true'", "'typedef'", "'typename'", "'using'", "'virtual'", "'UCLASS'", 
		"'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'USTRUCT'", "'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", undefined, 
		"'&'", "'/'", "'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", 
		"'-'", "'<'", "'{'", "'('", "'['", "'%'", "'.'", "'|'", "'+'", "'?'", 
		"';'", "'\\'", "'*'", "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", 
		"FRIEND", "INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", 
		"TYPENAME", "USING", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", 
		"UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "OPEN_SQUARE", "PERCENT", 
		"PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "SLASH", "STAR", "TILDE", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "MultiLineMacro", 
		"Directive", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SatisfactoryHeaderParser._LITERAL_NAMES, SatisfactoryHeaderParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SatisfactoryHeaderParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SatisfactoryHeaderParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SatisfactoryHeaderParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SatisfactoryHeaderParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SatisfactoryHeaderParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SatisfactoryHeaderParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.NAMESPACE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.USING) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UENUM) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (SatisfactoryHeaderParser.SEMICOLON - 56)) | (1 << (SatisfactoryHeaderParser.TILDE - 56)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 56)))) !== 0)) {
				{
				{
				this.state = 156;
				this.element();
				}
				}
				this.state = 161;
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
		this.enterRule(_localctx, 2, SatisfactoryHeaderParser.RULE_element);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 162;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 163;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 164;
				this.namespaceDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 165;
				this.staticMethodCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 166;
				this.staticFunctionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 167;
				this.staticArrayDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 168;
				this.staticInlineFunctionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 169;
				this.staticPropertyDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 170;
				this.typedef();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 171;
				this.usingNamespace();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 172;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 4, SatisfactoryHeaderParser.RULE_value);
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 175;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 176;
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
		this.enterRule(_localctx, 6, SatisfactoryHeaderParser.RULE_literal);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 181;
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
		this.enterRule(_localctx, 8, SatisfactoryHeaderParser.RULE_identifier);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(SatisfactoryHeaderParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.match(SatisfactoryHeaderParser.IDENTIFIER);
				this.state = 186;
				this.match(SatisfactoryHeaderParser.COLON);
				this.state = 187;
				this.match(SatisfactoryHeaderParser.COLON);
				this.state = 188;
				this.match(SatisfactoryHeaderParser.IDENTIFIER);
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
		this.enterRule(_localctx, 10, SatisfactoryHeaderParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(SatisfactoryHeaderParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, SatisfactoryHeaderParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParser.FLOAT_LITERAL || _la === SatisfactoryHeaderParser.INTEGER_LITERAL)) {
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
		this.enterRule(_localctx, 14, SatisfactoryHeaderParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParser.FALSE || _la === SatisfactoryHeaderParser.TRUE)) {
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
		this.enterRule(_localctx, 16, SatisfactoryHeaderParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 197;
				this.typeModifier();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this.identifier();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.OPEN_ANGLE) {
				{
				this.state = 204;
				this.templateType();
				}
			}

			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.AMPERSAND || _la === SatisfactoryHeaderParser.STAR) {
				{
				this.state = 207;
				this.typeReferenceType();
				}
			}

			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.CONSTEXPR) {
				{
				this.state = 210;
				this.match(SatisfactoryHeaderParser.CONSTEXPR);
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
		this.enterRule(_localctx, 18, SatisfactoryHeaderParser.RULE_templateType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
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
	public typeModifier(): TypeModifierContext {
		let _localctx: TypeModifierContext = new TypeModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SatisfactoryHeaderParser.RULE_typeModifier);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.match(SatisfactoryHeaderParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.match(SatisfactoryHeaderParser.CONST);
				}
				break;
			case SatisfactoryHeaderParser.CONSTEXPR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 217;
				this.match(SatisfactoryHeaderParser.CONSTEXPR);
				}
				break;
			case SatisfactoryHeaderParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 218;
				this.match(SatisfactoryHeaderParser.ENUM);
				}
				break;
			case SatisfactoryHeaderParser.STRUCT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 219;
				this.match(SatisfactoryHeaderParser.STRUCT);
				}
				break;
			case SatisfactoryHeaderParser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 220;
				this.match(SatisfactoryHeaderParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParser.MUTABLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 221;
				this.match(SatisfactoryHeaderParser.MUTABLE);
				}
				break;
			case SatisfactoryHeaderParser.UPARAM:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 222;
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
		this.enterRule(_localctx, 22, SatisfactoryHeaderParser.RULE_typeReferenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParser.AMPERSAND || _la === SatisfactoryHeaderParser.STAR)) {
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
		this.enterRule(_localctx, 24, SatisfactoryHeaderParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.classHeader();
			this.state = 228;
			this.match(SatisfactoryHeaderParser.OPEN_BRACE);
			this.state = 229;
			this.classBody();
			this.state = 230;
			this.match(SatisfactoryHeaderParser.CLOSE_BRACE);
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 231;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 26, SatisfactoryHeaderParser.RULE_classHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0)) {
				{
				this.state = 234;
				this.classMacro();
				}
			}

			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.TEMPLATE) {
				{
				this.state = 237;
				this.templateDeclaration();
				}
			}

			this.state = 240;
			this.classKeyword();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.SF_CLASS_TAG) {
				{
				this.state = 241;
				this.match(SatisfactoryHeaderParser.SF_CLASS_TAG);
				}
			}

			this.state = 244;
			this.identifier();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.OPEN_ANGLE) {
				{
				this.state = 245;
				this.contentWithNestedAngles();
				}
			}

			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COLON) {
				{
				this.state = 248;
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
		this.enterRule(_localctx, 28, SatisfactoryHeaderParser.RULE_classMacro);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.uclassMacro();
				}
				break;
			case SatisfactoryHeaderParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.uinterfaceMacro();
				}
				break;
			case SatisfactoryHeaderParser.USTRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 253;
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
		this.enterRule(_localctx, 30, SatisfactoryHeaderParser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(SatisfactoryHeaderParser.TEMPLATE);
			this.state = 257;
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
		this.enterRule(_localctx, 32, SatisfactoryHeaderParser.RULE_classKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParser.CLASS || _la === SatisfactoryHeaderParser.STRUCT)) {
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
		this.enterRule(_localctx, 34, SatisfactoryHeaderParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(SatisfactoryHeaderParser.COLON);
			this.state = 262;
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
		this.enterRule(_localctx, 36, SatisfactoryHeaderParser.RULE_classExtensionList);
		try {
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 264;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 265;
				this.classExtension();
				this.state = 266;
				this.match(SatisfactoryHeaderParser.COMMA);
				this.state = 267;
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
		this.enterRule(_localctx, 38, SatisfactoryHeaderParser.RULE_classExtension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC))) !== 0)) {
				{
				this.state = 271;
				this.classVisibilityModifier();
				}
			}

			this.state = 274;
			this.identifier();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.OPEN_ANGLE) {
				{
				this.state = 275;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 278;
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
		this.enterRule(_localctx, 42, SatisfactoryHeaderParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.classEntry();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 282;
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
		this.enterRule(_localctx, 44, SatisfactoryHeaderParser.RULE_classEntry);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 287;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 288;
				this.classProperty();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 289;
				this.statDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 290;
				this.nestedEnum();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 291;
				this.nestedEnumClass();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 292;
				this.nestedClass();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 293;
				this.nestedStruct();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 294;
				this.typedef();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 295;
				this.generatedBodyMacro();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 296;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 46, SatisfactoryHeaderParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.classVisibilityModifier();
			this.state = 300;
			this.match(SatisfactoryHeaderParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 48, SatisfactoryHeaderParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC))) !== 0))) {
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
		this.enterRule(_localctx, 50, SatisfactoryHeaderParser.RULE_friendDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(SatisfactoryHeaderParser.FRIEND);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.CLASS || _la === SatisfactoryHeaderParser.STRUCT) {
				{
				this.state = 305;
				this.classKeyword();
				}
			}

			this.state = 308;
			this.identifier();
			this.state = 309;
			this.match(SatisfactoryHeaderParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 52, SatisfactoryHeaderParser.RULE_statDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(SatisfactoryHeaderParser.STAT);
			this.state = 312;
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParser.RULE_classMethod);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.UE_DEPRECATED) {
				{
				this.state = 314;
				this.uedeprecatedMacro();
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 317;
				this.ufunctionMacro();
				}
				break;
			}
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 320;
					this.functionModifier();
					}
					}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 326;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 329;
			this.functionName();
			this.state = 330;
			this.contentWithNestedParens();
			this.state = 334;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 331;
					this.classMethodResultModifier();
					}
					}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 337;
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
		this.enterRule(_localctx, 56, SatisfactoryHeaderParser.RULE_classMethodEnd);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
			case SatisfactoryHeaderParser.CONST:
			case SatisfactoryHeaderParser.CONSTEXPR:
			case SatisfactoryHeaderParser.ENUM:
			case SatisfactoryHeaderParser.FORCEINLINE:
			case SatisfactoryHeaderParser.FRIEND:
			case SatisfactoryHeaderParser.INLINE:
			case SatisfactoryHeaderParser.MUTABLE:
			case SatisfactoryHeaderParser.OPERATOR:
			case SatisfactoryHeaderParser.PRIVATE:
			case SatisfactoryHeaderParser.PROTECTED:
			case SatisfactoryHeaderParser.PUBLIC:
			case SatisfactoryHeaderParser.STATIC:
			case SatisfactoryHeaderParser.STRUCT:
			case SatisfactoryHeaderParser.TEMPLATE:
			case SatisfactoryHeaderParser.TYPEDEF:
			case SatisfactoryHeaderParser.VIRTUAL:
			case SatisfactoryHeaderParser.UFUNCTION:
			case SatisfactoryHeaderParser.UPARAM:
			case SatisfactoryHeaderParser.UPROPERTY:
			case SatisfactoryHeaderParser.UE_DEPRECATED:
			case SatisfactoryHeaderParser.STAT:
			case SatisfactoryHeaderParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParser.CLOSE_BRACE:
			case SatisfactoryHeaderParser.SEMICOLON:
			case SatisfactoryHeaderParser.TILDE:
			case SatisfactoryHeaderParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 339;
					this.match(SatisfactoryHeaderParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.contentWithNestedBraces();
				this.state = 344;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 343;
					this.match(SatisfactoryHeaderParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParser.COLON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
				this.match(SatisfactoryHeaderParser.COLON);
				this.state = 347;
				this.classInitializerList();
				this.state = 348;
				this.contentWithNestedBraces();
				this.state = 350;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 349;
					this.match(SatisfactoryHeaderParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParser.EQUALS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 352;
				this.match(SatisfactoryHeaderParser.EQUALS);
				this.state = 353;
				this.numericLiteral();
				this.state = 354;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			_la = this._input.LA(1);
			if (!(_la === SatisfactoryHeaderParser.CONST || _la === SatisfactoryHeaderParser.OVERRIDE)) {
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
		this.enterRule(_localctx, 60, SatisfactoryHeaderParser.RULE_classInitializerList);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 360;
				this.classInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 361;
				this.classInitializer();
				this.state = 362;
				this.match(SatisfactoryHeaderParser.COMMA);
				this.state = 363;
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
		this.enterRule(_localctx, 62, SatisfactoryHeaderParser.RULE_classInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.identifier();
			this.state = 368;
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
		this.enterRule(_localctx, 64, SatisfactoryHeaderParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.UPROPERTY) {
				{
				this.state = 370;
				this.upropertyMacro();
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 373;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 376;
			this.identifier();
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.OPEN_SQUARE) {
				{
				this.state = 377;
				this.contentWithNestedSquares();
				}
			}

			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COLON || _la === SatisfactoryHeaderParser.EQUALS) {
				{
				this.state = 380;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 383;
			this.match(SatisfactoryHeaderParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 66, SatisfactoryHeaderParser.RULE_classPropertyDefaultValue);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.match(SatisfactoryHeaderParser.COLON);
				this.state = 386;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.match(SatisfactoryHeaderParser.EQUALS);
				this.state = 388;
				this.literalExpression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.match(SatisfactoryHeaderParser.EQUALS);
				this.state = 390;
				this.identifier();
				this.state = 391;
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

	public literalExpression(): LiteralExpressionContext;
	public literalExpression(_p: number): LiteralExpressionContext;
	// @RuleVersion(0)
	public literalExpression(_p?: number): LiteralExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LiteralExpressionContext = new LiteralExpressionContext(this._ctx, _parentState);
		let _prevctx: LiteralExpressionContext = _localctx;
		let _startState: number = 68;
		this.enterRecursionRule(_localctx, 68, SatisfactoryHeaderParser.RULE_literalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
				{
				this.state = 396;
				this.literal();
				}
				break;
			case SatisfactoryHeaderParser.IDENTIFIER:
				{
				this.state = 397;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 414;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 412;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParser.RULE_literalExpression);
						this.state = 400;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 401;
						this.match(SatisfactoryHeaderParser.PLUS);
						this.state = 402;
						this.literalExpression(5);
						}
						break;

					case 2:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParser.RULE_literalExpression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 404;
						this.match(SatisfactoryHeaderParser.MINUS);
						this.state = 405;
						this.literalExpression(4);
						}
						break;

					case 3:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParser.RULE_literalExpression);
						this.state = 406;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 407;
						this.match(SatisfactoryHeaderParser.STAR);
						this.state = 408;
						this.literalExpression(3);
						}
						break;

					case 4:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParser.RULE_literalExpression);
						this.state = 409;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 410;
						this.match(SatisfactoryHeaderParser.BACKSLASH);
						this.state = 411;
						this.literalExpression(2);
						}
						break;
					}
					}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classPropertyArraySize(): ClassPropertyArraySizeContext {
		let _localctx: ClassPropertyArraySizeContext = new ClassPropertyArraySizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SatisfactoryHeaderParser.RULE_classPropertyArraySize);
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
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
	public nestedEnum(): NestedEnumContext {
		let _localctx: NestedEnumContext = new NestedEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SatisfactoryHeaderParser.RULE_nestedEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(SatisfactoryHeaderParser.ENUM);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.IDENTIFIER) {
				{
				this.state = 422;
				this.identifier();
				}
			}

			this.state = 425;
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
	public nestedEnumInheritance(): NestedEnumInheritanceContext {
		let _localctx: NestedEnumInheritanceContext = new NestedEnumInheritanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SatisfactoryHeaderParser.RULE_nestedEnumInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.match(SatisfactoryHeaderParser.COLON);
			this.state = 428;
			this.match(SatisfactoryHeaderParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedEnumClass(): NestedEnumClassContext {
		let _localctx: NestedEnumClassContext = new NestedEnumClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SatisfactoryHeaderParser.RULE_nestedEnumClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(SatisfactoryHeaderParser.ENUM);
			this.state = 431;
			this.match(SatisfactoryHeaderParser.CLASS);
			this.state = 432;
			this.identifier();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COLON) {
				{
				this.state = 433;
				this.nestedEnumInheritance();
				}
			}

			this.state = 436;
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
	public nestedClass(): NestedClassContext {
		let _localctx: NestedClassContext = new NestedClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SatisfactoryHeaderParser.RULE_nestedClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(SatisfactoryHeaderParser.CLASS);
			this.state = 439;
			this.identifier();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COLON) {
				{
				this.state = 440;
				this.classInheritance();
				}
			}

			this.state = 443;
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
	public nestedStruct(): NestedStructContext {
		let _localctx: NestedStructContext = new NestedStructContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SatisfactoryHeaderParser.RULE_nestedStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(SatisfactoryHeaderParser.STRUCT);
			this.state = 446;
			this.identifier();
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COLON) {
				{
				this.state = 447;
				this.classInheritance();
				}
			}

			this.state = 450;
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
		this.enterRule(_localctx, 82, SatisfactoryHeaderParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.enumHeader();
			this.state = 453;
			this.match(SatisfactoryHeaderParser.OPEN_BRACE);
			this.state = 454;
			this.enumBody();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.COMMA) {
				{
				this.state = 455;
				this.match(SatisfactoryHeaderParser.COMMA);
				}
			}

			this.state = 458;
			this.match(SatisfactoryHeaderParser.CLOSE_BRACE);
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 459;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 84, SatisfactoryHeaderParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.UENUM) {
					{
					this.state = 462;
					this.uenumMacro();
					}
				}

				this.state = 465;
				this.match(SatisfactoryHeaderParser.ENUM);
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.CLASS) {
					{
					this.state = 466;
					this.match(SatisfactoryHeaderParser.CLASS);
					}
				}

				this.state = 469;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.UENUM) {
					{
					this.state = 470;
					this.uenumMacro();
					}
				}

				this.state = 473;
				this.match(SatisfactoryHeaderParser.ENUM);
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.CLASS) {
					{
					this.state = 474;
					this.match(SatisfactoryHeaderParser.CLASS);
					}
				}

				this.state = 477;
				this.identifier();
				this.state = 478;
				this.match(SatisfactoryHeaderParser.COLON);
				this.state = 479;
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
		this.enterRule(_localctx, 86, SatisfactoryHeaderParser.RULE_enumBody);
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 484;
				this.enumEntry();
				this.state = 485;
				this.match(SatisfactoryHeaderParser.COMMA);
				this.state = 486;
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
		this.enterRule(_localctx, 88, SatisfactoryHeaderParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.identifier();
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.EQUALS) {
				{
				this.state = 491;
				this.enumValue();
				}
			}

			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.UMETA) {
				{
				this.state = 494;
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
		this.enterRule(_localctx, 90, SatisfactoryHeaderParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(SatisfactoryHeaderParser.EQUALS);
			this.state = 498;
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
		this.enterRule(_localctx, 92, SatisfactoryHeaderParser.RULE_staticFunctionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 500;
					this.functionModifier();
					}
					}
				}
				this.state = 505;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 506;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 509;
			this.functionName();
			this.state = 510;
			this.contentWithNestedParens();
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 511;
				this.match(SatisfactoryHeaderParser.CONST);
				}
				break;
			}
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.OPEN_BRACE) {
				{
				this.state = 514;
				this.contentWithNestedBraces();
				}
			}

			this.state = 518;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 517;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
	public staticArrayDeclaration(): StaticArrayDeclarationContext {
		let _localctx: StaticArrayDeclarationContext = new StaticArrayDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SatisfactoryHeaderParser.RULE_staticArrayDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 520;
					this.functionModifier();
					}
					}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 526;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 529;
			this.functionName();
			this.state = 530;
			this.match(SatisfactoryHeaderParser.EQUALS);
			this.state = 531;
			this.contentWithNestedBraces();
			this.state = 532;
			this.match(SatisfactoryHeaderParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 96, SatisfactoryHeaderParser.RULE_staticPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(SatisfactoryHeaderParser.STATIC);
			this.state = 535;
			this.typeDeclaration();
			this.state = 536;
			this.identifier();
			this.state = 537;
			this.match(SatisfactoryHeaderParser.EQUALS);
			this.state = 538;
			this.literal();
			this.state = 539;
			this.match(SatisfactoryHeaderParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public staticInlineFunctionDeclaration(): StaticInlineFunctionDeclarationContext {
		let _localctx: StaticInlineFunctionDeclarationContext = new StaticInlineFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SatisfactoryHeaderParser.RULE_staticInlineFunctionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(SatisfactoryHeaderParser.FORCEINLINE);
			this.state = 542;
			this.typeDeclaration();
			this.state = 543;
			this.identifier();
			this.state = 544;
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
	public staticMethodCall(): StaticMethodCallContext {
		let _localctx: StaticMethodCallContext = new StaticMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SatisfactoryHeaderParser.RULE_staticMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.identifier();
			this.state = 547;
			this.contentWithNestedParens();
			this.state = 548;
			this.match(SatisfactoryHeaderParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 102, SatisfactoryHeaderParser.RULE_typedef);
		let _la: number;
		try {
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				this.match(SatisfactoryHeaderParser.TYPEDEF);
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.TYPENAME) {
					{
					this.state = 551;
					this.match(SatisfactoryHeaderParser.TYPENAME);
					}
				}

				this.state = 554;
				this.typeDeclaration();
				this.state = 555;
				this.identifier();
				this.state = 556;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 558;
				this.match(SatisfactoryHeaderParser.CLASS);
				this.state = 559;
				this.identifier();
				this.state = 560;
				this.match(SatisfactoryHeaderParser.SEMICOLON);
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
		this.enterRule(_localctx, 104, SatisfactoryHeaderParser.RULE_contentWithNestedParens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(SatisfactoryHeaderParser.OPEN_PAREN);
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FALSE) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.NAMESPACE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.OVERRIDE) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TRUE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.TYPENAME) | (1 << SatisfactoryHeaderParser.USING) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UENUM) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.UMETA) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParser.BANG - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.COLON - 32)) | (1 << (SatisfactoryHeaderParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParser.STAR - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParser.MultiLineMacro - 64)) | (1 << (SatisfactoryHeaderParser.Directive - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 565;
				this.contentWithNestedParensInner();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this.match(SatisfactoryHeaderParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 106, SatisfactoryHeaderParser.RULE_contentWithNestedParensInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
			case SatisfactoryHeaderParser.CONST:
			case SatisfactoryHeaderParser.CONSTEXPR:
			case SatisfactoryHeaderParser.ENUM:
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.FORCEINLINE:
			case SatisfactoryHeaderParser.FRIEND:
			case SatisfactoryHeaderParser.INLINE:
			case SatisfactoryHeaderParser.MUTABLE:
			case SatisfactoryHeaderParser.NAMESPACE:
			case SatisfactoryHeaderParser.OPERATOR:
			case SatisfactoryHeaderParser.OVERRIDE:
			case SatisfactoryHeaderParser.PRIVATE:
			case SatisfactoryHeaderParser.PROTECTED:
			case SatisfactoryHeaderParser.PUBLIC:
			case SatisfactoryHeaderParser.STATIC:
			case SatisfactoryHeaderParser.STRUCT:
			case SatisfactoryHeaderParser.TEMPLATE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.TYPEDEF:
			case SatisfactoryHeaderParser.TYPENAME:
			case SatisfactoryHeaderParser.USING:
			case SatisfactoryHeaderParser.VIRTUAL:
			case SatisfactoryHeaderParser.UCLASS:
			case SatisfactoryHeaderParser.UENUM:
			case SatisfactoryHeaderParser.UFUNCTION:
			case SatisfactoryHeaderParser.UINTERFACE:
			case SatisfactoryHeaderParser.UMETA:
			case SatisfactoryHeaderParser.UPARAM:
			case SatisfactoryHeaderParser.UPROPERTY:
			case SatisfactoryHeaderParser.USTRUCT:
			case SatisfactoryHeaderParser.UE_DEPRECATED:
			case SatisfactoryHeaderParser.STAT:
			case SatisfactoryHeaderParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParser.AMPERSAND:
			case SatisfactoryHeaderParser.BACKSLASH:
			case SatisfactoryHeaderParser.BANG:
			case SatisfactoryHeaderParser.CLOSE_ANGLE:
			case SatisfactoryHeaderParser.CLOSE_BRACE:
			case SatisfactoryHeaderParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParser.COLON:
			case SatisfactoryHeaderParser.COMMA:
			case SatisfactoryHeaderParser.EQUALS:
			case SatisfactoryHeaderParser.MINUS:
			case SatisfactoryHeaderParser.OPEN_ANGLE:
			case SatisfactoryHeaderParser.OPEN_BRACE:
			case SatisfactoryHeaderParser.OPEN_SQUARE:
			case SatisfactoryHeaderParser.PERCENT:
			case SatisfactoryHeaderParser.PERIOD:
			case SatisfactoryHeaderParser.PIPE:
			case SatisfactoryHeaderParser.PLUS:
			case SatisfactoryHeaderParser.QUESTION:
			case SatisfactoryHeaderParser.SEMICOLON:
			case SatisfactoryHeaderParser.SLASH:
			case SatisfactoryHeaderParser.STAR:
			case SatisfactoryHeaderParser.TILDE:
			case SatisfactoryHeaderParser.IDENTIFIER:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParser.MultiLineMacro:
			case SatisfactoryHeaderParser.Directive:
			case SatisfactoryHeaderParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParser.WHITESPACE:
			case SatisfactoryHeaderParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 574;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 573;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParser.CLOSE_PAREN || _la === SatisfactoryHeaderParser.OPEN_PAREN)) {
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
					this.state = 576;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 578;
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
		this.enterRule(_localctx, 108, SatisfactoryHeaderParser.RULE_contentWithNestedBraces);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.match(SatisfactoryHeaderParser.OPEN_BRACE);
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FALSE) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.NAMESPACE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.OVERRIDE) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TRUE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.TYPENAME) | (1 << SatisfactoryHeaderParser.USING) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UENUM) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.UMETA) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParser.BANG - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.COLON - 32)) | (1 << (SatisfactoryHeaderParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParser.STAR - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParser.MultiLineMacro - 64)) | (1 << (SatisfactoryHeaderParser.Directive - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 582;
				this.contentWithNestedBracesInner();
				}
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 588;
			this.match(SatisfactoryHeaderParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 110, SatisfactoryHeaderParser.RULE_contentWithNestedBracesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
			case SatisfactoryHeaderParser.CONST:
			case SatisfactoryHeaderParser.CONSTEXPR:
			case SatisfactoryHeaderParser.ENUM:
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.FORCEINLINE:
			case SatisfactoryHeaderParser.FRIEND:
			case SatisfactoryHeaderParser.INLINE:
			case SatisfactoryHeaderParser.MUTABLE:
			case SatisfactoryHeaderParser.NAMESPACE:
			case SatisfactoryHeaderParser.OPERATOR:
			case SatisfactoryHeaderParser.OVERRIDE:
			case SatisfactoryHeaderParser.PRIVATE:
			case SatisfactoryHeaderParser.PROTECTED:
			case SatisfactoryHeaderParser.PUBLIC:
			case SatisfactoryHeaderParser.STATIC:
			case SatisfactoryHeaderParser.STRUCT:
			case SatisfactoryHeaderParser.TEMPLATE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.TYPEDEF:
			case SatisfactoryHeaderParser.TYPENAME:
			case SatisfactoryHeaderParser.USING:
			case SatisfactoryHeaderParser.VIRTUAL:
			case SatisfactoryHeaderParser.UCLASS:
			case SatisfactoryHeaderParser.UENUM:
			case SatisfactoryHeaderParser.UFUNCTION:
			case SatisfactoryHeaderParser.UINTERFACE:
			case SatisfactoryHeaderParser.UMETA:
			case SatisfactoryHeaderParser.UPARAM:
			case SatisfactoryHeaderParser.UPROPERTY:
			case SatisfactoryHeaderParser.USTRUCT:
			case SatisfactoryHeaderParser.UE_DEPRECATED:
			case SatisfactoryHeaderParser.STAT:
			case SatisfactoryHeaderParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParser.AMPERSAND:
			case SatisfactoryHeaderParser.BACKSLASH:
			case SatisfactoryHeaderParser.BANG:
			case SatisfactoryHeaderParser.CLOSE_ANGLE:
			case SatisfactoryHeaderParser.CLOSE_PAREN:
			case SatisfactoryHeaderParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParser.COLON:
			case SatisfactoryHeaderParser.COMMA:
			case SatisfactoryHeaderParser.EQUALS:
			case SatisfactoryHeaderParser.MINUS:
			case SatisfactoryHeaderParser.OPEN_ANGLE:
			case SatisfactoryHeaderParser.OPEN_PAREN:
			case SatisfactoryHeaderParser.OPEN_SQUARE:
			case SatisfactoryHeaderParser.PERCENT:
			case SatisfactoryHeaderParser.PERIOD:
			case SatisfactoryHeaderParser.PIPE:
			case SatisfactoryHeaderParser.PLUS:
			case SatisfactoryHeaderParser.QUESTION:
			case SatisfactoryHeaderParser.SEMICOLON:
			case SatisfactoryHeaderParser.SLASH:
			case SatisfactoryHeaderParser.STAR:
			case SatisfactoryHeaderParser.TILDE:
			case SatisfactoryHeaderParser.IDENTIFIER:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParser.MultiLineMacro:
			case SatisfactoryHeaderParser.Directive:
			case SatisfactoryHeaderParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParser.WHITESPACE:
			case SatisfactoryHeaderParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 591;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 590;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParser.CLOSE_BRACE || _la === SatisfactoryHeaderParser.OPEN_BRACE)) {
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
					this.state = 593;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
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
		this.enterRule(_localctx, 112, SatisfactoryHeaderParser.RULE_contentWithNestedAngles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(SatisfactoryHeaderParser.OPEN_ANGLE);
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FALSE) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.NAMESPACE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.OVERRIDE) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TRUE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.TYPENAME) | (1 << SatisfactoryHeaderParser.USING) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UENUM) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.UMETA) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParser.BANG - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.COLON - 32)) | (1 << (SatisfactoryHeaderParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParser.STAR - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParser.MultiLineMacro - 64)) | (1 << (SatisfactoryHeaderParser.Directive - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 599;
				this.contentWithNestedAnglesInner();
				}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 605;
			this.match(SatisfactoryHeaderParser.CLOSE_ANGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 114, SatisfactoryHeaderParser.RULE_contentWithNestedAnglesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
			case SatisfactoryHeaderParser.CONST:
			case SatisfactoryHeaderParser.CONSTEXPR:
			case SatisfactoryHeaderParser.ENUM:
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.FORCEINLINE:
			case SatisfactoryHeaderParser.FRIEND:
			case SatisfactoryHeaderParser.INLINE:
			case SatisfactoryHeaderParser.MUTABLE:
			case SatisfactoryHeaderParser.NAMESPACE:
			case SatisfactoryHeaderParser.OPERATOR:
			case SatisfactoryHeaderParser.OVERRIDE:
			case SatisfactoryHeaderParser.PRIVATE:
			case SatisfactoryHeaderParser.PROTECTED:
			case SatisfactoryHeaderParser.PUBLIC:
			case SatisfactoryHeaderParser.STATIC:
			case SatisfactoryHeaderParser.STRUCT:
			case SatisfactoryHeaderParser.TEMPLATE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.TYPEDEF:
			case SatisfactoryHeaderParser.TYPENAME:
			case SatisfactoryHeaderParser.USING:
			case SatisfactoryHeaderParser.VIRTUAL:
			case SatisfactoryHeaderParser.UCLASS:
			case SatisfactoryHeaderParser.UENUM:
			case SatisfactoryHeaderParser.UFUNCTION:
			case SatisfactoryHeaderParser.UINTERFACE:
			case SatisfactoryHeaderParser.UMETA:
			case SatisfactoryHeaderParser.UPARAM:
			case SatisfactoryHeaderParser.UPROPERTY:
			case SatisfactoryHeaderParser.USTRUCT:
			case SatisfactoryHeaderParser.UE_DEPRECATED:
			case SatisfactoryHeaderParser.STAT:
			case SatisfactoryHeaderParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParser.AMPERSAND:
			case SatisfactoryHeaderParser.BACKSLASH:
			case SatisfactoryHeaderParser.BANG:
			case SatisfactoryHeaderParser.CLOSE_BRACE:
			case SatisfactoryHeaderParser.CLOSE_PAREN:
			case SatisfactoryHeaderParser.CLOSE_SQUARE:
			case SatisfactoryHeaderParser.COLON:
			case SatisfactoryHeaderParser.COMMA:
			case SatisfactoryHeaderParser.EQUALS:
			case SatisfactoryHeaderParser.MINUS:
			case SatisfactoryHeaderParser.OPEN_BRACE:
			case SatisfactoryHeaderParser.OPEN_PAREN:
			case SatisfactoryHeaderParser.OPEN_SQUARE:
			case SatisfactoryHeaderParser.PERCENT:
			case SatisfactoryHeaderParser.PERIOD:
			case SatisfactoryHeaderParser.PIPE:
			case SatisfactoryHeaderParser.PLUS:
			case SatisfactoryHeaderParser.QUESTION:
			case SatisfactoryHeaderParser.SEMICOLON:
			case SatisfactoryHeaderParser.SLASH:
			case SatisfactoryHeaderParser.STAR:
			case SatisfactoryHeaderParser.TILDE:
			case SatisfactoryHeaderParser.IDENTIFIER:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParser.MultiLineMacro:
			case SatisfactoryHeaderParser.Directive:
			case SatisfactoryHeaderParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParser.WHITESPACE:
			case SatisfactoryHeaderParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 608;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 607;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParser.CLOSE_ANGLE || _la === SatisfactoryHeaderParser.OPEN_ANGLE)) {
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
					this.state = 610;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParser.OPEN_ANGLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 612;
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
	public contentWithNestedSquares(): ContentWithNestedSquaresContext {
		let _localctx: ContentWithNestedSquaresContext = new ContentWithNestedSquaresContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SatisfactoryHeaderParser.RULE_contentWithNestedSquares);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.match(SatisfactoryHeaderParser.OPEN_SQUARE);
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParser.CLASS) | (1 << SatisfactoryHeaderParser.CONST) | (1 << SatisfactoryHeaderParser.CONSTEXPR) | (1 << SatisfactoryHeaderParser.ENUM) | (1 << SatisfactoryHeaderParser.FALSE) | (1 << SatisfactoryHeaderParser.FORCEINLINE) | (1 << SatisfactoryHeaderParser.FRIEND) | (1 << SatisfactoryHeaderParser.INLINE) | (1 << SatisfactoryHeaderParser.MUTABLE) | (1 << SatisfactoryHeaderParser.NAMESPACE) | (1 << SatisfactoryHeaderParser.OPERATOR) | (1 << SatisfactoryHeaderParser.OVERRIDE) | (1 << SatisfactoryHeaderParser.PRIVATE) | (1 << SatisfactoryHeaderParser.PROTECTED) | (1 << SatisfactoryHeaderParser.PUBLIC) | (1 << SatisfactoryHeaderParser.STATIC) | (1 << SatisfactoryHeaderParser.STRUCT) | (1 << SatisfactoryHeaderParser.TEMPLATE) | (1 << SatisfactoryHeaderParser.TRUE) | (1 << SatisfactoryHeaderParser.TYPEDEF) | (1 << SatisfactoryHeaderParser.TYPENAME) | (1 << SatisfactoryHeaderParser.USING) | (1 << SatisfactoryHeaderParser.VIRTUAL) | (1 << SatisfactoryHeaderParser.UCLASS) | (1 << SatisfactoryHeaderParser.UENUM) | (1 << SatisfactoryHeaderParser.UFUNCTION) | (1 << SatisfactoryHeaderParser.UINTERFACE) | (1 << SatisfactoryHeaderParser.UMETA) | (1 << SatisfactoryHeaderParser.UPARAM) | (1 << SatisfactoryHeaderParser.UPROPERTY) | (1 << SatisfactoryHeaderParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParser.STAT - 32)) | (1 << (SatisfactoryHeaderParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParser.BANG - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.COLON - 32)) | (1 << (SatisfactoryHeaderParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParser.STAR - 32)) | (1 << (SatisfactoryHeaderParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParser.MultiLineMacro - 64)) | (1 << (SatisfactoryHeaderParser.Directive - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 616;
				this.contentWithNestedSquaresInner();
				}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 622;
			this.match(SatisfactoryHeaderParser.CLOSE_SQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contentWithNestedSquaresInner(): ContentWithNestedSquaresInnerContext {
		let _localctx: ContentWithNestedSquaresInnerContext = new ContentWithNestedSquaresInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SatisfactoryHeaderParser.RULE_contentWithNestedSquaresInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.CLASS:
			case SatisfactoryHeaderParser.CONST:
			case SatisfactoryHeaderParser.CONSTEXPR:
			case SatisfactoryHeaderParser.ENUM:
			case SatisfactoryHeaderParser.FALSE:
			case SatisfactoryHeaderParser.FORCEINLINE:
			case SatisfactoryHeaderParser.FRIEND:
			case SatisfactoryHeaderParser.INLINE:
			case SatisfactoryHeaderParser.MUTABLE:
			case SatisfactoryHeaderParser.NAMESPACE:
			case SatisfactoryHeaderParser.OPERATOR:
			case SatisfactoryHeaderParser.OVERRIDE:
			case SatisfactoryHeaderParser.PRIVATE:
			case SatisfactoryHeaderParser.PROTECTED:
			case SatisfactoryHeaderParser.PUBLIC:
			case SatisfactoryHeaderParser.STATIC:
			case SatisfactoryHeaderParser.STRUCT:
			case SatisfactoryHeaderParser.TEMPLATE:
			case SatisfactoryHeaderParser.TRUE:
			case SatisfactoryHeaderParser.TYPEDEF:
			case SatisfactoryHeaderParser.TYPENAME:
			case SatisfactoryHeaderParser.USING:
			case SatisfactoryHeaderParser.VIRTUAL:
			case SatisfactoryHeaderParser.UCLASS:
			case SatisfactoryHeaderParser.UENUM:
			case SatisfactoryHeaderParser.UFUNCTION:
			case SatisfactoryHeaderParser.UINTERFACE:
			case SatisfactoryHeaderParser.UMETA:
			case SatisfactoryHeaderParser.UPARAM:
			case SatisfactoryHeaderParser.UPROPERTY:
			case SatisfactoryHeaderParser.USTRUCT:
			case SatisfactoryHeaderParser.UE_DEPRECATED:
			case SatisfactoryHeaderParser.STAT:
			case SatisfactoryHeaderParser.SF_CLASS_TAG:
			case SatisfactoryHeaderParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParser.AMPERSAND:
			case SatisfactoryHeaderParser.BACKSLASH:
			case SatisfactoryHeaderParser.BANG:
			case SatisfactoryHeaderParser.CLOSE_ANGLE:
			case SatisfactoryHeaderParser.CLOSE_BRACE:
			case SatisfactoryHeaderParser.CLOSE_PAREN:
			case SatisfactoryHeaderParser.COLON:
			case SatisfactoryHeaderParser.COMMA:
			case SatisfactoryHeaderParser.EQUALS:
			case SatisfactoryHeaderParser.MINUS:
			case SatisfactoryHeaderParser.OPEN_ANGLE:
			case SatisfactoryHeaderParser.OPEN_BRACE:
			case SatisfactoryHeaderParser.OPEN_PAREN:
			case SatisfactoryHeaderParser.PERCENT:
			case SatisfactoryHeaderParser.PERIOD:
			case SatisfactoryHeaderParser.PIPE:
			case SatisfactoryHeaderParser.PLUS:
			case SatisfactoryHeaderParser.QUESTION:
			case SatisfactoryHeaderParser.SEMICOLON:
			case SatisfactoryHeaderParser.SLASH:
			case SatisfactoryHeaderParser.STAR:
			case SatisfactoryHeaderParser.TILDE:
			case SatisfactoryHeaderParser.IDENTIFIER:
			case SatisfactoryHeaderParser.STRING_LITERAL:
			case SatisfactoryHeaderParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParser.INTEGER_LITERAL:
			case SatisfactoryHeaderParser.MultiLineMacro:
			case SatisfactoryHeaderParser.Directive:
			case SatisfactoryHeaderParser.LINE_COMMENT_START:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_START:
			case SatisfactoryHeaderParser.WHITESPACE:
			case SatisfactoryHeaderParser.LINE_COMMENT_END:
			case SatisfactoryHeaderParser.LINE_COMMENT_TEXT:
			case SatisfactoryHeaderParser.LINE_COMMENT_OTHER:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_END:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_NEW_LINE:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_TEXT:
			case SatisfactoryHeaderParser.BLOCK_COMMENT_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 625;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 624;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParser.CLOSE_SQUARE || _la === SatisfactoryHeaderParser.OPEN_SQUARE)) {
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
					this.state = 627;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParser.OPEN_SQUARE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 629;
				this.contentWithNestedSquares();
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
		this.enterRule(_localctx, 120, SatisfactoryHeaderParser.RULE_functionName);
		let _la: number;
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.TILDE) {
					{
					this.state = 632;
					this.match(SatisfactoryHeaderParser.TILDE);
					}
				}

				this.state = 635;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 636;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 637;
				this.match(SatisfactoryHeaderParser.EQUALS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 638;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 639;
				this.match(SatisfactoryHeaderParser.EQUALS);
				this.state = 640;
				this.match(SatisfactoryHeaderParser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 641;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 642;
				this.match(SatisfactoryHeaderParser.BANG);
				this.state = 643;
				this.match(SatisfactoryHeaderParser.EQUALS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 644;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 645;
				this.match(SatisfactoryHeaderParser.PLUS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 646;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 647;
				this.match(SatisfactoryHeaderParser.MINUS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 648;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 649;
				this.match(SatisfactoryHeaderParser.OPEN_SQUARE);
				this.state = 650;
				this.match(SatisfactoryHeaderParser.CLOSE_SQUARE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 651;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 652;
				this.match(SatisfactoryHeaderParser.OPEN_ANGLE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 653;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 654;
				this.match(SatisfactoryHeaderParser.OPEN_ANGLE);
				this.state = 655;
				this.match(SatisfactoryHeaderParser.OPEN_ANGLE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 656;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 657;
				this.match(SatisfactoryHeaderParser.CLOSE_ANGLE);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 658;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 659;
				this.match(SatisfactoryHeaderParser.CLOSE_ANGLE);
				this.state = 660;
				this.match(SatisfactoryHeaderParser.CLOSE_ANGLE);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 661;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 662;
				this.match(SatisfactoryHeaderParser.OPEN_PAREN);
				this.state = 663;
				this.match(SatisfactoryHeaderParser.CLOSE_PAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 664;
				this.match(SatisfactoryHeaderParser.OPERATOR);
				this.state = 665;
				this.match(SatisfactoryHeaderParser.MINUS);
				this.state = 666;
				this.match(SatisfactoryHeaderParser.CLOSE_ANGLE);
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
		this.enterRule(_localctx, 122, SatisfactoryHeaderParser.RULE_functionModifier);
		try {
			this.state = 678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParser.STATIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 669;
				this.match(SatisfactoryHeaderParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 670;
				this.match(SatisfactoryHeaderParser.CONST);
				}
				break;
			case SatisfactoryHeaderParser.CONSTEXPR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 671;
				this.match(SatisfactoryHeaderParser.CONSTEXPR);
				}
				break;
			case SatisfactoryHeaderParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 672;
				this.match(SatisfactoryHeaderParser.VIRTUAL);
				}
				break;
			case SatisfactoryHeaderParser.FORCEINLINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 673;
				this.match(SatisfactoryHeaderParser.FORCEINLINE);
				}
				break;
			case SatisfactoryHeaderParser.INLINE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 674;
				this.match(SatisfactoryHeaderParser.INLINE);
				}
				break;
			case SatisfactoryHeaderParser.FRIEND:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 675;
				this.match(SatisfactoryHeaderParser.FRIEND);
				}
				break;
			case SatisfactoryHeaderParser.TEMPLATE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 676;
				this.match(SatisfactoryHeaderParser.TEMPLATE);
				this.state = 677;
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
	public namespaceDeclaration(): NamespaceDeclarationContext {
		let _localctx: NamespaceDeclarationContext = new NamespaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SatisfactoryHeaderParser.RULE_namespaceDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(SatisfactoryHeaderParser.NAMESPACE);
			this.state = 681;
			this.identifier();
			this.state = 682;
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
	public usingNamespace(): UsingNamespaceContext {
		let _localctx: UsingNamespaceContext = new UsingNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SatisfactoryHeaderParser.RULE_usingNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(SatisfactoryHeaderParser.USING);
			this.state = 685;
			this.identifier();
			this.state = 686;
			this.match(SatisfactoryHeaderParser.EQUALS);
			this.state = 687;
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
	public uclassMacro(): UclassMacroContext {
		let _localctx: UclassMacroContext = new UclassMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SatisfactoryHeaderParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(SatisfactoryHeaderParser.UCLASS);
			this.state = 690;
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
		this.enterRule(_localctx, 130, SatisfactoryHeaderParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(SatisfactoryHeaderParser.UENUM);
			this.state = 693;
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
		this.enterRule(_localctx, 132, SatisfactoryHeaderParser.RULE_ufunctionMacro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.FORCEINLINE) {
				{
				this.state = 695;
				this.match(SatisfactoryHeaderParser.FORCEINLINE);
				}
			}

			this.state = 698;
			this.match(SatisfactoryHeaderParser.UFUNCTION);
			this.state = 699;
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
		this.enterRule(_localctx, 134, SatisfactoryHeaderParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(SatisfactoryHeaderParser.UINTERFACE);
			this.state = 702;
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
		this.enterRule(_localctx, 136, SatisfactoryHeaderParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.match(SatisfactoryHeaderParser.UMETA);
			this.state = 705;
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
		this.enterRule(_localctx, 138, SatisfactoryHeaderParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(SatisfactoryHeaderParser.UPARAM);
			this.state = 708;
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
		this.enterRule(_localctx, 140, SatisfactoryHeaderParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.match(SatisfactoryHeaderParser.UPROPERTY);
			this.state = 711;
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
		this.enterRule(_localctx, 142, SatisfactoryHeaderParser.RULE_ustructMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.match(SatisfactoryHeaderParser.USTRUCT);
			this.state = 714;
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
		this.enterRule(_localctx, 144, SatisfactoryHeaderParser.RULE_uedeprecatedMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(SatisfactoryHeaderParser.UE_DEPRECATED);
			this.state = 717;
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
		this.enterRule(_localctx, 146, SatisfactoryHeaderParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(SatisfactoryHeaderParser.SF_GENERATED_BODY);
			this.state = 720;
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
		this.enterRule(_localctx, 148, SatisfactoryHeaderParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.match(SatisfactoryHeaderParser.OPEN_PAREN);
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParser.FALSE || _la === SatisfactoryHeaderParser.TRUE || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (SatisfactoryHeaderParser.OPEN_PAREN - 49)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 49)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 49)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 49)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 49)))) !== 0)) {
				{
				this.state = 723;
				this.macroPropertyListEntries();
				}
			}

			this.state = 726;
			this.match(SatisfactoryHeaderParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 150, SatisfactoryHeaderParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 728;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.macroProperty();
				this.state = 730;
				this.match(SatisfactoryHeaderParser.COMMA);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParser.FALSE || _la === SatisfactoryHeaderParser.TRUE || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (SatisfactoryHeaderParser.OPEN_PAREN - 49)) | (1 << (SatisfactoryHeaderParser.IDENTIFIER - 49)) | (1 << (SatisfactoryHeaderParser.STRING_LITERAL - 49)) | (1 << (SatisfactoryHeaderParser.FLOAT_LITERAL - 49)) | (1 << (SatisfactoryHeaderParser.INTEGER_LITERAL - 49)))) !== 0)) {
					{
					this.state = 731;
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
		this.enterRule(_localctx, 152, SatisfactoryHeaderParser.RULE_macroProperty);
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 736;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 737;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 738;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 739;
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
		this.enterRule(_localctx, 154, SatisfactoryHeaderParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.identifier();
			this.state = 743;
			this.match(SatisfactoryHeaderParser.EQUALS);
			this.state = 744;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 34:
			return this.literalExpression_sempred(_localctx as LiteralExpressionContext, predIndex);
		}
		return true;
	}
	private literalExpression_sempred(_localctx: LiteralExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u02ED\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x03\x02\x07\x02\xA0\n\x02\f\x02\x0E\x02\xA3\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\xB0\n\x03\x03\x04\x03\x04\x05\x04\xB4\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\xB9\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"\xC0\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x07\n\xC9\n\n" +
		"\f\n\x0E\n\xCC\v\n\x03\n\x03\n\x05\n\xD0\n\n\x03\n\x05\n\xD3\n\n\x03\n" +
		"\x05\n\xD6\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x05\f\xE2\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xEB\n\x0E\x03\x0F\x05\x0F\xEE\n\x0F\x03\x0F\x05\x0F\xF1\n\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xF5\n\x0F\x03\x0F\x03\x0F\x05\x0F\xF9\n\x0F\x03\x0F" +
		"\x05\x0F\xFC\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0101\n\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u0110\n\x14\x03\x15\x05\x15\u0113\n\x15" +
		"\x03\x15\x03\x15\x05\x15\u0117\n\x15\x03\x16\x05\x16\u011A\n\x16\x03\x17" +
		"\x03\x17\x05\x17\u011E\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u012C\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0135" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x05\x1D" +
		"\u013E\n\x1D\x03\x1D\x05\x1D\u0141\n\x1D\x03\x1D\x07\x1D\u0144\n\x1D\f" +
		"\x1D\x0E\x1D\u0147\v\x1D\x03\x1D\x05\x1D\u014A\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u014F\n\x1D\f\x1D\x0E\x1D\u0152\v\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x05\x1E\u0157\n\x1E\x03\x1E\x03\x1E\x05\x1E\u015B\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u0161\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u0167\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u0170" +
		"\n \x03!\x03!\x03!\x03\"\x05\"\u0176\n\"\x03\"\x05\"\u0179\n\"\x03\"\x03" +
		"\"\x05\"\u017D\n\"\x03\"\x05\"\u0180\n\"\x03\"\x03\"\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x05#\u018C\n#\x03$\x03$\x03$\x05$\u0191\n$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u019F\n$" +
		"\f$\x0E$\u01A2\v$\x03%\x03%\x05%\u01A6\n%\x03&\x03&\x05&\u01AA\n&\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u01B5\n(\x03(\x03(\x03" +
		")\x03)\x03)\x05)\u01BC\n)\x03)\x03)\x03*\x03*\x03*\x05*\u01C3\n*\x03*" +
		"\x03*\x03+\x03+\x03+\x03+\x05+\u01CB\n+\x03+\x03+\x05+\u01CF\n+\x03,\x05" +
		",\u01D2\n,\x03,\x03,\x05,\u01D6\n,\x03,\x03,\x05,\u01DA\n,\x03,\x03,\x05" +
		",\u01DE\n,\x03,\x03,\x03,\x03,\x05,\u01E4\n,\x03-\x03-\x03-\x03-\x03-" +
		"\x05-\u01EB\n-\x03.\x03.\x05.\u01EF\n.\x03.\x05.\u01F2\n.\x03/\x03/\x03" +
		"/\x030\x070\u01F8\n0\f0\x0E0\u01FB\v0\x030\x050\u01FE\n0\x030\x030\x03" +
		"0\x050\u0203\n0\x030\x050\u0206\n0\x030\x050\u0209\n0\x031\x071\u020C" +
		"\n1\f1\x0E1\u020F\v1\x031\x051\u0212\n1\x031\x031\x031\x031\x031\x032" +
		"\x032\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x034\x034\x03" +
		"4\x034\x035\x035\x055\u022B\n5\x035\x035\x035\x035\x035\x035\x035\x03" +
		"5\x055\u0235\n5\x036\x036\x076\u0239\n6\f6\x0E6\u023C\v6\x036\x036\x03" +
		"7\x067\u0241\n7\r7\x0E7\u0242\x037\x057\u0246\n7\x038\x038\x078\u024A" +
		"\n8\f8\x0E8\u024D\v8\x038\x038\x039\x069\u0252\n9\r9\x0E9\u0253\x039\x05" +
		"9\u0257\n9\x03:\x03:\x07:\u025B\n:\f:\x0E:\u025E\v:\x03:\x03:\x03;\x06" +
		";\u0263\n;\r;\x0E;\u0264\x03;\x05;\u0268\n;\x03<\x03<\x07<\u026C\n<\f" +
		"<\x0E<\u026F\v<\x03<\x03<\x03=\x06=\u0274\n=\r=\x0E=\u0275\x03=\x05=\u0279" +
		"\n=\x03>\x05>\u027C\n>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u029E\n>\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02A9\n?\x03@\x03@\x03@\x03@\x03" +
		"A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x05D\u02BB\n" +
		"D\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x03H\x03" +
		"H\x03H\x03I\x03I\x03I\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x05L\u02D7" +
		"\nL\x03L\x03L\x03M\x03M\x03M\x03M\x05M\u02DF\nM\x05M\u02E1\nM\x03N\x03" +
		"N\x03N\x03N\x05N\u02E7\nN\x03O\x03O\x03O\x03O\x03O\x02\x02\x03FP\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x02\f\x03\x02@A\x04\x02\x07" +
		"\x07\x15\x15\x04\x02&&<<\x04\x02\x03\x03\x13\x13\x03\x02\x0F\x11\x04\x02" +
		"\x04\x04\x0E\x0E\x04\x02++33\x04\x02**22\x04\x02))11\x04\x02,,44\x02\u0327" +
		"\x02\xA1\x03\x02\x02\x02\x04\xAF\x03\x02\x02\x02\x06\xB3\x03\x02\x02\x02" +
		"\b\xB8\x03\x02\x02\x02\n\xBF\x03\x02\x02\x02\f\xC1\x03\x02\x02\x02\x0E" +
		"\xC3\x03\x02\x02\x02\x10\xC5\x03\x02\x02\x02\x12\xCA\x03\x02\x02\x02\x14" +
		"\xD7\x03\x02\x02\x02\x16\xE1\x03\x02\x02\x02\x18\xE3\x03\x02\x02\x02\x1A" +
		"\xE5\x03\x02\x02\x02\x1C\xED\x03\x02\x02\x02\x1E\u0100\x03\x02\x02\x02" +
		" \u0102\x03\x02\x02\x02\"\u0105\x03\x02\x02\x02$\u0107\x03\x02\x02\x02" +
		"&\u010F\x03\x02\x02\x02(\u0112\x03\x02\x02\x02*\u0119\x03\x02\x02\x02" +
		",\u011B\x03\x02\x02\x02.\u012B\x03\x02\x02\x020\u012D\x03\x02\x02\x02" +
		"2\u0130\x03\x02\x02\x024\u0132\x03\x02\x02\x026\u0139\x03\x02\x02\x02" +
		"8\u013D\x03\x02\x02\x02:\u0166\x03\x02\x02\x02<\u0168\x03\x02\x02\x02" +
		">\u016F\x03\x02\x02\x02@\u0171\x03\x02\x02\x02B\u0175\x03\x02\x02\x02" +
		"D\u018B\x03\x02\x02\x02F\u0190\x03\x02\x02\x02H\u01A5\x03\x02\x02\x02" +
		"J\u01A7\x03\x02\x02\x02L\u01AD\x03\x02\x02\x02N\u01B0\x03\x02\x02\x02" +
		"P\u01B8\x03\x02\x02\x02R\u01BF\x03\x02\x02\x02T\u01C6\x03\x02\x02\x02" +
		"V\u01E3\x03\x02\x02\x02X\u01EA\x03\x02\x02\x02Z\u01EC\x03\x02\x02\x02" +
		"\\\u01F3\x03\x02\x02\x02^\u01F9\x03\x02\x02\x02`\u020D\x03\x02\x02\x02" +
		"b\u0218\x03\x02\x02\x02d\u021F\x03\x02\x02\x02f\u0224\x03\x02\x02\x02" +
		"h\u0234\x03\x02\x02\x02j\u0236\x03\x02\x02\x02l\u0245\x03\x02\x02\x02" +
		"n\u0247\x03\x02\x02\x02p\u0256\x03\x02\x02\x02r\u0258\x03\x02\x02\x02" +
		"t\u0267\x03\x02\x02\x02v\u0269\x03\x02\x02\x02x\u0278\x03\x02\x02\x02" +
		"z\u029D\x03\x02\x02\x02|\u02A8\x03\x02\x02\x02~\u02AA\x03\x02\x02\x02" +
		"\x80\u02AE\x03\x02\x02\x02\x82\u02B3\x03\x02\x02\x02\x84\u02B6\x03\x02" +
		"\x02\x02\x86\u02BA\x03\x02\x02\x02\x88\u02BF\x03\x02\x02\x02\x8A\u02C2" +
		"\x03\x02\x02\x02\x8C\u02C5\x03\x02\x02\x02\x8E\u02C8\x03\x02\x02\x02\x90" +
		"\u02CB\x03\x02\x02\x02\x92\u02CE\x03\x02\x02\x02\x94\u02D1\x03\x02\x02" +
		"\x02\x96\u02D4\x03\x02\x02\x02\x98\u02E0\x03\x02\x02\x02\x9A\u02E6\x03" +
		"\x02\x02\x02\x9C\u02E8\x03\x02\x02\x02\x9E\xA0\x05\x04\x03\x02\x9F\x9E" +
		"\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2" +
		"\x03\x02\x02\x02\xA2\x03\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xB0" +
		"\x05\x1A\x0E\x02\xA5\xB0\x05T+\x02\xA6\xB0\x05~@\x02\xA7\xB0\x05f4\x02" +
		"\xA8\xB0\x05^0\x02\xA9\xB0\x05`1\x02\xAA\xB0\x05d3\x02\xAB\xB0\x05b2\x02" +
		"\xAC\xB0\x05h5\x02\xAD\xB0\x05\x80A\x02\xAE\xB0\x07:\x02\x02\xAF\xA4\x03" +
		"\x02\x02\x02\xAF\xA5\x03\x02\x02\x02\xAF\xA6\x03\x02\x02\x02\xAF\xA7\x03" +
		"\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xAF\xA9\x03\x02\x02\x02\xAF\xAA\x03" +
		"\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02\x02\xAF\xAD\x03" +
		"\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x05\x03\x02\x02\x02\xB1\xB4\x05" +
		"\n\x06\x02\xB2\xB4\x05\b\x05\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02" +
		"\x02\x02\xB4\x07\x03\x02\x02\x02\xB5\xB9\x05\f\x07\x02\xB6\xB9\x05\x0E" +
		"\b\x02\xB7\xB9\x05\x10\t\x02\xB8\xB5\x03\x02\x02\x02\xB8\xB6\x03\x02\x02" +
		"\x02\xB8\xB7\x03\x02\x02\x02\xB9\t\x03\x02\x02\x02\xBA\xC0\x07>\x02\x02" +
		"\xBB\xBC\x07>\x02\x02\xBC\xBD\x07-\x02\x02\xBD\xBE\x07-\x02\x02\xBE\xC0" +
		"\x07>\x02\x02\xBF\xBA\x03\x02\x02\x02\xBF\xBB\x03\x02\x02\x02\xC0\v\x03" +
		"\x02\x02\x02\xC1\xC2\x07?\x02\x02\xC2\r\x03\x02\x02\x02\xC3\xC4\t\x02" +
		"\x02\x02\xC4\x0F\x03\x02\x02\x02\xC5\xC6\t\x03\x02\x02\xC6\x11\x03\x02" +
		"\x02\x02\xC7\xC9\x05\x16\f\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02" +
		"\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCF\x05\n\x06\x02\xCE\xD0\x05\x14" +
		"\v\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02" +
		"\x02\x02\xD1\xD3\x05\x18\r\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02" +
		"\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD6\x07\x05\x02\x02\xD5\xD4\x03\x02" +
		"\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\x13\x03\x02\x02\x02\xD7\xD8\x05r" +
		":\x02\xD8\x15\x03\x02\x02\x02\xD9\xE2\x07\x03\x02\x02\xDA\xE2\x07\x04" +
		"\x02\x02\xDB\xE2\x07\x05\x02\x02\xDC\xE2\x07\x06\x02\x02\xDD\xE2\x07\x13" +
		"\x02\x02\xDE\xE2\x07\x12\x02\x02\xDF\xE2\x07\v\x02\x02\xE0\xE2\x05\x8C" +
		"G\x02\xE1\xD9\x03\x02\x02\x02\xE1\xDA\x03\x02\x02\x02\xE1\xDB\x03\x02" +
		"\x02\x02\xE1\xDC\x03\x02\x02\x02\xE1\xDD\x03\x02\x02\x02\xE1\xDE\x03\x02" +
		"\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\x17\x03\x02" +
		"\x02\x02\xE3\xE4\t\x04\x02\x02\xE4\x19\x03\x02\x02\x02\xE5\xE6\x05\x1C" +
		"\x0F\x02\xE6\xE7\x072\x02\x02\xE7\xE8\x05*\x16\x02\xE8\xEA\x07*\x02\x02" +
		"\xE9\xEB\x07:\x02\x02\xEA\xE9\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02" +
		"\xEB\x1B\x03\x02\x02\x02\xEC\xEE\x05\x1E\x10\x02\xED\xEC\x03\x02\x02\x02" +
		"\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xF1\x05 \x11\x02" +
		"\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02" +
		"\xF2\xF4\x05\"\x12\x02\xF3\xF5\x07$\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4" +
		"\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x05\n\x06\x02\xF7" +
		"\xF9\x05r:\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB" +
		"\x03\x02\x02\x02\xFA\xFC\x05$\x13\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC" +
		"\x03\x02\x02\x02\xFC\x1D\x03\x02\x02\x02\xFD\u0101\x05\x82B\x02\xFE\u0101" +
		"\x05\x88E\x02\xFF\u0101\x05\x90I\x02\u0100\xFD\x03\x02\x02\x02\u0100\xFE" +
		"\x03\x02\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\x1F\x03\x02\x02\x02\u0102" +
		"\u0103\x07\x14\x02\x02\u0103\u0104\x05r:\x02\u0104!\x03\x02\x02\x02\u0105" +
		"\u0106\t\x05\x02\x02\u0106#\x03\x02\x02\x02\u0107\u0108\x07-\x02\x02\u0108" +
		"\u0109\x05&\x14\x02\u0109%\x03\x02\x02\x02\u010A\u0110\x05(\x15\x02\u010B" +
		"\u010C\x05(\x15\x02\u010C\u010D\x07.\x02\x02\u010D\u010E\x05&\x14\x02" +
		"\u010E\u0110\x03\x02\x02\x02\u010F\u010A\x03\x02\x02\x02\u010F\u010B\x03" +
		"\x02\x02\x02\u0110\'\x03\x02\x02\x02\u0111\u0113\x052\x1A\x02\u0112\u0111" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
		"\u0114\u0116\x05\n\x06\x02\u0115\u0117\x05r:\x02\u0116\u0115\x03\x02\x02" +
		"\x02\u0116\u0117\x03\x02\x02\x02\u0117)\x03\x02\x02\x02\u0118\u011A\x05" +
		",\x17\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"+\x03\x02\x02\x02\u011B\u011D\x05.\x18\x02\u011C\u011E\x05,\x17\x02\u011D" +
		"\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E-\x03\x02\x02" +
		"\x02\u011F\u012C\x050\x19\x02\u0120\u012C\x058\x1D\x02\u0121\u012C\x05" +
		"4\x1B\x02\u0122\u012C\x05B\"\x02\u0123\u012C\x056\x1C\x02\u0124\u012C" +
		"\x05J&\x02\u0125\u012C\x05N(\x02\u0126\u012C\x05P)\x02\u0127\u012C\x05" +
		"R*\x02\u0128\u012C\x05h5\x02\u0129\u012C\x05\x94K\x02\u012A\u012C\x07" +
		":\x02\x02\u012B\u011F\x03\x02\x02\x02\u012B\u0120\x03\x02\x02\x02\u012B" +
		"\u0121\x03\x02\x02\x02\u012B\u0122\x03\x02\x02\x02\u012B\u0123\x03\x02" +
		"\x02\x02\u012B\u0124\x03\x02\x02\x02\u012B\u0125\x03\x02\x02\x02\u012B" +
		"\u0126\x03\x02\x02\x02\u012B\u0127\x03\x02\x02\x02\u012B\u0128\x03\x02" +
		"\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C" +
		"/\x03\x02\x02\x02\u012D\u012E\x052\x1A\x02\u012E\u012F\x07-\x02\x02\u012F" +
		"1\x03\x02\x02\x02\u0130\u0131\t\x06\x02\x02\u01313\x03\x02\x02\x02\u0132" +
		"\u0134\x07\t\x02\x02\u0133\u0135\x05\"\x12\x02\u0134\u0133\x03\x02\x02" +
		"\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137" +
		"\x05\n\x06\x02\u0137\u0138\x07:\x02\x02\u01385\x03\x02\x02\x02\u0139\u013A" +
		"\x07#\x02\x02\u013A\u013B\x05j6\x02\u013B7\x03\x02\x02\x02\u013C\u013E" +
		"\x05\x92J\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
		"\u013E\u0140\x03\x02\x02\x02\u013F\u0141\x05\x86D\x02\u0140\u013F\x03" +
		"\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0145\x03\x02\x02\x02\u0142" +
		"\u0144\x05|?\x02\u0143\u0142\x03\x02\x02\x02\u0144\u0147\x03\x02\x02\x02" +
		"\u0145\u0143\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0149\x03" +
		"\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148\u014A\x05\x12\n\x02\u0149" +
		"\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014C\x05z>\x02\u014C\u0150\x05j6\x02\u014D\u014F\x05<" +
		"\x1F\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02" +
		"\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x05:\x1E\x02\u01549\x03" +
		"\x02\x02\x02\u0155\u0157\x07:\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0167\x03\x02\x02\x02\u0158\u015A\x05n8\x02" +
		"\u0159\u015B\x07:\x02\x02\u015A\u0159\x03\x02\x02\x02\u015A\u015B\x03" +
		"\x02\x02\x02\u015B\u0167\x03\x02\x02\x02\u015C\u015D\x07-\x02\x02\u015D" +
		"\u015E\x05> \x02\u015E\u0160\x05n8\x02\u015F\u0161\x07:\x02\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0167\x03\x02" +
		"\x02\x02\u0162\u0163\x07/\x02\x02\u0163\u0164\x05\x0E\b\x02\u0164\u0165" +
		"\x07:\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0156\x03\x02\x02\x02" +
		"\u0166\u0158\x03\x02\x02\x02\u0166\u015C\x03\x02\x02\x02\u0166\u0162\x03" +
		"\x02\x02\x02\u0167;\x03\x02\x02\x02\u0168\u0169\t\x07\x02\x02\u0169=\x03" +
		"\x02\x02\x02\u016A\u0170\x05@!\x02\u016B\u016C\x05@!\x02\u016C\u016D\x07" +
		".\x02\x02\u016D\u016E\x05> \x02\u016E\u0170\x03\x02\x02\x02\u016F\u016A" +
		"\x03\x02\x02\x02\u016F\u016B\x03\x02\x02\x02\u0170?\x03\x02\x02\x02\u0171" +
		"\u0172\x05\n\x06\x02\u0172\u0173\x05j6\x02\u0173A\x03\x02\x02\x02\u0174" +
		"\u0176\x05\x8EH\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02" +
		"\x02\u0176\u0178\x03\x02\x02\x02\u0177\u0179\x05\x12\n\x02\u0178\u0177" +
		"\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02" +
		"\u017A\u017C\x05\n\x06\x02\u017B\u017D\x05v<\x02\u017C\u017B\x03\x02\x02" +
		"\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02\x02\x02\u017E\u0180" +
		"\x05D#\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180" +
		"\u0181\x03\x02\x02\x02\u0181\u0182\x07:\x02\x02\u0182C\x03\x02\x02\x02" +
		"\u0183\u0184\x07-\x02\x02\u0184\u018C\x05\b\x05\x02\u0185\u0186\x07/\x02" +
		"\x02\u0186\u018C\x05F$\x02\u0187\u0188\x07/\x02\x02\u0188\u0189\x05\n" +
		"\x06\x02\u0189\u018A\x05j6\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0183" +
		"\x03\x02\x02\x02\u018B\u0185\x03\x02\x02\x02\u018B\u0187\x03\x02\x02\x02" +
		"\u018CE\x03\x02\x02\x02\u018D\u018E\b$\x01\x02\u018E\u0191\x05\b\x05\x02" +
		"\u018F\u0191\x05\n\x06\x02\u0190\u018D\x03\x02\x02\x02\u0190\u018F\x03" +
		"\x02\x02\x02\u0191\u01A0\x03\x02\x02\x02\u0192\u0193\f\x06\x02\x02\u0193" +
		"\u0194\x078\x02\x02\u0194\u019F\x05F$\x07\u0195\u0196\f\x05\x02\x02\u0196" +
		"\u0197\x070\x02\x02\u0197\u019F\x05F$\x06\u0198\u0199\f\x04\x02\x02\u0199" +
		"\u019A\x07<\x02\x02\u019A\u019F\x05F$\x05\u019B\u019C\f\x03\x02\x02\u019C" +
		"\u019D\x07\'\x02\x02\u019D\u019F\x05F$\x04\u019E\u0192\x03\x02\x02\x02" +
		"\u019E\u0195\x03\x02\x02\x02\u019E\u0198\x03\x02\x02\x02\u019E\u019B\x03" +
		"\x02\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1G\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02" +
		"\x02\u01A3\u01A6\x05\n\x06\x02\u01A4\u01A6\x05\x0E\b\x02\u01A5\u01A3\x03" +
		"\x02\x02\x02\u01A5\u01A4\x03\x02\x02\x02\u01A6I\x03\x02\x02\x02\u01A7" +
		"\u01A9\x07\x06\x02\x02\u01A8\u01AA\x05\n\x06\x02\u01A9\u01A8\x03\x02\x02" +
		"\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AC" +
		"\x05n8\x02\u01ACK\x03\x02\x02\x02\u01AD\u01AE\x07-\x02\x02\u01AE\u01AF" +
		"\x07>\x02\x02\u01AFM\x03\x02\x02\x02\u01B0\u01B1\x07\x06\x02\x02\u01B1" +
		"\u01B2\x07\x03\x02\x02\u01B2\u01B4\x05\n\x06\x02\u01B3\u01B5\x05L\'\x02" +
		"\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\x03" +
		"\x02\x02\x02\u01B6\u01B7\x05n8\x02\u01B7O\x03\x02\x02\x02\u01B8\u01B9" +
		"\x07\x03\x02\x02\u01B9\u01BB\x05\n\x06\x02\u01BA\u01BC\x05$\x13\x02\u01BB" +
		"\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02" +
		"\x02\x02\u01BD\u01BE\x05n8\x02\u01BEQ\x03\x02\x02\x02\u01BF\u01C0\x07" +
		"\x13\x02\x02\u01C0\u01C2\x05\n\x06\x02\u01C1\u01C3\x05$\x13\x02\u01C2" +
		"\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02" +
		"\x02\x02\u01C4\u01C5\x05n8\x02\u01C5S\x03\x02\x02\x02\u01C6\u01C7\x05" +
		"V,\x02\u01C7\u01C8\x072\x02\x02\u01C8\u01CA\x05X-\x02\u01C9\u01CB\x07" +
		".\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01CE\x07*\x02\x02\u01CD\u01CF\x07:\x02\x02" +
		"\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CFU\x03\x02" +
		"\x02\x02\u01D0\u01D2\x05\x84C\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2" +
		"\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x07\x06\x02\x02" +
		"\u01D4\u01D6\x07\x03\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03" +
		"\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01E4\x05\n\x06\x02\u01D8" +
		"\u01DA\x05\x84C\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02" +
		"\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x07\x06\x02\x02\u01DC\u01DE" +
		"\x07\x03\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02" +
		"\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x05\n\x06\x02\u01E0\u01E1\x07" +
		"-\x02\x02\u01E1\u01E2\x05\x12\n\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3" +
		"\u01D1\x03\x02\x02\x02\u01E3\u01D9\x03\x02\x02\x02\u01E4W\x03\x02\x02" +
		"\x02\u01E5\u01EB\x05Z.\x02\u01E6\u01E7\x05Z.\x02\u01E7\u01E8\x07.\x02" +
		"\x02\u01E8\u01E9\x05X-\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E5\x03" +
		"\x02\x02\x02\u01EA\u01E6\x03\x02\x02\x02\u01EBY\x03\x02\x02\x02\u01EC" +
		"\u01EE\x05\n\x06\x02\u01ED\u01EF\x05\\/\x02\u01EE\u01ED\x03\x02\x02\x02" +
		"\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x03\x02\x02\x02\u01F0\u01F2\x05" +
		"\x8AF\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2" +
		"[\x03\x02\x02\x02\u01F3\u01F4\x07/\x02\x02\u01F4\u01F5\x05\b\x05\x02\u01F5" +
		"]\x03\x02\x02\x02\u01F6\u01F8\x05|?\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8" +
		"\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02" +
		"\x02\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC" +
		"\u01FE\x05\x12\n\x02\u01FD\u01FC\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02" +
		"\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x05z>\x02\u0200\u0202\x05" +
		"j6\x02\u0201\u0203\x07\x04\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203" +
		"\x03\x02\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204\u0206\x05n8";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0208" +
		"\x03\x02\x02\x02\u0207\u0209\x07:\x02\x02\u0208\u0207\x03\x02\x02\x02" +
		"\u0208\u0209\x03\x02\x02\x02\u0209_\x03\x02\x02\x02\u020A\u020C\x05|?" +
		"\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B" +
		"\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0211\x03\x02\x02\x02" +
		"\u020F\u020D\x03\x02\x02\x02\u0210\u0212\x05\x12\n\x02\u0211\u0210\x03" +
		"\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0214\x05z>\x02\u0214\u0215\x07/\x02\x02\u0215\u0216\x05n8\x02\u0216" +
		"\u0217\x07:\x02\x02\u0217a\x03\x02\x02\x02\u0218\u0219\x07\x12\x02\x02" +
		"\u0219\u021A\x05\x12\n\x02\u021A\u021B\x05\n\x06\x02\u021B\u021C\x07/" +
		"\x02\x02\u021C\u021D\x05\b\x05\x02\u021D\u021E\x07:\x02\x02\u021Ec\x03" +
		"\x02\x02\x02\u021F\u0220\x07\b\x02\x02\u0220\u0221\x05\x12\n\x02\u0221" +
		"\u0222\x05\n\x06\x02\u0222\u0223\x05j6\x02\u0223e\x03\x02\x02\x02\u0224" +
		"\u0225\x05\n\x06\x02\u0225\u0226\x05j6\x02\u0226\u0227\x07:\x02\x02\u0227" +
		"g\x03\x02\x02\x02\u0228\u022A\x07\x16\x02\x02\u0229\u022B\x07\x17\x02" +
		"\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C" +
		"\x03\x02\x02\x02\u022C\u022D\x05\x12\n\x02\u022D\u022E\x05\n\x06\x02\u022E" +
		"\u022F\x07:\x02\x02\u022F\u0235\x03\x02\x02\x02\u0230\u0231\x07\x03\x02" +
		"\x02\u0231\u0232\x05\n\x06\x02\u0232\u0233\x07:\x02\x02\u0233\u0235\x03" +
		"\x02\x02\x02\u0234\u0228\x03\x02\x02\x02\u0234\u0230\x03\x02\x02\x02\u0235" +
		"i\x03\x02\x02\x02\u0236\u023A\x073\x02\x02\u0237\u0239\x05l7\x02\u0238" +
		"\u0237\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02" +
		"\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C" +
		"\u023A\x03\x02\x02\x02\u023D\u023E\x07+\x02\x02\u023Ek\x03\x02\x02\x02" +
		"\u023F\u0241\n\b\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0242\x03\x02" +
		"\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\u0246\x03\x02\x02\x02\u0244\u0246\x05j6\x02\u0245\u0240\x03\x02\x02\x02" +
		"\u0245\u0244\x03\x02\x02\x02\u0246m\x03\x02\x02\x02\u0247\u024B\x072\x02" +
		"\x02\u0248\u024A\x05p9\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024D\x03" +
		"\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u024E\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u024F\x07*\x02" +
		"\x02\u024Fo\x03\x02\x02\x02\u0250\u0252\n\t\x02\x02\u0251\u0250\x03\x02" +
		"\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253" +
		"\u0254\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0257\x05n8\x02" +
		"\u0256\u0251\x03\x02\x02\x02\u0256\u0255\x03\x02\x02\x02\u0257q\x03\x02" +
		"\x02\x02\u0258\u025C\x071\x02\x02\u0259\u025B\x05t;\x02\u025A\u0259\x03" +
		"\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025C" +
		"\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E\u025C\x03\x02" +
		"\x02\x02\u025F\u0260\x07)\x02\x02\u0260s\x03\x02\x02\x02\u0261\u0263\n" +
		"\n\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264" +
		"\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03\x02" +
		"\x02\x02\u0266\u0268\x05r:\x02\u0267\u0262\x03\x02\x02\x02\u0267\u0266" +
		"\x03\x02\x02\x02\u0268u\x03\x02\x02\x02\u0269\u026D\x074\x02\x02\u026A" +
		"\u026C\x05x=\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02" +
		"\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x03" +
		"\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0271\x07,\x02\x02\u0271" +
		"w\x03\x02\x02\x02\u0272\u0274\n\v\x02\x02\u0273\u0272\x03\x02\x02\x02" +
		"\u0274\u0275\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03" +
		"\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0279\x05v<\x02\u0278\u0273" +
		"\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279y\x03\x02\x02\x02\u027A" +
		"\u027C\x07=\x02\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02" +
		"\x02\u027C\u027D\x03\x02\x02\x02\u027D\u029E\x05\n\x06\x02\u027E\u027F" +
		"\x07\r\x02\x02\u027F\u029E\x07/\x02\x02\u0280\u0281\x07\r\x02\x02\u0281" +
		"\u0282\x07/\x02\x02\u0282\u029E\x07/\x02\x02\u0283\u0284\x07\r\x02\x02" +
		"\u0284\u0285\x07(\x02\x02\u0285\u029E\x07/\x02\x02\u0286\u0287\x07\r\x02" +
		"\x02\u0287\u029E\x078\x02\x02\u0288\u0289\x07\r\x02\x02\u0289\u029E\x07" +
		"0\x02\x02\u028A\u028B\x07\r\x02\x02\u028B\u028C\x074\x02\x02\u028C\u029E" +
		"\x07,\x02\x02\u028D\u028E\x07\r\x02\x02\u028E\u029E\x071\x02\x02\u028F" +
		"\u0290\x07\r\x02\x02\u0290\u0291\x071\x02\x02\u0291\u029E\x071\x02\x02" +
		"\u0292\u0293\x07\r\x02\x02\u0293\u029E\x07)\x02\x02\u0294\u0295\x07\r" +
		"\x02\x02\u0295\u0296\x07)\x02\x02\u0296\u029E\x07)\x02\x02\u0297\u0298" +
		"\x07\r\x02\x02\u0298\u0299\x073\x02\x02\u0299\u029E\x07+\x02\x02\u029A" +
		"\u029B\x07\r\x02\x02\u029B\u029C\x070\x02\x02\u029C\u029E\x07)\x02\x02" +
		"\u029D\u027B\x03\x02\x02\x02\u029D\u027E\x03\x02\x02\x02\u029D\u0280\x03" +
		"\x02\x02\x02\u029D\u0283\x03\x02\x02\x02\u029D\u0286\x03\x02\x02\x02\u029D" +
		"\u0288\x03\x02\x02\x02\u029D\u028A\x03\x02\x02\x02\u029D\u028D\x03\x02" +
		"\x02\x02\u029D\u028F\x03\x02\x02\x02\u029D\u0292\x03\x02\x02\x02\u029D" +
		"\u0294\x03\x02\x02\x02\u029D\u0297\x03\x02\x02\x02\u029D\u029A\x03\x02" +
		"\x02\x02\u029E{\x03\x02\x02\x02\u029F\u02A9\x07\x12\x02\x02\u02A0\u02A9" +
		"\x07\x04\x02\x02\u02A1\u02A9\x07\x05\x02\x02\u02A2\u02A9\x07\x19\x02\x02" +
		"\u02A3\u02A9\x07\b\x02\x02\u02A4\u02A9\x07\n\x02\x02\u02A5\u02A9\x07\t" +
		"\x02\x02\u02A6\u02A7\x07\x14\x02\x02\u02A7\u02A9\x05r:\x02\u02A8\u029F" +
		"\x03\x02\x02\x02\u02A8\u02A0\x03\x02\x02\x02\u02A8\u02A1\x03\x02\x02\x02" +
		"\u02A8\u02A2\x03\x02\x02\x02\u02A8\u02A3\x03\x02\x02\x02\u02A8\u02A4\x03" +
		"\x02\x02\x02\u02A8\u02A5\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9" +
		"}\x03\x02\x02\x02\u02AA\u02AB\x07\f\x02\x02\u02AB\u02AC\x05\n\x06\x02" +
		"\u02AC\u02AD\x05n8\x02\u02AD\x7F\x03\x02\x02\x02\u02AE\u02AF\x07\x18\x02" +
		"\x02\u02AF\u02B0\x05\n\x06\x02\u02B0\u02B1\x07/\x02\x02\u02B1\u02B2\x05" +
		"\n\x06\x02\u02B2\x81\x03\x02\x02\x02\u02B3\u02B4\x07\x1A\x02\x02\u02B4" +
		"\u02B5\x05\x96L\x02\u02B5\x83\x03\x02\x02\x02\u02B6\u02B7\x07\x1B\x02" +
		"\x02\u02B7\u02B8\x05\x96L\x02\u02B8\x85\x03\x02\x02\x02\u02B9\u02BB\x07" +
		"\b\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\u02BD\x07\x1C\x02\x02\u02BD\u02BE\x05\x96" +
		"L\x02\u02BE\x87\x03\x02\x02\x02\u02BF\u02C0\x07\x1D\x02\x02\u02C0\u02C1" +
		"\x05\x96L\x02\u02C1\x89\x03\x02\x02\x02\u02C2\u02C3\x07\x1E\x02\x02\u02C3" +
		"\u02C4\x05\x96L\x02\u02C4\x8B\x03\x02\x02\x02\u02C5\u02C6\x07\x1F\x02" +
		"\x02\u02C6\u02C7\x05\x96L\x02\u02C7\x8D\x03\x02\x02\x02\u02C8\u02C9\x07" +
		" \x02\x02\u02C9\u02CA\x05\x96L\x02\u02CA\x8F\x03\x02\x02\x02\u02CB\u02CC" +
		"\x07!\x02\x02\u02CC\u02CD\x05\x96L\x02\u02CD\x91\x03\x02\x02\x02\u02CE" +
		"\u02CF\x07\"\x02\x02\u02CF\u02D0\x05\x96L\x02\u02D0\x93\x03\x02\x02\x02" +
		"\u02D1\u02D2\x07%\x02\x02\u02D2\u02D3\x05\x96L\x02\u02D3\x95\x03\x02\x02" +
		"\x02\u02D4\u02D6\x073\x02\x02\u02D5\u02D7\x05\x98M\x02\u02D6\u02D5\x03" +
		"\x02\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
		"\u02D9\x07+\x02\x02\u02D9\x97\x03\x02\x02\x02\u02DA\u02E1\x05\x9AN\x02" +
		"\u02DB\u02DC\x05\x9AN\x02\u02DC\u02DE\x07.\x02\x02\u02DD\u02DF\x05\x98" +
		"M\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E1" +
		"\x03\x02\x02\x02\u02E0\u02DA\x03\x02\x02\x02\u02E0\u02DB\x03\x02\x02\x02" +
		"\u02E1\x99\x03\x02\x02\x02\u02E2\u02E7\x05\n\x06\x02\u02E3\u02E7\x05\b" +
		"\x05\x02\u02E4\u02E7\x05\x9CO\x02\u02E5\u02E7\x05\x96L\x02\u02E6\u02E2" +
		"\x03\x02\x02\x02\u02E6\u02E3\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02" +
		"\u02E6\u02E5\x03\x02\x02\x02\u02E7\x9B\x03\x02\x02\x02\u02E8\u02E9\x05" +
		"\n\x06\x02\u02E9\u02EA\x07/\x02\x02\u02EA\u02EB\x05\x9AN\x02\u02EB\x9D" +
		"\x03\x02\x02\x02X\xA1\xAF\xB3\xB8\xBF\xCA\xCF\xD2\xD5\xE1\xEA\xED\xF0" +
		"\xF4\xF8\xFB\u0100\u010F\u0112\u0116\u0119\u011D\u012B\u0134\u013D\u0140" +
		"\u0145\u0149\u0150\u0156\u015A\u0160\u0166\u016F\u0175\u0178\u017C\u017F" +
		"\u018B\u0190\u019E\u01A0\u01A5\u01A9\u01B4\u01BB\u01C2\u01CA\u01CE\u01D1" +
		"\u01D5\u01D9\u01DD\u01E3\u01EA\u01EE\u01F1\u01F9\u01FD\u0202\u0205\u0208" +
		"\u020D\u0211\u022A\u0234\u023A\u0242\u0245\u024B\u0253\u0256\u025C\u0264" +
		"\u0267\u026D\u0275\u0278\u027B\u029D\u02A8\u02BA\u02D6\u02DE\u02E0\u02E6";
	public static readonly _serializedATN: string = Utils.join(
		[
			SatisfactoryHeaderParser._serializedATNSegment0,
			SatisfactoryHeaderParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SatisfactoryHeaderParser.__ATN) {
			SatisfactoryHeaderParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SatisfactoryHeaderParser._serializedATN));
		}

		return SatisfactoryHeaderParser.__ATN;
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_file; }
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
	public namespaceDeclaration(): NamespaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDeclarationContext);
	}
	public staticMethodCall(): StaticMethodCallContext | undefined {
		return this.tryGetRuleContext(0, StaticMethodCallContext);
	}
	public staticFunctionDeclaration(): StaticFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticFunctionDeclarationContext);
	}
	public staticArrayDeclaration(): StaticArrayDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticArrayDeclarationContext);
	}
	public staticInlineFunctionDeclaration(): StaticInlineFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticInlineFunctionDeclarationContext);
	}
	public staticPropertyDeclaration(): StaticPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticPropertyDeclarationContext);
	}
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
	}
	public usingNamespace(): UsingNamespaceContext | undefined {
		return this.tryGetRuleContext(0, UsingNamespaceContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_element; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_value; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_literal; }
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
			return this.getTokens(SatisfactoryHeaderParser.IDENTIFIER);
		} else {
			return this.getToken(SatisfactoryHeaderParser.IDENTIFIER, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.COLON);
		} else {
			return this.getToken(SatisfactoryHeaderParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_identifier; }
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
	public STRING_LITERAL(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_stringLiteral; }
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
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.INTEGER_LITERAL, 0); }
	public FLOAT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.FLOAT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_numericLiteral; }
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
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_booleanLiteral; }
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
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONSTEXPR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_typeDeclaration; }
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
	public contentWithNestedAngles(): ContentWithNestedAnglesContext {
		return this.getRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_templateType; }
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
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONST, 0); }
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONSTEXPR, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.ENUM, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STRUCT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STATIC, 0); }
	public MUTABLE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.MUTABLE, 0); }
	public uParamMacro(): UParamMacroContext | undefined {
		return this.tryGetRuleContext(0, UParamMacroContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_typeModifier; }
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
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STAR, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_typeReferenceType; }
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
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_BRACE, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_BRACE, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classDeclaration; }
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
	public SF_CLASS_TAG(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SF_CLASS_TAG, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classHeader; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classMacro; }
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
	public TEMPLATE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.TEMPLATE, 0); }
	public contentWithNestedAngles(): ContentWithNestedAnglesContext {
		return this.getRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_templateDeclaration; }
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
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLASS, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STRUCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classKeyword; }
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
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.COLON, 0); }
	public classExtensionList(): ClassExtensionListContext {
		return this.getRuleContext(0, ClassExtensionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classInheritance; }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COMMA, 0); }
	public classExtensionList(): ClassExtensionListContext | undefined {
		return this.tryGetRuleContext(0, ClassExtensionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classExtensionList; }
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classVisibilityModifier(): ClassVisibilityModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassVisibilityModifierContext);
	}
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classExtension; }
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
	public classEntries(): ClassEntriesContext | undefined {
		return this.tryGetRuleContext(0, ClassEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classBody; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classEntries; }
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
	public nestedEnum(): NestedEnumContext | undefined {
		return this.tryGetRuleContext(0, NestedEnumContext);
	}
	public nestedEnumClass(): NestedEnumClassContext | undefined {
		return this.tryGetRuleContext(0, NestedEnumClassContext);
	}
	public nestedClass(): NestedClassContext | undefined {
		return this.tryGetRuleContext(0, NestedClassContext);
	}
	public nestedStruct(): NestedStructContext | undefined {
		return this.tryGetRuleContext(0, NestedStructContext);
	}
	public typedef(): TypedefContext | undefined {
		return this.tryGetRuleContext(0, TypedefContext);
	}
	public generatedBodyMacro(): GeneratedBodyMacroContext | undefined {
		return this.tryGetRuleContext(0, GeneratedBodyMacroContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classEntry; }
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
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classVisibility; }
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
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classVisibilityModifier; }
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
	public FRIEND(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.FRIEND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	public classKeyword(): ClassKeywordContext | undefined {
		return this.tryGetRuleContext(0, ClassKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_friendDeclaration; }
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
	public STAT(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.STAT, 0); }
	public contentWithNestedParens(): ContentWithNestedParensContext {
		return this.getRuleContext(0, ContentWithNestedParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_statDeclaration; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classMethod; }
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
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COLON, 0); }
	public classInitializerList(): ClassInitializerListContext | undefined {
		return this.tryGetRuleContext(0, ClassInitializerListContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classMethodEnd; }
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
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONST, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.OVERRIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classMethodResultModifier; }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COMMA, 0); }
	public classInitializerList(): ClassInitializerListContext | undefined {
		return this.tryGetRuleContext(0, ClassInitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classInitializerList; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classInitializer; }
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
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	public upropertyMacro(): UpropertyMacroContext | undefined {
		return this.tryGetRuleContext(0, UpropertyMacroContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public contentWithNestedSquares(): ContentWithNestedSquaresContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedSquaresContext);
	}
	public classPropertyDefaultValue(): ClassPropertyDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertyDefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classProperty; }
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
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COLON, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classPropertyDefaultValue; }
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


export class LiteralExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public literalExpression(): LiteralExpressionContext[];
	public literalExpression(i: number): LiteralExpressionContext;
	public literalExpression(i?: number): LiteralExpressionContext | LiteralExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralExpressionContext);
		} else {
			return this.getRuleContext(i, LiteralExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.MINUS, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STAR, 0); }
	public BACKSLASH(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.BACKSLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_literalExpression; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_classPropertyArraySize; }
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


export class NestedEnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.ENUM, 0); }
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_nestedEnum; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNestedEnum) {
			listener.enterNestedEnum(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNestedEnum) {
			listener.exitNestedEnum(this);
		}
	}
}


export class NestedEnumInheritanceContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.COLON, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_nestedEnumInheritance; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNestedEnumInheritance) {
			listener.enterNestedEnumInheritance(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNestedEnumInheritance) {
			listener.exitNestedEnumInheritance(this);
		}
	}
}


export class NestedEnumClassContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.ENUM, 0); }
	public CLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public nestedEnumInheritance(): NestedEnumInheritanceContext | undefined {
		return this.tryGetRuleContext(0, NestedEnumInheritanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_nestedEnumClass; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNestedEnumClass) {
			listener.enterNestedEnumClass(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNestedEnumClass) {
			listener.exitNestedEnumClass(this);
		}
	}
}


export class NestedClassContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public classInheritance(): ClassInheritanceContext | undefined {
		return this.tryGetRuleContext(0, ClassInheritanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_nestedClass; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNestedClass) {
			listener.enterNestedClass(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNestedClass) {
			listener.exitNestedClass(this);
		}
	}
}


export class NestedStructContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.STRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public classInheritance(): ClassInheritanceContext | undefined {
		return this.tryGetRuleContext(0, ClassInheritanceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_nestedStruct; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNestedStruct) {
			listener.enterNestedStruct(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNestedStruct) {
			listener.exitNestedStruct(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public enumHeader(): EnumHeaderContext {
		return this.getRuleContext(0, EnumHeaderContext);
	}
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_BRACE, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COMMA, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_enumDeclaration; }
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
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public uenumMacro(): UenumMacroContext | undefined {
		return this.tryGetRuleContext(0, UenumMacroContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLASS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COLON, 0); }
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_enumHeader; }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COMMA, 0); }
	public enumBody(): EnumBodyContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_enumBody; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_enumEntry; }
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
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_enumValue; }
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
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONST, 0); }
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_staticFunctionDeclaration; }
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


export class StaticArrayDeclarationContext extends ParserRuleContext {
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_staticArrayDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStaticArrayDeclaration) {
			listener.enterStaticArrayDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStaticArrayDeclaration) {
			listener.exitStaticArrayDeclaration(this);
		}
	}
}


export class StaticPropertyDeclarationContext extends ParserRuleContext {
	public STATIC(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.STATIC, 0); }
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_staticPropertyDeclaration; }
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


export class StaticInlineFunctionDeclarationContext extends ParserRuleContext {
	public FORCEINLINE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.FORCEINLINE, 0); }
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_staticInlineFunctionDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterStaticInlineFunctionDeclaration) {
			listener.enterStaticInlineFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitStaticInlineFunctionDeclaration) {
			listener.exitStaticInlineFunctionDeclaration(this);
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
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_staticMethodCall; }
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
	public TYPEDEF(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.TYPEDEF, 0); }
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SEMICOLON, 0); }
	public TYPENAME(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.TYPENAME, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_typedef; }
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
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_PAREN, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedParens; }
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
			return this.getTokens(SatisfactoryHeaderParser.OPEN_PAREN);
		} else {
			return this.getToken(SatisfactoryHeaderParser.OPEN_PAREN, i);
		}
	}
	public CLOSE_PAREN(): TerminalNode[];
	public CLOSE_PAREN(i: number): TerminalNode;
	public CLOSE_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.CLOSE_PAREN);
		} else {
			return this.getToken(SatisfactoryHeaderParser.CLOSE_PAREN, i);
		}
	}
	public contentWithNestedParens(): ContentWithNestedParensContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedParensContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedParensInner; }
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
	public OPEN_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_BRACE, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedBraces; }
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
			return this.getTokens(SatisfactoryHeaderParser.OPEN_BRACE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.OPEN_BRACE, i);
		}
	}
	public CLOSE_BRACE(): TerminalNode[];
	public CLOSE_BRACE(i: number): TerminalNode;
	public CLOSE_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.CLOSE_BRACE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.CLOSE_BRACE, i);
		}
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedBracesInner; }
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
	public OPEN_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_ANGLE, 0); }
	public CLOSE_ANGLE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_ANGLE, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedAngles; }
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
			return this.getTokens(SatisfactoryHeaderParser.OPEN_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.OPEN_ANGLE, i);
		}
	}
	public CLOSE_ANGLE(): TerminalNode[];
	public CLOSE_ANGLE(i: number): TerminalNode;
	public CLOSE_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.CLOSE_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.CLOSE_ANGLE, i);
		}
	}
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedAnglesInner; }
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


export class ContentWithNestedSquaresContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_SQUARE, 0); }
	public CLOSE_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_SQUARE, 0); }
	public contentWithNestedSquaresInner(): ContentWithNestedSquaresInnerContext[];
	public contentWithNestedSquaresInner(i: number): ContentWithNestedSquaresInnerContext;
	public contentWithNestedSquaresInner(i?: number): ContentWithNestedSquaresInnerContext | ContentWithNestedSquaresInnerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentWithNestedSquaresInnerContext);
		} else {
			return this.getRuleContext(i, ContentWithNestedSquaresInnerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedSquares; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedSquares) {
			listener.enterContentWithNestedSquares(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedSquares) {
			listener.exitContentWithNestedSquares(this);
		}
	}
}


export class ContentWithNestedSquaresInnerContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode[];
	public OPEN_SQUARE(i: number): TerminalNode;
	public OPEN_SQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.OPEN_SQUARE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.OPEN_SQUARE, i);
		}
	}
	public CLOSE_SQUARE(): TerminalNode[];
	public CLOSE_SQUARE(i: number): TerminalNode;
	public CLOSE_SQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.CLOSE_SQUARE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.CLOSE_SQUARE, i);
		}
	}
	public contentWithNestedSquares(): ContentWithNestedSquaresContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedSquaresContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_contentWithNestedSquaresInner; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterContentWithNestedSquaresInner) {
			listener.enterContentWithNestedSquaresInner(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitContentWithNestedSquaresInner) {
			listener.exitContentWithNestedSquaresInner(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.TILDE, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.OPERATOR, 0); }
	public EQUALS(): TerminalNode[];
	public EQUALS(i: number): TerminalNode;
	public EQUALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.EQUALS);
		} else {
			return this.getToken(SatisfactoryHeaderParser.EQUALS, i);
		}
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.BANG, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.MINUS, 0); }
	public OPEN_SQUARE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.OPEN_SQUARE, 0); }
	public CLOSE_SQUARE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLOSE_SQUARE, 0); }
	public OPEN_ANGLE(): TerminalNode[];
	public OPEN_ANGLE(i: number): TerminalNode;
	public OPEN_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.OPEN_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.OPEN_ANGLE, i);
		}
	}
	public CLOSE_ANGLE(): TerminalNode[];
	public CLOSE_ANGLE(i: number): TerminalNode;
	public CLOSE_ANGLE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParser.CLOSE_ANGLE);
		} else {
			return this.getToken(SatisfactoryHeaderParser.CLOSE_ANGLE, i);
		}
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CLOSE_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_functionName; }
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.STATIC, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONST, 0); }
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.CONSTEXPR, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.VIRTUAL, 0); }
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.FORCEINLINE, 0); }
	public INLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.INLINE, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.FRIEND, 0); }
	public TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.TEMPLATE, 0); }
	public contentWithNestedAngles(): ContentWithNestedAnglesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedAnglesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_functionModifier; }
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


export class NamespaceDeclarationContext extends ParserRuleContext {
	public NAMESPACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.NAMESPACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contentWithNestedBraces(): ContentWithNestedBracesContext {
		return this.getRuleContext(0, ContentWithNestedBracesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_namespaceDeclaration; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterNamespaceDeclaration) {
			listener.enterNamespaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitNamespaceDeclaration) {
			listener.exitNamespaceDeclaration(this);
		}
	}
}


export class UsingNamespaceContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.USING, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_usingNamespace; }
	// @Override
	public enterRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.enterUsingNamespace) {
			listener.enterUsingNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: SatisfactoryHeaderParserListener): void {
		if (listener.exitUsingNamespace) {
			listener.exitUsingNamespace(this);
		}
	}
}


export class UclassMacroContext extends ParserRuleContext {
	public UCLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UCLASS, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_uclassMacro; }
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
	public UENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UENUM, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_uenumMacro; }
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
	public UFUNCTION(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UFUNCTION, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.FORCEINLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_ufunctionMacro; }
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
	public UINTERFACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UINTERFACE, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_uinterfaceMacro; }
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
	public UMETA(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UMETA, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_umetaMacro; }
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
	public UPARAM(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UPARAM, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_uParamMacro; }
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
	public UPROPERTY(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UPROPERTY, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_upropertyMacro; }
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
	public USTRUCT(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.USTRUCT, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_ustructMacro; }
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
	public UE_DEPRECATED(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.UE_DEPRECATED, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_uedeprecatedMacro; }
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
	public SF_GENERATED_BODY(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.SF_GENERATED_BODY, 0); }
	public macroPropertyList(): MacroPropertyListContext {
		return this.getRuleContext(0, MacroPropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_generatedBodyMacro; }
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
	public OPEN_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.CLOSE_PAREN, 0); }
	public macroPropertyListEntries(): MacroPropertyListEntriesContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyListEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_macroPropertyList; }
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
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParser.COMMA, 0); }
	public macroPropertyListEntries(): MacroPropertyListEntriesContext | undefined {
		return this.tryGetRuleContext(0, MacroPropertyListEntriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_macroPropertyListEntries; }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_macroProperty; }
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
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParser.EQUALS, 0); }
	public macroProperty(): MacroPropertyContext {
		return this.getRuleContext(0, MacroPropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParser.RULE_macroPropertyPair; }
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


