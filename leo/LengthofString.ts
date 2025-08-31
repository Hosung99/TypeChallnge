type LengthOfString<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...Acc, F]>
  : Acc["length"];

type Test = LengthOfString<"test">;

// 1. S extends string으로 해당 문자열을 제약
// 2. Acc extends string[] = [] 기본값 배열을 만들게됨 배열에 대한 확장
// 3. S extends `${infer F}${infer R}` 를 활용해서 첫번쨰 문자열과 남은 문자열을 추론
// 4. 재귀적으로 진행하게 되며 해당 문자가없을때까지 반복
// 5. 더이상 infer F, infer R로 추론될수없을때 해당 배열에대한 길이를 반환
