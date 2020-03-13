// Generated from ./grammar/CPP14.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CPP14Listener } from "./CPP14Listener";

export class CPP14Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly MultiLineMacro = 14;
	public static readonly Directive = 15;
	public static readonly Alignas = 16;
	public static readonly Alignof = 17;
	public static readonly Asm = 18;
	public static readonly Auto = 19;
	public static readonly Bool = 20;
	public static readonly Break = 21;
	public static readonly Case = 22;
	public static readonly Catch = 23;
	public static readonly Char = 24;
	public static readonly Char16 = 25;
	public static readonly Char32 = 26;
	public static readonly Class = 27;
	public static readonly Const = 28;
	public static readonly Constexpr = 29;
	public static readonly Const_cast = 30;
	public static readonly Continue = 31;
	public static readonly Decltype = 32;
	public static readonly Default = 33;
	public static readonly Delete = 34;
	public static readonly Do = 35;
	public static readonly Double = 36;
	public static readonly Dynamic_cast = 37;
	public static readonly Else = 38;
	public static readonly Enum = 39;
	public static readonly Explicit = 40;
	public static readonly Export = 41;
	public static readonly Extern = 42;
	public static readonly False = 43;
	public static readonly Final = 44;
	public static readonly Float = 45;
	public static readonly For = 46;
	public static readonly Friend = 47;
	public static readonly Goto = 48;
	public static readonly If = 49;
	public static readonly Inline = 50;
	public static readonly Int = 51;
	public static readonly Long = 52;
	public static readonly Mutable = 53;
	public static readonly Namespace = 54;
	public static readonly New = 55;
	public static readonly Noexcept = 56;
	public static readonly Nullptr = 57;
	public static readonly Operator = 58;
	public static readonly Override = 59;
	public static readonly Private = 60;
	public static readonly Protected = 61;
	public static readonly Public = 62;
	public static readonly Register = 63;
	public static readonly Reinterpret_cast = 64;
	public static readonly Return = 65;
	public static readonly Short = 66;
	public static readonly Signed = 67;
	public static readonly Sizeof = 68;
	public static readonly Static = 69;
	public static readonly Static_assert = 70;
	public static readonly Static_cast = 71;
	public static readonly Struct = 72;
	public static readonly Switch = 73;
	public static readonly Template = 74;
	public static readonly This = 75;
	public static readonly Thread_local = 76;
	public static readonly Throw = 77;
	public static readonly True = 78;
	public static readonly Try = 79;
	public static readonly Typedef = 80;
	public static readonly Typeid_ = 81;
	public static readonly Typename_ = 82;
	public static readonly Union = 83;
	public static readonly Unsigned = 84;
	public static readonly Using = 85;
	public static readonly Virtual = 86;
	public static readonly Void = 87;
	public static readonly Volatile = 88;
	public static readonly Wchar = 89;
	public static readonly While = 90;
	public static readonly LeftParen = 91;
	public static readonly RightParen = 92;
	public static readonly LeftBracket = 93;
	public static readonly RightBracket = 94;
	public static readonly LeftBrace = 95;
	public static readonly RightBrace = 96;
	public static readonly Plus = 97;
	public static readonly Minus = 98;
	public static readonly Star = 99;
	public static readonly Div = 100;
	public static readonly Mod = 101;
	public static readonly Caret = 102;
	public static readonly And = 103;
	public static readonly Or = 104;
	public static readonly Tilde = 105;
	public static readonly Not = 106;
	public static readonly Assign = 107;
	public static readonly Less = 108;
	public static readonly Greater = 109;
	public static readonly PlusAssign = 110;
	public static readonly MinusAssign = 111;
	public static readonly StarAssign = 112;
	public static readonly DivAssign = 113;
	public static readonly ModAssign = 114;
	public static readonly XorAssign = 115;
	public static readonly AndAssign = 116;
	public static readonly OrAssign = 117;
	public static readonly LeftShift = 118;
	public static readonly RightShift = 119;
	public static readonly LeftShiftAssign = 120;
	public static readonly RightShiftAssign = 121;
	public static readonly Equal = 122;
	public static readonly NotEqual = 123;
	public static readonly LessEqual = 124;
	public static readonly GreaterEqual = 125;
	public static readonly AndAnd = 126;
	public static readonly OrOr = 127;
	public static readonly PlusPlus = 128;
	public static readonly MinusMinus = 129;
	public static readonly Comma = 130;
	public static readonly ArrowStar = 131;
	public static readonly Arrow = 132;
	public static readonly Question = 133;
	public static readonly Colon = 134;
	public static readonly Doublecolon = 135;
	public static readonly Semi = 136;
	public static readonly Dot = 137;
	public static readonly DotStar = 138;
	public static readonly Ellipsis = 139;
	public static readonly Identifier = 140;
	public static readonly Integerliteral = 141;
	public static readonly Decimalliteral = 142;
	public static readonly Octalliteral = 143;
	public static readonly Hexadecimalliteral = 144;
	public static readonly Binaryliteral = 145;
	public static readonly Integersuffix = 146;
	public static readonly Characterliteral = 147;
	public static readonly Floatingliteral = 148;
	public static readonly Stringliteral = 149;
	public static readonly Userdefinedintegerliteral = 150;
	public static readonly Userdefinedfloatingliteral = 151;
	public static readonly Userdefinedstringliteral = 152;
	public static readonly Userdefinedcharacterliteral = 153;
	public static readonly Whitespace = 154;
	public static readonly Newline = 155;
	public static readonly BlockComment = 156;
	public static readonly LineComment = 157;
	public static readonly RULE_gameapitag = 0;
	public static readonly RULE_uclass = 1;
	public static readonly RULE_ufunction = 2;
	public static readonly RULE_uproperty = 3;
	public static readonly RULE_uparam = 4;
	public static readonly RULE_generatedbody = 5;
	public static readonly RULE_ueannotationlist = 6;
	public static readonly RULE_ueannotationlistentries = 7;
	public static readonly RULE_ueannotation = 8;
	public static readonly RULE_ueannotationvalue = 9;
	public static readonly RULE_ueannotationname = 10;
	public static readonly RULE_uekeyvalueannotation = 11;
	public static readonly RULE_translationunit = 12;
	public static readonly RULE_primaryexpression = 13;
	public static readonly RULE_idexpression = 14;
	public static readonly RULE_unqualifiedid = 15;
	public static readonly RULE_qualifiedid = 16;
	public static readonly RULE_nestednamespecifier = 17;
	public static readonly RULE_lambdaexpression = 18;
	public static readonly RULE_lambdaintroducer = 19;
	public static readonly RULE_lambdacapture = 20;
	public static readonly RULE_capturedefault = 21;
	public static readonly RULE_capturelist = 22;
	public static readonly RULE_capture = 23;
	public static readonly RULE_simplecapture = 24;
	public static readonly RULE_initcapture = 25;
	public static readonly RULE_lambdadeclarator = 26;
	public static readonly RULE_postfixexpression = 27;
	public static readonly RULE_typeidofexpr = 28;
	public static readonly RULE_typeidofthetypeid = 29;
	public static readonly RULE_expressionlist = 30;
	public static readonly RULE_pseudodestructorname = 31;
	public static readonly RULE_unaryexpression = 32;
	public static readonly RULE_unaryoperator = 33;
	public static readonly RULE_newexpression = 34;
	public static readonly RULE_newplacement = 35;
	public static readonly RULE_newtypeid = 36;
	public static readonly RULE_newdeclarator = 37;
	public static readonly RULE_noptrnewdeclarator = 38;
	public static readonly RULE_newinitializer = 39;
	public static readonly RULE_deleteexpression = 40;
	public static readonly RULE_noexceptexpression = 41;
	public static readonly RULE_castexpression = 42;
	public static readonly RULE_pmexpression = 43;
	public static readonly RULE_multiplicativeexpression = 44;
	public static readonly RULE_additiveexpression = 45;
	public static readonly RULE_shiftexpression = 46;
	public static readonly RULE_shiftoperator = 47;
	public static readonly RULE_relationalexpression = 48;
	public static readonly RULE_equalityexpression = 49;
	public static readonly RULE_andexpression = 50;
	public static readonly RULE_exclusiveorexpression = 51;
	public static readonly RULE_inclusiveorexpression = 52;
	public static readonly RULE_logicalandexpression = 53;
	public static readonly RULE_logicalorexpression = 54;
	public static readonly RULE_conditionalexpression = 55;
	public static readonly RULE_assignmentexpression = 56;
	public static readonly RULE_assignmentoperator = 57;
	public static readonly RULE_expression = 58;
	public static readonly RULE_constantexpression = 59;
	public static readonly RULE_statement = 60;
	public static readonly RULE_labeledstatement = 61;
	public static readonly RULE_expressionstatement = 62;
	public static readonly RULE_compoundstatement = 63;
	public static readonly RULE_statementseq = 64;
	public static readonly RULE_selectionstatement = 65;
	public static readonly RULE_condition = 66;
	public static readonly RULE_iterationstatement = 67;
	public static readonly RULE_forinitstatement = 68;
	public static readonly RULE_forrangedeclaration = 69;
	public static readonly RULE_forrangeinitializer = 70;
	public static readonly RULE_jumpstatement = 71;
	public static readonly RULE_declarationstatement = 72;
	public static readonly RULE_declarationseq = 73;
	public static readonly RULE_declaration = 74;
	public static readonly RULE_blockdeclaration = 75;
	public static readonly RULE_aliasdeclaration = 76;
	public static readonly RULE_simpledeclaration = 77;
	public static readonly RULE_static_assertdeclaration = 78;
	public static readonly RULE_emptydeclaration = 79;
	public static readonly RULE_attributedeclaration = 80;
	public static readonly RULE_declspecifier = 81;
	public static readonly RULE_declspecifierseq = 82;
	public static readonly RULE_storageclassspecifier = 83;
	public static readonly RULE_functionspecifier = 84;
	public static readonly RULE_typedefname = 85;
	public static readonly RULE_typespecifier = 86;
	public static readonly RULE_trailingtypespecifier = 87;
	public static readonly RULE_typespecifierseq = 88;
	public static readonly RULE_trailingtypespecifierseq = 89;
	public static readonly RULE_simpletypespecifier = 90;
	public static readonly RULE_thetypename = 91;
	public static readonly RULE_decltypespecifier = 92;
	public static readonly RULE_elaboratedtypespecifier = 93;
	public static readonly RULE_enumname = 94;
	public static readonly RULE_enumspecifier = 95;
	public static readonly RULE_enumhead = 96;
	public static readonly RULE_opaqueenumdeclaration = 97;
	public static readonly RULE_enumkey = 98;
	public static readonly RULE_enumbase = 99;
	public static readonly RULE_enumeratorlist = 100;
	public static readonly RULE_enumeratordefinition = 101;
	public static readonly RULE_enumerator = 102;
	public static readonly RULE_namespacename = 103;
	public static readonly RULE_originalnamespacename = 104;
	public static readonly RULE_namespacedefinition = 105;
	public static readonly RULE_namednamespacedefinition = 106;
	public static readonly RULE_originalnamespacedefinition = 107;
	public static readonly RULE_extensionnamespacedefinition = 108;
	public static readonly RULE_unnamednamespacedefinition = 109;
	public static readonly RULE_namespacebody = 110;
	public static readonly RULE_namespacealias = 111;
	public static readonly RULE_namespacealiasdefinition = 112;
	public static readonly RULE_qualifiednamespacespecifier = 113;
	public static readonly RULE_usingdeclaration = 114;
	public static readonly RULE_usingdirective = 115;
	public static readonly RULE_asmdefinition = 116;
	public static readonly RULE_linkagespecification = 117;
	public static readonly RULE_attributespecifierseq = 118;
	public static readonly RULE_attributespecifier = 119;
	public static readonly RULE_alignmentspecifier = 120;
	public static readonly RULE_attributelist = 121;
	public static readonly RULE_attribute = 122;
	public static readonly RULE_attributetoken = 123;
	public static readonly RULE_attributescopedtoken = 124;
	public static readonly RULE_attributenamespace = 125;
	public static readonly RULE_attributeargumentclause = 126;
	public static readonly RULE_balancedtokenseq = 127;
	public static readonly RULE_balancedtoken = 128;
	public static readonly RULE_initdeclaratorlist = 129;
	public static readonly RULE_initdeclarator = 130;
	public static readonly RULE_declarator = 131;
	public static readonly RULE_ptrdeclarator = 132;
	public static readonly RULE_noptrdeclarator = 133;
	public static readonly RULE_parametersandqualifiers = 134;
	public static readonly RULE_trailingreturntype = 135;
	public static readonly RULE_ptroperator = 136;
	public static readonly RULE_cvqualifierseq = 137;
	public static readonly RULE_cvqualifier = 138;
	public static readonly RULE_refqualifier = 139;
	public static readonly RULE_declaratorid = 140;
	public static readonly RULE_thetypeid = 141;
	public static readonly RULE_abstractdeclarator = 142;
	public static readonly RULE_ptrabstractdeclarator = 143;
	public static readonly RULE_noptrabstractdeclarator = 144;
	public static readonly RULE_abstractpackdeclarator = 145;
	public static readonly RULE_noptrabstractpackdeclarator = 146;
	public static readonly RULE_parameterdeclarationclause = 147;
	public static readonly RULE_parameterdeclarationlist = 148;
	public static readonly RULE_parameterdeclaration = 149;
	public static readonly RULE_functiondefinition = 150;
	public static readonly RULE_functionbody = 151;
	public static readonly RULE_initializer = 152;
	public static readonly RULE_braceorequalinitializer = 153;
	public static readonly RULE_initializerclause = 154;
	public static readonly RULE_initializerlist = 155;
	public static readonly RULE_bracedinitlist = 156;
	public static readonly RULE_classname = 157;
	public static readonly RULE_classspecifier = 158;
	public static readonly RULE_classhead = 159;
	public static readonly RULE_classheadname = 160;
	public static readonly RULE_classvirtspecifier = 161;
	public static readonly RULE_classkey = 162;
	public static readonly RULE_memberspecification = 163;
	public static readonly RULE_memberdeclaration = 164;
	public static readonly RULE_memberdeclaratorlist = 165;
	public static readonly RULE_memberdeclarator = 166;
	public static readonly RULE_virtspecifierseq = 167;
	public static readonly RULE_virtspecifier = 168;
	public static readonly RULE_purespecifier = 169;
	public static readonly RULE_baseclause = 170;
	public static readonly RULE_basespecifierlist = 171;
	public static readonly RULE_basespecifier = 172;
	public static readonly RULE_classordecltype = 173;
	public static readonly RULE_basetypespecifier = 174;
	public static readonly RULE_accessspecifier = 175;
	public static readonly RULE_conversionfunctionid = 176;
	public static readonly RULE_conversiontypeid = 177;
	public static readonly RULE_conversiondeclarator = 178;
	public static readonly RULE_ctorinitializer = 179;
	public static readonly RULE_meminitializerlist = 180;
	public static readonly RULE_meminitializer = 181;
	public static readonly RULE_meminitializerid = 182;
	public static readonly RULE_operatorfunctionid = 183;
	public static readonly RULE_literaloperatorid = 184;
	public static readonly RULE_templatedeclaration = 185;
	public static readonly RULE_templateparameterlist = 186;
	public static readonly RULE_templateparameter = 187;
	public static readonly RULE_typeparameter = 188;
	public static readonly RULE_simpletemplateid = 189;
	public static readonly RULE_templateid = 190;
	public static readonly RULE_templatename = 191;
	public static readonly RULE_templateargumentlist = 192;
	public static readonly RULE_templateargument = 193;
	public static readonly RULE_typenamespecifier = 194;
	public static readonly RULE_explicitinstantiation = 195;
	public static readonly RULE_explicitspecialization = 196;
	public static readonly RULE_tryblock = 197;
	public static readonly RULE_functiontryblock = 198;
	public static readonly RULE_handlerseq = 199;
	public static readonly RULE_handler = 200;
	public static readonly RULE_exceptiondeclaration = 201;
	public static readonly RULE_throwexpression = 202;
	public static readonly RULE_exceptionspecification = 203;
	public static readonly RULE_dynamicexceptionspecification = 204;
	public static readonly RULE_typeidlist = 205;
	public static readonly RULE_noexceptspecification = 206;
	public static readonly RULE_theoperator = 207;
	public static readonly RULE_literal = 208;
	public static readonly RULE_booleanliteral = 209;
	public static readonly RULE_pointerliteral = 210;
	public static readonly RULE_userdefinedliteral = 211;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"pointerliteral", "userdefinedliteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'FACTORYGAME_API'", "'UCLASS'", "'UFUNCTION'", "'UPROPERTY'", 
		"'UPARAM'", "'GENERATED_BODY'", "'!'", "'not'", "'&&'", "'and'", "'||'", 
		"'or'", "'0'", undefined, undefined, "'alignas'", "'alignof'", "'asm'", 
		"'auto'", "'bool'", "'break'", "'case'", "'catch'", "'char'", "'char16_t'", 
		"'char32_t'", "'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'", 
		"'decltype'", "'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'", 
		"'else'", "'enum'", "'explicit'", "'export'", "'extern'", "'false'", "'final'", 
		"'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'", "'int'", 
		"'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'", "'nullptr'", 
		"'operator'", "'override'", "'private'", "'protected'", "'public'", "'register'", 
		"'reinterpret_cast'", "'return'", "'short'", "'signed'", "'sizeof'", "'static'", 
		"'static_assert'", "'static_cast'", "'struct'", "'switch'", "'template'", 
		"'this'", "'thread_local'", "'throw'", "'true'", "'try'", "'typedef'", 
		"'typeid'", "'typename'", "'union'", "'unsigned'", "'using'", "'virtual'", 
		"'void'", "'volatile'", "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", 
		"'~'", undefined, "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "'^='", "'&='", "'|='", "'<<'", "'>>'", "'<<='", "'>>='", "'=='", 
		"'!='", "'<='", "'>='", undefined, undefined, "'++'", "'--'", "','", "'->*'", 
		"'->'", "'?'", "':'", "'::'", "';'", "'.'", "'.*'", "'...'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm", "Auto", "Bool", 
		"Break", "Case", "Catch", "Char", "Char16", "Char32", "Class", "Const", 
		"Constexpr", "Const_cast", "Continue", "Decltype", "Default", "Delete", 
		"Do", "Double", "Dynamic_cast", "Else", "Enum", "Explicit", "Export", 
		"Extern", "False", "Final", "Float", "For", "Friend", "Goto", "If", "Inline", 
		"Int", "Long", "Mutable", "Namespace", "New", "Noexcept", "Nullptr", "Operator", 
		"Override", "Private", "Protected", "Public", "Register", "Reinterpret_cast", 
		"Return", "Short", "Signed", "Sizeof", "Static", "Static_assert", "Static_cast", 
		"Struct", "Switch", "Template", "This", "Thread_local", "Throw", "True", 
		"Try", "Typedef", "Typeid_", "Typename_", "Union", "Unsigned", "Using", 
		"Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen", "RightParen", 
		"LeftBracket", "RightBracket", "LeftBrace", "RightBrace", "Plus", "Minus", 
		"Star", "Div", "Mod", "Caret", "And", "Or", "Tilde", "Not", "Assign", 
		"Less", "Greater", "PlusAssign", "MinusAssign", "StarAssign", "DivAssign", 
		"ModAssign", "XorAssign", "AndAssign", "OrAssign", "LeftShift", "RightShift", 
		"LeftShiftAssign", "RightShiftAssign", "Equal", "NotEqual", "LessEqual", 
		"GreaterEqual", "AndAnd", "OrOr", "PlusPlus", "MinusMinus", "Comma", "ArrowStar", 
		"Arrow", "Question", "Colon", "Doublecolon", "Semi", "Dot", "DotStar", 
		"Ellipsis", "Identifier", "Integerliteral", "Decimalliteral", "Octalliteral", 
		"Hexadecimalliteral", "Binaryliteral", "Integersuffix", "Characterliteral", 
		"Floatingliteral", "Stringliteral", "Userdefinedintegerliteral", "Userdefinedfloatingliteral", 
		"Userdefinedstringliteral", "Userdefinedcharacterliteral", "Whitespace", 
		"Newline", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CPP14Parser._LITERAL_NAMES, CPP14Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CPP14Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CPP14.g4"; }

	// @Override
	public get ruleNames(): string[] { return CPP14Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CPP14Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CPP14Parser._ATN, this);
	}
	// @RuleVersion(0)
	public gameapitag(): GameapitagContext {
		let _localctx: GameapitagContext = new GameapitagContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CPP14Parser.RULE_gameapitag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(CPP14Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uclass(): UclassContext {
		let _localctx: UclassContext = new UclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CPP14Parser.RULE_uclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(CPP14Parser.T__1);
			this.state = 427;
			this.ueannotationlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ufunction(): UfunctionContext {
		let _localctx: UfunctionContext = new UfunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CPP14Parser.RULE_ufunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(CPP14Parser.T__2);
			this.state = 430;
			this.ueannotationlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uproperty(): UpropertyContext {
		let _localctx: UpropertyContext = new UpropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CPP14Parser.RULE_uproperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.match(CPP14Parser.T__3);
			this.state = 433;
			this.ueannotationlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uparam(): UparamContext {
		let _localctx: UparamContext = new UparamContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CPP14Parser.RULE_uparam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(CPP14Parser.T__4);
			this.state = 436;
			this.ueannotationlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generatedbody(): GeneratedbodyContext {
		let _localctx: GeneratedbodyContext = new GeneratedbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CPP14Parser.RULE_generatedbody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(CPP14Parser.T__5);
			this.state = 439;
			this.ueannotationlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ueannotationlist(): UeannotationlistContext {
		let _localctx: UeannotationlistContext = new UeannotationlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CPP14Parser.RULE_ueannotationlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.match(CPP14Parser.LeftParen);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Identifier) {
				{
				this.state = 442;
				this.ueannotationlistentries(0);
				}
			}

			this.state = 445;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public ueannotationlistentries(): UeannotationlistentriesContext;
	public ueannotationlistentries(_p: number): UeannotationlistentriesContext;
	// @RuleVersion(0)
	public ueannotationlistentries(_p?: number): UeannotationlistentriesContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: UeannotationlistentriesContext = new UeannotationlistentriesContext(this._ctx, _parentState);
		let _prevctx: UeannotationlistentriesContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, CPP14Parser.RULE_ueannotationlistentries, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 448;
			this.ueannotation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new UeannotationlistentriesContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_ueannotationlistentries);
					this.state = 450;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 451;
					this.match(CPP14Parser.Comma);
					this.state = 452;
					this.ueannotation();
					}
					}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ueannotation(): UeannotationContext {
		let _localctx: UeannotationContext = new UeannotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CPP14Parser.RULE_ueannotation);
		try {
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.uekeyvalueannotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.ueannotationname();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ueannotationvalue(): UeannotationvalueContext {
		let _localctx: UeannotationvalueContext = new UeannotationvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CPP14Parser.RULE_ueannotationvalue);
		try {
			this.state = 466;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Stringliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.match(CPP14Parser.Stringliteral);
				}
				break;
			case CPP14Parser.False:
			case CPP14Parser.True:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.booleanliteral();
				}
				break;
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 464;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 465;
				this.ueannotationlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ueannotationname(): UeannotationnameContext {
		let _localctx: UeannotationnameContext = new UeannotationnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CPP14Parser.RULE_ueannotationname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uekeyvalueannotation(): UekeyvalueannotationContext {
		let _localctx: UekeyvalueannotationContext = new UekeyvalueannotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CPP14Parser.RULE_uekeyvalueannotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.ueannotationname();
			this.state = 471;
			this.match(CPP14Parser.Assign);
			this.state = 472;
			this.ueannotationvalue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public translationunit(): TranslationunitContext {
		let _localctx: TranslationunitContext = new TranslationunitContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CPP14Parser.RULE_translationunit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Semi - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
				{
				this.state = 474;
				this.declarationseq(0);
				}
			}

			this.state = 477;
			this.match(CPP14Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryexpression(): PrimaryexpressionContext {
		let _localctx: PrimaryexpressionContext = new PrimaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CPP14Parser.RULE_primaryexpression);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.False:
			case CPP14Parser.Nullptr:
			case CPP14Parser.True:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.literal();
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.match(CPP14Parser.This);
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.match(CPP14Parser.LeftParen);
				this.state = 482;
				this.expression(0);
				this.state = 483;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 485;
				this.idexpression();
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 486;
				this.lambdaexpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idexpression(): IdexpressionContext {
		let _localctx: IdexpressionContext = new IdexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CPP14Parser.RULE_idexpression);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.unqualifiedid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.qualifiedid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unqualifiedid(): UnqualifiedidContext {
		let _localctx: UnqualifiedidContext = new UnqualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CPP14Parser.RULE_unqualifiedid);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.operatorfunctionid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 495;
				this.conversionfunctionid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 496;
				this.literaloperatorid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 497;
				this.match(CPP14Parser.Tilde);
				this.state = 498;
				this.classname();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 499;
				this.match(CPP14Parser.Tilde);
				this.state = 500;
				this.decltypespecifier();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 501;
				this.templateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedid(): QualifiedidContext {
		let _localctx: QualifiedidContext = new QualifiedidContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CPP14Parser.RULE_qualifiedid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.nestednamespecifier(0);
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Template) {
				{
				this.state = 505;
				this.match(CPP14Parser.Template);
				}
			}

			this.state = 508;
			this.unqualifiedid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nestednamespecifier(): NestednamespecifierContext;
	public nestednamespecifier(_p: number): NestednamespecifierContext;
	// @RuleVersion(0)
	public nestednamespecifier(_p?: number): NestednamespecifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NestednamespecifierContext = new NestednamespecifierContext(this._ctx, _parentState);
		let _prevctx: NestednamespecifierContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, CPP14Parser.RULE_nestednamespecifier, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 511;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 2:
				{
				this.state = 512;
				this.thetypename();
				this.state = 513;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 3:
				{
				this.state = 515;
				this.namespacename();
				this.state = 516;
				this.match(CPP14Parser.Doublecolon);
				}
				break;

			case 4:
				{
				this.state = 518;
				this.decltypespecifier();
				this.state = 519;
				this.match(CPP14Parser.Doublecolon);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 535;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 533;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 523;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 524;
						this.match(CPP14Parser.Identifier);
						this.state = 525;
						this.match(CPP14Parser.Doublecolon);
						}
						break;

					case 2:
						{
						_localctx = new NestednamespecifierContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
						this.state = 526;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 528;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 527;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 530;
						this.simpletemplateid();
						this.state = 531;
						this.match(CPP14Parser.Doublecolon);
						}
						break;
					}
					}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaexpression(): LambdaexpressionContext {
		let _localctx: LambdaexpressionContext = new LambdaexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CPP14Parser.RULE_lambdaexpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.lambdaintroducer();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.LeftParen) {
				{
				this.state = 539;
				this.lambdadeclarator();
				}
			}

			this.state = 542;
			this.compoundstatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaintroducer(): LambdaintroducerContext {
		let _localctx: LambdaintroducerContext = new LambdaintroducerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CPP14Parser.RULE_lambdaintroducer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(CPP14Parser.LeftBracket);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.This || _la === CPP14Parser.And || _la === CPP14Parser.Assign || _la === CPP14Parser.Identifier) {
				{
				this.state = 545;
				this.lambdacapture();
				}
			}

			this.state = 548;
			this.match(CPP14Parser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdacapture(): LambdacaptureContext {
		let _localctx: LambdacaptureContext = new LambdacaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CPP14Parser.RULE_lambdacapture);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				this.capturedefault();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 551;
				this.capturelist(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 552;
				this.capturedefault();
				this.state = 553;
				this.match(CPP14Parser.Comma);
				this.state = 554;
				this.capturelist(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capturedefault(): CapturedefaultContext {
		let _localctx: CapturedefaultContext = new CapturedefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CPP14Parser.RULE_capturedefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.And || _la === CPP14Parser.Assign)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public capturelist(): CapturelistContext;
	public capturelist(_p: number): CapturelistContext;
	// @RuleVersion(0)
	public capturelist(_p?: number): CapturelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CapturelistContext = new CapturelistContext(this._ctx, _parentState);
		let _prevctx: CapturelistContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, CPP14Parser.RULE_capturelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 561;
			this.capture();
			this.state = 563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 573;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CapturelistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_capturelist);
					this.state = 565;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 566;
					this.match(CPP14Parser.Comma);
					this.state = 567;
					this.capture();
					this.state = 569;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
					case 1:
						{
						this.state = 568;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public capture(): CaptureContext {
		let _localctx: CaptureContext = new CaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CPP14Parser.RULE_capture);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.simplecapture();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.initcapture();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simplecapture(): SimplecaptureContext {
		let _localctx: SimplecaptureContext = new SimplecaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CPP14Parser.RULE_simplecapture);
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 580;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 581;
				this.match(CPP14Parser.And);
				this.state = 582;
				this.match(CPP14Parser.Identifier);
				}
				break;
			case CPP14Parser.This:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 583;
				this.match(CPP14Parser.This);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initcapture(): InitcaptureContext {
		let _localctx: InitcaptureContext = new InitcaptureContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CPP14Parser.RULE_initcapture);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 586;
				this.match(CPP14Parser.Identifier);
				this.state = 587;
				this.initializer();
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 588;
				this.match(CPP14Parser.And);
				this.state = 589;
				this.match(CPP14Parser.Identifier);
				this.state = 590;
				this.initializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdadeclarator(): LambdadeclaratorContext {
		let _localctx: LambdadeclaratorContext = new LambdadeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CPP14Parser.RULE_lambdadeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(CPP14Parser.LeftParen);
			this.state = 594;
			this.parameterdeclarationclause();
			this.state = 595;
			this.match(CPP14Parser.RightParen);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Mutable) {
				{
				this.state = 596;
				this.match(CPP14Parser.Mutable);
				}
			}

			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Noexcept || _la === CPP14Parser.Throw) {
				{
				this.state = 599;
				this.exceptionspecification();
				}
			}

			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 602;
				this.attributespecifierseq(0);
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Arrow) {
				{
				this.state = 605;
				this.trailingreturntype();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixexpression(): PostfixexpressionContext;
	public postfixexpression(_p: number): PostfixexpressionContext;
	// @RuleVersion(0)
	public postfixexpression(_p?: number): PostfixexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixexpressionContext = new PostfixexpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixexpressionContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, CPP14Parser.RULE_postfixexpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.primaryexpression();
				}
				break;

			case 2:
				{
				this.state = 610;
				this.simpletypespecifier();
				this.state = 611;
				this.match(CPP14Parser.LeftParen);
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.LeftBrace - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 612;
					this.expressionlist();
					}
				}

				this.state = 615;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 3:
				{
				this.state = 617;
				this.typenamespecifier();
				this.state = 618;
				this.match(CPP14Parser.LeftParen);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.LeftBrace - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 619;
					this.expressionlist();
					}
				}

				this.state = 622;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 4:
				{
				this.state = 624;
				this.simpletypespecifier();
				this.state = 625;
				this.bracedinitlist();
				}
				break;

			case 5:
				{
				this.state = 627;
				this.typenamespecifier();
				this.state = 628;
				this.bracedinitlist();
				}
				break;

			case 6:
				{
				this.state = 630;
				this.match(CPP14Parser.Dynamic_cast);
				this.state = 631;
				this.match(CPP14Parser.Less);
				this.state = 632;
				this.thetypeid();
				this.state = 633;
				this.match(CPP14Parser.Greater);
				this.state = 634;
				this.match(CPP14Parser.LeftParen);
				this.state = 635;
				this.expression(0);
				this.state = 636;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 7:
				{
				this.state = 638;
				this.match(CPP14Parser.Static_cast);
				this.state = 639;
				this.match(CPP14Parser.Less);
				this.state = 640;
				this.thetypeid();
				this.state = 641;
				this.match(CPP14Parser.Greater);
				this.state = 642;
				this.match(CPP14Parser.LeftParen);
				this.state = 643;
				this.expression(0);
				this.state = 644;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				{
				this.state = 646;
				this.match(CPP14Parser.Reinterpret_cast);
				this.state = 647;
				this.match(CPP14Parser.Less);
				this.state = 648;
				this.thetypeid();
				this.state = 649;
				this.match(CPP14Parser.Greater);
				this.state = 650;
				this.match(CPP14Parser.LeftParen);
				this.state = 651;
				this.expression(0);
				this.state = 652;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				{
				this.state = 654;
				this.match(CPP14Parser.Const_cast);
				this.state = 655;
				this.match(CPP14Parser.Less);
				this.state = 656;
				this.thetypeid();
				this.state = 657;
				this.match(CPP14Parser.Greater);
				this.state = 658;
				this.match(CPP14Parser.LeftParen);
				this.state = 659;
				this.expression(0);
				this.state = 660;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 10:
				{
				this.state = 662;
				this.typeidofthetypeid();
				this.state = 663;
				this.match(CPP14Parser.LeftParen);
				this.state = 664;
				this.expression(0);
				this.state = 665;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 11:
				{
				this.state = 667;
				this.typeidofthetypeid();
				this.state = 668;
				this.match(CPP14Parser.LeftParen);
				this.state = 669;
				this.thetypeid();
				this.state = 670;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 714;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 712;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 674;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 675;
						this.match(CPP14Parser.LeftBracket);
						this.state = 676;
						this.expression(0);
						this.state = 677;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 2:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 679;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 680;
						this.match(CPP14Parser.LeftBracket);
						this.state = 681;
						this.bracedinitlist();
						this.state = 682;
						this.match(CPP14Parser.RightBracket);
						}
						break;

					case 3:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 684;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 685;
						this.match(CPP14Parser.LeftParen);
						this.state = 687;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.LeftBrace - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
							{
							this.state = 686;
							this.expressionlist();
							}
						}

						this.state = 689;
						this.match(CPP14Parser.RightParen);
						}
						break;

					case 4:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 690;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 691;
						this.match(CPP14Parser.Dot);
						this.state = 693;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 692;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 695;
						this.idexpression();
						}
						break;

					case 5:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 696;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 697;
						this.match(CPP14Parser.Arrow);
						this.state = 699;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CPP14Parser.Template) {
							{
							this.state = 698;
							this.match(CPP14Parser.Template);
							}
						}

						this.state = 701;
						this.idexpression();
						}
						break;

					case 6:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 702;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 703;
						this.match(CPP14Parser.Dot);
						this.state = 704;
						this.pseudodestructorname();
						}
						break;

					case 7:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 705;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 706;
						this.match(CPP14Parser.Arrow);
						this.state = 707;
						this.pseudodestructorname();
						}
						break;

					case 8:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 708;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 709;
						this.match(CPP14Parser.PlusPlus);
						}
						break;

					case 9:
						{
						_localctx = new PostfixexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_postfixexpression);
						this.state = 710;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 711;
						this.match(CPP14Parser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 716;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeidofexpr(): TypeidofexprContext {
		let _localctx: TypeidofexprContext = new TypeidofexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CPP14Parser.RULE_typeidofexpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(CPP14Parser.Typeid_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeidofthetypeid(): TypeidofthetypeidContext {
		let _localctx: TypeidofthetypeidContext = new TypeidofthetypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CPP14Parser.RULE_typeidofthetypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this.match(CPP14Parser.Typeid_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CPP14Parser.RULE_expressionlist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.initializerlist(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pseudodestructorname(): PseudodestructornameContext {
		let _localctx: PseudodestructornameContext = new PseudodestructornameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CPP14Parser.RULE_pseudodestructorname);
		let _la: number;
		try {
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 724;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 723;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 726;
				this.thetypename();
				this.state = 727;
				this.match(CPP14Parser.Doublecolon);
				this.state = 728;
				this.match(CPP14Parser.Tilde);
				this.state = 729;
				this.thetypename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.nestednamespecifier(0);
				this.state = 732;
				this.match(CPP14Parser.Template);
				this.state = 733;
				this.simpletemplateid();
				this.state = 734;
				this.match(CPP14Parser.Doublecolon);
				this.state = 735;
				this.match(CPP14Parser.Tilde);
				this.state = 736;
				this.thetypename();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Decltype || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 738;
					this.nestednamespecifier(0);
					}
				}

				this.state = 741;
				this.match(CPP14Parser.Tilde);
				this.state = 742;
				this.thetypename();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 743;
				this.match(CPP14Parser.Tilde);
				this.state = 744;
				this.decltypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryexpression(): UnaryexpressionContext {
		let _localctx: UnaryexpressionContext = new UnaryexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CPP14Parser.RULE_unaryexpression);
		try {
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 747;
				this.postfixexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 748;
				this.match(CPP14Parser.PlusPlus);
				this.state = 749;
				this.castexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 750;
				this.match(CPP14Parser.MinusMinus);
				this.state = 751;
				this.castexpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 752;
				this.unaryoperator();
				this.state = 753;
				this.castexpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 755;
				this.match(CPP14Parser.Sizeof);
				this.state = 756;
				this.unaryexpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 757;
				this.match(CPP14Parser.Sizeof);
				this.state = 758;
				this.match(CPP14Parser.LeftParen);
				this.state = 759;
				this.thetypeid();
				this.state = 760;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 762;
				this.match(CPP14Parser.Sizeof);
				this.state = 763;
				this.match(CPP14Parser.Ellipsis);
				this.state = 764;
				this.match(CPP14Parser.LeftParen);
				this.state = 765;
				this.match(CPP14Parser.Identifier);
				this.state = 766;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 767;
				this.match(CPP14Parser.Alignof);
				this.state = 768;
				this.match(CPP14Parser.LeftParen);
				this.state = 769;
				this.thetypeid();
				this.state = 770;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 772;
				this.noexceptexpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 773;
				this.newexpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 774;
				this.deleteexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryoperator(): UnaryoperatorContext {
		let _localctx: UnaryoperatorContext = new UnaryoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CPP14Parser.RULE_unaryoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.T__6 || _la === CPP14Parser.T__7 || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newexpression(): NewexpressionContext {
		let _localctx: NewexpressionContext = new NewexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CPP14Parser.RULE_newexpression);
		let _la: number;
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 779;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 782;
				this.match(CPP14Parser.New);
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.LeftParen) {
					{
					this.state = 783;
					this.newplacement();
					}
				}

				this.state = 786;
				this.newtypeid();
				this.state = 788;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 787;
					this.newinitializer();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 790;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 793;
				this.match(CPP14Parser.New);
				this.state = 795;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
				case 1:
					{
					this.state = 794;
					this.newplacement();
					}
					break;
				}
				this.state = 797;
				this.match(CPP14Parser.LeftParen);
				this.state = 798;
				this.thetypeid();
				this.state = 799;
				this.match(CPP14Parser.RightParen);
				this.state = 801;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 800;
					this.newinitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newplacement(): NewplacementContext {
		let _localctx: NewplacementContext = new NewplacementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CPP14Parser.RULE_newplacement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(CPP14Parser.LeftParen);
			this.state = 806;
			this.expressionlist();
			this.state = 807;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newtypeid(): NewtypeidContext {
		let _localctx: NewtypeidContext = new NewtypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CPP14Parser.RULE_newtypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.typespecifierseq();
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 810;
				this.newdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newdeclarator(): NewdeclaratorContext {
		let _localctx: NewdeclaratorContext = new NewdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CPP14Parser.RULE_newdeclarator);
		try {
			this.state = 818;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.T__8:
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.ptroperator();
				this.state = 815;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 814;
					this.newdeclarator();
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.noptrnewdeclarator(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrnewdeclarator(): NoptrnewdeclaratorContext;
	public noptrnewdeclarator(_p: number): NoptrnewdeclaratorContext;
	// @RuleVersion(0)
	public noptrnewdeclarator(_p?: number): NoptrnewdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrnewdeclaratorContext = new NoptrnewdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrnewdeclaratorContext = _localctx;
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, CPP14Parser.RULE_noptrnewdeclarator, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 821;
			this.match(CPP14Parser.LeftBracket);
			this.state = 822;
			this.expression(0);
			this.state = 823;
			this.match(CPP14Parser.RightBracket);
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 824;
				this.attributespecifierseq(0);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 836;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrnewdeclarator);
					this.state = 827;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 828;
					this.match(CPP14Parser.LeftBracket);
					this.state = 829;
					this.constantexpression();
					this.state = 830;
					this.match(CPP14Parser.RightBracket);
					this.state = 832;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						this.state = 831;
						this.attributespecifierseq(0);
						}
						break;
					}
					}
					}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newinitializer(): NewinitializerContext {
		let _localctx: NewinitializerContext = new NewinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CPP14Parser.RULE_newinitializer);
		let _la: number;
		try {
			this.state = 845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 839;
				this.match(CPP14Parser.LeftParen);
				this.state = 841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.LeftBrace - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 840;
					this.expressionlist();
					}
				}

				this.state = 843;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 844;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteexpression(): DeleteexpressionContext {
		let _localctx: DeleteexpressionContext = new DeleteexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CPP14Parser.RULE_deleteexpression);
		let _la: number;
		try {
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 847;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 850;
				this.match(CPP14Parser.Delete);
				this.state = 851;
				this.castexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Doublecolon) {
					{
					this.state = 852;
					this.match(CPP14Parser.Doublecolon);
					}
				}

				this.state = 855;
				this.match(CPP14Parser.Delete);
				this.state = 856;
				this.match(CPP14Parser.LeftBracket);
				this.state = 857;
				this.match(CPP14Parser.RightBracket);
				this.state = 858;
				this.castexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noexceptexpression(): NoexceptexpressionContext {
		let _localctx: NoexceptexpressionContext = new NoexceptexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CPP14Parser.RULE_noexceptexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(CPP14Parser.Noexcept);
			this.state = 862;
			this.match(CPP14Parser.LeftParen);
			this.state = 863;
			this.expression(0);
			this.state = 864;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castexpression(): CastexpressionContext {
		let _localctx: CastexpressionContext = new CastexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CPP14Parser.RULE_castexpression);
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 866;
				this.unaryexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 867;
				this.match(CPP14Parser.LeftParen);
				this.state = 868;
				this.thetypeid();
				this.state = 869;
				this.match(CPP14Parser.RightParen);
				this.state = 870;
				this.castexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pmexpression(): PmexpressionContext;
	public pmexpression(_p: number): PmexpressionContext;
	// @RuleVersion(0)
	public pmexpression(_p?: number): PmexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PmexpressionContext = new PmexpressionContext(this._ctx, _parentState);
		let _prevctx: PmexpressionContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, CPP14Parser.RULE_pmexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 875;
			this.castexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 885;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 883;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 877;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 878;
						this.match(CPP14Parser.DotStar);
						this.state = 879;
						this.castexpression();
						}
						break;

					case 2:
						{
						_localctx = new PmexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_pmexpression);
						this.state = 880;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 881;
						this.match(CPP14Parser.ArrowStar);
						this.state = 882;
						this.castexpression();
						}
						break;
					}
					}
				}
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeexpression(): MultiplicativeexpressionContext;
	public multiplicativeexpression(_p: number): MultiplicativeexpressionContext;
	// @RuleVersion(0)
	public multiplicativeexpression(_p?: number): MultiplicativeexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeexpressionContext = new MultiplicativeexpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeexpressionContext = _localctx;
		let _startState: number = 88;
		this.enterRecursionRule(_localctx, 88, CPP14Parser.RULE_multiplicativeexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 889;
			this.pmexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 902;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 900;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 891;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 892;
						this.match(CPP14Parser.Star);
						this.state = 893;
						this.pmexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 894;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 895;
						this.match(CPP14Parser.Div);
						this.state = 896;
						this.pmexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
						this.state = 897;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 898;
						this.match(CPP14Parser.Mod);
						this.state = 899;
						this.pmexpression(0);
						}
						break;
					}
					}
				}
				this.state = 904;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveexpression(): AdditiveexpressionContext;
	public additiveexpression(_p: number): AdditiveexpressionContext;
	// @RuleVersion(0)
	public additiveexpression(_p?: number): AdditiveexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveexpressionContext = new AdditiveexpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveexpressionContext = _localctx;
		let _startState: number = 90;
		this.enterRecursionRule(_localctx, 90, CPP14Parser.RULE_additiveexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 906;
			this.multiplicativeexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 916;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 914;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 908;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 909;
						this.match(CPP14Parser.Plus);
						this.state = 910;
						this.multiplicativeexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_additiveexpression);
						this.state = 911;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 912;
						this.match(CPP14Parser.Minus);
						this.state = 913;
						this.multiplicativeexpression(0);
						}
						break;
					}
					}
				}
				this.state = 918;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftexpression(): ShiftexpressionContext;
	public shiftexpression(_p: number): ShiftexpressionContext;
	// @RuleVersion(0)
	public shiftexpression(_p?: number): ShiftexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftexpressionContext = new ShiftexpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftexpressionContext = _localctx;
		let _startState: number = 92;
		this.enterRecursionRule(_localctx, 92, CPP14Parser.RULE_shiftexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 920;
			this.additiveexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 928;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ShiftexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_shiftexpression);
					this.state = 922;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 923;
					this.shiftoperator();
					this.state = 924;
					this.additiveexpression(0);
					}
					}
				}
				this.state = 930;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftoperator(): ShiftoperatorContext {
		let _localctx: ShiftoperatorContext = new ShiftoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CPP14Parser.RULE_shiftoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.LeftShift || _la === CPP14Parser.RightShift)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public relationalexpression(): RelationalexpressionContext;
	public relationalexpression(_p: number): RelationalexpressionContext;
	// @RuleVersion(0)
	public relationalexpression(_p?: number): RelationalexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalexpressionContext = new RelationalexpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalexpressionContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CPP14Parser.RULE_relationalexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 934;
			this.shiftexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 950;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 948;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 936;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 937;
						this.match(CPP14Parser.Less);
						this.state = 938;
						this.shiftexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 939;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 940;
						this.match(CPP14Parser.Greater);
						this.state = 941;
						this.shiftexpression(0);
						}
						break;

					case 3:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 942;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 943;
						this.match(CPP14Parser.LessEqual);
						this.state = 944;
						this.shiftexpression(0);
						}
						break;

					case 4:
						{
						_localctx = new RelationalexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_relationalexpression);
						this.state = 945;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 946;
						this.match(CPP14Parser.GreaterEqual);
						this.state = 947;
						this.shiftexpression(0);
						}
						break;
					}
					}
				}
				this.state = 952;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityexpression(): EqualityexpressionContext;
	public equalityexpression(_p: number): EqualityexpressionContext;
	// @RuleVersion(0)
	public equalityexpression(_p?: number): EqualityexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityexpressionContext = new EqualityexpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityexpressionContext = _localctx;
		let _startState: number = 98;
		this.enterRecursionRule(_localctx, 98, CPP14Parser.RULE_equalityexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 954;
			this.relationalexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 964;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 962;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 956;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 957;
						this.match(CPP14Parser.Equal);
						this.state = 958;
						this.relationalexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new EqualityexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_equalityexpression);
						this.state = 959;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 960;
						this.match(CPP14Parser.NotEqual);
						this.state = 961;
						this.relationalexpression(0);
						}
						break;
					}
					}
				}
				this.state = 966;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andexpression(): AndexpressionContext;
	public andexpression(_p: number): AndexpressionContext;
	// @RuleVersion(0)
	public andexpression(_p?: number): AndexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndexpressionContext = new AndexpressionContext(this._ctx, _parentState);
		let _prevctx: AndexpressionContext = _localctx;
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, CPP14Parser.RULE_andexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 968;
			this.equalityexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 975;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_andexpression);
					this.state = 970;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 971;
					this.match(CPP14Parser.And);
					this.state = 972;
					this.equalityexpression(0);
					}
					}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveorexpression(): ExclusiveorexpressionContext;
	public exclusiveorexpression(_p: number): ExclusiveorexpressionContext;
	// @RuleVersion(0)
	public exclusiveorexpression(_p?: number): ExclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveorexpressionContext = new ExclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveorexpressionContext = _localctx;
		let _startState: number = 102;
		this.enterRecursionRule(_localctx, 102, CPP14Parser.RULE_exclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 979;
			this.andexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 986;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_exclusiveorexpression);
					this.state = 981;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 982;
					this.match(CPP14Parser.Caret);
					this.state = 983;
					this.andexpression(0);
					}
					}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveorexpression(): InclusiveorexpressionContext;
	public inclusiveorexpression(_p: number): InclusiveorexpressionContext;
	// @RuleVersion(0)
	public inclusiveorexpression(_p?: number): InclusiveorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveorexpressionContext = new InclusiveorexpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveorexpressionContext = _localctx;
		let _startState: number = 104;
		this.enterRecursionRule(_localctx, 104, CPP14Parser.RULE_inclusiveorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 990;
			this.exclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 997;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_inclusiveorexpression);
					this.state = 992;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 993;
					this.match(CPP14Parser.Or);
					this.state = 994;
					this.exclusiveorexpression(0);
					}
					}
				}
				this.state = 999;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalandexpression(): LogicalandexpressionContext;
	public logicalandexpression(_p: number): LogicalandexpressionContext;
	// @RuleVersion(0)
	public logicalandexpression(_p?: number): LogicalandexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalandexpressionContext = new LogicalandexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalandexpressionContext = _localctx;
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, CPP14Parser.RULE_logicalandexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1001;
			this.inclusiveorexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1011;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1009;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalandexpression);
						this.state = 1003;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1004;
						this.match(CPP14Parser.T__8);
						this.state = 1005;
						this.inclusiveorexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new LogicalandexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalandexpression);
						this.state = 1006;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1007;
						this.match(CPP14Parser.T__9);
						this.state = 1008;
						this.inclusiveorexpression(0);
						}
						break;
					}
					}
				}
				this.state = 1013;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalorexpression(): LogicalorexpressionContext;
	public logicalorexpression(_p: number): LogicalorexpressionContext;
	// @RuleVersion(0)
	public logicalorexpression(_p?: number): LogicalorexpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalorexpressionContext = new LogicalorexpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalorexpressionContext = _localctx;
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, CPP14Parser.RULE_logicalorexpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1015;
			this.logicalandexpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1025;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1023;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalorexpression);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1018;
						this.match(CPP14Parser.T__10);
						this.state = 1019;
						this.logicalandexpression(0);
						}
						break;

					case 2:
						{
						_localctx = new LogicalorexpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_logicalorexpression);
						this.state = 1020;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1021;
						this.match(CPP14Parser.T__11);
						this.state = 1022;
						this.logicalandexpression(0);
						}
						break;
					}
					}
				}
				this.state = 1027;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalexpression(): ConditionalexpressionContext {
		let _localctx: ConditionalexpressionContext = new ConditionalexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CPP14Parser.RULE_conditionalexpression);
		try {
			this.state = 1035;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1028;
				this.logicalorexpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1029;
				this.logicalorexpression(0);
				this.state = 1030;
				this.match(CPP14Parser.Question);
				this.state = 1031;
				this.expression(0);
				this.state = 1032;
				this.match(CPP14Parser.Colon);
				this.state = 1033;
				this.assignmentexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentexpression(): AssignmentexpressionContext {
		let _localctx: AssignmentexpressionContext = new AssignmentexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CPP14Parser.RULE_assignmentexpression);
		try {
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1037;
				this.conditionalexpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1038;
				this.logicalorexpression(0);
				this.state = 1039;
				this.assignmentoperator();
				this.state = 1040;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1042;
				this.throwexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentoperator(): AssignmentoperatorContext {
		let _localctx: AssignmentoperatorContext = new AssignmentoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CPP14Parser.RULE_assignmentoperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			_la = this._input.LA(1);
			if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CPP14Parser.Assign - 107)) | (1 << (CPP14Parser.PlusAssign - 107)) | (1 << (CPP14Parser.MinusAssign - 107)) | (1 << (CPP14Parser.StarAssign - 107)) | (1 << (CPP14Parser.DivAssign - 107)) | (1 << (CPP14Parser.ModAssign - 107)) | (1 << (CPP14Parser.XorAssign - 107)) | (1 << (CPP14Parser.AndAssign - 107)) | (1 << (CPP14Parser.OrAssign - 107)) | (1 << (CPP14Parser.LeftShiftAssign - 107)) | (1 << (CPP14Parser.RightShiftAssign - 107)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, CPP14Parser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1048;
			this.assignmentexpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1055;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_expression);
					this.state = 1050;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1051;
					this.match(CPP14Parser.Comma);
					this.state = 1052;
					this.assignmentexpression();
					}
					}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantexpression(): ConstantexpressionContext {
		let _localctx: ConstantexpressionContext = new ConstantexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CPP14Parser.RULE_constantexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1058;
			this.conditionalexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CPP14Parser.RULE_statement);
		let _la: number;
		try {
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1060;
				this.labeledstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1062;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 1061;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1064;
				this.expressionstatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1065;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1068;
				this.compoundstatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1069;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1072;
				this.selectionstatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1073;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1076;
				this.iterationstatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1077;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1080;
				this.jumpstatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1081;
				this.declarationstatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1082;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1085;
				this.tryblock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledstatement(): LabeledstatementContext {
		let _localctx: LabeledstatementContext = new LabeledstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CPP14Parser.RULE_labeledstatement);
		let _la: number;
		try {
			this.state = 1108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1088;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1091;
				this.match(CPP14Parser.Identifier);
				this.state = 1092;
				this.match(CPP14Parser.Colon);
				this.state = 1093;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1094;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1097;
				this.match(CPP14Parser.Case);
				this.state = 1098;
				this.constantexpression();
				this.state = 1099;
				this.match(CPP14Parser.Colon);
				this.state = 1100;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1102;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1105;
				this.match(CPP14Parser.Default);
				this.state = 1106;
				this.match(CPP14Parser.Colon);
				this.state = 1107;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionstatement(): ExpressionstatementContext {
		let _localctx: ExpressionstatementContext = new ExpressionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CPP14Parser.RULE_expressionstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
				{
				this.state = 1110;
				this.expression(0);
				}
			}

			this.state = 1113;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundstatement(): CompoundstatementContext {
		let _localctx: CompoundstatementContext = new CompoundstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CPP14Parser.RULE_compoundstatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1115;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__6) | (1 << CPP14Parser.T__7) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Break) | (1 << CPP14Parser.Case) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast) | (1 << CPP14Parser.Continue))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Default - 32)) | (1 << (CPP14Parser.Delete - 32)) | (1 << (CPP14Parser.Do - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Dynamic_cast - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.For - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Goto - 32)) | (1 << (CPP14Parser.If - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Reinterpret_cast - 64)) | (1 << (CPP14Parser.Return - 64)) | (1 << (CPP14Parser.Short - 64)) | (1 << (CPP14Parser.Signed - 64)) | (1 << (CPP14Parser.Sizeof - 64)) | (1 << (CPP14Parser.Static - 64)) | (1 << (CPP14Parser.Static_assert - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.Switch - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Try - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Using - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.While - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)) | (1 << (CPP14Parser.LeftBrace - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.PlusPlus - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CPP14Parser.MinusMinus - 129)) | (1 << (CPP14Parser.Doublecolon - 129)) | (1 << (CPP14Parser.Semi - 129)) | (1 << (CPP14Parser.Ellipsis - 129)) | (1 << (CPP14Parser.Identifier - 129)) | (1 << (CPP14Parser.Integerliteral - 129)) | (1 << (CPP14Parser.Characterliteral - 129)) | (1 << (CPP14Parser.Floatingliteral - 129)) | (1 << (CPP14Parser.Stringliteral - 129)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 129)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 129)) | (1 << (CPP14Parser.Userdefinedstringliteral - 129)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 129)))) !== 0)) {
				{
				this.state = 1116;
				this.statementseq(0);
				}
			}

			this.state = 1119;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public statementseq(): StatementseqContext;
	public statementseq(_p: number): StatementseqContext;
	// @RuleVersion(0)
	public statementseq(_p?: number): StatementseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StatementseqContext = new StatementseqContext(this._ctx, _parentState);
		let _prevctx: StatementseqContext = _localctx;
		let _startState: number = 128;
		this.enterRecursionRule(_localctx, 128, CPP14Parser.RULE_statementseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1122;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1128;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new StatementseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_statementseq);
					this.state = 1124;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1125;
					this.statement();
					}
					}
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionstatement(): SelectionstatementContext {
		let _localctx: SelectionstatementContext = new SelectionstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CPP14Parser.RULE_selectionstatement);
		try {
			this.state = 1151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1131;
				this.match(CPP14Parser.If);
				this.state = 1132;
				this.match(CPP14Parser.LeftParen);
				this.state = 1133;
				this.condition();
				this.state = 1134;
				this.match(CPP14Parser.RightParen);
				this.state = 1135;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1137;
				this.match(CPP14Parser.If);
				this.state = 1138;
				this.match(CPP14Parser.LeftParen);
				this.state = 1139;
				this.condition();
				this.state = 1140;
				this.match(CPP14Parser.RightParen);
				this.state = 1141;
				this.statement();
				this.state = 1142;
				this.match(CPP14Parser.Else);
				this.state = 1143;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1145;
				this.match(CPP14Parser.Switch);
				this.state = 1146;
				this.match(CPP14Parser.LeftParen);
				this.state = 1147;
				this.condition();
				this.state = 1148;
				this.match(CPP14Parser.RightParen);
				this.state = 1149;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CPP14Parser.RULE_condition);
		let _la: number;
		try {
			this.state = 1169;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1153;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1154;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1157;
				this.declspecifierseq();
				this.state = 1158;
				this.declarator();
				this.state = 1159;
				this.match(CPP14Parser.Assign);
				this.state = 1160;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1162;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1165;
				this.declspecifierseq();
				this.state = 1166;
				this.declarator();
				this.state = 1167;
				this.bracedinitlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationstatement(): IterationstatementContext {
		let _localctx: IterationstatementContext = new IterationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CPP14Parser.RULE_iterationstatement);
		let _la: number;
		try {
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1171;
				this.match(CPP14Parser.While);
				this.state = 1172;
				this.match(CPP14Parser.LeftParen);
				this.state = 1173;
				this.condition();
				this.state = 1174;
				this.match(CPP14Parser.RightParen);
				this.state = 1175;
				this.statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1177;
				this.match(CPP14Parser.Do);
				this.state = 1178;
				this.statement();
				this.state = 1179;
				this.match(CPP14Parser.While);
				this.state = 1180;
				this.match(CPP14Parser.LeftParen);
				this.state = 1181;
				this.expression(0);
				this.state = 1182;
				this.match(CPP14Parser.RightParen);
				this.state = 1183;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1185;
				this.match(CPP14Parser.For);
				this.state = 1186;
				this.match(CPP14Parser.LeftParen);
				this.state = 1187;
				this.forinitstatement();
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__6) | (1 << CPP14Parser.T__7) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr) | (1 << CPP14Parser.Const_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Delete - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Dynamic_cast - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.False - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Reinterpret_cast - 64)) | (1 << (CPP14Parser.Short - 64)) | (1 << (CPP14Parser.Signed - 64)) | (1 << (CPP14Parser.Sizeof - 64)) | (1 << (CPP14Parser.Static - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.Thread_local - 64)) | (1 << (CPP14Parser.Throw - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typedef - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Virtual - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.PlusPlus - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CPP14Parser.MinusMinus - 129)) | (1 << (CPP14Parser.Doublecolon - 129)) | (1 << (CPP14Parser.Identifier - 129)) | (1 << (CPP14Parser.Integerliteral - 129)) | (1 << (CPP14Parser.Characterliteral - 129)) | (1 << (CPP14Parser.Floatingliteral - 129)) | (1 << (CPP14Parser.Stringliteral - 129)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 129)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 129)) | (1 << (CPP14Parser.Userdefinedstringliteral - 129)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 129)))) !== 0)) {
					{
					this.state = 1188;
					this.condition();
					}
				}

				this.state = 1191;
				this.match(CPP14Parser.Semi);
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 1192;
					this.expression(0);
					}
				}

				this.state = 1195;
				this.match(CPP14Parser.RightParen);
				this.state = 1196;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1198;
				this.match(CPP14Parser.For);
				this.state = 1199;
				this.match(CPP14Parser.LeftParen);
				this.state = 1200;
				this.forrangedeclaration();
				this.state = 1201;
				this.match(CPP14Parser.Colon);
				this.state = 1202;
				this.forrangeinitializer();
				this.state = 1203;
				this.match(CPP14Parser.RightParen);
				this.state = 1204;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forinitstatement(): ForinitstatementContext {
		let _localctx: ForinitstatementContext = new ForinitstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CPP14Parser.RULE_forinitstatement);
		try {
			this.state = 1210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1208;
				this.expressionstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1209;
				this.simpledeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forrangedeclaration(): ForrangedeclarationContext {
		let _localctx: ForrangedeclarationContext = new ForrangedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CPP14Parser.RULE_forrangedeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1212;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1215;
			this.declspecifierseq();
			this.state = 1216;
			this.declarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forrangeinitializer(): ForrangeinitializerContext {
		let _localctx: ForrangeinitializerContext = new ForrangeinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CPP14Parser.RULE_forrangeinitializer);
		try {
			this.state = 1220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.T__6:
			case CPP14Parser.T__7:
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.False:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.True:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1218;
				this.expression(0);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1219;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpstatement(): JumpstatementContext {
		let _localctx: JumpstatementContext = new JumpstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CPP14Parser.RULE_jumpstatement);
		let _la: number;
		try {
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1222;
				this.match(CPP14Parser.Break);
				this.state = 1223;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1224;
				this.match(CPP14Parser.Continue);
				this.state = 1225;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1226;
				this.match(CPP14Parser.Return);
				this.state = 1228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 1227;
					this.expression(0);
					}
				}

				this.state = 1230;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1231;
				this.match(CPP14Parser.Return);
				this.state = 1232;
				this.bracedinitlist();
				this.state = 1233;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1235;
				this.match(CPP14Parser.Goto);
				this.state = 1236;
				this.match(CPP14Parser.Identifier);
				this.state = 1237;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationstatement(): DeclarationstatementContext {
		let _localctx: DeclarationstatementContext = new DeclarationstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CPP14Parser.RULE_declarationstatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1240;
			this.blockdeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public declarationseq(): DeclarationseqContext;
	public declarationseq(_p: number): DeclarationseqContext;
	// @RuleVersion(0)
	public declarationseq(_p?: number): DeclarationseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationseqContext = new DeclarationseqContext(this._ctx, _parentState);
		let _prevctx: DeclarationseqContext = _localctx;
		let _startState: number = 146;
		this.enterRecursionRule(_localctx, 146, CPP14Parser.RULE_declarationseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1243;
			this.declaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_declarationseq);
					this.state = 1245;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1246;
					this.declaration();
					}
					}
				}
				this.state = 1251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CPP14Parser.RULE_declaration);
		try {
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this.blockdeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1253;
				this.functiondefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1254;
				this.templatedeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1255;
				this.explicitinstantiation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1256;
				this.explicitspecialization();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1257;
				this.linkagespecification();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1258;
				this.namespacedefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1259;
				this.emptydeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1260;
				this.attributedeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockdeclaration(): BlockdeclarationContext {
		let _localctx: BlockdeclarationContext = new BlockdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CPP14Parser.RULE_blockdeclaration);
		try {
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1263;
				this.simpledeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1264;
				this.asmdefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1265;
				this.namespacealiasdefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1266;
				this.usingdeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1267;
				this.usingdirective();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1268;
				this.static_assertdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1269;
				this.aliasdeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1270;
				this.opaqueenumdeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasdeclaration(): AliasdeclarationContext {
		let _localctx: AliasdeclarationContext = new AliasdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CPP14Parser.RULE_aliasdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.match(CPP14Parser.Using);
			this.state = 1274;
			this.match(CPP14Parser.Identifier);
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1275;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1278;
			this.match(CPP14Parser.Assign);
			this.state = 1279;
			this.thetypeid();
			this.state = 1280;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpledeclaration(): SimpledeclarationContext {
		let _localctx: SimpledeclarationContext = new SimpledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CPP14Parser.RULE_simpledeclaration);
		let _la: number;
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.T__1:
			case CPP14Parser.T__8:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Struct:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1283;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
				case 1:
					{
					this.state = 1282;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__8 || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.LeftParen - 91)) | (1 << (CPP14Parser.Star - 91)) | (1 << (CPP14Parser.And - 91)) | (1 << (CPP14Parser.Tilde - 91)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
					{
					this.state = 1285;
					this.initdeclaratorlist(0);
					}
				}

				this.state = 1288;
				this.match(CPP14Parser.Semi);
				}
				break;
			case CPP14Parser.Alignas:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1289;
				this.attributespecifierseq(0);
				this.state = 1291;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 1290;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 1293;
				this.initdeclaratorlist(0);
				this.state = 1294;
				this.match(CPP14Parser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public static_assertdeclaration(): Static_assertdeclarationContext {
		let _localctx: Static_assertdeclarationContext = new Static_assertdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CPP14Parser.RULE_static_assertdeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.match(CPP14Parser.Static_assert);
			this.state = 1299;
			this.match(CPP14Parser.LeftParen);
			this.state = 1300;
			this.constantexpression();
			this.state = 1301;
			this.match(CPP14Parser.Comma);
			this.state = 1302;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1303;
			this.match(CPP14Parser.RightParen);
			this.state = 1304;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptydeclaration(): EmptydeclarationContext {
		let _localctx: EmptydeclarationContext = new EmptydeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CPP14Parser.RULE_emptydeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributedeclaration(): AttributedeclarationContext {
		let _localctx: AttributedeclarationContext = new AttributedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CPP14Parser.RULE_attributedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			this.attributespecifierseq(0);
			this.state = 1309;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declspecifier(): DeclspecifierContext {
		let _localctx: DeclspecifierContext = new DeclspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CPP14Parser.RULE_declspecifier);
		try {
			this.state = 1317;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Extern:
			case CPP14Parser.Mutable:
			case CPP14Parser.Register:
			case CPP14Parser.Static:
			case CPP14Parser.Thread_local:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1311;
				this.storageclassspecifier();
				}
				break;
			case CPP14Parser.T__1:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Struct:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1312;
				this.typespecifier();
				}
				break;
			case CPP14Parser.Explicit:
			case CPP14Parser.Inline:
			case CPP14Parser.Virtual:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1313;
				this.functionspecifier();
				}
				break;
			case CPP14Parser.Friend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1314;
				this.match(CPP14Parser.Friend);
				}
				break;
			case CPP14Parser.Typedef:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1315;
				this.match(CPP14Parser.Typedef);
				}
				break;
			case CPP14Parser.Constexpr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1316;
				this.match(CPP14Parser.Constexpr);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declspecifierseq(): DeclspecifierseqContext {
		let _localctx: DeclspecifierseqContext = new DeclspecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CPP14Parser.RULE_declspecifierseq);
		try {
			this.state = 1326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1319;
				this.declspecifier();
				this.state = 1321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 1320;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1323;
				this.declspecifier();
				this.state = 1324;
				this.declspecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageclassspecifier(): StorageclassspecifierContext {
		let _localctx: StorageclassspecifierContext = new StorageclassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CPP14Parser.RULE_storageclassspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1328;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CPP14Parser.Extern - 42)) | (1 << (CPP14Parser.Mutable - 42)) | (1 << (CPP14Parser.Register - 42)) | (1 << (CPP14Parser.Static - 42)))) !== 0) || _la === CPP14Parser.Thread_local)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionspecifier(): FunctionspecifierContext {
		let _localctx: FunctionspecifierContext = new FunctionspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CPP14Parser.RULE_functionspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1330;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Explicit || _la === CPP14Parser.Inline || _la === CPP14Parser.Virtual)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typedefname(): TypedefnameContext {
		let _localctx: TypedefnameContext = new TypedefnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CPP14Parser.RULE_typedefname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typespecifier(): TypespecifierContext {
		let _localctx: TypespecifierContext = new TypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CPP14Parser.RULE_typespecifier);
		try {
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1334;
				this.trailingtypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1335;
				this.classspecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1336;
				this.enumspecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingtypespecifier(): TrailingtypespecifierContext {
		let _localctx: TrailingtypespecifierContext = new TrailingtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CPP14Parser.RULE_trailingtypespecifier);
		try {
			this.state = 1343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1339;
				this.simpletypespecifier();
				}
				break;
			case CPP14Parser.Class:
			case CPP14Parser.Enum:
			case CPP14Parser.Struct:
			case CPP14Parser.Union:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1340;
				this.elaboratedtypespecifier();
				}
				break;
			case CPP14Parser.Typename_:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1341;
				this.typenamespecifier();
				}
				break;
			case CPP14Parser.Const:
			case CPP14Parser.Volatile:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1342;
				this.cvqualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typespecifierseq(): TypespecifierseqContext {
		let _localctx: TypespecifierseqContext = new TypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CPP14Parser.RULE_typespecifierseq);
		try {
			this.state = 1352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1345;
				this.typespecifier();
				this.state = 1347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 1346;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1349;
				this.typespecifier();
				this.state = 1350;
				this.typespecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		let _localctx: TrailingtypespecifierseqContext = new TrailingtypespecifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CPP14Parser.RULE_trailingtypespecifierseq);
		try {
			this.state = 1361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1354;
				this.trailingtypespecifier();
				this.state = 1356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
				case 1:
					{
					this.state = 1355;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1358;
				this.trailingtypespecifier();
				this.state = 1359;
				this.trailingtypespecifierseq();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpletypespecifier(): SimpletypespecifierContext {
		let _localctx: SimpletypespecifierContext = new SimpletypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CPP14Parser.RULE_simpletypespecifier);
		try {
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1364;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1363;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1366;
				this.thetypename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1367;
				this.nestednamespecifier(0);
				this.state = 1368;
				this.match(CPP14Parser.Template);
				this.state = 1369;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1371;
				this.match(CPP14Parser.Char);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1372;
				this.match(CPP14Parser.Char16);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1373;
				this.match(CPP14Parser.Char32);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1374;
				this.match(CPP14Parser.Wchar);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1375;
				this.match(CPP14Parser.Bool);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1376;
				this.match(CPP14Parser.Short);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1377;
				this.match(CPP14Parser.Int);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1378;
				this.match(CPP14Parser.Long);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1379;
				this.match(CPP14Parser.Signed);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1380;
				this.match(CPP14Parser.Unsigned);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1381;
				this.match(CPP14Parser.Float);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1382;
				this.match(CPP14Parser.Double);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1383;
				this.match(CPP14Parser.Void);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1384;
				this.match(CPP14Parser.Auto);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1385;
				this.decltypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thetypename(): ThetypenameContext {
		let _localctx: ThetypenameContext = new ThetypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CPP14Parser.RULE_thetypename);
		try {
			this.state = 1392;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1388;
				this.classname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1389;
				this.enumname();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1390;
				this.typedefname();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1391;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decltypespecifier(): DecltypespecifierContext {
		let _localctx: DecltypespecifierContext = new DecltypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CPP14Parser.RULE_decltypespecifier);
		try {
			this.state = 1403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1394;
				this.match(CPP14Parser.Decltype);
				this.state = 1395;
				this.match(CPP14Parser.LeftParen);
				this.state = 1396;
				this.expression(0);
				this.state = 1397;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1399;
				this.match(CPP14Parser.Decltype);
				this.state = 1400;
				this.match(CPP14Parser.LeftParen);
				this.state = 1401;
				this.match(CPP14Parser.Auto);
				this.state = 1402;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext {
		let _localctx: ElaboratedtypespecifierContext = new ElaboratedtypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CPP14Parser.RULE_elaboratedtypespecifier);
		let _la: number;
		try {
			this.state = 1429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1405;
				this.classkey();
				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1406;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1410;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1409;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1412;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1414;
				this.classkey();
				this.state = 1415;
				this.simpletemplateid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1417;
				this.classkey();
				this.state = 1418;
				this.nestednamespecifier(0);
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 1419;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 1422;
				this.simpletemplateid();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1424;
				this.match(CPP14Parser.Enum);
				this.state = 1426;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1425;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 1428;
				this.match(CPP14Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumname(): EnumnameContext {
		let _localctx: EnumnameContext = new EnumnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CPP14Parser.RULE_enumname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1431;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumspecifier(): EnumspecifierContext {
		let _localctx: EnumspecifierContext = new EnumspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CPP14Parser.RULE_enumspecifier);
		let _la: number;
		try {
			this.state = 1446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1433;
				this.enumhead();
				this.state = 1434;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1435;
					this.enumeratorlist(0);
					}
				}

				this.state = 1438;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1440;
				this.enumhead();
				this.state = 1441;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1442;
				this.enumeratorlist(0);
				this.state = 1443;
				this.match(CPP14Parser.Comma);
				this.state = 1444;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumhead(): EnumheadContext {
		let _localctx: EnumheadContext = new EnumheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CPP14Parser.RULE_enumhead);
		let _la: number;
		try {
			this.state = 1467;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1448;
				this.enumkey();
				this.state = 1450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1449;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 1452;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 1456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1455;
					this.enumbase();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1458;
				this.enumkey();
				this.state = 1460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1459;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1462;
				this.nestednamespecifier(0);
				this.state = 1463;
				this.match(CPP14Parser.Identifier);
				this.state = 1465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1464;
					this.enumbase();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext {
		let _localctx: OpaqueenumdeclarationContext = new OpaqueenumdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CPP14Parser.RULE_opaqueenumdeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.enumkey();
			this.state = 1471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1470;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1473;
			this.match(CPP14Parser.Identifier);
			this.state = 1475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 1474;
				this.enumbase();
				}
			}

			this.state = 1477;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumkey(): EnumkeyContext {
		let _localctx: EnumkeyContext = new EnumkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CPP14Parser.RULE_enumkey);
		try {
			this.state = 1484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1479;
				this.match(CPP14Parser.Enum);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1480;
				this.match(CPP14Parser.Enum);
				this.state = 1481;
				this.match(CPP14Parser.Class);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1482;
				this.match(CPP14Parser.Enum);
				this.state = 1483;
				this.match(CPP14Parser.Struct);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumbase(): EnumbaseContext {
		let _localctx: EnumbaseContext = new EnumbaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CPP14Parser.RULE_enumbase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1486;
			this.match(CPP14Parser.Colon);
			this.state = 1487;
			this.typespecifierseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public enumeratorlist(): EnumeratorlistContext;
	public enumeratorlist(_p: number): EnumeratorlistContext;
	// @RuleVersion(0)
	public enumeratorlist(_p?: number): EnumeratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EnumeratorlistContext = new EnumeratorlistContext(this._ctx, _parentState);
		let _prevctx: EnumeratorlistContext = _localctx;
		let _startState: number = 200;
		this.enterRecursionRule(_localctx, 200, CPP14Parser.RULE_enumeratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1490;
			this.enumeratordefinition();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1497;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new EnumeratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_enumeratorlist);
					this.state = 1492;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1493;
					this.match(CPP14Parser.Comma);
					this.state = 1494;
					this.enumeratordefinition();
					}
					}
				}
				this.state = 1499;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumeratordefinition(): EnumeratordefinitionContext {
		let _localctx: EnumeratordefinitionContext = new EnumeratordefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CPP14Parser.RULE_enumeratordefinition);
		try {
			this.state = 1505;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1500;
				this.enumerator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1501;
				this.enumerator();
				this.state = 1502;
				this.match(CPP14Parser.Assign);
				this.state = 1503;
				this.constantexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerator(): EnumeratorContext {
		let _localctx: EnumeratorContext = new EnumeratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CPP14Parser.RULE_enumerator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespacename(): NamespacenameContext {
		let _localctx: NamespacenameContext = new NamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CPP14Parser.RULE_namespacename);
		try {
			this.state = 1511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1509;
				this.originalnamespacename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1510;
				this.namespacealias();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public originalnamespacename(): OriginalnamespacenameContext {
		let _localctx: OriginalnamespacenameContext = new OriginalnamespacenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CPP14Parser.RULE_originalnamespacename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1513;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespacedefinition(): NamespacedefinitionContext {
		let _localctx: NamespacedefinitionContext = new NamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CPP14Parser.RULE_namespacedefinition);
		try {
			this.state = 1517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1515;
				this.namednamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1516;
				this.unnamednamespacedefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namednamespacedefinition(): NamednamespacedefinitionContext {
		let _localctx: NamednamespacedefinitionContext = new NamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CPP14Parser.RULE_namednamespacedefinition);
		try {
			this.state = 1521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1519;
				this.originalnamespacedefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1520;
				this.extensionnamespacedefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext {
		let _localctx: OriginalnamespacedefinitionContext = new OriginalnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CPP14Parser.RULE_originalnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1523;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1526;
			this.match(CPP14Parser.Namespace);
			this.state = 1527;
			this.match(CPP14Parser.Identifier);
			this.state = 1528;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1529;
			this.namespacebody();
			this.state = 1530;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext {
		let _localctx: ExtensionnamespacedefinitionContext = new ExtensionnamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CPP14Parser.RULE_extensionnamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1532;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1535;
			this.match(CPP14Parser.Namespace);
			this.state = 1536;
			this.originalnamespacename();
			this.state = 1537;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1538;
			this.namespacebody();
			this.state = 1539;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext {
		let _localctx: UnnamednamespacedefinitionContext = new UnnamednamespacedefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CPP14Parser.RULE_unnamednamespacedefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Inline) {
				{
				this.state = 1541;
				this.match(CPP14Parser.Inline);
				}
			}

			this.state = 1544;
			this.match(CPP14Parser.Namespace);
			this.state = 1545;
			this.match(CPP14Parser.LeftBrace);
			this.state = 1546;
			this.namespacebody();
			this.state = 1547;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespacebody(): NamespacebodyContext {
		let _localctx: NamespacebodyContext = new NamespacebodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CPP14Parser.RULE_namespacebody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Semi - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
				{
				this.state = 1549;
				this.declarationseq(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespacealias(): NamespacealiasContext {
		let _localctx: NamespacealiasContext = new NamespacealiasContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CPP14Parser.RULE_namespacealias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1552;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespacealiasdefinition(): NamespacealiasdefinitionContext {
		let _localctx: NamespacealiasdefinitionContext = new NamespacealiasdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CPP14Parser.RULE_namespacealiasdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.match(CPP14Parser.Namespace);
			this.state = 1555;
			this.match(CPP14Parser.Identifier);
			this.state = 1556;
			this.match(CPP14Parser.Assign);
			this.state = 1557;
			this.qualifiednamespacespecifier();
			this.state = 1558;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		let _localctx: QualifiednamespacespecifierContext = new QualifiednamespacespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CPP14Parser.RULE_qualifiednamespacespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1560;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1563;
			this.namespacename();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingdeclaration(): UsingdeclarationContext {
		let _localctx: UsingdeclarationContext = new UsingdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CPP14Parser.RULE_usingdeclaration);
		let _la: number;
		try {
			this.state = 1578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1565;
				this.match(CPP14Parser.Using);
				this.state = 1567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Typename_) {
					{
					this.state = 1566;
					this.match(CPP14Parser.Typename_);
					}
				}

				this.state = 1569;
				this.nestednamespecifier(0);
				this.state = 1570;
				this.unqualifiedid();
				this.state = 1571;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1573;
				this.match(CPP14Parser.Using);
				this.state = 1574;
				this.match(CPP14Parser.Doublecolon);
				this.state = 1575;
				this.unqualifiedid();
				this.state = 1576;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingdirective(): UsingdirectiveContext {
		let _localctx: UsingdirectiveContext = new UsingdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CPP14Parser.RULE_usingdirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1580;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1583;
			this.match(CPP14Parser.Using);
			this.state = 1584;
			this.match(CPP14Parser.Namespace);
			this.state = 1586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1585;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 1588;
			this.namespacename();
			this.state = 1589;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asmdefinition(): AsmdefinitionContext {
		let _localctx: AsmdefinitionContext = new AsmdefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CPP14Parser.RULE_asmdefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.match(CPP14Parser.Asm);
			this.state = 1592;
			this.match(CPP14Parser.LeftParen);
			this.state = 1593;
			this.match(CPP14Parser.Stringliteral);
			this.state = 1594;
			this.match(CPP14Parser.RightParen);
			this.state = 1595;
			this.match(CPP14Parser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkagespecification(): LinkagespecificationContext {
		let _localctx: LinkagespecificationContext = new LinkagespecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CPP14Parser.RULE_linkagespecification);
		let _la: number;
		try {
			this.state = 1607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1597;
				this.match(CPP14Parser.Extern);
				this.state = 1598;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1599;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Asm) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Namespace - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Semi - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
					{
					this.state = 1600;
					this.declarationseq(0);
					}
				}

				this.state = 1603;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1604;
				this.match(CPP14Parser.Extern);
				this.state = 1605;
				this.match(CPP14Parser.Stringliteral);
				this.state = 1606;
				this.declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public attributespecifierseq(): AttributespecifierseqContext;
	public attributespecifierseq(_p: number): AttributespecifierseqContext;
	// @RuleVersion(0)
	public attributespecifierseq(_p?: number): AttributespecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributespecifierseqContext = new AttributespecifierseqContext(this._ctx, _parentState);
		let _prevctx: AttributespecifierseqContext = _localctx;
		let _startState: number = 236;
		this.enterRecursionRule(_localctx, 236, CPP14Parser.RULE_attributespecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1610;
			this.attributespecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1616;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AttributespecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributespecifierseq);
					this.state = 1612;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1613;
					this.attributespecifier();
					}
					}
				}
				this.state = 1618;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributespecifier(): AttributespecifierContext {
		let _localctx: AttributespecifierContext = new AttributespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CPP14Parser.RULE_attributespecifier);
		try {
			this.state = 1626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1619;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1620;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1621;
				this.attributelist(0);
				this.state = 1622;
				this.match(CPP14Parser.RightBracket);
				this.state = 1623;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.Alignas:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1625;
				this.alignmentspecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alignmentspecifier(): AlignmentspecifierContext {
		let _localctx: AlignmentspecifierContext = new AlignmentspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CPP14Parser.RULE_alignmentspecifier);
		let _la: number;
		try {
			this.state = 1644;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1628;
				this.match(CPP14Parser.Alignas);
				this.state = 1629;
				this.match(CPP14Parser.LeftParen);
				this.state = 1630;
				this.thetypeid();
				this.state = 1632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1631;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1634;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1636;
				this.match(CPP14Parser.Alignas);
				this.state = 1637;
				this.match(CPP14Parser.LeftParen);
				this.state = 1638;
				this.constantexpression();
				this.state = 1640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1639;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 1642;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public attributelist(): AttributelistContext;
	public attributelist(_p: number): AttributelistContext;
	// @RuleVersion(0)
	public attributelist(_p?: number): AttributelistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AttributelistContext = new AttributelistContext(this._ctx, _parentState);
		let _prevctx: AttributelistContext = _localctx;
		let _startState: number = 242;
		this.enterRecursionRule(_localctx, 242, CPP14Parser.RULE_attributelist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1648;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
				case 1:
					{
					this.state = 1647;
					this.attribute();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1650;
				this.attribute();
				this.state = 1651;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1667;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1665;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
					case 1:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1655;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1656;
						this.match(CPP14Parser.Comma);
						this.state = 1658;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
						case 1:
							{
							this.state = 1657;
							this.attribute();
							}
							break;
						}
						}
						break;

					case 2:
						{
						_localctx = new AttributelistContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_attributelist);
						this.state = 1660;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 1661;
						this.match(CPP14Parser.Comma);
						this.state = 1662;
						this.attribute();
						this.state = 1663;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
				}
				this.state = 1669;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CPP14Parser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.attributetoken();
			this.state = 1672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				{
				this.state = 1671;
				this.attributeargumentclause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributetoken(): AttributetokenContext {
		let _localctx: AttributetokenContext = new AttributetokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CPP14Parser.RULE_attributetoken);
		try {
			this.state = 1676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1674;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1675;
				this.attributescopedtoken();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributescopedtoken(): AttributescopedtokenContext {
		let _localctx: AttributescopedtokenContext = new AttributescopedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CPP14Parser.RULE_attributescopedtoken);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.attributenamespace();
			this.state = 1679;
			this.match(CPP14Parser.Doublecolon);
			this.state = 1680;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributenamespace(): AttributenamespaceContext {
		let _localctx: AttributenamespaceContext = new AttributenamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CPP14Parser.RULE_attributenamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1682;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeargumentclause(): AttributeargumentclauseContext {
		let _localctx: AttributeargumentclauseContext = new AttributeargumentclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CPP14Parser.RULE_attributeargumentclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1684;
			this.match(CPP14Parser.LeftParen);
			this.state = 1685;
			this.balancedtokenseq(0);
			this.state = 1686;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public balancedtokenseq(): BalancedtokenseqContext;
	public balancedtokenseq(_p: number): BalancedtokenseqContext;
	// @RuleVersion(0)
	public balancedtokenseq(_p?: number): BalancedtokenseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BalancedtokenseqContext = new BalancedtokenseqContext(this._ctx, _parentState);
		let _prevctx: BalancedtokenseqContext = _localctx;
		let _startState: number = 254;
		this.enterRecursionRule(_localctx, 254, CPP14Parser.RULE_balancedtokenseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1690;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1689;
				this.balancedtoken();
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1696;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BalancedtokenseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_balancedtokenseq);
					this.state = 1692;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1693;
					this.balancedtoken();
					}
					}
				}
				this.state = 1698;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public balancedtoken(): BalancedtokenContext {
		let _localctx: BalancedtokenContext = new BalancedtokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CPP14Parser.RULE_balancedtoken);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1699;
				this.match(CPP14Parser.LeftParen);
				this.state = 1700;
				this.balancedtokenseq(0);
				this.state = 1701;
				this.match(CPP14Parser.RightParen);
				}
				break;
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1703;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1704;
				this.balancedtokenseq(0);
				this.state = 1705;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1707;
				this.match(CPP14Parser.LeftBrace);
				this.state = 1708;
				this.balancedtokenseq(0);
				this.state = 1709;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			case CPP14Parser.T__0:
			case CPP14Parser.T__1:
			case CPP14Parser.T__2:
			case CPP14Parser.T__3:
			case CPP14Parser.T__4:
			case CPP14Parser.T__5:
			case CPP14Parser.T__6:
			case CPP14Parser.T__7:
			case CPP14Parser.T__8:
			case CPP14Parser.T__9:
			case CPP14Parser.T__10:
			case CPP14Parser.T__11:
			case CPP14Parser.T__12:
			case CPP14Parser.MultiLineMacro:
			case CPP14Parser.Directive:
			case CPP14Parser.Alignas:
			case CPP14Parser.Alignof:
			case CPP14Parser.Asm:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Break:
			case CPP14Parser.Case:
			case CPP14Parser.Catch:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Continue:
			case CPP14Parser.Decltype:
			case CPP14Parser.Default:
			case CPP14Parser.Delete:
			case CPP14Parser.Do:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.Else:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Export:
			case CPP14Parser.Extern:
			case CPP14Parser.False:
			case CPP14Parser.Final:
			case CPP14Parser.Float:
			case CPP14Parser.For:
			case CPP14Parser.Friend:
			case CPP14Parser.Goto:
			case CPP14Parser.If:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Namespace:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Override:
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
			case CPP14Parser.Register:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Return:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Static_cast:
			case CPP14Parser.Struct:
			case CPP14Parser.Switch:
			case CPP14Parser.Template:
			case CPP14Parser.This:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Throw:
			case CPP14Parser.True:
			case CPP14Parser.Try:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.While:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.Div:
			case CPP14Parser.Mod:
			case CPP14Parser.Caret:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.Not:
			case CPP14Parser.Assign:
			case CPP14Parser.Less:
			case CPP14Parser.Greater:
			case CPP14Parser.PlusAssign:
			case CPP14Parser.MinusAssign:
			case CPP14Parser.StarAssign:
			case CPP14Parser.DivAssign:
			case CPP14Parser.ModAssign:
			case CPP14Parser.XorAssign:
			case CPP14Parser.AndAssign:
			case CPP14Parser.OrAssign:
			case CPP14Parser.LeftShift:
			case CPP14Parser.RightShift:
			case CPP14Parser.LeftShiftAssign:
			case CPP14Parser.RightShiftAssign:
			case CPP14Parser.Equal:
			case CPP14Parser.NotEqual:
			case CPP14Parser.LessEqual:
			case CPP14Parser.GreaterEqual:
			case CPP14Parser.AndAnd:
			case CPP14Parser.OrOr:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Comma:
			case CPP14Parser.ArrowStar:
			case CPP14Parser.Arrow:
			case CPP14Parser.Question:
			case CPP14Parser.Colon:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Dot:
			case CPP14Parser.DotStar:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Decimalliteral:
			case CPP14Parser.Octalliteral:
			case CPP14Parser.Hexadecimalliteral:
			case CPP14Parser.Binaryliteral:
			case CPP14Parser.Integersuffix:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
			case CPP14Parser.Whitespace:
			case CPP14Parser.Newline:
			case CPP14Parser.BlockComment:
			case CPP14Parser.LineComment:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1712;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1711;
						_la = this._input.LA(1);
						if (_la <= 0 || (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.LeftParen - 91)) | (1 << (CPP14Parser.RightParen - 91)) | (1 << (CPP14Parser.LeftBracket - 91)) | (1 << (CPP14Parser.RightBracket - 91)) | (1 << (CPP14Parser.LeftBrace - 91)) | (1 << (CPP14Parser.RightBrace - 91)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1714;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initdeclaratorlist(): InitdeclaratorlistContext;
	public initdeclaratorlist(_p: number): InitdeclaratorlistContext;
	// @RuleVersion(0)
	public initdeclaratorlist(_p?: number): InitdeclaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitdeclaratorlistContext = new InitdeclaratorlistContext(this._ctx, _parentState);
		let _prevctx: InitdeclaratorlistContext = _localctx;
		let _startState: number = 258;
		this.enterRecursionRule(_localctx, 258, CPP14Parser.RULE_initdeclaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1719;
			this.initdeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1726;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitdeclaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initdeclaratorlist);
					this.state = 1721;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1722;
					this.match(CPP14Parser.Comma);
					this.state = 1723;
					this.initdeclarator();
					}
					}
				}
				this.state = 1728;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initdeclarator(): InitdeclaratorContext {
		let _localctx: InitdeclaratorContext = new InitdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CPP14Parser.RULE_initdeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1729;
			this.declarator();
			this.state = 1731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				{
				this.state = 1730;
				this.initializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CPP14Parser.RULE_declarator);
		try {
			this.state = 1738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1733;
				this.ptrdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1734;
				this.noptrdeclarator(0);
				this.state = 1735;
				this.parametersandqualifiers();
				this.state = 1736;
				this.trailingreturntype();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ptrdeclarator(): PtrdeclaratorContext {
		let _localctx: PtrdeclaratorContext = new PtrdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CPP14Parser.RULE_ptrdeclarator);
		try {
			this.state = 1744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1740;
				this.noptrdeclarator(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1741;
				this.ptroperator();
				this.state = 1742;
				this.ptrdeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrdeclarator(): NoptrdeclaratorContext;
	public noptrdeclarator(_p: number): NoptrdeclaratorContext;
	// @RuleVersion(0)
	public noptrdeclarator(_p?: number): NoptrdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrdeclaratorContext = new NoptrdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrdeclaratorContext = _localctx;
		let _startState: number = 266;
		this.enterRecursionRule(_localctx, 266, CPP14Parser.RULE_noptrdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Decltype:
			case CPP14Parser.Operator:
			case CPP14Parser.Tilde:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				{
				this.state = 1747;
				this.declaratorid();
				this.state = 1749;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1748;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.LeftParen:
				{
				this.state = 1751;
				this.match(CPP14Parser.LeftParen);
				this.state = 1752;
				this.ptrdeclarator();
				this.state = 1753;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1770;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1768;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1757;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1758;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
						this.state = 1759;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1760;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1762;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
							{
							this.state = 1761;
							this.constantexpression();
							}
						}

						this.state = 1764;
						this.match(CPP14Parser.RightBracket);
						this.state = 1766;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
						case 1:
							{
							this.state = 1765;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1772;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parametersandqualifiers(): ParametersandqualifiersContext {
		let _localctx: ParametersandqualifiersContext = new ParametersandqualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CPP14Parser.RULE_parametersandqualifiers);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1773;
			this.match(CPP14Parser.LeftParen);
			this.state = 1774;
			this.parameterdeclarationclause();
			this.state = 1775;
			this.match(CPP14Parser.RightParen);
			this.state = 1777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				{
				this.state = 1776;
				this.cvqualifierseq();
				}
				break;
			}
			this.state = 1780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
			case 1:
				{
				this.state = 1779;
				this.refqualifier();
				}
				break;
			}
			this.state = 1783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				{
				this.state = 1782;
				this.exceptionspecification();
				}
				break;
			}
			this.state = 1786;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1785;
				this.attributespecifierseq(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trailingreturntype(): TrailingreturntypeContext {
		let _localctx: TrailingreturntypeContext = new TrailingreturntypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CPP14Parser.RULE_trailingreturntype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1788;
			this.match(CPP14Parser.Arrow);
			this.state = 1789;
			this.trailingtypespecifierseq();
			this.state = 1791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 187, this._ctx) ) {
			case 1:
				{
				this.state = 1790;
				this.abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ptroperator(): PtroperatorContext {
		let _localctx: PtroperatorContext = new PtroperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CPP14Parser.RULE_ptroperator);
		try {
			this.state = 1816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Star:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1793;
				this.match(CPP14Parser.Star);
				this.state = 1795;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
				case 1:
					{
					this.state = 1794;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1798;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
				case 1:
					{
					this.state = 1797;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			case CPP14Parser.And:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1800;
				this.match(CPP14Parser.And);
				this.state = 1802;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					this.state = 1801;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1804;
				this.match(CPP14Parser.T__8);
				this.state = 1806;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
				case 1:
					{
					this.state = 1805;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;
			case CPP14Parser.Decltype:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1808;
				this.nestednamespecifier(0);
				this.state = 1809;
				this.match(CPP14Parser.Star);
				this.state = 1811;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 192, this._ctx) ) {
				case 1:
					{
					this.state = 1810;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 1814;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1813;
					this.cvqualifierseq();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvqualifierseq(): CvqualifierseqContext {
		let _localctx: CvqualifierseqContext = new CvqualifierseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CPP14Parser.RULE_cvqualifierseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
			this.cvqualifier();
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1819;
				this.cvqualifierseq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cvqualifier(): CvqualifierContext {
		let _localctx: CvqualifierContext = new CvqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CPP14Parser.RULE_cvqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Const || _la === CPP14Parser.Volatile)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refqualifier(): RefqualifierContext {
		let _localctx: RefqualifierContext = new RefqualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CPP14Parser.RULE_refqualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.T__8 || _la === CPP14Parser.And)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaratorid(): DeclaratoridContext {
		let _localctx: DeclaratoridContext = new DeclaratoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CPP14Parser.RULE_declaratorid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Ellipsis) {
				{
				this.state = 1826;
				this.match(CPP14Parser.Ellipsis);
				}
			}

			this.state = 1829;
			this.idexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thetypeid(): ThetypeidContext {
		let _localctx: ThetypeidContext = new ThetypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CPP14Parser.RULE_thetypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1831;
			this.typespecifierseq();
			this.state = 1833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 197, this._ctx) ) {
			case 1:
				{
				this.state = 1832;
				this.abstractdeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractdeclarator(): AbstractdeclaratorContext {
		let _localctx: AbstractdeclaratorContext = new AbstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CPP14Parser.RULE_abstractdeclarator);
		try {
			this.state = 1843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1835;
				this.ptrabstractdeclarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1837;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
				case 1:
					{
					this.state = 1836;
					this.noptrabstractdeclarator(0);
					}
					break;
				}
				this.state = 1839;
				this.parametersandqualifiers();
				this.state = 1840;
				this.trailingreturntype();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1842;
				this.abstractpackdeclarator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext {
		let _localctx: PtrabstractdeclaratorContext = new PtrabstractdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CPP14Parser.RULE_ptrabstractdeclarator);
		try {
			this.state = 1850;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1845;
				this.noptrabstractdeclarator(0);
				}
				break;
			case CPP14Parser.T__8:
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1846;
				this.ptroperator();
				this.state = 1848;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1847;
					this.ptrabstractdeclarator();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext;
	public noptrabstractdeclarator(_p: number): NoptrabstractdeclaratorContext;
	// @RuleVersion(0)
	public noptrabstractdeclarator(_p?: number): NoptrabstractdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractdeclaratorContext = new NoptrabstractdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractdeclaratorContext = _localctx;
		let _startState: number = 288;
		this.enterRecursionRule(_localctx, 288, CPP14Parser.RULE_noptrabstractdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1853;
				this.parametersandqualifiers();
				}
				break;

			case 2:
				{
				this.state = 1854;
				this.match(CPP14Parser.LeftBracket);
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 1855;
					this.constantexpression();
					}
				}

				this.state = 1858;
				this.match(CPP14Parser.RightBracket);
				this.state = 1860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
				case 1:
					{
					this.state = 1859;
					this.attributespecifierseq(0);
					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 1862;
				this.match(CPP14Parser.LeftParen);
				this.state = 1863;
				this.ptrabstractdeclarator();
				this.state = 1864;
				this.match(CPP14Parser.RightParen);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1881;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1879;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 1868;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1869;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
						this.state = 1870;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1871;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1873;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
							{
							this.state = 1872;
							this.constantexpression();
							}
						}

						this.state = 1875;
						this.match(CPP14Parser.RightBracket);
						this.state = 1877;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
						case 1:
							{
							this.state = 1876;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 208, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public abstractpackdeclarator(): AbstractpackdeclaratorContext {
		let _localctx: AbstractpackdeclaratorContext = new AbstractpackdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CPP14Parser.RULE_abstractpackdeclarator);
		try {
			this.state = 1888;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Ellipsis:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1884;
				this.noptrabstractpackdeclarator(0);
				}
				break;
			case CPP14Parser.T__8:
			case CPP14Parser.Decltype:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1885;
				this.ptroperator();
				this.state = 1886;
				this.abstractpackdeclarator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext;
	public noptrabstractpackdeclarator(_p: number): NoptrabstractpackdeclaratorContext;
	// @RuleVersion(0)
	public noptrabstractpackdeclarator(_p?: number): NoptrabstractpackdeclaratorContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NoptrabstractpackdeclaratorContext = new NoptrabstractpackdeclaratorContext(this._ctx, _parentState);
		let _prevctx: NoptrabstractpackdeclaratorContext = _localctx;
		let _startState: number = 292;
		this.enterRecursionRule(_localctx, 292, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1891;
			this.match(CPP14Parser.Ellipsis);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1906;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1904;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
					case 1:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 1893;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1894;
						this.parametersandqualifiers();
						}
						break;

					case 2:
						{
						_localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
						this.state = 1895;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1896;
						this.match(CPP14Parser.LeftBracket);
						this.state = 1898;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
							{
							this.state = 1897;
							this.constantexpression();
							}
						}

						this.state = 1900;
						this.match(CPP14Parser.RightBracket);
						this.state = 1902;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
						case 1:
							{
							this.state = 1901;
							this.attributespecifierseq(0);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1908;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		let _localctx: ParameterdeclarationclauseContext = new ParameterdeclarationclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CPP14Parser.RULE_parameterdeclarationclause);
		let _la: number;
		try {
			this.state = 1919;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__4) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
					{
					this.state = 1909;
					this.parameterdeclarationlist(0);
					}
				}

				this.state = 1913;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 1912;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1915;
				this.parameterdeclarationlist(0);
				this.state = 1916;
				this.match(CPP14Parser.Comma);
				this.state = 1917;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public parameterdeclarationlist(): ParameterdeclarationlistContext;
	public parameterdeclarationlist(_p: number): ParameterdeclarationlistContext;
	// @RuleVersion(0)
	public parameterdeclarationlist(_p?: number): ParameterdeclarationlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ParameterdeclarationlistContext = new ParameterdeclarationlistContext(this._ctx, _parentState);
		let _prevctx: ParameterdeclarationlistContext = _localctx;
		let _startState: number = 296;
		this.enterRecursionRule(_localctx, 296, CPP14Parser.RULE_parameterdeclarationlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1922;
			this.parameterdeclaration();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1929;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_parameterdeclarationlist);
					this.state = 1924;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1925;
					this.match(CPP14Parser.Comma);
					this.state = 1926;
					this.parameterdeclaration();
					}
					}
				}
				this.state = 1931;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterdeclaration(): ParameterdeclarationContext {
		let _localctx: ParameterdeclarationContext = new ParameterdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CPP14Parser.RULE_parameterdeclaration);
		let _la: number;
		try {
			this.state = 1975;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 228, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1933;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__4) {
					{
					this.state = 1932;
					this.uparam();
					}
				}

				this.state = 1936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1935;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1938;
				this.declspecifierseq();
				this.state = 1939;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__4) {
					{
					this.state = 1941;
					this.uparam();
					}
				}

				this.state = 1945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1944;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1947;
				this.declspecifierseq();
				this.state = 1948;
				this.declarator();
				this.state = 1949;
				this.match(CPP14Parser.Assign);
				this.state = 1950;
				this.initializerclause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__4) {
					{
					this.state = 1952;
					this.uparam();
					}
				}

				this.state = 1956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1955;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1958;
				this.declspecifierseq();
				this.state = 1960;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 224, this._ctx) ) {
				case 1:
					{
					this.state = 1959;
					this.abstractdeclarator();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__4) {
					{
					this.state = 1962;
					this.uparam();
					}
				}

				this.state = 1966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 1965;
					this.attributespecifierseq(0);
					}
				}

				this.state = 1968;
				this.declspecifierseq();
				this.state = 1970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__8 || _la === CPP14Parser.Decltype || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.LeftParen - 91)) | (1 << (CPP14Parser.LeftBracket - 91)) | (1 << (CPP14Parser.Star - 91)) | (1 << (CPP14Parser.And - 91)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
					{
					this.state = 1969;
					this.abstractdeclarator();
					}
				}

				this.state = 1972;
				this.match(CPP14Parser.Assign);
				this.state = 1973;
				this.initializerclause();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functiondefinition(): FunctiondefinitionContext {
		let _localctx: FunctiondefinitionContext = new FunctiondefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CPP14Parser.RULE_functiondefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
				{
				this.state = 1977;
				this.attributespecifierseq(0);
				}
			}

			this.state = 1981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1980;
				this.declspecifierseq();
				}
				break;
			}
			this.state = 1983;
			this.declarator();
			this.state = 1985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Final || _la === CPP14Parser.Override) {
				{
				this.state = 1984;
				this.virtspecifierseq(0);
				}
			}

			this.state = 1987;
			this.functionbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionbody(): FunctionbodyContext {
		let _localctx: FunctionbodyContext = new FunctionbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CPP14Parser.RULE_functionbody);
		let _la: number;
		try {
			this.state = 2000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 1989;
					this.ctorinitializer();
					}
				}

				this.state = 1992;
				this.compoundstatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1993;
				this.functiontryblock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1994;
				this.match(CPP14Parser.Assign);
				this.state = 1995;
				this.match(CPP14Parser.Default);
				this.state = 1996;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1997;
				this.match(CPP14Parser.Assign);
				this.state = 1998;
				this.match(CPP14Parser.Delete);
				this.state = 1999;
				this.match(CPP14Parser.Semi);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CPP14Parser.RULE_initializer);
		try {
			this.state = 2007;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.LeftBrace:
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2002;
				this.braceorequalinitializer();
				}
				break;
			case CPP14Parser.LeftParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2003;
				this.match(CPP14Parser.LeftParen);
				this.state = 2004;
				this.expressionlist();
				this.state = 2005;
				this.match(CPP14Parser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public braceorequalinitializer(): BraceorequalinitializerContext {
		let _localctx: BraceorequalinitializerContext = new BraceorequalinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CPP14Parser.RULE_braceorequalinitializer);
		try {
			this.state = 2012;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Assign:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2009;
				this.match(CPP14Parser.Assign);
				this.state = 2010;
				this.initializerclause();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2011;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerclause(): InitializerclauseContext {
		let _localctx: InitializerclauseContext = new InitializerclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CPP14Parser.RULE_initializerclause);
		try {
			this.state = 2016;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.T__6:
			case CPP14Parser.T__7:
			case CPP14Parser.Alignof:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Const_cast:
			case CPP14Parser.Decltype:
			case CPP14Parser.Delete:
			case CPP14Parser.Double:
			case CPP14Parser.Dynamic_cast:
			case CPP14Parser.False:
			case CPP14Parser.Float:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.New:
			case CPP14Parser.Noexcept:
			case CPP14Parser.Nullptr:
			case CPP14Parser.Operator:
			case CPP14Parser.Reinterpret_cast:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Sizeof:
			case CPP14Parser.Static_cast:
			case CPP14Parser.This:
			case CPP14Parser.Throw:
			case CPP14Parser.True:
			case CPP14Parser.Typeid_:
			case CPP14Parser.Typename_:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Void:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Plus:
			case CPP14Parser.Minus:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Or:
			case CPP14Parser.Tilde:
			case CPP14Parser.PlusPlus:
			case CPP14Parser.MinusMinus:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Identifier:
			case CPP14Parser.Integerliteral:
			case CPP14Parser.Characterliteral:
			case CPP14Parser.Floatingliteral:
			case CPP14Parser.Stringliteral:
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2014;
				this.assignmentexpression();
				}
				break;
			case CPP14Parser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2015;
				this.bracedinitlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public initializerlist(): InitializerlistContext;
	public initializerlist(_p: number): InitializerlistContext;
	// @RuleVersion(0)
	public initializerlist(_p?: number): InitializerlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InitializerlistContext = new InitializerlistContext(this._ctx, _parentState);
		let _prevctx: InitializerlistContext = _localctx;
		let _startState: number = 310;
		this.enterRecursionRule(_localctx, 310, CPP14Parser.RULE_initializerlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2019;
			this.initializerclause();
			this.state = 2021;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 2020;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2031;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InitializerlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_initializerlist);
					this.state = 2023;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2024;
					this.match(CPP14Parser.Comma);
					this.state = 2025;
					this.initializerclause();
					this.state = 2027;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 238, this._ctx) ) {
					case 1:
						{
						this.state = 2026;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2033;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 239, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracedinitlist(): BracedinitlistContext {
		let _localctx: BracedinitlistContext = new BracedinitlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CPP14Parser.RULE_bracedinitlist);
		let _la: number;
		try {
			this.state = 2043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 241, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2034;
				this.match(CPP14Parser.LeftBrace);
				this.state = 2035;
				this.initializerlist(0);
				this.state = 2037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Comma) {
					{
					this.state = 2036;
					this.match(CPP14Parser.Comma);
					}
				}

				this.state = 2039;
				this.match(CPP14Parser.RightBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2041;
				this.match(CPP14Parser.LeftBrace);
				this.state = 2042;
				this.match(CPP14Parser.RightBrace);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classname(): ClassnameContext {
		let _localctx: ClassnameContext = new ClassnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CPP14Parser.RULE_classname);
		try {
			this.state = 2047;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2045;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2046;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classspecifier(): ClassspecifierContext {
		let _localctx: ClassspecifierContext = new ClassspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CPP14Parser.RULE_classspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2050;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.T__1) {
				{
				this.state = 2049;
				this.uclass();
				}
			}

			this.state = 2052;
			this.classhead();
			this.state = 2053;
			this.match(CPP14Parser.LeftBrace);
			this.state = 2055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.T__5) {
				{
				this.state = 2054;
				this.generatedbody();
				}
			}

			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__2) | (1 << CPP14Parser.T__3) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (CPP14Parser.Colon - 134)) | (1 << (CPP14Parser.Doublecolon - 134)) | (1 << (CPP14Parser.Semi - 134)) | (1 << (CPP14Parser.Ellipsis - 134)) | (1 << (CPP14Parser.Identifier - 134)))) !== 0)) {
				{
				this.state = 2057;
				this.memberspecification();
				}
			}

			this.state = 2060;
			this.match(CPP14Parser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classhead(): ClassheadContext {
		let _localctx: ClassheadContext = new ClassheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CPP14Parser.RULE_classhead);
		let _la: number;
		try {
			this.state = 2086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2062;
				this.classkey();
				this.state = 2064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__0) {
					{
					this.state = 2063;
					this.gameapitag();
					}
				}

				this.state = 2067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2066;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2069;
				this.classheadname();
				this.state = 2071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Final) {
					{
					this.state = 2070;
					this.classvirtspecifier();
					}
				}

				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 2073;
					this.baseclause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2076;
				this.classkey();
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__0) {
					{
					this.state = 2077;
					this.gameapitag();
					}
				}

				this.state = 2081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2080;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Colon) {
					{
					this.state = 2083;
					this.baseclause();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classheadname(): ClassheadnameContext {
		let _localctx: ClassheadnameContext = new ClassheadnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CPP14Parser.RULE_classheadname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 2088;
				this.nestednamespecifier(0);
				}
				break;
			}
			this.state = 2091;
			this.classname();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classvirtspecifier(): ClassvirtspecifierContext {
		let _localctx: ClassvirtspecifierContext = new ClassvirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CPP14Parser.RULE_classvirtspecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2093;
			this.match(CPP14Parser.Final);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classkey(): ClasskeyContext {
		let _localctx: ClasskeyContext = new ClasskeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CPP14Parser.RULE_classkey);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2095;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Class || _la === CPP14Parser.Struct || _la === CPP14Parser.Union)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberspecification(): MemberspecificationContext {
		let _localctx: MemberspecificationContext = new MemberspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CPP14Parser.RULE_memberspecification);
		let _la: number;
		try {
			this.state = 2106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.T__1:
			case CPP14Parser.T__2:
			case CPP14Parser.T__3:
			case CPP14Parser.T__8:
			case CPP14Parser.Alignas:
			case CPP14Parser.Auto:
			case CPP14Parser.Bool:
			case CPP14Parser.Char:
			case CPP14Parser.Char16:
			case CPP14Parser.Char32:
			case CPP14Parser.Class:
			case CPP14Parser.Const:
			case CPP14Parser.Constexpr:
			case CPP14Parser.Decltype:
			case CPP14Parser.Double:
			case CPP14Parser.Enum:
			case CPP14Parser.Explicit:
			case CPP14Parser.Extern:
			case CPP14Parser.Float:
			case CPP14Parser.Friend:
			case CPP14Parser.Inline:
			case CPP14Parser.Int:
			case CPP14Parser.Long:
			case CPP14Parser.Mutable:
			case CPP14Parser.Operator:
			case CPP14Parser.Register:
			case CPP14Parser.Short:
			case CPP14Parser.Signed:
			case CPP14Parser.Static:
			case CPP14Parser.Static_assert:
			case CPP14Parser.Struct:
			case CPP14Parser.Template:
			case CPP14Parser.Thread_local:
			case CPP14Parser.Typedef:
			case CPP14Parser.Typename_:
			case CPP14Parser.Union:
			case CPP14Parser.Unsigned:
			case CPP14Parser.Using:
			case CPP14Parser.Virtual:
			case CPP14Parser.Void:
			case CPP14Parser.Volatile:
			case CPP14Parser.Wchar:
			case CPP14Parser.LeftParen:
			case CPP14Parser.LeftBracket:
			case CPP14Parser.Star:
			case CPP14Parser.And:
			case CPP14Parser.Tilde:
			case CPP14Parser.Colon:
			case CPP14Parser.Doublecolon:
			case CPP14Parser.Semi:
			case CPP14Parser.Ellipsis:
			case CPP14Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2097;
				this.memberdeclaration();
				this.state = 2099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__2) | (1 << CPP14Parser.T__3) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (CPP14Parser.Colon - 134)) | (1 << (CPP14Parser.Doublecolon - 134)) | (1 << (CPP14Parser.Semi - 134)) | (1 << (CPP14Parser.Ellipsis - 134)) | (1 << (CPP14Parser.Identifier - 134)))) !== 0)) {
					{
					this.state = 2098;
					this.memberspecification();
					}
				}

				}
				break;
			case CPP14Parser.Private:
			case CPP14Parser.Protected:
			case CPP14Parser.Public:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2101;
				this.accessspecifier();
				this.state = 2102;
				this.match(CPP14Parser.Colon);
				this.state = 2104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__2) | (1 << CPP14Parser.T__3) | (1 << CPP14Parser.T__8) | (1 << CPP14Parser.Alignas) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Constexpr))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Explicit - 32)) | (1 << (CPP14Parser.Extern - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Friend - 32)) | (1 << (CPP14Parser.Inline - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.Mutable - 32)) | (1 << (CPP14Parser.Operator - 32)) | (1 << (CPP14Parser.Private - 32)) | (1 << (CPP14Parser.Protected - 32)) | (1 << (CPP14Parser.Public - 32)) | (1 << (CPP14Parser.Register - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Static - 66)) | (1 << (CPP14Parser.Static_assert - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Template - 66)) | (1 << (CPP14Parser.Thread_local - 66)) | (1 << (CPP14Parser.Typedef - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Using - 66)) | (1 << (CPP14Parser.Virtual - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)) | (1 << (CPP14Parser.LeftParen - 66)) | (1 << (CPP14Parser.LeftBracket - 66)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CPP14Parser.Star - 99)) | (1 << (CPP14Parser.And - 99)) | (1 << (CPP14Parser.Tilde - 99)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (CPP14Parser.Colon - 134)) | (1 << (CPP14Parser.Doublecolon - 134)) | (1 << (CPP14Parser.Semi - 134)) | (1 << (CPP14Parser.Ellipsis - 134)) | (1 << (CPP14Parser.Identifier - 134)))) !== 0)) {
					{
					this.state = 2103;
					this.memberspecification();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberdeclaration(): MemberdeclarationContext {
		let _localctx: MemberdeclarationContext = new MemberdeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CPP14Parser.RULE_memberdeclaration);
		let _la: number;
		try {
			this.state = 2130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__3) {
					{
					this.state = 2108;
					this.uproperty();
					}
				}

				this.state = 2112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__2) {
					{
					this.state = 2111;
					this.ufunction();
					}
				}

				this.state = 2115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 2114;
					this.attributespecifierseq(0);
					}
					break;
				}
				this.state = 2118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 2117;
					this.declspecifierseq();
					}
					break;
				}
				this.state = 2121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__8 || _la === CPP14Parser.Alignas || _la === CPP14Parser.Decltype || _la === CPP14Parser.Operator || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.LeftParen - 91)) | (1 << (CPP14Parser.LeftBracket - 91)) | (1 << (CPP14Parser.Star - 91)) | (1 << (CPP14Parser.And - 91)) | (1 << (CPP14Parser.Tilde - 91)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (CPP14Parser.Colon - 134)) | (1 << (CPP14Parser.Doublecolon - 134)) | (1 << (CPP14Parser.Ellipsis - 134)) | (1 << (CPP14Parser.Identifier - 134)))) !== 0)) {
					{
					this.state = 2120;
					this.memberdeclaratorlist(0);
					}
				}

				this.state = 2123;
				this.match(CPP14Parser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2124;
				this.functiondefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2125;
				this.usingdeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2126;
				this.static_assertdeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2127;
				this.templatedeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2128;
				this.aliasdeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2129;
				this.emptydeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public memberdeclaratorlist(): MemberdeclaratorlistContext;
	public memberdeclaratorlist(_p: number): MemberdeclaratorlistContext;
	// @RuleVersion(0)
	public memberdeclaratorlist(_p?: number): MemberdeclaratorlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MemberdeclaratorlistContext = new MemberdeclaratorlistContext(this._ctx, _parentState);
		let _prevctx: MemberdeclaratorlistContext = _localctx;
		let _startState: number = 330;
		this.enterRecursionRule(_localctx, 330, CPP14Parser.RULE_memberdeclaratorlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2133;
			this.memberdeclarator();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2140;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_memberdeclaratorlist);
					this.state = 2135;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2136;
					this.match(CPP14Parser.Comma);
					this.state = 2137;
					this.memberdeclarator();
					}
					}
				}
				this.state = 2142;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberdeclarator(): MemberdeclaratorContext {
		let _localctx: MemberdeclaratorContext = new MemberdeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CPP14Parser.RULE_memberdeclarator);
		let _la: number;
		try {
			this.state = 2162;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2143;
				this.declarator();
				this.state = 2145;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 265, this._ctx) ) {
				case 1:
					{
					this.state = 2144;
					this.virtspecifierseq(0);
					}
					break;
				}
				this.state = 2148;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
				case 1:
					{
					this.state = 2147;
					this.purespecifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2150;
				this.declarator();
				this.state = 2152;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 267, this._ctx) ) {
				case 1:
					{
					this.state = 2151;
					this.braceorequalinitializer();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2154;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2157;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2160;
				this.match(CPP14Parser.Colon);
				this.state = 2161;
				this.constantexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public virtspecifierseq(): VirtspecifierseqContext;
	public virtspecifierseq(_p: number): VirtspecifierseqContext;
	// @RuleVersion(0)
	public virtspecifierseq(_p?: number): VirtspecifierseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: VirtspecifierseqContext = new VirtspecifierseqContext(this._ctx, _parentState);
		let _prevctx: VirtspecifierseqContext = _localctx;
		let _startState: number = 334;
		this.enterRecursionRule(_localctx, 334, CPP14Parser.RULE_virtspecifierseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2165;
			this.virtspecifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new VirtspecifierseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_virtspecifierseq);
					this.state = 2167;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2168;
					this.virtspecifier();
					}
					}
				}
				this.state = 2173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public virtspecifier(): VirtspecifierContext {
		let _localctx: VirtspecifierContext = new VirtspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CPP14Parser.RULE_virtspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.Final || _la === CPP14Parser.Override)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public purespecifier(): PurespecifierContext {
		let _localctx: PurespecifierContext = new PurespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CPP14Parser.RULE_purespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(CPP14Parser.Assign);
			this.state = 2177;
			this.match(CPP14Parser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseclause(): BaseclauseContext {
		let _localctx: BaseclauseContext = new BaseclauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CPP14Parser.RULE_baseclause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2179;
			this.match(CPP14Parser.Colon);
			this.state = 2180;
			this.basespecifierlist(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public basespecifierlist(): BasespecifierlistContext;
	public basespecifierlist(_p: number): BasespecifierlistContext;
	// @RuleVersion(0)
	public basespecifierlist(_p?: number): BasespecifierlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BasespecifierlistContext = new BasespecifierlistContext(this._ctx, _parentState);
		let _prevctx: BasespecifierlistContext = _localctx;
		let _startState: number = 342;
		this.enterRecursionRule(_localctx, 342, CPP14Parser.RULE_basespecifierlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2183;
			this.basespecifier();
			this.state = 2185;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 2184;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BasespecifierlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_basespecifierlist);
					this.state = 2187;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2188;
					this.match(CPP14Parser.Comma);
					this.state = 2189;
					this.basespecifier();
					this.state = 2191;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 273, this._ctx) ) {
					case 1:
						{
						this.state = 2190;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basespecifier(): BasespecifierContext {
		let _localctx: BasespecifierContext = new BasespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CPP14Parser.RULE_basespecifier);
		let _la: number;
		try {
			this.state = 2219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2198;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2201;
				this.basetypespecifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2202;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2205;
				this.match(CPP14Parser.Virtual);
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (CPP14Parser.Private - 60)) | (1 << (CPP14Parser.Protected - 60)) | (1 << (CPP14Parser.Public - 60)))) !== 0)) {
					{
					this.state = 2206;
					this.accessspecifier();
					}
				}

				this.state = 2209;
				this.basetypespecifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2210;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2213;
				this.accessspecifier();
				this.state = 2215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Virtual) {
					{
					this.state = 2214;
					this.match(CPP14Parser.Virtual);
					}
				}

				this.state = 2217;
				this.basetypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classordecltype(): ClassordecltypeContext {
		let _localctx: ClassordecltypeContext = new ClassordecltypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CPP14Parser.RULE_classordecltype);
		try {
			this.state = 2226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
				case 1:
					{
					this.state = 2221;
					this.nestednamespecifier(0);
					}
					break;
				}
				this.state = 2224;
				this.classname();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2225;
				this.decltypespecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basetypespecifier(): BasetypespecifierContext {
		let _localctx: BasetypespecifierContext = new BasetypespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CPP14Parser.RULE_basetypespecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2228;
			this.classordecltype();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public accessspecifier(): AccessspecifierContext {
		let _localctx: AccessspecifierContext = new AccessspecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CPP14Parser.RULE_accessspecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (CPP14Parser.Private - 60)) | (1 << (CPP14Parser.Protected - 60)) | (1 << (CPP14Parser.Public - 60)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversionfunctionid(): ConversionfunctionidContext {
		let _localctx: ConversionfunctionidContext = new ConversionfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CPP14Parser.RULE_conversionfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2232;
			this.match(CPP14Parser.Operator);
			this.state = 2233;
			this.conversiontypeid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversiontypeid(): ConversiontypeidContext {
		let _localctx: ConversiontypeidContext = new ConversiontypeidContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CPP14Parser.RULE_conversiontypeid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2235;
			this.typespecifierseq();
			this.state = 2237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				this.state = 2236;
				this.conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversiondeclarator(): ConversiondeclaratorContext {
		let _localctx: ConversiondeclaratorContext = new ConversiondeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CPP14Parser.RULE_conversiondeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2239;
			this.ptroperator();
			this.state = 2241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				{
				this.state = 2240;
				this.conversiondeclarator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ctorinitializer(): CtorinitializerContext {
		let _localctx: CtorinitializerContext = new CtorinitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CPP14Parser.RULE_ctorinitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2243;
			this.match(CPP14Parser.Colon);
			this.state = 2244;
			this.meminitializerlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meminitializerlist(): MeminitializerlistContext {
		let _localctx: MeminitializerlistContext = new MeminitializerlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CPP14Parser.RULE_meminitializerlist);
		let _la: number;
		try {
			this.state = 2257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2246;
				this.meminitializer();
				this.state = 2248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2247;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2250;
				this.meminitializer();
				this.state = 2252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Ellipsis) {
					{
					this.state = 2251;
					this.match(CPP14Parser.Ellipsis);
					}
				}

				this.state = 2254;
				this.match(CPP14Parser.Comma);
				this.state = 2255;
				this.meminitializerlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meminitializer(): MeminitializerContext {
		let _localctx: MeminitializerContext = new MeminitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CPP14Parser.RULE_meminitializer);
		let _la: number;
		try {
			this.state = 2269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2259;
				this.meminitializerid();
				this.state = 2260;
				this.match(CPP14Parser.LeftParen);
				this.state = 2262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (CPP14Parser.T__6 - 7)) | (1 << (CPP14Parser.T__7 - 7)) | (1 << (CPP14Parser.Alignof - 7)) | (1 << (CPP14Parser.Auto - 7)) | (1 << (CPP14Parser.Bool - 7)) | (1 << (CPP14Parser.Char - 7)) | (1 << (CPP14Parser.Char16 - 7)) | (1 << (CPP14Parser.Char32 - 7)) | (1 << (CPP14Parser.Const_cast - 7)) | (1 << (CPP14Parser.Decltype - 7)) | (1 << (CPP14Parser.Delete - 7)) | (1 << (CPP14Parser.Double - 7)) | (1 << (CPP14Parser.Dynamic_cast - 7)))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (CPP14Parser.False - 43)) | (1 << (CPP14Parser.Float - 43)) | (1 << (CPP14Parser.Int - 43)) | (1 << (CPP14Parser.Long - 43)) | (1 << (CPP14Parser.New - 43)) | (1 << (CPP14Parser.Noexcept - 43)) | (1 << (CPP14Parser.Nullptr - 43)) | (1 << (CPP14Parser.Operator - 43)) | (1 << (CPP14Parser.Reinterpret_cast - 43)) | (1 << (CPP14Parser.Short - 43)) | (1 << (CPP14Parser.Signed - 43)) | (1 << (CPP14Parser.Sizeof - 43)) | (1 << (CPP14Parser.Static_cast - 43)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CPP14Parser.This - 75)) | (1 << (CPP14Parser.Throw - 75)) | (1 << (CPP14Parser.True - 75)) | (1 << (CPP14Parser.Typeid_ - 75)) | (1 << (CPP14Parser.Typename_ - 75)) | (1 << (CPP14Parser.Unsigned - 75)) | (1 << (CPP14Parser.Void - 75)) | (1 << (CPP14Parser.Wchar - 75)) | (1 << (CPP14Parser.LeftParen - 75)) | (1 << (CPP14Parser.LeftBracket - 75)) | (1 << (CPP14Parser.LeftBrace - 75)) | (1 << (CPP14Parser.Plus - 75)) | (1 << (CPP14Parser.Minus - 75)) | (1 << (CPP14Parser.Star - 75)) | (1 << (CPP14Parser.And - 75)) | (1 << (CPP14Parser.Or - 75)) | (1 << (CPP14Parser.Tilde - 75)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (CPP14Parser.PlusPlus - 128)) | (1 << (CPP14Parser.MinusMinus - 128)) | (1 << (CPP14Parser.Doublecolon - 128)) | (1 << (CPP14Parser.Identifier - 128)) | (1 << (CPP14Parser.Integerliteral - 128)) | (1 << (CPP14Parser.Characterliteral - 128)) | (1 << (CPP14Parser.Floatingliteral - 128)) | (1 << (CPP14Parser.Stringliteral - 128)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 128)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 128)) | (1 << (CPP14Parser.Userdefinedstringliteral - 128)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 128)))) !== 0)) {
					{
					this.state = 2261;
					this.expressionlist();
					}
				}

				this.state = 2264;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2266;
				this.meminitializerid();
				this.state = 2267;
				this.bracedinitlist();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public meminitializerid(): MeminitializeridContext {
		let _localctx: MeminitializeridContext = new MeminitializeridContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CPP14Parser.RULE_meminitializerid);
		try {
			this.state = 2273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2271;
				this.classordecltype();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2272;
				this.match(CPP14Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorfunctionid(): OperatorfunctionidContext {
		let _localctx: OperatorfunctionidContext = new OperatorfunctionidContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CPP14Parser.RULE_operatorfunctionid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2275;
			this.match(CPP14Parser.Operator);
			this.state = 2276;
			this.theoperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literaloperatorid(): LiteraloperatoridContext {
		let _localctx: LiteraloperatoridContext = new LiteraloperatoridContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CPP14Parser.RULE_literaloperatorid);
		try {
			this.state = 2283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 291, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2278;
				this.match(CPP14Parser.Operator);
				this.state = 2279;
				this.match(CPP14Parser.Stringliteral);
				this.state = 2280;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2281;
				this.match(CPP14Parser.Operator);
				this.state = 2282;
				this.match(CPP14Parser.Userdefinedstringliteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templatedeclaration(): TemplatedeclarationContext {
		let _localctx: TemplatedeclarationContext = new TemplatedeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CPP14Parser.RULE_templatedeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2285;
			this.match(CPP14Parser.Template);
			this.state = 2286;
			this.match(CPP14Parser.Less);
			this.state = 2287;
			this.templateparameterlist(0);
			this.state = 2288;
			this.match(CPP14Parser.Greater);
			this.state = 2289;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public templateparameterlist(): TemplateparameterlistContext;
	public templateparameterlist(_p: number): TemplateparameterlistContext;
	// @RuleVersion(0)
	public templateparameterlist(_p?: number): TemplateparameterlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateparameterlistContext = new TemplateparameterlistContext(this._ctx, _parentState);
		let _prevctx: TemplateparameterlistContext = _localctx;
		let _startState: number = 372;
		this.enterRecursionRule(_localctx, 372, CPP14Parser.RULE_templateparameterlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2292;
			this.templateparameter();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 292, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateparameterlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateparameterlist);
					this.state = 2294;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2295;
					this.match(CPP14Parser.Comma);
					this.state = 2296;
					this.templateparameter();
					}
					}
				}
				this.state = 2301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 292, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateparameter(): TemplateparameterContext {
		let _localctx: TemplateparameterContext = new TemplateparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CPP14Parser.RULE_templateparameter);
		try {
			this.state = 2304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2302;
				this.typeparameter();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2303;
				this.parameterdeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeparameter(): TypeparameterContext {
		let _localctx: TypeparameterContext = new TypeparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CPP14Parser.RULE_typeparameter);
		let _la: number;
		try {
			this.state = 2354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2306;
				this.match(CPP14Parser.Class);
				this.state = 2308;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
				case 1:
					{
					this.state = 2307;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
				case 1:
					{
					this.state = 2310;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2313;
				this.match(CPP14Parser.Class);
				this.state = 2315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2314;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2317;
				this.match(CPP14Parser.Assign);
				this.state = 2318;
				this.thetypeid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2319;
				this.match(CPP14Parser.Typename_);
				this.state = 2321;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 297, this._ctx) ) {
				case 1:
					{
					this.state = 2320;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2324;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2323;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2326;
				this.match(CPP14Parser.Typename_);
				this.state = 2328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2327;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2330;
				this.match(CPP14Parser.Assign);
				this.state = 2331;
				this.thetypeid();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2332;
				this.match(CPP14Parser.Template);
				this.state = 2333;
				this.match(CPP14Parser.Less);
				this.state = 2334;
				this.templateparameterlist(0);
				this.state = 2335;
				this.match(CPP14Parser.Greater);
				this.state = 2336;
				this.match(CPP14Parser.Class);
				this.state = 2338;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 300, this._ctx) ) {
				case 1:
					{
					this.state = 2337;
					this.match(CPP14Parser.Ellipsis);
					}
					break;
				}
				this.state = 2341;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
				case 1:
					{
					this.state = 2340;
					this.match(CPP14Parser.Identifier);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2343;
				this.match(CPP14Parser.Template);
				this.state = 2344;
				this.match(CPP14Parser.Less);
				this.state = 2345;
				this.templateparameterlist(0);
				this.state = 2346;
				this.match(CPP14Parser.Greater);
				this.state = 2347;
				this.match(CPP14Parser.Class);
				this.state = 2349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Identifier) {
					{
					this.state = 2348;
					this.match(CPP14Parser.Identifier);
					}
				}

				this.state = 2351;
				this.match(CPP14Parser.Assign);
				this.state = 2352;
				this.idexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpletemplateid(): SimpletemplateidContext {
		let _localctx: SimpletemplateidContext = new SimpletemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CPP14Parser.RULE_simpletemplateid);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2356;
			this.templatename();
			this.state = 2357;
			this.match(CPP14Parser.Less);
			this.state = 2359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__6) | (1 << CPP14Parser.T__7) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Delete - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Dynamic_cast - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.False - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Reinterpret_cast - 64)) | (1 << (CPP14Parser.Short - 64)) | (1 << (CPP14Parser.Signed - 64)) | (1 << (CPP14Parser.Sizeof - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.PlusPlus - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CPP14Parser.MinusMinus - 129)) | (1 << (CPP14Parser.Doublecolon - 129)) | (1 << (CPP14Parser.Identifier - 129)) | (1 << (CPP14Parser.Integerliteral - 129)) | (1 << (CPP14Parser.Characterliteral - 129)) | (1 << (CPP14Parser.Floatingliteral - 129)) | (1 << (CPP14Parser.Stringliteral - 129)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 129)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 129)) | (1 << (CPP14Parser.Userdefinedstringliteral - 129)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 129)))) !== 0)) {
				{
				this.state = 2358;
				this.templateargumentlist(0);
				}
			}

			this.state = 2361;
			this.match(CPP14Parser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateid(): TemplateidContext {
		let _localctx: TemplateidContext = new TemplateidContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CPP14Parser.RULE_templateid);
		let _la: number;
		try {
			this.state = 2378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 307, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2363;
				this.simpletemplateid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2364;
				this.operatorfunctionid();
				this.state = 2365;
				this.match(CPP14Parser.Less);
				this.state = 2367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__6) | (1 << CPP14Parser.T__7) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Delete - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Dynamic_cast - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.False - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Reinterpret_cast - 64)) | (1 << (CPP14Parser.Short - 64)) | (1 << (CPP14Parser.Signed - 64)) | (1 << (CPP14Parser.Sizeof - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.PlusPlus - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CPP14Parser.MinusMinus - 129)) | (1 << (CPP14Parser.Doublecolon - 129)) | (1 << (CPP14Parser.Identifier - 129)) | (1 << (CPP14Parser.Integerliteral - 129)) | (1 << (CPP14Parser.Characterliteral - 129)) | (1 << (CPP14Parser.Floatingliteral - 129)) | (1 << (CPP14Parser.Stringliteral - 129)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 129)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 129)) | (1 << (CPP14Parser.Userdefinedstringliteral - 129)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 129)))) !== 0)) {
					{
					this.state = 2366;
					this.templateargumentlist(0);
					}
				}

				this.state = 2369;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2371;
				this.literaloperatorid();
				this.state = 2372;
				this.match(CPP14Parser.Less);
				this.state = 2374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.T__6) | (1 << CPP14Parser.T__7) | (1 << CPP14Parser.Alignof) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const) | (1 << CPP14Parser.Const_cast))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Delete - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Dynamic_cast - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.False - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)) | (1 << (CPP14Parser.New - 32)) | (1 << (CPP14Parser.Noexcept - 32)) | (1 << (CPP14Parser.Nullptr - 32)) | (1 << (CPP14Parser.Operator - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CPP14Parser.Reinterpret_cast - 64)) | (1 << (CPP14Parser.Short - 64)) | (1 << (CPP14Parser.Signed - 64)) | (1 << (CPP14Parser.Sizeof - 64)) | (1 << (CPP14Parser.Static_cast - 64)) | (1 << (CPP14Parser.Struct - 64)) | (1 << (CPP14Parser.This - 64)) | (1 << (CPP14Parser.True - 64)) | (1 << (CPP14Parser.Typeid_ - 64)) | (1 << (CPP14Parser.Typename_ - 64)) | (1 << (CPP14Parser.Union - 64)) | (1 << (CPP14Parser.Unsigned - 64)) | (1 << (CPP14Parser.Void - 64)) | (1 << (CPP14Parser.Volatile - 64)) | (1 << (CPP14Parser.Wchar - 64)) | (1 << (CPP14Parser.LeftParen - 64)) | (1 << (CPP14Parser.LeftBracket - 64)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CPP14Parser.Plus - 97)) | (1 << (CPP14Parser.Minus - 97)) | (1 << (CPP14Parser.Star - 97)) | (1 << (CPP14Parser.And - 97)) | (1 << (CPP14Parser.Or - 97)) | (1 << (CPP14Parser.Tilde - 97)) | (1 << (CPP14Parser.PlusPlus - 97)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CPP14Parser.MinusMinus - 129)) | (1 << (CPP14Parser.Doublecolon - 129)) | (1 << (CPP14Parser.Identifier - 129)) | (1 << (CPP14Parser.Integerliteral - 129)) | (1 << (CPP14Parser.Characterliteral - 129)) | (1 << (CPP14Parser.Floatingliteral - 129)) | (1 << (CPP14Parser.Stringliteral - 129)) | (1 << (CPP14Parser.Userdefinedintegerliteral - 129)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 129)) | (1 << (CPP14Parser.Userdefinedstringliteral - 129)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 129)))) !== 0)) {
					{
					this.state = 2373;
					this.templateargumentlist(0);
					}
				}

				this.state = 2376;
				this.match(CPP14Parser.Greater);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templatename(): TemplatenameContext {
		let _localctx: TemplatenameContext = new TemplatenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CPP14Parser.RULE_templatename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2380;
			this.match(CPP14Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public templateargumentlist(): TemplateargumentlistContext;
	public templateargumentlist(_p: number): TemplateargumentlistContext;
	// @RuleVersion(0)
	public templateargumentlist(_p?: number): TemplateargumentlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TemplateargumentlistContext = new TemplateargumentlistContext(this._ctx, _parentState);
		let _prevctx: TemplateargumentlistContext = _localctx;
		let _startState: number = 384;
		this.enterRecursionRule(_localctx, 384, CPP14Parser.RULE_templateargumentlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2383;
			this.templateargument();
			this.state = 2385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				{
				this.state = 2384;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2395;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TemplateargumentlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_templateargumentlist);
					this.state = 2387;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2388;
					this.match(CPP14Parser.Comma);
					this.state = 2389;
					this.templateargument();
					this.state = 2391;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
					case 1:
						{
						this.state = 2390;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 310, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateargument(): TemplateargumentContext {
		let _localctx: TemplateargumentContext = new TemplateargumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CPP14Parser.RULE_templateargument);
		try {
			this.state = 2401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 311, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2398;
				this.thetypeid();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2399;
				this.constantexpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2400;
				this.idexpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typenamespecifier(): TypenamespecifierContext {
		let _localctx: TypenamespecifierContext = new TypenamespecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CPP14Parser.RULE_typenamespecifier);
		let _la: number;
		try {
			this.state = 2414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2403;
				this.match(CPP14Parser.Typename_);
				this.state = 2404;
				this.nestednamespecifier(0);
				this.state = 2405;
				this.match(CPP14Parser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2407;
				this.match(CPP14Parser.Typename_);
				this.state = 2408;
				this.nestednamespecifier(0);
				this.state = 2410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Template) {
					{
					this.state = 2409;
					this.match(CPP14Parser.Template);
					}
				}

				this.state = 2412;
				this.simpletemplateid();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitinstantiation(): ExplicitinstantiationContext {
		let _localctx: ExplicitinstantiationContext = new ExplicitinstantiationContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CPP14Parser.RULE_explicitinstantiation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Extern) {
				{
				this.state = 2416;
				this.match(CPP14Parser.Extern);
				}
			}

			this.state = 2419;
			this.match(CPP14Parser.Template);
			this.state = 2420;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitspecialization(): ExplicitspecializationContext {
		let _localctx: ExplicitspecializationContext = new ExplicitspecializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CPP14Parser.RULE_explicitspecialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2422;
			this.match(CPP14Parser.Template);
			this.state = 2423;
			this.match(CPP14Parser.Less);
			this.state = 2424;
			this.match(CPP14Parser.Greater);
			this.state = 2425;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryblock(): TryblockContext {
		let _localctx: TryblockContext = new TryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CPP14Parser.RULE_tryblock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2427;
			this.match(CPP14Parser.Try);
			this.state = 2428;
			this.compoundstatement();
			this.state = 2429;
			this.handlerseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functiontryblock(): FunctiontryblockContext {
		let _localctx: FunctiontryblockContext = new FunctiontryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CPP14Parser.RULE_functiontryblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2431;
			this.match(CPP14Parser.Try);
			this.state = 2433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CPP14Parser.Colon) {
				{
				this.state = 2432;
				this.ctorinitializer();
				}
			}

			this.state = 2435;
			this.compoundstatement();
			this.state = 2436;
			this.handlerseq();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handlerseq(): HandlerseqContext {
		let _localctx: HandlerseqContext = new HandlerseqContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CPP14Parser.RULE_handlerseq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2438;
			this.handler();
			this.state = 2440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				{
				this.state = 2439;
				this.handlerseq();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public handler(): HandlerContext {
		let _localctx: HandlerContext = new HandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CPP14Parser.RULE_handler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2442;
			this.match(CPP14Parser.Catch);
			this.state = 2443;
			this.match(CPP14Parser.LeftParen);
			this.state = 2444;
			this.exceptiondeclaration();
			this.state = 2445;
			this.match(CPP14Parser.RightParen);
			this.state = 2446;
			this.compoundstatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptiondeclaration(): ExceptiondeclarationContext {
		let _localctx: ExceptiondeclarationContext = new ExceptiondeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CPP14Parser.RULE_exceptiondeclaration);
		let _la: number;
		try {
			this.state = 2462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 320, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2448;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2451;
				this.typespecifierseq();
				this.state = 2452;
				this.declarator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.Alignas || _la === CPP14Parser.LeftBracket) {
					{
					this.state = 2454;
					this.attributespecifierseq(0);
					}
				}

				this.state = 2457;
				this.typespecifierseq();
				this.state = 2459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CPP14Parser.T__8 || _la === CPP14Parser.Decltype || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CPP14Parser.LeftParen - 91)) | (1 << (CPP14Parser.LeftBracket - 91)) | (1 << (CPP14Parser.Star - 91)) | (1 << (CPP14Parser.And - 91)))) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & ((1 << (CPP14Parser.Doublecolon - 135)) | (1 << (CPP14Parser.Ellipsis - 135)) | (1 << (CPP14Parser.Identifier - 135)))) !== 0)) {
					{
					this.state = 2458;
					this.abstractdeclarator();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2461;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwexpression(): ThrowexpressionContext {
		let _localctx: ThrowexpressionContext = new ThrowexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, CPP14Parser.RULE_throwexpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2464;
			this.match(CPP14Parser.Throw);
			this.state = 2466;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 321, this._ctx) ) {
			case 1:
				{
				this.state = 2465;
				this.assignmentexpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exceptionspecification(): ExceptionspecificationContext {
		let _localctx: ExceptionspecificationContext = new ExceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, CPP14Parser.RULE_exceptionspecification);
		try {
			this.state = 2470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Throw:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2468;
				this.dynamicexceptionspecification();
				}
				break;
			case CPP14Parser.Noexcept:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2469;
				this.noexceptspecification();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext {
		let _localctx: DynamicexceptionspecificationContext = new DynamicexceptionspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, CPP14Parser.RULE_dynamicexceptionspecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2472;
			this.match(CPP14Parser.Throw);
			this.state = 2473;
			this.match(CPP14Parser.LeftParen);
			this.state = 2475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CPP14Parser.T__1) | (1 << CPP14Parser.Auto) | (1 << CPP14Parser.Bool) | (1 << CPP14Parser.Char) | (1 << CPP14Parser.Char16) | (1 << CPP14Parser.Char32) | (1 << CPP14Parser.Class) | (1 << CPP14Parser.Const))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CPP14Parser.Decltype - 32)) | (1 << (CPP14Parser.Double - 32)) | (1 << (CPP14Parser.Enum - 32)) | (1 << (CPP14Parser.Float - 32)) | (1 << (CPP14Parser.Int - 32)) | (1 << (CPP14Parser.Long - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (CPP14Parser.Short - 66)) | (1 << (CPP14Parser.Signed - 66)) | (1 << (CPP14Parser.Struct - 66)) | (1 << (CPP14Parser.Typename_ - 66)) | (1 << (CPP14Parser.Union - 66)) | (1 << (CPP14Parser.Unsigned - 66)) | (1 << (CPP14Parser.Void - 66)) | (1 << (CPP14Parser.Volatile - 66)) | (1 << (CPP14Parser.Wchar - 66)))) !== 0) || _la === CPP14Parser.Doublecolon || _la === CPP14Parser.Identifier) {
				{
				this.state = 2474;
				this.typeidlist(0);
				}
			}

			this.state = 2477;
			this.match(CPP14Parser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeidlist(): TypeidlistContext;
	public typeidlist(_p: number): TypeidlistContext;
	// @RuleVersion(0)
	public typeidlist(_p?: number): TypeidlistContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeidlistContext = new TypeidlistContext(this._ctx, _parentState);
		let _prevctx: TypeidlistContext = _localctx;
		let _startState: number = 410;
		this.enterRecursionRule(_localctx, 410, CPP14Parser.RULE_typeidlist, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2480;
			this.thetypeid();
			this.state = 2482;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
			case 1:
				{
				this.state = 2481;
				this.match(CPP14Parser.Ellipsis);
				}
				break;
			}
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2492;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeidlistContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CPP14Parser.RULE_typeidlist);
					this.state = 2484;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2485;
					this.match(CPP14Parser.Comma);
					this.state = 2486;
					this.thetypeid();
					this.state = 2488;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
					case 1:
						{
						this.state = 2487;
						this.match(CPP14Parser.Ellipsis);
						}
						break;
					}
					}
					}
				}
				this.state = 2494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 326, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noexceptspecification(): NoexceptspecificationContext {
		let _localctx: NoexceptspecificationContext = new NoexceptspecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, CPP14Parser.RULE_noexceptspecification);
		try {
			this.state = 2501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2495;
				this.match(CPP14Parser.Noexcept);
				this.state = 2496;
				this.match(CPP14Parser.LeftParen);
				this.state = 2497;
				this.constantexpression();
				this.state = 2498;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2500;
				this.match(CPP14Parser.Noexcept);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public theoperator(): TheoperatorContext {
		let _localctx: TheoperatorContext = new TheoperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, CPP14Parser.RULE_theoperator);
		try {
			this.state = 2554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2503;
				this.match(CPP14Parser.New);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2504;
				this.match(CPP14Parser.Delete);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2505;
				this.match(CPP14Parser.New);
				this.state = 2506;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2507;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2508;
				this.match(CPP14Parser.Delete);
				this.state = 2509;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2510;
				this.match(CPP14Parser.RightBracket);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2511;
				this.match(CPP14Parser.Plus);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2512;
				this.match(CPP14Parser.Minus);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2513;
				this.match(CPP14Parser.Star);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2514;
				this.match(CPP14Parser.Div);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2515;
				this.match(CPP14Parser.Mod);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2516;
				this.match(CPP14Parser.Caret);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2517;
				this.match(CPP14Parser.And);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2518;
				this.match(CPP14Parser.Or);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2519;
				this.match(CPP14Parser.Tilde);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2520;
				this.match(CPP14Parser.T__6);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2521;
				this.match(CPP14Parser.T__7);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2522;
				this.match(CPP14Parser.Assign);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2523;
				this.match(CPP14Parser.Less);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2524;
				this.match(CPP14Parser.Greater);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 2525;
				this.match(CPP14Parser.PlusAssign);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 2526;
				this.match(CPP14Parser.MinusAssign);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 2527;
				this.match(CPP14Parser.StarAssign);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 2528;
				this.match(CPP14Parser.DivAssign);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 2529;
				this.match(CPP14Parser.ModAssign);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 2530;
				this.match(CPP14Parser.XorAssign);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 2531;
				this.match(CPP14Parser.AndAssign);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 2532;
				this.match(CPP14Parser.OrAssign);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 2533;
				this.match(CPP14Parser.LeftShift);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 2534;
				this.match(CPP14Parser.RightShift);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 2535;
				this.match(CPP14Parser.RightShiftAssign);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 2536;
				this.match(CPP14Parser.LeftShiftAssign);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 2537;
				this.match(CPP14Parser.Equal);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 2538;
				this.match(CPP14Parser.NotEqual);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 2539;
				this.match(CPP14Parser.LessEqual);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 2540;
				this.match(CPP14Parser.GreaterEqual);
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 2541;
				this.match(CPP14Parser.T__8);
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 2542;
				this.match(CPP14Parser.T__9);
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 2543;
				this.match(CPP14Parser.T__10);
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 2544;
				this.match(CPP14Parser.T__11);
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 2545;
				this.match(CPP14Parser.PlusPlus);
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 2546;
				this.match(CPP14Parser.MinusMinus);
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 2547;
				this.match(CPP14Parser.Comma);
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 2548;
				this.match(CPP14Parser.ArrowStar);
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 2549;
				this.match(CPP14Parser.Arrow);
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 2550;
				this.match(CPP14Parser.LeftParen);
				this.state = 2551;
				this.match(CPP14Parser.RightParen);
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 2552;
				this.match(CPP14Parser.LeftBracket);
				this.state = 2553;
				this.match(CPP14Parser.RightBracket);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, CPP14Parser.RULE_literal);
		try {
			this.state = 2563;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CPP14Parser.Integerliteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2556;
				this.match(CPP14Parser.Integerliteral);
				}
				break;
			case CPP14Parser.Characterliteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2557;
				this.match(CPP14Parser.Characterliteral);
				}
				break;
			case CPP14Parser.Floatingliteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2558;
				this.match(CPP14Parser.Floatingliteral);
				}
				break;
			case CPP14Parser.Stringliteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2559;
				this.match(CPP14Parser.Stringliteral);
				}
				break;
			case CPP14Parser.False:
			case CPP14Parser.True:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2560;
				this.booleanliteral();
				}
				break;
			case CPP14Parser.Nullptr:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2561;
				this.pointerliteral();
				}
				break;
			case CPP14Parser.Userdefinedintegerliteral:
			case CPP14Parser.Userdefinedfloatingliteral:
			case CPP14Parser.Userdefinedstringliteral:
			case CPP14Parser.Userdefinedcharacterliteral:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2562;
				this.userdefinedliteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanliteral(): BooleanliteralContext {
		let _localctx: BooleanliteralContext = new BooleanliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, CPP14Parser.RULE_booleanliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2565;
			_la = this._input.LA(1);
			if (!(_la === CPP14Parser.False || _la === CPP14Parser.True)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerliteral(): PointerliteralContext {
		let _localctx: PointerliteralContext = new PointerliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, CPP14Parser.RULE_pointerliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2567;
			this.match(CPP14Parser.Nullptr);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userdefinedliteral(): UserdefinedliteralContext {
		let _localctx: UserdefinedliteralContext = new UserdefinedliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, CPP14Parser.RULE_userdefinedliteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2569;
			_la = this._input.LA(1);
			if (!(((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & ((1 << (CPP14Parser.Userdefinedintegerliteral - 150)) | (1 << (CPP14Parser.Userdefinedfloatingliteral - 150)) | (1 << (CPP14Parser.Userdefinedstringliteral - 150)) | (1 << (CPP14Parser.Userdefinedcharacterliteral - 150)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.ueannotationlistentries_sempred(_localctx as UeannotationlistentriesContext, predIndex);

		case 17:
			return this.nestednamespecifier_sempred(_localctx as NestednamespecifierContext, predIndex);

		case 22:
			return this.capturelist_sempred(_localctx as CapturelistContext, predIndex);

		case 27:
			return this.postfixexpression_sempred(_localctx as PostfixexpressionContext, predIndex);

		case 38:
			return this.noptrnewdeclarator_sempred(_localctx as NoptrnewdeclaratorContext, predIndex);

		case 43:
			return this.pmexpression_sempred(_localctx as PmexpressionContext, predIndex);

		case 44:
			return this.multiplicativeexpression_sempred(_localctx as MultiplicativeexpressionContext, predIndex);

		case 45:
			return this.additiveexpression_sempred(_localctx as AdditiveexpressionContext, predIndex);

		case 46:
			return this.shiftexpression_sempred(_localctx as ShiftexpressionContext, predIndex);

		case 48:
			return this.relationalexpression_sempred(_localctx as RelationalexpressionContext, predIndex);

		case 49:
			return this.equalityexpression_sempred(_localctx as EqualityexpressionContext, predIndex);

		case 50:
			return this.andexpression_sempred(_localctx as AndexpressionContext, predIndex);

		case 51:
			return this.exclusiveorexpression_sempred(_localctx as ExclusiveorexpressionContext, predIndex);

		case 52:
			return this.inclusiveorexpression_sempred(_localctx as InclusiveorexpressionContext, predIndex);

		case 53:
			return this.logicalandexpression_sempred(_localctx as LogicalandexpressionContext, predIndex);

		case 54:
			return this.logicalorexpression_sempred(_localctx as LogicalorexpressionContext, predIndex);

		case 58:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 64:
			return this.statementseq_sempred(_localctx as StatementseqContext, predIndex);

		case 73:
			return this.declarationseq_sempred(_localctx as DeclarationseqContext, predIndex);

		case 100:
			return this.enumeratorlist_sempred(_localctx as EnumeratorlistContext, predIndex);

		case 118:
			return this.attributespecifierseq_sempred(_localctx as AttributespecifierseqContext, predIndex);

		case 121:
			return this.attributelist_sempred(_localctx as AttributelistContext, predIndex);

		case 127:
			return this.balancedtokenseq_sempred(_localctx as BalancedtokenseqContext, predIndex);

		case 129:
			return this.initdeclaratorlist_sempred(_localctx as InitdeclaratorlistContext, predIndex);

		case 133:
			return this.noptrdeclarator_sempred(_localctx as NoptrdeclaratorContext, predIndex);

		case 144:
			return this.noptrabstractdeclarator_sempred(_localctx as NoptrabstractdeclaratorContext, predIndex);

		case 146:
			return this.noptrabstractpackdeclarator_sempred(_localctx as NoptrabstractpackdeclaratorContext, predIndex);

		case 148:
			return this.parameterdeclarationlist_sempred(_localctx as ParameterdeclarationlistContext, predIndex);

		case 155:
			return this.initializerlist_sempred(_localctx as InitializerlistContext, predIndex);

		case 165:
			return this.memberdeclaratorlist_sempred(_localctx as MemberdeclaratorlistContext, predIndex);

		case 167:
			return this.virtspecifierseq_sempred(_localctx as VirtspecifierseqContext, predIndex);

		case 171:
			return this.basespecifierlist_sempred(_localctx as BasespecifierlistContext, predIndex);

		case 186:
			return this.templateparameterlist_sempred(_localctx as TemplateparameterlistContext, predIndex);

		case 192:
			return this.templateargumentlist_sempred(_localctx as TemplateargumentlistContext, predIndex);

		case 205:
			return this.typeidlist_sempred(_localctx as TypeidlistContext, predIndex);
		}
		return true;
	}
	private ueannotationlistentries_sempred(_localctx: UeannotationlistentriesContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private nestednamespecifier_sempred(_localctx: NestednamespecifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private capturelist_sempred(_localctx: CapturelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private postfixexpression_sempred(_localctx: PostfixexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private noptrnewdeclarator_sempred(_localctx: NoptrnewdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private pmexpression_sempred(_localctx: PmexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return this.precpred(this._ctx, 2);

		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeexpression_sempred(_localctx: MultiplicativeexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 3);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveexpression_sempred(_localctx: AdditiveexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);

		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftexpression_sempred(_localctx: ShiftexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalexpression_sempred(_localctx: RelationalexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 4);

		case 23:
			return this.precpred(this._ctx, 3);

		case 24:
			return this.precpred(this._ctx, 2);

		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityexpression_sempred(_localctx: EqualityexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 2);

		case 27:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andexpression_sempred(_localctx: AndexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveorexpression_sempred(_localctx: ExclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveorexpression_sempred(_localctx: InclusiveorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalandexpression_sempred(_localctx: LogicalandexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.precpred(this._ctx, 2);

		case 32:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalorexpression_sempred(_localctx: LogicalorexpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.precpred(this._ctx, 2);

		case 34:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private statementseq_sempred(_localctx: StatementseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private declarationseq_sempred(_localctx: DeclarationseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private enumeratorlist_sempred(_localctx: EnumeratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributespecifierseq_sempred(_localctx: AttributespecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attributelist_sempred(_localctx: AttributelistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.precpred(this._ctx, 3);

		case 41:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private balancedtokenseq_sempred(_localctx: BalancedtokenseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initdeclaratorlist_sempred(_localctx: InitdeclaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private noptrdeclarator_sempred(_localctx: NoptrdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.precpred(this._ctx, 3);

		case 45:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private noptrabstractdeclarator_sempred(_localctx: NoptrabstractdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 5);

		case 47:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private noptrabstractpackdeclarator_sempred(_localctx: NoptrabstractpackdeclaratorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 3);

		case 49:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private parameterdeclarationlist_sempred(_localctx: ParameterdeclarationlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializerlist_sempred(_localctx: InitializerlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private memberdeclaratorlist_sempred(_localctx: MemberdeclaratorlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 52:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private virtspecifierseq_sempred(_localctx: VirtspecifierseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 53:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private basespecifierlist_sempred(_localctx: BasespecifierlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 54:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateparameterlist_sempred(_localctx: TemplateparameterlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 55:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private templateargumentlist_sempred(_localctx: TemplateargumentlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 56:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typeidlist_sempred(_localctx: TypeidlistContext, predIndex: number): boolean {
		switch (predIndex) {
		case 57:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x9F\u0A0E\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b\u01BE" +
		"\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u01C8\n\t\f" +
		"\t\x0E\t\u01CB\v\t\x03\n\x03\n\x05\n\u01CF\n\n\x03\v\x03\v\x03\v\x03\v" +
		"\x05\v\u01D5\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\u01DE" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u01EA\n\x0F\x03\x10\x03\x10\x05\x10\u01EE\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u01F9\n\x11\x03\x12\x03\x12\x05\x12\u01FD\n\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\u020C\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0213\n\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0218\n\x13\f" +
		"\x13\x0E\x13\u021B\v\x13\x03\x14\x03\x14\x05\x14\u021F\n\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x05\x15\u0225\n\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u022F\n\x16\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u0236\n\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u023C\n\x18\x07\x18\u023E\n\x18\f\x18\x0E\x18\u0241\v\x18\x03" +
		"\x19\x03\x19\x05\x19\u0245\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u024B\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0252\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0258\n\x1C\x03\x1C\x05\x1C\u025B" +
		"\n\x1C\x03\x1C\x05\x1C\u025E\n\x1C\x03\x1C\x05\x1C\u0261\n\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0268\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u026F\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x05\x1D\u02A3\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02B2" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02B8\n\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u02BE\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u02CB" +
		"\n\x1D\f\x1D\x0E\x1D\u02CE\v\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x05!\u02D7\n!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!" +
		"\x03!\x03!\x03!\x03!\x05!\u02E6\n!\x03!\x03!\x03!\x03!\x05!\u02EC\n!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u030A\n\"\x03#\x03#\x03$\x05$\u030F\n$\x03" +
		"$\x03$\x05$\u0313\n$\x03$\x03$\x05$\u0317\n$\x03$\x05$\u031A\n$\x03$\x03" +
		"$\x05$\u031E\n$\x03$\x03$\x03$\x03$\x05$\u0324\n$\x05$\u0326\n$\x03%\x03" +
		"%\x03%\x03%\x03&\x03&\x05&\u032E\n&\x03\'\x03\'\x05\'\u0332\n\'\x03\'" +
		"\x05\'\u0335\n\'\x03(\x03(\x03(\x03(\x03(\x05(\u033C\n(\x03(\x03(\x03" +
		"(\x03(\x03(\x05(\u0343\n(\x07(\u0345\n(\f(\x0E(\u0348\v(\x03)\x03)\x05" +
		")\u034C\n)\x03)\x03)\x05)\u0350\n)\x03*\x05*\u0353\n*\x03*\x03*\x03*\x05" +
		"*\u0358\n*\x03*\x03*\x03*\x03*\x05*\u035E\n*\x03+\x03+\x03+\x03+\x03+" +
		"\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u036B\n,\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x03-\x03-\x03-\x07-\u0376\n-\f-\x0E-\u0379\v-\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u0387\n.\f.\x0E.\u038A" +
		"\v.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u0395\n/\f/\x0E" +
		"/\u0398\v/\x030\x030\x030\x030\x030\x030\x030\x070\u03A1\n0\f0\x0E0\u03A4" +
		"\v0\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x072\u03B7\n2\f2\x0E2\u03BA\v2\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x073\u03C5\n3\f3\x0E3\u03C8\v3\x034\x034\x034\x03" +
		"4\x034\x034\x074\u03D0\n4\f4\x0E4\u03D3\v4\x035\x035\x035\x035\x035\x03" +
		"5\x075\u03DB\n5\f5\x0E5\u03DE\v5\x036\x036\x036\x036\x036\x036\x076\u03E6" +
		"\n6\f6\x0E6\u03E9\v6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x07" +
		"7\u03F4\n7\f7\x0E7\u03F7\v7\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
		"8\x078\u0402\n8\f8\x0E8\u0405\v8\x039\x039\x039\x039\x039\x039\x039\x05" +
		"9\u040E\n9\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0416\n:\x03;\x03;\x03<" +
		"\x03<\x03<\x03<\x03<\x03<\x07<\u0420\n<\f<\x0E<\u0423\v<\x03=\x03=\x03" +
		">\x03>\x05>\u0429\n>\x03>\x03>\x05>\u042D\n>\x03>\x03>\x05>\u0431\n>\x03" +
		">\x03>\x05>\u0435\n>\x03>\x03>\x05>\u0439\n>\x03>\x03>\x03>\x05>\u043E" +
		"\n>\x03>\x05>\u0441\n>\x03?\x05?\u0444\n?\x03?\x03?\x03?\x03?\x05?\u044A" +
		"\n?\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u0452\n?\x03?\x03?\x03?\x05?\u0457" +
		"\n?\x03@\x05@\u045A\n@\x03@\x03@\x03A\x03A\x05A\u0460\nA\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x03B\x07B\u0469\nB\fB\x0EB\u046C\vB\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x05C\u0482\nC\x03D\x03D\x05D\u0486\nD\x03D\x03D\x03D\x03D" +
		"\x03D\x03D\x05D\u048E\nD\x03D\x03D\x03D\x03D\x05D\u0494\nD\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x05E\u04A8\nE\x03E\x03E\x05E\u04AC\nE\x03E\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u04B9\nE\x03F\x03F\x05F\u04BD\nF\x03" +
		"G\x05G\u04C0\nG\x03G\x03G\x03G\x03H\x03H\x05H\u04C7\nH\x03I\x03I\x03I" +
		"\x03I\x03I\x03I\x05I\u04CF\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I" +
		"\x05I\u04D9\nI\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x07K\u04E2\nK\fK\x0E" +
		"K\u04E5\vK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u04F0\nL" +
		"\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u04FA\nM\x03N\x03N\x03N" +
		"\x05N\u04FF\nN\x03N\x03N\x03N\x03N\x03O\x05O\u0506\nO\x03O\x05O\u0509" +
		"\nO\x03O\x03O\x03O\x05O\u050E\nO\x03O\x03O\x03O\x05O\u0513\nO\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03Q\x03Q\x03R\x03R\x03R\x03S\x03S\x03" +
		"S\x03S\x03S\x03S\x05S\u0528\nS\x03T\x03T\x05T\u052C\nT\x03T\x03T\x03T" +
		"\x05T\u0531\nT\x03U\x03U\x03V\x03V\x03W\x03W\x03X\x03X\x03X\x05X\u053C" +
		"\nX\x03Y\x03Y\x03Y\x03Y\x05Y\u0542\nY\x03Z\x03Z\x05Z\u0546\nZ\x03Z\x03" +
		"Z\x03Z\x05Z\u054B\nZ\x03[\x03[\x05[\u054F\n[\x03[\x03[\x03[\x05[\u0554" +
		"\n[\x03\\\x05\\\u0557\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03" +
		"\\\x05\\\u056D\n\\\x03]\x03]\x03]\x03]\x05]\u0573\n]\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x05^\u057E\n^\x03_\x03_\x05_\u0582\n_\x03_" +
		"\x05_\u0585\n_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u058F\n_\x03" +
		"_\x03_\x03_\x03_\x05_\u0595\n_\x03_\x05_\u0598\n_\x03`\x03`\x03a\x03a" +
		"\x03a\x05a\u059F\na\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u05A9" +
		"\na\x03b\x03b\x05b\u05AD\nb\x03b\x05b\u05B0\nb\x03b\x05b\u05B3\nb\x03" +
		"b\x03b\x05b\u05B7\nb\x03b\x03b\x03b\x05b\u05BC\nb\x05b\u05BE\nb\x03c\x03" +
		"c\x05c\u05C2\nc\x03c\x03c\x05c\u05C6\nc\x03c\x03c\x03d\x03d\x03d\x03d" +
		"\x03d\x05d\u05CF\nd\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x07f" +
		"\u05DA\nf\ff\x0Ef\u05DD\vf\x03g\x03g\x03g\x03g\x03g\x05g\u05E4\ng\x03" +
		"h\x03h\x03i\x03i\x05i\u05EA\ni\x03j\x03j\x03k\x03k\x05k\u05F0\nk\x03l" +
		"\x03l\x05l\u05F4\nl\x03m\x05m\u05F7\nm\x03m\x03m\x03m\x03m\x03m\x03m\x03" +
		"n\x05n\u0600\nn\x03n\x03n\x03n\x03n\x03n\x03n\x03o\x05o\u0609\no\x03o" +
		"\x03o\x03o\x03o\x03o\x03p\x05p\u0611\np\x03q\x03q\x03r\x03r\x03r\x03r" +
		"\x03r\x03r\x03s\x05s\u061C\ns\x03s\x03s\x03t\x03t\x05t\u0622\nt\x03t\x03" +
		"t\x03t\x03t\x03t\x03t\x03t\x03t\x03t\x05t\u062D\nt\x03u\x05u\u0630\nu" +
		"\x03u\x03u\x03u\x05u\u0635\nu\x03u\x03u\x03u\x03v\x03v\x03v\x03v\x03v" +
		"\x03v\x03w\x03w\x03w\x03w\x05w\u0644\nw\x03w\x03w\x03w\x03w\x05w\u064A" +
		"\nw\x03x\x03x\x03x\x03x\x03x\x07x\u0651\nx\fx\x0Ex\u0654\vx\x03y\x03y" +
		"\x03y\x03y\x03y\x03y\x03y\x05y\u065D\ny\x03z\x03z\x03z\x03z\x05z\u0663" +
		"\nz\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u066B\nz\x03z\x03z\x05z\u066F\n" +
		"z\x03{\x03{\x05{\u0673\n{\x03{\x03{\x03{\x05{\u0678\n{\x03{\x03{\x03{" +
		"\x05{\u067D\n{\x03{\x03{\x03{\x03{\x03{\x07{\u0684\n{\f{\x0E{\u0687\v" +
		"{\x03|\x03|\x05|\u068B\n|\x03}\x03}\x05}\u068F\n}\x03~\x03~\x03~\x03~" +
		"\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x81\x03\x81\x05\x81" +
		"\u069D\n\x81\x03\x81\x03\x81\x07\x81\u06A1\n\x81\f\x81\x0E\x81\u06A4\v" +
		"\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x03\x82\x03\x82\x06\x82\u06B3\n\x82\r\x82\x0E\x82" +
		"\u06B4\x05\x82\u06B7\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x07\x83\u06BF\n\x83\f\x83\x0E\x83\u06C2\v\x83\x03\x84\x03\x84\x05" +
		"\x84\u06C6\n\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06CD" +
		"\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x05\x86\u06D3\n\x86\x03\x87\x03" +
		"\x87\x03\x87\x05\x87\u06D8\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87" +
		"\u06DE\n\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u06E5\n\x87" +
		"\x03\x87\x03\x87\x05\x87\u06E9\n\x87\x07\x87\u06EB\n\x87\f\x87\x0E\x87" +
		"\u06EE\v\x87\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u06F4\n\x88\x03\x88" +
		"\x05\x88\u06F7\n\x88\x03\x88\x05\x88\u06FA\n\x88\x03\x88\x05\x88\u06FD" +
		"\n\x88\x03\x89\x03\x89\x03\x89\x05\x89\u0702\n\x89\x03\x8A\x03\x8A\x05" +
		"\x8A\u0706\n\x8A\x03\x8A\x05\x8A\u0709\n\x8A\x03\x8A\x03\x8A\x05\x8A\u070D" +
		"\n\x8A\x03\x8A\x03\x8A\x05\x8A\u0711\n\x8A\x03\x8A\x03\x8A\x03\x8A\x05" +
		"\x8A\u0716\n\x8A\x03\x8A\x05\x8A\u0719\n\x8A\x05\x8A\u071B\n\x8A\x03\x8B" +
		"\x03\x8B\x05\x8B\u071F\n\x8B\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x05" +
		"\x8E\u0726\n\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x05\x8F\u072C\n\x8F\x03" +
		"\x90\x03\x90\x05\x90\u0730\n\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90" +
		"\u0736\n\x90\x03\x91\x03\x91\x03\x91\x05\x91\u073B\n\x91\x05\x91\u073D" +
		"\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0743\n\x92\x03\x92\x03" +
		"\x92\x05\x92\u0747\n\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u074D" +
		"\n\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0754\n\x92\x03" +
		"\x92\x03\x92\x05\x92\u0758\n\x92\x07\x92\u075A\n\x92\f\x92\x0E\x92\u075D" +
		"\v\x92\x03\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0763\n\x93\x03\x94\x03" +
		"\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u076D\n\x94" +
		"\x03\x94\x03\x94\x05\x94\u0771\n\x94\x07\x94\u0773\n\x94\f\x94\x0E\x94" +
		"\u0776\v\x94\x03\x95\x05\x95\u0779\n\x95\x03\x95\x05\x95\u077C\n\x95\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x05\x95\u0782\n\x95\x03\x96\x03\x96\x03\x96" +
		"\x03\x96\x03\x96\x03\x96\x07\x96\u078A\n\x96\f\x96\x0E\x96\u078D\v\x96" +
		"\x03\x97\x05\x97\u0790\n\x97\x03\x97\x05\x97\u0793\n\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x05\x97\u0799\n\x97\x03\x97\x05\x97\u079C\n\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u07A4\n\x97\x03\x97\x05" +
		"\x97\u07A7\n\x97\x03\x97\x03\x97\x05\x97\u07AB\n\x97\x03\x97\x05\x97\u07AE" +
		"\n\x97\x03\x97\x05\x97\u07B1\n\x97\x03\x97\x03\x97\x05\x97\u07B5\n\x97" +
		"\x03\x97\x03\x97\x03\x97\x05\x97\u07BA\n\x97\x03\x98\x05\x98\u07BD\n\x98" +
		"\x03\x98\x05\x98\u07C0\n\x98\x03\x98\x03\x98\x05\x98\u07C4\n\x98\x03\x98" +
		"\x03\x98\x03\x99\x05\x99\u07C9\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x05\x99\u07D3\n\x99\x03\x9A\x03\x9A\x03\x9A" +
		"\x03\x9A\x03\x9A\x05\x9A\u07DA\n\x9A\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u07DF" +
		"\n\x9B\x03\x9C\x03\x9C\x05\x9C\u07E3\n\x9C\x03\x9D\x03\x9D\x03\x9D\x05" +
		"\x9D\u07E8\n\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x05\x9D\u07EE\n\x9D\x07" +
		"\x9D\u07F0\n\x9D\f\x9D\x0E\x9D\u07F3\v\x9D\x03\x9E\x03\x9E\x03\x9E\x05" +
		"\x9E\u07F8\n\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u07FE\n\x9E\x03" +
		"\x9F\x03\x9F\x05\x9F\u0802\n\x9F\x03\xA0\x05\xA0\u0805\n\xA0\x03\xA0\x03" +
		"\xA0\x03\xA0\x05\xA0\u080A\n\xA0\x03\xA0\x05\xA0\u080D\n\xA0\x03\xA0\x03" +
		"\xA0\x03\xA1\x03\xA1\x05\xA1\u0813\n\xA1\x03\xA1\x05\xA1\u0816\n\xA1\x03" +
		"\xA1\x03\xA1\x05\xA1\u081A\n\xA1\x03\xA1\x05\xA1\u081D\n\xA1\x03\xA1\x03" +
		"\xA1\x05\xA1\u0821\n\xA1\x03\xA1\x05\xA1\u0824\n\xA1\x03\xA1\x05\xA1\u0827" +
		"\n\xA1\x05\xA1\u0829\n\xA1\x03\xA2\x05\xA2\u082C\n\xA2\x03\xA2\x03\xA2" +
		"\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x05\xA5\u0836\n\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x05\xA5\u083B\n\xA5\x05\xA5\u083D\n\xA5\x03\xA6\x05" +
		"\xA6\u0840\n\xA6\x03\xA6\x05\xA6\u0843\n\xA6\x03\xA6\x05\xA6\u0846\n\xA6" +
		"\x03\xA6\x05\xA6\u0849\n\xA6\x03\xA6\x05\xA6\u084C\n\xA6\x03\xA6\x03\xA6" +
		"\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u0855\n\xA6\x03\xA7\x03" +
		"\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x07\xA7\u085D\n\xA7\f\xA7\x0E\xA7" +
		"\u0860\v\xA7\x03\xA8\x03\xA8\x05\xA8\u0864\n\xA8\x03\xA8\x05\xA8\u0867" +
		"\n\xA8\x03\xA8\x03\xA8\x05\xA8\u086B\n\xA8\x03\xA8\x05\xA8\u086E\n\xA8" +
		"\x03\xA8\x05\xA8\u0871\n\xA8\x03\xA8\x03\xA8\x05\xA8\u0875\n\xA8\x03\xA9" +
		"\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x07\xA9\u087C\n\xA9\f\xA9\x0E\xA9\u087F" +
		"\v\xA9\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAC" +
		"\x03\xAD\x03\xAD\x03\xAD\x05\xAD\u088C\n\xAD\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x05\xAD\u0892\n\xAD\x07\xAD\u0894\n\xAD\f\xAD\x0E\xAD\u0897\v\xAD" +
		"\x03\xAE\x05\xAE\u089A\n\xAE\x03\xAE\x03\xAE\x05\xAE\u089E\n\xAE\x03\xAE" +
		"\x03\xAE\x05\xAE\u08A2\n\xAE\x03\xAE\x03\xAE\x05\xAE\u08A6\n\xAE\x03\xAE" +
		"\x03\xAE\x05\xAE\u08AA\n\xAE\x03\xAE\x03\xAE\x05\xAE\u08AE\n\xAE\x03\xAF" +
		"\x05\xAF\u08B1\n\xAF\x03\xAF\x03\xAF\x05\xAF\u08B5\n\xAF\x03\xB0\x03\xB0" +
		"\x03\xB1\x03\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x05\xB3\u08C0" +
		"\n\xB3\x03\xB4\x03\xB4\x05\xB4\u08C4\n\xB4\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB6\x03\xB6\x05\xB6\u08CB\n\xB6\x03\xB6\x03\xB6\x05\xB6\u08CF\n\xB6\x03" +
		"\xB6\x03\xB6\x03\xB6\x05\xB6\u08D4\n\xB6\x03\xB7\x03\xB7\x03\xB7\x05\xB7" +
		"\u08D9\n\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u08E0\n\xB7" +
		"\x03\xB8\x03\xB8\x05\xB8\u08E4\n\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xBA\x03" +
		"\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u08EE\n\xBA\x03\xBB\x03\xBB\x03\xBB" +
		"\x03\xBB\x03\xBB\x03\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC" +
		"\x07\xBC\u08FC\n\xBC\f\xBC\x0E\xBC\u08FF\v\xBC\x03\xBD\x03\xBD\x05\xBD" +
		"\u0903\n\xBD\x03\xBE\x03\xBE\x05\xBE\u0907\n\xBE\x03\xBE\x05\xBE\u090A" +
		"\n\xBE\x03\xBE\x03\xBE\x05\xBE\u090E\n\xBE\x03\xBE\x03\xBE\x03\xBE\x03" +
		"\xBE\x05\xBE\u0914\n\xBE\x03\xBE\x05\xBE\u0917\n\xBE\x03\xBE\x03\xBE\x05" +
		"\xBE\u091B\n\xBE\x03\xBE\x03\xBE\x03\xBE\x03";
	private static readonly _serializedATNSegment1: string =
		"\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0925\n\xBE\x03\xBE\x05\xBE" +
		"\u0928\n\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0930" +
		"\n\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0935\n\xBE\x03\xBF\x03\xBF\x03" +
		"\xBF\x05\xBF\u093A\n\xBF\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0" +
		"\x05\xC0\u0942\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u0949" +
		"\n\xC0\x03\xC0\x03\xC0\x05\xC0\u094D\n\xC0\x03\xC1\x03\xC1\x03\xC2\x03" +
		"\xC2\x03\xC2\x05\xC2\u0954\n\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05\xC2" +
		"\u095A\n\xC2\x07\xC2\u095C\n\xC2\f\xC2\x0E\xC2\u095F\v\xC2\x03\xC3\x03" +
		"\xC3\x03\xC3\x05\xC3\u0964\n\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4" +
		"\x03\xC4\x03\xC4\x05\xC4\u096D\n\xC4\x03\xC4\x03\xC4\x05\xC4\u0971\n\xC4" +
		"\x03\xC5\x05\xC5\u0974\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03" +
		"\xC6\x03\xC6\x03\xC6\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC8\x03\xC8\x05" +
		"\xC8\u0984\n\xC8\x03\xC8\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x05\xC9\u098B" +
		"\n\xC9\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCB\x05\xCB" +
		"\u0994\n\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u099A\n\xCB\x03\xCB" +
		"\x03\xCB\x05\xCB\u099E\n\xCB\x03\xCB\x05\xCB\u09A1\n\xCB\x03\xCC\x03\xCC" +
		"\x05\xCC\u09A5\n\xCC\x03\xCD\x03\xCD\x05\xCD\u09A9\n\xCD\x03\xCE\x03\xCE" +
		"\x03\xCE\x05\xCE\u09AE\n\xCE\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x03\xCF\x05" +
		"\xCF\u09B5\n\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09BB\n\xCF\x07" +
		"\xCF\u09BD\n\xCF\f\xCF\x0E\xCF\u09C0\v\xCF\x03\xD0\x03\xD0\x03\xD0\x03" +
		"\xD0\x03\xD0\x03\xD0\x05\xD0\u09C8\n\xD0\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x05\xD1\u09FD\n\xD1\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03" +
		"\xD2\x03\xD2\x03\xD2\x05\xD2\u0A06\n\xD2\x03\xD3\x03\xD3\x03\xD4\x03\xD4" +
		"\x03\xD5\x03\xD5\x03\xD5\x02\x02%\x10$.8NXZ\\^bdfhjlnv\x82\x94\xCA\xEE" +
		"\xF4\u0100\u0104\u010C\u0122\u0126\u012A\u0138\u014C\u0150\u0158\u0176" +
		"\u0182\u019C\xD6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178" +
		"\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186" +
		"\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194" +
		"\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2" +
		"\x02\u01A4\x02\u01A6\x02\u01A8\x02\x02\x10\x04\x02iimm\x05\x02\t\ncei" +
		"k\x03\x02xy\x05\x02mmpwz{\x07\x02,,77AAGGNN\x05\x02**44XX\x03\x02]b\x04" +
		"\x02\x1E\x1EZZ\x04\x02\v\vii\x05\x02\x1D\x1DJJUU\x04\x02..==\x03\x02>" +
		"@\x04\x02--PP\x03\x02\x98\x9B\x02\u0B2E\x02\u01AA\x03\x02\x02\x02\x04" +
		"\u01AC\x03\x02\x02\x02\x06\u01AF\x03\x02\x02\x02\b\u01B2\x03\x02\x02\x02" +
		"\n\u01B5\x03\x02\x02\x02\f\u01B8\x03\x02\x02\x02\x0E\u01BB\x03\x02\x02" +
		"\x02\x10\u01C1\x03\x02\x02\x02\x12\u01CE\x03\x02\x02\x02\x14\u01D4\x03" +
		"\x02\x02\x02\x16\u01D6\x03\x02\x02\x02\x18\u01D8\x03\x02\x02\x02\x1A\u01DD" +
		"\x03\x02\x02\x02\x1C\u01E9\x03\x02\x02\x02\x1E\u01ED\x03\x02\x02\x02 " +
		"\u01F8\x03\x02\x02\x02\"\u01FA\x03\x02\x02\x02$\u020B\x03\x02\x02\x02" +
		"&\u021C\x03\x02\x02\x02(\u0222\x03\x02\x02\x02*\u022E\x03\x02\x02\x02" +
		",\u0230\x03\x02\x02\x02.\u0232\x03\x02\x02\x020\u0244\x03\x02\x02\x02" +
		"2\u024A\x03\x02\x02\x024\u0251\x03\x02\x02\x026\u0253\x03\x02\x02\x02" +
		"8\u02A2\x03\x02\x02\x02:\u02CF\x03\x02\x02\x02<\u02D1\x03\x02\x02\x02" +
		">\u02D3\x03\x02\x02\x02@\u02EB\x03\x02\x02\x02B\u0309\x03\x02\x02\x02" +
		"D\u030B\x03\x02\x02\x02F\u0325\x03\x02\x02\x02H\u0327\x03\x02\x02\x02" +
		"J\u032B\x03\x02\x02\x02L\u0334\x03\x02\x02\x02N\u0336\x03\x02\x02\x02" +
		"P\u034F\x03\x02\x02\x02R\u035D\x03\x02\x02\x02T\u035F\x03\x02\x02\x02" +
		"V\u036A\x03\x02\x02\x02X\u036C\x03\x02\x02\x02Z\u037A\x03\x02\x02\x02" +
		"\\\u038B\x03\x02\x02\x02^\u0399\x03\x02\x02\x02`\u03A5\x03\x02\x02\x02" +
		"b\u03A7\x03\x02\x02\x02d\u03BB\x03\x02\x02\x02f\u03C9\x03\x02\x02\x02" +
		"h\u03D4\x03\x02\x02\x02j\u03DF\x03\x02\x02\x02l\u03EA\x03\x02\x02\x02" +
		"n\u03F8\x03\x02\x02\x02p\u040D\x03\x02\x02\x02r\u0415\x03\x02\x02\x02" +
		"t\u0417\x03\x02\x02\x02v\u0419\x03\x02\x02\x02x\u0424\x03\x02\x02\x02" +
		"z\u0440\x03\x02\x02\x02|\u0456\x03\x02\x02\x02~\u0459\x03\x02\x02\x02" +
		"\x80\u045D\x03\x02\x02\x02\x82\u0463\x03\x02\x02\x02\x84\u0481\x03\x02" +
		"\x02\x02\x86\u0493\x03\x02\x02\x02\x88\u04B8\x03\x02\x02\x02\x8A\u04BC" +
		"\x03\x02\x02\x02\x8C\u04BF\x03\x02\x02\x02\x8E\u04C6\x03\x02\x02\x02\x90" +
		"\u04D8\x03\x02\x02\x02\x92\u04DA\x03\x02\x02\x02\x94\u04DC\x03\x02\x02" +
		"\x02\x96\u04EF\x03\x02\x02\x02\x98\u04F9\x03\x02\x02\x02\x9A\u04FB\x03" +
		"\x02\x02\x02\x9C\u0512\x03\x02\x02\x02\x9E\u0514\x03\x02\x02\x02\xA0\u051C" +
		"\x03\x02\x02\x02\xA2\u051E\x03\x02\x02\x02\xA4\u0527\x03\x02\x02\x02\xA6" +
		"\u0530\x03\x02\x02\x02\xA8\u0532\x03\x02\x02\x02\xAA\u0534\x03\x02\x02" +
		"\x02\xAC\u0536\x03\x02\x02\x02\xAE\u053B\x03\x02\x02\x02\xB0\u0541\x03" +
		"\x02\x02\x02\xB2\u054A\x03\x02\x02\x02\xB4\u0553\x03\x02\x02\x02\xB6\u056C" +
		"\x03\x02\x02\x02\xB8\u0572\x03\x02\x02\x02\xBA\u057D\x03\x02\x02\x02\xBC" +
		"\u0597\x03\x02\x02\x02\xBE\u0599\x03\x02\x02\x02\xC0\u05A8\x03\x02\x02" +
		"\x02\xC2\u05BD\x03\x02\x02\x02\xC4\u05BF\x03\x02\x02\x02\xC6\u05CE\x03" +
		"\x02\x02\x02\xC8\u05D0\x03\x02\x02\x02\xCA\u05D3\x03\x02\x02\x02\xCC\u05E3" +
		"\x03\x02\x02\x02\xCE\u05E5\x03\x02\x02\x02\xD0\u05E9\x03\x02\x02\x02\xD2" +
		"\u05EB\x03\x02\x02\x02\xD4\u05EF\x03\x02\x02\x02\xD6\u05F3\x03\x02\x02" +
		"\x02\xD8\u05F6\x03\x02\x02\x02\xDA\u05FF\x03\x02\x02\x02\xDC\u0608\x03" +
		"\x02\x02\x02\xDE\u0610\x03\x02\x02\x02\xE0\u0612\x03\x02\x02\x02\xE2\u0614" +
		"\x03\x02\x02\x02\xE4\u061B\x03\x02\x02\x02\xE6\u062C\x03\x02\x02\x02\xE8" +
		"\u062F\x03\x02\x02\x02\xEA\u0639\x03\x02\x02\x02\xEC\u0649\x03\x02\x02" +
		"\x02\xEE\u064B\x03\x02\x02\x02\xF0\u065C\x03\x02\x02\x02\xF2\u066E\x03" +
		"\x02\x02\x02\xF4\u0677\x03\x02\x02\x02\xF6\u0688\x03\x02\x02\x02\xF8\u068E" +
		"\x03\x02\x02\x02\xFA\u0690\x03\x02\x02\x02\xFC\u0694\x03\x02\x02\x02\xFE" +
		"\u0696\x03\x02\x02\x02\u0100\u069A\x03\x02\x02\x02\u0102\u06B6\x03\x02" +
		"\x02\x02\u0104\u06B8\x03\x02\x02\x02\u0106\u06C3\x03\x02\x02\x02\u0108" +
		"\u06CC\x03\x02\x02\x02\u010A\u06D2\x03\x02\x02\x02\u010C\u06DD\x03\x02" +
		"\x02\x02\u010E\u06EF\x03\x02\x02\x02\u0110\u06FE\x03\x02\x02\x02\u0112" +
		"\u071A\x03\x02\x02\x02\u0114\u071C\x03\x02\x02\x02\u0116\u0720\x03\x02" +
		"\x02\x02\u0118\u0722\x03\x02\x02\x02\u011A\u0725\x03\x02\x02\x02\u011C" +
		"\u0729\x03\x02\x02\x02\u011E\u0735\x03\x02\x02\x02\u0120\u073C\x03\x02" +
		"\x02\x02\u0122\u074C\x03\x02\x02\x02\u0124\u0762\x03\x02\x02\x02\u0126" +
		"\u0764\x03\x02\x02\x02\u0128\u0781\x03\x02\x02\x02\u012A\u0783\x03\x02" +
		"\x02\x02\u012C\u07B9\x03\x02\x02\x02\u012E\u07BC\x03\x02\x02\x02\u0130" +
		"\u07D2\x03\x02\x02\x02\u0132\u07D9\x03\x02\x02\x02\u0134\u07DE\x03\x02" +
		"\x02\x02\u0136\u07E2\x03\x02\x02\x02\u0138\u07E4\x03\x02\x02\x02\u013A" +
		"\u07FD\x03\x02\x02\x02\u013C\u0801\x03\x02\x02\x02\u013E\u0804\x03\x02" +
		"\x02\x02\u0140\u0828\x03\x02\x02\x02\u0142\u082B\x03\x02\x02\x02\u0144" +
		"\u082F\x03\x02\x02\x02\u0146\u0831\x03\x02\x02\x02\u0148\u083C\x03\x02" +
		"\x02\x02\u014A\u0854\x03\x02\x02\x02\u014C\u0856\x03\x02\x02\x02\u014E" +
		"\u0874\x03\x02\x02\x02\u0150\u0876\x03\x02\x02\x02\u0152\u0880\x03\x02" +
		"\x02\x02\u0154\u0882\x03\x02\x02\x02\u0156\u0885\x03\x02\x02\x02\u0158" +
		"\u0888\x03\x02\x02\x02\u015A\u08AD\x03\x02\x02\x02\u015C\u08B4\x03\x02" +
		"\x02\x02\u015E\u08B6\x03\x02\x02\x02\u0160\u08B8\x03\x02\x02\x02\u0162" +
		"\u08BA\x03\x02\x02\x02\u0164\u08BD\x03\x02\x02\x02\u0166\u08C1\x03\x02" +
		"\x02\x02\u0168\u08C5\x03\x02\x02\x02\u016A\u08D3\x03\x02\x02\x02\u016C" +
		"\u08DF\x03\x02\x02\x02\u016E\u08E3\x03\x02\x02\x02\u0170\u08E5\x03\x02" +
		"\x02\x02\u0172\u08ED\x03\x02\x02\x02\u0174\u08EF\x03\x02\x02\x02\u0176" +
		"\u08F5\x03\x02\x02\x02\u0178\u0902\x03\x02\x02\x02\u017A\u0934\x03\x02" +
		"\x02\x02\u017C\u0936\x03\x02\x02\x02\u017E\u094C\x03\x02\x02\x02\u0180" +
		"\u094E\x03\x02\x02\x02\u0182\u0950\x03\x02\x02\x02\u0184\u0963\x03\x02" +
		"\x02\x02\u0186\u0970\x03\x02\x02\x02\u0188\u0973\x03\x02\x02\x02\u018A" +
		"\u0978\x03\x02\x02\x02\u018C\u097D\x03\x02\x02\x02\u018E\u0981\x03\x02" +
		"\x02\x02\u0190\u0988\x03\x02\x02\x02\u0192\u098C\x03\x02\x02\x02\u0194" +
		"\u09A0\x03\x02\x02\x02\u0196\u09A2\x03\x02\x02\x02\u0198\u09A8\x03\x02" +
		"\x02\x02\u019A\u09AA\x03\x02\x02\x02\u019C\u09B1\x03\x02\x02\x02\u019E" +
		"\u09C7\x03\x02\x02\x02\u01A0\u09FC\x03\x02\x02\x02\u01A2\u0A05\x03\x02" +
		"\x02\x02\u01A4\u0A07\x03\x02\x02\x02\u01A6\u0A09\x03\x02\x02\x02\u01A8" +
		"\u0A0B\x03\x02\x02\x02\u01AA\u01AB\x07\x03\x02\x02\u01AB\x03\x03\x02\x02" +
		"\x02\u01AC\u01AD\x07\x04\x02\x02\u01AD\u01AE\x05\x0E\b\x02\u01AE\x05\x03" +
		"\x02\x02\x02\u01AF\u01B0\x07\x05\x02\x02\u01B0\u01B1\x05\x0E\b\x02\u01B1" +
		"\x07\x03\x02\x02\x02\u01B2\u01B3\x07\x06\x02\x02\u01B3\u01B4\x05\x0E\b" +
		"\x02\u01B4\t\x03\x02\x02\x02\u01B5\u01B6\x07\x07\x02\x02\u01B6\u01B7\x05" +
		"\x0E\b\x02\u01B7\v\x03\x02\x02\x02\u01B8\u01B9\x07\b\x02\x02\u01B9\u01BA" +
		"\x05\x0E\b\x02\u01BA\r\x03\x02\x02\x02\u01BB\u01BD\x07]\x02\x02\u01BC" +
		"\u01BE\x05\x10\t\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02" +
		"\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x07^\x02\x02\u01C0\x0F\x03" +
		"\x02\x02\x02\u01C1\u01C2\b\t\x01\x02\u01C2\u01C3\x05\x12\n\x02\u01C3\u01C9" +
		"\x03\x02\x02\x02\u01C4\u01C5\f\x03\x02\x02\u01C5\u01C6\x07\x84\x02\x02" +
		"\u01C6\u01C8\x05\x12\n\x02\u01C7\u01C4\x03\x02\x02\x02\u01C8\u01CB\x03" +
		"\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
		"\x11\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CF\x05\x18\r" +
		"\x02\u01CD\u01CF\x05\x16\f\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CD" +
		"\x03\x02\x02\x02\u01CF\x13\x03\x02\x02\x02\u01D0\u01D5\x07\x97\x02\x02" +
		"\u01D1\u01D5\x05\u01A4\xD3\x02\u01D2\u01D5\x07\x8E\x02\x02\u01D3\u01D5" +
		"\x05\x0E\b\x02\u01D4\u01D0\x03\x02\x02\x02\u01D4\u01D1\x03\x02\x02\x02" +
		"\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5\x15\x03" +
		"\x02\x02\x02\u01D6\u01D7\x07\x8E\x02\x02\u01D7\x17\x03\x02\x02\x02\u01D8" +
		"\u01D9\x05\x16\f\x02\u01D9\u01DA\x07m\x02\x02\u01DA\u01DB\x05\x14\v\x02" +
		"\u01DB\x19\x03\x02\x02\x02\u01DC\u01DE\x05\x94K\x02\u01DD\u01DC\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\u01E0\x07\x02\x02\x03\u01E0\x1B\x03\x02\x02\x02\u01E1\u01EA\x05\u01A2" +
		"\xD2\x02\u01E2\u01EA\x07M\x02\x02\u01E3\u01E4\x07]\x02\x02\u01E4\u01E5" +
		"\x05v<\x02\u01E5\u01E6\x07^\x02\x02\u01E6\u01EA\x03\x02\x02\x02\u01E7" +
		"\u01EA\x05\x1E\x10\x02\u01E8\u01EA\x05&\x14\x02\u01E9\u01E1\x03\x02\x02" +
		"\x02\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03\x02\x02\x02\u01E9\u01E7" +
		"\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\x1D\x03\x02\x02\x02" +
		"\u01EB\u01EE\x05 \x11\x02\u01EC\u01EE\x05\"\x12\x02\u01ED\u01EB\x03\x02" +
		"\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\x1F\x03\x02\x02\x02\u01EF\u01F9" +
		"\x07\x8E\x02\x02\u01F0\u01F9\x05\u0170\xB9\x02\u01F1\u01F9\x05\u0162\xB2" +
		"\x02\u01F2\u01F9\x05\u0172\xBA\x02\u01F3\u01F4\x07k\x02\x02\u01F4\u01F9" +
		"\x05\u013C\x9F\x02\u01F5\u01F6\x07k\x02\x02\u01F6\u01F9\x05\xBA^\x02\u01F7" +
		"\u01F9\x05\u017E\xC0\x02\u01F8\u01EF\x03\x02\x02\x02\u01F8\u01F0\x03\x02" +
		"\x02\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8\u01F2\x03\x02\x02\x02\u01F8" +
		"\u01F3\x03\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F8\u01F7\x03\x02" +
		"\x02\x02\u01F9!\x03\x02\x02\x02\u01FA\u01FC\x05$\x13\x02\u01FB\u01FD\x07" +
		"L\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u01FF\x05 \x11\x02\u01FF#\x03\x02\x02\x02" +
		"\u0200\u0201\b\x13\x01\x02\u0201\u020C\x07\x89\x02\x02\u0202\u0203\x05" +
		"\xB8]\x02\u0203\u0204\x07\x89\x02\x02\u0204\u020C\x03\x02\x02\x02\u0205" +
		"\u0206\x05\xD0i\x02\u0206\u0207\x07\x89\x02\x02\u0207\u020C\x03\x02\x02" +
		"\x02\u0208\u0209\x05\xBA^\x02\u0209\u020A\x07\x89\x02\x02\u020A\u020C" +
		"\x03\x02\x02\x02\u020B\u0200\x03\x02\x02\x02\u020B\u0202\x03\x02\x02\x02" +
		"\u020B\u0205\x03\x02\x02\x02\u020B\u0208\x03\x02\x02\x02\u020C\u0219\x03" +
		"\x02\x02\x02\u020D\u020E\f\x04\x02\x02\u020E\u020F\x07\x8E\x02\x02\u020F" +
		"\u0218\x07\x89\x02\x02\u0210\u0212\f\x03\x02\x02\u0211\u0213\x07L\x02" +
		"\x02\u0212\u0211\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214" +
		"\x03\x02\x02\x02\u0214\u0215\x05\u017C\xBF\x02\u0215\u0216\x07\x89\x02" +
		"\x02\u0216\u0218\x03\x02\x02\x02\u0217\u020D\x03\x02\x02\x02\u0217\u0210" +
		"\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02" +
		"\u0219\u021A\x03\x02\x02\x02\u021A%\x03\x02\x02\x02\u021B\u0219\x03\x02" +
		"\x02\x02\u021C\u021E\x05(\x15\x02\u021D\u021F\x056\x1C\x02\u021E\u021D" +
		"\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02" +
		"\u0220\u0221\x05\x80A\x02\u0221\'\x03\x02\x02\x02\u0222\u0224\x07_\x02" +
		"\x02\u0223\u0225\x05*\x16\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225" +
		"\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x07`\x02\x02" +
		"\u0227)\x03\x02\x02\x02\u0228\u022F\x05,\x17\x02\u0229\u022F\x05.\x18" +
		"\x02\u022A\u022B\x05,\x17\x02\u022B\u022C\x07\x84\x02\x02\u022C\u022D" +
		"\x05.\x18\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0228\x03\x02\x02\x02" +
		"\u022E\u0229\x03\x02\x02\x02\u022E\u022A\x03\x02\x02\x02\u022F+\x03\x02" +
		"\x02\x02\u0230\u0231\t\x02\x02\x02\u0231-\x03\x02\x02\x02\u0232\u0233" +
		"\b\x18\x01\x02\u0233\u0235\x050\x19\x02\u0234\u0236\x07\x8D\x02\x02\u0235" +
		"\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u023F\x03\x02" +
		"\x02\x02\u0237\u0238\f\x03\x02\x02\u0238\u0239\x07\x84\x02\x02\u0239\u023B" +
		"\x050\x19\x02\u023A\u023C\x07\x8D\x02\x02\u023B\u023A\x03\x02\x02\x02" +
		"\u023B\u023C\x03\x02\x02\x02\u023C\u023E\x03\x02\x02\x02\u023D\u0237\x03" +
		"\x02\x02\x02\u023E\u0241\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
		"\u0240\x03\x02\x02\x02\u0240/\x03\x02\x02\x02\u0241\u023F\x03\x02\x02" +
		"\x02\u0242\u0245\x052\x1A\x02\u0243\u0245\x054\x1B\x02\u0244\u0242\x03" +
		"\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u02451\x03\x02\x02\x02\u0246" +
		"\u024B\x07\x8E\x02\x02\u0247\u0248\x07i\x02\x02\u0248\u024B\x07\x8E\x02" +
		"\x02\u0249\u024B\x07M\x02\x02\u024A\u0246\x03\x02\x02\x02\u024A\u0247" +
		"\x03\x02\x02\x02\u024A\u0249\x03\x02\x02\x02\u024B3\x03\x02\x02\x02\u024C" +
		"\u024D\x07\x8E\x02\x02\u024D\u0252\x05\u0132\x9A\x02\u024E\u024F\x07i" +
		"\x02\x02\u024F\u0250\x07\x8E\x02\x02\u0250\u0252\x05\u0132\x9A\x02\u0251" +
		"\u024C\x03\x02\x02\x02\u0251\u024E\x03\x02\x02\x02\u02525\x03\x02\x02" +
		"\x02\u0253\u0254\x07]\x02\x02\u0254\u0255\x05\u0128\x95\x02\u0255\u0257" +
		"\x07^\x02\x02\u0256\u0258\x077\x02\x02\u0257\u0256\x03\x02\x02\x02\u0257" +
		"\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259\u025B\x05\u0198" +
		"\xCD\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B" +
		"\u025D\x03\x02\x02\x02\u025C\u025E\x05\xEEx\x02\u025D\u025C\x03\x02\x02" +
		"\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u0261" +
		"\x05\u0110\x89\x02\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02" +
		"\x02\u02617\x03\x02\x02\x02\u0262\u0263\b\x1D\x01\x02\u0263\u02A3\x05" +
		"\x1C\x0F\x02\u0264\u0265\x05\xB6\\\x02\u0265\u0267\x07]\x02\x02\u0266" +
		"\u0268\x05> \x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02" +
		"\u0268\u0269\x03\x02\x02\x02\u0269\u026A\x07^\x02\x02\u026A\u02A3\x03" +
		"\x02\x02\x02\u026B\u026C\x05\u0186\xC4\x02\u026C\u026E\x07]\x02\x02\u026D" +
		"\u026F\x05> \x02\u026E\u026D\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x07^\x02\x02\u0271\u02A3\x03" +
		"\x02\x02\x02\u0272\u0273\x05\xB6\\\x02\u0273\u0274\x05\u013A\x9E\x02\u0274" +
		"\u02A3\x03\x02\x02\x02\u0275\u0276\x05\u0186\xC4\x02\u0276\u0277\x05\u013A" +
		"\x9E\x02\u0277\u02A3\x03\x02\x02\x02\u0278\u0279\x07\'\x02\x02\u0279\u027A" +
		"\x07n\x02\x02\u027A\u027B\x05\u011C\x8F\x02\u027B\u027C\x07o\x02\x02\u027C" +
		"\u027D\x07]\x02\x02\u027D\u027E\x05v<\x02\u027E\u027F\x07^\x02\x02\u027F" +
		"\u02A3\x03\x02\x02\x02\u0280\u0281\x07I\x02\x02\u0281\u0282\x07n\x02\x02" +
		"\u0282\u0283\x05\u011C\x8F\x02\u0283\u0284\x07o\x02\x02\u0284\u0285\x07" +
		"]\x02\x02\u0285\u0286\x05v<\x02\u0286\u0287\x07^\x02\x02\u0287\u02A3\x03" +
		"\x02\x02\x02\u0288\u0289\x07B\x02\x02\u0289\u028A\x07n\x02\x02\u028A\u028B" +
		"\x05\u011C\x8F\x02\u028B\u028C\x07o\x02\x02\u028C\u028D\x07]\x02\x02\u028D" +
		"\u028E\x05v<\x02\u028E\u028F\x07^\x02\x02\u028F\u02A3\x03\x02\x02\x02" +
		"\u0290\u0291\x07 \x02\x02\u0291\u0292\x07n\x02\x02\u0292\u0293\x05\u011C" +
		"\x8F\x02\u0293\u0294\x07o\x02\x02\u0294\u0295\x07]\x02\x02\u0295\u0296" +
		"\x05v<\x02\u0296\u0297\x07^\x02\x02\u0297\u02A3\x03\x02\x02\x02\u0298" +
		"\u0299\x05<\x1F\x02\u0299\u029A\x07]\x02\x02\u029A\u029B\x05v<\x02\u029B" +
		"\u029C\x07^\x02\x02\u029C\u02A3\x03\x02\x02\x02\u029D\u029E\x05<\x1F\x02" +
		"\u029E\u029F\x07]\x02\x02\u029F\u02A0\x05\u011C\x8F\x02\u02A0\u02A1\x07" +
		"^\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u0262\x03\x02\x02\x02\u02A2" +
		"\u0264\x03\x02\x02\x02\u02A2\u026B\x03\x02\x02\x02\u02A2\u0272\x03\x02" +
		"\x02\x02\u02A2\u0275\x03\x02\x02\x02\u02A2\u0278\x03\x02\x02\x02\u02A2" +
		"\u0280\x03\x02\x02\x02\u02A2\u0288\x03\x02\x02\x02\u02A2\u0290\x03\x02" +
		"\x02\x02\u02A2\u0298\x03\x02\x02\x02\u02A2\u029D\x03\x02\x02\x02\u02A3" +
		"\u02CC\x03\x02\x02\x02\u02A4\u02A5\f\x15\x02\x02\u02A5\u02A6\x07_\x02" +
		"\x02\u02A6\u02A7\x05v<\x02\u02A7\u02A8\x07`\x02\x02\u02A8\u02CB\x03\x02" +
		"\x02\x02\u02A9\u02AA\f\x14\x02\x02\u02AA\u02AB\x07_\x02\x02\u02AB\u02AC" +
		"\x05\u013A\x9E\x02\u02AC\u02AD\x07`\x02\x02\u02AD\u02CB\x03\x02\x02\x02" +
		"\u02AE\u02AF\f\x13\x02\x02\u02AF\u02B1\x07]\x02\x02\u02B0\u02B2\x05> " +
		"\x02\u02B1\u02B0\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B3" +
		"\x03\x02\x02\x02\u02B3\u02CB\x07^\x02\x02\u02B4\u02B5\f\x0E\x02\x02\u02B5" +
		"\u02B7\x07\x8B\x02\x02\u02B6\u02B8\x07L\x02\x02\u02B7\u02B6\x03\x02\x02" +
		"\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02CB" +
		"\x05\x1E\x10\x02\u02BA\u02BB\f\r\x02\x02\u02BB\u02BD\x07\x86\x02\x02\u02BC" +
		"\u02BE\x07L\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02" +
		"\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02CB\x05\x1E\x10\x02\u02C0\u02C1" +
		"\f\f\x02\x02\u02C1\u02C2\x07\x8B\x02\x02\u02C2\u02CB\x05@!\x02\u02C3\u02C4" +
		"\f\v\x02\x02\u02C4\u02C5\x07\x86\x02\x02\u02C5\u02CB\x05@!\x02\u02C6\u02C7" +
		"\f\n\x02\x02\u02C7\u02CB\x07\x82\x02\x02\u02C8\u02C9\f\t\x02\x02\u02C9" +
		"\u02CB\x07\x83\x02\x02\u02CA\u02A4\x03\x02\x02\x02\u02CA\u02A9\x03\x02" +
		"\x02\x02\u02CA\u02AE\x03\x02\x02\x02\u02CA\u02B4\x03\x02\x02\x02\u02CA" +
		"\u02BA\x03\x02\x02\x02\u02CA\u02C0\x03\x02\x02\x02\u02CA\u02C3\x03\x02" +
		"\x02\x02\u02CA\u02C6\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CB" +
		"\u02CE\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02" +
		"\x02\x02\u02CD9\x03\x02\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D0" +
		"\x07S\x02\x02\u02D0;\x03\x02\x02\x02\u02D1\u02D2\x07S\x02\x02\u02D2=\x03" +
		"\x02\x02\x02\u02D3\u02D4\x05\u0138\x9D\x02\u02D4?\x03\x02\x02\x02\u02D5" +
		"\u02D7\x05$\x13\x02\u02D6\u02D5\x03\x02\x02\x02\u02D6\u02D7\x03\x02\x02" +
		"\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x05\xB8]\x02\u02D9\u02DA" +
		"\x07\x89\x02\x02\u02DA\u02DB\x07k\x02\x02\u02DB\u02DC\x05\xB8]\x02\u02DC" +
		"\u02EC\x03\x02\x02\x02\u02DD\u02DE\x05$\x13\x02\u02DE\u02DF\x07L\x02\x02" +
		"\u02DF\u02E0\x05\u017C\xBF\x02\u02E0\u02E1\x07\x89\x02\x02\u02E1\u02E2" +
		"\x07k\x02\x02\u02E2\u02E3\x05\xB8]\x02\u02E3\u02EC\x03\x02\x02\x02\u02E4" +
		"\u02E6\x05$\x13\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02" +
		"\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x07k\x02\x02\u02E8\u02EC" +
		"\x05\xB8]\x02\u02E9\u02EA\x07k\x02\x02\u02EA\u02EC\x05\xBA^\x02\u02EB" +
		"\u02D6\x03\x02\x02\x02\u02EB\u02DD\x03\x02\x02\x02\u02EB\u02E5\x03\x02" +
		"\x02\x02\u02EB\u02E9\x03\x02\x02\x02\u02ECA\x03\x02\x02\x02\u02ED\u030A" +
		"\x058\x1D\x02\u02EE\u02EF\x07\x82\x02\x02\u02EF\u030A\x05V,\x02\u02F0" +
		"\u02F1\x07\x83\x02\x02\u02F1\u030A\x05V,\x02\u02F2\u02F3\x05D#\x02\u02F3" +
		"\u02F4\x05V,\x02\u02F4\u030A\x03\x02\x02\x02\u02F5\u02F6\x07F\x02\x02" +
		"\u02F6\u030A\x05B\"\x02\u02F7\u02F8\x07F\x02\x02\u02F8\u02F9\x07]\x02" +
		"\x02\u02F9\u02FA\x05\u011C\x8F\x02\u02FA\u02FB\x07^\x02\x02\u02FB\u030A" +
		"\x03\x02\x02\x02\u02FC\u02FD\x07F\x02\x02\u02FD\u02FE\x07\x8D\x02\x02" +
		"\u02FE\u02FF\x07]\x02\x02\u02FF\u0300\x07\x8E\x02\x02\u0300\u030A\x07" +
		"^\x02\x02\u0301\u0302\x07\x13\x02\x02\u0302\u0303\x07]\x02\x02\u0303\u0304" +
		"\x05\u011C\x8F\x02\u0304\u0305\x07^\x02\x02\u0305\u030A\x03\x02\x02\x02" +
		"\u0306\u030A\x05T+\x02\u0307\u030A\x05F$\x02\u0308\u030A\x05R*\x02\u0309" +
		"\u02ED\x03\x02\x02\x02\u0309\u02EE\x03\x02\x02\x02\u0309\u02F0\x03\x02" +
		"\x02\x02\u0309\u02F2\x03\x02\x02\x02\u0309\u02F5\x03\x02\x02\x02\u0309" +
		"\u02F7\x03\x02\x02\x02\u0309\u02FC\x03\x02\x02\x02\u0309\u0301\x03\x02" +
		"\x02\x02\u0309\u0306\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309" +
		"\u0308\x03\x02\x02\x02\u030AC\x03\x02\x02\x02\u030B\u030C\t\x03\x02\x02" +
		"\u030CE\x03\x02\x02\x02\u030D\u030F\x07\x89\x02\x02\u030E\u030D\x03\x02" +
		"\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310" +
		"\u0312\x079\x02\x02\u0311\u0313\x05H%\x02\u0312\u0311\x03\x02\x02\x02" +
		"\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0316\x05" +
		"J";
	private static readonly _serializedATNSegment2: string =
		"&\x02\u0315\u0317\x05P)\x02\u0316\u0315\x03\x02\x02\x02\u0316\u0317\x03" +
		"\x02\x02\x02\u0317\u0326\x03\x02\x02\x02\u0318\u031A\x07\x89\x02\x02\u0319" +
		"\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02" +
		"\x02\x02\u031B\u031D\x079\x02\x02\u031C\u031E\x05H%\x02\u031D\u031C\x03" +
		"\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F" +
		"\u0320\x07]\x02\x02\u0320\u0321\x05\u011C\x8F\x02\u0321\u0323\x07^\x02" +
		"\x02\u0322\u0324\x05P)\x02\u0323\u0322\x03\x02\x02\x02\u0323\u0324\x03" +
		"\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u030E\x03\x02\x02\x02\u0325" +
		"\u0319\x03\x02\x02\x02\u0326G\x03\x02\x02\x02\u0327\u0328\x07]\x02\x02" +
		"\u0328\u0329\x05> \x02\u0329\u032A\x07^\x02\x02\u032AI\x03\x02\x02\x02" +
		"\u032B\u032D\x05\xB2Z\x02\u032C\u032E\x05L\'\x02\u032D\u032C\x03\x02\x02" +
		"\x02\u032D\u032E\x03\x02\x02\x02\u032EK\x03\x02\x02\x02\u032F\u0331\x05" +
		"\u0112\x8A\x02\u0330\u0332\x05L\'\x02\u0331\u0330\x03\x02\x02\x02\u0331" +
		"\u0332\x03\x02\x02\x02\u0332\u0335\x03\x02\x02\x02\u0333\u0335\x05N(\x02" +
		"\u0334\u032F\x03\x02\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335M\x03\x02" +
		"\x02\x02\u0336\u0337\b(\x01\x02\u0337\u0338\x07_\x02\x02\u0338\u0339\x05" +
		"v<\x02\u0339\u033B\x07`\x02\x02\u033A\u033C\x05\xEEx\x02\u033B\u033A\x03" +
		"\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u0346\x03\x02\x02\x02\u033D" +
		"\u033E\f\x03\x02\x02\u033E\u033F\x07_\x02\x02\u033F\u0340\x05x=\x02\u0340" +
		"\u0342\x07`\x02\x02\u0341\u0343\x05\xEEx\x02\u0342\u0341\x03\x02\x02\x02" +
		"\u0342\u0343\x03\x02\x02\x02\u0343\u0345\x03\x02\x02\x02\u0344\u033D\x03" +
		"\x02\x02\x02\u0345\u0348\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0346" +
		"\u0347\x03\x02\x02\x02\u0347O\x03\x02\x02\x02\u0348\u0346\x03\x02\x02" +
		"\x02\u0349\u034B\x07]\x02\x02\u034A\u034C\x05> \x02\u034B\u034A\x03\x02" +
		"\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
		"\u0350\x07^\x02\x02\u034E\u0350\x05\u013A\x9E\x02\u034F\u0349\x03\x02" +
		"\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350Q\x03\x02\x02\x02\u0351\u0353" +
		"\x07\x89\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
		"\u0353\u0354\x03\x02\x02\x02\u0354\u0355\x07$\x02\x02\u0355\u035E\x05" +
		"V,\x02\u0356\u0358\x07\x89\x02\x02\u0357\u0356\x03\x02\x02\x02\u0357\u0358" +
		"\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x07$\x02\x02" +
		"\u035A\u035B\x07_\x02\x02\u035B\u035C\x07`\x02\x02\u035C\u035E\x05V,\x02" +
		"\u035D\u0352\x03\x02\x02\x02\u035D\u0357\x03\x02\x02\x02\u035ES\x03\x02" +
		"\x02\x02\u035F\u0360\x07:\x02\x02\u0360\u0361\x07]\x02\x02\u0361\u0362" +
		"\x05v<\x02\u0362\u0363\x07^\x02\x02\u0363U\x03\x02\x02\x02\u0364\u036B" +
		"\x05B\"\x02\u0365\u0366\x07]\x02\x02\u0366\u0367\x05\u011C\x8F\x02\u0367" +
		"\u0368\x07^\x02\x02\u0368\u0369\x05V,\x02\u0369\u036B\x03\x02\x02\x02" +
		"\u036A\u0364\x03\x02\x02\x02\u036A\u0365\x03\x02\x02\x02\u036BW\x03\x02" +
		"\x02\x02\u036C\u036D\b-\x01\x02\u036D\u036E\x05V,\x02\u036E\u0377\x03" +
		"\x02\x02\x02\u036F\u0370\f\x04\x02\x02\u0370\u0371\x07\x8C\x02\x02\u0371" +
		"\u0376\x05V,\x02\u0372\u0373\f\x03\x02\x02\u0373\u0374\x07\x85\x02\x02" +
		"\u0374\u0376\x05V,\x02\u0375\u036F\x03\x02\x02\x02\u0375\u0372\x03\x02" +
		"\x02\x02\u0376\u0379\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377" +
		"\u0378\x03\x02\x02\x02\u0378Y\x03\x02\x02\x02\u0379\u0377\x03\x02\x02" +
		"\x02\u037A\u037B\b.\x01\x02\u037B\u037C\x05X-\x02\u037C\u0388\x03\x02" +
		"\x02\x02\u037D\u037E\f\x05\x02\x02\u037E\u037F\x07e\x02\x02\u037F\u0387" +
		"\x05X-\x02\u0380\u0381\f\x04\x02\x02\u0381\u0382\x07f\x02\x02\u0382\u0387" +
		"\x05X-\x02\u0383\u0384\f\x03\x02\x02\u0384\u0385\x07g\x02\x02\u0385\u0387" +
		"\x05X-\x02\u0386\u037D\x03\x02\x02\x02\u0386\u0380\x03\x02\x02\x02\u0386" +
		"\u0383\x03\x02\x02\x02\u0387\u038A\x03\x02\x02\x02\u0388\u0386\x03\x02" +
		"\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389[\x03\x02\x02\x02\u038A\u0388" +
		"\x03\x02\x02\x02\u038B\u038C\b/\x01\x02\u038C\u038D\x05Z.\x02\u038D\u0396" +
		"\x03\x02\x02\x02\u038E\u038F\f\x04\x02\x02\u038F\u0390\x07c\x02\x02\u0390" +
		"\u0395\x05Z.\x02\u0391\u0392\f\x03\x02\x02\u0392\u0393\x07d\x02\x02\u0393" +
		"\u0395\x05Z.\x02\u0394\u038E\x03\x02\x02\x02\u0394\u0391\x03\x02\x02\x02" +
		"\u0395\u0398\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0397\x03" +
		"\x02\x02\x02\u0397]\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0399" +
		"\u039A\b0\x01\x02\u039A\u039B\x05\\/\x02\u039B\u03A2\x03\x02\x02\x02\u039C" +
		"\u039D\f\x03\x02\x02\u039D\u039E\x05`1\x02\u039E\u039F\x05\\/\x02\u039F" +
		"\u03A1\x03\x02\x02\x02\u03A0\u039C\x03\x02\x02\x02\u03A1\u03A4\x03\x02" +
		"\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3" +
		"_\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A6\t\x04\x02\x02" +
		"\u03A6a\x03\x02\x02\x02\u03A7\u03A8\b2\x01\x02\u03A8\u03A9\x05^0\x02\u03A9" +
		"\u03B8\x03\x02\x02\x02\u03AA\u03AB\f\x06\x02\x02\u03AB\u03AC\x07n\x02" +
		"\x02\u03AC\u03B7\x05^0\x02\u03AD\u03AE\f\x05\x02\x02\u03AE\u03AF\x07o" +
		"\x02\x02\u03AF\u03B7\x05^0\x02\u03B0\u03B1\f\x04\x02\x02\u03B1\u03B2\x07" +
		"~\x02\x02\u03B2\u03B7\x05^0\x02\u03B3\u03B4\f\x03\x02\x02\u03B4\u03B5" +
		"\x07\x7F\x02\x02\u03B5\u03B7\x05^0\x02\u03B6\u03AA\x03\x02\x02\x02\u03B6" +
		"\u03AD\x03\x02\x02\x02\u03B6\u03B0\x03\x02\x02\x02\u03B6\u03B3\x03\x02" +
		"\x02\x02\u03B7\u03BA\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8" +
		"\u03B9\x03\x02\x02\x02\u03B9c\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02" +
		"\x02\u03BB\u03BC\b3\x01\x02\u03BC\u03BD\x05b2\x02\u03BD\u03C6\x03\x02" +
		"\x02\x02\u03BE\u03BF\f\x04\x02\x02\u03BF\u03C0\x07|\x02\x02\u03C0\u03C5" +
		"\x05b2\x02\u03C1\u03C2\f\x03\x02\x02\u03C2\u03C3\x07}\x02\x02\u03C3\u03C5" +
		"\x05b2\x02\u03C4\u03BE\x03\x02\x02\x02\u03C4\u03C1\x03\x02\x02\x02\u03C5" +
		"\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03\x02" +
		"\x02\x02\u03C7e\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CA" +
		"\b4\x01\x02\u03CA\u03CB\x05d3\x02\u03CB\u03D1\x03\x02\x02\x02\u03CC\u03CD" +
		"\f\x03\x02\x02\u03CD\u03CE\x07i\x02\x02\u03CE\u03D0\x05d3\x02\u03CF\u03CC" +
		"\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02" +
		"\u03D1\u03D2\x03\x02\x02\x02\u03D2g\x03\x02\x02\x02\u03D3\u03D1\x03\x02" +
		"\x02\x02\u03D4\u03D5\b5\x01\x02\u03D5\u03D6\x05f4\x02\u03D6\u03DC\x03" +
		"\x02\x02\x02\u03D7\u03D8\f\x03\x02\x02\u03D8\u03D9\x07h\x02\x02\u03D9" +
		"\u03DB\x05f4\x02\u03DA\u03D7\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02" +
		"\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DDi\x03\x02" +
		"\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E0\b6\x01\x02\u03E0\u03E1" +
		"\x05h5\x02\u03E1\u03E7\x03\x02\x02\x02\u03E2\u03E3\f\x03\x02\x02\u03E3" +
		"\u03E4\x07j\x02\x02\u03E4\u03E6\x05h5\x02\u03E5\u03E2\x03\x02\x02\x02" +
		"\u03E6\u03E9\x03\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03" +
		"\x02\x02\x02\u03E8k\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA" +
		"\u03EB\b7\x01\x02\u03EB\u03EC\x05j6\x02\u03EC\u03F5\x03\x02\x02\x02\u03ED" +
		"\u03EE\f\x04\x02\x02\u03EE\u03EF\x07\v\x02\x02\u03EF\u03F4\x05j6\x02\u03F0" +
		"\u03F1\f\x03\x02\x02\u03F1\u03F2\x07\f\x02\x02\u03F2\u03F4\x05j6\x02\u03F3" +
		"\u03ED\x03\x02\x02\x02\u03F3\u03F0\x03\x02\x02\x02\u03F4\u03F7\x03\x02" +
		"\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6" +
		"m\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03F9\b8\x01\x02\u03F9" +
		"\u03FA\x05l7\x02\u03FA\u0403\x03\x02\x02\x02\u03FB\u03FC\f\x04\x02\x02" +
		"\u03FC\u03FD\x07\r\x02\x02\u03FD\u0402\x05l7\x02\u03FE\u03FF\f\x03\x02" +
		"\x02\u03FF\u0400\x07\x0E\x02\x02\u0400\u0402\x05l7\x02\u0401\u03FB\x03" +
		"\x02\x02\x02\u0401\u03FE\x03\x02\x02\x02\u0402\u0405\x03\x02\x02\x02\u0403" +
		"\u0401\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404o\x03\x02\x02" +
		"\x02\u0405\u0403\x03\x02\x02\x02\u0406\u040E\x05n8\x02\u0407\u0408\x05" +
		"n8\x02\u0408\u0409\x07\x87\x02\x02\u0409\u040A\x05v<\x02\u040A\u040B\x07" +
		"\x88\x02\x02\u040B\u040C\x05r:\x02\u040C\u040E\x03\x02\x02\x02\u040D\u0406" +
		"\x03\x02\x02\x02\u040D\u0407\x03\x02\x02\x02\u040Eq\x03\x02\x02\x02\u040F" +
		"\u0416\x05p9\x02\u0410\u0411\x05n8\x02\u0411\u0412\x05t;\x02\u0412\u0413" +
		"\x05\u0136\x9C\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0416\x05\u0196\xCC" +
		"\x02\u0415\u040F\x03\x02\x02\x02\u0415\u0410\x03\x02\x02\x02\u0415\u0414" +
		"\x03\x02\x02\x02\u0416s\x03\x02\x02\x02\u0417\u0418\t\x05\x02\x02\u0418" +
		"u\x03\x02\x02\x02\u0419\u041A\b<\x01\x02\u041A\u041B\x05r:\x02\u041B\u0421" +
		"\x03\x02\x02\x02\u041C\u041D\f\x03\x02\x02\u041D\u041E\x07\x84\x02\x02" +
		"\u041E\u0420\x05r:\x02\u041F\u041C\x03\x02\x02\x02\u0420\u0423\x03\x02" +
		"\x02\x02\u0421\u041F\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02\u0422" +
		"w\x03\x02\x02\x02\u0423\u0421\x03\x02\x02\x02\u0424\u0425\x05p9\x02\u0425" +
		"y\x03\x02\x02\x02\u0426\u0441\x05|?\x02\u0427\u0429\x05\xEEx\x02\u0428" +
		"\u0427\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02" +
		"\x02\x02\u042A\u0441\x05~@\x02\u042B\u042D\x05\xEEx\x02\u042C\u042B\x03" +
		"\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02\u042E" +
		"\u0441\x05\x80A\x02\u042F\u0431\x05\xEEx\x02\u0430\u042F\x03\x02\x02\x02" +
		"\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x03\x02\x02\x02\u0432\u0441\x05" +
		"\x84C\x02\u0433\u0435\x05\xEEx\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435" +
		"\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0441\x05\x88E\x02" +
		"\u0437\u0439\x05\xEEx\x02\u0438\u0437\x03\x02\x02\x02\u0438\u0439\x03" +
		"\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u0441\x05\x90I\x02\u043B" +
		"\u0441\x05\x92J\x02\u043C\u043E\x05\xEEx\x02\u043D\u043C\x03\x02\x02\x02" +
		"\u043D\u043E\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0441\x05" +
		"\u018C\xC7\x02\u0440\u0426\x03\x02\x02\x02\u0440\u0428\x03\x02\x02\x02" +
		"\u0440\u042C\x03\x02\x02\x02\u0440\u0430\x03\x02\x02\x02\u0440\u0434\x03" +
		"\x02\x02\x02\u0440\u0438\x03\x02\x02\x02\u0440\u043B\x03\x02\x02\x02\u0440" +
		"\u043D\x03\x02\x02\x02\u0441{\x03\x02\x02\x02\u0442\u0444\x05\xEEx\x02" +
		"\u0443\u0442\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0445\x03" +
		"\x02\x02\x02\u0445\u0446\x07\x8E\x02\x02\u0446\u0447\x07\x88\x02\x02\u0447" +
		"\u0457\x05z>\x02\u0448\u044A\x05\xEEx\x02\u0449\u0448\x03\x02\x02\x02" +
		"\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x07" +
		"\x18\x02\x02\u044C\u044D\x05x=\x02\u044D\u044E\x07\x88\x02\x02\u044E\u044F" +
		"\x05z>\x02\u044F\u0457\x03\x02\x02\x02\u0450\u0452\x05\xEEx\x02\u0451" +
		"\u0450\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0453\x03\x02" +
		"\x02\x02\u0453\u0454\x07#\x02\x02\u0454\u0455\x07\x88\x02\x02\u0455\u0457" +
		"\x05z>\x02\u0456\u0443\x03\x02\x02\x02\u0456\u0449\x03\x02\x02\x02\u0456" +
		"\u0451\x03\x02\x02\x02\u0457}\x03\x02\x02\x02\u0458\u045A\x05v<\x02\u0459" +
		"\u0458\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045B\x03\x02" +
		"\x02\x02\u045B\u045C\x07\x8A\x02\x02\u045C\x7F\x03\x02\x02\x02\u045D\u045F" +
		"\x07a\x02\x02\u045E\u0460\x05\x82B\x02\u045F\u045E\x03\x02\x02\x02\u045F" +
		"\u0460\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0462\x07b\x02" +
		"\x02\u0462\x81\x03\x02\x02\x02\u0463\u0464\bB\x01\x02\u0464\u0465\x05" +
		"z>\x02\u0465\u046A\x03\x02\x02\x02\u0466\u0467\f\x03\x02\x02\u0467\u0469" +
		"\x05z>\x02\u0468\u0466\x03\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A" +
		"\u0468\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\x83\x03\x02\x02" +
		"\x02\u046C\u046A\x03\x02\x02\x02\u046D\u046E\x073\x02\x02\u046E\u046F" +
		"\x07]\x02\x02\u046F\u0470\x05\x86D\x02\u0470\u0471\x07^\x02\x02\u0471" +
		"\u0472\x05z>\x02\u0472\u0482\x03\x02\x02\x02\u0473\u0474\x073\x02\x02" +
		"\u0474\u0475\x07]\x02\x02\u0475\u0476\x05\x86D\x02\u0476\u0477\x07^\x02" +
		"\x02\u0477\u0478\x05z>\x02\u0478\u0479\x07(\x02\x02\u0479\u047A\x05z>" +
		"\x02\u047A\u0482\x03\x02\x02\x02\u047B\u047C\x07K\x02\x02\u047C\u047D" +
		"\x07]\x02\x02\u047D\u047E\x05\x86D\x02\u047E\u047F\x07^\x02\x02\u047F" +
		"\u0480\x05z>\x02\u0480\u0482\x03\x02\x02\x02\u0481\u046D\x03\x02\x02\x02" +
		"\u0481\u0473\x03\x02\x02\x02\u0481\u047B\x03\x02\x02\x02\u0482\x85\x03" +
		"\x02\x02\x02\u0483\u0494\x05v<\x02\u0484\u0486\x05\xEEx\x02\u0485\u0484" +
		"\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02" +
		"\u0487\u0488\x05\xA6T\x02\u0488\u0489\x05\u0108\x85\x02\u0489\u048A\x07" +
		"m\x02\x02\u048A\u048B\x05\u0136\x9C\x02\u048B\u0494\x03\x02\x02\x02\u048C" +
		"\u048E\x05\xEEx\x02\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03\x02\x02" +
		"\x02\u048E\u048F\x03\x02\x02\x02\u048F\u0490\x05\xA6T\x02\u0490\u0491" +
		"\x05\u0108\x85\x02\u0491\u0492\x05\u013A\x9E\x02\u0492\u0494\x03\x02\x02" +
		"\x02\u0493\u0483\x03\x02\x02\x02\u0493\u0485\x03\x02\x02\x02\u0493\u048D" +
		"\x03\x02\x02\x02\u0494\x87\x03\x02\x02\x02\u0495\u0496\x07\\\x02\x02\u0496" +
		"\u0497\x07]\x02\x02\u0497\u0498\x05\x86D\x02\u0498\u0499\x07^\x02\x02" +
		"\u0499\u049A\x05z>\x02\u049A\u04B9\x03\x02\x02\x02\u049B\u049C\x07%\x02" +
		"\x02\u049C\u049D\x05z>\x02\u049D\u049E\x07\\\x02\x02\u049E\u049F\x07]" +
		"\x02\x02\u049F\u04A0\x05v<\x02\u04A0\u04A1\x07^\x02\x02\u04A1\u04A2\x07" +
		"\x8A\x02\x02\u04A2\u04B9\x03\x02\x02\x02\u04A3\u04A4\x070\x02\x02\u04A4" +
		"\u04A5\x07]\x02\x02\u04A5\u04A7\x05\x8AF\x02\u04A6\u04A8\x05\x86D\x02" +
		"\u04A7\u04A6\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02\x02\u04A8\u04A9\x03" +
		"\x02\x02\x02\u04A9\u04AB\x07\x8A\x02\x02\u04AA\u04AC\x05v<\x02\u04AB\u04AA" +
		"\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02" +
		"\u04AD\u04AE\x07^\x02\x02\u04AE\u04AF\x05z>\x02\u04AF\u04B9\x03\x02\x02" +
		"\x02\u04B0\u04B1\x070\x02\x02\u04B1\u04B2\x07]\x02\x02\u04B2\u04B3\x05" +
		"\x8CG\x02\u04B3\u04B4\x07\x88\x02\x02\u04B4\u04B5\x05\x8EH\x02\u04B5\u04B6" +
		"\x07^\x02\x02\u04B6\u04B7\x05z>\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8" +
		"\u0495\x03\x02\x02\x02\u04B8\u049B\x03\x02\x02\x02\u04B8\u04A3\x03\x02" +
		"\x02\x02\u04B8\u04B0\x03\x02\x02\x02\u04B9\x89\x03\x02\x02\x02\u04BA\u04BD" +
		"\x05~@\x02\u04BB\u04BD\x05\x9CO\x02\u04BC\u04BA\x03\x02\x02\x02\u04BC" +
		"\u04BB\x03\x02\x02\x02\u04BD\x8B\x03\x02\x02\x02\u04BE\u04C0\x05\xEEx" +
		"\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C1" +
		"\x03\x02\x02\x02\u04C1\u04C2\x05\xA6T\x02\u04C2\u04C3\x05\u0108\x85\x02" +
		"\u04C3\x8D\x03\x02\x02\x02\u04C4\u04C7\x05v<\x02\u04C5\u04C7\x05\u013A" +
		"\x9E\x02\u04C6\u04C4\x03\x02\x02\x02\u04C6\u04C5\x03\x02\x02\x02\u04C7" +
		"\x8F\x03\x02\x02\x02\u04C8\u04C9\x07\x17\x02\x02\u04C9\u04D9\x07\x8A\x02" +
		"\x02\u04CA\u04CB\x07!\x02\x02\u04CB\u04D9\x07\x8A\x02\x02\u04CC\u04CE" +
		"\x07C\x02\x02\u04CD\u04CF\x05v<\x02\u04CE\u04CD\x03\x02\x02\x02\u04CE" +
		"\u04CF\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D9\x07\x8A" +
		"\x02\x02\u04D1\u04D2\x07C\x02\x02\u04D2\u04D3\x05\u013A\x9E\x02\u04D3" +
		"\u04D4\x07\x8A\x02\x02\u04D4\u04D9\x03\x02\x02\x02\u04D5\u04D6\x072\x02" +
		"\x02\u04D6\u04D7\x07\x8E\x02\x02\u04D7\u04D9\x07\x8A\x02\x02\u04D8\u04C8" +
		"\x03\x02\x02\x02\u04D8\u04CA\x03\x02\x02\x02\u04D8\u04CC\x03\x02\x02\x02" +
		"\u04D8\u04D1\x03\x02\x02\x02\u04D8\u04D5\x03\x02\x02\x02\u04D9\x91\x03" +
		"\x02\x02\x02\u04DA\u04DB\x05\x98M\x02\u04DB\x93\x03\x02\x02\x02\u04DC" +
		"\u04DD\bK\x01\x02\u04DD\u04DE\x05\x96L\x02\u04DE\u04E3\x03\x02\x02\x02" +
		"\u04DF\u04E0\f\x03\x02\x02\u04E0\u04E2\x05\x96L\x02\u04E1\u04DF\x03\x02" +
		"\x02\x02\u04E2\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3" +
		"\u04E4\x03\x02\x02\x02\u04E4\x95\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02" +
		"\x02\u04E6\u04F0\x05\x98M\x02\u04E7\u04F0\x05\u012E\x98\x02\u04E8\u04F0" +
		"\x05\u0174\xBB\x02\u04E9\u04F0\x05\u0188\xC5\x02\u04EA\u04F0\x05\u018A" +
		"\xC6\x02\u04EB\u04F0\x05\xECw\x02\u04EC\u04F0\x05\xD4k\x02\u04ED\u04F0" +
		"\x05\xA0Q\x02\u04EE\u04F0\x05\xA2R\x02\u04EF\u04E6\x03\x02\x02\x02\u04EF" +
		"\u04E7\x03\x02\x02\x02\u04EF\u04E8\x03\x02\x02\x02\u04EF\u04E9\x03\x02" +
		"\x02\x02\u04EF\u04EA\x03\x02\x02\x02\u04EF\u04EB\x03\x02\x02\x02\u04EF" +
		"\u04EC\x03\x02\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04EF\u04EE\x03\x02" +
		"\x02\x02\u04F0\x97\x03\x02\x02\x02\u04F1\u04FA\x05\x9CO\x02\u04F2\u04FA" +
		"\x05\xEAv\x02\u04F3\u04FA\x05\xE2r\x02\u04F4\u04FA\x05\xE6t\x02\u04F5" +
		"\u04FA\x05\xE8u\x02\u04F6\u04FA\x05\x9EP\x02\u04F7\u04FA\x05\x9AN\x02" +
		"\u04F8\u04FA\x05\xC4c\x02\u04F9\u04F1\x03\x02\x02\x02\u04F9\u04F2\x03" +
		"\x02\x02\x02\u04F9\u04F3\x03\x02\x02\x02\u04F9\u04F4\x03\x02\x02\x02\u04F9" +
		"\u04F5\x03\x02\x02\x02\u04F9\u04F6\x03\x02\x02\x02\u04F9\u04F7\x03\x02" +
		"\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA\x99\x03\x02\x02\x02\u04FB\u04FC" +
		"\x07W\x02\x02\u04FC\u04FE\x07\x8E\x02\x02\u04FD\u04FF\x05\xEEx\x02\u04FE" +
		"\u04FD\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0500\x03\x02" +
		"\x02\x02\u0500\u0501\x07m\x02\x02\u0501\u0502\x05\u011C\x8F\x02\u0502" +
		"\u0503\x07\x8A\x02\x02\u0503\x9B\x03\x02\x02\x02\u0504\u0506\x05\xA6T" +
		"\x02\u0505\u0504\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02\u0506\u0508" +
		"\x03\x02\x02\x02\u0507\u0509\x05\u0104\x83\x02\u0508\u0507\x03\x02\x02" +
		"\x02\u0508\u0509\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u0513" +
		"\x07\x8A\x02\x02\u050B\u050D\x05\xEEx\x02\u050C\u050E\x05\xA6T\x02\u050D" +
		"\u050C\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u050F\x03\x02" +
		"\x02\x02\u050F\u0510\x05\u0104\x83\x02\u0510\u0511\x07\x8A\x02\x02\u0511" +
		"\u0513\x03\x02\x02\x02\u0512\u0505\x03\x02\x02\x02\u0512\u050B\x03\x02" +
		"\x02\x02\u0513\x9D\x03\x02\x02\x02\u0514\u0515\x07H\x02\x02\u0515\u0516" +
		"\x07]\x02\x02\u0516\u0517\x05x=\x02\u0517\u0518\x07\x84\x02\x02\u0518" +
		"\u0519\x07\x97\x02\x02\u0519\u051A\x07^\x02\x02\u051A\u051B\x07\x8A\x02" +
		"\x02\u051B\x9F\x03\x02\x02\x02\u051C\u051D\x07\x8A\x02\x02\u051D\xA1\x03" +
		"\x02\x02\x02\u051E\u051F\x05\xEEx\x02\u051F\u0520\x07\x8A\x02\x02\u0520" +
		"\xA3\x03\x02\x02\x02\u0521\u0528\x05\xA8U\x02\u0522\u0528\x05\xAEX\x02" +
		"\u0523\u0528\x05\xAAV\x02\u0524\u0528\x071\x02\x02\u0525\u0528\x07R\x02" +
		"\x02\u0526\u0528\x07\x1F\x02\x02\u0527\u0521\x03\x02\x02\x02\u0527\u0522" +
		"\x03\x02\x02\x02\u0527\u0523\x03\x02\x02\x02\u0527\u0524\x03\x02\x02\x02" +
		"\u0527\u0525\x03\x02\x02\x02\u0527\u0526\x03\x02\x02\x02\u0528\xA5\x03" +
		"\x02\x02\x02\u0529\u052B\x05\xA4S\x02\u052A\u052C\x05\xEEx\x02\u052B\u052A" +
		"\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u0531\x03\x02\x02\x02" +
		"\u052D\u052E\x05\xA4S\x02\u052E\u052F\x05\xA6T\x02\u052F\u0531\x03\x02" +
		"\x02\x02\u0530\u0529\x03\x02\x02\x02\u0530\u052D\x03\x02\x02\x02\u0531" +
		"\xA7\x03\x02\x02\x02\u0532\u0533\t\x06\x02\x02\u0533\xA9\x03\x02\x02\x02" +
		"\u0534\u0535\t\x07\x02\x02\u0535\xAB\x03\x02\x02\x02\u0536\u0537\x07\x8E" +
		"\x02\x02\u0537\xAD\x03\x02\x02\x02\u0538\u053C\x05\xB0Y\x02\u0539\u053C" +
		"\x05\u013E\xA0\x02\u053A\u053C\x05\xC0a\x02\u053B\u0538\x03\x02\x02\x02" +
		"\u053B\u0539\x03\x02\x02\x02\u053B\u053A\x03\x02\x02\x02\u053C\xAF\x03" +
		"\x02\x02\x02\u053D\u0542\x05\xB6\\\x02\u053E\u0542\x05\xBC_\x02\u053F" +
		"\u0542\x05\u0186\xC4\x02\u0540\u0542\x05\u0116\x8C\x02\u0541\u053D\x03" +
		"\x02\x02\x02\u0541\u053E\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541" +
		"\u0540\x03\x02\x02\x02\u0542\xB1\x03\x02\x02\x02\u0543\u0545\x05\xAEX" +
		"\x02\u0544\u0546\x05\xEEx\x02\u0545\u0544\x03\x02\x02\x02\u0545\u0546" +
		"\x03\x02\x02\x02\u0546\u054B\x03\x02\x02\x02\u0547\u0548\x05\xAEX\x02" +
		"\u0548\u0549\x05\xB2Z\x02\u0549\u054B\x03\x02\x02\x02\u054A\u0543\x03" +
		"\x02\x02\x02\u054A\u0547\x03\x02\x02\x02\u054B\xB3\x03\x02\x02\x02\u054C" +
		"\u054E\x05\xB0Y\x02\u054D\u054F\x05\xEEx\x02\u054E\u054D\x03\x02\x02\x02" +
		"\u054E\u054F\x03\x02\x02\x02\u054F\u0554\x03\x02\x02\x02\u0550\u0551\x05" +
		"\xB0Y\x02\u0551\u0552\x05\xB4[\x02\u0552\u0554\x03\x02\x02\x02\u0553\u054C" +
		"\x03\x02\x02\x02\u0553\u0550\x03\x02\x02\x02\u0554\xB5\x03\x02\x02\x02" +
		"\u0555\u0557\x05$\x13\x02\u0556\u0555\x03\x02\x02\x02\u0556\u0557\x03" +
		"\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u056D\x05\xB8]\x02\u0559" +
		"\u055A\x05$\x13\x02\u055A\u055B\x07L\x02\x02\u055B\u055C\x05\u017C\xBF" +
		"\x02\u055C\u056D\x03\x02\x02\x02\u055D\u056D\x07\x1A\x02\x02\u055E\u056D" +
		"\x07\x1B\x02\x02\u055F\u056D\x07\x1C\x02\x02\u0560\u056D\x07[\x02\x02" +
		"\u0561\u056D\x07\x16\x02\x02\u0562\u056D\x07D\x02\x02\u0563\u056D\x07" +
		"5\x02\x02\u0564\u056D\x076\x02\x02\u0565\u056D\x07E\x02\x02\u0566\u056D" +
		"\x07V\x02\x02\u0567\u056D\x07/\x02\x02\u0568\u056D\x07&\x02\x02\u0569" +
		"\u056D\x07Y\x02\x02\u056A\u056D\x07\x15\x02\x02\u056B\u056D\x05\xBA^\x02" +
		"\u056C\u0556\x03\x02\x02\x02\u056C\u0559\x03\x02\x02\x02\u056C\u055D\x03" +
		"\x02\x02\x02\u056C\u055E\x03\x02\x02\x02\u056C\u055F\x03\x02\x02\x02\u056C" +
		"\u0560\x03\x02\x02\x02\u056C\u0561\x03\x02\x02\x02\u056C\u0562\x03\x02" +
		"\x02\x02\u056C\u0563\x03\x02\x02\x02\u056C\u0564\x03\x02\x02\x02\u056C" +
		"\u0565\x03\x02\x02\x02\u056C\u0566\x03\x02\x02\x02\u056C\u0567\x03\x02" +
		"\x02\x02\u056C\u0568\x03\x02\x02\x02\u056C\u0569\x03\x02\x02\x02\u056C" +
		"\u056A\x03\x02\x02\x02\u056C\u056B\x03\x02\x02\x02\u056D\xB7\x03\x02\x02" +
		"\x02\u056E\u0573\x05\u013C\x9F\x02\u056F\u0573\x05\xBE`\x02\u0570\u0573" +
		"\x05\xACW\x02\u0571\u0573\x05\u017C\xBF\x02\u0572\u056E\x03\x02\x02\x02" +
		"\u0572\u056F\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0571\x03" +
		"\x02\x02\x02\u0573\xB9\x03\x02\x02\x02\u0574\u0575\x07\"\x02\x02\u0575" +
		"\u0576\x07]\x02\x02\u0576\u0577\x05v<\x02\u0577\u0578\x07^\x02\x02\u0578" +
		"\u057E\x03\x02\x02\x02\u0579\u057A\x07\"\x02\x02\u057A\u057B\x07]\x02" +
		"\x02\u057B\u057C\x07\x15\x02\x02\u057C\u057E\x07^\x02\x02\u057D\u0574" +
		"\x03\x02\x02\x02\u057D\u0579\x03\x02\x02\x02\u057E\xBB\x03\x02\x02\x02" +
		"\u057F\u0581\x05\u0146\xA4\x02\u0580\u0582\x05\xEEx\x02\u0581\u0580\x03" +
		"\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0584\x03\x02\x02\x02\u0583" +
		"\u0585\x05$\x13\x02\u0584\u0583\x03\x02\x02\x02\u0584\u0585\x03\x02\x02" +
		"\x02\u0585\u0586\x03\x02\x02\x02\u0586\u0587\x07\x8E\x02\x02\u0587\u0598" +
		"\x03\x02\x02\x02\u0588\u0589\x05\u0146\xA4\x02\u0589\u058A\x05\u017C\xBF" +
		"\x02\u058A\u0598\x03\x02\x02\x02\u058B\u058C\x05\u0146\xA4\x02\u058C\u058E" +
		"\x05$\x13\x02\u058D\u058F\x07L\x02\x02\u058E\u058D\x03\x02\x02\x02\u058E" +
		"\u058F\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0591\x05\u017C" +
		"\xBF\x02\u0591\u0598\x03\x02\x02\x02\u0592\u0594\x07)\x02\x02\u0593\u0595" +
		"\x05$\x13\x02\u0594\u0593\x03\x02\x02\x02\u0594\u0595\x03\x02\x02\x02" +
		"\u0595\u0596\x03\x02\x02\x02\u0596\u0598\x07\x8E\x02\x02\u0597\u057F\x03" +
		"\x02\x02\x02\u0597\u0588\x03\x02\x02\x02\u0597\u058B\x03\x02\x02\x02\u0597" +
		"\u0592\x03\x02\x02\x02\u0598\xBD\x03\x02\x02\x02\u0599\u059A\x07\x8E\x02" +
		"\x02\u059A\xBF\x03\x02\x02\x02\u059B\u059C\x05\xC2b\x02\u059C\u059E\x07" +
		"a\x02\x02\u059D\u059F\x05\xCAf\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F" +
		"\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A1\x07b\x02\x02" +
		"\u05A1\u05A9\x03\x02\x02\x02\u05A2\u05A3\x05\xC2b\x02\u05A3\u05A4\x07" +
		"a\x02\x02\u05A4\u05A5\x05\xCAf\x02\u05A5\u05A6\x07\x84\x02\x02\u05A6\u05A7" +
		"\x07b\x02\x02\u05A7\u05A9\x03\x02\x02\x02\u05A8\u059B\x03\x02\x02\x02" +
		"\u05A8\u05A2\x03\x02\x02\x02\u05A9\xC1\x03\x02\x02\x02\u05AA\u05AC\x05" +
		"\xC6d\x02\u05AB\u05AD\x05\xEEx\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD" +
		"\x03\x02\x02\x02\u05AD\u05AF\x03\x02\x02\x02\u05AE\u05B0\x07\x8E\x02\x02" +
		"\u05AF\u05AE\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0\u05B2\x03" +
		"\x02\x02\x02\u05B1\u05B3\x05\xC8e\x02\u05B2\u05B1\x03\x02\x02\x02\u05B2" +
		"\u05B3\x03\x02\x02\x02\u05B3\u05BE\x03\x02\x02\x02\u05B4\u05B6\x05\xC6" +
		"d\x02\u05B5\u05B7\x05\xEEx\x02\u05B6\u05B5\x03\x02\x02\x02\u05B6\u05B7" +
		"\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8\u05B9\x05$\x13\x02" +
		"\u05B9\u05BB\x07\x8E\x02\x02\u05BA\u05BC\x05\xC8e\x02\u05BB\u05BA\x03" +
		"\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u05BC\u05BE\x03\x02\x02\x02\u05BD\u05AA\x03\x02\x02\x02\u05BD\u05B4\x03" +
		"\x02\x02\x02\u05BE\xC3\x03\x02\x02\x02\u05BF\u05C1\x05\xC6d\x02\u05C0" +
		"\u05C2\x05\xEEx\x02\u05C1\u05C0\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02" +
		"\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3\u05C5\x07\x8E\x02\x02\u05C4\u05C6" +
		"\x05\xC8e\x02\u05C5\u05C4\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02" +
		"\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C8\x07\x8A\x02\x02\u05C8\xC5\x03" +
		"\x02\x02\x02\u05C9\u05CF\x07)\x02\x02\u05CA\u05CB\x07)\x02\x02\u05CB\u05CF" +
		"\x07\x1D\x02\x02\u05CC\u05CD\x07)\x02\x02\u05CD\u05CF\x07J\x02\x02\u05CE" +
		"\u05C9\x03\x02\x02\x02\u05CE\u05CA\x03\x02\x02\x02\u05CE\u05CC\x03\x02" +
		"\x02\x02\u05CF\xC7\x03\x02\x02\x02\u05D0\u05D1\x07\x88\x02\x02\u05D1\u05D2" +
		"\x05\xB2Z\x02\u05D2\xC9\x03\x02\x02\x02\u05D3\u05D4\bf\x01\x02\u05D4\u05D5" +
		"\x05\xCCg\x02\u05D5\u05DB\x03\x02\x02\x02\u05D6\u05D7\f\x03\x02\x02\u05D7" +
		"\u05D8\x07\x84\x02\x02\u05D8\u05DA\x05\xCCg\x02\u05D9\u05D6\x03\x02\x02" +
		"\x02\u05DA\u05DD\x03\x02\x02\x02\u05DB\u05D9\x03\x02\x02\x02\u05DB\u05DC" +
		"\x03\x02\x02\x02\u05DC\xCB\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02" +
		"\u05DE\u05E4\x05\xCEh\x02\u05DF\u05E0\x05\xCEh\x02\u05E0\u05E1\x07m\x02" +
		"\x02\u05E1\u05E2\x05x=\x02\u05E2\u05E4\x03\x02\x02\x02\u05E3\u05DE\x03" +
		"\x02\x02\x02\u05E3\u05DF\x03\x02\x02\x02\u05E4\xCD\x03\x02\x02\x02\u05E5" +
		"\u05E6\x07\x8E\x02\x02\u05E6\xCF\x03\x02\x02\x02\u05E7\u05EA\x05\xD2j" +
		"\x02\u05E8\u05EA\x05\xE0q\x02\u05E9\u05E7\x03\x02\x02\x02\u05E9\u05E8" +
		"\x03\x02\x02\x02\u05EA\xD1\x03\x02\x02\x02\u05EB\u05EC\x07\x8E\x02\x02" +
		"\u05EC\xD3\x03\x02\x02\x02\u05ED\u05F0\x05\xD6l\x02\u05EE\u05F0\x05\xDC" +
		"o\x02\u05EF\u05ED\x03\x02\x02\x02\u05EF\u05EE\x03\x02\x02\x02\u05F0\xD5" +
		"\x03\x02\x02\x02\u05F1\u05F4\x05\xD8m\x02\u05F2\u05F4\x05\xDAn\x02\u05F3" +
		"\u05F1\x03\x02\x02\x02\u05F3\u05F2\x03\x02\x02\x02\u05F4\xD7\x03\x02\x02" +
		"\x02\u05F5\u05F7\x074\x02\x02\u05F6\u05F5\x03\x02\x02\x02\u05F6\u05F7" +
		"\x03\x02\x02\x02\u05F7\u05F8\x03\x02\x02\x02\u05F8\u05F9\x078\x02\x02" +
		"\u05F9\u05FA\x07\x8E\x02\x02\u05FA\u05FB\x07a\x02\x02\u05FB\u05FC\x05" +
		"\xDEp\x02\u05FC\u05FD\x07b\x02\x02\u05FD\xD9\x03\x02\x02\x02\u05FE\u0600" +
		"\x074\x02\x02\u05FF\u05FE\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02" +
		"\u0600\u0601\x03\x02\x02\x02\u0601\u0602\x078\x02\x02\u0602\u0603\x05" +
		"\xD2j\x02\u0603\u0604\x07a\x02\x02\u0604\u0605\x05\xDEp\x02\u0605\u0606" +
		"\x07b\x02\x02\u0606\xDB\x03\x02\x02\x02\u0607\u0609\x074\x02\x02\u0608" +
		"\u0607\x03\x02\x02\x02\u0608\u0609\x03\x02\x02\x02\u0609\u060A\x03\x02" +
		"\x02\x02\u060A\u060B\x078\x02\x02\u060B\u060C\x07a\x02\x02\u060C\u060D" +
		"\x05\xDEp\x02\u060D\u060E\x07b\x02\x02\u060E\xDD\x03\x02\x02\x02\u060F" +
		"\u0611\x05\x94K\x02\u0610\u060F\x03\x02\x02\x02\u0610\u0611\x03\x02\x02" +
		"\x02\u0611\xDF\x03\x02\x02\x02\u0612\u0613\x07\x8E\x02\x02\u0613\xE1\x03" +
		"\x02\x02\x02\u0614\u0615\x078\x02\x02\u0615\u0616\x07\x8E\x02\x02\u0616" +
		"\u0617\x07m\x02\x02\u0617\u0618\x05\xE4s\x02\u0618\u0619\x07\x8A\x02\x02" +
		"\u0619\xE3\x03\x02\x02\x02\u061A\u061C\x05$\x13\x02\u061B\u061A\x03\x02" +
		"\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D" +
		"\u061E\x05\xD0i\x02\u061E\xE5\x03\x02\x02\x02\u061F\u0621\x07W\x02\x02" +
		"\u0620\u0622\x07T\x02\x02\u0621\u0620\x03\x02\x02\x02\u0621\u0622\x03" +
		"\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623\u0624\x05$\x13\x02\u0624" +
		"\u0625\x05 \x11\x02\u0625\u0626\x07\x8A\x02\x02\u0626\u062D\x03\x02\x02" +
		"\x02\u0627\u0628\x07W\x02\x02\u0628\u0629\x07\x89\x02\x02\u0629\u062A" +
		"\x05 \x11\x02\u062A\u062B\x07\x8A\x02\x02\u062B\u062D\x03\x02\x02\x02" +
		"\u062C\u061F\x03\x02\x02\x02\u062C\u0627\x03\x02\x02\x02\u062D\xE7\x03" +
		"\x02\x02\x02\u062E\u0630\x05\xEEx\x02\u062F\u062E\x03\x02\x02\x02\u062F" +
		"\u0630\x03\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0632\x07W\x02" +
		"\x02\u0632\u0634\x078\x02\x02\u0633\u0635\x05$\x13\x02\u0634\u0633\x03" +
		"\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636" +
		"\u0637\x05\xD0i\x02\u0637\u0638\x07\x8A\x02\x02\u0638\xE9\x03\x02\x02" +
		"\x02\u0639\u063A\x07\x14\x02\x02\u063A\u063B\x07]\x02\x02\u063B\u063C" +
		"\x07\x97\x02\x02\u063C\u063D\x07^\x02\x02\u063D\u063E\x07\x8A\x02\x02" +
		"\u063E\xEB\x03\x02\x02\x02\u063F\u0640\x07,\x02\x02\u0640\u0641\x07\x97" +
		"\x02\x02\u0641\u0643\x07a\x02\x02\u0642\u0644\x05\x94K\x02\u0643\u0642" +
		"\x03\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02" +
		"\u0645\u064A\x07b\x02\x02\u0646\u0647\x07,\x02\x02\u0647\u0648\x07\x97" +
		"\x02\x02\u0648\u064A\x05\x96L\x02\u0649\u063F\x03\x02\x02\x02\u0649\u0646" +
		"\x03\x02\x02\x02\u064A\xED\x03\x02\x02\x02\u064B\u064C\bx\x01\x02\u064C" +
		"\u064D\x05\xF0y\x02\u064D\u0652\x03\x02\x02\x02\u064E\u064F\f\x03\x02" +
		"\x02\u064F\u0651\x05\xF0y\x02\u0650\u064E\x03\x02\x02\x02\u0651\u0654" +
		"\x03\x02\x02\x02\u0652\u0650\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02" +
		"\u0653\xEF\x03\x02\x02\x02\u0654\u0652\x03\x02\x02\x02\u0655\u0656\x07" +
		"_\x02\x02\u0656\u0657\x07_\x02\x02\u0657\u0658\x05\xF4{\x02\u0658\u0659" +
		"\x07`\x02\x02\u0659\u065A\x07`\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B" +
		"\u065D\x05\xF2z\x02\u065C\u0655\x03\x02\x02\x02\u065C\u065B\x03\x02\x02" +
		"\x02\u065D\xF1\x03\x02\x02\x02\u065E\u065F\x07\x12\x02\x02\u065F\u0660" +
		"\x07]\x02\x02\u0660\u0662\x05\u011C\x8F\x02\u0661\u0663\x07\x8D\x02\x02" +
		"\u0662\u0661\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0664\x03" +
		"\x02\x02\x02\u0664\u0665\x07^\x02\x02\u0665\u066F\x03\x02\x02\x02\u0666" +
		"\u0667\x07\x12\x02\x02\u0667\u0668\x07]\x02\x02\u0668\u066A\x05x=\x02" +
		"\u0669\u066B\x07\x8D\x02\x02\u066A\u0669\x03\x02\x02\x02\u066A\u066B\x03" +
		"\x02\x02\x02\u066B\u066C\x03\x02\x02\x02\u066C\u066D\x07^\x02\x02\u066D" +
		"\u066F\x03\x02\x02\x02\u066E\u065E\x03\x02\x02\x02\u066E\u0666\x03\x02" +
		"\x02\x02\u066F\xF3\x03\x02\x02\x02\u0670\u0672\b{\x01\x02\u0671\u0673" +
		"\x05\xF6|\x02\u0672\u0671\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02" +
		"\u0673\u0678\x03\x02\x02\x02\u0674\u0675\x05\xF6|\x02\u0675\u0676\x07" +
		"\x8D\x02\x02\u0676\u0678\x03\x02\x02\x02\u0677\u0670\x03\x02\x02\x02\u0677" +
		"\u0674\x03\x02\x02\x02\u0678\u0685\x03\x02\x02\x02\u0679\u067A\f\x05\x02" +
		"\x02\u067A\u067C\x07\x84\x02\x02\u067B\u067D\x05\xF6|\x02\u067C\u067B" +
		"\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u0684\x03\x02\x02\x02" +
		"\u067E\u067F\f\x03\x02\x02\u067F\u0680\x07\x84\x02\x02\u0680\u0681\x05" +
		"\xF6|\x02\u0681\u0682\x07\x8D\x02\x02\u0682\u0684\x03\x02\x02\x02\u0683" +
		"\u0679\x03\x02\x02\x02\u0683\u067E\x03\x02\x02\x02\u0684\u0687\x03\x02" +
		"\x02\x02\u0685\u0683\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686" +
		"\xF5\x03\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0688\u068A\x05\xF8}" +
		"\x02\u0689\u068B\x05\xFE\x80\x02\u068A\u0689\x03\x02\x02\x02\u068A\u068B" +
		"\x03\x02\x02\x02\u068B\xF7\x03\x02\x02\x02\u068C\u068F\x07\x8E\x02\x02" +
		"\u068D\u068F\x05\xFA~\x02\u068E\u068C\x03\x02\x02\x02\u068E\u068D\x03" +
		"\x02\x02\x02\u068F\xF9\x03\x02\x02\x02\u0690\u0691\x05\xFC\x7F\x02\u0691" +
		"\u0692\x07\x89\x02\x02\u0692\u0693\x07\x8E\x02\x02\u0693\xFB\x03\x02\x02" +
		"\x02\u0694\u0695\x07\x8E\x02\x02\u0695\xFD\x03\x02\x02\x02\u0696\u0697" +
		"\x07]\x02\x02\u0697\u0698\x05\u0100\x81\x02\u0698\u0699\x07^\x02\x02\u0699" +
		"\xFF\x03\x02\x02\x02\u069A\u069C\b\x81\x01\x02\u069B\u069D\x05\u0102\x82" +
		"\x02\u069C\u069B\x03\x02\x02\x02\u069C\u069D\x03\x02\x02\x02\u069D\u06A2" +
		"\x03\x02\x02\x02\u069E\u069F\f\x03\x02\x02\u069F\u06A1\x05\u0102\x82\x02" +
		"\u06A0\u069E\x03\x02\x02\x02\u06A1\u06A4\x03\x02\x02\x02\u06A2\u06A0\x03" +
		"\x02\x02\x02\u06A2\u06A3\x03\x02\x02\x02\u06A3\u0101\x03\x02\x02\x02\u06A4" +
		"\u06A2\x03\x02\x02\x02\u06A5\u06A6\x07]\x02\x02\u06A6\u06A7\x05\u0100" +
		"\x81\x02\u06A7\u06A8\x07^\x02\x02\u06A8\u06B7\x03\x02\x02\x02\u06A9\u06AA" +
		"\x07_\x02\x02\u06AA\u06AB\x05\u0100\x81\x02\u06AB\u06AC\x07`\x02\x02\u06AC" +
		"\u06B7\x03\x02\x02\x02\u06AD\u06AE\x07a\x02\x02\u06AE\u06AF\x05\u0100" +
		"\x81\x02\u06AF\u06B0\x07b\x02\x02\u06B0\u06B7\x03\x02\x02\x02\u06B1\u06B3" +
		"\n\b\x02\x02\u06B2\u06B1\x03\x02\x02\x02\u06B3\u06B4\x03\x02\x02\x02\u06B4" +
		"\u06B2\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B7\x03\x02" +
		"\x02\x02\u06B6\u06A5\x03\x02\x02\x02\u06B6\u06A9\x03\x02\x02\x02\u06B6" +
		"\u06AD\x03\x02\x02\x02\u06B6\u06B2\x03\x02\x02\x02\u06B7\u0103\x03\x02" +
		"\x02\x02\u06B8\u06B9\b\x83\x01\x02\u06B9\u06BA\x05\u0106\x84\x02\u06BA" +
		"\u06C0\x03\x02\x02\x02\u06BB\u06BC\f\x03\x02\x02\u06BC\u06BD\x07\x84\x02" +
		"\x02\u06BD\u06BF\x05\u0106\x84\x02\u06BE\u06BB\x03\x02\x02\x02\u06BF\u06C2" +
		"\x03\x02\x02\x02\u06C0\u06BE\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02" +
		"\u06C1\u0105\x03\x02\x02\x02\u06C2\u06C0\x03\x02\x02\x02\u06C3\u06C5\x05" +
		"\u0108\x85\x02\u06C4\u06C6\x05\u0132\x9A\x02\u06C5\u06C4\x03\x02\x02\x02" +
		"\u06C5\u06C6\x03\x02\x02\x02\u06C6\u0107\x03\x02\x02\x02\u06C7\u06CD\x05" +
		"\u010A\x86\x02\u06C8\u06C9\x05\u010C\x87\x02\u06C9\u06CA\x05\u010E\x88" +
		"\x02\u06CA\u06CB\x05\u0110\x89\x02\u06CB\u06CD\x03\x02\x02\x02\u06CC\u06C7" +
		"\x03\x02\x02\x02\u06CC\u06C8\x03\x02\x02\x02\u06CD\u0109\x03\x02\x02\x02" +
		"\u06CE\u06D3\x05\u010C\x87\x02\u06CF\u06D0\x05\u0112\x8A\x02\u06D0\u06D1" +
		"\x05\u010A\x86\x02\u06D1\u06D3\x03\x02\x02\x02\u06D2\u06CE\x03\x02\x02" +
		"\x02\u06D2\u06CF\x03\x02\x02\x02\u06D3\u010B\x03\x02\x02\x02\u06D4\u06D5" +
		"\b\x87\x01\x02\u06D5\u06D7\x05\u011A\x8E\x02\u06D6\u06D8\x05\xEEx\x02" +
		"\u06D7\u06D6\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06DE\x03" +
		"\x02\x02\x02\u06D9\u06DA\x07]\x02\x02\u06DA\u06DB\x05\u010A\x86\x02\u06DB" +
		"\u06DC\x07^\x02\x02\u06DC\u06DE\x03\x02\x02\x02\u06DD\u06D4\x03\x02\x02" +
		"\x02\u06DD\u06D9\x03\x02\x02\x02\u06DE\u06EC\x03\x02\x02\x02\u06DF\u06E0" +
		"\f\x05\x02\x02\u06E0\u06EB\x05\u010E\x88\x02\u06E1\u06E2\f\x04\x02\x02" +
		"\u06E2\u06E4\x07_\x02\x02\u06E3\u06E5\x05x=\x02\u06E4\u06E3\x03\x02\x02" +
		"\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E8" +
		"\x07`\x02\x02\u06E7\u06E9\x05\xEEx\x02\u06E8\u06E7\x03\x02\x02\x02\u06E8" +
		"\u06E9\x03\x02\x02\x02\u06E9\u06EB\x03\x02\x02\x02\u06EA\u06DF\x03\x02" +
		"\x02\x02\u06EA\u06E1\x03\x02\x02\x02\u06EB\u06EE\x03\x02\x02\x02\u06EC" +
		"\u06EA\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02\u06ED\u010D\x03\x02" +
		"\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EF\u06F0\x07]\x02\x02\u06F0\u06F1" +
		"\x05\u0128\x95\x02\u06F1\u06F3\x07^\x02\x02\u06F2\u06F4\x05\u0114\x8B" +
		"\x02\u06F3\u06F2\x03\x02\x02\x02\u06F3\u06F4\x03\x02\x02\x02\u06F4\u06F6" +
		"\x03\x02\x02\x02\u06F5\u06F7\x05\u0118\x8D\x02\u06F6\u06F5\x03\x02\x02" +
		"\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7\u06F9\x03\x02\x02\x02\u06F8\u06FA" +
		"\x05\u0198\xCD\x02\u06F9\u06F8\x03\x02\x02\x02\u06F9\u06FA\x03\x02\x02" +
		"\x02\u06FA\u06FC\x03\x02\x02\x02\u06FB\u06FD\x05\xEEx\x02\u06FC\u06FB" +
		"\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD\u010F\x03\x02\x02\x02" +
		"\u06FE\u06FF\x07\x86\x02\x02\u06FF\u0701\x05\xB4[\x02\u0700\u0702\x05" +
		"\u011E\x90\x02\u0701\u0700\x03\x02\x02\x02\u0701\u0702\x03\x02\x02\x02" +
		"\u0702\u0111\x03\x02\x02\x02\u0703\u0705\x07e\x02\x02\u0704\u0706\x05" +
		"\xEEx\x02\u0705\u0704\x03\x02\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706" +
		"\u0708\x03\x02\x02\x02\u0707\u0709\x05\u0114\x8B\x02\u0708\u0707\x03\x02" +
		"\x02\x02\u0708\u0709\x03\x02\x02\x02\u0709\u071B\x03\x02\x02\x02\u070A" +
		"\u070C\x07i\x02\x02\u070B\u070D\x05\xEEx\x02\u070C\u070B\x03\x02\x02\x02" +
		"\u070C\u070D\x03\x02\x02\x02\u070D\u071B\x03\x02\x02\x02\u070E\u0710\x07" +
		"\v\x02\x02\u070F\u0711\x05\xEEx\x02\u0710\u070F\x03\x02\x02\x02\u0710" +
		"\u0711\x03\x02\x02\x02\u0711\u071B\x03\x02\x02\x02\u0712\u0713\x05$\x13" +
		"\x02\u0713\u0715\x07e\x02\x02\u0714\u0716\x05\xEEx\x02\u0715\u0714\x03" +
		"\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u0718\x03\x02\x02\x02\u0717" +
		"\u0719\x05\u0114\x8B\x02\u0718\u0717\x03\x02\x02\x02\u0718\u0719\x03\x02" +
		"\x02\x02\u0719\u071B\x03\x02\x02\x02\u071A\u0703\x03\x02\x02\x02\u071A" +
		"\u070A\x03\x02\x02\x02\u071A\u070E\x03\x02\x02\x02\u071A\u0712\x03\x02" +
		"\x02\x02\u071B\u0113\x03\x02\x02\x02\u071C\u071E\x05\u0116\x8C\x02\u071D" +
		"\u071F\x05\u0114\x8B\x02\u071E\u071D\x03\x02\x02\x02\u071E\u071F\x03\x02" +
		"\x02\x02\u071F\u0115\x03\x02\x02\x02\u0720\u0721\t\t\x02\x02\u0721\u0117" +
		"\x03\x02\x02\x02\u0722\u0723\t\n\x02\x02\u0723\u0119\x03\x02\x02\x02\u0724" +
		"\u0726\x07\x8D\x02\x02\u0725\u0724\x03\x02\x02\x02\u0725\u0726\x03\x02" +
		"\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0728\x05\x1E\x10\x02\u0728" +
		"\u011B\x03\x02\x02\x02\u0729\u072B\x05\xB2Z\x02\u072A\u072C\x05\u011E" +
		"\x90\x02\u072B\u072A\x03\x02\x02\x02\u072B\u072C\x03\x02\x02\x02\u072C" +
		"\u011D\x03\x02\x02\x02\u072D\u0736\x05\u0120\x91\x02\u072E\u0730\x05\u0122" +
		"\x92\x02\u072F\u072E\x03\x02\x02\x02\u072F\u0730\x03\x02\x02\x02\u0730" +
		"\u0731\x03\x02\x02\x02\u0731\u0732\x05\u010E\x88\x02\u0732\u0733\x05\u0110" +
		"\x89\x02\u0733\u0736\x03\x02\x02\x02\u0734\u0736\x05\u0124\x93\x02\u0735" +
		"\u072D\x03\x02\x02\x02\u0735\u072F\x03\x02\x02\x02\u0735\u0734\x03\x02" +
		"\x02\x02\u0736\u011F\x03\x02\x02\x02\u0737\u073D\x05\u0122\x92\x02\u0738" +
		"\u073A\x05\u0112\x8A\x02\u0739\u073B\x05\u0120\x91\x02\u073A\u0739\x03" +
		"\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B\u073D\x03\x02\x02\x02\u073C" +
		"\u0737\x03\x02\x02\x02\u073C\u0738\x03\x02\x02\x02\u073D\u0121\x03\x02" +
		"\x02\x02\u073E\u073F\b\x92\x01\x02\u073F\u074D\x05\u010E\x88\x02\u0740" +
		"\u0742\x07_\x02\x02\u0741\u0743\x05x=\x02\u0742\u0741\x03\x02\x02\x02" +
		"\u0742\u0743\x03\x02\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u0746\x07" +
		"`\x02\x02\u0745\u0747\x05\xEEx\x02\u0746\u0745\x03\x02\x02\x02\u0746\u0747" +
		"\x03\x02\x02\x02\u0747\u074D\x03\x02\x02\x02\u0748\u0749\x07]\x02\x02" +
		"\u0749\u074A\x05\u0120\x91\x02\u074A\u074B\x07^\x02\x02\u074B\u074D\x03" +
		"\x02\x02\x02\u074C\u073E\x03\x02\x02\x02\u074C\u0740\x03\x02\x02\x02\u074C" +
		"\u0748\x03\x02\x02\x02\u074D\u075B\x03\x02\x02\x02\u074E\u074F\f\x07\x02" +
		"\x02\u074F\u075A\x05\u010E\x88\x02\u0750\u0751\f\x05\x02\x02\u0751\u0753" +
		"\x07_\x02\x02\u0752\u0754\x05x=\x02\u0753\u0752\x03\x02\x02\x02\u0753" +
		"\u0754\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0757\x07`\x02" +
		"\x02\u0756\u0758\x05\xEEx\x02\u0757\u0756\x03\x02\x02\x02\u0757\u0758" +
		"\x03\x02\x02\x02\u0758\u075A\x03\x02\x02\x02\u0759\u074E\x03\x02\x02\x02" +
		"\u0759\u0750\x03\x02\x02\x02\u075A\u075D\x03\x02\x02\x02\u075B\u0759\x03" +
		"\x02\x02\x02\u075B\u075C\x03\x02\x02\x02\u075C\u0123\x03\x02\x02\x02\u075D" +
		"\u075B\x03\x02\x02\x02\u075E\u0763\x05\u0126\x94\x02\u075F\u0760\x05\u0112" +
		"\x8A\x02\u0760\u0761\x05\u0124\x93\x02\u0761\u0763\x03\x02\x02\x02\u0762" +
		"\u075E\x03\x02\x02\x02\u0762\u075F\x03\x02\x02\x02\u0763\u0125\x03\x02" +
		"\x02\x02\u0764\u0765\b\x94\x01\x02\u0765\u0766\x07\x8D\x02\x02\u0766\u0774" +
		"\x03\x02\x02\x02\u0767\u0768\f\x05\x02\x02\u0768\u0773\x05\u010E\x88\x02" +
		"\u0769\u076A\f\x04\x02\x02\u076A\u076C\x07_\x02\x02\u076B\u076D\x05x=" +
		"\x02\u076C\u076B\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D\u076E" +
		"\x03\x02\x02\x02\u076E\u0770\x07`\x02\x02\u076F\u0771\x05\xEEx\x02\u0770" +
		"\u076F\x03\x02\x02\x02\u0770\u0771\x03\x02\x02\x02\u0771\u0773\x03\x02" +
		"\x02\x02\u0772\u0767\x03\x02\x02\x02\u0772\u0769\x03\x02\x02\x02\u0773" +
		"\u0776\x03\x02\x02\x02\u0774\u0772\x03\x02\x02\x02\u0774\u0775\x03\x02" +
		"\x02\x02\u0775\u0127\x03\x02\x02\x02\u0776\u0774\x03\x02\x02\x02\u0777" +
		"\u0779\x05\u012A\x96\x02\u0778\u0777\x03\x02\x02\x02\u0778\u0779\x03\x02" +
		"\x02\x02\u0779\u077B\x03\x02\x02\x02\u077A\u077C\x07\x8D\x02\x02\u077B" +
		"\u077A\x03\x02\x02\x02\u077B\u077C\x03\x02\x02\x02\u077C\u0782\x03\x02" +
		"\x02\x02\u077D\u077E\x05\u012A\x96\x02\u077E\u077F\x07\x84\x02\x02\u077F" +
		"\u0780\x07\x8D\x02\x02\u0780\u0782\x03\x02\x02\x02\u0781\u0778\x03\x02" +
		"\x02\x02\u0781\u077D\x03\x02\x02\x02\u0782\u0129\x03\x02\x02\x02\u0783" +
		"\u0784\b\x96\x01\x02\u0784\u0785\x05\u012C\x97\x02\u0785\u078B\x03\x02" +
		"\x02\x02\u0786\u0787\f\x03\x02\x02\u0787\u0788\x07\x84\x02\x02\u0788\u078A" +
		"\x05\u012C\x97\x02\u0789\u0786\x03\x02\x02\x02\u078A\u078D\x03\x02\x02" +
		"\x02\u078B\u0789\x03\x02\x02\x02\u078B\u078C\x03\x02\x02\x02\u078C\u012B" +
		"\x03\x02\x02\x02\u078D\u078B\x03\x02\x02\x02\u078E\u0790\x05\n\x06\x02" +
		"\u078F\u078E\x03\x02\x02\x02\u078F\u0790\x03\x02\x02\x02\u0790\u0792\x03" +
		"\x02\x02\x02\u0791\u0793\x05\xEEx\x02\u0792\u0791\x03\x02\x02\x02\u0792" +
		"\u0793\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0795\x05\xA6" +
		"T\x02\u0795\u0796\x05\u0108\x85\x02\u0796\u07BA\x03\x02\x02\x02\u0797" +
		"\u0799\x05\n\x06\x02\u0798\u0797\x03\x02\x02\x02\u0798\u0799\x03\x02\x02" +
		"\x02\u0799\u079B\x03\x02\x02\x02\u079A\u079C\x05\xEEx\x02\u079B\u079A" +
		"\x03\x02\x02\x02\u079B\u079C\x03\x02\x02\x02\u079C\u079D\x03\x02\x02\x02" +
		"\u079D\u079E\x05\xA6T\x02\u079E\u079F\x05\u0108\x85\x02\u079F\u07A0\x07" +
		"m\x02\x02\u07A0\u07A1\x05\u0136\x9C\x02\u07A1\u07BA\x03\x02\x02\x02\u07A2" +
		"\u07A4\x05\n\x06\x02\u07A3\u07A2\x03\x02\x02\x02\u07A3\u07A4\x03\x02\x02" +
		"\x02\u07A4\u07A6\x03\x02\x02\x02\u07A5\u07A7\x05\xEEx\x02\u07A6\u07A5" +
		"\x03\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02" +
		"\u07A8\u07AA\x05\xA6T\x02\u07A9\u07AB\x05\u011E\x90\x02\u07AA\u07A9\x03" +
		"\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB\u07BA\x03\x02\x02\x02\u07AC" +
		"\u07AE\x05\n\x06\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02" +
		"\x02\u07AE\u07B0\x03\x02\x02\x02\u07AF\u07B1\x05\xEEx\x02\u07B0\u07AF" +
		"\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02" +
		"\u07B2\u07B4\x05\xA6T\x02\u07B3\u07B5\x05\u011E\x90\x02\u07B4\u07B3\x03" +
		"\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02\u07B6" +
		"\u07B7\x07m\x02\x02\u07B7\u07B8\x05\u0136\x9C\x02\u07B8\u07BA\x03\x02" +
		"\x02\x02\u07B9\u078F\x03\x02\x02\x02\u07B9\u0798\x03\x02\x02\x02\u07B9" +
		"\u07A3\x03\x02\x02\x02\u07B9\u07AD\x03\x02\x02\x02\u07BA\u012D\x03\x02" +
		"\x02\x02\u07BB\u07BD\x05\xEEx\x02\u07BC\u07BB\x03\x02\x02\x02\u07BC\u07BD" +
		"\x03\x02\x02\x02\u07BD\u07BF\x03\x02\x02\x02\u07BE\u07C0\x05\xA6T\x02" +
		"\u07BF\u07BE\x03\x02\x02\x02\u07BF\u07C0\x03\x02\x02\x02\u07C0\u07C1\x03" +
		"\x02\x02\x02\u07C1\u07C3\x05\u0108\x85\x02\u07C2\u07C4\x05\u0150\xA9\x02" +
		"\u07C3\u07C2\x03\x02\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C5\x03" +
		"\x02\x02\x02\u07C5\u07C6\x05\u0130\x99\x02\u07C6\u012F\x03\x02\x02\x02" +
		"\u07C7\u07C9\x05\u0168\xB5\x02\u07C8\u07C7\x03\x02\x02\x02\u07C8\u07C9" +
		"\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02\x02\u07CA\u07D3\x05\x80A\x02" +
		"\u07CB\u07D3\x05\u018E\xC8\x02\u07CC\u07CD\x07m\x02\x02\u07CD\u07CE\x07" +
		"#\x02\x02\u07CE\u07D3\x07\x8A\x02\x02\u07CF\u07D0\x07m\x02\x02\u07D0\u07D1" +
		"\x07$\x02\x02\u07D1\u07D3\x07\x8A\x02\x02\u07D2\u07C8\x03\x02\x02\x02" +
		"\u07D2\u07CB\x03\x02\x02\x02\u07D2\u07CC\x03\x02\x02\x02\u07D2\u07CF\x03" +
		"\x02\x02\x02\u07D3\u0131\x03\x02\x02\x02\u07D4\u07DA\x05\u0134\x9B\x02" +
		"\u07D5\u07D6\x07]\x02\x02\u07D6\u07D7\x05> \x02\u07D7\u07D8\x07^\x02\x02" +
		"\u07D8\u07DA\x03\x02\x02\x02\u07D9\u07D4\x03\x02\x02\x02\u07D9\u07D5\x03" +
		"\x02\x02\x02\u07DA\u0133\x03\x02\x02\x02\u07DB\u07DC\x07m\x02\x02\u07DC" +
		"\u07DF\x05\u0136\x9C\x02\u07DD\u07DF\x05\u013A\x9E\x02\u07DE\u07DB\x03" +
		"\x02\x02\x02\u07DE\u07DD\x03\x02\x02\x02\u07DF\u0135\x03\x02\x02\x02\u07E0" +
		"\u07E3\x05r:\x02\u07E1\u07E3\x05\u013A\x9E\x02\u07E2\u07E0\x03\x02\x02" +
		"\x02\u07E2\u07E1\x03\x02\x02\x02\u07E3\u0137\x03\x02\x02\x02\u07E4\u07E5" +
		"\b\x9D\x01\x02\u07E5\u07E7\x05\u0136\x9C\x02\u07E6\u07E8\x07\x8D\x02\x02" +
		"\u07E7\u07E6\x03\x02\x02\x02\u07E7\u07E8\x03\x02\x02\x02\u07E8\u07F1\x03" +
		"\x02\x02\x02\u07E9\u07EA\f\x03\x02\x02\u07EA\u07EB\x07\x84\x02\x02\u07EB" +
		"\u07ED\x05\u0136\x9C\x02\u07EC\u07EE\x07\x8D\x02\x02\u07ED\u07EC\x03\x02" +
		"\x02\x02\u07ED\u07EE\x03\x02\x02\x02\u07EE\u07F0\x03\x02\x02\x02\u07EF" +
		"\u07E9\x03\x02\x02\x02\u07F0\u07F3\x03\x02\x02\x02\u07F1\u07EF\x03\x02" +
		"\x02\x02\u07F1\u07F2\x03\x02\x02\x02\u07F2\u0139\x03\x02\x02\x02\u07F3" +
		"\u07F1\x03\x02\x02\x02\u07F4\u07F5\x07a\x02\x02\u07F5\u07F7\x05\u0138" +
		"\x9D\x02\u07F6\u07F8\x07\x84\x02\x02\u07F7\u07F6\x03\x02\x02\x02\u07F7" +
		"\u07F8\x03\x02\x02\x02\u07F8\u07F9\x03\x02\x02\x02\u07F9\u07FA\x07b\x02" +
		"\x02\u07FA\u07FE\x03\x02\x02\x02\u07FB\u07FC\x07a\x02\x02\u07FC\u07FE" +
		"\x07b\x02\x02\u07FD\u07F4\x03\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02" +
		"\u07FE\u013B\x03\x02\x02\x02\u07FF\u0802\x07\x8E\x02\x02\u0800\u0802\x05" +
		"\u017C\xBF\x02\u0801\u07FF\x03\x02\x02\x02\u0801\u0800\x03\x02\x02\x02" +
		"\u0802\u013D\x03\x02\x02\x02\u0803\u0805\x05\x04\x03\x02\u0804\u0803\x03" +
		"\x02\x02\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806" +
		"\u0807\x05\u0140\xA1\x02\u0807\u0809\x07a\x02\x02\u0808\u080A\x05\f\x07" +
		"\x02\u0809\u0808\x03\x02\x02\x02\u0809\u080A\x03\x02\x02\x02\u080A\u080C" +
		"\x03\x02\x02\x02\u080B\u080D\x05\u0148\xA5\x02\u080C\u080B\x03\x02\x02" +
		"\x02\u080C\u080D\x03\x02\x02\x02\u080D\u080E\x03\x02\x02\x02\u080E\u080F" +
		"\x07b\x02\x02\u080F\u013F\x03\x02\x02\x02\u0810\u0812\x05\u0146\xA4\x02" +
		"\u0811\u0813\x05\x02\x02\x02\u0812\u0811\x03\x02\x02\x02\u0812\u0813\x03" +
		"\x02\x02\x02\u0813\u0815\x03\x02\x02\x02\u0814\u0816\x05\xEEx\x02\u0815" +
		"\u0814\x03\x02\x02\x02\u0815\u0816\x03\x02\x02\x02\u0816\u0817\x03\x02" +
		"\x02\x02\u0817\u0819\x05\u0142\xA2\x02\u0818\u081A\x05\u0144\xA3\x02\u0819" +
		"\u0818\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081C\x03\x02" +
		"\x02\x02\u081B\u081D\x05\u0156\xAC\x02\u081C\u081B\x03\x02\x02\x02\u081C" +
		"\u081D\x03\x02\x02\x02\u081D\u0829\x03\x02\x02\x02\u081E\u0820\x05\u0146" +
		"\xA4\x02\u081F\u0821\x05\x02\x02\x02\u0820\u081F\x03\x02\x02\x02\u0820" +
		"\u0821\x03\x02\x02\x02\u0821\u0823\x03\x02\x02\x02\u0822\u0824\x05\xEE" +
		"x\x02\u0823\u0822\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0826" +
		"\x03\x02\x02\x02\u0825\u0827\x05\u0156\xAC\x02\u0826\u0825\x03\x02\x02" +
		"\x02\u0826\u0827\x03\x02\x02\x02\u0827\u0829\x03\x02\x02\x02\u0828\u0810" +
		"\x03\x02\x02\x02\u0828\u081E\x03\x02\x02\x02\u0829\u0141\x03\x02\x02\x02" +
		"\u082A\u082C\x05$\x13\x02\u082B\u082A\x03\x02\x02\x02\u082B\u082C\x03" +
		"\x02\x02\x02\u082C\u082D\x03\x02\x02\x02\u082D\u082E\x05\u013C\x9F\x02" +
		"\u082E\u0143\x03\x02\x02\x02\u082F\u0830\x07.\x02\x02\u0830\u0145\x03" +
		"\x02\x02\x02\u0831\u0832\t\v\x02\x02\u0832\u0147\x03\x02\x02\x02\u0833" +
		"\u0835\x05\u014A\xA6\x02\u0834\u0836\x05\u0148\xA5\x02\u0835\u0834\x03" +
		"\x02\x02\x02\u0835\u0836\x03\x02\x02\x02\u0836\u083D\x03\x02\x02\x02\u0837" +
		"\u0838\x05\u0160\xB1\x02\u0838\u083A\x07\x88\x02\x02\u0839\u083B\x05\u0148" +
		"\xA5\x02\u083A\u0839\x03\x02\x02\x02\u083A\u083B\x03\x02\x02\x02\u083B" +
		"\u083D\x03\x02\x02\x02\u083C\u0833\x03\x02\x02\x02\u083C\u0837\x03\x02" +
		"\x02\x02\u083D\u0149\x03\x02\x02\x02\u083E\u0840\x05\b\x05\x02\u083F\u083E" +
		"\x03\x02\x02\x02\u083F\u0840\x03\x02\x02\x02\u0840\u0842\x03\x02\x02\x02" +
		"\u0841\u0843\x05\x06\x04\x02\u0842\u0841\x03\x02\x02\x02\u0842\u0843\x03" +
		"\x02\x02\x02\u0843\u0845\x03\x02\x02\x02\u0844\u0846\x05\xEEx\x02\u0845" +
		"\u0844\x03\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0848\x03\x02" +
		"\x02\x02\u0847\u0849\x05\xA6T\x02\u0848\u0847\x03\x02\x02\x02\u0848\u0849" +
		"\x03\x02\x02\x02\u0849\u084B\x03\x02\x02\x02\u084A\u084C\x05\u014C\xA7" +
		"\x02\u084B\u084A\x03\x02\x02\x02\u084B\u084C\x03\x02\x02\x02\u084C\u084D" +
		"\x03\x02\x02\x02\u084D\u0855\x07\x8A\x02\x02\u084E\u0855\x05\u012E\x98" +
		"\x02\u084F\u0855\x05\xE6t\x02\u0850\u0855\x05\x9EP\x02\u0851\u0855\x05" +
		"\u0174\xBB\x02\u0852\u0855\x05\x9AN\x02\u0853\u0855\x05\xA0Q\x02\u0854" +
		"\u083F\x03\x02\x02\x02\u0854\u084E\x03\x02\x02\x02\u0854\u084F\x03\x02" +
		"\x02\x02\u0854\u0850\x03\x02\x02\x02\u0854\u0851\x03\x02\x02\x02\u0854" +
		"\u0852\x03\x02\x02\x02\u0854\u0853\x03\x02\x02\x02\u0855\u014B\x03\x02" +
		"\x02\x02\u0856\u0857\b\xA7\x01\x02\u0857\u0858\x05\u014E\xA8\x02\u0858" +
		"\u085E\x03\x02\x02\x02\u0859\u085A\f\x03\x02\x02\u085A\u085B\x07\x84\x02" +
		"\x02\u085B\u085D\x05\u014E\xA8\x02\u085C\u0859\x03\x02\x02\x02\u085D\u0860" +
		"\x03\x02\x02\x02\u085E\u085C\x03\x02\x02\x02\u085E\u085F\x03\x02\x02\x02" +
		"\u085F\u014D\x03\x02\x02\x02\u0860\u085E\x03\x02\x02\x02\u0861\u0863\x05" +
		"\u0108\x85\x02\u0862\u0864\x05\u0150\xA9\x02\u0863\u0862\x03\x02\x02\x02" +
		"\u0863\u0864\x03\x02\x02\x02\u0864\u0866\x03\x02\x02\x02\u0865\u0867\x05" +
		"\u0154\xAB\x02\u0866\u0865\x03\x02\x02\x02\u0866\u0867\x03\x02\x02\x02" +
		"\u0867\u0875\x03\x02\x02\x02\u0868\u086A\x05\u0108\x85\x02\u0869\u086B" +
		"\x05\u0134\x9B\x02\u086A\u0869\x03\x02\x02\x02\u086A\u086B";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u086B\u0875\x03\x02\x02\x02\u086C\u086E\x07\x8E\x02\x02" +
		"\u086D\u086C\x03\x02\x02\x02\u086D\u086E\x03\x02\x02\x02\u086E\u0870\x03" +
		"\x02\x02\x02\u086F\u0871\x05\xEEx\x02\u0870\u086F\x03\x02\x02\x02\u0870" +
		"\u0871\x03\x02\x02\x02\u0871\u0872\x03\x02\x02\x02\u0872\u0873\x07\x88" +
		"\x02\x02\u0873\u0875\x05x=\x02\u0874\u0861\x03\x02\x02\x02\u0874\u0868" +
		"\x03\x02\x02\x02\u0874\u086D\x03\x02\x02\x02\u0875\u014F\x03\x02\x02\x02" +
		"\u0876\u0877\b\xA9\x01\x02\u0877\u0878\x05\u0152\xAA\x02\u0878\u087D\x03" +
		"\x02\x02\x02\u0879\u087A\f\x03\x02\x02\u087A\u087C\x05\u0152\xAA\x02\u087B" +
		"\u0879\x03\x02\x02\x02\u087C\u087F\x03\x02\x02\x02\u087D\u087B\x03\x02" +
		"\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u0151\x03\x02\x02\x02\u087F" +
		"\u087D\x03\x02\x02\x02\u0880\u0881\t\f\x02\x02\u0881\u0153\x03\x02\x02" +
		"\x02\u0882\u0883\x07m\x02\x02\u0883\u0884\x07\x0F\x02\x02\u0884\u0155" +
		"\x03\x02\x02\x02\u0885\u0886\x07\x88\x02\x02\u0886\u0887\x05\u0158\xAD" +
		"\x02\u0887\u0157\x03\x02\x02\x02\u0888\u0889\b\xAD\x01\x02\u0889\u088B" +
		"\x05\u015A\xAE\x02\u088A\u088C\x07\x8D\x02\x02\u088B\u088A\x03\x02\x02" +
		"\x02\u088B\u088C\x03\x02\x02\x02\u088C\u0895\x03\x02\x02\x02\u088D\u088E" +
		"\f\x03\x02\x02\u088E\u088F\x07\x84\x02\x02\u088F\u0891\x05\u015A\xAE\x02" +
		"\u0890\u0892\x07\x8D\x02\x02\u0891\u0890\x03\x02\x02\x02\u0891\u0892\x03" +
		"\x02\x02\x02\u0892\u0894\x03\x02\x02\x02\u0893\u088D\x03\x02\x02\x02\u0894" +
		"\u0897\x03\x02\x02\x02\u0895\u0893\x03\x02\x02\x02\u0895\u0896\x03\x02" +
		"\x02\x02\u0896\u0159\x03\x02\x02\x02\u0897\u0895\x03\x02\x02\x02\u0898" +
		"\u089A\x05\xEEx\x02\u0899\u0898\x03\x02\x02\x02\u0899\u089A\x03\x02\x02" +
		"\x02\u089A\u089B\x03\x02\x02\x02\u089B\u08AE\x05\u015E\xB0\x02\u089C\u089E" +
		"\x05\xEEx\x02\u089D\u089C\x03\x02\x02\x02\u089D\u089E\x03\x02\x02\x02" +
		"\u089E\u089F\x03\x02\x02\x02\u089F\u08A1\x07X\x02\x02\u08A0\u08A2\x05" +
		"\u0160\xB1\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2\x03\x02\x02\x02" +
		"\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08AE\x05\u015E\xB0\x02\u08A4\u08A6" +
		"\x05\xEEx\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6\x03\x02\x02\x02" +
		"\u08A6\u08A7\x03\x02\x02\x02\u08A7\u08A9\x05\u0160\xB1\x02\u08A8\u08AA" +
		"\x07X\x02\x02\u08A9\u08A8\x03\x02\x02\x02\u08A9\u08AA\x03\x02\x02\x02" +
		"\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08AC\x05\u015E\xB0\x02\u08AC\u08AE" +
		"\x03\x02\x02\x02\u08AD\u0899\x03\x02\x02\x02\u08AD\u089D\x03\x02\x02\x02" +
		"\u08AD\u08A5\x03\x02\x02\x02\u08AE\u015B\x03\x02\x02\x02\u08AF\u08B1\x05" +
		"$\x13\x02\u08B0\u08AF\x03\x02\x02\x02\u08B0\u08B1\x03\x02\x02\x02\u08B1" +
		"\u08B2\x03\x02\x02\x02\u08B2\u08B5\x05\u013C\x9F\x02\u08B3\u08B5\x05\xBA" +
		"^\x02\u08B4\u08B0\x03\x02\x02\x02\u08B4\u08B3\x03\x02\x02\x02\u08B5\u015D" +
		"\x03\x02\x02\x02\u08B6\u08B7\x05\u015C\xAF\x02\u08B7\u015F\x03\x02\x02" +
		"\x02\u08B8\u08B9\t\r\x02\x02\u08B9\u0161\x03\x02\x02\x02\u08BA\u08BB\x07" +
		"<\x02\x02\u08BB\u08BC\x05\u0164\xB3\x02\u08BC\u0163\x03\x02\x02\x02\u08BD" +
		"\u08BF\x05\xB2Z\x02\u08BE\u08C0\x05\u0166\xB4\x02\u08BF\u08BE\x03\x02" +
		"\x02\x02\u08BF\u08C0\x03\x02\x02\x02\u08C0\u0165\x03\x02\x02\x02\u08C1" +
		"\u08C3\x05\u0112\x8A\x02\u08C2\u08C4\x05\u0166\xB4\x02\u08C3\u08C2\x03" +
		"\x02\x02\x02\u08C3\u08C4\x03\x02\x02\x02\u08C4\u0167\x03\x02\x02\x02\u08C5" +
		"\u08C6\x07\x88\x02\x02\u08C6\u08C7\x05\u016A\xB6\x02\u08C7\u0169\x03\x02" +
		"\x02\x02\u08C8\u08CA\x05\u016C\xB7\x02\u08C9\u08CB\x07\x8D\x02\x02\u08CA" +
		"\u08C9\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB\u08D4\x03\x02" +
		"\x02\x02\u08CC\u08CE\x05\u016C\xB7\x02\u08CD\u08CF\x07\x8D\x02\x02\u08CE" +
		"\u08CD\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF\u08D0\x03\x02" +
		"\x02\x02\u08D0\u08D1\x07\x84\x02\x02\u08D1\u08D2\x05\u016A\xB6\x02\u08D2" +
		"\u08D4\x03\x02\x02\x02\u08D3\u08C8\x03\x02\x02\x02\u08D3\u08CC\x03\x02" +
		"\x02\x02\u08D4\u016B\x03\x02\x02\x02\u08D5\u08D6\x05\u016E\xB8\x02\u08D6" +
		"\u08D8\x07]\x02\x02\u08D7\u08D9\x05> \x02\u08D8\u08D7\x03\x02\x02\x02" +
		"\u08D8\u08D9\x03\x02\x02\x02\u08D9\u08DA\x03\x02\x02\x02\u08DA\u08DB\x07" +
		"^\x02\x02\u08DB\u08E0\x03\x02\x02\x02\u08DC\u08DD\x05\u016E\xB8\x02\u08DD" +
		"\u08DE\x05\u013A\x9E\x02\u08DE\u08E0\x03\x02\x02\x02\u08DF\u08D5\x03\x02" +
		"\x02\x02\u08DF\u08DC\x03\x02\x02\x02\u08E0\u016D\x03\x02\x02\x02\u08E1" +
		"\u08E4\x05\u015C\xAF\x02\u08E2\u08E4\x07\x8E\x02\x02\u08E3\u08E1\x03\x02" +
		"\x02\x02\u08E3\u08E2\x03\x02\x02\x02\u08E4\u016F\x03\x02\x02\x02\u08E5" +
		"\u08E6\x07<\x02\x02\u08E6\u08E7\x05\u01A0\xD1\x02\u08E7\u0171\x03\x02" +
		"\x02\x02\u08E8\u08E9\x07<\x02\x02\u08E9\u08EA\x07\x97\x02\x02\u08EA\u08EE" +
		"\x07\x8E\x02\x02\u08EB\u08EC\x07<\x02\x02\u08EC\u08EE\x07\x9A\x02\x02" +
		"\u08ED\u08E8\x03\x02\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08EE\u0173\x03" +
		"\x02\x02\x02\u08EF\u08F0\x07L\x02\x02\u08F0\u08F1\x07n\x02\x02\u08F1\u08F2" +
		"\x05\u0176\xBC\x02\u08F2\u08F3\x07o\x02\x02\u08F3\u08F4\x05\x96L\x02\u08F4" +
		"\u0175\x03\x02\x02\x02\u08F5\u08F6\b\xBC\x01\x02\u08F6\u08F7\x05\u0178" +
		"\xBD\x02\u08F7\u08FD\x03\x02\x02\x02\u08F8\u08F9\f\x03\x02\x02\u08F9\u08FA" +
		"\x07\x84\x02\x02\u08FA\u08FC\x05\u0178\xBD\x02\u08FB\u08F8\x03\x02\x02" +
		"\x02\u08FC\u08FF\x03\x02\x02\x02\u08FD\u08FB\x03\x02\x02\x02\u08FD\u08FE" +
		"\x03\x02\x02\x02\u08FE\u0177\x03\x02\x02\x02\u08FF\u08FD\x03\x02\x02\x02" +
		"\u0900\u0903\x05\u017A\xBE\x02\u0901\u0903\x05\u012C\x97\x02\u0902\u0900" +
		"\x03\x02\x02\x02\u0902\u0901\x03\x02\x02\x02\u0903\u0179\x03\x02\x02\x02" +
		"\u0904\u0906\x07\x1D\x02\x02\u0905\u0907\x07\x8D\x02\x02\u0906\u0905\x03" +
		"\x02\x02\x02\u0906\u0907\x03\x02\x02\x02\u0907\u0909\x03\x02\x02\x02\u0908" +
		"\u090A\x07\x8E\x02\x02\u0909\u0908\x03\x02\x02\x02\u0909\u090A\x03\x02" +
		"\x02\x02\u090A\u0935\x03\x02\x02\x02\u090B\u090D\x07\x1D\x02\x02\u090C" +
		"\u090E\x07\x8E\x02\x02\u090D\u090C\x03\x02\x02\x02\u090D\u090E\x03\x02" +
		"\x02\x02\u090E\u090F\x03\x02\x02\x02\u090F\u0910\x07m\x02\x02\u0910\u0935" +
		"\x05\u011C\x8F\x02\u0911\u0913\x07T\x02\x02\u0912\u0914\x07\x8D\x02\x02" +
		"\u0913\u0912\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914\u0916\x03" +
		"\x02\x02\x02\u0915\u0917\x07\x8E\x02\x02\u0916\u0915\x03\x02\x02\x02\u0916" +
		"\u0917\x03\x02\x02\x02\u0917\u0935\x03\x02\x02\x02\u0918\u091A\x07T\x02" +
		"\x02\u0919\u091B\x07\x8E\x02\x02\u091A\u0919\x03\x02\x02\x02\u091A\u091B" +
		"\x03\x02\x02\x02\u091B\u091C\x03\x02\x02\x02\u091C\u091D\x07m\x02\x02" +
		"\u091D\u0935\x05\u011C\x8F\x02\u091E\u091F\x07L\x02\x02\u091F\u0920\x07" +
		"n\x02\x02\u0920\u0921\x05\u0176\xBC\x02\u0921\u0922\x07o\x02\x02\u0922" +
		"\u0924\x07\x1D\x02\x02\u0923\u0925\x07\x8D\x02\x02\u0924\u0923\x03\x02" +
		"\x02\x02\u0924\u0925\x03\x02\x02\x02\u0925\u0927\x03\x02\x02\x02\u0926" +
		"\u0928\x07\x8E\x02\x02\u0927\u0926\x03\x02\x02\x02\u0927\u0928\x03\x02" +
		"\x02\x02\u0928\u0935\x03\x02\x02\x02\u0929\u092A\x07L\x02\x02\u092A\u092B" +
		"\x07n\x02\x02\u092B\u092C\x05\u0176\xBC\x02\u092C\u092D\x07o\x02\x02\u092D" +
		"\u092F\x07\x1D\x02\x02\u092E\u0930\x07\x8E\x02\x02\u092F\u092E\x03\x02" +
		"\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930\u0931\x03\x02\x02\x02\u0931" +
		"\u0932\x07m\x02\x02\u0932\u0933\x05\x1E\x10\x02\u0933\u0935\x03\x02\x02" +
		"\x02\u0934\u0904\x03\x02\x02\x02\u0934\u090B\x03\x02\x02\x02\u0934\u0911" +
		"\x03\x02\x02\x02\u0934\u0918\x03\x02\x02\x02\u0934\u091E\x03\x02\x02\x02" +
		"\u0934\u0929\x03\x02\x02\x02\u0935\u017B\x03\x02\x02\x02\u0936\u0937\x05" +
		"\u0180\xC1\x02\u0937\u0939\x07n\x02\x02\u0938\u093A\x05\u0182\xC2\x02" +
		"\u0939\u0938\x03\x02\x02\x02\u0939\u093A\x03\x02\x02\x02\u093A\u093B\x03" +
		"\x02\x02\x02\u093B\u093C\x07o\x02\x02\u093C\u017D\x03\x02\x02\x02\u093D" +
		"\u094D\x05\u017C\xBF\x02\u093E\u093F\x05\u0170\xB9\x02\u093F\u0941\x07" +
		"n\x02\x02\u0940\u0942\x05\u0182\xC2\x02\u0941\u0940\x03\x02\x02\x02\u0941" +
		"\u0942\x03\x02\x02\x02\u0942\u0943\x03\x02\x02\x02\u0943\u0944\x07o\x02" +
		"\x02\u0944\u094D\x03\x02\x02\x02\u0945\u0946\x05\u0172\xBA\x02\u0946\u0948" +
		"\x07n\x02\x02\u0947\u0949\x05\u0182\xC2\x02\u0948\u0947\x03\x02\x02\x02" +
		"\u0948\u0949\x03\x02\x02\x02\u0949\u094A\x03\x02\x02\x02\u094A\u094B\x07" +
		"o\x02\x02\u094B\u094D\x03\x02\x02\x02\u094C\u093D\x03\x02\x02\x02\u094C" +
		"\u093E\x03\x02\x02\x02\u094C\u0945\x03\x02\x02\x02\u094D\u017F\x03\x02" +
		"\x02\x02\u094E\u094F\x07\x8E\x02\x02\u094F\u0181\x03\x02\x02\x02\u0950" +
		"\u0951\b\xC2\x01\x02\u0951\u0953\x05\u0184\xC3\x02\u0952\u0954\x07\x8D" +
		"\x02\x02\u0953\u0952\x03\x02\x02\x02\u0953\u0954\x03\x02\x02\x02\u0954" +
		"\u095D\x03\x02\x02\x02\u0955\u0956\f\x03\x02\x02\u0956\u0957\x07\x84\x02" +
		"\x02\u0957\u0959\x05\u0184\xC3\x02\u0958\u095A\x07\x8D\x02\x02\u0959\u0958" +
		"\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A\u095C\x03\x02\x02\x02" +
		"\u095B\u0955\x03\x02\x02\x02\u095C\u095F\x03\x02\x02\x02\u095D\u095B\x03" +
		"\x02\x02\x02\u095D\u095E\x03\x02\x02\x02\u095E\u0183\x03\x02\x02\x02\u095F" +
		"\u095D\x03\x02\x02\x02\u0960\u0964\x05\u011C\x8F\x02\u0961\u0964\x05x" +
		"=\x02\u0962\u0964\x05\x1E\x10\x02\u0963\u0960\x03\x02\x02\x02\u0963\u0961" +
		"\x03\x02\x02\x02\u0963\u0962\x03\x02\x02\x02\u0964\u0185\x03\x02\x02\x02" +
		"\u0965\u0966\x07T\x02\x02\u0966\u0967\x05$\x13\x02\u0967\u0968\x07\x8E" +
		"\x02\x02\u0968\u0971\x03\x02\x02\x02\u0969\u096A\x07T\x02\x02\u096A\u096C" +
		"\x05$\x13\x02\u096B\u096D\x07L\x02\x02\u096C\u096B\x03\x02\x02\x02\u096C" +
		"\u096D\x03\x02\x02\x02\u096D\u096E\x03\x02\x02\x02\u096E\u096F\x05\u017C" +
		"\xBF\x02\u096F\u0971\x03\x02\x02\x02\u0970\u0965\x03\x02\x02\x02\u0970" +
		"\u0969\x03\x02\x02\x02\u0971\u0187\x03\x02\x02\x02\u0972\u0974\x07,\x02" +
		"\x02\u0973\u0972\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974\u0975" +
		"\x03\x02\x02\x02\u0975\u0976\x07L\x02\x02\u0976\u0977\x05\x96L\x02\u0977" +
		"\u0189\x03\x02\x02\x02\u0978\u0979\x07L\x02\x02\u0979\u097A\x07n\x02\x02" +
		"\u097A\u097B\x07o\x02\x02\u097B\u097C\x05\x96L\x02\u097C\u018B\x03\x02" +
		"\x02\x02\u097D\u097E\x07Q\x02\x02\u097E\u097F\x05\x80A\x02\u097F\u0980" +
		"\x05\u0190\xC9\x02\u0980\u018D\x03\x02\x02\x02\u0981\u0983\x07Q\x02\x02" +
		"\u0982\u0984\x05\u0168\xB5\x02\u0983\u0982\x03\x02\x02\x02\u0983\u0984" +
		"\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02\u0985\u0986\x05\x80A\x02" +
		"\u0986\u0987\x05\u0190\xC9\x02\u0987\u018F\x03\x02\x02\x02\u0988\u098A" +
		"\x05\u0192\xCA\x02\u0989\u098B\x05\u0190\xC9\x02\u098A\u0989\x03\x02\x02" +
		"\x02\u098A\u098B\x03\x02\x02\x02\u098B\u0191\x03\x02\x02\x02\u098C\u098D" +
		"\x07\x19\x02\x02\u098D\u098E\x07]\x02\x02\u098E\u098F\x05\u0194\xCB\x02" +
		"\u098F\u0990\x07^\x02\x02\u0990\u0991\x05\x80A\x02\u0991\u0193\x03\x02" +
		"\x02\x02\u0992\u0994\x05\xEEx\x02\u0993\u0992\x03\x02\x02\x02\u0993\u0994" +
		"\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0996\x05\xB2Z\x02" +
		"\u0996\u0997\x05\u0108\x85\x02\u0997\u09A1\x03\x02\x02\x02\u0998\u099A" +
		"\x05\xEEx\x02\u0999\u0998\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02" +
		"\u099A\u099B\x03\x02\x02\x02\u099B\u099D\x05\xB2Z\x02\u099C\u099E\x05" +
		"\u011E\x90\x02\u099D\u099C\x03\x02\x02\x02\u099D\u099E\x03\x02\x02\x02" +
		"\u099E\u09A1\x03\x02\x02\x02\u099F\u09A1\x07\x8D\x02\x02\u09A0\u0993\x03" +
		"\x02\x02\x02\u09A0\u0999\x03\x02\x02\x02\u09A0\u099F\x03\x02\x02\x02\u09A1" +
		"\u0195\x03\x02\x02\x02\u09A2\u09A4\x07O\x02\x02\u09A3\u09A5\x05r:\x02" +
		"\u09A4\u09A3\x03\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u0197\x03" +
		"\x02\x02\x02\u09A6\u09A9\x05\u019A\xCE\x02\u09A7\u09A9\x05\u019E\xD0\x02" +
		"\u09A8\u09A6\x03\x02\x02\x02\u09A8\u09A7\x03\x02\x02\x02\u09A9\u0199\x03" +
		"\x02\x02\x02\u09AA\u09AB\x07O\x02\x02\u09AB\u09AD\x07]\x02\x02\u09AC\u09AE" +
		"\x05\u019C\xCF\x02\u09AD\u09AC\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02" +
		"\x02\u09AE\u09AF\x03\x02\x02\x02\u09AF\u09B0\x07^\x02\x02\u09B0\u019B" +
		"\x03\x02\x02\x02\u09B1\u09B2\b\xCF\x01\x02\u09B2\u09B4\x05\u011C\x8F\x02" +
		"\u09B3\u09B5\x07\x8D\x02\x02\u09B4\u09B3\x03\x02\x02\x02\u09B4\u09B5\x03" +
		"\x02\x02\x02\u09B5\u09BE\x03\x02\x02\x02\u09B6\u09B7\f\x03\x02\x02\u09B7" +
		"\u09B8\x07\x84\x02\x02\u09B8\u09BA\x05\u011C\x8F\x02\u09B9\u09BB\x07\x8D" +
		"\x02\x02\u09BA\u09B9\x03\x02\x02\x02\u09BA\u09BB\x03\x02\x02\x02\u09BB" +
		"\u09BD\x03\x02\x02\x02\u09BC\u09B6\x03\x02\x02\x02\u09BD\u09C0\x03\x02" +
		"\x02\x02\u09BE\u09BC\x03\x02\x02\x02\u09BE\u09BF\x03\x02\x02\x02\u09BF" +
		"\u019D\x03\x02\x02\x02\u09C0\u09BE\x03\x02\x02\x02\u09C1\u09C2\x07:\x02" +
		"\x02\u09C2\u09C3\x07]\x02\x02\u09C3\u09C4\x05x=\x02\u09C4\u09C5\x07^\x02" +
		"\x02\u09C5\u09C8\x03\x02\x02\x02\u09C6\u09C8\x07:\x02\x02\u09C7\u09C1" +
		"\x03\x02\x02\x02\u09C7\u09C6\x03\x02\x02\x02\u09C8\u019F\x03\x02\x02\x02" +
		"\u09C9\u09FD\x079\x02\x02\u09CA\u09FD\x07$\x02\x02\u09CB\u09CC\x079\x02" +
		"\x02\u09CC\u09CD\x07_\x02\x02\u09CD\u09FD\x07`\x02\x02\u09CE\u09CF\x07" +
		"$\x02\x02\u09CF\u09D0\x07_\x02\x02\u09D0\u09FD\x07`\x02\x02\u09D1\u09FD" +
		"\x07c\x02\x02\u09D2\u09FD\x07d\x02\x02\u09D3\u09FD\x07e\x02\x02\u09D4" +
		"\u09FD\x07f\x02\x02\u09D5\u09FD\x07g\x02\x02\u09D6\u09FD\x07h\x02\x02" +
		"\u09D7\u09FD\x07i\x02\x02\u09D8\u09FD\x07j\x02\x02\u09D9\u09FD\x07k\x02" +
		"\x02\u09DA\u09FD\x07\t\x02\x02\u09DB\u09FD\x07\n\x02\x02\u09DC\u09FD\x07" +
		"m\x02\x02\u09DD\u09FD\x07n\x02\x02\u09DE\u09FD\x07o\x02\x02\u09DF\u09FD" +
		"\x07p\x02\x02\u09E0\u09FD\x07q\x02\x02\u09E1\u09FD\x07r\x02\x02\u09E2" +
		"\u09FD\x07s\x02\x02\u09E3\u09FD\x07t\x02\x02\u09E4\u09FD\x07u\x02\x02" +
		"\u09E5\u09FD\x07v\x02\x02\u09E6\u09FD\x07w\x02\x02\u09E7\u09FD\x07x\x02" +
		"\x02\u09E8\u09FD\x07y\x02\x02\u09E9\u09FD\x07{\x02\x02\u09EA\u09FD\x07" +
		"z\x02\x02\u09EB\u09FD\x07|\x02\x02\u09EC\u09FD\x07}\x02\x02\u09ED\u09FD" +
		"\x07~\x02\x02\u09EE\u09FD\x07\x7F\x02\x02\u09EF\u09FD\x07\v\x02\x02\u09F0" +
		"\u09FD\x07\f\x02\x02\u09F1\u09FD\x07\r\x02\x02\u09F2\u09FD\x07\x0E\x02" +
		"\x02\u09F3\u09FD\x07\x82\x02\x02\u09F4\u09FD\x07\x83\x02\x02\u09F5\u09FD" +
		"\x07\x84\x02\x02\u09F6\u09FD\x07\x85\x02\x02\u09F7\u09FD\x07\x86\x02\x02" +
		"\u09F8\u09F9\x07]\x02\x02\u09F9\u09FD\x07^\x02\x02\u09FA\u09FB\x07_\x02" +
		"\x02\u09FB\u09FD\x07`\x02\x02\u09FC\u09C9\x03\x02\x02\x02\u09FC\u09CA" +
		"\x03\x02\x02\x02\u09FC\u09CB\x03\x02\x02\x02\u09FC\u09CE\x03\x02\x02\x02" +
		"\u09FC\u09D1\x03\x02\x02\x02\u09FC\u09D2\x03\x02\x02\x02\u09FC\u09D3\x03" +
		"\x02\x02\x02\u09FC\u09D4\x03\x02\x02\x02\u09FC\u09D5\x03\x02\x02\x02\u09FC" +
		"\u09D6\x03\x02\x02\x02\u09FC\u09D7\x03\x02\x02\x02\u09FC\u09D8\x03\x02" +
		"\x02\x02\u09FC\u09D9\x03\x02\x02\x02\u09FC\u09DA\x03\x02\x02\x02\u09FC" +
		"\u09DB\x03\x02\x02\x02\u09FC\u09DC\x03\x02\x02\x02\u09FC\u09DD\x03\x02" +
		"\x02\x02\u09FC\u09DE\x03\x02\x02\x02\u09FC\u09DF\x03\x02\x02\x02\u09FC" +
		"\u09E0\x03\x02\x02\x02\u09FC\u09E1\x03\x02\x02\x02\u09FC\u09E2\x03\x02" +
		"\x02\x02\u09FC\u09E3\x03\x02\x02\x02\u09FC\u09E4\x03\x02\x02\x02\u09FC" +
		"\u09E5\x03\x02\x02\x02\u09FC\u09E6\x03\x02\x02\x02\u09FC\u09E7\x03\x02" +
		"\x02\x02\u09FC\u09E8\x03\x02\x02\x02\u09FC\u09E9\x03\x02\x02\x02\u09FC" +
		"\u09EA\x03\x02\x02\x02\u09FC\u09EB\x03\x02\x02\x02\u09FC\u09EC\x03\x02" +
		"\x02\x02\u09FC\u09ED\x03\x02\x02\x02\u09FC\u09EE\x03\x02\x02\x02\u09FC" +
		"\u09EF\x03\x02\x02\x02\u09FC\u09F0\x03\x02\x02\x02\u09FC\u09F1\x03\x02" +
		"\x02\x02\u09FC\u09F2\x03\x02\x02\x02\u09FC\u09F3\x03\x02\x02\x02\u09FC" +
		"\u09F4\x03\x02\x02\x02\u09FC\u09F5\x03\x02\x02\x02\u09FC\u09F6\x03\x02" +
		"\x02\x02\u09FC\u09F7\x03\x02\x02\x02\u09FC\u09F8\x03\x02\x02\x02\u09FC" +
		"\u09FA\x03\x02\x02\x02\u09FD\u01A1\x03\x02\x02\x02\u09FE\u0A06\x07\x8F" +
		"\x02\x02\u09FF\u0A06\x07\x95\x02\x02\u0A00\u0A06\x07\x96\x02\x02\u0A01" +
		"\u0A06\x07\x97\x02\x02\u0A02\u0A06\x05\u01A4\xD3\x02\u0A03\u0A06\x05\u01A6" +
		"\xD4\x02\u0A04\u0A06\x05\u01A8\xD5\x02\u0A05\u09FE\x03\x02\x02\x02\u0A05" +
		"\u09FF\x03\x02\x02\x02\u0A05\u0A00\x03\x02\x02\x02\u0A05\u0A01\x03\x02" +
		"\x02\x02\u0A05\u0A02\x03\x02\x02\x02\u0A05\u0A03\x03\x02\x02\x02\u0A05" +
		"\u0A04\x03\x02\x02\x02\u0A06\u01A3\x03\x02\x02\x02\u0A07\u0A08\t\x0E\x02" +
		"\x02\u0A08\u01A5\x03\x02\x02\x02\u0A09\u0A0A\x07;\x02\x02\u0A0A\u01A7" +
		"\x03\x02\x02\x02\u0A0B\u0A0C\t\x0F\x02\x02\u0A0C\u01A9\x03\x02\x02\x02" +
		"\u014C\u01BD\u01C9\u01CE\u01D4\u01DD\u01E9\u01ED\u01F8\u01FC\u020B\u0212" +
		"\u0217\u0219\u021E\u0224\u022E\u0235\u023B\u023F\u0244\u024A\u0251\u0257" +
		"\u025A\u025D\u0260\u0267\u026E\u02A2\u02B1\u02B7\u02BD\u02CA\u02CC\u02D6" +
		"\u02E5\u02EB\u0309\u030E\u0312\u0316\u0319\u031D\u0323\u0325\u032D\u0331" +
		"\u0334\u033B\u0342\u0346\u034B\u034F\u0352\u0357\u035D\u036A\u0375\u0377" +
		"\u0386\u0388\u0394\u0396\u03A2\u03B6\u03B8\u03C4\u03C6\u03D1\u03DC\u03E7" +
		"\u03F3\u03F5\u0401\u0403\u040D\u0415\u0421\u0428\u042C\u0430\u0434\u0438" +
		"\u043D\u0440\u0443\u0449\u0451\u0456\u0459\u045F\u046A\u0481\u0485\u048D" +
		"\u0493\u04A7\u04AB\u04B8\u04BC\u04BF\u04C6\u04CE\u04D8\u04E3\u04EF\u04F9" +
		"\u04FE\u0505\u0508\u050D\u0512\u0527\u052B\u0530\u053B\u0541\u0545\u054A" +
		"\u054E\u0553\u0556\u056C\u0572\u057D\u0581\u0584\u058E\u0594\u0597\u059E" +
		"\u05A8\u05AC\u05AF\u05B2\u05B6\u05BB\u05BD\u05C1\u05C5\u05CE\u05DB\u05E3" +
		"\u05E9\u05EF\u05F3\u05F6\u05FF\u0608\u0610\u061B\u0621\u062C\u062F\u0634" +
		"\u0643\u0649\u0652\u065C\u0662\u066A\u066E\u0672\u0677\u067C\u0683\u0685" +
		"\u068A\u068E\u069C\u06A2\u06B4\u06B6\u06C0\u06C5\u06CC\u06D2\u06D7\u06DD" +
		"\u06E4\u06E8\u06EA\u06EC\u06F3\u06F6\u06F9\u06FC\u0701\u0705\u0708\u070C" +
		"\u0710\u0715\u0718\u071A\u071E\u0725\u072B\u072F\u0735\u073A\u073C\u0742" +
		"\u0746\u074C\u0753\u0757\u0759\u075B\u0762\u076C\u0770\u0772\u0774\u0778" +
		"\u077B\u0781\u078B\u078F\u0792\u0798\u079B\u07A3\u07A6\u07AA\u07AD\u07B0" +
		"\u07B4\u07B9\u07BC\u07BF\u07C3\u07C8\u07D2\u07D9\u07DE\u07E2\u07E7\u07ED" +
		"\u07F1\u07F7\u07FD\u0801\u0804\u0809\u080C\u0812\u0815\u0819\u081C\u0820" +
		"\u0823\u0826\u0828\u082B\u0835\u083A\u083C\u083F\u0842\u0845\u0848\u084B" +
		"\u0854\u085E\u0863\u0866\u086A\u086D\u0870\u0874\u087D\u088B\u0891\u0895" +
		"\u0899\u089D\u08A1\u08A5\u08A9\u08AD\u08B0\u08B4\u08BF\u08C3\u08CA\u08CE" +
		"\u08D3\u08D8\u08DF\u08E3\u08ED\u08FD\u0902\u0906\u0909\u090D\u0913\u0916" +
		"\u091A\u0924\u0927\u092F\u0934\u0939\u0941\u0948\u094C\u0953\u0959\u095D" +
		"\u0963\u096C\u0970\u0973\u0983\u098A\u0993\u0999\u099D\u09A0\u09A4\u09A8" +
		"\u09AD\u09B4\u09BA\u09BE\u09C7\u09FC\u0A05";
	public static readonly _serializedATN: string = Utils.join(
		[
			CPP14Parser._serializedATNSegment0,
			CPP14Parser._serializedATNSegment1,
			CPP14Parser._serializedATNSegment2,
			CPP14Parser._serializedATNSegment3,
			CPP14Parser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CPP14Parser.__ATN) {
			CPP14Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CPP14Parser._serializedATN));
		}

		return CPP14Parser.__ATN;
	}

}

export class GameapitagContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_gameapitag; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterGameapitag) {
			listener.enterGameapitag(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitGameapitag) {
			listener.exitGameapitag(this);
		}
	}
}


export class UclassContext extends ParserRuleContext {
	public ueannotationlist(): UeannotationlistContext {
		return this.getRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_uclass; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUclass) {
			listener.enterUclass(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUclass) {
			listener.exitUclass(this);
		}
	}
}


export class UfunctionContext extends ParserRuleContext {
	public ueannotationlist(): UeannotationlistContext {
		return this.getRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ufunction; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUfunction) {
			listener.enterUfunction(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUfunction) {
			listener.exitUfunction(this);
		}
	}
}


export class UpropertyContext extends ParserRuleContext {
	public ueannotationlist(): UeannotationlistContext {
		return this.getRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_uproperty; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUproperty) {
			listener.enterUproperty(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUproperty) {
			listener.exitUproperty(this);
		}
	}
}


export class UparamContext extends ParserRuleContext {
	public ueannotationlist(): UeannotationlistContext {
		return this.getRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_uparam; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUparam) {
			listener.enterUparam(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUparam) {
			listener.exitUparam(this);
		}
	}
}


export class GeneratedbodyContext extends ParserRuleContext {
	public ueannotationlist(): UeannotationlistContext {
		return this.getRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_generatedbody; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterGeneratedbody) {
			listener.enterGeneratedbody(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitGeneratedbody) {
			listener.exitGeneratedbody(this);
		}
	}
}


export class UeannotationlistContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public ueannotationlistentries(): UeannotationlistentriesContext | undefined {
		return this.tryGetRuleContext(0, UeannotationlistentriesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ueannotationlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUeannotationlist) {
			listener.enterUeannotationlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUeannotationlist) {
			listener.exitUeannotationlist(this);
		}
	}
}


export class UeannotationlistentriesContext extends ParserRuleContext {
	public ueannotation(): UeannotationContext {
		return this.getRuleContext(0, UeannotationContext);
	}
	public ueannotationlistentries(): UeannotationlistentriesContext | undefined {
		return this.tryGetRuleContext(0, UeannotationlistentriesContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ueannotationlistentries; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUeannotationlistentries) {
			listener.enterUeannotationlistentries(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUeannotationlistentries) {
			listener.exitUeannotationlistentries(this);
		}
	}
}


export class UeannotationContext extends ParserRuleContext {
	public uekeyvalueannotation(): UekeyvalueannotationContext | undefined {
		return this.tryGetRuleContext(0, UekeyvalueannotationContext);
	}
	public ueannotationname(): UeannotationnameContext | undefined {
		return this.tryGetRuleContext(0, UeannotationnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ueannotation; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUeannotation) {
			listener.enterUeannotation(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUeannotation) {
			listener.exitUeannotation(this);
		}
	}
}


export class UeannotationvalueContext extends ParserRuleContext {
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public booleanliteral(): BooleanliteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanliteralContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public ueannotationlist(): UeannotationlistContext | undefined {
		return this.tryGetRuleContext(0, UeannotationlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ueannotationvalue; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUeannotationvalue) {
			listener.enterUeannotationvalue(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUeannotationvalue) {
			listener.exitUeannotationvalue(this);
		}
	}
}


export class UeannotationnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ueannotationname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUeannotationname) {
			listener.enterUeannotationname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUeannotationname) {
			listener.exitUeannotationname(this);
		}
	}
}


export class UekeyvalueannotationContext extends ParserRuleContext {
	public ueannotationname(): UeannotationnameContext {
		return this.getRuleContext(0, UeannotationnameContext);
	}
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public ueannotationvalue(): UeannotationvalueContext {
		return this.getRuleContext(0, UeannotationvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_uekeyvalueannotation; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUekeyvalueannotation) {
			listener.enterUekeyvalueannotation(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUekeyvalueannotation) {
			listener.exitUekeyvalueannotation(this);
		}
	}
}


export class TranslationunitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CPP14Parser.EOF, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_translationunit; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTranslationunit) {
			listener.enterTranslationunit(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTranslationunit) {
			listener.exitTranslationunit(this);
		}
	}
}


export class PrimaryexpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	public lambdaexpression(): LambdaexpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_primaryexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPrimaryexpression) {
			listener.enterPrimaryexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPrimaryexpression) {
			listener.exitPrimaryexpression(this);
		}
	}
}


export class IdexpressionContext extends ParserRuleContext {
	public unqualifiedid(): UnqualifiedidContext | undefined {
		return this.tryGetRuleContext(0, UnqualifiedidContext);
	}
	public qualifiedid(): QualifiedidContext | undefined {
		return this.tryGetRuleContext(0, QualifiedidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_idexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterIdexpression) {
			listener.enterIdexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitIdexpression) {
			listener.exitIdexpression(this);
		}
	}
}


export class UnqualifiedidContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public conversionfunctionid(): ConversionfunctionidContext | undefined {
		return this.tryGetRuleContext(0, ConversionfunctionidContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public templateid(): TemplateidContext | undefined {
		return this.tryGetRuleContext(0, TemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unqualifiedid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUnqualifiedid) {
			listener.enterUnqualifiedid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUnqualifiedid) {
			listener.exitUnqualifiedid(this);
		}
	}
}


export class QualifiedidContext extends ParserRuleContext {
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiedid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterQualifiedid) {
			listener.enterQualifiedid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitQualifiedid) {
			listener.exitQualifiedid(this);
		}
	}
}


export class NestednamespecifierContext extends ParserRuleContext {
	public Doublecolon(): TerminalNode { return this.getToken(CPP14Parser.Doublecolon, 0); }
	public thetypename(): ThetypenameContext | undefined {
		return this.tryGetRuleContext(0, ThetypenameContext);
	}
	public namespacename(): NamespacenameContext | undefined {
		return this.tryGetRuleContext(0, NamespacenameContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_nestednamespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNestednamespecifier) {
			listener.enterNestednamespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNestednamespecifier) {
			listener.exitNestednamespecifier(this);
		}
	}
}


export class LambdaexpressionContext extends ParserRuleContext {
	public lambdaintroducer(): LambdaintroducerContext {
		return this.getRuleContext(0, LambdaintroducerContext);
	}
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public lambdadeclarator(): LambdadeclaratorContext | undefined {
		return this.tryGetRuleContext(0, LambdadeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLambdaexpression) {
			listener.enterLambdaexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLambdaexpression) {
			listener.exitLambdaexpression(this);
		}
	}
}


export class LambdaintroducerContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public lambdacapture(): LambdacaptureContext | undefined {
		return this.tryGetRuleContext(0, LambdacaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdaintroducer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLambdaintroducer) {
			listener.enterLambdaintroducer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLambdaintroducer) {
			listener.exitLambdaintroducer(this);
		}
	}
}


export class LambdacaptureContext extends ParserRuleContext {
	public capturedefault(): CapturedefaultContext | undefined {
		return this.tryGetRuleContext(0, CapturedefaultContext);
	}
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdacapture; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLambdacapture) {
			listener.enterLambdacapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLambdacapture) {
			listener.exitLambdacapture(this);
		}
	}
}


export class CapturedefaultContext extends ParserRuleContext {
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capturedefault; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCapturedefault) {
			listener.enterCapturedefault(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCapturedefault) {
			listener.exitCapturedefault(this);
		}
	}
}


export class CapturelistContext extends ParserRuleContext {
	public capture(): CaptureContext {
		return this.getRuleContext(0, CaptureContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public capturelist(): CapturelistContext | undefined {
		return this.tryGetRuleContext(0, CapturelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capturelist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCapturelist) {
			listener.enterCapturelist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCapturelist) {
			listener.exitCapturelist(this);
		}
	}
}


export class CaptureContext extends ParserRuleContext {
	public simplecapture(): SimplecaptureContext | undefined {
		return this.tryGetRuleContext(0, SimplecaptureContext);
	}
	public initcapture(): InitcaptureContext | undefined {
		return this.tryGetRuleContext(0, InitcaptureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_capture; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCapture) {
			listener.enterCapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCapture) {
			listener.exitCapture(this);
		}
	}
}


export class SimplecaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public This(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.This, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simplecapture; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterSimplecapture) {
			listener.enterSimplecapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitSimplecapture) {
			listener.exitSimplecapture(this);
		}
	}
}


export class InitcaptureContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initcapture; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitcapture) {
			listener.enterInitcapture(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitcapture) {
			listener.exitInitcapture(this);
		}
	}
}


export class LambdadeclaratorContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_lambdadeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLambdadeclarator) {
			listener.enterLambdadeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLambdadeclarator) {
			listener.exitLambdadeclarator(this);
		}
	}
}


export class PostfixexpressionContext extends ParserRuleContext {
	public primaryexpression(): PrimaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryexpressionContext);
	}
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dot, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public pseudodestructorname(): PseudodestructornameContext | undefined {
		return this.tryGetRuleContext(0, PseudodestructornameContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Dynamic_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Dynamic_cast, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public Static_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static_cast, 0); }
	public Reinterpret_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Reinterpret_cast, 0); }
	public Const_cast(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const_cast, 0); }
	public typeidofthetypeid(): TypeidofthetypeidContext | undefined {
		return this.tryGetRuleContext(0, TypeidofthetypeidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_postfixexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPostfixexpression) {
			listener.enterPostfixexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPostfixexpression) {
			listener.exitPostfixexpression(this);
		}
	}
}


export class TypeidofexprContext extends ParserRuleContext {
	public Typeid_(): TerminalNode { return this.getToken(CPP14Parser.Typeid_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeidofexpr; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypeidofexpr) {
			listener.enterTypeidofexpr(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypeidofexpr) {
			listener.exitTypeidofexpr(this);
		}
	}
}


export class TypeidofthetypeidContext extends ParserRuleContext {
	public Typeid_(): TerminalNode { return this.getToken(CPP14Parser.Typeid_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeidofthetypeid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypeidofthetypeid) {
			listener.enterTypeidofthetypeid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypeidofthetypeid) {
			listener.exitTypeidofthetypeid(this);
		}
	}
}


export class ExpressionlistContext extends ParserRuleContext {
	public initializerlist(): InitializerlistContext {
		return this.getRuleContext(0, InitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
		}
	}
}


export class PseudodestructornameContext extends ParserRuleContext {
	public thetypename(): ThetypenameContext[];
	public thetypename(i: number): ThetypenameContext;
	public thetypename(i?: number): ThetypenameContext | ThetypenameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ThetypenameContext);
		} else {
			return this.getRuleContext(i, ThetypenameContext);
		}
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public Tilde(): TerminalNode { return this.getToken(CPP14Parser.Tilde, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pseudodestructorname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPseudodestructorname) {
			listener.enterPseudodestructorname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPseudodestructorname) {
			listener.exitPseudodestructorname(this);
		}
	}
}


export class UnaryexpressionContext extends ParserRuleContext {
	public postfixexpression(): PostfixexpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixexpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public unaryoperator(): UnaryoperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryoperatorContext);
	}
	public Sizeof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Sizeof, 0); }
	public unaryexpression(): UnaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Alignof(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Alignof, 0); }
	public noexceptexpression(): NoexceptexpressionContext | undefined {
		return this.tryGetRuleContext(0, NoexceptexpressionContext);
	}
	public newexpression(): NewexpressionContext | undefined {
		return this.tryGetRuleContext(0, NewexpressionContext);
	}
	public deleteexpression(): DeleteexpressionContext | undefined {
		return this.tryGetRuleContext(0, DeleteexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUnaryexpression) {
			listener.enterUnaryexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUnaryexpression) {
			listener.exitUnaryexpression(this);
		}
	}
}


export class UnaryoperatorContext extends ParserRuleContext {
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unaryoperator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUnaryoperator) {
			listener.enterUnaryoperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUnaryoperator) {
			listener.exitUnaryoperator(this);
		}
	}
}


export class NewexpressionContext extends ParserRuleContext {
	public New(): TerminalNode { return this.getToken(CPP14Parser.New, 0); }
	public newtypeid(): NewtypeidContext | undefined {
		return this.tryGetRuleContext(0, NewtypeidContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public newplacement(): NewplacementContext | undefined {
		return this.tryGetRuleContext(0, NewplacementContext);
	}
	public newinitializer(): NewinitializerContext | undefined {
		return this.tryGetRuleContext(0, NewinitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNewexpression) {
			listener.enterNewexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNewexpression) {
			listener.exitNewexpression(this);
		}
	}
}


export class NewplacementContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newplacement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNewplacement) {
			listener.enterNewplacement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNewplacement) {
			listener.exitNewplacement(this);
		}
	}
}


export class NewtypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newtypeid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNewtypeid) {
			listener.enterNewtypeid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNewtypeid) {
			listener.exitNewtypeid(this);
		}
	}
}


export class NewdeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public newdeclarator(): NewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NewdeclaratorContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNewdeclarator) {
			listener.enterNewdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNewdeclarator) {
			listener.exitNewdeclarator(this);
		}
	}
}


export class NoptrnewdeclaratorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(CPP14Parser.LeftBracket, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode { return this.getToken(CPP14Parser.RightBracket, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrnewdeclaratorContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrnewdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoptrnewdeclarator) {
			listener.enterNoptrnewdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoptrnewdeclarator) {
			listener.exitNoptrnewdeclarator(this);
		}
	}
}


export class NewinitializerContext extends ParserRuleContext {
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_newinitializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNewinitializer) {
			listener.enterNewinitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNewinitializer) {
			listener.exitNewinitializer(this);
		}
	}
}


export class DeleteexpressionContext extends ParserRuleContext {
	public Delete(): TerminalNode { return this.getToken(CPP14Parser.Delete, 0); }
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_deleteexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeleteexpression) {
			listener.enterDeleteexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeleteexpression) {
			listener.exitDeleteexpression(this);
		}
	}
}


export class NoexceptexpressionContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noexceptexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoexceptexpression) {
			listener.enterNoexceptexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoexceptexpression) {
			listener.exitNoexceptexpression(this);
		}
	}
}


export class CastexpressionContext extends ParserRuleContext {
	public unaryexpression(): UnaryexpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public castexpression(): CastexpressionContext | undefined {
		return this.tryGetRuleContext(0, CastexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_castexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCastexpression) {
			listener.enterCastexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCastexpression) {
			listener.exitCastexpression(this);
		}
	}
}


export class PmexpressionContext extends ParserRuleContext {
	public castexpression(): CastexpressionContext {
		return this.getRuleContext(0, CastexpressionContext);
	}
	public pmexpression(): PmexpressionContext | undefined {
		return this.tryGetRuleContext(0, PmexpressionContext);
	}
	public DotStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DotStar, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pmexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPmexpression) {
			listener.enterPmexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPmexpression) {
			listener.exitPmexpression(this);
		}
	}
}


export class MultiplicativeexpressionContext extends ParserRuleContext {
	public pmexpression(): PmexpressionContext {
		return this.getRuleContext(0, PmexpressionContext);
	}
	public multiplicativeexpression(): MultiplicativeexpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeexpressionContext);
	}
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_multiplicativeexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMultiplicativeexpression) {
			listener.enterMultiplicativeexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMultiplicativeexpression) {
			listener.exitMultiplicativeexpression(this);
		}
	}
}


export class AdditiveexpressionContext extends ParserRuleContext {
	public multiplicativeexpression(): MultiplicativeexpressionContext {
		return this.getRuleContext(0, MultiplicativeexpressionContext);
	}
	public additiveexpression(): AdditiveexpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveexpressionContext);
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_additiveexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAdditiveexpression) {
			listener.enterAdditiveexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAdditiveexpression) {
			listener.exitAdditiveexpression(this);
		}
	}
}


export class ShiftexpressionContext extends ParserRuleContext {
	public additiveexpression(): AdditiveexpressionContext {
		return this.getRuleContext(0, AdditiveexpressionContext);
	}
	public shiftexpression(): ShiftexpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftexpressionContext);
	}
	public shiftoperator(): ShiftoperatorContext | undefined {
		return this.tryGetRuleContext(0, ShiftoperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_shiftexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterShiftexpression) {
			listener.enterShiftexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitShiftexpression) {
			listener.exitShiftexpression(this);
		}
	}
}


export class ShiftoperatorContext extends ParserRuleContext {
	public RightShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShift, 0); }
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShift, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_shiftoperator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterShiftoperator) {
			listener.enterShiftoperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitShiftoperator) {
			listener.exitShiftoperator(this);
		}
	}
}


export class RelationalexpressionContext extends ParserRuleContext {
	public shiftexpression(): ShiftexpressionContext {
		return this.getRuleContext(0, ShiftexpressionContext);
	}
	public relationalexpression(): RelationalexpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalexpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_relationalexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterRelationalexpression) {
			listener.enterRelationalexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitRelationalexpression) {
			listener.exitRelationalexpression(this);
		}
	}
}


export class EqualityexpressionContext extends ParserRuleContext {
	public relationalexpression(): RelationalexpressionContext {
		return this.getRuleContext(0, RelationalexpressionContext);
	}
	public equalityexpression(): EqualityexpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityexpressionContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_equalityexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEqualityexpression) {
			listener.enterEqualityexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEqualityexpression) {
			listener.exitEqualityexpression(this);
		}
	}
}


export class AndexpressionContext extends ParserRuleContext {
	public equalityexpression(): EqualityexpressionContext {
		return this.getRuleContext(0, EqualityexpressionContext);
	}
	public andexpression(): AndexpressionContext | undefined {
		return this.tryGetRuleContext(0, AndexpressionContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_andexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAndexpression) {
			listener.enterAndexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAndexpression) {
			listener.exitAndexpression(this);
		}
	}
}


export class ExclusiveorexpressionContext extends ParserRuleContext {
	public andexpression(): AndexpressionContext {
		return this.getRuleContext(0, AndexpressionContext);
	}
	public exclusiveorexpression(): ExclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveorexpressionContext);
	}
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exclusiveorexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExclusiveorexpression) {
			listener.enterExclusiveorexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExclusiveorexpression) {
			listener.exitExclusiveorexpression(this);
		}
	}
}


export class InclusiveorexpressionContext extends ParserRuleContext {
	public exclusiveorexpression(): ExclusiveorexpressionContext {
		return this.getRuleContext(0, ExclusiveorexpressionContext);
	}
	public inclusiveorexpression(): InclusiveorexpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveorexpressionContext);
	}
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_inclusiveorexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInclusiveorexpression) {
			listener.enterInclusiveorexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInclusiveorexpression) {
			listener.exitInclusiveorexpression(this);
		}
	}
}


export class LogicalandexpressionContext extends ParserRuleContext {
	public inclusiveorexpression(): InclusiveorexpressionContext {
		return this.getRuleContext(0, InclusiveorexpressionContext);
	}
	public logicalandexpression(): LogicalandexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalandexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalandexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLogicalandexpression) {
			listener.enterLogicalandexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLogicalandexpression) {
			listener.exitLogicalandexpression(this);
		}
	}
}


export class LogicalorexpressionContext extends ParserRuleContext {
	public logicalandexpression(): LogicalandexpressionContext {
		return this.getRuleContext(0, LogicalandexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_logicalorexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLogicalorexpression) {
			listener.enterLogicalorexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLogicalorexpression) {
			listener.exitLogicalorexpression(this);
		}
	}
}


export class ConditionalexpressionContext extends ParserRuleContext {
	public logicalorexpression(): LogicalorexpressionContext {
		return this.getRuleContext(0, LogicalorexpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Question, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conditionalexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterConditionalexpression) {
			listener.enterConditionalexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitConditionalexpression) {
			listener.exitConditionalexpression(this);
		}
	}
}


export class AssignmentexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalexpressionContext);
	}
	public logicalorexpression(): LogicalorexpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalorexpressionContext);
	}
	public assignmentoperator(): AssignmentoperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentoperatorContext);
	}
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public throwexpression(): ThrowexpressionContext | undefined {
		return this.tryGetRuleContext(0, ThrowexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAssignmentexpression) {
			listener.enterAssignmentexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAssignmentexpression) {
			listener.exitAssignmentexpression(this);
		}
	}
}


export class AssignmentoperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_assignmentoperator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAssignmentoperator) {
			listener.enterAssignmentoperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAssignmentoperator) {
			listener.exitAssignmentoperator(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext {
		return this.getRuleContext(0, AssignmentexpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ConstantexpressionContext extends ParserRuleContext {
	public conditionalexpression(): ConditionalexpressionContext {
		return this.getRuleContext(0, ConditionalexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_constantexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterConstantexpression) {
			listener.enterConstantexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitConstantexpression) {
			listener.exitConstantexpression(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledstatement(): LabeledstatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledstatementContext);
	}
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public selectionstatement(): SelectionstatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionstatementContext);
	}
	public iterationstatement(): IterationstatementContext | undefined {
		return this.tryGetRuleContext(0, IterationstatementContext);
	}
	public jumpstatement(): JumpstatementContext | undefined {
		return this.tryGetRuleContext(0, JumpstatementContext);
	}
	public declarationstatement(): DeclarationstatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationstatementContext);
	}
	public tryblock(): TryblockContext | undefined {
		return this.tryGetRuleContext(0, TryblockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class LabeledstatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Case(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Case, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_labeledstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLabeledstatement) {
			listener.enterLabeledstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLabeledstatement) {
			listener.exitLabeledstatement(this);
		}
	}
}


export class ExpressionstatementContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_expressionstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExpressionstatement) {
			listener.enterExpressionstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExpressionstatement) {
			listener.exitExpressionstatement(this);
		}
	}
}


export class CompoundstatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public statementseq(): StatementseqContext | undefined {
		return this.tryGetRuleContext(0, StatementseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_compoundstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCompoundstatement) {
			listener.enterCompoundstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCompoundstatement) {
			listener.exitCompoundstatement(this);
		}
	}
}


export class StatementseqContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statementseq(): StatementseqContext | undefined {
		return this.tryGetRuleContext(0, StatementseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_statementseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterStatementseq) {
			listener.enterStatementseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitStatementseq) {
			listener.exitStatementseq(this);
		}
	}
}


export class SelectionstatementContext extends ParserRuleContext {
	public If(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_selectionstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterSelectionstatement) {
			listener.enterSelectionstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitSelectionstatement) {
			listener.exitSelectionstatement(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_condition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class IterationstatementContext extends ParserRuleContext {
	public While(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Do, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.For, 0); }
	public forinitstatement(): ForinitstatementContext | undefined {
		return this.tryGetRuleContext(0, ForinitstatementContext);
	}
	public forrangedeclaration(): ForrangedeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForrangedeclarationContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public forrangeinitializer(): ForrangeinitializerContext | undefined {
		return this.tryGetRuleContext(0, ForrangeinitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_iterationstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterIterationstatement) {
			listener.enterIterationstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitIterationstatement) {
			listener.exitIterationstatement(this);
		}
	}
}


export class ForinitstatementContext extends ParserRuleContext {
	public expressionstatement(): ExpressionstatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstatementContext);
	}
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forinitstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterForinitstatement) {
			listener.enterForinitstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitForinitstatement) {
			listener.exitForinitstatement(this);
		}
	}
}


export class ForrangedeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext {
		return this.getRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forrangedeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterForrangedeclaration) {
			listener.enterForrangedeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitForrangedeclaration) {
			listener.exitForrangedeclaration(this);
		}
	}
}


export class ForrangeinitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_forrangeinitializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterForrangeinitializer) {
			listener.enterForrangeinitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitForrangeinitializer) {
			listener.exitForrangeinitializer(this);
		}
	}
}


export class JumpstatementContext extends ParserRuleContext {
	public Break(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Break, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Continue, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	public Goto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Goto, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_jumpstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterJumpstatement) {
			listener.enterJumpstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitJumpstatement) {
			listener.exitJumpstatement(this);
		}
	}
}


export class DeclarationstatementContext extends ParserRuleContext {
	public blockdeclaration(): BlockdeclarationContext {
		return this.getRuleContext(0, BlockdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationstatement; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclarationstatement) {
			listener.enterDeclarationstatement(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclarationstatement) {
			listener.exitDeclarationstatement(this);
		}
	}
}


export class DeclarationseqContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarationseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclarationseq) {
			listener.enterDeclarationseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclarationseq) {
			listener.exitDeclarationseq(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public blockdeclaration(): BlockdeclarationContext | undefined {
		return this.tryGetRuleContext(0, BlockdeclarationContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public explicitinstantiation(): ExplicitinstantiationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitinstantiationContext);
	}
	public explicitspecialization(): ExplicitspecializationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitspecializationContext);
	}
	public linkagespecification(): LinkagespecificationContext | undefined {
		return this.tryGetRuleContext(0, LinkagespecificationContext);
	}
	public namespacedefinition(): NamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacedefinitionContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	public attributedeclaration(): AttributedeclarationContext | undefined {
		return this.tryGetRuleContext(0, AttributedeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class BlockdeclarationContext extends ParserRuleContext {
	public simpledeclaration(): SimpledeclarationContext | undefined {
		return this.tryGetRuleContext(0, SimpledeclarationContext);
	}
	public asmdefinition(): AsmdefinitionContext | undefined {
		return this.tryGetRuleContext(0, AsmdefinitionContext);
	}
	public namespacealiasdefinition(): NamespacealiasdefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasdefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public usingdirective(): UsingdirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingdirectiveContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public opaqueenumdeclaration(): OpaqueenumdeclarationContext | undefined {
		return this.tryGetRuleContext(0, OpaqueenumdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_blockdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBlockdeclaration) {
			listener.enterBlockdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBlockdeclaration) {
			listener.exitBlockdeclaration(this);
		}
	}
}


export class AliasdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public thetypeid(): ThetypeidContext {
		return this.getRuleContext(0, ThetypeidContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_aliasdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAliasdeclaration) {
			listener.enterAliasdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAliasdeclaration) {
			listener.exitAliasdeclaration(this);
		}
	}
}


export class SimpledeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public initdeclaratorlist(): InitdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, InitdeclaratorlistContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpledeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterSimpledeclaration) {
			listener.enterSimpledeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitSimpledeclaration) {
			listener.exitSimpledeclaration(this);
		}
	}
}


export class Static_assertdeclarationContext extends ParserRuleContext {
	public Static_assert(): TerminalNode { return this.getToken(CPP14Parser.Static_assert, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public constantexpression(): ConstantexpressionContext {
		return this.getRuleContext(0, ConstantexpressionContext);
	}
	public Comma(): TerminalNode { return this.getToken(CPP14Parser.Comma, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_static_assertdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterStatic_assertdeclaration) {
			listener.enterStatic_assertdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitStatic_assertdeclaration) {
			listener.exitStatic_assertdeclaration(this);
		}
	}
}


export class EmptydeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_emptydeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEmptydeclaration) {
			listener.enterEmptydeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEmptydeclaration) {
			listener.exitEmptydeclaration(this);
		}
	}
}


export class AttributedeclarationContext extends ParserRuleContext {
	public attributespecifierseq(): AttributespecifierseqContext {
		return this.getRuleContext(0, AttributespecifierseqContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributedeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributedeclaration) {
			listener.enterAttributedeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributedeclaration) {
			listener.exitAttributedeclaration(this);
		}
	}
}


export class DeclspecifierContext extends ParserRuleContext {
	public storageclassspecifier(): StorageclassspecifierContext | undefined {
		return this.tryGetRuleContext(0, StorageclassspecifierContext);
	}
	public typespecifier(): TypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierContext);
	}
	public functionspecifier(): FunctionspecifierContext | undefined {
		return this.tryGetRuleContext(0, FunctionspecifierContext);
	}
	public Friend(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Friend, 0); }
	public Typedef(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typedef, 0); }
	public Constexpr(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Constexpr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclspecifier) {
			listener.enterDeclspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclspecifier) {
			listener.exitDeclspecifier(this);
		}
	}
}


export class DeclspecifierseqContext extends ParserRuleContext {
	public declspecifier(): DeclspecifierContext {
		return this.getRuleContext(0, DeclspecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declspecifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclspecifierseq) {
			listener.enterDeclspecifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclspecifierseq) {
			listener.exitDeclspecifierseq(this);
		}
	}
}


export class StorageclassspecifierContext extends ParserRuleContext {
	public Register(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Register, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Static, 0); }
	public Thread_local(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Thread_local, 0); }
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	public Mutable(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mutable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_storageclassspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterStorageclassspecifier) {
			listener.enterStorageclassspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitStorageclassspecifier) {
			listener.exitStorageclassspecifier(this);
		}
	}
}


export class FunctionspecifierContext extends ParserRuleContext {
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public Explicit(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Explicit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterFunctionspecifier) {
			listener.enterFunctionspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitFunctionspecifier) {
			listener.exitFunctionspecifier(this);
		}
	}
}


export class TypedefnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typedefname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypedefname) {
			listener.enterTypedefname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypedefname) {
			listener.exitTypedefname(this);
		}
	}
}


export class TypespecifierContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierContext);
	}
	public classspecifier(): ClassspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassspecifierContext);
	}
	public enumspecifier(): EnumspecifierContext | undefined {
		return this.tryGetRuleContext(0, EnumspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypespecifier) {
			listener.enterTypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypespecifier) {
			listener.exitTypespecifier(this);
		}
	}
}


export class TrailingtypespecifierContext extends ParserRuleContext {
	public simpletypespecifier(): SimpletypespecifierContext | undefined {
		return this.tryGetRuleContext(0, SimpletypespecifierContext);
	}
	public elaboratedtypespecifier(): ElaboratedtypespecifierContext | undefined {
		return this.tryGetRuleContext(0, ElaboratedtypespecifierContext);
	}
	public typenamespecifier(): TypenamespecifierContext | undefined {
		return this.tryGetRuleContext(0, TypenamespecifierContext);
	}
	public cvqualifier(): CvqualifierContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTrailingtypespecifier) {
			listener.enterTrailingtypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTrailingtypespecifier) {
			listener.exitTrailingtypespecifier(this);
		}
	}
}


export class TypespecifierseqContext extends ParserRuleContext {
	public typespecifier(): TypespecifierContext {
		return this.getRuleContext(0, TypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typespecifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypespecifierseq) {
			listener.enterTypespecifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypespecifierseq) {
			listener.exitTypespecifierseq(this);
		}
	}
}


export class TrailingtypespecifierseqContext extends ParserRuleContext {
	public trailingtypespecifier(): TrailingtypespecifierContext {
		return this.getRuleContext(0, TrailingtypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TrailingtypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingtypespecifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTrailingtypespecifierseq) {
			listener.enterTrailingtypespecifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTrailingtypespecifierseq) {
			listener.exitTrailingtypespecifierseq(this);
		}
	}
}


export class SimpletypespecifierContext extends ParserRuleContext {
	public thetypename(): ThetypenameContext | undefined {
		return this.tryGetRuleContext(0, ThetypenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Char(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char, 0); }
	public Char16(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char16, 0); }
	public Char32(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Char32, 0); }
	public Wchar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Wchar, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Bool, 0); }
	public Short(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Short, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Int, 0); }
	public Long(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Long, 0); }
	public Signed(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Signed, 0); }
	public Unsigned(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Unsigned, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Float, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Double, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Void, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpletypespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterSimpletypespecifier) {
			listener.enterSimpletypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitSimpletypespecifier) {
			listener.exitSimpletypespecifier(this);
		}
	}
}


export class ThetypenameContext extends ParserRuleContext {
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public enumname(): EnumnameContext | undefined {
		return this.tryGetRuleContext(0, EnumnameContext);
	}
	public typedefname(): TypedefnameContext | undefined {
		return this.tryGetRuleContext(0, TypedefnameContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_thetypename; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterThetypename) {
			listener.enterThetypename(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitThetypename) {
			listener.exitThetypename(this);
		}
	}
}


export class DecltypespecifierContext extends ParserRuleContext {
	public Decltype(): TerminalNode { return this.getToken(CPP14Parser.Decltype, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Auto(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Auto, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_decltypespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDecltypespecifier) {
			listener.enterDecltypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDecltypespecifier) {
			listener.exitDecltypespecifier(this);
		}
	}
}


export class ElaboratedtypespecifierContext extends ParserRuleContext {
	public classkey(): ClasskeyContext | undefined {
		return this.tryGetRuleContext(0, ClasskeyContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Enum(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Enum, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_elaboratedtypespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterElaboratedtypespecifier) {
			listener.enterElaboratedtypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitElaboratedtypespecifier) {
			listener.exitElaboratedtypespecifier(this);
		}
	}
}


export class EnumnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumname) {
			listener.enterEnumname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumname) {
			listener.exitEnumname(this);
		}
	}
}


export class EnumspecifierContext extends ParserRuleContext {
	public enumhead(): EnumheadContext {
		return this.getRuleContext(0, EnumheadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumspecifier) {
			listener.enterEnumspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumspecifier) {
			listener.exitEnumspecifier(this);
		}
	}
}


export class EnumheadContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumhead; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumhead) {
			listener.enterEnumhead(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumhead) {
			listener.exitEnumhead(this);
		}
	}
}


export class OpaqueenumdeclarationContext extends ParserRuleContext {
	public enumkey(): EnumkeyContext {
		return this.getRuleContext(0, EnumkeyContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public enumbase(): EnumbaseContext | undefined {
		return this.tryGetRuleContext(0, EnumbaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_opaqueenumdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterOpaqueenumdeclaration) {
			listener.enterOpaqueenumdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitOpaqueenumdeclaration) {
			listener.exitOpaqueenumdeclaration(this);
		}
	}
}


export class EnumkeyContext extends ParserRuleContext {
	public Enum(): TerminalNode { return this.getToken(CPP14Parser.Enum, 0); }
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumkey; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumkey) {
			listener.enterEnumkey(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumkey) {
			listener.exitEnumkey(this);
		}
	}
}


export class EnumbaseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumbase; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumbase) {
			listener.enterEnumbase(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumbase) {
			listener.exitEnumbase(this);
		}
	}
}


export class EnumeratorlistContext extends ParserRuleContext {
	public enumeratordefinition(): EnumeratordefinitionContext {
		return this.getRuleContext(0, EnumeratordefinitionContext);
	}
	public enumeratorlist(): EnumeratorlistContext | undefined {
		return this.tryGetRuleContext(0, EnumeratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratorlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumeratorlist) {
			listener.enterEnumeratorlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumeratorlist) {
			listener.exitEnumeratorlist(this);
		}
	}
}


export class EnumeratordefinitionContext extends ParserRuleContext {
	public enumerator(): EnumeratorContext {
		return this.getRuleContext(0, EnumeratorContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumeratordefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumeratordefinition) {
			listener.enterEnumeratordefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumeratordefinition) {
			listener.exitEnumeratordefinition(this);
		}
	}
}


export class EnumeratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_enumerator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterEnumerator) {
			listener.enterEnumerator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitEnumerator) {
			listener.exitEnumerator(this);
		}
	}
}


export class NamespacenameContext extends ParserRuleContext {
	public originalnamespacename(): OriginalnamespacenameContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacenameContext);
	}
	public namespacealias(): NamespacealiasContext | undefined {
		return this.tryGetRuleContext(0, NamespacealiasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacename; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamespacename) {
			listener.enterNamespacename(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamespacename) {
			listener.exitNamespacename(this);
		}
	}
}


export class OriginalnamespacenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacename; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterOriginalnamespacename) {
			listener.enterOriginalnamespacename(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitOriginalnamespacename) {
			listener.exitOriginalnamespacename(this);
		}
	}
}


export class NamespacedefinitionContext extends ParserRuleContext {
	public namednamespacedefinition(): NamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, NamednamespacedefinitionContext);
	}
	public unnamednamespacedefinition(): UnnamednamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, UnnamednamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacedefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamespacedefinition) {
			listener.enterNamespacedefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamespacedefinition) {
			listener.exitNamespacedefinition(this);
		}
	}
}


export class NamednamespacedefinitionContext extends ParserRuleContext {
	public originalnamespacedefinition(): OriginalnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, OriginalnamespacedefinitionContext);
	}
	public extensionnamespacedefinition(): ExtensionnamespacedefinitionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionnamespacedefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namednamespacedefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamednamespacedefinition) {
			listener.enterNamednamespacedefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamednamespacedefinition) {
			listener.exitNamednamespacedefinition(this);
		}
	}
}


export class OriginalnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_originalnamespacedefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterOriginalnamespacedefinition) {
			listener.enterOriginalnamespacedefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitOriginalnamespacedefinition) {
			listener.exitOriginalnamespacedefinition(this);
		}
	}
}


export class ExtensionnamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public originalnamespacename(): OriginalnamespacenameContext {
		return this.getRuleContext(0, OriginalnamespacenameContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_extensionnamespacedefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExtensionnamespacedefinition) {
			listener.enterExtensionnamespacedefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExtensionnamespacedefinition) {
			listener.exitExtensionnamespacedefinition(this);
		}
	}
}


export class UnnamednamespacedefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public namespacebody(): NamespacebodyContext {
		return this.getRuleContext(0, NamespacebodyContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Inline(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Inline, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_unnamednamespacedefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUnnamednamespacedefinition) {
			listener.enterUnnamednamespacedefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUnnamednamespacedefinition) {
			listener.exitUnnamednamespacedefinition(this);
		}
	}
}


export class NamespacebodyContext extends ParserRuleContext {
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacebody; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamespacebody) {
			listener.enterNamespacebody(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamespacebody) {
			listener.exitNamespacebody(this);
		}
	}
}


export class NamespacealiasContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacealias; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamespacealias) {
			listener.enterNamespacealias(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamespacealias) {
			listener.exitNamespacealias(this);
		}
	}
}


export class NamespacealiasdefinitionContext extends ParserRuleContext {
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	public qualifiednamespacespecifier(): QualifiednamespacespecifierContext {
		return this.getRuleContext(0, QualifiednamespacespecifierContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_namespacealiasdefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNamespacealiasdefinition) {
			listener.enterNamespacealiasdefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNamespacealiasdefinition) {
			listener.exitNamespacealiasdefinition(this);
		}
	}
}


export class QualifiednamespacespecifierContext extends ParserRuleContext {
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_qualifiednamespacespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterQualifiednamespacespecifier) {
			listener.enterQualifiednamespacespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitQualifiednamespacespecifier) {
			listener.exitQualifiednamespacespecifier(this);
		}
	}
}


export class UsingdeclarationContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public unqualifiedid(): UnqualifiedidContext {
		return this.getRuleContext(0, UnqualifiedidContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename_, 0); }
	public Doublecolon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Doublecolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUsingdeclaration) {
			listener.enterUsingdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUsingdeclaration) {
			listener.exitUsingdeclaration(this);
		}
	}
}


export class UsingdirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(CPP14Parser.Using, 0); }
	public Namespace(): TerminalNode { return this.getToken(CPP14Parser.Namespace, 0); }
	public namespacename(): NamespacenameContext {
		return this.getRuleContext(0, NamespacenameContext);
	}
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_usingdirective; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUsingdirective) {
			listener.enterUsingdirective(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUsingdirective) {
			listener.exitUsingdirective(this);
		}
	}
}


export class AsmdefinitionContext extends ParserRuleContext {
	public Asm(): TerminalNode { return this.getToken(CPP14Parser.Asm, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Semi(): TerminalNode { return this.getToken(CPP14Parser.Semi, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_asmdefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAsmdefinition) {
			listener.enterAsmdefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAsmdefinition) {
			listener.exitAsmdefinition(this);
		}
	}
}


export class LinkagespecificationContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(CPP14Parser.Extern, 0); }
	public Stringliteral(): TerminalNode { return this.getToken(CPP14Parser.Stringliteral, 0); }
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBrace, 0); }
	public declarationseq(): DeclarationseqContext | undefined {
		return this.tryGetRuleContext(0, DeclarationseqContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_linkagespecification; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLinkagespecification) {
			listener.enterLinkagespecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLinkagespecification) {
			listener.exitLinkagespecification(this);
		}
	}
}


export class AttributespecifierseqContext extends ParserRuleContext {
	public attributespecifier(): AttributespecifierContext {
		return this.getRuleContext(0, AttributespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributespecifierseq) {
			listener.enterAttributespecifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributespecifierseq) {
			listener.exitAttributespecifierseq(this);
		}
	}
}


export class AttributespecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public alignmentspecifier(): AlignmentspecifierContext | undefined {
		return this.tryGetRuleContext(0, AlignmentspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributespecifier) {
			listener.enterAttributespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributespecifier) {
			listener.exitAttributespecifier(this);
		}
	}
}


export class AlignmentspecifierContext extends ParserRuleContext {
	public Alignas(): TerminalNode { return this.getToken(CPP14Parser.Alignas, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_alignmentspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAlignmentspecifier) {
			listener.enterAlignmentspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAlignmentspecifier) {
			listener.exitAlignmentspecifier(this);
		}
	}
}


export class AttributelistContext extends ParserRuleContext {
	public attribute(): AttributeContext | undefined {
		return this.tryGetRuleContext(0, AttributeContext);
	}
	public attributelist(): AttributelistContext | undefined {
		return this.tryGetRuleContext(0, AttributelistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributelist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributelist) {
			listener.enterAttributelist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributelist) {
			listener.exitAttributelist(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributetoken(): AttributetokenContext {
		return this.getRuleContext(0, AttributetokenContext);
	}
	public attributeargumentclause(): AttributeargumentclauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeargumentclauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attribute; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class AttributetokenContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributescopedtoken(): AttributescopedtokenContext | undefined {
		return this.tryGetRuleContext(0, AttributescopedtokenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributetoken; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributetoken) {
			listener.enterAttributetoken(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributetoken) {
			listener.exitAttributetoken(this);
		}
	}
}


export class AttributescopedtokenContext extends ParserRuleContext {
	public attributenamespace(): AttributenamespaceContext {
		return this.getRuleContext(0, AttributenamespaceContext);
	}
	public Doublecolon(): TerminalNode { return this.getToken(CPP14Parser.Doublecolon, 0); }
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributescopedtoken; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributescopedtoken) {
			listener.enterAttributescopedtoken(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributescopedtoken) {
			listener.exitAttributescopedtoken(this);
		}
	}
}


export class AttributenamespaceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributenamespace; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributenamespace) {
			listener.enterAttributenamespace(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributenamespace) {
			listener.exitAttributenamespace(this);
		}
	}
}


export class AttributeargumentclauseContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public balancedtokenseq(): BalancedtokenseqContext {
		return this.getRuleContext(0, BalancedtokenseqContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_attributeargumentclause; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAttributeargumentclause) {
			listener.enterAttributeargumentclause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAttributeargumentclause) {
			listener.exitAttributeargumentclause(this);
		}
	}
}


export class BalancedtokenseqContext extends ParserRuleContext {
	public balancedtoken(): BalancedtokenContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenContext);
	}
	public balancedtokenseq(): BalancedtokenseqContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedtokenseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBalancedtokenseq) {
			listener.enterBalancedtokenseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBalancedtokenseq) {
			listener.exitBalancedtokenseq(this);
		}
	}
}


export class BalancedtokenContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftParen);
		} else {
			return this.getToken(CPP14Parser.LeftParen, i);
		}
	}
	public balancedtokenseq(): BalancedtokenseqContext | undefined {
		return this.tryGetRuleContext(0, BalancedtokenseqContext);
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightParen);
		} else {
			return this.getToken(CPP14Parser.RightParen, i);
		}
	}
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBracket);
		} else {
			return this.getToken(CPP14Parser.LeftBracket, i);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBracket);
		} else {
			return this.getToken(CPP14Parser.RightBracket, i);
		}
	}
	public LeftBrace(): TerminalNode[];
	public LeftBrace(i: number): TerminalNode;
	public LeftBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.LeftBrace);
		} else {
			return this.getToken(CPP14Parser.LeftBrace, i);
		}
	}
	public RightBrace(): TerminalNode[];
	public RightBrace(i: number): TerminalNode;
	public RightBrace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CPP14Parser.RightBrace);
		} else {
			return this.getToken(CPP14Parser.RightBrace, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_balancedtoken; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBalancedtoken) {
			listener.enterBalancedtoken(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBalancedtoken) {
			listener.exitBalancedtoken(this);
		}
	}
}


export class InitdeclaratorlistContext extends ParserRuleContext {
	public initdeclarator(): InitdeclaratorContext {
		return this.getRuleContext(0, InitdeclaratorContext);
	}
	public initdeclaratorlist(): InitdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, InitdeclaratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initdeclaratorlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitdeclaratorlist) {
			listener.enterInitdeclaratorlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitdeclaratorlist) {
			listener.exitInitdeclaratorlist(this);
		}
	}
}


export class InitdeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitdeclarator) {
			listener.enterInitdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitdeclarator) {
			listener.exitInitdeclarator(this);
		}
	}
}


export class DeclaratorContext extends ParserRuleContext {
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
}


export class PtrdeclaratorContext extends ParserRuleContext {
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptrdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPtrdeclarator) {
			listener.enterPtrdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPtrdeclarator) {
			listener.exitPtrdeclarator(this);
		}
	}
}


export class NoptrdeclaratorContext extends ParserRuleContext {
	public declaratorid(): DeclaratoridContext | undefined {
		return this.tryGetRuleContext(0, DeclaratoridContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public noptrdeclarator(): NoptrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public ptrdeclarator(): PtrdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrdeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoptrdeclarator) {
			listener.enterNoptrdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoptrdeclarator) {
			listener.exitNoptrdeclarator(this);
		}
	}
}


export class ParametersandqualifiersContext extends ParserRuleContext {
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public parameterdeclarationclause(): ParameterdeclarationclauseContext {
		return this.getRuleContext(0, ParameterdeclarationclauseContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public refqualifier(): RefqualifierContext | undefined {
		return this.tryGetRuleContext(0, RefqualifierContext);
	}
	public exceptionspecification(): ExceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, ExceptionspecificationContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parametersandqualifiers; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterParametersandqualifiers) {
			listener.enterParametersandqualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitParametersandqualifiers) {
			listener.exitParametersandqualifiers(this);
		}
	}
}


export class TrailingreturntypeContext extends ParserRuleContext {
	public Arrow(): TerminalNode { return this.getToken(CPP14Parser.Arrow, 0); }
	public trailingtypespecifierseq(): TrailingtypespecifierseqContext {
		return this.getRuleContext(0, TrailingtypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_trailingreturntype; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTrailingreturntype) {
			listener.enterTrailingreturntype(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTrailingreturntype) {
			listener.exitTrailingreturntype(this);
		}
	}
}


export class PtroperatorContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptroperator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPtroperator) {
			listener.enterPtroperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPtroperator) {
			listener.exitPtroperator(this);
		}
	}
}


export class CvqualifierseqContext extends ParserRuleContext {
	public cvqualifier(): CvqualifierContext {
		return this.getRuleContext(0, CvqualifierContext);
	}
	public cvqualifierseq(): CvqualifierseqContext | undefined {
		return this.tryGetRuleContext(0, CvqualifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCvqualifierseq) {
			listener.enterCvqualifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCvqualifierseq) {
			listener.exitCvqualifierseq(this);
		}
	}
}


export class CvqualifierContext extends ParserRuleContext {
	public Const(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Const, 0); }
	public Volatile(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Volatile, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_cvqualifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCvqualifier) {
			listener.enterCvqualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCvqualifier) {
			listener.exitCvqualifier(this);
		}
	}
}


export class RefqualifierContext extends ParserRuleContext {
	public And(): TerminalNode { return this.getToken(CPP14Parser.And, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_refqualifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterRefqualifier) {
			listener.enterRefqualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitRefqualifier) {
			listener.exitRefqualifier(this);
		}
	}
}


export class DeclaratoridContext extends ParserRuleContext {
	public idexpression(): IdexpressionContext {
		return this.getRuleContext(0, IdexpressionContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_declaratorid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDeclaratorid) {
			listener.enterDeclaratorid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDeclaratorid) {
			listener.exitDeclaratorid(this);
		}
	}
}


export class ThetypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_thetypeid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterThetypeid) {
			listener.enterThetypeid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitThetypeid) {
			listener.exitThetypeid(this);
		}
	}
}


export class AbstractdeclaratorContext extends ParserRuleContext {
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public trailingreturntype(): TrailingreturntypeContext | undefined {
		return this.tryGetRuleContext(0, TrailingreturntypeContext);
	}
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAbstractdeclarator) {
			listener.enterAbstractdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAbstractdeclarator) {
			listener.exitAbstractdeclarator(this);
		}
	}
}


export class PtrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ptrabstractdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPtrabstractdeclarator) {
			listener.enterPtrabstractdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPtrabstractdeclarator) {
			listener.exitPtrabstractdeclarator(this);
		}
	}
}


export class NoptrabstractdeclaratorContext extends ParserRuleContext {
	public noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, PtrabstractdeclaratorContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoptrabstractdeclarator) {
			listener.enterNoptrabstractdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoptrabstractdeclarator) {
			listener.exitNoptrabstractdeclarator(this);
		}
	}
}


export class AbstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public ptroperator(): PtroperatorContext | undefined {
		return this.tryGetRuleContext(0, PtroperatorContext);
	}
	public abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractpackdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_abstractpackdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAbstractpackdeclarator) {
			listener.enterAbstractpackdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAbstractpackdeclarator) {
			listener.exitAbstractpackdeclarator(this);
		}
	}
}


export class NoptrabstractpackdeclaratorContext extends ParserRuleContext {
	public noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, NoptrabstractpackdeclaratorContext);
	}
	public parametersandqualifiers(): ParametersandqualifiersContext | undefined {
		return this.tryGetRuleContext(0, ParametersandqualifiersContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noptrabstractpackdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoptrabstractpackdeclarator) {
			listener.enterNoptrabstractpackdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoptrabstractpackdeclarator) {
			listener.exitNoptrabstractpackdeclarator(this);
		}
	}
}


export class ParameterdeclarationclauseContext extends ParserRuleContext {
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationclause; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterParameterdeclarationclause) {
			listener.enterParameterdeclarationclause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitParameterdeclarationclause) {
			listener.exitParameterdeclarationclause(this);
		}
	}
}


export class ParameterdeclarationlistContext extends ParserRuleContext {
	public parameterdeclaration(): ParameterdeclarationContext {
		return this.getRuleContext(0, ParameterdeclarationContext);
	}
	public parameterdeclarationlist(): ParameterdeclarationlistContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclarationlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterParameterdeclarationlist) {
			listener.enterParameterdeclarationlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitParameterdeclarationlist) {
			listener.exitParameterdeclarationlist(this);
		}
	}
}


export class ParameterdeclarationContext extends ParserRuleContext {
	public declspecifierseq(): DeclspecifierseqContext {
		return this.getRuleContext(0, DeclspecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public uparam(): UparamContext | undefined {
		return this.tryGetRuleContext(0, UparamContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_parameterdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterParameterdeclaration) {
			listener.enterParameterdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitParameterdeclaration) {
			listener.exitParameterdeclaration(this);
		}
	}
}


export class FunctiondefinitionContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public functionbody(): FunctionbodyContext {
		return this.getRuleContext(0, FunctionbodyContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functiondefinition; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterFunctiondefinition) {
			listener.enterFunctiondefinition(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitFunctiondefinition) {
			listener.exitFunctiondefinition(this);
		}
	}
}


export class FunctionbodyContext extends ParserRuleContext {
	public compoundstatement(): CompoundstatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundstatementContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	public functiontryblock(): FunctiontryblockContext | undefined {
		return this.tryGetRuleContext(0, FunctiontryblockContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Default, 0); }
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functionbody; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterFunctionbody) {
			listener.enterFunctionbody(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitFunctionbody) {
			listener.exitFunctionbody(this);
		}
	}
}


export class InitializerContext extends ParserRuleContext {
	public braceorequalinitializer(): BraceorequalinitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceorequalinitializerContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
}


export class BraceorequalinitializerContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public initializerclause(): InitializerclauseContext | undefined {
		return this.tryGetRuleContext(0, InitializerclauseContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_braceorequalinitializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBraceorequalinitializer) {
			listener.enterBraceorequalinitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBraceorequalinitializer) {
			listener.exitBraceorequalinitializer(this);
		}
	}
}


export class InitializerclauseContext extends ParserRuleContext {
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerclause; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitializerclause) {
			listener.enterInitializerclause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitializerclause) {
			listener.exitInitializerclause(this);
		}
	}
}


export class InitializerlistContext extends ParserRuleContext {
	public initializerclause(): InitializerclauseContext {
		return this.getRuleContext(0, InitializerclauseContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_initializerlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterInitializerlist) {
			listener.enterInitializerlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitInitializerlist) {
			listener.exitInitializerlist(this);
		}
	}
}


export class BracedinitlistContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public initializerlist(): InitializerlistContext | undefined {
		return this.tryGetRuleContext(0, InitializerlistContext);
	}
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_bracedinitlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBracedinitlist) {
			listener.enterBracedinitlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBracedinitlist) {
			listener.exitBracedinitlist(this);
		}
	}
}


export class ClassnameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClassname) {
			listener.enterClassname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClassname) {
			listener.exitClassname(this);
		}
	}
}


export class ClassspecifierContext extends ParserRuleContext {
	public classhead(): ClassheadContext {
		return this.getRuleContext(0, ClassheadContext);
	}
	public LeftBrace(): TerminalNode { return this.getToken(CPP14Parser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(CPP14Parser.RightBrace, 0); }
	public uclass(): UclassContext | undefined {
		return this.tryGetRuleContext(0, UclassContext);
	}
	public generatedbody(): GeneratedbodyContext | undefined {
		return this.tryGetRuleContext(0, GeneratedbodyContext);
	}
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClassspecifier) {
			listener.enterClassspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClassspecifier) {
			listener.exitClassspecifier(this);
		}
	}
}


export class ClassheadContext extends ParserRuleContext {
	public classkey(): ClasskeyContext {
		return this.getRuleContext(0, ClasskeyContext);
	}
	public classheadname(): ClassheadnameContext | undefined {
		return this.tryGetRuleContext(0, ClassheadnameContext);
	}
	public gameapitag(): GameapitagContext | undefined {
		return this.tryGetRuleContext(0, GameapitagContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public classvirtspecifier(): ClassvirtspecifierContext | undefined {
		return this.tryGetRuleContext(0, ClassvirtspecifierContext);
	}
	public baseclause(): BaseclauseContext | undefined {
		return this.tryGetRuleContext(0, BaseclauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classhead; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClasshead) {
			listener.enterClasshead(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClasshead) {
			listener.exitClasshead(this);
		}
	}
}


export class ClassheadnameContext extends ParserRuleContext {
	public classname(): ClassnameContext {
		return this.getRuleContext(0, ClassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classheadname; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClassheadname) {
			listener.enterClassheadname(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClassheadname) {
			listener.exitClassheadname(this);
		}
	}
}


export class ClassvirtspecifierContext extends ParserRuleContext {
	public Final(): TerminalNode { return this.getToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classvirtspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClassvirtspecifier) {
			listener.enterClassvirtspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClassvirtspecifier) {
			listener.exitClassvirtspecifier(this);
		}
	}
}


export class ClasskeyContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Struct(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Struct, 0); }
	public Union(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Union, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classkey; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClasskey) {
			listener.enterClasskey(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClasskey) {
			listener.exitClasskey(this);
		}
	}
}


export class MemberspecificationContext extends ParserRuleContext {
	public memberdeclaration(): MemberdeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclarationContext);
	}
	public memberspecification(): MemberspecificationContext | undefined {
		return this.tryGetRuleContext(0, MemberspecificationContext);
	}
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberspecification; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMemberspecification) {
			listener.enterMemberspecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMemberspecification) {
			listener.exitMemberspecification(this);
		}
	}
}


export class MemberdeclarationContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Semi, 0); }
	public uproperty(): UpropertyContext | undefined {
		return this.tryGetRuleContext(0, UpropertyContext);
	}
	public ufunction(): UfunctionContext | undefined {
		return this.tryGetRuleContext(0, UfunctionContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public declspecifierseq(): DeclspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, DeclspecifierseqContext);
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	public functiondefinition(): FunctiondefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefinitionContext);
	}
	public usingdeclaration(): UsingdeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingdeclarationContext);
	}
	public static_assertdeclaration(): Static_assertdeclarationContext | undefined {
		return this.tryGetRuleContext(0, Static_assertdeclarationContext);
	}
	public templatedeclaration(): TemplatedeclarationContext | undefined {
		return this.tryGetRuleContext(0, TemplatedeclarationContext);
	}
	public aliasdeclaration(): AliasdeclarationContext | undefined {
		return this.tryGetRuleContext(0, AliasdeclarationContext);
	}
	public emptydeclaration(): EmptydeclarationContext | undefined {
		return this.tryGetRuleContext(0, EmptydeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMemberdeclaration) {
			listener.enterMemberdeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMemberdeclaration) {
			listener.exitMemberdeclaration(this);
		}
	}
}


export class MemberdeclaratorlistContext extends ParserRuleContext {
	public memberdeclarator(): MemberdeclaratorContext {
		return this.getRuleContext(0, MemberdeclaratorContext);
	}
	public memberdeclaratorlist(): MemberdeclaratorlistContext | undefined {
		return this.tryGetRuleContext(0, MemberdeclaratorlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclaratorlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMemberdeclaratorlist) {
			listener.enterMemberdeclaratorlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMemberdeclaratorlist) {
			listener.exitMemberdeclaratorlist(this);
		}
	}
}


export class MemberdeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	public purespecifier(): PurespecifierContext | undefined {
		return this.tryGetRuleContext(0, PurespecifierContext);
	}
	public braceorequalinitializer(): BraceorequalinitializerContext | undefined {
		return this.tryGetRuleContext(0, BraceorequalinitializerContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Colon, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_memberdeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMemberdeclarator) {
			listener.enterMemberdeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMemberdeclarator) {
			listener.exitMemberdeclarator(this);
		}
	}
}


export class VirtspecifierseqContext extends ParserRuleContext {
	public virtspecifier(): VirtspecifierContext {
		return this.getRuleContext(0, VirtspecifierContext);
	}
	public virtspecifierseq(): VirtspecifierseqContext | undefined {
		return this.tryGetRuleContext(0, VirtspecifierseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifierseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterVirtspecifierseq) {
			listener.enterVirtspecifierseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitVirtspecifierseq) {
			listener.exitVirtspecifierseq(this);
		}
	}
}


export class VirtspecifierContext extends ParserRuleContext {
	public Override(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Override, 0); }
	public Final(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Final, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_virtspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterVirtspecifier) {
			listener.enterVirtspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitVirtspecifier) {
			listener.exitVirtspecifier(this);
		}
	}
}


export class PurespecifierContext extends ParserRuleContext {
	public Assign(): TerminalNode { return this.getToken(CPP14Parser.Assign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_purespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPurespecifier) {
			listener.enterPurespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPurespecifier) {
			listener.exitPurespecifier(this);
		}
	}
}


export class BaseclauseContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public basespecifierlist(): BasespecifierlistContext {
		return this.getRuleContext(0, BasespecifierlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_baseclause; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBaseclause) {
			listener.enterBaseclause(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBaseclause) {
			listener.exitBaseclause(this);
		}
	}
}


export class BasespecifierlistContext extends ParserRuleContext {
	public basespecifier(): BasespecifierContext {
		return this.getRuleContext(0, BasespecifierContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public basespecifierlist(): BasespecifierlistContext | undefined {
		return this.tryGetRuleContext(0, BasespecifierlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basespecifierlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBasespecifierlist) {
			listener.enterBasespecifierlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBasespecifierlist) {
			listener.exitBasespecifierlist(this);
		}
	}
}


export class BasespecifierContext extends ParserRuleContext {
	public basetypespecifier(): BasetypespecifierContext {
		return this.getRuleContext(0, BasetypespecifierContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public Virtual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Virtual, 0); }
	public accessspecifier(): AccessspecifierContext | undefined {
		return this.tryGetRuleContext(0, AccessspecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBasespecifier) {
			listener.enterBasespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBasespecifier) {
			listener.exitBasespecifier(this);
		}
	}
}


export class ClassordecltypeContext extends ParserRuleContext {
	public classname(): ClassnameContext | undefined {
		return this.tryGetRuleContext(0, ClassnameContext);
	}
	public nestednamespecifier(): NestednamespecifierContext | undefined {
		return this.tryGetRuleContext(0, NestednamespecifierContext);
	}
	public decltypespecifier(): DecltypespecifierContext | undefined {
		return this.tryGetRuleContext(0, DecltypespecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_classordecltype; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterClassordecltype) {
			listener.enterClassordecltype(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitClassordecltype) {
			listener.exitClassordecltype(this);
		}
	}
}


export class BasetypespecifierContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext {
		return this.getRuleContext(0, ClassordecltypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_basetypespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBasetypespecifier) {
			listener.enterBasetypespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBasetypespecifier) {
			listener.exitBasetypespecifier(this);
		}
	}
}


export class AccessspecifierContext extends ParserRuleContext {
	public Private(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Private, 0); }
	public Protected(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Protected, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Public, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_accessspecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterAccessspecifier) {
			listener.enterAccessspecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitAccessspecifier) {
			listener.exitAccessspecifier(this);
		}
	}
}


export class ConversionfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public conversiontypeid(): ConversiontypeidContext {
		return this.getRuleContext(0, ConversiontypeidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversionfunctionid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterConversionfunctionid) {
			listener.enterConversionfunctionid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitConversionfunctionid) {
			listener.exitConversionfunctionid(this);
		}
	}
}


export class ConversiontypeidContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext {
		return this.getRuleContext(0, TypespecifierseqContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversiontypeid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterConversiontypeid) {
			listener.enterConversiontypeid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitConversiontypeid) {
			listener.exitConversiontypeid(this);
		}
	}
}


export class ConversiondeclaratorContext extends ParserRuleContext {
	public ptroperator(): PtroperatorContext {
		return this.getRuleContext(0, PtroperatorContext);
	}
	public conversiondeclarator(): ConversiondeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ConversiondeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_conversiondeclarator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterConversiondeclarator) {
			listener.enterConversiondeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitConversiondeclarator) {
			listener.exitConversiondeclarator(this);
		}
	}
}


export class CtorinitializerContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(CPP14Parser.Colon, 0); }
	public meminitializerlist(): MeminitializerlistContext {
		return this.getRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_ctorinitializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterCtorinitializer) {
			listener.enterCtorinitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitCtorinitializer) {
			listener.exitCtorinitializer(this);
		}
	}
}


export class MeminitializerlistContext extends ParserRuleContext {
	public meminitializer(): MeminitializerContext {
		return this.getRuleContext(0, MeminitializerContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public meminitializerlist(): MeminitializerlistContext | undefined {
		return this.tryGetRuleContext(0, MeminitializerlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMeminitializerlist) {
			listener.enterMeminitializerlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMeminitializerlist) {
			listener.exitMeminitializerlist(this);
		}
	}
}


export class MeminitializerContext extends ParserRuleContext {
	public meminitializerid(): MeminitializeridContext {
		return this.getRuleContext(0, MeminitializeridContext);
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	public bracedinitlist(): BracedinitlistContext | undefined {
		return this.tryGetRuleContext(0, BracedinitlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializer; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMeminitializer) {
			listener.enterMeminitializer(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMeminitializer) {
			listener.exitMeminitializer(this);
		}
	}
}


export class MeminitializeridContext extends ParserRuleContext {
	public classordecltype(): ClassordecltypeContext | undefined {
		return this.tryGetRuleContext(0, ClassordecltypeContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_meminitializerid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterMeminitializerid) {
			listener.enterMeminitializerid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitMeminitializerid) {
			listener.exitMeminitializerid(this);
		}
	}
}


export class OperatorfunctionidContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public theoperator(): TheoperatorContext {
		return this.getRuleContext(0, TheoperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_operatorfunctionid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterOperatorfunctionid) {
			listener.enterOperatorfunctionid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitOperatorfunctionid) {
			listener.exitOperatorfunctionid(this);
		}
	}
}


export class LiteraloperatoridContext extends ParserRuleContext {
	public Operator(): TerminalNode { return this.getToken(CPP14Parser.Operator, 0); }
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literaloperatorid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLiteraloperatorid) {
			listener.enterLiteraloperatorid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLiteraloperatorid) {
			listener.exitLiteraloperatorid(this);
		}
	}
}


export class TemplatedeclarationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public templateparameterlist(): TemplateparameterlistContext {
		return this.getRuleContext(0, TemplateparameterlistContext);
	}
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templatedeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplatedeclaration) {
			listener.enterTemplatedeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplatedeclaration) {
			listener.exitTemplatedeclaration(this);
		}
	}
}


export class TemplateparameterlistContext extends ParserRuleContext {
	public templateparameter(): TemplateparameterContext {
		return this.getRuleContext(0, TemplateparameterContext);
	}
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateparameterlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplateparameterlist) {
			listener.enterTemplateparameterlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplateparameterlist) {
			listener.exitTemplateparameterlist(this);
		}
	}
}


export class TemplateparameterContext extends ParserRuleContext {
	public typeparameter(): TypeparameterContext | undefined {
		return this.tryGetRuleContext(0, TypeparameterContext);
	}
	public parameterdeclaration(): ParameterdeclarationContext | undefined {
		return this.tryGetRuleContext(0, ParameterdeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateparameter; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplateparameter) {
			listener.enterTemplateparameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplateparameter) {
			listener.exitTemplateparameter(this);
		}
	}
}


export class TypeparameterContext extends ParserRuleContext {
	public Class(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Class, 0); }
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public Typename_(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Typename_, 0); }
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public templateparameterlist(): TemplateparameterlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateparameterlistContext);
	}
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeparameter; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypeparameter) {
			listener.enterTypeparameter(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypeparameter) {
			listener.exitTypeparameter(this);
		}
	}
}


export class SimpletemplateidContext extends ParserRuleContext {
	public templatename(): TemplatenameContext {
		return this.getRuleContext(0, TemplatenameContext);
	}
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_simpletemplateid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterSimpletemplateid) {
			listener.enterSimpletemplateid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitSimpletemplateid) {
			listener.exitSimpletemplateid(this);
		}
	}
}


export class TemplateidContext extends ParserRuleContext {
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public operatorfunctionid(): OperatorfunctionidContext | undefined {
		return this.tryGetRuleContext(0, OperatorfunctionidContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	public literaloperatorid(): LiteraloperatoridContext | undefined {
		return this.tryGetRuleContext(0, LiteraloperatoridContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateid; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplateid) {
			listener.enterTemplateid(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplateid) {
			listener.exitTemplateid(this);
		}
	}
}


export class TemplatenameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CPP14Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templatename; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplatename) {
			listener.enterTemplatename(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplatename) {
			listener.exitTemplatename(this);
		}
	}
}


export class TemplateargumentlistContext extends ParserRuleContext {
	public templateargument(): TemplateargumentContext {
		return this.getRuleContext(0, TemplateargumentContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public templateargumentlist(): TemplateargumentlistContext | undefined {
		return this.tryGetRuleContext(0, TemplateargumentlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateargumentlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplateargumentlist) {
			listener.enterTemplateargumentlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplateargumentlist) {
			listener.exitTemplateargumentlist(this);
		}
	}
}


export class TemplateargumentContext extends ParserRuleContext {
	public thetypeid(): ThetypeidContext | undefined {
		return this.tryGetRuleContext(0, ThetypeidContext);
	}
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public idexpression(): IdexpressionContext | undefined {
		return this.tryGetRuleContext(0, IdexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_templateargument; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTemplateargument) {
			listener.enterTemplateargument(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTemplateargument) {
			listener.exitTemplateargument(this);
		}
	}
}


export class TypenamespecifierContext extends ParserRuleContext {
	public Typename_(): TerminalNode { return this.getToken(CPP14Parser.Typename_, 0); }
	public nestednamespecifier(): NestednamespecifierContext {
		return this.getRuleContext(0, NestednamespecifierContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Identifier, 0); }
	public simpletemplateid(): SimpletemplateidContext | undefined {
		return this.tryGetRuleContext(0, SimpletemplateidContext);
	}
	public Template(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Template, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typenamespecifier; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypenamespecifier) {
			listener.enterTypenamespecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypenamespecifier) {
			listener.exitTypenamespecifier(this);
		}
	}
}


export class ExplicitinstantiationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public Extern(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Extern, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitinstantiation; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExplicitinstantiation) {
			listener.enterExplicitinstantiation(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExplicitinstantiation) {
			listener.exitExplicitinstantiation(this);
		}
	}
}


export class ExplicitspecializationContext extends ParserRuleContext {
	public Template(): TerminalNode { return this.getToken(CPP14Parser.Template, 0); }
	public Less(): TerminalNode { return this.getToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(CPP14Parser.Greater, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_explicitspecialization; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExplicitspecialization) {
			listener.enterExplicitspecialization(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExplicitspecialization) {
			listener.exitExplicitspecialization(this);
		}
	}
}


export class TryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_tryblock; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTryblock) {
			listener.enterTryblock(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTryblock) {
			listener.exitTryblock(this);
		}
	}
}


export class FunctiontryblockContext extends ParserRuleContext {
	public Try(): TerminalNode { return this.getToken(CPP14Parser.Try, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	public handlerseq(): HandlerseqContext {
		return this.getRuleContext(0, HandlerseqContext);
	}
	public ctorinitializer(): CtorinitializerContext | undefined {
		return this.tryGetRuleContext(0, CtorinitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_functiontryblock; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterFunctiontryblock) {
			listener.enterFunctiontryblock(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitFunctiontryblock) {
			listener.exitFunctiontryblock(this);
		}
	}
}


export class HandlerseqContext extends ParserRuleContext {
	public handler(): HandlerContext {
		return this.getRuleContext(0, HandlerContext);
	}
	public handlerseq(): HandlerseqContext | undefined {
		return this.tryGetRuleContext(0, HandlerseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handlerseq; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterHandlerseq) {
			listener.enterHandlerseq(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitHandlerseq) {
			listener.exitHandlerseq(this);
		}
	}
}


export class HandlerContext extends ParserRuleContext {
	public Catch(): TerminalNode { return this.getToken(CPP14Parser.Catch, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public exceptiondeclaration(): ExceptiondeclarationContext {
		return this.getRuleContext(0, ExceptiondeclarationContext);
	}
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public compoundstatement(): CompoundstatementContext {
		return this.getRuleContext(0, CompoundstatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_handler; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterHandler) {
			listener.enterHandler(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitHandler) {
			listener.exitHandler(this);
		}
	}
}


export class ExceptiondeclarationContext extends ParserRuleContext {
	public typespecifierseq(): TypespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, TypespecifierseqContext);
	}
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public attributespecifierseq(): AttributespecifierseqContext | undefined {
		return this.tryGetRuleContext(0, AttributespecifierseqContext);
	}
	public abstractdeclarator(): AbstractdeclaratorContext | undefined {
		return this.tryGetRuleContext(0, AbstractdeclaratorContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptiondeclaration; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExceptiondeclaration) {
			listener.enterExceptiondeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExceptiondeclaration) {
			listener.exitExceptiondeclaration(this);
		}
	}
}


export class ThrowexpressionContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public assignmentexpression(): AssignmentexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_throwexpression; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterThrowexpression) {
			listener.enterThrowexpression(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitThrowexpression) {
			listener.exitThrowexpression(this);
		}
	}
}


export class ExceptionspecificationContext extends ParserRuleContext {
	public dynamicexceptionspecification(): DynamicexceptionspecificationContext | undefined {
		return this.tryGetRuleContext(0, DynamicexceptionspecificationContext);
	}
	public noexceptspecification(): NoexceptspecificationContext | undefined {
		return this.tryGetRuleContext(0, NoexceptspecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_exceptionspecification; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterExceptionspecification) {
			listener.enterExceptionspecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitExceptionspecification) {
			listener.exitExceptionspecification(this);
		}
	}
}


export class DynamicexceptionspecificationContext extends ParserRuleContext {
	public Throw(): TerminalNode { return this.getToken(CPP14Parser.Throw, 0); }
	public LeftParen(): TerminalNode { return this.getToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(CPP14Parser.RightParen, 0); }
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_dynamicexceptionspecification; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterDynamicexceptionspecification) {
			listener.enterDynamicexceptionspecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitDynamicexceptionspecification) {
			listener.exitDynamicexceptionspecification(this);
		}
	}
}


export class TypeidlistContext extends ParserRuleContext {
	public thetypeid(): ThetypeidContext {
		return this.getRuleContext(0, ThetypeidContext);
	}
	public Ellipsis(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Ellipsis, 0); }
	public typeidlist(): TypeidlistContext | undefined {
		return this.tryGetRuleContext(0, TypeidlistContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_typeidlist; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTypeidlist) {
			listener.enterTypeidlist(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTypeidlist) {
			listener.exitTypeidlist(this);
		}
	}
}


export class NoexceptspecificationContext extends ParserRuleContext {
	public Noexcept(): TerminalNode { return this.getToken(CPP14Parser.Noexcept, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public constantexpression(): ConstantexpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantexpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_noexceptspecification; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterNoexceptspecification) {
			listener.enterNoexceptspecification(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitNoexceptspecification) {
			listener.exitNoexceptspecification(this);
		}
	}
}


export class TheoperatorContext extends ParserRuleContext {
	public New(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.New, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Delete, 0); }
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightBracket, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Minus, 0); }
	public Star(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Star, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Mod, 0); }
	public Caret(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Caret, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Or, 0); }
	public Tilde(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Tilde, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Assign, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Greater, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusAssign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ModAssign, 0); }
	public XorAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.XorAssign, 0); }
	public AndAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.AndAssign, 0); }
	public OrAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.OrAssign, 0); }
	public LeftShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShift, 0); }
	public RightShift(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShift, 0); }
	public RightShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightShiftAssign, 0); }
	public LeftShiftAssign(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftShiftAssign, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.NotEqual, 0); }
	public LessEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LessEqual, 0); }
	public GreaterEqual(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.GreaterEqual, 0); }
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.MinusMinus, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Comma, 0); }
	public ArrowStar(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.ArrowStar, 0); }
	public Arrow(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Arrow, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_theoperator; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterTheoperator) {
			listener.enterTheoperator(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitTheoperator) {
			listener.exitTheoperator(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public Integerliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Integerliteral, 0); }
	public Characterliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Characterliteral, 0); }
	public Floatingliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Floatingliteral, 0); }
	public Stringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Stringliteral, 0); }
	public booleanliteral(): BooleanliteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanliteralContext);
	}
	public pointerliteral(): PointerliteralContext | undefined {
		return this.tryGetRuleContext(0, PointerliteralContext);
	}
	public userdefinedliteral(): UserdefinedliteralContext | undefined {
		return this.tryGetRuleContext(0, UserdefinedliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_literal; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class BooleanliteralContext extends ParserRuleContext {
	public False(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.False, 0); }
	public True(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.True, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_booleanliteral; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterBooleanliteral) {
			listener.enterBooleanliteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitBooleanliteral) {
			listener.exitBooleanliteral(this);
		}
	}
}


export class PointerliteralContext extends ParserRuleContext {
	public Nullptr(): TerminalNode { return this.getToken(CPP14Parser.Nullptr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_pointerliteral; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterPointerliteral) {
			listener.enterPointerliteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitPointerliteral) {
			listener.exitPointerliteral(this);
		}
	}
}


export class UserdefinedliteralContext extends ParserRuleContext {
	public Userdefinedintegerliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedintegerliteral, 0); }
	public Userdefinedfloatingliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedfloatingliteral, 0); }
	public Userdefinedstringliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedstringliteral, 0); }
	public Userdefinedcharacterliteral(): TerminalNode | undefined { return this.tryGetToken(CPP14Parser.Userdefinedcharacterliteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CPP14Parser.RULE_userdefinedliteral; }
	// @Override
	public enterRule(listener: CPP14Listener): void {
		if (listener.enterUserdefinedliteral) {
			listener.enterUserdefinedliteral(this);
		}
	}
	// @Override
	public exitRule(listener: CPP14Listener): void {
		if (listener.exitUserdefinedliteral) {
			listener.exitUserdefinedliteral(this);
		}
	}
}


