type Result = Concat<[1], [2]>; // expected to be [1, 2]

type Concat<T extends readonly unknown[], K extends readonly unknown[]> = [
  ...T,
  ...K
];

// 1. <T, K>를 각각 배열 형식으로 받아오기위해 readonly unkown[] 으로 받기
// 2. [...T, ...K] 스프레드연산자를 이용해서 배열 합쳐주기
