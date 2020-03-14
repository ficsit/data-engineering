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
    console.log(
      SatisfactoryHeaderLexer.VOCABULARY.getDisplayName(token.type),
      '::',
      JSON.stringify(token.text),
    );
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
    this._currentEntry = {
      name: context.classHeader().identifier().text,
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
      name: context.identifier().text,
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
      name: context.enumHeader().identifier().text,
      comment: this._getComment(context),
      entries: [],
    };
  }

  enterEnumEntry(context: EnumEntryContext) {
    this._currentEnum().entries.push({
      name: context.identifier().text,
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
      nextLine = this._tokens.get(nextLine.tokenIndex + 1);
    }
    const linesAfter = this._tokens.getHiddenTokensToLeft(nextLine.tokenIndex);

    return [...linesBefore, ...linesAfter]
      .map(t => t.text)
      .map(t => t.replace(/[ \t]+$/, ''))
      .join('\n');
  }

  _currentClass(): ClassMetadata {
    if (!this._currentEntry || !('properties' in this._currentEntry)) {
      throw new Error(`Expected to be inside a class declaration`);
    }
    return this._currentEntry;
  }

  _currentEnum(): EnumMetadata {
    if (!this._currentEntry || !('entries' in this._currentEntry)) {
      throw new Error(`Expected to be inside a class declaration`);
    }
    return this._currentEntry;
  }
}
