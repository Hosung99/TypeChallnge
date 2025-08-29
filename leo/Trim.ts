type trimmed = Trim<"  Hello World  ">; // 기대되는 결과는 'Hello World'입니다.

type Space = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Space}${infer R}${Space}`
  ? Trim<R>
  : S;
