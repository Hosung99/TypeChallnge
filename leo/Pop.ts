type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]

type Pop<T extends readonly unknown[]> = T extends readonly [
  ...infer A,
  infer B
]
  ? A
  : never;

// 1. T에 배열이 들어오기때문에 readOnly unkown[] 으로 extends
// 2. extends로 조건문을 걸고 ... rest를 이용하여 infer로 앞에 배열 요소들을 추론하고
// 3. 맨 뒤에 요소를 infer B로 추론
// 4. 저 형식이 맞다면 A 아니면 빈배열 반환
