type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

type Last<T extends readonly unknown[]> = T extends readonly [
  ...infer A,
  infer B
]
  ? B
  : never;

// 1. readonly unknown[] 으로 배열을 받기
// 2. 해당 배열에서 ... 스프레드 연산자를 사용하여 마지막 자리 추출
// 3. 추출해서 있다면 마지막 값 아니면 never을 사용해 없애기
