import { ANTLRInputStream, CommonTokenStream, Token, Lexer, ParserRuleContext } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

import { SatisfactoryHeaderLexer } from './generated/grammar/SatisfactoryHeaderLexer';
import { SatisfactoryHeaderParserListener } from './generated/grammar/SatisfactoryHeaderParserListener';
import {
  SatisfactoryHeaderParserParser,
  ClassMethodContext,
  ClassPropertyContext,
  ClassDeclarationContext,
  EnumDeclarationContext,
  EnumEntryContext,
  ClassExtensionContext,
  MacroPropertyListContext,
  MacroPropertyContext,
  LiteralContext,
} from './generated/grammar/SatisfactoryHeaderParserParser';
import { ClassMetadata, EnumMetadata } from './interface';

export function parseHeader(contents: string) {
  const stream = new ANTLRInputStream(contents);
  const lexer = new SatisfactoryHeaderLexer(stream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new SatisfactoryHeaderParserParser(tokens);
  const listener = new Listener(tokens);

  ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, parser.file());

  return listener.result;
}

export function printTokens(contents: string) {
  const stream = new ANTLRInputStream(contents);
  const lexer = new SatisfactoryHeaderLexer(stream);

  let token = lexer.nextToken();
  while (token.type !== Token.EOF) {
    const name = SatisfactoryHeaderLexer.VOCABULARY.getDisplayName(token.type);
    const data = JSON.stringify(token.text);
    process.stderr.write(`${name}::${data}\n`);
    token = lexer.nextToken();
  }
}

type EntryType = ClassMetadata | EnumMetadata;

class Listener implements SatisfactoryHeaderParserListener {
  public result = [] as EntryType[];
  _currentEntry: EntryType | undefined;

  constructor(private _tokens: CommonTokenStream) {}

  // Classes

  enterClassDeclaration(context: ClassDeclarationContext) {
    const header = context.classHeader();
    const macro = header.classMacro();
    let category;
    if (macro?.uclassMacro()) {
      category = 'UCLASS';
    } else if (macro?.uinterfaceMacro()) {
      category = 'UINTERFACE';
    } else if (macro?.ustructMacro()) {
      category = 'USTRUCT';
    }

    this._currentEntry = {
      kind: 'class',
      name: header.identifier().text,
      category,
      comment: this._getComment(context),
      extends: [],
      methods: [],
      properties: [],
    };
  }

  enterClassExtension(context: ClassExtensionContext) {
    this._currentClass().extends.push(context.identifier().text);
  }

  enterClassMethod(context: ClassMethodContext) {
    this._currentClass().methods.push({
      name: context.functionName().text,
      comment: this._getComment(context),
      returnType: context.typeDeclaration()?.text,
    });
  }

  enterClassProperty(context: ClassPropertyContext) {
    this._currentClass().properties.push({
      name: context.identifier().text,
      comment: this._getComment(context),
      type: context.typeDeclaration()?.text,
    });
  }

  exitClassDeclaration() {
    this.result.push(this._currentEntry);
    this._currentEntry = undefined;
  }

  // Enums

  enterEnumDeclaration(context: EnumDeclarationContext) {
    this._currentEntry = {
      kind: 'enum',
      name: context.enumHeader().identifier().text,
      comment: this._getComment(context),
      entries: [],
    };
  }

  enterEnumEntry(context: EnumEntryContext) {
    const meta = this._macroProperties(context.umetaMacro());

    this._currentEnum().entries.push({
      name: context.identifier().text,
      displayName: meta['DisplayName'],
      comment: this._getComment(context),
    });
  }

  exitEnumDeclaration() {
    this.result.push(this._currentEntry);
    this._currentEntry = undefined;
  }

  // Helpers

  _getComment({ start, stop }: ParserRuleContext) {
    let linesBefore = this._tokens.getHiddenTokensToLeft(start.tokenIndex).filter(line => {
      // Skip lines if they are at the end of a line of code, rather than on
      // their own.
      if (line.tokenIndex === 0) return true;
      const prevToken = this._tokens.get(line.tokenIndex - 1);
      if (prevToken.channel === Lexer.DEFAULT_TOKEN_CHANNEL && prevToken.line === line.line) {
        return false;
      }
      return true;
      // return this._tokens.get(line.tokenIndex - 1).channel
    });
    if (linesBefore.length) {
      let lineNumber = linesBefore[linesBefore.length - 1].line;
      linesBefore = linesBefore.filter(line => {
        // Is there a gap?
        if (line.line < lineNumber - 1) return false;
        lineNumber = line.line;
        return true;
      });
    }

    // Also extract any comments at the end of the line of this token.
    let nextLine = stop;
    while (nextLine.line === stop.line) {
      try {
        nextLine = this._tokens.get(nextLine.tokenIndex + 1);
      } catch (error) {
        break;
      }
    }
    const linesAfter = this._tokens.getHiddenTokensToLeft(nextLine.tokenIndex);

    const comment = [...linesBefore, ...linesAfter]
      .map(t => t.text)
      .map(t => t.replace(/[ \t]+$/, ''))
      .join('\n');

    return comment === '' ? undefined : comment;
  }

  _currentClass(): ClassMetadata {
    if (this._currentEntry?.kind !== 'class') {
      throw new Error(`Expected to be inside a class declaration`);
    }
    return this._currentEntry;
  }

  _currentEnum(): EnumMetadata {
    if (this._currentEntry?.kind !== 'enum') {
      throw new Error(`Expected to be inside a enum declaration`);
    }
    return this._currentEntry;
  }

  _macroProperties(context?: { text: string; macroPropertyList: () => MacroPropertyListContext }) {
    if (!context) return {};
    let properties = {} as Record<string, any>;

    let entries = context.macroPropertyList().macroPropertyListEntries();
    while (entries) {
      const value = this._macroPropertyValue(entries.macroProperty());
      properties = { ...properties, ...value };

      entries = entries.macroPropertyListEntries();
    }

    return properties;
  }

  _macroPropertyValue(context: MacroPropertyContext) {
    if (context.identifier()) {
      return { [context.identifier().text]: true };
    } else if (context.literal()) {
      return this._literalValue(context.literal());
    } else if (context.macroPropertyPair()) {
      const pair = context.macroPropertyPair();
      return { [pair.identifier().text]: this._macroPropertyValue(pair.macroProperty()) };
    } else {
      throw new Error(`Don't know how to handle macros like ${context.text} yet`);
    }
  }

  _literalValue(context: LiteralContext) {
    if (context.numericLiteral()) {
      return parseFloat(context.numericLiteral().text);
    } else if (context.stringLiteral()) {
      const text = context.stringLiteral().text;
      return text.substr(1, text.length - 2);
    } else if (context.booleanLiteral()) {
      return context.booleanLiteral().text === 'true';
    } else {
      throw new Error(`Don't know how to extract a literal value from ${context.text}`);
    }
  }
}
