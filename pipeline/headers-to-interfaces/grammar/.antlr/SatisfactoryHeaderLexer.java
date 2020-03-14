// Generated from /Users/ianm/code/ficsit/data-engineering/pipeline/headers-to-interfaces/grammar/SatisfactoryHeaderLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SatisfactoryHeaderLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CLASS=1, CONST=2, ENUM=3, FALSE=4, FRIEND=5, OVERRIDE=6, PRIVATE=7, PROTECTED=8, 
		PUBLIC=9, STATIC=10, STRUCT=11, TRUE=12, TYPEDEF=13, VIRTUAL=14, UCLASS=15, 
		UENUM=16, UFUNCTION=17, UINTERFACE=18, UMETA=19, UPARAM=20, UPROPERTY=21, 
		USTRUCT=22, FORCEINLINE=23, SF_CLASS_TAG=24, SF_GENERATED_BODY=25, COLON=26, 
		OPEN_PAREN=27, CLOSE_PAREN=28, OPEN_BRACE=29, CLOSE_BRACE=30, OPEN_ANGLE=31, 
		CLOSE_ANGLE=32, COMMA=33, PERIOD=34, EQUALS=35, SEMICOLON=36, STAR=37, 
		AMPERSAND=38, HYPHEN=39, PIPE=40, BANG=41, IDENTIFIER=42, STRING_LITERAL=43, 
		FLOAT_LITERAL=44, INTEGER_LITERAL=45, PREPROCESSOR=46, LINE_COMMENT_START=47, 
		BLOCK_COMMENT_START=48, WHITESPACE=49, LINE_COMMENT_END=50, LINE_COMMENT_TEXT=51, 
		LINE_COMMENT_OTHER=52, BLOCK_COMMENT_END=53, BLOCK_COMMENT_NEW_LINE=54, 
		BLOCK_COMMENT_TEXT=55, BLOCK_COMMENT_OTHER=56;
	public static final int
		COMMENTS_CHANNEL=2, WHITESPACE_CHANNEL=3;
	public static final int
		LINE_COMMENT=1, BLOCK_COMMENT=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL", "WHITESPACE_CHANNEL"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "LINE_COMMENT", "BLOCK_COMMENT"
	};

	public static final String[] ruleNames = {
		"Space", "Newline", "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TRUE", "TYPEDEF", 
		"VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", 
		"UPROPERTY", "USTRUCT", "FORCEINLINE", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", 
		"CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", 
		"HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'true'", 
		"'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", 
		"'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'FORCEINLINE'", "'FACTORYGAME_API'", 
		null, "':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", 
		"';'", "'*'", "'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TRUE", "TYPEDEF", "VIRTUAL", 
		"UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", 
		"USTRUCT", "FORCEINLINE", "SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", 
		"CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", 
		"HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SatisfactoryHeaderLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SatisfactoryHeaderLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2:\u01f6\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\3\2\3"+
		"\2\3\3\5\3}\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3"+
		"\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3"+
		"\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3"+
		"\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3"+
		"\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3"+
		"\34\7\34\u014d\n\34\f\34\16\34\u0150\13\34\3\34\3\34\3\34\3\34\3\34\3"+
		"\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&"+
		"\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\6-\u0179\n-\r-\16-\u017a"+
		"\3.\3.\7.\u017f\n.\f.\16.\u0182\13.\3.\3.\3/\6/\u0187\n/\r/\16/\u0188"+
		"\3/\3/\6/\u018d\n/\r/\16/\u018e\3/\5/\u0192\n/\3\60\6\60\u0195\n\60\r"+
		"\60\16\60\u0196\3\61\3\61\7\61\u019b\n\61\f\61\16\61\u019e\13\61\3\61"+
		"\3\61\3\62\3\62\3\62\3\62\5\62\u01a6\n\62\3\62\3\62\3\62\3\63\3\63\3\63"+
		"\3\63\7\63\u01af\n\63\f\63\16\63\u01b2\13\63\3\63\5\63\u01b5\n\63\3\63"+
		"\3\63\3\63\3\64\6\64\u01bb\n\64\r\64\16\64\u01bc\3\64\3\64\3\65\5\65\u01c2"+
		"\n\65\3\65\3\65\3\65\3\65\3\65\3\66\6\66\u01ca\n\66\r\66\16\66\u01cb\3"+
		"\66\3\66\3\67\3\67\3\67\3\67\38\78\u01d5\n8\f8\168\u01d8\138\38\38\38"+
		"\38\38\38\39\39\79\u01e2\n9\f9\169\u01e5\139\39\39\39\39\39\3:\6:\u01ed"+
		"\n:\r:\16:\u01ee\3:\3:\3;\3;\3;\3;\3\u0180\2<\5\2\7\2\t\3\13\4\r\5\17"+
		"\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24"+
		"-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'"+
		"S(U)W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66q\67s8u9w:\5\2\3\4\13\4\2"+
		"\13\13\"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5\2"+
		"\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u0203\2\t\3\2\2\2\2\13\3\2"+
		"\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2"+
		"\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2"+
		"\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2"+
		"\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3"+
		"\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2"+
		"\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2"+
		"S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3"+
		"\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\3k\3\2\2"+
		"\2\3m\3\2\2\2\3o\3\2\2\2\4q\3\2\2\2\4s\3\2\2\2\4u\3\2\2\2\4w\3\2\2\2\5"+
		"y\3\2\2\2\7|\3\2\2\2\t\u0080\3\2\2\2\13\u0086\3\2\2\2\r\u008c\3\2\2\2"+
		"\17\u0091\3\2\2\2\21\u0097\3\2\2\2\23\u009e\3\2\2\2\25\u00a7\3\2\2\2\27"+
		"\u00af\3\2\2\2\31\u00b9\3\2\2\2\33\u00c0\3\2\2\2\35\u00c7\3\2\2\2\37\u00ce"+
		"\3\2\2\2!\u00d3\3\2\2\2#\u00db\3\2\2\2%\u00e3\3\2\2\2\'\u00ea\3\2\2\2"+
		")\u00f0\3\2\2\2+\u00fa\3\2\2\2-\u0105\3\2\2\2/\u010b\3\2\2\2\61\u0112"+
		"\3\2\2\2\63\u011c\3\2\2\2\65\u0124\3\2\2\2\67\u0130\3\2\2\29\u0140\3\2"+
		"\2\2;\u0156\3\2\2\2=\u0158\3\2\2\2?\u015a\3\2\2\2A\u015c\3\2\2\2C\u015e"+
		"\3\2\2\2E\u0160\3\2\2\2G\u0162\3\2\2\2I\u0164\3\2\2\2K\u0166\3\2\2\2M"+
		"\u0168\3\2\2\2O\u016a\3\2\2\2Q\u016c\3\2\2\2S\u016e\3\2\2\2U\u0170\3\2"+
		"\2\2W\u0172\3\2\2\2Y\u0174\3\2\2\2[\u0176\3\2\2\2]\u017c\3\2\2\2_\u0186"+
		"\3\2\2\2a\u0194\3\2\2\2c\u0198\3\2\2\2e\u01a1\3\2\2\2g\u01aa\3\2\2\2i"+
		"\u01ba\3\2\2\2k\u01c1\3\2\2\2m\u01c9\3\2\2\2o\u01cf\3\2\2\2q\u01d6\3\2"+
		"\2\2s\u01df\3\2\2\2u\u01ec\3\2\2\2w\u01f2\3\2\2\2yz\t\2\2\2z\6\3\2\2\2"+
		"{}\7\17\2\2|{\3\2\2\2|}\3\2\2\2}~\3\2\2\2~\177\7\f\2\2\177\b\3\2\2\2\u0080"+
		"\u0081\7e\2\2\u0081\u0082\7n\2\2\u0082\u0083\7c\2\2\u0083\u0084\7u\2\2"+
		"\u0084\u0085\7u\2\2\u0085\n\3\2\2\2\u0086\u0087\7e\2\2\u0087\u0088\7q"+
		"\2\2\u0088\u0089\7p\2\2\u0089\u008a\7u\2\2\u008a\u008b\7v\2\2\u008b\f"+
		"\3\2\2\2\u008c\u008d\7g\2\2\u008d\u008e\7p\2\2\u008e\u008f\7w\2\2\u008f"+
		"\u0090\7o\2\2\u0090\16\3\2\2\2\u0091\u0092\7h\2\2\u0092\u0093\7c\2\2\u0093"+
		"\u0094\7n\2\2\u0094\u0095\7u\2\2\u0095\u0096\7g\2\2\u0096\20\3\2\2\2\u0097"+
		"\u0098\7h\2\2\u0098\u0099\7t\2\2\u0099\u009a\7k\2\2\u009a\u009b\7g\2\2"+
		"\u009b\u009c\7p\2\2\u009c\u009d\7f\2\2\u009d\22\3\2\2\2\u009e\u009f\7"+
		"q\2\2\u009f\u00a0\7x\2\2\u00a0\u00a1\7g\2\2\u00a1\u00a2\7t\2\2\u00a2\u00a3"+
		"\7t\2\2\u00a3\u00a4\7k\2\2\u00a4\u00a5\7f\2\2\u00a5\u00a6\7g\2\2\u00a6"+
		"\24\3\2\2\2\u00a7\u00a8\7r\2\2\u00a8\u00a9\7t\2\2\u00a9\u00aa\7k\2\2\u00aa"+
		"\u00ab\7x\2\2\u00ab\u00ac\7c\2\2\u00ac\u00ad\7v\2\2\u00ad\u00ae\7g\2\2"+
		"\u00ae\26\3\2\2\2\u00af\u00b0\7r\2\2\u00b0\u00b1\7t\2\2\u00b1\u00b2\7"+
		"q\2\2\u00b2\u00b3\7v\2\2\u00b3\u00b4\7g\2\2\u00b4\u00b5\7e\2\2\u00b5\u00b6"+
		"\7v\2\2\u00b6\u00b7\7g\2\2\u00b7\u00b8\7f\2\2\u00b8\30\3\2\2\2\u00b9\u00ba"+
		"\7r\2\2\u00ba\u00bb\7w\2\2\u00bb\u00bc\7d\2\2\u00bc\u00bd\7n\2\2\u00bd"+
		"\u00be\7k\2\2\u00be\u00bf\7e\2\2\u00bf\32\3\2\2\2\u00c0\u00c1\7u\2\2\u00c1"+
		"\u00c2\7v\2\2\u00c2\u00c3\7c\2\2\u00c3\u00c4\7v\2\2\u00c4\u00c5\7k\2\2"+
		"\u00c5\u00c6\7e\2\2\u00c6\34\3\2\2\2\u00c7\u00c8\7u\2\2\u00c8\u00c9\7"+
		"v\2\2\u00c9\u00ca\7t\2\2\u00ca\u00cb\7w\2\2\u00cb\u00cc\7e\2\2\u00cc\u00cd"+
		"\7v\2\2\u00cd\36\3\2\2\2\u00ce\u00cf\7v\2\2\u00cf\u00d0\7t\2\2\u00d0\u00d1"+
		"\7w\2\2\u00d1\u00d2\7g\2\2\u00d2 \3\2\2\2\u00d3\u00d4\7v\2\2\u00d4\u00d5"+
		"\7{\2\2\u00d5\u00d6\7r\2\2\u00d6\u00d7\7g\2\2\u00d7\u00d8\7f\2\2\u00d8"+
		"\u00d9\7g\2\2\u00d9\u00da\7h\2\2\u00da\"\3\2\2\2\u00db\u00dc\7x\2\2\u00dc"+
		"\u00dd\7k\2\2\u00dd\u00de\7t\2\2\u00de\u00df\7v\2\2\u00df\u00e0\7w\2\2"+
		"\u00e0\u00e1\7c\2\2\u00e1\u00e2\7n\2\2\u00e2$\3\2\2\2\u00e3\u00e4\7W\2"+
		"\2\u00e4\u00e5\7E\2\2\u00e5\u00e6\7N\2\2\u00e6\u00e7\7C\2\2\u00e7\u00e8"+
		"\7U\2\2\u00e8\u00e9\7U\2\2\u00e9&\3\2\2\2\u00ea\u00eb\7W\2\2\u00eb\u00ec"+
		"\7G\2\2\u00ec\u00ed\7P\2\2\u00ed\u00ee\7W\2\2\u00ee\u00ef\7O\2\2\u00ef"+
		"(\3\2\2\2\u00f0\u00f1\7W\2\2\u00f1\u00f2\7H\2\2\u00f2\u00f3\7W\2\2\u00f3"+
		"\u00f4\7P\2\2\u00f4\u00f5\7E\2\2\u00f5\u00f6\7V\2\2\u00f6\u00f7\7K\2\2"+
		"\u00f7\u00f8\7Q\2\2\u00f8\u00f9\7P\2\2\u00f9*\3\2\2\2\u00fa\u00fb\7W\2"+
		"\2\u00fb\u00fc\7K\2\2\u00fc\u00fd\7P\2\2\u00fd\u00fe\7V\2\2\u00fe\u00ff"+
		"\7G\2\2\u00ff\u0100\7T\2\2\u0100\u0101\7H\2\2\u0101\u0102\7C\2\2\u0102"+
		"\u0103\7E\2\2\u0103\u0104\7G\2\2\u0104,\3\2\2\2\u0105\u0106\7W\2\2\u0106"+
		"\u0107\7O\2\2\u0107\u0108\7G\2\2\u0108\u0109\7V\2\2\u0109\u010a\7C\2\2"+
		"\u010a.\3\2\2\2\u010b\u010c\7W\2\2\u010c\u010d\7R\2\2\u010d\u010e\7C\2"+
		"\2\u010e\u010f\7T\2\2\u010f\u0110\7C\2\2\u0110\u0111\7O\2\2\u0111\60\3"+
		"\2\2\2\u0112\u0113\7W\2\2\u0113\u0114\7R\2\2\u0114\u0115\7T\2\2\u0115"+
		"\u0116\7Q\2\2\u0116\u0117\7R\2\2\u0117\u0118\7G\2\2\u0118\u0119\7T\2\2"+
		"\u0119\u011a\7V\2\2\u011a\u011b\7[\2\2\u011b\62\3\2\2\2\u011c\u011d\7"+
		"W\2\2\u011d\u011e\7U\2\2\u011e\u011f\7V\2\2\u011f\u0120\7T\2\2\u0120\u0121"+
		"\7W\2\2\u0121\u0122\7E\2\2\u0122\u0123\7V\2\2\u0123\64\3\2\2\2\u0124\u0125"+
		"\7H\2\2\u0125\u0126\7Q\2\2\u0126\u0127\7T\2\2\u0127\u0128\7E\2\2\u0128"+
		"\u0129\7G\2\2\u0129\u012a\7K\2\2\u012a\u012b\7P\2\2\u012b\u012c\7N\2\2"+
		"\u012c\u012d\7K\2\2\u012d\u012e\7P\2\2\u012e\u012f\7G\2\2\u012f\66\3\2"+
		"\2\2\u0130\u0131\7H\2\2\u0131\u0132\7C\2\2\u0132\u0133\7E\2\2\u0133\u0134"+
		"\7V\2\2\u0134\u0135\7Q\2\2\u0135\u0136\7T\2\2\u0136\u0137\7[\2\2\u0137"+
		"\u0138\7I\2\2\u0138\u0139\7C\2\2\u0139\u013a\7O\2\2\u013a\u013b\7G\2\2"+
		"\u013b\u013c\7a\2\2\u013c\u013d\7C\2\2\u013d\u013e\7R\2\2\u013e\u013f"+
		"\7K\2\2\u013f8\3\2\2\2\u0140\u0141\7I\2\2\u0141\u0142\7G\2\2\u0142\u0143"+
		"\7P\2\2\u0143\u0144\7G\2\2\u0144\u0145\7T\2\2\u0145\u0146\7C\2\2\u0146"+
		"\u0147\7V\2\2\u0147\u0148\7G\2\2\u0148\u0149\7F\2\2\u0149\u014a\7a\2\2"+
		"\u014a\u014e\3\2\2\2\u014b\u014d\t\3\2\2\u014c\u014b\3\2\2\2\u014d\u0150"+
		"\3\2\2\2\u014e\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u0151\3\2\2\2\u0150"+
		"\u014e\3\2\2\2\u0151\u0152\7D\2\2\u0152\u0153\7Q\2\2\u0153\u0154\7F\2"+
		"\2\u0154\u0155\7[\2\2\u0155:\3\2\2\2\u0156\u0157\7<\2\2\u0157<\3\2\2\2"+
		"\u0158\u0159\7*\2\2\u0159>\3\2\2\2\u015a\u015b\7+\2\2\u015b@\3\2\2\2\u015c"+
		"\u015d\7}\2\2\u015dB\3\2\2\2\u015e\u015f\7\177\2\2\u015fD\3\2\2\2\u0160"+
		"\u0161\7>\2\2\u0161F\3\2\2\2\u0162\u0163\7@\2\2\u0163H\3\2\2\2\u0164\u0165"+
		"\7.\2\2\u0165J\3\2\2\2\u0166\u0167\7\60\2\2\u0167L\3\2\2\2\u0168\u0169"+
		"\7?\2\2\u0169N\3\2\2\2\u016a\u016b\7=\2\2\u016bP\3\2\2\2\u016c\u016d\7"+
		",\2\2\u016dR\3\2\2\2\u016e\u016f\7(\2\2\u016fT\3\2\2\2\u0170\u0171\7/"+
		"\2\2\u0171V\3\2\2\2\u0172\u0173\7~\2\2\u0173X\3\2\2\2\u0174\u0175\7#\2"+
		"\2\u0175Z\3\2\2\2\u0176\u0178\t\4\2\2\u0177\u0179\t\5\2\2\u0178\u0177"+
		"\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u0178\3\2\2\2\u017a\u017b\3\2\2\2\u017b"+
		"\\\3\2\2\2\u017c\u0180\7$\2\2\u017d\u017f\13\2\2\2\u017e\u017d\3\2\2\2"+
		"\u017f\u0182\3\2\2\2\u0180\u0181\3\2\2\2\u0180\u017e\3\2\2\2\u0181\u0183"+
		"\3\2\2\2\u0182\u0180\3\2\2\2\u0183\u0184\7$\2\2\u0184^\3\2\2\2\u0185\u0187"+
		"\t\6\2\2\u0186\u0185\3\2\2\2\u0187\u0188\3\2\2\2\u0188\u0186\3\2\2\2\u0188"+
		"\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018c\7\60\2\2\u018b\u018d\t"+
		"\6\2\2\u018c\u018b\3\2\2\2\u018d\u018e\3\2\2\2\u018e\u018c\3\2\2\2\u018e"+
		"\u018f\3\2\2\2\u018f\u0191\3\2\2\2\u0190\u0192\7h\2\2\u0191\u0190\3\2"+
		"\2\2\u0191\u0192\3\2\2\2\u0192`\3\2\2\2\u0193\u0195\t\6\2\2\u0194\u0193"+
		"\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0194\3\2\2\2\u0196\u0197\3\2\2\2\u0197"+
		"b\3\2\2\2\u0198\u019c\7%\2\2\u0199\u019b\n\7\2\2\u019a\u0199\3\2\2\2\u019b"+
		"\u019e\3\2\2\2\u019c\u019a\3\2\2\2\u019c\u019d\3\2\2\2\u019d\u019f\3\2"+
		"\2\2\u019e\u019c\3\2\2\2\u019f\u01a0\b\61\2\2\u01a0d\3\2\2\2\u01a1\u01a2"+
		"\7\61\2\2\u01a2\u01a3\7\61\2\2\u01a3\u01a5\3\2\2\2\u01a4\u01a6\5\5\2\2"+
		"\u01a5\u01a4\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8"+
		"\b\62\2\2\u01a8\u01a9\b\62\3\2\u01a9f\3\2\2\2\u01aa\u01ab\7\61\2\2\u01ab"+
		"\u01ac\7,\2\2\u01ac\u01b0\3\2\2\2\u01ad\u01af\7,\2\2\u01ae\u01ad\3\2\2"+
		"\2\u01af\u01b2\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b1\u01b4"+
		"\3\2\2\2\u01b2\u01b0\3\2\2\2\u01b3\u01b5\5\5\2\2\u01b4\u01b3\3\2\2\2\u01b4"+
		"\u01b5\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\b\63\2\2\u01b7\u01b8\b"+
		"\63\4\2\u01b8h\3\2\2\2\u01b9\u01bb\t\b\2\2\u01ba\u01b9\3\2\2\2\u01bb\u01bc"+
		"\3\2\2\2\u01bc\u01ba\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01be\3\2\2\2\u01be"+
		"\u01bf\b\64\2\2\u01bfj\3\2\2\2\u01c0\u01c2\5\5\2\2\u01c1\u01c0\3\2\2\2"+
		"\u01c1\u01c2\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4\5\7\3\2\u01c4\u01c5"+
		"\3\2\2\2\u01c5\u01c6\b\65\2\2\u01c6\u01c7\b\65\5\2\u01c7l\3\2\2\2\u01c8"+
		"\u01ca\n\7\2\2\u01c9\u01c8\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01c9\3\2"+
		"\2\2\u01cb\u01cc\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd\u01ce\b\66\6\2\u01ce"+
		"n\3\2\2\2\u01cf\u01d0\13\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d2\b\67\2"+
		"\2\u01d2p\3\2\2\2\u01d3\u01d5\5\5\2\2\u01d4\u01d3\3\2\2\2\u01d5\u01d8"+
		"\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d9\3\2\2\2\u01d8"+
		"\u01d6\3\2\2\2\u01d9\u01da\7,\2\2\u01da\u01db\7\61\2\2\u01db\u01dc\3\2"+
		"\2\2\u01dc\u01dd\b8\2\2\u01dd\u01de\b8\5\2\u01der\3\2\2\2\u01df\u01e3"+
		"\5\7\3\2\u01e0\u01e2\5\5\2\2\u01e1\u01e0\3\2\2\2\u01e2\u01e5\3\2\2\2\u01e3"+
		"\u01e1\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e6\3\2\2\2\u01e5\u01e3\3\2"+
		"\2\2\u01e6\u01e7\7,\2\2\u01e7\u01e8\n\t\2\2\u01e8\u01e9\3\2\2\2\u01e9"+
		"\u01ea\b9\2\2\u01eat\3\2\2\2\u01eb\u01ed\n\n\2\2\u01ec\u01eb\3\2\2\2\u01ed"+
		"\u01ee\3\2\2\2\u01ee\u01ec\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01f0\3\2"+
		"\2\2\u01f0\u01f1\b:\6\2\u01f1v\3\2\2\2\u01f2\u01f3\13\2\2\2\u01f3\u01f4"+
		"\3\2\2\2\u01f4\u01f5\b;\2\2\u01f5x\3\2\2\2\27\2\3\4|\u014e\u017a\u0180"+
		"\u0188\u018e\u0191\u0196\u019c\u01a5\u01b0\u01b4\u01bc\u01c1\u01cb\u01d6"+
		"\u01e3\u01ee\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}