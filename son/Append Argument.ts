// 함수 타입 Fn과 어떤 타입 A가 주어질 때 Fn의 인수와 A를 마지막 인수로 받는 Fn과 동일한 함수 유형인 G를 생성하세요.

type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer Args
) => infer Returns
  ? (...args: [...Args, A]) => Returns
  : never;

// 오답
// 그냥 문제 이해를 못했다.. 답 봐도 모르겠네요.. 이건 좀 더 공부해야할거같아요
