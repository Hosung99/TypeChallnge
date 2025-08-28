// Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

type MyAwaited<T> = T extends Promise<infer U>
  ? MyAwaited<U>
  : T extends { then: (onfulfilled: (value: infer V) => any) => any }
  ? MyAwaited<V>
  : T;

// 오답
// 와 아무리 생각해봐도 내가 틀린 것 같지않았다.
// 처음엔 type MyAwaited<T> = T extends Promise<infer U> ? U : never; 이렇게 작성을했다.
// 근데 이렇게하니 Promise중첩처리가 안되었다.
// 고민해도 답이안나와서 답을 찾아보았다.
// 일단 내가 고민했던 부분은 재귀적으로 처리를했다.
// 그리고 thenable객체 처리를 위해 extends로 타입을 확장했다.
// 넘 어렵다..
