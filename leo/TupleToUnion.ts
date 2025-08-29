type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type TupleToUnion<T extends readonly unknown[]> = T[number];

// 1. T extends readonly unknown[] 형식으로 배열 받기
// 2. T[number]를 통해서 해당 배열 유니언으로 값 추출
