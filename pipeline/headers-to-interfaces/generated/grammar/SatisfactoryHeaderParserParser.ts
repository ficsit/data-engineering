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
	public static readonly FRIEND = 3;
	public static readonly PRIVATE = 4;
	public static readonly PROTECTED = 5;
	public static readonly PUBLIC = 6;
	public static readonly STATIC = 7;
	public static readonly VIRTUAL = 8;
	public static readonly UCLASS = 9;
	public static readonly UFUNCTION = 10;
	public static readonly UPARAM = 11;
	public static readonly UPROPERTY = 12;
	public static readonly SF_CLASS_TAG = 13;
	public static readonly SF_GENERATED_BODY = 14;
	public static readonly FORCEINLINE = 15;
	public static readonly COLON = 16;
	public static readonly OPEN_PAREN = 17;
	public static readonly CLOSE_PAREN = 18;
	public static readonly OPEN_BRACE = 19;
	public static readonly CLOSE_BRACE = 20;
	public static readonly OPEN_ANGLE = 21;
	public static readonly CLOSE_ANGLE = 22;
	public static readonly COMMA = 23;
	public static readonly PERIOD = 24;
	public static readonly EQUALS = 25;
	public static readonly SEMICOLON = 26;
	public static readonly STAR = 27;
	public static readonly AMPERSAND = 28;
	public static readonly IDENTIFIER = 29;
	public static readonly STRING_LITERAL = 30;
	public static readonly FLOAT_LITERAL = 31;
	public static readonly INTEGER_LITERAL = 32;
	public static readonly PREPROCESSOR = 33;
	public static readonly LINE_COMMENT_START = 34;
	public static readonly BLOCK_COMMENT_START = 35;
	public static readonly WHITESPACE = 36;
	public static readonly LINE_COMMENT_END = 37;
	public static readonly LINE_COMMENT_TEXT = 38;
	public static readonly LINE_COMMENT_OTHER = 39;
	public static readonly BLOCK_COMMENT_END = 40;
	public static readonly BLOCK_COMMENT_NEW_LINE = 41;
	public static readonly BLOCK_COMMENT_TEXT = 42;
	public static readonly BLOCK_COMMENT_OTHER = 43;
	public static readonly RULE_file = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_value = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_identifier = 4;
	public static readonly RULE_stringLiteral = 5;
	public static readonly RULE_numericLiteral = 6;
	public static readonly RULE_typeDeclaration = 7;
	public static readonly RULE_templateType = 8;
	public static readonly RULE_typeModifier = 9;
	public static readonly RULE_typeReferenceType = 10;
	public static readonly RULE_classDeclaration = 11;
	public static readonly RULE_classHeader = 12;
	public static readonly RULE_classInheritance = 13;
	public static readonly RULE_classBody = 14;
	public static readonly RULE_classEntries = 15;
	public static readonly RULE_classEntry = 16;
	public static readonly RULE_classVisibility = 17;
	public static readonly RULE_classVisibilityModifier = 18;
	public static readonly RULE_friendClassDeclaration = 19;
	public static readonly RULE_classMethod = 20;
	public static readonly RULE_classMethodEnd = 21;
	public static readonly RULE_classMethodModifier = 22;
	public static readonly RULE_classMethodParameterList = 23;
	public static readonly RULE_classMethodParameterName = 24;
	public static readonly RULE_classMethodParameter = 25;
	public static readonly RULE_classMethodBody = 26;
	public static readonly RULE_classProperty = 27;
	public static readonly RULE_uclassMacro = 28;
	public static readonly RULE_ufunctionMacro = 29;
	public static readonly RULE_uParamMacro = 30;
	public static readonly RULE_upropertyMacro = 31;
	public static readonly RULE_generatedBodyMacro = 32;
	public static readonly RULE_macroPropertyList = 33;
	public static readonly RULE_macroPropertyListEntries = 34;
	public static readonly RULE_macroProperty = 35;
	public static readonly RULE_macroPropertyPair = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "element", "value", "literal", "identifier", "stringLiteral", 
		"numericLiteral", "typeDeclaration", "templateType", "typeModifier", "typeReferenceType", 
		"classDeclaration", "classHeader", "classInheritance", "classBody", "classEntries", 
		"classEntry", "classVisibility", "classVisibilityModifier", "friendClassDeclaration", 
		"classMethod", "classMethodEnd", "classMethodModifier", "classMethodParameterList", 
		"classMethodParameterName", "classMethodParameter", "classMethodBody", 
		"classProperty", "uclassMacro", "ufunctionMacro", "uParamMacro", "upropertyMacro", 
		"generatedBodyMacro", "macroPropertyList", "macroPropertyListEntries", 
		"macroProperty", "macroPropertyPair",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'friend'", "'private'", "'protected'", 
		"'public'", "'static'", "'virtual'", "'UCLASS'", "'UFUNCTION'", "'UPARAM'", 
		"'UPROPERTY'", "'FACTORYGAME_API'", "'GENERATED_BODY'", "'FORCEINLINE'", 
		"':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", 
		"';'", "'*'", "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "FRIEND", "PRIVATE", "PROTECTED", "PUBLIC", 
		"STATIC", "VIRTUAL", "UCLASS", "UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "IDENTIFIER", "STRING_LITERAL", 
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
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CLASS || _la === SatisfactoryHeaderParserParser.UCLASS) {
				{
				{
				this.state = 74;
				this.element();
				}
				}
				this.state = 79;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.classDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.identifier();
				}
				break;
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
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
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.stringLiteral();
				}
				break;
			case SatisfactoryHeaderParserParser.FLOAT_LITERAL:
			case SatisfactoryHeaderParserParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 87;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SatisfactoryHeaderParserParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(SatisfactoryHeaderParserParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
			this.state = 92;
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
			this.state = 94;
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
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SatisfactoryHeaderParserParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SatisfactoryHeaderParserParser.CLASS || _la === SatisfactoryHeaderParserParser.UPARAM) {
				{
				{
				this.state = 96;
				this.typeModifier();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 102;
			this.identifier();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_ANGLE) {
				{
				this.state = 103;
				this.templateType();
				}
			}

			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.STAR || _la === SatisfactoryHeaderParserParser.AMPERSAND) {
				{
				this.state = 106;
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
		this.enterRule(_localctx, 16, SatisfactoryHeaderParserParser.RULE_templateType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(SatisfactoryHeaderParserParser.OPEN_ANGLE);
			this.state = 110;
			this.typeDeclaration();
			this.state = 111;
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
		this.enterRule(_localctx, 18, SatisfactoryHeaderParserParser.RULE_typeModifier);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.match(SatisfactoryHeaderParserParser.CLASS);
				}
				break;
			case SatisfactoryHeaderParserParser.UPARAM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
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
		this.enterRule(_localctx, 20, SatisfactoryHeaderParserParser.RULE_typeReferenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
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
		this.enterRule(_localctx, 22, SatisfactoryHeaderParserParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.classHeader();
			this.state = 120;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 121;
			this.classBody();
			this.state = 122;
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
	public classHeader(): ClassHeaderContext {
		let _localctx: ClassHeaderContext = new ClassHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SatisfactoryHeaderParserParser.RULE_classHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UCLASS) {
				{
				this.state = 124;
				this.uclassMacro();
				}
			}

			this.state = 127;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_CLASS_TAG) {
				{
				this.state = 128;
				this.match(SatisfactoryHeaderParserParser.SF_CLASS_TAG);
				}
			}

			this.state = 131;
			this.identifier();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.COLON) {
				{
				this.state = 132;
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
		this.enterRule(_localctx, 26, SatisfactoryHeaderParserParser.RULE_classInheritance);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(SatisfactoryHeaderParserParser.COLON);
			this.state = 136;
			this.match(SatisfactoryHeaderParserParser.PUBLIC);
			this.state = 137;
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
		this.enterRule(_localctx, 28, SatisfactoryHeaderParserParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.SF_GENERATED_BODY) {
				{
				this.state = 139;
				this.generatedBodyMacro();
				}
			}

			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.IDENTIFIER))) !== 0)) {
				{
				this.state = 142;
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
		this.enterRule(_localctx, 30, SatisfactoryHeaderParserParser.RULE_classEntries);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.classEntry();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.FRIEND) | (1 << SatisfactoryHeaderParserParser.PRIVATE) | (1 << SatisfactoryHeaderParserParser.PROTECTED) | (1 << SatisfactoryHeaderParserParser.PUBLIC) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.UFUNCTION) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.UPROPERTY) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE) | (1 << SatisfactoryHeaderParserParser.IDENTIFIER))) !== 0)) {
				{
				this.state = 146;
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
		this.enterRule(_localctx, 32, SatisfactoryHeaderParserParser.RULE_classEntry);
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.classVisibility();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				this.classMethod();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 151;
				this.friendClassDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 152;
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
		this.enterRule(_localctx, 34, SatisfactoryHeaderParserParser.RULE_classVisibility);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.classVisibilityModifier();
			this.state = 156;
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
		this.enterRule(_localctx, 36, SatisfactoryHeaderParserParser.RULE_classVisibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
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
		this.enterRule(_localctx, 38, SatisfactoryHeaderParserParser.RULE_friendClassDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(SatisfactoryHeaderParserParser.FRIEND);
			this.state = 161;
			this.match(SatisfactoryHeaderParserParser.CLASS);
			this.state = 162;
			this.identifier();
			this.state = 163;
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
		this.enterRule(_localctx, 40, SatisfactoryHeaderParserParser.RULE_classMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UFUNCTION) {
				{
				this.state = 165;
				this.ufunctionMacro();
				}
			}

			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CONST) | (1 << SatisfactoryHeaderParserParser.STATIC) | (1 << SatisfactoryHeaderParserParser.VIRTUAL) | (1 << SatisfactoryHeaderParserParser.FORCEINLINE))) !== 0)) {
				{
				{
				this.state = 168;
				this.classMethodModifier();
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 177;
			this.identifier();
			this.state = 178;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.CLASS) | (1 << SatisfactoryHeaderParserParser.UPARAM) | (1 << SatisfactoryHeaderParserParser.IDENTIFIER))) !== 0)) {
				{
				this.state = 179;
				this.classMethodParameterList();
				}
			}

			this.state = 182;
			this.match(SatisfactoryHeaderParserParser.CLOSE_PAREN);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.CONST) {
				{
				this.state = 183;
				this.match(SatisfactoryHeaderParserParser.CONST);
				}
			}

			this.state = 186;
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
		this.enterRule(_localctx, 42, SatisfactoryHeaderParserParser.RULE_classMethodEnd);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SatisfactoryHeaderParserParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(SatisfactoryHeaderParserParser.SEMICOLON);
				}
				break;
			case SatisfactoryHeaderParserParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.classMethodBody();
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
		this.enterRule(_localctx, 44, SatisfactoryHeaderParserParser.RULE_classMethodModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
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
	public classMethodParameterList(): ClassMethodParameterListContext {
		let _localctx: ClassMethodParameterListContext = new ClassMethodParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SatisfactoryHeaderParserParser.RULE_classMethodParameterList);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.classMethodParameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.classMethodParameter();
				this.state = 196;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 197;
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
		this.enterRule(_localctx, 48, SatisfactoryHeaderParserParser.RULE_classMethodParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
	public classMethodParameter(): ClassMethodParameterContext {
		let _localctx: ClassMethodParameterContext = new ClassMethodParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SatisfactoryHeaderParserParser.RULE_classMethodParameter);
		try {
			this.state = 211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.typeDeclaration();
				this.state = 204;
				this.classMethodParameterName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.typeDeclaration();
				this.state = 207;
				this.classMethodParameterName();
				this.state = 208;
				this.match(SatisfactoryHeaderParserParser.EQUALS);
				this.state = 209;
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
		this.enterRule(_localctx, 52, SatisfactoryHeaderParserParser.RULE_classMethodBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(SatisfactoryHeaderParserParser.OPEN_BRACE);
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.OPEN_BRACE) {
				{
				this.state = 214;
				this.classMethodBody();
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 217;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === SatisfactoryHeaderParserParser.OPEN_BRACE)) {
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
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 223;
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
		this.enterRule(_localctx, 54, SatisfactoryHeaderParserParser.RULE_classProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SatisfactoryHeaderParserParser.UPROPERTY) {
				{
				this.state = 225;
				this.upropertyMacro();
				}
			}

			this.state = 229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.typeDeclaration();
				}
				break;
			}
			this.state = 231;
			this.identifier();
			this.state = 232;
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
		this.enterRule(_localctx, 56, SatisfactoryHeaderParserParser.RULE_uclassMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(SatisfactoryHeaderParserParser.UCLASS);
			this.state = 235;
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
		this.enterRule(_localctx, 58, SatisfactoryHeaderParserParser.RULE_ufunctionMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(SatisfactoryHeaderParserParser.UFUNCTION);
			this.state = 238;
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
		this.enterRule(_localctx, 60, SatisfactoryHeaderParserParser.RULE_uParamMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(SatisfactoryHeaderParserParser.UPARAM);
			this.state = 241;
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
		this.enterRule(_localctx, 62, SatisfactoryHeaderParserParser.RULE_upropertyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(SatisfactoryHeaderParserParser.UPROPERTY);
			this.state = 244;
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
		this.enterRule(_localctx, 64, SatisfactoryHeaderParserParser.RULE_generatedBodyMacro);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(SatisfactoryHeaderParserParser.SF_GENERATED_BODY);
			this.state = 247;
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
		this.enterRule(_localctx, 66, SatisfactoryHeaderParserParser.RULE_macroPropertyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(SatisfactoryHeaderParserParser.OPEN_PAREN);
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.IDENTIFIER) | (1 << SatisfactoryHeaderParserParser.STRING_LITERAL))) !== 0)) {
				{
				this.state = 250;
				this.macroPropertyListEntries();
				}
			}

			this.state = 253;
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
		this.enterRule(_localctx, 68, SatisfactoryHeaderParserParser.RULE_macroPropertyListEntries);
		let _la: number;
		try {
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.macroProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 256;
				this.macroProperty();
				this.state = 257;
				this.match(SatisfactoryHeaderParserParser.COMMA);
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SatisfactoryHeaderParserParser.OPEN_PAREN) | (1 << SatisfactoryHeaderParserParser.IDENTIFIER) | (1 << SatisfactoryHeaderParserParser.STRING_LITERAL))) !== 0)) {
					{
					this.state = 258;
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
		this.enterRule(_localctx, 70, SatisfactoryHeaderParserParser.RULE_macroProperty);
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 263;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this.stringLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 265;
				this.macroPropertyPair();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 266;
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
		this.enterRule(_localctx, 72, SatisfactoryHeaderParserParser.RULE_macroPropertyPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.identifier();
			this.state = 270;
			this.match(SatisfactoryHeaderParserParser.EQUALS);
			this.state = 271;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\u0114\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02Q\v\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04W\n\x04\x03\x05\x03\x05\x05\x05" +
		"[\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x07\td\n\t\f" +
		"\t\x0E\tg\v\t\x03\t\x03\t\x05\tk\n\t\x03\t\x05\tn\n\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x05\vv\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x05\x0E\x80\n\x0E\x03\x0E\x03\x0E\x05\x0E\x84\n\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\x88\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x05" +
		"\x10\x8F\n\x10\x03\x10\x05\x10\x92\n\x10\x03\x11\x03\x11\x05\x11\x96\n" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x9C\n\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x05\x16\xA9\n\x16\x03\x16\x07\x16\xAC\n\x16\f\x16\x0E\x16\xAF\v\x16\x03" +
		"\x16\x05\x16\xB2\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\xB7\n\x16\x03\x16" +
		"\x03\x16\x05\x16\xBB\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\xC1" +
		"\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
		"\xCA\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x05\x1B\xD6\n\x1B\x03\x1C\x03\x1C\x05\x1C\xDA\n\x1C" +
		"\x03\x1C\x07\x1C\xDD\n\x1C\f\x1C\x0E\x1C\xE0\v\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x05\x1D\xE5\n\x1D\x03\x1D\x05\x1D\xE8\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x05#\xFE\n#\x03#\x03#\x03$\x03$\x03" +
		"$\x03$\x05$\u0106\n$\x05$\u0108\n$\x03%\x03%\x03%\x03%\x05%\u010E\n%\x03" +
		"&\x03&\x03&\x03&\x03&\x03\xDE\x02\x02\'\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02\x02\x07\x03\x02" +
		"!\"\x03\x02\x1D\x1E\x03\x02\x06\b\x05\x02\x04\x04\t\n\x11\x11\x03\x02" +
		"\x15\x15\x02\u0110\x02O\x03\x02\x02\x02\x04R\x03\x02\x02\x02\x06V\x03" +
		"\x02\x02\x02\bZ\x03\x02\x02\x02\n\\\x03\x02\x02\x02\f^\x03\x02\x02\x02" +
		"\x0E`\x03\x02\x02\x02\x10e\x03\x02\x02\x02\x12o\x03\x02\x02\x02\x14u\x03" +
		"\x02\x02\x02\x16w\x03\x02\x02\x02\x18y\x03\x02\x02\x02\x1A\x7F\x03\x02" +
		"\x02\x02\x1C\x89\x03\x02\x02\x02\x1E\x8E\x03\x02\x02\x02 \x93\x03\x02" +
		"\x02\x02\"\x9B\x03\x02\x02\x02$\x9D\x03\x02\x02\x02&\xA0\x03\x02\x02\x02" +
		"(\xA2\x03\x02\x02\x02*\xA8\x03\x02\x02\x02,\xC0\x03\x02\x02\x02.\xC2\x03" +
		"\x02\x02\x020\xC9\x03\x02\x02\x022\xCB\x03\x02\x02\x024\xD5\x03\x02\x02" +
		"\x026\xD7\x03\x02\x02\x028\xE4\x03\x02\x02\x02:\xEC\x03\x02\x02\x02<\xEF" +
		"\x03\x02\x02\x02>\xF2\x03\x02\x02\x02@\xF5\x03\x02\x02\x02B\xF8\x03\x02" +
		"\x02\x02D\xFB\x03\x02\x02\x02F\u0107\x03\x02\x02\x02H\u010D\x03\x02\x02" +
		"\x02J\u010F\x03\x02\x02\x02LN\x05\x04\x03\x02ML\x03\x02\x02\x02NQ\x03" +
		"\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\x03\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02RS\x05\x18\r\x02S\x05\x03\x02\x02\x02TW\x05\n\x06\x02" +
		"UW\x05\b\x05\x02VT\x03\x02\x02\x02VU\x03\x02\x02\x02W\x07\x03\x02\x02" +
		"\x02X[\x05\f\x07\x02Y[\x05\x0E\b\x02ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02" +
		"[\t\x03\x02\x02\x02\\]\x07\x1F\x02\x02]\v\x03\x02\x02\x02^_\x07 \x02\x02" +
		"_\r\x03\x02\x02\x02`a\t\x02\x02\x02a\x0F\x03\x02\x02\x02bd\x05\x14\v\x02" +
		"cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02" +
		"fh\x03\x02\x02\x02ge\x03\x02\x02\x02hj\x05\n\x06\x02ik\x05\x12\n\x02j" +
		"i\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02ln\x05\x16\f\x02" +
		"ml\x03\x02\x02\x02mn\x03\x02\x02\x02n\x11\x03\x02\x02\x02op\x07\x17\x02" +
		"\x02pq\x05\x10\t\x02qr\x07\x18\x02\x02r\x13\x03\x02\x02\x02sv\x07\x03" +
		"\x02\x02tv\x05> \x02us\x03\x02\x02\x02ut\x03\x02\x02\x02v\x15\x03\x02" +
		"\x02\x02wx\t\x03\x02\x02x\x17\x03\x02\x02\x02yz\x05\x1A\x0E\x02z{\x07" +
		"\x15\x02\x02{|\x05\x1E\x10\x02|}\x07\x16\x02\x02}\x19\x03\x02\x02\x02" +
		"~\x80\x05:\x1E\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x81" +
		"\x03\x02\x02\x02\x81\x83\x07\x03\x02\x02\x82\x84\x07\x0F\x02\x02\x83\x82" +
		"\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87" +
		"\x05\n\x06\x02\x86\x88\x05\x1C\x0F\x02\x87\x86\x03\x02\x02\x02\x87\x88" +
		"\x03\x02\x02\x02\x88\x1B\x03\x02\x02\x02\x89\x8A\x07\x12\x02\x02\x8A\x8B" +
		"\x07\b\x02\x02\x8B\x8C\x05\n\x06\x02\x8C\x1D\x03\x02\x02\x02\x8D\x8F\x05" +
		"B\"\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02" +
		"\x02\x02\x90\x92\x05 \x11\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02" +
		"\x02\x02\x92\x1F\x03\x02\x02\x02\x93\x95\x05\"\x12\x02\x94\x96\x05 \x11" +
		"\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96!\x03\x02\x02" +
		"\x02\x97\x9C\x05$\x13\x02\x98\x9C\x05*\x16\x02\x99\x9C\x05(\x15\x02\x9A" +
		"\x9C\x058\x1D\x02\x9B\x97\x03\x02\x02\x02\x9B\x98\x03\x02\x02\x02\x9B" +
		"\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C#\x03\x02\x02\x02\x9D" +
		"\x9E\x05&\x14\x02\x9E\x9F\x07\x12\x02\x02\x9F%\x03\x02\x02\x02\xA0\xA1" +
		"\t\x04\x02\x02\xA1\'\x03\x02\x02\x02\xA2\xA3\x07\x05\x02\x02\xA3\xA4\x07" +
		"\x03\x02\x02\xA4\xA5\x05\n\x06\x02\xA5\xA6\x07\x1C\x02\x02\xA6)\x03\x02" +
		"\x02\x02\xA7\xA9\x05<\x1F\x02\xA8\xA7\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xAD\x03\x02\x02\x02\xAA\xAC\x05.\x18\x02\xAB\xAA\x03\x02" +
		"\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02" +
		"\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB2\x05\x10" +
		"\t\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02" +
		"\x02\x02\xB3\xB4\x05\n\x06\x02\xB4\xB6\x07\x13\x02\x02\xB5\xB7\x050\x19" +
		"\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02" +
		"\x02\xB8\xBA\x07\x14\x02\x02\xB9\xBB\x07\x04\x02\x02\xBA\xB9\x03\x02\x02" +
		"\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x05,\x17" +
		"\x02\xBD+\x03\x02\x02\x02\xBE\xC1\x07\x1C\x02\x02\xBF\xC1\x056\x1C\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1-\x03\x02\x02\x02" +
		"\xC2\xC3\t\x05\x02\x02\xC3/\x03\x02\x02\x02\xC4\xCA\x054\x1B\x02\xC5\xC6" +
		"\x054\x1B\x02\xC6\xC7\x07\x19\x02\x02\xC7\xC8\x050\x19\x02\xC8\xCA\x03" +
		"\x02\x02\x02\xC9\xC4\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA1\x03" +
		"\x02\x02\x02\xCB\xCC\x05\n\x06\x02\xCC3\x03\x02\x02\x02\xCD\xCE\x05\x10" +
		"\t\x02\xCE\xCF\x052\x1A\x02\xCF\xD6\x03\x02\x02\x02\xD0\xD1\x05\x10\t" +
		"\x02\xD1\xD2\x052\x1A\x02\xD2\xD3\x07\x1B\x02\x02\xD3\xD4\x05\x06\x04" +
		"\x02\xD4\xD6\x03\x02\x02\x02\xD5\xCD\x03\x02\x02\x02\xD5\xD0\x03\x02\x02" +
		"\x02\xD65\x03\x02\x02\x02\xD7\xD9\x07\x15\x02\x02\xD8\xDA\x056\x1C\x02" +
		"\xD9\xD8\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDE\x03\x02\x02\x02" +
		"\xDB\xDD\n\x06\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0\x03\x02\x02\x02" +
		"\xDE\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02" +
		"\xE0\xDE\x03\x02\x02\x02\xE1\xE2\x07\x16\x02\x02\xE27\x03\x02\x02\x02" +
		"\xE3\xE5\x05@!\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xE7\x03\x02\x02\x02\xE6\xE8\x05\x10\t\x02\xE7\xE6\x03\x02\x02\x02\xE7" +
		"\xE8\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x05\n\x06\x02\xEA" +
		"\xEB\x07\x1C\x02\x02\xEB9\x03\x02\x02\x02\xEC\xED\x07\v\x02\x02\xED\xEE" +
		"\x05D#\x02\xEE;\x03\x02\x02\x02\xEF\xF0\x07\f\x02\x02\xF0\xF1\x05D#\x02" +
		"\xF1=\x03\x02\x02\x02\xF2\xF3\x07\r\x02\x02\xF3\xF4\x05D#\x02\xF4?\x03" +
		"\x02\x02\x02\xF5\xF6\x07\x0E\x02\x02\xF6\xF7\x05D#\x02\xF7A\x03\x02\x02" +
		"\x02\xF8\xF9\x07\x10\x02\x02\xF9\xFA\x05D#\x02\xFAC\x03\x02\x02\x02\xFB" +
		"\xFD\x07\x13\x02\x02\xFC\xFE\x05F$\x02\xFD\xFC\x03\x02\x02\x02\xFD\xFE" +
		"\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x07\x14\x02\x02\u0100" +
		"E\x03\x02\x02\x02\u0101\u0108\x05H%\x02\u0102\u0103\x05H%\x02\u0103\u0105" +
		"\x07\x19\x02\x02\u0104\u0106\x05F$\x02\u0105\u0104\x03\x02\x02\x02\u0105" +
		"\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0101\x03\x02" +
		"\x02\x02\u0107\u0102\x03\x02\x02\x02\u0108G\x03\x02\x02\x02\u0109\u010E" +
		"\x05\n\x06\x02\u010A\u010E\x05\f\x07\x02\u010B\u010E\x05J&\x02\u010C\u010E" +
		"\x05D#\x02\u010D\u0109\x03\x02\x02\x02\u010D\u010A\x03\x02\x02\x02\u010D" +
		"\u010B\x03\x02\x02\x02\u010D\u010C\x03\x02\x02\x02\u010EI\x03\x02\x02" +
		"\x02\u010F\u0110\x05\n\x06\x02\u0110\u0111\x07\x1B\x02\x02\u0111\u0112" +
		"\x05H%\x02\u0112K\x03\x02\x02\x02 OVZejmu\x7F\x83\x87\x8E\x91\x95\x9B" +
		"\xA8\xAD\xB1\xB6\xBA\xC0\xC9\xD5\xD9\xDE\xE4\xE7\xFD\u0105\u0107\u010D";
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
	public classDeclaration(): ClassDeclarationContext {
		return this.getRuleContext(0, ClassDeclarationContext);
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
	public IDENTIFIER(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.IDENTIFIER, 0); }
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
	public PUBLIC(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.PUBLIC, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
	public CONST(): TerminalNode | undefined { return this.tryGetToken(SatisfactoryHeaderParserParser.CONST, 0); }
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
	public CLOSE_BRACE(): TerminalNode { return this.getToken(SatisfactoryHeaderParserParser.CLOSE_BRACE, 0); }
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
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
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
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
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


