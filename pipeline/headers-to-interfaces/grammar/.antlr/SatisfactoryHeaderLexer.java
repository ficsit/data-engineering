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
		PUBLIC=9, STATIC=10, TRUE=11, VIRTUAL=12, UCLASS=13, UENUM=14, UFUNCTION=15, 
		UINTERFACE=16, UMETA=17, UPARAM=18, UPROPERTY=19, FORCEINLINE=20, SF_CLASS_TAG=21, 
		SF_GENERATED_BODY=22, COLON=23, OPEN_PAREN=24, CLOSE_PAREN=25, OPEN_BRACE=26, 
		CLOSE_BRACE=27, OPEN_ANGLE=28, CLOSE_ANGLE=29, COMMA=30, PERIOD=31, EQUALS=32, 
		SEMICOLON=33, STAR=34, AMPERSAND=35, HYPHEN=36, PIPE=37, BANG=38, IDENTIFIER=39, 
		STRING_LITERAL=40, FLOAT_LITERAL=41, INTEGER_LITERAL=42, PREPROCESSOR=43, 
		LINE_COMMENT_START=44, BLOCK_COMMENT_START=45, WHITESPACE=46, LINE_COMMENT_END=47, 
		LINE_COMMENT_TEXT=48, LINE_COMMENT_OTHER=49, BLOCK_COMMENT_END=50, BLOCK_COMMENT_NEW_LINE=51, 
		BLOCK_COMMENT_TEXT=52, BLOCK_COMMENT_OTHER=53;
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
		"PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", 
		"UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "FORCEINLINE", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", 
		"'UPROPERTY'", "'FORCEINLINE'", "'FACTORYGAME_API'", null, "':'", "'('", 
		"')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", 
		"'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "FORCEINLINE", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\67\u01d6\b\1\b\1"+
		"\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4"+
		"\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t"+
		"\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t"+
		"\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t"+
		"\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4"+
		"*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63"+
		"\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\3\2\3\2\3\3\5\3w\n"+
		"\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6"+
		"\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\7\31\u0130\n\31\f\31\16\31\u0133\13\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37"+
		"\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3"+
		"*\6*\u015c\n*\r*\16*\u015d\3+\3+\7+\u0162\n+\f+\16+\u0165\13+\3+\3+\3"+
		",\6,\u016a\n,\r,\16,\u016b\3,\3,\6,\u0170\n,\r,\16,\u0171\3-\6-\u0175"+
		"\n-\r-\16-\u0176\3.\3.\7.\u017b\n.\f.\16.\u017e\13.\3.\3.\3/\3/\3/\3/"+
		"\5/\u0186\n/\3/\3/\3/\3\60\3\60\3\60\3\60\7\60\u018f\n\60\f\60\16\60\u0192"+
		"\13\60\3\60\5\60\u0195\n\60\3\60\3\60\3\60\3\61\6\61\u019b\n\61\r\61\16"+
		"\61\u019c\3\61\3\61\3\62\5\62\u01a2\n\62\3\62\3\62\3\62\3\62\3\62\3\63"+
		"\6\63\u01aa\n\63\r\63\16\63\u01ab\3\63\3\63\3\64\3\64\3\64\3\64\3\65\7"+
		"\65\u01b5\n\65\f\65\16\65\u01b8\13\65\3\65\3\65\3\65\3\65\3\65\3\65\3"+
		"\66\3\66\7\66\u01c2\n\66\f\66\16\66\u01c5\13\66\3\66\3\66\3\66\3\66\3"+
		"\66\3\67\6\67\u01cd\n\67\r\67\16\67\u01ce\3\67\3\67\38\38\38\38\3\u0163"+
		"\29\5\2\7\2\t\3\13\4\r\5\17\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16"+
		"!\17#\20%\21\'\22)\23+\24-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35"+
		"?\36A\37C E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66"+
		"q\67\5\2\3\4\13\4\2\13\13\"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac|\3\2\62"+
		";\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u01e2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2"+
		"\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O"+
		"\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2"+
		"\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\3e\3\2\2\2\3g\3\2\2\2"+
		"\3i\3\2\2\2\4k\3\2\2\2\4m\3\2\2\2\4o\3\2\2\2\4q\3\2\2\2\5s\3\2\2\2\7v"+
		"\3\2\2\2\tz\3\2\2\2\13\u0080\3\2\2\2\r\u0086\3\2\2\2\17\u008b\3\2\2\2"+
		"\21\u0091\3\2\2\2\23\u0098\3\2\2\2\25\u00a1\3\2\2\2\27\u00a9\3\2\2\2\31"+
		"\u00b3\3\2\2\2\33\u00ba\3\2\2\2\35\u00c1\3\2\2\2\37\u00c6\3\2\2\2!\u00ce"+
		"\3\2\2\2#\u00d5\3\2\2\2%\u00db\3\2\2\2\'\u00e5\3\2\2\2)\u00f0\3\2\2\2"+
		"+\u00f6\3\2\2\2-\u00fd\3\2\2\2/\u0107\3\2\2\2\61\u0113\3\2\2\2\63\u0123"+
		"\3\2\2\2\65\u0139\3\2\2\2\67\u013b\3\2\2\29\u013d\3\2\2\2;\u013f\3\2\2"+
		"\2=\u0141\3\2\2\2?\u0143\3\2\2\2A\u0145\3\2\2\2C\u0147\3\2\2\2E\u0149"+
		"\3\2\2\2G\u014b\3\2\2\2I\u014d\3\2\2\2K\u014f\3\2\2\2M\u0151\3\2\2\2O"+
		"\u0153\3\2\2\2Q\u0155\3\2\2\2S\u0157\3\2\2\2U\u0159\3\2\2\2W\u015f\3\2"+
		"\2\2Y\u0169\3\2\2\2[\u0174\3\2\2\2]\u0178\3\2\2\2_\u0181\3\2\2\2a\u018a"+
		"\3\2\2\2c\u019a\3\2\2\2e\u01a1\3\2\2\2g\u01a9\3\2\2\2i\u01af\3\2\2\2k"+
		"\u01b6\3\2\2\2m\u01bf\3\2\2\2o\u01cc\3\2\2\2q\u01d2\3\2\2\2st\t\2\2\2"+
		"t\6\3\2\2\2uw\7\17\2\2vu\3\2\2\2vw\3\2\2\2wx\3\2\2\2xy\7\f\2\2y\b\3\2"+
		"\2\2z{\7e\2\2{|\7n\2\2|}\7c\2\2}~\7u\2\2~\177\7u\2\2\177\n\3\2\2\2\u0080"+
		"\u0081\7e\2\2\u0081\u0082\7q\2\2\u0082\u0083\7p\2\2\u0083\u0084\7u\2\2"+
		"\u0084\u0085\7v\2\2\u0085\f\3\2\2\2\u0086\u0087\7g\2\2\u0087\u0088\7p"+
		"\2\2\u0088\u0089\7w\2\2\u0089\u008a\7o\2\2\u008a\16\3\2\2\2\u008b\u008c"+
		"\7h\2\2\u008c\u008d\7c\2\2\u008d\u008e\7n\2\2\u008e\u008f\7u\2\2\u008f"+
		"\u0090\7g\2\2\u0090\20\3\2\2\2\u0091\u0092\7h\2\2\u0092\u0093\7t\2\2\u0093"+
		"\u0094\7k\2\2\u0094\u0095\7g\2\2\u0095\u0096\7p\2\2\u0096\u0097\7f\2\2"+
		"\u0097\22\3\2\2\2\u0098\u0099\7q\2\2\u0099\u009a\7x\2\2\u009a\u009b\7"+
		"g\2\2\u009b\u009c\7t\2\2\u009c\u009d\7t\2\2\u009d\u009e\7k\2\2\u009e\u009f"+
		"\7f\2\2\u009f\u00a0\7g\2\2\u00a0\24\3\2\2\2\u00a1\u00a2\7r\2\2\u00a2\u00a3"+
		"\7t\2\2\u00a3\u00a4\7k\2\2\u00a4\u00a5\7x\2\2\u00a5\u00a6\7c\2\2\u00a6"+
		"\u00a7\7v\2\2\u00a7\u00a8\7g\2\2\u00a8\26\3\2\2\2\u00a9\u00aa\7r\2\2\u00aa"+
		"\u00ab\7t\2\2\u00ab\u00ac\7q\2\2\u00ac\u00ad\7v\2\2\u00ad\u00ae\7g\2\2"+
		"\u00ae\u00af\7e\2\2\u00af\u00b0\7v\2\2\u00b0\u00b1\7g\2\2\u00b1\u00b2"+
		"\7f\2\2\u00b2\30\3\2\2\2\u00b3\u00b4\7r\2\2\u00b4\u00b5\7w\2\2\u00b5\u00b6"+
		"\7d\2\2\u00b6\u00b7\7n\2\2\u00b7\u00b8\7k\2\2\u00b8\u00b9\7e\2\2\u00b9"+
		"\32\3\2\2\2\u00ba\u00bb\7u\2\2\u00bb\u00bc\7v\2\2\u00bc\u00bd\7c\2\2\u00bd"+
		"\u00be\7v\2\2\u00be\u00bf\7k\2\2\u00bf\u00c0\7e\2\2\u00c0\34\3\2\2\2\u00c1"+
		"\u00c2\7v\2\2\u00c2\u00c3\7t\2\2\u00c3\u00c4\7w\2\2\u00c4\u00c5\7g\2\2"+
		"\u00c5\36\3\2\2\2\u00c6\u00c7\7x\2\2\u00c7\u00c8\7k\2\2\u00c8\u00c9\7"+
		"t\2\2\u00c9\u00ca\7v\2\2\u00ca\u00cb\7w\2\2\u00cb\u00cc\7c\2\2\u00cc\u00cd"+
		"\7n\2\2\u00cd \3\2\2\2\u00ce\u00cf\7W\2\2\u00cf\u00d0\7E\2\2\u00d0\u00d1"+
		"\7N\2\2\u00d1\u00d2\7C\2\2\u00d2\u00d3\7U\2\2\u00d3\u00d4\7U\2\2\u00d4"+
		"\"\3\2\2\2\u00d5\u00d6\7W\2\2\u00d6\u00d7\7G\2\2\u00d7\u00d8\7P\2\2\u00d8"+
		"\u00d9\7W\2\2\u00d9\u00da\7O\2\2\u00da$\3\2\2\2\u00db\u00dc\7W\2\2\u00dc"+
		"\u00dd\7H\2\2\u00dd\u00de\7W\2\2\u00de\u00df\7P\2\2\u00df\u00e0\7E\2\2"+
		"\u00e0\u00e1\7V\2\2\u00e1\u00e2\7K\2\2\u00e2\u00e3\7Q\2\2\u00e3\u00e4"+
		"\7P\2\2\u00e4&\3\2\2\2\u00e5\u00e6\7W\2\2\u00e6\u00e7\7K\2\2\u00e7\u00e8"+
		"\7P\2\2\u00e8\u00e9\7V\2\2\u00e9\u00ea\7G\2\2\u00ea\u00eb\7T\2\2\u00eb"+
		"\u00ec\7H\2\2\u00ec\u00ed\7C\2\2\u00ed\u00ee\7E\2\2\u00ee\u00ef\7G\2\2"+
		"\u00ef(\3\2\2\2\u00f0\u00f1\7W\2\2\u00f1\u00f2\7O\2\2\u00f2\u00f3\7G\2"+
		"\2\u00f3\u00f4\7V\2\2\u00f4\u00f5\7C\2\2\u00f5*\3\2\2\2\u00f6\u00f7\7"+
		"W\2\2\u00f7\u00f8\7R\2\2\u00f8\u00f9\7C\2\2\u00f9\u00fa\7T\2\2\u00fa\u00fb"+
		"\7C\2\2\u00fb\u00fc\7O\2\2\u00fc,\3\2\2\2\u00fd\u00fe\7W\2\2\u00fe\u00ff"+
		"\7R\2\2\u00ff\u0100\7T\2\2\u0100\u0101\7Q\2\2\u0101\u0102\7R\2\2\u0102"+
		"\u0103\7G\2\2\u0103\u0104\7T\2\2\u0104\u0105\7V\2\2\u0105\u0106\7[\2\2"+
		"\u0106.\3\2\2\2\u0107\u0108\7H\2\2\u0108\u0109\7Q\2\2\u0109\u010a\7T\2"+
		"\2\u010a\u010b\7E\2\2\u010b\u010c\7G\2\2\u010c\u010d\7K\2\2\u010d\u010e"+
		"\7P\2\2\u010e\u010f\7N\2\2\u010f\u0110\7K\2\2\u0110\u0111\7P\2\2\u0111"+
		"\u0112\7G\2\2\u0112\60\3\2\2\2\u0113\u0114\7H\2\2\u0114\u0115\7C\2\2\u0115"+
		"\u0116\7E\2\2\u0116\u0117\7V\2\2\u0117\u0118\7Q\2\2\u0118\u0119\7T\2\2"+
		"\u0119\u011a\7[\2\2\u011a\u011b\7I\2\2\u011b\u011c\7C\2\2\u011c\u011d"+
		"\7O\2\2\u011d\u011e\7G\2\2\u011e\u011f\7a\2\2\u011f\u0120\7C\2\2\u0120"+
		"\u0121\7R\2\2\u0121\u0122\7K\2\2\u0122\62\3\2\2\2\u0123\u0124\7I\2\2\u0124"+
		"\u0125\7G\2\2\u0125\u0126\7P\2\2\u0126\u0127\7G\2\2\u0127\u0128\7T\2\2"+
		"\u0128\u0129\7C\2\2\u0129\u012a\7V\2\2\u012a\u012b\7G\2\2\u012b\u012c"+
		"\7F\2\2\u012c\u012d\7a\2\2\u012d\u0131\3\2\2\2\u012e\u0130\t\3\2\2\u012f"+
		"\u012e\3\2\2\2\u0130\u0133\3\2\2\2\u0131\u012f\3\2\2\2\u0131\u0132\3\2"+
		"\2\2\u0132\u0134\3\2\2\2\u0133\u0131\3\2\2\2\u0134\u0135\7D\2\2\u0135"+
		"\u0136\7Q\2\2\u0136\u0137\7F\2\2\u0137\u0138\7[\2\2\u0138\64\3\2\2\2\u0139"+
		"\u013a\7<\2\2\u013a\66\3\2\2\2\u013b\u013c\7*\2\2\u013c8\3\2\2\2\u013d"+
		"\u013e\7+\2\2\u013e:\3\2\2\2\u013f\u0140\7}\2\2\u0140<\3\2\2\2\u0141\u0142"+
		"\7\177\2\2\u0142>\3\2\2\2\u0143\u0144\7>\2\2\u0144@\3\2\2\2\u0145\u0146"+
		"\7@\2\2\u0146B\3\2\2\2\u0147\u0148\7.\2\2\u0148D\3\2\2\2\u0149\u014a\7"+
		"\60\2\2\u014aF\3\2\2\2\u014b\u014c\7?\2\2\u014cH\3\2\2\2\u014d\u014e\7"+
		"=\2\2\u014eJ\3\2\2\2\u014f\u0150\7,\2\2\u0150L\3\2\2\2\u0151\u0152\7("+
		"\2\2\u0152N\3\2\2\2\u0153\u0154\7/\2\2\u0154P\3\2\2\2\u0155\u0156\7~\2"+
		"\2\u0156R\3\2\2\2\u0157\u0158\7#\2\2\u0158T\3\2\2\2\u0159\u015b\t\4\2"+
		"\2\u015a\u015c\t\5\2\2\u015b\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d\u015b"+
		"\3\2\2\2\u015d\u015e\3\2\2\2\u015eV\3\2\2\2\u015f\u0163\7$\2\2\u0160\u0162"+
		"\13\2\2\2\u0161\u0160\3\2\2\2\u0162\u0165\3\2\2\2\u0163\u0164\3\2\2\2"+
		"\u0163\u0161\3\2\2\2\u0164\u0166\3\2\2\2\u0165\u0163\3\2\2\2\u0166\u0167"+
		"\7$\2\2\u0167X\3\2\2\2\u0168\u016a\t\6\2\2\u0169\u0168\3\2\2\2\u016a\u016b"+
		"\3\2\2\2\u016b\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2\2\u016d"+
		"\u016f\7\60\2\2\u016e\u0170\t\6\2\2\u016f\u016e\3\2\2\2\u0170\u0171\3"+
		"\2\2\2\u0171\u016f\3\2\2\2\u0171\u0172\3\2\2\2\u0172Z\3\2\2\2\u0173\u0175"+
		"\t\6\2\2\u0174\u0173\3\2\2\2\u0175\u0176\3\2\2\2\u0176\u0174\3\2\2\2\u0176"+
		"\u0177\3\2\2\2\u0177\\\3\2\2\2\u0178\u017c\7%\2\2\u0179\u017b\n\7\2\2"+
		"\u017a\u0179\3\2\2\2\u017b\u017e\3\2\2\2\u017c\u017a\3\2\2\2\u017c\u017d"+
		"\3\2\2\2\u017d\u017f\3\2\2\2\u017e\u017c\3\2\2\2\u017f\u0180\b.\2\2\u0180"+
		"^\3\2\2\2\u0181\u0182\7\61\2\2\u0182\u0183\7\61\2\2\u0183\u0185\3\2\2"+
		"\2\u0184\u0186\5\5\2\2\u0185\u0184\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0187"+
		"\3\2\2\2\u0187\u0188\b/\2\2\u0188\u0189\b/\3\2\u0189`\3\2\2\2\u018a\u018b"+
		"\7\61\2\2\u018b\u018c\7,\2\2\u018c\u0190\3\2\2\2\u018d\u018f\7,\2\2\u018e"+
		"\u018d\3\2\2\2\u018f\u0192\3\2\2\2\u0190\u018e\3\2\2\2\u0190\u0191\3\2"+
		"\2\2\u0191\u0194\3\2\2\2\u0192\u0190\3\2\2\2\u0193\u0195\5\5\2\2\u0194"+
		"\u0193\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0197\b\60"+
		"\2\2\u0197\u0198\b\60\4\2\u0198b\3\2\2\2\u0199\u019b\t\b\2\2\u019a\u0199"+
		"\3\2\2\2\u019b\u019c\3\2\2\2\u019c\u019a\3\2\2\2\u019c\u019d\3\2\2\2\u019d"+
		"\u019e\3\2\2\2\u019e\u019f\b\61\2\2\u019fd\3\2\2\2\u01a0\u01a2\5\5\2\2"+
		"\u01a1\u01a0\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a4"+
		"\5\7\3\2\u01a4\u01a5\3\2\2\2\u01a5\u01a6\b\62\2\2\u01a6\u01a7\b\62\5\2"+
		"\u01a7f\3\2\2\2\u01a8\u01aa\n\7\2\2\u01a9\u01a8\3\2\2\2\u01aa\u01ab\3"+
		"\2\2\2\u01ab\u01a9\3\2\2\2\u01ab\u01ac\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad"+
		"\u01ae\b\63\6\2\u01aeh\3\2\2\2\u01af\u01b0\13\2\2\2\u01b0\u01b1\3\2\2"+
		"\2\u01b1\u01b2\b\64\2\2\u01b2j\3\2\2\2\u01b3\u01b5\5\5\2\2\u01b4\u01b3"+
		"\3\2\2\2\u01b5\u01b8\3\2\2\2\u01b6\u01b4\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7"+
		"\u01b9\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b9\u01ba\7,\2\2\u01ba\u01bb\7\61"+
		"\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01bd\b\65\2\2\u01bd\u01be\b\65\5\2\u01be"+
		"l\3\2\2\2\u01bf\u01c3\5\7\3\2\u01c0\u01c2\5\5\2\2\u01c1\u01c0\3\2\2\2"+
		"\u01c2\u01c5\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c6"+
		"\3\2\2\2\u01c5\u01c3\3\2\2\2\u01c6\u01c7\7,\2\2\u01c7\u01c8\n\t\2\2\u01c8"+
		"\u01c9\3\2\2\2\u01c9\u01ca\b\66\2\2\u01can\3\2\2\2\u01cb\u01cd\n\n\2\2"+
		"\u01cc\u01cb\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ce\u01cc\3\2\2\2\u01ce\u01cf"+
		"\3\2\2\2\u01cf\u01d0\3\2\2\2\u01d0\u01d1\b\67\6\2\u01d1p\3\2\2\2\u01d2"+
		"\u01d3\13\2\2\2\u01d3\u01d4\3\2\2\2\u01d4\u01d5\b8\2\2\u01d5r\3\2\2\2"+
		"\26\2\3\4v\u0131\u015d\u0163\u016b\u0171\u0176\u017c\u0185\u0190\u0194"+
		"\u019c\u01a1\u01ab\u01b6\u01c3\u01ce\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}