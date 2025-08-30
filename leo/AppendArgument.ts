type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// 기대되는 결과는 (a: number, b: string, x: boolean) => number 입니다.

type AppendArgument<T extends (...args: any) => any, K> = T extends (
  ...args: infer A
) => infer R
  ? (...args: [...A, K]) => R
  : never;

// 1. T extends 로 해당 함수가 함수인지 제약,
// 2. K로 추가할 타입을 받기
// 3. infer A 로 기존의 args를 추론, infer R로 리턴 타입을 추론
// 4. 그게 맞다면? ..args에 기존 arguments 타입인 A 와 K 를 같이 쓰기
