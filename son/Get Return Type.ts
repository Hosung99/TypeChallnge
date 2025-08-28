// 내장 제네릭 ReturnType<T>을 이를 사용하지 않고 구현하세요.

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 오답
// T를 어떤 매개변수든 받게끔 (...args:any[]) => 로 설정한다. (함수도 받게끔)
// 이걸 R로 추론하고 R을 반환하게끔 한다.