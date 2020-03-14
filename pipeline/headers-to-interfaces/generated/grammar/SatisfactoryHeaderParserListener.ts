// Generated from ./grammar/SatisfactoryHeaderParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./SatisfactoryHeaderParserParser";
import { ElementContext } from "./SatisfactoryHeaderParserParser";
import { ValueContext } from "./SatisfactoryHeaderParserParser";
import { LiteralContext } from "./SatisfactoryHeaderParserParser";
import { IdentifierContext } from "./SatisfactoryHeaderParserParser";
import { StringLiteralContext } from "./SatisfactoryHeaderParserParser";
import { NumericLiteralContext } from "./SatisfactoryHeaderParserParser";
import { BooleanLiteralContext } from "./SatisfactoryHeaderParserParser";
import { TypeDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { TemplateTypeContext } from "./SatisfactoryHeaderParserParser";
import { TemplateTypeListContext } from "./SatisfactoryHeaderParserParser";
import { TypeModifierContext } from "./SatisfactoryHeaderParserParser";
import { TypeReferenceTypeContext } from "./SatisfactoryHeaderParserParser";
import { ClassDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { ClassHeaderContext } from "./SatisfactoryHeaderParserParser";
import { ClassMacroContext } from "./SatisfactoryHeaderParserParser";
import { ClassKeywordContext } from "./SatisfactoryHeaderParserParser";
import { ClassInheritanceContext } from "./SatisfactoryHeaderParserParser";
import { ClassExtensionListContext } from "./SatisfactoryHeaderParserParser";
import { ClassExtensionContext } from "./SatisfactoryHeaderParserParser";
import { ClassBodyContext } from "./SatisfactoryHeaderParserParser";
import { ClassEntriesContext } from "./SatisfactoryHeaderParserParser";
import { ClassEntryContext } from "./SatisfactoryHeaderParserParser";
import { ClassVisibilityContext } from "./SatisfactoryHeaderParserParser";
import { ClassVisibilityModifierContext } from "./SatisfactoryHeaderParserParser";
import { FriendDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { StatDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { ClassMethodContext } from "./SatisfactoryHeaderParserParser";
import { ClassMethodEndContext } from "./SatisfactoryHeaderParserParser";
import { ClassMethodResultModifierContext } from "./SatisfactoryHeaderParserParser";
import { ClassInitializerListContext } from "./SatisfactoryHeaderParserParser";
import { ClassInitializerContext } from "./SatisfactoryHeaderParserParser";
import { ClassPropertyContext } from "./SatisfactoryHeaderParserParser";
import { ClassPropertyDefaultValueContext } from "./SatisfactoryHeaderParserParser";
import { ClassPropertyArraySizeDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { ClassPropertyArraySizeContext } from "./SatisfactoryHeaderParserParser";
import { EnumDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { EnumHeaderContext } from "./SatisfactoryHeaderParserParser";
import { EnumBodyContext } from "./SatisfactoryHeaderParserParser";
import { EnumEntryContext } from "./SatisfactoryHeaderParserParser";
import { EnumValueContext } from "./SatisfactoryHeaderParserParser";
import { StaticFunctionDeclarationContext } from "./SatisfactoryHeaderParserParser";
import { StaticMethodCallContext } from "./SatisfactoryHeaderParserParser";
import { TypedefContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedParensContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedParensInnerContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedBracesContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedBracesInnerContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedAnglesContext } from "./SatisfactoryHeaderParserParser";
import { ContentWithNestedAnglesInnerContext } from "./SatisfactoryHeaderParserParser";
import { FunctionNameContext } from "./SatisfactoryHeaderParserParser";
import { FunctionModifierContext } from "./SatisfactoryHeaderParserParser";
import { UclassMacroContext } from "./SatisfactoryHeaderParserParser";
import { UenumMacroContext } from "./SatisfactoryHeaderParserParser";
import { UfunctionMacroContext } from "./SatisfactoryHeaderParserParser";
import { UinterfaceMacroContext } from "./SatisfactoryHeaderParserParser";
import { UmetaMacroContext } from "./SatisfactoryHeaderParserParser";
import { UParamMacroContext } from "./SatisfactoryHeaderParserParser";
import { UpropertyMacroContext } from "./SatisfactoryHeaderParserParser";
import { UstructMacroContext } from "./SatisfactoryHeaderParserParser";
import { UedeprecatedMacroContext } from "./SatisfactoryHeaderParserParser";
import { GeneratedBodyMacroContext } from "./SatisfactoryHeaderParserParser";
import { MacroPropertyListContext } from "./SatisfactoryHeaderParserParser";
import { MacroPropertyListEntriesContext } from "./SatisfactoryHeaderParserParser";
import { MacroPropertyContext } from "./SatisfactoryHeaderParserParser";
import { MacroPropertyPairContext } from "./SatisfactoryHeaderParserParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SatisfactoryHeaderParserParser`.
 */
export interface SatisfactoryHeaderParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.numericLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.templateType`.
	 * @param ctx the parse tree
	 */
	enterTemplateType?: (ctx: TemplateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.templateType`.
	 * @param ctx the parse tree
	 */
	exitTemplateType?: (ctx: TemplateTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.templateTypeList`.
	 * @param ctx the parse tree
	 */
	enterTemplateTypeList?: (ctx: TemplateTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.templateTypeList`.
	 * @param ctx the parse tree
	 */
	exitTemplateTypeList?: (ctx: TemplateTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.typeModifier`.
	 * @param ctx the parse tree
	 */
	enterTypeModifier?: (ctx: TypeModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.typeModifier`.
	 * @param ctx the parse tree
	 */
	exitTypeModifier?: (ctx: TypeModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.typeReferenceType`.
	 * @param ctx the parse tree
	 */
	enterTypeReferenceType?: (ctx: TypeReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.typeReferenceType`.
	 * @param ctx the parse tree
	 */
	exitTypeReferenceType?: (ctx: TypeReferenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classHeader`.
	 * @param ctx the parse tree
	 */
	enterClassHeader?: (ctx: ClassHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classHeader`.
	 * @param ctx the parse tree
	 */
	exitClassHeader?: (ctx: ClassHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classMacro`.
	 * @param ctx the parse tree
	 */
	enterClassMacro?: (ctx: ClassMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classMacro`.
	 * @param ctx the parse tree
	 */
	exitClassMacro?: (ctx: ClassMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classKeyword`.
	 * @param ctx the parse tree
	 */
	enterClassKeyword?: (ctx: ClassKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classKeyword`.
	 * @param ctx the parse tree
	 */
	exitClassKeyword?: (ctx: ClassKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classInheritance`.
	 * @param ctx the parse tree
	 */
	enterClassInheritance?: (ctx: ClassInheritanceContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classInheritance`.
	 * @param ctx the parse tree
	 */
	exitClassInheritance?: (ctx: ClassInheritanceContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classExtensionList`.
	 * @param ctx the parse tree
	 */
	enterClassExtensionList?: (ctx: ClassExtensionListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classExtensionList`.
	 * @param ctx the parse tree
	 */
	exitClassExtensionList?: (ctx: ClassExtensionListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classExtension`.
	 * @param ctx the parse tree
	 */
	enterClassExtension?: (ctx: ClassExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classExtension`.
	 * @param ctx the parse tree
	 */
	exitClassExtension?: (ctx: ClassExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classEntries`.
	 * @param ctx the parse tree
	 */
	enterClassEntries?: (ctx: ClassEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classEntries`.
	 * @param ctx the parse tree
	 */
	exitClassEntries?: (ctx: ClassEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classEntry`.
	 * @param ctx the parse tree
	 */
	enterClassEntry?: (ctx: ClassEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classEntry`.
	 * @param ctx the parse tree
	 */
	exitClassEntry?: (ctx: ClassEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classVisibility`.
	 * @param ctx the parse tree
	 */
	enterClassVisibility?: (ctx: ClassVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classVisibility`.
	 * @param ctx the parse tree
	 */
	exitClassVisibility?: (ctx: ClassVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classVisibilityModifier`.
	 * @param ctx the parse tree
	 */
	enterClassVisibilityModifier?: (ctx: ClassVisibilityModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classVisibilityModifier`.
	 * @param ctx the parse tree
	 */
	exitClassVisibilityModifier?: (ctx: ClassVisibilityModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.friendDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFriendDeclaration?: (ctx: FriendDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.friendDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFriendDeclaration?: (ctx: FriendDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.statDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStatDeclaration?: (ctx: StatDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.statDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStatDeclaration?: (ctx: StatDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classMethod`.
	 * @param ctx the parse tree
	 */
	enterClassMethod?: (ctx: ClassMethodContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classMethod`.
	 * @param ctx the parse tree
	 */
	exitClassMethod?: (ctx: ClassMethodContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classMethodEnd`.
	 * @param ctx the parse tree
	 */
	enterClassMethodEnd?: (ctx: ClassMethodEndContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classMethodEnd`.
	 * @param ctx the parse tree
	 */
	exitClassMethodEnd?: (ctx: ClassMethodEndContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classMethodResultModifier`.
	 * @param ctx the parse tree
	 */
	enterClassMethodResultModifier?: (ctx: ClassMethodResultModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classMethodResultModifier`.
	 * @param ctx the parse tree
	 */
	exitClassMethodResultModifier?: (ctx: ClassMethodResultModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classInitializerList`.
	 * @param ctx the parse tree
	 */
	enterClassInitializerList?: (ctx: ClassInitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classInitializerList`.
	 * @param ctx the parse tree
	 */
	exitClassInitializerList?: (ctx: ClassInitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classInitializer`.
	 * @param ctx the parse tree
	 */
	enterClassInitializer?: (ctx: ClassInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classInitializer`.
	 * @param ctx the parse tree
	 */
	exitClassInitializer?: (ctx: ClassInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classProperty`.
	 * @param ctx the parse tree
	 */
	enterClassProperty?: (ctx: ClassPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classProperty`.
	 * @param ctx the parse tree
	 */
	exitClassProperty?: (ctx: ClassPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyDefaultValue`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyDefaultValue?: (ctx: ClassPropertyDefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyDefaultValue`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyDefaultValue?: (ctx: ClassPropertyDefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyArraySizeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyArraySizeDeclaration?: (ctx: ClassPropertyArraySizeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyArraySizeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyArraySizeDeclaration?: (ctx: ClassPropertyArraySizeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyArraySize`.
	 * @param ctx the parse tree
	 */
	enterClassPropertyArraySize?: (ctx: ClassPropertyArraySizeContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.classPropertyArraySize`.
	 * @param ctx the parse tree
	 */
	exitClassPropertyArraySize?: (ctx: ClassPropertyArraySizeContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.enumHeader`.
	 * @param ctx the parse tree
	 */
	enterEnumHeader?: (ctx: EnumHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.enumHeader`.
	 * @param ctx the parse tree
	 */
	exitEnumHeader?: (ctx: EnumHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	enterEnumEntry?: (ctx: EnumEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	exitEnumEntry?: (ctx: EnumEntryContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.staticFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStaticFunctionDeclaration?: (ctx: StaticFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.staticFunctionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStaticFunctionDeclaration?: (ctx: StaticFunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.staticMethodCall`.
	 * @param ctx the parse tree
	 */
	enterStaticMethodCall?: (ctx: StaticMethodCallContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.staticMethodCall`.
	 * @param ctx the parse tree
	 */
	exitStaticMethodCall?: (ctx: StaticMethodCallContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.typedef`.
	 * @param ctx the parse tree
	 */
	enterTypedef?: (ctx: TypedefContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.typedef`.
	 * @param ctx the parse tree
	 */
	exitTypedef?: (ctx: TypedefContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedParens`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedParens?: (ctx: ContentWithNestedParensContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedParens`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedParens?: (ctx: ContentWithNestedParensContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedParensInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedParensInner?: (ctx: ContentWithNestedParensInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedParensInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedParensInner?: (ctx: ContentWithNestedParensInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedBraces`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedBraces?: (ctx: ContentWithNestedBracesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedBraces`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedBraces?: (ctx: ContentWithNestedBracesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedBracesInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedBracesInner?: (ctx: ContentWithNestedBracesInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedBracesInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedBracesInner?: (ctx: ContentWithNestedBracesInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedAngles`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedAngles?: (ctx: ContentWithNestedAnglesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedAngles`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedAngles?: (ctx: ContentWithNestedAnglesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedAnglesInner`.
	 * @param ctx the parse tree
	 */
	enterContentWithNestedAnglesInner?: (ctx: ContentWithNestedAnglesInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.contentWithNestedAnglesInner`.
	 * @param ctx the parse tree
	 */
	exitContentWithNestedAnglesInner?: (ctx: ContentWithNestedAnglesInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionModifier?: (ctx: FunctionModifierContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionModifier?: (ctx: FunctionModifierContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.uclassMacro`.
	 * @param ctx the parse tree
	 */
	enterUclassMacro?: (ctx: UclassMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.uclassMacro`.
	 * @param ctx the parse tree
	 */
	exitUclassMacro?: (ctx: UclassMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.uenumMacro`.
	 * @param ctx the parse tree
	 */
	enterUenumMacro?: (ctx: UenumMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.uenumMacro`.
	 * @param ctx the parse tree
	 */
	exitUenumMacro?: (ctx: UenumMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.ufunctionMacro`.
	 * @param ctx the parse tree
	 */
	enterUfunctionMacro?: (ctx: UfunctionMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.ufunctionMacro`.
	 * @param ctx the parse tree
	 */
	exitUfunctionMacro?: (ctx: UfunctionMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.uinterfaceMacro`.
	 * @param ctx the parse tree
	 */
	enterUinterfaceMacro?: (ctx: UinterfaceMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.uinterfaceMacro`.
	 * @param ctx the parse tree
	 */
	exitUinterfaceMacro?: (ctx: UinterfaceMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.umetaMacro`.
	 * @param ctx the parse tree
	 */
	enterUmetaMacro?: (ctx: UmetaMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.umetaMacro`.
	 * @param ctx the parse tree
	 */
	exitUmetaMacro?: (ctx: UmetaMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.uParamMacro`.
	 * @param ctx the parse tree
	 */
	enterUParamMacro?: (ctx: UParamMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.uParamMacro`.
	 * @param ctx the parse tree
	 */
	exitUParamMacro?: (ctx: UParamMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.upropertyMacro`.
	 * @param ctx the parse tree
	 */
	enterUpropertyMacro?: (ctx: UpropertyMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.upropertyMacro`.
	 * @param ctx the parse tree
	 */
	exitUpropertyMacro?: (ctx: UpropertyMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.ustructMacro`.
	 * @param ctx the parse tree
	 */
	enterUstructMacro?: (ctx: UstructMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.ustructMacro`.
	 * @param ctx the parse tree
	 */
	exitUstructMacro?: (ctx: UstructMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.uedeprecatedMacro`.
	 * @param ctx the parse tree
	 */
	enterUedeprecatedMacro?: (ctx: UedeprecatedMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.uedeprecatedMacro`.
	 * @param ctx the parse tree
	 */
	exitUedeprecatedMacro?: (ctx: UedeprecatedMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.generatedBodyMacro`.
	 * @param ctx the parse tree
	 */
	enterGeneratedBodyMacro?: (ctx: GeneratedBodyMacroContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.generatedBodyMacro`.
	 * @param ctx the parse tree
	 */
	exitGeneratedBodyMacro?: (ctx: GeneratedBodyMacroContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyList`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyList?: (ctx: MacroPropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyList`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyList?: (ctx: MacroPropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyListEntries`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyListEntries?: (ctx: MacroPropertyListEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyListEntries`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyListEntries?: (ctx: MacroPropertyListEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.macroProperty`.
	 * @param ctx the parse tree
	 */
	enterMacroProperty?: (ctx: MacroPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.macroProperty`.
	 * @param ctx the parse tree
	 */
	exitMacroProperty?: (ctx: MacroPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyPair`.
	 * @param ctx the parse tree
	 */
	enterMacroPropertyPair?: (ctx: MacroPropertyPairContext) => void;
	/**
	 * Exit a parse tree produced by `SatisfactoryHeaderParserParser.macroPropertyPair`.
	 * @param ctx the parse tree
	 */
	exitMacroPropertyPair?: (ctx: MacroPropertyPairContext) => void;
}

