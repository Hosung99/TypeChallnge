// 주어진 배열을 플랫한 배열 타입으로 바꾸는 Flatten 타입을 구현하세요.

type Flatten<T extends any[], A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends any[]
    ? Flatten<[...F, ...R], A>
    : Flatten<R, [...A, F]>
  : A;

// 오답
// 아.. 일단 아이디어를 못 떠올렸다. 재귀적으로 해야할것 같긴한데.. 다중배열처리를 실패했다.
// 답을 보니 flat한걸 다시 flat해주는식으로 했다.