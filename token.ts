export type Token = {
    type: "operator" | "keyword" | "terminator" | "identifier" | "left-paren" | "right-paren" | "pipe" | "left-curly" | "right-curly" | "string" | "comma" | "boolean" | "number";

    value: string;
}