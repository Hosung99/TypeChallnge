// 튜플 값으로 유니온 타입을 생성하는 제네릭 TupleToUnion<T>를 구현하세요.

type TupleToUnion<T extends unknown[]> = T[number];

// 정답
// 간단했다.
// 일단 T를 배열로 제한했다.
// 그리고 배열의 인덱스 타입을 이용하여 T[number]로 만들었다.
