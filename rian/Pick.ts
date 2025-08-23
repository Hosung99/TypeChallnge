interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}


/*

MyPick<T, K> 에서 K는 T의 속성 중 하나여야 한다. ('title' | 'completed' 등)
>> K extends keyof T

K로 들어온 유니온 타입('title' | 'completed')을 순회하며 프로퍼티를 생성한다.
>> { title: ...; completed: ... }

그리고 T[P] 값 타입을 넣는다.
>> T['title'] 값 속성은 string, T['completed'] 값 속성은 boolean
>> { title: string; completed: boolean }

아래와 같이 작성하여 오답.
>> type MyPick<T, K extends keyof T> = { [P in K]: T[K] }

K가 유니온 이므로, T[K]로 작성하면
>> { title: string | boolean; completed: string | boolean }

 */
