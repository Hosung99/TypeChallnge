type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// 기대되는 결과는 (a: number, b: string, x: boolean) => number 입니다.

type AppendArgument<T extends (...args: any) => any, K> = T extends (
  ...args: infer A
) => infer R
  ? (...args: [...A, K]) => R
  : never;
