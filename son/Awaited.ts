// Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;

// 오답
// 와 아무리 생각해봐도 내가 틀린 것 같지않았다.
// 처음엔 type MyAwaited<T> = T extends Promise<infer U> ? U : never; 이렇게 작성을했다.
