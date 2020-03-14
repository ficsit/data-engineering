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
		CLASS=1, CONST=2, FRIEND=3, PRIVATE=4, PROTECTED=5, PUBLIC=6, STATIC=7, 
		VIRTUAL=8, UCLASS=9, UFUNCTION=10, UPARAM=11, UPROPERTY=12, SF_CLASS_TAG=13, 
		SF_GENERATED_BODY=14, FORCEINLINE=15, COLON=16, OPEN_PAREN=17, CLOSE_PAREN=18, 
		OPEN_BRACE=19, CLOSE_BRACE=20, OPEN_ANGLE=21, CLOSE_ANGLE=22, COMMA=23, 
		PERIOD=24, EQUALS=25, SEMICOLON=26, STAR=27, AMPERSAND=28, IDENTIFIER=29, 
		STRING_LITERAL=30, FLOAT_LITERAL=31, INTEGER_LITERAL=32, PREPROCESSOR=33, 
		LINE_COMMENT_START=34, BLOCK_COMMENT_START=35, WHITESPACE=36, LINE_COMMENT_END=37, 
		LINE_COMMENT_TEXT=38, LINE_COMMENT_OTHER=39, BLOCK_COMMENT_END=40, BLOCK_COMMENT_NEW_LINE=41, 
		BLOCK_COMMENT_TEXT=42, BLOCK_COMMENT_OTHER=43;
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
		"Space", "Newline", "CLASS", "CONST", "FRIEND", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "VIRTUAL", "UCLASS", "UFUNCTION", "UPARAM", "UPROPERTY", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", 
		"COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "IDENTIFIER", 
		"STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'friend'", "'private'", "'protected'", "'public'", 
		"'static'", "'virtual'", "'UCLASS'", "'UFUNCTION'", "'UPARAM'", "'UPROPERTY'", 
		"'FACTORYGAME_API'", "'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", 
		"')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", 
		"'&'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "FRIEND", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
		"VIRTUAL", "UCLASS", "UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", 
		"EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "IDENTIFIER", "STRING_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", 
		"BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", 
		"LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", 
		"BLOCK_COMMENT_OTHER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2-\u0185\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\3\2\3\2\3\3\5\3c\n\3\3\3\3\3\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\36\3\36\3\37\3\37\3 \3 \6 \u010b\n \r \16 \u010c\3!\3!\7!\u0111"+
		"\n!\f!\16!\u0114\13!\3!\3!\3\"\6\"\u0119\n\"\r\"\16\"\u011a\3\"\3\"\6"+
		"\"\u011f\n\"\r\"\16\"\u0120\3#\6#\u0124\n#\r#\16#\u0125\3$\3$\7$\u012a"+
		"\n$\f$\16$\u012d\13$\3$\3$\3%\3%\3%\3%\5%\u0135\n%\3%\3%\3%\3&\3&\3&\3"+
		"&\7&\u013e\n&\f&\16&\u0141\13&\3&\5&\u0144\n&\3&\3&\3&\3\'\6\'\u014a\n"+
		"\'\r\'\16\'\u014b\3\'\3\'\3(\5(\u0151\n(\3(\3(\3(\3(\3(\3)\6)\u0159\n"+
		")\r)\16)\u015a\3)\3)\3*\3*\3*\3*\3+\7+\u0164\n+\f+\16+\u0167\13+\3+\3"+
		"+\3+\3+\3+\3+\3,\3,\7,\u0171\n,\f,\16,\u0174\13,\3,\3,\3,\3,\3,\3-\6-"+
		"\u017c\n-\r-\16-\u017d\3-\3-\3.\3.\3.\3.\3\u0112\2/\5\2\7\2\t\3\13\4\r"+
		"\5\17\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23"+
		"+\24-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%"+
		"O&Q\'S(U)W*Y+[,]-\5\2\3\4\n\4\2\13\13\"\"\4\2C\\c|\6\2\62;C\\aac|\3\2"+
		"\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u0190"+
		"\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3"+
		"\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2"+
		"\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2"+
		"\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2"+
		"\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2"+
		"\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2"+
		"O\3\2\2\2\3Q\3\2\2\2\3S\3\2\2\2\3U\3\2\2\2\4W\3\2\2\2\4Y\3\2\2\2\4[\3"+
		"\2\2\2\4]\3\2\2\2\5_\3\2\2\2\7b\3\2\2\2\tf\3\2\2\2\13l\3\2\2\2\rr\3\2"+
		"\2\2\17y\3\2\2\2\21\u0081\3\2\2\2\23\u008b\3\2\2\2\25\u0092\3\2\2\2\27"+
		"\u0099\3\2\2\2\31\u00a1\3\2\2\2\33\u00a8\3\2\2\2\35\u00b2\3\2\2\2\37\u00b9"+
		"\3\2\2\2!\u00c3\3\2\2\2#\u00d3\3\2\2\2%\u00e2\3\2\2\2\'\u00ee\3\2\2\2"+
		")\u00f0\3\2\2\2+\u00f2\3\2\2\2-\u00f4\3\2\2\2/\u00f6\3\2\2\2\61\u00f8"+
		"\3\2\2\2\63\u00fa\3\2\2\2\65\u00fc\3\2\2\2\67\u00fe\3\2\2\29\u0100\3\2"+
		"\2\2;\u0102\3\2\2\2=\u0104\3\2\2\2?\u0106\3\2\2\2A\u0108\3\2\2\2C\u010e"+
		"\3\2\2\2E\u0118\3\2\2\2G\u0123\3\2\2\2I\u0127\3\2\2\2K\u0130\3\2\2\2M"+
		"\u0139\3\2\2\2O\u0149\3\2\2\2Q\u0150\3\2\2\2S\u0158\3\2\2\2U\u015e\3\2"+
		"\2\2W\u0165\3\2\2\2Y\u016e\3\2\2\2[\u017b\3\2\2\2]\u0181\3\2\2\2_`\t\2"+
		"\2\2`\6\3\2\2\2ac\7\17\2\2ba\3\2\2\2bc\3\2\2\2cd\3\2\2\2de\7\f\2\2e\b"+
		"\3\2\2\2fg\7e\2\2gh\7n\2\2hi\7c\2\2ij\7u\2\2jk\7u\2\2k\n\3\2\2\2lm\7e"+
		"\2\2mn\7q\2\2no\7p\2\2op\7u\2\2pq\7v\2\2q\f\3\2\2\2rs\7h\2\2st\7t\2\2"+
		"tu\7k\2\2uv\7g\2\2vw\7p\2\2wx\7f\2\2x\16\3\2\2\2yz\7r\2\2z{\7t\2\2{|\7"+
		"k\2\2|}\7x\2\2}~\7c\2\2~\177\7v\2\2\177\u0080\7g\2\2\u0080\20\3\2\2\2"+
		"\u0081\u0082\7r\2\2\u0082\u0083\7t\2\2\u0083\u0084\7q\2\2\u0084\u0085"+
		"\7v\2\2\u0085\u0086\7g\2\2\u0086\u0087\7e\2\2\u0087\u0088\7v\2\2\u0088"+
		"\u0089\7g\2\2\u0089\u008a\7f\2\2\u008a\22\3\2\2\2\u008b\u008c\7r\2\2\u008c"+
		"\u008d\7w\2\2\u008d\u008e\7d\2\2\u008e\u008f\7n\2\2\u008f\u0090\7k\2\2"+
		"\u0090\u0091\7e\2\2\u0091\24\3\2\2\2\u0092\u0093\7u\2\2\u0093\u0094\7"+
		"v\2\2\u0094\u0095\7c\2\2\u0095\u0096\7v\2\2\u0096\u0097\7k\2\2\u0097\u0098"+
		"\7e\2\2\u0098\26\3\2\2\2\u0099\u009a\7x\2\2\u009a\u009b\7k\2\2\u009b\u009c"+
		"\7t\2\2\u009c\u009d\7v\2\2\u009d\u009e\7w\2\2\u009e\u009f\7c\2\2\u009f"+
		"\u00a0\7n\2\2\u00a0\30\3\2\2\2\u00a1\u00a2\7W\2\2\u00a2\u00a3\7E\2\2\u00a3"+
		"\u00a4\7N\2\2\u00a4\u00a5\7C\2\2\u00a5\u00a6\7U\2\2\u00a6\u00a7\7U\2\2"+
		"\u00a7\32\3\2\2\2\u00a8\u00a9\7W\2\2\u00a9\u00aa\7H\2\2\u00aa\u00ab\7"+
		"W\2\2\u00ab\u00ac\7P\2\2\u00ac\u00ad\7E\2\2\u00ad\u00ae\7V\2\2\u00ae\u00af"+
		"\7K\2\2\u00af\u00b0\7Q\2\2\u00b0\u00b1\7P\2\2\u00b1\34\3\2\2\2\u00b2\u00b3"+
		"\7W\2\2\u00b3\u00b4\7R\2\2\u00b4\u00b5\7C\2\2\u00b5\u00b6\7T\2\2\u00b6"+
		"\u00b7\7C\2\2\u00b7\u00b8\7O\2\2\u00b8\36\3\2\2\2\u00b9\u00ba\7W\2\2\u00ba"+
		"\u00bb\7R\2\2\u00bb\u00bc\7T\2\2\u00bc\u00bd\7Q\2\2\u00bd\u00be\7R\2\2"+
		"\u00be\u00bf\7G\2\2\u00bf\u00c0\7T\2\2\u00c0\u00c1\7V\2\2\u00c1\u00c2"+
		"\7[\2\2\u00c2 \3\2\2\2\u00c3\u00c4\7H\2\2\u00c4\u00c5\7C\2\2\u00c5\u00c6"+
		"\7E\2\2\u00c6\u00c7\7V\2\2\u00c7\u00c8\7Q\2\2\u00c8\u00c9\7T\2\2\u00c9"+
		"\u00ca\7[\2\2\u00ca\u00cb\7I\2\2\u00cb\u00cc\7C\2\2\u00cc\u00cd\7O\2\2"+
		"\u00cd\u00ce\7G\2\2\u00ce\u00cf\7a\2\2\u00cf\u00d0\7C\2\2\u00d0\u00d1"+
		"\7R\2\2\u00d1\u00d2\7K\2\2\u00d2\"\3\2\2\2\u00d3\u00d4\7I\2\2\u00d4\u00d5"+
		"\7G\2\2\u00d5\u00d6\7P\2\2\u00d6\u00d7\7G\2\2\u00d7\u00d8\7T\2\2\u00d8"+
		"\u00d9\7C\2\2\u00d9\u00da\7V\2\2\u00da\u00db\7G\2\2\u00db\u00dc\7F\2\2"+
		"\u00dc\u00dd\7a\2\2\u00dd\u00de\7D\2\2\u00de\u00df\7Q\2\2\u00df\u00e0"+
		"\7F\2\2\u00e0\u00e1\7[\2\2\u00e1$\3\2\2\2\u00e2\u00e3\7H\2\2\u00e3\u00e4"+
		"\7Q\2\2\u00e4\u00e5\7T\2\2\u00e5\u00e6\7E\2\2\u00e6\u00e7\7G\2\2\u00e7"+
		"\u00e8\7K\2\2\u00e8\u00e9\7P\2\2\u00e9\u00ea\7N\2\2\u00ea\u00eb\7K\2\2"+
		"\u00eb\u00ec\7P\2\2\u00ec\u00ed\7G\2\2\u00ed&\3\2\2\2\u00ee\u00ef\7<\2"+
		"\2\u00ef(\3\2\2\2\u00f0\u00f1\7*\2\2\u00f1*\3\2\2\2\u00f2\u00f3\7+\2\2"+
		"\u00f3,\3\2\2\2\u00f4\u00f5\7}\2\2\u00f5.\3\2\2\2\u00f6\u00f7\7\177\2"+
		"\2\u00f7\60\3\2\2\2\u00f8\u00f9\7>\2\2\u00f9\62\3\2\2\2\u00fa\u00fb\7"+
		"@\2\2\u00fb\64\3\2\2\2\u00fc\u00fd\7.\2\2\u00fd\66\3\2\2\2\u00fe\u00ff"+
		"\7\60\2\2\u00ff8\3\2\2\2\u0100\u0101\7?\2\2\u0101:\3\2\2\2\u0102\u0103"+
		"\7=\2\2\u0103<\3\2\2\2\u0104\u0105\7,\2\2\u0105>\3\2\2\2\u0106\u0107\7"+
		"(\2\2\u0107@\3\2\2\2\u0108\u010a\t\3\2\2\u0109\u010b\t\4\2\2\u010a\u0109"+
		"\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d"+
		"B\3\2\2\2\u010e\u0112\7$\2\2\u010f\u0111\13\2\2\2\u0110\u010f\3\2\2\2"+
		"\u0111\u0114\3\2\2\2\u0112\u0113\3\2\2\2\u0112\u0110\3\2\2\2\u0113\u0115"+
		"\3\2\2\2\u0114\u0112\3\2\2\2\u0115\u0116\7$\2\2\u0116D\3\2\2\2\u0117\u0119"+
		"\t\5\2\2\u0118\u0117\3\2\2\2\u0119\u011a\3\2\2\2\u011a\u0118\3\2\2\2\u011a"+
		"\u011b\3\2\2\2\u011b\u011c\3\2\2\2\u011c\u011e\7\60\2\2\u011d\u011f\t"+
		"\5\2\2\u011e\u011d\3\2\2\2\u011f\u0120\3\2\2\2\u0120\u011e\3\2\2\2\u0120"+
		"\u0121\3\2\2\2\u0121F\3\2\2\2\u0122\u0124\t\5\2\2\u0123\u0122\3\2\2\2"+
		"\u0124\u0125\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126H\3"+
		"\2\2\2\u0127\u012b\7%\2\2\u0128\u012a\n\6\2\2\u0129\u0128\3\2\2\2\u012a"+
		"\u012d\3\2\2\2\u012b\u0129\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012e\3\2"+
		"\2\2\u012d\u012b\3\2\2\2\u012e\u012f\b$\2\2\u012fJ\3\2\2\2\u0130\u0131"+
		"\7\61\2\2\u0131\u0132\7\61\2\2\u0132\u0134\3\2\2\2\u0133\u0135\5\5\2\2"+
		"\u0134\u0133\3\2\2\2\u0134\u0135\3\2\2\2\u0135\u0136\3\2\2\2\u0136\u0137"+
		"\b%\2\2\u0137\u0138\b%\3\2\u0138L\3\2\2\2\u0139\u013a\7\61\2\2\u013a\u013b"+
		"\7,\2\2\u013b\u013f\3\2\2\2\u013c\u013e\7,\2\2\u013d\u013c\3\2\2\2\u013e"+
		"\u0141\3\2\2\2\u013f\u013d\3\2\2\2\u013f\u0140\3\2\2\2\u0140\u0143\3\2"+
		"\2\2\u0141\u013f\3\2\2\2\u0142\u0144\5\5\2\2\u0143\u0142\3\2\2\2\u0143"+
		"\u0144\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0146\b&\2\2\u0146\u0147\b&\4"+
		"\2\u0147N\3\2\2\2\u0148\u014a\t\7\2\2\u0149\u0148\3\2\2\2\u014a\u014b"+
		"\3\2\2\2\u014b\u0149\3\2\2\2\u014b\u014c\3\2\2\2\u014c\u014d\3\2\2\2\u014d"+
		"\u014e\b\'\2\2\u014eP\3\2\2\2\u014f\u0151\5\5\2\2\u0150\u014f\3\2\2\2"+
		"\u0150\u0151\3\2\2\2\u0151\u0152\3\2\2\2\u0152\u0153\5\7\3\2\u0153\u0154"+
		"\3\2\2\2\u0154\u0155\b(\2\2\u0155\u0156\b(\5\2\u0156R\3\2\2\2\u0157\u0159"+
		"\n\6\2\2\u0158\u0157\3\2\2\2\u0159\u015a\3\2\2\2\u015a\u0158\3\2\2\2\u015a"+
		"\u015b\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u015d\b)\6\2\u015dT\3\2\2\2\u015e"+
		"\u015f\13\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161\b*\2\2\u0161V\3\2\2\2"+
		"\u0162\u0164\5\5\2\2\u0163\u0162\3\2\2\2\u0164\u0167\3\2\2\2\u0165\u0163"+
		"\3\2\2\2\u0165\u0166\3\2\2\2\u0166\u0168\3\2\2\2\u0167\u0165\3\2\2\2\u0168"+
		"\u0169\7,\2\2\u0169\u016a\7\61\2\2\u016a\u016b\3\2\2\2\u016b\u016c\b+"+
		"\2\2\u016c\u016d\b+\5\2\u016dX\3\2\2\2\u016e\u0172\5\7\3\2\u016f\u0171"+
		"\5\5\2\2\u0170\u016f\3\2\2\2\u0171\u0174\3\2\2\2\u0172\u0170\3\2\2\2\u0172"+
		"\u0173\3\2\2\2\u0173\u0175\3\2\2\2\u0174\u0172\3\2\2\2\u0175\u0176\7,"+
		"\2\2\u0176\u0177\n\b\2\2\u0177\u0178\3\2\2\2\u0178\u0179\b,\2\2\u0179"+
		"Z\3\2\2\2\u017a\u017c\n\t\2\2\u017b\u017a\3\2\2\2\u017c\u017d\3\2\2\2"+
		"\u017d\u017b\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180"+
		"\b-\6\2\u0180\\\3\2\2\2\u0181\u0182\13\2\2\2\u0182\u0183\3\2\2\2\u0183"+
		"\u0184\b.\2\2\u0184^\3\2\2\2\25\2\3\4b\u010c\u0112\u011a\u0120\u0125\u012b"+
		"\u0134\u013f\u0143\u014b\u0150\u015a\u0165\u0172\u017d\7\b\2\2\7\3\2\7"+
		"\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}