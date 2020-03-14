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
		UPARAM=16, UPROPERTY=17, SF_CLASS_TAG=18, SF_GENERATED_BODY=19, FORCEINLINE=20, 
		COLON=21, OPEN_PAREN=22, CLOSE_PAREN=23, OPEN_BRACE=24, CLOSE_BRACE=25, 
		OPEN_ANGLE=26, CLOSE_ANGLE=27, COMMA=28, PERIOD=29, EQUALS=30, SEMICOLON=31, 
		STAR=32, AMPERSAND=33, HYPHEN=34, PIPE=35, BANG=36, IDENTIFIER=37, STRING_LITERAL=38, 
		FLOAT_LITERAL=39, INTEGER_LITERAL=40, PREPROCESSOR=41, LINE_COMMENT_START=42, 
		BLOCK_COMMENT_START=43, WHITESPACE=44, LINE_COMMENT_END=45, LINE_COMMENT_TEXT=46, 
		LINE_COMMENT_OTHER=47, BLOCK_COMMENT_END=48, BLOCK_COMMENT_NEW_LINE=49, 
		BLOCK_COMMENT_TEXT=50, BLOCK_COMMENT_OTHER=51;
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
		"UENUM", "UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"FORCEINLINE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", 
		"STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", 
		"FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", 
		"BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", 
		"LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", 
		"BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'true'", "'virtual'", 
		"'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UPARAM'", "'UPROPERTY'", "'FACTORYGAME_API'", 
		"'GENERATED_BODY'", "'FORCEINLINE'", "':'", "'('", "')'", "'{'", "'}'", 
		"'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", "'&'", "'-'", "'|'", 
		"'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "TRUE", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UPARAM", "UPROPERTY", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\65\u01ba\b\1\b\1"+
		"\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4"+
		"\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t"+
		"\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t"+
		"\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t"+
		"\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4"+
		"*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63"+
		"\t\63\4\64\t\64\4\65\t\65\4\66\t\66\3\2\3\2\3\3\5\3s\n\3\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36"+
		"\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\6"+
		"(\u0140\n(\r(\16(\u0141\3)\3)\7)\u0146\n)\f)\16)\u0149\13)\3)\3)\3*\6"+
		"*\u014e\n*\r*\16*\u014f\3*\3*\6*\u0154\n*\r*\16*\u0155\3+\6+\u0159\n+"+
		"\r+\16+\u015a\3,\3,\7,\u015f\n,\f,\16,\u0162\13,\3,\3,\3-\3-\3-\3-\5-"+
		"\u016a\n-\3-\3-\3-\3.\3.\3.\3.\7.\u0173\n.\f.\16.\u0176\13.\3.\5.\u0179"+
		"\n.\3.\3.\3.\3/\6/\u017f\n/\r/\16/\u0180\3/\3/\3\60\5\60\u0186\n\60\3"+
		"\60\3\60\3\60\3\60\3\60\3\61\6\61\u018e\n\61\r\61\16\61\u018f\3\61\3\61"+
		"\3\62\3\62\3\62\3\62\3\63\7\63\u0199\n\63\f\63\16\63\u019c\13\63\3\63"+
		"\3\63\3\63\3\63\3\63\3\63\3\64\3\64\7\64\u01a6\n\64\f\64\16\64\u01a9\13"+
		"\64\3\64\3\64\3\64\3\64\3\64\3\65\6\65\u01b1\n\65\r\65\16\65\u01b2\3\65"+
		"\3\65\3\66\3\66\3\66\3\66\3\u0147\2\67\5\2\7\2\t\3\13\4\r\5\17\6\21\7"+
		"\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24-\25/\26"+
		"\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'S(U)W*Y"+
		"+[,]-_.a/c\60e\61g\62i\63k\64m\65\5\2\3\4\n\4\2\13\13\"\"\4\2C\\c|\6\2"+
		"\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f"+
		"\17\17,,\2\u01c5\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\3a\3\2\2\2\3c\3\2\2\2\3e\3"+
		"\2\2\2\4g\3\2\2\2\4i\3\2\2\2\4k\3\2\2\2\4m\3\2\2\2\5o\3\2\2\2\7r\3\2\2"+
		"\2\tv\3\2\2\2\13|\3\2\2\2\r\u0082\3\2\2\2\17\u0087\3\2\2\2\21\u008d\3"+
		"\2\2\2\23\u0094\3\2\2\2\25\u009d\3\2\2\2\27\u00a5\3\2\2\2\31\u00af\3\2"+
		"\2\2\33\u00b6\3\2\2\2\35\u00bd\3\2\2\2\37\u00c2\3\2\2\2!\u00ca\3\2\2\2"+
		"#\u00d1\3\2\2\2%\u00d7\3\2\2\2\'\u00e1\3\2\2\2)\u00e8\3\2\2\2+\u00f2\3"+
		"\2\2\2-\u0102\3\2\2\2/\u0111\3\2\2\2\61\u011d\3\2\2\2\63\u011f\3\2\2\2"+
		"\65\u0121\3\2\2\2\67\u0123\3\2\2\29\u0125\3\2\2\2;\u0127\3\2\2\2=\u0129"+
		"\3\2\2\2?\u012b\3\2\2\2A\u012d\3\2\2\2C\u012f\3\2\2\2E\u0131\3\2\2\2G"+
		"\u0133\3\2\2\2I\u0135\3\2\2\2K\u0137\3\2\2\2M\u0139\3\2\2\2O\u013b\3\2"+
		"\2\2Q\u013d\3\2\2\2S\u0143\3\2\2\2U\u014d\3\2\2\2W\u0158\3\2\2\2Y\u015c"+
		"\3\2\2\2[\u0165\3\2\2\2]\u016e\3\2\2\2_\u017e\3\2\2\2a\u0185\3\2\2\2c"+
		"\u018d\3\2\2\2e\u0193\3\2\2\2g\u019a\3\2\2\2i\u01a3\3\2\2\2k\u01b0\3\2"+
		"\2\2m\u01b6\3\2\2\2op\t\2\2\2p\6\3\2\2\2qs\7\17\2\2rq\3\2\2\2rs\3\2\2"+
		"\2st\3\2\2\2tu\7\f\2\2u\b\3\2\2\2vw\7e\2\2wx\7n\2\2xy\7c\2\2yz\7u\2\2"+
		"z{\7u\2\2{\n\3\2\2\2|}\7e\2\2}~\7q\2\2~\177\7p\2\2\177\u0080\7u\2\2\u0080"+
		"\u0081\7v\2\2\u0081\f\3\2\2\2\u0082\u0083\7g\2\2\u0083\u0084\7p\2\2\u0084"+
		"\u0085\7w\2\2\u0085\u0086\7o\2\2\u0086\16\3\2\2\2\u0087\u0088\7h\2\2\u0088"+
		"\u0089\7c\2\2\u0089\u008a\7n\2\2\u008a\u008b\7u\2\2\u008b\u008c\7g\2\2"+
		"\u008c\20\3\2\2\2\u008d\u008e\7h\2\2\u008e\u008f\7t\2\2\u008f\u0090\7"+
		"k\2\2\u0090\u0091\7g\2\2\u0091\u0092\7p\2\2\u0092\u0093\7f\2\2\u0093\22"+
		"\3\2\2\2\u0094\u0095\7q\2\2\u0095\u0096\7x\2\2\u0096\u0097\7g\2\2\u0097"+
		"\u0098\7t\2\2\u0098\u0099\7t\2\2\u0099\u009a\7k\2\2\u009a\u009b\7f\2\2"+
		"\u009b\u009c\7g\2\2\u009c\24\3\2\2\2\u009d\u009e\7r\2\2\u009e\u009f\7"+
		"t\2\2\u009f\u00a0\7k\2\2\u00a0\u00a1\7x\2\2\u00a1\u00a2\7c\2\2\u00a2\u00a3"+
		"\7v\2\2\u00a3\u00a4\7g\2\2\u00a4\26\3\2\2\2\u00a5\u00a6\7r\2\2\u00a6\u00a7"+
		"\7t\2\2\u00a7\u00a8\7q\2\2\u00a8\u00a9\7v\2\2\u00a9\u00aa\7g\2\2\u00aa"+
		"\u00ab\7e\2\2\u00ab\u00ac\7v\2\2\u00ac\u00ad\7g\2\2\u00ad\u00ae\7f\2\2"+
		"\u00ae\30\3\2\2\2\u00af\u00b0\7r\2\2\u00b0\u00b1\7w\2\2\u00b1\u00b2\7"+
		"d\2\2\u00b2\u00b3\7n\2\2\u00b3\u00b4\7k\2\2\u00b4\u00b5\7e\2\2\u00b5\32"+
		"\3\2\2\2\u00b6\u00b7\7u\2\2\u00b7\u00b8\7v\2\2\u00b8\u00b9\7c\2\2\u00b9"+
		"\u00ba\7v\2\2\u00ba\u00bb\7k\2\2\u00bb\u00bc\7e\2\2\u00bc\34\3\2\2\2\u00bd"+
		"\u00be\7v\2\2\u00be\u00bf\7t\2\2\u00bf\u00c0\7w\2\2\u00c0\u00c1\7g\2\2"+
		"\u00c1\36\3\2\2\2\u00c2\u00c3\7x\2\2\u00c3\u00c4\7k\2\2\u00c4\u00c5\7"+
		"t\2\2\u00c5\u00c6\7v\2\2\u00c6\u00c7\7w\2\2\u00c7\u00c8\7c\2\2\u00c8\u00c9"+
		"\7n\2\2\u00c9 \3\2\2\2\u00ca\u00cb\7W\2\2\u00cb\u00cc\7E\2\2\u00cc\u00cd"+
		"\7N\2\2\u00cd\u00ce\7C\2\2\u00ce\u00cf\7U\2\2\u00cf\u00d0\7U\2\2\u00d0"+
		"\"\3\2\2\2\u00d1\u00d2\7W\2\2\u00d2\u00d3\7G\2\2\u00d3\u00d4\7P\2\2\u00d4"+
		"\u00d5\7W\2\2\u00d5\u00d6\7O\2\2\u00d6$\3\2\2\2\u00d7\u00d8\7W\2\2\u00d8"+
		"\u00d9\7H\2\2\u00d9\u00da\7W\2\2\u00da\u00db\7P\2\2\u00db\u00dc\7E\2\2"+
		"\u00dc\u00dd\7V\2\2\u00dd\u00de\7K\2\2\u00de\u00df\7Q\2\2\u00df\u00e0"+
		"\7P\2\2\u00e0&\3\2\2\2\u00e1\u00e2\7W\2\2\u00e2\u00e3\7R\2\2\u00e3\u00e4"+
		"\7C\2\2\u00e4\u00e5\7T\2\2\u00e5\u00e6\7C\2\2\u00e6\u00e7\7O\2\2\u00e7"+
		"(\3\2\2\2\u00e8\u00e9\7W\2\2\u00e9\u00ea\7R\2\2\u00ea\u00eb\7T\2\2\u00eb"+
		"\u00ec\7Q\2\2\u00ec\u00ed\7R\2\2\u00ed\u00ee\7G\2\2\u00ee\u00ef\7T\2\2"+
		"\u00ef\u00f0\7V\2\2\u00f0\u00f1\7[\2\2\u00f1*\3\2\2\2\u00f2\u00f3\7H\2"+
		"\2\u00f3\u00f4\7C\2\2\u00f4\u00f5\7E\2\2\u00f5\u00f6\7V\2\2\u00f6\u00f7"+
		"\7Q\2\2\u00f7\u00f8\7T\2\2\u00f8\u00f9\7[\2\2\u00f9\u00fa\7I\2\2\u00fa"+
		"\u00fb\7C\2\2\u00fb\u00fc\7O\2\2\u00fc\u00fd\7G\2\2\u00fd\u00fe\7a\2\2"+
		"\u00fe\u00ff\7C\2\2\u00ff\u0100\7R\2\2\u0100\u0101\7K\2\2\u0101,\3\2\2"+
		"\2\u0102\u0103\7I\2\2\u0103\u0104\7G\2\2\u0104\u0105\7P\2\2\u0105\u0106"+
		"\7G\2\2\u0106\u0107\7T\2\2\u0107\u0108\7C\2\2\u0108\u0109\7V\2\2\u0109"+
		"\u010a\7G\2\2\u010a\u010b\7F\2\2\u010b\u010c\7a\2\2\u010c\u010d\7D\2\2"+
		"\u010d\u010e\7Q\2\2\u010e\u010f\7F\2\2\u010f\u0110\7[\2\2\u0110.\3\2\2"+
		"\2\u0111\u0112\7H\2\2\u0112\u0113\7Q\2\2\u0113\u0114\7T\2\2\u0114\u0115"+
		"\7E\2\2\u0115\u0116\7G\2\2\u0116\u0117\7K\2\2\u0117\u0118\7P\2\2\u0118"+
		"\u0119\7N\2\2\u0119\u011a\7K\2\2\u011a\u011b\7P\2\2\u011b\u011c\7G\2\2"+
		"\u011c\60\3\2\2\2\u011d\u011e\7<\2\2\u011e\62\3\2\2\2\u011f\u0120\7*\2"+
		"\2\u0120\64\3\2\2\2\u0121\u0122\7+\2\2\u0122\66\3\2\2\2\u0123\u0124\7"+
		"}\2\2\u01248\3\2\2\2\u0125\u0126\7\177\2\2\u0126:\3\2\2\2\u0127\u0128"+
		"\7>\2\2\u0128<\3\2\2\2\u0129\u012a\7@\2\2\u012a>\3\2\2\2\u012b\u012c\7"+
		".\2\2\u012c@\3\2\2\2\u012d\u012e\7\60\2\2\u012eB\3\2\2\2\u012f\u0130\7"+
		"?\2\2\u0130D\3\2\2\2\u0131\u0132\7=\2\2\u0132F\3\2\2\2\u0133\u0134\7,"+
		"\2\2\u0134H\3\2\2\2\u0135\u0136\7(\2\2\u0136J\3\2\2\2\u0137\u0138\7/\2"+
		"\2\u0138L\3\2\2\2\u0139\u013a\7~\2\2\u013aN\3\2\2\2\u013b\u013c\7#\2\2"+
		"\u013cP\3\2\2\2\u013d\u013f\t\3\2\2\u013e\u0140\t\4\2\2\u013f\u013e\3"+
		"\2\2\2\u0140\u0141\3\2\2\2\u0141\u013f\3\2\2\2\u0141\u0142\3\2\2\2\u0142"+
		"R\3\2\2\2\u0143\u0147\7$\2\2\u0144\u0146\13\2\2\2\u0145\u0144\3\2\2\2"+
		"\u0146\u0149\3\2\2\2\u0147\u0148\3\2\2\2\u0147\u0145\3\2\2\2\u0148\u014a"+
		"\3\2\2\2\u0149\u0147\3\2\2\2\u014a\u014b\7$\2\2\u014bT\3\2\2\2\u014c\u014e"+
		"\t\5\2\2\u014d\u014c\3\2\2\2\u014e\u014f\3\2\2\2\u014f\u014d\3\2\2\2\u014f"+
		"\u0150\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153\7\60\2\2\u0152\u0154\t"+
		"\5\2\2\u0153\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155\u0153\3\2\2\2\u0155"+
		"\u0156\3\2\2\2\u0156V\3\2\2\2\u0157\u0159\t\5\2\2\u0158\u0157\3\2\2\2"+
		"\u0159\u015a\3\2\2\2\u015a\u0158\3\2\2\2\u015a\u015b\3\2\2\2\u015bX\3"+
		"\2\2\2\u015c\u0160\7%\2\2\u015d\u015f\n\6\2\2\u015e\u015d\3\2\2\2\u015f"+
		"\u0162\3\2\2\2\u0160\u015e\3\2\2\2\u0160\u0161\3\2\2\2\u0161\u0163\3\2"+
		"\2\2\u0162\u0160\3\2\2\2\u0163\u0164\b,\2\2\u0164Z\3\2\2\2\u0165\u0166"+
		"\7\61\2\2\u0166\u0167\7\61\2\2\u0167\u0169\3\2\2\2\u0168\u016a\5\5\2\2"+
		"\u0169\u0168\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b\3\2\2\2\u016b\u016c"+
		"\b-\2\2\u016c\u016d\b-\3\2\u016d\\\3\2\2\2\u016e\u016f\7\61\2\2\u016f"+
		"\u0170\7,\2\2\u0170\u0174\3\2\2\2\u0171\u0173\7,\2\2\u0172\u0171\3\2\2"+
		"\2\u0173\u0176\3\2\2\2\u0174\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175\u0178"+
		"\3\2\2\2\u0176\u0174\3\2\2\2\u0177\u0179\5\5\2\2\u0178\u0177\3\2\2\2\u0178"+
		"\u0179\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017b\b.\2\2\u017b\u017c\b.\4"+
		"\2\u017c^\3\2\2\2\u017d\u017f\t\7\2\2\u017e\u017d\3\2\2\2\u017f\u0180"+
		"\3\2\2\2\u0180\u017e\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0182\3\2\2\2\u0182"+
		"\u0183\b/\2\2\u0183`\3\2\2\2\u0184\u0186\5\5\2\2\u0185\u0184\3\2\2\2\u0185"+
		"\u0186\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0188\5\7\3\2\u0188\u0189\3\2"+
		"\2\2\u0189\u018a\b\60\2\2\u018a\u018b\b\60\5\2\u018bb\3\2\2\2\u018c\u018e"+
		"\n\6\2\2\u018d\u018c\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u018d\3\2\2\2\u018f"+
		"\u0190\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u0192\b\61\6\2\u0192d\3\2\2\2"+
		"\u0193\u0194\13\2\2\2\u0194\u0195\3\2\2\2\u0195\u0196\b\62\2\2\u0196f"+
		"\3\2\2\2\u0197\u0199\5\5\2\2\u0198\u0197\3\2\2\2\u0199\u019c\3\2\2\2\u019a"+
		"\u0198\3\2\2\2\u019a\u019b\3\2\2\2\u019b\u019d\3\2\2\2\u019c\u019a\3\2"+
		"\2\2\u019d\u019e\7,\2\2\u019e\u019f\7\61\2\2\u019f\u01a0\3\2\2\2\u01a0"+
		"\u01a1\b\63\2\2\u01a1\u01a2\b\63\5\2\u01a2h\3\2\2\2\u01a3\u01a7\5\7\3"+
		"\2\u01a4\u01a6\5\5\2\2\u01a5\u01a4\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5"+
		"\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01aa\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa"+
		"\u01ab\7,\2\2\u01ab\u01ac\n\b\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae\b\64"+
		"\2\2\u01aej\3\2\2\2\u01af\u01b1\n\t\2\2\u01b0\u01af\3\2\2\2\u01b1\u01b2"+
		"\3\2\2\2\u01b2\u01b0\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4"+
		"\u01b5\b\65\6\2\u01b5l\3\2\2\2\u01b6\u01b7\13\2\2\2\u01b7\u01b8\3\2\2"+
		"\2\u01b8\u01b9\b\66\2\2\u01b9n\3\2\2\2\25\2\3\4r\u0141\u0147\u014f\u0155"+
		"\u015a\u0160\u0169\u0174\u0178\u0180\u0185\u018f\u019a\u01a7\u01b2\7\b"+
		"\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}