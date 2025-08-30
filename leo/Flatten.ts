type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>;

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

// 1. infer와 ...Rest를 사용하여 배열의 앞에요소와 Rest를 찾아내는게 핵심이다
// 2. 찾아낸후 해당 배열내부에서 첫번째것이 또 배열인지 확인한다
// 3. 배열이라면 재귀적으로진행하고 아니라면 빈배열로 반환한다
