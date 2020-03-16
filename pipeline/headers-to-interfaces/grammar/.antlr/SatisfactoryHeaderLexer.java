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
		CLASS=1, CONST=2, CONSTEXPR=3, ENUM=4, FALSE=5, FORCEINLINE=6, FRIEND=7, 
		INLINE=8, MUTABLE=9, NAMESPACE=10, OPERATOR=11, OVERRIDE=12, PRIVATE=13, 
		PROTECTED=14, PUBLIC=15, STATIC=16, STRUCT=17, TEMPLATE=18, TRUE=19, TYPEDEF=20, 
		TYPENAME=21, VIRTUAL=22, UCLASS=23, UENUM=24, UFUNCTION=25, UINTERFACE=26, 
		UMETA=27, UPARAM=28, UPROPERTY=29, USTRUCT=30, UE_DEPRECATED=31, STAT=32, 
		SF_CLASS_TAG=33, SF_GENERATED_BODY=34, AMPERSAND=35, BACKSLASH=36, BANG=37, 
		CLOSE_ANGLE=38, CLOSE_BRACE=39, CLOSE_PAREN=40, CLOSE_SQUARE=41, COLON=42, 
		COMMA=43, EQUALS=44, MINUS=45, OPEN_ANGLE=46, OPEN_BRACE=47, OPEN_PAREN=48, 
		OPEN_SQUARE=49, PERCENT=50, PERIOD=51, PIPE=52, PLUS=53, QUESTION=54, 
		SEMICOLON=55, SLASH=56, STAR=57, TILDE=58, IDENTIFIER=59, STRING_LITERAL=60, 
		FLOAT_LITERAL=61, INTEGER_LITERAL=62, PREPROCESSOR=63, LINE_COMMENT_START=64, 
		BLOCK_COMMENT_START=65, WHITESPACE=66, LINE_COMMENT_END=67, LINE_COMMENT_TEXT=68, 
		LINE_COMMENT_OTHER=69, BLOCK_COMMENT_END=70, BLOCK_COMMENT_NEW_LINE=71, 
		BLOCK_COMMENT_TEXT=72, BLOCK_COMMENT_OTHER=73;
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
		"Space", "Newline", "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", 
		"FRIEND", "INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", 
		"TYPENAME", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", 
		"UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "OPEN_SQUARE", "PERCENT", 
		"PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "SLASH", "STAR", "TILDE", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'constexpr'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'namespace'", "'operator'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'template'", 
		"'true'", "'typedef'", "'typename'", "'virtual'", "'UCLASS'", "'UENUM'", 
		"'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", "'USTRUCT'", 
		"'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", null, "'&'", "'/'", 
		"'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", "'-'", "'<'", 
		"'{'", "'('", "'['", "'%'", "'.'", "'|'", "'+'", "'?'", "';'", "'\\'", 
		"'*'", "'~'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", 
		"INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "TYPENAME", 
		"VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", "UPARAM", 
		"UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", "SF_GENERATED_BODY", 
		"AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", "CLOSE_BRACE", "CLOSE_PAREN", 
		"CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", "MINUS", "OPEN_ANGLE", "OPEN_BRACE", 
		"OPEN_PAREN", "OPEN_SQUARE", "PERCENT", "PERIOD", "PIPE", "PLUS", "QUESTION", 
		"SEMICOLON", "SLASH", "STAR", "TILDE", "IDENTIFIER", "STRING_LITERAL", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2K\u0281\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t"+
		"*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63"+
		"\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t"+
		"<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4"+
		"H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\3\2\3\2\3\3\5\3\u009f\n\3\3\3\3\3\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20\3\20\3"+
		"\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3"+
		"\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3"+
		"\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3"+
		"\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31\3"+
		"\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3"+
		"\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3"+
		"\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3"+
		" \3 \3!\3!\3!\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3"+
		"\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3$\3"+
		"$\3$\3$\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\7%\u01c0\n%\f%\16%\u01c3\13"+
		"%\3%\3%\3%\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3."+
		"\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65"+
		"\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3>\3>\7>\u01fc"+
		"\n>\f>\16>\u01ff\13>\3?\3?\7?\u0203\n?\f?\16?\u0206\13?\3?\3?\3@\5@\u020b"+
		"\n@\3@\6@\u020e\n@\r@\16@\u020f\3@\3@\7@\u0214\n@\f@\16@\u0217\13@\3@"+
		"\5@\u021a\n@\3A\5A\u021d\nA\3A\6A\u0220\nA\rA\16A\u0221\3B\3B\7B\u0226"+
		"\nB\fB\16B\u0229\13B\3B\3B\3C\3C\3C\3C\5C\u0231\nC\3C\3C\3C\3D\3D\3D\3"+
		"D\7D\u023a\nD\fD\16D\u023d\13D\3D\5D\u0240\nD\3D\3D\3D\3E\6E\u0246\nE"+
		"\rE\16E\u0247\3E\3E\3F\5F\u024d\nF\3F\3F\3F\3F\3F\3G\6G\u0255\nG\rG\16"+
		"G\u0256\3G\3G\3H\3H\3H\3H\3I\7I\u0260\nI\fI\16I\u0263\13I\3I\3I\3I\3I"+
		"\3I\3I\3J\3J\7J\u026d\nJ\fJ\16J\u0270\13J\3J\3J\3J\3J\3J\3K\6K\u0278\n"+
		"K\rK\16K\u0279\3K\3K\3L\3L\3L\3L\3\u0204\2M\5\2\7\2\t\3\13\4\r\5\17\6"+
		"\21\7\23\b\25\t\27\n\31\13\33\f\35\r\37\16!\17#\20%\21\'\22)\23+\24-\25"+
		"/\26\61\27\63\30\65\31\67\329\33;\34=\35?\36A\37C E!G\"I#K$M%O&Q\'S(U"+
		")W*Y+[,]-_.a/c\60e\61g\62i\63k\64m\65o\66q\67s8u9w:y;{<}=\177>\u0081?"+
		"\u0083@\u0085A\u0087B\u0089C\u008bD\u008dE\u008fF\u0091G\u0093H\u0095"+
		"I\u0097J\u0099K\5\2\3\4\13\4\2\13\13\"\"\4\2C\\aa\5\2C\\aac|\6\2\62;C"+
		"\\aac|\3\2\62;\4\2\f\f\17\17\5\2\13\f\17\17\"\"\3\2\61\61\5\2\f\f\17\17"+
		",,\2\u0290\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2"+
		"\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2"+
		"\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2"+
		"\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2"+
		"\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2"+
		"\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2"+
		"M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3"+
		"\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2"+
		"\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2"+
		"s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177"+
		"\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2"+
		"\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\3\u008d\3\2\2\2\3\u008f\3\2\2\2\3\u0091"+
		"\3\2\2\2\4\u0093\3\2\2\2\4\u0095\3\2\2\2\4\u0097\3\2\2\2\4\u0099\3\2\2"+
		"\2\5\u009b\3\2\2\2\7\u009e\3\2\2\2\t\u00a2\3\2\2\2\13\u00a8\3\2\2\2\r"+
		"\u00ae\3\2\2\2\17\u00b8\3\2\2\2\21\u00bd\3\2\2\2\23\u00c3\3\2\2\2\25\u00cf"+
		"\3\2\2\2\27\u00d6\3\2\2\2\31\u00dd\3\2\2\2\33\u00e5\3\2\2\2\35\u00ef\3"+
		"\2\2\2\37\u00f8\3\2\2\2!\u0101\3\2\2\2#\u0109\3\2\2\2%\u0113\3\2\2\2\'"+
		"\u011a\3\2\2\2)\u0121\3\2\2\2+\u0128\3\2\2\2-\u0131\3\2\2\2/\u0136\3\2"+
		"\2\2\61\u013e\3\2\2\2\63\u0147\3\2\2\2\65\u014f\3\2\2\2\67\u0156\3\2\2"+
		"\29\u015c\3\2\2\2;\u0166\3\2\2\2=\u0171\3\2\2\2?\u0177\3\2\2\2A\u017e"+
		"\3\2\2\2C\u0188\3\2\2\2E\u0190\3\2\2\2G\u019e\3\2\2\2I\u01a3\3\2\2\2K"+
		"\u01b3\3\2\2\2M\u01c9\3\2\2\2O\u01cb\3\2\2\2Q\u01cd\3\2\2\2S\u01cf\3\2"+
		"\2\2U\u01d1\3\2\2\2W\u01d3\3\2\2\2Y\u01d5\3\2\2\2[\u01d7\3\2\2\2]\u01d9"+
		"\3\2\2\2_\u01db\3\2\2\2a\u01dd\3\2\2\2c\u01df\3\2\2\2e\u01e1\3\2\2\2g"+
		"\u01e3\3\2\2\2i\u01e5\3\2\2\2k\u01e7\3\2\2\2m\u01e9\3\2\2\2o\u01eb\3\2"+
		"\2\2q\u01ed\3\2\2\2s\u01ef\3\2\2\2u\u01f1\3\2\2\2w\u01f3\3\2\2\2y\u01f5"+
		"\3\2\2\2{\u01f7\3\2\2\2}\u01f9\3\2\2\2\177\u0200\3\2\2\2\u0081\u020a\3"+
		"\2\2\2\u0083\u021c\3\2\2\2\u0085\u0223\3\2\2\2\u0087\u022c\3\2\2\2\u0089"+
		"\u0235\3\2\2\2\u008b\u0245\3\2\2\2\u008d\u024c\3\2\2\2\u008f\u0254\3\2"+
		"\2\2\u0091\u025a\3\2\2\2\u0093\u0261\3\2\2\2\u0095\u026a\3\2\2\2\u0097"+
		"\u0277\3\2\2\2\u0099\u027d\3\2\2\2\u009b\u009c\t\2\2\2\u009c\6\3\2\2\2"+
		"\u009d\u009f\7\17\2\2\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0"+
		"\3\2\2\2\u00a0\u00a1\7\f\2\2\u00a1\b\3\2\2\2\u00a2\u00a3\7e\2\2\u00a3"+
		"\u00a4\7n\2\2\u00a4\u00a5\7c\2\2\u00a5\u00a6\7u\2\2\u00a6\u00a7\7u\2\2"+
		"\u00a7\n\3\2\2\2\u00a8\u00a9\7e\2\2\u00a9\u00aa\7q\2\2\u00aa\u00ab\7p"+
		"\2\2\u00ab\u00ac\7u\2\2\u00ac\u00ad\7v\2\2\u00ad\f\3\2\2\2\u00ae\u00af"+
		"\7e\2\2\u00af\u00b0\7q\2\2\u00b0\u00b1\7p\2\2\u00b1\u00b2\7u\2\2\u00b2"+
		"\u00b3\7v\2\2\u00b3\u00b4\7g\2\2\u00b4\u00b5\7z\2\2\u00b5\u00b6\7r\2\2"+
		"\u00b6\u00b7\7t\2\2\u00b7\16\3\2\2\2\u00b8\u00b9\7g\2\2\u00b9\u00ba\7"+
		"p\2\2\u00ba\u00bb\7w\2\2\u00bb\u00bc\7o\2\2\u00bc\20\3\2\2\2\u00bd\u00be"+
		"\7h\2\2\u00be\u00bf\7c\2\2\u00bf\u00c0\7n\2\2\u00c0\u00c1\7u\2\2\u00c1"+
		"\u00c2\7g\2\2\u00c2\22\3\2\2\2\u00c3\u00c4\7H\2\2\u00c4\u00c5\7Q\2\2\u00c5"+
		"\u00c6\7T\2\2\u00c6\u00c7\7E\2\2\u00c7\u00c8\7G\2\2\u00c8\u00c9\7K\2\2"+
		"\u00c9\u00ca\7P\2\2\u00ca\u00cb\7N\2\2\u00cb\u00cc\7K\2\2\u00cc\u00cd"+
		"\7P\2\2\u00cd\u00ce\7G\2\2\u00ce\24\3\2\2\2\u00cf\u00d0\7h\2\2\u00d0\u00d1"+
		"\7t\2\2\u00d1\u00d2\7k\2\2\u00d2\u00d3\7g\2\2\u00d3\u00d4\7p\2\2\u00d4"+
		"\u00d5\7f\2\2\u00d5\26\3\2\2\2\u00d6\u00d7\7k\2\2\u00d7\u00d8\7p\2\2\u00d8"+
		"\u00d9\7n\2\2\u00d9\u00da\7k\2\2\u00da\u00db\7p\2\2\u00db\u00dc\7g\2\2"+
		"\u00dc\30\3\2\2\2\u00dd\u00de\7o\2\2\u00de\u00df\7w\2\2\u00df\u00e0\7"+
		"v\2\2\u00e0\u00e1\7c\2\2\u00e1\u00e2\7d\2\2\u00e2\u00e3\7n\2\2\u00e3\u00e4"+
		"\7g\2\2\u00e4\32\3\2\2\2\u00e5\u00e6\7p\2\2\u00e6\u00e7\7c\2\2\u00e7\u00e8"+
		"\7o\2\2\u00e8\u00e9\7g\2\2\u00e9\u00ea\7u\2\2\u00ea\u00eb\7r\2\2\u00eb"+
		"\u00ec\7c\2\2\u00ec\u00ed\7e\2\2\u00ed\u00ee\7g\2\2\u00ee\34\3\2\2\2\u00ef"+
		"\u00f0\7q\2\2\u00f0\u00f1\7r\2\2\u00f1\u00f2\7g\2\2\u00f2\u00f3\7t\2\2"+
		"\u00f3\u00f4\7c\2\2\u00f4\u00f5\7v\2\2\u00f5\u00f6\7q\2\2\u00f6\u00f7"+
		"\7t\2\2\u00f7\36\3\2\2\2\u00f8\u00f9\7q\2\2\u00f9\u00fa\7x\2\2\u00fa\u00fb"+
		"\7g\2\2\u00fb\u00fc\7t\2\2\u00fc\u00fd\7t\2\2\u00fd\u00fe\7k\2\2\u00fe"+
		"\u00ff\7f\2\2\u00ff\u0100\7g\2\2\u0100 \3\2\2\2\u0101\u0102\7r\2\2\u0102"+
		"\u0103\7t\2\2\u0103\u0104\7k\2\2\u0104\u0105\7x\2\2\u0105\u0106\7c\2\2"+
		"\u0106\u0107\7v\2\2\u0107\u0108\7g\2\2\u0108\"\3\2\2\2\u0109\u010a\7r"+
		"\2\2\u010a\u010b\7t\2\2\u010b\u010c\7q\2\2\u010c\u010d\7v\2\2\u010d\u010e"+
		"\7g\2\2\u010e\u010f\7e\2\2\u010f\u0110\7v\2\2\u0110\u0111\7g\2\2\u0111"+
		"\u0112\7f\2\2\u0112$\3\2\2\2\u0113\u0114\7r\2\2\u0114\u0115\7w\2\2\u0115"+
		"\u0116\7d\2\2\u0116\u0117\7n\2\2\u0117\u0118\7k\2\2\u0118\u0119\7e\2\2"+
		"\u0119&\3\2\2\2\u011a\u011b\7u\2\2\u011b\u011c\7v\2\2\u011c\u011d\7c\2"+
		"\2\u011d\u011e\7v\2\2\u011e\u011f\7k\2\2\u011f\u0120\7e\2\2\u0120(\3\2"+
		"\2\2\u0121\u0122\7u\2\2\u0122\u0123\7v\2\2\u0123\u0124\7t\2\2\u0124\u0125"+
		"\7w\2\2\u0125\u0126\7e\2\2\u0126\u0127\7v\2\2\u0127*\3\2\2\2\u0128\u0129"+
		"\7v\2\2\u0129\u012a\7g\2\2\u012a\u012b\7o\2\2\u012b\u012c\7r\2\2\u012c"+
		"\u012d\7n\2\2\u012d\u012e\7c\2\2\u012e\u012f\7v\2\2\u012f\u0130\7g\2\2"+
		"\u0130,\3\2\2\2\u0131\u0132\7v\2\2\u0132\u0133\7t\2\2\u0133\u0134\7w\2"+
		"\2\u0134\u0135\7g\2\2\u0135.\3\2\2\2\u0136\u0137\7v\2\2\u0137\u0138\7"+
		"{\2\2\u0138\u0139\7r\2\2\u0139\u013a\7g\2\2\u013a\u013b\7f\2\2\u013b\u013c"+
		"\7g\2\2\u013c\u013d\7h\2\2\u013d\60\3\2\2\2\u013e\u013f\7v\2\2\u013f\u0140"+
		"\7{\2\2\u0140\u0141\7r\2\2\u0141\u0142\7g\2\2\u0142\u0143\7p\2\2\u0143"+
		"\u0144\7c\2\2\u0144\u0145\7o\2\2\u0145\u0146\7g\2\2\u0146\62\3\2\2\2\u0147"+
		"\u0148\7x\2\2\u0148\u0149\7k\2\2\u0149\u014a\7t\2\2\u014a\u014b\7v\2\2"+
		"\u014b\u014c\7w\2\2\u014c\u014d\7c\2\2\u014d\u014e\7n\2\2\u014e\64\3\2"+
		"\2\2\u014f\u0150\7W\2\2\u0150\u0151\7E\2\2\u0151\u0152\7N\2\2\u0152\u0153"+
		"\7C\2\2\u0153\u0154\7U\2\2\u0154\u0155\7U\2\2\u0155\66\3\2\2\2\u0156\u0157"+
		"\7W\2\2\u0157\u0158\7G\2\2\u0158\u0159\7P\2\2\u0159\u015a\7W\2\2\u015a"+
		"\u015b\7O\2\2\u015b8\3\2\2\2\u015c\u015d\7W\2\2\u015d\u015e\7H\2\2\u015e"+
		"\u015f\7W\2\2\u015f\u0160\7P\2\2\u0160\u0161\7E\2\2\u0161\u0162\7V\2\2"+
		"\u0162\u0163\7K\2\2\u0163\u0164\7Q\2\2\u0164\u0165\7P\2\2\u0165:\3\2\2"+
		"\2\u0166\u0167\7W\2\2\u0167\u0168\7K\2\2\u0168\u0169\7P\2\2\u0169\u016a"+
		"\7V\2\2\u016a\u016b\7G\2\2\u016b\u016c\7T\2\2\u016c\u016d\7H\2\2\u016d"+
		"\u016e\7C\2\2\u016e\u016f\7E\2\2\u016f\u0170\7G\2\2\u0170<\3\2\2\2\u0171"+
		"\u0172\7W\2\2\u0172\u0173\7O\2\2\u0173\u0174\7G\2\2\u0174\u0175\7V\2\2"+
		"\u0175\u0176\7C\2\2\u0176>\3\2\2\2\u0177\u0178\7W\2\2\u0178\u0179\7R\2"+
		"\2\u0179\u017a\7C\2\2\u017a\u017b\7T\2\2\u017b\u017c\7C\2\2\u017c\u017d"+
		"\7O\2\2\u017d@\3\2\2\2\u017e\u017f\7W\2\2\u017f\u0180\7R\2\2\u0180\u0181"+
		"\7T\2\2\u0181\u0182\7Q\2\2\u0182\u0183\7R\2\2\u0183\u0184\7G\2\2\u0184"+
		"\u0185\7T\2\2\u0185\u0186\7V\2\2\u0186\u0187\7[\2\2\u0187B\3\2\2\2\u0188"+
		"\u0189\7W\2\2\u0189\u018a\7U\2\2\u018a\u018b\7V\2\2\u018b\u018c\7T\2\2"+
		"\u018c\u018d\7W\2\2\u018d\u018e\7E\2\2\u018e\u018f\7V\2\2\u018fD\3\2\2"+
		"\2\u0190\u0191\7W\2\2\u0191\u0192\7G\2\2\u0192\u0193\7a\2\2\u0193\u0194"+
		"\7F\2\2\u0194\u0195\7G\2\2\u0195\u0196\7R\2\2\u0196\u0197\7T\2\2\u0197"+
		"\u0198\7G\2\2\u0198\u0199\7E\2\2\u0199\u019a\7C\2\2\u019a\u019b\7V\2\2"+
		"\u019b\u019c\7G\2\2\u019c\u019d\7F\2\2\u019dF\3\2\2\2\u019e\u019f\7U\2"+
		"\2\u019f\u01a0\7V\2\2\u01a0\u01a1\7C\2\2\u01a1\u01a2\7V\2\2\u01a2H\3\2"+
		"\2\2\u01a3\u01a4\7H\2\2\u01a4\u01a5\7C\2\2\u01a5\u01a6\7E\2\2\u01a6\u01a7"+
		"\7V\2\2\u01a7\u01a8\7Q\2\2\u01a8\u01a9\7T\2\2\u01a9\u01aa\7[\2\2\u01aa"+
		"\u01ab\7I\2\2\u01ab\u01ac\7C\2\2\u01ac\u01ad\7O\2\2\u01ad\u01ae\7G\2\2"+
		"\u01ae\u01af\7a\2\2\u01af\u01b0\7C\2\2\u01b0\u01b1\7R\2\2\u01b1\u01b2"+
		"\7K\2\2\u01b2J\3\2\2\2\u01b3\u01b4\7I\2\2\u01b4\u01b5\7G\2\2\u01b5\u01b6"+
		"\7P\2\2\u01b6\u01b7\7G\2\2\u01b7\u01b8\7T\2\2\u01b8\u01b9\7C\2\2\u01b9"+
		"\u01ba\7V\2\2\u01ba\u01bb\7G\2\2\u01bb\u01bc\7F\2\2\u01bc\u01bd\7a\2\2"+
		"\u01bd\u01c1\3\2\2\2\u01be\u01c0\t\3\2\2\u01bf\u01be\3\2\2\2\u01c0\u01c3"+
		"\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2\u01c4\3\2\2\2\u01c3"+
		"\u01c1\3\2\2\2\u01c4\u01c5\7D\2\2\u01c5\u01c6\7Q\2\2\u01c6\u01c7\7F\2"+
		"\2\u01c7\u01c8\7[\2\2\u01c8L\3\2\2\2\u01c9\u01ca\7(\2\2\u01caN\3\2\2\2"+
		"\u01cb\u01cc\7\61\2\2\u01ccP\3\2\2\2\u01cd\u01ce\7#\2\2\u01ceR\3\2\2\2"+
		"\u01cf\u01d0\7@\2\2\u01d0T\3\2\2\2\u01d1\u01d2\7\177\2\2\u01d2V\3\2\2"+
		"\2\u01d3\u01d4\7+\2\2\u01d4X\3\2\2\2\u01d5\u01d6\7_\2\2\u01d6Z\3\2\2\2"+
		"\u01d7\u01d8\7<\2\2\u01d8\\\3\2\2\2\u01d9\u01da\7.\2\2\u01da^\3\2\2\2"+
		"\u01db\u01dc\7?\2\2\u01dc`\3\2\2\2\u01dd\u01de\7/\2\2\u01deb\3\2\2\2\u01df"+
		"\u01e0\7>\2\2\u01e0d\3\2\2\2\u01e1\u01e2\7}\2\2\u01e2f\3\2\2\2\u01e3\u01e4"+
		"\7*\2\2\u01e4h\3\2\2\2\u01e5\u01e6\7]\2\2\u01e6j\3\2\2\2\u01e7\u01e8\7"+
		"\'\2\2\u01e8l\3\2\2\2\u01e9\u01ea\7\60\2\2\u01ean\3\2\2\2\u01eb\u01ec"+
		"\7~\2\2\u01ecp\3\2\2\2\u01ed\u01ee\7-\2\2\u01eer\3\2\2\2\u01ef\u01f0\7"+
		"A\2\2\u01f0t\3\2\2\2\u01f1\u01f2\7=\2\2\u01f2v\3\2\2\2\u01f3\u01f4\7^"+
		"\2\2\u01f4x\3\2\2\2\u01f5\u01f6\7,\2\2\u01f6z\3\2\2\2\u01f7\u01f8\7\u0080"+
		"\2\2\u01f8|\3\2\2\2\u01f9\u01fd\t\4\2\2\u01fa\u01fc\t\5\2\2\u01fb\u01fa"+
		"\3\2\2\2\u01fc\u01ff\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe"+
		"~\3\2\2\2\u01ff\u01fd\3\2\2\2\u0200\u0204\7$\2\2\u0201\u0203\13\2\2\2"+
		"\u0202\u0201\3\2\2\2\u0203\u0206\3\2\2\2\u0204\u0205\3\2\2\2\u0204\u0202"+
		"\3\2\2\2\u0205\u0207\3\2\2\2\u0206\u0204\3\2\2\2\u0207\u0208\7$\2\2\u0208"+
		"\u0080\3\2\2\2\u0209\u020b\7/\2\2\u020a\u0209\3\2\2\2\u020a\u020b\3\2"+
		"\2\2\u020b\u020d\3\2\2\2\u020c\u020e\t\6\2\2\u020d\u020c\3\2\2\2\u020e"+
		"\u020f\3\2\2\2\u020f\u020d\3\2\2\2\u020f\u0210\3\2\2\2\u0210\u0211\3\2"+
		"\2\2\u0211\u0215\7\60\2\2\u0212\u0214\t\6\2\2\u0213\u0212\3\2\2\2\u0214"+
		"\u0217\3\2\2\2\u0215\u0213\3\2\2\2\u0215\u0216\3\2\2\2\u0216\u0219\3\2"+
		"\2\2\u0217\u0215\3\2\2\2\u0218\u021a\7h\2\2\u0219\u0218\3\2\2\2\u0219"+
		"\u021a\3\2\2\2\u021a\u0082\3\2\2\2\u021b\u021d\7/\2\2\u021c\u021b\3\2"+
		"\2\2\u021c\u021d\3\2\2\2\u021d\u021f\3\2\2\2\u021e\u0220\t\6\2\2\u021f"+
		"\u021e\3\2\2\2\u0220\u0221\3\2\2\2\u0221\u021f\3\2\2\2\u0221\u0222\3\2"+
		"\2\2\u0222\u0084\3\2\2\2\u0223\u0227\7%\2\2\u0224\u0226\n\7\2\2\u0225"+
		"\u0224\3\2\2\2\u0226\u0229\3\2\2\2\u0227\u0225\3\2\2\2\u0227\u0228\3\2"+
		"\2\2\u0228\u022a\3\2\2\2\u0229\u0227\3\2\2\2\u022a\u022b\bB\2\2\u022b"+
		"\u0086\3\2\2\2\u022c\u022d\7\61\2\2\u022d\u022e\7\61\2\2\u022e\u0230\3"+
		"\2\2\2\u022f\u0231\5\5\2\2\u0230\u022f\3\2\2\2\u0230\u0231\3\2\2\2\u0231"+
		"\u0232\3\2\2\2\u0232\u0233\bC\2\2\u0233\u0234\bC\3\2\u0234\u0088\3\2\2"+
		"\2\u0235\u0236\7\61\2\2\u0236\u0237\7,\2\2\u0237\u023b\3\2\2\2\u0238\u023a"+
		"\7,\2\2\u0239\u0238\3\2\2\2\u023a\u023d\3\2\2\2\u023b\u0239\3\2\2\2\u023b"+
		"\u023c\3\2\2\2\u023c\u023f\3\2\2\2\u023d\u023b\3\2\2\2\u023e\u0240\5\5"+
		"\2\2\u023f\u023e\3\2\2\2\u023f\u0240\3\2\2\2\u0240\u0241\3\2\2\2\u0241"+
		"\u0242\bD\2\2\u0242\u0243\bD\4\2\u0243\u008a\3\2\2\2\u0244\u0246\t\b\2"+
		"\2\u0245\u0244\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u0245\3\2\2\2\u0247\u0248"+
		"\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u024a\bE\2\2\u024a\u008c\3\2\2\2\u024b"+
		"\u024d\5\5\2\2\u024c\u024b\3\2\2\2\u024c\u024d\3\2\2\2\u024d\u024e\3\2"+
		"\2\2\u024e\u024f\5\7\3\2\u024f\u0250\3\2\2\2\u0250\u0251\bF\2\2\u0251"+
		"\u0252\bF\5\2\u0252\u008e\3\2\2\2\u0253\u0255\n\7\2\2\u0254\u0253\3\2"+
		"\2\2\u0255\u0256\3\2\2\2\u0256\u0254\3\2\2\2\u0256\u0257\3\2\2\2\u0257"+
		"\u0258\3\2\2\2\u0258\u0259\bG\6\2\u0259\u0090\3\2\2\2\u025a\u025b\13\2"+
		"\2\2\u025b\u025c\3\2\2\2\u025c\u025d\bH\2\2\u025d\u0092\3\2\2\2\u025e"+
		"\u0260\5\5\2\2\u025f\u025e\3\2\2\2\u0260\u0263\3\2\2\2\u0261\u025f\3\2"+
		"\2\2\u0261\u0262\3\2\2\2\u0262\u0264\3\2\2\2\u0263\u0261\3\2\2\2\u0264"+
		"\u0265\7,\2\2\u0265\u0266\7\61\2\2\u0266\u0267\3\2\2\2\u0267\u0268\bI"+
		"\2\2\u0268\u0269\bI\5\2\u0269\u0094\3\2\2\2\u026a\u026e\5\7\3\2\u026b"+
		"\u026d\5\5\2\2\u026c\u026b\3\2\2\2\u026d\u0270\3\2\2\2\u026e\u026c\3\2"+
		"\2\2\u026e\u026f\3\2\2\2\u026f\u0271\3\2\2\2\u0270\u026e\3\2\2\2\u0271"+
		"\u0272\7,\2\2\u0272\u0273\n\t\2\2\u0273\u0274\3\2\2\2\u0274\u0275\bJ\2"+
		"\2\u0275\u0096\3\2\2\2\u0276\u0278\n\n\2\2\u0277\u0276\3\2\2\2\u0278\u0279"+
		"\3\2\2\2\u0279\u0277\3\2\2\2\u0279\u027a\3\2\2\2\u027a\u027b\3\2\2\2\u027b"+
		"\u027c\bK\6\2\u027c\u0098\3\2\2\2\u027d\u027e\13\2\2\2\u027e\u027f\3\2"+
		"\2\2\u027f\u0280\bL\2\2\u0280\u009a\3\2\2\2\31\2\3\4\u009e\u01c1\u01fd"+
		"\u0204\u020a\u020f\u0215\u0219\u021c\u0221\u0227\u0230\u023b\u023f\u0247"+
		"\u024c\u0256\u0261\u026e\u0279\7\b\2\2\7\3\2\7\4\2\6\2\2\2\4\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}