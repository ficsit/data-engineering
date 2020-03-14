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
		UPROPERTY=22, USTRUCT=23, UE_DEPRECATED=24, FORCEINLINE=25, SF_CLASS_TAG=26, 
		SF_GENERATED_BODY=27, COLON=28, OPEN_PAREN=29, CLOSE_PAREN=30, OPEN_BRACE=31, 
		CLOSE_BRACE=32, OPEN_ANGLE=33, CLOSE_ANGLE=34, COMMA=35, PERIOD=36, EQUALS=37, 
		SEMICOLON=38, STAR=39, AMPERSAND=40, HYPHEN=41, PIPE=42, BANG=43, BACKSLASH=44, 
		IDENTIFIER=45, STRING_LITERAL=46, FLOAT_LITERAL=47, INTEGER_LITERAL=48, 
		PREPROCESSOR=49, LINE_COMMENT_START=50, BLOCK_COMMENT_START=51, WHITESPACE=52, 
		LINE_COMMENT_END=53, LINE_COMMENT_TEXT=54, LINE_COMMENT_OTHER=55, BLOCK_COMMENT_END=56, 
		BLOCK_COMMENT_NEW_LINE=57, BLOCK_COMMENT_TEXT=58, BLOCK_COMMENT_OTHER=59;
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
		"UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "FORCEINLINE", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", 
		"SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "BACKSLASH", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'friend'", "'mutable'", 
		"'override'", "'private'", "'protected'", "'public'", "'static'", "'struct'", 
		"'true'", "'typedef'", "'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", 
		"'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", 
		"'FORCEINLINE'", "'FACTORYGAME_API'", null, "':'", "'('", "')'", "'{'", 
		"'}'", "'<'", "'>'", "','", "'.'", "'='", "';'", "'*'", "'&'", "'-'", 
		"'|'", "'!'", "'/'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FRIEND", "MUTABLE", "OVERRIDE", 
		"PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TRUE", "TYPEDEF", 
		"VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", 
		"UPROPERTY", "USTRUCT", "UE_DEPRECATED", "FORCEINLINE", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "COLON", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "OPEN_ANGLE", "CLOSE_ANGLE", "COMMA", "PERIOD", "EQUALS", 
		"SEMICOLON", "STAR", "AMPERSAND", "HYPHEN", "PIPE", "BANG", "BACKSLASH", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2=\u0215\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t"+
		"<\4=\t=\4>\t>\3\2\3\2\3\3\5\3\u0083\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\7\36"+
		"\u0169\n\36\f\36\16\36\u016c\13\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37"+
		"\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3"+
		"*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\6\60\u0197\n\60\r\60\16\60\u0198"+
		"\3\61\3\61\7\61\u019d\n\61\f\61\16\61\u01a0\13\61\3\61\3\61\3\62\6\62"+
		"\u01a5\n\62\r\62\16\62\u01a6\3\62\3\62\7\62\u01ab\n\62\f\62\16\62\u01ae"+
		"\13\62\3\62\5\62\u01b1\n\62\3\63\6\63\u01b4\n\63\r\63\16\63\u01b5\3\64"+
		"\3\64\7\64\u01ba\n\64\f\64\16\64\u01bd\13\64\3\64\3\64\3\65\3\65\3\65"+
		"\3\65\5\65\u01c5\n\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\7\66\u01ce\n"+
		"\66\f\66\16\66\u01d1\13\66\3\66\5\66\u01d4\n\66\3\66\3\66\3\66\3\67\6"+
		"\67\u01da\n\67\r\67\16\67\u01db\3\67\3\67\38\58\u01e1\n8\38\38\38\38\3"+
		"8\39\69\u01e9\n9\r9\169\u01ea\39\39\3:\3:\3:\3:\3;\7;\u01f4\n;\f;\16;"+
		"\u01f7\13;\3;\3;\3;\3;\3;\3;\3<\3<\7<\u0201\n<\f<\16<\u0204\13<\3<\3<"+
		"\3<\3<\3<\3=\6=\u020c\n=\r=\16=\u020d\3=\3=\3>\3>\3>\3>\3\u019e\2?\5\2"+
		"\7\2\t\3\13\4\r\5\17\6\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#"+
		"\20%\21\'\22)\23+\24-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A"+
		"\37C E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66q\67"+
		"s8u9w:y;{<}=\5\2\3\4\13\4\2\13\13\"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac"+
		"|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2"+
		"\u0222\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2"+
		"\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35"+
		"\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)"+
		"\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2"+
		"\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2"+
		"A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3"+
		"\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2"+
		"\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2"+
		"g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\3q\3\2\2\2\3s\3"+
		"\2\2\2\3u\3\2\2\2\4w\3\2\2\2\4y\3\2\2\2\4{\3\2\2\2\4}\3\2\2\2\5\177\3"+
		"\2\2\2\7\u0082\3\2\2\2\t\u0086\3\2\2\2\13\u008c\3\2\2\2\r\u0092\3\2\2"+
		"\2\17\u0097\3\2\2\2\21\u009d\3\2\2\2\23\u00a4\3\2\2\2\25\u00ac\3\2\2\2"+
		"\27\u00b5\3\2\2\2\31\u00bd\3\2\2\2\33\u00c7\3\2\2\2\35\u00ce\3\2\2\2\37"+
		"\u00d5\3\2\2\2!\u00dc\3\2\2\2#\u00e1\3\2\2\2%\u00e9\3\2\2\2\'\u00f1\3"+
		"\2\2\2)\u00f8\3\2\2\2+\u00fe\3\2\2\2-\u0108\3\2\2\2/\u0113\3\2\2\2\61"+
		"\u0119\3\2\2\2\63\u0120\3\2\2\2\65\u012a\3\2\2\2\67\u0132\3\2\2\29\u0140"+
		"\3\2\2\2;\u014c\3\2\2\2=\u015c\3\2\2\2?\u0172\3\2\2\2A\u0174\3\2\2\2C"+
		"\u0176\3\2\2\2E\u0178\3\2\2\2G\u017a\3\2\2\2I\u017c\3\2\2\2K\u017e\3\2"+
		"\2\2M\u0180\3\2\2\2O\u0182\3\2\2\2Q\u0184\3\2\2\2S\u0186\3\2\2\2U\u0188"+
		"\3\2\2\2W\u018a\3\2\2\2Y\u018c\3\2\2\2[\u018e\3\2\2\2]\u0190\3\2\2\2_"+
		"\u0192\3\2\2\2a\u0194\3\2\2\2c\u019a\3\2\2\2e\u01a4\3\2\2\2g\u01b3\3\2"+
		"\2\2i\u01b7\3\2\2\2k\u01c0\3\2\2\2m\u01c9\3\2\2\2o\u01d9\3\2\2\2q\u01e0"+
		"\3\2\2\2s\u01e8\3\2\2\2u\u01ee\3\2\2\2w\u01f5\3\2\2\2y\u01fe\3\2\2\2{"+
		"\u020b\3\2\2\2}\u0211\3\2\2\2\177\u0080\t\2\2\2\u0080\6\3\2\2\2\u0081"+
		"\u0083\7\17\2\2\u0082\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084\3"+
		"\2\2\2\u0084\u0085\7\f\2\2\u0085\b\3\2\2\2\u0086\u0087\7e\2\2\u0087\u0088"+
		"\7n\2\2\u0088\u0089\7c\2\2\u0089\u008a\7u\2\2\u008a\u008b\7u\2\2\u008b"+
		"\n\3\2\2\2\u008c\u008d\7e\2\2\u008d\u008e\7q\2\2\u008e\u008f\7p\2\2\u008f"+
		"\u0090\7u\2\2\u0090\u0091\7v\2\2\u0091\f\3\2\2\2\u0092\u0093\7g\2\2\u0093"+
		"\u0094\7p\2\2\u0094\u0095\7w\2\2\u0095\u0096\7o\2\2\u0096\16\3\2\2\2\u0097"+
		"\u0098\7h\2\2\u0098\u0099\7c\2\2\u0099\u009a\7n\2\2\u009a\u009b\7u\2\2"+
		"\u009b\u009c\7g\2\2\u009c\20\3\2\2\2\u009d\u009e\7h\2\2\u009e\u009f\7"+
		"t\2\2\u009f\u00a0\7k\2\2\u00a0\u00a1\7g\2\2\u00a1\u00a2\7p\2\2\u00a2\u00a3"+
		"\7f\2\2\u00a3\22\3\2\2\2\u00a4\u00a5\7o\2\2\u00a5\u00a6\7w\2\2\u00a6\u00a7"+
		"\7v\2\2\u00a7\u00a8\7c\2\2\u00a8\u00a9\7d\2\2\u00a9\u00aa\7n\2\2\u00aa"+
		"\u00ab\7g\2\2\u00ab\24\3\2\2\2\u00ac\u00ad\7q\2\2\u00ad\u00ae\7x\2\2\u00ae"+
		"\u00af\7g\2\2\u00af\u00b0\7t\2\2\u00b0\u00b1\7t\2\2\u00b1\u00b2\7k\2\2"+
		"\u00b2\u00b3\7f\2\2\u00b3\u00b4\7g\2\2\u00b4\26\3\2\2\2\u00b5\u00b6\7"+
		"r\2\2\u00b6\u00b7\7t\2\2\u00b7\u00b8\7k\2\2\u00b8\u00b9\7x\2\2\u00b9\u00ba"+
		"\7c\2\2\u00ba\u00bb\7v\2\2\u00bb\u00bc\7g\2\2\u00bc\30\3\2\2\2\u00bd\u00be"+
		"\7r\2\2\u00be\u00bf\7t\2\2\u00bf\u00c0\7q\2\2\u00c0\u00c1\7v\2\2\u00c1"+
		"\u00c2\7g\2\2\u00c2\u00c3\7e\2\2\u00c3\u00c4\7v\2\2\u00c4\u00c5\7g\2\2"+
		"\u00c5\u00c6\7f\2\2\u00c6\32\3\2\2\2\u00c7\u00c8\7r\2\2\u00c8\u00c9\7"+
		"w\2\2\u00c9\u00ca\7d\2\2\u00ca\u00cb\7n\2\2\u00cb\u00cc\7k\2\2\u00cc\u00cd"+
		"\7e\2\2\u00cd\34\3\2\2\2\u00ce\u00cf\7u\2\2\u00cf\u00d0\7v\2\2\u00d0\u00d1"+
		"\7c\2\2\u00d1\u00d2\7v\2\2\u00d2\u00d3\7k\2\2\u00d3\u00d4\7e\2\2\u00d4"+
		"\36\3\2\2\2\u00d5\u00d6\7u\2\2\u00d6\u00d7\7v\2\2\u00d7\u00d8\7t\2\2\u00d8"+
		"\u00d9\7w\2\2\u00d9\u00da\7e\2\2\u00da\u00db\7v\2\2\u00db \3\2\2\2\u00dc"+
		"\u00dd\7v\2\2\u00dd\u00de\7t\2\2\u00de\u00df\7w\2\2\u00df\u00e0\7g\2\2"+
		"\u00e0\"\3\2\2\2\u00e1\u00e2\7v\2\2\u00e2\u00e3\7{\2\2\u00e3\u00e4\7r"+
		"\2\2\u00e4\u00e5\7g\2\2\u00e5\u00e6\7f\2\2\u00e6\u00e7\7g\2\2\u00e7\u00e8"+
		"\7h\2\2\u00e8$\3\2\2\2\u00e9\u00ea\7x\2\2\u00ea\u00eb\7k\2\2\u00eb\u00ec"+
		"\7t\2\2\u00ec\u00ed\7v\2\2\u00ed\u00ee\7w\2\2\u00ee\u00ef\7c\2\2\u00ef"+
		"\u00f0\7n\2\2\u00f0&\3\2\2\2\u00f1\u00f2\7W\2\2\u00f2\u00f3\7E\2\2\u00f3"+
		"\u00f4\7N\2\2\u00f4\u00f5\7C\2\2\u00f5\u00f6\7U\2\2\u00f6\u00f7\7U\2\2"+
		"\u00f7(\3\2\2\2\u00f8\u00f9\7W\2\2\u00f9\u00fa\7G\2\2\u00fa\u00fb\7P\2"+
		"\2\u00fb\u00fc\7W\2\2\u00fc\u00fd\7O\2\2\u00fd*\3\2\2\2\u00fe\u00ff\7"+
		"W\2\2\u00ff\u0100\7H\2\2\u0100\u0101\7W\2\2\u0101\u0102\7P\2\2\u0102\u0103"+
		"\7E\2\2\u0103\u0104\7V\2\2\u0104\u0105\7K\2\2\u0105\u0106\7Q\2\2\u0106"+
		"\u0107\7P\2\2\u0107,\3\2\2\2\u0108\u0109\7W\2\2\u0109\u010a\7K\2\2\u010a"+
		"\u010b\7P\2\2\u010b\u010c\7V\2\2\u010c\u010d\7G\2\2\u010d\u010e\7T\2\2"+
		"\u010e\u010f\7H\2\2\u010f\u0110\7C\2\2\u0110\u0111\7E\2\2\u0111\u0112"+
		"\7G\2\2\u0112.\3\2\2\2\u0113\u0114\7W\2\2\u0114\u0115\7O\2\2\u0115\u0116"+
		"\7G\2\2\u0116\u0117\7V\2\2\u0117\u0118\7C\2\2\u0118\60\3\2\2\2\u0119\u011a"+
		"\7W\2\2\u011a\u011b\7R\2\2\u011b\u011c\7C\2\2\u011c\u011d\7T\2\2\u011d"+
		"\u011e\7C\2\2\u011e\u011f\7O\2\2\u011f\62\3\2\2\2\u0120\u0121\7W\2\2\u0121"+
		"\u0122\7R\2\2\u0122\u0123\7T\2\2\u0123\u0124\7Q\2\2\u0124\u0125\7R\2\2"+
		"\u0125\u0126\7G\2\2\u0126\u0127\7T\2\2\u0127\u0128\7V\2\2\u0128\u0129"+
		"\7[\2\2\u0129\64\3\2\2\2\u012a\u012b\7W\2\2\u012b\u012c\7U\2\2\u012c\u012d"+
		"\7V\2\2\u012d\u012e\7T\2\2\u012e\u012f\7W\2\2\u012f\u0130\7E\2\2\u0130"+
		"\u0131\7V\2\2\u0131\66\3\2\2\2\u0132\u0133\7W\2\2\u0133\u0134\7G\2\2\u0134"+
		"\u0135\7a\2\2\u0135\u0136\7F\2\2\u0136\u0137\7G\2\2\u0137\u0138\7R\2\2"+
		"\u0138\u0139\7T\2\2\u0139\u013a\7G\2\2\u013a\u013b\7E\2\2\u013b\u013c"+
		"\7C\2\2\u013c\u013d\7V\2\2\u013d\u013e\7G\2\2\u013e\u013f\7F\2\2\u013f"+
		"8\3\2\2\2\u0140\u0141\7H\2\2\u0141\u0142\7Q\2\2\u0142\u0143\7T\2\2\u0143"+
		"\u0144\7E\2\2\u0144\u0145\7G\2\2\u0145\u0146\7K\2\2\u0146\u0147\7P\2\2"+
		"\u0147\u0148\7N\2\2\u0148\u0149\7K\2\2\u0149\u014a\7P\2\2\u014a\u014b"+
		"\7G\2\2\u014b:\3\2\2\2\u014c\u014d\7H\2\2\u014d\u014e\7C\2\2\u014e\u014f"+
		"\7E\2\2\u014f\u0150\7V\2\2\u0150\u0151\7Q\2\2\u0151\u0152\7T\2\2\u0152"+
		"\u0153\7[\2\2\u0153\u0154\7I\2\2\u0154\u0155\7C\2\2\u0155\u0156\7O\2\2"+
		"\u0156\u0157\7G\2\2\u0157\u0158\7a\2\2\u0158\u0159\7C\2\2\u0159\u015a"+
		"\7R\2\2\u015a\u015b\7K\2\2\u015b<\3\2\2\2\u015c\u015d\7I\2\2\u015d\u015e"+
		"\7G\2\2\u015e\u015f\7P\2\2\u015f\u0160\7G\2\2\u0160\u0161\7T\2\2\u0161"+
		"\u0162\7C\2\2\u0162\u0163\7V\2\2\u0163\u0164\7G\2\2\u0164\u0165\7F\2\2"+
		"\u0165\u0166\7a\2\2\u0166\u016a\3\2\2\2\u0167\u0169\t\3\2\2\u0168\u0167"+
		"\3\2\2\2\u0169\u016c\3\2\2\2\u016a\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b"+
		"\u016d\3\2\2\2\u016c\u016a\3\2\2\2\u016d\u016e\7D\2\2\u016e\u016f\7Q\2"+
		"\2\u016f\u0170\7F\2\2\u0170\u0171\7[\2\2\u0171>\3\2\2\2\u0172\u0173\7"+
		"<\2\2\u0173@\3\2\2\2\u0174\u0175\7*\2\2\u0175B\3\2\2\2\u0176\u0177\7+"+
		"\2\2\u0177D\3\2\2\2\u0178\u0179\7}\2\2\u0179F\3\2\2\2\u017a\u017b\7\177"+
		"\2\2\u017bH\3\2\2\2\u017c\u017d\7>\2\2\u017dJ\3\2\2\2\u017e\u017f\7@\2"+
		"\2\u017fL\3\2\2\2\u0180\u0181\7.\2\2\u0181N\3\2\2\2\u0182\u0183\7\60\2"+
		"\2\u0183P\3\2\2\2\u0184\u0185\7?\2\2\u0185R\3\2\2\2\u0186\u0187\7=\2\2"+
		"\u0187T\3\2\2\2\u0188\u0189\7,\2\2\u0189V\3\2\2\2\u018a\u018b\7(\2\2\u018b"+
		"X\3\2\2\2\u018c\u018d\7/\2\2\u018dZ\3\2\2\2\u018e\u018f\7~\2\2\u018f\\"+
		"\3\2\2\2\u0190\u0191\7#\2\2\u0191^\3\2\2\2\u0192\u0193\7\61\2\2\u0193"+
		"`\3\2\2\2\u0194\u0196\t\4\2\2\u0195\u0197\t\5\2\2\u0196\u0195\3\2\2\2"+
		"\u0197\u0198\3\2\2\2\u0198\u0196\3\2\2\2\u0198\u0199\3\2\2\2\u0199b\3"+
		"\2\2\2\u019a\u019e\7$\2\2\u019b\u019d\13\2\2\2\u019c\u019b\3\2\2\2\u019d"+
		"\u01a0\3\2\2\2\u019e\u019f\3\2\2\2\u019e\u019c\3\2\2\2\u019f\u01a1\3\2"+
		"\2\2\u01a0\u019e\3\2\2\2\u01a1\u01a2\7$\2\2\u01a2d\3\2\2\2\u01a3\u01a5"+
		"\t\6\2\2\u01a4\u01a3\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a6"+
		"\u01a7\3\2\2\2\u01a7\u01a8\3\2\2\2\u01a8\u01ac\7\60\2\2\u01a9\u01ab\t"+
		"\6\2\2\u01aa\u01a9\3\2\2\2\u01ab\u01ae\3\2\2\2\u01ac\u01aa\3\2\2\2\u01ac"+
		"\u01ad\3\2\2\2\u01ad\u01b0\3\2\2\2\u01ae\u01ac\3\2\2\2\u01af\u01b1\7h"+
		"\2\2\u01b0\u01af\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b1f\3\2\2\2\u01b2\u01b4"+
		"\t\6\2\2\u01b3\u01b2\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5\u01b3\3\2\2\2\u01b5"+
		"\u01b6\3\2\2\2\u01b6h\3\2\2\2\u01b7\u01bb\7%\2\2\u01b8\u01ba\n\7\2\2\u01b9"+
		"\u01b8\3\2\2\2\u01ba\u01bd\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01bc\3\2"+
		"\2\2\u01bc\u01be\3\2\2\2\u01bd\u01bb\3\2\2\2\u01be\u01bf\b\64\2\2\u01bf"+
		"j\3\2\2\2\u01c0\u01c1\7\61\2\2\u01c1\u01c2\7\61\2\2\u01c2\u01c4\3\2\2"+
		"\2\u01c3\u01c5\5\5\2\2\u01c4\u01c3\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5\u01c6"+
		"\3\2\2\2\u01c6\u01c7\b\65\2\2\u01c7\u01c8\b\65\3\2\u01c8l\3\2\2\2\u01c9"+
		"\u01ca\7\61\2\2\u01ca\u01cb\7,\2\2\u01cb\u01cf\3\2\2\2\u01cc\u01ce\7,"+
		"\2\2\u01cd\u01cc\3\2\2\2\u01ce\u01d1\3\2\2\2\u01cf\u01cd\3\2\2\2\u01cf"+
		"\u01d0\3\2\2\2\u01d0\u01d3\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2\u01d4\5\5"+
		"\2\2\u01d3\u01d2\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4\u01d5\3\2\2\2\u01d5"+
		"\u01d6\b\66\2\2\u01d6\u01d7\b\66\4\2\u01d7n\3\2\2\2\u01d8\u01da\t\b\2"+
		"\2\u01d9\u01d8\3\2\2\2\u01da\u01db\3\2\2\2\u01db\u01d9\3\2\2\2\u01db\u01dc"+
		"\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u01de\b\67\2\2\u01dep\3\2\2\2\u01df"+
		"\u01e1\5\5\2\2\u01e0\u01df\3\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\u01e2\3\2"+
		"\2\2\u01e2\u01e3\5\7\3\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\b8\2\2\u01e5"+
		"\u01e6\b8\5\2\u01e6r\3\2\2\2\u01e7\u01e9\n\7\2\2\u01e8\u01e7\3\2\2\2\u01e9"+
		"\u01ea\3\2\2\2\u01ea\u01e8\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb\u01ec\3\2"+
		"\2\2\u01ec\u01ed\b9\6\2\u01edt\3\2\2\2\u01ee\u01ef\13\2\2\2\u01ef\u01f0"+
		"\3\2\2\2\u01f0\u01f1\b:\2\2\u01f1v\3\2\2\2\u01f2\u01f4\5\5\2\2\u01f3\u01f2"+
		"\3\2\2\2\u01f4\u01f7\3\2\2\2\u01f5\u01f3\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6"+
		"\u01f8\3\2\2\2\u01f7\u01f5\3\2\2\2\u01f8\u01f9\7,\2\2\u01f9\u01fa\7\61"+
		"\2\2\u01fa\u01fb\3\2\2\2\u01fb\u01fc\b;\2\2\u01fc\u01fd\b;\5\2\u01fdx"+
		"\3\2\2\2\u01fe\u0202\5\7\3\2\u01ff\u0201\5\5\2\2\u0200\u01ff\3\2\2\2\u0201"+
		"\u0204\3\2\2\2\u0202\u0200\3\2\2\2\u0202\u0203\3\2\2\2\u0203\u0205\3\2"+
		"\2\2\u0204\u0202\3\2\2\2\u0205\u0206\7,\2\2\u0206\u0207\n\t\2\2\u0207"+
		"\u0208\3\2\2\2\u0208\u0209\b<\2\2\u0209z\3\2\2\2\u020a\u020c\n\n\2\2\u020b"+
		"\u020a\3\2\2\2\u020c\u020d\3\2\2\2\u020d\u020b\3\2\2\2\u020d\u020e\3\2"+
		"\2\2\u020e\u020f\3\2\2\2\u020f\u0210\b=\6\2\u0210|\3\2\2\2\u0211\u0212"+
		"\13\2\2\2\u0212\u0213\3\2\2\2\u0213\u0214\b>\2\2\u0214~\3\2\2\2\27\2\3"+
		"\4\u0082\u016a\u0198\u019e\u01a6\u01ac\u01b0\u01b5\u01bb\u01c4\u01cf\u01d3"+
		"\u01db\u01e0\u01ea\u01f5\u0202\u020d\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}