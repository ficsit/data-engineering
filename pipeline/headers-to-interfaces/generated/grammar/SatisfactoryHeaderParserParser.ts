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
	public static readonly PREPROCESSOR = 64;
	public static readonly LINE_COMMENT_START = 65;
	public static readonly BLOCK_COMMENT_START = 66;
	public static readonly WHITESPACE = 67;
	public static readonly LINE_COMMENT_END = 68;
	public static readonly LINE_COMMENT_TEXT = 69;
	public static readonly LINE_COMMENT_OTHER = 70;
	public static readonly BLOCK_COMMENT_END = 71;
	public static readonly BLOCK_COMMENT_NEW_LINE = 72;
	public static readonly BLOCK_COMMENT_TEXT = 73;
	public static readonly BLOCK_COMMENT_OTHER = 74;
	public static readonly PREPROCESSOR_MACRO_SKIPPED_NEWLINE = 75;
	public static readonly PREPROCESSOR_MACRO_NEWLINE = 76;
	public static readonly PREPROCESSOR_MACRO_OTHER = 77;
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
	public static readonly RULE_nestedClass = 37;
	public static readonly RULE_nestedStruct = 38;
	public static readonly RULE_enumDeclaration = 39;
	public static readonly RULE_enumHeader = 40;
	public static readonly RULE_enumBody = 41;
	public static readonly RULE_enumEntry = 42;
	public static readonly RULE_enumValue = 43;
	public static readonly RULE_staticFunctionDeclaration = 44;
	public static readonly RULE_staticPropertyDeclaration = 45;
	public static readonly RULE_staticInlineFunctionDeclaration = 46;
	public static readonly RULE_staticMethodCall = 47;
	public static readonly RULE_typedef = 48;
	public static readonly RULE_contentWithNestedParens = 49;
	public static readonly RULE_contentWithNestedParensInner = 50;
	public static readonly RULE_contentWithNestedBraces = 51;
	public static readonly RULE_contentWithNestedBracesInner = 52;
	public static readonly RULE_contentWithNestedAngles = 53;
	public static readonly RULE_contentWithNestedAnglesInner = 54;
	public static readonly RULE_contentWithNestedSquares = 55;
	public static readonly RULE_contentWithNestedSquaresInner = 56;
	public static readonly RULE_functionName = 57;
	public static readonly RULE_functionModifier = 58;
	public static readonly RULE_namespaceDeclaration = 59;
	public static readonly RULE_usingNamespace = 60;
	public static readonly RULE_uclassMacro = 61;
	public static readonly RULE_uenumMacro = 62;
	public static readonly RULE_ufunctionMacro = 63;
	public static readonly RULE_uinterfaceMacro = 64;
	public static readonly RULE_umetaMacro = 65;
	public static readonly RULE_uParamMacro = 66;
	public static readonly RULE_upropertyMacro = 67;
	public static readonly RULE_ustructMacro = 68;
	public static readonly RULE_uedeprecatedMacro = 69;
	public static readonly RULE_generatedBodyMacro = 70;
	public static readonly RULE_macroPropertyList = 71;
	public static readonly RULE_macroPropertyListEntries = 72;
	public static readonly RULE_macroProperty = 73;
	public static readonly RULE_macroPropertyPair = 74;
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
		"classPropertyArraySize", "nestedEnum", "nestedClass", "nestedStruct", 
		"enumDeclaration", "enumHeader", "enumBody", "enumEntry", "enumValue", 
		"staticFunctionDeclaration", "staticPropertyDeclaration", "staticInlineFunctionDeclaration", 
		"staticMethodCall", "typedef", "contentWithNestedParens", "contentWithNestedParensInner", 
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
		"';'", "'\\'", "'*'", "'~'", undefined, undefined, undefined, undefined, 
		"'#'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'\\n'", "'\n'",
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
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER", "PREPROCESSOR_MACRO_SKIPPED_NEWLINE", 
		"PREPROCESSOR_MACRO_NEWLINE", "PREPROCESSOR_MACRO_OTHER",
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
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.NAMESPACE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.USING) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (SatisfactoryHeaderParserParser.SEMICOLON - 56)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 56)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 56)))) !== 0)) {
				{
				{
				this.state = 150;
				this.element();
				}
				}
				this.state = 155;
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
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.namespaceDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 159;
				this.staticMethodCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 160;
				this.staticFunctionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 161;
				this.staticInlineFunctionDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 162;
				this.staticPropertyDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 163;
				this.typedef();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 164;
				this.usingNamespace();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 165;
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
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
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
				this.state = 169;
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
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
				this.numericLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 174;
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
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
				this.state = 179;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 180;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 181;
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
			this.state = 184;
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
			this.state = 186;
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
			this.state = 188;
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
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.UPARAM))) !== 0)) {
				{
				{
				this.state = 190;
				this.typeModifier();
				}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 196;
			this.identifier();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 197;
				this.templateType();
				}
			}

			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.AMPERSAND || _la === SatisfactoryHeaderParserParser.STAR) {
				{
				this.state = 200;
				this.typeReferenceType();
				}
			}

			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CONSTEXPR) {
				{
				this.state = 203;
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
			this.state = 206;
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
		this.enterRule(_localctx, 20, SatisfactoryHeaderParserParser.RULE_typeModifier);
		try {
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 209;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.CONSTEXPR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 210;
				this.match(SatisfactoryHeaderParserParser.CONSTEXPR);
				}
				break;
			case SatisfactoryHeaderParserParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 211;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				}
				break;
			case SatisfactoryHeaderParserParser.STRUCT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 212;
				this.match(SatisfactoryHeaderParserParser.STRUCT);
				}
				break;
			case SatisfactoryHeaderParserParser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 213;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParserParser.MUTABLE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 214;
				this.match(SatisfactoryHeaderParserParser.MUTABLE);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 215;
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
			this.state = 218;
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
		this.enterRule(_localctx, 24, SatisfactoryHeaderParserParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.classHeader();
			this.state = 221;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 222;
			this.classBody();
			this.state = 223;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 224;
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
		this.enterRule(_localctx, 26, SatisfactoryHeaderParserParser.RULE_classHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0)) {
				{
				this.state = 227;
				this.classMacro();
				}
			}

			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.TEMPLATE) {
				{
				this.state = 230;
				this.templateDeclaration();
				}
			}

			this.state = 233;
			this.classKeyword();
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 234;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 237;
			this.identifier();
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 238;
				this.contentWithNestedAngles();
				}
			}

			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 241;
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
		this.enterRule(_localctx, 28, SatisfactoryHeaderParserParser.RULE_classMacro);
		try {
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.UCLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.uclassMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.UINTERFACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.uinterfaceMacro();
				}
				break;
			case SatisfactoryHeaderParserParser.USTRUCT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
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
		this.enterRule(_localctx, 30, SatisfactoryHeaderParserParser.RULE_templateDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(SatisfactoryHeaderParserParser.TEMPLATE);
			this.state = 250;
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
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_classKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
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
			this.state = 254;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 255;
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
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this.classExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.classExtension();
				this.state = 259;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 260;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC))) !== 0)) {
				{
				this.state = 264;
				this.classVisibilityModifier();
				}
			}

			this.state = 267;
			this.identifier();
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 268;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 271;
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
			this.state = 274;
			this.classEntry();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)))) !== 0)) {
				{
				this.state = 275;
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
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				this.friendDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 281;
				this.classProperty();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 282;
				this.statDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 283;
				this.nestedEnum();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 284;
				this.nestedClass();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 285;
				this.nestedStruct();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 286;
				this.typedef();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 287;
				this.generatedBodyMacro();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 288;
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
			this.state = 291;
			this.classVisibilityModifier();
			this.state = 292;
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
			this.state = 294;
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
			this.state = 296;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CLASS || _la === SatisfactoryHeaderParserParser.STRUCT) {
				{
				this.state = 297;
				this.classKeyword();
				}
			}

			this.state = 300;
			this.identifier();
			this.state = 301;
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
			this.state = 303;
			this.match(SatisfactoryHeaderParserParser.STAT);
			this.state = 304;
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
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UE_DEPRECATED) {
				{
				this.state = 306;
				this.uedeprecatedMacro();
				}
			}

			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.ufunctionMacro();
				}
				break;
			}
			this.state = 315;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 312;
					this.functionModifier();
					}
					}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 318;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 321;
			this.functionName();
			this.state = 322;
			this.contentWithNestedParens();
			this.state = 326;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 323;
					this.classMethodResultModifier();
					}
					}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 329;
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
			this.state = 348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
			case SatisfactoryHeaderParserParser.CONST:
			case SatisfactoryHeaderParserParser.CONSTEXPR:
			case SatisfactoryHeaderParserParser.ENUM:
			case SatisfactoryHeaderParserParser.FORCEINLINE:
			case SatisfactoryHeaderParserParser.FRIEND:
			case SatisfactoryHeaderParserParser.INLINE:
			case SatisfactoryHeaderParserParser.MUTABLE:
			case SatisfactoryHeaderParserParser.OPERATOR:
			case SatisfactoryHeaderParserParser.PRIVATE:
			case SatisfactoryHeaderParserParser.PROTECTED:
			case SatisfactoryHeaderParserParser.PUBLIC:
			case SatisfactoryHeaderParserParser.STATIC:
			case SatisfactoryHeaderParserParser.STRUCT:
			case SatisfactoryHeaderParserParser.TEMPLATE:
			case SatisfactoryHeaderParserParser.TYPEDEF:
			case SatisfactoryHeaderParserParser.VIRTUAL:
			case SatisfactoryHeaderParserParser.UFUNCTION:
			case SatisfactoryHeaderParserParser.UPARAM:
			case SatisfactoryHeaderParserParser.UPROPERTY:
			case SatisfactoryHeaderParserParser.UE_DEPRECATED:
			case SatisfactoryHeaderParserParser.STAT:
			case SatisfactoryHeaderParserParser.SF_GENERATED_BODY:
			case SatisfactoryHeaderParserParser.CLOSE_BRACE:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.TILDE:
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 332;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 331;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				this.contentWithNestedBraces();
				this.state = 336;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 335;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.COLON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 338;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 339;
				this.classInitializerList();
				this.state = 340;
				this.contentWithNestedBraces();
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.match(SatisfactoryHeaderParserParser.SEMICOLON);
					}
					break;
				}
				}
				break;
			case SatisfactoryHeaderParserParser.EQUALS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 344;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 345;
				this.numericLiteral();
				this.state = 346;
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_classMethodResultModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
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
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 352;
				this.classInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 353;
				this.classInitializer();
				this.state = 354;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 355;
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
			this.state = 359;
			this.identifier();
			this.state = 360;
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
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 362;
				this.upropertyMacro();
				}
			}

			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 368;
			this.identifier();
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_SQUARE) {
				{
				this.state = 369;
				this.contentWithNestedSquares();
				}
			}

			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON || _la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 372;
				this.classPropertyDefaultValue();
				}
			}

			this.state = 375;
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
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 377;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 378;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 379;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 380;
				this.literalExpression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 381;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 382;
				this.identifier();
				this.state = 383;
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
		this.enterRecursionRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_literalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.FALSE:
			case SatisfactoryHeaderParserParser.TRUE:
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				{
				this.state = 388;
				this.literal();
				}
				break;
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				{
				this.state = 389;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 406;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 404;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParserParser.RULE_literalExpression);
						this.state = 392;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 393;
						this.match(SatisfactoryHeaderParserParser.PLUS);
						this.state = 394;
						this.literalExpression(5);
						}
						break;

					case 2:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParserParser.RULE_literalExpression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 396;
						this.match(SatisfactoryHeaderParserParser.MINUS);
						this.state = 397;
						this.literalExpression(4);
						}
						break;

					case 3:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParserParser.RULE_literalExpression);
						this.state = 398;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 399;
						this.match(SatisfactoryHeaderParserParser.STAR);
						this.state = 400;
						this.literalExpression(3);
						}
						break;

					case 4:
						{
						_localctx = new LiteralExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SatisfactoryHeaderParserParser.RULE_literalExpression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 402;
						this.match(SatisfactoryHeaderParserParser.BACKSLASH);
						this.state = 403;
						this.literalExpression(2);
						}
						break;
					}
					}
				}
				this.state = 408;
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
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_classPropertyArraySize);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
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
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_nestedEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(SatisfactoryHeaderParserParser.ENUM);
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.IDENTIFIER) {
				{
				this.state = 414;
				this.identifier();
				}
			}

			this.state = 417;
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
		this.enterRule(_localctx, 74, SatisfactoryHeaderParserParser.RULE_nestedClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 420;
			this.identifier();
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 421;
				this.classInheritance();
				}
			}

			this.state = 424;
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
		this.enterRule(_localctx, 76, SatisfactoryHeaderParserParser.RULE_nestedStruct);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(SatisfactoryHeaderParserParser.STRUCT);
			this.state = 427;
			this.identifier();
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 428;
				this.classInheritance();
				}
			}

			this.state = 431;
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
		this.enterRule(_localctx, 78, SatisfactoryHeaderParserParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.enumHeader();
			this.state = 434;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 435;
			this.enumBody();
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COMMA) {
				{
				this.state = 436;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				}
			}

			this.state = 439;
			this.match(SatisfactoryHeaderParserParser.CLOSE_BRACE);
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 440;
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
		this.enterRule(_localctx, 80, SatisfactoryHeaderParserParser.RULE_enumHeader);
		let _la: number;
		try {
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 443;
					this.uenumMacro();
					}
				}

				this.state = 446;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 447;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 450;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.UENUM) {
					{
					this.state = 451;
					this.uenumMacro();
					}
				}

				this.state = 454;
				this.match(SatisfactoryHeaderParserParser.ENUM);
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.CLASS) {
					{
					this.state = 455;
					this.match(SatisfactoryHeaderParserParser.CLASS);
					}
				}

				this.state = 458;
				this.identifier();
				this.state = 459;
				this.match(SatisfactoryHeaderParserParser.COLON);
				this.state = 460;
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
		this.enterRule(_localctx, 82, SatisfactoryHeaderParserParser.RULE_enumBody);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 464;
				this.enumEntry();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 465;
				this.enumEntry();
				this.state = 466;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 467;
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
		this.enterRule(_localctx, 84, SatisfactoryHeaderParserParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.identifier();
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.EQUALS) {
				{
				this.state = 472;
				this.enumValue();
				}
			}

			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UMETA) {
				{
				this.state = 475;
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
		this.enterRule(_localctx, 86, SatisfactoryHeaderParserParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 479;
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
		this.enterRule(_localctx, 88, SatisfactoryHeaderParserParser.RULE_staticFunctionDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 481;
					this.functionModifier();
					}
					}
				}
				this.state = 486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 487;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 490;
			this.functionName();
			this.state = 491;
			this.contentWithNestedParens();
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 492;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			}
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_BRACE) {
				{
				this.state = 495;
				this.contentWithNestedBraces();
				}
			}

			this.state = 499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 498;
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
		this.enterRule(_localctx, 90, SatisfactoryHeaderParserParser.RULE_staticPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.match(SatisfactoryHeaderParserParser.STATIC);
			this.state = 502;
			this.typeDeclaration();
			this.state = 503;
			this.identifier();
			this.state = 504;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 505;
			this.literal();
			this.state = 506;
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
	public staticInlineFunctionDeclaration(): StaticInlineFunctionDeclarationContext {
		let _localctx: StaticInlineFunctionDeclarationContext = new StaticInlineFunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SatisfactoryHeaderParserParser.RULE_staticInlineFunctionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.match(SatisfactoryHeaderParserParser.FORCEINLINE);
			this.state = 509;
			this.typeDeclaration();
			this.state = 510;
			this.identifier();
			this.state = 511;
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
		this.enterRule(_localctx, 94, SatisfactoryHeaderParserParser.RULE_staticMethodCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.identifier();
			this.state = 514;
			this.contentWithNestedParens();
			this.state = 515;
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
		this.enterRule(_localctx, 96, SatisfactoryHeaderParserParser.RULE_typedef);
		let _la: number;
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.TYPEDEF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 517;
				this.match(SatisfactoryHeaderParserParser.TYPEDEF);
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.TYPENAME) {
					{
					this.state = 518;
					this.match(SatisfactoryHeaderParserParser.TYPENAME);
					}
				}

				this.state = 521;
				this.typeDeclaration();
				this.state = 522;
				this.identifier();
				this.state = 523;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				this.state = 526;
				this.identifier();
				this.state = 527;
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
		this.enterRule(_localctx, 98, SatisfactoryHeaderParserParser.RULE_contentWithNestedParens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.NAMESPACE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.TYPENAME) | (1 << SatisfactoryHeaderParserParser.USING) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 532;
				this.contentWithNestedParensInner();
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 538;
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
		this.enterRule(_localctx, 100, SatisfactoryHeaderParserParser.RULE_contentWithNestedParensInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 546;
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
			case SatisfactoryHeaderParserParser.NAMESPACE:
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
			case SatisfactoryHeaderParserParser.TYPENAME:
			case SatisfactoryHeaderParserParser.USING:
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
			case SatisfactoryHeaderParserParser.PERCENT:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.SLASH:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.TILDE:
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
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 541;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 540;
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
					this.state = 543;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 545;
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
		this.enterRule(_localctx, 102, SatisfactoryHeaderParserParser.RULE_contentWithNestedBraces);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.NAMESPACE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.TYPENAME) | (1 << SatisfactoryHeaderParserParser.USING) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 549;
				this.contentWithNestedBracesInner();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
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
		this.enterRule(_localctx, 104, SatisfactoryHeaderParserParser.RULE_contentWithNestedBracesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 563;
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
			case SatisfactoryHeaderParserParser.NAMESPACE:
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
			case SatisfactoryHeaderParserParser.TYPENAME:
			case SatisfactoryHeaderParserParser.USING:
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
			case SatisfactoryHeaderParserParser.PERCENT:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.SLASH:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.TILDE:
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
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 557;
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
					this.state = 560;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
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
		this.enterRule(_localctx, 106, SatisfactoryHeaderParserParser.RULE_contentWithNestedAngles);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.NAMESPACE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.TYPENAME) | (1 << SatisfactoryHeaderParserParser.USING) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 566;
				this.contentWithNestedAnglesInner();
				}
				}
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 572;
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
		this.enterRule(_localctx, 108, SatisfactoryHeaderParserParser.RULE_contentWithNestedAnglesInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 580;
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
			case SatisfactoryHeaderParserParser.NAMESPACE:
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
			case SatisfactoryHeaderParserParser.TYPENAME:
			case SatisfactoryHeaderParserParser.USING:
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
			case SatisfactoryHeaderParserParser.PERCENT:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.SLASH:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.TILDE:
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
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 575;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 574;
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
					this.state = 577;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
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
		this.enterRule(_localctx, 110, SatisfactoryHeaderParserParser.RULE_contentWithNestedSquares);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.CONSTEXPR) | (1 << SatisfactoryHeaderParserParser.ENUM) | (1 << SatisfactoryHeaderParserParser.FALSE) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.INLINE) | (1 << SatisfactoryHeaderParserParser.MUTABLE) | (1 << SatisfactoryHeaderParserParser.NAMESPACE) | (1 << SatisfactoryHeaderParserParser.OPERATOR) | (1 << SatisfactoryHeaderParserParser.OVERRIDE) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.STRUCT) | (1 << SatisfactoryHeaderParserParser.TEMPLATE) | (1 << SatisfactoryHeaderParserParser.TRUE) | (1 << SatisfactoryHeaderParserParser.TYPEDEF) | (1 << SatisfactoryHeaderParserParser.TYPENAME) | (1 << SatisfactoryHeaderParserParser.USING) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UCLASS) | (1 << SatisfactoryHeaderParserParser.UENUM) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UINTERFACE) | (1 << SatisfactoryHeaderParserParser.UMETA) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.USTRUCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SatisfactoryHeaderParserParser.UE_DEPRECATED - 32)) | (1 << (SatisfactoryHeaderParserParser.STAT - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_CLASS_TAG - 32)) | (1 << (SatisfactoryHeaderParserParser.SF_GENERATED_BODY - 32)) | (1 << (SatisfactoryHeaderParserParser.AMPERSAND - 32)) | (1 << (SatisfactoryHeaderParserParser.BACKSLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.BANG - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.CLOSE_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.COLON - 32)) | (1 << (SatisfactoryHeaderParserParser.COMMA - 32)) | (1 << (SatisfactoryHeaderParserParser.EQUALS - 32)) | (1 << (SatisfactoryHeaderParserParser.MINUS - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_ANGLE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_BRACE - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 32)) | (1 << (SatisfactoryHeaderParserParser.OPEN_SQUARE - 32)) | (1 << (SatisfactoryHeaderParserParser.PERCENT - 32)) | (1 << (SatisfactoryHeaderParserParser.PERIOD - 32)) | (1 << (SatisfactoryHeaderParserParser.PIPE - 32)) | (1 << (SatisfactoryHeaderParserParser.PLUS - 32)) | (1 << (SatisfactoryHeaderParserParser.QUESTION - 32)) | (1 << (SatisfactoryHeaderParserParser.SEMICOLON - 32)) | (1 << (SatisfactoryHeaderParserParser.SLASH - 32)) | (1 << (SatisfactoryHeaderParserParser.STAR - 32)) | (1 << (SatisfactoryHeaderParserParser.TILDE - 32)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 32)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 32)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SatisfactoryHeaderParserParser.PREPROCESSOR - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_START - 64)) | (1 << (SatisfactoryHeaderParserParser.WHITESPACE - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.LINE_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_END - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_NEW_LINE - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_TEXT - 64)) | (1 << (SatisfactoryHeaderParserParser.BLOCK_COMMENT_OTHER - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE - 64)) | (1 << (SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER - 64)))) !== 0)) {
				{
				{
				this.state = 583;
				this.contentWithNestedSquaresInner();
				}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 589;
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
	public contentWithNestedSquaresInner(): ContentWithNestedSquaresInnerContext {
		let _localctx: ContentWithNestedSquaresInnerContext = new ContentWithNestedSquaresInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SatisfactoryHeaderParserParser.RULE_contentWithNestedSquaresInner);
		let _la: number;
		try {
			let _alt: number;
			this.state = 597;
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
			case SatisfactoryHeaderParserParser.NAMESPACE:
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
			case SatisfactoryHeaderParserParser.TYPENAME:
			case SatisfactoryHeaderParserParser.USING:
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
			case SatisfactoryHeaderParserParser.CLOSE_PAREN:
			case SatisfactoryHeaderParserParser.COLON:
			case SatisfactoryHeaderParserParser.COMMA:
			case SatisfactoryHeaderParserParser.EQUALS:
			case SatisfactoryHeaderParserParser.MINUS:
			case SatisfactoryHeaderParserParser.OPEN_ANGLE:
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
			case SatisfactoryHeaderParserParser.OPEN_PAREN:
			case SatisfactoryHeaderParserParser.PERCENT:
			case SatisfactoryHeaderParserParser.PERIOD:
			case SatisfactoryHeaderParserParser.PIPE:
			case SatisfactoryHeaderParserParser.PLUS:
			case SatisfactoryHeaderParserParser.QUESTION:
			case SatisfactoryHeaderParserParser.SEMICOLON:
			case SatisfactoryHeaderParserParser.SLASH:
			case SatisfactoryHeaderParserParser.STAR:
			case SatisfactoryHeaderParserParser.TILDE:
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
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_SKIPPED_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_NEWLINE:
			case SatisfactoryHeaderParserParser.PREPROCESSOR_MACRO_OTHER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 592;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 591;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.CLOSE_SQUARE || _la === SatisfactoryHeaderParserParser.OPEN_SQUARE)) {
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
					this.state = 594;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_SQUARE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 596;
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
		this.enterRule(_localctx, 114, SatisfactoryHeaderParserParser.RULE_functionName);
		let _la: number;
		try {
			this.state = 634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.TILDE) {
					{
					this.state = 599;
					this.match(SatisfactoryHeaderParserParser.TILDE);
					}
				}

				this.state = 602;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 603;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 604;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 605;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 606;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 607;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 608;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 609;
				this.match(SatisfactoryHeaderParserParser.BANG);
				this.state = 610;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 611;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 612;
				this.match(SatisfactoryHeaderParserParser.PLUS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 613;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 614;
				this.match(SatisfactoryHeaderParserParser.MINUS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 615;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 616;
				this.match(SatisfactoryHeaderParserParser.OPEN_SQUARE);
				this.state = 617;
				this.match(SatisfactoryHeaderParserParser.CLOSE_SQUARE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 618;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 619;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 620;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 621;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				this.state = 622;
				this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 623;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 624;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 625;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 626;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				this.state = 627;
				this.match(SatisfactoryHeaderParserParser.CLOSE_ANGLE);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 628;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 629;
				this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
				this.state = 630;
				this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 631;
				this.match(SatisfactoryHeaderParserParser.OPERATOR);
				this.state = 632;
				this.match(SatisfactoryHeaderParserParser.MINUS);
				this.state = 633;
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
		this.enterRule(_localctx, 116, SatisfactoryHeaderParserParser.RULE_functionModifier);
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STATIC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 636;
				this.match(SatisfactoryHeaderParserParser.STATIC);
				}
				break;
			case SatisfactoryHeaderParserParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 637;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
				break;
			case SatisfactoryHeaderParserParser.CONSTEXPR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 638;
				this.match(SatisfactoryHeaderParserParser.CONSTEXPR);
				}
				break;
			case SatisfactoryHeaderParserParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 639;
				this.match(SatisfactoryHeaderParserParser.VIRTUAL);
				}
				break;
			case SatisfactoryHeaderParserParser.FORCEINLINE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 640;
				this.match(SatisfactoryHeaderParserParser.FORCEINLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.INLINE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 641;
				this.match(SatisfactoryHeaderParserParser.INLINE);
				}
				break;
			case SatisfactoryHeaderParserParser.FRIEND:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 642;
				this.match(SatisfactoryHeaderParserParser.FRIEND);
				}
				break;
			case SatisfactoryHeaderParserParser.TEMPLATE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 643;
				this.match(SatisfactoryHeaderParserParser.TEMPLATE);
				this.state = 644;
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
		this.enterRule(_localctx, 118, SatisfactoryHeaderParserParser.RULE_namespaceDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(SatisfactoryHeaderParserParser.NAMESPACE);
			this.state = 648;
			this.identifier();
			this.state = 649;
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
		this.enterRule(_localctx, 120, SatisfactoryHeaderParserParser.RULE_usingNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(SatisfactoryHeaderParserParser.USING);
			this.state = 652;
			this.identifier();
			this.state = 653;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 654;
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
		this.enterRule(_localctx, 122, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 657;
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
		this.enterRule(_localctx, 124, SatisfactoryHeaderParserParser.RULE_uenumMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.match(SatisfactoryHeaderParserParser.UENUM);
			this.state = 660;
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
		this.enterRule(_localctx, 126, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.FORCEINLINE) {
				{
				this.state = 662;
				this.match(SatisfactoryHeaderParserParser.FORCEINLINE);
				}
			}

			this.state = 665;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 666;
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
		this.enterRule(_localctx, 128, SatisfactoryHeaderParserParser.RULE_uinterfaceMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.match(SatisfactoryHeaderParserParser.UINTERFACE);
			this.state = 669;
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
		this.enterRule(_localctx, 130, SatisfactoryHeaderParserParser.RULE_umetaMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			this.match(SatisfactoryHeaderParserParser.UMETA);
			this.state = 672;
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
		this.enterRule(_localctx, 132, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 674;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 675;
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
		this.enterRule(_localctx, 134, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 678;
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
		this.enterRule(_localctx, 136, SatisfactoryHeaderParserParser.RULE_ustructMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(SatisfactoryHeaderParserParser.USTRUCT);
			this.state = 681;
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
		this.enterRule(_localctx, 138, SatisfactoryHeaderParserParser.RULE_uedeprecatedMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(SatisfactoryHeaderParserParser.UE_DEPRECATED);
			this.state = 684;
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
		this.enterRule(_localctx, 140, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 687;
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
		this.enterRule(_localctx, 142, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 49)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 49)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 49)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 49)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 49)))) !== 0)) {
				{
				this.state = 690;
				this.macroPropertyListEntries();
				}
			}

			this.state = 693;
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
		this.enterRule(_localctx, 144, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 695;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.macroProperty();
				this.state = 697;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SatisfactoryHeaderParserParser.FALSE || _la === SatisfactoryHeaderParserParser.TRUE || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (SatisfactoryHeaderParserParser.OPEN_PAREN - 49)) | (1 << (SatisfactoryHeaderParserParser.IDENTIFIER - 49)) | (1 << (SatisfactoryHeaderParserParser.STRING_LITERAL - 49)) | (1 << (SatisfactoryHeaderParserParser.FLOAT_LITERAL - 49)) | (1 << (SatisfactoryHeaderParserParser.INTEGER_LITERAL - 49)))) !== 0)) {
					{
					this.state = 698;
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
		this.enterRule(_localctx, 146, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 705;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 706;
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
		this.enterRule(_localctx, 148, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.identifier();
			this.state = 710;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 711;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u02CC\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x03\x02\x07\x02\x9A" +
		"\n\x02\f\x02\x0E\x02\x9D\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xA9\n\x03\x03\x04\x03" +
		"\x04\x05\x04\xAD\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\xB2\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB9\n\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x07\n\xC2\n\n\f\n\x0E\n\xC5\v\n\x03\n\x03\n" +
		"\x05\n\xC9\n\n\x03\n\x05\n\xCC\n\n\x03\n\x05\n\xCF\n\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xDB\n\f\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xE4\n\x0E\x03\x0F\x05" +
		"\x0F\xE7\n\x0F\x03\x0F\x05\x0F\xEA\n\x0F\x03\x0F\x03\x0F\x05\x0F\xEE\n" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xF2\n\x0F\x03\x0F\x05\x0F\xF5\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\xFA\n\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u0109\n\x14\x03\x15\x05\x15\u010C\n\x15\x03\x15\x03\x15\x05\x15\u0110" +
		"\n\x15\x03\x16\x05\x16\u0113\n\x16\x03\x17\x03\x17\x05\x17\u0117\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0124\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x05\x1B\u012D\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x05\x1D\u0136\n\x1D\x03\x1D\x05\x1D\u0139\n\x1D" +
		"\x03\x1D\x07\x1D\u013C\n\x1D\f\x1D\x0E\x1D\u013F\v\x1D\x03\x1D\x05\x1D" +
		"\u0142\n\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0147\n\x1D\f\x1D\x0E\x1D" +
		"\u014A\v\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u014F\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u0153\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0159\n\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u015F\n\x1E\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x05 \u0168\n \x03!\x03!\x03!\x03\"\x05\"\u016E\n" +
		"\"\x03\"\x05\"\u0171\n\"\x03\"\x03\"\x05\"\u0175\n\"\x03\"\x05\"\u0178" +
		"\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0184\n" +
		"#\x03$\x03$\x03$\x05$\u0189\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x07$\u0197\n$\f$\x0E$\u019A\v$\x03%\x03%\x05%\u019E" +
		"\n%\x03&\x03&\x05&\u01A2\n&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u01A9\n" +
		"\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u01B0\n(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x05)\u01B8\n)\x03)\x03)\x05)\u01BC\n)\x03*\x05*\u01BF\n*\x03*\x03*\x05" +
		"*\u01C3\n*\x03*\x03*\x05*\u01C7\n*\x03*\x03*\x05*\u01CB\n*\x03*\x03*\x03" +
		"*\x03*\x05*\u01D1\n*\x03+\x03+\x03+\x03+\x03+\x05+\u01D8\n+\x03,\x03," +
		"\x05,\u01DC\n,\x03,\x05,\u01DF\n,\x03-\x03-\x03-\x03.\x07.\u01E5\n.\f" +
		".\x0E.\u01E8\v.\x03.\x05.\u01EB\n.\x03.\x03.\x03.\x05.\u01F0\n.\x03.\x05" +
		".\u01F3\n.\x03.\x05.\u01F6\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030" +
		"\x030\x030\x030\x030\x031\x031\x031\x031\x032\x032\x052\u020A\n2\x032" +
		"\x032\x032\x032\x032\x032\x032\x032\x052\u0214\n2\x033\x033\x073\u0218" +
		"\n3\f3\x0E3\u021B\v3\x033\x033\x034\x064\u0220\n4\r4\x0E4\u0221\x034\x05" +
		"4\u0225\n4\x035\x035\x075\u0229\n5\f5\x0E5\u022C\v5\x035\x035\x036\x06" +
		"6\u0231\n6\r6\x0E6\u0232\x036\x056\u0236\n6\x037\x037\x077\u023A\n7\f" +
		"7\x0E7\u023D\v7\x037\x037\x038\x068\u0242\n8\r8\x0E8\u0243\x038\x058\u0247" +
		"\n8\x039\x039\x079\u024B\n9\f9\x0E9\u024E\v9\x039\x039\x03:\x06:\u0253" +
		"\n:\r:\x0E:\u0254\x03:\x05:\u0258\n:\x03;\x05;\u025B\n;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x03;\x05;\u027D\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05" +
		"<\u0288\n<\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x03" +
		"?\x03@\x03@\x03@\x03A\x05A\u029A\nA\x03A\x03A\x03A\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03" +
		"G\x03H\x03H\x03H\x03I\x03I\x05I\u02B6\nI\x03I\x03I\x03J\x03J\x03J\x03" +
		"J\x05J\u02BE\nJ\x05J\u02C0\nJ\x03K\x03K\x03K\x03K\x05K\u02C6\nK\x03L\x03" +
		"L\x03L\x03L\x03L\x02\x02\x03FM\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x02\f\x03\x02" +
		"@A\x04\x02\x07\x07\x15\x15\x04\x02&&<<\x04\x02\x03\x03\x13\x13\x03\x02" +
		"\x0F\x11\x04\x02\x04\x04\x0E\x0E\x04\x02++33\x04\x02**22\x04\x02))11\x04" +
		"\x02,,44\x02\u0304\x02\x9B\x03\x02\x02\x02\x04\xA8\x03\x02\x02\x02\x06" +
		"\xAC\x03\x02\x02\x02\b\xB1\x03\x02\x02\x02\n\xB8\x03\x02\x02\x02\f\xBA" +
		"\x03\x02\x02\x02\x0E\xBC\x03\x02\x02\x02\x10\xBE\x03\x02\x02\x02\x12\xC3" +
		"\x03\x02\x02\x02\x14\xD0\x03\x02\x02\x02\x16\xDA\x03\x02\x02\x02\x18\xDC" +
		"\x03\x02\x02\x02\x1A\xDE\x03\x02\x02\x02\x1C\xE6\x03\x02\x02\x02\x1E\xF9" +
		"\x03\x02\x02\x02 \xFB\x03\x02\x02\x02\"\xFE\x03\x02\x02\x02$\u0100\x03" +
		"\x02\x02\x02&\u0108\x03\x02\x02\x02(\u010B\x03\x02\x02\x02*\u0112\x03" +
		"\x02\x02\x02,\u0114\x03\x02\x02\x02.\u0123\x03\x02\x02\x020\u0125\x03" +
		"\x02\x02\x022\u0128\x03\x02\x02\x024\u012A\x03\x02\x02\x026\u0131\x03" +
		"\x02\x02\x028\u0135\x03\x02\x02\x02:\u015E\x03\x02\x02\x02<\u0160\x03" +
		"\x02\x02\x02>\u0167\x03\x02\x02\x02@\u0169\x03\x02\x02\x02B\u016D\x03" +
		"\x02\x02\x02D\u0183\x03\x02\x02\x02F\u0188\x03\x02\x02\x02H\u019D\x03" +
		"\x02\x02\x02J\u019F\x03\x02\x02\x02L\u01A5\x03\x02\x02\x02N\u01AC\x03" +
		"\x02\x02\x02P\u01B3\x03\x02\x02\x02R\u01D0\x03\x02\x02\x02T\u01D7\x03" +
		"\x02\x02\x02V\u01D9\x03\x02\x02\x02X\u01E0\x03\x02\x02\x02Z\u01E6\x03" +
		"\x02\x02\x02\\\u01F7\x03\x02\x02\x02^\u01FE\x03\x02\x02\x02`\u0203\x03" +
		"\x02\x02\x02b\u0213\x03\x02\x02\x02d\u0215\x03\x02\x02\x02f\u0224\x03" +
		"\x02\x02\x02h\u0226\x03\x02\x02\x02j\u0235\x03\x02\x02\x02l\u0237\x03" +
		"\x02\x02\x02n\u0246\x03\x02\x02\x02p\u0248\x03\x02\x02\x02r\u0257\x03" +
		"\x02\x02\x02t\u027C\x03\x02\x02\x02v\u0287\x03\x02\x02\x02x\u0289\x03" +
		"\x02\x02\x02z\u028D\x03\x02\x02\x02|\u0292\x03\x02\x02\x02~\u0295\x03" +
		"\x02\x02\x02\x80\u0299\x03\x02\x02\x02\x82\u029E\x03\x02\x02\x02\x84\u02A1" +
		"\x03\x02\x02\x02\x86\u02A4\x03\x02\x02\x02\x88\u02A7\x03\x02\x02\x02\x8A" +
		"\u02AA\x03\x02\x02\x02\x8C\u02AD\x03\x02\x02\x02\x8E\u02B0\x03\x02\x02" +
		"\x02\x90\u02B3\x03\x02\x02\x02\x92\u02BF\x03\x02\x02\x02\x94\u02C5\x03" +
		"\x02\x02\x02\x96\u02C7\x03\x02\x02\x02\x98\x9A\x05\x04\x03\x02\x99\x98" +
		"\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C" +
		"\x03\x02\x02\x02\x9C\x03\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA9" +
		"\x05\x1A\x0E\x02\x9F\xA9\x05P)\x02\xA0\xA9\x05x=\x02\xA1\xA9\x05`1\x02" +
		"\xA2\xA9\x05Z.\x02\xA3\xA9\x05^0\x02\xA4\xA9\x05\\/\x02\xA5\xA9\x05b2" +
		"\x02\xA6\xA9\x05z>\x02\xA7\xA9\x07:\x02\x02\xA8\x9E\x03\x02\x02\x02\xA8" +
		"\x9F\x03\x02\x02\x02\xA8\xA0\x03\x02\x02\x02\xA8\xA1\x03\x02\x02\x02\xA8" +
		"\xA2\x03\x02\x02\x02\xA8\xA3\x03\x02\x02\x02\xA8\xA4\x03\x02\x02\x02\xA8" +
		"\xA5\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7\x03\x02\x02\x02\xA9" +
		"\x05\x03\x02\x02\x02\xAA\xAD\x05\n\x06\x02\xAB\xAD\x05\b\x05\x02\xAC\xAA" +
		"\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\x07\x03\x02\x02\x02\xAE\xB2" +
		"\x05\f\x07\x02\xAF\xB2\x05\x0E\b\x02\xB0\xB2\x05\x10\t\x02\xB1\xAE\x03" +
		"\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\t\x03" +
		"\x02\x02\x02\xB3\xB9\x07>\x02\x02\xB4\xB5\x07>\x02\x02\xB5\xB6\x07-\x02" +
		"\x02\xB6\xB7\x07-\x02\x02\xB7\xB9\x07>\x02\x02\xB8\xB3\x03\x02\x02\x02" +
		"\xB8\xB4\x03\x02\x02\x02\xB9\v\x03\x02\x02\x02\xBA\xBB\x07?\x02\x02\xBB" +
		"\r\x03\x02\x02\x02\xBC\xBD\t\x02\x02\x02\xBD\x0F\x03\x02\x02\x02\xBE\xBF" +
		"\t\x03\x02\x02\xBF\x11\x03\x02\x02\x02\xC0\xC2\x05\x16\f\x02\xC1\xC0\x03" +
		"\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03" +
		"\x02\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC8\x05" +
		"\n\x06\x02\xC7\xC9\x05\x14\v\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xCC\x05\x18\r\x02\xCB\xCA\x03\x02" +
		"\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCF\x07\x05" +
		"\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\x13\x03\x02" +
		"\x02\x02\xD0\xD1\x05l7\x02\xD1\x15\x03\x02\x02\x02\xD2\xDB\x07\x03\x02" +
		"\x02\xD3\xDB\x07\x04\x02\x02\xD4\xDB\x07\x05\x02\x02\xD5\xDB\x07\x06\x02" +
		"\x02\xD6\xDB\x07\x13\x02\x02\xD7\xDB\x07\x12\x02\x02\xD8\xDB\x07\v\x02" +
		"\x02\xD9\xDB\x05\x86D\x02\xDA\xD2\x03\x02\x02\x02\xDA\xD3\x03\x02\x02" +
		"\x02\xDA\xD4\x03\x02\x02\x02\xDA\xD5\x03\x02\x02\x02\xDA\xD6\x03\x02\x02" +
		"\x02\xDA\xD7\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02" +
		"\x02\xDB\x17\x03\x02\x02\x02\xDC\xDD\t\x04\x02\x02\xDD\x19\x03\x02\x02" +
		"\x02\xDE\xDF\x05\x1C\x0F\x02\xDF\xE0\x072\x02\x02\xE0\xE1\x05*\x16\x02" +
		"\xE1\xE3\x07*\x02\x02\xE2\xE4\x07:\x02\x02\xE3\xE2\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\x1B\x03\x02\x02\x02\xE5\xE7\x05\x1E\x10\x02\xE6" +
		"\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8" +
		"\xEA\x05 \x11\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA" +
		"\xEB\x03\x02\x02\x02\xEB\xED\x05\"\x12\x02\xEC\xEE\x07$\x02\x02\xED\xEC" +
		"\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1" +
		"\x05\n\x06\x02\xF0\xF2\x05l7\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02" +
		"\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF5\x05$\x13\x02\xF4\xF3\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\x1D\x03\x02\x02\x02\xF6\xFA\x05|" +
		"?\x02\xF7\xFA\x05\x82B\x02\xF8\xFA\x05\x8AF\x02\xF9\xF6\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\x1F\x03\x02\x02\x02" +
		"\xFB\xFC\x07\x14\x02\x02\xFC\xFD\x05l7\x02\xFD!\x03\x02\x02\x02\xFE\xFF" +
		"\t\x05\x02\x02\xFF#\x03\x02\x02\x02\u0100\u0101\x07-\x02\x02\u0101\u0102" +
		"\x05&\x14\x02\u0102%\x03\x02\x02\x02\u0103\u0109\x05(\x15\x02\u0104\u0105" +
		"\x05(\x15\x02\u0105\u0106\x07.\x02\x02\u0106\u0107\x05&\x14\x02\u0107" +
		"\u0109\x03\x02\x02\x02\u0108\u0103\x03\x02\x02\x02\u0108\u0104\x03\x02" +
		"\x02\x02\u0109\'\x03\x02\x02\x02\u010A\u010C\x052\x1A\x02\u010B\u010A" +
		"\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02" +
		"\u010D\u010F\x05\n\x06\x02\u010E\u0110\x05l7\x02\u010F\u010E\x03\x02\x02" +
		"\x02\u010F\u0110\x03\x02\x02\x02\u0110)\x03\x02\x02\x02\u0111\u0113\x05" +
		",\x17\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113" +
		"+\x03\x02\x02\x02\u0114\u0116\x05.\x18\x02\u0115\u0117\x05,\x17\x02\u0116" +
		"\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117-\x03\x02\x02" +
		"\x02\u0118\u0124\x050\x19\x02\u0119\u0124\x058\x1D\x02\u011A\u0124\x05" +
		"4\x1B\x02\u011B\u0124\x05B\"\x02\u011C\u0124\x056\x1C\x02\u011D\u0124" +
		"\x05J&\x02\u011E\u0124\x05L\'\x02\u011F\u0124\x05N(\x02\u0120\u0124\x05" +
		"b2\x02\u0121\u0124\x05\x8EH\x02\u0122\u0124\x07:\x02\x02\u0123\u0118\x03" +
		"\x02\x02\x02\u0123\u0119\x03\x02\x02\x02\u0123\u011A\x03\x02\x02\x02\u0123" +
		"\u011B\x03\x02\x02\x02\u0123\u011C\x03\x02\x02\x02\u0123\u011D\x03\x02" +
		"\x02\x02\u0123\u011E\x03\x02\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123" +
		"\u0120\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02" +
		"\x02\x02\u0124/\x03\x02\x02\x02\u0125\u0126\x052\x1A\x02\u0126\u0127\x07" +
		"-\x02\x02\u01271\x03\x02\x02\x02\u0128\u0129\t\x06\x02\x02\u01293\x03" +
		"\x02\x02\x02\u012A\u012C\x07\t\x02\x02\u012B\u012D\x05\"\x12\x02\u012C" +
		"\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u012F\x05\n\x06\x02\u012F\u0130\x07:\x02\x02\u01305\x03" +
		"\x02\x02\x02\u0131\u0132\x07#\x02\x02\u0132\u0133\x05d3\x02\u01337\x03" +
		"\x02\x02\x02\u0134\u0136\x05\x8CG\x02\u0135\u0134\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0138\x03\x02\x02\x02\u0137\u0139\x05\x80" +
		"A\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013D" +
		"\x03\x02\x02\x02\u013A\u013C\x05v<\x02\u013B\u013A\x03\x02\x02\x02\u013C" +
		"\u013F\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02" +
		"\x02\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140" +
		"\u0142\x05\x12\n\x02\u0141\u0140\x03\x02\x02\x02\u0141\u0142\x03\x02\x02" +
		"\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x05t;\x02\u0144\u0148\x05" +
		"d3\x02\u0145\u0147\x05<\x1F\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A" +
		"\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
		"\u0149\u014B\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u014C\x05" +
		":\x1E\x02\u014C9\x03\x02\x02\x02\u014D\u014F\x07:\x02\x02\u014E\u014D" +
		"\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u015F\x03\x02\x02\x02" +
		"\u0150\u0152\x05h5\x02\u0151\u0153\x07:\x02\x02\u0152\u0151\x03\x02\x02" +
		"\x02\u0152\u0153\x03\x02\x02\x02\u0153\u015F\x03\x02\x02\x02\u0154\u0155" +
		"\x07-\x02\x02\u0155\u0156\x05> \x02\u0156\u0158\x05h5\x02\u0157\u0159" +
		"\x07:\x02\x02\u0158\u0157\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02" +
		"\u0159\u015F\x03\x02\x02\x02\u015A\u015B\x07/\x02\x02\u015B\u015C\x05" +
		"\x0E\b\x02\u015C\u015D\x07:\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E" +
		"\u014E\x03\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015E\u0154\x03\x02" +
		"\x02\x02\u015E\u015A\x03\x02\x02\x02\u015F;\x03\x02\x02\x02\u0160\u0161" +
		"\t\x07\x02\x02\u0161=\x03\x02\x02\x02\u0162\u0168\x05@!\x02\u0163\u0164" +
		"\x05@!\x02\u0164\u0165\x07.\x02\x02\u0165\u0166\x05> \x02\u0166\u0168" +
		"\x03\x02\x02\x02\u0167\u0162\x03\x02\x02\x02\u0167\u0163\x03\x02\x02\x02" +
		"\u0168?\x03\x02\x02\x02\u0169\u016A\x05\n\x06\x02\u016A\u016B\x05d3\x02" +
		"\u016BA\x03\x02\x02\x02\u016C\u016E\x05\x88E\x02\u016D\u016C\x03\x02\x02" +
		"\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u0171" +
		"\x05\x12\n\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x05\n\x06\x02\u0173\u0175\x05" +
		"p9\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0177" +
		"\x03\x02\x02\x02\u0176\u0178\x05D#\x02\u0177\u0176\x03\x02\x02\x02\u0177" +
		"\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x07:\x02" +
		"\x02\u017AC\x03\x02\x02\x02\u017B\u017C\x07-\x02\x02\u017C\u0184\x05\b" +
		"\x05\x02\u017D\u017E\x07/\x02\x02\u017E\u0184\x05F$\x02\u017F\u0180\x07" +
		"/\x02\x02\u0180\u0181\x05\n\x06\x02\u0181\u0182\x05d3\x02\u0182\u0184" +
		"\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0183\u017D\x03\x02\x02\x02" +
		"\u0183\u017F\x03\x02\x02\x02\u0184E\x03\x02\x02\x02\u0185\u0186\b$\x01" +
		"\x02\u0186\u0189\x05\b\x05\x02\u0187\u0189\x05\n\x06\x02\u0188\u0185\x03" +
		"\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189\u0198\x03\x02\x02\x02\u018A" +
		"\u018B\f\x06\x02\x02\u018B\u018C\x078\x02\x02\u018C\u0197\x05F$\x07\u018D" +
		"\u018E\f\x05\x02\x02\u018E\u018F\x070\x02\x02\u018F\u0197\x05F$\x06\u0190" +
		"\u0191\f\x04\x02\x02\u0191\u0192\x07<\x02\x02\u0192\u0197\x05F$\x05\u0193" +
		"\u0194\f\x03\x02\x02\u0194\u0195\x07\'\x02\x02\u0195\u0197\x05F$\x04\u0196" +
		"\u018A\x03\x02\x02\x02\u0196\u018D\x03\x02\x02\x02\u0196\u0190\x03\x02" +
		"\x02\x02\u0196\u0193\x03\x02\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198" +
		"\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199G\x03\x02\x02" +
		"\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019E\x05\n\x06\x02\u019C\u019E" +
		"\x05\x0E\b\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02" +
		"\u019EI\x03\x02\x02\x02\u019F\u01A1\x07\x06\x02\x02\u01A0\u01A2\x05\n" +
		"\x06\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\u01A4\x05h5\x02\u01A4K\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07\x03\x02\x02\u01A6\u01A8\x05\n\x06\x02\u01A7\u01A9\x05$\x13" +
		"\x02\u01A8\u01A7\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA\u01AB\x05h5\x02\u01ABM\x03\x02\x02\x02\u01AC\u01AD" +
		"\x07\x13\x02\x02\u01AD\u01AF\x05\n\x06\x02\u01AE\u01B0\x05$\x13\x02\u01AF" +
		"\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01B2\x05h5\x02\u01B2O\x03\x02\x02\x02\u01B3\u01B4\x05" +
		"R*\x02\u01B4\u01B5\x072\x02\x02\u01B5\u01B7\x05T+\x02\u01B6\u01B8\x07" +
		".\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01B9\x03\x02\x02\x02\u01B9\u01BB\x07*\x02\x02\u01BA\u01BC\x07:\x02\x02" +
		"\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BCQ\x03\x02" +
		"\x02\x02\u01BD\u01BF\x05~@\x02\u01BE\u01BD\x03\x02\x02\x02\u01BE\u01BF" +
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C2\x07\x06\x02\x02" +
		"\u01C1\u01C3\x07\x03\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C2\u01C3\x03" +
		"\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01D1\x05\n\x06\x02\u01C5" +
		"\u01C7\x05~@\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CA\x07\x06\x02\x02\u01C9\u01CB\x07" +
		"\x03\x02\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01CC\x03\x02\x02\x02\u01CC\u01CD\x05\n\x06\x02\u01CD\u01CE\x07-\x02" +
		"\x02\u01CE\u01CF\x05\x12\n\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01BE" +
		"\x03\x02\x02\x02\u01D0\u01C6\x03\x02\x02\x02\u01D1S\x03\x02\x02\x02\u01D2" +
		"\u01D8\x05V,\x02\u01D3\u01D4\x05V,\x02\u01D4\u01D5\x07.\x02\x02\u01D5" +
		"\u01D6\x05T+\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01D2\x03\x02\x02\x02" +
		"\u01D7\u01D3\x03\x02\x02\x02\u01D8U\x03\x02\x02\x02\u01D9\u01DB\x05\n" +
		"\x06\x02\u01DA\u01DC\x05X-\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01DF\x05\x84C\x02" +
		"\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DFW\x03\x02" +
		"\x02\x02\u01E0\u01E1\x07/\x02\x02\u01E1\u01E2\x05\b\x05\x02\u01E2Y\x03" +
		"\x02\x02\x02\u01E3\u01E5\x05v<\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E8" +
		"\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02" +
		"\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01EB\x05" +
		"\x12\n\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01ED\x05t;\x02\u01ED\u01EF\x05d3\x02\u01EE" +
		"\u01F0\x07\x04\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x05h5\x02\u01F2\u01F1" +
		"\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02" +
		"\u01F4\u01F6\x07:\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03" +
		"\x02\x02\x02\u01F6[\x03\x02\x02\x02\u01F7\u01F8\x07\x12\x02\x02\u01F8" +
		"\u01F9\x05\x12\n\x02\u01F9\u01FA\x05\n\x06\x02\u01FA\u01FB\x07/\x02\x02" +
		"\u01FB\u01FC\x05\b\x05\x02\u01FC\u01FD\x07:\x02\x02\u01FD]\x03\x02\x02" +
		"\x02\u01FE\u01FF\x07\b\x02\x02\u01FF\u0200\x05\x12\n\x02\u0200\u0201\x05" +
		"\n\x06\x02\u0201\u0202\x05d3\x02\u0202_\x03\x02\x02\x02\u0203\u0204\x05" +
		"\n\x06\x02\u0204\u0205\x05d3\x02\u0205\u0206\x07:\x02\x02\u0206a\x03\x02" +
		"\x02\x02\u0207\u0209\x07\x16\x02\x02\u0208\u020A\x07\x17\x02\x02\u0209" +
		"\u0208\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u020B\x03\x02" +
		"\x02\x02\u020B\u020C\x05\x12\n\x02\u020C\u020D\x05\n\x06\x02\u020D\u020E" +
		"\x07:\x02\x02\u020E\u0214\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u020F\u0210\x07\x03\x02\x02\u0210\u0211\x05\n\x06\x02\u0211" +
		"\u0212\x07:\x02\x02\u0212\u0214\x03\x02\x02\x02\u0213\u0207\x03\x02\x02" +
		"\x02\u0213\u020F\x03\x02\x02\x02\u0214c\x03\x02\x02\x02\u0215\u0219\x07" +
		"3\x02\x02\u0216\u0218\x05f4\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B" +
		"\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02" +
		"\u021A\u021C\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021D\x07" +
		"+\x02\x02\u021De\x03\x02\x02\x02\u021E\u0220\n\b\x02\x02\u021F\u021E\x03" +
		"\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221" +
		"\u0222\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223\u0225\x05d3\x02" +
		"\u0224\u021F\x03\x02\x02\x02\u0224\u0223\x03\x02\x02\x02\u0225g\x03\x02" +
		"\x02\x02\u0226\u022A\x072\x02\x02\u0227\u0229\x05j6\x02\u0228\u0227\x03" +
		"\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A" +
		"\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022A\x03\x02" +
		"\x02\x02\u022D\u022E\x07*\x02\x02\u022Ei\x03\x02\x02\x02\u022F\u0231\n" +
		"\t\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0236\x03\x02" +
		"\x02\x02\u0234\u0236\x05h5\x02\u0235\u0230\x03\x02\x02\x02\u0235\u0234" +
		"\x03\x02\x02\x02\u0236k\x03\x02\x02\x02\u0237\u023B\x071\x02\x02\u0238" +
		"\u023A\x05n8\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02" +
		"\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03" +
		"\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u023F\x07)\x02\x02\u023F" +
		"m\x03\x02\x02\x02\u0240\u0242\n\n\x02\x02\u0241\u0240\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03" +
		"\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0247\x05l7\x02\u0246\u0241" +
		"\x03\x02\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247o\x03\x02\x02\x02\u0248" +
		"\u024C\x074\x02\x02\u0249\u024B\x05r:\x02\u024A\u0249\x03\x02\x02\x02" +
		"\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024D\x03" +
		"\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024F" +
		"\u0250\x07,\x02\x02\u0250q\x03\x02\x02\x02\u0251\u0253\n\v\x02\x02\u0252" +
		"\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0252\x03\x02" +
		"\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256" +
		"\u0258\x05p9\x02\u0257\u0252\x03\x02\x02\x02\u0257\u0256\x03\x02\x02\x02" +
		"\u0258s\x03\x02\x02\x02\u0259\u025B\x07=\x02\x02\u025A\u0259\x03\x02\x02" +
		"\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u027D" +
		"\x05\n\x06\x02\u025D\u025E\x07\r\x02\x02\u025E\u027D\x07/\x02\x02\u025F" +
		"\u0260\x07\r\x02\x02\u0260\u0261\x07/\x02\x02\u0261\u027D\x07/\x02\x02" +
		"\u0262\u0263\x07\r\x02\x02\u0263\u0264\x07(\x02\x02\u0264\u027D\x07/\x02" +
		"\x02\u0265\u0266\x07\r\x02\x02\u0266\u027D\x078\x02\x02\u0267\u0268\x07" +
		"\r\x02\x02\u0268\u027D\x070\x02\x02\u0269\u026A\x07\r\x02\x02\u026A\u026B" +
		"\x074\x02\x02\u026B\u027D\x07,\x02\x02\u026C\u026D\x07\r\x02\x02\u026D" +
		"\u027D\x071\x02\x02\u026E\u026F\x07\r\x02\x02\u026F\u0270\x071\x02\x02" +
		"\u0270\u027D\x071\x02\x02\u0271\u0272\x07\r\x02\x02\u0272\u027D\x07)\x02" +
		"\x02\u0273\u0274\x07\r\x02\x02\u0274\u0275\x07)\x02\x02\u0275\u027D\x07" +
		")\x02\x02\u0276\u0277\x07\r\x02\x02\u0277\u0278\x073\x02\x02\u0278\u027D" +
		"\x07+\x02\x02\u0279\u027A\x07\r\x02\x02\u027A\u027B\x070\x02\x02\u027B" +
		"\u027D\x07)\x02\x02\u027C\u025A\x03\x02\x02\x02\u027C\u025D\x03\x02\x02" +
		"\x02\u027C\u025F\x03\x02\x02\x02\u027C\u0262\x03\x02\x02\x02\u027C\u0265" +
		"\x03\x02\x02\x02\u027C\u0267\x03\x02\x02\x02\u027C\u0269\x03\x02\x02\x02" +
		"\u027C\u026C\x03\x02\x02\x02\u027C\u026E\x03\x02\x02\x02\u027C\u0271\x03" +
		"\x02\x02\x02\u027C\u0273\x03\x02\x02\x02\u027C\u0276\x03\x02\x02\x02\u027C" +
		"\u0279\x03\x02\x02\x02\u027Du\x03\x02\x02\x02\u027E\u0288\x07\x12\x02" +
		"\x02\u027F\u0288\x07\x04\x02\x02\u0280\u0288\x07\x05\x02\x02\u0281\u0288" +
		"\x07\x19\x02\x02\u0282\u0288\x07\b\x02\x02\u0283\u0288\x07\n\x02\x02\u0284" +
		"\u0288\x07\t\x02\x02\u0285\u0286\x07\x14\x02\x02\u0286\u0288\x05l7\x02" +
		"\u0287\u027E\x03\x02\x02\x02\u0287\u027F\x03\x02\x02\x02\u0287\u0280\x03" +
		"\x02\x02\x02\u0287\u0281\x03\x02\x02\x02\u0287\u0282\x03\x02\x02\x02\u0287" +
		"\u0283\x03\x02\x02\x02\u0287\u0284\x03\x02\x02\x02\u0287\u0285\x03\x02" +
		"\x02\x02\u0288w\x03\x02\x02\x02\u0289\u028A\x07\f\x02\x02\u028A\u028B" +
		"\x05\n\x06\x02\u028B\u028C\x05h5\x02\u028Cy\x03\x02\x02\x02\u028D\u028E" +
		"\x07\x18\x02\x02\u028E\u028F\x05\n\x06\x02\u028F\u0290\x07/\x02\x02\u0290" +
		"\u0291\x05\n\x06\x02\u0291{\x03\x02\x02\x02\u0292\u0293\x07\x1A\x02\x02" +
		"\u0293\u0294\x05\x90I\x02\u0294}\x03\x02\x02\x02\u0295\u0296\x07\x1B\x02" +
		"\x02\u0296\u0297\x05\x90I\x02\u0297\x7F\x03\x02\x02\x02\u0298\u029A\x07" +
		"\b\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A" +
		"\u029B\x03\x02\x02\x02\u029B\u029C\x07\x1C\x02\x02\u029C\u029D\x05\x90" +
		"I\x02\u029D\x81\x03\x02\x02\x02\u029E\u029F\x07\x1D\x02\x02\u029F\u02A0" +
		"\x05\x90I\x02\u02A0\x83\x03\x02\x02\x02\u02A1\u02A2\x07\x1E\x02\x02\u02A2" +
		"\u02A3\x05\x90I\x02\u02A3\x85\x03\x02\x02\x02\u02A4\u02A5\x07\x1F\x02" +
		"\x02\u02A5\u02A6\x05\x90I\x02\u02A6\x87\x03\x02\x02\x02\u02A7\u02A8\x07" +
		" \x02\x02\u02A8\u02A9\x05\x90I\x02\u02A9\x89\x03\x02\x02\x02\u02AA\u02AB" +
		"\x07!\x02\x02\u02AB\u02AC\x05\x90I\x02\u02AC\x8B\x03\x02\x02\x02\u02AD" +
		"\u02AE\x07\"\x02\x02\u02AE\u02AF\x05\x90I\x02\u02AF\x8D\x03\x02\x02\x02" +
		"\u02B0\u02B1\x07%\x02\x02\u02B1\u02B2\x05\x90I\x02\u02B2\x8F\x03\x02\x02" +
		"\x02\u02B3\u02B5\x073\x02\x02\u02B4\u02B6\x05\x92J\x02\u02B5\u02B4\x03" +
		"\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
		"\u02B8\x07+\x02\x02\u02B8\x91\x03\x02\x02\x02\u02B9\u02C0\x05\x94K\x02" +
		"\u02BA\u02BB\x05\x94K\x02\u02BB\u02BD\x07.\x02\x02\u02BC\u02BE\x05\x92" +
		"J\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0" +
		"\x03\x02\x02\x02\u02BF\u02B9\x03\x02\x02\x02\u02BF\u02BA\x03\x02\x02\x02" +
		"\u02C0\x93\x03\x02\x02\x02\u02C1\u02C6\x05\n\x06\x02\u02C2\u02C6\x05\b" +
		"\x05\x02\u02C3\u02C6\x05\x96L\x02\u02C4\u02C6\x05\x90I\x02\u02C5\u02C1" +
		"\x03\x02\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02" +
		"\u02C5\u02C4\x03\x02\x02\x02\u02C6\x95\x03\x02\x02\x02\u02C7\u02C8\x05" +
		"\n\x06\x02\u02C8\u02C9\x07/\x02\x02\u02C9\u02CA\x05\x94K\x02\u02CA\x97" +
		"\x03\x02\x02\x02U\x9B\xA8\xAC\xB1\xB8\xC3\xC8\xCB\xCE\xDA\xE3\xE6\xE9" +
		"\xED\xF1\xF4\xF9\u0108\u010B\u010F\u0112\u0116\u0123\u012C\u0135\u0138" +
		"\u013D\u0141\u0148\u014E\u0152\u0158\u015E\u0167\u016D\u0170\u0174\u0177" +
		"\u0183\u0188\u0196\u0198\u019D\u01A1\u01A8\u01AF\u01B7\u01BB\u01BE\u01C2" +
		"\u01C6\u01CA\u01D0\u01D7\u01DB\u01DE\u01E6\u01EA\u01EF\u01F2\u01F5\u0209" +
		"\u0213\u0219\u0221\u0224\u022A\u0232\u0235\u023B\u0243\u0246\u024C\u0254" +
		"\u0257\u025A\u027C\u0287\u0299\u02B5\u02BD\u02BF\u02C5";
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
	public namespaceDeclaration(): NamespaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDeclarationContext);
	}
	public staticMethodCall(): StaticMethodCallContext | undefined {
		return this.tryGetRuleContext(0, StaticMethodCallContext);
	}
	public staticFunctionDeclaration(): StaticFunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticFunctionDeclarationContext);
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
	public contentWithNestedAngles(): ContentWithNestedAnglesContext {
		return this.getRuleContext(0, ContentWithNestedAnglesContext);
	}
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
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.ENUM, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STATIC, 0); }
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
	public nestedEnum(): NestedEnumContext | undefined {
		return this.tryGetRuleContext(0, NestedEnumContext);
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
	public classKeyword(): ClassKeywordContext | undefined {
		return this.tryGetRuleContext(0, ClassKeywordContext);
	}
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.MINUS, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.STAR, 0); }
	public BACKSLASH(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.BACKSLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_literalExpression; }
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


export class NestedEnumContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.ENUM, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_nestedEnum; }
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


export class NestedClassContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLASS, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_nestedClass; }
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
	public STRUCT(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.STRUCT, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_nestedStruct; }
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
	public contentWithNestedBraces(): ContentWithNestedBracesContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedBracesContext);
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


export class StaticInlineFunctionDeclarationContext extends ParserRuleContext {
	public FORCEINLINE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_staticInlineFunctionDeclaration; }
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
	public TYPENAME(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.TYPENAME, 0); }
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


export class ContentWithNestedSquaresContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, 0); }
	public CLOSE_SQUARE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedSquares; }
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
			return this.getTokens(SatisfactoryHeaderParserParser.OPEN_SQUARE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.OPEN_SQUARE, i);
		}
	}
	public CLOSE_SQUARE(): TerminalNode[];
	public CLOSE_SQUARE(i: number): TerminalNode;
	public CLOSE_SQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SatisfactoryHeaderParserParser.CLOSE_SQUARE);
		} else {
			return this.getToken(SatisfactoryHeaderParserParser.CLOSE_SQUARE, i);
		}
	}
	public contentWithNestedSquares(): ContentWithNestedSquaresContext | undefined {
		return this.tryGetRuleContext(0, ContentWithNestedSquaresContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_contentWithNestedSquaresInner; }
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
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.TILDE, 0); }
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
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.MINUS, 0); }
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
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CLOSE_PAREN, 0); }
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
	public CONSTEXPR(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONSTEXPR, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.VIRTUAL, 0); }
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
	public INLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.INLINE, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FRIEND, 0); }
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


export class NamespaceDeclarationContext extends ParserRuleContext {
	public NAMESPACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.NAMESPACE, 0); }
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
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_namespaceDeclaration; }
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
	public USING(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.USING, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public EQUALS(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SatisfactoryHeaderParserParser.RULE_usingNamespace; }
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
	public FORCEINLINE(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.FORCEINLINE, 0); }
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


