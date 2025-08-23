interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = { readonly [P in keyof T]: T[P] }

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property


/*

keyof T 는 'title' | 'description' (유니온 타입)이다.
[P in keyof T] 에서 P는 각 프로퍼티(title, description)를 의미한다. (유니온 타입 순회)
이제 각 프로퍼티를 readonly 로 바꾸면 된다.

여기까지 접근했지만, 바꾸는 방법을 몰라서 관련 개념을 학습했다.
>> _Study.ts > 맵드 타입의 수정자. (Modifiers)

 */