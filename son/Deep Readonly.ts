// 객체의 프로퍼티와 모든 하위 객체를 재귀적으로 읽기 전용으로 설정하는 제네릭 DeepReadonly<T>를 구현하세요.s
// 이 챌린지에서는 타입 파라미터 T를 객체 타입으로 제한하고 있습니다. 객체뿐만 아니라 배열, 함수, 클래스 등 가능한 다양한 형태의 타입 파라미터를 사용하도록 도전해 보세요.

type DeepReadonly<T> = T extends Function
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

// 반 정답
// 왜 반 정답이냐? Function 타입을 고려하지 않아서다.
// Function은 readonly가 안되어, 그대로 반환해야한다. 이런.. extends Function을 이용하여 T가 Function 타입이면 T를 그대로 반환하도록 했다. 그랬더니 맞았다.
// 나머지는 이전에 얻은 교훈으로 재귀적으로 해결했다. T의 키를 하나씩 순회하면서 readonly로 만들고, 그 값이 객체이면 다시 DeepReadonly를 적용하도록 했다.
