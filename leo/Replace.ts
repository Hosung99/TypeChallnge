type replaced = Replace<"types are fun!", "fun", "awesome">;

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

// 실패
// 1. From extends "" ? S를 통해서 빈문자열이면 변경되지않게 해야함으로 S를 돌려주도록 방어코드
// 2. S extends `${infer L}${From}${infer R}` infer을 통해 L 과 R 을 추론
// 3. Form 과 To 를변경하게해줌

// 실패 이유
// 1. Form extends ""로 방어 코드를 생각하지못했음.
