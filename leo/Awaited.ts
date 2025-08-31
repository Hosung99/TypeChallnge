type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

type MyAwaited<T> = T extends Promise<infer R> ? R : T;

// 1. Awaited에서 타입을 꺼내기위해서 Promise를 사용하고
// 2. infer로 내부에있는값을 추론해서 꺼내오기
