//   배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

type Length<T extends readonly unknown[]> = T["length"];


// 정답
// T의 타입을 배열로 제한했다. 이때 any보단 unknown을 써서 타입 안정성을 높였다.
// 반환의 경우 T의 Length를 반환하도록했다.
