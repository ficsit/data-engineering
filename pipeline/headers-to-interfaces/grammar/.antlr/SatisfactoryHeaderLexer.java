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
		MUTABLE=8, OPERATOR=9, OVERRIDE=10, PRIVATE=11, PROTECTED=12, PUBLIC=13, 
		STATIC=14, STRUCT=15, TEMPLATE=16, TRUE=17, TYPEDEF=18, VIRTUAL=19, UCLASS=20, 
		UENUM=21, UFUNCTION=22, UINTERFACE=23, UMETA=24, UPARAM=25, UPROPERTY=26, 
		USTRUCT=27, UE_DEPRECATED=28, STAT=29, SF_CLASS_TAG=30, SF_GENERATED_BODY=31, 
		AMPERSAND=32, BACKSLASH=33, BANG=34, CLOSE_ANGLE=35, CLOSE_BRACE=36, CLOSE_PAREN=37, 
		CLOSE_SQUARE=38, COLON=39, COMMA=40, EQUALS=41, MINUS=42, OPEN_ANGLE=43, 
		OPEN_BRACE=44, OPEN_PAREN=45, OPEN_SQUARE=46, PERIOD=47, PIPE=48, PLUS=49, 
		QUESTION=50, SEMICOLON=51, STAR=52, IDENTIFIER=53, STRING_LITERAL=54, 
		FLOAT_LITERAL=55, INTEGER_LITERAL=56, PREPROCESSOR=57, LINE_COMMENT_START=58, 
		BLOCK_COMMENT_START=59, WHITESPACE=60, LINE_COMMENT_END=61, LINE_COMMENT_TEXT=62, 
		LINE_COMMENT_OTHER=63, BLOCK_COMMENT_END=64, BLOCK_COMMENT_NEW_LINE=65, 
		BLOCK_COMMENT_TEXT=66, BLOCK_COMMENT_OTHER=67;
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
		"FRIEND", "INLINE", "MUTABLE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "VIRTUAL", 
		"UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", 
		"USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", 
		"CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", 
		"OPEN_PAREN", "OPEN_SQUARE", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", 
		"STAR", "IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"PREPROCESSOR", "LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", 
		"LINE_COMMENT_END", "LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", 
		"BLOCK_COMMENT_NEW_LINE", "BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'enum'", "'false'", "'FORCEINLINE'", "'friend'", 
		"'inline'", "'mutable'", "'operator'", "'override'", "'private'", "'protected'", 
		"'public'", "'static'", "'struct'", "'template'", "'true'", "'typedef'", 
		"'virtual'", "'UCLASS'", "'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", 
		"'UPARAM'", "'UPROPERTY'", "'USTRUCT'", "'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", 
		null, "'&'", "'/'", "'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", 
		"'-'", "'<'", "'{'", "'('", "'['", "'.'", "'|'", "'+'", "'?'", "';'", 
		"'*'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", "INLINE", 
		"MUTABLE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", "PUBLIC", "STATIC", 
		"STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "VIRTUAL", "UCLASS", "UENUM", 
		"UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", "UPROPERTY", "USTRUCT", 
		"UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", "AMPERSAND", 
		"BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", 
		"COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", 
		"OPEN_SQUARE", "PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "STAR", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2E\u024c\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t"+
		"<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\3\2\3\2"+
		"\3\3\5\3\u0093\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21"+
		"\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3!\3!\3"+
		"!\3!\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\7"+
		"\"\u0197\n\"\f\"\16\"\u019a\13\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3$\3$\3%\3"+
		"%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3"+
		"\60\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65\3\66\3\66\3\67\3"+
		"\67\38\38\78\u01cd\n8\f8\168\u01d0\138\39\39\79\u01d4\n9\f9\169\u01d7"+
		"\139\39\39\3:\6:\u01dc\n:\r:\16:\u01dd\3:\3:\7:\u01e2\n:\f:\16:\u01e5"+
		"\13:\3:\5:\u01e8\n:\3;\6;\u01eb\n;\r;\16;\u01ec\3<\3<\7<\u01f1\n<\f<\16"+
		"<\u01f4\13<\3<\3<\3=\3=\3=\3=\5=\u01fc\n=\3=\3=\3=\3>\3>\3>\3>\7>\u0205"+
		"\n>\f>\16>\u0208\13>\3>\5>\u020b\n>\3>\3>\3>\3?\6?\u0211\n?\r?\16?\u0212"+
		"\3?\3?\3@\5@\u0218\n@\3@\3@\3@\3@\3@\3A\6A\u0220\nA\rA\16A\u0221\3A\3"+
		"A\3B\3B\3B\3B\3C\7C\u022b\nC\fC\16C\u022e\13C\3C\3C\3C\3C\3C\3C\3D\3D"+
		"\7D\u0238\nD\fD\16D\u023b\13D\3D\3D\3D\3D\3D\3E\6E\u0243\nE\rE\16E\u0244"+
		"\3E\3E\3F\3F\3F\3F\3\u01d5\2G\5\2\7\2\t\3\13\4\r\5\17\6\21\7\23\b\25\t"+
		"\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24-\25/\26\61\27\63"+
		"\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/"+
		"c\60e\61g\62i\63k\64m\65o\66q\67s8u9w:y;{<}=\177>\u0081?\u0083@\u0085"+
		"A\u0087B\u0089C\u008bD\u008dE\5\2\3\4\13\4\2\13\13\"\"\4\2C\\aa\4\2C\\"+
		"c|\6\2\62;C\\aac|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5"+
		"\2\f\f\17\17,,\2\u0259\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2"+
		"\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2"+
		"\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2"+
		"\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2"+
		"\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2"+
		"K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3"+
		"\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2"+
		"\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2"+
		"q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3"+
		"\2\2\2\2\177\3\2\2\2\3\u0081\3\2\2\2\3\u0083\3\2\2\2\3\u0085\3\2\2\2\4"+
		"\u0087\3\2\2\2\4\u0089\3\2\2\2\4\u008b\3\2\2\2\4\u008d\3\2\2\2\5\u008f"+
		"\3\2\2\2\7\u0092\3\2\2\2\t\u0096\3\2\2\2\13\u009c\3\2\2\2\r\u00a2\3\2"+
		"\2\2\17\u00a7\3\2\2\2\21\u00ad\3\2\2\2\23\u00b9\3\2\2\2\25\u00c0\3\2\2"+
		"\2\27\u00c7\3\2\2\2\31\u00cf\3\2\2\2\33\u00d8\3\2\2\2\35\u00e1\3\2\2\2"+
		"\37\u00e9\3\2\2\2!\u00f3\3\2\2\2#\u00fa\3\2\2\2%\u0101\3\2\2\2\'\u0108"+
		"\3\2\2\2)\u0111\3\2\2\2+\u0116\3\2\2\2-\u011e\3\2\2\2/\u0126\3\2\2\2\61"+
		"\u012d\3\2\2\2\63\u0133\3\2\2\2\65\u013d\3\2\2\2\67\u0148\3\2\2\29\u014e"+
		"\3\2\2\2;\u0155\3\2\2\2=\u015f\3\2\2\2?\u0167\3\2\2\2A\u0175\3\2\2\2C"+
		"\u017a\3\2\2\2E\u018a\3\2\2\2G\u01a0\3\2\2\2I\u01a2\3\2\2\2K\u01a4\3\2"+
		"\2\2M\u01a6\3\2\2\2O\u01a8\3\2\2\2Q\u01aa\3\2\2\2S\u01ac\3\2\2\2U\u01ae"+
		"\3\2\2\2W\u01b0\3\2\2\2Y\u01b2\3\2\2\2[\u01b4\3\2\2\2]\u01b6\3\2\2\2_"+
		"\u01b8\3\2\2\2a\u01ba\3\2\2\2c\u01bc\3\2\2\2e\u01be\3\2\2\2g\u01c0\3\2"+
		"\2\2i\u01c2\3\2\2\2k\u01c4\3\2\2\2m\u01c6\3\2\2\2o\u01c8\3\2\2\2q\u01ca"+
		"\3\2\2\2s\u01d1\3\2\2\2u\u01db\3\2\2\2w\u01ea\3\2\2\2y\u01ee\3\2\2\2{"+
		"\u01f7\3\2\2\2}\u0200\3\2\2\2\177\u0210\3\2\2\2\u0081\u0217\3\2\2\2\u0083"+
		"\u021f\3\2\2\2\u0085\u0225\3\2\2\2\u0087\u022c\3\2\2\2\u0089\u0235\3\2"+
		"\2\2\u008b\u0242\3\2\2\2\u008d\u0248\3\2\2\2\u008f\u0090\t\2\2\2\u0090"+
		"\6\3\2\2\2\u0091\u0093\7\17\2\2\u0092\u0091\3\2\2\2\u0092\u0093\3\2\2"+
		"\2\u0093\u0094\3\2\2\2\u0094\u0095\7\f\2\2\u0095\b\3\2\2\2\u0096\u0097"+
		"\7e\2\2\u0097\u0098\7n\2\2\u0098\u0099\7c\2\2\u0099\u009a\7u\2\2\u009a"+
		"\u009b\7u\2\2\u009b\n\3\2\2\2\u009c\u009d\7e\2\2\u009d\u009e\7q\2\2\u009e"+
		"\u009f\7p\2\2\u009f\u00a0\7u\2\2\u00a0\u00a1\7v\2\2\u00a1\f\3\2\2\2\u00a2"+
		"\u00a3\7g\2\2\u00a3\u00a4\7p\2\2\u00a4\u00a5\7w\2\2\u00a5\u00a6\7o\2\2"+
		"\u00a6\16\3\2\2\2\u00a7\u00a8\7h\2\2\u00a8\u00a9\7c\2\2\u00a9\u00aa\7"+
		"n\2\2\u00aa\u00ab\7u\2\2\u00ab\u00ac\7g\2\2\u00ac\20\3\2\2\2\u00ad\u00ae"+
		"\7H\2\2\u00ae\u00af\7Q\2\2\u00af\u00b0\7T\2\2\u00b0\u00b1\7E\2\2\u00b1"+
		"\u00b2\7G\2\2\u00b2\u00b3\7K\2\2\u00b3\u00b4\7P\2\2\u00b4\u00b5\7N\2\2"+
		"\u00b5\u00b6\7K\2\2\u00b6\u00b7\7P\2\2\u00b7\u00b8\7G\2\2\u00b8\22\3\2"+
		"\2\2\u00b9\u00ba\7h\2\2\u00ba\u00bb\7t\2\2\u00bb\u00bc\7k\2\2\u00bc\u00bd"+
		"\7g\2\2\u00bd\u00be\7p\2\2\u00be\u00bf\7f\2\2\u00bf\24\3\2\2\2\u00c0\u00c1"+
		"\7k\2\2\u00c1\u00c2\7p\2\2\u00c2\u00c3\7n\2\2\u00c3\u00c4\7k\2\2\u00c4"+
		"\u00c5\7p\2\2\u00c5\u00c6\7g\2\2\u00c6\26\3\2\2\2\u00c7\u00c8\7o\2\2\u00c8"+
		"\u00c9\7w\2\2\u00c9\u00ca\7v\2\2\u00ca\u00cb\7c\2\2\u00cb\u00cc\7d\2\2"+
		"\u00cc\u00cd\7n\2\2\u00cd\u00ce\7g\2\2\u00ce\30\3\2\2\2\u00cf\u00d0\7"+
		"q\2\2\u00d0\u00d1\7r\2\2\u00d1\u00d2\7g\2\2\u00d2\u00d3\7t\2\2\u00d3\u00d4"+
		"\7c\2\2\u00d4\u00d5\7v\2\2\u00d5\u00d6\7q\2\2\u00d6\u00d7\7t\2\2\u00d7"+
		"\32\3\2\2\2\u00d8\u00d9\7q\2\2\u00d9\u00da\7x\2\2\u00da\u00db\7g\2\2\u00db"+
		"\u00dc\7t\2\2\u00dc\u00dd\7t\2\2\u00dd\u00de\7k\2\2\u00de\u00df\7f\2\2"+
		"\u00df\u00e0\7g\2\2\u00e0\34\3\2\2\2\u00e1\u00e2\7r\2\2\u00e2\u00e3\7"+
		"t\2\2\u00e3\u00e4\7k\2\2\u00e4\u00e5\7x\2\2\u00e5\u00e6\7c\2\2\u00e6\u00e7"+
		"\7v\2\2\u00e7\u00e8\7g\2\2\u00e8\36\3\2\2\2\u00e9\u00ea\7r\2\2\u00ea\u00eb"+
		"\7t\2\2\u00eb\u00ec\7q\2\2\u00ec\u00ed\7v\2\2\u00ed\u00ee\7g\2\2\u00ee"+
		"\u00ef\7e\2\2\u00ef\u00f0\7v\2\2\u00f0\u00f1\7g\2\2\u00f1\u00f2\7f\2\2"+
		"\u00f2 \3\2\2\2\u00f3\u00f4\7r\2\2\u00f4\u00f5\7w\2\2\u00f5\u00f6\7d\2"+
		"\2\u00f6\u00f7\7n\2\2\u00f7\u00f8\7k\2\2\u00f8\u00f9\7e\2\2\u00f9\"\3"+
		"\2\2\2\u00fa\u00fb\7u\2\2\u00fb\u00fc\7v\2\2\u00fc\u00fd\7c\2\2\u00fd"+
		"\u00fe\7v\2\2\u00fe\u00ff\7k\2\2\u00ff\u0100\7e\2\2\u0100$\3\2\2\2\u0101"+
		"\u0102\7u\2\2\u0102\u0103\7v\2\2\u0103\u0104\7t\2\2\u0104\u0105\7w\2\2"+
		"\u0105\u0106\7e\2\2\u0106\u0107\7v\2\2\u0107&\3\2\2\2\u0108\u0109\7v\2"+
		"\2\u0109\u010a\7g\2\2\u010a\u010b\7o\2\2\u010b\u010c\7r\2\2\u010c\u010d"+
		"\7n\2\2\u010d\u010e\7c\2\2\u010e\u010f\7v\2\2\u010f\u0110\7g\2\2\u0110"+
		"(\3\2\2\2\u0111\u0112\7v\2\2\u0112\u0113\7t\2\2\u0113\u0114\7w\2\2\u0114"+
		"\u0115\7g\2\2\u0115*\3\2\2\2\u0116\u0117\7v\2\2\u0117\u0118\7{\2\2\u0118"+
		"\u0119\7r\2\2\u0119\u011a\7g\2\2\u011a\u011b\7f\2\2\u011b\u011c\7g\2\2"+
		"\u011c\u011d\7h\2\2\u011d,\3\2\2\2\u011e\u011f\7x\2\2\u011f\u0120\7k\2"+
		"\2\u0120\u0121\7t\2\2\u0121\u0122\7v\2\2\u0122\u0123\7w\2\2\u0123\u0124"+
		"\7c\2\2\u0124\u0125\7n\2\2\u0125.\3\2\2\2\u0126\u0127\7W\2\2\u0127\u0128"+
		"\7E\2\2\u0128\u0129\7N\2\2\u0129\u012a\7C\2\2\u012a\u012b\7U\2\2\u012b"+
		"\u012c\7U\2\2\u012c\60\3\2\2\2\u012d\u012e\7W\2\2\u012e\u012f\7G\2\2\u012f"+
		"\u0130\7P\2\2\u0130\u0131\7W\2\2\u0131\u0132\7O\2\2\u0132\62\3\2\2\2\u0133"+
		"\u0134\7W\2\2\u0134\u0135\7H\2\2\u0135\u0136\7W\2\2\u0136\u0137\7P\2\2"+
		"\u0137\u0138\7E\2\2\u0138\u0139\7V\2\2\u0139\u013a\7K\2\2\u013a\u013b"+
		"\7Q\2\2\u013b\u013c\7P\2\2\u013c\64\3\2\2\2\u013d\u013e\7W\2\2\u013e\u013f"+
		"\7K\2\2\u013f\u0140\7P\2\2\u0140\u0141\7V\2\2\u0141\u0142\7G\2\2\u0142"+
		"\u0143\7T\2\2\u0143\u0144\7H\2\2\u0144\u0145\7C\2\2\u0145\u0146\7E\2\2"+
		"\u0146\u0147\7G\2\2\u0147\66\3\2\2\2\u0148\u0149\7W\2\2\u0149\u014a\7"+
		"O\2\2\u014a\u014b\7G\2\2\u014b\u014c\7V\2\2\u014c\u014d\7C\2\2\u014d8"+
		"\3\2\2\2\u014e\u014f\7W\2\2\u014f\u0150\7R\2\2\u0150\u0151\7C\2\2\u0151"+
		"\u0152\7T\2\2\u0152\u0153\7C\2\2\u0153\u0154\7O\2\2\u0154:\3\2\2\2\u0155"+
		"\u0156\7W\2\2\u0156\u0157\7R\2\2\u0157\u0158\7T\2\2\u0158\u0159\7Q\2\2"+
		"\u0159\u015a\7R\2\2\u015a\u015b\7G\2\2\u015b\u015c\7T\2\2\u015c\u015d"+
		"\7V\2\2\u015d\u015e\7[\2\2\u015e<\3\2\2\2\u015f\u0160\7W\2\2\u0160\u0161"+
		"\7U\2\2\u0161\u0162\7V\2\2\u0162\u0163\7T\2\2\u0163\u0164\7W\2\2\u0164"+
		"\u0165\7E\2\2\u0165\u0166\7V\2\2\u0166>\3\2\2\2\u0167\u0168\7W\2\2\u0168"+
		"\u0169\7G\2\2\u0169\u016a\7a\2\2\u016a\u016b\7F\2\2\u016b\u016c\7G\2\2"+
		"\u016c\u016d\7R\2\2\u016d\u016e\7T\2\2\u016e\u016f\7G\2\2\u016f\u0170"+
		"\7E\2\2\u0170\u0171\7C\2\2\u0171\u0172\7V\2\2\u0172\u0173\7G\2\2\u0173"+
		"\u0174\7F\2\2\u0174@\3\2\2\2\u0175\u0176\7U\2\2\u0176\u0177\7V\2\2\u0177"+
		"\u0178\7C\2\2\u0178\u0179\7V\2\2\u0179B\3\2\2\2\u017a\u017b\7H\2\2\u017b"+
		"\u017c\7C\2\2\u017c\u017d\7E\2\2\u017d\u017e\7V\2\2\u017e\u017f\7Q\2\2"+
		"\u017f\u0180\7T\2\2\u0180\u0181\7[\2\2\u0181\u0182\7I\2\2\u0182\u0183"+
		"\7C\2\2\u0183\u0184\7O\2\2\u0184\u0185\7G\2\2\u0185\u0186\7a\2\2\u0186"+
		"\u0187\7C\2\2\u0187\u0188\7R\2\2\u0188\u0189\7K\2\2\u0189D\3\2\2\2\u018a"+
		"\u018b\7I\2\2\u018b\u018c\7G\2\2\u018c\u018d\7P\2\2\u018d\u018e\7G\2\2"+
		"\u018e\u018f\7T\2\2\u018f\u0190\7C\2\2\u0190\u0191\7V\2\2\u0191\u0192"+
		"\7G\2\2\u0192\u0193\7F\2\2\u0193\u0194\7a\2\2\u0194\u0198\3\2\2\2\u0195"+
		"\u0197\t\3\2\2\u0196\u0195\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196\3\2"+
		"\2\2\u0198\u0199\3\2\2\2\u0199\u019b\3\2\2\2\u019a\u0198\3\2\2\2\u019b"+
		"\u019c\7D\2\2\u019c\u019d\7Q\2\2\u019d\u019e\7F\2\2\u019e\u019f\7[\2\2"+
		"\u019fF\3\2\2\2\u01a0\u01a1\7(\2\2\u01a1H\3\2\2\2\u01a2\u01a3\7\61\2\2"+
		"\u01a3J\3\2\2\2\u01a4\u01a5\7#\2\2\u01a5L\3\2\2\2\u01a6\u01a7\7@\2\2\u01a7"+
		"N\3\2\2\2\u01a8\u01a9\7\177\2\2\u01a9P\3\2\2\2\u01aa\u01ab\7+\2\2\u01ab"+
		"R\3\2\2\2\u01ac\u01ad\7_\2\2\u01adT\3\2\2\2\u01ae\u01af\7<\2\2\u01afV"+
		"\3\2\2\2\u01b0\u01b1\7.\2\2\u01b1X\3\2\2\2\u01b2\u01b3\7?\2\2\u01b3Z\3"+
		"\2\2\2\u01b4\u01b5\7/\2\2\u01b5\\\3\2\2\2\u01b6\u01b7\7>\2\2\u01b7^\3"+
		"\2\2\2\u01b8\u01b9\7}\2\2\u01b9`\3\2\2\2\u01ba\u01bb\7*\2\2\u01bbb\3\2"+
		"\2\2\u01bc\u01bd\7]\2\2\u01bdd\3\2\2\2\u01be\u01bf\7\60\2\2\u01bff\3\2"+
		"\2\2\u01c0\u01c1\7~\2\2\u01c1h\3\2\2\2\u01c2\u01c3\7-\2\2\u01c3j\3\2\2"+
		"\2\u01c4\u01c5\7A\2\2\u01c5l\3\2\2\2\u01c6\u01c7\7=\2\2\u01c7n\3\2\2\2"+
		"\u01c8\u01c9\7,\2\2\u01c9p\3\2\2\2\u01ca\u01ce\t\4\2\2\u01cb\u01cd\t\5"+
		"\2\2\u01cc\u01cb\3\2\2\2\u01cd\u01d0\3\2\2\2\u01ce\u01cc\3\2\2\2\u01ce"+
		"\u01cf\3\2\2\2\u01cfr\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d1\u01d5\7$\2\2\u01d2"+
		"\u01d4\13\2\2\2\u01d3\u01d2\3\2\2\2\u01d4\u01d7\3\2\2\2\u01d5\u01d6\3"+
		"\2\2\2\u01d5\u01d3\3\2\2\2\u01d6\u01d8\3\2\2\2\u01d7\u01d5\3\2\2\2\u01d8"+
		"\u01d9\7$\2\2\u01d9t\3\2\2\2\u01da\u01dc\t\6\2\2\u01db\u01da\3\2\2\2\u01dc"+
		"\u01dd\3\2\2\2\u01dd\u01db\3\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01df\3\2"+
		"\2\2\u01df\u01e3\7\60\2\2\u01e0\u01e2\t\6\2\2\u01e1\u01e0\3\2\2\2\u01e2"+
		"\u01e5\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e7\3\2"+
		"\2\2\u01e5\u01e3\3\2\2\2\u01e6\u01e8\7h\2\2\u01e7\u01e6\3\2\2\2\u01e7"+
		"\u01e8\3\2\2\2\u01e8v\3\2\2\2\u01e9\u01eb\t\6\2\2\u01ea\u01e9\3\2\2\2"+
		"\u01eb\u01ec\3\2\2\2\u01ec\u01ea\3\2\2\2\u01ec\u01ed\3\2\2\2\u01edx\3"+
		"\2\2\2\u01ee\u01f2\7%\2\2\u01ef\u01f1\n\7\2\2\u01f0\u01ef\3\2\2\2\u01f1"+
		"\u01f4\3\2\2\2\u01f2\u01f0\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3\u01f5\3\2"+
		"\2\2\u01f4\u01f2\3\2\2\2\u01f5\u01f6\b<\2\2\u01f6z\3\2\2\2\u01f7\u01f8"+
		"\7\61\2\2\u01f8\u01f9\7\61\2\2\u01f9\u01fb\3\2\2\2\u01fa\u01fc\5\5\2\2"+
		"\u01fb\u01fa\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd\u01fe"+
		"\b=\2\2\u01fe\u01ff\b=\3\2\u01ff|\3\2\2\2\u0200\u0201\7\61\2\2\u0201\u0202"+
		"\7,\2\2\u0202\u0206\3\2\2\2\u0203\u0205\7,\2\2\u0204\u0203\3\2\2\2\u0205"+
		"\u0208\3\2\2\2\u0206\u0204\3\2\2\2\u0206\u0207\3\2\2\2\u0207\u020a\3\2"+
		"\2\2\u0208\u0206\3\2\2\2\u0209\u020b\5\5\2\2\u020a\u0209\3\2\2\2\u020a"+
		"\u020b\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020d\b>\2\2\u020d\u020e\b>\4"+
		"\2\u020e~\3\2\2\2\u020f\u0211\t\b\2\2\u0210\u020f\3\2\2\2\u0211\u0212"+
		"\3\2\2\2\u0212\u0210\3\2\2\2\u0212\u0213\3\2\2\2\u0213\u0214\3\2\2\2\u0214"+
		"\u0215\b?\2\2\u0215\u0080\3\2\2\2\u0216\u0218\5\5\2\2\u0217\u0216\3\2"+
		"\2\2\u0217\u0218\3\2\2\2\u0218\u0219\3\2\2\2\u0219\u021a\5\7\3\2\u021a"+
		"\u021b\3\2\2\2\u021b\u021c\b@\2\2\u021c\u021d\b@\5\2\u021d\u0082\3\2\2"+
		"\2\u021e\u0220\n\7\2\2\u021f\u021e\3\2\2\2\u0220\u0221\3\2\2\2\u0221\u021f"+
		"\3\2\2\2\u0221\u0222\3\2\2\2\u0222\u0223\3\2\2\2\u0223\u0224\bA\6\2\u0224"+
		"\u0084\3\2\2\2\u0225\u0226\13\2\2\2\u0226\u0227\3\2\2\2\u0227\u0228\b"+
		"B\2\2\u0228\u0086\3\2\2\2\u0229\u022b\5\5\2\2\u022a\u0229\3\2\2\2\u022b"+
		"\u022e\3\2\2\2\u022c\u022a\3\2\2\2\u022c\u022d\3\2\2\2\u022d\u022f\3\2"+
		"\2\2\u022e\u022c\3\2\2\2\u022f\u0230\7,\2\2\u0230\u0231\7\61\2\2\u0231"+
		"\u0232\3\2\2\2\u0232\u0233\bC\2\2\u0233\u0234\bC\5\2\u0234\u0088\3\2\2"+
		"\2\u0235\u0239\5\7\3\2\u0236\u0238\5\5\2\2\u0237\u0236\3\2\2\2\u0238\u023b"+
		"\3\2\2\2\u0239\u0237\3\2\2\2\u0239\u023a\3\2\2\2\u023a\u023c\3\2\2\2\u023b"+
		"\u0239\3\2\2\2\u023c\u023d\7,\2\2\u023d\u023e\n\t\2\2\u023e\u023f\3\2"+
		"\2\2\u023f\u0240\bD\2\2\u0240\u008a\3\2\2\2\u0241\u0243\n\n\2\2\u0242"+
		"\u0241\3\2\2\2\u0243\u0244\3\2\2\2\u0244\u0242\3\2\2\2\u0244\u0245\3\2"+
		"\2\2\u0245\u0246\3\2\2\2\u0246\u0247\bE\6\2\u0247\u008c\3\2\2\2\u0248"+
		"\u0249\13\2\2\2\u0249\u024a\3\2\2\2\u024a\u024b\bF\2\2\u024b\u008e\3\2"+
		"\2\2\27\2\3\4\u0092\u0198\u01ce\u01d5\u01dd\u01e3\u01e7\u01ec\u01f2\u01fb"+
		"\u0206\u020a\u0212\u0217\u0221\u022c\u0239\u0244\7\b\2\2\7\3\2\7\4\2\6"+
		"\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}