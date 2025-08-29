interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todoForPick: TodoPreview = {
  title: "clean room",
  completed: false,
};

type MyPick<T, K extends keyof T> = {
  [E in K]: T[E];
};

// 1. Pick 타입은 T에있는 프로퍼티만 선택해서 만들어야겠다고 생각했다.
// 2. T에있는 프로퍼티인지 확인하기위해서 keyof를 사용해서 T 타입의 유니온을 가져오고
// 3. extends를 사용하여 K가 keyof T의 집합안에 만족할수있도록 제약을 두었고
// 4. E in k를 통해 K의 각각 E를 키로 설정했따
// 5. T[E]로 해당 value를 가져왔다
