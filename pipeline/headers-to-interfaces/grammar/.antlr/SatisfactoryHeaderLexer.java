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
		CLASS=1, CONST=2, ENUM=3, FALSE=4, FRIEND=5, MUTABLE=6, OVERRIDE=7, PRIVATE=8, 
		PROTECTED=9, PUBLIC=10, STATIC=11, STRUCT=12, TRUE=13, TYPEDEF=14, VIRTUAL=15, 
		UCLASS=16, UENUM=17, UFUNCTION=18, UINTERFACE=19, UMETA=20, UPARAM=21, 
		UPROPERTY=22, USTRUCT=23, FORCEINLINE=24, SF_CLASS_TAG=25, SF_GENERATED_BODY=26, 
		COLON=27, OPEN_PAREN=28, CLOSE_PAREN=29, OPEN_BRACE=30, CLOSE_BRACE=31, 
		OPEN_ANGLE=32, CLOSE_ANGLE=33, COMMA=34, PERIOD=35, EQUALS=36, SEMICOLON=37, 
		STAR=38, AMPERSAND=39, HYPHEN=40, PIPE=41, BANG=42, IDENTIFIER=43, STRING_LITERAL=44, 
		FLOAT_LITERAL=45, INTEGER_LITERAL=46, PREPROCESSOR=47, LINE_COMMENT_START=48, 
		BLOCK_COMMENT_START=49, WHITESPACE=50, LINE_COMMENT_END=51, LINE_COMMENT_TEXT=52, 
		LINE_COMMENT_OTHER=53, BLOCK_COMMENT_END=54, BLOCK_COMMENT_NEW_LINE=55, 
		BLOCK_COMMENT_TEXT=56, BLOCK_COMMENT_OTHER=57;
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
		"Space", "Newline", "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "MUTABLE", 
		"OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TRUE", 
		"TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", 
		"UPARAM", "UPROPERTY", "USTRUCT", "FORCEINLINE", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_ANGLE", 
		"CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", "SEMICOLON", "STAR", "AMPERSAND", 
		"HYPHEN", "PIPE", "BANG", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'mutable'", 
		"'override'", "'private'", "'protected'", "'public'", "'static'", "'struct'", 
		"'true'", "'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", 
		"'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'FORCEINLINE'", 
		"'FACTORYGAME_API'", null, "':'", "'('", "')'", "'{'", "'}'", "'<'", "'>'", 
		"','", "'.'", "'='", "';'", "'*'", "'&'", "'-'", "'|'", "'!'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "MUTABLE", "OVERRIDE", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2;\u0201\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t"+
		"<\3\2\3\2\3\3\5\3\177\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20"+
		"\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\7\35\u0157\n\35\f\35"+
		"\16\35\u015a\13\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 "+
		"\3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3"+
		"+\3,\3,\3-\3-\3.\3.\6.\u0183\n.\r.\16.\u0184\3/\3/\7/\u0189\n/\f/\16/"+
		"\u018c\13/\3/\3/\3\60\6\60\u0191\n\60\r\60\16\60\u0192\3\60\3\60\7\60"+
		"\u0197\n\60\f\60\16\60\u019a\13\60\3\60\5\60\u019d\n\60\3\61\6\61\u01a0"+
		"\n\61\r\61\16\61\u01a1\3\62\3\62\7\62\u01a6\n\62\f\62\16\62\u01a9\13\62"+
		"\3\62\3\62\3\63\3\63\3\63\3\63\5\63\u01b1\n\63\3\63\3\63\3\63\3\64\3\64"+
		"\3\64\3\64\7\64\u01ba\n\64\f\64\16\64\u01bd\13\64\3\64\5\64\u01c0\n\64"+
		"\3\64\3\64\3\64\3\65\6\65\u01c6\n\65\r\65\16\65\u01c7\3\65\3\65\3\66\5"+
		"\66\u01cd\n\66\3\66\3\66\3\66\3\66\3\66\3\67\6\67\u01d5\n\67\r\67\16\67"+
		"\u01d6\3\67\3\67\38\38\38\38\39\79\u01e0\n9\f9\169\u01e3\139\39\39\39"+
		"\39\39\39\3:\3:\7:\u01ed\n:\f:\16:\u01f0\13:\3:\3:\3:\3:\3:\3;\6;\u01f8"+
		"\n;\r;\16;\u01f9\3;\3;\3<\3<\3<\3<\3\u018a\2=\5\2\7\2\t\3\13\4\r\5\17"+
		"\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24"+
		"-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'"+
		"S(U)W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66q\67s8u9w:y;\5\2\3\4\13\4"+
		"\2\13\13\"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5"+
		"\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u020e\2\t\3\2\2\2\2\13\3"+
		"\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2"+
		"\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3"+
		"\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2"+
		"\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\2"+
		"9\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3"+
		"\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2"+
		"\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2"+
		"_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3"+
		"\2\2\2\3m\3\2\2\2\3o\3\2\2\2\3q\3\2\2\2\4s\3\2\2\2\4u\3\2\2\2\4w\3\2\2"+
		"\2\4y\3\2\2\2\5{\3\2\2\2\7~\3\2\2\2\t\u0082\3\2\2\2\13\u0088\3\2\2\2\r"+
		"\u008e\3\2\2\2\17\u0093\3\2\2\2\21\u0099\3\2\2\2\23\u00a0\3\2\2\2\25\u00a8"+
		"\3\2\2\2\27\u00b1\3\2\2\2\31\u00b9\3\2\2\2\33\u00c3\3\2\2\2\35\u00ca\3"+
		"\2\2\2\37\u00d1\3\2\2\2!\u00d8\3\2\2\2#\u00dd\3\2\2\2%\u00e5\3\2\2\2\'"+
		"\u00ed\3\2\2\2)\u00f4\3\2\2\2+\u00fa\3\2\2\2-\u0104\3\2\2\2/\u010f\3\2"+
		"\2\2\61\u0115\3\2\2\2\63\u011c\3\2\2\2\65\u0126\3\2\2\2\67\u012e\3\2\2"+
		"\29\u013a\3\2\2\2;\u014a\3\2\2\2=\u0160\3\2\2\2?\u0162\3\2\2\2A\u0164"+
		"\3\2\2\2C\u0166\3\2\2\2E\u0168\3\2\2\2G\u016a\3\2\2\2I\u016c\3\2\2\2K"+
		"\u016e\3\2\2\2M\u0170\3\2\2\2O\u0172\3\2\2\2Q\u0174\3\2\2\2S\u0176\3\2"+
		"\2\2U\u0178\3\2\2\2W\u017a\3\2\2\2Y\u017c\3\2\2\2[\u017e\3\2\2\2]\u0180"+
		"\3\2\2\2_\u0186\3\2\2\2a\u0190\3\2\2\2c\u019f\3\2\2\2e\u01a3\3\2\2\2g"+
		"\u01ac\3\2\2\2i\u01b5\3\2\2\2k\u01c5\3\2\2\2m\u01cc\3\2\2\2o\u01d4\3\2"+
		"\2\2q\u01da\3\2\2\2s\u01e1\3\2\2\2u\u01ea\3\2\2\2w\u01f7\3\2\2\2y\u01fd"+
		"\3\2\2\2{|\t\2\2\2|\6\3\2\2\2}\177\7\17\2\2~}\3\2\2\2~\177\3\2\2\2\177"+
		"\u0080\3\2\2\2\u0080\u0081\7\f\2\2\u0081\b\3\2\2\2\u0082\u0083\7e\2\2"+
		"\u0083\u0084\7n\2\2\u0084\u0085\7c\2\2\u0085\u0086\7u\2\2\u0086\u0087"+
		"\7u\2\2\u0087\n\3\2\2\2\u0088\u0089\7e\2\2\u0089\u008a\7q\2\2\u008a\u008b"+
		"\7p\2\2\u008b\u008c\7u\2\2\u008c\u008d\7v\2\2\u008d\f\3\2\2\2\u008e\u008f"+
		"\7g\2\2\u008f\u0090\7p\2\2\u0090\u0091\7w\2\2\u0091\u0092\7o\2\2\u0092"+
		"\16\3\2\2\2\u0093\u0094\7h\2\2\u0094\u0095\7c\2\2\u0095\u0096\7n\2\2\u0096"+
		"\u0097\7u\2\2\u0097\u0098\7g\2\2\u0098\20\3\2\2\2\u0099\u009a\7h\2\2\u009a"+
		"\u009b\7t\2\2\u009b\u009c\7k\2\2\u009c\u009d\7g\2\2\u009d\u009e\7p\2\2"+
		"\u009e\u009f\7f\2\2\u009f\22\3\2\2\2\u00a0\u00a1\7o\2\2\u00a1\u00a2\7"+
		"w\2\2\u00a2\u00a3\7v\2\2\u00a3\u00a4\7c\2\2\u00a4\u00a5\7d\2\2\u00a5\u00a6"+
		"\7n\2\2\u00a6\u00a7\7g\2\2\u00a7\24\3\2\2\2\u00a8\u00a9\7q\2\2\u00a9\u00aa"+
		"\7x\2\2\u00aa\u00ab\7g\2\2\u00ab\u00ac\7t\2\2\u00ac\u00ad\7t\2\2\u00ad"+
		"\u00ae\7k\2\2\u00ae\u00af\7f\2\2\u00af\u00b0\7g\2\2\u00b0\26\3\2\2\2\u00b1"+
		"\u00b2\7r\2\2\u00b2\u00b3\7t\2\2\u00b3\u00b4\7k\2\2\u00b4\u00b5\7x\2\2"+
		"\u00b5\u00b6\7c\2\2\u00b6\u00b7\7v\2\2\u00b7\u00b8\7g\2\2\u00b8\30\3\2"+
		"\2\2\u00b9\u00ba\7r\2\2\u00ba\u00bb\7t\2\2\u00bb\u00bc\7q\2\2\u00bc\u00bd"+
		"\7v\2\2\u00bd\u00be\7g\2\2\u00be\u00bf\7e\2\2\u00bf\u00c0\7v\2\2\u00c0"+
		"\u00c1\7g\2\2\u00c1\u00c2\7f\2\2\u00c2\32\3\2\2\2\u00c3\u00c4\7r\2\2\u00c4"+
		"\u00c5\7w\2\2\u00c5\u00c6\7d\2\2\u00c6\u00c7\7n\2\2\u00c7\u00c8\7k\2\2"+
		"\u00c8\u00c9\7e\2\2\u00c9\34\3\2\2\2\u00ca\u00cb\7u\2\2\u00cb\u00cc\7"+
		"v\2\2\u00cc\u00cd\7c\2\2\u00cd\u00ce\7v\2\2\u00ce\u00cf\7k\2\2\u00cf\u00d0"+
		"\7e\2\2\u00d0\36\3\2\2\2\u00d1\u00d2\7u\2\2\u00d2\u00d3\7v\2\2\u00d3\u00d4"+
		"\7t\2\2\u00d4\u00d5\7w\2\2\u00d5\u00d6\7e\2\2\u00d6\u00d7\7v\2\2\u00d7"+
		" \3\2\2\2\u00d8\u00d9\7v\2\2\u00d9\u00da\7t\2\2\u00da\u00db\7w\2\2\u00db"+
		"\u00dc\7g\2\2\u00dc\"\3\2\2\2\u00dd\u00de\7v\2\2\u00de\u00df\7{\2\2\u00df"+
		"\u00e0\7r\2\2\u00e0\u00e1\7g\2\2\u00e1\u00e2\7f\2\2\u00e2\u00e3\7g\2\2"+
		"\u00e3\u00e4\7h\2\2\u00e4$\3\2\2\2\u00e5\u00e6\7x\2\2\u00e6\u00e7\7k\2"+
		"\2\u00e7\u00e8\7t\2\2\u00e8\u00e9\7v\2\2\u00e9\u00ea\7w\2\2\u00ea\u00eb"+
		"\7c\2\2\u00eb\u00ec\7n\2\2\u00ec&\3\2\2\2\u00ed\u00ee\7W\2\2\u00ee\u00ef"+
		"\7E\2\2\u00ef\u00f0\7N\2\2\u00f0\u00f1\7C\2\2\u00f1\u00f2\7U\2\2\u00f2"+
		"\u00f3\7U\2\2\u00f3(\3\2\2\2\u00f4\u00f5\7W\2\2\u00f5\u00f6\7G\2\2\u00f6"+
		"\u00f7\7P\2\2\u00f7\u00f8\7W\2\2\u00f8\u00f9\7O\2\2\u00f9*\3\2\2\2\u00fa"+
		"\u00fb\7W\2\2\u00fb\u00fc\7H\2\2\u00fc\u00fd\7W\2\2\u00fd\u00fe\7P\2\2"+
		"\u00fe\u00ff\7E\2\2\u00ff\u0100\7V\2\2\u0100\u0101\7K\2\2\u0101\u0102"+
		"\7Q\2\2\u0102\u0103\7P\2\2\u0103,\3\2\2\2\u0104\u0105\7W\2\2\u0105\u0106"+
		"\7K\2\2\u0106\u0107\7P\2\2\u0107\u0108\7V\2\2\u0108\u0109\7G\2\2\u0109"+
		"\u010a\7T\2\2\u010a\u010b\7H\2\2\u010b\u010c\7C\2\2\u010c\u010d\7E\2\2"+
		"\u010d\u010e\7G\2\2\u010e.\3\2\2\2\u010f\u0110\7W\2\2\u0110\u0111\7O\2"+
		"\2\u0111\u0112\7G\2\2\u0112\u0113\7V\2\2\u0113\u0114\7C\2\2\u0114\60\3"+
		"\2\2\2\u0115\u0116\7W\2\2\u0116\u0117\7R\2\2\u0117\u0118\7C\2\2\u0118"+
		"\u0119\7T\2\2\u0119\u011a\7C\2\2\u011a\u011b\7O\2\2\u011b\62\3\2\2\2\u011c"+
		"\u011d\7W\2\2\u011d\u011e\7R\2\2\u011e\u011f\7T\2\2\u011f\u0120\7Q\2\2"+
		"\u0120\u0121\7R\2\2\u0121\u0122\7G\2\2\u0122\u0123\7T\2\2\u0123\u0124"+
		"\7V\2\2\u0124\u0125\7[\2\2\u0125\64\3\2\2\2\u0126\u0127\7W\2\2\u0127\u0128"+
		"\7U\2\2\u0128\u0129\7V\2\2\u0129\u012a\7T\2\2\u012a\u012b\7W\2\2\u012b"+
		"\u012c\7E\2\2\u012c\u012d\7V\2\2\u012d\66\3\2\2\2\u012e\u012f\7H\2\2\u012f"+
		"\u0130\7Q\2\2\u0130\u0131\7T\2\2\u0131\u0132\7E\2\2\u0132\u0133\7G\2\2"+
		"\u0133\u0134\7K\2\2\u0134\u0135\7P\2\2\u0135\u0136\7N\2\2\u0136\u0137"+
		"\7K\2\2\u0137\u0138\7P\2\2\u0138\u0139\7G\2\2\u01398\3\2\2\2\u013a\u013b"+
		"\7H\2\2\u013b\u013c\7C\2\2\u013c\u013d\7E\2\2\u013d\u013e\7V\2\2\u013e"+
		"\u013f\7Q\2\2\u013f\u0140\7T\2\2\u0140\u0141\7[\2\2\u0141\u0142\7I\2\2"+
		"\u0142\u0143\7C\2\2\u0143\u0144\7O\2\2\u0144\u0145\7G\2\2\u0145\u0146"+
		"\7a\2\2\u0146\u0147\7C\2\2\u0147\u0148\7R\2\2\u0148\u0149\7K\2\2\u0149"+
		":\3\2\2\2\u014a\u014b\7I\2\2\u014b\u014c\7G\2\2\u014c\u014d\7P\2\2\u014d"+
		"\u014e\7G\2\2\u014e\u014f\7T\2\2\u014f\u0150\7C\2\2\u0150\u0151\7V\2\2"+
		"\u0151\u0152\7G\2\2\u0152\u0153\7F\2\2\u0153\u0154\7a\2\2\u0154\u0158"+
		"\3\2\2\2\u0155\u0157\t\3\2\2\u0156\u0155\3\2\2\2\u0157\u015a\3\2\2\2\u0158"+
		"\u0156\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015b\3\2\2\2\u015a\u0158\3\2"+
		"\2\2\u015b\u015c\7D\2\2\u015c\u015d\7Q\2\2\u015d\u015e\7F\2\2\u015e\u015f"+
		"\7[\2\2\u015f<\3\2\2\2\u0160\u0161\7<\2\2\u0161>\3\2\2\2\u0162\u0163\7"+
		"*\2\2\u0163@\3\2\2\2\u0164\u0165\7+\2\2\u0165B\3\2\2\2\u0166\u0167\7}"+
		"\2\2\u0167D\3\2\2\2\u0168\u0169\7\177\2\2\u0169F\3\2\2\2\u016a\u016b\7"+
		">\2\2\u016bH\3\2\2\2\u016c\u016d\7@\2\2\u016dJ\3\2\2\2\u016e\u016f\7."+
		"\2\2\u016fL\3\2\2\2\u0170\u0171\7\60\2\2\u0171N\3\2\2\2\u0172\u0173\7"+
		"?\2\2\u0173P\3\2\2\2\u0174\u0175\7=\2\2\u0175R\3\2\2\2\u0176\u0177\7,"+
		"\2\2\u0177T\3\2\2\2\u0178\u0179\7(\2\2\u0179V\3\2\2\2\u017a\u017b\7/\2"+
		"\2\u017bX\3\2\2\2\u017c\u017d\7~\2\2\u017dZ\3\2\2\2\u017e\u017f\7#\2\2"+
		"\u017f\\\3\2\2\2\u0180\u0182\t\4\2\2\u0181\u0183\t\5\2\2\u0182\u0181\3"+
		"\2\2\2\u0183\u0184\3\2\2\2\u0184\u0182\3\2\2\2\u0184\u0185\3\2\2\2\u0185"+
		"^\3\2\2\2\u0186\u018a\7$\2\2\u0187\u0189\13\2\2\2\u0188\u0187\3\2\2\2"+
		"\u0189\u018c\3\2\2\2\u018a\u018b\3\2\2\2\u018a\u0188\3\2\2\2\u018b\u018d"+
		"\3\2\2\2\u018c\u018a\3\2\2\2\u018d\u018e\7$\2\2\u018e`\3\2\2\2\u018f\u0191"+
		"\t\6\2\2\u0190\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192\u0190\3\2\2\2\u0192"+
		"\u0193\3\2\2\2\u0193\u0194\3\2\2\2\u0194\u0198\7\60\2\2\u0195\u0197\t"+
		"\6\2\2\u0196\u0195\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196\3\2\2\2\u0198"+
		"\u0199\3\2\2\2\u0199\u019c\3\2\2\2\u019a\u0198\3\2\2\2\u019b\u019d\7h"+
		"\2\2\u019c\u019b\3\2\2\2\u019c\u019d\3\2\2\2\u019db\3\2\2\2\u019e\u01a0"+
		"\t\6\2\2\u019f\u019e\3\2\2\2\u01a0\u01a1\3\2\2\2\u01a1\u019f\3\2\2\2\u01a1"+
		"\u01a2\3\2\2\2\u01a2d\3\2\2\2\u01a3\u01a7\7%\2\2\u01a4\u01a6\n\7\2\2\u01a5"+
		"\u01a4\3\2\2\2\u01a6\u01a9\3\2\2\2\u01a7\u01a5\3\2\2\2\u01a7\u01a8\3\2"+
		"\2\2\u01a8\u01aa\3\2\2\2\u01a9\u01a7\3\2\2\2\u01aa\u01ab\b\62\2\2\u01ab"+
		"f\3\2\2\2\u01ac\u01ad\7\61\2\2\u01ad\u01ae\7\61\2\2\u01ae\u01b0\3\2\2"+
		"\2\u01af\u01b1\5\5\2\2\u01b0\u01af\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b1\u01b2"+
		"\3\2\2\2\u01b2\u01b3\b\63\2\2\u01b3\u01b4\b\63\3\2\u01b4h\3\2\2\2\u01b5"+
		"\u01b6\7\61\2\2\u01b6\u01b7\7,\2\2\u01b7\u01bb\3\2\2\2\u01b8\u01ba\7,"+
		"\2\2\u01b9\u01b8\3\2\2\2\u01ba\u01bd\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb"+
		"\u01bc\3\2\2\2\u01bc\u01bf\3\2\2\2\u01bd\u01bb\3\2\2\2\u01be\u01c0\5\5"+
		"\2\2\u01bf\u01be\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1"+
		"\u01c2\b\64\2\2\u01c2\u01c3\b\64\4\2\u01c3j\3\2\2\2\u01c4\u01c6\t\b\2"+
		"\2\u01c5\u01c4\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c5\3\2\2\2\u01c7\u01c8"+
		"\3\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01ca\b\65\2\2\u01cal\3\2\2\2\u01cb"+
		"\u01cd\5\5\2\2\u01cc\u01cb\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd\u01ce\3\2"+
		"\2\2\u01ce\u01cf\5\7\3\2\u01cf\u01d0\3\2\2\2\u01d0\u01d1\b\66\2\2\u01d1"+
		"\u01d2\b\66\5\2\u01d2n\3\2\2\2\u01d3\u01d5\n\7\2\2\u01d4\u01d3\3\2\2\2"+
		"\u01d5\u01d6\3\2\2\2\u01d6\u01d4\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8"+
		"\3\2\2\2\u01d8\u01d9\b\67\6\2\u01d9p\3\2\2\2\u01da\u01db\13\2\2\2\u01db"+
		"\u01dc\3\2\2\2\u01dc\u01dd\b8\2\2\u01ddr\3\2\2\2\u01de\u01e0\5\5\2\2\u01df"+
		"\u01de\3\2\2\2\u01e0\u01e3\3\2\2\2\u01e1\u01df\3\2\2\2\u01e1\u01e2\3\2"+
		"\2\2\u01e2\u01e4\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e4\u01e5\7,\2\2\u01e5"+
		"\u01e6\7\61\2\2\u01e6\u01e7\3\2\2\2\u01e7\u01e8\b9\2\2\u01e8\u01e9\b9"+
		"\5\2\u01e9t\3\2\2\2\u01ea\u01ee\5\7\3\2\u01eb\u01ed\5\5\2\2\u01ec\u01eb"+
		"\3\2\2\2\u01ed\u01f0\3\2\2\2\u01ee\u01ec\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef"+
		"\u01f1\3\2\2\2\u01f0\u01ee\3\2\2\2\u01f1\u01f2\7,\2\2\u01f2\u01f3\n\t"+
		"\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\b:\2\2\u01f5v\3\2\2\2\u01f6\u01f8"+
		"\n\n\2\2\u01f7\u01f6\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01f7\3\2\2\2\u01f9"+
		"\u01fa\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb\u01fc\b;\6\2\u01fcx\3\2\2\2\u01fd"+
		"\u01fe\13\2\2\2\u01fe\u01ff\3\2\2\2\u01ff\u0200\b<\2\2\u0200z\3\2\2\2"+
		"\27\2\3\4~\u0158\u0184\u018a\u0192\u0198\u019c\u01a1\u01a7\u01b0\u01bb"+
		"\u01bf\u01c7\u01cc\u01d6\u01e1\u01ee\u01f9\7\b\2\2\7\3\2\7\4\2\6\2\2\2"+
		"\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}