type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

type Todo = DeepReadonly<X>;

// 정답과 오답 사이 0.5점
// 1. T extends Function으로 함수가 들어올경우를 생각하지 못함
// 2. keyof를 사용해 K를 구하고 ReadOnly를 재귀적으로 실행시켜줌
