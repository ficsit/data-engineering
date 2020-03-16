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
		TYPENAME=21, USING=22, VIRTUAL=23, UCLASS=24, UENUM=25, UFUNCTION=26, 
		UINTERFACE=27, UMETA=28, UPARAM=29, UPROPERTY=30, USTRUCT=31, UE_DEPRECATED=32, 
		STAT=33, SF_CLASS_TAG=34, SF_GENERATED_BODY=35, AMPERSAND=36, BACKSLASH=37, 
		BANG=38, CLOSE_ANGLE=39, CLOSE_BRACE=40, CLOSE_PAREN=41, CLOSE_SQUARE=42, 
		COLON=43, COMMA=44, EQUALS=45, MINUS=46, OPEN_ANGLE=47, OPEN_BRACE=48, 
		OPEN_PAREN=49, OPEN_SQUARE=50, PERCENT=51, PERIOD=52, PIPE=53, PLUS=54, 
		QUESTION=55, SEMICOLON=56, SLASH=57, STAR=58, TILDE=59, IDENTIFIER=60, 
		STRING_LITERAL=61, FLOAT_LITERAL=62, INTEGER_LITERAL=63, PREPROCESSOR=64, 
		LINE_COMMENT_START=65, BLOCK_COMMENT_START=66, WHITESPACE=67, LINE_COMMENT_END=68, 
		LINE_COMMENT_TEXT=69, LINE_COMMENT_OTHER=70, BLOCK_COMMENT_END=71, BLOCK_COMMENT_NEW_LINE=72, 
		BLOCK_COMMENT_TEXT=73, BLOCK_COMMENT_OTHER=74, PREPROCESSOR_MACRO_SKIPPED_NEWLINE=75, 
		PREPROCESSOR_MACRO_NEWLINE=76, PREPROCESSOR_MACRO_OTHER=77;
	public static final int
		COMMENTS_CHANNEL=2, WHITESPACE_CHANNEL=3;
	public static final int
		LINE_COMMENT=1, BLOCK_COMMENT=2, PREPROCESSOR_MACRO=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL", "WHITESPACE_CHANNEL"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "LINE_COMMENT", "BLOCK_COMMENT", "PREPROCESSOR_MACRO"
	};

	public static final String[] ruleNames = {
		"Space", "Newline", "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", 
		"FRIEND", "INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", 
		"PROTECTED", "PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", 
		"TYPENAME", "USING", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", 
		"UMETA", "UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "OPEN_SQUARE", "PERCENT", 
		"PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "SLASH", "STAR", "TILDE", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER", "PREPROCESSOR_MACRO_SKIPPED_NEWLINE", 
		"PREPROCESSOR_MACRO_NEWLINE", "PREPROCESSOR_MACRO_OTHER"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'class'", "'const'", "'constexpr'", "'enum'", "'false'", "'FORCEINLINE'", 
		"'friend'", "'inline'", "'mutable'", "'namespace'", "'operator'", "'override'", 
		"'private'", "'protected'", "'public'", "'static'", "'struct'", "'template'", 
		"'true'", "'typedef'", "'typename'", "'using'", "'virtual'", "'UCLASS'", 
		"'UENUM'", "'UFUNCTION'", "'UINTERFACE'", "'UMETA'", "'UPARAM'", "'UPROPERTY'", 
		"'USTRUCT'", "'UE_DEPRECATED'", "'STAT'", "'FACTORYGAME_API'", null, "'&'", 
		"'/'", "'!'", "'>'", "'}'", "')'", "']'", "':'", "','", "'='", "'-'", 
		"'<'", "'{'", "'('", "'['", "'%'", "'.'", "'|'", "'+'", "'?'", "';'", 
		"'\\'", "'*'", "'~'", null, null, null, null, "'#'", null, null, null, 
		null, null, null, null, null, null, null, "'\\\n'", "'\n'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CLASS", "CONST", "CONSTEXPR", "ENUM", "FALSE", "FORCEINLINE", "FRIEND", 
		"INLINE", "MUTABLE", "NAMESPACE", "OPERATOR", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "STATIC", "STRUCT", "TEMPLATE", "TRUE", "TYPEDEF", "TYPENAME", 
		"USING", "VIRTUAL", "UCLASS", "UENUM", "UFUNCTION", "UINTERFACE", "UMETA", 
		"UPARAM", "UPROPERTY", "USTRUCT", "UE_DEPRECATED", "STAT", "SF_CLASS_TAG", 
		"SF_GENERATED_BODY", "AMPERSAND", "BACKSLASH", "BANG", "CLOSE_ANGLE", 
		"CLOSE_BRACE", "CLOSE_PAREN", "CLOSE_SQUARE", "COLON", "COMMA", "EQUALS", 
		"MINUS", "OPEN_ANGLE", "OPEN_BRACE", "OPEN_PAREN", "OPEN_SQUARE", "PERCENT", 
		"PERIOD", "PIPE", "PLUS", "QUESTION", "SEMICOLON", "SLASH", "STAR", "TILDE", 
		"IDENTIFIER", "STRING_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "PREPROCESSOR", 
		"LINE_COMMENT_START", "BLOCK_COMMENT_START", "WHITESPACE", "LINE_COMMENT_END", 
		"LINE_COMMENT_TEXT", "LINE_COMMENT_OTHER", "BLOCK_COMMENT_END", "BLOCK_COMMENT_NEW_LINE", 
		"BLOCK_COMMENT_TEXT", "BLOCK_COMMENT_OTHER", "PREPROCESSOR_MACRO_SKIPPED_NEWLINE", 
		"PREPROCESSOR_MACRO_NEWLINE", "PREPROCESSOR_MACRO_OTHER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2O\u02a0\b\1\b\1\b"+
		"\1\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t"+
		"\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21"+
		"\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30"+
		"\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37"+
		"\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)"+
		"\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63"+
		"\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;"+
		"\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G"+
		"\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\3\2\3\2\3\3"+
		"\5\3\u00a8\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3"+
		"\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3"+
		"\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3"+
		"\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3"+
		"\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3"+
		" \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3\"\3\"\3\"\3\"\3\""+
		"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$"+
		"\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&"+
		"\3&\3&\3&\3&\3&\7&\u01cf\n&\f&\16&\u01d2\13&\3&\3&\3&\3&\3&\3\'\3\'\3"+
		"(\3(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62"+
		"\3\62\3\63\3\63\3\64\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3"+
		":\3:\3;\3;\3<\3<\3=\3=\3>\3>\3?\3?\7?\u020b\n?\f?\16?\u020e\13?\3@\3@"+
		"\7@\u0212\n@\f@\16@\u0215\13@\3@\3@\3A\5A\u021a\nA\3A\6A\u021d\nA\rA\16"+
		"A\u021e\3A\3A\7A\u0223\nA\fA\16A\u0226\13A\3A\5A\u0229\nA\3B\5B\u022c"+
		"\nB\3B\6B\u022f\nB\rB\16B\u0230\3C\3C\3C\3C\3C\3D\3D\3D\3D\5D\u023c\n"+
		"D\3D\3D\3D\3E\3E\3E\3E\7E\u0245\nE\fE\16E\u0248\13E\3E\5E\u024b\nE\3E"+
		"\3E\3E\3F\6F\u0251\nF\rF\16F\u0252\3F\3F\3G\5G\u0258\nG\3G\3G\3G\3G\3"+
		"G\3H\6H\u0260\nH\rH\16H\u0261\3H\3H\3I\3I\3I\3I\3J\7J\u026b\nJ\fJ\16J"+
		"\u026e\13J\3J\7J\u0271\nJ\fJ\16J\u0274\13J\3J\3J\3J\3J\3J\3J\3K\3K\7K"+
		"\u027e\nK\fK\16K\u0281\13K\3K\3K\3K\3K\3K\3L\6L\u0289\nL\rL\16L\u028a"+
		"\3L\3L\3M\3M\3M\3M\3N\3N\3N\3N\3N\3O\3O\3O\3O\3O\3P\3P\3P\3P\3\u0213\2"+
		"Q\6\2\b\2\n\3\f\4\16\5\20\6\22\7\24\b\26\t\30\n\32\13\34\f\36\r \16\""+
		"\17$\20&\21(\22*\23,\24.\25\60\26\62\27\64\30\66\318\32:\33<\34>\35@\36"+
		"B\37D F!H\"J#L$N%P&R\'T(V)X*Z+\\,^-`.b/d\60f\61h\62j\63l\64n\65p\66r\67"+
		"t8v9x:z;|<~=\u0080>\u0082?\u0084@\u0086A\u0088B\u008aC\u008cD\u008eE\u0090"+
		"F\u0092G\u0094H\u0096I\u0098J\u009aK\u009cL\u009eM\u00a0N\u00a2O\6\2\3"+
		"\4\5\13\4\2\13\13\"\"\4\2C\\aa\5\2C\\aac|\6\2\62;C\\aac|\3\2\62;\5\2\13"+
		"\f\17\17\"\"\4\2\f\f\17\17\3\2\61\61\5\2\f\f\17\17,,\2\u02ae\2\n\3\2\2"+
		"\2\2\f\3\2\2\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3\2\2\2\2\24\3\2\2\2\2\26"+
		"\3\2\2\2\2\30\3\2\2\2\2\32\3\2\2\2\2\34\3\2\2\2\2\36\3\2\2\2\2 \3\2\2"+
		"\2\2\"\3\2\2\2\2$\3\2\2\2\2&\3\2\2\2\2(\3\2\2\2\2*\3\2\2\2\2,\3\2\2\2"+
		"\2.\3\2\2\2\2\60\3\2\2\2\2\62\3\2\2\2\2\64\3\2\2\2\2\66\3\2\2\2\28\3\2"+
		"\2\2\2:\3\2\2\2\2<\3\2\2\2\2>\3\2\2\2\2@\3\2\2\2\2B\3\2\2\2\2D\3\2\2\2"+
		"\2F\3\2\2\2\2H\3\2\2\2\2J\3\2\2\2\2L\3\2\2\2\2N\3\2\2\2\2P\3\2\2\2\2R"+
		"\3\2\2\2\2T\3\2\2\2\2V\3\2\2\2\2X\3\2\2\2\2Z\3\2\2\2\2\\\3\2\2\2\2^\3"+
		"\2\2\2\2`\3\2\2\2\2b\3\2\2\2\2d\3\2\2\2\2f\3\2\2\2\2h\3\2\2\2\2j\3\2\2"+
		"\2\2l\3\2\2\2\2n\3\2\2\2\2p\3\2\2\2\2r\3\2\2\2\2t\3\2\2\2\2v\3\2\2\2\2"+
		"x\3\2\2\2\2z\3\2\2\2\2|\3\2\2\2\2~\3\2\2\2\2\u0080\3\2\2\2\2\u0082\3\2"+
		"\2\2\2\u0084\3\2\2\2\2\u0086\3\2\2\2\2\u0088\3\2\2\2\2\u008a\3\2\2\2\2"+
		"\u008c\3\2\2\2\2\u008e\3\2\2\2\3\u0090\3\2\2\2\3\u0092\3\2\2\2\3\u0094"+
		"\3\2\2\2\4\u0096\3\2\2\2\4\u0098\3\2\2\2\4\u009a\3\2\2\2\4\u009c\3\2\2"+
		"\2\5\u009e\3\2\2\2\5\u00a0\3\2\2\2\5\u00a2\3\2\2\2\6\u00a4\3\2\2\2\b\u00a7"+
		"\3\2\2\2\n\u00ab\3\2\2\2\f\u00b1\3\2\2\2\16\u00b7\3\2\2\2\20\u00c1\3\2"+
		"\2\2\22\u00c6\3\2\2\2\24\u00cc\3\2\2\2\26\u00d8\3\2\2\2\30\u00df\3\2\2"+
		"\2\32\u00e6\3\2\2\2\34\u00ee\3\2\2\2\36\u00f8\3\2\2\2 \u0101\3\2\2\2\""+
		"\u010a\3\2\2\2$\u0112\3\2\2\2&\u011c\3\2\2\2(\u0123\3\2\2\2*\u012a\3\2"+
		"\2\2,\u0131\3\2\2\2.\u013a\3\2\2\2\60\u013f\3\2\2\2\62\u0147\3\2\2\2\64"+
		"\u0150\3\2\2\2\66\u0156\3\2\2\28\u015e\3\2\2\2:\u0165\3\2\2\2<\u016b\3"+
		"\2\2\2>\u0175\3\2\2\2@\u0180\3\2\2\2B\u0186\3\2\2\2D\u018d\3\2\2\2F\u0197"+
		"\3\2\2\2H\u019f\3\2\2\2J\u01ad\3\2\2\2L\u01b2\3\2\2\2N\u01c2\3\2\2\2P"+
		"\u01d8\3\2\2\2R\u01da\3\2\2\2T\u01dc\3\2\2\2V\u01de\3\2\2\2X\u01e0\3\2"+
		"\2\2Z\u01e2\3\2\2\2\\\u01e4\3\2\2\2^\u01e6\3\2\2\2`\u01e8\3\2\2\2b\u01ea"+
		"\3\2\2\2d\u01ec\3\2\2\2f\u01ee\3\2\2\2h\u01f0\3\2\2\2j\u01f2\3\2\2\2l"+
		"\u01f4\3\2\2\2n\u01f6\3\2\2\2p\u01f8\3\2\2\2r\u01fa\3\2\2\2t\u01fc\3\2"+
		"\2\2v\u01fe\3\2\2\2x\u0200\3\2\2\2z\u0202\3\2\2\2|\u0204\3\2\2\2~\u0206"+
		"\3\2\2\2\u0080\u0208\3\2\2\2\u0082\u020f\3\2\2\2\u0084\u0219\3\2\2\2\u0086"+
		"\u022b\3\2\2\2\u0088\u0232\3\2\2\2\u008a\u0237\3\2\2\2\u008c\u0240\3\2"+
		"\2\2\u008e\u0250\3\2\2\2\u0090\u0257\3\2\2\2\u0092\u025f\3\2\2\2\u0094"+
		"\u0265\3\2\2\2\u0096\u026c\3\2\2\2\u0098\u027b\3\2\2\2\u009a\u0288\3\2"+
		"\2\2\u009c\u028e\3\2\2\2\u009e\u0292\3\2\2\2\u00a0\u0297\3\2\2\2\u00a2"+
		"\u029c\3\2\2\2\u00a4\u00a5\t\2\2\2\u00a5\7\3\2\2\2\u00a6\u00a8\7\17\2"+
		"\2\u00a7\u00a6\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa"+
		"\7\f\2\2\u00aa\t\3\2\2\2\u00ab\u00ac\7e\2\2\u00ac\u00ad\7n\2\2\u00ad\u00ae"+
		"\7c\2\2\u00ae\u00af\7u\2\2\u00af\u00b0\7u\2\2\u00b0\13\3\2\2\2\u00b1\u00b2"+
		"\7e\2\2\u00b2\u00b3\7q\2\2\u00b3\u00b4\7p\2\2\u00b4\u00b5\7u\2\2\u00b5"+
		"\u00b6\7v\2\2\u00b6\r\3\2\2\2\u00b7\u00b8\7e\2\2\u00b8\u00b9\7q\2\2\u00b9"+
		"\u00ba\7p\2\2\u00ba\u00bb\7u\2\2\u00bb\u00bc\7v\2\2\u00bc\u00bd\7g\2\2"+
		"\u00bd\u00be\7z\2\2\u00be\u00bf\7r\2\2\u00bf\u00c0\7t\2\2\u00c0\17\3\2"+
		"\2\2\u00c1\u00c2\7g\2\2\u00c2\u00c3\7p\2\2\u00c3\u00c4\7w\2\2\u00c4\u00c5"+
		"\7o\2\2\u00c5\21\3\2\2\2\u00c6\u00c7\7h\2\2\u00c7\u00c8\7c\2\2\u00c8\u00c9"+
		"\7n\2\2\u00c9\u00ca\7u\2\2\u00ca\u00cb\7g\2\2\u00cb\23\3\2\2\2\u00cc\u00cd"+
		"\7H\2\2\u00cd\u00ce\7Q\2\2\u00ce\u00cf\7T\2\2\u00cf\u00d0\7E\2\2\u00d0"+
		"\u00d1\7G\2\2\u00d1\u00d2\7K\2\2\u00d2\u00d3\7P\2\2\u00d3\u00d4\7N\2\2"+
		"\u00d4\u00d5\7K\2\2\u00d5\u00d6\7P\2\2\u00d6\u00d7\7G\2\2\u00d7\25\3\2"+
		"\2\2\u00d8\u00d9\7h\2\2\u00d9\u00da\7t\2\2\u00da\u00db\7k\2\2\u00db\u00dc"+
		"\7g\2\2\u00dc\u00dd\7p\2\2\u00dd\u00de\7f\2\2\u00de\27\3\2\2\2\u00df\u00e0"+
		"\7k\2\2\u00e0\u00e1\7p\2\2\u00e1\u00e2\7n\2\2\u00e2\u00e3\7k\2\2\u00e3"+
		"\u00e4\7p\2\2\u00e4\u00e5\7g\2\2\u00e5\31\3\2\2\2\u00e6\u00e7\7o\2\2\u00e7"+
		"\u00e8\7w\2\2\u00e8\u00e9\7v\2\2\u00e9\u00ea\7c\2\2\u00ea\u00eb\7d\2\2"+
		"\u00eb\u00ec\7n\2\2\u00ec\u00ed\7g\2\2\u00ed\33\3\2\2\2\u00ee\u00ef\7"+
		"p\2\2\u00ef\u00f0\7c\2\2\u00f0\u00f1\7o\2\2\u00f1\u00f2\7g\2\2\u00f2\u00f3"+
		"\7u\2\2\u00f3\u00f4\7r\2\2\u00f4\u00f5\7c\2\2\u00f5\u00f6\7e\2\2\u00f6"+
		"\u00f7\7g\2\2\u00f7\35\3\2\2\2\u00f8\u00f9\7q\2\2\u00f9\u00fa\7r\2\2\u00fa"+
		"\u00fb\7g\2\2\u00fb\u00fc\7t\2\2\u00fc\u00fd\7c\2\2\u00fd\u00fe\7v\2\2"+
		"\u00fe\u00ff\7q\2\2\u00ff\u0100\7t\2\2\u0100\37\3\2\2\2\u0101\u0102\7"+
		"q\2\2\u0102\u0103\7x\2\2\u0103\u0104\7g\2\2\u0104\u0105\7t\2\2\u0105\u0106"+
		"\7t\2\2\u0106\u0107\7k\2\2\u0107\u0108\7f\2\2\u0108\u0109\7g\2\2\u0109"+
		"!\3\2\2\2\u010a\u010b\7r\2\2\u010b\u010c\7t\2\2\u010c\u010d\7k\2\2\u010d"+
		"\u010e\7x\2\2\u010e\u010f\7c\2\2\u010f\u0110\7v\2\2\u0110\u0111\7g\2\2"+
		"\u0111#\3\2\2\2\u0112\u0113\7r\2\2\u0113\u0114\7t\2\2\u0114\u0115\7q\2"+
		"\2\u0115\u0116\7v\2\2\u0116\u0117\7g\2\2\u0117\u0118\7e\2\2\u0118\u0119"+
		"\7v\2\2\u0119\u011a\7g\2\2\u011a\u011b\7f\2\2\u011b%\3\2\2\2\u011c\u011d"+
		"\7r\2\2\u011d\u011e\7w\2\2\u011e\u011f\7d\2\2\u011f\u0120\7n\2\2\u0120"+
		"\u0121\7k\2\2\u0121\u0122\7e\2\2\u0122\'\3\2\2\2\u0123\u0124\7u\2\2\u0124"+
		"\u0125\7v\2\2\u0125\u0126\7c\2\2\u0126\u0127\7v\2\2\u0127\u0128\7k\2\2"+
		"\u0128\u0129\7e\2\2\u0129)\3\2\2\2\u012a\u012b\7u\2\2\u012b\u012c\7v\2"+
		"\2\u012c\u012d\7t\2\2\u012d\u012e\7w\2\2\u012e\u012f\7e\2\2\u012f\u0130"+
		"\7v\2\2\u0130+\3\2\2\2\u0131\u0132\7v\2\2\u0132\u0133\7g\2\2\u0133\u0134"+
		"\7o\2\2\u0134\u0135\7r\2\2\u0135\u0136\7n\2\2\u0136\u0137\7c\2\2\u0137"+
		"\u0138\7v\2\2\u0138\u0139\7g\2\2\u0139-\3\2\2\2\u013a\u013b\7v\2\2\u013b"+
		"\u013c\7t\2\2\u013c\u013d\7w\2\2\u013d\u013e\7g\2\2\u013e/\3\2\2\2\u013f"+
		"\u0140\7v\2\2\u0140\u0141\7{\2\2\u0141\u0142\7r\2\2\u0142\u0143\7g\2\2"+
		"\u0143\u0144\7f\2\2\u0144\u0145\7g\2\2\u0145\u0146\7h\2\2\u0146\61\3\2"+
		"\2\2\u0147\u0148\7v\2\2\u0148\u0149\7{\2\2\u0149\u014a\7r\2\2\u014a\u014b"+
		"\7g\2\2\u014b\u014c\7p\2\2\u014c\u014d\7c\2\2\u014d\u014e\7o\2\2\u014e"+
		"\u014f\7g\2\2\u014f\63\3\2\2\2\u0150\u0151\7w\2\2\u0151\u0152\7u\2\2\u0152"+
		"\u0153\7k\2\2\u0153\u0154\7p\2\2\u0154\u0155\7i\2\2\u0155\65\3\2\2\2\u0156"+
		"\u0157\7x\2\2\u0157\u0158\7k\2\2\u0158\u0159\7t\2\2\u0159\u015a\7v\2\2"+
		"\u015a\u015b\7w\2\2\u015b\u015c\7c\2\2\u015c\u015d\7n\2\2\u015d\67\3\2"+
		"\2\2\u015e\u015f\7W\2\2\u015f\u0160\7E\2\2\u0160\u0161\7N\2\2\u0161\u0162"+
		"\7C\2\2\u0162\u0163\7U\2\2\u0163\u0164\7U\2\2\u01649\3\2\2\2\u0165\u0166"+
		"\7W\2\2\u0166\u0167\7G\2\2\u0167\u0168\7P\2\2\u0168\u0169\7W\2\2\u0169"+
		"\u016a\7O\2\2\u016a;\3\2\2\2\u016b\u016c\7W\2\2\u016c\u016d\7H\2\2\u016d"+
		"\u016e\7W\2\2\u016e\u016f\7P\2\2\u016f\u0170\7E\2\2\u0170\u0171\7V\2\2"+
		"\u0171\u0172\7K\2\2\u0172\u0173\7Q\2\2\u0173\u0174\7P\2\2\u0174=\3\2\2"+
		"\2\u0175\u0176\7W\2\2\u0176\u0177\7K\2\2\u0177\u0178\7P\2\2\u0178\u0179"+
		"\7V\2\2\u0179\u017a\7G\2\2\u017a\u017b\7T\2\2\u017b\u017c\7H\2\2\u017c"+
		"\u017d\7C\2\2\u017d\u017e\7E\2\2\u017e\u017f\7G\2\2\u017f?\3\2\2\2\u0180"+
		"\u0181\7W\2\2\u0181\u0182\7O\2\2\u0182\u0183\7G\2\2\u0183\u0184\7V\2\2"+
		"\u0184\u0185\7C\2\2\u0185A\3\2\2\2\u0186\u0187\7W\2\2\u0187\u0188\7R\2"+
		"\2\u0188\u0189\7C\2\2\u0189\u018a\7T\2\2\u018a\u018b\7C\2\2\u018b\u018c"+
		"\7O\2\2\u018cC\3\2\2\2\u018d\u018e\7W\2\2\u018e\u018f\7R\2\2\u018f\u0190"+
		"\7T\2\2\u0190\u0191\7Q\2\2\u0191\u0192\7R\2\2\u0192\u0193\7G\2\2\u0193"+
		"\u0194\7T\2\2\u0194\u0195\7V\2\2\u0195\u0196\7[\2\2\u0196E\3\2\2\2\u0197"+
		"\u0198\7W\2\2\u0198\u0199\7U\2\2\u0199\u019a\7V\2\2\u019a\u019b\7T\2\2"+
		"\u019b\u019c\7W\2\2\u019c\u019d\7E\2\2\u019d\u019e\7V\2\2\u019eG\3\2\2"+
		"\2\u019f\u01a0\7W\2\2\u01a0\u01a1\7G\2\2\u01a1\u01a2\7a\2\2\u01a2\u01a3"+
		"\7F\2\2\u01a3\u01a4\7G\2\2\u01a4\u01a5\7R\2\2\u01a5\u01a6\7T\2\2\u01a6"+
		"\u01a7\7G\2\2\u01a7\u01a8\7E\2\2\u01a8\u01a9\7C\2\2\u01a9\u01aa\7V\2\2"+
		"\u01aa\u01ab\7G\2\2\u01ab\u01ac\7F\2\2\u01acI\3\2\2\2\u01ad\u01ae\7U\2"+
		"\2\u01ae\u01af\7V\2\2\u01af\u01b0\7C\2\2\u01b0\u01b1\7V\2\2\u01b1K\3\2"+
		"\2\2\u01b2\u01b3\7H\2\2\u01b3\u01b4\7C\2\2\u01b4\u01b5\7E\2\2\u01b5\u01b6"+
		"\7V\2\2\u01b6\u01b7\7Q\2\2\u01b7\u01b8\7T\2\2\u01b8\u01b9\7[\2\2\u01b9"+
		"\u01ba\7I\2\2\u01ba\u01bb\7C\2\2\u01bb\u01bc\7O\2\2\u01bc\u01bd\7G\2\2"+
		"\u01bd\u01be\7a\2\2\u01be\u01bf\7C\2\2\u01bf\u01c0\7R\2\2\u01c0\u01c1"+
		"\7K\2\2\u01c1M\3\2\2\2\u01c2\u01c3\7I\2\2\u01c3\u01c4\7G\2\2\u01c4\u01c5"+
		"\7P\2\2\u01c5\u01c6\7G\2\2\u01c6\u01c7\7T\2\2\u01c7\u01c8\7C\2\2\u01c8"+
		"\u01c9\7V\2\2\u01c9\u01ca\7G\2\2\u01ca\u01cb\7F\2\2\u01cb\u01cc\7a\2\2"+
		"\u01cc\u01d0\3\2\2\2\u01cd\u01cf\t\3\2\2\u01ce\u01cd\3\2\2\2\u01cf\u01d2"+
		"\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d3\3\2\2\2\u01d2"+
		"\u01d0\3\2\2\2\u01d3\u01d4\7D\2\2\u01d4\u01d5\7Q\2\2\u01d5\u01d6\7F\2"+
		"\2\u01d6\u01d7\7[\2\2\u01d7O\3\2\2\2\u01d8\u01d9\7(\2\2\u01d9Q\3\2\2\2"+
		"\u01da\u01db\7\61\2\2\u01dbS\3\2\2\2\u01dc\u01dd\7#\2\2\u01ddU\3\2\2\2"+
		"\u01de\u01df\7@\2\2\u01dfW\3\2\2\2\u01e0\u01e1\7\177\2\2\u01e1Y\3\2\2"+
		"\2\u01e2\u01e3\7+\2\2\u01e3[\3\2\2\2\u01e4\u01e5\7_\2\2\u01e5]\3\2\2\2"+
		"\u01e6\u01e7\7<\2\2\u01e7_\3\2\2\2\u01e8\u01e9\7.\2\2\u01e9a\3\2\2\2\u01ea"+
		"\u01eb\7?\2\2\u01ebc\3\2\2\2\u01ec\u01ed\7/\2\2\u01ede\3\2\2\2\u01ee\u01ef"+
		"\7>\2\2\u01efg\3\2\2\2\u01f0\u01f1\7}\2\2\u01f1i\3\2\2\2\u01f2\u01f3\7"+
		"*\2\2\u01f3k\3\2\2\2\u01f4\u01f5\7]\2\2\u01f5m\3\2\2\2\u01f6\u01f7\7\'"+
		"\2\2\u01f7o\3\2\2\2\u01f8\u01f9\7\60\2\2\u01f9q\3\2\2\2\u01fa\u01fb\7"+
		"~\2\2\u01fbs\3\2\2\2\u01fc\u01fd\7-\2\2\u01fdu\3\2\2\2\u01fe\u01ff\7A"+
		"\2\2\u01ffw\3\2\2\2\u0200\u0201\7=\2\2\u0201y\3\2\2\2\u0202\u0203\7^\2"+
		"\2\u0203{\3\2\2\2\u0204\u0205\7,\2\2\u0205}\3\2\2\2\u0206\u0207\7\u0080"+
		"\2\2\u0207\177\3\2\2\2\u0208\u020c\t\4\2\2\u0209\u020b\t\5\2\2\u020a\u0209"+
		"\3\2\2\2\u020b\u020e\3\2\2\2\u020c\u020a\3\2\2\2\u020c\u020d\3\2\2\2\u020d"+
		"\u0081\3\2\2\2\u020e\u020c\3\2\2\2\u020f\u0213\7$\2\2\u0210\u0212\13\2"+
		"\2\2\u0211\u0210\3\2\2\2\u0212\u0215\3\2\2\2\u0213\u0214\3\2\2\2\u0213"+
		"\u0211\3\2\2\2\u0214\u0216\3\2\2\2\u0215\u0213\3\2\2\2\u0216\u0217\7$"+
		"\2\2\u0217\u0083\3\2\2\2\u0218\u021a\7/\2\2\u0219\u0218\3\2\2\2\u0219"+
		"\u021a\3\2\2\2\u021a\u021c\3\2\2\2\u021b\u021d\t\6\2\2\u021c\u021b\3\2"+
		"\2\2\u021d\u021e\3\2\2\2\u021e\u021c\3\2\2\2\u021e\u021f\3\2\2\2\u021f"+
		"\u0220\3\2\2\2\u0220\u0224\7\60\2\2\u0221\u0223\t\6\2\2\u0222\u0221\3"+
		"\2\2\2\u0223\u0226\3\2\2\2\u0224\u0222\3\2\2\2\u0224\u0225\3\2\2\2\u0225"+
		"\u0228\3\2\2\2\u0226\u0224\3\2\2\2\u0227\u0229\7h\2\2\u0228\u0227\3\2"+
		"\2\2\u0228\u0229\3\2\2\2\u0229\u0085\3\2\2\2\u022a\u022c\7/\2\2\u022b"+
		"\u022a\3\2\2\2\u022b\u022c\3\2\2\2\u022c\u022e\3\2\2\2\u022d\u022f\t\6"+
		"\2\2\u022e\u022d\3\2\2\2\u022f\u0230\3\2\2\2\u0230\u022e\3\2\2\2\u0230"+
		"\u0231\3\2\2\2\u0231\u0087\3\2\2\2\u0232\u0233\7%\2\2\u0233\u0234\3\2"+
		"\2\2\u0234\u0235\bC\2\2\u0235\u0236\bC\3\2\u0236\u0089\3\2\2\2\u0237\u0238"+
		"\7\61\2\2\u0238\u0239\7\61\2\2\u0239\u023b\3\2\2\2\u023a\u023c\5\6\2\2"+
		"\u023b\u023a\3\2\2\2\u023b\u023c\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023e"+
		"\bD\2\2\u023e\u023f\bD\4\2\u023f\u008b\3\2\2\2\u0240\u0241\7\61\2\2\u0241"+
		"\u0242\7,\2\2\u0242\u0246\3\2\2\2\u0243\u0245\7,\2\2\u0244\u0243\3\2\2"+
		"\2\u0245\u0248\3\2\2\2\u0246\u0244\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u024a"+
		"\3\2\2\2\u0248\u0246\3\2\2\2\u0249\u024b\5\6\2\2\u024a\u0249\3\2\2\2\u024a"+
		"\u024b\3\2\2\2\u024b\u024c\3\2\2\2\u024c\u024d\bE\2\2\u024d\u024e\bE\5"+
		"\2\u024e\u008d\3\2\2\2\u024f\u0251\t\7\2\2\u0250\u024f\3\2\2\2\u0251\u0252"+
		"\3\2\2\2\u0252\u0250\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0254\3\2\2\2\u0254"+
		"\u0255\bF\2\2\u0255\u008f\3\2\2\2\u0256\u0258\5\6\2\2\u0257\u0256\3\2"+
		"\2\2\u0257\u0258\3\2\2\2\u0258\u0259\3\2\2\2\u0259\u025a\5\b\3\2\u025a"+
		"\u025b\3\2\2\2\u025b\u025c\bG\2\2\u025c\u025d\bG\6\2\u025d\u0091\3\2\2"+
		"\2\u025e\u0260\n\b\2\2\u025f\u025e\3\2\2\2\u0260\u0261\3\2\2\2\u0261\u025f"+
		"\3\2\2\2\u0261\u0262\3\2\2\2\u0262\u0263\3\2\2\2\u0263\u0264\bH\7\2\u0264"+
		"\u0093\3\2\2\2\u0265\u0266\13\2\2\2\u0266\u0267\3\2\2\2\u0267\u0268\b"+
		"I\2\2\u0268\u0095\3\2\2\2\u0269\u026b\5\6\2\2\u026a\u0269\3\2\2\2\u026b"+
		"\u026e\3\2\2\2\u026c\u026a\3\2\2\2\u026c\u026d\3\2\2\2\u026d\u0272\3\2"+
		"\2\2\u026e\u026c\3\2\2\2\u026f\u0271\7,\2\2\u0270\u026f\3\2\2\2\u0271"+
		"\u0274\3\2\2\2\u0272\u0270\3\2\2\2\u0272\u0273\3\2\2\2\u0273\u0275\3\2"+
		"\2\2\u0274\u0272\3\2\2\2\u0275\u0276\7,\2\2\u0276\u0277\7\61\2\2\u0277"+
		"\u0278\3\2\2\2\u0278\u0279\bJ\2\2\u0279\u027a\bJ\6\2\u027a\u0097\3\2\2"+
		"\2\u027b\u027f\5\b\3\2\u027c\u027e\5\6\2\2\u027d\u027c\3\2\2\2\u027e\u0281"+
		"\3\2\2\2\u027f\u027d\3\2\2\2\u027f\u0280\3\2\2\2\u0280\u0282\3\2\2\2\u0281"+
		"\u027f\3\2\2\2\u0282\u0283\7,\2\2\u0283\u0284\n\t\2\2\u0284\u0285\3\2"+
		"\2\2\u0285\u0286\bK\2\2\u0286\u0099\3\2\2\2\u0287\u0289\n\n\2\2\u0288"+
		"\u0287\3\2\2\2\u0289\u028a\3\2\2\2\u028a\u0288\3\2\2\2\u028a\u028b\3\2"+
		"\2\2\u028b\u028c\3\2\2\2\u028c\u028d\bL\7\2\u028d\u009b\3\2\2\2\u028e"+
		"\u028f\13\2\2\2\u028f\u0290\3\2\2\2\u0290\u0291\bM\2\2\u0291\u009d\3\2"+
		"\2\2\u0292\u0293\7^\2\2\u0293\u0294\7\f\2\2\u0294\u0295\3\2\2\2\u0295"+
		"\u0296\bN\2\2\u0296\u009f\3\2\2\2\u0297\u0298\7\f\2\2\u0298\u0299\3\2"+
		"\2\2\u0299\u029a\bO\2\2\u029a\u029b\bO\6\2\u029b\u00a1\3\2\2\2\u029c\u029d"+
		"\13\2\2\2\u029d\u029e\3\2\2\2\u029e\u029f\bP\2\2\u029f\u00a3\3\2\2\2\32"+
		"\2\3\4\5\u00a7\u01d0\u020c\u0213\u0219\u021e\u0224\u0228\u022b\u0230\u023b"+
		"\u0246\u024a\u0252\u0257\u0261\u026c\u0272\u027f\u028a\b\b\2\2\7\5\2\7"+
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