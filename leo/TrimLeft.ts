type trimmed = TrimLeft<"  Hello World  ">; // 기대되는 결과는 'Hello World  '입니다.

type Space = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;

// 실패
// 빈 공간에 대해서 어떻게 접근해야할지 몰랐다.

// 해설
// string로 extends 하여 받기.
// type Space라는 빈공간 전용 타입을 만들고 유니온을 이용해서 해당 타입에대해서 분배법칙을 사용할수있도록함
// infer R을 통해서 Hello World 라는 문자열을 추론하기
// 재귀적으로 계속 해당 타입에서 찾을수 있도록하기
