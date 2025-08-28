// 문자열 S에서 From를 찾아 한 번만 To로 교체하는 Replace<S, From, To>를 구현하세요.

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From extends "" ? never : From}${infer R}`
  ? `${L}${To}${R}`
  : S;

// 오답
// 빈배열처리가 안되었다. 찾아보니 extends "" ? never : From 이렇게 처리하면 된다고 한다. 이런.. 아쉬웠다 ㅠ 다맞은건데