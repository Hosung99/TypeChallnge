// 주어진 문자열 S에서 부분 문자열 From을 찾아 모두 To로 교체하는 제네릭 ReplaceAll<S, From, To>을 구현하세요.

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From extends "" ? never : From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;

// 정답
// Replace에서 재귀처리해주었다~