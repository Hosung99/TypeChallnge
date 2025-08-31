type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<Omit<T, K> & { [P in K]: V }>;
  get(): T;
};

// 오답
// Chainable<T={}> T로 현재까지 누적된 옵션 객체 보관
// option 이 호출 될떄마다 새로운 Chainable를 반환해서 다음 체인으로 전달
// get 메스드로 마지막에 반환할수있도록,
// 너무너무 어렵다 정말로 어떻게 이런생각을 할수있는지와, key와 value를 받아서 객체에 추가후 get 메서드를 반환까진알겠는데
// 이걸 어떻게 생각해낼지 모르겠고 답을 봐도어렵다.
