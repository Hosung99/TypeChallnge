// T에서 K 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 MyReadonly2<T, K>를 구현하세요. K가 주어지지 않으면 단순히 Readonly<T>처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.

type MyReadonly2<T, K extends keyof T = keyof T> =
  Readonly<Pick<T, K>> & Omit<T, K>;


// 오답
// 사실 답을 찾아봐도 이해가 안됐다.
// 이해가 안된 부분은 K를 = keyof T로 제한하는 부분이다. 왜해야하는거지? 잘 모르겠다..
// 구현자체는 해답을 보니 간단했다.
// Pick으로 뽑아온걸 Readonly로 감싸고 Omit으로 뺀 나머지 프로퍼티들은 &로 합쳐주면 된다.