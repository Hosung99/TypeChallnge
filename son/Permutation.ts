// 주어진 유니언 타입을 순열 배열로 바꾸는 Permutation 타입을 구현하세요.

type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : never;

// 오답
// 와 미친거아닙니까? 문제 보자마자 토나왔어요..
// 이걸 어케 순열로 만들지.. 얘도 답 봐도 잘 모르겠다..
// 일단 이해한 바로는 분기처리를 위해 U = T로 설정한다.
// 그리고 T가 never면 빈 배열을 반환한다.
// 그 다음 T가 U에 할당 가능하면 [T, ...Permutation<Exclude<U, T>>]를 반환한다.
// Exclude는 U에서 T를 제외한 타입을 반환한다.
// 마지막으로 T가 U에 할당 불가능하면 never를 반환한다.