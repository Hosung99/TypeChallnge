// String#length처럼 동작하는 문자열 리터럴의 길이를 구하세요.

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [F, ...T]>
  : T["length"];

// 오답
// T를 빈배열로 기본설정할 생각을 못했다.
// 재귀적으로 도는데, S가 빈문자열이 될때까지 F와 R로 나누고,
// F를 T에 넣어주고, S가 빈문자열이 되면 T의 길이를 반환한다.