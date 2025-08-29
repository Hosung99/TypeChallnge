type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

type If<C extends boolean, T, F> = C extends true ? T : F;

// 1. C를 통해 boolean 값 받아오기
// 2. C가 true이면 T 추출
// 3. C가 false이면 F 추출
