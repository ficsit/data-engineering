// Generated from ./grammar/SatisfactoryHeaderLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SatisfactoryHeaderLexer extends Lexer {
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
	public static readonly UMETA = 16;
	public static readonly UPARAM = 17;
	public static readonly UPROPERTY = 18;
	public static readonly SF_CLASS_TAG = 19;
	public static readonly SF_GENERATED_BODY = 20;
	public static readonly FORCEINLINE = 21;
	public static readonly COLON = 22;
	public static readonly OPEN_PAREN = 23;
	public static readonly CLOSE_PAREN = 24;
	public static readonly OPEN_BRACE = 25;
	public static readonly CLOSE_BRACE = 26;
	public static readonly OPEN_ANGLE = 27;
	public static readonly CLOSE_ANGLE = 28;
	public static readonly COMMA = 29;
	public static readonly PERIOD = 30;
	public static readonly EQUALS = 31;
	public static readonly SEMICOLON = 32;
	public static readonly STAR = 33;
	public static readonly AMPERSAND = 34;
	public static readonly HYPHEN = 35;
	public static readonly PIPE = 36;
	public static readonly BANG = 37;
	public static readonly IDENTIFIER = 38;
	public static readonly STRING_LITERAL = 39;
	public static readonly FLOAT_LITERAL = 40;
	public static readonly INTEGER_LITERAL = 41;
	public static readonly PREPROCESSOR = 42;
	public static readonly LINE_COMMENT_START = 43;
	public static readonly BLOCK_COMMENT_START = 44;
	public static readonly WHITESPACE = 45;
	public static readonly LINE_COMMENT_END = 46;
	public static readonly LINE_COMMENT_TEXT = 47;
	public static readonly LINE_COMMENT_OTHER = 48;
	public static readonly BLOCK_COMMENT_END = 49;
	public static readonly BLOCK_COMMENT_NEW_LINE = 50;
	public static readonly BLOCK_COMMENT_TEXT = 51;
	public static readonly BLOCK_COMMENT_OTHER = 52;
	public static readonly COMMENTS_CHANNEL = 2;
	public static readonly WHITESPACE_CHANNEL = 3;
	public static readonly LINE_COMMENT = 1;
	public static readonly BLOCK_COMMENT = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL", "WHITESPACE_CHANNEL",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "LINE_COMMENT", "BLOCK_COMMENT",
	];

	public static readonly ruleNames: string[] = [
		"Space", "Newline", "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", 
		"UENUM", "UFUNCTION", "UMETA", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'FACTORYGAME_API'", "'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", 
		"')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", 
		"'&'", "'-'", "'|'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UMETA", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", 
		"STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", 
		"BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", 
		"LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", 
		"BLOCK_COMMENT_OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SatisfactoryHeaderLexer._LITERAL_NAMES, SatisfactoryHeaderLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SatisfactoryHeaderLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SatisfactoryHeaderLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SatisfactoryHeaderLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return SatisfactoryHeaderLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SatisfactoryHeaderLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SatisfactoryHeaderLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SatisfactoryHeaderLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x026\u01C2\b\x01" +
		"\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04" +
		"\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f" +
		"\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11" +
		"\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16" +
		"\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B" +
		"\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!" +
		"\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t" +
		")\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x04" +
		"2\t2\x043\t3\x044\t4\x045\t5\x046\t6\x047\t7\x03\x02\x03\x02\x03\x03\x05" +
		"\x03u\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03" +
		" \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'" +
		"\x03\'\x03(\x03(\x03)\x03)\x06)\u0148\n)\r)\x0E)\u0149\x03*\x03*\x07*" +
		"\u014E\n*\f*\x0E*\u0151\v*\x03*\x03*\x03+\x06+\u0156\n+\r+\x0E+\u0157" +
		"\x03+\x03+\x06+\u015C\n+\r+\x0E+\u015D\x03,\x06,\u0161\n,\r,\x0E,\u0162" +
		"\x03-\x03-\x07-\u0167\n-\f-\x0E-\u016A\v-\x03-\x03-\x03.\x03.\x03.\x03" +
		".\x05.\u0172\n.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x07/\u017B\n/\f/\x0E" +
		"/\u017E\v/\x03/\x05/\u0181\n/\x03/\x03/\x03/\x030\x060\u0187\n0\r0\x0E" +
		"0\u0188\x030\x030\x031\x051\u018E\n1\x031\x031\x031\x031\x031\x032\x06" +
		"2\u0196\n2\r2\x0E2\u0197\x032\x032\x033\x033\x033\x033\x034\x074\u01A1" +
		"\n4\f4\x0E4\u01A4\v4\x034\x034\x034\x034\x034\x034\x035\x035\x075\u01AE" +
		"\n5\f5\x0E5\u01B1\v5\x035\x035\x035\x035\x035\x036\x066\u01B9\n6\r6\x0E" +
		"6\u01BA\x036\x036\x037\x037\x037\x037\x03\u014F\x02\x028\x05\x02\x02\x07" +
		"\x02\x02\t\x02\x03\v\x02\x04\r\x02\x05\x0F\x02\x06\x11\x02\x07\x13\x02" +
		"\b\x15\x02\t\x17\x02\n\x19\x02\v\x1B\x02\f\x1D\x02\r\x1F\x02\x0E!\x02" +
		"\x0F#\x02\x10%\x02\x11\'\x02\x12)\x02\x13+\x02\x14-\x02\x15/\x02\x161" +
		"\x02\x173\x02\x185\x02\x197\x02\x1A9\x02\x1B;\x02\x1C=\x02\x1D?\x02\x1E" +
		"A\x02\x1FC\x02 E\x02!G\x02\"I\x02#K\x02$M\x02%O\x02&Q\x02\'S\x02(U\x02" +
		")W\x02*Y\x02+[\x02,]\x02-_\x02.a\x02/c\x020e\x021g\x022i\x023k\x024m\x02" +
		"5o\x026\x05\x02\x03\x04\n\x04\x02\v\v\"\"\x04\x02C\\c|\x06\x022;C\\aa" +
		"c|\x03\x022;\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x03\x0211\x05" +
		"\x02\f\f\x0F\x0F,,\x02\u01CD\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x03c\x03\x02\x02\x02\x03e\x03\x02\x02\x02\x03g\x03\x02\x02\x02" +
		"\x04i\x03\x02\x02\x02\x04k\x03\x02\x02\x02\x04m\x03\x02\x02\x02\x04o\x03" +
		"\x02\x02\x02\x05q\x03\x02\x02\x02\x07t\x03\x02\x02\x02\tx\x03\x02\x02" +
		"\x02\v~\x03\x02\x02\x02\r\x84\x03\x02\x02\x02\x0F\x89\x03\x02\x02\x02" +
		"\x11\x8F\x03\x02\x02\x02\x13\x96\x03\x02\x02\x02\x15\x9F\x03\x02\x02\x02" +
		"\x17\xA7\x03\x02\x02\x02\x19\xB1\x03\x02\x02\x02\x1B\xB8\x03\x02\x02\x02" +
		"\x1D\xBF\x03\x02\x02\x02\x1F\xC4\x03\x02\x02\x02!\xCC\x03\x02\x02\x02" +
		"#\xD3\x03\x02\x02\x02%\xD9\x03\x02\x02\x02\'\xE3\x03\x02\x02\x02)\xE9" +
		"\x03\x02\x02\x02+\xF0\x03\x02\x02\x02-\xFA\x03\x02\x02\x02/\u010A\x03" +
		"\x02\x02\x021\u0119\x03\x02\x02\x023\u0125\x03\x02\x02\x025\u0127\x03" +
		"\x02\x02\x027\u0129\x03\x02\x02\x029\u012B\x03\x02\x02\x02;\u012D\x03" +
		"\x02\x02\x02=\u012F\x03\x02\x02\x02?\u0131\x03\x02\x02\x02A\u0133\x03" +
		"\x02\x02\x02C\u0135\x03\x02\x02\x02E\u0137\x03\x02\x02\x02G\u0139\x03" +
		"\x02\x02\x02I\u013B\x03\x02\x02\x02K\u013D\x03\x02\x02\x02M\u013F\x03" +
		"\x02\x02\x02O\u0141\x03\x02\x02\x02Q\u0143\x03\x02\x02\x02S\u0145\x03" +
		"\x02\x02\x02U\u014B\x03\x02\x02\x02W\u0155\x03\x02\x02\x02Y\u0160\x03" +
		"\x02\x02\x02[\u0164\x03\x02\x02\x02]\u016D\x03\x02\x02\x02_\u0176\x03" +
		"\x02\x02\x02a\u0186\x03\x02\x02\x02c\u018D\x03\x02\x02\x02e\u0195\x03" +
		"\x02\x02\x02g\u019B\x03\x02\x02\x02i\u01A2\x03\x02\x02\x02k\u01AB\x03" +
		"\x02\x02\x02m\u01B8\x03\x02\x02\x02o\u01BE\x03\x02\x02\x02qr\t\x02\x02" +
		"\x02r\x06\x03\x02\x02\x02su\x07\x0F\x02\x02ts\x03\x02\x02\x02tu\x03\x02" +
		"\x02\x02uv\x03\x02\x02\x02vw\x07\f\x02\x02w\b\x03\x02\x02\x02xy\x07e\x02" +
		"\x02yz\x07n\x02\x02z{\x07c\x02\x02{|\x07u\x02\x02|}\x07u\x02\x02}\n\x03" +
		"\x02\x02\x02~\x7F\x07e\x02\x02\x7F\x80\x07q\x02\x02\x80\x81\x07p\x02\x02" +
		"\x81\x82\x07u\x02\x02\x82\x83\x07v\x02\x02\x83\f\x03\x02\x02\x02\x84\x85" +
		"\x07g\x02\x02\x85\x86\x07p\x02\x02\x86\x87\x07w\x02\x02\x87\x88\x07o\x02" +
		"\x02\x88\x0E\x03\x02\x02\x02\x89\x8A\x07h\x02\x02\x8A\x8B\x07c\x02\x02" +
		"\x8B\x8C\x07n\x02\x02\x8C\x8D\x07u\x02\x02\x8D\x8E\x07g\x02\x02\x8E\x10" +
		"\x03\x02\x02\x02\x8F\x90\x07h\x02\x02\x90\x91\x07t\x02\x02\x91\x92\x07" +
		"k\x02\x02\x92\x93\x07g\x02\x02\x93\x94\x07p\x02\x02\x94\x95\x07f\x02\x02" +
		"\x95\x12\x03\x02\x02\x02\x96\x97\x07q\x02\x02\x97\x98\x07x\x02\x02\x98" +
		"\x99\x07g\x02\x02\x99\x9A\x07t\x02\x02\x9A\x9B\x07t\x02\x02\x9B\x9C\x07" +
		"k\x02\x02\x9C\x9D\x07f\x02\x02\x9D\x9E\x07g\x02\x02\x9E\x14\x03\x02\x02" +
		"\x02\x9F\xA0\x07r\x02\x02\xA0\xA1\x07t\x02\x02\xA1\xA2\x07k\x02\x02\xA2" +
		"\xA3\x07x\x02\x02\xA3\xA4\x07c\x02\x02\xA4\xA5\x07v\x02\x02\xA5\xA6\x07" +
		"g\x02\x02\xA6\x16\x03\x02\x02\x02\xA7\xA8\x07r\x02\x02\xA8\xA9\x07t\x02" +
		"\x02\xA9\xAA\x07q\x02\x02\xAA\xAB\x07v\x02\x02\xAB\xAC\x07g\x02\x02\xAC" +
		"\xAD\x07e\x02\x02\xAD\xAE\x07v\x02\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07" +
		"f\x02\x02\xB0\x18\x03\x02\x02\x02\xB1\xB2\x07r\x02\x02\xB2\xB3\x07w\x02" +
		"\x02\xB3\xB4\x07d\x02\x02\xB4\xB5\x07n\x02\x02\xB5\xB6\x07k\x02\x02\xB6" +
		"\xB7\x07e\x02\x02\xB7\x1A\x03\x02\x02\x02\xB8\xB9\x07u\x02\x02\xB9\xBA" +
		"\x07v\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07v\x02\x02\xBC\xBD\x07k\x02" +
		"\x02\xBD\xBE\x07e\x02\x02\xBE\x1C\x03\x02\x02\x02\xBF\xC0\x07v\x02\x02" +
		"\xC0\xC1\x07t\x02\x02\xC1\xC2\x07w\x02\x02\xC2\xC3\x07g\x02\x02\xC3\x1E" +
		"\x03\x02\x02\x02\xC4\xC5\x07x\x02\x02\xC5\xC6\x07k\x02\x02\xC6\xC7\x07" +
		"t\x02\x02\xC7\xC8\x07v\x02\x02\xC8\xC9\x07w\x02\x02\xC9\xCA\x07c\x02\x02" +
		"\xCA\xCB\x07n\x02\x02\xCB \x03\x02\x02\x02\xCC\xCD\x07W\x02\x02\xCD\xCE" +
		"\x07E\x02\x02\xCE\xCF\x07N\x02\x02\xCF\xD0\x07C\x02\x02\xD0\xD1\x07U\x02" +
		"\x02\xD1\xD2\x07U\x02\x02\xD2\"\x03\x02\x02\x02\xD3\xD4\x07W\x02\x02\xD4" +
		"\xD5\x07G\x02\x02\xD5\xD6\x07P\x02\x02\xD6\xD7\x07W\x02\x02\xD7\xD8\x07" +
		"O\x02\x02\xD8$\x03\x02\x02\x02\xD9\xDA\x07W\x02\x02\xDA\xDB\x07H\x02\x02" +
		"\xDB\xDC\x07W\x02\x02\xDC\xDD\x07P\x02\x02\xDD\xDE\x07E\x02\x02\xDE\xDF" +
		"\x07V\x02\x02\xDF\xE0\x07K\x02\x02\xE0\xE1\x07Q\x02\x02\xE1\xE2\x07P\x02" +
		"\x02\xE2&\x03\x02\x02\x02\xE3\xE4\x07W\x02\x02\xE4\xE5\x07O\x02\x02\xE5" +
		"\xE6\x07G\x02\x02\xE6\xE7\x07V\x02\x02\xE7\xE8\x07C\x02\x02\xE8(\x03\x02" +
		"\x02\x02\xE9\xEA\x07W\x02\x02\xEA\xEB\x07R\x02\x02\xEB\xEC\x07C\x02\x02" +
		"\xEC\xED\x07T\x02\x02\xED\xEE\x07C\x02\x02\xEE\xEF\x07O\x02\x02\xEF*\x03" +
		"\x02\x02\x02\xF0\xF1\x07W\x02\x02\xF1\xF2\x07R\x02\x02\xF2\xF3\x07T\x02" +
		"\x02\xF3\xF4\x07Q\x02\x02\xF4\xF5\x07R\x02\x02\xF5\xF6\x07G\x02\x02\xF6" +
		"\xF7\x07T\x02\x02\xF7\xF8\x07V\x02\x02\xF8\xF9\x07[\x02\x02\xF9,\x03\x02" +
		"\x02\x02\xFA\xFB\x07H\x02\x02\xFB\xFC\x07C\x02\x02\xFC\xFD\x07E\x02\x02" +
		"\xFD\xFE\x07V\x02\x02\xFE\xFF\x07Q\x02\x02\xFF\u0100\x07T\x02\x02\u0100" +
		"\u0101\x07[\x02\x02\u0101\u0102\x07I\x02\x02\u0102\u0103\x07C\x02\x02" +
		"\u0103\u0104\x07O\x02\x02\u0104\u0105\x07G\x02\x02\u0105\u0106\x07a\x02" +
		"\x02\u0106\u0107\x07C\x02\x02\u0107\u0108\x07R\x02\x02\u0108\u0109\x07" +
		"K\x02\x02\u0109.\x03\x02\x02\x02\u010A\u010B\x07I\x02\x02\u010B\u010C" +
		"\x07G\x02\x02\u010C\u010D\x07P\x02\x02\u010D\u010E\x07G\x02\x02\u010E" +
		"\u010F\x07T\x02\x02\u010F\u0110\x07C\x02\x02\u0110\u0111\x07V\x02\x02" +
		"\u0111\u0112\x07G\x02\x02\u0112\u0113\x07F\x02\x02\u0113\u0114\x07a\x02" +
		"\x02\u0114\u0115\x07D\x02\x02\u0115\u0116\x07Q\x02\x02\u0116\u0117\x07" +
		"F\x02\x02\u0117\u0118\x07[\x02\x02\u01180\x03\x02\x02\x02\u0119\u011A" +
		"\x07H\x02\x02\u011A\u011B\x07Q\x02\x02\u011B\u011C\x07T\x02\x02\u011C" +
		"\u011D\x07E\x02\x02\u011D\u011E\x07G\x02\x02\u011E\u011F\x07K\x02\x02" +
		"\u011F\u0120\x07P\x02\x02\u0120\u0121\x07N\x02\x02\u0121\u0122\x07K\x02" +
		"\x02\u0122\u0123\x07P\x02\x02\u0123\u0124\x07G\x02\x02\u01242\x03\x02" +
		"\x02\x02\u0125\u0126\x07<\x02\x02\u01264\x03\x02\x02\x02\u0127\u0128\x07" +
		"*\x02\x02\u01286\x03\x02\x02\x02\u0129\u012A\x07+\x02\x02\u012A8\x03\x02" +
		"\x02\x02\u012B\u012C\x07}\x02\x02\u012C:\x03\x02\x02\x02\u012D\u012E\x07" +
		"\x7F\x02\x02\u012E<\x03\x02\x02\x02\u012F\u0130\x07>\x02\x02\u0130>\x03" +
		"\x02\x02\x02\u0131\u0132\x07@\x02\x02\u0132@\x03\x02\x02\x02\u0133\u0134" +
		"\x07.\x02\x02\u0134B\x03\x02\x02\x02\u0135\u0136\x070\x02\x02\u0136D\x03" +
		"\x02\x02\x02\u0137\u0138\x07?\x02\x02\u0138F\x03\x02\x02\x02\u0139\u013A" +
		"\x07=\x02\x02\u013AH\x03\x02\x02\x02\u013B\u013C\x07,\x02\x02\u013CJ\x03" +
		"\x02\x02\x02\u013D\u013E\x07(\x02\x02\u013EL\x03\x02\x02\x02\u013F\u0140" +
		"\x07/\x02\x02\u0140N\x03\x02\x02\x02\u0141\u0142\x07~\x02\x02\u0142P\x03" +
		"\x02\x02\x02\u0143\u0144\x07#\x02\x02\u0144R\x03\x02\x02\x02\u0145\u0147" +
		"\t\x03\x02\x02\u0146\u0148\t\x04\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02" +
		"\x02\x02\u014AT\x03\x02\x02\x02\u014B\u014F\x07$\x02\x02\u014C\u014E\v" +
		"\x02\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150\u0152\x03\x02" +
		"\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152\u0153\x07$\x02\x02\u0153V\x03" +
		"\x02\x02\x02\u0154\u0156\t\x05\x02\x02\u0155\u0154\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x070\x02\x02\u015A\u015C" +
		"\t\x05\x02\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015EX\x03\x02" +
		"\x02\x02\u015F\u0161\t\x05\x02\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0162" +
		"\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
		"\u0163Z\x03\x02\x02\x02\u0164\u0168\x07%\x02\x02\u0165\u0167\n\x06\x02" +
		"\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166" +
		"\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02" +
		"\u016A\u0168\x03\x02\x02\x02\u016B\u016C\b-\x02\x02\u016C\\\x03\x02\x02" +
		"\x02\u016D\u016E\x071\x02\x02\u016E\u016F\x071\x02\x02\u016F\u0171\x03" +
		"\x02\x02\x02\u0170\u0172\x05\x05\x02\x02\u0171\u0170\x03\x02\x02\x02\u0171" +
		"\u0172\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\b.\x02" +
		"\x02\u0174\u0175\b.\x03\x02\u0175^\x03\x02\x02\x02\u0176\u0177\x071\x02" +
		"\x02\u0177\u0178\x07,\x02\x02\u0178\u017C\x03\x02\x02\x02\u0179\u017B" +
		"\x07,\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017E\x03\x02\x02\x02" +
		"\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u0180\x03" +
		"\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0181\x05\x05\x02\x02\u0180" +
		"\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02" +
		"\x02\x02\u0182\u0183\b/\x02\x02\u0183\u0184\b/\x04\x02\u0184`\x03\x02" +
		"\x02\x02\u0185\u0187\t\x07\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\u0188" +
		"\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02" +
		"\u0189\u018A\x03\x02\x02\x02\u018A\u018B\b0\x02\x02\u018Bb\x03\x02\x02" +
		"\x02\u018C\u018E\x05\x05\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E" +
		"\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x05\x07\x03\x02" +
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0192\b1\x02\x02\u0192\u0193\b1\x05" +
		"\x02\u0193d\x03\x02\x02\x02\u0194\u0196\n\x06\x02\x02\u0195\u0194\x03" +
		"\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197" +
		"\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\b2\x06" +
		"\x02\u019Af\x03\x02\x02\x02\u019B\u019C\v\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u019E\b3\x02\x02\u019Eh\x03\x02\x02\x02\u019F\u01A1" +
		"\x05\x05\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02" +
		"\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x03" +
		"\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A6\x07,\x02\x02\u01A6" +
		"\u01A7\x071\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\b4\x02\x02" +
		"\u01A9\u01AA\b4\x05\x02\u01AAj\x03\x02\x02\x02\u01AB\u01AF\x05\x07\x03" +
		"\x02\u01AC\u01AE\x05\x05\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\u01B1" +
		"\x03\x02\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02" +
		"\u01B0\u01B2\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B3\x07" +
		",\x02\x02\u01B3\u01B4\n\b\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6" +
		"\b5\x02\x02\u01B6l\x03\x02\x02\x02\u01B7\u01B9\n\t\x02\x02\u01B8\u01B7" +
		"\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02" +
		"\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\b" +
		"6\x06\x02\u01BDn\x03\x02\x02\x02\u01BE\u01BF\v\x02\x02\x02\u01BF\u01C0" +
		"\x03\x02\x02\x02\u01C0\u01C1\b7\x02\x02\u01C1p\x03\x02\x02\x02\x15\x02" +
		"\x03\x04t\u0149\u014F\u0157\u015D\u0162\u0168\u0171\u017C\u0180\u0188" +
		"\u018D\u0197\u01A2\u01AF\u01BA\x07\b\x02\x02\x07\x03\x02\x07\x04\x02\x06" +
		"\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SatisfactoryHeaderLexer.__ATN) {
			SatisfactoryHeaderLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SatisfactoryHeaderLexer._serializedATN));
		}

		return SatisfactoryHeaderLexer.__ATN;
	}

}

