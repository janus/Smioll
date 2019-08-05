import { interpreter } from "./interpreter";
import { parser } from "./parser";
import { lexer } from "./lexer";


export function evaluate(smol: string) {
    const tokens = lexer(smol);
    const ast = parser(tokens);
    interpreter(ast, {})
}