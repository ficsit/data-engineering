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
		"Space", "Newline", "CLASS", "CONST", "FRIEND", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "VIRTUAL", "UCLASS", "UFUNCTION", "UPARAM", "UPROPERTY", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", 
		"COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "IDENTIFIER", 
		"STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02-\u0185\b\x01" +
		"\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04" +
		"\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f" +
		"\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11" +
		"\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16" +
		"\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B" +
		"\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!" +
		"\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t" +
		")\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x03\x02\x03\x02\x03\x03\x05" +
		"\x03c\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x06 \u010B\n \r \x0E \u010C\x03!\x03!\x07!\u0111\n" +
		"!\f!\x0E!\u0114\v!\x03!\x03!\x03\"\x06\"\u0119\n\"\r\"\x0E\"\u011A\x03" +
		"\"\x03\"\x06\"\u011F\n\"\r\"\x0E\"\u0120\x03#\x06#\u0124\n#\r#\x0E#\u0125" +
		"\x03$\x03$\x07$\u012A\n$\f$\x0E$\u012D\v$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x05%\u0135\n%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u013E\n&\f&\x0E" +
		"&\u0141\v&\x03&\x05&\u0144\n&\x03&\x03&\x03&\x03\'\x06\'\u014A\n\'\r\'" +
		"\x0E\'\u014B\x03\'\x03\'\x03(\x05(\u0151\n(\x03(\x03(\x03(\x03(\x03(\x03" +
		")\x06)\u0159\n)\r)\x0E)\u015A\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x07+" +
		"\u0164\n+\f+\x0E+\u0167\v+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x07" +
		",\u0171\n,\f,\x0E,\u0174\v,\x03,\x03,\x03,\x03,\x03,\x03-\x06-\u017C\n" +
		"-\r-\x0E-\u017D\x03-\x03-\x03.\x03.\x03.\x03.\x03\u0112\x02\x02/\x05\x02" +
		"\x02\x07\x02\x02\t\x02\x03\v\x02\x04\r\x02\x05\x0F\x02\x06\x11\x02\x07" +
		"\x13\x02\b\x15\x02\t\x17\x02\n\x19\x02\v\x1B\x02\f\x1D\x02\r\x1F\x02\x0E" +
		"!\x02\x0F#\x02\x10%\x02\x11\'\x02\x12)\x02\x13+\x02\x14-\x02\x15/\x02" +
		"\x161\x02\x173\x02\x185\x02\x197\x02\x1A9\x02\x1B;\x02\x1C=\x02\x1D?\x02" +
		"\x1EA\x02\x1FC\x02 E\x02!G\x02\"I\x02#K\x02$M\x02%O\x02&Q\x02\'S\x02(" +
		"U\x02)W\x02*Y\x02+[\x02,]\x02-\x05\x02\x03\x04\n\x04\x02\v\v\"\"\x04\x02" +
		"C\\c|\x06\x022;C\\aac|\x03\x022;\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F" +
		"\"\"\x03\x0211\x05\x02\f\f\x0F\x0F,,\x02\u0190\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03" +
		"\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02" +
		"\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x02" +
		"1\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02" +
		"\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02" +
		"\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03" +
		"\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02" +
		"\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x03Q\x03\x02\x02\x02\x03" +
		"S\x03\x02\x02\x02\x03U\x03\x02\x02\x02\x04W\x03\x02\x02\x02\x04Y\x03\x02" +
		"\x02\x02\x04[\x03\x02\x02\x02\x04]\x03\x02\x02\x02\x05_\x03\x02\x02\x02" +
		"\x07b\x03\x02\x02\x02\tf\x03\x02\x02\x02\vl\x03\x02\x02\x02\rr\x03\x02" +
		"\x02\x02\x0Fy\x03\x02\x02\x02\x11\x81\x03\x02\x02\x02\x13\x8B\x03\x02" +
		"\x02\x02\x15\x92\x03\x02\x02\x02\x17\x99\x03\x02\x02\x02\x19\xA1\x03\x02" +
		"\x02\x02\x1B\xA8\x03\x02\x02\x02\x1D\xB2\x03\x02\x02\x02\x1F\xB9\x03\x02" +
		"\x02\x02!\xC3\x03\x02\x02\x02#\xD3\x03\x02\x02\x02%\xE2\x03\x02\x02\x02" +
		"\'\xEE\x03\x02\x02\x02)\xF0\x03\x02\x02\x02+\xF2\x03\x02\x02\x02-\xF4" +
		"\x03\x02\x02\x02/\xF6\x03\x02\x02\x021\xF8\x03\x02\x02\x023\xFA\x03\x02" +
		"\x02\x025\xFC\x03\x02\x02\x027\xFE\x03\x02\x02\x029\u0100\x03\x02\x02" +
		"\x02;\u0102\x03\x02\x02\x02=\u0104\x03\x02\x02\x02?\u0106\x03\x02\x02" +
		"\x02A\u0108\x03\x02\x02\x02C\u010E\x03\x02\x02\x02E\u0118\x03\x02\x02" +
		"\x02G\u0123\x03\x02\x02\x02I\u0127\x03\x02\x02\x02K\u0130\x03\x02\x02" +
		"\x02M\u0139\x03\x02\x02\x02O\u0149\x03\x02\x02\x02Q\u0150\x03\x02\x02" +
		"\x02S\u0158\x03\x02\x02\x02U\u015E\x03\x02\x02\x02W\u0165\x03\x02\x02" +
		"\x02Y\u016E\x03\x02\x02\x02[\u017B\x03\x02\x02\x02]\u0181\x03\x02\x02" +
		"\x02_`\t\x02\x02\x02`\x06\x03\x02\x02\x02ac\x07\x0F\x02\x02ba\x03\x02" +
		"\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02de\x07\f\x02\x02e\b\x03\x02" +
		"\x02\x02fg\x07e\x02\x02gh\x07n\x02\x02hi\x07c\x02\x02ij\x07u\x02\x02j" +
		"k\x07u\x02\x02k\n\x03\x02\x02\x02lm\x07e\x02\x02mn\x07q\x02\x02no\x07" +
		"p\x02\x02op\x07u\x02\x02pq\x07v\x02\x02q\f\x03\x02\x02\x02rs\x07h\x02" +
		"\x02st\x07t\x02\x02tu\x07k\x02\x02uv\x07g\x02\x02vw\x07p\x02\x02wx\x07" +
		"f\x02\x02x\x0E\x03\x02\x02\x02yz\x07r\x02\x02z{\x07t\x02\x02{|\x07k\x02" +
		"\x02|}\x07x\x02\x02}~\x07c\x02\x02~\x7F\x07v\x02\x02\x7F\x80\x07g\x02" +
		"\x02\x80\x10\x03\x02\x02\x02\x81\x82\x07r\x02\x02\x82\x83\x07t\x02\x02" +
		"\x83\x84\x07q\x02\x02\x84\x85\x07v\x02\x02\x85\x86\x07g\x02\x02\x86\x87" +
		"\x07e\x02\x02\x87\x88\x07v\x02\x02\x88\x89\x07g\x02\x02\x89\x8A\x07f\x02" +
		"\x02\x8A\x12\x03\x02\x02\x02\x8B\x8C\x07r\x02\x02\x8C\x8D\x07w\x02\x02" +
		"\x8D\x8E\x07d\x02\x02\x8E\x8F\x07n\x02\x02\x8F\x90\x07k\x02\x02\x90\x91" +
		"\x07e\x02\x02\x91\x14\x03\x02\x02\x02\x92\x93\x07u\x02\x02\x93\x94\x07" +
		"v\x02\x02\x94\x95\x07c\x02\x02\x95\x96\x07v\x02\x02\x96\x97\x07k\x02\x02" +
		"\x97\x98\x07e\x02\x02\x98\x16\x03\x02\x02\x02\x99\x9A\x07x\x02\x02\x9A" +
		"\x9B\x07k\x02\x02\x9B\x9C\x07t\x02\x02\x9C\x9D\x07v\x02\x02\x9D\x9E\x07" +
		"w\x02\x02\x9E\x9F\x07c\x02\x02\x9F\xA0\x07n\x02\x02\xA0\x18\x03\x02\x02" +
		"\x02\xA1\xA2\x07W\x02\x02\xA2\xA3\x07E\x02\x02\xA3\xA4\x07N\x02\x02\xA4" +
		"\xA5\x07C\x02\x02\xA5\xA6\x07U\x02\x02\xA6\xA7\x07U\x02\x02\xA7\x1A\x03" +
		"\x02\x02\x02\xA8\xA9\x07W\x02\x02\xA9\xAA\x07H\x02\x02\xAA\xAB\x07W\x02" +
		"\x02\xAB\xAC\x07P\x02\x02\xAC\xAD\x07E\x02\x02\xAD\xAE\x07V\x02\x02\xAE" +
		"\xAF\x07K\x02\x02\xAF\xB0\x07Q\x02\x02\xB0\xB1\x07P\x02\x02\xB1\x1C\x03" +
		"\x02\x02\x02\xB2\xB3\x07W\x02\x02\xB3\xB4\x07R\x02\x02\xB4\xB5\x07C\x02" +
		"\x02\xB5\xB6\x07T\x02\x02\xB6\xB7\x07C\x02\x02\xB7\xB8\x07O\x02\x02\xB8" +
		"\x1E\x03\x02\x02\x02\xB9\xBA\x07W\x02\x02\xBA\xBB\x07R\x02\x02\xBB\xBC" +
		"\x07T\x02\x02\xBC\xBD\x07Q\x02\x02\xBD\xBE\x07R\x02\x02\xBE\xBF\x07G\x02" +
		"\x02\xBF\xC0\x07T\x02\x02\xC0\xC1\x07V\x02\x02\xC1\xC2\x07[\x02\x02\xC2" +
		" \x03\x02\x02\x02\xC3\xC4\x07H\x02\x02\xC4\xC5\x07C\x02\x02\xC5\xC6\x07" +
		"E\x02\x02\xC6\xC7\x07V\x02\x02\xC7\xC8\x07Q\x02\x02\xC8\xC9\x07T\x02\x02" +
		"\xC9\xCA\x07[\x02\x02\xCA\xCB\x07I\x02\x02\xCB\xCC\x07C\x02\x02\xCC\xCD" +
		"\x07O\x02\x02\xCD\xCE\x07G\x02\x02\xCE\xCF\x07a\x02\x02\xCF\xD0\x07C\x02" +
		"\x02\xD0\xD1\x07R\x02\x02\xD1\xD2\x07K\x02\x02\xD2\"\x03\x02\x02\x02\xD3" +
		"\xD4\x07I\x02\x02\xD4\xD5\x07G\x02\x02\xD5\xD6\x07P\x02\x02\xD6\xD7\x07" +
		"G\x02\x02\xD7\xD8\x07T\x02\x02\xD8\xD9\x07C\x02\x02\xD9\xDA\x07V\x02\x02" +
		"\xDA\xDB\x07G\x02\x02\xDB\xDC\x07F\x02\x02\xDC\xDD\x07a\x02\x02\xDD\xDE" +
		"\x07D\x02\x02\xDE\xDF\x07Q\x02\x02\xDF\xE0\x07F\x02\x02\xE0\xE1\x07[\x02" +
		"\x02\xE1$\x03\x02\x02\x02\xE2\xE3\x07H\x02\x02\xE3\xE4\x07Q\x02\x02\xE4" +
		"\xE5\x07T\x02\x02\xE5\xE6\x07E\x02\x02\xE6\xE7\x07G\x02\x02\xE7\xE8\x07" +
		"K\x02\x02\xE8\xE9\x07P\x02\x02\xE9\xEA\x07N\x02\x02\xEA\xEB\x07K\x02\x02" +
		"\xEB\xEC\x07P\x02\x02\xEC\xED\x07G\x02\x02\xED&\x03\x02\x02\x02\xEE\xEF" +
		"\x07<\x02\x02\xEF(\x03\x02\x02\x02\xF0\xF1\x07*\x02\x02\xF1*\x03\x02\x02" +
		"\x02\xF2\xF3\x07+\x02\x02\xF3,\x03\x02\x02\x02\xF4\xF5\x07}\x02\x02\xF5" +
		".\x03\x02\x02\x02\xF6\xF7\x07\x7F\x02\x02\xF70\x03\x02\x02\x02\xF8\xF9" +
		"\x07>\x02\x02\xF92\x03\x02\x02\x02\xFA\xFB\x07@\x02\x02\xFB4\x03\x02\x02" +
		"\x02\xFC\xFD\x07.\x02\x02\xFD6\x03\x02\x02\x02\xFE\xFF\x070\x02\x02\xFF" +
		"8\x03\x02\x02\x02\u0100\u0101\x07?\x02\x02\u0101:\x03\x02\x02\x02\u0102" +
		"\u0103\x07=\x02\x02\u0103<\x03\x02\x02\x02\u0104\u0105\x07,\x02\x02\u0105" +
		">\x03\x02\x02\x02\u0106\u0107\x07(\x02\x02\u0107@\x03\x02\x02\x02\u0108" +
		"\u010A\t\x03\x02\x02\u0109\u010B\t\x04\x02\x02\u010A\u0109\x03\x02\x02" +
		"\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D" +
		"\x03\x02\x02\x02\u010DB\x03\x02\x02\x02\u010E\u0112\x07$\x02\x02\u010F" +
		"\u0111\v\x02\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0114\x03\x02\x02" +
		"\x02\u0112\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0115" +
		"\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u0116\x07$\x02\x02" +
		"\u0116D\x03\x02\x02\x02\u0117\u0119\t\x05\x02\x02\u0118\u0117\x03\x02" +
		"\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A" +
		"\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011E\x070\x02" +
		"\x02\u011D\u011F\t\x05\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0120" +
		"\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02" +
		"\u0121F\x03\x02\x02\x02\u0122\u0124\t\x05\x02\x02\u0123\u0122\x03\x02" +
		"\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125" +
		"\u0126\x03\x02\x02\x02\u0126H\x03\x02\x02\x02\u0127\u012B\x07%\x02\x02" +
		"\u0128\u012A\n\x06\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A\u012D\x03" +
		"\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C" +
		"\u012E\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012E\u012F\b$\x02" +
		"\x02\u012FJ\x03\x02\x02\x02\u0130\u0131\x071\x02\x02\u0131\u0132\x071" +
		"\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133\u0135\x05\x05\x02\x02\u0134" +
		"\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0137\b%\x02\x02\u0137\u0138\b%\x03\x02\u0138L\x03\x02" +
		"\x02\x02\u0139\u013A\x071\x02\x02\u013A\u013B\x07,\x02\x02\u013B\u013F" +
		"\x03\x02\x02\x02\u013C\u013E\x07,\x02\x02\u013D\u013C\x03\x02\x02\x02" +
		"\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03" +
		"\x02\x02\x02\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142" +
		"\u0144\x05\x05\x02\x02\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\b&\x02\x02\u0146\u0147" +
		"\b&\x04\x02\u0147N\x03\x02\x02\x02\u0148\u014A\t\x07\x02\x02\u0149\u0148" +
		"\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014E\b" +
		"\'\x02\x02\u014EP\x03\x02\x02\x02\u014F\u0151\x05\x05\x02\x02\u0150\u014F" +
		"\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02" +
		"\u0152\u0153\x05\x07\x03\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\b" +
		"(\x02\x02\u0155\u0156\b(\x05\x02\u0156R\x03\x02\x02\x02\u0157\u0159\n" +
		"\x06\x02\x02\u0158\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015D\b)\x06\x02\u015DT\x03\x02\x02\x02\u015E\u015F\v\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\b*\x02\x02\u0161V\x03" +
		"\x02\x02\x02\u0162\u0164\x05\x05\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164" +
		"\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02" +
		"\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168" +
		"\u0169\x07,\x02\x02\u0169\u016A\x071\x02\x02\u016A\u016B\x03\x02\x02\x02" +
		"\u016B\u016C\b+\x02\x02\u016C\u016D\b+\x05\x02\u016DX\x03\x02\x02\x02" +
		"\u016E\u0172\x05\x07\x03\x02\u016F\u0171\x05\x05\x02\x02\u0170\u016F\x03" +
		"\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172" +
		"\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0172\x03\x02" +
		"\x02\x02\u0175\u0176\x07,\x02\x02\u0176\u0177\n\b\x02\x02\u0177\u0178" +
		"\x03\x02\x02\x02\u0178\u0179\b,\x02\x02\u0179Z\x03\x02\x02\x02\u017A\u017C" +
		"\n\t\x02\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D" +
		"\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02" +
		"\x02\x02\u017F\u0180\b-\x06\x02\u0180\\\x03\x02\x02\x02\u0181\u0182\v" +
		"\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\b.\x02\x02\u0184" +
		"^\x03\x02\x02\x02\x15\x02\x03\x04b\u010C\u0112\u011A\u0120\u0125\u012B" +
		"\u0134\u013F\u0143\u014B\u0150\u015A\u0165\u0172\u017D\x07\b\x02\x02\x07" +
		"\x03\x02\x07\x04\x02\x06\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SatisfactoryHeaderLexer.__ATN) {
			SatisfactoryHeaderLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SatisfactoryHeaderLexer._serializedATN));
		}

		return SatisfactoryHeaderLexer.__ATN;
	}

}

