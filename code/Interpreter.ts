class Context {}

interface AbstractExpression {
  interpret(context: Context): void;
}

class TerminalExpression implements AbstractExpression {
  public interpret(context: Context): void {
    console.log("`interpret` method of TerminalExpression called");
  }
}

class NonterminalExpression implements AbstractExpression {
  public interpret(context: Context): void {
    console.log("`interpret` method of NonterminalExpression called");
  }
}

export function interpreter(): void {
  var context: Context = new Context(),
    list = [];

  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new NonterminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new TerminalExpression());

  list.map((exp: AbstractExpression) => {
    exp.interpret(context);
  });
}
