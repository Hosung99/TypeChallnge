interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// 1. T를 이용하여 타입을 받기
// 2. keyof T로  T 타입에대해서 유니언으로 만들기
// 3. in 을 통하여 해당 타입을 반복문 처럼  매핑해서 사용하기
// 4. 각 객체에대해서 key를 통해 value 추출
// 5. 앞에 readonly 붙이기
