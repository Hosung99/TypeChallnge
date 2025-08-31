interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & { [P in Exclude<keyof T, K>]: T[P] };

// 실패
// 부분 readonly 아예 따로따로 구해야한다는 생각을 하지못함.
// & 로 타입의 합칠수 있다는 생각을 하지못함...

//해설
// 1. title, description 만 readonly로 바꾸기
// 2. Exclude로 key T에서, K를 제외함 그러면 completed만 남으니까 해당 것을 넣기
// 3. 1,2 앞선 과정들을 합치기 &
