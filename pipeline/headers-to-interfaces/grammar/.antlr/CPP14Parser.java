// Generated from /Users/ianm/code/ficsit/data-engineering/pipeline/headers-to-interfaces/grammar/CPP14.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CPP14Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, MultiLineMacro=14, Directive=15, 
		Alignas=16, Alignof=17, Asm=18, Auto=19, Bool=20, Break=21, Case=22, Catch=23, 
		Char=24, Char16=25, Char32=26, Class=27, Const=28, Constexpr=29, Const_cast=30, 
		Continue=31, Decltype=32, Default=33, Delete=34, Do=35, Double=36, Dynamic_cast=37, 
		Else=38, Enum=39, Explicit=40, Export=41, Extern=42, False=43, Final=44, 
		Float=45, For=46, Friend=47, Goto=48, If=49, Inline=50, Int=51, Long=52, 
		Mutable=53, Namespace=54, New=55, Noexcept=56, Nullptr=57, Operator=58, 
		Override=59, Private=60, Protected=61, Public=62, Register=63, Reinterpret_cast=64, 
		Return=65, Short=66, Signed=67, Sizeof=68, Static=69, Static_assert=70, 
		Static_cast=71, Struct=72, Switch=73, Template=74, This=75, Thread_local=76, 
		Throw=77, True=78, Try=79, Typedef=80, Typeid_=81, Typename_=82, Union=83, 
		Unsigned=84, Using=85, Virtual=86, Void=87, Volatile=88, Wchar=89, While=90, 
		LeftParen=91, RightParen=92, LeftBracket=93, RightBracket=94, LeftBrace=95, 
		RightBrace=96, Plus=97, Minus=98, Star=99, Div=100, Mod=101, Caret=102, 
		And=103, Or=104, Tilde=105, Not=106, Assign=107, Less=108, Greater=109, 
		PlusAssign=110, MinusAssign=111, StarAssign=112, DivAssign=113, ModAssign=114, 
		XorAssign=115, AndAssign=116, OrAssign=117, LeftShift=118, RightShift=119, 
		LeftShiftAssign=120, RightShiftAssign=121, Equal=122, NotEqual=123, LessEqual=124, 
		GreaterEqual=125, AndAnd=126, OrOr=127, PlusPlus=128, MinusMinus=129, 
		Comma=130, ArrowStar=131, Arrow=132, Question=133, Colon=134, Doublecolon=135, 
		Semi=136, Dot=137, DotStar=138, Ellipsis=139, Identifier=140, Integerliteral=141, 
		Decimalliteral=142, Octalliteral=143, Hexadecimalliteral=144, Binaryliteral=145, 
		Integersuffix=146, Characterliteral=147, Floatingliteral=148, Stringliteral=149, 
		Userdefinedintegerliteral=150, Userdefinedfloatingliteral=151, Userdefinedstringliteral=152, 
		Userdefinedcharacterliteral=153, Whitespace=154, Newline=155, BlockComment=156, 
		LineComment=157;
	public static final int
		RULE_gameapitag = 0, RULE_uclass = 1, RULE_ufunction = 2, RULE_uproperty = 3, 
		RULE_uparam = 4, RULE_generatedbody = 5, RULE_ueannotationlist = 6, RULE_ueannotationlistentries = 7, 
		RULE_ueannotation = 8, RULE_ueannotationvalue = 9, RULE_ueannotationname = 10, 
		RULE_uekeyvalueannotation = 11, RULE_translationunit = 12, RULE_primaryexpression = 13, 
		RULE_idexpression = 14, RULE_unqualifiedid = 15, RULE_qualifiedid = 16, 
		RULE_nestednamespecifier = 17, RULE_lambdaexpression = 18, RULE_lambdaintroducer = 19, 
		RULE_lambdacapture = 20, RULE_capturedefault = 21, RULE_capturelist = 22, 
		RULE_capture = 23, RULE_simplecapture = 24, RULE_initcapture = 25, RULE_lambdadeclarator = 26, 
		RULE_postfixexpression = 27, RULE_typeidofexpr = 28, RULE_typeidofthetypeid = 29, 
		RULE_expressionlist = 30, RULE_pseudodestructorname = 31, RULE_unaryexpression = 32, 
		RULE_unaryoperator = 33, RULE_newexpression = 34, RULE_newplacement = 35, 
		RULE_newtypeid = 36, RULE_newdeclarator = 37, RULE_noptrnewdeclarator = 38, 
		RULE_newinitializer = 39, RULE_deleteexpression = 40, RULE_noexceptexpression = 41, 
		RULE_castexpression = 42, RULE_pmexpression = 43, RULE_multiplicativeexpression = 44, 
		RULE_additiveexpression = 45, RULE_shiftexpression = 46, RULE_shiftoperator = 47, 
		RULE_relationalexpression = 48, RULE_equalityexpression = 49, RULE_andexpression = 50, 
		RULE_exclusiveorexpression = 51, RULE_inclusiveorexpression = 52, RULE_logicalandexpression = 53, 
		RULE_logicalorexpression = 54, RULE_conditionalexpression = 55, RULE_assignmentexpression = 56, 
		RULE_assignmentoperator = 57, RULE_expression = 58, RULE_constantexpression = 59, 
		RULE_statement = 60, RULE_labeledstatement = 61, RULE_expressionstatement = 62, 
		RULE_compoundstatement = 63, RULE_statementseq = 64, RULE_selectionstatement = 65, 
		RULE_condition = 66, RULE_iterationstatement = 67, RULE_forinitstatement = 68, 
		RULE_forrangedeclaration = 69, RULE_forrangeinitializer = 70, RULE_jumpstatement = 71, 
		RULE_declarationstatement = 72, RULE_declarationseq = 73, RULE_declaration = 74, 
		RULE_blockdeclaration = 75, RULE_aliasdeclaration = 76, RULE_simpledeclaration = 77, 
		RULE_static_assertdeclaration = 78, RULE_emptydeclaration = 79, RULE_attributedeclaration = 80, 
		RULE_declspecifier = 81, RULE_declspecifierseq = 82, RULE_storageclassspecifier = 83, 
		RULE_functionspecifier = 84, RULE_typedefname = 85, RULE_typespecifier = 86, 
		RULE_trailingtypespecifier = 87, RULE_typespecifierseq = 88, RULE_trailingtypespecifierseq = 89, 
		RULE_simpletypespecifier = 90, RULE_thetypename = 91, RULE_decltypespecifier = 92, 
		RULE_elaboratedtypespecifier = 93, RULE_enumname = 94, RULE_enumspecifier = 95, 
		RULE_enumhead = 96, RULE_opaqueenumdeclaration = 97, RULE_enumkey = 98, 
		RULE_enumbase = 99, RULE_enumeratorlist = 100, RULE_enumeratordefinition = 101, 
		RULE_enumerator = 102, RULE_namespacename = 103, RULE_originalnamespacename = 104, 
		RULE_namespacedefinition = 105, RULE_namednamespacedefinition = 106, RULE_originalnamespacedefinition = 107, 
		RULE_extensionnamespacedefinition = 108, RULE_unnamednamespacedefinition = 109, 
		RULE_namespacebody = 110, RULE_namespacealias = 111, RULE_namespacealiasdefinition = 112, 
		RULE_qualifiednamespacespecifier = 113, RULE_usingdeclaration = 114, RULE_usingdirective = 115, 
		RULE_asmdefinition = 116, RULE_linkagespecification = 117, RULE_attributespecifierseq = 118, 
		RULE_attributespecifier = 119, RULE_alignmentspecifier = 120, RULE_attributelist = 121, 
		RULE_attribute = 122, RULE_attributetoken = 123, RULE_attributescopedtoken = 124, 
		RULE_attributenamespace = 125, RULE_attributeargumentclause = 126, RULE_balancedtokenseq = 127, 
		RULE_balancedtoken = 128, RULE_initdeclaratorlist = 129, RULE_initdeclarator = 130, 
		RULE_declarator = 131, RULE_ptrdeclarator = 132, RULE_noptrdeclarator = 133, 
		RULE_parametersandqualifiers = 134, RULE_trailingreturntype = 135, RULE_ptroperator = 136, 
		RULE_cvqualifierseq = 137, RULE_cvqualifier = 138, RULE_refqualifier = 139, 
		RULE_declaratorid = 140, RULE_thetypeid = 141, RULE_abstractdeclarator = 142, 
		RULE_ptrabstractdeclarator = 143, RULE_noptrabstractdeclarator = 144, 
		RULE_abstractpackdeclarator = 145, RULE_noptrabstractpackdeclarator = 146, 
		RULE_parameterdeclarationclause = 147, RULE_parameterdeclarationlist = 148, 
		RULE_parameterdeclaration = 149, RULE_functiondefinition = 150, RULE_functionbody = 151, 
		RULE_initializer = 152, RULE_braceorequalinitializer = 153, RULE_initializerclause = 154, 
		RULE_initializerlist = 155, RULE_bracedinitlist = 156, RULE_classname = 157, 
		RULE_classspecifier = 158, RULE_classhead = 159, RULE_classheadname = 160, 
		RULE_classvirtspecifier = 161, RULE_classkey = 162, RULE_memberspecification = 163, 
		RULE_memberdeclaration = 164, RULE_memberdeclaratorlist = 165, RULE_memberdeclarator = 166, 
		RULE_virtspecifierseq = 167, RULE_virtspecifier = 168, RULE_purespecifier = 169, 
		RULE_baseclause = 170, RULE_basespecifierlist = 171, RULE_basespecifier = 172, 
		RULE_classordecltype = 173, RULE_basetypespecifier = 174, RULE_accessspecifier = 175, 
		RULE_conversionfunctionid = 176, RULE_conversiontypeid = 177, RULE_conversiondeclarator = 178, 
		RULE_ctorinitializer = 179, RULE_meminitializerlist = 180, RULE_meminitializer = 181, 
		RULE_meminitializerid = 182, RULE_operatorfunctionid = 183, RULE_literaloperatorid = 184, 
		RULE_templatedeclaration = 185, RULE_templateparameterlist = 186, RULE_templateparameter = 187, 
		RULE_typeparameter = 188, RULE_simpletemplateid = 189, RULE_templateid = 190, 
		RULE_templatename = 191, RULE_templateargumentlist = 192, RULE_templateargument = 193, 
		RULE_typenamespecifier = 194, RULE_explicitinstantiation = 195, RULE_explicitspecialization = 196, 
		RULE_tryblock = 197, RULE_functiontryblock = 198, RULE_handlerseq = 199, 
		RULE_handler = 200, RULE_exceptiondeclaration = 201, RULE_throwexpression = 202, 
		RULE_exceptionspecification = 203, RULE_dynamicexceptionspecification = 204, 
		RULE_typeidlist = 205, RULE_noexceptspecification = 206, RULE_theoperator = 207, 
		RULE_literal = 208, RULE_booleanliteral = 209, RULE_pointerliteral = 210, 
		RULE_userdefinedliteral = 211;
	public static final String[] ruleNames = {
		"gameapitag", "uclass", "ufunction", "uproperty", "uparam", "generatedbody", 
		"ueannotationlist", "ueannotationlistentries", "ueannotation", "ueannotationvalue", 
		"ueannotationname", "uekeyvalueannotation", "translationunit", "primaryexpression", 
		"idexpression", "unqualifiedid", "qualifiedid", "nestednamespecifier", 
		"lambdaexpression", "lambdaintroducer", "lambdacapture", "capturedefault", 
		"capturelist", "capture", "simplecapture", "initcapture", "lambdadeclarator", 
		"postfixexpression", "typeidofexpr", "typeidofthetypeid", "expressionlist", 
		"pseudodestructorname", "unaryexpression", "unaryoperator", "newexpression", 
		"newplacement", "newtypeid", "newdeclarator", "noptrnewdeclarator", "newinitializer", 
		"deleteexpression", "noexceptexpression", "castexpression", "pmexpression", 
		"multiplicativeexpression", "additiveexpression", "shiftexpression", "shiftoperator", 
		"relationalexpression", "equalityexpression", "andexpression", "exclusiveorexpression", 
		"inclusiveorexpression", "logicalandexpression", "logicalorexpression", 
		"conditionalexpression", "assignmentexpression", "assignmentoperator", 
		"expression", "constantexpression", "statement", "labeledstatement", "expressionstatement", 
		"compoundstatement", "statementseq", "selectionstatement", "condition", 
		"iterationstatement", "forinitstatement", "forrangedeclaration", "forrangeinitializer", 
		"jumpstatement", "declarationstatement", "declarationseq", "declaration", 
		"blockdeclaration", "aliasdeclaration", "simpledeclaration", "static_assertdeclaration", 
		"emptydeclaration", "attributedeclaration", "declspecifier", "declspecifierseq", 
		"storageclassspecifier", "functionspecifier", "typedefname", "typespecifier", 
		"trailingtypespecifier", "typespecifierseq", "trailingtypespecifierseq", 
		"simpletypespecifier", "thetypename", "decltypespecifier", "elaboratedtypespecifier", 
		"enumname", "enumspecifier", "enumhead", "opaqueenumdeclaration", "enumkey", 
		"enumbase", "enumeratorlist", "enumeratordefinition", "enumerator", "namespacename", 
		"originalnamespacename", "namespacedefinition", "namednamespacedefinition", 
		"originalnamespacedefinition", "extensionnamespacedefinition", "unnamednamespacedefinition", 
		"namespacebody", "namespacealias", "namespacealiasdefinition", "qualifiednamespacespecifier", 
		"usingdeclaration", "usingdirective", "asmdefinition", "linkagespecification", 
		"attributespecifierseq", "attributespecifier", "alignmentspecifier", "attributelist", 
		"attribute", "attributetoken", "attributescopedtoken", "attributenamespace", 
		"attributeargumentclause", "balancedtokenseq", "balancedtoken", "initdeclaratorlist", 
		"initdeclarator", "declarator", "ptrdeclarator", "noptrdeclarator", "parametersandqualifiers", 
		"trailingreturntype", "ptroperator", "cvqualifierseq", "cvqualifier", 
		"refqualifier", "declaratorid", "thetypeid", "abstractdeclarator", "ptrabstractdeclarator", 
		"noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator", 
		"parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration", 
		"functiondefinition", "functionbody", "initializer", "braceorequalinitializer", 
		"initializerclause", "initializerlist", "bracedinitlist", "classname", 
		"classspecifier", "classhead", "classheadname", "classvirtspecifier", 
		"classkey", "memberspecification", "memberdeclaration", "memberdeclaratorlist", 
		"memberdeclarator", "virtspecifierseq", "virtspecifier", "purespecifier", 
		"baseclause", "basespecifierlist", "basespecifier", "classordecltype", 
		"basetypespecifier", "accessspecifier", "conversionfunctionid", "conversiontypeid", 
		"conversiondeclarator", "ctorinitializer", "meminitializerlist", "meminitializer", 
		"meminitializerid", "operatorfunctionid", "literaloperatorid", "templatedeclaration", 
		"templateparameterlist", "templateparameter", "typeparameter", "simpletemplateid", 
		"templateid", "templatename", "templateargumentlist", "templateargument", 
		"typenamespecifier", "explicitinstantiation", "explicitspecialization", 
		"tryblock", "functiontryblock", "handlerseq", "handler", "exceptiondeclaration", 
		"throwexpression", "exceptionspecification", "dynamicexceptionspecification", 
		"typeidlist", "noexceptspecification", "theoperator", "literal", "booleanliteral", 
		"pointerliteral", "userdefinedliteral"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'FACTORYGAME_API'", "'UCLASS'", "'UFUNCTION'", "'UPROPERTY'", "'UPARAM'", 
		"'GENERATED_BODY'", "'!'", "'not'", "'&&'", "'and'", "'||'", "'or'", "'0'", 
		null, null, "'alignas'", "'alignof'", "'asm'", "'auto'", "'bool'", "'break'", 
		"'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'", "'class'", 
		"'const'", "'constexpr'", "'const_cast'", "'continue'", "'decltype'", 
		"'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", "'else'", 
		"'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", null, "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='", 
		"'^='", "'&='", "'|='", "'<<'", "'>>'", "'<<='", "'>>='", "'=='", "'!='", 
		"'<='", "'>='", null, null, "'++'", "'--'", "','", "'->*'", "'->'", "'?'", 
		"':'", "'::'", "';'", "'.'", "'.*'", "'...'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, "MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm", 
		"Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", "Char32", 
		"Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype", "Default", 
		"Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum", "Explicit", 
		"Export", "Extern", "False", "Final", "Float", "For", "Friend", "Goto", 
		"If", "Inline", "Int", "Long", "Mutable", "Namespace", "New", "Noexcept", 
		"Nullptr", "Operator", "Override", "Private", "Protected", "Public", "Register", 
		"Reinterpret_cast", "Return", "Short", "Signed", "Sizeof", "Static", "Static_assert", 
		"Static_cast", "Struct", "Switch", "Template", "This", "Thread_local", 
		"Throw", "True", "Try", "Typedef", "Typeid_", "Typename_", "Union", "Unsigned", 
		"Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", 
		"RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace", 
		"Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", 
		"Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign", 
		"DivAssign", "ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShift", 
		"RightShift", "LeftShiftAssign", "RightShiftAssign", "Equal", "NotEqual", 
		"LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", "MinusMinus", 
		"Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon", "Semi", 
		"Dot", "DotStar", "Ellipsis", "Identifier", "Integerliteral", "Decimalliteral", 
		"Octalliteral", "Hexadecimalliteral", "Binaryliteral", "Integersuffix", 
		"Characterliteral", "Floatingliteral", "Stringliteral", "Userdefinedintegerliteral", 
		"Userdefinedfloatingliteral", "Userdefinedstringliteral", "Userdefinedcharacterliteral", 
		"Whitespace", "Newline", "BlockComment", "LineComment"
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

	@Override
	public String getGrammarFileName() { return "CPP14.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CPP14Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class GameapitagContext extends ParserRuleContext {
		public GameapitagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gameapitag; }
	}

	public final GameapitagContext gameapitag() throws RecognitionException {
		GameapitagContext _localctx = new GameapitagContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_gameapitag);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(424);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UclassContext extends ParserRuleContext {
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public UclassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uclass; }
	}

	public final UclassContext uclass() throws RecognitionException {
		UclassContext _localctx = new UclassContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_uclass);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(T__1);
			setState(427);
			ueannotationlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UfunctionContext extends ParserRuleContext {
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public UfunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ufunction; }
	}

	public final UfunctionContext ufunction() throws RecognitionException {
		UfunctionContext _localctx = new UfunctionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_ufunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(429);
			match(T__2);
			setState(430);
			ueannotationlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpropertyContext extends ParserRuleContext {
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public UpropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uproperty; }
	}

	public final UpropertyContext uproperty() throws RecognitionException {
		UpropertyContext _localctx = new UpropertyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_uproperty);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			match(T__3);
			setState(433);
			ueannotationlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UparamContext extends ParserRuleContext {
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public UparamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uparam; }
	}

	public final UparamContext uparam() throws RecognitionException {
		UparamContext _localctx = new UparamContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_uparam);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(435);
			match(T__4);
			setState(436);
			ueannotationlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GeneratedbodyContext extends ParserRuleContext {
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public GeneratedbodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_generatedbody; }
	}

	public final GeneratedbodyContext generatedbody() throws RecognitionException {
		GeneratedbodyContext _localctx = new GeneratedbodyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_generatedbody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			match(T__5);
			setState(439);
			ueannotationlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UeannotationlistContext extends ParserRuleContext {
		public UeannotationlistentriesContext ueannotationlistentries() {
			return getRuleContext(UeannotationlistentriesContext.class,0);
		}
		public UeannotationlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ueannotationlist; }
	}

	public final UeannotationlistContext ueannotationlist() throws RecognitionException {
		UeannotationlistContext _localctx = new UeannotationlistContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_ueannotationlist);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			match(LeftParen);
			setState(443);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(442);
				ueannotationlistentries(0);
				}
			}

			setState(445);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UeannotationlistentriesContext extends ParserRuleContext {
		public UeannotationContext ueannotation() {
			return getRuleContext(UeannotationContext.class,0);
		}
		public UeannotationlistentriesContext ueannotationlistentries() {
			return getRuleContext(UeannotationlistentriesContext.class,0);
		}
		public UeannotationlistentriesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ueannotationlistentries; }
	}

	public final UeannotationlistentriesContext ueannotationlistentries() throws RecognitionException {
		return ueannotationlistentries(0);
	}

	private UeannotationlistentriesContext ueannotationlistentries(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		UeannotationlistentriesContext _localctx = new UeannotationlistentriesContext(_ctx, _parentState);
		UeannotationlistentriesContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_ueannotationlistentries, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(448);
			ueannotation();
			}
			_ctx.stop = _input.LT(-1);
			setState(455);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new UeannotationlistentriesContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_ueannotationlistentries);
					setState(450);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(451);
					match(Comma);
					setState(452);
					ueannotation();
					}
					} 
				}
				setState(457);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class UeannotationContext extends ParserRuleContext {
		public UekeyvalueannotationContext uekeyvalueannotation() {
			return getRuleContext(UekeyvalueannotationContext.class,0);
		}
		public UeannotationnameContext ueannotationname() {
			return getRuleContext(UeannotationnameContext.class,0);
		}
		public UeannotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ueannotation; }
	}

	public final UeannotationContext ueannotation() throws RecognitionException {
		UeannotationContext _localctx = new UeannotationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ueannotation);
		try {
			setState(460);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(458);
				uekeyvalueannotation();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(459);
				ueannotationname();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UeannotationvalueContext extends ParserRuleContext {
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public BooleanliteralContext booleanliteral() {
			return getRuleContext(BooleanliteralContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public UeannotationlistContext ueannotationlist() {
			return getRuleContext(UeannotationlistContext.class,0);
		}
		public UeannotationvalueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ueannotationvalue; }
	}

	public final UeannotationvalueContext ueannotationvalue() throws RecognitionException {
		UeannotationvalueContext _localctx = new UeannotationvalueContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ueannotationvalue);
		try {
			setState(466);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Stringliteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(462);
				match(Stringliteral);
				}
				break;
			case False:
			case True:
				enterOuterAlt(_localctx, 2);
				{
				setState(463);
				booleanliteral();
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 3);
				{
				setState(464);
				match(Identifier);
				}
				break;
			case LeftParen:
				enterOuterAlt(_localctx, 4);
				{
				setState(465);
				ueannotationlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UeannotationnameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public UeannotationnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ueannotationname; }
	}

	public final UeannotationnameContext ueannotationname() throws RecognitionException {
		UeannotationnameContext _localctx = new UeannotationnameContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ueannotationname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(468);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UekeyvalueannotationContext extends ParserRuleContext {
		public UeannotationnameContext ueannotationname() {
			return getRuleContext(UeannotationnameContext.class,0);
		}
		public UeannotationvalueContext ueannotationvalue() {
			return getRuleContext(UeannotationvalueContext.class,0);
		}
		public UekeyvalueannotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uekeyvalueannotation; }
	}

	public final UekeyvalueannotationContext uekeyvalueannotation() throws RecognitionException {
		UekeyvalueannotationContext _localctx = new UekeyvalueannotationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_uekeyvalueannotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			ueannotationname();
			setState(471);
			match(Assign);
			setState(472);
			ueannotationvalue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TranslationunitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CPP14Parser.EOF, 0); }
		public DeclarationseqContext declarationseq() {
			return getRuleContext(DeclarationseqContext.class,0);
		}
		public TranslationunitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translationunit; }
	}

	public final TranslationunitContext translationunit() throws RecognitionException {
		TranslationunitContext _localctx = new TranslationunitContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_translationunit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__8) | (1L << Alignas) | (1L << Asm) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Namespace) | (1L << Operator) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 135)) & ~0x3f) == 0 && ((1L << (_la - 135)) & ((1L << (Doublecolon - 135)) | (1L << (Semi - 135)) | (1L << (Ellipsis - 135)) | (1L << (Identifier - 135)))) != 0)) {
				{
				setState(474);
				declarationseq(0);
				}
			}

			setState(477);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryexpressionContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode This() { return getToken(CPP14Parser.This, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdexpressionContext idexpression() {
			return getRuleContext(IdexpressionContext.class,0);
		}
		public LambdaexpressionContext lambdaexpression() {
			return getRuleContext(LambdaexpressionContext.class,0);
		}
		public PrimaryexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryexpression; }
	}

	public final PrimaryexpressionContext primaryexpression() throws RecognitionException {
		PrimaryexpressionContext _localctx = new PrimaryexpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_primaryexpression);
		try {
			setState(487);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case False:
			case Nullptr:
			case True:
			case Integerliteral:
			case Characterliteral:
			case Floatingliteral:
			case Stringliteral:
			case Userdefinedintegerliteral:
			case Userdefinedfloatingliteral:
			case Userdefinedstringliteral:
			case Userdefinedcharacterliteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(479);
				literal();
				}
				break;
			case This:
				enterOuterAlt(_localctx, 2);
				{
				setState(480);
				match(This);
				}
				break;
			case LeftParen:
				enterOuterAlt(_localctx, 3);
				{
				setState(481);
				match(LeftParen);
				setState(482);
				expression(0);
				setState(483);
				match(RightParen);
				}
				break;
			case Decltype:
			case Operator:
			case Tilde:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 4);
				{
				setState(485);
				idexpression();
				}
				break;
			case LeftBracket:
				enterOuterAlt(_localctx, 5);
				{
				setState(486);
				lambdaexpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdexpressionContext extends ParserRuleContext {
		public UnqualifiedidContext unqualifiedid() {
			return getRuleContext(UnqualifiedidContext.class,0);
		}
		public QualifiedidContext qualifiedid() {
			return getRuleContext(QualifiedidContext.class,0);
		}
		public IdexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idexpression; }
	}

	public final IdexpressionContext idexpression() throws RecognitionException {
		IdexpressionContext _localctx = new IdexpressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_idexpression);
		try {
			setState(491);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(489);
				unqualifiedid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(490);
				qualifiedid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnqualifiedidContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public OperatorfunctionidContext operatorfunctionid() {
			return getRuleContext(OperatorfunctionidContext.class,0);
		}
		public ConversionfunctionidContext conversionfunctionid() {
			return getRuleContext(ConversionfunctionidContext.class,0);
		}
		public LiteraloperatoridContext literaloperatorid() {
			return getRuleContext(LiteraloperatoridContext.class,0);
		}
		public ClassnameContext classname() {
			return getRuleContext(ClassnameContext.class,0);
		}
		public DecltypespecifierContext decltypespecifier() {
			return getRuleContext(DecltypespecifierContext.class,0);
		}
		public TemplateidContext templateid() {
			return getRuleContext(TemplateidContext.class,0);
		}
		public UnqualifiedidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unqualifiedid; }
	}

	public final UnqualifiedidContext unqualifiedid() throws RecognitionException {
		UnqualifiedidContext _localctx = new UnqualifiedidContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_unqualifiedid);
		try {
			setState(502);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(493);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(494);
				operatorfunctionid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(495);
				conversionfunctionid();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(496);
				literaloperatorid();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(497);
				match(Tilde);
				setState(498);
				classname();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(499);
				match(Tilde);
				setState(500);
				decltypespecifier();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(501);
				templateid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedidContext extends ParserRuleContext {
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public UnqualifiedidContext unqualifiedid() {
			return getRuleContext(UnqualifiedidContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public QualifiedidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedid; }
	}

	public final QualifiedidContext qualifiedid() throws RecognitionException {
		QualifiedidContext _localctx = new QualifiedidContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_qualifiedid);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			nestednamespecifier(0);
			setState(506);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Template) {
				{
				setState(505);
				match(Template);
				}
			}

			setState(508);
			unqualifiedid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NestednamespecifierContext extends ParserRuleContext {
		public ThetypenameContext thetypename() {
			return getRuleContext(ThetypenameContext.class,0);
		}
		public NamespacenameContext namespacename() {
			return getRuleContext(NamespacenameContext.class,0);
		}
		public DecltypespecifierContext decltypespecifier() {
			return getRuleContext(DecltypespecifierContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public NestednamespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestednamespecifier; }
	}

	public final NestednamespecifierContext nestednamespecifier() throws RecognitionException {
		return nestednamespecifier(0);
	}

	private NestednamespecifierContext nestednamespecifier(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NestednamespecifierContext _localctx = new NestednamespecifierContext(_ctx, _parentState);
		NestednamespecifierContext _prevctx = _localctx;
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_nestednamespecifier, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(511);
				match(Doublecolon);
				}
				break;
			case 2:
				{
				setState(512);
				thetypename();
				setState(513);
				match(Doublecolon);
				}
				break;
			case 3:
				{
				setState(515);
				namespacename();
				setState(516);
				match(Doublecolon);
				}
				break;
			case 4:
				{
				setState(518);
				decltypespecifier();
				setState(519);
				match(Doublecolon);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(535);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(533);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_nestednamespecifier);
						setState(523);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(524);
						match(Identifier);
						setState(525);
						match(Doublecolon);
						}
						break;
					case 2:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_nestednamespecifier);
						setState(526);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(528);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==Template) {
							{
							setState(527);
							match(Template);
							}
						}

						setState(530);
						simpletemplateid();
						setState(531);
						match(Doublecolon);
						}
						break;
					}
					} 
				}
				setState(537);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LambdaexpressionContext extends ParserRuleContext {
		public LambdaintroducerContext lambdaintroducer() {
			return getRuleContext(LambdaintroducerContext.class,0);
		}
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public LambdadeclaratorContext lambdadeclarator() {
			return getRuleContext(LambdadeclaratorContext.class,0);
		}
		public LambdaexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaexpression; }
	}

	public final LambdaexpressionContext lambdaexpression() throws RecognitionException {
		LambdaexpressionContext _localctx = new LambdaexpressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_lambdaexpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			lambdaintroducer();
			setState(540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LeftParen) {
				{
				setState(539);
				lambdadeclarator();
				}
			}

			setState(542);
			compoundstatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaintroducerContext extends ParserRuleContext {
		public LambdacaptureContext lambdacapture() {
			return getRuleContext(LambdacaptureContext.class,0);
		}
		public LambdaintroducerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaintroducer; }
	}

	public final LambdaintroducerContext lambdaintroducer() throws RecognitionException {
		LambdaintroducerContext _localctx = new LambdaintroducerContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_lambdaintroducer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(544);
			match(LeftBracket);
			setState(546);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 75)) & ~0x3f) == 0 && ((1L << (_la - 75)) & ((1L << (This - 75)) | (1L << (And - 75)) | (1L << (Assign - 75)))) != 0) || _la==Identifier) {
				{
				setState(545);
				lambdacapture();
				}
			}

			setState(548);
			match(RightBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdacaptureContext extends ParserRuleContext {
		public CapturedefaultContext capturedefault() {
			return getRuleContext(CapturedefaultContext.class,0);
		}
		public CapturelistContext capturelist() {
			return getRuleContext(CapturelistContext.class,0);
		}
		public LambdacaptureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdacapture; }
	}

	public final LambdacaptureContext lambdacapture() throws RecognitionException {
		LambdacaptureContext _localctx = new LambdacaptureContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_lambdacapture);
		try {
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(550);
				capturedefault();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(551);
				capturelist(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(552);
				capturedefault();
				setState(553);
				match(Comma);
				setState(554);
				capturelist(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CapturedefaultContext extends ParserRuleContext {
		public CapturedefaultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_capturedefault; }
	}

	public final CapturedefaultContext capturedefault() throws RecognitionException {
		CapturedefaultContext _localctx = new CapturedefaultContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_capturedefault);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			_la = _input.LA(1);
			if ( !(_la==And || _la==Assign) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CapturelistContext extends ParserRuleContext {
		public CaptureContext capture() {
			return getRuleContext(CaptureContext.class,0);
		}
		public CapturelistContext capturelist() {
			return getRuleContext(CapturelistContext.class,0);
		}
		public CapturelistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_capturelist; }
	}

	public final CapturelistContext capturelist() throws RecognitionException {
		return capturelist(0);
	}

	private CapturelistContext capturelist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CapturelistContext _localctx = new CapturelistContext(_ctx, _parentState);
		CapturelistContext _prevctx = _localctx;
		int _startState = 44;
		enterRecursionRule(_localctx, 44, RULE_capturelist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(561);
			capture();
			setState(563);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(562);
				match(Ellipsis);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(573);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CapturelistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_capturelist);
					setState(565);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(566);
					match(Comma);
					setState(567);
					capture();
					setState(569);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						setState(568);
						match(Ellipsis);
						}
						break;
					}
					}
					} 
				}
				setState(575);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class CaptureContext extends ParserRuleContext {
		public SimplecaptureContext simplecapture() {
			return getRuleContext(SimplecaptureContext.class,0);
		}
		public InitcaptureContext initcapture() {
			return getRuleContext(InitcaptureContext.class,0);
		}
		public CaptureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_capture; }
	}

	public final CaptureContext capture() throws RecognitionException {
		CaptureContext _localctx = new CaptureContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_capture);
		try {
			setState(578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(576);
				simplecapture();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(577);
				initcapture();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimplecaptureContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public TerminalNode This() { return getToken(CPP14Parser.This, 0); }
		public SimplecaptureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simplecapture; }
	}

	public final SimplecaptureContext simplecapture() throws RecognitionException {
		SimplecaptureContext _localctx = new SimplecaptureContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_simplecapture);
		try {
			setState(584);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(580);
				match(Identifier);
				}
				break;
			case And:
				enterOuterAlt(_localctx, 2);
				{
				setState(581);
				match(And);
				setState(582);
				match(Identifier);
				}
				break;
			case This:
				enterOuterAlt(_localctx, 3);
				{
				setState(583);
				match(This);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitcaptureContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public InitcaptureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initcapture; }
	}

	public final InitcaptureContext initcapture() throws RecognitionException {
		InitcaptureContext _localctx = new InitcaptureContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_initcapture);
		try {
			setState(591);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(586);
				match(Identifier);
				setState(587);
				initializer();
				}
				break;
			case And:
				enterOuterAlt(_localctx, 2);
				{
				setState(588);
				match(And);
				setState(589);
				match(Identifier);
				setState(590);
				initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdadeclaratorContext extends ParserRuleContext {
		public ParameterdeclarationclauseContext parameterdeclarationclause() {
			return getRuleContext(ParameterdeclarationclauseContext.class,0);
		}
		public TerminalNode Mutable() { return getToken(CPP14Parser.Mutable, 0); }
		public ExceptionspecificationContext exceptionspecification() {
			return getRuleContext(ExceptionspecificationContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TrailingreturntypeContext trailingreturntype() {
			return getRuleContext(TrailingreturntypeContext.class,0);
		}
		public LambdadeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdadeclarator; }
	}

	public final LambdadeclaratorContext lambdadeclarator() throws RecognitionException {
		LambdadeclaratorContext _localctx = new LambdadeclaratorContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_lambdadeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(593);
			match(LeftParen);
			setState(594);
			parameterdeclarationclause();
			setState(595);
			match(RightParen);
			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Mutable) {
				{
				setState(596);
				match(Mutable);
				}
			}

			setState(600);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Noexcept || _la==Throw) {
				{
				setState(599);
				exceptionspecification();
				}
			}

			setState(603);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(602);
				attributespecifierseq(0);
				}
			}

			setState(606);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Arrow) {
				{
				setState(605);
				trailingreturntype();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixexpressionContext extends ParserRuleContext {
		public PrimaryexpressionContext primaryexpression() {
			return getRuleContext(PrimaryexpressionContext.class,0);
		}
		public SimpletypespecifierContext simpletypespecifier() {
			return getRuleContext(SimpletypespecifierContext.class,0);
		}
		public ExpressionlistContext expressionlist() {
			return getRuleContext(ExpressionlistContext.class,0);
		}
		public TypenamespecifierContext typenamespecifier() {
			return getRuleContext(TypenamespecifierContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public TerminalNode Dynamic_cast() { return getToken(CPP14Parser.Dynamic_cast, 0); }
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Static_cast() { return getToken(CPP14Parser.Static_cast, 0); }
		public TerminalNode Reinterpret_cast() { return getToken(CPP14Parser.Reinterpret_cast, 0); }
		public TerminalNode Const_cast() { return getToken(CPP14Parser.Const_cast, 0); }
		public TypeidofthetypeidContext typeidofthetypeid() {
			return getRuleContext(TypeidofthetypeidContext.class,0);
		}
		public PostfixexpressionContext postfixexpression() {
			return getRuleContext(PostfixexpressionContext.class,0);
		}
		public IdexpressionContext idexpression() {
			return getRuleContext(IdexpressionContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public PseudodestructornameContext pseudodestructorname() {
			return getRuleContext(PseudodestructornameContext.class,0);
		}
		public PostfixexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixexpression; }
	}

	public final PostfixexpressionContext postfixexpression() throws RecognitionException {
		return postfixexpression(0);
	}

	private PostfixexpressionContext postfixexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PostfixexpressionContext _localctx = new PostfixexpressionContext(_ctx, _parentState);
		PostfixexpressionContext _prevctx = _localctx;
		int _startState = 54;
		enterRecursionRule(_localctx, 54, RULE_postfixexpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(672);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(609);
				primaryexpression();
				}
				break;
			case 2:
				{
				setState(610);
				simpletypespecifier();
				setState(611);
				match(LeftParen);
				setState(613);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(612);
					expressionlist();
					}
				}

				setState(615);
				match(RightParen);
				}
				break;
			case 3:
				{
				setState(617);
				typenamespecifier();
				setState(618);
				match(LeftParen);
				setState(620);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(619);
					expressionlist();
					}
				}

				setState(622);
				match(RightParen);
				}
				break;
			case 4:
				{
				setState(624);
				simpletypespecifier();
				setState(625);
				bracedinitlist();
				}
				break;
			case 5:
				{
				setState(627);
				typenamespecifier();
				setState(628);
				bracedinitlist();
				}
				break;
			case 6:
				{
				setState(630);
				match(Dynamic_cast);
				setState(631);
				match(Less);
				setState(632);
				thetypeid();
				setState(633);
				match(Greater);
				setState(634);
				match(LeftParen);
				setState(635);
				expression(0);
				setState(636);
				match(RightParen);
				}
				break;
			case 7:
				{
				setState(638);
				match(Static_cast);
				setState(639);
				match(Less);
				setState(640);
				thetypeid();
				setState(641);
				match(Greater);
				setState(642);
				match(LeftParen);
				setState(643);
				expression(0);
				setState(644);
				match(RightParen);
				}
				break;
			case 8:
				{
				setState(646);
				match(Reinterpret_cast);
				setState(647);
				match(Less);
				setState(648);
				thetypeid();
				setState(649);
				match(Greater);
				setState(650);
				match(LeftParen);
				setState(651);
				expression(0);
				setState(652);
				match(RightParen);
				}
				break;
			case 9:
				{
				setState(654);
				match(Const_cast);
				setState(655);
				match(Less);
				setState(656);
				thetypeid();
				setState(657);
				match(Greater);
				setState(658);
				match(LeftParen);
				setState(659);
				expression(0);
				setState(660);
				match(RightParen);
				}
				break;
			case 10:
				{
				setState(662);
				typeidofthetypeid();
				setState(663);
				match(LeftParen);
				setState(664);
				expression(0);
				setState(665);
				match(RightParen);
				}
				break;
			case 11:
				{
				setState(667);
				typeidofthetypeid();
				setState(668);
				match(LeftParen);
				setState(669);
				thetypeid();
				setState(670);
				match(RightParen);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(714);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(712);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
					case 1:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(674);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(675);
						match(LeftBracket);
						setState(676);
						expression(0);
						setState(677);
						match(RightBracket);
						}
						break;
					case 2:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(679);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(680);
						match(LeftBracket);
						setState(681);
						bracedinitlist();
						setState(682);
						match(RightBracket);
						}
						break;
					case 3:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(684);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(685);
						match(LeftParen);
						setState(687);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
							{
							setState(686);
							expressionlist();
							}
						}

						setState(689);
						match(RightParen);
						}
						break;
					case 4:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(690);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(691);
						match(Dot);
						setState(693);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==Template) {
							{
							setState(692);
							match(Template);
							}
						}

						setState(695);
						idexpression();
						}
						break;
					case 5:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(696);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(697);
						match(Arrow);
						setState(699);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==Template) {
							{
							setState(698);
							match(Template);
							}
						}

						setState(701);
						idexpression();
						}
						break;
					case 6:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(702);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(703);
						match(Dot);
						setState(704);
						pseudodestructorname();
						}
						break;
					case 7:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(705);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(706);
						match(Arrow);
						setState(707);
						pseudodestructorname();
						}
						break;
					case 8:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(708);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(709);
						match(PlusPlus);
						}
						break;
					case 9:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_postfixexpression);
						setState(710);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(711);
						match(MinusMinus);
						}
						break;
					}
					} 
				}
				setState(716);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypeidofexprContext extends ParserRuleContext {
		public TerminalNode Typeid_() { return getToken(CPP14Parser.Typeid_, 0); }
		public TypeidofexprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeidofexpr; }
	}

	public final TypeidofexprContext typeidofexpr() throws RecognitionException {
		TypeidofexprContext _localctx = new TypeidofexprContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_typeidofexpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(717);
			match(Typeid_);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeidofthetypeidContext extends ParserRuleContext {
		public TerminalNode Typeid_() { return getToken(CPP14Parser.Typeid_, 0); }
		public TypeidofthetypeidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeidofthetypeid; }
	}

	public final TypeidofthetypeidContext typeidofthetypeid() throws RecognitionException {
		TypeidofthetypeidContext _localctx = new TypeidofthetypeidContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_typeidofthetypeid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(719);
			match(Typeid_);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionlistContext extends ParserRuleContext {
		public InitializerlistContext initializerlist() {
			return getRuleContext(InitializerlistContext.class,0);
		}
		public ExpressionlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionlist; }
	}

	public final ExpressionlistContext expressionlist() throws RecognitionException {
		ExpressionlistContext _localctx = new ExpressionlistContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_expressionlist);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(721);
			initializerlist(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PseudodestructornameContext extends ParserRuleContext {
		public List<ThetypenameContext> thetypename() {
			return getRuleContexts(ThetypenameContext.class);
		}
		public ThetypenameContext thetypename(int i) {
			return getRuleContext(ThetypenameContext.class,i);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public DecltypespecifierContext decltypespecifier() {
			return getRuleContext(DecltypespecifierContext.class,0);
		}
		public PseudodestructornameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pseudodestructorname; }
	}

	public final PseudodestructornameContext pseudodestructorname() throws RecognitionException {
		PseudodestructornameContext _localctx = new PseudodestructornameContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_pseudodestructorname);
		int _la;
		try {
			setState(745);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(724);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
				case 1:
					{
					setState(723);
					nestednamespecifier(0);
					}
					break;
				}
				setState(726);
				thetypename();
				setState(727);
				match(Doublecolon);
				setState(728);
				match(Tilde);
				setState(729);
				thetypename();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(731);
				nestednamespecifier(0);
				setState(732);
				match(Template);
				setState(733);
				simpletemplateid();
				setState(734);
				match(Doublecolon);
				setState(735);
				match(Tilde);
				setState(736);
				thetypename();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(739);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Decltype || _la==Doublecolon || _la==Identifier) {
					{
					setState(738);
					nestednamespecifier(0);
					}
				}

				setState(741);
				match(Tilde);
				setState(742);
				thetypename();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(743);
				match(Tilde);
				setState(744);
				decltypespecifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryexpressionContext extends ParserRuleContext {
		public PostfixexpressionContext postfixexpression() {
			return getRuleContext(PostfixexpressionContext.class,0);
		}
		public CastexpressionContext castexpression() {
			return getRuleContext(CastexpressionContext.class,0);
		}
		public UnaryoperatorContext unaryoperator() {
			return getRuleContext(UnaryoperatorContext.class,0);
		}
		public TerminalNode Sizeof() { return getToken(CPP14Parser.Sizeof, 0); }
		public UnaryexpressionContext unaryexpression() {
			return getRuleContext(UnaryexpressionContext.class,0);
		}
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public TerminalNode Alignof() { return getToken(CPP14Parser.Alignof, 0); }
		public NoexceptexpressionContext noexceptexpression() {
			return getRuleContext(NoexceptexpressionContext.class,0);
		}
		public NewexpressionContext newexpression() {
			return getRuleContext(NewexpressionContext.class,0);
		}
		public DeleteexpressionContext deleteexpression() {
			return getRuleContext(DeleteexpressionContext.class,0);
		}
		public UnaryexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryexpression; }
	}

	public final UnaryexpressionContext unaryexpression() throws RecognitionException {
		UnaryexpressionContext _localctx = new UnaryexpressionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_unaryexpression);
		try {
			setState(775);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(747);
				postfixexpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(748);
				match(PlusPlus);
				setState(749);
				castexpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(750);
				match(MinusMinus);
				setState(751);
				castexpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(752);
				unaryoperator();
				setState(753);
				castexpression();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(755);
				match(Sizeof);
				setState(756);
				unaryexpression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(757);
				match(Sizeof);
				setState(758);
				match(LeftParen);
				setState(759);
				thetypeid();
				setState(760);
				match(RightParen);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(762);
				match(Sizeof);
				setState(763);
				match(Ellipsis);
				setState(764);
				match(LeftParen);
				setState(765);
				match(Identifier);
				setState(766);
				match(RightParen);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(767);
				match(Alignof);
				setState(768);
				match(LeftParen);
				setState(769);
				thetypeid();
				setState(770);
				match(RightParen);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(772);
				noexceptexpression();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(773);
				newexpression();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(774);
				deleteexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryoperatorContext extends ParserRuleContext {
		public UnaryoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryoperator; }
	}

	public final UnaryoperatorContext unaryoperator() throws RecognitionException {
		UnaryoperatorContext _localctx = new UnaryoperatorContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_unaryoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(777);
			_la = _input.LA(1);
			if ( !(_la==T__6 || _la==T__7 || ((((_la - 97)) & ~0x3f) == 0 && ((1L << (_la - 97)) & ((1L << (Plus - 97)) | (1L << (Minus - 97)) | (1L << (Star - 97)) | (1L << (And - 97)) | (1L << (Or - 97)) | (1L << (Tilde - 97)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NewexpressionContext extends ParserRuleContext {
		public TerminalNode New() { return getToken(CPP14Parser.New, 0); }
		public NewtypeidContext newtypeid() {
			return getRuleContext(NewtypeidContext.class,0);
		}
		public NewplacementContext newplacement() {
			return getRuleContext(NewplacementContext.class,0);
		}
		public NewinitializerContext newinitializer() {
			return getRuleContext(NewinitializerContext.class,0);
		}
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public NewexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newexpression; }
	}

	public final NewexpressionContext newexpression() throws RecognitionException {
		NewexpressionContext _localctx = new NewexpressionContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_newexpression);
		int _la;
		try {
			setState(803);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(780);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Doublecolon) {
					{
					setState(779);
					match(Doublecolon);
					}
				}

				setState(782);
				match(New);
				setState(784);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LeftParen) {
					{
					setState(783);
					newplacement();
					}
				}

				setState(786);
				newtypeid();
				setState(788);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
				case 1:
					{
					setState(787);
					newinitializer();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(791);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Doublecolon) {
					{
					setState(790);
					match(Doublecolon);
					}
				}

				setState(793);
				match(New);
				setState(795);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
				case 1:
					{
					setState(794);
					newplacement();
					}
					break;
				}
				setState(797);
				match(LeftParen);
				setState(798);
				thetypeid();
				setState(799);
				match(RightParen);
				setState(801);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(800);
					newinitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NewplacementContext extends ParserRuleContext {
		public ExpressionlistContext expressionlist() {
			return getRuleContext(ExpressionlistContext.class,0);
		}
		public NewplacementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newplacement; }
	}

	public final NewplacementContext newplacement() throws RecognitionException {
		NewplacementContext _localctx = new NewplacementContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_newplacement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(805);
			match(LeftParen);
			setState(806);
			expressionlist();
			setState(807);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NewtypeidContext extends ParserRuleContext {
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public NewdeclaratorContext newdeclarator() {
			return getRuleContext(NewdeclaratorContext.class,0);
		}
		public NewtypeidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newtypeid; }
	}

	public final NewtypeidContext newtypeid() throws RecognitionException {
		NewtypeidContext _localctx = new NewtypeidContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_newtypeid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			typespecifierseq();
			setState(811);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
			case 1:
				{
				setState(810);
				newdeclarator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NewdeclaratorContext extends ParserRuleContext {
		public PtroperatorContext ptroperator() {
			return getRuleContext(PtroperatorContext.class,0);
		}
		public NewdeclaratorContext newdeclarator() {
			return getRuleContext(NewdeclaratorContext.class,0);
		}
		public NoptrnewdeclaratorContext noptrnewdeclarator() {
			return getRuleContext(NoptrnewdeclaratorContext.class,0);
		}
		public NewdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newdeclarator; }
	}

	public final NewdeclaratorContext newdeclarator() throws RecognitionException {
		NewdeclaratorContext _localctx = new NewdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_newdeclarator);
		try {
			setState(818);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__8:
			case Decltype:
			case Star:
			case And:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(813);
				ptroperator();
				setState(815);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
				case 1:
					{
					setState(814);
					newdeclarator();
					}
					break;
				}
				}
				break;
			case LeftBracket:
				enterOuterAlt(_localctx, 2);
				{
				setState(817);
				noptrnewdeclarator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoptrnewdeclaratorContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public NoptrnewdeclaratorContext noptrnewdeclarator() {
			return getRuleContext(NoptrnewdeclaratorContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public NoptrnewdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noptrnewdeclarator; }
	}

	public final NoptrnewdeclaratorContext noptrnewdeclarator() throws RecognitionException {
		return noptrnewdeclarator(0);
	}

	private NoptrnewdeclaratorContext noptrnewdeclarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NoptrnewdeclaratorContext _localctx = new NoptrnewdeclaratorContext(_ctx, _parentState);
		NoptrnewdeclaratorContext _prevctx = _localctx;
		int _startState = 76;
		enterRecursionRule(_localctx, 76, RULE_noptrnewdeclarator, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(821);
			match(LeftBracket);
			setState(822);
			expression(0);
			setState(823);
			match(RightBracket);
			setState(825);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				{
				setState(824);
				attributespecifierseq(0);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(836);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_noptrnewdeclarator);
					setState(827);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(828);
					match(LeftBracket);
					setState(829);
					constantexpression();
					setState(830);
					match(RightBracket);
					setState(832);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
					case 1:
						{
						setState(831);
						attributespecifierseq(0);
						}
						break;
					}
					}
					} 
				}
				setState(838);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class NewinitializerContext extends ParserRuleContext {
		public ExpressionlistContext expressionlist() {
			return getRuleContext(ExpressionlistContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public NewinitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newinitializer; }
	}

	public final NewinitializerContext newinitializer() throws RecognitionException {
		NewinitializerContext _localctx = new NewinitializerContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_newinitializer);
		int _la;
		try {
			setState(845);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(839);
				match(LeftParen);
				setState(841);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(840);
					expressionlist();
					}
				}

				setState(843);
				match(RightParen);
				}
				break;
			case LeftBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(844);
				bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeleteexpressionContext extends ParserRuleContext {
		public TerminalNode Delete() { return getToken(CPP14Parser.Delete, 0); }
		public CastexpressionContext castexpression() {
			return getRuleContext(CastexpressionContext.class,0);
		}
		public DeleteexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deleteexpression; }
	}

	public final DeleteexpressionContext deleteexpression() throws RecognitionException {
		DeleteexpressionContext _localctx = new DeleteexpressionContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_deleteexpression);
		int _la;
		try {
			setState(859);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(848);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Doublecolon) {
					{
					setState(847);
					match(Doublecolon);
					}
				}

				setState(850);
				match(Delete);
				setState(851);
				castexpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(853);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Doublecolon) {
					{
					setState(852);
					match(Doublecolon);
					}
				}

				setState(855);
				match(Delete);
				setState(856);
				match(LeftBracket);
				setState(857);
				match(RightBracket);
				setState(858);
				castexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoexceptexpressionContext extends ParserRuleContext {
		public TerminalNode Noexcept() { return getToken(CPP14Parser.Noexcept, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NoexceptexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noexceptexpression; }
	}

	public final NoexceptexpressionContext noexceptexpression() throws RecognitionException {
		NoexceptexpressionContext _localctx = new NoexceptexpressionContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_noexceptexpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(861);
			match(Noexcept);
			setState(862);
			match(LeftParen);
			setState(863);
			expression(0);
			setState(864);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CastexpressionContext extends ParserRuleContext {
		public UnaryexpressionContext unaryexpression() {
			return getRuleContext(UnaryexpressionContext.class,0);
		}
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public CastexpressionContext castexpression() {
			return getRuleContext(CastexpressionContext.class,0);
		}
		public CastexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_castexpression; }
	}

	public final CastexpressionContext castexpression() throws RecognitionException {
		CastexpressionContext _localctx = new CastexpressionContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_castexpression);
		try {
			setState(872);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(866);
				unaryexpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(867);
				match(LeftParen);
				setState(868);
				thetypeid();
				setState(869);
				match(RightParen);
				setState(870);
				castexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PmexpressionContext extends ParserRuleContext {
		public CastexpressionContext castexpression() {
			return getRuleContext(CastexpressionContext.class,0);
		}
		public PmexpressionContext pmexpression() {
			return getRuleContext(PmexpressionContext.class,0);
		}
		public PmexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pmexpression; }
	}

	public final PmexpressionContext pmexpression() throws RecognitionException {
		return pmexpression(0);
	}

	private PmexpressionContext pmexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PmexpressionContext _localctx = new PmexpressionContext(_ctx, _parentState);
		PmexpressionContext _prevctx = _localctx;
		int _startState = 86;
		enterRecursionRule(_localctx, 86, RULE_pmexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(875);
			castexpression();
			}
			_ctx.stop = _input.LT(-1);
			setState(885);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(883);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
					case 1:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_pmexpression);
						setState(877);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(878);
						match(DotStar);
						setState(879);
						castexpression();
						}
						break;
					case 2:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_pmexpression);
						setState(880);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(881);
						match(ArrowStar);
						setState(882);
						castexpression();
						}
						break;
					}
					} 
				}
				setState(887);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,58,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MultiplicativeexpressionContext extends ParserRuleContext {
		public PmexpressionContext pmexpression() {
			return getRuleContext(PmexpressionContext.class,0);
		}
		public MultiplicativeexpressionContext multiplicativeexpression() {
			return getRuleContext(MultiplicativeexpressionContext.class,0);
		}
		public MultiplicativeexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeexpression; }
	}

	public final MultiplicativeexpressionContext multiplicativeexpression() throws RecognitionException {
		return multiplicativeexpression(0);
	}

	private MultiplicativeexpressionContext multiplicativeexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MultiplicativeexpressionContext _localctx = new MultiplicativeexpressionContext(_ctx, _parentState);
		MultiplicativeexpressionContext _prevctx = _localctx;
		int _startState = 88;
		enterRecursionRule(_localctx, 88, RULE_multiplicativeexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(889);
			pmexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(902);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(900);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicativeexpression);
						setState(891);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(892);
						match(Star);
						setState(893);
						pmexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicativeexpression);
						setState(894);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(895);
						match(Div);
						setState(896);
						pmexpression(0);
						}
						break;
					case 3:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_multiplicativeexpression);
						setState(897);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(898);
						match(Mod);
						setState(899);
						pmexpression(0);
						}
						break;
					}
					} 
				}
				setState(904);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,60,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AdditiveexpressionContext extends ParserRuleContext {
		public MultiplicativeexpressionContext multiplicativeexpression() {
			return getRuleContext(MultiplicativeexpressionContext.class,0);
		}
		public AdditiveexpressionContext additiveexpression() {
			return getRuleContext(AdditiveexpressionContext.class,0);
		}
		public AdditiveexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveexpression; }
	}

	public final AdditiveexpressionContext additiveexpression() throws RecognitionException {
		return additiveexpression(0);
	}

	private AdditiveexpressionContext additiveexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AdditiveexpressionContext _localctx = new AdditiveexpressionContext(_ctx, _parentState);
		AdditiveexpressionContext _prevctx = _localctx;
		int _startState = 90;
		enterRecursionRule(_localctx, 90, RULE_additiveexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(906);
			multiplicativeexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(916);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(914);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,61,_ctx) ) {
					case 1:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additiveexpression);
						setState(908);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(909);
						match(Plus);
						setState(910);
						multiplicativeexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_additiveexpression);
						setState(911);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(912);
						match(Minus);
						setState(913);
						multiplicativeexpression(0);
						}
						break;
					}
					} 
				}
				setState(918);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,62,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ShiftexpressionContext extends ParserRuleContext {
		public AdditiveexpressionContext additiveexpression() {
			return getRuleContext(AdditiveexpressionContext.class,0);
		}
		public ShiftexpressionContext shiftexpression() {
			return getRuleContext(ShiftexpressionContext.class,0);
		}
		public ShiftoperatorContext shiftoperator() {
			return getRuleContext(ShiftoperatorContext.class,0);
		}
		public ShiftexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shiftexpression; }
	}

	public final ShiftexpressionContext shiftexpression() throws RecognitionException {
		return shiftexpression(0);
	}

	private ShiftexpressionContext shiftexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ShiftexpressionContext _localctx = new ShiftexpressionContext(_ctx, _parentState);
		ShiftexpressionContext _prevctx = _localctx;
		int _startState = 92;
		enterRecursionRule(_localctx, 92, RULE_shiftexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(920);
			additiveexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(928);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ShiftexpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_shiftexpression);
					setState(922);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(923);
					shiftoperator();
					setState(924);
					additiveexpression(0);
					}
					} 
				}
				setState(930);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ShiftoperatorContext extends ParserRuleContext {
		public TerminalNode RightShift() { return getToken(CPP14Parser.RightShift, 0); }
		public TerminalNode LeftShift() { return getToken(CPP14Parser.LeftShift, 0); }
		public ShiftoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shiftoperator; }
	}

	public final ShiftoperatorContext shiftoperator() throws RecognitionException {
		ShiftoperatorContext _localctx = new ShiftoperatorContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_shiftoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(931);
			_la = _input.LA(1);
			if ( !(_la==LeftShift || _la==RightShift) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationalexpressionContext extends ParserRuleContext {
		public ShiftexpressionContext shiftexpression() {
			return getRuleContext(ShiftexpressionContext.class,0);
		}
		public RelationalexpressionContext relationalexpression() {
			return getRuleContext(RelationalexpressionContext.class,0);
		}
		public RelationalexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalexpression; }
	}

	public final RelationalexpressionContext relationalexpression() throws RecognitionException {
		return relationalexpression(0);
	}

	private RelationalexpressionContext relationalexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		RelationalexpressionContext _localctx = new RelationalexpressionContext(_ctx, _parentState);
		RelationalexpressionContext _prevctx = _localctx;
		int _startState = 96;
		enterRecursionRule(_localctx, 96, RULE_relationalexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(934);
			shiftexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(950);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(948);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
					case 1:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relationalexpression);
						setState(936);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(937);
						match(Less);
						setState(938);
						shiftexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relationalexpression);
						setState(939);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(940);
						match(Greater);
						setState(941);
						shiftexpression(0);
						}
						break;
					case 3:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relationalexpression);
						setState(942);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(943);
						match(LessEqual);
						setState(944);
						shiftexpression(0);
						}
						break;
					case 4:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_relationalexpression);
						setState(945);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(946);
						match(GreaterEqual);
						setState(947);
						shiftexpression(0);
						}
						break;
					}
					} 
				}
				setState(952);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,65,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class EqualityexpressionContext extends ParserRuleContext {
		public RelationalexpressionContext relationalexpression() {
			return getRuleContext(RelationalexpressionContext.class,0);
		}
		public EqualityexpressionContext equalityexpression() {
			return getRuleContext(EqualityexpressionContext.class,0);
		}
		public EqualityexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equalityexpression; }
	}

	public final EqualityexpressionContext equalityexpression() throws RecognitionException {
		return equalityexpression(0);
	}

	private EqualityexpressionContext equalityexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		EqualityexpressionContext _localctx = new EqualityexpressionContext(_ctx, _parentState);
		EqualityexpressionContext _prevctx = _localctx;
		int _startState = 98;
		enterRecursionRule(_localctx, 98, RULE_equalityexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(954);
			relationalexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(964);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(962);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
					case 1:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equalityexpression);
						setState(956);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(957);
						match(Equal);
						setState(958);
						relationalexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_equalityexpression);
						setState(959);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(960);
						match(NotEqual);
						setState(961);
						relationalexpression(0);
						}
						break;
					}
					} 
				}
				setState(966);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,67,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AndexpressionContext extends ParserRuleContext {
		public EqualityexpressionContext equalityexpression() {
			return getRuleContext(EqualityexpressionContext.class,0);
		}
		public AndexpressionContext andexpression() {
			return getRuleContext(AndexpressionContext.class,0);
		}
		public AndexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_andexpression; }
	}

	public final AndexpressionContext andexpression() throws RecognitionException {
		return andexpression(0);
	}

	private AndexpressionContext andexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AndexpressionContext _localctx = new AndexpressionContext(_ctx, _parentState);
		AndexpressionContext _prevctx = _localctx;
		int _startState = 100;
		enterRecursionRule(_localctx, 100, RULE_andexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(968);
			equalityexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(975);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AndexpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_andexpression);
					setState(970);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(971);
					match(And);
					setState(972);
					equalityexpression(0);
					}
					} 
				}
				setState(977);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,68,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExclusiveorexpressionContext extends ParserRuleContext {
		public AndexpressionContext andexpression() {
			return getRuleContext(AndexpressionContext.class,0);
		}
		public ExclusiveorexpressionContext exclusiveorexpression() {
			return getRuleContext(ExclusiveorexpressionContext.class,0);
		}
		public ExclusiveorexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exclusiveorexpression; }
	}

	public final ExclusiveorexpressionContext exclusiveorexpression() throws RecognitionException {
		return exclusiveorexpression(0);
	}

	private ExclusiveorexpressionContext exclusiveorexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExclusiveorexpressionContext _localctx = new ExclusiveorexpressionContext(_ctx, _parentState);
		ExclusiveorexpressionContext _prevctx = _localctx;
		int _startState = 102;
		enterRecursionRule(_localctx, 102, RULE_exclusiveorexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(979);
			andexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(986);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,69,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_exclusiveorexpression);
					setState(981);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(982);
					match(Caret);
					setState(983);
					andexpression(0);
					}
					} 
				}
				setState(988);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,69,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class InclusiveorexpressionContext extends ParserRuleContext {
		public ExclusiveorexpressionContext exclusiveorexpression() {
			return getRuleContext(ExclusiveorexpressionContext.class,0);
		}
		public InclusiveorexpressionContext inclusiveorexpression() {
			return getRuleContext(InclusiveorexpressionContext.class,0);
		}
		public InclusiveorexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inclusiveorexpression; }
	}

	public final InclusiveorexpressionContext inclusiveorexpression() throws RecognitionException {
		return inclusiveorexpression(0);
	}

	private InclusiveorexpressionContext inclusiveorexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		InclusiveorexpressionContext _localctx = new InclusiveorexpressionContext(_ctx, _parentState);
		InclusiveorexpressionContext _prevctx = _localctx;
		int _startState = 104;
		enterRecursionRule(_localctx, 104, RULE_inclusiveorexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(990);
			exclusiveorexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(997);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_inclusiveorexpression);
					setState(992);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(993);
					match(Or);
					setState(994);
					exclusiveorexpression(0);
					}
					} 
				}
				setState(999);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,70,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LogicalandexpressionContext extends ParserRuleContext {
		public InclusiveorexpressionContext inclusiveorexpression() {
			return getRuleContext(InclusiveorexpressionContext.class,0);
		}
		public LogicalandexpressionContext logicalandexpression() {
			return getRuleContext(LogicalandexpressionContext.class,0);
		}
		public LogicalandexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalandexpression; }
	}

	public final LogicalandexpressionContext logicalandexpression() throws RecognitionException {
		return logicalandexpression(0);
	}

	private LogicalandexpressionContext logicalandexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalandexpressionContext _localctx = new LogicalandexpressionContext(_ctx, _parentState);
		LogicalandexpressionContext _prevctx = _localctx;
		int _startState = 106;
		enterRecursionRule(_localctx, 106, RULE_logicalandexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1001);
			inclusiveorexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(1011);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1009);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logicalandexpression);
						setState(1003);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1004);
						match(T__8);
						setState(1005);
						inclusiveorexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logicalandexpression);
						setState(1006);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1007);
						match(T__9);
						setState(1008);
						inclusiveorexpression(0);
						}
						break;
					}
					} 
				}
				setState(1013);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,72,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LogicalorexpressionContext extends ParserRuleContext {
		public LogicalandexpressionContext logicalandexpression() {
			return getRuleContext(LogicalandexpressionContext.class,0);
		}
		public LogicalorexpressionContext logicalorexpression() {
			return getRuleContext(LogicalorexpressionContext.class,0);
		}
		public LogicalorexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalorexpression; }
	}

	public final LogicalorexpressionContext logicalorexpression() throws RecognitionException {
		return logicalorexpression(0);
	}

	private LogicalorexpressionContext logicalorexpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalorexpressionContext _localctx = new LogicalorexpressionContext(_ctx, _parentState);
		LogicalorexpressionContext _prevctx = _localctx;
		int _startState = 108;
		enterRecursionRule(_localctx, 108, RULE_logicalorexpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1015);
			logicalandexpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(1025);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,74,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1023);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
					case 1:
						{
						_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logicalorexpression);
						setState(1017);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1018);
						match(T__10);
						setState(1019);
						logicalandexpression(0);
						}
						break;
					case 2:
						{
						_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_logicalorexpression);
						setState(1020);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1021);
						match(T__11);
						setState(1022);
						logicalandexpression(0);
						}
						break;
					}
					} 
				}
				setState(1027);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,74,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ConditionalexpressionContext extends ParserRuleContext {
		public LogicalorexpressionContext logicalorexpression() {
			return getRuleContext(LogicalorexpressionContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentexpressionContext assignmentexpression() {
			return getRuleContext(AssignmentexpressionContext.class,0);
		}
		public ConditionalexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalexpression; }
	}

	public final ConditionalexpressionContext conditionalexpression() throws RecognitionException {
		ConditionalexpressionContext _localctx = new ConditionalexpressionContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_conditionalexpression);
		try {
			setState(1035);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1028);
				logicalorexpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1029);
				logicalorexpression(0);
				setState(1030);
				match(Question);
				setState(1031);
				expression(0);
				setState(1032);
				match(Colon);
				setState(1033);
				assignmentexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentexpressionContext extends ParserRuleContext {
		public ConditionalexpressionContext conditionalexpression() {
			return getRuleContext(ConditionalexpressionContext.class,0);
		}
		public LogicalorexpressionContext logicalorexpression() {
			return getRuleContext(LogicalorexpressionContext.class,0);
		}
		public AssignmentoperatorContext assignmentoperator() {
			return getRuleContext(AssignmentoperatorContext.class,0);
		}
		public InitializerclauseContext initializerclause() {
			return getRuleContext(InitializerclauseContext.class,0);
		}
		public ThrowexpressionContext throwexpression() {
			return getRuleContext(ThrowexpressionContext.class,0);
		}
		public AssignmentexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentexpression; }
	}

	public final AssignmentexpressionContext assignmentexpression() throws RecognitionException {
		AssignmentexpressionContext _localctx = new AssignmentexpressionContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_assignmentexpression);
		try {
			setState(1043);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1037);
				conditionalexpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1038);
				logicalorexpression(0);
				setState(1039);
				assignmentoperator();
				setState(1040);
				initializerclause();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1042);
				throwexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentoperatorContext extends ParserRuleContext {
		public TerminalNode RightShiftAssign() { return getToken(CPP14Parser.RightShiftAssign, 0); }
		public TerminalNode LeftShiftAssign() { return getToken(CPP14Parser.LeftShiftAssign, 0); }
		public AssignmentoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentoperator; }
	}

	public final AssignmentoperatorContext assignmentoperator() throws RecognitionException {
		AssignmentoperatorContext _localctx = new AssignmentoperatorContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_assignmentoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1045);
			_la = _input.LA(1);
			if ( !(((((_la - 107)) & ~0x3f) == 0 && ((1L << (_la - 107)) & ((1L << (Assign - 107)) | (1L << (PlusAssign - 107)) | (1L << (MinusAssign - 107)) | (1L << (StarAssign - 107)) | (1L << (DivAssign - 107)) | (1L << (ModAssign - 107)) | (1L << (XorAssign - 107)) | (1L << (AndAssign - 107)) | (1L << (OrAssign - 107)) | (1L << (LeftShiftAssign - 107)) | (1L << (RightShiftAssign - 107)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public AssignmentexpressionContext assignmentexpression() {
			return getRuleContext(AssignmentexpressionContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 116;
		enterRecursionRule(_localctx, 116, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1048);
			assignmentexpression();
			}
			_ctx.stop = _input.LT(-1);
			setState(1055);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expression);
					setState(1050);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1051);
					match(Comma);
					setState(1052);
					assignmentexpression();
					}
					} 
				}
				setState(1057);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ConstantexpressionContext extends ParserRuleContext {
		public ConditionalexpressionContext conditionalexpression() {
			return getRuleContext(ConditionalexpressionContext.class,0);
		}
		public ConstantexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantexpression; }
	}

	public final ConstantexpressionContext constantexpression() throws RecognitionException {
		ConstantexpressionContext _localctx = new ConstantexpressionContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_constantexpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1058);
			conditionalexpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public LabeledstatementContext labeledstatement() {
			return getRuleContext(LabeledstatementContext.class,0);
		}
		public ExpressionstatementContext expressionstatement() {
			return getRuleContext(ExpressionstatementContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public SelectionstatementContext selectionstatement() {
			return getRuleContext(SelectionstatementContext.class,0);
		}
		public IterationstatementContext iterationstatement() {
			return getRuleContext(IterationstatementContext.class,0);
		}
		public JumpstatementContext jumpstatement() {
			return getRuleContext(JumpstatementContext.class,0);
		}
		public DeclarationstatementContext declarationstatement() {
			return getRuleContext(DeclarationstatementContext.class,0);
		}
		public TryblockContext tryblock() {
			return getRuleContext(TryblockContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_statement);
		int _la;
		try {
			setState(1086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1060);
				labeledstatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1062);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
				case 1:
					{
					setState(1061);
					attributespecifierseq(0);
					}
					break;
				}
				setState(1064);
				expressionstatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1066);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1065);
					attributespecifierseq(0);
					}
				}

				setState(1068);
				compoundstatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1070);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1069);
					attributespecifierseq(0);
					}
				}

				setState(1072);
				selectionstatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1074);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1073);
					attributespecifierseq(0);
					}
				}

				setState(1076);
				iterationstatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1078);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1077);
					attributespecifierseq(0);
					}
				}

				setState(1080);
				jumpstatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1081);
				declarationstatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1083);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1082);
					attributespecifierseq(0);
					}
				}

				setState(1085);
				tryblock();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabeledstatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TerminalNode Case() { return getToken(CPP14Parser.Case, 0); }
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public TerminalNode Default() { return getToken(CPP14Parser.Default, 0); }
		public LabeledstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labeledstatement; }
	}

	public final LabeledstatementContext labeledstatement() throws RecognitionException {
		LabeledstatementContext _localctx = new LabeledstatementContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_labeledstatement);
		int _la;
		try {
			setState(1108);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1089);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1088);
					attributespecifierseq(0);
					}
				}

				setState(1091);
				match(Identifier);
				setState(1092);
				match(Colon);
				setState(1093);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1095);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1094);
					attributespecifierseq(0);
					}
				}

				setState(1097);
				match(Case);
				setState(1098);
				constantexpression();
				setState(1099);
				match(Colon);
				setState(1100);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1103);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1102);
					attributespecifierseq(0);
					}
				}

				setState(1105);
				match(Default);
				setState(1106);
				match(Colon);
				setState(1107);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionstatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionstatement; }
	}

	public final ExpressionstatementContext expressionstatement() throws RecognitionException {
		ExpressionstatementContext _localctx = new ExpressionstatementContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_expressionstatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
				{
				setState(1110);
				expression(0);
				}
			}

			setState(1113);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundstatementContext extends ParserRuleContext {
		public StatementseqContext statementseq() {
			return getRuleContext(StatementseqContext.class,0);
		}
		public CompoundstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundstatement; }
	}

	public final CompoundstatementContext compoundstatement() throws RecognitionException {
		CompoundstatementContext _localctx = new CompoundstatementContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_compoundstatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1115);
			match(LeftBrace);
			setState(1117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << Alignas) | (1L << Alignof) | (1L << Asm) | (1L << Auto) | (1L << Bool) | (1L << Break) | (1L << Case) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Const_cast) | (1L << Continue) | (1L << Decltype) | (1L << Default) | (1L << Delete) | (1L << Do) | (1L << Double) | (1L << Dynamic_cast) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << False) | (1L << Float) | (1L << For) | (1L << Friend) | (1L << Goto) | (1L << If) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Namespace) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator) | (1L << Register))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Return - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static - 64)) | (1L << (Static_assert - 64)) | (1L << (Static_cast - 64)) | (1L << (Struct - 64)) | (1L << (Switch - 64)) | (1L << (This - 64)) | (1L << (Thread_local - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Try - 64)) | (1L << (Typedef - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Union - 64)) | (1L << (Unsigned - 64)) | (1L << (Using - 64)) | (1L << (Virtual - 64)) | (1L << (Void - 64)) | (1L << (Volatile - 64)) | (1L << (Wchar - 64)) | (1L << (While - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Semi - 128)) | (1L << (Ellipsis - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
				{
				setState(1116);
				statementseq(0);
				}
			}

			setState(1119);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementseqContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public StatementseqContext statementseq() {
			return getRuleContext(StatementseqContext.class,0);
		}
		public StatementseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementseq; }
	}

	public final StatementseqContext statementseq() throws RecognitionException {
		return statementseq(0);
	}

	private StatementseqContext statementseq(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		StatementseqContext _localctx = new StatementseqContext(_ctx, _parentState);
		StatementseqContext _prevctx = _localctx;
		int _startState = 128;
		enterRecursionRule(_localctx, 128, RULE_statementseq, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1122);
			statement();
			}
			_ctx.stop = _input.LT(-1);
			setState(1128);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new StatementseqContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_statementseq);
					setState(1124);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1125);
					statement();
					}
					} 
				}
				setState(1130);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class SelectionstatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(CPP14Parser.If, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(CPP14Parser.Else, 0); }
		public TerminalNode Switch() { return getToken(CPP14Parser.Switch, 0); }
		public SelectionstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectionstatement; }
	}

	public final SelectionstatementContext selectionstatement() throws RecognitionException {
		SelectionstatementContext _localctx = new SelectionstatementContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_selectionstatement);
		try {
			setState(1151);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1131);
				match(If);
				setState(1132);
				match(LeftParen);
				setState(1133);
				condition();
				setState(1134);
				match(RightParen);
				setState(1135);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1137);
				match(If);
				setState(1138);
				match(LeftParen);
				setState(1139);
				condition();
				setState(1140);
				match(RightParen);
				setState(1141);
				statement();
				setState(1142);
				match(Else);
				setState(1143);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1145);
				match(Switch);
				setState(1146);
				match(LeftParen);
				setState(1147);
				condition();
				setState(1148);
				match(RightParen);
				setState(1149);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public InitializerclauseContext initializerclause() {
			return getRuleContext(InitializerclauseContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_condition);
		int _la;
		try {
			setState(1169);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1153);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1155);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1154);
					attributespecifierseq(0);
					}
				}

				setState(1157);
				declspecifierseq();
				setState(1158);
				declarator();
				setState(1159);
				match(Assign);
				setState(1160);
				initializerclause();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1163);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1162);
					attributespecifierseq(0);
					}
				}

				setState(1165);
				declspecifierseq();
				setState(1166);
				declarator();
				setState(1167);
				bracedinitlist();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationstatementContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(CPP14Parser.While, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Do() { return getToken(CPP14Parser.Do, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode For() { return getToken(CPP14Parser.For, 0); }
		public ForinitstatementContext forinitstatement() {
			return getRuleContext(ForinitstatementContext.class,0);
		}
		public ForrangedeclarationContext forrangedeclaration() {
			return getRuleContext(ForrangedeclarationContext.class,0);
		}
		public ForrangeinitializerContext forrangeinitializer() {
			return getRuleContext(ForrangeinitializerContext.class,0);
		}
		public IterationstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationstatement; }
	}

	public final IterationstatementContext iterationstatement() throws RecognitionException {
		IterationstatementContext _localctx = new IterationstatementContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_iterationstatement);
		int _la;
		try {
			setState(1206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1171);
				match(While);
				setState(1172);
				match(LeftParen);
				setState(1173);
				condition();
				setState(1174);
				match(RightParen);
				setState(1175);
				statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1177);
				match(Do);
				setState(1178);
				statement();
				setState(1179);
				match(While);
				setState(1180);
				match(LeftParen);
				setState(1181);
				expression(0);
				setState(1182);
				match(RightParen);
				setState(1183);
				match(Semi);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1185);
				match(For);
				setState(1186);
				match(LeftParen);
				setState(1187);
				forinitstatement();
				setState(1189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__6) | (1L << T__7) | (1L << Alignas) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << False) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator) | (1L << Register))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static - 64)) | (1L << (Static_cast - 64)) | (1L << (Struct - 64)) | (1L << (This - 64)) | (1L << (Thread_local - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typedef - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Union - 64)) | (1L << (Unsigned - 64)) | (1L << (Virtual - 64)) | (1L << (Void - 64)) | (1L << (Volatile - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(1188);
					condition();
					}
				}

				setState(1191);
				match(Semi);
				setState(1193);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(1192);
					expression(0);
					}
				}

				setState(1195);
				match(RightParen);
				setState(1196);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1198);
				match(For);
				setState(1199);
				match(LeftParen);
				setState(1200);
				forrangedeclaration();
				setState(1201);
				match(Colon);
				setState(1202);
				forrangeinitializer();
				setState(1203);
				match(RightParen);
				setState(1204);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForinitstatementContext extends ParserRuleContext {
		public ExpressionstatementContext expressionstatement() {
			return getRuleContext(ExpressionstatementContext.class,0);
		}
		public SimpledeclarationContext simpledeclaration() {
			return getRuleContext(SimpledeclarationContext.class,0);
		}
		public ForinitstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forinitstatement; }
	}

	public final ForinitstatementContext forinitstatement() throws RecognitionException {
		ForinitstatementContext _localctx = new ForinitstatementContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_forinitstatement);
		try {
			setState(1210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1208);
				expressionstatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1209);
				simpledeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForrangedeclarationContext extends ParserRuleContext {
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public ForrangedeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forrangedeclaration; }
	}

	public final ForrangedeclarationContext forrangedeclaration() throws RecognitionException {
		ForrangedeclarationContext _localctx = new ForrangedeclarationContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_forrangedeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(1212);
				attributespecifierseq(0);
				}
			}

			setState(1215);
			declspecifierseq();
			setState(1216);
			declarator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForrangeinitializerContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public ForrangeinitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forrangeinitializer; }
	}

	public final ForrangeinitializerContext forrangeinitializer() throws RecognitionException {
		ForrangeinitializerContext _localctx = new ForrangeinitializerContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_forrangeinitializer);
		try {
			setState(1220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case Alignof:
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Const_cast:
			case Decltype:
			case Delete:
			case Double:
			case Dynamic_cast:
			case False:
			case Float:
			case Int:
			case Long:
			case New:
			case Noexcept:
			case Nullptr:
			case Operator:
			case Reinterpret_cast:
			case Short:
			case Signed:
			case Sizeof:
			case Static_cast:
			case This:
			case Throw:
			case True:
			case Typeid_:
			case Typename_:
			case Unsigned:
			case Void:
			case Wchar:
			case LeftParen:
			case LeftBracket:
			case Plus:
			case Minus:
			case Star:
			case And:
			case Or:
			case Tilde:
			case PlusPlus:
			case MinusMinus:
			case Doublecolon:
			case Identifier:
			case Integerliteral:
			case Characterliteral:
			case Floatingliteral:
			case Stringliteral:
			case Userdefinedintegerliteral:
			case Userdefinedfloatingliteral:
			case Userdefinedstringliteral:
			case Userdefinedcharacterliteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(1218);
				expression(0);
				}
				break;
			case LeftBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(1219);
				bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JumpstatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(CPP14Parser.Break, 0); }
		public TerminalNode Continue() { return getToken(CPP14Parser.Continue, 0); }
		public TerminalNode Return() { return getToken(CPP14Parser.Return, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public TerminalNode Goto() { return getToken(CPP14Parser.Goto, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public JumpstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jumpstatement; }
	}

	public final JumpstatementContext jumpstatement() throws RecognitionException {
		JumpstatementContext _localctx = new JumpstatementContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_jumpstatement);
		int _la;
		try {
			setState(1238);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1222);
				match(Break);
				setState(1223);
				match(Semi);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1224);
				match(Continue);
				setState(1225);
				match(Semi);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1226);
				match(Return);
				setState(1228);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(1227);
					expression(0);
					}
				}

				setState(1230);
				match(Semi);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1231);
				match(Return);
				setState(1232);
				bracedinitlist();
				setState(1233);
				match(Semi);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1235);
				match(Goto);
				setState(1236);
				match(Identifier);
				setState(1237);
				match(Semi);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationstatementContext extends ParserRuleContext {
		public BlockdeclarationContext blockdeclaration() {
			return getRuleContext(BlockdeclarationContext.class,0);
		}
		public DeclarationstatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationstatement; }
	}

	public final DeclarationstatementContext declarationstatement() throws RecognitionException {
		DeclarationstatementContext _localctx = new DeclarationstatementContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_declarationstatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1240);
			blockdeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationseqContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public DeclarationseqContext declarationseq() {
			return getRuleContext(DeclarationseqContext.class,0);
		}
		public DeclarationseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationseq; }
	}

	public final DeclarationseqContext declarationseq() throws RecognitionException {
		return declarationseq(0);
	}

	private DeclarationseqContext declarationseq(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DeclarationseqContext _localctx = new DeclarationseqContext(_ctx, _parentState);
		DeclarationseqContext _prevctx = _localctx;
		int _startState = 146;
		enterRecursionRule(_localctx, 146, RULE_declarationseq, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1243);
			declaration();
			}
			_ctx.stop = _input.LT(-1);
			setState(1249);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,104,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationseqContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_declarationseq);
					setState(1245);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1246);
					declaration();
					}
					} 
				}
				setState(1251);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,104,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public BlockdeclarationContext blockdeclaration() {
			return getRuleContext(BlockdeclarationContext.class,0);
		}
		public FunctiondefinitionContext functiondefinition() {
			return getRuleContext(FunctiondefinitionContext.class,0);
		}
		public TemplatedeclarationContext templatedeclaration() {
			return getRuleContext(TemplatedeclarationContext.class,0);
		}
		public ExplicitinstantiationContext explicitinstantiation() {
			return getRuleContext(ExplicitinstantiationContext.class,0);
		}
		public ExplicitspecializationContext explicitspecialization() {
			return getRuleContext(ExplicitspecializationContext.class,0);
		}
		public LinkagespecificationContext linkagespecification() {
			return getRuleContext(LinkagespecificationContext.class,0);
		}
		public NamespacedefinitionContext namespacedefinition() {
			return getRuleContext(NamespacedefinitionContext.class,0);
		}
		public EmptydeclarationContext emptydeclaration() {
			return getRuleContext(EmptydeclarationContext.class,0);
		}
		public AttributedeclarationContext attributedeclaration() {
			return getRuleContext(AttributedeclarationContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_declaration);
		try {
			setState(1261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1252);
				blockdeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1253);
				functiondefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1254);
				templatedeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1255);
				explicitinstantiation();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1256);
				explicitspecialization();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1257);
				linkagespecification();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1258);
				namespacedefinition();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1259);
				emptydeclaration();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1260);
				attributedeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockdeclarationContext extends ParserRuleContext {
		public SimpledeclarationContext simpledeclaration() {
			return getRuleContext(SimpledeclarationContext.class,0);
		}
		public AsmdefinitionContext asmdefinition() {
			return getRuleContext(AsmdefinitionContext.class,0);
		}
		public NamespacealiasdefinitionContext namespacealiasdefinition() {
			return getRuleContext(NamespacealiasdefinitionContext.class,0);
		}
		public UsingdeclarationContext usingdeclaration() {
			return getRuleContext(UsingdeclarationContext.class,0);
		}
		public UsingdirectiveContext usingdirective() {
			return getRuleContext(UsingdirectiveContext.class,0);
		}
		public Static_assertdeclarationContext static_assertdeclaration() {
			return getRuleContext(Static_assertdeclarationContext.class,0);
		}
		public AliasdeclarationContext aliasdeclaration() {
			return getRuleContext(AliasdeclarationContext.class,0);
		}
		public OpaqueenumdeclarationContext opaqueenumdeclaration() {
			return getRuleContext(OpaqueenumdeclarationContext.class,0);
		}
		public BlockdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockdeclaration; }
	}

	public final BlockdeclarationContext blockdeclaration() throws RecognitionException {
		BlockdeclarationContext _localctx = new BlockdeclarationContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_blockdeclaration);
		try {
			setState(1271);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1263);
				simpledeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1264);
				asmdefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1265);
				namespacealiasdefinition();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1266);
				usingdeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1267);
				usingdirective();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1268);
				static_assertdeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1269);
				aliasdeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1270);
				opaqueenumdeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AliasdeclarationContext extends ParserRuleContext {
		public TerminalNode Using() { return getToken(CPP14Parser.Using, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public AliasdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasdeclaration; }
	}

	public final AliasdeclarationContext aliasdeclaration() throws RecognitionException {
		AliasdeclarationContext _localctx = new AliasdeclarationContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_aliasdeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1273);
			match(Using);
			setState(1274);
			match(Identifier);
			setState(1276);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(1275);
				attributespecifierseq(0);
				}
			}

			setState(1278);
			match(Assign);
			setState(1279);
			thetypeid();
			setState(1280);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpledeclarationContext extends ParserRuleContext {
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public InitdeclaratorlistContext initdeclaratorlist() {
			return getRuleContext(InitdeclaratorlistContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public SimpledeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpledeclaration; }
	}

	public final SimpledeclarationContext simpledeclaration() throws RecognitionException {
		SimpledeclarationContext _localctx = new SimpledeclarationContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_simpledeclaration);
		int _la;
		try {
			setState(1296);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case T__8:
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Class:
			case Const:
			case Constexpr:
			case Decltype:
			case Double:
			case Enum:
			case Explicit:
			case Extern:
			case Float:
			case Friend:
			case Inline:
			case Int:
			case Long:
			case Mutable:
			case Operator:
			case Register:
			case Short:
			case Signed:
			case Static:
			case Struct:
			case Thread_local:
			case Typedef:
			case Typename_:
			case Union:
			case Unsigned:
			case Virtual:
			case Void:
			case Volatile:
			case Wchar:
			case LeftParen:
			case Star:
			case And:
			case Tilde:
			case Doublecolon:
			case Semi:
			case Ellipsis:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1283);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
				case 1:
					{
					setState(1282);
					declspecifierseq();
					}
					break;
				}
				setState(1286);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << Decltype) | (1L << Operator))) != 0) || ((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LeftParen - 91)) | (1L << (Star - 91)) | (1L << (And - 91)) | (1L << (Tilde - 91)) | (1L << (Doublecolon - 91)) | (1L << (Ellipsis - 91)) | (1L << (Identifier - 91)))) != 0)) {
					{
					setState(1285);
					initdeclaratorlist(0);
					}
				}

				setState(1288);
				match(Semi);
				}
				break;
			case Alignas:
			case LeftBracket:
				enterOuterAlt(_localctx, 2);
				{
				setState(1289);
				attributespecifierseq(0);
				setState(1291);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
				case 1:
					{
					setState(1290);
					declspecifierseq();
					}
					break;
				}
				setState(1293);
				initdeclaratorlist(0);
				setState(1294);
				match(Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Static_assertdeclarationContext extends ParserRuleContext {
		public TerminalNode Static_assert() { return getToken(CPP14Parser.Static_assert, 0); }
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public Static_assertdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_static_assertdeclaration; }
	}

	public final Static_assertdeclarationContext static_assertdeclaration() throws RecognitionException {
		Static_assertdeclarationContext _localctx = new Static_assertdeclarationContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_static_assertdeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1298);
			match(Static_assert);
			setState(1299);
			match(LeftParen);
			setState(1300);
			constantexpression();
			setState(1301);
			match(Comma);
			setState(1302);
			match(Stringliteral);
			setState(1303);
			match(RightParen);
			setState(1304);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptydeclarationContext extends ParserRuleContext {
		public EmptydeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptydeclaration; }
	}

	public final EmptydeclarationContext emptydeclaration() throws RecognitionException {
		EmptydeclarationContext _localctx = new EmptydeclarationContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_emptydeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1306);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributedeclarationContext extends ParserRuleContext {
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public AttributedeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributedeclaration; }
	}

	public final AttributedeclarationContext attributedeclaration() throws RecognitionException {
		AttributedeclarationContext _localctx = new AttributedeclarationContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_attributedeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1308);
			attributespecifierseq(0);
			setState(1309);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclspecifierContext extends ParserRuleContext {
		public StorageclassspecifierContext storageclassspecifier() {
			return getRuleContext(StorageclassspecifierContext.class,0);
		}
		public TypespecifierContext typespecifier() {
			return getRuleContext(TypespecifierContext.class,0);
		}
		public FunctionspecifierContext functionspecifier() {
			return getRuleContext(FunctionspecifierContext.class,0);
		}
		public TerminalNode Friend() { return getToken(CPP14Parser.Friend, 0); }
		public TerminalNode Typedef() { return getToken(CPP14Parser.Typedef, 0); }
		public TerminalNode Constexpr() { return getToken(CPP14Parser.Constexpr, 0); }
		public DeclspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declspecifier; }
	}

	public final DeclspecifierContext declspecifier() throws RecognitionException {
		DeclspecifierContext _localctx = new DeclspecifierContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_declspecifier);
		try {
			setState(1317);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Extern:
			case Mutable:
			case Register:
			case Static:
			case Thread_local:
				enterOuterAlt(_localctx, 1);
				{
				setState(1311);
				storageclassspecifier();
				}
				break;
			case T__1:
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Class:
			case Const:
			case Decltype:
			case Double:
			case Enum:
			case Float:
			case Int:
			case Long:
			case Short:
			case Signed:
			case Struct:
			case Typename_:
			case Union:
			case Unsigned:
			case Void:
			case Volatile:
			case Wchar:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(1312);
				typespecifier();
				}
				break;
			case Explicit:
			case Inline:
			case Virtual:
				enterOuterAlt(_localctx, 3);
				{
				setState(1313);
				functionspecifier();
				}
				break;
			case Friend:
				enterOuterAlt(_localctx, 4);
				{
				setState(1314);
				match(Friend);
				}
				break;
			case Typedef:
				enterOuterAlt(_localctx, 5);
				{
				setState(1315);
				match(Typedef);
				}
				break;
			case Constexpr:
				enterOuterAlt(_localctx, 6);
				{
				setState(1316);
				match(Constexpr);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclspecifierseqContext extends ParserRuleContext {
		public DeclspecifierContext declspecifier() {
			return getRuleContext(DeclspecifierContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public DeclspecifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declspecifierseq; }
	}

	public final DeclspecifierseqContext declspecifierseq() throws RecognitionException {
		DeclspecifierseqContext _localctx = new DeclspecifierseqContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_declspecifierseq);
		try {
			setState(1326);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1319);
				declspecifier();
				setState(1321);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
				case 1:
					{
					setState(1320);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1323);
				declspecifier();
				setState(1324);
				declspecifierseq();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StorageclassspecifierContext extends ParserRuleContext {
		public TerminalNode Register() { return getToken(CPP14Parser.Register, 0); }
		public TerminalNode Static() { return getToken(CPP14Parser.Static, 0); }
		public TerminalNode Thread_local() { return getToken(CPP14Parser.Thread_local, 0); }
		public TerminalNode Extern() { return getToken(CPP14Parser.Extern, 0); }
		public TerminalNode Mutable() { return getToken(CPP14Parser.Mutable, 0); }
		public StorageclassspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storageclassspecifier; }
	}

	public final StorageclassspecifierContext storageclassspecifier() throws RecognitionException {
		StorageclassspecifierContext _localctx = new StorageclassspecifierContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_storageclassspecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1328);
			_la = _input.LA(1);
			if ( !(((((_la - 42)) & ~0x3f) == 0 && ((1L << (_la - 42)) & ((1L << (Extern - 42)) | (1L << (Mutable - 42)) | (1L << (Register - 42)) | (1L << (Static - 42)) | (1L << (Thread_local - 42)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionspecifierContext extends ParserRuleContext {
		public TerminalNode Inline() { return getToken(CPP14Parser.Inline, 0); }
		public TerminalNode Virtual() { return getToken(CPP14Parser.Virtual, 0); }
		public TerminalNode Explicit() { return getToken(CPP14Parser.Explicit, 0); }
		public FunctionspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionspecifier; }
	}

	public final FunctionspecifierContext functionspecifier() throws RecognitionException {
		FunctionspecifierContext _localctx = new FunctionspecifierContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_functionspecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1330);
			_la = _input.LA(1);
			if ( !(((((_la - 40)) & ~0x3f) == 0 && ((1L << (_la - 40)) & ((1L << (Explicit - 40)) | (1L << (Inline - 40)) | (1L << (Virtual - 40)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypedefnameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public TypedefnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typedefname; }
	}

	public final TypedefnameContext typedefname() throws RecognitionException {
		TypedefnameContext _localctx = new TypedefnameContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_typedefname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1332);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypespecifierContext extends ParserRuleContext {
		public TrailingtypespecifierContext trailingtypespecifier() {
			return getRuleContext(TrailingtypespecifierContext.class,0);
		}
		public ClassspecifierContext classspecifier() {
			return getRuleContext(ClassspecifierContext.class,0);
		}
		public EnumspecifierContext enumspecifier() {
			return getRuleContext(EnumspecifierContext.class,0);
		}
		public TypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typespecifier; }
	}

	public final TypespecifierContext typespecifier() throws RecognitionException {
		TypespecifierContext _localctx = new TypespecifierContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_typespecifier);
		try {
			setState(1337);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1334);
				trailingtypespecifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1335);
				classspecifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1336);
				enumspecifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrailingtypespecifierContext extends ParserRuleContext {
		public SimpletypespecifierContext simpletypespecifier() {
			return getRuleContext(SimpletypespecifierContext.class,0);
		}
		public ElaboratedtypespecifierContext elaboratedtypespecifier() {
			return getRuleContext(ElaboratedtypespecifierContext.class,0);
		}
		public TypenamespecifierContext typenamespecifier() {
			return getRuleContext(TypenamespecifierContext.class,0);
		}
		public CvqualifierContext cvqualifier() {
			return getRuleContext(CvqualifierContext.class,0);
		}
		public TrailingtypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trailingtypespecifier; }
	}

	public final TrailingtypespecifierContext trailingtypespecifier() throws RecognitionException {
		TrailingtypespecifierContext _localctx = new TrailingtypespecifierContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_trailingtypespecifier);
		try {
			setState(1343);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Decltype:
			case Double:
			case Float:
			case Int:
			case Long:
			case Short:
			case Signed:
			case Unsigned:
			case Void:
			case Wchar:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1339);
				simpletypespecifier();
				}
				break;
			case Class:
			case Enum:
			case Struct:
			case Union:
				enterOuterAlt(_localctx, 2);
				{
				setState(1340);
				elaboratedtypespecifier();
				}
				break;
			case Typename_:
				enterOuterAlt(_localctx, 3);
				{
				setState(1341);
				typenamespecifier();
				}
				break;
			case Const:
			case Volatile:
				enterOuterAlt(_localctx, 4);
				{
				setState(1342);
				cvqualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypespecifierseqContext extends ParserRuleContext {
		public TypespecifierContext typespecifier() {
			return getRuleContext(TypespecifierContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public TypespecifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typespecifierseq; }
	}

	public final TypespecifierseqContext typespecifierseq() throws RecognitionException {
		TypespecifierseqContext _localctx = new TypespecifierseqContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_typespecifierseq);
		try {
			setState(1352);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1345);
				typespecifier();
				setState(1347);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
				case 1:
					{
					setState(1346);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1349);
				typespecifier();
				setState(1350);
				typespecifierseq();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrailingtypespecifierseqContext extends ParserRuleContext {
		public TrailingtypespecifierContext trailingtypespecifier() {
			return getRuleContext(TrailingtypespecifierContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TrailingtypespecifierseqContext trailingtypespecifierseq() {
			return getRuleContext(TrailingtypespecifierseqContext.class,0);
		}
		public TrailingtypespecifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trailingtypespecifierseq; }
	}

	public final TrailingtypespecifierseqContext trailingtypespecifierseq() throws RecognitionException {
		TrailingtypespecifierseqContext _localctx = new TrailingtypespecifierseqContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_trailingtypespecifierseq);
		try {
			setState(1361);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1354);
				trailingtypespecifier();
				setState(1356);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
				case 1:
					{
					setState(1355);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1358);
				trailingtypespecifier();
				setState(1359);
				trailingtypespecifierseq();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpletypespecifierContext extends ParserRuleContext {
		public ThetypenameContext thetypename() {
			return getRuleContext(ThetypenameContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public TerminalNode Char() { return getToken(CPP14Parser.Char, 0); }
		public TerminalNode Char16() { return getToken(CPP14Parser.Char16, 0); }
		public TerminalNode Char32() { return getToken(CPP14Parser.Char32, 0); }
		public TerminalNode Wchar() { return getToken(CPP14Parser.Wchar, 0); }
		public TerminalNode Bool() { return getToken(CPP14Parser.Bool, 0); }
		public TerminalNode Short() { return getToken(CPP14Parser.Short, 0); }
		public TerminalNode Int() { return getToken(CPP14Parser.Int, 0); }
		public TerminalNode Long() { return getToken(CPP14Parser.Long, 0); }
		public TerminalNode Signed() { return getToken(CPP14Parser.Signed, 0); }
		public TerminalNode Unsigned() { return getToken(CPP14Parser.Unsigned, 0); }
		public TerminalNode Float() { return getToken(CPP14Parser.Float, 0); }
		public TerminalNode Double() { return getToken(CPP14Parser.Double, 0); }
		public TerminalNode Void() { return getToken(CPP14Parser.Void, 0); }
		public TerminalNode Auto() { return getToken(CPP14Parser.Auto, 0); }
		public DecltypespecifierContext decltypespecifier() {
			return getRuleContext(DecltypespecifierContext.class,0);
		}
		public SimpletypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpletypespecifier; }
	}

	public final SimpletypespecifierContext simpletypespecifier() throws RecognitionException {
		SimpletypespecifierContext _localctx = new SimpletypespecifierContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_simpletypespecifier);
		try {
			setState(1386);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,122,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1364);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
				case 1:
					{
					setState(1363);
					nestednamespecifier(0);
					}
					break;
				}
				setState(1366);
				thetypename();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1367);
				nestednamespecifier(0);
				setState(1368);
				match(Template);
				setState(1369);
				simpletemplateid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1371);
				match(Char);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1372);
				match(Char16);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1373);
				match(Char32);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1374);
				match(Wchar);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1375);
				match(Bool);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1376);
				match(Short);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1377);
				match(Int);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1378);
				match(Long);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1379);
				match(Signed);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1380);
				match(Unsigned);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(1381);
				match(Float);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(1382);
				match(Double);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(1383);
				match(Void);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(1384);
				match(Auto);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(1385);
				decltypespecifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThetypenameContext extends ParserRuleContext {
		public ClassnameContext classname() {
			return getRuleContext(ClassnameContext.class,0);
		}
		public EnumnameContext enumname() {
			return getRuleContext(EnumnameContext.class,0);
		}
		public TypedefnameContext typedefname() {
			return getRuleContext(TypedefnameContext.class,0);
		}
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public ThetypenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_thetypename; }
	}

	public final ThetypenameContext thetypename() throws RecognitionException {
		ThetypenameContext _localctx = new ThetypenameContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_thetypename);
		try {
			setState(1392);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,123,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1388);
				classname();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1389);
				enumname();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1390);
				typedefname();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1391);
				simpletemplateid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DecltypespecifierContext extends ParserRuleContext {
		public TerminalNode Decltype() { return getToken(CPP14Parser.Decltype, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Auto() { return getToken(CPP14Parser.Auto, 0); }
		public DecltypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decltypespecifier; }
	}

	public final DecltypespecifierContext decltypespecifier() throws RecognitionException {
		DecltypespecifierContext _localctx = new DecltypespecifierContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_decltypespecifier);
		try {
			setState(1403);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1394);
				match(Decltype);
				setState(1395);
				match(LeftParen);
				setState(1396);
				expression(0);
				setState(1397);
				match(RightParen);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1399);
				match(Decltype);
				setState(1400);
				match(LeftParen);
				setState(1401);
				match(Auto);
				setState(1402);
				match(RightParen);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElaboratedtypespecifierContext extends ParserRuleContext {
		public ClasskeyContext classkey() {
			return getRuleContext(ClasskeyContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public TerminalNode Enum() { return getToken(CPP14Parser.Enum, 0); }
		public ElaboratedtypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elaboratedtypespecifier; }
	}

	public final ElaboratedtypespecifierContext elaboratedtypespecifier() throws RecognitionException {
		ElaboratedtypespecifierContext _localctx = new ElaboratedtypespecifierContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_elaboratedtypespecifier);
		int _la;
		try {
			setState(1429);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1405);
				classkey();
				setState(1407);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1406);
					attributespecifierseq(0);
					}
				}

				setState(1410);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
				case 1:
					{
					setState(1409);
					nestednamespecifier(0);
					}
					break;
				}
				setState(1412);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1414);
				classkey();
				setState(1415);
				simpletemplateid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1417);
				classkey();
				setState(1418);
				nestednamespecifier(0);
				setState(1420);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Template) {
					{
					setState(1419);
					match(Template);
					}
				}

				setState(1422);
				simpletemplateid();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1424);
				match(Enum);
				setState(1426);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
				case 1:
					{
					setState(1425);
					nestednamespecifier(0);
					}
					break;
				}
				setState(1428);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumnameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public EnumnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumname; }
	}

	public final EnumnameContext enumname() throws RecognitionException {
		EnumnameContext _localctx = new EnumnameContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_enumname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1431);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumspecifierContext extends ParserRuleContext {
		public EnumheadContext enumhead() {
			return getRuleContext(EnumheadContext.class,0);
		}
		public EnumeratorlistContext enumeratorlist() {
			return getRuleContext(EnumeratorlistContext.class,0);
		}
		public EnumspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumspecifier; }
	}

	public final EnumspecifierContext enumspecifier() throws RecognitionException {
		EnumspecifierContext _localctx = new EnumspecifierContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_enumspecifier);
		int _la;
		try {
			setState(1446);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1433);
				enumhead();
				setState(1434);
				match(LeftBrace);
				setState(1436);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(1435);
					enumeratorlist(0);
					}
				}

				setState(1438);
				match(RightBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1440);
				enumhead();
				setState(1441);
				match(LeftBrace);
				setState(1442);
				enumeratorlist(0);
				setState(1443);
				match(Comma);
				setState(1444);
				match(RightBrace);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumheadContext extends ParserRuleContext {
		public EnumkeyContext enumkey() {
			return getRuleContext(EnumkeyContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public EnumbaseContext enumbase() {
			return getRuleContext(EnumbaseContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public EnumheadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumhead; }
	}

	public final EnumheadContext enumhead() throws RecognitionException {
		EnumheadContext _localctx = new EnumheadContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_enumhead);
		int _la;
		try {
			setState(1467);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1448);
				enumkey();
				setState(1450);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1449);
					attributespecifierseq(0);
					}
				}

				setState(1453);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(1452);
					match(Identifier);
					}
				}

				setState(1456);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(1455);
					enumbase();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1458);
				enumkey();
				setState(1460);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1459);
					attributespecifierseq(0);
					}
				}

				setState(1462);
				nestednamespecifier(0);
				setState(1463);
				match(Identifier);
				setState(1465);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(1464);
					enumbase();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OpaqueenumdeclarationContext extends ParserRuleContext {
		public EnumkeyContext enumkey() {
			return getRuleContext(EnumkeyContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public EnumbaseContext enumbase() {
			return getRuleContext(EnumbaseContext.class,0);
		}
		public OpaqueenumdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_opaqueenumdeclaration; }
	}

	public final OpaqueenumdeclarationContext opaqueenumdeclaration() throws RecognitionException {
		OpaqueenumdeclarationContext _localctx = new OpaqueenumdeclarationContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_opaqueenumdeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1469);
			enumkey();
			setState(1471);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(1470);
				attributespecifierseq(0);
				}
			}

			setState(1473);
			match(Identifier);
			setState(1475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(1474);
				enumbase();
				}
			}

			setState(1477);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumkeyContext extends ParserRuleContext {
		public TerminalNode Enum() { return getToken(CPP14Parser.Enum, 0); }
		public TerminalNode Class() { return getToken(CPP14Parser.Class, 0); }
		public TerminalNode Struct() { return getToken(CPP14Parser.Struct, 0); }
		public EnumkeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumkey; }
	}

	public final EnumkeyContext enumkey() throws RecognitionException {
		EnumkeyContext _localctx = new EnumkeyContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_enumkey);
		try {
			setState(1484);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1479);
				match(Enum);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1480);
				match(Enum);
				setState(1481);
				match(Class);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1482);
				match(Enum);
				setState(1483);
				match(Struct);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumbaseContext extends ParserRuleContext {
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public EnumbaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumbase; }
	}

	public final EnumbaseContext enumbase() throws RecognitionException {
		EnumbaseContext _localctx = new EnumbaseContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_enumbase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1486);
			match(Colon);
			setState(1487);
			typespecifierseq();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumeratorlistContext extends ParserRuleContext {
		public EnumeratordefinitionContext enumeratordefinition() {
			return getRuleContext(EnumeratordefinitionContext.class,0);
		}
		public EnumeratorlistContext enumeratorlist() {
			return getRuleContext(EnumeratorlistContext.class,0);
		}
		public EnumeratorlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumeratorlist; }
	}

	public final EnumeratorlistContext enumeratorlist() throws RecognitionException {
		return enumeratorlist(0);
	}

	private EnumeratorlistContext enumeratorlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		EnumeratorlistContext _localctx = new EnumeratorlistContext(_ctx, _parentState);
		EnumeratorlistContext _prevctx = _localctx;
		int _startState = 200;
		enterRecursionRule(_localctx, 200, RULE_enumeratorlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1490);
			enumeratordefinition();
			}
			_ctx.stop = _input.LT(-1);
			setState(1497);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new EnumeratorlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_enumeratorlist);
					setState(1492);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1493);
					match(Comma);
					setState(1494);
					enumeratordefinition();
					}
					} 
				}
				setState(1499);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,141,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class EnumeratordefinitionContext extends ParserRuleContext {
		public EnumeratorContext enumerator() {
			return getRuleContext(EnumeratorContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public EnumeratordefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumeratordefinition; }
	}

	public final EnumeratordefinitionContext enumeratordefinition() throws RecognitionException {
		EnumeratordefinitionContext _localctx = new EnumeratordefinitionContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_enumeratordefinition);
		try {
			setState(1505);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1500);
				enumerator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1501);
				enumerator();
				setState(1502);
				match(Assign);
				setState(1503);
				constantexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumeratorContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public EnumeratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumerator; }
	}

	public final EnumeratorContext enumerator() throws RecognitionException {
		EnumeratorContext _localctx = new EnumeratorContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_enumerator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1507);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespacenameContext extends ParserRuleContext {
		public OriginalnamespacenameContext originalnamespacename() {
			return getRuleContext(OriginalnamespacenameContext.class,0);
		}
		public NamespacealiasContext namespacealias() {
			return getRuleContext(NamespacealiasContext.class,0);
		}
		public NamespacenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespacename; }
	}

	public final NamespacenameContext namespacename() throws RecognitionException {
		NamespacenameContext _localctx = new NamespacenameContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_namespacename);
		try {
			setState(1511);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1509);
				originalnamespacename();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1510);
				namespacealias();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OriginalnamespacenameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public OriginalnamespacenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_originalnamespacename; }
	}

	public final OriginalnamespacenameContext originalnamespacename() throws RecognitionException {
		OriginalnamespacenameContext _localctx = new OriginalnamespacenameContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_originalnamespacename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1513);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespacedefinitionContext extends ParserRuleContext {
		public NamednamespacedefinitionContext namednamespacedefinition() {
			return getRuleContext(NamednamespacedefinitionContext.class,0);
		}
		public UnnamednamespacedefinitionContext unnamednamespacedefinition() {
			return getRuleContext(UnnamednamespacedefinitionContext.class,0);
		}
		public NamespacedefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespacedefinition; }
	}

	public final NamespacedefinitionContext namespacedefinition() throws RecognitionException {
		NamespacedefinitionContext _localctx = new NamespacedefinitionContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_namespacedefinition);
		try {
			setState(1517);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1515);
				namednamespacedefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1516);
				unnamednamespacedefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamednamespacedefinitionContext extends ParserRuleContext {
		public OriginalnamespacedefinitionContext originalnamespacedefinition() {
			return getRuleContext(OriginalnamespacedefinitionContext.class,0);
		}
		public ExtensionnamespacedefinitionContext extensionnamespacedefinition() {
			return getRuleContext(ExtensionnamespacedefinitionContext.class,0);
		}
		public NamednamespacedefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namednamespacedefinition; }
	}

	public final NamednamespacedefinitionContext namednamespacedefinition() throws RecognitionException {
		NamednamespacedefinitionContext _localctx = new NamednamespacedefinitionContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_namednamespacedefinition);
		try {
			setState(1521);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1519);
				originalnamespacedefinition();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1520);
				extensionnamespacedefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OriginalnamespacedefinitionContext extends ParserRuleContext {
		public TerminalNode Namespace() { return getToken(CPP14Parser.Namespace, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public NamespacebodyContext namespacebody() {
			return getRuleContext(NamespacebodyContext.class,0);
		}
		public TerminalNode Inline() { return getToken(CPP14Parser.Inline, 0); }
		public OriginalnamespacedefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_originalnamespacedefinition; }
	}

	public final OriginalnamespacedefinitionContext originalnamespacedefinition() throws RecognitionException {
		OriginalnamespacedefinitionContext _localctx = new OriginalnamespacedefinitionContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_originalnamespacedefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1524);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Inline) {
				{
				setState(1523);
				match(Inline);
				}
			}

			setState(1526);
			match(Namespace);
			setState(1527);
			match(Identifier);
			setState(1528);
			match(LeftBrace);
			setState(1529);
			namespacebody();
			setState(1530);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtensionnamespacedefinitionContext extends ParserRuleContext {
		public TerminalNode Namespace() { return getToken(CPP14Parser.Namespace, 0); }
		public OriginalnamespacenameContext originalnamespacename() {
			return getRuleContext(OriginalnamespacenameContext.class,0);
		}
		public NamespacebodyContext namespacebody() {
			return getRuleContext(NamespacebodyContext.class,0);
		}
		public TerminalNode Inline() { return getToken(CPP14Parser.Inline, 0); }
		public ExtensionnamespacedefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extensionnamespacedefinition; }
	}

	public final ExtensionnamespacedefinitionContext extensionnamespacedefinition() throws RecognitionException {
		ExtensionnamespacedefinitionContext _localctx = new ExtensionnamespacedefinitionContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_extensionnamespacedefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1533);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Inline) {
				{
				setState(1532);
				match(Inline);
				}
			}

			setState(1535);
			match(Namespace);
			setState(1536);
			originalnamespacename();
			setState(1537);
			match(LeftBrace);
			setState(1538);
			namespacebody();
			setState(1539);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnnamednamespacedefinitionContext extends ParserRuleContext {
		public TerminalNode Namespace() { return getToken(CPP14Parser.Namespace, 0); }
		public NamespacebodyContext namespacebody() {
			return getRuleContext(NamespacebodyContext.class,0);
		}
		public TerminalNode Inline() { return getToken(CPP14Parser.Inline, 0); }
		public UnnamednamespacedefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unnamednamespacedefinition; }
	}

	public final UnnamednamespacedefinitionContext unnamednamespacedefinition() throws RecognitionException {
		UnnamednamespacedefinitionContext _localctx = new UnnamednamespacedefinitionContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_unnamednamespacedefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1542);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Inline) {
				{
				setState(1541);
				match(Inline);
				}
			}

			setState(1544);
			match(Namespace);
			setState(1545);
			match(LeftBrace);
			setState(1546);
			namespacebody();
			setState(1547);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespacebodyContext extends ParserRuleContext {
		public DeclarationseqContext declarationseq() {
			return getRuleContext(DeclarationseqContext.class,0);
		}
		public NamespacebodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespacebody; }
	}

	public final NamespacebodyContext namespacebody() throws RecognitionException {
		NamespacebodyContext _localctx = new NamespacebodyContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_namespacebody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__8) | (1L << Alignas) | (1L << Asm) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Namespace) | (1L << Operator) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 135)) & ~0x3f) == 0 && ((1L << (_la - 135)) & ((1L << (Doublecolon - 135)) | (1L << (Semi - 135)) | (1L << (Ellipsis - 135)) | (1L << (Identifier - 135)))) != 0)) {
				{
				setState(1549);
				declarationseq(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespacealiasContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public NamespacealiasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespacealias; }
	}

	public final NamespacealiasContext namespacealias() throws RecognitionException {
		NamespacealiasContext _localctx = new NamespacealiasContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_namespacealias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1552);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamespacealiasdefinitionContext extends ParserRuleContext {
		public TerminalNode Namespace() { return getToken(CPP14Parser.Namespace, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public QualifiednamespacespecifierContext qualifiednamespacespecifier() {
			return getRuleContext(QualifiednamespacespecifierContext.class,0);
		}
		public NamespacealiasdefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namespacealiasdefinition; }
	}

	public final NamespacealiasdefinitionContext namespacealiasdefinition() throws RecognitionException {
		NamespacealiasdefinitionContext _localctx = new NamespacealiasdefinitionContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_namespacealiasdefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1554);
			match(Namespace);
			setState(1555);
			match(Identifier);
			setState(1556);
			match(Assign);
			setState(1557);
			qualifiednamespacespecifier();
			setState(1558);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiednamespacespecifierContext extends ParserRuleContext {
		public NamespacenameContext namespacename() {
			return getRuleContext(NamespacenameContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public QualifiednamespacespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiednamespacespecifier; }
	}

	public final QualifiednamespacespecifierContext qualifiednamespacespecifier() throws RecognitionException {
		QualifiednamespacespecifierContext _localctx = new QualifiednamespacespecifierContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_qualifiednamespacespecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1561);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,150,_ctx) ) {
			case 1:
				{
				setState(1560);
				nestednamespecifier(0);
				}
				break;
			}
			setState(1563);
			namespacename();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingdeclarationContext extends ParserRuleContext {
		public TerminalNode Using() { return getToken(CPP14Parser.Using, 0); }
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public UnqualifiedidContext unqualifiedid() {
			return getRuleContext(UnqualifiedidContext.class,0);
		}
		public TerminalNode Typename_() { return getToken(CPP14Parser.Typename_, 0); }
		public UsingdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingdeclaration; }
	}

	public final UsingdeclarationContext usingdeclaration() throws RecognitionException {
		UsingdeclarationContext _localctx = new UsingdeclarationContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_usingdeclaration);
		int _la;
		try {
			setState(1578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1565);
				match(Using);
				setState(1567);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Typename_) {
					{
					setState(1566);
					match(Typename_);
					}
				}

				setState(1569);
				nestednamespecifier(0);
				setState(1570);
				unqualifiedid();
				setState(1571);
				match(Semi);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1573);
				match(Using);
				setState(1574);
				match(Doublecolon);
				setState(1575);
				unqualifiedid();
				setState(1576);
				match(Semi);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingdirectiveContext extends ParserRuleContext {
		public TerminalNode Using() { return getToken(CPP14Parser.Using, 0); }
		public TerminalNode Namespace() { return getToken(CPP14Parser.Namespace, 0); }
		public NamespacenameContext namespacename() {
			return getRuleContext(NamespacenameContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public UsingdirectiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingdirective; }
	}

	public final UsingdirectiveContext usingdirective() throws RecognitionException {
		UsingdirectiveContext _localctx = new UsingdirectiveContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_usingdirective);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1581);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(1580);
				attributespecifierseq(0);
				}
			}

			setState(1583);
			match(Using);
			setState(1584);
			match(Namespace);
			setState(1586);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,154,_ctx) ) {
			case 1:
				{
				setState(1585);
				nestednamespecifier(0);
				}
				break;
			}
			setState(1588);
			namespacename();
			setState(1589);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AsmdefinitionContext extends ParserRuleContext {
		public TerminalNode Asm() { return getToken(CPP14Parser.Asm, 0); }
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public AsmdefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asmdefinition; }
	}

	public final AsmdefinitionContext asmdefinition() throws RecognitionException {
		AsmdefinitionContext _localctx = new AsmdefinitionContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_asmdefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1591);
			match(Asm);
			setState(1592);
			match(LeftParen);
			setState(1593);
			match(Stringliteral);
			setState(1594);
			match(RightParen);
			setState(1595);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinkagespecificationContext extends ParserRuleContext {
		public TerminalNode Extern() { return getToken(CPP14Parser.Extern, 0); }
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public DeclarationseqContext declarationseq() {
			return getRuleContext(DeclarationseqContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public LinkagespecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linkagespecification; }
	}

	public final LinkagespecificationContext linkagespecification() throws RecognitionException {
		LinkagespecificationContext _localctx = new LinkagespecificationContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_linkagespecification);
		int _la;
		try {
			setState(1607);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,156,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1597);
				match(Extern);
				setState(1598);
				match(Stringliteral);
				setState(1599);
				match(LeftBrace);
				setState(1601);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__8) | (1L << Alignas) | (1L << Asm) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Namespace) | (1L << Operator) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 135)) & ~0x3f) == 0 && ((1L << (_la - 135)) & ((1L << (Doublecolon - 135)) | (1L << (Semi - 135)) | (1L << (Ellipsis - 135)) | (1L << (Identifier - 135)))) != 0)) {
					{
					setState(1600);
					declarationseq(0);
					}
				}

				setState(1603);
				match(RightBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1604);
				match(Extern);
				setState(1605);
				match(Stringliteral);
				setState(1606);
				declaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributespecifierseqContext extends ParserRuleContext {
		public AttributespecifierContext attributespecifier() {
			return getRuleContext(AttributespecifierContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public AttributespecifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributespecifierseq; }
	}

	public final AttributespecifierseqContext attributespecifierseq() throws RecognitionException {
		return attributespecifierseq(0);
	}

	private AttributespecifierseqContext attributespecifierseq(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AttributespecifierseqContext _localctx = new AttributespecifierseqContext(_ctx, _parentState);
		AttributespecifierseqContext _prevctx = _localctx;
		int _startState = 236;
		enterRecursionRule(_localctx, 236, RULE_attributespecifierseq, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1610);
			attributespecifier();
			}
			_ctx.stop = _input.LT(-1);
			setState(1616);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,157,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AttributespecifierseqContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_attributespecifierseq);
					setState(1612);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1613);
					attributespecifier();
					}
					} 
				}
				setState(1618);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,157,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AttributespecifierContext extends ParserRuleContext {
		public AttributelistContext attributelist() {
			return getRuleContext(AttributelistContext.class,0);
		}
		public AlignmentspecifierContext alignmentspecifier() {
			return getRuleContext(AlignmentspecifierContext.class,0);
		}
		public AttributespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributespecifier; }
	}

	public final AttributespecifierContext attributespecifier() throws RecognitionException {
		AttributespecifierContext _localctx = new AttributespecifierContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_attributespecifier);
		try {
			setState(1626);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftBracket:
				enterOuterAlt(_localctx, 1);
				{
				setState(1619);
				match(LeftBracket);
				setState(1620);
				match(LeftBracket);
				setState(1621);
				attributelist(0);
				setState(1622);
				match(RightBracket);
				setState(1623);
				match(RightBracket);
				}
				break;
			case Alignas:
				enterOuterAlt(_localctx, 2);
				{
				setState(1625);
				alignmentspecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlignmentspecifierContext extends ParserRuleContext {
		public TerminalNode Alignas() { return getToken(CPP14Parser.Alignas, 0); }
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public AlignmentspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alignmentspecifier; }
	}

	public final AlignmentspecifierContext alignmentspecifier() throws RecognitionException {
		AlignmentspecifierContext _localctx = new AlignmentspecifierContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_alignmentspecifier);
		int _la;
		try {
			setState(1644);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,161,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1628);
				match(Alignas);
				setState(1629);
				match(LeftParen);
				setState(1630);
				thetypeid();
				setState(1632);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(1631);
					match(Ellipsis);
					}
				}

				setState(1634);
				match(RightParen);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1636);
				match(Alignas);
				setState(1637);
				match(LeftParen);
				setState(1638);
				constantexpression();
				setState(1640);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(1639);
					match(Ellipsis);
					}
				}

				setState(1642);
				match(RightParen);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributelistContext extends ParserRuleContext {
		public AttributeContext attribute() {
			return getRuleContext(AttributeContext.class,0);
		}
		public AttributelistContext attributelist() {
			return getRuleContext(AttributelistContext.class,0);
		}
		public AttributelistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributelist; }
	}

	public final AttributelistContext attributelist() throws RecognitionException {
		return attributelist(0);
	}

	private AttributelistContext attributelist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AttributelistContext _localctx = new AttributelistContext(_ctx, _parentState);
		AttributelistContext _prevctx = _localctx;
		int _startState = 242;
		enterRecursionRule(_localctx, 242, RULE_attributelist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1653);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,163,_ctx) ) {
			case 1:
				{
				setState(1648);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,162,_ctx) ) {
				case 1:
					{
					setState(1647);
					attribute();
					}
					break;
				}
				}
				break;
			case 2:
				{
				setState(1650);
				attribute();
				setState(1651);
				match(Ellipsis);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1667);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,166,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1665);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,165,_ctx) ) {
					case 1:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_attributelist);
						setState(1655);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1656);
						match(Comma);
						setState(1658);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,164,_ctx) ) {
						case 1:
							{
							setState(1657);
							attribute();
							}
							break;
						}
						}
						break;
					case 2:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_attributelist);
						setState(1660);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1661);
						match(Comma);
						setState(1662);
						attribute();
						setState(1663);
						match(Ellipsis);
						}
						break;
					}
					} 
				}
				setState(1669);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,166,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AttributeContext extends ParserRuleContext {
		public AttributetokenContext attributetoken() {
			return getRuleContext(AttributetokenContext.class,0);
		}
		public AttributeargumentclauseContext attributeargumentclause() {
			return getRuleContext(AttributeargumentclauseContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1670);
			attributetoken();
			setState(1672);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,167,_ctx) ) {
			case 1:
				{
				setState(1671);
				attributeargumentclause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributetokenContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributescopedtokenContext attributescopedtoken() {
			return getRuleContext(AttributescopedtokenContext.class,0);
		}
		public AttributetokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributetoken; }
	}

	public final AttributetokenContext attributetoken() throws RecognitionException {
		AttributetokenContext _localctx = new AttributetokenContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_attributetoken);
		try {
			setState(1676);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,168,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1674);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1675);
				attributescopedtoken();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributescopedtokenContext extends ParserRuleContext {
		public AttributenamespaceContext attributenamespace() {
			return getRuleContext(AttributenamespaceContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributescopedtokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributescopedtoken; }
	}

	public final AttributescopedtokenContext attributescopedtoken() throws RecognitionException {
		AttributescopedtokenContext _localctx = new AttributescopedtokenContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_attributescopedtoken);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1678);
			attributenamespace();
			setState(1679);
			match(Doublecolon);
			setState(1680);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributenamespaceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributenamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributenamespace; }
	}

	public final AttributenamespaceContext attributenamespace() throws RecognitionException {
		AttributenamespaceContext _localctx = new AttributenamespaceContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_attributenamespace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1682);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeargumentclauseContext extends ParserRuleContext {
		public BalancedtokenseqContext balancedtokenseq() {
			return getRuleContext(BalancedtokenseqContext.class,0);
		}
		public AttributeargumentclauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeargumentclause; }
	}

	public final AttributeargumentclauseContext attributeargumentclause() throws RecognitionException {
		AttributeargumentclauseContext _localctx = new AttributeargumentclauseContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_attributeargumentclause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1684);
			match(LeftParen);
			setState(1685);
			balancedtokenseq(0);
			setState(1686);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BalancedtokenseqContext extends ParserRuleContext {
		public BalancedtokenContext balancedtoken() {
			return getRuleContext(BalancedtokenContext.class,0);
		}
		public BalancedtokenseqContext balancedtokenseq() {
			return getRuleContext(BalancedtokenseqContext.class,0);
		}
		public BalancedtokenseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_balancedtokenseq; }
	}

	public final BalancedtokenseqContext balancedtokenseq() throws RecognitionException {
		return balancedtokenseq(0);
	}

	private BalancedtokenseqContext balancedtokenseq(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BalancedtokenseqContext _localctx = new BalancedtokenseqContext(_ctx, _parentState);
		BalancedtokenseqContext _prevctx = _localctx;
		int _startState = 254;
		enterRecursionRule(_localctx, 254, RULE_balancedtokenseq, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1690);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,169,_ctx) ) {
			case 1:
				{
				setState(1689);
				balancedtoken();
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(1696);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BalancedtokenseqContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_balancedtokenseq);
					setState(1692);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1693);
					balancedtoken();
					}
					} 
				}
				setState(1698);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,170,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BalancedtokenContext extends ParserRuleContext {
		public BalancedtokenseqContext balancedtokenseq() {
			return getRuleContext(BalancedtokenseqContext.class,0);
		}
		public BalancedtokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_balancedtoken; }
	}

	public final BalancedtokenContext balancedtoken() throws RecognitionException {
		BalancedtokenContext _localctx = new BalancedtokenContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_balancedtoken);
		int _la;
		try {
			int _alt;
			setState(1716);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(1699);
				match(LeftParen);
				setState(1700);
				balancedtokenseq(0);
				setState(1701);
				match(RightParen);
				}
				break;
			case LeftBracket:
				enterOuterAlt(_localctx, 2);
				{
				setState(1703);
				match(LeftBracket);
				setState(1704);
				balancedtokenseq(0);
				setState(1705);
				match(RightBracket);
				}
				break;
			case LeftBrace:
				enterOuterAlt(_localctx, 3);
				{
				setState(1707);
				match(LeftBrace);
				setState(1708);
				balancedtokenseq(0);
				setState(1709);
				match(RightBrace);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case MultiLineMacro:
			case Directive:
			case Alignas:
			case Alignof:
			case Asm:
			case Auto:
			case Bool:
			case Break:
			case Case:
			case Catch:
			case Char:
			case Char16:
			case Char32:
			case Class:
			case Const:
			case Constexpr:
			case Const_cast:
			case Continue:
			case Decltype:
			case Default:
			case Delete:
			case Do:
			case Double:
			case Dynamic_cast:
			case Else:
			case Enum:
			case Explicit:
			case Export:
			case Extern:
			case False:
			case Final:
			case Float:
			case For:
			case Friend:
			case Goto:
			case If:
			case Inline:
			case Int:
			case Long:
			case Mutable:
			case Namespace:
			case New:
			case Noexcept:
			case Nullptr:
			case Operator:
			case Override:
			case Private:
			case Protected:
			case Public:
			case Register:
			case Reinterpret_cast:
			case Return:
			case Short:
			case Signed:
			case Sizeof:
			case Static:
			case Static_assert:
			case Static_cast:
			case Struct:
			case Switch:
			case Template:
			case This:
			case Thread_local:
			case Throw:
			case True:
			case Try:
			case Typedef:
			case Typeid_:
			case Typename_:
			case Union:
			case Unsigned:
			case Using:
			case Virtual:
			case Void:
			case Volatile:
			case Wchar:
			case While:
			case Plus:
			case Minus:
			case Star:
			case Div:
			case Mod:
			case Caret:
			case And:
			case Or:
			case Tilde:
			case Not:
			case Assign:
			case Less:
			case Greater:
			case PlusAssign:
			case MinusAssign:
			case StarAssign:
			case DivAssign:
			case ModAssign:
			case XorAssign:
			case AndAssign:
			case OrAssign:
			case LeftShift:
			case RightShift:
			case LeftShiftAssign:
			case RightShiftAssign:
			case Equal:
			case NotEqual:
			case LessEqual:
			case GreaterEqual:
			case AndAnd:
			case OrOr:
			case PlusPlus:
			case MinusMinus:
			case Comma:
			case ArrowStar:
			case Arrow:
			case Question:
			case Colon:
			case Doublecolon:
			case Semi:
			case Dot:
			case DotStar:
			case Ellipsis:
			case Identifier:
			case Integerliteral:
			case Decimalliteral:
			case Octalliteral:
			case Hexadecimalliteral:
			case Binaryliteral:
			case Integersuffix:
			case Characterliteral:
			case Floatingliteral:
			case Stringliteral:
			case Userdefinedintegerliteral:
			case Userdefinedfloatingliteral:
			case Userdefinedstringliteral:
			case Userdefinedcharacterliteral:
			case Whitespace:
			case Newline:
			case BlockComment:
			case LineComment:
				enterOuterAlt(_localctx, 4);
				{
				setState(1712); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(1711);
						_la = _input.LA(1);
						if ( _la <= 0 || (((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LeftParen - 91)) | (1L << (RightParen - 91)) | (1L << (LeftBracket - 91)) | (1L << (RightBracket - 91)) | (1L << (LeftBrace - 91)) | (1L << (RightBrace - 91)))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(1714); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,171,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitdeclaratorlistContext extends ParserRuleContext {
		public InitdeclaratorContext initdeclarator() {
			return getRuleContext(InitdeclaratorContext.class,0);
		}
		public InitdeclaratorlistContext initdeclaratorlist() {
			return getRuleContext(InitdeclaratorlistContext.class,0);
		}
		public InitdeclaratorlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initdeclaratorlist; }
	}

	public final InitdeclaratorlistContext initdeclaratorlist() throws RecognitionException {
		return initdeclaratorlist(0);
	}

	private InitdeclaratorlistContext initdeclaratorlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		InitdeclaratorlistContext _localctx = new InitdeclaratorlistContext(_ctx, _parentState);
		InitdeclaratorlistContext _prevctx = _localctx;
		int _startState = 258;
		enterRecursionRule(_localctx, 258, RULE_initdeclaratorlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1719);
			initdeclarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(1726);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,173,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InitdeclaratorlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_initdeclaratorlist);
					setState(1721);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1722);
					match(Comma);
					setState(1723);
					initdeclarator();
					}
					} 
				}
				setState(1728);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,173,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class InitdeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public InitdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initdeclarator; }
	}

	public final InitdeclaratorContext initdeclarator() throws RecognitionException {
		InitdeclaratorContext _localctx = new InitdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_initdeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1729);
			declarator();
			setState(1731);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,174,_ctx) ) {
			case 1:
				{
				setState(1730);
				initializer();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclaratorContext extends ParserRuleContext {
		public PtrdeclaratorContext ptrdeclarator() {
			return getRuleContext(PtrdeclaratorContext.class,0);
		}
		public NoptrdeclaratorContext noptrdeclarator() {
			return getRuleContext(NoptrdeclaratorContext.class,0);
		}
		public ParametersandqualifiersContext parametersandqualifiers() {
			return getRuleContext(ParametersandqualifiersContext.class,0);
		}
		public TrailingreturntypeContext trailingreturntype() {
			return getRuleContext(TrailingreturntypeContext.class,0);
		}
		public DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarator; }
	}

	public final DeclaratorContext declarator() throws RecognitionException {
		DeclaratorContext _localctx = new DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_declarator);
		try {
			setState(1738);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,175,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1733);
				ptrdeclarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1734);
				noptrdeclarator(0);
				setState(1735);
				parametersandqualifiers();
				setState(1736);
				trailingreturntype();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PtrdeclaratorContext extends ParserRuleContext {
		public NoptrdeclaratorContext noptrdeclarator() {
			return getRuleContext(NoptrdeclaratorContext.class,0);
		}
		public PtroperatorContext ptroperator() {
			return getRuleContext(PtroperatorContext.class,0);
		}
		public PtrdeclaratorContext ptrdeclarator() {
			return getRuleContext(PtrdeclaratorContext.class,0);
		}
		public PtrdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ptrdeclarator; }
	}

	public final PtrdeclaratorContext ptrdeclarator() throws RecognitionException {
		PtrdeclaratorContext _localctx = new PtrdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_ptrdeclarator);
		try {
			setState(1744);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1740);
				noptrdeclarator(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1741);
				ptroperator();
				setState(1742);
				ptrdeclarator();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoptrdeclaratorContext extends ParserRuleContext {
		public DeclaratoridContext declaratorid() {
			return getRuleContext(DeclaratoridContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public PtrdeclaratorContext ptrdeclarator() {
			return getRuleContext(PtrdeclaratorContext.class,0);
		}
		public NoptrdeclaratorContext noptrdeclarator() {
			return getRuleContext(NoptrdeclaratorContext.class,0);
		}
		public ParametersandqualifiersContext parametersandqualifiers() {
			return getRuleContext(ParametersandqualifiersContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public NoptrdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noptrdeclarator; }
	}

	public final NoptrdeclaratorContext noptrdeclarator() throws RecognitionException {
		return noptrdeclarator(0);
	}

	private NoptrdeclaratorContext noptrdeclarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NoptrdeclaratorContext _localctx = new NoptrdeclaratorContext(_ctx, _parentState);
		NoptrdeclaratorContext _prevctx = _localctx;
		int _startState = 266;
		enterRecursionRule(_localctx, 266, RULE_noptrdeclarator, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1755);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Decltype:
			case Operator:
			case Tilde:
			case Doublecolon:
			case Ellipsis:
			case Identifier:
				{
				setState(1747);
				declaratorid();
				setState(1749);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,177,_ctx) ) {
				case 1:
					{
					setState(1748);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case LeftParen:
				{
				setState(1751);
				match(LeftParen);
				setState(1752);
				ptrdeclarator();
				setState(1753);
				match(RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(1770);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,182,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1768);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,181,_ctx) ) {
					case 1:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrdeclarator);
						setState(1757);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1758);
						parametersandqualifiers();
						}
						break;
					case 2:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrdeclarator);
						setState(1759);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1760);
						match(LeftBracket);
						setState(1762);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
							{
							setState(1761);
							constantexpression();
							}
						}

						setState(1764);
						match(RightBracket);
						setState(1766);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,180,_ctx) ) {
						case 1:
							{
							setState(1765);
							attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1772);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,182,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ParametersandqualifiersContext extends ParserRuleContext {
		public ParameterdeclarationclauseContext parameterdeclarationclause() {
			return getRuleContext(ParameterdeclarationclauseContext.class,0);
		}
		public CvqualifierseqContext cvqualifierseq() {
			return getRuleContext(CvqualifierseqContext.class,0);
		}
		public RefqualifierContext refqualifier() {
			return getRuleContext(RefqualifierContext.class,0);
		}
		public ExceptionspecificationContext exceptionspecification() {
			return getRuleContext(ExceptionspecificationContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public ParametersandqualifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametersandqualifiers; }
	}

	public final ParametersandqualifiersContext parametersandqualifiers() throws RecognitionException {
		ParametersandqualifiersContext _localctx = new ParametersandqualifiersContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_parametersandqualifiers);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1773);
			match(LeftParen);
			setState(1774);
			parameterdeclarationclause();
			setState(1775);
			match(RightParen);
			setState(1777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,183,_ctx) ) {
			case 1:
				{
				setState(1776);
				cvqualifierseq();
				}
				break;
			}
			setState(1780);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,184,_ctx) ) {
			case 1:
				{
				setState(1779);
				refqualifier();
				}
				break;
			}
			setState(1783);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				{
				setState(1782);
				exceptionspecification();
				}
				break;
			}
			setState(1786);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
			case 1:
				{
				setState(1785);
				attributespecifierseq(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrailingreturntypeContext extends ParserRuleContext {
		public TrailingtypespecifierseqContext trailingtypespecifierseq() {
			return getRuleContext(TrailingtypespecifierseqContext.class,0);
		}
		public AbstractdeclaratorContext abstractdeclarator() {
			return getRuleContext(AbstractdeclaratorContext.class,0);
		}
		public TrailingreturntypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trailingreturntype; }
	}

	public final TrailingreturntypeContext trailingreturntype() throws RecognitionException {
		TrailingreturntypeContext _localctx = new TrailingreturntypeContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_trailingreturntype);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1788);
			match(Arrow);
			setState(1789);
			trailingtypespecifierseq();
			setState(1791);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,187,_ctx) ) {
			case 1:
				{
				setState(1790);
				abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PtroperatorContext extends ParserRuleContext {
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public CvqualifierseqContext cvqualifierseq() {
			return getRuleContext(CvqualifierseqContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public PtroperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ptroperator; }
	}

	public final PtroperatorContext ptroperator() throws RecognitionException {
		PtroperatorContext _localctx = new PtroperatorContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_ptroperator);
		try {
			setState(1816);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Star:
				enterOuterAlt(_localctx, 1);
				{
				setState(1793);
				match(Star);
				setState(1795);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,188,_ctx) ) {
				case 1:
					{
					setState(1794);
					attributespecifierseq(0);
					}
					break;
				}
				setState(1798);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
				case 1:
					{
					setState(1797);
					cvqualifierseq();
					}
					break;
				}
				}
				break;
			case And:
				enterOuterAlt(_localctx, 2);
				{
				setState(1800);
				match(And);
				setState(1802);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
				case 1:
					{
					setState(1801);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(1804);
				match(T__8);
				setState(1806);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,191,_ctx) ) {
				case 1:
					{
					setState(1805);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case Decltype:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 4);
				{
				setState(1808);
				nestednamespecifier(0);
				setState(1809);
				match(Star);
				setState(1811);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,192,_ctx) ) {
				case 1:
					{
					setState(1810);
					attributespecifierseq(0);
					}
					break;
				}
				setState(1814);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,193,_ctx) ) {
				case 1:
					{
					setState(1813);
					cvqualifierseq();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CvqualifierseqContext extends ParserRuleContext {
		public CvqualifierContext cvqualifier() {
			return getRuleContext(CvqualifierContext.class,0);
		}
		public CvqualifierseqContext cvqualifierseq() {
			return getRuleContext(CvqualifierseqContext.class,0);
		}
		public CvqualifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cvqualifierseq; }
	}

	public final CvqualifierseqContext cvqualifierseq() throws RecognitionException {
		CvqualifierseqContext _localctx = new CvqualifierseqContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_cvqualifierseq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1818);
			cvqualifier();
			setState(1820);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,195,_ctx) ) {
			case 1:
				{
				setState(1819);
				cvqualifierseq();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CvqualifierContext extends ParserRuleContext {
		public TerminalNode Const() { return getToken(CPP14Parser.Const, 0); }
		public TerminalNode Volatile() { return getToken(CPP14Parser.Volatile, 0); }
		public CvqualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cvqualifier; }
	}

	public final CvqualifierContext cvqualifier() throws RecognitionException {
		CvqualifierContext _localctx = new CvqualifierContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_cvqualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1822);
			_la = _input.LA(1);
			if ( !(_la==Const || _la==Volatile) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RefqualifierContext extends ParserRuleContext {
		public RefqualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_refqualifier; }
	}

	public final RefqualifierContext refqualifier() throws RecognitionException {
		RefqualifierContext _localctx = new RefqualifierContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_refqualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1824);
			_la = _input.LA(1);
			if ( !(_la==T__8 || _la==And) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclaratoridContext extends ParserRuleContext {
		public IdexpressionContext idexpression() {
			return getRuleContext(IdexpressionContext.class,0);
		}
		public DeclaratoridContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaratorid; }
	}

	public final DeclaratoridContext declaratorid() throws RecognitionException {
		DeclaratoridContext _localctx = new DeclaratoridContext(_ctx, getState());
		enterRule(_localctx, 280, RULE_declaratorid);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1827);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(1826);
				match(Ellipsis);
				}
			}

			setState(1829);
			idexpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThetypeidContext extends ParserRuleContext {
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public AbstractdeclaratorContext abstractdeclarator() {
			return getRuleContext(AbstractdeclaratorContext.class,0);
		}
		public ThetypeidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_thetypeid; }
	}

	public final ThetypeidContext thetypeid() throws RecognitionException {
		ThetypeidContext _localctx = new ThetypeidContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_thetypeid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1831);
			typespecifierseq();
			setState(1833);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,197,_ctx) ) {
			case 1:
				{
				setState(1832);
				abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AbstractdeclaratorContext extends ParserRuleContext {
		public PtrabstractdeclaratorContext ptrabstractdeclarator() {
			return getRuleContext(PtrabstractdeclaratorContext.class,0);
		}
		public ParametersandqualifiersContext parametersandqualifiers() {
			return getRuleContext(ParametersandqualifiersContext.class,0);
		}
		public TrailingreturntypeContext trailingreturntype() {
			return getRuleContext(TrailingreturntypeContext.class,0);
		}
		public NoptrabstractdeclaratorContext noptrabstractdeclarator() {
			return getRuleContext(NoptrabstractdeclaratorContext.class,0);
		}
		public AbstractpackdeclaratorContext abstractpackdeclarator() {
			return getRuleContext(AbstractpackdeclaratorContext.class,0);
		}
		public AbstractdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_abstractdeclarator; }
	}

	public final AbstractdeclaratorContext abstractdeclarator() throws RecognitionException {
		AbstractdeclaratorContext _localctx = new AbstractdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 284, RULE_abstractdeclarator);
		try {
			setState(1843);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,199,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1835);
				ptrabstractdeclarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1837);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,198,_ctx) ) {
				case 1:
					{
					setState(1836);
					noptrabstractdeclarator(0);
					}
					break;
				}
				setState(1839);
				parametersandqualifiers();
				setState(1840);
				trailingreturntype();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1842);
				abstractpackdeclarator();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PtrabstractdeclaratorContext extends ParserRuleContext {
		public NoptrabstractdeclaratorContext noptrabstractdeclarator() {
			return getRuleContext(NoptrabstractdeclaratorContext.class,0);
		}
		public PtroperatorContext ptroperator() {
			return getRuleContext(PtroperatorContext.class,0);
		}
		public PtrabstractdeclaratorContext ptrabstractdeclarator() {
			return getRuleContext(PtrabstractdeclaratorContext.class,0);
		}
		public PtrabstractdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ptrabstractdeclarator; }
	}

	public final PtrabstractdeclaratorContext ptrabstractdeclarator() throws RecognitionException {
		PtrabstractdeclaratorContext _localctx = new PtrabstractdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_ptrabstractdeclarator);
		try {
			setState(1850);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftParen:
			case LeftBracket:
				enterOuterAlt(_localctx, 1);
				{
				setState(1845);
				noptrabstractdeclarator(0);
				}
				break;
			case T__8:
			case Decltype:
			case Star:
			case And:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(1846);
				ptroperator();
				setState(1848);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,200,_ctx) ) {
				case 1:
					{
					setState(1847);
					ptrabstractdeclarator();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoptrabstractdeclaratorContext extends ParserRuleContext {
		public ParametersandqualifiersContext parametersandqualifiers() {
			return getRuleContext(ParametersandqualifiersContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public PtrabstractdeclaratorContext ptrabstractdeclarator() {
			return getRuleContext(PtrabstractdeclaratorContext.class,0);
		}
		public NoptrabstractdeclaratorContext noptrabstractdeclarator() {
			return getRuleContext(NoptrabstractdeclaratorContext.class,0);
		}
		public NoptrabstractdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noptrabstractdeclarator; }
	}

	public final NoptrabstractdeclaratorContext noptrabstractdeclarator() throws RecognitionException {
		return noptrabstractdeclarator(0);
	}

	private NoptrabstractdeclaratorContext noptrabstractdeclarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NoptrabstractdeclaratorContext _localctx = new NoptrabstractdeclaratorContext(_ctx, _parentState);
		NoptrabstractdeclaratorContext _prevctx = _localctx;
		int _startState = 288;
		enterRecursionRule(_localctx, 288, RULE_noptrabstractdeclarator, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1866);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,204,_ctx) ) {
			case 1:
				{
				setState(1853);
				parametersandqualifiers();
				}
				break;
			case 2:
				{
				setState(1854);
				match(LeftBracket);
				setState(1856);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(1855);
					constantexpression();
					}
				}

				setState(1858);
				match(RightBracket);
				setState(1860);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,203,_ctx) ) {
				case 1:
					{
					setState(1859);
					attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case 3:
				{
				setState(1862);
				match(LeftParen);
				setState(1863);
				ptrabstractdeclarator();
				setState(1864);
				match(RightParen);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1881);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,208,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1879);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,207,_ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrabstractdeclarator);
						setState(1868);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1869);
						parametersandqualifiers();
						}
						break;
					case 2:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrabstractdeclarator);
						setState(1870);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1871);
						match(LeftBracket);
						setState(1873);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
							{
							setState(1872);
							constantexpression();
							}
						}

						setState(1875);
						match(RightBracket);
						setState(1877);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,206,_ctx) ) {
						case 1:
							{
							setState(1876);
							attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1883);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,208,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AbstractpackdeclaratorContext extends ParserRuleContext {
		public NoptrabstractpackdeclaratorContext noptrabstractpackdeclarator() {
			return getRuleContext(NoptrabstractpackdeclaratorContext.class,0);
		}
		public PtroperatorContext ptroperator() {
			return getRuleContext(PtroperatorContext.class,0);
		}
		public AbstractpackdeclaratorContext abstractpackdeclarator() {
			return getRuleContext(AbstractpackdeclaratorContext.class,0);
		}
		public AbstractpackdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_abstractpackdeclarator; }
	}

	public final AbstractpackdeclaratorContext abstractpackdeclarator() throws RecognitionException {
		AbstractpackdeclaratorContext _localctx = new AbstractpackdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_abstractpackdeclarator);
		try {
			setState(1888);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Ellipsis:
				enterOuterAlt(_localctx, 1);
				{
				setState(1884);
				noptrabstractpackdeclarator(0);
				}
				break;
			case T__8:
			case Decltype:
			case Star:
			case And:
			case Doublecolon:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(1885);
				ptroperator();
				setState(1886);
				abstractpackdeclarator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoptrabstractpackdeclaratorContext extends ParserRuleContext {
		public NoptrabstractpackdeclaratorContext noptrabstractpackdeclarator() {
			return getRuleContext(NoptrabstractpackdeclaratorContext.class,0);
		}
		public ParametersandqualifiersContext parametersandqualifiers() {
			return getRuleContext(ParametersandqualifiersContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public NoptrabstractpackdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noptrabstractpackdeclarator; }
	}

	public final NoptrabstractpackdeclaratorContext noptrabstractpackdeclarator() throws RecognitionException {
		return noptrabstractpackdeclarator(0);
	}

	private NoptrabstractpackdeclaratorContext noptrabstractpackdeclarator(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NoptrabstractpackdeclaratorContext _localctx = new NoptrabstractpackdeclaratorContext(_ctx, _parentState);
		NoptrabstractpackdeclaratorContext _prevctx = _localctx;
		int _startState = 292;
		enterRecursionRule(_localctx, 292, RULE_noptrabstractpackdeclarator, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1891);
			match(Ellipsis);
			}
			_ctx.stop = _input.LT(-1);
			setState(1906);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,213,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1904);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,212,_ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrabstractpackdeclarator);
						setState(1893);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1894);
						parametersandqualifiers();
						}
						break;
					case 2:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_noptrabstractpackdeclarator);
						setState(1895);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1896);
						match(LeftBracket);
						setState(1898);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
							{
							setState(1897);
							constantexpression();
							}
						}

						setState(1900);
						match(RightBracket);
						setState(1902);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,211,_ctx) ) {
						case 1:
							{
							setState(1901);
							attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					} 
				}
				setState(1908);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,213,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ParameterdeclarationclauseContext extends ParserRuleContext {
		public ParameterdeclarationlistContext parameterdeclarationlist() {
			return getRuleContext(ParameterdeclarationlistContext.class,0);
		}
		public ParameterdeclarationclauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterdeclarationclause; }
	}

	public final ParameterdeclarationclauseContext parameterdeclarationclause() throws RecognitionException {
		ParameterdeclarationclauseContext _localctx = new ParameterdeclarationclauseContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_parameterdeclarationclause);
		int _la;
		try {
			setState(1919);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,216,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1910);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__4) | (1L << Alignas) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Struct - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftBracket - 66)))) != 0) || _la==Doublecolon || _la==Identifier) {
					{
					setState(1909);
					parameterdeclarationlist(0);
					}
				}

				setState(1913);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(1912);
					match(Ellipsis);
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1915);
				parameterdeclarationlist(0);
				setState(1916);
				match(Comma);
				setState(1917);
				match(Ellipsis);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterdeclarationlistContext extends ParserRuleContext {
		public ParameterdeclarationContext parameterdeclaration() {
			return getRuleContext(ParameterdeclarationContext.class,0);
		}
		public ParameterdeclarationlistContext parameterdeclarationlist() {
			return getRuleContext(ParameterdeclarationlistContext.class,0);
		}
		public ParameterdeclarationlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterdeclarationlist; }
	}

	public final ParameterdeclarationlistContext parameterdeclarationlist() throws RecognitionException {
		return parameterdeclarationlist(0);
	}

	private ParameterdeclarationlistContext parameterdeclarationlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ParameterdeclarationlistContext _localctx = new ParameterdeclarationlistContext(_ctx, _parentState);
		ParameterdeclarationlistContext _prevctx = _localctx;
		int _startState = 296;
		enterRecursionRule(_localctx, 296, RULE_parameterdeclarationlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(1922);
			parameterdeclaration();
			}
			_ctx.stop = _input.LT(-1);
			setState(1929);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,217,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_parameterdeclarationlist);
					setState(1924);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1925);
					match(Comma);
					setState(1926);
					parameterdeclaration();
					}
					} 
				}
				setState(1931);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,217,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ParameterdeclarationContext extends ParserRuleContext {
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public UparamContext uparam() {
			return getRuleContext(UparamContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public InitializerclauseContext initializerclause() {
			return getRuleContext(InitializerclauseContext.class,0);
		}
		public AbstractdeclaratorContext abstractdeclarator() {
			return getRuleContext(AbstractdeclaratorContext.class,0);
		}
		public ParameterdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterdeclaration; }
	}

	public final ParameterdeclarationContext parameterdeclaration() throws RecognitionException {
		ParameterdeclarationContext _localctx = new ParameterdeclarationContext(_ctx, getState());
		enterRule(_localctx, 298, RULE_parameterdeclaration);
		int _la;
		try {
			setState(1975);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,228,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1933);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__4) {
					{
					setState(1932);
					uparam();
					}
				}

				setState(1936);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1935);
					attributespecifierseq(0);
					}
				}

				setState(1938);
				declspecifierseq();
				setState(1939);
				declarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1942);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__4) {
					{
					setState(1941);
					uparam();
					}
				}

				setState(1945);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1944);
					attributespecifierseq(0);
					}
				}

				setState(1947);
				declspecifierseq();
				setState(1948);
				declarator();
				setState(1949);
				match(Assign);
				setState(1950);
				initializerclause();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1953);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__4) {
					{
					setState(1952);
					uparam();
					}
				}

				setState(1956);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1955);
					attributespecifierseq(0);
					}
				}

				setState(1958);
				declspecifierseq();
				setState(1960);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,224,_ctx) ) {
				case 1:
					{
					setState(1959);
					abstractdeclarator();
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1963);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__4) {
					{
					setState(1962);
					uparam();
					}
				}

				setState(1966);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(1965);
					attributespecifierseq(0);
					}
				}

				setState(1968);
				declspecifierseq();
				setState(1970);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__8 || _la==Decltype || ((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LeftParen - 91)) | (1L << (LeftBracket - 91)) | (1L << (Star - 91)) | (1L << (And - 91)) | (1L << (Doublecolon - 91)) | (1L << (Ellipsis - 91)) | (1L << (Identifier - 91)))) != 0)) {
					{
					setState(1969);
					abstractdeclarator();
					}
				}

				setState(1972);
				match(Assign);
				setState(1973);
				initializerclause();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctiondefinitionContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public FunctionbodyContext functionbody() {
			return getRuleContext(FunctionbodyContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public VirtspecifierseqContext virtspecifierseq() {
			return getRuleContext(VirtspecifierseqContext.class,0);
		}
		public FunctiondefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functiondefinition; }
	}

	public final FunctiondefinitionContext functiondefinition() throws RecognitionException {
		FunctiondefinitionContext _localctx = new FunctiondefinitionContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_functiondefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1978);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Alignas || _la==LeftBracket) {
				{
				setState(1977);
				attributespecifierseq(0);
				}
			}

			setState(1981);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,230,_ctx) ) {
			case 1:
				{
				setState(1980);
				declspecifierseq();
				}
				break;
			}
			setState(1983);
			declarator();
			setState(1985);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Final || _la==Override) {
				{
				setState(1984);
				virtspecifierseq(0);
				}
			}

			setState(1987);
			functionbody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionbodyContext extends ParserRuleContext {
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public CtorinitializerContext ctorinitializer() {
			return getRuleContext(CtorinitializerContext.class,0);
		}
		public FunctiontryblockContext functiontryblock() {
			return getRuleContext(FunctiontryblockContext.class,0);
		}
		public TerminalNode Default() { return getToken(CPP14Parser.Default, 0); }
		public TerminalNode Delete() { return getToken(CPP14Parser.Delete, 0); }
		public FunctionbodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionbody; }
	}

	public final FunctionbodyContext functionbody() throws RecognitionException {
		FunctionbodyContext _localctx = new FunctionbodyContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_functionbody);
		int _la;
		try {
			setState(2000);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,233,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1990);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(1989);
					ctorinitializer();
					}
				}

				setState(1992);
				compoundstatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1993);
				functiontryblock();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1994);
				match(Assign);
				setState(1995);
				match(Default);
				setState(1996);
				match(Semi);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1997);
				match(Assign);
				setState(1998);
				match(Delete);
				setState(1999);
				match(Semi);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerContext extends ParserRuleContext {
		public BraceorequalinitializerContext braceorequalinitializer() {
			return getRuleContext(BraceorequalinitializerContext.class,0);
		}
		public ExpressionlistContext expressionlist() {
			return getRuleContext(ExpressionlistContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_initializer);
		try {
			setState(2007);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftBrace:
			case Assign:
				enterOuterAlt(_localctx, 1);
				{
				setState(2002);
				braceorequalinitializer();
				}
				break;
			case LeftParen:
				enterOuterAlt(_localctx, 2);
				{
				setState(2003);
				match(LeftParen);
				setState(2004);
				expressionlist();
				setState(2005);
				match(RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceorequalinitializerContext extends ParserRuleContext {
		public InitializerclauseContext initializerclause() {
			return getRuleContext(InitializerclauseContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public BraceorequalinitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceorequalinitializer; }
	}

	public final BraceorequalinitializerContext braceorequalinitializer() throws RecognitionException {
		BraceorequalinitializerContext _localctx = new BraceorequalinitializerContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_braceorequalinitializer);
		try {
			setState(2012);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Assign:
				enterOuterAlt(_localctx, 1);
				{
				setState(2009);
				match(Assign);
				setState(2010);
				initializerclause();
				}
				break;
			case LeftBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(2011);
				bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerclauseContext extends ParserRuleContext {
		public AssignmentexpressionContext assignmentexpression() {
			return getRuleContext(AssignmentexpressionContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public InitializerclauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerclause; }
	}

	public final InitializerclauseContext initializerclause() throws RecognitionException {
		InitializerclauseContext _localctx = new InitializerclauseContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_initializerclause);
		try {
			setState(2016);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
			case T__7:
			case Alignof:
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Const_cast:
			case Decltype:
			case Delete:
			case Double:
			case Dynamic_cast:
			case False:
			case Float:
			case Int:
			case Long:
			case New:
			case Noexcept:
			case Nullptr:
			case Operator:
			case Reinterpret_cast:
			case Short:
			case Signed:
			case Sizeof:
			case Static_cast:
			case This:
			case Throw:
			case True:
			case Typeid_:
			case Typename_:
			case Unsigned:
			case Void:
			case Wchar:
			case LeftParen:
			case LeftBracket:
			case Plus:
			case Minus:
			case Star:
			case And:
			case Or:
			case Tilde:
			case PlusPlus:
			case MinusMinus:
			case Doublecolon:
			case Identifier:
			case Integerliteral:
			case Characterliteral:
			case Floatingliteral:
			case Stringliteral:
			case Userdefinedintegerliteral:
			case Userdefinedfloatingliteral:
			case Userdefinedstringliteral:
			case Userdefinedcharacterliteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(2014);
				assignmentexpression();
				}
				break;
			case LeftBrace:
				enterOuterAlt(_localctx, 2);
				{
				setState(2015);
				bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerlistContext extends ParserRuleContext {
		public InitializerclauseContext initializerclause() {
			return getRuleContext(InitializerclauseContext.class,0);
		}
		public InitializerlistContext initializerlist() {
			return getRuleContext(InitializerlistContext.class,0);
		}
		public InitializerlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerlist; }
	}

	public final InitializerlistContext initializerlist() throws RecognitionException {
		return initializerlist(0);
	}

	private InitializerlistContext initializerlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		InitializerlistContext _localctx = new InitializerlistContext(_ctx, _parentState);
		InitializerlistContext _prevctx = _localctx;
		int _startState = 310;
		enterRecursionRule(_localctx, 310, RULE_initializerlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2019);
			initializerclause();
			setState(2021);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,237,_ctx) ) {
			case 1:
				{
				setState(2020);
				match(Ellipsis);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(2031);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,239,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_initializerlist);
					setState(2023);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2024);
					match(Comma);
					setState(2025);
					initializerclause();
					setState(2027);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,238,_ctx) ) {
					case 1:
						{
						setState(2026);
						match(Ellipsis);
						}
						break;
					}
					}
					} 
				}
				setState(2033);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,239,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BracedinitlistContext extends ParserRuleContext {
		public InitializerlistContext initializerlist() {
			return getRuleContext(InitializerlistContext.class,0);
		}
		public BracedinitlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bracedinitlist; }
	}

	public final BracedinitlistContext bracedinitlist() throws RecognitionException {
		BracedinitlistContext _localctx = new BracedinitlistContext(_ctx, getState());
		enterRule(_localctx, 312, RULE_bracedinitlist);
		int _la;
		try {
			setState(2043);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,241,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2034);
				match(LeftBrace);
				setState(2035);
				initializerlist(0);
				setState(2037);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(2036);
					match(Comma);
					}
				}

				setState(2039);
				match(RightBrace);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2041);
				match(LeftBrace);
				setState(2042);
				match(RightBrace);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassnameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public ClassnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classname; }
	}

	public final ClassnameContext classname() throws RecognitionException {
		ClassnameContext _localctx = new ClassnameContext(_ctx, getState());
		enterRule(_localctx, 314, RULE_classname);
		try {
			setState(2047);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,242,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2045);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2046);
				simpletemplateid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassspecifierContext extends ParserRuleContext {
		public ClassheadContext classhead() {
			return getRuleContext(ClassheadContext.class,0);
		}
		public UclassContext uclass() {
			return getRuleContext(UclassContext.class,0);
		}
		public GeneratedbodyContext generatedbody() {
			return getRuleContext(GeneratedbodyContext.class,0);
		}
		public MemberspecificationContext memberspecification() {
			return getRuleContext(MemberspecificationContext.class,0);
		}
		public ClassspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classspecifier; }
	}

	public final ClassspecifierContext classspecifier() throws RecognitionException {
		ClassspecifierContext _localctx = new ClassspecifierContext(_ctx, getState());
		enterRule(_localctx, 316, RULE_classspecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2050);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(2049);
				uclass();
				}
			}

			setState(2052);
			classhead();
			setState(2053);
			match(LeftBrace);
			setState(2055);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(2054);
				generatedbody();
				}
			}

			setState(2058);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__8) | (1L << Alignas) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Operator) | (1L << Private) | (1L << Protected) | (1L << Public) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 134)) & ~0x3f) == 0 && ((1L << (_la - 134)) & ((1L << (Colon - 134)) | (1L << (Doublecolon - 134)) | (1L << (Semi - 134)) | (1L << (Ellipsis - 134)) | (1L << (Identifier - 134)))) != 0)) {
				{
				setState(2057);
				memberspecification();
				}
			}

			setState(2060);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassheadContext extends ParserRuleContext {
		public ClasskeyContext classkey() {
			return getRuleContext(ClasskeyContext.class,0);
		}
		public ClassheadnameContext classheadname() {
			return getRuleContext(ClassheadnameContext.class,0);
		}
		public GameapitagContext gameapitag() {
			return getRuleContext(GameapitagContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public ClassvirtspecifierContext classvirtspecifier() {
			return getRuleContext(ClassvirtspecifierContext.class,0);
		}
		public BaseclauseContext baseclause() {
			return getRuleContext(BaseclauseContext.class,0);
		}
		public ClassheadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classhead; }
	}

	public final ClassheadContext classhead() throws RecognitionException {
		ClassheadContext _localctx = new ClassheadContext(_ctx, getState());
		enterRule(_localctx, 318, RULE_classhead);
		int _la;
		try {
			setState(2086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,253,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2062);
				classkey();
				setState(2064);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(2063);
					gameapitag();
					}
				}

				setState(2067);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2066);
					attributespecifierseq(0);
					}
				}

				setState(2069);
				classheadname();
				setState(2071);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Final) {
					{
					setState(2070);
					classvirtspecifier();
					}
				}

				setState(2074);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(2073);
					baseclause();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2076);
				classkey();
				setState(2078);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(2077);
					gameapitag();
					}
				}

				setState(2081);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2080);
					attributespecifierseq(0);
					}
				}

				setState(2084);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Colon) {
					{
					setState(2083);
					baseclause();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassheadnameContext extends ParserRuleContext {
		public ClassnameContext classname() {
			return getRuleContext(ClassnameContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public ClassheadnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classheadname; }
	}

	public final ClassheadnameContext classheadname() throws RecognitionException {
		ClassheadnameContext _localctx = new ClassheadnameContext(_ctx, getState());
		enterRule(_localctx, 320, RULE_classheadname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2089);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,254,_ctx) ) {
			case 1:
				{
				setState(2088);
				nestednamespecifier(0);
				}
				break;
			}
			setState(2091);
			classname();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassvirtspecifierContext extends ParserRuleContext {
		public TerminalNode Final() { return getToken(CPP14Parser.Final, 0); }
		public ClassvirtspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classvirtspecifier; }
	}

	public final ClassvirtspecifierContext classvirtspecifier() throws RecognitionException {
		ClassvirtspecifierContext _localctx = new ClassvirtspecifierContext(_ctx, getState());
		enterRule(_localctx, 322, RULE_classvirtspecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2093);
			match(Final);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClasskeyContext extends ParserRuleContext {
		public TerminalNode Class() { return getToken(CPP14Parser.Class, 0); }
		public TerminalNode Struct() { return getToken(CPP14Parser.Struct, 0); }
		public TerminalNode Union() { return getToken(CPP14Parser.Union, 0); }
		public ClasskeyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classkey; }
	}

	public final ClasskeyContext classkey() throws RecognitionException {
		ClasskeyContext _localctx = new ClasskeyContext(_ctx, getState());
		enterRule(_localctx, 324, RULE_classkey);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2095);
			_la = _input.LA(1);
			if ( !(((((_la - 27)) & ~0x3f) == 0 && ((1L << (_la - 27)) & ((1L << (Class - 27)) | (1L << (Struct - 27)) | (1L << (Union - 27)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberspecificationContext extends ParserRuleContext {
		public MemberdeclarationContext memberdeclaration() {
			return getRuleContext(MemberdeclarationContext.class,0);
		}
		public MemberspecificationContext memberspecification() {
			return getRuleContext(MemberspecificationContext.class,0);
		}
		public AccessspecifierContext accessspecifier() {
			return getRuleContext(AccessspecifierContext.class,0);
		}
		public MemberspecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberspecification; }
	}

	public final MemberspecificationContext memberspecification() throws RecognitionException {
		MemberspecificationContext _localctx = new MemberspecificationContext(_ctx, getState());
		enterRule(_localctx, 326, RULE_memberspecification);
		int _la;
		try {
			setState(2106);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case T__2:
			case T__3:
			case T__8:
			case Alignas:
			case Auto:
			case Bool:
			case Char:
			case Char16:
			case Char32:
			case Class:
			case Const:
			case Constexpr:
			case Decltype:
			case Double:
			case Enum:
			case Explicit:
			case Extern:
			case Float:
			case Friend:
			case Inline:
			case Int:
			case Long:
			case Mutable:
			case Operator:
			case Register:
			case Short:
			case Signed:
			case Static:
			case Static_assert:
			case Struct:
			case Template:
			case Thread_local:
			case Typedef:
			case Typename_:
			case Union:
			case Unsigned:
			case Using:
			case Virtual:
			case Void:
			case Volatile:
			case Wchar:
			case LeftParen:
			case LeftBracket:
			case Star:
			case And:
			case Tilde:
			case Colon:
			case Doublecolon:
			case Semi:
			case Ellipsis:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(2097);
				memberdeclaration();
				setState(2099);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__8) | (1L << Alignas) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Operator) | (1L << Private) | (1L << Protected) | (1L << Public) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 134)) & ~0x3f) == 0 && ((1L << (_la - 134)) & ((1L << (Colon - 134)) | (1L << (Doublecolon - 134)) | (1L << (Semi - 134)) | (1L << (Ellipsis - 134)) | (1L << (Identifier - 134)))) != 0)) {
					{
					setState(2098);
					memberspecification();
					}
				}

				}
				break;
			case Private:
			case Protected:
			case Public:
				enterOuterAlt(_localctx, 2);
				{
				setState(2101);
				accessspecifier();
				setState(2102);
				match(Colon);
				setState(2104);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__8) | (1L << Alignas) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Constexpr) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Explicit) | (1L << Extern) | (1L << Float) | (1L << Friend) | (1L << Inline) | (1L << Int) | (1L << Long) | (1L << Mutable) | (1L << Operator) | (1L << Private) | (1L << Protected) | (1L << Public) | (1L << Register))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Static - 66)) | (1L << (Static_assert - 66)) | (1L << (Struct - 66)) | (1L << (Template - 66)) | (1L << (Thread_local - 66)) | (1L << (Typedef - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Using - 66)) | (1L << (Virtual - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)) | (1L << (LeftParen - 66)) | (1L << (LeftBracket - 66)) | (1L << (Star - 66)) | (1L << (And - 66)) | (1L << (Tilde - 66)))) != 0) || ((((_la - 134)) & ~0x3f) == 0 && ((1L << (_la - 134)) & ((1L << (Colon - 134)) | (1L << (Doublecolon - 134)) | (1L << (Semi - 134)) | (1L << (Ellipsis - 134)) | (1L << (Identifier - 134)))) != 0)) {
					{
					setState(2103);
					memberspecification();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberdeclarationContext extends ParserRuleContext {
		public UpropertyContext uproperty() {
			return getRuleContext(UpropertyContext.class,0);
		}
		public UfunctionContext ufunction() {
			return getRuleContext(UfunctionContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public DeclspecifierseqContext declspecifierseq() {
			return getRuleContext(DeclspecifierseqContext.class,0);
		}
		public MemberdeclaratorlistContext memberdeclaratorlist() {
			return getRuleContext(MemberdeclaratorlistContext.class,0);
		}
		public FunctiondefinitionContext functiondefinition() {
			return getRuleContext(FunctiondefinitionContext.class,0);
		}
		public UsingdeclarationContext usingdeclaration() {
			return getRuleContext(UsingdeclarationContext.class,0);
		}
		public Static_assertdeclarationContext static_assertdeclaration() {
			return getRuleContext(Static_assertdeclarationContext.class,0);
		}
		public TemplatedeclarationContext templatedeclaration() {
			return getRuleContext(TemplatedeclarationContext.class,0);
		}
		public AliasdeclarationContext aliasdeclaration() {
			return getRuleContext(AliasdeclarationContext.class,0);
		}
		public EmptydeclarationContext emptydeclaration() {
			return getRuleContext(EmptydeclarationContext.class,0);
		}
		public MemberdeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberdeclaration; }
	}

	public final MemberdeclarationContext memberdeclaration() throws RecognitionException {
		MemberdeclarationContext _localctx = new MemberdeclarationContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_memberdeclaration);
		int _la;
		try {
			setState(2130);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,263,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__3) {
					{
					setState(2108);
					uproperty();
					}
				}

				setState(2112);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__2) {
					{
					setState(2111);
					ufunction();
					}
				}

				setState(2115);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,260,_ctx) ) {
				case 1:
					{
					setState(2114);
					attributespecifierseq(0);
					}
					break;
				}
				setState(2118);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,261,_ctx) ) {
				case 1:
					{
					setState(2117);
					declspecifierseq();
					}
					break;
				}
				setState(2121);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << Alignas) | (1L << Decltype) | (1L << Operator))) != 0) || ((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LeftParen - 91)) | (1L << (LeftBracket - 91)) | (1L << (Star - 91)) | (1L << (And - 91)) | (1L << (Tilde - 91)) | (1L << (Colon - 91)) | (1L << (Doublecolon - 91)) | (1L << (Ellipsis - 91)) | (1L << (Identifier - 91)))) != 0)) {
					{
					setState(2120);
					memberdeclaratorlist(0);
					}
				}

				setState(2123);
				match(Semi);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2124);
				functiondefinition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2125);
				usingdeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2126);
				static_assertdeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2127);
				templatedeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2128);
				aliasdeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2129);
				emptydeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberdeclaratorlistContext extends ParserRuleContext {
		public MemberdeclaratorContext memberdeclarator() {
			return getRuleContext(MemberdeclaratorContext.class,0);
		}
		public MemberdeclaratorlistContext memberdeclaratorlist() {
			return getRuleContext(MemberdeclaratorlistContext.class,0);
		}
		public MemberdeclaratorlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberdeclaratorlist; }
	}

	public final MemberdeclaratorlistContext memberdeclaratorlist() throws RecognitionException {
		return memberdeclaratorlist(0);
	}

	private MemberdeclaratorlistContext memberdeclaratorlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MemberdeclaratorlistContext _localctx = new MemberdeclaratorlistContext(_ctx, _parentState);
		MemberdeclaratorlistContext _prevctx = _localctx;
		int _startState = 330;
		enterRecursionRule(_localctx, 330, RULE_memberdeclaratorlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2133);
			memberdeclarator();
			}
			_ctx.stop = _input.LT(-1);
			setState(2140);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,264,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_memberdeclaratorlist);
					setState(2135);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2136);
					match(Comma);
					setState(2137);
					memberdeclarator();
					}
					} 
				}
				setState(2142);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,264,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class MemberdeclaratorContext extends ParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public VirtspecifierseqContext virtspecifierseq() {
			return getRuleContext(VirtspecifierseqContext.class,0);
		}
		public PurespecifierContext purespecifier() {
			return getRuleContext(PurespecifierContext.class,0);
		}
		public BraceorequalinitializerContext braceorequalinitializer() {
			return getRuleContext(BraceorequalinitializerContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public MemberdeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberdeclarator; }
	}

	public final MemberdeclaratorContext memberdeclarator() throws RecognitionException {
		MemberdeclaratorContext _localctx = new MemberdeclaratorContext(_ctx, getState());
		enterRule(_localctx, 332, RULE_memberdeclarator);
		int _la;
		try {
			setState(2162);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,270,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2143);
				declarator();
				setState(2145);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,265,_ctx) ) {
				case 1:
					{
					setState(2144);
					virtspecifierseq(0);
					}
					break;
				}
				setState(2148);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,266,_ctx) ) {
				case 1:
					{
					setState(2147);
					purespecifier();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2150);
				declarator();
				setState(2152);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,267,_ctx) ) {
				case 1:
					{
					setState(2151);
					braceorequalinitializer();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2155);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(2154);
					match(Identifier);
					}
				}

				setState(2158);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2157);
					attributespecifierseq(0);
					}
				}

				setState(2160);
				match(Colon);
				setState(2161);
				constantexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VirtspecifierseqContext extends ParserRuleContext {
		public VirtspecifierContext virtspecifier() {
			return getRuleContext(VirtspecifierContext.class,0);
		}
		public VirtspecifierseqContext virtspecifierseq() {
			return getRuleContext(VirtspecifierseqContext.class,0);
		}
		public VirtspecifierseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_virtspecifierseq; }
	}

	public final VirtspecifierseqContext virtspecifierseq() throws RecognitionException {
		return virtspecifierseq(0);
	}

	private VirtspecifierseqContext virtspecifierseq(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		VirtspecifierseqContext _localctx = new VirtspecifierseqContext(_ctx, _parentState);
		VirtspecifierseqContext _prevctx = _localctx;
		int _startState = 334;
		enterRecursionRule(_localctx, 334, RULE_virtspecifierseq, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2165);
			virtspecifier();
			}
			_ctx.stop = _input.LT(-1);
			setState(2171);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,271,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new VirtspecifierseqContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_virtspecifierseq);
					setState(2167);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2168);
					virtspecifier();
					}
					} 
				}
				setState(2173);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,271,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class VirtspecifierContext extends ParserRuleContext {
		public TerminalNode Override() { return getToken(CPP14Parser.Override, 0); }
		public TerminalNode Final() { return getToken(CPP14Parser.Final, 0); }
		public VirtspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_virtspecifier; }
	}

	public final VirtspecifierContext virtspecifier() throws RecognitionException {
		VirtspecifierContext _localctx = new VirtspecifierContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_virtspecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2174);
			_la = _input.LA(1);
			if ( !(_la==Final || _la==Override) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PurespecifierContext extends ParserRuleContext {
		public PurespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_purespecifier; }
	}

	public final PurespecifierContext purespecifier() throws RecognitionException {
		PurespecifierContext _localctx = new PurespecifierContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_purespecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2176);
			match(Assign);
			setState(2177);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BaseclauseContext extends ParserRuleContext {
		public BasespecifierlistContext basespecifierlist() {
			return getRuleContext(BasespecifierlistContext.class,0);
		}
		public BaseclauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseclause; }
	}

	public final BaseclauseContext baseclause() throws RecognitionException {
		BaseclauseContext _localctx = new BaseclauseContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_baseclause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2179);
			match(Colon);
			setState(2180);
			basespecifierlist(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasespecifierlistContext extends ParserRuleContext {
		public BasespecifierContext basespecifier() {
			return getRuleContext(BasespecifierContext.class,0);
		}
		public BasespecifierlistContext basespecifierlist() {
			return getRuleContext(BasespecifierlistContext.class,0);
		}
		public BasespecifierlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basespecifierlist; }
	}

	public final BasespecifierlistContext basespecifierlist() throws RecognitionException {
		return basespecifierlist(0);
	}

	private BasespecifierlistContext basespecifierlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BasespecifierlistContext _localctx = new BasespecifierlistContext(_ctx, _parentState);
		BasespecifierlistContext _prevctx = _localctx;
		int _startState = 342;
		enterRecursionRule(_localctx, 342, RULE_basespecifierlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2183);
			basespecifier();
			setState(2185);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,272,_ctx) ) {
			case 1:
				{
				setState(2184);
				match(Ellipsis);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(2195);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,274,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BasespecifierlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_basespecifierlist);
					setState(2187);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2188);
					match(Comma);
					setState(2189);
					basespecifier();
					setState(2191);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,273,_ctx) ) {
					case 1:
						{
						setState(2190);
						match(Ellipsis);
						}
						break;
					}
					}
					} 
				}
				setState(2197);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,274,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BasespecifierContext extends ParserRuleContext {
		public BasetypespecifierContext basetypespecifier() {
			return getRuleContext(BasetypespecifierContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public TerminalNode Virtual() { return getToken(CPP14Parser.Virtual, 0); }
		public AccessspecifierContext accessspecifier() {
			return getRuleContext(AccessspecifierContext.class,0);
		}
		public BasespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basespecifier; }
	}

	public final BasespecifierContext basespecifier() throws RecognitionException {
		BasespecifierContext _localctx = new BasespecifierContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_basespecifier);
		int _la;
		try {
			setState(2219);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,280,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2198);
					attributespecifierseq(0);
					}
				}

				setState(2201);
				basetypespecifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2203);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2202);
					attributespecifierseq(0);
					}
				}

				setState(2205);
				match(Virtual);
				setState(2207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Private) | (1L << Protected) | (1L << Public))) != 0)) {
					{
					setState(2206);
					accessspecifier();
					}
				}

				setState(2209);
				basetypespecifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2211);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2210);
					attributespecifierseq(0);
					}
				}

				setState(2213);
				accessspecifier();
				setState(2215);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Virtual) {
					{
					setState(2214);
					match(Virtual);
					}
				}

				setState(2217);
				basetypespecifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassordecltypeContext extends ParserRuleContext {
		public ClassnameContext classname() {
			return getRuleContext(ClassnameContext.class,0);
		}
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public DecltypespecifierContext decltypespecifier() {
			return getRuleContext(DecltypespecifierContext.class,0);
		}
		public ClassordecltypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classordecltype; }
	}

	public final ClassordecltypeContext classordecltype() throws RecognitionException {
		ClassordecltypeContext _localctx = new ClassordecltypeContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_classordecltype);
		try {
			setState(2226);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,282,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2222);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,281,_ctx) ) {
				case 1:
					{
					setState(2221);
					nestednamespecifier(0);
					}
					break;
				}
				setState(2224);
				classname();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2225);
				decltypespecifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasetypespecifierContext extends ParserRuleContext {
		public ClassordecltypeContext classordecltype() {
			return getRuleContext(ClassordecltypeContext.class,0);
		}
		public BasetypespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basetypespecifier; }
	}

	public final BasetypespecifierContext basetypespecifier() throws RecognitionException {
		BasetypespecifierContext _localctx = new BasetypespecifierContext(_ctx, getState());
		enterRule(_localctx, 348, RULE_basetypespecifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2228);
			classordecltype();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AccessspecifierContext extends ParserRuleContext {
		public TerminalNode Private() { return getToken(CPP14Parser.Private, 0); }
		public TerminalNode Protected() { return getToken(CPP14Parser.Protected, 0); }
		public TerminalNode Public() { return getToken(CPP14Parser.Public, 0); }
		public AccessspecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accessspecifier; }
	}

	public final AccessspecifierContext accessspecifier() throws RecognitionException {
		AccessspecifierContext _localctx = new AccessspecifierContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_accessspecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2230);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Private) | (1L << Protected) | (1L << Public))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConversionfunctionidContext extends ParserRuleContext {
		public TerminalNode Operator() { return getToken(CPP14Parser.Operator, 0); }
		public ConversiontypeidContext conversiontypeid() {
			return getRuleContext(ConversiontypeidContext.class,0);
		}
		public ConversionfunctionidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conversionfunctionid; }
	}

	public final ConversionfunctionidContext conversionfunctionid() throws RecognitionException {
		ConversionfunctionidContext _localctx = new ConversionfunctionidContext(_ctx, getState());
		enterRule(_localctx, 352, RULE_conversionfunctionid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2232);
			match(Operator);
			setState(2233);
			conversiontypeid();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConversiontypeidContext extends ParserRuleContext {
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public ConversiondeclaratorContext conversiondeclarator() {
			return getRuleContext(ConversiondeclaratorContext.class,0);
		}
		public ConversiontypeidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conversiontypeid; }
	}

	public final ConversiontypeidContext conversiontypeid() throws RecognitionException {
		ConversiontypeidContext _localctx = new ConversiontypeidContext(_ctx, getState());
		enterRule(_localctx, 354, RULE_conversiontypeid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2235);
			typespecifierseq();
			setState(2237);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,283,_ctx) ) {
			case 1:
				{
				setState(2236);
				conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConversiondeclaratorContext extends ParserRuleContext {
		public PtroperatorContext ptroperator() {
			return getRuleContext(PtroperatorContext.class,0);
		}
		public ConversiondeclaratorContext conversiondeclarator() {
			return getRuleContext(ConversiondeclaratorContext.class,0);
		}
		public ConversiondeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conversiondeclarator; }
	}

	public final ConversiondeclaratorContext conversiondeclarator() throws RecognitionException {
		ConversiondeclaratorContext _localctx = new ConversiondeclaratorContext(_ctx, getState());
		enterRule(_localctx, 356, RULE_conversiondeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2239);
			ptroperator();
			setState(2241);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,284,_ctx) ) {
			case 1:
				{
				setState(2240);
				conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CtorinitializerContext extends ParserRuleContext {
		public MeminitializerlistContext meminitializerlist() {
			return getRuleContext(MeminitializerlistContext.class,0);
		}
		public CtorinitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ctorinitializer; }
	}

	public final CtorinitializerContext ctorinitializer() throws RecognitionException {
		CtorinitializerContext _localctx = new CtorinitializerContext(_ctx, getState());
		enterRule(_localctx, 358, RULE_ctorinitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2243);
			match(Colon);
			setState(2244);
			meminitializerlist();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeminitializerlistContext extends ParserRuleContext {
		public MeminitializerContext meminitializer() {
			return getRuleContext(MeminitializerContext.class,0);
		}
		public MeminitializerlistContext meminitializerlist() {
			return getRuleContext(MeminitializerlistContext.class,0);
		}
		public MeminitializerlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_meminitializerlist; }
	}

	public final MeminitializerlistContext meminitializerlist() throws RecognitionException {
		MeminitializerlistContext _localctx = new MeminitializerlistContext(_ctx, getState());
		enterRule(_localctx, 360, RULE_meminitializerlist);
		int _la;
		try {
			setState(2257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,287,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2246);
				meminitializer();
				setState(2248);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(2247);
					match(Ellipsis);
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2250);
				meminitializer();
				setState(2252);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Ellipsis) {
					{
					setState(2251);
					match(Ellipsis);
					}
				}

				setState(2254);
				match(Comma);
				setState(2255);
				meminitializerlist();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeminitializerContext extends ParserRuleContext {
		public MeminitializeridContext meminitializerid() {
			return getRuleContext(MeminitializeridContext.class,0);
		}
		public ExpressionlistContext expressionlist() {
			return getRuleContext(ExpressionlistContext.class,0);
		}
		public BracedinitlistContext bracedinitlist() {
			return getRuleContext(BracedinitlistContext.class,0);
		}
		public MeminitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_meminitializer; }
	}

	public final MeminitializerContext meminitializer() throws RecognitionException {
		MeminitializerContext _localctx = new MeminitializerContext(_ctx, getState());
		enterRule(_localctx, 362, RULE_meminitializer);
		int _la;
		try {
			setState(2269);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,289,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2259);
				meminitializerid();
				setState(2260);
				match(LeftParen);
				setState(2262);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (This - 64)) | (1L << (Throw - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (LeftBrace - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(2261);
					expressionlist();
					}
				}

				setState(2264);
				match(RightParen);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2266);
				meminitializerid();
				setState(2267);
				bracedinitlist();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeminitializeridContext extends ParserRuleContext {
		public ClassordecltypeContext classordecltype() {
			return getRuleContext(ClassordecltypeContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public MeminitializeridContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_meminitializerid; }
	}

	public final MeminitializeridContext meminitializerid() throws RecognitionException {
		MeminitializeridContext _localctx = new MeminitializeridContext(_ctx, getState());
		enterRule(_localctx, 364, RULE_meminitializerid);
		try {
			setState(2273);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,290,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2271);
				classordecltype();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2272);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorfunctionidContext extends ParserRuleContext {
		public TerminalNode Operator() { return getToken(CPP14Parser.Operator, 0); }
		public TheoperatorContext theoperator() {
			return getRuleContext(TheoperatorContext.class,0);
		}
		public OperatorfunctionidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorfunctionid; }
	}

	public final OperatorfunctionidContext operatorfunctionid() throws RecognitionException {
		OperatorfunctionidContext _localctx = new OperatorfunctionidContext(_ctx, getState());
		enterRule(_localctx, 366, RULE_operatorfunctionid);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2275);
			match(Operator);
			setState(2276);
			theoperator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteraloperatoridContext extends ParserRuleContext {
		public TerminalNode Operator() { return getToken(CPP14Parser.Operator, 0); }
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public TerminalNode Userdefinedstringliteral() { return getToken(CPP14Parser.Userdefinedstringliteral, 0); }
		public LiteraloperatoridContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literaloperatorid; }
	}

	public final LiteraloperatoridContext literaloperatorid() throws RecognitionException {
		LiteraloperatoridContext _localctx = new LiteraloperatoridContext(_ctx, getState());
		enterRule(_localctx, 368, RULE_literaloperatorid);
		try {
			setState(2283);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,291,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2278);
				match(Operator);
				setState(2279);
				match(Stringliteral);
				setState(2280);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2281);
				match(Operator);
				setState(2282);
				match(Userdefinedstringliteral);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplatedeclarationContext extends ParserRuleContext {
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public TemplateparameterlistContext templateparameterlist() {
			return getRuleContext(TemplateparameterlistContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TemplatedeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templatedeclaration; }
	}

	public final TemplatedeclarationContext templatedeclaration() throws RecognitionException {
		TemplatedeclarationContext _localctx = new TemplatedeclarationContext(_ctx, getState());
		enterRule(_localctx, 370, RULE_templatedeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2285);
			match(Template);
			setState(2286);
			match(Less);
			setState(2287);
			templateparameterlist(0);
			setState(2288);
			match(Greater);
			setState(2289);
			declaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateparameterlistContext extends ParserRuleContext {
		public TemplateparameterContext templateparameter() {
			return getRuleContext(TemplateparameterContext.class,0);
		}
		public TemplateparameterlistContext templateparameterlist() {
			return getRuleContext(TemplateparameterlistContext.class,0);
		}
		public TemplateparameterlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateparameterlist; }
	}

	public final TemplateparameterlistContext templateparameterlist() throws RecognitionException {
		return templateparameterlist(0);
	}

	private TemplateparameterlistContext templateparameterlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TemplateparameterlistContext _localctx = new TemplateparameterlistContext(_ctx, _parentState);
		TemplateparameterlistContext _prevctx = _localctx;
		int _startState = 372;
		enterRecursionRule(_localctx, 372, RULE_templateparameterlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2292);
			templateparameter();
			}
			_ctx.stop = _input.LT(-1);
			setState(2299);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,292,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateparameterlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_templateparameterlist);
					setState(2294);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2295);
					match(Comma);
					setState(2296);
					templateparameter();
					}
					} 
				}
				setState(2301);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,292,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TemplateparameterContext extends ParserRuleContext {
		public TypeparameterContext typeparameter() {
			return getRuleContext(TypeparameterContext.class,0);
		}
		public ParameterdeclarationContext parameterdeclaration() {
			return getRuleContext(ParameterdeclarationContext.class,0);
		}
		public TemplateparameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateparameter; }
	}

	public final TemplateparameterContext templateparameter() throws RecognitionException {
		TemplateparameterContext _localctx = new TemplateparameterContext(_ctx, getState());
		enterRule(_localctx, 374, RULE_templateparameter);
		try {
			setState(2304);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,293,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2302);
				typeparameter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2303);
				parameterdeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeparameterContext extends ParserRuleContext {
		public TerminalNode Class() { return getToken(CPP14Parser.Class, 0); }
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public TerminalNode Typename_() { return getToken(CPP14Parser.Typename_, 0); }
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public TemplateparameterlistContext templateparameterlist() {
			return getRuleContext(TemplateparameterlistContext.class,0);
		}
		public IdexpressionContext idexpression() {
			return getRuleContext(IdexpressionContext.class,0);
		}
		public TypeparameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeparameter; }
	}

	public final TypeparameterContext typeparameter() throws RecognitionException {
		TypeparameterContext _localctx = new TypeparameterContext(_ctx, getState());
		enterRule(_localctx, 376, RULE_typeparameter);
		int _la;
		try {
			setState(2354);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,303,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2306);
				match(Class);
				setState(2308);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,294,_ctx) ) {
				case 1:
					{
					setState(2307);
					match(Ellipsis);
					}
					break;
				}
				setState(2311);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,295,_ctx) ) {
				case 1:
					{
					setState(2310);
					match(Identifier);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2313);
				match(Class);
				setState(2315);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(2314);
					match(Identifier);
					}
				}

				setState(2317);
				match(Assign);
				setState(2318);
				thetypeid();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2319);
				match(Typename_);
				setState(2321);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,297,_ctx) ) {
				case 1:
					{
					setState(2320);
					match(Ellipsis);
					}
					break;
				}
				setState(2324);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,298,_ctx) ) {
				case 1:
					{
					setState(2323);
					match(Identifier);
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2326);
				match(Typename_);
				setState(2328);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(2327);
					match(Identifier);
					}
				}

				setState(2330);
				match(Assign);
				setState(2331);
				thetypeid();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2332);
				match(Template);
				setState(2333);
				match(Less);
				setState(2334);
				templateparameterlist(0);
				setState(2335);
				match(Greater);
				setState(2336);
				match(Class);
				setState(2338);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,300,_ctx) ) {
				case 1:
					{
					setState(2337);
					match(Ellipsis);
					}
					break;
				}
				setState(2341);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,301,_ctx) ) {
				case 1:
					{
					setState(2340);
					match(Identifier);
					}
					break;
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2343);
				match(Template);
				setState(2344);
				match(Less);
				setState(2345);
				templateparameterlist(0);
				setState(2346);
				match(Greater);
				setState(2347);
				match(Class);
				setState(2349);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(2348);
					match(Identifier);
					}
				}

				setState(2351);
				match(Assign);
				setState(2352);
				idexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SimpletemplateidContext extends ParserRuleContext {
		public TemplatenameContext templatename() {
			return getRuleContext(TemplatenameContext.class,0);
		}
		public TemplateargumentlistContext templateargumentlist() {
			return getRuleContext(TemplateargumentlistContext.class,0);
		}
		public SimpletemplateidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpletemplateid; }
	}

	public final SimpletemplateidContext simpletemplateid() throws RecognitionException {
		SimpletemplateidContext _localctx = new SimpletemplateidContext(_ctx, getState());
		enterRule(_localctx, 378, RULE_simpletemplateid);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2356);
			templatename();
			setState(2357);
			match(Less);
			setState(2359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << Enum) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (Struct - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Union - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Volatile - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
				{
				setState(2358);
				templateargumentlist(0);
				}
			}

			setState(2361);
			match(Greater);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateidContext extends ParserRuleContext {
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public OperatorfunctionidContext operatorfunctionid() {
			return getRuleContext(OperatorfunctionidContext.class,0);
		}
		public TemplateargumentlistContext templateargumentlist() {
			return getRuleContext(TemplateargumentlistContext.class,0);
		}
		public LiteraloperatoridContext literaloperatorid() {
			return getRuleContext(LiteraloperatoridContext.class,0);
		}
		public TemplateidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateid; }
	}

	public final TemplateidContext templateid() throws RecognitionException {
		TemplateidContext _localctx = new TemplateidContext(_ctx, getState());
		enterRule(_localctx, 380, RULE_templateid);
		int _la;
		try {
			setState(2378);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,307,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2363);
				simpletemplateid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2364);
				operatorfunctionid();
				setState(2365);
				match(Less);
				setState(2367);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << Enum) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (Struct - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Union - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Volatile - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(2366);
					templateargumentlist(0);
					}
				}

				setState(2369);
				match(Greater);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2371);
				literaloperatorid();
				setState(2372);
				match(Less);
				setState(2374);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__6) | (1L << T__7) | (1L << Alignof) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Const_cast) | (1L << Decltype) | (1L << Delete) | (1L << Double) | (1L << Dynamic_cast) | (1L << Enum) | (1L << False) | (1L << Float) | (1L << Int) | (1L << Long) | (1L << New) | (1L << Noexcept) | (1L << Nullptr) | (1L << Operator))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Reinterpret_cast - 64)) | (1L << (Short - 64)) | (1L << (Signed - 64)) | (1L << (Sizeof - 64)) | (1L << (Static_cast - 64)) | (1L << (Struct - 64)) | (1L << (This - 64)) | (1L << (True - 64)) | (1L << (Typeid_ - 64)) | (1L << (Typename_ - 64)) | (1L << (Union - 64)) | (1L << (Unsigned - 64)) | (1L << (Void - 64)) | (1L << (Volatile - 64)) | (1L << (Wchar - 64)) | (1L << (LeftParen - 64)) | (1L << (LeftBracket - 64)) | (1L << (Plus - 64)) | (1L << (Minus - 64)) | (1L << (Star - 64)) | (1L << (And - 64)) | (1L << (Or - 64)) | (1L << (Tilde - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (PlusPlus - 128)) | (1L << (MinusMinus - 128)) | (1L << (Doublecolon - 128)) | (1L << (Identifier - 128)) | (1L << (Integerliteral - 128)) | (1L << (Characterliteral - 128)) | (1L << (Floatingliteral - 128)) | (1L << (Stringliteral - 128)) | (1L << (Userdefinedintegerliteral - 128)) | (1L << (Userdefinedfloatingliteral - 128)) | (1L << (Userdefinedstringliteral - 128)) | (1L << (Userdefinedcharacterliteral - 128)))) != 0)) {
					{
					setState(2373);
					templateargumentlist(0);
					}
				}

				setState(2376);
				match(Greater);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplatenameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public TemplatenameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templatename; }
	}

	public final TemplatenameContext templatename() throws RecognitionException {
		TemplatenameContext _localctx = new TemplatenameContext(_ctx, getState());
		enterRule(_localctx, 382, RULE_templatename);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2380);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TemplateargumentlistContext extends ParserRuleContext {
		public TemplateargumentContext templateargument() {
			return getRuleContext(TemplateargumentContext.class,0);
		}
		public TemplateargumentlistContext templateargumentlist() {
			return getRuleContext(TemplateargumentlistContext.class,0);
		}
		public TemplateargumentlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateargumentlist; }
	}

	public final TemplateargumentlistContext templateargumentlist() throws RecognitionException {
		return templateargumentlist(0);
	}

	private TemplateargumentlistContext templateargumentlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TemplateargumentlistContext _localctx = new TemplateargumentlistContext(_ctx, _parentState);
		TemplateargumentlistContext _prevctx = _localctx;
		int _startState = 384;
		enterRecursionRule(_localctx, 384, RULE_templateargumentlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2383);
			templateargument();
			setState(2385);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,308,_ctx) ) {
			case 1:
				{
				setState(2384);
				match(Ellipsis);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(2395);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,310,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateargumentlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_templateargumentlist);
					setState(2387);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2388);
					match(Comma);
					setState(2389);
					templateargument();
					setState(2391);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,309,_ctx) ) {
					case 1:
						{
						setState(2390);
						match(Ellipsis);
						}
						break;
					}
					}
					} 
				}
				setState(2397);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,310,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TemplateargumentContext extends ParserRuleContext {
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public IdexpressionContext idexpression() {
			return getRuleContext(IdexpressionContext.class,0);
		}
		public TemplateargumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_templateargument; }
	}

	public final TemplateargumentContext templateargument() throws RecognitionException {
		TemplateargumentContext _localctx = new TemplateargumentContext(_ctx, getState());
		enterRule(_localctx, 386, RULE_templateargument);
		try {
			setState(2401);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,311,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2398);
				thetypeid();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2399);
				constantexpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2400);
				idexpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypenamespecifierContext extends ParserRuleContext {
		public TerminalNode Typename_() { return getToken(CPP14Parser.Typename_, 0); }
		public NestednamespecifierContext nestednamespecifier() {
			return getRuleContext(NestednamespecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CPP14Parser.Identifier, 0); }
		public SimpletemplateidContext simpletemplateid() {
			return getRuleContext(SimpletemplateidContext.class,0);
		}
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public TypenamespecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typenamespecifier; }
	}

	public final TypenamespecifierContext typenamespecifier() throws RecognitionException {
		TypenamespecifierContext _localctx = new TypenamespecifierContext(_ctx, getState());
		enterRule(_localctx, 388, RULE_typenamespecifier);
		int _la;
		try {
			setState(2414);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,313,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2403);
				match(Typename_);
				setState(2404);
				nestednamespecifier(0);
				setState(2405);
				match(Identifier);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2407);
				match(Typename_);
				setState(2408);
				nestednamespecifier(0);
				setState(2410);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Template) {
					{
					setState(2409);
					match(Template);
					}
				}

				setState(2412);
				simpletemplateid();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplicitinstantiationContext extends ParserRuleContext {
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode Extern() { return getToken(CPP14Parser.Extern, 0); }
		public ExplicitinstantiationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explicitinstantiation; }
	}

	public final ExplicitinstantiationContext explicitinstantiation() throws RecognitionException {
		ExplicitinstantiationContext _localctx = new ExplicitinstantiationContext(_ctx, getState());
		enterRule(_localctx, 390, RULE_explicitinstantiation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2417);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Extern) {
				{
				setState(2416);
				match(Extern);
				}
			}

			setState(2419);
			match(Template);
			setState(2420);
			declaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplicitspecializationContext extends ParserRuleContext {
		public TerminalNode Template() { return getToken(CPP14Parser.Template, 0); }
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public ExplicitspecializationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explicitspecialization; }
	}

	public final ExplicitspecializationContext explicitspecialization() throws RecognitionException {
		ExplicitspecializationContext _localctx = new ExplicitspecializationContext(_ctx, getState());
		enterRule(_localctx, 392, RULE_explicitspecialization);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2422);
			match(Template);
			setState(2423);
			match(Less);
			setState(2424);
			match(Greater);
			setState(2425);
			declaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryblockContext extends ParserRuleContext {
		public TerminalNode Try() { return getToken(CPP14Parser.Try, 0); }
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public HandlerseqContext handlerseq() {
			return getRuleContext(HandlerseqContext.class,0);
		}
		public TryblockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryblock; }
	}

	public final TryblockContext tryblock() throws RecognitionException {
		TryblockContext _localctx = new TryblockContext(_ctx, getState());
		enterRule(_localctx, 394, RULE_tryblock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2427);
			match(Try);
			setState(2428);
			compoundstatement();
			setState(2429);
			handlerseq();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctiontryblockContext extends ParserRuleContext {
		public TerminalNode Try() { return getToken(CPP14Parser.Try, 0); }
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public HandlerseqContext handlerseq() {
			return getRuleContext(HandlerseqContext.class,0);
		}
		public CtorinitializerContext ctorinitializer() {
			return getRuleContext(CtorinitializerContext.class,0);
		}
		public FunctiontryblockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functiontryblock; }
	}

	public final FunctiontryblockContext functiontryblock() throws RecognitionException {
		FunctiontryblockContext _localctx = new FunctiontryblockContext(_ctx, getState());
		enterRule(_localctx, 396, RULE_functiontryblock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2431);
			match(Try);
			setState(2433);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(2432);
				ctorinitializer();
				}
			}

			setState(2435);
			compoundstatement();
			setState(2436);
			handlerseq();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HandlerseqContext extends ParserRuleContext {
		public HandlerContext handler() {
			return getRuleContext(HandlerContext.class,0);
		}
		public HandlerseqContext handlerseq() {
			return getRuleContext(HandlerseqContext.class,0);
		}
		public HandlerseqContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_handlerseq; }
	}

	public final HandlerseqContext handlerseq() throws RecognitionException {
		HandlerseqContext _localctx = new HandlerseqContext(_ctx, getState());
		enterRule(_localctx, 398, RULE_handlerseq);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2438);
			handler();
			setState(2440);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,316,_ctx) ) {
			case 1:
				{
				setState(2439);
				handlerseq();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HandlerContext extends ParserRuleContext {
		public TerminalNode Catch() { return getToken(CPP14Parser.Catch, 0); }
		public ExceptiondeclarationContext exceptiondeclaration() {
			return getRuleContext(ExceptiondeclarationContext.class,0);
		}
		public CompoundstatementContext compoundstatement() {
			return getRuleContext(CompoundstatementContext.class,0);
		}
		public HandlerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_handler; }
	}

	public final HandlerContext handler() throws RecognitionException {
		HandlerContext _localctx = new HandlerContext(_ctx, getState());
		enterRule(_localctx, 400, RULE_handler);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2442);
			match(Catch);
			setState(2443);
			match(LeftParen);
			setState(2444);
			exceptiondeclaration();
			setState(2445);
			match(RightParen);
			setState(2446);
			compoundstatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExceptiondeclarationContext extends ParserRuleContext {
		public TypespecifierseqContext typespecifierseq() {
			return getRuleContext(TypespecifierseqContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public AttributespecifierseqContext attributespecifierseq() {
			return getRuleContext(AttributespecifierseqContext.class,0);
		}
		public AbstractdeclaratorContext abstractdeclarator() {
			return getRuleContext(AbstractdeclaratorContext.class,0);
		}
		public ExceptiondeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exceptiondeclaration; }
	}

	public final ExceptiondeclarationContext exceptiondeclaration() throws RecognitionException {
		ExceptiondeclarationContext _localctx = new ExceptiondeclarationContext(_ctx, getState());
		enterRule(_localctx, 402, RULE_exceptiondeclaration);
		int _la;
		try {
			setState(2462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,320,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2449);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2448);
					attributespecifierseq(0);
					}
				}

				setState(2451);
				typespecifierseq();
				setState(2452);
				declarator();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2455);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Alignas || _la==LeftBracket) {
					{
					setState(2454);
					attributespecifierseq(0);
					}
				}

				setState(2457);
				typespecifierseq();
				setState(2459);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__8 || _la==Decltype || ((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LeftParen - 91)) | (1L << (LeftBracket - 91)) | (1L << (Star - 91)) | (1L << (And - 91)) | (1L << (Doublecolon - 91)) | (1L << (Ellipsis - 91)) | (1L << (Identifier - 91)))) != 0)) {
					{
					setState(2458);
					abstractdeclarator();
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2461);
				match(Ellipsis);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThrowexpressionContext extends ParserRuleContext {
		public TerminalNode Throw() { return getToken(CPP14Parser.Throw, 0); }
		public AssignmentexpressionContext assignmentexpression() {
			return getRuleContext(AssignmentexpressionContext.class,0);
		}
		public ThrowexpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwexpression; }
	}

	public final ThrowexpressionContext throwexpression() throws RecognitionException {
		ThrowexpressionContext _localctx = new ThrowexpressionContext(_ctx, getState());
		enterRule(_localctx, 404, RULE_throwexpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2464);
			match(Throw);
			setState(2466);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,321,_ctx) ) {
			case 1:
				{
				setState(2465);
				assignmentexpression();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExceptionspecificationContext extends ParserRuleContext {
		public DynamicexceptionspecificationContext dynamicexceptionspecification() {
			return getRuleContext(DynamicexceptionspecificationContext.class,0);
		}
		public NoexceptspecificationContext noexceptspecification() {
			return getRuleContext(NoexceptspecificationContext.class,0);
		}
		public ExceptionspecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exceptionspecification; }
	}

	public final ExceptionspecificationContext exceptionspecification() throws RecognitionException {
		ExceptionspecificationContext _localctx = new ExceptionspecificationContext(_ctx, getState());
		enterRule(_localctx, 406, RULE_exceptionspecification);
		try {
			setState(2470);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Throw:
				enterOuterAlt(_localctx, 1);
				{
				setState(2468);
				dynamicexceptionspecification();
				}
				break;
			case Noexcept:
				enterOuterAlt(_localctx, 2);
				{
				setState(2469);
				noexceptspecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DynamicexceptionspecificationContext extends ParserRuleContext {
		public TerminalNode Throw() { return getToken(CPP14Parser.Throw, 0); }
		public TypeidlistContext typeidlist() {
			return getRuleContext(TypeidlistContext.class,0);
		}
		public DynamicexceptionspecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dynamicexceptionspecification; }
	}

	public final DynamicexceptionspecificationContext dynamicexceptionspecification() throws RecognitionException {
		DynamicexceptionspecificationContext _localctx = new DynamicexceptionspecificationContext(_ctx, getState());
		enterRule(_localctx, 408, RULE_dynamicexceptionspecification);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2472);
			match(Throw);
			setState(2473);
			match(LeftParen);
			setState(2475);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << Auto) | (1L << Bool) | (1L << Char) | (1L << Char16) | (1L << Char32) | (1L << Class) | (1L << Const) | (1L << Decltype) | (1L << Double) | (1L << Enum) | (1L << Float) | (1L << Int) | (1L << Long))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (Short - 66)) | (1L << (Signed - 66)) | (1L << (Struct - 66)) | (1L << (Typename_ - 66)) | (1L << (Union - 66)) | (1L << (Unsigned - 66)) | (1L << (Void - 66)) | (1L << (Volatile - 66)) | (1L << (Wchar - 66)))) != 0) || _la==Doublecolon || _la==Identifier) {
				{
				setState(2474);
				typeidlist(0);
				}
			}

			setState(2477);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeidlistContext extends ParserRuleContext {
		public ThetypeidContext thetypeid() {
			return getRuleContext(ThetypeidContext.class,0);
		}
		public TypeidlistContext typeidlist() {
			return getRuleContext(TypeidlistContext.class,0);
		}
		public TypeidlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeidlist; }
	}

	public final TypeidlistContext typeidlist() throws RecognitionException {
		return typeidlist(0);
	}

	private TypeidlistContext typeidlist(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeidlistContext _localctx = new TypeidlistContext(_ctx, _parentState);
		TypeidlistContext _prevctx = _localctx;
		int _startState = 410;
		enterRecursionRule(_localctx, 410, RULE_typeidlist, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(2480);
			thetypeid();
			setState(2482);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,324,_ctx) ) {
			case 1:
				{
				setState(2481);
				match(Ellipsis);
				}
				break;
			}
			}
			_ctx.stop = _input.LT(-1);
			setState(2492);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,326,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeidlistContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_typeidlist);
					setState(2484);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(2485);
					match(Comma);
					setState(2486);
					thetypeid();
					setState(2488);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,325,_ctx) ) {
					case 1:
						{
						setState(2487);
						match(Ellipsis);
						}
						break;
					}
					}
					} 
				}
				setState(2494);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,326,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class NoexceptspecificationContext extends ParserRuleContext {
		public TerminalNode Noexcept() { return getToken(CPP14Parser.Noexcept, 0); }
		public ConstantexpressionContext constantexpression() {
			return getRuleContext(ConstantexpressionContext.class,0);
		}
		public NoexceptspecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noexceptspecification; }
	}

	public final NoexceptspecificationContext noexceptspecification() throws RecognitionException {
		NoexceptspecificationContext _localctx = new NoexceptspecificationContext(_ctx, getState());
		enterRule(_localctx, 412, RULE_noexceptspecification);
		try {
			setState(2501);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,327,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2495);
				match(Noexcept);
				setState(2496);
				match(LeftParen);
				setState(2497);
				constantexpression();
				setState(2498);
				match(RightParen);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2500);
				match(Noexcept);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TheoperatorContext extends ParserRuleContext {
		public TerminalNode New() { return getToken(CPP14Parser.New, 0); }
		public TerminalNode Delete() { return getToken(CPP14Parser.Delete, 0); }
		public TerminalNode LeftShift() { return getToken(CPP14Parser.LeftShift, 0); }
		public TerminalNode RightShift() { return getToken(CPP14Parser.RightShift, 0); }
		public TerminalNode RightShiftAssign() { return getToken(CPP14Parser.RightShiftAssign, 0); }
		public TerminalNode LeftShiftAssign() { return getToken(CPP14Parser.LeftShiftAssign, 0); }
		public TheoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_theoperator; }
	}

	public final TheoperatorContext theoperator() throws RecognitionException {
		TheoperatorContext _localctx = new TheoperatorContext(_ctx, getState());
		enterRule(_localctx, 414, RULE_theoperator);
		try {
			setState(2554);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,328,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2503);
				match(New);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2504);
				match(Delete);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2505);
				match(New);
				setState(2506);
				match(LeftBracket);
				setState(2507);
				match(RightBracket);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2508);
				match(Delete);
				setState(2509);
				match(LeftBracket);
				setState(2510);
				match(RightBracket);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2511);
				match(Plus);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2512);
				match(Minus);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(2513);
				match(Star);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(2514);
				match(Div);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(2515);
				match(Mod);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(2516);
				match(Caret);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(2517);
				match(And);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(2518);
				match(Or);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(2519);
				match(Tilde);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(2520);
				match(T__6);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(2521);
				match(T__7);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(2522);
				match(Assign);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(2523);
				match(Less);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(2524);
				match(Greater);
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(2525);
				match(PlusAssign);
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(2526);
				match(MinusAssign);
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(2527);
				match(StarAssign);
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(2528);
				match(DivAssign);
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(2529);
				match(ModAssign);
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(2530);
				match(XorAssign);
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(2531);
				match(AndAssign);
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(2532);
				match(OrAssign);
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(2533);
				match(LeftShift);
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(2534);
				match(RightShift);
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(2535);
				match(RightShiftAssign);
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(2536);
				match(LeftShiftAssign);
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(2537);
				match(Equal);
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(2538);
				match(NotEqual);
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(2539);
				match(LessEqual);
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(2540);
				match(GreaterEqual);
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(2541);
				match(T__8);
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(2542);
				match(T__9);
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(2543);
				match(T__10);
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(2544);
				match(T__11);
				}
				break;
			case 39:
				enterOuterAlt(_localctx, 39);
				{
				setState(2545);
				match(PlusPlus);
				}
				break;
			case 40:
				enterOuterAlt(_localctx, 40);
				{
				setState(2546);
				match(MinusMinus);
				}
				break;
			case 41:
				enterOuterAlt(_localctx, 41);
				{
				setState(2547);
				match(Comma);
				}
				break;
			case 42:
				enterOuterAlt(_localctx, 42);
				{
				setState(2548);
				match(ArrowStar);
				}
				break;
			case 43:
				enterOuterAlt(_localctx, 43);
				{
				setState(2549);
				match(Arrow);
				}
				break;
			case 44:
				enterOuterAlt(_localctx, 44);
				{
				setState(2550);
				match(LeftParen);
				setState(2551);
				match(RightParen);
				}
				break;
			case 45:
				enterOuterAlt(_localctx, 45);
				{
				setState(2552);
				match(LeftBracket);
				setState(2553);
				match(RightBracket);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode Integerliteral() { return getToken(CPP14Parser.Integerliteral, 0); }
		public TerminalNode Characterliteral() { return getToken(CPP14Parser.Characterliteral, 0); }
		public TerminalNode Floatingliteral() { return getToken(CPP14Parser.Floatingliteral, 0); }
		public TerminalNode Stringliteral() { return getToken(CPP14Parser.Stringliteral, 0); }
		public BooleanliteralContext booleanliteral() {
			return getRuleContext(BooleanliteralContext.class,0);
		}
		public PointerliteralContext pointerliteral() {
			return getRuleContext(PointerliteralContext.class,0);
		}
		public UserdefinedliteralContext userdefinedliteral() {
			return getRuleContext(UserdefinedliteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 416, RULE_literal);
		try {
			setState(2563);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Integerliteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(2556);
				match(Integerliteral);
				}
				break;
			case Characterliteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(2557);
				match(Characterliteral);
				}
				break;
			case Floatingliteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(2558);
				match(Floatingliteral);
				}
				break;
			case Stringliteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(2559);
				match(Stringliteral);
				}
				break;
			case False:
			case True:
				enterOuterAlt(_localctx, 5);
				{
				setState(2560);
				booleanliteral();
				}
				break;
			case Nullptr:
				enterOuterAlt(_localctx, 6);
				{
				setState(2561);
				pointerliteral();
				}
				break;
			case Userdefinedintegerliteral:
			case Userdefinedfloatingliteral:
			case Userdefinedstringliteral:
			case Userdefinedcharacterliteral:
				enterOuterAlt(_localctx, 7);
				{
				setState(2562);
				userdefinedliteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanliteralContext extends ParserRuleContext {
		public TerminalNode False() { return getToken(CPP14Parser.False, 0); }
		public TerminalNode True() { return getToken(CPP14Parser.True, 0); }
		public BooleanliteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanliteral; }
	}

	public final BooleanliteralContext booleanliteral() throws RecognitionException {
		BooleanliteralContext _localctx = new BooleanliteralContext(_ctx, getState());
		enterRule(_localctx, 418, RULE_booleanliteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2565);
			_la = _input.LA(1);
			if ( !(_la==False || _la==True) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerliteralContext extends ParserRuleContext {
		public TerminalNode Nullptr() { return getToken(CPP14Parser.Nullptr, 0); }
		public PointerliteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointerliteral; }
	}

	public final PointerliteralContext pointerliteral() throws RecognitionException {
		PointerliteralContext _localctx = new PointerliteralContext(_ctx, getState());
		enterRule(_localctx, 420, RULE_pointerliteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2567);
			match(Nullptr);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserdefinedliteralContext extends ParserRuleContext {
		public TerminalNode Userdefinedintegerliteral() { return getToken(CPP14Parser.Userdefinedintegerliteral, 0); }
		public TerminalNode Userdefinedfloatingliteral() { return getToken(CPP14Parser.Userdefinedfloatingliteral, 0); }
		public TerminalNode Userdefinedstringliteral() { return getToken(CPP14Parser.Userdefinedstringliteral, 0); }
		public TerminalNode Userdefinedcharacterliteral() { return getToken(CPP14Parser.Userdefinedcharacterliteral, 0); }
		public UserdefinedliteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_userdefinedliteral; }
	}

	public final UserdefinedliteralContext userdefinedliteral() throws RecognitionException {
		UserdefinedliteralContext _localctx = new UserdefinedliteralContext(_ctx, getState());
		enterRule(_localctx, 422, RULE_userdefinedliteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2569);
			_la = _input.LA(1);
			if ( !(((((_la - 150)) & ~0x3f) == 0 && ((1L << (_la - 150)) & ((1L << (Userdefinedintegerliteral - 150)) | (1L << (Userdefinedfloatingliteral - 150)) | (1L << (Userdefinedstringliteral - 150)) | (1L << (Userdefinedcharacterliteral - 150)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return ueannotationlistentries_sempred((UeannotationlistentriesContext)_localctx, predIndex);
		case 17:
			return nestednamespecifier_sempred((NestednamespecifierContext)_localctx, predIndex);
		case 22:
			return capturelist_sempred((CapturelistContext)_localctx, predIndex);
		case 27:
			return postfixexpression_sempred((PostfixexpressionContext)_localctx, predIndex);
		case 38:
			return noptrnewdeclarator_sempred((NoptrnewdeclaratorContext)_localctx, predIndex);
		case 43:
			return pmexpression_sempred((PmexpressionContext)_localctx, predIndex);
		case 44:
			return multiplicativeexpression_sempred((MultiplicativeexpressionContext)_localctx, predIndex);
		case 45:
			return additiveexpression_sempred((AdditiveexpressionContext)_localctx, predIndex);
		case 46:
			return shiftexpression_sempred((ShiftexpressionContext)_localctx, predIndex);
		case 48:
			return relationalexpression_sempred((RelationalexpressionContext)_localctx, predIndex);
		case 49:
			return equalityexpression_sempred((EqualityexpressionContext)_localctx, predIndex);
		case 50:
			return andexpression_sempred((AndexpressionContext)_localctx, predIndex);
		case 51:
			return exclusiveorexpression_sempred((ExclusiveorexpressionContext)_localctx, predIndex);
		case 52:
			return inclusiveorexpression_sempred((InclusiveorexpressionContext)_localctx, predIndex);
		case 53:
			return logicalandexpression_sempred((LogicalandexpressionContext)_localctx, predIndex);
		case 54:
			return logicalorexpression_sempred((LogicalorexpressionContext)_localctx, predIndex);
		case 58:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 64:
			return statementseq_sempred((StatementseqContext)_localctx, predIndex);
		case 73:
			return declarationseq_sempred((DeclarationseqContext)_localctx, predIndex);
		case 100:
			return enumeratorlist_sempred((EnumeratorlistContext)_localctx, predIndex);
		case 118:
			return attributespecifierseq_sempred((AttributespecifierseqContext)_localctx, predIndex);
		case 121:
			return attributelist_sempred((AttributelistContext)_localctx, predIndex);
		case 127:
			return balancedtokenseq_sempred((BalancedtokenseqContext)_localctx, predIndex);
		case 129:
			return initdeclaratorlist_sempred((InitdeclaratorlistContext)_localctx, predIndex);
		case 133:
			return noptrdeclarator_sempred((NoptrdeclaratorContext)_localctx, predIndex);
		case 144:
			return noptrabstractdeclarator_sempred((NoptrabstractdeclaratorContext)_localctx, predIndex);
		case 146:
			return noptrabstractpackdeclarator_sempred((NoptrabstractpackdeclaratorContext)_localctx, predIndex);
		case 148:
			return parameterdeclarationlist_sempred((ParameterdeclarationlistContext)_localctx, predIndex);
		case 155:
			return initializerlist_sempred((InitializerlistContext)_localctx, predIndex);
		case 165:
			return memberdeclaratorlist_sempred((MemberdeclaratorlistContext)_localctx, predIndex);
		case 167:
			return virtspecifierseq_sempred((VirtspecifierseqContext)_localctx, predIndex);
		case 171:
			return basespecifierlist_sempred((BasespecifierlistContext)_localctx, predIndex);
		case 186:
			return templateparameterlist_sempred((TemplateparameterlistContext)_localctx, predIndex);
		case 192:
			return templateargumentlist_sempred((TemplateargumentlistContext)_localctx, predIndex);
		case 205:
			return typeidlist_sempred((TypeidlistContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean ueannotationlistentries_sempred(UeannotationlistentriesContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean nestednamespecifier_sempred(NestednamespecifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 2);
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean capturelist_sempred(CapturelistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean postfixexpression_sempred(PostfixexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 19);
		case 5:
			return precpred(_ctx, 18);
		case 6:
			return precpred(_ctx, 17);
		case 7:
			return precpred(_ctx, 12);
		case 8:
			return precpred(_ctx, 11);
		case 9:
			return precpred(_ctx, 10);
		case 10:
			return precpred(_ctx, 9);
		case 11:
			return precpred(_ctx, 8);
		case 12:
			return precpred(_ctx, 7);
		}
		return true;
	}
	private boolean noptrnewdeclarator_sempred(NoptrnewdeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean pmexpression_sempred(PmexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return precpred(_ctx, 2);
		case 15:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multiplicativeexpression_sempred(MultiplicativeexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 16:
			return precpred(_ctx, 3);
		case 17:
			return precpred(_ctx, 2);
		case 18:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean additiveexpression_sempred(AdditiveexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 19:
			return precpred(_ctx, 2);
		case 20:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean shiftexpression_sempred(ShiftexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 21:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean relationalexpression_sempred(RelationalexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 22:
			return precpred(_ctx, 4);
		case 23:
			return precpred(_ctx, 3);
		case 24:
			return precpred(_ctx, 2);
		case 25:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean equalityexpression_sempred(EqualityexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 26:
			return precpred(_ctx, 2);
		case 27:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean andexpression_sempred(AndexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 28:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean exclusiveorexpression_sempred(ExclusiveorexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 29:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean inclusiveorexpression_sempred(InclusiveorexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 30:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicalandexpression_sempred(LogicalandexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 31:
			return precpred(_ctx, 2);
		case 32:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicalorexpression_sempred(LogicalorexpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 33:
			return precpred(_ctx, 2);
		case 34:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 35:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean statementseq_sempred(StatementseqContext _localctx, int predIndex) {
		switch (predIndex) {
		case 36:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean declarationseq_sempred(DeclarationseqContext _localctx, int predIndex) {
		switch (predIndex) {
		case 37:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean enumeratorlist_sempred(EnumeratorlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 38:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean attributespecifierseq_sempred(AttributespecifierseqContext _localctx, int predIndex) {
		switch (predIndex) {
		case 39:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean attributelist_sempred(AttributelistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 40:
			return precpred(_ctx, 3);
		case 41:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean balancedtokenseq_sempred(BalancedtokenseqContext _localctx, int predIndex) {
		switch (predIndex) {
		case 42:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean initdeclaratorlist_sempred(InitdeclaratorlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 43:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean noptrdeclarator_sempred(NoptrdeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 44:
			return precpred(_ctx, 3);
		case 45:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean noptrabstractdeclarator_sempred(NoptrabstractdeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 46:
			return precpred(_ctx, 5);
		case 47:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean noptrabstractpackdeclarator_sempred(NoptrabstractpackdeclaratorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 48:
			return precpred(_ctx, 3);
		case 49:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean parameterdeclarationlist_sempred(ParameterdeclarationlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 50:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean initializerlist_sempred(InitializerlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 51:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean memberdeclaratorlist_sempred(MemberdeclaratorlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 52:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean virtspecifierseq_sempred(VirtspecifierseqContext _localctx, int predIndex) {
		switch (predIndex) {
		case 53:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean basespecifierlist_sempred(BasespecifierlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 54:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean templateparameterlist_sempred(TemplateparameterlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 55:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean templateargumentlist_sempred(TemplateargumentlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 56:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean typeidlist_sempred(TypeidlistContext _localctx, int predIndex) {
		switch (predIndex) {
		case 57:
			return precpred(_ctx, 1);
		}
		return true;
	}

	private static final int _serializedATNSegments = 2;
	private static final String _serializedATNSegment0 =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u009f\u0a0e\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\4\u008e"+
		"\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090\4\u0091\t\u0091\4\u0092\t\u0092"+
		"\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095\t\u0095\4\u0096\t\u0096\4\u0097"+
		"\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099\4\u009a\t\u009a\4\u009b\t\u009b"+
		"\4\u009c\t\u009c\4\u009d\t\u009d\4\u009e\t\u009e\4\u009f\t\u009f\4\u00a0"+
		"\t\u00a0\4\u00a1\t\u00a1\4\u00a2\t\u00a2\4\u00a3\t\u00a3\4\u00a4\t\u00a4"+
		"\4\u00a5\t\u00a5\4\u00a6\t\u00a6\4\u00a7\t\u00a7\4\u00a8\t\u00a8\4\u00a9"+
		"\t\u00a9\4\u00aa\t\u00aa\4\u00ab\t\u00ab\4\u00ac\t\u00ac\4\u00ad\t\u00ad"+
		"\4\u00ae\t\u00ae\4\u00af\t\u00af\4\u00b0\t\u00b0\4\u00b1\t\u00b1\4\u00b2"+
		"\t\u00b2\4\u00b3\t\u00b3\4\u00b4\t\u00b4\4\u00b5\t\u00b5\4\u00b6\t\u00b6"+
		"\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9\t\u00b9\4\u00ba\t\u00ba\4\u00bb"+
		"\t\u00bb\4\u00bc\t\u00bc\4\u00bd\t\u00bd\4\u00be\t\u00be\4\u00bf\t\u00bf"+
		"\4\u00c0\t\u00c0\4\u00c1\t\u00c1\4\u00c2\t\u00c2\4\u00c3\t\u00c3\4\u00c4"+
		"\t\u00c4\4\u00c5\t\u00c5\4\u00c6\t\u00c6\4\u00c7\t\u00c7\4\u00c8\t\u00c8"+
		"\4\u00c9\t\u00c9\4\u00ca\t\u00ca\4\u00cb\t\u00cb\4\u00cc\t\u00cc\4\u00cd"+
		"\t\u00cd\4\u00ce\t\u00ce\4\u00cf\t\u00cf\4\u00d0\t\u00d0\4\u00d1\t\u00d1"+
		"\4\u00d2\t\u00d2\4\u00d3\t\u00d3\4\u00d4\t\u00d4\4\u00d5\t\u00d5\3\2\3"+
		"\2\3\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b"+
		"\5\b\u01be\n\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\7\t\u01c8\n\t\f\t\16\t"+
		"\u01cb\13\t\3\n\3\n\5\n\u01cf\n\n\3\13\3\13\3\13\3\13\5\13\u01d5\n\13"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\3\16\5\16\u01de\n\16\3\16\3\16\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\5\17\u01ea\n\17\3\20\3\20\5\20\u01ee\n\20\3"+
		"\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\3\21\5\21\u01f9\n\21\3\22\3\22"+
		"\5\22\u01fd\n\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\5\23\u020c\n\23\3\23\3\23\3\23\3\23\3\23\5\23\u0213\n\23\3"+
		"\23\3\23\3\23\7\23\u0218\n\23\f\23\16\23\u021b\13\23\3\24\3\24\5\24\u021f"+
		"\n\24\3\24\3\24\3\25\3\25\5\25\u0225\n\25\3\25\3\25\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\5\26\u022f\n\26\3\27\3\27\3\30\3\30\3\30\5\30\u0236\n\30\3"+
		"\30\3\30\3\30\3\30\5\30\u023c\n\30\7\30\u023e\n\30\f\30\16\30\u0241\13"+
		"\30\3\31\3\31\5\31\u0245\n\31\3\32\3\32\3\32\3\32\5\32\u024b\n\32\3\33"+
		"\3\33\3\33\3\33\3\33\5\33\u0252\n\33\3\34\3\34\3\34\3\34\5\34\u0258\n"+
		"\34\3\34\5\34\u025b\n\34\3\34\5\34\u025e\n\34\3\34\5\34\u0261\n\34\3\35"+
		"\3\35\3\35\3\35\3\35\5\35\u0268\n\35\3\35\3\35\3\35\3\35\3\35\5\35\u026f"+
		"\n\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u02a3\n\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u02b2\n\35"+
		"\3\35\3\35\3\35\3\35\5\35\u02b8\n\35\3\35\3\35\3\35\3\35\5\35\u02be\n"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\7\35\u02cb"+
		"\n\35\f\35\16\35\u02ce\13\35\3\36\3\36\3\37\3\37\3 \3 \3!\5!\u02d7\n!"+
		"\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u02e6\n!\3!\3!\3!\3!\5!\u02ec"+
		"\n!\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3"+
		"\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\5\"\u030a\n\"\3#\3#\3$"+
		"\5$\u030f\n$\3$\3$\5$\u0313\n$\3$\3$\5$\u0317\n$\3$\5$\u031a\n$\3$\3$"+
		"\5$\u031e\n$\3$\3$\3$\3$\5$\u0324\n$\5$\u0326\n$\3%\3%\3%\3%\3&\3&\5&"+
		"\u032e\n&\3\'\3\'\5\'\u0332\n\'\3\'\5\'\u0335\n\'\3(\3(\3(\3(\3(\5(\u033c"+
		"\n(\3(\3(\3(\3(\3(\5(\u0343\n(\7(\u0345\n(\f(\16(\u0348\13(\3)\3)\5)\u034c"+
		"\n)\3)\3)\5)\u0350\n)\3*\5*\u0353\n*\3*\3*\3*\5*\u0358\n*\3*\3*\3*\3*"+
		"\5*\u035e\n*\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\5,\u036b\n,\3-\3-\3-\3-"+
		"\3-\3-\3-\3-\3-\7-\u0376\n-\f-\16-\u0379\13-\3.\3.\3.\3.\3.\3.\3.\3.\3"+
		".\3.\3.\3.\7.\u0387\n.\f.\16.\u038a\13.\3/\3/\3/\3/\3/\3/\3/\3/\3/\7/"+
		"\u0395\n/\f/\16/\u0398\13/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\7\60\u03a1"+
		"\n\60\f\60\16\60\u03a4\13\60\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3"+
		"\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3\62\7\62\u03b7\n\62\f\62\16\62"+
		"\u03ba\13\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\7\63\u03c5\n"+
		"\63\f\63\16\63\u03c8\13\63\3\64\3\64\3\64\3\64\3\64\3\64\7\64\u03d0\n"+
		"\64\f\64\16\64\u03d3\13\64\3\65\3\65\3\65\3\65\3\65\3\65\7\65\u03db\n"+
		"\65\f\65\16\65\u03de\13\65\3\66\3\66\3\66\3\66\3\66\3\66\7\66\u03e6\n"+
		"\66\f\66\16\66\u03e9\13\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\3\67\3\67"+
		"\7\67\u03f4\n\67\f\67\16\67\u03f7\13\67\38\38\38\38\38\38\38\38\38\78"+
		"\u0402\n8\f8\168\u0405\138\39\39\39\39\39\39\39\59\u040e\n9\3:\3:\3:\3"+
		":\3:\3:\5:\u0416\n:\3;\3;\3<\3<\3<\3<\3<\3<\7<\u0420\n<\f<\16<\u0423\13"+
		"<\3=\3=\3>\3>\5>\u0429\n>\3>\3>\5>\u042d\n>\3>\3>\5>\u0431\n>\3>\3>\5"+
		">\u0435\n>\3>\3>\5>\u0439\n>\3>\3>\3>\5>\u043e\n>\3>\5>\u0441\n>\3?\5"+
		"?\u0444\n?\3?\3?\3?\3?\5?\u044a\n?\3?\3?\3?\3?\3?\3?\5?\u0452\n?\3?\3"+
		"?\3?\5?\u0457\n?\3@\5@\u045a\n@\3@\3@\3A\3A\5A\u0460\nA\3A\3A\3B\3B\3"+
		"B\3B\3B\7B\u0469\nB\fB\16B\u046c\13B\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C"+
		"\3C\3C\3C\3C\3C\3C\3C\3C\3C\5C\u0482\nC\3D\3D\5D\u0486\nD\3D\3D\3D\3D"+
		"\3D\3D\5D\u048e\nD\3D\3D\3D\3D\5D\u0494\nD\3E\3E\3E\3E\3E\3E\3E\3E\3E"+
		"\3E\3E\3E\3E\3E\3E\3E\3E\3E\5E\u04a8\nE\3E\3E\5E\u04ac\nE\3E\3E\3E\3E"+
		"\3E\3E\3E\3E\3E\3E\3E\5E\u04b9\nE\3F\3F\5F\u04bd\nF\3G\5G\u04c0\nG\3G"+
		"\3G\3G\3H\3H\5H\u04c7\nH\3I\3I\3I\3I\3I\3I\5I\u04cf\nI\3I\3I\3I\3I\3I"+
		"\3I\3I\3I\5I\u04d9\nI\3J\3J\3K\3K\3K\3K\3K\7K\u04e2\nK\fK\16K\u04e5\13"+
		"K\3L\3L\3L\3L\3L\3L\3L\3L\3L\5L\u04f0\nL\3M\3M\3M\3M\3M\3M\3M\3M\5M\u04fa"+
		"\nM\3N\3N\3N\5N\u04ff\nN\3N\3N\3N\3N\3O\5O\u0506\nO\3O\5O\u0509\nO\3O"+
		"\3O\3O\5O\u050e\nO\3O\3O\3O\5O\u0513\nO\3P\3P\3P\3P\3P\3P\3P\3P\3Q\3Q"+
		"\3R\3R\3R\3S\3S\3S\3S\3S\3S\5S\u0528\nS\3T\3T\5T\u052c\nT\3T\3T\3T\5T"+
		"\u0531\nT\3U\3U\3V\3V\3W\3W\3X\3X\3X\5X\u053c\nX\3Y\3Y\3Y\3Y\5Y\u0542"+
		"\nY\3Z\3Z\5Z\u0546\nZ\3Z\3Z\3Z\5Z\u054b\nZ\3[\3[\5[\u054f\n[\3[\3[\3["+
		"\5[\u0554\n[\3\\\5\\\u0557\n\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\"+
		"\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\3\\\5\\\u056d\n\\\3]\3]\3]\3]\5]"+
		"\u0573\n]\3^\3^\3^\3^\3^\3^\3^\3^\3^\5^\u057e\n^\3_\3_\5_\u0582\n_\3_"+
		"\5_\u0585\n_\3_\3_\3_\3_\3_\3_\3_\3_\5_\u058f\n_\3_\3_\3_\3_\5_\u0595"+
		"\n_\3_\5_\u0598\n_\3`\3`\3a\3a\3a\5a\u059f\na\3a\3a\3a\3a\3a\3a\3a\3a"+
		"\5a\u05a9\na\3b\3b\5b\u05ad\nb\3b\5b\u05b0\nb\3b\5b\u05b3\nb\3b\3b\5b"+
		"\u05b7\nb\3b\3b\3b\5b\u05bc\nb\5b\u05be\nb\3c\3c\5c\u05c2\nc\3c\3c\5c"+
		"\u05c6\nc\3c\3c\3d\3d\3d\3d\3d\5d\u05cf\nd\3e\3e\3e\3f\3f\3f\3f\3f\3f"+
		"\7f\u05da\nf\ff\16f\u05dd\13f\3g\3g\3g\3g\3g\5g\u05e4\ng\3h\3h\3i\3i\5"+
		"i\u05ea\ni\3j\3j\3k\3k\5k\u05f0\nk\3l\3l\5l\u05f4\nl\3m\5m\u05f7\nm\3"+
		"m\3m\3m\3m\3m\3m\3n\5n\u0600\nn\3n\3n\3n\3n\3n\3n\3o\5o\u0609\no\3o\3"+
		"o\3o\3o\3o\3p\5p\u0611\np\3q\3q\3r\3r\3r\3r\3r\3r\3s\5s\u061c\ns\3s\3"+
		"s\3t\3t\5t\u0622\nt\3t\3t\3t\3t\3t\3t\3t\3t\3t\5t\u062d\nt\3u\5u\u0630"+
		"\nu\3u\3u\3u\5u\u0635\nu\3u\3u\3u\3v\3v\3v\3v\3v\3v\3w\3w\3w\3w\5w\u0644"+
		"\nw\3w\3w\3w\3w\5w\u064a\nw\3x\3x\3x\3x\3x\7x\u0651\nx\fx\16x\u0654\13"+
		"x\3y\3y\3y\3y\3y\3y\3y\5y\u065d\ny\3z\3z\3z\3z\5z\u0663\nz\3z\3z\3z\3"+
		"z\3z\3z\5z\u066b\nz\3z\3z\5z\u066f\nz\3{\3{\5{\u0673\n{\3{\3{\3{\5{\u0678"+
		"\n{\3{\3{\3{\5{\u067d\n{\3{\3{\3{\3{\3{\7{\u0684\n{\f{\16{\u0687\13{\3"+
		"|\3|\5|\u068b\n|\3}\3}\5}\u068f\n}\3~\3~\3~\3~\3\177\3\177\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0081\3\u0081\5\u0081\u069d\n\u0081\3\u0081\3\u0081"+
		"\7\u0081\u06a1\n\u0081\f\u0081\16\u0081\u06a4\13\u0081\3\u0082\3\u0082"+
		"\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082"+
		"\3\u0082\3\u0082\6\u0082\u06b3\n\u0082\r\u0082\16\u0082\u06b4\5\u0082"+
		"\u06b7\n\u0082\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\7\u0083"+
		"\u06bf\n\u0083\f\u0083\16\u0083\u06c2\13\u0083\3\u0084\3\u0084\5\u0084"+
		"\u06c6\n\u0084\3\u0085\3\u0085\3\u0085\3\u0085\3\u0085\5\u0085\u06cd\n"+
		"\u0085\3\u0086\3\u0086\3\u0086\3\u0086\5\u0086\u06d3\n\u0086\3\u0087\3"+
		"\u0087\3\u0087\5\u0087\u06d8\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\5"+
		"\u0087\u06de\n\u0087\3\u0087\3\u0087\3\u0087\3\u0087\3\u0087\5\u0087\u06e5"+
		"\n\u0087\3\u0087\3\u0087\5\u0087\u06e9\n\u0087\7\u0087\u06eb\n\u0087\f"+
		"\u0087\16\u0087\u06ee\13\u0087\3\u0088\3\u0088\3\u0088\3\u0088\5\u0088"+
		"\u06f4\n\u0088\3\u0088\5\u0088\u06f7\n\u0088\3\u0088\5\u0088\u06fa\n\u0088"+
		"\3\u0088\5\u0088\u06fd\n\u0088\3\u0089\3\u0089\3\u0089\5\u0089\u0702\n"+
		"\u0089\3\u008a\3\u008a\5\u008a\u0706\n\u008a\3\u008a\5\u008a\u0709\n\u008a"+
		"\3\u008a\3\u008a\5\u008a\u070d\n\u008a\3\u008a\3\u008a\5\u008a\u0711\n"+
		"\u008a\3\u008a\3\u008a\3\u008a\5\u008a\u0716\n\u008a\3\u008a\5\u008a\u0719"+
		"\n\u008a\5\u008a\u071b\n\u008a\3\u008b\3\u008b\5\u008b\u071f\n\u008b\3"+
		"\u008c\3\u008c\3\u008d\3\u008d\3\u008e\5\u008e\u0726\n\u008e\3\u008e\3"+
		"\u008e\3\u008f\3\u008f\5\u008f\u072c\n\u008f\3\u0090\3\u0090\5\u0090\u0730"+
		"\n\u0090\3\u0090\3\u0090\3\u0090\3\u0090\5\u0090\u0736\n\u0090\3\u0091"+
		"\3\u0091\3\u0091\5\u0091\u073b\n\u0091\5\u0091\u073d\n\u0091\3\u0092\3"+
		"\u0092\3\u0092\3\u0092\5\u0092\u0743\n\u0092\3\u0092\3\u0092\5\u0092\u0747"+
		"\n\u0092\3\u0092\3\u0092\3\u0092\3\u0092\5\u0092\u074d\n\u0092\3\u0092"+
		"\3\u0092\3\u0092\3\u0092\3\u0092\5\u0092\u0754\n\u0092\3\u0092\3\u0092"+
		"\5\u0092\u0758\n\u0092\7\u0092\u075a\n\u0092\f\u0092\16\u0092\u075d\13"+
		"\u0092\3\u0093\3\u0093\3\u0093\3\u0093\5\u0093\u0763\n\u0093\3\u0094\3"+
		"\u0094\3\u0094\3\u0094\3\u0094\3\u0094\3\u0094\3\u0094\5\u0094\u076d\n"+
		"\u0094\3\u0094\3\u0094\5\u0094\u0771\n\u0094\7\u0094\u0773\n\u0094\f\u0094"+
		"\16\u0094\u0776\13\u0094\3\u0095\5\u0095\u0779\n\u0095\3\u0095\5\u0095"+
		"\u077c\n\u0095\3\u0095\3\u0095\3\u0095\3\u0095\5\u0095\u0782\n\u0095\3"+
		"\u0096\3\u0096\3\u0096\3\u0096\3\u0096\3\u0096\7\u0096\u078a\n\u0096\f"+
		"\u0096\16\u0096\u078d\13\u0096\3\u0097\5\u0097\u0790\n\u0097\3\u0097\5"+
		"\u0097\u0793\n\u0097\3\u0097\3\u0097\3\u0097\3\u0097\5\u0097\u0799\n\u0097"+
		"\3\u0097\5\u0097\u079c\n\u0097\3\u0097\3\u0097\3\u0097\3\u0097\3\u0097"+
		"\3\u0097\5\u0097\u07a4\n\u0097\3\u0097\5\u0097\u07a7\n\u0097\3\u0097\3"+
		"\u0097\5\u0097\u07ab\n\u0097\3\u0097\5\u0097\u07ae\n\u0097\3\u0097\5\u0097"+
		"\u07b1\n\u0097\3\u0097\3\u0097\5\u0097\u07b5\n\u0097\3\u0097\3\u0097\3"+
		"\u0097\5\u0097\u07ba\n\u0097\3\u0098\5\u0098\u07bd\n\u0098\3\u0098\5\u0098"+
		"\u07c0\n\u0098\3\u0098\3\u0098\5\u0098\u07c4\n\u0098\3\u0098\3\u0098\3"+
		"\u0099\5\u0099\u07c9\n\u0099\3\u0099\3\u0099\3\u0099\3\u0099\3\u0099\3"+
		"\u0099\3\u0099\3\u0099\5\u0099\u07d3\n\u0099\3\u009a\3\u009a\3\u009a\3"+
		"\u009a\3\u009a\5\u009a\u07da\n\u009a\3\u009b\3\u009b\3\u009b\5\u009b\u07df"+
		"\n\u009b\3\u009c\3\u009c\5\u009c\u07e3\n\u009c\3\u009d\3\u009d\3\u009d"+
		"\5\u009d\u07e8\n\u009d\3\u009d\3\u009d\3\u009d\3\u009d\5\u009d\u07ee\n"+
		"\u009d\7\u009d\u07f0\n\u009d\f\u009d\16\u009d\u07f3\13\u009d\3\u009e\3"+
		"\u009e\3\u009e\5\u009e\u07f8\n\u009e\3\u009e\3\u009e\3\u009e\3\u009e\5"+
		"\u009e\u07fe\n\u009e\3\u009f\3\u009f\5\u009f\u0802\n\u009f\3\u00a0\5\u00a0"+
		"\u0805\n\u00a0\3\u00a0\3\u00a0\3\u00a0\5\u00a0\u080a\n\u00a0\3\u00a0\5"+
		"\u00a0\u080d\n\u00a0\3\u00a0\3\u00a0\3\u00a1\3\u00a1\5\u00a1\u0813\n\u00a1"+
		"\3\u00a1\5\u00a1\u0816\n\u00a1\3\u00a1\3\u00a1\5\u00a1\u081a\n\u00a1\3"+
		"\u00a1\5\u00a1\u081d\n\u00a1\3\u00a1\3\u00a1\5\u00a1\u0821\n\u00a1\3\u00a1"+
		"\5\u00a1\u0824\n\u00a1\3\u00a1\5\u00a1\u0827\n\u00a1\5\u00a1\u0829\n\u00a1"+
		"\3\u00a2\5\u00a2\u082c\n\u00a2\3\u00a2\3\u00a2\3\u00a3\3\u00a3\3\u00a4"+
		"\3\u00a4\3\u00a5\3\u00a5\5\u00a5\u0836\n\u00a5\3\u00a5\3\u00a5\3\u00a5"+
		"\5\u00a5\u083b\n\u00a5\5\u00a5\u083d\n\u00a5\3\u00a6\5\u00a6\u0840\n\u00a6"+
		"\3\u00a6\5\u00a6\u0843\n\u00a6\3\u00a6\5\u00a6\u0846\n\u00a6\3\u00a6\5"+
		"\u00a6\u0849\n\u00a6\3\u00a6\5\u00a6\u084c\n\u00a6\3\u00a6\3\u00a6\3\u00a6"+
		"\3\u00a6\3\u00a6\3\u00a6\3\u00a6\5\u00a6\u0855\n\u00a6\3\u00a7\3\u00a7"+
		"\3\u00a7\3\u00a7\3\u00a7\3\u00a7\7\u00a7\u085d\n\u00a7\f\u00a7\16\u00a7"+
		"\u0860\13\u00a7\3\u00a8\3\u00a8\5\u00a8\u0864\n\u00a8\3\u00a8\5\u00a8"+
		"\u0867\n\u00a8\3\u00a8\3\u00a8\5\u00a8\u086b\n\u00a8\3\u00a8\5\u00a8\u086e"+
		"\n\u00a8\3\u00a8\5\u00a8\u0871\n\u00a8\3\u00a8\3\u00a8\5\u00a8\u0875\n"+
		"\u00a8\3\u00a9\3\u00a9\3\u00a9\3\u00a9\3\u00a9\7\u00a9\u087c\n\u00a9\f"+
		"\u00a9\16\u00a9\u087f\13\u00a9\3\u00aa\3\u00aa\3\u00ab\3\u00ab\3\u00ab"+
		"\3\u00ac\3\u00ac\3\u00ac\3\u00ad\3\u00ad\3\u00ad\5\u00ad\u088c\n\u00ad"+
		"\3\u00ad\3\u00ad\3\u00ad\3\u00ad\5\u00ad\u0892\n\u00ad\7\u00ad\u0894\n"+
		"\u00ad\f\u00ad\16\u00ad\u0897\13\u00ad\3\u00ae\5\u00ae\u089a\n\u00ae\3"+
		"\u00ae\3\u00ae\5\u00ae\u089e\n\u00ae\3\u00ae\3\u00ae\5\u00ae\u08a2\n\u00ae"+
		"\3\u00ae\3\u00ae\5\u00ae\u08a6\n\u00ae\3\u00ae\3\u00ae\5\u00ae\u08aa\n"+
		"\u00ae\3\u00ae\3\u00ae\5\u00ae\u08ae\n\u00ae\3\u00af\5\u00af\u08b1\n\u00af"+
		"\3\u00af\3\u00af\5\u00af\u08b5\n\u00af\3\u00b0\3\u00b0\3\u00b1\3\u00b1"+
		"\3\u00b2\3\u00b2\3\u00b2\3\u00b3\3\u00b3\5\u00b3\u08c0\n\u00b3\3\u00b4"+
		"\3\u00b4\5\u00b4\u08c4\n\u00b4\3\u00b5\3\u00b5\3\u00b5\3\u00b6\3\u00b6"+
		"\5\u00b6\u08cb\n\u00b6\3\u00b6\3\u00b6\5\u00b6\u08cf\n\u00b6\3\u00b6\3"+
		"\u00b6\3\u00b6\5\u00b6\u08d4\n\u00b6\3\u00b7\3\u00b7\3\u00b7\5\u00b7\u08d9"+
		"\n\u00b7\3\u00b7\3\u00b7\3\u00b7\3\u00b7\3\u00b7\5\u00b7\u08e0\n\u00b7"+
		"\3\u00b8\3\u00b8\5\u00b8\u08e4\n\u00b8\3\u00b9\3\u00b9\3\u00b9\3\u00ba"+
		"\3\u00ba\3\u00ba\3\u00ba\3\u00ba\5\u00ba\u08ee\n\u00ba\3\u00bb\3\u00bb"+
		"\3\u00bb\3\u00bb\3\u00bb\3\u00bb\3\u00bc\3\u00bc\3\u00bc\3\u00bc\3\u00bc"+
		"\3\u00bc\7\u00bc\u08fc\n\u00bc\f\u00bc\16\u00bc\u08ff\13\u00bc\3\u00bd"+
		"\3\u00bd\5\u00bd\u0903\n\u00bd\3\u00be\3\u00be\5\u00be\u0907\n\u00be\3"+
		"\u00be\5\u00be\u090a\n\u00be\3\u00be\3\u00be\5\u00be\u090e\n\u00be\3\u00be"+
		"\3\u00be\3\u00be\3\u00be\5\u00be\u0914\n\u00be\3\u00be\5\u00be\u0917\n"+
		"\u00be\3\u00be\3\u00be\5\u00be\u091b\n\u00be\3\u00be\3\u00be\3\u00be\3"+
		"\u00be\3\u00be\3\u00be\3\u00be\3\u00be\5\u00be\u0925\n\u00be\3\u00be\5"+
		"\u00be\u0928\n\u00be\3\u00be\3\u00be\3\u00be\3\u00be\3\u00be\3\u00be\5"+
		"\u00be\u0930\n\u00be\3\u00be\3\u00be\3\u00be\5\u00be\u0935\n\u00be\3\u00bf"+
		"\3\u00bf\3\u00bf\5\u00bf\u093a\n\u00bf\3\u00bf\3\u00bf\3\u00c0\3\u00c0"+
		"\3\u00c0\3\u00c0\5\u00c0\u0942\n\u00c0\3\u00c0\3\u00c0\3\u00c0\3\u00c0"+
		"\3\u00c0\5\u00c0\u0949\n\u00c0\3\u00c0\3\u00c0\5\u00c0\u094d\n\u00c0\3"+
		"\u00c1\3\u00c1\3\u00c2\3\u00c2\3\u00c2\5\u00c2\u0954\n\u00c2\3\u00c2\3"+
		"\u00c2\3\u00c2\3\u00c2\5\u00c2\u095a\n\u00c2\7\u00c2\u095c\n\u00c2\f\u00c2"+
		"\16\u00c2\u095f\13\u00c2\3\u00c3\3\u00c3\3\u00c3\5\u00c3\u0964\n\u00c3"+
		"\3\u00c4\3\u00c4\3\u00c4\3\u00c4\3\u00c4\3\u00c4\3\u00c4\5\u00c4\u096d"+
		"\n\u00c4\3\u00c4\3\u00c4\5\u00c4\u0971\n\u00c4\3\u00c5\5\u00c5\u0974\n"+
		"\u00c5\3\u00c5\3\u00c5\3\u00c5\3\u00c6\3\u00c6\3\u00c6\3\u00c6\3\u00c6"+
		"\3\u00c7\3\u00c7\3\u00c7\3\u00c7\3\u00c8\3\u00c8\5\u00c8\u0984\n\u00c8"+
		"\3\u00c8\3\u00c8\3\u00c8\3\u00c9\3\u00c9\5\u00c9\u098b\n\u00c9\3\u00ca"+
		"\3\u00ca\3\u00ca\3\u00ca\3\u00ca\3\u00ca\3\u00cb\5\u00cb\u0994\n\u00cb"+
		"\3\u00cb\3\u00cb\3\u00cb\3\u00cb\5\u00cb\u099a\n\u00cb\3\u00cb\3\u00cb"+
		"\5\u00cb\u099e\n\u00cb\3\u00cb\5\u00cb\u09a1\n\u00cb\3\u00cc\3\u00cc\5"+
		"\u00cc\u09a5\n\u00cc\3\u00cd\3\u00cd\5\u00cd\u09a9\n\u00cd\3\u00ce\3\u00ce"+
		"\3\u00ce\5\u00ce\u09ae\n\u00ce\3\u00ce\3\u00ce\3\u00cf\3\u00cf\3\u00cf"+
		"\5\u00cf\u09b5\n\u00cf\3\u00cf\3\u00cf\3\u00cf\3\u00cf\5\u00cf\u09bb\n"+
		"\u00cf\7\u00cf\u09bd\n\u00cf\f\u00cf\16\u00cf\u09c0\13\u00cf\3\u00d0\3"+
		"\u00d0\3\u00d0\3\u00d0\3\u00d0\3\u00d0\5\u00d0\u09c8\n\u00d0\3\u00d1\3"+
		"\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1"+
		"\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1"+
		"\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1"+
		"\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1"+
		"\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1"+
		"\3\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\5\u00d1\u09fd\n\u00d1\3\u00d2"+
		"\3\u00d2\3\u00d2\3\u00d2\3\u00d2\3\u00d2\3\u00d2\5\u00d2\u0a06\n\u00d2"+
		"\3\u00d3\3\u00d3\3\u00d4\3\u00d4\3\u00d5\3\u00d5\3\u00d5\2%\20$.8NXZ\\"+
		"^bdfhjlnv\u0082\u0094\u00ca\u00ee\u00f4\u0100\u0104\u010c\u0122\u0126"+
		"\u012a\u0138\u014c\u0150\u0158\u0176\u0182\u019c\u00d6\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bd"+
		"fhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092"+
		"\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8\u00aa"+
		"\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba\u00bc\u00be\u00c0\u00c2"+
		"\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2\u00d4\u00d6\u00d8\u00da"+
		"\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\u00ea\u00ec\u00ee\u00f0\u00f2"+
		"\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe\u0100\u0102\u0104\u0106\u0108\u010a"+
		"\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122"+
		"\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0138\u013a"+
		"\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u014a\u014c\u014e\u0150\u0152"+
		"\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a"+
		"\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u017a\u017c\u017e\u0180\u0182"+
		"\u0184\u0186\u0188\u018a\u018c\u018e\u0190\u0192\u0194\u0196\u0198\u019a"+
		"\u019c\u019e\u01a0\u01a2\u01a4\u01a6\u01a8\2\20\4\2iimm\5\2\t\nceik\3"+
		"\2xy\5\2mmpwz{\7\2,,\67\67AAGGNN\5\2**\64\64XX\3\2]b\4\2\36\36ZZ\4\2\13"+
		"\13ii\5\2\35\35JJUU\4\2..==\3\2>@\4\2--PP\3\2\u0098\u009b\2\u0b2e\2\u01aa"+
		"\3\2\2\2\4\u01ac\3\2\2\2\6\u01af\3\2\2\2\b\u01b2\3\2\2\2\n\u01b5\3\2\2"+
		"\2\f\u01b8\3\2\2\2\16\u01bb\3\2\2\2\20\u01c1\3\2\2\2\22\u01ce\3\2\2\2"+
		"\24\u01d4\3\2\2\2\26\u01d6\3\2\2\2\30\u01d8\3\2\2\2\32\u01dd\3\2\2\2\34"+
		"\u01e9\3\2\2\2\36\u01ed\3\2\2\2 \u01f8\3\2\2\2\"\u01fa\3\2\2\2$\u020b"+
		"\3\2\2\2&\u021c\3\2\2\2(\u0222\3\2\2\2*\u022e\3\2\2\2,\u0230\3\2\2\2."+
		"\u0232\3\2\2\2\60\u0244\3\2\2\2\62\u024a\3\2\2\2\64\u0251\3\2\2\2\66\u0253"+
		"\3\2\2\28\u02a2\3\2\2\2:\u02cf\3\2\2\2<\u02d1\3\2\2\2>\u02d3\3\2\2\2@"+
		"\u02eb\3\2\2\2B\u0309\3\2\2\2D\u030b\3\2\2\2F\u0325\3\2\2\2H\u0327\3\2"+
		"\2\2J\u032b\3\2\2\2L\u0334\3\2\2\2N\u0336\3\2\2\2P\u034f\3\2\2\2R\u035d"+
		"\3\2\2\2T\u035f\3\2\2\2V\u036a\3\2\2\2X\u036c\3\2\2\2Z\u037a\3\2\2\2\\"+
		"\u038b\3\2\2\2^\u0399\3\2\2\2`\u03a5\3\2\2\2b\u03a7\3\2\2\2d\u03bb\3\2"+
		"\2\2f\u03c9\3\2\2\2h\u03d4\3\2\2\2j\u03df\3\2\2\2l\u03ea\3\2\2\2n\u03f8"+
		"\3\2\2\2p\u040d\3\2\2\2r\u0415\3\2\2\2t\u0417\3\2\2\2v\u0419\3\2\2\2x"+
		"\u0424\3\2\2\2z\u0440\3\2\2\2|\u0456\3\2\2\2~\u0459\3\2\2\2\u0080\u045d"+
		"\3\2\2\2\u0082\u0463\3\2\2\2\u0084\u0481\3\2\2\2\u0086\u0493\3\2\2\2\u0088"+
		"\u04b8\3\2\2\2\u008a\u04bc\3\2\2\2\u008c\u04bf\3\2\2\2\u008e\u04c6\3\2"+
		"\2\2\u0090\u04d8\3\2\2\2\u0092\u04da\3\2\2\2\u0094\u04dc\3\2\2\2\u0096"+
		"\u04ef\3\2\2\2\u0098\u04f9\3\2\2\2\u009a\u04fb\3\2\2\2\u009c\u0512\3\2"+
		"\2\2\u009e\u0514\3\2\2\2\u00a0\u051c\3\2\2\2\u00a2\u051e\3\2\2\2\u00a4"+
		"\u0527\3\2\2\2\u00a6\u0530\3\2\2\2\u00a8\u0532\3\2\2\2\u00aa\u0534\3\2"+
		"\2\2\u00ac\u0536\3\2\2\2\u00ae\u053b\3\2\2\2\u00b0\u0541\3\2\2\2\u00b2"+
		"\u054a\3\2\2\2\u00b4\u0553\3\2\2\2\u00b6\u056c\3\2\2\2\u00b8\u0572\3\2"+
		"\2\2\u00ba\u057d\3\2\2\2\u00bc\u0597\3\2\2\2\u00be\u0599\3\2\2\2\u00c0"+
		"\u05a8\3\2\2\2\u00c2\u05bd\3\2\2\2\u00c4\u05bf\3\2\2\2\u00c6\u05ce\3\2"+
		"\2\2\u00c8\u05d0\3\2\2\2\u00ca\u05d3\3\2\2\2\u00cc\u05e3\3\2\2\2\u00ce"+
		"\u05e5\3\2\2\2\u00d0\u05e9\3\2\2\2\u00d2\u05eb\3\2\2\2\u00d4\u05ef\3\2"+
		"\2\2\u00d6\u05f3\3\2\2\2\u00d8\u05f6\3\2\2\2\u00da\u05ff\3\2\2\2\u00dc"+
		"\u0608\3\2\2\2\u00de\u0610\3\2\2\2\u00e0\u0612\3\2\2\2\u00e2\u0614\3\2"+
		"\2\2\u00e4\u061b\3\2\2\2\u00e6\u062c\3\2\2\2\u00e8\u062f\3\2\2\2\u00ea"+
		"\u0639\3\2\2\2\u00ec\u0649\3\2\2\2\u00ee\u064b\3\2\2\2\u00f0\u065c\3\2"+
		"\2\2\u00f2\u066e\3\2\2\2\u00f4\u0677\3\2\2\2\u00f6\u0688\3\2\2\2\u00f8"+
		"\u068e\3\2\2\2\u00fa\u0690\3\2\2\2\u00fc\u0694\3\2\2\2\u00fe\u0696\3\2"+
		"\2\2\u0100\u069a\3\2\2\2\u0102\u06b6\3\2\2\2\u0104\u06b8\3\2\2\2\u0106"+
		"\u06c3\3\2\2\2\u0108\u06cc\3\2\2\2\u010a\u06d2\3\2\2\2\u010c\u06dd\3\2"+
		"\2\2\u010e\u06ef\3\2\2\2\u0110\u06fe\3\2\2\2\u0112\u071a\3\2\2\2\u0114"+
		"\u071c\3\2\2\2\u0116\u0720\3\2\2\2\u0118\u0722\3\2\2\2\u011a\u0725\3\2"+
		"\2\2\u011c\u0729\3\2\2\2\u011e\u0735\3\2\2\2\u0120\u073c\3\2\2\2\u0122"+
		"\u074c\3\2\2\2\u0124\u0762\3\2\2\2\u0126\u0764\3\2\2\2\u0128\u0781\3\2"+
		"\2\2\u012a\u0783\3\2\2\2\u012c\u07b9\3\2\2\2\u012e\u07bc\3\2\2\2\u0130"+
		"\u07d2\3\2\2\2\u0132\u07d9\3\2\2\2\u0134\u07de\3\2\2\2\u0136\u07e2\3\2"+
		"\2\2\u0138\u07e4\3\2\2\2\u013a\u07fd\3\2\2\2\u013c\u0801\3\2\2\2\u013e"+
		"\u0804\3\2\2\2\u0140\u0828\3\2\2\2\u0142\u082b\3\2\2\2\u0144\u082f\3\2"+
		"\2\2\u0146\u0831\3\2\2\2\u0148\u083c\3\2\2\2\u014a\u0854\3\2\2\2\u014c"+
		"\u0856\3\2\2\2\u014e\u0874\3\2\2\2\u0150\u0876\3\2\2\2\u0152\u0880\3\2"+
		"\2\2\u0154\u0882\3\2\2\2\u0156\u0885\3\2\2\2\u0158\u0888\3\2\2\2\u015a"+
		"\u08ad\3\2\2\2\u015c\u08b4\3\2\2\2\u015e\u08b6\3\2\2\2\u0160\u08b8\3\2"+
		"\2\2\u0162\u08ba\3\2\2\2\u0164\u08bd\3\2\2\2\u0166\u08c1\3\2\2\2\u0168"+
		"\u08c5\3\2\2\2\u016a\u08d3\3\2\2\2\u016c\u08df\3\2\2\2\u016e\u08e3\3\2"+
		"\2\2\u0170\u08e5\3\2\2\2\u0172\u08ed\3\2\2\2\u0174\u08ef\3\2\2\2\u0176"+
		"\u08f5\3\2\2\2\u0178\u0902\3\2\2\2\u017a\u0934\3\2\2\2\u017c\u0936\3\2"+
		"\2\2\u017e\u094c\3\2\2\2\u0180\u094e\3\2\2\2\u0182\u0950\3\2\2\2\u0184"+
		"\u0963\3\2\2\2\u0186\u0970\3\2\2\2\u0188\u0973\3\2\2\2\u018a\u0978\3\2"+
		"\2\2\u018c\u097d\3\2\2\2\u018e\u0981\3\2\2\2\u0190\u0988\3\2\2\2\u0192"+
		"\u098c\3\2\2\2\u0194\u09a0\3\2\2\2\u0196\u09a2\3\2\2\2\u0198\u09a8\3\2"+
		"\2\2\u019a\u09aa\3\2\2\2\u019c\u09b1\3\2\2\2\u019e\u09c7\3\2\2\2\u01a0"+
		"\u09fc\3\2\2\2\u01a2\u0a05\3\2\2\2\u01a4\u0a07\3\2\2\2\u01a6\u0a09\3\2"+
		"\2\2\u01a8\u0a0b\3\2\2\2\u01aa\u01ab\7\3\2\2\u01ab\3\3\2\2\2\u01ac\u01ad"+
		"\7\4\2\2\u01ad\u01ae\5\16\b\2\u01ae\5\3\2\2\2\u01af\u01b0\7\5\2\2\u01b0"+
		"\u01b1\5\16\b\2\u01b1\7\3\2\2\2\u01b2\u01b3\7\6\2\2\u01b3\u01b4\5\16\b"+
		"\2\u01b4\t\3\2\2\2\u01b5\u01b6\7\7\2\2\u01b6\u01b7\5\16\b\2\u01b7\13\3"+
		"\2\2\2\u01b8\u01b9\7\b\2\2\u01b9\u01ba\5\16\b\2\u01ba\r\3\2\2\2\u01bb"+
		"\u01bd\7]\2\2\u01bc\u01be\5\20\t\2\u01bd\u01bc\3\2\2\2\u01bd\u01be\3\2"+
		"\2\2\u01be\u01bf\3\2\2\2\u01bf\u01c0\7^\2\2\u01c0\17\3\2\2\2\u01c1\u01c2"+
		"\b\t\1\2\u01c2\u01c3\5\22\n\2\u01c3\u01c9\3\2\2\2\u01c4\u01c5\f\3\2\2"+
		"\u01c5\u01c6\7\u0084\2\2\u01c6\u01c8\5\22\n\2\u01c7\u01c4\3\2\2\2\u01c8"+
		"\u01cb\3\2\2\2\u01c9\u01c7\3\2\2\2\u01c9\u01ca\3\2\2\2\u01ca\21\3\2\2"+
		"\2\u01cb\u01c9\3\2\2\2\u01cc\u01cf\5\30\r\2\u01cd\u01cf\5\26\f\2\u01ce"+
		"\u01cc\3\2\2\2\u01ce\u01cd\3\2\2\2\u01cf\23\3\2\2\2\u01d0\u01d5\7\u0097"+
		"\2\2\u01d1\u01d5\5\u01a4\u00d3\2\u01d2\u01d5\7\u008e\2\2\u01d3\u01d5\5"+
		"\16\b\2\u01d4\u01d0\3\2\2\2\u01d4\u01d1\3\2\2\2\u01d4\u01d2\3\2\2\2\u01d4"+
		"\u01d3\3\2\2\2\u01d5\25\3\2\2\2\u01d6\u01d7\7\u008e\2\2\u01d7\27\3\2\2"+
		"\2\u01d8\u01d9\5\26\f\2\u01d9\u01da\7m\2\2\u01da\u01db\5\24\13\2\u01db"+
		"\31\3\2\2\2\u01dc\u01de\5\u0094K\2\u01dd\u01dc\3\2\2\2\u01dd\u01de\3\2"+
		"\2\2\u01de\u01df\3\2\2\2\u01df\u01e0\7\2\2\3\u01e0\33\3\2\2\2\u01e1\u01ea"+
		"\5\u01a2\u00d2\2\u01e2\u01ea\7M\2\2\u01e3\u01e4\7]\2\2\u01e4\u01e5\5v"+
		"<\2\u01e5\u01e6\7^\2\2\u01e6\u01ea\3\2\2\2\u01e7\u01ea\5\36\20\2\u01e8"+
		"\u01ea\5&\24\2\u01e9\u01e1\3\2\2\2\u01e9\u01e2\3\2\2\2\u01e9\u01e3\3\2"+
		"\2\2\u01e9\u01e7\3\2\2\2\u01e9\u01e8\3\2\2\2\u01ea\35\3\2\2\2\u01eb\u01ee"+
		"\5 \21\2\u01ec\u01ee\5\"\22\2\u01ed\u01eb\3\2\2\2\u01ed\u01ec\3\2\2\2"+
		"\u01ee\37\3\2\2\2\u01ef\u01f9\7\u008e\2\2\u01f0\u01f9\5\u0170\u00b9\2"+
		"\u01f1\u01f9\5\u0162\u00b2\2\u01f2\u01f9\5\u0172\u00ba\2\u01f3\u01f4\7"+
		"k\2\2\u01f4\u01f9\5\u013c\u009f\2\u01f5\u01f6\7k\2\2\u01f6\u01f9\5\u00ba"+
		"^\2\u01f7\u01f9\5\u017e\u00c0\2\u01f8\u01ef\3\2\2\2\u01f8\u01f0\3\2\2"+
		"\2\u01f8\u01f1\3\2\2\2\u01f8\u01f2\3\2\2\2\u01f8\u01f3\3\2\2\2\u01f8\u01f5"+
		"\3\2\2\2\u01f8\u01f7\3\2\2\2\u01f9!\3\2\2\2\u01fa\u01fc\5$\23\2\u01fb"+
		"\u01fd\7L\2\2\u01fc\u01fb\3\2\2\2\u01fc\u01fd\3\2\2\2\u01fd\u01fe\3\2"+
		"\2\2\u01fe\u01ff\5 \21\2\u01ff#\3\2\2\2\u0200\u0201\b\23\1\2\u0201\u020c"+
		"\7\u0089\2\2\u0202\u0203\5\u00b8]\2\u0203\u0204\7\u0089\2\2\u0204\u020c"+
		"\3\2\2\2\u0205\u0206\5\u00d0i\2\u0206\u0207\7\u0089\2\2\u0207\u020c\3"+
		"\2\2\2\u0208\u0209\5\u00ba^\2\u0209\u020a\7\u0089\2\2\u020a\u020c\3\2"+
		"\2\2\u020b\u0200\3\2\2\2\u020b\u0202\3\2\2\2\u020b\u0205\3\2\2\2\u020b"+
		"\u0208\3\2\2\2\u020c\u0219\3\2\2\2\u020d\u020e\f\4\2\2\u020e\u020f\7\u008e"+
		"\2\2\u020f\u0218\7\u0089\2\2\u0210\u0212\f\3\2\2\u0211\u0213\7L\2\2\u0212"+
		"\u0211\3\2\2\2\u0212\u0213\3\2\2\2\u0213\u0214\3\2\2\2\u0214\u0215\5\u017c"+
		"\u00bf\2\u0215\u0216\7\u0089\2\2\u0216\u0218\3\2\2\2\u0217\u020d\3\2\2"+
		"\2\u0217\u0210\3\2\2\2\u0218\u021b\3\2\2\2\u0219\u0217\3\2\2\2\u0219\u021a"+
		"\3\2\2\2\u021a%\3\2\2\2\u021b\u0219\3\2\2\2\u021c\u021e\5(\25\2\u021d"+
		"\u021f\5\66\34\2\u021e\u021d\3\2\2\2\u021e\u021f\3\2\2\2\u021f\u0220\3"+
		"\2\2\2\u0220\u0221\5\u0080A\2\u0221\'\3\2\2\2\u0222\u0224\7_\2\2\u0223"+
		"\u0225\5*\26\2\u0224\u0223\3\2\2\2\u0224\u0225\3\2\2\2\u0225\u0226\3\2"+
		"\2\2\u0226\u0227\7`\2\2\u0227)\3\2\2\2\u0228\u022f\5,\27\2\u0229\u022f"+
		"\5.\30\2\u022a\u022b\5,\27\2\u022b\u022c\7\u0084\2\2\u022c\u022d\5.\30"+
		"\2\u022d\u022f\3\2\2\2\u022e\u0228\3\2\2\2\u022e\u0229\3\2\2\2\u022e\u022a"+
		"\3\2\2\2\u022f+\3\2\2\2\u0230\u0231\t\2\2\2\u0231-\3\2\2\2\u0232\u0233"+
		"\b\30\1\2\u0233\u0235\5\60\31\2\u0234\u0236\7\u008d\2\2\u0235\u0234\3"+
		"\2\2\2\u0235\u0236\3\2\2\2\u0236\u023f\3\2\2\2\u0237\u0238\f\3\2\2\u0238"+
		"\u0239\7\u0084\2\2\u0239\u023b\5\60\31\2\u023a\u023c\7\u008d\2\2\u023b"+
		"\u023a\3\2\2\2\u023b\u023c\3\2\2\2\u023c\u023e\3\2\2\2\u023d\u0237\3\2"+
		"\2\2\u023e\u0241\3\2\2\2\u023f\u023d\3\2\2\2\u023f\u0240\3\2\2\2\u0240"+
		"/\3\2\2\2\u0241\u023f\3\2\2\2\u0242\u0245\5\62\32\2\u0243\u0245\5\64\33"+
		"\2\u0244\u0242\3\2\2\2\u0244\u0243\3\2\2\2\u0245\61\3\2\2\2\u0246\u024b"+
		"\7\u008e\2\2\u0247\u0248\7i\2\2\u0248\u024b\7\u008e\2\2\u0249\u024b\7"+
		"M\2\2\u024a\u0246\3\2\2\2\u024a\u0247\3\2\2\2\u024a\u0249\3\2\2\2\u024b"+
		"\63\3\2\2\2\u024c\u024d\7\u008e\2\2\u024d\u0252\5\u0132\u009a\2\u024e"+
		"\u024f\7i\2\2\u024f\u0250\7\u008e\2\2\u0250\u0252\5\u0132\u009a\2\u0251"+
		"\u024c\3\2\2\2\u0251\u024e\3\2\2\2\u0252\65\3\2\2\2\u0253\u0254\7]\2\2"+
		"\u0254\u0255\5\u0128\u0095\2\u0255\u0257\7^\2\2\u0256\u0258\7\67\2\2\u0257"+
		"\u0256\3\2\2\2\u0257\u0258\3\2\2\2\u0258\u025a\3\2\2\2\u0259\u025b\5\u0198"+
		"\u00cd\2\u025a\u0259\3\2\2\2\u025a\u025b\3\2\2\2\u025b\u025d\3\2\2\2\u025c"+
		"\u025e\5\u00eex\2\u025d\u025c\3\2\2\2\u025d\u025e\3\2\2\2\u025e\u0260"+
		"\3\2\2\2\u025f\u0261\5\u0110\u0089\2\u0260\u025f\3\2\2\2\u0260\u0261\3"+
		"\2\2\2\u0261\67\3\2\2\2\u0262\u0263\b\35\1\2\u0263\u02a3\5\34\17\2\u0264"+
		"\u0265\5\u00b6\\\2\u0265\u0267\7]\2\2\u0266\u0268\5> \2\u0267\u0266\3"+
		"\2\2\2\u0267\u0268\3\2\2\2\u0268\u0269\3\2\2\2\u0269\u026a\7^\2\2\u026a"+
		"\u02a3\3\2\2\2\u026b\u026c\5\u0186\u00c4\2\u026c\u026e\7]\2\2\u026d\u026f"+
		"\5> \2\u026e\u026d\3\2\2\2\u026e\u026f\3\2\2\2\u026f\u0270\3\2\2\2\u0270"+
		"\u0271\7^\2\2\u0271\u02a3\3\2\2\2\u0272\u0273\5\u00b6\\\2\u0273\u0274"+
		"\5\u013a\u009e\2\u0274\u02a3\3\2\2\2\u0275\u0276\5\u0186\u00c4\2\u0276"+
		"\u0277\5\u013a\u009e\2\u0277\u02a3\3\2\2\2\u0278\u0279\7\'\2\2\u0279\u027a"+
		"\7n\2\2\u027a\u027b\5\u011c\u008f\2\u027b\u027c\7o\2\2\u027c\u027d\7]"+
		"\2\2\u027d\u027e\5v<\2\u027e\u027f\7^\2\2\u027f\u02a3\3\2\2\2\u0280\u0281"+
		"\7I\2\2\u0281\u0282\7n\2\2\u0282\u0283\5\u011c\u008f\2\u0283\u0284\7o"+
		"\2\2\u0284\u0285\7]\2\2\u0285\u0286\5v<\2\u0286\u0287\7^\2\2\u0287\u02a3"+
		"\3\2\2\2\u0288\u0289\7B\2\2\u0289\u028a\7n\2\2\u028a\u028b\5\u011c\u008f"+
		"\2\u028b\u028c\7o\2\2\u028c\u028d\7]\2\2\u028d\u028e\5v<\2\u028e\u028f"+
		"\7^\2\2\u028f\u02a3\3\2\2\2\u0290\u0291\7 \2\2\u0291\u0292\7n\2\2\u0292"+
		"\u0293\5\u011c\u008f\2\u0293\u0294\7o\2\2\u0294\u0295\7]\2\2\u0295\u0296"+
		"\5v<\2\u0296\u0297\7^\2\2\u0297\u02a3\3\2\2\2\u0298\u0299\5<\37\2\u0299"+
		"\u029a\7]\2\2\u029a\u029b\5v<\2\u029b\u029c\7^\2\2\u029c\u02a3\3\2\2\2"+
		"\u029d\u029e\5<\37\2\u029e\u029f\7]\2\2\u029f\u02a0\5\u011c\u008f\2\u02a0"+
		"\u02a1\7^\2\2\u02a1\u02a3\3\2\2\2\u02a2\u0262\3\2\2\2\u02a2\u0264\3\2"+
		"\2\2\u02a2\u026b\3\2\2\2\u02a2\u0272\3\2\2\2\u02a2\u0275\3\2\2\2\u02a2"+
		"\u0278\3\2\2\2\u02a2\u0280\3\2\2\2\u02a2\u0288\3\2\2\2\u02a2\u0290\3\2"+
		"\2\2\u02a2\u0298\3\2\2\2\u02a2\u029d\3\2\2\2\u02a3\u02cc\3\2\2\2\u02a4"+
		"\u02a5\f\25\2\2\u02a5\u02a6\7_\2\2\u02a6\u02a7\5v<\2\u02a7\u02a8\7`\2"+
		"\2\u02a8\u02cb\3\2\2\2\u02a9\u02aa\f\24\2\2\u02aa\u02ab\7_\2\2\u02ab\u02ac"+
		"\5\u013a\u009e\2\u02ac\u02ad\7`\2\2\u02ad\u02cb\3\2\2\2\u02ae\u02af\f"+
		"\23\2\2\u02af\u02b1\7]\2\2\u02b0\u02b2\5> \2\u02b1\u02b0\3\2\2\2\u02b1"+
		"\u02b2\3\2\2\2\u02b2\u02b3\3\2\2\2\u02b3\u02cb\7^\2\2\u02b4\u02b5\f\16"+
		"\2\2\u02b5\u02b7\7\u008b\2\2\u02b6\u02b8\7L\2\2\u02b7\u02b6\3\2\2\2\u02b7"+
		"\u02b8\3\2\2\2\u02b8\u02b9\3\2\2\2\u02b9\u02cb\5\36\20\2\u02ba\u02bb\f"+
		"\r\2\2\u02bb\u02bd\7\u0086\2\2\u02bc\u02be\7L\2\2\u02bd\u02bc\3\2\2\2"+
		"\u02bd\u02be\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf\u02cb\5\36\20\2\u02c0\u02c1"+
		"\f\f\2\2\u02c1\u02c2\7\u008b\2\2\u02c2\u02cb\5@!\2\u02c3\u02c4\f\13\2"+
		"\2\u02c4\u02c5\7\u0086\2\2\u02c5\u02cb\5@!\2\u02c6\u02c7\f\n\2\2\u02c7"+
		"\u02cb\7\u0082\2\2\u02c8\u02c9\f\t\2\2\u02c9\u02cb\7\u0083\2\2\u02ca\u02a4"+
		"\3\2\2\2\u02ca\u02a9\3\2\2\2\u02ca\u02ae\3\2\2\2\u02ca\u02b4\3\2\2\2\u02ca"+
		"\u02ba\3\2\2\2\u02ca\u02c0\3\2\2\2\u02ca\u02c3\3\2\2\2\u02ca\u02c6\3\2"+
		"\2\2\u02ca\u02c8\3\2\2\2\u02cb\u02ce\3\2\2\2\u02cc\u02ca\3\2\2\2\u02cc"+
		"\u02cd\3\2\2\2\u02cd9\3\2\2\2\u02ce\u02cc\3\2\2\2\u02cf\u02d0\7S\2\2\u02d0"+
		";\3\2\2\2\u02d1\u02d2\7S\2\2\u02d2=\3\2\2\2\u02d3\u02d4\5\u0138\u009d"+
		"\2\u02d4?\3\2\2\2\u02d5\u02d7\5$\23\2\u02d6\u02d5\3\2\2\2\u02d6\u02d7"+
		"\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02d9\5\u00b8]\2\u02d9\u02da\7\u0089"+
		"\2\2\u02da\u02db\7k\2\2\u02db\u02dc\5\u00b8]\2\u02dc\u02ec\3\2\2\2\u02dd"+
		"\u02de\5$\23\2\u02de\u02df\7L\2\2\u02df\u02e0\5\u017c\u00bf\2\u02e0\u02e1"+
		"\7\u0089\2\2\u02e1\u02e2\7k\2\2\u02e2\u02e3\5\u00b8]\2\u02e3\u02ec\3\2"+
		"\2\2\u02e4\u02e6\5$\23\2\u02e5\u02e4\3\2\2\2\u02e5\u02e6\3\2\2\2\u02e6"+
		"\u02e7\3\2\2\2\u02e7\u02e8\7k\2\2\u02e8\u02ec\5\u00b8]\2\u02e9\u02ea\7"+
		"k\2\2\u02ea\u02ec\5\u00ba^\2\u02eb\u02d6\3\2\2\2\u02eb\u02dd\3\2\2\2\u02eb"+
		"\u02e5\3\2\2\2\u02eb\u02e9\3\2\2\2\u02ecA\3\2\2\2\u02ed\u030a\58\35\2"+
		"\u02ee\u02ef\7\u0082\2\2\u02ef\u030a\5V,\2\u02f0\u02f1\7\u0083\2\2\u02f1"+
		"\u030a\5V,\2\u02f2\u02f3\5D#\2\u02f3\u02f4\5V,\2\u02f4\u030a\3\2\2\2\u02f5"+
		"\u02f6\7F\2\2\u02f6\u030a\5B\"\2\u02f7\u02f8\7F\2\2\u02f8\u02f9\7]\2\2"+
		"\u02f9\u02fa\5\u011c\u008f\2\u02fa\u02fb\7^\2\2\u02fb\u030a\3\2\2\2\u02fc"+
		"\u02fd\7F\2\2\u02fd\u02fe\7\u008d\2\2\u02fe\u02ff\7]\2\2\u02ff\u0300\7"+
		"\u008e\2\2\u0300\u030a\7^\2\2\u0301\u0302\7\23\2\2\u0302\u0303\7]\2\2"+
		"\u0303\u0304\5\u011c\u008f\2\u0304\u0305\7^\2\2\u0305\u030a\3\2\2\2\u0306"+
		"\u030a\5T+\2\u0307\u030a\5F$\2\u0308\u030a\5R*\2\u0309\u02ed\3\2\2\2\u0309"+
		"\u02ee\3\2\2\2\u0309\u02f0\3\2\2\2\u0309\u02f2\3\2\2\2\u0309\u02f5\3\2"+
		"\2\2\u0309\u02f7\3\2\2\2\u0309\u02fc\3\2\2\2\u0309\u0301\3\2\2\2\u0309"+
		"\u0306\3\2\2\2\u0309\u0307\3\2\2\2\u0309\u0308\3\2\2\2\u030aC\3\2\2\2"+
		"\u030b\u030c\t\3\2\2\u030cE\3\2\2\2\u030d\u030f\7\u0089\2\2\u030e\u030d"+
		"\3\2\2\2\u030e\u030f\3\2\2\2\u030f\u0310\3\2\2\2\u0310\u0312\79\2\2\u0311"+
		"\u0313\5H%\2\u0312\u0311\3\2\2\2\u0312\u0313\3\2\2\2\u0313\u0314\3\2\2"+
		"\2\u0314\u0316\5J&\2\u0315\u0317\5P)\2\u0316\u0315\3\2\2\2\u0316\u0317"+
		"\3\2\2\2\u0317\u0326\3\2\2\2\u0318\u031a\7\u0089\2\2\u0319\u0318\3\2\2"+
		"\2\u0319\u031a\3\2\2\2\u031a\u031b\3\2\2\2\u031b\u031d\79\2\2\u031c\u031e"+
		"\5H%\2\u031d\u031c\3\2\2\2\u031d\u031e\3\2\2\2\u031e\u031f\3\2\2\2\u031f"+
		"\u0320\7]\2\2\u0320\u0321\5\u011c\u008f\2\u0321\u0323\7^\2\2\u0322\u0324"+
		"\5P)\2\u0323\u0322\3\2\2\2\u0323\u0324\3\2\2\2\u0324\u0326\3\2\2\2\u0325"+
		"\u030e\3\2\2\2\u0325\u0319\3\2\2\2\u0326G\3\2\2\2\u0327\u0328\7]\2\2\u0328"+
		"\u0329\5> \2\u0329\u032a\7^\2\2\u032aI\3\2\2\2\u032b\u032d\5\u00b2Z\2"+
		"\u032c\u032e\5L\'\2\u032d\u032c\3\2\2\2\u032d\u032e\3\2\2\2\u032eK\3\2"+
		"\2\2\u032f\u0331\5\u0112\u008a\2\u0330\u0332\5L\'\2\u0331\u0330\3\2\2"+
		"\2\u0331\u0332\3\2\2\2\u0332\u0335\3\2\2\2\u0333\u0335\5N(\2\u0334\u032f"+
		"\3\2\2\2\u0334\u0333\3\2\2\2\u0335M\3\2\2\2\u0336\u0337\b(\1\2\u0337\u0338"+
		"\7_\2\2\u0338\u0339\5v<\2\u0339\u033b\7`\2\2\u033a\u033c\5\u00eex\2\u033b"+
		"\u033a\3\2\2\2\u033b\u033c\3\2\2\2\u033c\u0346\3\2\2\2\u033d\u033e\f\3"+
		"\2\2\u033e\u033f\7_\2\2\u033f\u0340\5x=\2\u0340\u0342\7`\2\2\u0341\u0343"+
		"\5\u00eex\2\u0342\u0341\3\2\2\2\u0342\u0343\3\2\2\2\u0343\u0345\3\2\2"+
		"\2\u0344\u033d\3\2\2\2\u0345\u0348\3\2\2\2\u0346\u0344\3\2\2\2\u0346\u0347"+
		"\3\2\2\2\u0347O\3\2\2\2\u0348\u0346\3\2\2\2\u0349\u034b\7]\2\2\u034a\u034c"+
		"\5> \2\u034b\u034a\3\2\2\2\u034b\u034c\3\2\2\2\u034c\u034d\3\2\2\2\u034d"+
		"\u0350\7^\2\2\u034e\u0350\5\u013a\u009e\2\u034f\u0349\3\2\2\2\u034f\u034e"+
		"\3\2\2\2\u0350Q\3\2\2\2\u0351\u0353\7\u0089\2\2\u0352\u0351\3\2\2\2\u0352"+
		"\u0353\3\2\2\2\u0353\u0354\3\2\2\2\u0354\u0355\7$\2\2\u0355\u035e\5V,"+
		"\2\u0356\u0358\7\u0089\2\2\u0357\u0356\3\2\2\2\u0357\u0358\3\2\2\2\u0358"+
		"\u0359\3\2\2\2\u0359\u035a\7$\2\2\u035a\u035b\7_\2\2\u035b\u035c\7`\2"+
		"\2\u035c\u035e\5V,\2\u035d\u0352\3\2\2\2\u035d\u0357\3\2\2\2\u035eS\3"+
		"\2\2\2\u035f\u0360\7:\2\2\u0360\u0361\7]\2\2\u0361\u0362\5v<\2\u0362\u0363"+
		"\7^\2\2\u0363U\3\2\2\2\u0364\u036b\5B\"\2\u0365\u0366\7]\2\2\u0366\u0367"+
		"\5\u011c\u008f\2\u0367\u0368\7^\2\2\u0368\u0369\5V,\2\u0369\u036b\3\2"+
		"\2\2\u036a\u0364\3\2\2\2\u036a\u0365\3\2\2\2\u036bW\3\2\2\2\u036c\u036d"+
		"\b-\1\2\u036d\u036e\5V,\2\u036e\u0377\3\2\2\2\u036f\u0370\f\4\2\2\u0370"+
		"\u0371\7\u008c\2\2\u0371\u0376\5V,\2\u0372\u0373\f\3\2\2\u0373\u0374\7"+
		"\u0085\2\2\u0374\u0376\5V,\2\u0375\u036f\3\2\2\2\u0375\u0372\3\2\2\2\u0376"+
		"\u0379\3\2\2\2\u0377\u0375\3\2\2\2\u0377\u0378\3\2\2\2\u0378Y\3\2\2\2"+
		"\u0379\u0377\3\2\2\2\u037a\u037b\b.\1\2\u037b\u037c\5X-\2\u037c\u0388"+
		"\3\2\2\2\u037d\u037e\f\5\2\2\u037e\u037f\7e\2\2\u037f\u0387\5X-\2\u0380"+
		"\u0381\f\4\2\2\u0381\u0382\7f\2\2\u0382\u0387\5X-\2\u0383\u0384\f\3\2"+
		"\2\u0384\u0385\7g\2\2\u0385\u0387\5X-\2\u0386\u037d\3\2\2\2\u0386\u0380"+
		"\3\2\2\2\u0386\u0383\3\2\2\2\u0387\u038a\3\2\2\2\u0388\u0386\3\2\2\2\u0388"+
		"\u0389\3\2\2\2\u0389[\3\2\2\2\u038a\u0388\3\2\2\2\u038b\u038c\b/\1\2\u038c"+
		"\u038d\5Z.\2\u038d\u0396\3\2\2\2\u038e\u038f\f\4\2\2\u038f\u0390\7c\2"+
		"\2\u0390\u0395\5Z.\2\u0391\u0392\f\3\2\2\u0392\u0393\7d\2\2\u0393\u0395"+
		"\5Z.\2\u0394\u038e\3\2\2\2\u0394\u0391\3\2\2\2\u0395\u0398\3\2\2\2\u0396"+
		"\u0394\3\2\2\2\u0396\u0397\3\2\2\2\u0397]\3\2\2\2\u0398\u0396\3\2\2\2"+
		"\u0399\u039a\b\60\1\2\u039a\u039b\5\\/\2\u039b\u03a2\3\2\2\2\u039c\u039d"+
		"\f\3\2\2\u039d\u039e\5`\61\2\u039e\u039f\5\\/\2\u039f\u03a1\3\2\2\2\u03a0"+
		"\u039c\3\2\2\2\u03a1\u03a4\3\2\2\2\u03a2\u03a0\3\2\2\2\u03a2\u03a3\3\2"+
		"\2\2\u03a3_\3\2\2\2\u03a4\u03a2\3\2\2\2\u03a5\u03a6\t\4\2\2\u03a6a\3\2"+
		"\2\2\u03a7\u03a8\b\62\1\2\u03a8\u03a9\5^\60\2\u03a9\u03b8\3\2\2\2\u03aa"+
		"\u03ab\f\6\2\2\u03ab\u03ac\7n\2\2\u03ac\u03b7\5^\60\2\u03ad\u03ae\f\5"+
		"\2\2\u03ae\u03af\7o\2\2\u03af\u03b7\5^\60\2\u03b0\u03b1\f\4\2\2\u03b1"+
		"\u03b2\7~\2\2\u03b2\u03b7\5^\60\2\u03b3\u03b4\f\3\2\2\u03b4\u03b5\7\177"+
		"\2\2\u03b5\u03b7\5^\60\2\u03b6\u03aa\3\2\2\2\u03b6\u03ad\3\2\2\2\u03b6"+
		"\u03b0\3\2\2\2\u03b6\u03b3\3\2\2\2\u03b7\u03ba\3\2\2\2\u03b8\u03b6\3\2"+
		"\2\2\u03b8\u03b9\3\2\2\2\u03b9c\3\2\2\2\u03ba\u03b8\3\2\2\2\u03bb\u03bc"+
		"\b\63\1\2\u03bc\u03bd\5b\62\2\u03bd\u03c6\3\2\2\2\u03be\u03bf\f\4\2\2"+
		"\u03bf\u03c0\7|\2\2\u03c0\u03c5\5b\62\2\u03c1\u03c2\f\3\2\2\u03c2\u03c3"+
		"\7}\2\2\u03c3\u03c5\5b\62\2\u03c4\u03be\3\2\2\2\u03c4\u03c1\3\2\2\2\u03c5"+
		"\u03c8\3\2\2\2\u03c6\u03c4\3\2\2\2\u03c6\u03c7\3\2\2\2\u03c7e\3\2\2\2"+
		"\u03c8\u03c6\3\2\2\2\u03c9\u03ca\b\64\1\2\u03ca\u03cb\5d\63\2\u03cb\u03d1"+
		"\3\2\2\2\u03cc\u03cd\f\3\2\2\u03cd\u03ce\7i\2\2\u03ce\u03d0\5d\63\2\u03cf"+
		"\u03cc\3\2\2\2\u03d0\u03d3\3\2\2\2\u03d1\u03cf\3\2\2\2\u03d1\u03d2\3\2"+
		"\2\2\u03d2g\3\2\2\2\u03d3\u03d1\3\2\2\2\u03d4\u03d5\b\65\1\2\u03d5\u03d6"+
		"\5f\64\2\u03d6\u03dc\3\2\2\2\u03d7\u03d8\f\3\2\2\u03d8\u03d9\7h\2\2\u03d9"+
		"\u03db\5f\64\2\u03da\u03d7\3\2\2\2\u03db\u03de\3\2\2\2\u03dc\u03da\3\2"+
		"\2\2\u03dc\u03dd\3\2\2\2\u03ddi\3\2\2\2\u03de\u03dc\3\2\2\2\u03df\u03e0"+
		"\b\66\1\2\u03e0\u03e1\5h\65\2\u03e1\u03e7\3\2\2\2\u03e2\u03e3\f\3\2\2"+
		"\u03e3\u03e4\7j\2\2\u03e4\u03e6\5h\65\2\u03e5\u03e2\3\2\2\2\u03e6\u03e9"+
		"\3\2\2\2\u03e7\u03e5\3\2\2\2\u03e7\u03e8\3\2\2\2\u03e8k\3\2\2\2\u03e9"+
		"\u03e7\3\2\2\2\u03ea\u03eb\b\67\1\2\u03eb\u03ec\5j\66\2\u03ec\u03f5\3"+
		"\2\2\2\u03ed\u03ee\f\4\2\2\u03ee\u03ef\7\13\2\2\u03ef\u03f4\5j\66\2\u03f0"+
		"\u03f1\f\3\2\2\u03f1\u03f2\7\f\2\2\u03f2\u03f4\5j\66\2\u03f3\u03ed\3\2"+
		"\2\2\u03f3\u03f0\3\2\2\2\u03f4\u03f7\3\2\2\2\u03f5\u03f3\3\2\2\2\u03f5"+
		"\u03f6\3\2\2\2\u03f6m\3\2\2\2\u03f7\u03f5\3\2\2\2\u03f8\u03f9\b8\1\2\u03f9"+
		"\u03fa\5l\67\2\u03fa\u0403\3\2\2\2\u03fb\u03fc\f\4\2\2\u03fc\u03fd\7\r"+
		"\2\2\u03fd\u0402\5l\67\2\u03fe\u03ff\f\3\2\2\u03ff\u0400\7\16\2\2\u0400"+
		"\u0402\5l\67\2\u0401\u03fb\3\2\2\2\u0401\u03fe\3\2\2\2\u0402\u0405\3\2"+
		"\2\2\u0403\u0401\3\2\2\2\u0403\u0404\3\2\2\2\u0404o\3\2\2\2\u0405\u0403"+
		"\3\2\2\2\u0406\u040e\5n8\2\u0407\u0408\5n8\2\u0408\u0409\7\u0087\2\2\u0409"+
		"\u040a\5v<\2\u040a\u040b\7\u0088\2\2\u040b\u040c\5r:\2\u040c\u040e\3\2"+
		"\2\2\u040d\u0406\3\2\2\2\u040d\u0407\3\2\2\2\u040eq\3\2\2\2\u040f\u0416"+
		"\5p9\2\u0410\u0411\5n8\2\u0411\u0412\5t;\2\u0412\u0413\5\u0136\u009c\2"+
		"\u0413\u0416\3\2\2\2\u0414\u0416\5\u0196\u00cc\2\u0415\u040f\3\2\2\2\u0415"+
		"\u0410\3\2\2\2\u0415\u0414\3\2\2\2\u0416s\3\2\2\2\u0417\u0418\t\5\2\2"+
		"\u0418u\3\2\2\2\u0419\u041a\b<\1\2\u041a\u041b\5r:\2\u041b\u0421\3\2\2"+
		"\2\u041c\u041d\f\3\2\2\u041d\u041e\7\u0084\2\2\u041e\u0420\5r:\2\u041f"+
		"\u041c\3\2\2\2\u0420\u0423\3\2\2\2\u0421\u041f\3\2\2\2\u0421\u0422\3\2"+
		"\2\2\u0422w\3\2\2\2\u0423\u0421\3\2\2\2\u0424\u0425\5p9\2\u0425y\3\2\2"+
		"\2\u0426\u0441\5|?\2\u0427\u0429\5\u00eex\2\u0428\u0427\3\2\2\2\u0428"+
		"\u0429\3\2\2\2\u0429\u042a\3\2\2\2\u042a\u0441\5~@\2\u042b\u042d\5\u00ee"+
		"x\2\u042c\u042b\3\2\2\2\u042c\u042d\3\2\2\2\u042d\u042e\3\2\2\2\u042e"+
		"\u0441\5\u0080A\2\u042f\u0431\5\u00eex\2\u0430\u042f\3\2\2\2\u0430\u0431"+
		"\3\2\2\2\u0431\u0432\3\2\2\2\u0432\u0441\5\u0084C\2\u0433\u0435\5\u00ee"+
		"x\2\u0434\u0433\3\2\2\2\u0434\u0435\3\2\2\2\u0435\u0436\3\2\2\2\u0436"+
		"\u0441\5\u0088E\2\u0437\u0439\5\u00eex\2\u0438\u0437\3\2\2\2\u0438\u0439"+
		"\3\2\2\2\u0439\u043a\3\2\2\2\u043a\u0441\5\u0090I\2\u043b\u0441\5\u0092"+
		"J\2\u043c\u043e\5\u00eex\2\u043d\u043c\3\2\2\2\u043d\u043e\3\2\2\2\u043e"+
		"\u043f\3\2\2\2\u043f\u0441\5\u018c\u00c7\2\u0440\u0426\3\2\2\2\u0440\u0428"+
		"\3\2\2\2\u0440\u042c\3\2\2\2\u0440\u0430\3\2\2\2\u0440\u0434\3\2\2\2\u0440"+
		"\u0438\3\2\2\2\u0440\u043b\3\2\2\2\u0440\u043d\3\2\2\2\u0441{\3\2\2\2"+
		"\u0442\u0444\5\u00eex\2\u0443\u0442\3\2\2\2\u0443\u0444\3\2\2\2\u0444"+
		"\u0445\3\2\2\2\u0445\u0446\7\u008e\2\2\u0446\u0447\7\u0088\2\2\u0447\u0457"+
		"\5z>\2\u0448\u044a\5\u00eex\2\u0449\u0448\3\2\2\2\u0449\u044a\3\2\2\2"+
		"\u044a\u044b\3\2\2\2\u044b\u044c\7\30\2\2\u044c\u044d\5x=\2\u044d\u044e"+
		"\7\u0088\2\2\u044e\u044f\5z>\2\u044f\u0457\3\2\2\2\u0450\u0452\5\u00ee"+
		"x\2\u0451\u0450\3\2\2\2\u0451\u0452\3\2\2\2\u0452\u0453\3\2\2\2\u0453"+
		"\u0454\7#\2\2\u0454\u0455\7\u0088\2\2\u0455\u0457\5z>\2\u0456\u0443\3"+
		"\2\2\2\u0456\u0449\3\2\2\2\u0456\u0451\3\2\2\2\u0457}\3\2\2\2\u0458\u045a"+
		"\5v<\2\u0459\u0458\3\2\2\2\u0459\u045a\3\2\2\2\u045a\u045b\3\2\2\2\u045b"+
		"\u045c\7\u008a\2\2\u045c\177\3\2\2\2\u045d\u045f\7a\2\2\u045e\u0460\5"+
		"\u0082B\2\u045f\u045e\3\2\2\2\u045f\u0460\3\2\2\2\u0460\u0461\3\2\2\2"+
		"\u0461\u0462\7b\2\2\u0462\u0081\3\2\2\2\u0463\u0464\bB\1\2\u0464\u0465"+
		"\5z>\2\u0465\u046a\3\2\2\2\u0466\u0467\f\3\2\2\u0467\u0469\5z>\2\u0468"+
		"\u0466\3\2\2\2\u0469\u046c\3\2\2\2\u046a\u0468\3\2\2\2\u046a\u046b\3\2"+
		"\2\2\u046b\u0083\3\2\2\2\u046c\u046a\3\2\2\2\u046d\u046e\7\63\2\2\u046e"+
		"\u046f\7]\2\2\u046f\u0470\5\u0086D\2\u0470\u0471\7^\2\2\u0471\u0472\5"+
		"z>\2\u0472\u0482\3\2\2\2\u0473\u0474\7\63\2\2\u0474\u0475\7]\2\2\u0475"+
		"\u0476\5\u0086D\2\u0476\u0477\7^\2\2\u0477\u0478\5z>\2\u0478\u0479\7("+
		"\2\2\u0479\u047a\5z>\2\u047a\u0482\3\2\2\2\u047b\u047c\7K\2\2\u047c\u047d"+
		"\7]\2\2\u047d\u047e\5\u0086D\2\u047e\u047f\7^\2\2\u047f\u0480\5z>\2\u0480"+
		"\u0482\3\2\2\2\u0481\u046d\3\2\2\2\u0481\u0473\3\2\2\2\u0481\u047b\3\2"+
		"\2\2\u0482\u0085\3\2\2\2\u0483\u0494\5v<\2\u0484\u0486\5\u00eex\2\u0485"+
		"\u0484\3\2\2\2\u0485\u0486\3\2\2\2\u0486\u0487\3\2\2\2\u0487\u0488\5\u00a6"+
		"T\2\u0488\u0489\5\u0108\u0085\2\u0489\u048a\7m\2\2\u048a\u048b\5\u0136"+
		"\u009c\2\u048b\u0494\3\2\2\2\u048c\u048e\5\u00eex\2\u048d\u048c\3\2\2"+
		"\2\u048d\u048e\3\2\2\2\u048e\u048f\3\2\2\2\u048f\u0490\5\u00a6T\2\u0490"+
		"\u0491\5\u0108\u0085\2\u0491\u0492\5\u013a\u009e\2\u0492\u0494\3\2\2\2"+
		"\u0493\u0483\3\2\2\2\u0493\u0485\3\2\2\2\u0493\u048d\3\2\2\2\u0494\u0087"+
		"\3\2\2\2\u0495\u0496\7\\\2\2\u0496\u0497\7]\2\2\u0497\u0498\5\u0086D\2"+
		"\u0498\u0499\7^\2\2\u0499\u049a\5z>\2\u049a\u04b9\3\2\2\2\u049b\u049c"+
		"\7%\2\2\u049c\u049d\5z>\2\u049d\u049e\7\\\2\2\u049e\u049f\7]\2\2\u049f"+
		"\u04a0\5v<\2\u04a0\u04a1\7^\2\2\u04a1\u04a2\7\u008a\2\2\u04a2\u04b9\3"+
		"\2\2\2\u04a3\u04a4\7\60\2\2\u04a4\u04a5\7]\2\2\u04a5\u04a7\5\u008aF\2"+
		"\u04a6\u04a8\5\u0086D\2\u04a7\u04a6\3\2\2\2\u04a7\u04a8\3\2\2\2\u04a8"+
		"\u04a9\3\2\2\2\u04a9\u04ab\7\u008a\2\2\u04aa\u04ac\5v<\2\u04ab\u04aa\3"+
		"\2\2\2\u04ab\u04ac\3\2\2\2\u04ac\u04ad\3\2\2\2\u04ad\u04ae\7^\2\2\u04ae"+
		"\u04af\5z>\2\u04af\u04b9\3\2\2\2\u04b0\u04b1\7\60\2\2\u04b1\u04b2\7]\2"+
		"\2\u04b2\u04b3\5\u008cG\2\u04b3\u04b4\7\u0088\2\2\u04b4\u04b5\5\u008e"+
		"H\2\u04b5\u04b6\7^\2\2\u04b6\u04b7\5z>\2\u04b7\u04b9\3\2\2\2\u04b8\u0495"+
		"\3\2\2\2\u04b8\u049b\3\2\2\2\u04b8\u04a3\3\2\2\2\u04b8\u04b0\3\2\2\2\u04b9"+
		"\u0089\3\2\2\2\u04ba\u04bd\5~@\2\u04bb\u04bd\5\u009cO\2\u04bc\u04ba\3"+
		"\2\2\2\u04bc\u04bb\3\2\2\2\u04bd\u008b\3\2\2\2\u04be\u04c0\5\u00eex\2"+
		"\u04bf\u04be\3\2\2\2\u04bf\u04c0\3\2\2\2\u04c0\u04c1\3\2\2\2\u04c1\u04c2"+
		"\5\u00a6T\2\u04c2\u04c3\5\u0108\u0085\2\u04c3\u008d\3\2\2\2\u04c4\u04c7"+
		"\5v<\2\u04c5\u04c7\5\u013a\u009e\2\u04c6\u04c4\3\2\2\2\u04c6\u04c5\3\2"+
		"\2\2\u04c7\u008f\3\2\2\2\u04c8\u04c9\7\27\2\2\u04c9\u04d9\7\u008a\2\2"+
		"\u04ca\u04cb\7!\2\2\u04cb\u04d9\7\u008a\2\2\u04cc\u04ce\7C\2\2\u04cd\u04cf"+
		"\5v<\2\u04ce\u04cd\3\2\2\2\u04ce\u04cf\3\2\2\2\u04cf\u04d0\3\2\2\2\u04d0"+
		"\u04d9\7\u008a\2\2\u04d1\u04d2\7C\2\2\u04d2\u04d3\5\u013a\u009e\2\u04d3"+
		"\u04d4\7\u008a\2\2\u04d4\u04d9\3\2\2\2\u04d5\u04d6\7\62\2\2\u04d6\u04d7"+
		"\7\u008e\2\2\u04d7\u04d9\7\u008a\2\2\u04d8\u04c8\3\2\2\2\u04d8\u04ca\3"+
		"\2\2\2\u04d8\u04cc\3\2\2\2\u04d8\u04d1\3\2\2\2\u04d8\u04d5\3\2\2\2\u04d9"+
		"\u0091\3\2\2\2\u04da\u04db\5\u0098M\2\u04db\u0093\3\2\2\2\u04dc\u04dd"+
		"\bK\1\2\u04dd\u04de\5\u0096L\2\u04de\u04e3\3\2\2\2\u04df\u04e0\f\3\2\2"+
		"\u04e0\u04e2\5\u0096L\2\u04e1\u04df\3\2\2\2\u04e2\u04e5\3\2\2\2\u04e3"+
		"\u04e1\3\2\2\2\u04e3\u04e4\3\2\2\2\u04e4\u0095\3\2\2\2\u04e5\u04e3\3\2"+
		"\2\2\u04e6\u04f0\5\u0098M\2\u04e7\u04f0\5\u012e\u0098\2\u04e8\u04f0\5"+
		"\u0174\u00bb\2\u04e9\u04f0\5\u0188\u00c5\2\u04ea\u04f0\5\u018a\u00c6\2"+
		"\u04eb\u04f0\5\u00ecw\2\u04ec\u04f0\5\u00d4k\2\u04ed\u04f0\5\u00a0Q\2"+
		"\u04ee\u04f0\5\u00a2R\2\u04ef\u04e6\3\2\2\2\u04ef\u04e7\3\2\2\2\u04ef"+
		"\u04e8\3\2\2\2\u04ef\u04e9\3\2\2\2\u04ef\u04ea\3\2\2\2\u04ef\u04eb\3\2"+
		"\2\2\u04ef\u04ec\3\2\2\2\u04ef\u04ed\3\2\2\2\u04ef\u04ee\3\2\2\2\u04f0"+
		"\u0097\3\2\2\2\u04f1\u04fa\5\u009cO\2\u04f2\u04fa\5\u00eav\2\u04f3\u04fa"+
		"\5\u00e2r\2\u04f4\u04fa\5\u00e6t\2\u04f5\u04fa\5\u00e8u\2\u04f6\u04fa"+
		"\5\u009eP\2\u04f7\u04fa\5\u009aN\2\u04f8\u04fa\5\u00c4c\2\u04f9\u04f1"+
		"\3\2\2\2\u04f9\u04f2\3\2\2\2\u04f9\u04f3\3\2\2\2\u04f9\u04f4\3\2\2\2\u04f9"+
		"\u04f5\3\2\2\2\u04f9\u04f6\3\2\2\2\u04f9\u04f7\3\2\2\2\u04f9\u04f8\3\2"+
		"\2\2\u04fa\u0099\3\2\2\2\u04fb\u04fc\7W\2\2\u04fc\u04fe\7\u008e\2\2\u04fd"+
		"\u04ff\5\u00eex\2\u04fe\u04fd\3\2\2\2\u04fe\u04ff\3\2\2\2\u04ff\u0500"+
		"\3\2\2\2\u0500\u0501\7m\2\2\u0501\u0502\5\u011c\u008f\2\u0502\u0503\7"+
		"\u008a\2\2\u0503\u009b\3\2\2\2\u0504\u0506\5\u00a6T\2\u0505\u0504\3\2"+
		"\2\2\u0505\u0506\3\2\2\2\u0506\u0508\3\2\2\2\u0507\u0509\5\u0104\u0083"+
		"\2\u0508\u0507\3\2\2\2\u0508\u0509\3\2\2\2\u0509\u050a\3\2\2\2\u050a\u0513"+
		"\7\u008a\2\2\u050b\u050d\5\u00eex\2\u050c\u050e\5\u00a6T\2\u050d\u050c"+
		"\3\2\2\2\u050d\u050e\3\2\2\2\u050e\u050f\3\2\2\2\u050f\u0510\5\u0104\u0083"+
		"\2\u0510\u0511\7\u008a\2\2\u0511\u0513\3\2\2\2\u0512\u0505\3\2\2\2\u0512"+
		"\u050b\3\2\2\2\u0513\u009d\3\2\2\2\u0514\u0515\7H\2\2\u0515\u0516\7]\2"+
		"\2\u0516\u0517\5x=\2\u0517\u0518\7\u0084\2\2\u0518\u0519\7\u0097\2\2\u0519"+
		"\u051a\7^\2\2\u051a\u051b\7\u008a\2\2\u051b\u009f\3\2\2\2\u051c\u051d"+
		"\7\u008a\2\2\u051d\u00a1\3\2\2\2\u051e\u051f\5\u00eex\2\u051f\u0520\7"+
		"\u008a\2\2\u0520\u00a3\3\2\2\2\u0521\u0528\5\u00a8U\2\u0522\u0528\5\u00ae"+
		"X\2\u0523\u0528\5\u00aaV\2\u0524\u0528\7\61\2\2\u0525\u0528\7R\2\2\u0526"+
		"\u0528\7\37\2\2\u0527\u0521\3\2\2\2\u0527\u0522\3\2\2\2\u0527\u0523\3"+
		"\2\2\2\u0527\u0524\3\2\2\2\u0527\u0525\3\2\2\2\u0527\u0526\3\2\2\2\u0528"+
		"\u00a5\3\2\2\2\u0529\u052b\5\u00a4S\2\u052a\u052c\5\u00eex\2\u052b\u052a"+
		"\3\2\2\2\u052b\u052c\3\2\2\2\u052c\u0531\3\2\2\2\u052d\u052e\5\u00a4S"+
		"\2\u052e\u052f\5\u00a6T\2\u052f\u0531\3\2\2\2\u0530\u0529\3\2\2\2\u0530"+
		"\u052d\3\2\2\2\u0531\u00a7\3\2\2\2\u0532\u0533\t\6\2\2\u0533\u00a9\3\2"+
		"\2\2\u0534\u0535\t\7\2\2\u0535\u00ab\3\2\2\2\u0536\u0537\7\u008e\2\2\u0537"+
		"\u00ad\3\2\2\2\u0538\u053c\5\u00b0Y\2\u0539\u053c\5\u013e\u00a0\2\u053a"+
		"\u053c\5\u00c0a\2\u053b\u0538\3\2\2\2\u053b\u0539\3\2\2\2\u053b\u053a"+
		"\3\2\2\2\u053c\u00af\3\2\2\2\u053d\u0542\5\u00b6\\\2\u053e\u0542\5\u00bc"+
		"_\2\u053f\u0542\5\u0186\u00c4\2\u0540\u0542\5\u0116\u008c\2\u0541\u053d"+
		"\3\2\2\2\u0541\u053e\3\2\2\2\u0541\u053f\3\2\2\2\u0541\u0540\3\2\2\2\u0542"+
		"\u00b1\3\2\2\2\u0543\u0545\5\u00aeX\2\u0544\u0546\5\u00eex\2\u0545\u0544"+
		"\3\2\2\2\u0545\u0546\3\2\2\2\u0546\u054b\3\2\2\2\u0547\u0548\5\u00aeX"+
		"\2\u0548\u0549\5\u00b2Z\2\u0549\u054b\3\2\2\2\u054a\u0543\3\2\2\2\u054a"+
		"\u0547\3\2\2\2\u054b\u00b3\3\2\2\2\u054c\u054e\5\u00b0Y\2\u054d\u054f"+
		"\5\u00eex\2\u054e\u054d\3\2\2\2\u054e\u054f\3\2\2\2\u054f\u0554\3\2\2"+
		"\2\u0550\u0551\5\u00b0Y\2\u0551\u0552\5\u00b4[\2\u0552\u0554\3\2\2\2\u0553"+
		"\u054c\3\2\2\2\u0553\u0550\3\2\2\2\u0554\u00b5\3\2\2\2\u0555\u0557\5$"+
		"\23\2\u0556\u0555\3\2\2\2\u0556\u0557\3\2\2\2\u0557\u0558\3\2\2\2\u0558"+
		"\u056d\5\u00b8]\2\u0559\u055a\5$\23\2\u055a\u055b\7L\2\2\u055b\u055c\5"+
		"\u017c\u00bf\2\u055c\u056d\3\2\2\2\u055d\u056d\7\32\2\2\u055e\u056d\7"+
		"\33\2\2\u055f\u056d\7\34\2\2\u0560\u056d\7[\2\2\u0561\u056d\7\26\2\2\u0562"+
		"\u056d\7D\2\2\u0563\u056d\7\65\2\2\u0564\u056d\7\66\2\2\u0565\u056d\7"+
		"E\2\2\u0566\u056d\7V\2\2\u0567\u056d\7/\2\2\u0568\u056d\7&\2\2\u0569\u056d"+
		"\7Y\2\2\u056a\u056d\7\25\2\2\u056b\u056d\5\u00ba^\2\u056c\u0556\3\2\2"+
		"\2\u056c\u0559\3\2\2\2\u056c\u055d\3\2\2\2\u056c\u055e\3\2\2\2\u056c\u055f"+
		"\3\2\2\2\u056c\u0560\3\2\2\2\u056c\u0561\3\2\2\2\u056c\u0562\3\2\2\2\u056c"+
		"\u0563\3\2\2\2\u056c\u0564\3\2\2\2\u056c\u0565\3\2\2\2\u056c\u0566\3\2"+
		"\2\2\u056c\u0567\3\2\2\2\u056c\u0568\3\2\2\2\u056c\u0569\3\2\2\2\u056c"+
		"\u056a\3\2\2\2\u056c\u056b\3\2\2\2\u056d\u00b7\3\2\2\2\u056e\u0573\5\u013c"+
		"\u009f\2\u056f\u0573\5\u00be`\2\u0570\u0573\5\u00acW\2\u0571\u0573\5\u017c"+
		"\u00bf\2\u0572\u056e\3\2\2\2\u0572\u056f\3\2\2\2\u0572\u0570\3\2\2\2\u0572"+
		"\u0571\3\2\2\2\u0573\u00b9\3\2\2\2\u0574\u0575\7\"\2\2\u0575\u0576\7]"+
		"\2\2\u0576\u0577\5v<\2\u0577\u0578\7^\2\2\u0578\u057e\3\2\2\2\u0579\u057a"+
		"\7\"\2\2\u057a\u057b\7]\2\2\u057b\u057c\7\25\2\2\u057c\u057e\7^\2\2\u057d"+
		"\u0574\3\2\2\2\u057d\u0579\3\2\2\2\u057e\u00bb\3\2\2\2\u057f\u0581\5\u0146"+
		"\u00a4\2\u0580\u0582\5\u00eex\2\u0581\u0580\3\2\2\2\u0581\u0582\3\2\2"+
		"\2\u0582\u0584\3\2\2\2\u0583\u0585\5$\23\2\u0584\u0583\3\2\2\2\u0584\u0585"+
		"\3\2\2\2\u0585\u0586\3\2\2\2\u0586\u0587\7\u008e\2\2\u0587\u0598\3\2\2"+
		"\2\u0588\u0589\5\u0146\u00a4\2\u0589\u058a\5\u017c\u00bf\2\u058a\u0598"+
		"\3\2\2\2\u058b\u058c\5\u0146\u00a4\2\u058c\u058e\5$\23\2\u058d\u058f\7"+
		"L\2\2\u058e\u058d\3\2\2\2\u058e\u058f\3\2\2\2\u058f\u0590\3\2\2\2\u0590"+
		"\u0591\5\u017c\u00bf\2\u0591\u0598\3\2\2\2\u0592\u0594\7)\2\2\u0593\u0595"+
		"\5$\23\2\u0594\u0593\3\2\2\2\u0594\u0595\3\2\2\2\u0595\u0596\3\2\2\2\u0596"+
		"\u0598\7\u008e\2\2\u0597\u057f\3\2\2\2\u0597\u0588\3\2\2\2\u0597\u058b"+
		"\3\2\2\2\u0597\u0592\3\2\2\2\u0598\u00bd\3\2\2\2\u0599\u059a\7\u008e\2"+
		"\2\u059a\u00bf\3\2\2\2\u059b\u059c\5\u00c2b\2\u059c\u059e\7a\2\2\u059d"+
		"\u059f\5\u00caf\2\u059e\u059d\3\2\2\2\u059e\u059f\3\2\2\2\u059f\u05a0"+
		"\3\2\2\2\u05a0\u05a1\7b\2\2\u05a1\u05a9\3\2\2\2\u05a2\u05a3\5\u00c2b\2"+
		"\u05a3\u05a4\7a\2\2\u05a4\u05a5\5\u00caf\2\u05a5\u05a6\7\u0084\2\2\u05a6"+
		"\u05a7\7b\2\2\u05a7\u05a9\3\2\2\2\u05a8\u059b\3\2\2\2\u05a8\u05a2\3\2"+
		"\2\2\u05a9\u00c1\3\2\2\2\u05aa\u05ac\5\u00c6d\2\u05ab\u05ad\5\u00eex\2"+
		"\u05ac\u05ab\3\2\2\2\u05ac\u05ad\3\2\2\2\u05ad\u05af\3\2\2\2\u05ae\u05b0"+
		"\7\u008e\2\2\u05af\u05ae\3\2\2\2\u05af\u05b0\3\2\2\2\u05b0\u05b2\3\2\2"+
		"\2\u05b1\u05b3\5\u00c8e\2\u05b2\u05b1\3\2\2\2\u05b2\u05b3\3\2\2\2\u05b3"+
		"\u05be\3\2\2\2\u05b4\u05b6\5\u00c6d\2\u05b5\u05b7\5\u00eex\2\u05b6\u05b5"+
		"\3\2\2\2\u05b6\u05b7\3\2\2\2\u05b7\u05b8\3\2\2\2\u05b8\u05b9\5$\23\2\u05b9"+
		"\u05bb\7\u008e\2\2\u05ba\u05bc\5\u00c8e\2\u05bb\u05ba\3\2\2\2\u05bb\u05bc"+
		"\3\2\2\2\u05bc\u05be\3\2\2\2\u05bd\u05aa\3\2\2\2\u05bd\u05b4\3\2\2\2\u05be"+
		"\u00c3\3\2\2\2\u05bf\u05c1\5\u00c6d\2\u05c0\u05c2\5\u00eex\2\u05c1\u05c0"+
		"\3\2\2\2\u05c1\u05c2\3\2\2\2\u05c2\u05c3\3\2\2\2\u05c3\u05c5\7\u008e\2"+
		"\2\u05c4\u05c6\5\u00c8e\2\u05c5\u05c4\3\2\2\2\u05c5\u05c6\3\2\2\2\u05c6"+
		"\u05c7\3\2\2\2\u05c7\u05c8\7\u008a\2\2\u05c8\u00c5\3\2\2\2\u05c9\u05cf"+
		"\7)\2\2\u05ca\u05cb\7)\2\2\u05cb\u05cf\7\35\2\2\u05cc\u05cd\7)\2\2\u05cd"+
		"\u05cf\7J\2\2\u05ce\u05c9\3\2\2\2\u05ce\u05ca\3\2\2\2\u05ce\u05cc\3\2"+
		"\2\2\u05cf\u00c7\3\2\2\2\u05d0\u05d1\7\u0088\2\2\u05d1\u05d2\5\u00b2Z"+
		"\2\u05d2\u00c9\3\2\2\2\u05d3\u05d4\bf\1\2\u05d4\u05d5\5\u00ccg\2\u05d5"+
		"\u05db\3\2\2\2\u05d6\u05d7\f\3\2\2\u05d7\u05d8\7\u0084\2\2\u05d8\u05da"+
		"\5\u00ccg\2\u05d9\u05d6\3\2\2\2\u05da\u05dd\3\2\2\2\u05db\u05d9\3\2\2"+
		"\2\u05db\u05dc\3\2\2\2\u05dc\u00cb\3\2\2\2\u05dd\u05db\3\2\2\2\u05de\u05e4"+
		"\5\u00ceh\2\u05df\u05e0\5\u00ceh\2\u05e0\u05e1\7m\2\2\u05e1\u05e2\5x="+
		"\2\u05e2\u05e4\3\2\2\2\u05e3\u05de\3\2\2\2\u05e3\u05df\3\2\2\2\u05e4\u00cd"+
		"\3\2\2\2\u05e5\u05e6\7\u008e\2\2\u05e6\u00cf\3\2\2\2\u05e7\u05ea\5\u00d2"+
		"j\2\u05e8\u05ea\5\u00e0q\2\u05e9\u05e7\3\2\2\2\u05e9\u05e8\3\2\2\2\u05ea"+
		"\u00d1\3\2\2\2\u05eb\u05ec\7\u008e\2\2\u05ec\u00d3\3\2\2\2\u05ed\u05f0"+
		"\5\u00d6l\2\u05ee\u05f0\5\u00dco\2\u05ef\u05ed\3\2\2\2\u05ef\u05ee\3\2"+
		"\2\2\u05f0\u00d5\3\2\2\2\u05f1\u05f4\5\u00d8m\2\u05f2\u05f4\5\u00dan\2"+
		"\u05f3\u05f1\3\2\2\2\u05f3\u05f2\3\2\2\2\u05f4\u00d7\3\2\2\2\u05f5\u05f7"+
		"\7\64\2\2\u05f6\u05f5\3\2\2\2\u05f6\u05f7\3\2\2\2\u05f7\u05f8\3\2\2\2"+
		"\u05f8\u05f9\78\2\2\u05f9\u05fa\7\u008e\2\2\u05fa\u05fb\7a\2\2\u05fb\u05fc"+
		"\5\u00dep\2\u05fc\u05fd\7b\2\2\u05fd\u00d9\3\2\2\2\u05fe\u0600\7\64\2"+
		"\2\u05ff\u05fe\3\2\2\2\u05ff\u0600\3\2\2\2\u0600\u0601\3\2\2\2\u0601\u0602"+
		"\78\2\2\u0602\u0603\5\u00d2j\2\u0603\u0604\7a\2\2\u0604\u0605\5\u00de"+
		"p\2\u0605\u0606\7b\2\2\u0606\u00db\3\2\2\2\u0607\u0609\7\64\2\2\u0608"+
		"\u0607\3\2\2\2\u0608\u0609\3\2\2\2\u0609\u060a\3\2\2\2\u060a\u060b\78"+
		"\2\2\u060b\u060c\7a\2\2\u060c\u060d\5\u00dep\2\u060d\u060e\7b\2\2\u060e"+
		"\u00dd\3\2\2\2\u060f\u0611\5\u0094K\2\u0610\u060f\3\2\2\2\u0610\u0611"+
		"\3\2\2\2\u0611\u00df\3\2\2\2\u0612\u0613\7\u008e\2\2\u0613\u00e1\3\2\2"+
		"\2\u0614\u0615\78\2\2\u0615\u0616\7\u008e\2\2\u0616\u0617\7m\2\2\u0617"+
		"\u0618\5\u00e4s\2\u0618\u0619\7\u008a\2\2\u0619\u00e3\3\2\2\2\u061a\u061c"+
		"\5$\23\2\u061b\u061a\3\2\2\2\u061b\u061c\3\2\2\2\u061c\u061d\3\2\2\2\u061d"+
		"\u061e\5\u00d0i\2\u061e\u00e5\3\2\2\2\u061f\u0621\7W\2\2\u0620\u0622\7"+
		"T\2\2\u0621\u0620\3\2\2\2\u0621\u0622\3\2\2\2\u0622\u0623\3\2\2\2\u0623"+
		"\u0624\5$\23\2\u0624\u0625\5 \21\2\u0625\u0626\7\u008a\2\2\u0626\u062d"+
		"\3\2\2\2\u0627\u0628\7W\2\2\u0628\u0629\7\u0089\2\2\u0629\u062a\5 \21"+
		"\2\u062a\u062b\7\u008a\2\2\u062b\u062d\3\2\2\2\u062c\u061f\3\2\2\2\u062c"+
		"\u0627\3\2\2\2\u062d\u00e7\3\2\2\2\u062e\u0630\5\u00eex\2\u062f\u062e"+
		"\3\2\2\2\u062f\u0630\3\2\2\2\u0630\u0631\3\2\2\2\u0631\u0632\7W\2\2\u0632"+
		"\u0634\78\2\2\u0633\u0635\5$\23\2\u0634\u0633\3\2\2\2\u0634\u0635\3\2"+
		"\2\2\u0635\u0636\3\2\2\2\u0636\u0637\5\u00d0i\2\u0637\u0638\7\u008a\2"+
		"\2\u0638\u00e9\3\2\2\2\u0639\u063a\7\24\2\2\u063a\u063b\7]\2\2\u063b\u063c"+
		"\7\u0097\2\2\u063c\u063d\7^\2\2\u063d\u063e\7\u008a\2\2\u063e\u00eb\3"+
		"\2\2\2\u063f\u0640\7,\2\2\u0640\u0641\7\u0097\2\2\u0641\u0643\7a\2\2\u0642"+
		"\u0644\5\u0094K\2\u0643\u0642\3\2\2\2\u0643\u0644\3\2\2\2\u0644\u0645"+
		"\3\2\2\2\u0645\u064a\7b\2\2\u0646\u0647\7,\2\2\u0647\u0648\7\u0097\2\2"+
		"\u0648\u064a\5\u0096L\2\u0649\u063f\3\2\2\2\u0649\u0646\3\2\2\2\u064a"+
		"\u00ed\3\2\2\2\u064b\u064c\bx\1\2\u064c\u064d\5\u00f0y\2\u064d\u0652\3"+
		"\2\2\2\u064e\u064f\f\3\2\2\u064f\u0651\5\u00f0y\2\u0650\u064e\3\2\2\2"+
		"\u0651\u0654\3\2\2\2\u0652\u0650\3\2\2\2\u0652\u0653\3\2\2\2\u0653\u00ef"+
		"\3\2\2\2\u0654\u0652\3\2\2\2\u0655\u0656\7_\2\2\u0656\u0657\7_\2\2\u0657"+
		"\u0658\5\u00f4{\2\u0658\u0659\7`\2\2\u0659\u065a\7`\2\2\u065a\u065d\3"+
		"\2\2\2\u065b\u065d\5\u00f2z\2\u065c\u0655\3\2\2\2\u065c\u065b\3\2\2\2"+
		"\u065d\u00f1\3\2\2\2\u065e\u065f\7\22\2\2\u065f\u0660\7]\2\2\u0660\u0662"+
		"\5\u011c\u008f\2\u0661\u0663\7\u008d\2\2\u0662\u0661\3\2\2\2\u0662\u0663"+
		"\3\2\2\2\u0663\u0664\3\2\2\2\u0664\u0665\7^\2\2\u0665\u066f\3\2\2\2\u0666"+
		"\u0667\7\22\2\2\u0667\u0668\7]\2\2\u0668\u066a\5x=\2\u0669\u066b\7\u008d"+
		"\2\2\u066a\u0669\3\2\2\2\u066a\u066b\3\2\2\2\u066b\u066c\3\2\2\2\u066c"+
		"\u066d\7^\2\2\u066d\u066f\3\2\2\2\u066e\u065e\3\2\2\2\u066e\u0666\3\2"+
		"\2\2\u066f\u00f3\3\2\2\2\u0670\u0672\b{\1\2\u0671\u0673\5\u00f6|\2\u0672"+
		"\u0671\3\2\2\2\u0672\u0673\3\2\2\2\u0673\u0678\3\2\2\2\u0674\u0675\5\u00f6"+
		"|\2\u0675\u0676\7\u008d\2\2\u0676\u0678\3\2\2\2\u0677\u0670\3\2\2\2\u0677"+
		"\u0674\3\2\2\2\u0678\u0685\3\2\2\2\u0679\u067a\f\5\2\2\u067a\u067c\7\u0084"+
		"\2\2\u067b\u067d\5\u00f6|\2\u067c\u067b\3\2\2\2\u067c\u067d\3\2\2\2\u067d"+
		"\u0684\3\2\2\2\u067e\u067f\f\3\2\2\u067f\u0680\7\u0084\2\2\u0680\u0681"+
		"\5\u00f6|\2\u0681\u0682\7\u008d\2\2\u0682\u0684\3\2\2\2\u0683\u0679\3"+
		"\2\2\2\u0683\u067e\3\2\2\2\u0684\u0687\3\2\2\2\u0685\u0683\3\2\2\2\u0685"+
		"\u0686\3\2\2\2\u0686\u00f5\3\2\2\2\u0687\u0685\3\2\2\2\u0688\u068a\5\u00f8"+
		"}\2\u0689\u068b\5\u00fe\u0080\2\u068a\u0689\3\2\2\2\u068a\u068b\3\2\2"+
		"\2\u068b\u00f7\3\2\2\2\u068c\u068f\7\u008e\2\2\u068d\u068f\5\u00fa~\2"+
		"\u068e\u068c\3\2\2\2\u068e\u068d\3\2\2\2\u068f\u00f9\3\2\2\2\u0690\u0691"+
		"\5\u00fc\177\2\u0691\u0692\7\u0089\2\2\u0692\u0693\7\u008e\2\2\u0693\u00fb"+
		"\3\2\2\2\u0694\u0695\7\u008e\2\2\u0695\u00fd\3\2\2\2\u0696\u0697\7]\2"+
		"\2\u0697\u0698\5\u0100\u0081\2\u0698\u0699\7^\2\2\u0699\u00ff\3\2\2\2"+
		"\u069a\u069c\b\u0081\1\2\u069b\u069d\5\u0102\u0082\2\u069c\u069b\3\2\2"+
		"\2\u069c\u069d\3\2\2\2\u069d\u06a2\3\2\2\2\u069e\u069f\f\3\2\2\u069f\u06a1"+
		"\5\u0102\u0082\2\u06a0\u069e\3\2\2\2\u06a1\u06a4\3\2\2\2\u06a2\u06a0\3"+
		"\2\2\2\u06a2\u06a3\3\2\2\2\u06a3\u0101\3\2\2\2\u06a4\u06a2\3\2\2\2\u06a5"+
		"\u06a6\7]\2\2\u06a6\u06a7\5\u0100\u0081\2\u06a7\u06a8\7^\2\2\u06a8\u06b7"+
		"\3\2\2\2\u06a9\u06aa\7_\2\2\u06aa\u06ab\5\u0100\u0081\2\u06ab\u06ac\7"+
		"`\2\2\u06ac\u06b7\3\2\2\2\u06ad\u06ae\7a\2\2\u06ae\u06af\5\u0100\u0081"+
		"\2\u06af\u06b0\7b\2\2\u06b0\u06b7\3\2\2\2\u06b1\u06b3\n\b\2\2\u06b2\u06b1"+
		"\3\2\2\2\u06b3\u06b4\3\2\2\2\u06b4\u06b2\3\2\2\2\u06b4\u06b5\3\2\2\2\u06b5"+
		"\u06b7\3\2\2\2\u06b6\u06a5\3\2\2\2\u06b6\u06a9\3\2\2\2\u06b6\u06ad\3\2"+
		"\2\2\u06b6\u06b2\3\2\2\2\u06b7\u0103\3\2\2\2\u06b8\u06b9\b\u0083\1\2\u06b9"+
		"\u06ba\5\u0106\u0084\2\u06ba\u06c0\3\2\2\2\u06bb\u06bc\f\3\2\2\u06bc\u06bd"+
		"\7\u0084\2\2\u06bd\u06bf\5\u0106\u0084\2\u06be\u06bb\3\2\2\2\u06bf\u06c2"+
		"\3\2\2\2\u06c0\u06be\3\2\2\2\u06c0\u06c1\3\2\2\2\u06c1\u0105\3\2\2\2\u06c2"+
		"\u06c0\3\2\2\2\u06c3\u06c5\5\u0108\u0085\2\u06c4\u06c6\5\u0132\u009a\2"+
		"\u06c5\u06c4\3\2\2\2\u06c5\u06c6\3\2\2\2\u06c6\u0107\3\2\2\2\u06c7\u06cd"+
		"\5\u010a\u0086\2\u06c8\u06c9\5\u010c\u0087\2\u06c9\u06ca\5\u010e\u0088"+
		"\2\u06ca\u06cb\5\u0110\u0089\2\u06cb\u06cd\3\2\2\2\u06cc\u06c7\3\2\2\2"+
		"\u06cc\u06c8\3\2\2\2\u06cd\u0109\3\2\2\2\u06ce\u06d3\5\u010c\u0087\2\u06cf"+
		"\u06d0\5\u0112\u008a\2\u06d0\u06d1\5\u010a\u0086\2\u06d1\u06d3\3\2\2\2"+
		"\u06d2\u06ce\3\2\2\2\u06d2\u06cf\3\2\2\2\u06d3\u010b\3\2\2\2\u06d4\u06d5"+
		"\b\u0087\1\2\u06d5\u06d7\5\u011a\u008e\2\u06d6\u06d8\5\u00eex\2\u06d7"+
		"\u06d6\3\2\2\2\u06d7\u06d8\3\2\2\2\u06d8\u06de\3\2\2\2\u06d9\u06da\7]"+
		"\2\2\u06da\u06db\5\u010a\u0086\2\u06db\u06dc\7^\2\2\u06dc\u06de\3\2\2"+
		"\2\u06dd\u06d4\3\2\2\2\u06dd\u06d9\3\2\2\2\u06de\u06ec\3\2\2\2\u06df\u06e0"+
		"\f\5\2\2\u06e0\u06eb\5\u010e\u0088\2\u06e1\u06e2\f\4\2\2\u06e2\u06e4\7"+
		"_\2\2\u06e3\u06e5\5x=\2\u06e4\u06e3\3\2\2\2\u06e4\u06e5\3\2\2\2\u06e5"+
		"\u06e6\3\2\2\2\u06e6\u06e8\7`\2\2\u06e7\u06e9\5\u00eex\2\u06e8\u06e7\3"+
		"\2\2\2\u06e8\u06e9\3\2\2\2\u06e9\u06eb\3\2\2\2\u06ea\u06df\3\2\2\2\u06ea"+
		"\u06e1\3\2\2\2\u06eb\u06ee\3\2\2\2\u06ec\u06ea\3\2\2\2\u06ec\u06ed\3\2"+
		"\2\2\u06ed\u010d\3\2\2\2\u06ee\u06ec\3\2\2\2\u06ef\u06f0\7]\2\2\u06f0"+
		"\u06f1\5\u0128\u0095\2\u06f1\u06f3\7^\2\2\u06f2\u06f4\5\u0114\u008b\2"+
		"\u06f3\u06f2\3\2\2\2\u06f3\u06f4\3\2\2\2\u06f4\u06f6\3\2\2\2\u06f5\u06f7"+
		"\5\u0118\u008d\2\u06f6\u06f5\3\2\2\2\u06f6\u06f7\3\2\2\2\u06f7\u06f9\3"+
		"\2\2\2\u06f8\u06fa\5\u0198\u00cd\2\u06f9\u06f8\3\2\2\2\u06f9\u06fa\3\2"+
		"\2\2\u06fa\u06fc\3\2\2\2\u06fb\u06fd\5\u00eex\2\u06fc\u06fb\3\2\2\2\u06fc"+
		"\u06fd\3\2\2\2\u06fd\u010f\3\2\2\2\u06fe\u06ff\7\u0086\2\2\u06ff\u0701"+
		"\5\u00b4[\2\u0700\u0702\5\u011e\u0090\2\u0701\u0700\3\2\2\2\u0701\u0702"+
		"\3\2\2\2\u0702\u0111\3\2\2\2\u0703\u0705\7e\2\2\u0704\u0706\5\u00eex\2"+
		"\u0705\u0704\3\2\2\2\u0705\u0706\3\2\2\2\u0706\u0708\3\2\2\2\u0707\u0709"+
		"\5\u0114\u008b\2\u0708\u0707\3\2\2\2\u0708\u0709\3\2\2\2\u0709\u071b\3"+
		"\2\2\2\u070a\u070c\7i\2\2\u070b\u070d\5\u00eex\2\u070c\u070b\3\2\2\2\u070c"+
		"\u070d\3\2\2\2\u070d\u071b\3\2\2\2\u070e\u0710\7\13\2\2\u070f\u0711\5"+
		"\u00eex\2\u0710\u070f\3\2\2\2\u0710\u0711\3\2\2\2\u0711\u071b\3\2\2\2"+
		"\u0712\u0713\5$\23\2\u0713\u0715\7e\2\2\u0714\u0716\5\u00eex\2\u0715\u0714"+
		"\3\2\2\2\u0715\u0716\3\2\2\2\u0716\u0718\3\2\2\2\u0717\u0719\5\u0114\u008b"+
		"\2\u0718\u0717\3\2\2\2\u0718\u0719\3\2\2\2\u0719\u071b\3\2\2\2\u071a\u0703"+
		"\3\2\2\2\u071a\u070a\3\2\2\2\u071a\u070e\3\2\2\2\u071a\u0712\3\2\2\2\u071b"+
		"\u0113\3\2\2\2\u071c\u071e\5\u0116\u008c\2\u071d\u071f\5\u0114\u008b\2"+
		"\u071e\u071d\3\2\2\2\u071e\u071f\3\2\2\2\u071f\u0115\3\2\2\2\u0720\u0721"+
		"\t\t\2\2\u0721\u0117\3\2\2\2\u0722\u0723\t\n\2\2\u0723\u0119\3\2\2\2\u0724"+
		"\u0726\7\u008d\2\2\u0725\u0724\3\2\2\2\u0725\u0726\3\2\2\2\u0726\u0727"+
		"\3\2\2\2\u0727\u0728\5\36\20\2\u0728\u011b\3\2\2\2\u0729\u072b\5\u00b2"+
		"Z\2\u072a\u072c\5\u011e\u0090\2\u072b\u072a\3\2\2\2\u072b\u072c\3\2\2"+
		"\2\u072c\u011d\3\2\2\2\u072d\u0736\5\u0120\u0091\2\u072e\u0730\5\u0122"+
		"\u0092\2\u072f\u072e\3\2\2\2\u072f\u0730\3\2\2\2\u0730\u0731\3\2\2\2\u0731"+
		"\u0732\5\u010e\u0088\2\u0732\u0733\5\u0110\u0089\2\u0733\u0736\3\2\2\2"+
		"\u0734\u0736\5\u0124\u0093\2\u0735\u072d\3\2\2\2\u0735\u072f\3\2\2\2\u0735"+
		"\u0734\3\2\2\2\u0736\u011f\3\2\2\2\u0737\u073d\5\u0122\u0092\2\u0738\u073a"+
		"\5\u0112\u008a\2\u0739\u073b\5\u0120\u0091\2\u073a\u0739\3\2\2\2\u073a"+
		"\u073b\3\2\2\2\u073b\u073d\3\2\2\2\u073c\u0737\3\2\2\2\u073c\u0738\3\2"+
		"\2\2\u073d\u0121\3\2\2\2\u073e\u073f\b\u0092\1\2\u073f\u074d\5\u010e\u0088"+
		"\2\u0740\u0742\7_\2\2\u0741\u0743\5x=\2\u0742\u0741\3\2\2\2\u0742\u0743"+
		"\3\2\2\2\u0743\u0744\3\2\2\2\u0744\u0746\7`\2\2\u0745\u0747\5\u00eex\2"+
		"\u0746\u0745\3\2\2\2\u0746\u0747\3\2\2\2\u0747\u074d\3\2\2\2\u0748\u0749"+
		"\7]\2\2\u0749\u074a\5\u0120\u0091\2\u074a\u074b\7^\2\2\u074b\u074d\3\2"+
		"\2\2\u074c\u073e\3\2\2\2\u074c\u0740\3\2\2\2\u074c\u0748\3\2\2\2\u074d"+
		"\u075b\3\2\2\2\u074e\u074f\f\7\2\2\u074f\u075a\5\u010e\u0088\2\u0750\u0751"+
		"\f\5\2\2\u0751\u0753\7_\2\2\u0752\u0754\5x=\2\u0753\u0752\3\2\2\2\u0753"+
		"\u0754\3\2\2\2\u0754\u0755\3\2\2\2\u0755\u0757\7`\2\2\u0756\u0758\5\u00ee"+
		"x\2\u0757\u0756\3\2\2\2\u0757\u0758\3\2\2\2\u0758\u075a\3\2\2\2\u0759"+
		"\u074e\3\2\2\2\u0759\u0750\3\2\2\2\u075a\u075d\3\2\2\2\u075b\u0759\3\2"+
		"\2\2\u075b\u075c\3\2\2\2\u075c\u0123\3\2\2\2\u075d\u075b\3\2\2\2\u075e"+
		"\u0763\5\u0126\u0094\2\u075f\u0760\5\u0112\u008a\2\u0760\u0761\5\u0124"+
		"\u0093\2\u0761\u0763\3\2\2\2\u0762\u075e\3\2\2\2\u0762\u075f\3\2\2\2\u0763"+
		"\u0125\3\2\2\2\u0764\u0765\b\u0094\1\2\u0765\u0766\7\u008d\2\2\u0766\u0774"+
		"\3\2\2\2\u0767\u0768\f\5\2\2\u0768\u0773\5\u010e\u0088\2\u0769\u076a\f"+
		"\4\2\2\u076a\u076c\7_\2\2\u076b\u076d\5x=\2\u076c\u076b\3\2\2\2\u076c"+
		"\u076d\3\2\2\2\u076d\u076e\3\2\2\2\u076e\u0770\7`\2\2\u076f\u0771\5\u00ee"+
		"x\2\u0770\u076f\3\2\2\2\u0770\u0771\3\2\2\2\u0771\u0773\3\2\2\2\u0772"+
		"\u0767\3\2\2\2\u0772\u0769\3\2\2\2\u0773\u0776\3\2\2\2\u0774\u0772\3\2"+
		"\2\2\u0774\u0775\3\2\2\2\u0775\u0127\3\2\2\2\u0776\u0774\3\2\2\2\u0777"+
		"\u0779\5\u012a\u0096\2\u0778\u0777\3\2\2\2\u0778\u0779\3\2\2\2\u0779\u077b"+
		"\3\2\2\2\u077a\u077c\7\u008d\2\2\u077b\u077a\3\2\2\2\u077b\u077c\3\2\2"+
		"\2\u077c\u0782\3\2\2\2\u077d\u077e\5\u012a\u0096\2\u077e\u077f\7\u0084"+
		"\2\2\u077f\u0780\7\u008d\2\2\u0780\u0782\3\2\2\2\u0781\u0778\3\2\2\2\u0781"+
		"\u077d\3\2\2\2\u0782\u0129\3\2\2\2\u0783\u0784\b\u0096\1\2\u0784\u0785"+
		"\5\u012c\u0097\2\u0785\u078b\3\2\2\2\u0786\u0787\f\3\2\2\u0787\u0788\7"+
		"\u0084\2\2\u0788\u078a\5\u012c\u0097\2\u0789\u0786\3\2\2\2\u078a\u078d"+
		"\3\2\2\2\u078b\u0789\3\2\2\2\u078b\u078c\3\2\2\2\u078c\u012b\3\2\2\2\u078d"+
		"\u078b\3\2\2\2\u078e\u0790\5\n\6\2\u078f\u078e\3\2\2\2\u078f\u0790\3\2"+
		"\2\2\u0790\u0792\3\2\2\2\u0791\u0793\5\u00eex\2\u0792\u0791\3\2\2\2\u0792"+
		"\u0793\3\2\2\2\u0793\u0794\3\2\2\2\u0794\u0795\5\u00a6T\2\u0795\u0796"+
		"\5\u0108\u0085\2\u0796\u07ba\3\2\2\2\u0797\u0799\5\n\6\2\u0798\u0797\3"+
		"\2\2\2\u0798\u0799\3\2\2\2\u0799\u079b\3\2\2\2\u079a\u079c\5\u00eex\2"+
		"\u079b\u079a\3\2\2\2\u079b\u079c\3\2\2\2\u079c\u079d\3\2\2\2\u079d\u079e"+
		"\5\u00a6T\2\u079e\u079f\5\u0108\u0085\2\u079f\u07a0\7m\2\2\u07a0\u07a1"+
		"\5\u0136\u009c\2\u07a1\u07ba\3\2\2\2\u07a2\u07a4\5\n\6\2\u07a3\u07a2\3"+
		"\2\2\2\u07a3\u07a4\3\2\2\2\u07a4\u07a6\3\2\2\2\u07a5\u07a7\5\u00eex\2"+
		"\u07a6\u07a5\3\2\2\2\u07a6\u07a7\3\2\2\2\u07a7\u07a8\3\2\2\2\u07a8\u07aa"+
		"\5\u00a6T\2\u07a9\u07ab\5\u011e\u0090\2\u07aa\u07a9\3\2\2\2\u07aa\u07ab"+
		"\3\2\2\2\u07ab\u07ba\3\2\2\2\u07ac\u07ae\5\n\6\2\u07ad\u07ac\3\2\2\2\u07ad"+
		"\u07ae\3\2\2\2\u07ae\u07b0\3\2\2\2\u07af\u07b1\5\u00eex\2\u07b0\u07af"+
		"\3\2\2\2\u07b0\u07b1\3\2\2\2\u07b1\u07b2\3\2\2\2\u07b2\u07b4\5\u00a6T"+
		"\2\u07b3\u07b5\5\u011e\u0090\2\u07b4\u07b3\3\2\2\2\u07b4\u07b5\3\2\2\2"+
		"\u07b5\u07b6\3\2\2\2\u07b6\u07b7\7m\2\2\u07b7\u07b8\5\u0136\u009c\2\u07b8"+
		"\u07ba\3\2\2\2\u07b9\u078f\3\2\2\2\u07b9\u0798\3\2\2\2\u07b9\u07a3\3\2"+
		"\2\2\u07b9\u07ad\3\2\2\2\u07ba\u012d\3\2\2\2\u07bb\u07bd\5\u00eex\2\u07bc"+
		"\u07bb\3\2\2\2\u07bc\u07bd\3\2\2\2\u07bd\u07bf\3\2\2\2\u07be\u07c0\5\u00a6"+
		"T\2\u07bf\u07be\3\2\2\2\u07bf\u07c0\3\2\2\2\u07c0\u07c1\3\2\2\2\u07c1"+
		"\u07c3\5\u0108\u0085\2\u07c2\u07c4\5\u0150\u00a9\2\u07c3\u07c2\3\2\2\2"+
		"\u07c3\u07c4\3\2\2\2\u07c4\u07c5\3\2\2\2\u07c5\u07c6\5\u0130\u0099\2\u07c6"+
		"\u012f\3\2\2\2\u07c7\u07c9\5\u0168\u00b5\2\u07c8\u07c7\3\2\2\2\u07c8\u07c9"+
		"\3\2\2\2\u07c9\u07ca\3\2\2\2\u07ca\u07d3\5\u0080A\2\u07cb\u07d3\5\u018e"+
		"\u00c8\2\u07cc\u07cd\7m\2\2\u07cd\u07ce\7#\2\2\u07ce\u07d3\7\u008a\2\2"+
		"\u07cf\u07d0\7m\2\2\u07d0\u07d1\7$\2\2\u07d1\u07d3\7\u008a\2\2\u07d2\u07c8"+
		"\3\2\2\2\u07d2\u07cb\3\2\2\2\u07d2\u07cc\3\2\2\2\u07d2\u07cf\3\2\2\2\u07d3"+
		"\u0131\3\2\2\2\u07d4\u07da\5\u0134\u009b\2\u07d5\u07d6\7]\2\2\u07d6\u07d7"+
		"\5> \2\u07d7\u07d8\7^\2\2\u07d8\u07da\3\2\2\2\u07d9\u07d4\3\2\2\2\u07d9"+
		"\u07d5\3\2\2\2\u07da\u0133\3\2\2\2\u07db\u07dc\7m\2\2\u07dc\u07df\5\u0136"+
		"\u009c\2\u07dd\u07df\5\u013a\u009e\2\u07de\u07db\3\2\2\2\u07de\u07dd\3"+
		"\2\2\2\u07df\u0135\3\2\2\2\u07e0\u07e3\5r:\2\u07e1\u07e3\5\u013a\u009e"+
		"\2\u07e2\u07e0\3\2\2\2\u07e2\u07e1\3\2\2\2\u07e3\u0137\3\2\2\2\u07e4\u07e5"+
		"\b\u009d\1\2\u07e5\u07e7\5\u0136\u009c\2\u07e6\u07e8\7\u008d\2\2\u07e7"+
		"\u07e6\3\2\2\2\u07e7\u07e8\3\2\2\2\u07e8\u07f1\3\2\2\2\u07e9\u07ea\f\3"+
		"\2\2\u07ea\u07eb\7\u0084\2\2\u07eb\u07ed\5\u0136\u009c\2\u07ec\u07ee\7"+
		"\u008d\2\2\u07ed\u07ec\3\2\2\2\u07ed\u07ee\3\2\2\2\u07ee\u07f0\3\2\2\2"+
		"\u07ef\u07e9\3\2\2\2\u07f0\u07f3\3\2\2\2\u07f1\u07ef\3\2\2\2\u07f1\u07f2"+
		"\3\2\2\2\u07f2\u0139\3\2\2\2\u07f3\u07f1\3\2\2\2\u07f4\u07f5\7a\2\2\u07f5"+
		"\u07f7\5\u0138\u009d\2\u07f6\u07f8\7\u0084\2\2\u07f7\u07f6\3\2\2\2\u07f7"+
		"\u07f8\3\2\2\2\u07f8\u07f9\3\2\2\2\u07f9\u07fa\7b\2\2\u07fa\u07fe\3\2"+
		"\2\2\u07fb\u07fc\7a\2\2\u07fc\u07fe\7b\2\2\u07fd\u07f4\3\2\2\2\u07fd\u07fb"+
		"\3\2\2\2\u07fe\u013b\3\2\2\2\u07ff\u0802\7\u008e\2\2\u0800\u0802\5\u017c"+
		"\u00bf\2\u0801\u07ff\3\2\2\2\u0801\u0800\3\2\2\2\u0802\u013d\3\2\2\2\u0803"+
		"\u0805\5\4\3\2\u0804\u0803\3\2\2\2\u0804\u0805\3\2\2\2\u0805\u0806\3\2"+
		"\2\2\u0806\u0807\5\u0140\u00a1\2\u0807\u0809\7a\2\2\u0808\u080a\5\f\7"+
		"\2\u0809\u0808\3\2\2\2\u0809\u080a\3\2\2\2\u080a\u080c\3\2\2\2\u080b\u080d"+
		"\5\u0148\u00a5\2\u080c\u080b\3\2\2\2\u080c\u080d\3\2\2\2\u080d\u080e\3"+
		"\2\2\2\u080e\u080f\7b\2\2\u080f\u013f\3\2\2\2\u0810\u0812\5\u0146\u00a4"+
		"\2\u0811\u0813\5\2\2\2\u0812\u0811\3\2\2\2\u0812\u0813\3\2\2\2\u0813\u0815"+
		"\3\2\2\2\u0814\u0816\5\u00eex\2\u0815\u0814\3\2\2\2\u0815\u0816\3\2\2"+
		"\2\u0816\u0817\3\2\2\2\u0817\u0819\5\u0142\u00a2\2\u0818\u081a\5\u0144"+
		"\u00a3\2\u0819\u0818\3\2\2\2\u0819\u081a\3\2\2\2\u081a\u081c\3\2\2\2\u081b"+
		"\u081d\5\u0156\u00ac\2\u081c\u081b\3\2\2\2\u081c\u081d\3\2\2\2\u081d\u0829"+
		"\3\2\2\2\u081e\u0820\5\u0146\u00a4\2\u081f\u0821\5\2\2\2\u0820\u081f\3"+
		"\2\2\2\u0820\u0821\3\2\2\2\u0821\u0823\3\2\2\2\u0822\u0824\5\u00eex\2"+
		"\u0823\u0822\3\2\2\2\u0823\u0824\3\2\2\2\u0824\u0826\3\2\2\2\u0825\u0827"+
		"\5\u0156\u00ac\2\u0826\u0825\3\2\2\2\u0826\u0827\3\2\2\2\u0827\u0829\3"+
		"\2\2\2\u0828\u0810\3\2\2\2\u0828\u081e\3\2\2\2\u0829\u0141\3\2\2\2\u082a"+
		"\u082c\5$\23\2\u082b\u082a\3\2\2\2\u082b\u082c\3\2\2\2\u082c\u082d\3\2"+
		"\2\2\u082d\u082e\5\u013c\u009f\2\u082e\u0143\3\2\2\2\u082f\u0830\7.\2"+
		"\2\u0830\u0145\3\2\2\2\u0831\u0832\t\13\2\2\u0832\u0147\3\2\2\2\u0833"+
		"\u0835\5\u014a\u00a6\2\u0834\u0836\5\u0148\u00a5\2\u0835\u0834\3\2\2\2"+
		"\u0835\u0836\3\2\2\2\u0836\u083d\3\2\2\2\u0837\u0838\5\u0160\u00b1\2\u0838"+
		"\u083a\7\u0088\2\2\u0839\u083b\5\u0148\u00a5\2\u083a\u0839\3\2\2\2\u083a"+
		"\u083b\3\2\2\2\u083b\u083d\3\2\2\2\u083c\u0833\3\2\2\2\u083c\u0837\3\2"+
		"\2\2\u083d\u0149\3\2\2\2\u083e\u0840\5\b\5\2\u083f\u083e\3\2\2\2\u083f"+
		"\u0840\3\2\2\2\u0840\u0842\3\2\2\2\u0841\u0843\5\6\4\2\u0842\u0841\3\2"+
		"\2\2\u0842\u0843\3\2\2\2\u0843\u0845\3\2\2\2\u0844\u0846\5\u00eex\2\u0845"+
		"\u0844\3\2\2\2\u0845\u0846\3\2\2\2\u0846\u0848\3\2\2\2\u0847\u0849\5\u00a6"+
		"T\2\u0848\u0847\3\2\2\2\u0848\u0849\3\2\2\2\u0849\u084b\3\2\2\2\u084a"+
		"\u084c\5\u014c\u00a7\2\u084b\u084a\3\2\2\2\u084b\u084c\3\2\2\2\u084c\u084d"+
		"\3\2\2\2\u084d\u0855\7\u008a\2\2\u084e\u0855\5\u012e\u0098\2\u084f\u0855"+
		"\5\u00e6t\2\u0850\u0855\5\u009eP\2\u0851\u0855\5\u0174\u00bb\2\u0852\u0855"+
		"\5\u009aN\2\u0853\u0855\5\u00a0Q\2\u0854\u083f\3\2\2\2\u0854\u084e\3\2"+
		"\2\2\u0854\u084f\3\2\2\2\u0854\u0850\3\2\2\2\u0854\u0851\3\2\2\2\u0854"+
		"\u0852\3\2\2\2\u0854\u0853\3\2\2\2\u0855\u014b\3\2\2\2\u0856\u0857\b\u00a7"+
		"\1\2\u0857\u0858\5\u014e\u00a8\2\u0858\u085e\3\2\2\2\u0859\u085a\f\3\2"+
		"\2\u085a\u085b\7\u0084\2\2\u085b\u085d\5\u014e\u00a8\2\u085c\u0859\3\2"+
		"\2\2\u085d\u0860\3\2\2\2\u085e\u085c\3\2\2\2\u085e\u085f\3\2\2\2\u085f"+
		"\u014d\3\2\2\2\u0860\u085e\3\2\2\2\u0861\u0863\5\u0108\u0085\2\u0862\u0864"+
		"\5\u0150\u00a9\2\u0863\u0862\3\2\2\2\u0863\u0864\3\2\2\2\u0864\u0866\3"+
		"\2\2\2\u0865\u0867\5\u0154\u00ab\2\u0866\u0865\3\2\2\2\u0866\u0867\3\2"+
		"\2\2\u0867\u0875\3\2\2\2\u0868\u086a\5\u0108\u0085\2\u0869\u086b\5\u0134"+
		"\u009b\2\u086a\u0869\3\2\2\2\u086a\u086b\3\2\2\2\u086b\u0875\3\2\2\2\u086c"+
		"\u086e\7\u008e\2\2\u086d\u086c\3\2\2\2\u086d\u086e\3\2\2\2\u086e\u0870"+
		"\3\2\2\2\u086f\u0871\5\u00eex\2\u0870\u086f\3\2\2\2\u0870\u0871\3\2\2"+
		"\2\u0871\u0872\3\2\2\2\u0872\u0873\7\u0088\2\2\u0873\u0875\5x=\2\u0874"+
		"\u0861\3\2\2\2\u0874\u0868\3\2\2\2\u0874\u086d\3\2\2\2\u0875\u014f\3\2"+
		"\2\2\u0876\u0877\b\u00a9\1\2\u0877\u0878\5\u0152\u00aa\2\u0878\u087d\3"+
		"\2\2\2\u0879\u087a\f\3\2\2\u087a\u087c\5\u0152\u00aa\2\u087b\u0879\3\2"+
		"\2\2\u087c\u087f\3\2\2\2\u087d\u087b\3\2\2\2\u087d\u087e\3\2\2\2\u087e"+
		"\u0151\3\2\2\2\u087f\u087d\3\2\2\2\u0880\u0881\t\f\2\2\u0881\u0153\3\2"+
		"\2\2\u0882\u0883\7m\2\2\u0883\u0884\7\17\2\2\u0884\u0155\3\2\2\2\u0885"+
		"\u0886\7\u0088\2\2\u0886\u0887\5\u0158\u00ad\2\u0887\u0157\3\2\2\2\u0888"+
		"\u0889\b\u00ad\1\2\u0889\u088b\5\u015a\u00ae\2\u088a\u088c\7\u008d\2\2"+
		"\u088b\u088a\3\2\2\2\u088b\u088c\3\2\2\2\u088c\u0895\3\2\2\2\u088d\u088e"+
		"\f\3\2\2\u088e\u088f\7\u0084\2\2\u088f\u0891\5\u015a\u00ae\2\u0890\u0892"+
		"\7\u008d\2\2\u0891\u0890\3\2\2\2\u0891\u0892\3\2\2\2\u0892\u0894\3\2\2"+
		"\2\u0893\u088d\3\2\2\2\u0894\u0897\3\2\2\2\u0895\u0893\3\2\2\2\u0895\u0896"+
		"\3\2\2\2\u0896\u0159\3\2\2\2\u0897\u0895\3\2\2\2\u0898\u089a\5\u00eex"+
		"\2\u0899\u0898\3\2\2\2\u0899\u089a\3\2\2\2\u089a\u089b\3\2\2\2\u089b\u08ae"+
		"\5\u015e\u00b0\2\u089c\u089e\5\u00eex\2\u089d\u089c\3\2\2\2\u089d\u089e"+
		"\3\2\2\2\u089e\u089f\3\2\2\2\u089f\u08a1\7X\2\2\u08a0\u08a2\5\u0160\u00b1"+
		"\2\u08a1\u08a0\3\2\2\2\u08a1\u08a2\3\2\2\2\u08a2\u08a3\3\2\2\2\u08a3\u08ae"+
		"\5\u015e\u00b0\2\u08a4\u08a6\5\u00eex\2\u08a5\u08a4\3\2\2\2\u08a5\u08a6"+
		"\3\2\2\2\u08a6\u08a7\3\2\2\2\u08a7\u08a9\5\u0160\u00b1\2\u08a8\u08aa\7"+
		"X\2\2\u08a9\u08a8\3\2\2\2\u08a9\u08aa\3\2\2\2\u08aa\u08ab\3\2\2\2\u08ab"+
		"\u08ac\5\u015e\u00b0\2\u08ac\u08ae\3\2\2\2\u08ad\u0899\3\2\2\2\u08ad\u089d"+
		"\3\2\2\2\u08ad\u08a5\3\2\2\2\u08ae\u015b\3\2\2\2\u08af\u08b1\5$\23\2\u08b0"+
		"\u08af\3\2\2\2\u08b0\u08b1\3\2\2\2\u08b1\u08b2\3\2\2\2\u08b2\u08b5\5\u013c"+
		"\u009f\2\u08b3\u08b5\5\u00ba^\2\u08b4\u08b0\3\2\2\2\u08b4\u08b3\3\2\2"+
		"\2\u08b5\u015d\3\2\2\2\u08b6\u08b7\5\u015c\u00af\2\u08b7\u015f\3\2\2\2"+
		"\u08b8\u08b9\t\r\2\2\u08b9\u0161\3\2\2\2\u08ba\u08bb\7<\2\2\u08bb\u08bc"+
		"\5\u0164\u00b3\2\u08bc\u0163\3\2\2\2\u08bd\u08bf\5\u00b2Z\2\u08be\u08c0"+
		"\5\u0166\u00b4\2\u08bf\u08be\3\2\2\2\u08bf\u08c0\3\2\2\2\u08c0\u0165\3"+
		"\2\2\2\u08c1\u08c3\5\u0112\u008a\2\u08c2\u08c4\5\u0166\u00b4\2\u08c3\u08c2"+
		"\3\2\2\2\u08c3\u08c4\3\2\2\2\u08c4\u0167\3\2\2\2\u08c5\u08c6\7\u0088\2"+
		"\2\u08c6\u08c7\5\u016a\u00b6\2\u08c7\u0169\3\2\2\2\u08c8\u08ca\5\u016c"+
		"\u00b7\2\u08c9\u08cb\7\u008d\2\2\u08ca\u08c9\3\2\2\2\u08ca\u08cb\3\2\2"+
		"\2\u08cb\u08d4\3\2\2\2\u08cc\u08ce\5\u016c\u00b7\2\u08cd\u08cf\7\u008d"+
		"\2\2\u08ce\u08cd\3\2\2\2\u08ce\u08cf\3\2\2\2\u08cf\u08d0\3\2\2\2\u08d0"+
		"\u08d1\7\u0084\2\2\u08d1\u08d2\5\u016a\u00b6\2\u08d2\u08d4\3\2\2\2\u08d3"+
		"\u08c8\3\2\2\2\u08d3\u08cc\3\2\2\2\u08d4\u016b\3\2\2\2\u08d5\u08d6\5\u016e"+
		"\u00b8\2\u08d6\u08d8\7]\2\2\u08d7\u08d9\5> \2\u08d8\u08d7\3\2\2\2\u08d8"+
		"\u08d9\3\2\2\2\u08d9\u08da\3\2\2\2\u08da\u08db\7^\2\2\u08db\u08e0\3\2"+
		"\2\2\u08dc\u08dd\5\u016e\u00b8\2\u08dd\u08de\5\u013a\u009e\2\u08de\u08e0"+
		"\3\2\2\2\u08df\u08d5\3\2\2\2\u08df\u08dc\3\2\2\2\u08e0\u016d\3\2\2\2\u08e1"+
		"\u08e4\5\u015c\u00af\2\u08e2\u08e4\7\u008e\2\2\u08e3\u08e1\3\2\2\2\u08e3"+
		"\u08e2\3\2\2\2\u08e4\u016f\3\2\2\2\u08e5\u08e6\7<\2\2\u08e6\u08e7\5\u01a0"+
		"\u00d1\2\u08e7\u0171\3\2\2\2\u08e8\u08e9\7<\2\2\u08e9\u08ea\7\u0097\2"+
		"\2\u08ea\u08ee\7\u008e\2\2\u08eb\u08ec\7<\2\2\u08ec\u08ee\7\u009a\2\2"+
		"\u08ed\u08e8\3\2\2\2\u08ed\u08eb\3\2\2\2\u08ee\u0173\3\2\2\2\u08ef\u08f0"+
		"\7L\2\2\u08f0\u08f1\7n\2\2\u08f1\u08f2\5\u0176\u00bc\2\u08f2\u08f3\7o"+
		"\2\2\u08f3\u08f4\5\u0096L\2\u08f4\u0175\3\2\2\2\u08f5\u08f6\b\u00bc\1"+
		"\2\u08f6\u08f7\5\u0178\u00bd\2\u08f7\u08fd\3\2\2\2\u08f8\u08f9\f\3\2\2"+
		"\u08f9\u08fa\7\u0084\2\2\u08fa\u08fc\5\u0178\u00bd\2\u08fb\u08f8\3\2\2"+
		"\2\u08fc\u08ff\3\2\2\2\u08fd\u08fb\3\2\2\2\u08fd\u08fe\3\2\2\2\u08fe\u0177"+
		"\3\2\2\2\u08ff\u08fd\3\2\2\2\u0900\u0903\5\u017a\u00be\2\u0901\u0903\5"+
		"\u012c\u0097\2\u0902\u0900\3\2\2\2\u0902\u0901\3\2\2\2\u0903\u0179\3\2"+
		"\2\2\u0904\u0906\7\35\2\2\u0905\u0907\7\u008d\2\2\u0906\u0905\3\2\2\2"+
		"\u0906\u0907\3\2\2\2\u0907\u0909\3\2\2\2\u0908\u090a\7\u008e\2\2\u0909"+
		"\u0908\3\2\2\2\u0909\u090a\3\2\2\2\u090a\u0935\3\2\2\2\u090b\u090d\7\35"+
		"\2\2\u090c\u090e\7\u008e\2\2\u090d\u090c\3\2\2\2\u090d\u090e\3\2\2\2\u090e"+
		"\u090f\3\2\2\2\u090f\u0910\7m\2\2\u0910\u0935\5\u011c\u008f\2\u0911\u0913"+
		"\7T\2\2\u0912\u0914\7\u008d\2\2\u0913\u0912\3\2\2\2\u0913\u0914\3\2\2"+
		"\2\u0914\u0916\3\2\2\2\u0915\u0917\7\u008e\2\2\u0916\u0915\3\2\2\2\u0916"+
		"\u0917\3\2\2\2\u0917\u0935\3\2\2\2\u0918\u091a\7T\2\2\u0919\u091b\7\u008e"+
		"\2\2\u091a\u0919\3\2\2\2\u091a\u091b\3\2\2\2\u091b\u091c\3\2\2\2\u091c"+
		"\u091d\7m\2\2\u091d\u0935\5\u011c\u008f\2\u091e\u091f\7L\2\2\u091f\u0920"+
		"\7n\2\2\u0920\u0921\5\u0176\u00bc\2\u0921\u0922\7o\2\2\u0922\u0924\7\35"+
		"\2\2\u0923\u0925\7\u008d\2\2\u0924\u0923\3\2\2\2\u0924\u0925\3\2\2\2\u0925"+
		"\u0927\3\2\2\2\u0926\u0928\7\u008e\2\2\u0927\u0926\3\2\2\2\u0927\u0928"+
		"\3\2\2\2\u0928\u0935\3\2\2\2\u0929\u092a\7L\2\2\u092a\u092b\7n\2\2\u092b"+
		"\u092c\5\u0176\u00bc\2\u092c\u092d\7o\2\2\u092d\u092f\7\35\2\2\u092e\u0930"+
		"\7\u008e\2\2\u092f\u092e\3\2\2\2\u092f\u0930\3\2\2\2\u0930\u0931\3\2\2"+
		"\2\u0931\u0932\7m\2\2\u0932\u0933\5\36\20\2\u0933\u0935\3\2\2\2\u0934"+
		"\u0904\3\2\2\2\u0934\u090b\3\2\2\2\u0934\u0911\3\2\2\2\u0934\u0918\3\2"+
		"\2\2\u0934\u091e\3\2\2\2\u0934\u0929\3\2\2\2\u0935\u017b\3\2\2\2\u0936"+
		"\u0937\5\u0180\u00c1\2\u0937\u0939\7n\2\2\u0938\u093a\5\u0182\u00c2\2"+
		"\u0939\u0938\3\2\2\2\u0939\u093a\3\2\2\2\u093a\u093b\3\2\2\2\u093b\u093c"+
		"\7o\2\2\u093c\u017d\3\2\2\2\u093d\u094d\5\u017c\u00bf\2\u093e\u093f\5"+
		"\u0170\u00b9\2\u093f\u0941\7n\2\2\u0940\u0942\5\u0182\u00c2\2\u0941\u0940"+
		"\3\2\2\2\u0941\u0942\3\2\2\2\u0942\u0943\3\2\2\2\u0943\u0944\7o\2\2\u0944"+
		"\u094d\3\2\2\2\u0945\u0946\5\u0172\u00ba\2\u0946\u0948\7n\2\2\u0947\u0949"+
		"\5\u0182\u00c2\2\u0948\u0947\3\2\2\2\u0948\u0949\3\2\2\2\u0949\u094a\3"+
		"\2\2\2\u094a\u094b\7o\2\2\u094b\u094d\3\2\2\2\u094c\u093d\3\2\2\2\u094c"+
		"\u093e\3\2\2\2\u094c\u0945\3\2\2\2\u094d\u017f\3\2\2\2\u094e\u094f\7\u008e"+
		"\2\2\u094f\u0181\3\2\2\2\u0950\u0951\b\u00c2\1\2\u0951\u0953\5\u0184\u00c3"+
		"\2\u0952\u0954\7\u008d\2\2\u0953\u0952\3\2\2\2\u0953\u0954\3\2\2\2\u0954"+
		"\u095d\3\2\2\2\u0955\u0956\f\3\2\2\u0956\u0957\7\u0084\2\2\u0957\u0959"+
		"\5\u0184\u00c3\2\u0958\u095a\7\u008d\2\2\u0959\u0958\3\2\2\2\u0959\u095a"+
		"\3\2\2\2\u095a\u095c\3\2\2\2\u095b\u0955\3\2\2\2\u095c\u095f\3\2\2\2\u095d"+
		"\u095b\3\2\2\2\u095d\u095e\3\2\2\2\u095e\u0183\3\2\2\2\u095f\u095d\3\2"+
		"\2\2\u0960\u0964\5\u011c\u008f\2\u0961\u0964\5x=\2\u0962\u0964\5\36\20"+
		"\2\u0963\u0960\3\2\2\2\u0963\u0961\3\2\2\2\u0963\u0962\3\2\2\2\u0964\u0185"+
		"\3\2\2\2\u0965\u0966\7T\2\2\u0966\u0967\5$\23\2\u0967\u0968\7\u008e\2"+
		"\2\u0968\u0971\3\2\2\2\u0969\u096a\7T\2\2\u096a\u096c\5$\23\2\u096b\u096d"+
		"\7L\2\2\u096c\u096b\3\2\2\2\u096c\u096d\3\2\2\2\u096d\u096e\3\2\2\2\u096e"+
		"\u096f\5\u017c\u00bf\2\u096f\u0971\3\2\2\2\u0970\u0965\3\2\2\2\u0970\u0969"+
		"\3\2\2\2\u0971\u0187\3\2\2\2\u0972\u0974\7,\2\2\u0973\u0972\3\2\2\2\u0973"+
		"\u0974\3\2\2\2\u0974\u0975\3\2\2\2\u0975\u0976\7L\2\2\u0976\u0977\5\u0096"+
		"L\2\u0977\u0189\3\2\2\2\u0978\u0979\7L\2\2\u0979\u097a\7n\2\2\u097a\u097b"+
		"\7o\2\2\u097b\u097c\5\u0096L\2\u097c\u018b\3\2\2\2\u097d\u097e\7Q\2\2"+
		"\u097e\u097f\5\u0080A\2\u097f\u0980\5\u0190\u00c9\2\u0980\u018d\3\2\2"+
		"\2\u0981\u0983\7Q\2\2\u0982\u0984\5\u0168\u00b5\2\u0983\u0982\3\2\2\2"+
		"\u0983\u0984\3\2\2\2\u0984\u0985\3\2\2\2\u0985\u0986\5\u0080A\2\u0986"+
		"\u0987\5\u0190\u00c9\2\u0987\u018f\3\2\2\2\u0988\u098a\5\u0192\u00ca\2"+
		"\u0989\u098b";
	private static final String _serializedATNSegment1 =
		"\5\u0190\u00c9\2\u098a\u0989\3\2\2\2\u098a\u098b\3\2\2\2\u098b\u0191\3"+
		"\2\2\2\u098c\u098d\7\31\2\2\u098d\u098e\7]\2\2\u098e\u098f\5\u0194\u00cb"+
		"\2\u098f\u0990\7^\2\2\u0990\u0991\5\u0080A\2\u0991\u0193\3\2\2\2\u0992"+
		"\u0994\5\u00eex\2\u0993\u0992\3\2\2\2\u0993\u0994\3\2\2\2\u0994\u0995"+
		"\3\2\2\2\u0995\u0996\5\u00b2Z\2\u0996\u0997\5\u0108\u0085\2\u0997\u09a1"+
		"\3\2\2\2\u0998\u099a\5\u00eex\2\u0999\u0998\3\2\2\2\u0999\u099a\3\2\2"+
		"\2\u099a\u099b\3\2\2\2\u099b\u099d\5\u00b2Z\2\u099c\u099e\5\u011e\u0090"+
		"\2\u099d\u099c\3\2\2\2\u099d\u099e\3\2\2\2\u099e\u09a1\3\2\2\2\u099f\u09a1"+
		"\7\u008d\2\2\u09a0\u0993\3\2\2\2\u09a0\u0999\3\2\2\2\u09a0\u099f\3\2\2"+
		"\2\u09a1\u0195\3\2\2\2\u09a2\u09a4\7O\2\2\u09a3\u09a5\5r:\2\u09a4\u09a3"+
		"\3\2\2\2\u09a4\u09a5\3\2\2\2\u09a5\u0197\3\2\2\2\u09a6\u09a9\5\u019a\u00ce"+
		"\2\u09a7\u09a9\5\u019e\u00d0\2\u09a8\u09a6\3\2\2\2\u09a8\u09a7\3\2\2\2"+
		"\u09a9\u0199\3\2\2\2\u09aa\u09ab\7O\2\2\u09ab\u09ad\7]\2\2\u09ac\u09ae"+
		"\5\u019c\u00cf\2\u09ad\u09ac\3\2\2\2\u09ad\u09ae\3\2\2\2\u09ae\u09af\3"+
		"\2\2\2\u09af\u09b0\7^\2\2\u09b0\u019b\3\2\2\2\u09b1\u09b2\b\u00cf\1\2"+
		"\u09b2\u09b4\5\u011c\u008f\2\u09b3\u09b5\7\u008d\2\2\u09b4\u09b3\3\2\2"+
		"\2\u09b4\u09b5\3\2\2\2\u09b5\u09be\3\2\2\2\u09b6\u09b7\f\3\2\2\u09b7\u09b8"+
		"\7\u0084\2\2\u09b8\u09ba\5\u011c\u008f\2\u09b9\u09bb\7\u008d\2\2\u09ba"+
		"\u09b9\3\2\2\2\u09ba\u09bb\3\2\2\2\u09bb\u09bd\3\2\2\2\u09bc\u09b6\3\2"+
		"\2\2\u09bd\u09c0\3\2\2\2\u09be\u09bc\3\2\2\2\u09be\u09bf\3\2\2\2\u09bf"+
		"\u019d\3\2\2\2\u09c0\u09be\3\2\2\2\u09c1\u09c2\7:\2\2\u09c2\u09c3\7]\2"+
		"\2\u09c3\u09c4\5x=\2\u09c4\u09c5\7^\2\2\u09c5\u09c8\3\2\2\2\u09c6\u09c8"+
		"\7:\2\2\u09c7\u09c1\3\2\2\2\u09c7\u09c6\3\2\2\2\u09c8\u019f\3\2\2\2\u09c9"+
		"\u09fd\79\2\2\u09ca\u09fd\7$\2\2\u09cb\u09cc\79\2\2\u09cc\u09cd\7_\2\2"+
		"\u09cd\u09fd\7`\2\2\u09ce\u09cf\7$\2\2\u09cf\u09d0\7_\2\2\u09d0\u09fd"+
		"\7`\2\2\u09d1\u09fd\7c\2\2\u09d2\u09fd\7d\2\2\u09d3\u09fd\7e\2\2\u09d4"+
		"\u09fd\7f\2\2\u09d5\u09fd\7g\2\2\u09d6\u09fd\7h\2\2\u09d7\u09fd\7i\2\2"+
		"\u09d8\u09fd\7j\2\2\u09d9\u09fd\7k\2\2\u09da\u09fd\7\t\2\2\u09db\u09fd"+
		"\7\n\2\2\u09dc\u09fd\7m\2\2\u09dd\u09fd\7n\2\2\u09de\u09fd\7o\2\2\u09df"+
		"\u09fd\7p\2\2\u09e0\u09fd\7q\2\2\u09e1\u09fd\7r\2\2\u09e2\u09fd\7s\2\2"+
		"\u09e3\u09fd\7t\2\2\u09e4\u09fd\7u\2\2\u09e5\u09fd\7v\2\2\u09e6\u09fd"+
		"\7w\2\2\u09e7\u09fd\7x\2\2\u09e8\u09fd\7y\2\2\u09e9\u09fd\7{\2\2\u09ea"+
		"\u09fd\7z\2\2\u09eb\u09fd\7|\2\2\u09ec\u09fd\7}\2\2\u09ed\u09fd\7~\2\2"+
		"\u09ee\u09fd\7\177\2\2\u09ef\u09fd\7\13\2\2\u09f0\u09fd\7\f\2\2\u09f1"+
		"\u09fd\7\r\2\2\u09f2\u09fd\7\16\2\2\u09f3\u09fd\7\u0082\2\2\u09f4\u09fd"+
		"\7\u0083\2\2\u09f5\u09fd\7\u0084\2\2\u09f6\u09fd\7\u0085\2\2\u09f7\u09fd"+
		"\7\u0086\2\2\u09f8\u09f9\7]\2\2\u09f9\u09fd\7^\2\2\u09fa\u09fb\7_\2\2"+
		"\u09fb\u09fd\7`\2\2\u09fc\u09c9\3\2\2\2\u09fc\u09ca\3\2\2\2\u09fc\u09cb"+
		"\3\2\2\2\u09fc\u09ce\3\2\2\2\u09fc\u09d1\3\2\2\2\u09fc\u09d2\3\2\2\2\u09fc"+
		"\u09d3\3\2\2\2\u09fc\u09d4\3\2\2\2\u09fc\u09d5\3\2\2\2\u09fc\u09d6\3\2"+
		"\2\2\u09fc\u09d7\3\2\2\2\u09fc\u09d8\3\2\2\2\u09fc\u09d9\3\2\2\2\u09fc"+
		"\u09da\3\2\2\2\u09fc\u09db\3\2\2\2\u09fc\u09dc\3\2\2\2\u09fc\u09dd\3\2"+
		"\2\2\u09fc\u09de\3\2\2\2\u09fc\u09df\3\2\2\2\u09fc\u09e0\3\2\2\2\u09fc"+
		"\u09e1\3\2\2\2\u09fc\u09e2\3\2\2\2\u09fc\u09e3\3\2\2\2\u09fc\u09e4\3\2"+
		"\2\2\u09fc\u09e5\3\2\2\2\u09fc\u09e6\3\2\2\2\u09fc\u09e7\3\2\2\2\u09fc"+
		"\u09e8\3\2\2\2\u09fc\u09e9\3\2\2\2\u09fc\u09ea\3\2\2\2\u09fc\u09eb\3\2"+
		"\2\2\u09fc\u09ec\3\2\2\2\u09fc\u09ed\3\2\2\2\u09fc\u09ee\3\2\2\2\u09fc"+
		"\u09ef\3\2\2\2\u09fc\u09f0\3\2\2\2\u09fc\u09f1\3\2\2\2\u09fc\u09f2\3\2"+
		"\2\2\u09fc\u09f3\3\2\2\2\u09fc\u09f4\3\2\2\2\u09fc\u09f5\3\2\2\2\u09fc"+
		"\u09f6\3\2\2\2\u09fc\u09f7\3\2\2\2\u09fc\u09f8\3\2\2\2\u09fc\u09fa\3\2"+
		"\2\2\u09fd\u01a1\3\2\2\2\u09fe\u0a06\7\u008f\2\2\u09ff\u0a06\7\u0095\2"+
		"\2\u0a00\u0a06\7\u0096\2\2\u0a01\u0a06\7\u0097\2\2\u0a02\u0a06\5\u01a4"+
		"\u00d3\2\u0a03\u0a06\5\u01a6\u00d4\2\u0a04\u0a06\5\u01a8\u00d5\2\u0a05"+
		"\u09fe\3\2\2\2\u0a05\u09ff\3\2\2\2\u0a05\u0a00\3\2\2\2\u0a05\u0a01\3\2"+
		"\2\2\u0a05\u0a02\3\2\2\2\u0a05\u0a03\3\2\2\2\u0a05\u0a04\3\2\2\2\u0a06"+
		"\u01a3\3\2\2\2\u0a07\u0a08\t\16\2\2\u0a08\u01a5\3\2\2\2\u0a09\u0a0a\7"+
		";\2\2\u0a0a\u01a7\3\2\2\2\u0a0b\u0a0c\t\17\2\2\u0a0c\u01a9\3\2\2\2\u014c"+
		"\u01bd\u01c9\u01ce\u01d4\u01dd\u01e9\u01ed\u01f8\u01fc\u020b\u0212\u0217"+
		"\u0219\u021e\u0224\u022e\u0235\u023b\u023f\u0244\u024a\u0251\u0257\u025a"+
		"\u025d\u0260\u0267\u026e\u02a2\u02b1\u02b7\u02bd\u02ca\u02cc\u02d6\u02e5"+
		"\u02eb\u0309\u030e\u0312\u0316\u0319\u031d\u0323\u0325\u032d\u0331\u0334"+
		"\u033b\u0342\u0346\u034b\u034f\u0352\u0357\u035d\u036a\u0375\u0377\u0386"+
		"\u0388\u0394\u0396\u03a2\u03b6\u03b8\u03c4\u03c6\u03d1\u03dc\u03e7\u03f3"+
		"\u03f5\u0401\u0403\u040d\u0415\u0421\u0428\u042c\u0430\u0434\u0438\u043d"+
		"\u0440\u0443\u0449\u0451\u0456\u0459\u045f\u046a\u0481\u0485\u048d\u0493"+
		"\u04a7\u04ab\u04b8\u04bc\u04bf\u04c6\u04ce\u04d8\u04e3\u04ef\u04f9\u04fe"+
		"\u0505\u0508\u050d\u0512\u0527\u052b\u0530\u053b\u0541\u0545\u054a\u054e"+
		"\u0553\u0556\u056c\u0572\u057d\u0581\u0584\u058e\u0594\u0597\u059e\u05a8"+
		"\u05ac\u05af\u05b2\u05b6\u05bb\u05bd\u05c1\u05c5\u05ce\u05db\u05e3\u05e9"+
		"\u05ef\u05f3\u05f6\u05ff\u0608\u0610\u061b\u0621\u062c\u062f\u0634\u0643"+
		"\u0649\u0652\u065c\u0662\u066a\u066e\u0672\u0677\u067c\u0683\u0685\u068a"+
		"\u068e\u069c\u06a2\u06b4\u06b6\u06c0\u06c5\u06cc\u06d2\u06d7\u06dd\u06e4"+
		"\u06e8\u06ea\u06ec\u06f3\u06f6\u06f9\u06fc\u0701\u0705\u0708\u070c\u0710"+
		"\u0715\u0718\u071a\u071e\u0725\u072b\u072f\u0735\u073a\u073c\u0742\u0746"+
		"\u074c\u0753\u0757\u0759\u075b\u0762\u076c\u0770\u0772\u0774\u0778\u077b"+
		"\u0781\u078b\u078f\u0792\u0798\u079b\u07a3\u07a6\u07aa\u07ad\u07b0\u07b4"+
		"\u07b9\u07bc\u07bf\u07c3\u07c8\u07d2\u07d9\u07de\u07e2\u07e7\u07ed\u07f1"+
		"\u07f7\u07fd\u0801\u0804\u0809\u080c\u0812\u0815\u0819\u081c\u0820\u0823"+
		"\u0826\u0828\u082b\u0835\u083a\u083c\u083f\u0842\u0845\u0848\u084b\u0854"+
		"\u085e\u0863\u0866\u086a\u086d\u0870\u0874\u087d\u088b\u0891\u0895\u0899"+
		"\u089d\u08a1\u08a5\u08a9\u08ad\u08b0\u08b4\u08bf\u08c3\u08ca\u08ce\u08d3"+
		"\u08d8\u08df\u08e3\u08ed\u08fd\u0902\u0906\u0909\u090d\u0913\u0916\u091a"+
		"\u0924\u0927\u092f\u0934\u0939\u0941\u0948\u094c\u0953\u0959\u095d\u0963"+
		"\u096c\u0970\u0973\u0983\u098a\u0993\u0999\u099d\u09a0\u09a4\u09a8\u09ad"+
		"\u09b4\u09ba\u09be\u09c7\u09fc\u0a05";
	public static final String _serializedATN = Utils.join(
		new String[] {
			_serializedATNSegment0,
			_serializedATNSegment1
		},
		""
	);
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}