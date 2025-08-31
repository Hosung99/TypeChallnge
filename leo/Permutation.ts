type Permutation<T, U = T> = [T] extends [never]
  ? []
  : U extends U
  ? [U, ...Permutation<Exclude<T, U>>]
  : never;

// 오답
// [T] extends[never] ?  T가 never일때는 빈배열임으로 [] 반환
// 대괄호로 묶는이유 분배를 막기위해서 사용
//  U extends U 로 분배법칙을 이용해 유니언으로 가져오기
/// 재귀적으로 첫번째 가져온 U 원소와 나머지 요소들 을 재귀적으로사용

// 너무 어렵다...
// 분배법칙을 막는방법 생각하지못했고
// 분배법칙을 활용해야겠다라는 생각도 못했다.
