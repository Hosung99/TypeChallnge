type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

type Capitalize<S extends string> = S extends `${infer F}${infer L}`
  ? `${Uppercase<F>}${L}`
  : S;

// 실패
// 배열에는 [...infer F, infer L] 이렇게 앞 뒤를 구분할수있는데
// 문자열에서는 어떻게 앞글자만 분해 할 수 있는지 몰랐다.
// ${infer F} ${inferR}로하면 오른쪽에있는 infer가 더 탐욕적(greedy)로 잡히는것을 몰랐다

// 해설
// 1. string으로 extends 하여 받기
// 2. infer F, infer L 을 통해 뒤에있는것이 그리디하게 받는것을 사용하여 맨 앞글자 확보
// 3. 확보되었다면 UpperCase로 해당 앞글자만 대문자로바꾸고 합치기
