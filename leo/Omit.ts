interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

// 실패
// Exclude를 써야한다는 생각을 하지못함.

// 1. 해당 타입을 T로 받기
// 2. K를 keyof T를 통해 T의 유니언값으로 받기
// 3. Exclude로 T의 키유니언에서 , K를 제거
// 4. 남은 key를 in을 통해 매핑
// 5. T[P]로 살아남은 P로 값을 추출
