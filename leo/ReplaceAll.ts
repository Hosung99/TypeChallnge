type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? ReplaceAll<`${F}${To}${R}`, From, To>
  : S;

// 1. From 을 빈문자열 제한하기
// 2. F, From, R을 찾아내고
// 3. 재귀적으로 교체하기
