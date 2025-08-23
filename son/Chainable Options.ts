// 체인 가능 옵션은 일반적으로 Javascript에서 사용됩니다. 하지만 TypeScript로 전환하면 제대로 구현할 수 있나요?

// 이 챌린지에서는 option(key, value)과 get() 두가지 함수를 제공하는 객체(또는 클래스) 타입을 구현해야 합니다. 현재 타입을 option으로 지정된 키와 값으로 확장할 수 있고 get으로 최종 결과를 가져올 수 있어야 합니다.

type Chainable<T extends Object = {}> = {
  option<K extends string | number, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & { [k in K]: V }>;
  get(): T;
};

// 오답
// 드럽게 어려웠다. 한 15분정도 고민했다.
// 답 봐도 참 어려웠다..
// 일단 문제는 메소드 체이닝 구현하는 것이다. option 메소드는 key와 value를 받아서 객체에 추가하고, get 메소드는 최종 객체를 반환해야한다.
// option 메소드의 경우 key가 이미 존재하는 경우 never를 반환하도록 했고, value는 아무 타입이나 될 수 있도록 했다. 여기까지 이해했다..
// 그뒤엔 재귀적으로 하면서 Omit을 이용한다는걸로 이해했다.. 하 뭐라는거지 이거
// get 메소드는 단순히 T를 반환하도록 했다.