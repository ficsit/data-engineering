import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import * as fs from 'fs';

import { CPP14Lexer } from './grammar/CPP14Lexer';
import { CPP14Listener } from './grammar/CPP14Listener';
import { CPP14Parser } from './grammar/CPP14Parser';

function parse(header: string) {
  console.log('parsing:', header);
  const contents = fs.readFileSync(header, 'utf-8');
  const inputStream = new ANTLRInputStream(contents);
  const lexer = new CPP14Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new CPP14Parser(tokenStream);

  const listener = new GrammarListener();
  ParseTreeWalker.DEFAULT.walk(listener, parser.statement());
}

export class GrammarListener implements CPP14Listener, ParseTreeListener {
  enterEveryRule(context: ParserRuleContext) {
    console.log(CPP14Parser.ruleNames[context.ruleIndex], context.text);
  }
}

parse(process.argv[2]);
