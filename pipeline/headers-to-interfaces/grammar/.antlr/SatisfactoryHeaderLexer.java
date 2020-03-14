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
		PUBLIC=9, STATIC=10, TRUE=11, TYPEDEF=12, VIRTUAL=13, UCLASS=14, UENUM=15, 
		UFUNCTION=16, UINTERFACE=17, UMETA=18, UPARAM=19, UPROPERTY=20, FORCEINLINE=21, 
		SF_CLASS_TAG=22, SF_GENERATED_BODY=23, COLON=24, OPEN_PAREN=25, CLOSE_PAREN=26, 
		OPEN_BRACE=27, CLOSE_BRACE=28, OPEN_ANGLE=29, CLOSE_ANGLE=30, COMMA=31, 
		PERIOD=32, EQUALS=33, SEMICOLON=34, STAR=35, AMPERSAND=36, HYPHEN=37, 
		PIPE=38, BANG=39, IDENTIFIER=40, STRING_LITERAL=41, FLOAT_LITERAL=42, 
		INTEGER_LITERAL=43, PREPROCESSOR=44, LINE_COMMENT_START=45, BLOCK_COMMENT_START=46, 
		WHITESPACE=47, LINE_COMMENT_END=48, LINE_COMMENT_TEXT=49, LINE_COMMENT_OTHER=50, 
		BLOCK_COMMENT_END=51, BLOCK_COMMENT_NEW_LINE=52, BLOCK_COMMENT_TEXT=53, 
		BLOCK_COMMENT_OTHER=54;
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
		"PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "TRUE", "TYPEDEF", "VIRTUAL", 
		"UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", 
		"FORCEINLINE", "SF_CLASS_TAG", "SF_GENERATED_BODY", "COLON", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", 
		"COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", 
		"PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'typedef'", 
		"'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", 
		"'UPARAM'", "'UPROPERTY'", "'FORCEINLINE'", "'FACTORYGAME_API'", null, 
		"':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", 
		"';'", "'*'", "'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", 
		"UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "FORCEINLINE", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\28\u01e0\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\3\2\3\2\3\3\5\3y"+
		"\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\7\32\u013a\n\32"+
		"\f\32\16\32\u013d\13\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3"+
		"\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&"+
		"\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\6+\u0166\n+\r+\16+\u0167\3,\3,\7,"+
		"\u016c\n,\f,\16,\u016f\13,\3,\3,\3-\6-\u0174\n-\r-\16-\u0175\3-\3-\6-"+
		"\u017a\n-\r-\16-\u017b\3.\6.\u017f\n.\r.\16.\u0180\3/\3/\7/\u0185\n/\f"+
		"/\16/\u0188\13/\3/\3/\3\60\3\60\3\60\3\60\5\60\u0190\n\60\3\60\3\60\3"+
		"\60\3\61\3\61\3\61\3\61\7\61\u0199\n\61\f\61\16\61\u019c\13\61\3\61\5"+
		"\61\u019f\n\61\3\61\3\61\3\61\3\62\6\62\u01a5\n\62\r\62\16\62\u01a6\3"+
		"\62\3\62\3\63\5\63\u01ac\n\63\3\63\3\63\3\63\3\63\3\63\3\64\6\64\u01b4"+
		"\n\64\r\64\16\64\u01b5\3\64\3\64\3\65\3\65\3\65\3\65\3\66\7\66\u01bf\n"+
		"\66\f\66\16\66\u01c2\13\66\3\66\3\66\3\66\3\66\3\66\3\66\3\67\3\67\7\67"+
		"\u01cc\n\67\f\67\16\67\u01cf\13\67\3\67\3\67\3\67\3\67\3\67\38\68\u01d7"+
		"\n8\r8\168\u01d8\38\38\39\39\39\39\3\u016d\2:\5\2\7\2\t\3\13\4\r\5\17"+
		"\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24"+
		"-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'"+
		"S(U)W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66q\67s8\5\2\3\4\13\4\2\13\13"+
		"\"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17"+
		"\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u01ec\2\t\3\2\2\2\2\13\3\2\2\2\2\r"+
		"\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2"+
		"\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2"+
		"#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3"+
		"\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2"+
		"\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G"+
		"\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2"+
		"\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2"+
		"\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\3g\3\2\2\2\3i\3\2\2\2\3k\3\2\2\2\4m"+
		"\3\2\2\2\4o\3\2\2\2\4q\3\2\2\2\4s\3\2\2\2\5u\3\2\2\2\7x\3\2\2\2\t|\3\2"+
		"\2\2\13\u0082\3\2\2\2\r\u0088\3\2\2\2\17\u008d\3\2\2\2\21\u0093\3\2\2"+
		"\2\23\u009a\3\2\2\2\25\u00a3\3\2\2\2\27\u00ab\3\2\2\2\31\u00b5\3\2\2\2"+
		"\33\u00bc\3\2\2\2\35\u00c3\3\2\2\2\37\u00c8\3\2\2\2!\u00d0\3\2\2\2#\u00d8"+
		"\3\2\2\2%\u00df\3\2\2\2\'\u00e5\3\2\2\2)\u00ef\3\2\2\2+\u00fa\3\2\2\2"+
		"-\u0100\3\2\2\2/\u0107\3\2\2\2\61\u0111\3\2\2\2\63\u011d\3\2\2\2\65\u012d"+
		"\3\2\2\2\67\u0143\3\2\2\29\u0145\3\2\2\2;\u0147\3\2\2\2=\u0149\3\2\2\2"+
		"?\u014b\3\2\2\2A\u014d\3\2\2\2C\u014f\3\2\2\2E\u0151\3\2\2\2G\u0153\3"+
		"\2\2\2I\u0155\3\2\2\2K\u0157\3\2\2\2M\u0159\3\2\2\2O\u015b\3\2\2\2Q\u015d"+
		"\3\2\2\2S\u015f\3\2\2\2U\u0161\3\2\2\2W\u0163\3\2\2\2Y\u0169\3\2\2\2["+
		"\u0173\3\2\2\2]\u017e\3\2\2\2_\u0182\3\2\2\2a\u018b\3\2\2\2c\u0194\3\2"+
		"\2\2e\u01a4\3\2\2\2g\u01ab\3\2\2\2i\u01b3\3\2\2\2k\u01b9\3\2\2\2m\u01c0"+
		"\3\2\2\2o\u01c9\3\2\2\2q\u01d6\3\2\2\2s\u01dc\3\2\2\2uv\t\2\2\2v\6\3\2"+
		"\2\2wy\7\17\2\2xw\3\2\2\2xy\3\2\2\2yz\3\2\2\2z{\7\f\2\2{\b\3\2\2\2|}\7"+
		"e\2\2}~\7n\2\2~\177\7c\2\2\177\u0080\7u\2\2\u0080\u0081\7u\2\2\u0081\n"+
		"\3\2\2\2\u0082\u0083\7e\2\2\u0083\u0084\7q\2\2\u0084\u0085\7p\2\2\u0085"+
		"\u0086\7u\2\2\u0086\u0087\7v\2\2\u0087\f\3\2\2\2\u0088\u0089\7g\2\2\u0089"+
		"\u008a\7p\2\2\u008a\u008b\7w\2\2\u008b\u008c\7o\2\2\u008c\16\3\2\2\2\u008d"+
		"\u008e\7h\2\2\u008e\u008f\7c\2\2\u008f\u0090\7n\2\2\u0090\u0091\7u\2\2"+
		"\u0091\u0092\7g\2\2\u0092\20\3\2\2\2\u0093\u0094\7h\2\2\u0094\u0095\7"+
		"t\2\2\u0095\u0096\7k\2\2\u0096\u0097\7g\2\2\u0097\u0098\7p\2\2\u0098\u0099"+
		"\7f\2\2\u0099\22\3\2\2\2\u009a\u009b\7q\2\2\u009b\u009c\7x\2\2\u009c\u009d"+
		"\7g\2\2\u009d\u009e\7t\2\2\u009e\u009f\7t\2\2\u009f\u00a0\7k\2\2\u00a0"+
		"\u00a1\7f\2\2\u00a1\u00a2\7g\2\2\u00a2\24\3\2\2\2\u00a3\u00a4\7r\2\2\u00a4"+
		"\u00a5\7t\2\2\u00a5\u00a6\7k\2\2\u00a6\u00a7\7x\2\2\u00a7\u00a8\7c\2\2"+
		"\u00a8\u00a9\7v\2\2\u00a9\u00aa\7g\2\2\u00aa\26\3\2\2\2\u00ab\u00ac\7"+
		"r\2\2\u00ac\u00ad\7t\2\2\u00ad\u00ae\7q\2\2\u00ae\u00af\7v\2\2\u00af\u00b0"+
		"\7g\2\2\u00b0\u00b1\7e\2\2\u00b1\u00b2\7v\2\2\u00b2\u00b3\7g\2\2\u00b3"+
		"\u00b4\7f\2\2\u00b4\30\3\2\2\2\u00b5\u00b6\7r\2\2\u00b6\u00b7\7w\2\2\u00b7"+
		"\u00b8\7d\2\2\u00b8\u00b9\7n\2\2\u00b9\u00ba\7k\2\2\u00ba\u00bb\7e\2\2"+
		"\u00bb\32\3\2\2\2\u00bc\u00bd\7u\2\2\u00bd\u00be\7v\2\2\u00be\u00bf\7"+
		"c\2\2\u00bf\u00c0\7v\2\2\u00c0\u00c1\7k\2\2\u00c1\u00c2\7e\2\2\u00c2\34"+
		"\3\2\2\2\u00c3\u00c4\7v\2\2\u00c4\u00c5\7t\2\2\u00c5\u00c6\7w\2\2\u00c6"+
		"\u00c7\7g\2\2\u00c7\36\3\2\2\2\u00c8\u00c9\7v\2\2\u00c9\u00ca\7{\2\2\u00ca"+
		"\u00cb\7r\2\2\u00cb\u00cc\7g\2\2\u00cc\u00cd\7f\2\2\u00cd\u00ce\7g\2\2"+
		"\u00ce\u00cf\7h\2\2\u00cf \3\2\2\2\u00d0\u00d1\7x\2\2\u00d1\u00d2\7k\2"+
		"\2\u00d2\u00d3\7t\2\2\u00d3\u00d4\7v\2\2\u00d4\u00d5\7w\2\2\u00d5\u00d6"+
		"\7c\2\2\u00d6\u00d7\7n\2\2\u00d7\"\3\2\2\2\u00d8\u00d9\7W\2\2\u00d9\u00da"+
		"\7E\2\2\u00da\u00db\7N\2\2\u00db\u00dc\7C\2\2\u00dc\u00dd\7U\2\2\u00dd"+
		"\u00de\7U\2\2\u00de$\3\2\2\2\u00df\u00e0\7W\2\2\u00e0\u00e1\7G\2\2\u00e1"+
		"\u00e2\7P\2\2\u00e2\u00e3\7W\2\2\u00e3\u00e4\7O\2\2\u00e4&\3\2\2\2\u00e5"+
		"\u00e6\7W\2\2\u00e6\u00e7\7H\2\2\u00e7\u00e8\7W\2\2\u00e8\u00e9\7P\2\2"+
		"\u00e9\u00ea\7E\2\2\u00ea\u00eb\7V\2\2\u00eb\u00ec\7K\2\2\u00ec\u00ed"+
		"\7Q\2\2\u00ed\u00ee\7P\2\2\u00ee(\3\2\2\2\u00ef\u00f0\7W\2\2\u00f0\u00f1"+
		"\7K\2\2\u00f1\u00f2\7P\2\2\u00f2\u00f3\7V\2\2\u00f3\u00f4\7G\2\2\u00f4"+
		"\u00f5\7T\2\2\u00f5\u00f6\7H\2\2\u00f6\u00f7\7C\2\2\u00f7\u00f8\7E\2\2"+
		"\u00f8\u00f9\7G\2\2\u00f9*\3\2\2\2\u00fa\u00fb\7W\2\2\u00fb\u00fc\7O\2"+
		"\2\u00fc\u00fd\7G\2\2\u00fd\u00fe\7V\2\2\u00fe\u00ff\7C\2\2\u00ff,\3\2"+
		"\2\2\u0100\u0101\7W\2\2\u0101\u0102\7R\2\2\u0102\u0103\7C\2\2\u0103\u0104"+
		"\7T\2\2\u0104\u0105\7C\2\2\u0105\u0106\7O\2\2\u0106.\3\2\2\2\u0107\u0108"+
		"\7W\2\2\u0108\u0109\7R\2\2\u0109\u010a\7T\2\2\u010a\u010b\7Q\2\2\u010b"+
		"\u010c\7R\2\2\u010c\u010d\7G\2\2\u010d\u010e\7T\2\2\u010e\u010f\7V\2\2"+
		"\u010f\u0110\7[\2\2\u0110\60\3\2\2\2\u0111\u0112\7H\2\2\u0112\u0113\7"+
		"Q\2\2\u0113\u0114\7T\2\2\u0114\u0115\7E\2\2\u0115\u0116\7G\2\2\u0116\u0117"+
		"\7K\2\2\u0117\u0118\7P\2\2\u0118\u0119\7N\2\2\u0119\u011a\7K\2\2\u011a"+
		"\u011b\7P\2\2\u011b\u011c\7G\2\2\u011c\62\3\2\2\2\u011d\u011e\7H\2\2\u011e"+
		"\u011f\7C\2\2\u011f\u0120\7E\2\2\u0120\u0121\7V\2\2\u0121\u0122\7Q\2\2"+
		"\u0122\u0123\7T\2\2\u0123\u0124\7[\2\2\u0124\u0125\7I\2\2\u0125\u0126"+
		"\7C\2\2\u0126\u0127\7O\2\2\u0127\u0128\7G\2\2\u0128\u0129\7a\2\2\u0129"+
		"\u012a\7C\2\2\u012a\u012b\7R\2\2\u012b\u012c\7K\2\2\u012c\64\3\2\2\2\u012d"+
		"\u012e\7I\2\2\u012e\u012f\7G\2\2\u012f\u0130\7P\2\2\u0130\u0131\7G\2\2"+
		"\u0131\u0132\7T\2\2\u0132\u0133\7C\2\2\u0133\u0134\7V\2\2\u0134\u0135"+
		"\7G\2\2\u0135\u0136\7F\2\2\u0136\u0137\7a\2\2\u0137\u013b\3\2\2\2\u0138"+
		"\u013a\t\3\2\2\u0139\u0138\3\2\2\2\u013a\u013d\3\2\2\2\u013b\u0139\3\2"+
		"\2\2\u013b\u013c\3\2\2\2\u013c\u013e\3\2\2\2\u013d\u013b\3\2\2\2\u013e"+
		"\u013f\7D\2\2\u013f\u0140\7Q\2\2\u0140\u0141\7F\2\2\u0141\u0142\7[\2\2"+
		"\u0142\66\3\2\2\2\u0143\u0144\7<\2\2\u01448\3\2\2\2\u0145\u0146\7*\2\2"+
		"\u0146:\3\2\2\2\u0147\u0148\7+\2\2\u0148<\3\2\2\2\u0149\u014a\7}\2\2\u014a"+
		">\3\2\2\2\u014b\u014c\7\177\2\2\u014c@\3\2\2\2\u014d\u014e\7>\2\2\u014e"+
		"B\3\2\2\2\u014f\u0150\7@\2\2\u0150D\3\2\2\2\u0151\u0152\7.\2\2\u0152F"+
		"\3\2\2\2\u0153\u0154\7\60\2\2\u0154H\3\2\2\2\u0155\u0156\7?\2\2\u0156"+
		"J\3\2\2\2\u0157\u0158\7=\2\2\u0158L\3\2\2\2\u0159\u015a\7,\2\2\u015aN"+
		"\3\2\2\2\u015b\u015c\7(\2\2\u015cP\3\2\2\2\u015d\u015e\7/\2\2\u015eR\3"+
		"\2\2\2\u015f\u0160\7~\2\2\u0160T\3\2\2\2\u0161\u0162\7#\2\2\u0162V\3\2"+
		"\2\2\u0163\u0165\t\4\2\2\u0164\u0166\t\5\2\2\u0165\u0164\3\2\2\2\u0166"+
		"\u0167\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2\2\2\u0168X\3\2\2\2"+
		"\u0169\u016d\7$\2\2\u016a\u016c\13\2\2\2\u016b\u016a\3\2\2\2\u016c\u016f"+
		"\3\2\2\2\u016d\u016e\3\2\2\2\u016d\u016b\3\2\2\2\u016e\u0170\3\2\2\2\u016f"+
		"\u016d\3\2\2\2\u0170\u0171\7$\2\2\u0171Z\3\2\2\2\u0172\u0174\t\6\2\2\u0173"+
		"\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175\u0173\3\2\2\2\u0175\u0176\3\2"+
		"\2\2\u0176\u0177\3\2\2\2\u0177\u0179\7\60\2\2\u0178\u017a\t\6\2\2\u0179"+
		"\u0178\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u0179\3\2\2\2\u017b\u017c\3\2"+
		"\2\2\u017c\\\3\2\2\2\u017d\u017f\t\6\2\2\u017e\u017d\3\2\2\2\u017f\u0180"+
		"\3\2\2\2\u0180\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181^\3\2\2\2\u0182"+
		"\u0186\7%\2\2\u0183\u0185\n\7\2\2\u0184\u0183\3\2\2\2\u0185\u0188\3\2"+
		"\2\2\u0186\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0189\3\2\2\2\u0188"+
		"\u0186\3\2\2\2\u0189\u018a\b/\2\2\u018a`\3\2\2\2\u018b\u018c\7\61\2\2"+
		"\u018c\u018d\7\61\2\2\u018d\u018f\3\2\2\2\u018e\u0190\5\5\2\2\u018f\u018e"+
		"\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u0192\b\60\2\2"+
		"\u0192\u0193\b\60\3\2\u0193b\3\2\2\2\u0194\u0195\7\61\2\2\u0195\u0196"+
		"\7,\2\2\u0196\u019a\3\2\2\2\u0197\u0199\7,\2\2\u0198\u0197\3\2\2\2\u0199"+
		"\u019c\3\2\2\2\u019a\u0198\3\2\2\2\u019a\u019b\3\2\2\2\u019b\u019e\3\2"+
		"\2\2\u019c\u019a\3\2\2\2\u019d\u019f\5\5\2\2\u019e\u019d\3\2\2\2\u019e"+
		"\u019f\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0\u01a1\b\61\2\2\u01a1\u01a2\b"+
		"\61\4\2\u01a2d\3\2\2\2\u01a3\u01a5\t\b\2\2\u01a4\u01a3\3\2\2\2\u01a5\u01a6"+
		"\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8"+
		"\u01a9\b\62\2\2\u01a9f\3\2\2\2\u01aa\u01ac\5\5\2\2\u01ab\u01aa\3\2\2\2"+
		"\u01ab\u01ac\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae\5\7\3\2\u01ae\u01af"+
		"\3\2\2\2\u01af\u01b0\b\63\2\2\u01b0\u01b1\b\63\5\2\u01b1h\3\2\2\2\u01b2"+
		"\u01b4\n\7\2\2\u01b3\u01b2\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b3\3\2"+
		"\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b8\b\64\6\2\u01b8"+
		"j\3\2\2\2\u01b9\u01ba\13\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\b\65\2"+
		"\2\u01bcl\3\2\2\2\u01bd\u01bf\5\5\2\2\u01be\u01bd\3\2\2\2\u01bf\u01c2"+
		"\3\2\2\2\u01c0\u01be\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1\u01c3\3\2\2\2\u01c2"+
		"\u01c0\3\2\2\2\u01c3\u01c4\7,\2\2\u01c4\u01c5\7\61\2\2\u01c5\u01c6\3\2"+
		"\2\2\u01c6\u01c7\b\66\2\2\u01c7\u01c8\b\66\5\2\u01c8n\3\2\2\2\u01c9\u01cd"+
		"\5\7\3\2\u01ca\u01cc\5\5\2\2\u01cb\u01ca\3\2\2\2\u01cc\u01cf\3\2\2\2\u01cd"+
		"\u01cb\3\2\2\2\u01cd\u01ce\3\2\2\2\u01ce\u01d0\3\2\2\2\u01cf\u01cd\3\2"+
		"\2\2\u01d0\u01d1\7,\2\2\u01d1\u01d2\n\t\2\2\u01d2\u01d3\3\2\2\2\u01d3"+
		"\u01d4\b\67\2\2\u01d4p\3\2\2\2\u01d5\u01d7\n\n\2\2\u01d6\u01d5\3\2\2\2"+
		"\u01d7\u01d8\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u01da"+
		"\3\2\2\2\u01da\u01db\b8\6\2\u01dbr\3\2\2\2\u01dc\u01dd\13\2\2\2\u01dd"+
		"\u01de\3\2\2\2\u01de\u01df\b9\2\2\u01dft\3\2\2\2\26\2\3\4x\u013b\u0167"+
		"\u016d\u0175\u017b\u0180\u0186\u018f\u019a\u019e\u01a6\u01ab\u01b5\u01c0"+
		"\u01cd\u01d8\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}