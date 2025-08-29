const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

// 1. fn 함수 자체를 typeOf (v:boolean) => 1 | 2 로 받기
// 2. T를 통해 해당 함수에대한 타입을 받기
// 3. T extends (...args:any) => infer R 을 통해 리턴값 추출
// 4. 추출하게 옳으면 반환 아니면 never로 없애기
