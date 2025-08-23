// 배열 T를 사용해 마지막 요소를 제외한 배열을 반환하는 제네릭 Pop<T>를 구현합니다.

type Pop<T extends unknown[]> = T extends [...infer U, infer V] ? U : [];


// 정답
// Last of Array에서 빈 배열을 반환하도록했다.
