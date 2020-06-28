// Generated from ./grammar/SatisfactoryHeaderParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./SatisfactoryHeaderParser";
import { ElementContext } from "./SatisfactoryHeaderParser";
import { ValueContext } from "./SatisfactoryHeaderParser";
import { LiteralContext } from "./SatisfactoryHeaderParser";
import { IdentifierContext } from "./SatisfactoryHeaderParser";
import { StringLiteralContext } from "./SatisfactoryHeaderParser";
import { NumericLiteralContext } from "./SatisfactoryHeaderParser";
import { BooleanLiteralContext } from "./SatisfactoryHeaderParser";
import { TypeDeclarationContext } from "./SatisfactoryHeaderParser";
import { TemplateTypeContext } from "./SatisfactoryHeaderParser";
import { TypeModifierContext } from "./SatisfactoryHeaderParser";
import { TypeReferenceTypeContext } from "./SatisfactoryHeaderParser";
import { ClassDeclarationContext } from "./SatisfactoryHeaderParser";
import { ClassHeaderContext } from "./SatisfactoryHeaderParser";
import { ClassMacroContext } from "./SatisfactoryHeaderParser";
import { TemplateDeclarationContext } from "./SatisfactoryHeaderParser";
import { ClassKeywordContext } from "./SatisfactoryHeaderParser";
import { ClassInheritanceContext } from "./SatisfactoryHeaderParser";
import { ClassExtensionListContext } from "./SatisfactoryHeaderParser";
import { ClassExtensionContext } from "./SatisfactoryHeaderParser";
import { ClassBodyContext } from "./SatisfactoryHeaderParser";
import { ClassEntriesContext } from "./SatisfactoryHeaderParser";
import { ClassEntryContext } from "./SatisfactoryHeaderParser";
import { ClassVisibilityContext } from "./SatisfactoryHeaderParser";
import { ClassVisibilityModifierContext } from "./SatisfactoryHeaderParser";
import { FriendDeclarationContext } from "./SatisfactoryHeaderParser";
import { StatDeclarationContext } from "./SatisfactoryHeaderParser";
import { ClassMethodContext } from "./SatisfactoryHeaderParser";
import { ClassMethodEndContext } from "./SatisfactoryHeaderParser";
import { ClassMethodResultModifierContext } from "./SatisfactoryHeaderParser";
import { ClassInitializerListContext } from "./SatisfactoryHeaderParser";
import { ClassInitializerContext } from "./SatisfactoryHeaderParser";
import { ClassPropertyContext } from "./SatisfactoryHeaderParser";
import { ClassPropertyDefaultValueContext } from "./SatisfactoryHeaderParser";
import { LiteralExpressionContext } from "./SatisfactoryHeaderParser";
import { ClassPropertyArraySizeContext } from "./SatisfactoryHeaderParser";
import { NestedEnumContext } from "./SatisfactoryHeaderParser";
import { NestedEnumInheritanceContext } from "./SatisfactoryHeaderParser";
import { NestedEnumClassContext } from "./SatisfactoryHeaderParser";
import { NestedClassContext } from "./SatisfactoryHeaderParser";
import { NestedStructContext } from "./SatisfactoryHeaderParser";
import { EnumDeclarationContext } from "./SatisfactoryHeaderParser";
import { EnumHeaderContext } from "./SatisfactoryHeaderParser";
import { EnumBodyContext } from "./SatisfactoryHeaderParser";
import { EnumEntryContext } from "./SatisfactoryHeaderParser";
import { EnumValueContext } from "./SatisfactoryHeaderParser";
import { StaticFunctionDeclarationContext } from "./SatisfactoryHeaderParser";
import { StaticArrayDeclarationContext } from "./SatisfactoryHeaderParser";
import { StaticPropertyDeclarationContext } from "./SatisfactoryHeaderParser";
import { StaticInlineFunctionDeclarationContext } from "./SatisfactoryHeaderParser";
import { StaticMethodCallContext } from "./SatisfactoryHeaderParser";
import { TypedefContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedParensContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedParensInnerContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedBracesContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedBracesInnerContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedAnglesContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedAnglesInnerContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedSquaresContext } from "./SatisfactoryHeaderParser";
import { ContentWithNestedSquaresInnerContext } from "./SatisfactoryHeaderParser";
import { FunctionNameContext } from "./SatisfactoryHeaderParser";
import { FunctionModifierContext } from "./SatisfactoryHeaderParser";
import { NamespaceDeclarationContext } from "./SatisfactoryHeaderParser";
import { UsingNamespaceContext } from "./SatisfactoryHeaderParser";
import { UclassMacroContext } from "./SatisfactoryHeaderParser";
import { UenumMacroContext } from "./SatisfactoryHeaderParser";
import { UfunctionMacroContext } from "./SatisfactoryHeaderParser";
import { UinterfaceMacroContext } from "./SatisfactoryHeaderParser";
import { UmetaMacroContext } from "./SatisfactoryHeaderParser";
import { UParamMacroContext } from "./SatisfactoryHeaderParser";
import { UpropertyMacroContext } from "./SatisfactoryHeaderParser";
import { UstructMacroContext } from "./SatisfactoryHeaderParser";
import { UedeprecatedMacroContext } from "./SatisfactoryHeaderParser";
import { GeneratedBodyMacroContext } from "./SatisfactoryHeaderParser";
import { MacroPropertyListContext } from "./SatisfactoryHeaderParser";
import { MacroPropertyListEntriesContext } from "./SatisfactoryHeaderParser";
import { MacroPropertyContext } from "./SatisfactoryHeaderParser";
import { MacroPropertyPairContext } from "./SatisfactoryHeaderParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SatisfactoryHeaderParser`.
 */
export interface SatisfactoryHeaderParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.templateType`.
	 * @param ctx the parse tree
	 */
	enterTemplateType?: (ctx: TemplateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.templateType`.
	 * @param ctx the parse tree
	 */
	exitTemplateType?: (ctx: TemplateTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.typeModifier`.
	 * @param ctx the parse tree
	 */
	enterTypeModifier?: (ctx: TypeModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.typeModifier`.
	 * @param ctx the parse tree
	 */
	exitTypeModifier?: (ctx: TypeModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.typeReferenceType`.
	 * @param ctx the parse tree
	 */
	enterTypeReferenceType?: (ctx: TypeReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.typeReferenceType`.
	 * @param ctx the parse tree
	 */
	exitTypeReferenceType?: (ctx: TypeReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classHeader`.
	 * @param ctx the parse tree
	 */
	enterClassHeader?: (ctx: ClassHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classHeader`.
	 * @param ctx the parse tree
	 */
	exitClassHeader?: (ctx: ClassHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classMacro`.
	 * @param ctx the parse tree
	 */
	enterClassMacro?: (ctx: ClassMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classMacro`.
	 * @param ctx the parse tree
	 */
	exitClassMacro?: (ctx: ClassMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.templateDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.templateDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTemplateDeclaration?: (ctx: TemplateDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classKeyword`.
	 * @param ctx the parse tree
	 */
	enterClassKeyword?: (ctx: ClassKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classKeyword`.
	 * @param ctx the parse tree
	 */
	exitClassKeyword?: (ctx: ClassKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classInheritance`.
	 * @param ctx the parse tree
	 */
	enterClassInheritance?: (ctx: ClassInheritanceContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classInheritance`.
	 * @param ctx the parse tree
	 */
	exitClassInheritance?: (ctx: ClassInheritanceContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classExtensionList`.
	 * @param ctx the parse tree
	 */
	enterClassExtensionList?: (ctx: ClassExtensionListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classExtensionList`.
	 * @param ctx the parse tree
	 */
	exitClassExtensionList?: (ctx: ClassExtensionListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classExtension`.
	 * @param ctx the parse tree
	 */
	enterClassExtension?: (ctx: ClassExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classExtension`.
	 * @param ctx the parse tree
	 */
	exitClassExtension?: (ctx: ClassExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classEntries`.
	 * @param ctx the parse tree
	 */
	enterClassEntries?: (ctx: ClassEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classEntries`.
	 * @param ctx the parse tree
	 */
	exitClassEntries?: (ctx: ClassEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classEntry`.
	 * @param ctx the parse tree
	 */
	enterClassEntry?: (ctx: ClassEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classEntry`.
	 * @param ctx the parse tree
	 */
	exitClassEntry?: (ctx: ClassEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classVisibility`.
	 * @param ctx the parse tree
	 */
	enterClassVisibility?: (ctx: ClassVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classVisibility`.
	 * @param ctx the parse tree
	 */
	exitClassVisibility?: (ctx: ClassVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classVisibilityModifier`.
	 * @param ctx the parse tree
	 */
	enterClassVisibilityModifier?: (ctx: ClassVisibilityModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classVisibilityModifier`.
	 * @param ctx the parse tree
	 */
	exitClassVisibilityModifier?: (ctx: ClassVisibilityModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.friendDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFriendDeclaration?: (ctx: FriendDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.friendDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFriendDeclaration?: (ctx: FriendDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.statDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStatDeclaration?: (ctx: StatDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.statDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStatDeclaration?: (ctx: StatDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classMethod`.
	 * @param ctx the parse tree
	 */
	enterClassMethod?: (ctx: ClassMethodContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classMethod`.
	 * @param ctx the parse tree
	 */
	exitClassMethod?: (ctx: ClassMethodContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classMethodEnd`.
	 * @param ctx the parse tree
	 */
	enterClassMethodEnd?: (ctx: ClassMethodEndContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classMethodEnd`.
	 * @param ctx the parse tree
	 */
	exitClassMethodEnd?: (ctx: ClassMethodEndContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classMethodResultModifier`.
	 * @param ctx the parse tree
	 */
	enterClassMethodResultModifier?: (ctx: ClassMethodResultModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classMethodResultModifier`.
	 * @param ctx the parse tree
	 */
	exitClassMethodResultModifier?: (ctx: ClassMethodResultModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classInitializerList`.
	 * @param ctx the parse tree
	 */
	enterClassInitializerList?: (ctx: ClassInitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classInitializerList`.
	 * @param ctx the parse tree
	 */
	exitClassInitializerList?: (ctx: ClassInitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classInitializer`.
	 * @param ctx the parse tree
	 */
	enterClassInitializer?: (ctx: ClassInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classInitializer`.
	 * @param ctx the parse tree
	 */
	exitClassInitializer?: (ctx: ClassInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classProperty`.
	 * @param ctx the parse tree
	 */
	enterClassProperty?: (ctx: ClassPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classProperty`.
	 * @param ctx the parse tree
	 */
	exitClassProperty?: (ctx: ClassPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classPropertyDefaultValue`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyDefaultValue?: (ctx: ClassPropertyDefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classPropertyDefaultValue`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyDefaultValue?: (ctx: ClassPropertyDefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.literalExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.literalExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.classPropertyArraySize`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyArraySize?: (ctx: ClassPropertyArraySizeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.classPropertyArraySize`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyArraySize?: (ctx: ClassPropertyArraySizeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.nestedEnum`.
	 * @param ctx the parse tree
	 */
	enterNestedEnum?: (ctx: NestedEnumContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.nestedEnum`.
	 * @param ctx the parse tree
	 */
	exitNestedEnum?: (ctx: NestedEnumContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.nestedEnumInheritance`.
	 * @param ctx the parse tree
	 */
	enterNestedEnumInheritance?: (ctx: NestedEnumInheritanceContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.nestedEnumInheritance`.
	 * @param ctx the parse tree
	 */
	exitNestedEnumInheritance?: (ctx: NestedEnumInheritanceContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.nestedEnumClass`.
	 * @param ctx the parse tree
	 */
	enterNestedEnumClass?: (ctx: NestedEnumClassContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.nestedEnumClass`.
	 * @param ctx the parse tree
	 */
	exitNestedEnumClass?: (ctx: NestedEnumClassContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.nestedClass`.
	 * @param ctx the parse tree
	 */
	enterNestedClass?: (ctx: NestedClassContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.nestedClass`.
	 * @param ctx the parse tree
	 */
	exitNestedClass?: (ctx: NestedClassContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.nestedStruct`.
	 * @param ctx the parse tree
	 */
	enterNestedStruct?: (ctx: NestedStructContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.nestedStruct`.
	 * @param ctx the parse tree
	 */
	exitNestedStruct?: (ctx: NestedStructContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.enumHeader`.
	 * @param ctx the parse tree
	 */
	enterEnumHeader?: (ctx: EnumHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.enumHeader`.
	 * @param ctx the parse tree
	 */
	exitEnumHeader?: (ctx: EnumHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	enterEnumEntry?: (ctx: EnumEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	exitEnumEntry?: (ctx: EnumEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.staticFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticFunctionDeclaration?: (ctx: StaticFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.staticFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticFunctionDeclaration?: (ctx: StaticFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.staticArrayDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticArrayDeclaration?: (ctx: StaticArrayDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.staticArrayDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticArrayDeclaration?: (ctx: StaticArrayDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.staticPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticPropertyDeclaration?: (ctx: StaticPropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.staticPropertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticPropertyDeclaration?: (ctx: StaticPropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.staticInlineFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticInlineFunctionDeclaration?: (ctx: StaticInlineFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.staticInlineFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticInlineFunctionDeclaration?: (ctx: StaticInlineFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.staticMethodCall`.
	 * @param ctx the parse tree
	 */
	enterStaticMethodCall?: (ctx: StaticMethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.staticMethodCall`.
	 * @param ctx the parse tree
	 */
	exitStaticMethodCall?: (ctx: StaticMethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.typedef`.
	 * @param ctx the parse tree
	 */
	enterTypedef?: (ctx: TypedefContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.typedef`.
	 * @param ctx the parse tree
	 */
	exitTypedef?: (ctx: TypedefContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedParens`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedParens?: (ctx: ContentWithNestedParensContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedParens`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedParens?: (ctx: ContentWithNestedParensContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedParensInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedParensInner?: (ctx: ContentWithNestedParensInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedParensInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedParensInner?: (ctx: ContentWithNestedParensInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedBraces`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedBraces?: (ctx: ContentWithNestedBracesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedBraces`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedBraces?: (ctx: ContentWithNestedBracesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedBracesInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedBracesInner?: (ctx: ContentWithNestedBracesInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedBracesInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedBracesInner?: (ctx: ContentWithNestedBracesInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedAngles`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedAngles?: (ctx: ContentWithNestedAnglesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedAngles`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedAngles?: (ctx: ContentWithNestedAnglesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedAnglesInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedAnglesInner?: (ctx: ContentWithNestedAnglesInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedAnglesInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedAnglesInner?: (ctx: ContentWithNestedAnglesInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedSquares`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedSquares?: (ctx: ContentWithNestedSquaresContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedSquares`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedSquares?: (ctx: ContentWithNestedSquaresContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedSquaresInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedSquaresInner?: (ctx: ContentWithNestedSquaresInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.contentWithNestedSquaresInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedSquaresInner?: (ctx: ContentWithNestedSquaresInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionModifier?: (ctx: FunctionModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionModifier?: (ctx: FunctionModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.usingNamespace`.
	 * @param ctx the parse tree
	 */
	enterUsingNamespace?: (ctx: UsingNamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.usingNamespace`.
	 * @param ctx the parse tree
	 */
	exitUsingNamespace?: (ctx: UsingNamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.uclassMacro`.
	 * @param ctx the parse tree
	 */
	enterUclassMacro?: (ctx: UclassMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.uclassMacro`.
	 * @param ctx the parse tree
	 */
	exitUclassMacro?: (ctx: UclassMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.uenumMacro`.
	 * @param ctx the parse tree
	 */
	enterUenumMacro?: (ctx: UenumMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.uenumMacro`.
	 * @param ctx the parse tree
	 */
	exitUenumMacro?: (ctx: UenumMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.ufunctionMacro`.
	 * @param ctx the parse tree
	 */
	enterUfunctionMacro?: (ctx: UfunctionMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.ufunctionMacro`.
	 * @param ctx the parse tree
	 */
	exitUfunctionMacro?: (ctx: UfunctionMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.uinterfaceMacro`.
	 * @param ctx the parse tree
	 */
	enterUinterfaceMacro?: (ctx: UinterfaceMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.uinterfaceMacro`.
	 * @param ctx the parse tree
	 */
	exitUinterfaceMacro?: (ctx: UinterfaceMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.umetaMacro`.
	 * @param ctx the parse tree
	 */
	enterUmetaMacro?: (ctx: UmetaMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.umetaMacro`.
	 * @param ctx the parse tree
	 */
	exitUmetaMacro?: (ctx: UmetaMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.uParamMacro`.
	 * @param ctx the parse tree
	 */
	enterUParamMacro?: (ctx: UParamMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.uParamMacro`.
	 * @param ctx the parse tree
	 */
	exitUParamMacro?: (ctx: UParamMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.upropertyMacro`.
	 * @param ctx the parse tree
	 */
	enterUpropertyMacro?: (ctx: UpropertyMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.upropertyMacro`.
	 * @param ctx the parse tree
	 */
	exitUpropertyMacro?: (ctx: UpropertyMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.ustructMacro`.
	 * @param ctx the parse tree
	 */
	enterUstructMacro?: (ctx: UstructMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.ustructMacro`.
	 * @param ctx the parse tree
	 */
	exitUstructMacro?: (ctx: UstructMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.uedeprecatedMacro`.
	 * @param ctx the parse tree
	 */
	enterUedeprecatedMacro?: (ctx: UedeprecatedMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.uedeprecatedMacro`.
	 * @param ctx the parse tree
	 */
	exitUedeprecatedMacro?: (ctx: UedeprecatedMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.generatedBodyMacro`.
	 * @param ctx the parse tree
	 */
	enterGeneratedBodyMacro?: (ctx: GeneratedBodyMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.generatedBodyMacro`.
	 * @param ctx the parse tree
	 */
	exitGeneratedBodyMacro?: (ctx: GeneratedBodyMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.macroPropertyList`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyList?: (ctx: MacroPropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.macroPropertyList`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyList?: (ctx: MacroPropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.macroPropertyListEntries`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyListEntries?: (ctx: MacroPropertyListEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.macroPropertyListEntries`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyListEntries?: (ctx: MacroPropertyListEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.macroProperty`.
	 * @param ctx the parse tree
	 */
	enterMacroProperty?: (ctx: MacroPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.macroProperty`.
	 * @param ctx the parse tree
	 */
	exitMacroProperty?: (ctx: MacroPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParser.macroPropertyPair`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyPair?: (ctx: MacroPropertyPairContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParser.macroPropertyPair`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyPair?: (ctx: MacroPropertyPairContext) => void;
}

