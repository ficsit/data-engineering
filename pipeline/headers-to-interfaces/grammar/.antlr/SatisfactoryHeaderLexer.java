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
		CLASS=1, CONST=2, ENUM=3, FALSE=4, FORCEINLINE=5, FRIEND=6, INLINE=7, 
		MUTABLE=8, OVERRIDE=9, PRIVATE=10, PROTECTED=11, PUBLIC=12, STATIC=13, 
		STRUCT=14, TRUE=15, TYPEDEF=16, VIRTUAL=17, UCLASS=18, UENUM=19, UFUNCTION=20, 
		UINTERFACE=21, UMETA=22, UPARAM=23, UPROPERTY=24, USTRUCT=25, UE_DEPRECATED=26, 
		SF_CLASS_TAG=27, SF_GENERATED_BODY=28, AMPERSAND=29, BACKSLASH=30, BANG=31, 
		CLOSE_ANGLE=32, CLOSE_BRACE=33, CLOSE_PAREN=34, COLON=35, COMMA=36, EQUALS=37, 
		MINUS=38, OPEN_ANGLE=39, OPEN_BRACE=40, OPEN_PAREN=41, PERIOD=42, PIPE=43, 
		PLUS=44, QUESTION=45, SEMICOLON=46, STAR=47, IDENTIFIER=48, STRING_LITERAL=49, 
		FLOAT_LITERAL=50, INTEGER_LITERAL=51, PREPROCESSOR=52, LINE_COMMENT_START=53, 
		BLOCK_COMMENT_START=54, WHITESPACE=55, LINE_COMMENT_END=56, LINE_COMMENT_TEXT=57, 
		LINE_COMMENT_OTHER=58, BLOCK_COMMENT_END=59, BLOCK_COMMENT_NEW_LINE=60, 
		BLOCK_COMMENT_TEXT=61, BLOCK_COMMENT_OTHER=62;
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
		"Space", "Newline", "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", 
		"FRIEND", "INLINE", "MUTABLE", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", 
		"STATIC", "STRUCT", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", 
		"UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", 
		"SF_CLASS_TAG", "SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", 
		"CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "PERIOD", "PIPE", "PLUS", 
		"QUESTION", "SEMICOLON", "STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", 
		"WHITESPACE", "LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", 
		"BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", "'friend'", 
		"'inline'", "'mutable'", "'override'", "'private'", "'protected'", "'public'", 
		"'static'", "'struct'", "'true'", "'typedef'", "'virtual'", "'UCLASS'", 
		"'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'USTRUCT'", "'UE_DEPRECATED'", "'FACTORYGAME_API'", null, "'&'", "'/'", 
		"'!'", "'>'", "'}'", "')'", "':'", "','", "'='", "'-'", "'<'", "'{'", 
		"'('", "'.'", "'|'", "'+'", "'?'", "';'", "'*'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", "INLINE", 
		"MUTABLE", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", "STRUCT", 
		"TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", 
		"UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", 
		"OPEN_BRACE", "OPEN_PAREN", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", 
		"STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2@\u0227\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t"+
		"<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\3\2\3\2\3\3\5\3\u0089\n\3\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3"+
		"\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3"+
		"\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3"+
		"\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3"+
		"\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3"+
		"\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3"+
		"\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u0176\n\37\f\37"+
		"\16\37\u0179\13\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#"+
		"\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3"+
		"/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\7\63\u01a8\n\63\f\63\16\63"+
		"\u01ab\13\63\3\64\3\64\7\64\u01af\n\64\f\64\16\64\u01b2\13\64\3\64\3\64"+
		"\3\65\6\65\u01b7\n\65\r\65\16\65\u01b8\3\65\3\65\7\65\u01bd\n\65\f\65"+
		"\16\65\u01c0\13\65\3\65\5\65\u01c3\n\65\3\66\6\66\u01c6\n\66\r\66\16\66"+
		"\u01c7\3\67\3\67\7\67\u01cc\n\67\f\67\16\67\u01cf\13\67\3\67\3\67\38\3"+
		"8\38\38\58\u01d7\n8\38\38\38\39\39\39\39\79\u01e0\n9\f9\169\u01e3\139"+
		"\39\59\u01e6\n9\39\39\39\3:\6:\u01ec\n:\r:\16:\u01ed\3:\3:\3;\5;\u01f3"+
		"\n;\3;\3;\3;\3;\3;\3<\6<\u01fb\n<\r<\16<\u01fc\3<\3<\3=\3=\3=\3=\3>\7"+
		">\u0206\n>\f>\16>\u0209\13>\3>\3>\3>\3>\3>\3>\3?\3?\7?\u0213\n?\f?\16"+
		"?\u0216\13?\3?\3?\3?\3?\3?\3@\6@\u021e\n@\r@\16@\u021f\3@\3@\3A\3A\3A"+
		"\3A\3\u01b0\2B\5\2\7\2\t\3\13\4\r\5\17\6\21\7\23\b\25\t\27\n\31\13\33"+
		"\f\35\r\37\16!\17#\20%\21\'\22)\23+\24-\25/\26\61\27\63\30\65\31\67\32"+
		"9\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/c\60e\61g\62i\63"+
		"k\64m\65o\66q\67s8u9w:y;{<}=\177>\u0081?\u0083@\5\2\3\4\13\4\2\13\13\""+
		"\"\4\2C\\aa\4\2C\\c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17"+
		"\17\"\"\3\2\61\61\5\2\f\f\17\17,,\2\u0234\2\t\3\2\2\2\2\13\3\2\2\2\2\r"+
		"\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2"+
		"\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2"+
		"#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3"+
		"\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2"+
		"\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G"+
		"\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2"+
		"\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2"+
		"\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m"+
		"\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\3w\3\2\2\2\3y\3\2"+
		"\2\2\3{\3\2\2\2\4}\3\2\2\2\4\177\3\2\2\2\4\u0081\3\2\2\2\4\u0083\3\2\2"+
		"\2\5\u0085\3\2\2\2\7\u0088\3\2\2\2\t\u008c\3\2\2\2\13\u0092\3\2\2\2\r"+
		"\u0098\3\2\2\2\17\u009d\3\2\2\2\21\u00a3\3\2\2\2\23\u00af\3\2\2\2\25\u00b6"+
		"\3\2\2\2\27\u00bd\3\2\2\2\31\u00c5\3\2\2\2\33\u00ce\3\2\2\2\35\u00d6\3"+
		"\2\2\2\37\u00e0\3\2\2\2!\u00e7\3\2\2\2#\u00ee\3\2\2\2%\u00f5\3\2\2\2\'"+
		"\u00fa\3\2\2\2)\u0102\3\2\2\2+\u010a\3\2\2\2-\u0111\3\2\2\2/\u0117\3\2"+
		"\2\2\61\u0121\3\2\2\2\63\u012c\3\2\2\2\65\u0132\3\2\2\2\67\u0139\3\2\2"+
		"\29\u0143\3\2\2\2;\u014b\3\2\2\2=\u0159\3\2\2\2?\u0169\3\2\2\2A\u017f"+
		"\3\2\2\2C\u0181\3\2\2\2E\u0183\3\2\2\2G\u0185\3\2\2\2I\u0187\3\2\2\2K"+
		"\u0189\3\2\2\2M\u018b\3\2\2\2O\u018d\3\2\2\2Q\u018f\3\2\2\2S\u0191\3\2"+
		"\2\2U\u0193\3\2\2\2W\u0195\3\2\2\2Y\u0197\3\2\2\2[\u0199\3\2\2\2]\u019b"+
		"\3\2\2\2_\u019d\3\2\2\2a\u019f\3\2\2\2c\u01a1\3\2\2\2e\u01a3\3\2\2\2g"+
		"\u01a5\3\2\2\2i\u01ac\3\2\2\2k\u01b6\3\2\2\2m\u01c5\3\2\2\2o\u01c9\3\2"+
		"\2\2q\u01d2\3\2\2\2s\u01db\3\2\2\2u\u01eb\3\2\2\2w\u01f2\3\2\2\2y\u01fa"+
		"\3\2\2\2{\u0200\3\2\2\2}\u0207\3\2\2\2\177\u0210\3\2\2\2\u0081\u021d\3"+
		"\2\2\2\u0083\u0223\3\2\2\2\u0085\u0086\t\2\2\2\u0086\6\3\2\2\2\u0087\u0089"+
		"\7\17\2\2\u0088\u0087\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008a\3\2\2\2"+
		"\u008a\u008b\7\f\2\2\u008b\b\3\2\2\2\u008c\u008d\7e\2\2\u008d\u008e\7"+
		"n\2\2\u008e\u008f\7c\2\2\u008f\u0090\7u\2\2\u0090\u0091\7u\2\2\u0091\n"+
		"\3\2\2\2\u0092\u0093\7e\2\2\u0093\u0094\7q\2\2\u0094\u0095\7p\2\2\u0095"+
		"\u0096\7u\2\2\u0096\u0097\7v\2\2\u0097\f\3\2\2\2\u0098\u0099\7g\2\2\u0099"+
		"\u009a\7p\2\2\u009a\u009b\7w\2\2\u009b\u009c\7o\2\2\u009c\16\3\2\2\2\u009d"+
		"\u009e\7h\2\2\u009e\u009f\7c\2\2\u009f\u00a0\7n\2\2\u00a0\u00a1\7u\2\2"+
		"\u00a1\u00a2\7g\2\2\u00a2\20\3\2\2\2\u00a3\u00a4\7H\2\2\u00a4\u00a5\7"+
		"Q\2\2\u00a5\u00a6\7T\2\2\u00a6\u00a7\7E\2\2\u00a7\u00a8\7G\2\2\u00a8\u00a9"+
		"\7K\2\2\u00a9\u00aa\7P\2\2\u00aa\u00ab\7N\2\2\u00ab\u00ac\7K\2\2\u00ac"+
		"\u00ad\7P\2\2\u00ad\u00ae\7G\2\2\u00ae\22\3\2\2\2\u00af\u00b0\7h\2\2\u00b0"+
		"\u00b1\7t\2\2\u00b1\u00b2\7k\2\2\u00b2\u00b3\7g\2\2\u00b3\u00b4\7p\2\2"+
		"\u00b4\u00b5\7f\2\2\u00b5\24\3\2\2\2\u00b6\u00b7\7k\2\2\u00b7\u00b8\7"+
		"p\2\2\u00b8\u00b9\7n\2\2\u00b9\u00ba\7k\2\2\u00ba\u00bb\7p\2\2\u00bb\u00bc"+
		"\7g\2\2\u00bc\26\3\2\2\2\u00bd\u00be\7o\2\2\u00be\u00bf\7w\2\2\u00bf\u00c0"+
		"\7v\2\2\u00c0\u00c1\7c\2\2\u00c1\u00c2\7d\2\2\u00c2\u00c3\7n\2\2\u00c3"+
		"\u00c4\7g\2\2\u00c4\30\3\2\2\2\u00c5\u00c6\7q\2\2\u00c6\u00c7\7x\2\2\u00c7"+
		"\u00c8\7g\2\2\u00c8\u00c9\7t\2\2\u00c9\u00ca\7t\2\2\u00ca\u00cb\7k\2\2"+
		"\u00cb\u00cc\7f\2\2\u00cc\u00cd\7g\2\2\u00cd\32\3\2\2\2\u00ce\u00cf\7"+
		"r\2\2\u00cf\u00d0\7t\2\2\u00d0\u00d1\7k\2\2\u00d1\u00d2\7x\2\2\u00d2\u00d3"+
		"\7c\2\2\u00d3\u00d4\7v\2\2\u00d4\u00d5\7g\2\2\u00d5\34\3\2\2\2\u00d6\u00d7"+
		"\7r\2\2\u00d7\u00d8\7t\2\2\u00d8\u00d9\7q\2\2\u00d9\u00da\7v\2\2\u00da"+
		"\u00db\7g\2\2\u00db\u00dc\7e\2\2\u00dc\u00dd\7v\2\2\u00dd\u00de\7g\2\2"+
		"\u00de\u00df\7f\2\2\u00df\36\3\2\2\2\u00e0\u00e1\7r\2\2\u00e1\u00e2\7"+
		"w\2\2\u00e2\u00e3\7d\2\2\u00e3\u00e4\7n\2\2\u00e4\u00e5\7k\2\2\u00e5\u00e6"+
		"\7e\2\2\u00e6 \3\2\2\2\u00e7\u00e8\7u\2\2\u00e8\u00e9\7v\2\2\u00e9\u00ea"+
		"\7c\2\2\u00ea\u00eb\7v\2\2\u00eb\u00ec\7k\2\2\u00ec\u00ed\7e\2\2\u00ed"+
		"\"\3\2\2\2\u00ee\u00ef\7u\2\2\u00ef\u00f0\7v\2\2\u00f0\u00f1\7t\2\2\u00f1"+
		"\u00f2\7w\2\2\u00f2\u00f3\7e\2\2\u00f3\u00f4\7v\2\2\u00f4$\3\2\2\2\u00f5"+
		"\u00f6\7v\2\2\u00f6\u00f7\7t\2\2\u00f7\u00f8\7w\2\2\u00f8\u00f9\7g\2\2"+
		"\u00f9&\3\2\2\2\u00fa\u00fb\7v\2\2\u00fb\u00fc\7{\2\2\u00fc\u00fd\7r\2"+
		"\2\u00fd\u00fe\7g\2\2\u00fe\u00ff\7f\2\2\u00ff\u0100\7g\2\2\u0100\u0101"+
		"\7h\2\2\u0101(\3\2\2\2\u0102\u0103\7x\2\2\u0103\u0104\7k\2\2\u0104\u0105"+
		"\7t\2\2\u0105\u0106\7v\2\2\u0106\u0107\7w\2\2\u0107\u0108\7c\2\2\u0108"+
		"\u0109\7n\2\2\u0109*\3\2\2\2\u010a\u010b\7W\2\2\u010b\u010c\7E\2\2\u010c"+
		"\u010d\7N\2\2\u010d\u010e\7C\2\2\u010e\u010f\7U\2\2\u010f\u0110\7U\2\2"+
		"\u0110,\3\2\2\2\u0111\u0112\7W\2\2\u0112\u0113\7G\2\2\u0113\u0114\7P\2"+
		"\2\u0114\u0115\7W\2\2\u0115\u0116\7O\2\2\u0116.\3\2\2\2\u0117\u0118\7"+
		"W\2\2\u0118\u0119\7H\2\2\u0119\u011a\7W\2\2\u011a\u011b\7P\2\2\u011b\u011c"+
		"\7E\2\2\u011c\u011d\7V\2\2\u011d\u011e\7K\2\2\u011e\u011f\7Q\2\2\u011f"+
		"\u0120\7P\2\2\u0120\60\3\2\2\2\u0121\u0122\7W\2\2\u0122\u0123\7K\2\2\u0123"+
		"\u0124\7P\2\2\u0124\u0125\7V\2\2\u0125\u0126\7G\2\2\u0126\u0127\7T\2\2"+
		"\u0127\u0128\7H\2\2\u0128\u0129\7C\2\2\u0129\u012a\7E\2\2\u012a\u012b"+
		"\7G\2\2\u012b\62\3\2\2\2\u012c\u012d\7W\2\2\u012d\u012e\7O\2\2\u012e\u012f"+
		"\7G\2\2\u012f\u0130\7V\2\2\u0130\u0131\7C\2\2\u0131\64\3\2\2\2\u0132\u0133"+
		"\7W\2\2\u0133\u0134\7R\2\2\u0134\u0135\7C\2\2\u0135\u0136\7T\2\2\u0136"+
		"\u0137\7C\2\2\u0137\u0138\7O\2\2\u0138\66\3\2\2\2\u0139\u013a\7W\2\2\u013a"+
		"\u013b\7R\2\2\u013b\u013c\7T\2\2\u013c\u013d\7Q\2\2\u013d\u013e\7R\2\2"+
		"\u013e\u013f\7G\2\2\u013f\u0140\7T\2\2\u0140\u0141\7V\2\2\u0141\u0142"+
		"\7[\2\2\u01428\3\2\2\2\u0143\u0144\7W\2\2\u0144\u0145\7U\2\2\u0145\u0146"+
		"\7V\2\2\u0146\u0147\7T\2\2\u0147\u0148\7W\2\2\u0148\u0149\7E\2\2\u0149"+
		"\u014a\7V\2\2\u014a:\3\2\2\2\u014b\u014c\7W\2\2\u014c\u014d\7G\2\2\u014d"+
		"\u014e\7a\2\2\u014e\u014f\7F\2\2\u014f\u0150\7G\2\2\u0150\u0151\7R\2\2"+
		"\u0151\u0152\7T\2\2\u0152\u0153\7G\2\2\u0153\u0154\7E\2\2\u0154\u0155"+
		"\7C\2\2\u0155\u0156\7V\2\2\u0156\u0157\7G\2\2\u0157\u0158\7F\2\2\u0158"+
		"<\3\2\2\2\u0159\u015a\7H\2\2\u015a\u015b\7C\2\2\u015b\u015c\7E\2\2\u015c"+
		"\u015d\7V\2\2\u015d\u015e\7Q\2\2\u015e\u015f\7T\2\2\u015f\u0160\7[\2\2"+
		"\u0160\u0161\7I\2\2\u0161\u0162\7C\2\2\u0162\u0163\7O\2\2\u0163\u0164"+
		"\7G\2\2\u0164\u0165\7a\2\2\u0165\u0166\7C\2\2\u0166\u0167\7R\2\2\u0167"+
		"\u0168\7K\2\2\u0168>\3\2\2\2\u0169\u016a\7I\2\2\u016a\u016b\7G\2\2\u016b"+
		"\u016c\7P\2\2\u016c\u016d\7G\2\2\u016d\u016e\7T\2\2\u016e\u016f\7C\2\2"+
		"\u016f\u0170\7V\2\2\u0170\u0171\7G\2\2\u0171\u0172\7F\2\2\u0172\u0173"+
		"\7a\2\2\u0173\u0177\3\2\2\2\u0174\u0176\t\3\2\2\u0175\u0174\3\2\2\2\u0176"+
		"\u0179\3\2\2\2\u0177\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178\u017a\3\2"+
		"\2\2\u0179\u0177\3\2\2\2\u017a\u017b\7D\2\2\u017b\u017c\7Q\2\2\u017c\u017d"+
		"\7F\2\2\u017d\u017e\7[\2\2\u017e@\3\2\2\2\u017f\u0180\7(\2\2\u0180B\3"+
		"\2\2\2\u0181\u0182\7\61\2\2\u0182D\3\2\2\2\u0183\u0184\7#\2\2\u0184F\3"+
		"\2\2\2\u0185\u0186\7@\2\2\u0186H\3\2\2\2\u0187\u0188\7\177\2\2\u0188J"+
		"\3\2\2\2\u0189\u018a\7+\2\2\u018aL\3\2\2\2\u018b\u018c\7<\2\2\u018cN\3"+
		"\2\2\2\u018d\u018e\7.\2\2\u018eP\3\2\2\2\u018f\u0190\7?\2\2\u0190R\3\2"+
		"\2\2\u0191\u0192\7/\2\2\u0192T\3\2\2\2\u0193\u0194\7>\2\2\u0194V\3\2\2"+
		"\2\u0195\u0196\7}\2\2\u0196X\3\2\2\2\u0197\u0198\7*\2\2\u0198Z\3\2\2\2"+
		"\u0199\u019a\7\60\2\2\u019a\\\3\2\2\2\u019b\u019c\7~\2\2\u019c^\3\2\2"+
		"\2\u019d\u019e\7-\2\2\u019e`\3\2\2\2\u019f\u01a0\7A\2\2\u01a0b\3\2\2\2"+
		"\u01a1\u01a2\7=\2\2\u01a2d\3\2\2\2\u01a3\u01a4\7,\2\2\u01a4f\3\2\2\2\u01a5"+
		"\u01a9\t\4\2\2\u01a6\u01a8\t\5\2\2\u01a7\u01a6\3\2\2\2\u01a8\u01ab\3\2"+
		"\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aah\3\2\2\2\u01ab\u01a9"+
		"\3\2\2\2\u01ac\u01b0\7$\2\2\u01ad\u01af\13\2\2\2\u01ae\u01ad\3\2\2\2\u01af"+
		"\u01b2\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b1\u01b3\3\2"+
		"\2\2\u01b2\u01b0\3\2\2\2\u01b3\u01b4\7$\2\2\u01b4j\3\2\2\2\u01b5\u01b7"+
		"\t\6\2\2\u01b6\u01b5\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8"+
		"\u01b9\3\2\2\2\u01b9\u01ba\3\2\2\2\u01ba\u01be\7\60\2\2\u01bb\u01bd\t"+
		"\6\2\2\u01bc\u01bb\3\2\2\2\u01bd\u01c0\3\2\2\2\u01be\u01bc\3\2\2\2\u01be"+
		"\u01bf\3\2\2\2\u01bf\u01c2\3\2\2\2\u01c0\u01be\3\2\2\2\u01c1\u01c3\7h"+
		"\2\2\u01c2\u01c1\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3l\3\2\2\2\u01c4\u01c6"+
		"\t\6\2\2\u01c5\u01c4\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7\u01c5\3\2\2\2\u01c7"+
		"\u01c8\3\2\2\2\u01c8n\3\2\2\2\u01c9\u01cd\7%\2\2\u01ca\u01cc\n\7\2\2\u01cb"+
		"\u01ca\3\2\2\2\u01cc\u01cf\3\2\2\2\u01cd\u01cb\3\2\2\2\u01cd\u01ce\3\2"+
		"\2\2\u01ce\u01d0\3\2\2\2\u01cf\u01cd\3\2\2\2\u01d0\u01d1\b\67\2\2\u01d1"+
		"p\3\2\2\2\u01d2\u01d3\7\61\2\2\u01d3\u01d4\7\61\2\2\u01d4\u01d6\3\2\2"+
		"\2\u01d5\u01d7\5\5\2\2\u01d6\u01d5\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8"+
		"\3\2\2\2\u01d8\u01d9\b8\2\2\u01d9\u01da\b8\3\2\u01dar\3\2\2\2\u01db\u01dc"+
		"\7\61\2\2\u01dc\u01dd\7,\2\2\u01dd\u01e1\3\2\2\2\u01de\u01e0\7,\2\2\u01df"+
		"\u01de\3\2\2\2\u01e0\u01e3\3\2\2\2\u01e1\u01df\3\2\2\2\u01e1\u01e2\3\2"+
		"\2\2\u01e2\u01e5\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e4\u01e6\5\5\2\2\u01e5"+
		"\u01e4\3\2\2\2\u01e5\u01e6\3\2\2\2\u01e6\u01e7\3\2\2\2\u01e7\u01e8\b9"+
		"\2\2\u01e8\u01e9\b9\4\2\u01e9t\3\2\2\2\u01ea\u01ec\t\b\2\2\u01eb\u01ea"+
		"\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01eb\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee"+
		"\u01ef\3\2\2\2\u01ef\u01f0\b:\2\2\u01f0v\3\2\2\2\u01f1\u01f3\5\5\2\2\u01f2"+
		"\u01f1\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f5\5\7"+
		"\3\2\u01f5\u01f6\3\2\2\2\u01f6\u01f7\b;\2\2\u01f7\u01f8\b;\5\2\u01f8x"+
		"\3\2\2\2\u01f9\u01fb\n\7\2\2\u01fa\u01f9\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc"+
		"\u01fa\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe\u01ff\b<"+
		"\6\2\u01ffz\3\2\2\2\u0200\u0201\13\2\2\2\u0201\u0202\3\2\2\2\u0202\u0203"+
		"\b=\2\2\u0203|\3\2\2\2\u0204\u0206\5\5\2\2\u0205\u0204\3\2\2\2\u0206\u0209"+
		"\3\2\2\2\u0207\u0205\3\2\2\2\u0207\u0208\3\2\2\2\u0208\u020a\3\2\2\2\u0209"+
		"\u0207\3\2\2\2\u020a\u020b\7,\2\2\u020b\u020c\7\61\2\2\u020c\u020d\3\2"+
		"\2\2\u020d\u020e\b>\2\2\u020e\u020f\b>\5\2\u020f~\3\2\2\2\u0210\u0214"+
		"\5\7\3\2\u0211\u0213\5\5\2\2\u0212\u0211\3\2\2\2\u0213\u0216\3\2\2\2\u0214"+
		"\u0212\3\2\2\2\u0214\u0215\3\2\2\2\u0215\u0217\3\2\2\2\u0216\u0214\3\2"+
		"\2\2\u0217\u0218\7,\2\2\u0218\u0219\n\t\2\2\u0219\u021a\3\2\2\2\u021a"+
		"\u021b\b?\2\2\u021b\u0080\3\2\2\2\u021c\u021e\n\n\2\2\u021d\u021c\3\2"+
		"\2\2\u021e\u021f\3\2\2\2\u021f\u021d\3\2\2\2\u021f\u0220\3\2\2\2\u0220"+
		"\u0221\3\2\2\2\u0221\u0222\b@\6\2\u0222\u0082\3\2\2\2\u0223\u0224\13\2"+
		"\2\2\u0224\u0225\3\2\2\2\u0225\u0226\bA\2\2\u0226\u0084\3\2\2\2\27\2\3"+
		"\4\u0088\u0177\u01a9\u01b0\u01b8\u01be\u01c2\u01c7\u01cd\u01d6\u01e1\u01e5"+
		"\u01ed\u01f2\u01fc\u0207\u0214\u021f\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}