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
		UMETA=16, UPARAM=17, UPROPERTY=18, SF_CLASS_TAG=19, SF_GENERATED_BODY=20, 
		FORCEINLINE=21, COLON=22, OPEN_PAREN=23, CLOSE_PAREN=24, OPEN_BRACE=25, 
		CLOSE_BRACE=26, OPEN_ANGLE=27, CLOSE_ANGLE=28, COMMA=29, PERIOD=30, EQUALS=31, 
		SEMICOLON=32, STAR=33, AMPERSAND=34, HYPHEN=35, PIPE=36, BANG=37, IDENTIFIER=38, 
		STRING_LITERAL=39, FLOAT_LITERAL=40, INTEGER_LITERAL=41, PREPROCESSOR=42, 
		LINE_COMMENT_START=43, BLOCK_COMMENT_START=44, WHITESPACE=45, LINE_COMMENT_END=46, 
		LINE_COMMENT_TEXT=47, LINE_COMMENT_OTHER=48, BLOCK_COMMENT_END=49, BLOCK_COMMENT_NEW_LINE=50, 
		BLOCK_COMMENT_TEXT=51, BLOCK_COMMENT_OTHER=52;
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
		"UENUM", "UFUNCTION", "UMETA", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
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
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'FACTORYGAME_API'", "'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", 
		"')'", "'{'", "'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", 
		"'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UMETA", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", 
		"STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\66\u01c2\b\1\b\1"+
		"\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4"+
		"\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t"+
		"\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t"+
		"\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t"+
		"\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4"+
		"*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63"+
		"\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\3\2\3\2\3\3\5\3u\n\3\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3"+
		"\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21"+
		"\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33"+
		"\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$"+
		"\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\6)\u0148\n)\r)\16)\u0149\3*\3*\7*"+
		"\u014e\n*\f*\16*\u0151\13*\3*\3*\3+\6+\u0156\n+\r+\16+\u0157\3+\3+\6+"+
		"\u015c\n+\r+\16+\u015d\3,\6,\u0161\n,\r,\16,\u0162\3-\3-\7-\u0167\n-\f"+
		"-\16-\u016a\13-\3-\3-\3.\3.\3.\3.\5.\u0172\n.\3.\3.\3.\3/\3/\3/\3/\7/"+
		"\u017b\n/\f/\16/\u017e\13/\3/\5/\u0181\n/\3/\3/\3/\3\60\6\60\u0187\n\60"+
		"\r\60\16\60\u0188\3\60\3\60\3\61\5\61\u018e\n\61\3\61\3\61\3\61\3\61\3"+
		"\61\3\62\6\62\u0196\n\62\r\62\16\62\u0197\3\62\3\62\3\63\3\63\3\63\3\63"+
		"\3\64\7\64\u01a1\n\64\f\64\16\64\u01a4\13\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\65\3\65\7\65\u01ae\n\65\f\65\16\65\u01b1\13\65\3\65\3\65\3\65"+
		"\3\65\3\65\3\66\6\66\u01b9\n\66\r\66\16\66\u01ba\3\66\3\66\3\67\3\67\3"+
		"\67\3\67\3\u014f\28\5\2\7\2\t\3\13\4\r\5\17\6\21\7\23\b\25\t\27\n\31\13"+
		"\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24-\25/\26\61\27\63\30\65\31\67"+
		"\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/c\60e\61g\62"+
		"i\63k\64m\65o\66\5\2\3\4\n\4\2\13\13\"\"\4\2C\\c|\6\2\62;C\\aac|\3\2\62"+
		";\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u01cd\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2"+
		"\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O"+
		"\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2"+
		"\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\3c\3\2\2\2\3e\3\2\2\2\3g\3\2\2\2"+
		"\4i\3\2\2\2\4k\3\2\2\2\4m\3\2\2\2\4o\3\2\2\2\5q\3\2\2\2\7t\3\2\2\2\tx"+
		"\3\2\2\2\13~\3\2\2\2\r\u0084\3\2\2\2\17\u0089\3\2\2\2\21\u008f\3\2\2\2"+
		"\23\u0096\3\2\2\2\25\u009f\3\2\2\2\27\u00a7\3\2\2\2\31\u00b1\3\2\2\2\33"+
		"\u00b8\3\2\2\2\35\u00bf\3\2\2\2\37\u00c4\3\2\2\2!\u00cc\3\2\2\2#\u00d3"+
		"\3\2\2\2%\u00d9\3\2\2\2\'\u00e3\3\2\2\2)\u00e9\3\2\2\2+\u00f0\3\2\2\2"+
		"-\u00fa\3\2\2\2/\u010a\3\2\2\2\61\u0119\3\2\2\2\63\u0125\3\2\2\2\65\u0127"+
		"\3\2\2\2\67\u0129\3\2\2\29\u012b\3\2\2\2;\u012d\3\2\2\2=\u012f\3\2\2\2"+
		"?\u0131\3\2\2\2A\u0133\3\2\2\2C\u0135\3\2\2\2E\u0137\3\2\2\2G\u0139\3"+
		"\2\2\2I\u013b\3\2\2\2K\u013d\3\2\2\2M\u013f\3\2\2\2O\u0141\3\2\2\2Q\u0143"+
		"\3\2\2\2S\u0145\3\2\2\2U\u014b\3\2\2\2W\u0155\3\2\2\2Y\u0160\3\2\2\2["+
		"\u0164\3\2\2\2]\u016d\3\2\2\2_\u0176\3\2\2\2a\u0186\3\2\2\2c\u018d\3\2"+
		"\2\2e\u0195\3\2\2\2g\u019b\3\2\2\2i\u01a2\3\2\2\2k\u01ab\3\2\2\2m\u01b8"+
		"\3\2\2\2o\u01be\3\2\2\2qr\t\2\2\2r\6\3\2\2\2su\7\17\2\2ts\3\2\2\2tu\3"+
		"\2\2\2uv\3\2\2\2vw\7\f\2\2w\b\3\2\2\2xy\7e\2\2yz\7n\2\2z{\7c\2\2{|\7u"+
		"\2\2|}\7u\2\2}\n\3\2\2\2~\177\7e\2\2\177\u0080\7q\2\2\u0080\u0081\7p\2"+
		"\2\u0081\u0082\7u\2\2\u0082\u0083\7v\2\2\u0083\f\3\2\2\2\u0084\u0085\7"+
		"g\2\2\u0085\u0086\7p\2\2\u0086\u0087\7w\2\2\u0087\u0088\7o\2\2\u0088\16"+
		"\3\2\2\2\u0089\u008a\7h\2\2\u008a\u008b\7c\2\2\u008b\u008c\7n\2\2\u008c"+
		"\u008d\7u\2\2\u008d\u008e\7g\2\2\u008e\20\3\2\2\2\u008f\u0090\7h\2\2\u0090"+
		"\u0091\7t\2\2\u0091\u0092\7k\2\2\u0092\u0093\7g\2\2\u0093\u0094\7p\2\2"+
		"\u0094\u0095\7f\2\2\u0095\22\3\2\2\2\u0096\u0097\7q\2\2\u0097\u0098\7"+
		"x\2\2\u0098\u0099\7g\2\2\u0099\u009a\7t\2\2\u009a\u009b\7t\2\2\u009b\u009c"+
		"\7k\2\2\u009c\u009d\7f\2\2\u009d\u009e\7g\2\2\u009e\24\3\2\2\2\u009f\u00a0"+
		"\7r\2\2\u00a0\u00a1\7t\2\2\u00a1\u00a2\7k\2\2\u00a2\u00a3\7x\2\2\u00a3"+
		"\u00a4\7c\2\2\u00a4\u00a5\7v\2\2\u00a5\u00a6\7g\2\2\u00a6\26\3\2\2\2\u00a7"+
		"\u00a8\7r\2\2\u00a8\u00a9\7t\2\2\u00a9\u00aa\7q\2\2\u00aa\u00ab\7v\2\2"+
		"\u00ab\u00ac\7g\2\2\u00ac\u00ad\7e\2\2\u00ad\u00ae\7v\2\2\u00ae\u00af"+
		"\7g\2\2\u00af\u00b0\7f\2\2\u00b0\30\3\2\2\2\u00b1\u00b2\7r\2\2\u00b2\u00b3"+
		"\7w\2\2\u00b3\u00b4\7d\2\2\u00b4\u00b5\7n\2\2\u00b5\u00b6\7k\2\2\u00b6"+
		"\u00b7\7e\2\2\u00b7\32\3\2\2\2\u00b8\u00b9\7u\2\2\u00b9\u00ba\7v\2\2\u00ba"+
		"\u00bb\7c\2\2\u00bb\u00bc\7v\2\2\u00bc\u00bd\7k\2\2\u00bd\u00be\7e\2\2"+
		"\u00be\34\3\2\2\2\u00bf\u00c0\7v\2\2\u00c0\u00c1\7t\2\2\u00c1\u00c2\7"+
		"w\2\2\u00c2\u00c3\7g\2\2\u00c3\36\3\2\2\2\u00c4\u00c5\7x\2\2\u00c5\u00c6"+
		"\7k\2\2\u00c6\u00c7\7t\2\2\u00c7\u00c8\7v\2\2\u00c8\u00c9\7w\2\2\u00c9"+
		"\u00ca\7c\2\2\u00ca\u00cb\7n\2\2\u00cb \3\2\2\2\u00cc\u00cd\7W\2\2\u00cd"+
		"\u00ce\7E\2\2\u00ce\u00cf\7N\2\2\u00cf\u00d0\7C\2\2\u00d0\u00d1\7U\2\2"+
		"\u00d1\u00d2\7U\2\2\u00d2\"\3\2\2\2\u00d3\u00d4\7W\2\2\u00d4\u00d5\7G"+
		"\2\2\u00d5\u00d6\7P\2\2\u00d6\u00d7\7W\2\2\u00d7\u00d8\7O\2\2\u00d8$\3"+
		"\2\2\2\u00d9\u00da\7W\2\2\u00da\u00db\7H\2\2\u00db\u00dc\7W\2\2\u00dc"+
		"\u00dd\7P\2\2\u00dd\u00de\7E\2\2\u00de\u00df\7V\2\2\u00df\u00e0\7K\2\2"+
		"\u00e0\u00e1\7Q\2\2\u00e1\u00e2\7P\2\2\u00e2&\3\2\2\2\u00e3\u00e4\7W\2"+
		"\2\u00e4\u00e5\7O\2\2\u00e5\u00e6\7G\2\2\u00e6\u00e7\7V\2\2\u00e7\u00e8"+
		"\7C\2\2\u00e8(\3\2\2\2\u00e9\u00ea\7W\2\2\u00ea\u00eb\7R\2\2\u00eb\u00ec"+
		"\7C\2\2\u00ec\u00ed\7T\2\2\u00ed\u00ee\7C\2\2\u00ee\u00ef\7O\2\2\u00ef"+
		"*\3\2\2\2\u00f0\u00f1\7W\2\2\u00f1\u00f2\7R\2\2\u00f2\u00f3\7T\2\2\u00f3"+
		"\u00f4\7Q\2\2\u00f4\u00f5\7R\2\2\u00f5\u00f6\7G\2\2\u00f6\u00f7\7T\2\2"+
		"\u00f7\u00f8\7V\2\2\u00f8\u00f9\7[\2\2\u00f9,\3\2\2\2\u00fa\u00fb\7H\2"+
		"\2\u00fb\u00fc\7C\2\2\u00fc\u00fd\7E\2\2\u00fd\u00fe\7V\2\2\u00fe\u00ff"+
		"\7Q\2\2\u00ff\u0100\7T\2\2\u0100\u0101\7[\2\2\u0101\u0102\7I\2\2\u0102"+
		"\u0103\7C\2\2\u0103\u0104\7O\2\2\u0104\u0105\7G\2\2\u0105\u0106\7a\2\2"+
		"\u0106\u0107\7C\2\2\u0107\u0108\7R\2\2\u0108\u0109\7K\2\2\u0109.\3\2\2"+
		"\2\u010a\u010b\7I\2\2\u010b\u010c\7G\2\2\u010c\u010d\7P\2\2\u010d\u010e"+
		"\7G\2\2\u010e\u010f\7T\2\2\u010f\u0110\7C\2\2\u0110\u0111\7V\2\2\u0111"+
		"\u0112\7G\2\2\u0112\u0113\7F\2\2\u0113\u0114\7a\2\2\u0114\u0115\7D\2\2"+
		"\u0115\u0116\7Q\2\2\u0116\u0117\7F\2\2\u0117\u0118\7[\2\2\u0118\60\3\2"+
		"\2\2\u0119\u011a\7H\2\2\u011a\u011b\7Q\2\2\u011b\u011c\7T\2\2\u011c\u011d"+
		"\7E\2\2\u011d\u011e\7G\2\2\u011e\u011f\7K\2\2\u011f\u0120\7P\2\2\u0120"+
		"\u0121\7N\2\2\u0121\u0122\7K\2\2\u0122\u0123\7P\2\2\u0123\u0124\7G\2\2"+
		"\u0124\62\3\2\2\2\u0125\u0126\7<\2\2\u0126\64\3\2\2\2\u0127\u0128\7*\2"+
		"\2\u0128\66\3\2\2\2\u0129\u012a\7+\2\2\u012a8\3\2\2\2\u012b\u012c\7}\2"+
		"\2\u012c:\3\2\2\2\u012d\u012e\7\177\2\2\u012e<\3\2\2\2\u012f\u0130\7>"+
		"\2\2\u0130>\3\2\2\2\u0131\u0132\7@\2\2\u0132@\3\2\2\2\u0133\u0134\7.\2"+
		"\2\u0134B\3\2\2\2\u0135\u0136\7\60\2\2\u0136D\3\2\2\2\u0137\u0138\7?\2"+
		"\2\u0138F\3\2\2\2\u0139\u013a\7=\2\2\u013aH\3\2\2\2\u013b\u013c\7,\2\2"+
		"\u013cJ\3\2\2\2\u013d\u013e\7(\2\2\u013eL\3\2\2\2\u013f\u0140\7/\2\2\u0140"+
		"N\3\2\2\2\u0141\u0142\7~\2\2\u0142P\3\2\2\2\u0143\u0144\7#\2\2\u0144R"+
		"\3\2\2\2\u0145\u0147\t\3\2\2\u0146\u0148\t\4\2\2\u0147\u0146\3\2\2\2\u0148"+
		"\u0149\3\2\2\2\u0149\u0147\3\2\2\2\u0149\u014a\3\2\2\2\u014aT\3\2\2\2"+
		"\u014b\u014f\7$\2\2\u014c\u014e\13\2\2\2\u014d\u014c\3\2\2\2\u014e\u0151"+
		"\3\2\2\2\u014f\u0150\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0152\3\2\2\2\u0151"+
		"\u014f\3\2\2\2\u0152\u0153\7$\2\2\u0153V\3\2\2\2\u0154\u0156\t\5\2\2\u0155"+
		"\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u0155\3\2\2\2\u0157\u0158\3\2"+
		"\2\2\u0158\u0159\3\2\2\2\u0159\u015b\7\60\2\2\u015a\u015c\t\5\2\2\u015b"+
		"\u015a\3\2\2\2\u015c\u015d\3\2\2\2\u015d\u015b\3\2\2\2\u015d\u015e\3\2"+
		"\2\2\u015eX\3\2\2\2\u015f\u0161\t\5\2\2\u0160\u015f\3\2\2\2\u0161\u0162"+
		"\3\2\2\2\u0162\u0160\3\2\2\2\u0162\u0163\3\2\2\2\u0163Z\3\2\2\2\u0164"+
		"\u0168\7%\2\2\u0165\u0167\n\6\2\2\u0166\u0165\3\2\2\2\u0167\u016a\3\2"+
		"\2\2\u0168\u0166\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016b\3\2\2\2\u016a"+
		"\u0168\3\2\2\2\u016b\u016c\b-\2\2\u016c\\\3\2\2\2\u016d\u016e\7\61\2\2"+
		"\u016e\u016f\7\61\2\2\u016f\u0171\3\2\2\2\u0170\u0172\5\5\2\2\u0171\u0170"+
		"\3\2\2\2\u0171\u0172\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0174\b.\2\2\u0174"+
		"\u0175\b.\3\2\u0175^\3\2\2\2\u0176\u0177\7\61\2\2\u0177\u0178\7,\2\2\u0178"+
		"\u017c\3\2\2\2\u0179\u017b\7,\2\2\u017a\u0179\3\2\2\2\u017b\u017e\3\2"+
		"\2\2\u017c\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u0180\3\2\2\2\u017e"+
		"\u017c\3\2\2\2\u017f\u0181\5\5\2\2\u0180\u017f\3\2\2\2\u0180\u0181\3\2"+
		"\2\2\u0181\u0182\3\2\2\2\u0182\u0183\b/\2\2\u0183\u0184\b/\4\2\u0184`"+
		"\3\2\2\2\u0185\u0187\t\7\2\2\u0186\u0185\3\2\2\2\u0187\u0188\3\2\2\2\u0188"+
		"\u0186\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\b\60"+
		"\2\2\u018bb\3\2\2\2\u018c\u018e\5\5\2\2\u018d\u018c\3\2\2\2\u018d\u018e"+
		"\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0190\5\7\3\2\u0190\u0191\3\2\2\2\u0191"+
		"\u0192\b\61\2\2\u0192\u0193\b\61\5\2\u0193d\3\2\2\2\u0194\u0196\n\6\2"+
		"\2\u0195\u0194\3\2\2\2\u0196\u0197\3\2\2\2\u0197\u0195\3\2\2\2\u0197\u0198"+
		"\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019a\b\62\6\2\u019af\3\2\2\2\u019b"+
		"\u019c\13\2\2\2\u019c\u019d\3\2\2\2\u019d\u019e\b\63\2\2\u019eh\3\2\2"+
		"\2\u019f\u01a1\5\5\2\2\u01a0\u019f\3\2\2\2\u01a1\u01a4\3\2\2\2\u01a2\u01a0"+
		"\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a5\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a5"+
		"\u01a6\7,\2\2\u01a6\u01a7\7\61\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01a9\b\64"+
		"\2\2\u01a9\u01aa\b\64\5\2\u01aaj\3\2\2\2\u01ab\u01af\5\7\3\2\u01ac\u01ae"+
		"\5\5\2\2\u01ad\u01ac\3\2\2\2\u01ae\u01b1\3\2\2\2\u01af\u01ad\3\2\2\2\u01af"+
		"\u01b0\3\2\2\2\u01b0\u01b2\3\2\2\2\u01b1\u01af\3\2\2\2\u01b2\u01b3\7,"+
		"\2\2\u01b3\u01b4\n\b\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b6\b\65\2\2\u01b6"+
		"l\3\2\2\2\u01b7\u01b9\n\t\2\2\u01b8\u01b7\3\2\2\2\u01b9\u01ba\3\2\2\2"+
		"\u01ba\u01b8\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01bd"+
		"\b\66\6\2\u01bdn\3\2\2\2\u01be\u01bf\13\2\2\2\u01bf\u01c0\3\2\2\2\u01c0"+
		"\u01c1\b\67\2\2\u01c1p\3\2\2\2\25\2\3\4t\u0149\u014f\u0157\u015d\u0162"+
		"\u0168\u0171\u017c\u0180\u0188\u018d\u0197\u01a2\u01af\u01ba\7\b\2\2\7"+
		"\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}