export interface AST extends Array<Instruction | AST>{}

export type Instruction =
    SmolFunction |
    FunctionCall |
    SmolNumber   |
    SmolBool     |
    SmolString   |
    Variabledeclaration |
    IfStatement  |
    WhileStatement |
    SmolIdentifier |
    ReturnStatement;


export interface Statement {
    type: string;
    value?: string | number | boolean
}

export interface SmolFunction extends Statement {
    type: "function";
    args: string[];
    body: AST;
}

export interface FunctionCall extends Statement {
    type: "function-call";
    function: string;
    args: AST;
}

export interface SmolNumber extends Statement {
    type: "number";
    value: number;
}

export interface SmolString extends Statement {
    type: "string";
    value: string;
}

export interface SmolBool extends Statement {
    type: "boolean";
    value: boolean;
}

export interface Variabledeclaration extends Statement {
    type: "variable-declaration";
    name: string;
    varType: "let" | "var";
}

export interface IfStatement extends Statement {
    type: "if";
    condition: AST | Instruction;
    body: AST | Instruction;
}

export interface ReturnStatement extends Statement {
    type: "return";
    exp: AST | Instruction;
}

export interface WhileStatement extends Statement {
    type: "while";
    condition: AST | Instruction;
    body: AST | Instruction;
}

export interface SmolIdentifier extends Statement {
    type: "identifier";
    name: string;
}

export interface Value {
    val: any;

    isReturn?: boolean;
}

export interface Mem {
    [key: string]: {
        memType: "let" | "var";
        val: Value | undefined;
    }
}