import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

import { SatisfactoryHeaderLexer } from './generated/grammar/SatisfactoryHeaderLexer';
import { SatisfactoryHeaderParserListener } from './generated/grammar/SatisfactoryHeaderParserListener';
import {
  SatisfactoryHeaderParserParser,
  ClassMethodContext,
  ClassPropertyContext,
  ClassDeclarationContext,
} from './generated/grammar/SatisfactoryHeaderParserParser';
import { ClassMetadata } from './interface';

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

type EntryType = ClassMetadata;

class Listener implements SatisfactoryHeaderParserListener {
  public result = [] as EntryType[];
  _currentEntry: EntryType | undefined;

  constructor(private _tokens: CommonTokenStream) {}

  enterClassDeclaration(context: ClassDeclarationContext) {
    const classMetadata = {
      name: context.classHeader().identifier().text,
      comment: this._getComment(context.start.tokenIndex),
      methods: [],
      properties: [],
    };

    this.result.push(classMetadata);
    this._currentEntry = classMetadata;
  }

  enterClassMethod(context: ClassMethodContext) {
    this._currentClass().methods.push({
      name: context.identifier().text,
      comment: this._getComment(context.start.tokenIndex),
      returnType: context.typeDeclaration()?.text,
    });
  }

  enterClassProperty(context: ClassPropertyContext) {
    this._currentClass().properties.push({
      name: context.identifier().text,
      comment: this._getComment(context.start.tokenIndex),
      type: context.typeDeclaration()?.text,
    });
  }

  exitClassDeclaration() {
    this._currentEntry = undefined;
  }

  _getComment(beforeIndex: number) {
    return this._tokens
      .getHiddenTokensToLeft(beforeIndex)
      .map(t => t.text)
      .map(t => t.replace(/[ \t]+$/, ''))
      .join('\n');
  }

  _currentClass(): ClassMetadata {
    if (!this._currentEntry) {
      throw new Error(`Expected to be inside a class declaration`);
    }
    return this._currentEntry;
  }
}
