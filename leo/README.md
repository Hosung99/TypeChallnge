1. extends  
   1-1 제네릭인 경우

   "제약" 의 개념으로 extends 사용

```ts
 <T extends {name: string, id: number}>
 T는 반드시 extends 뒤에 타입의 프로퍼티를 가져야한다는 뜻의 제한

 type A = {id: number}
 type B = {id: number, name:string}
```

A extends B === 불가능
B extends A === 가능

프로퍼티가 많은쪽 === 작은 타입 (구체적) === (좁은 타입)
프로퍼티가 적은쪽 === 큰 집합 === (넓은 타입)

1-2 상속의 의미

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}
```

Dog extends Animal은 Dog가 Animal 을 확장한다는 의미

1-3 조건문일떄

```ts
type IsString<T> = T extends string ? "YES" : "NO";
type A = IsString<string>; // "Yes"
type B = IsString<number>; // "NO"
```

2. 배열 , 객체 접근시 (인덱싱)
   2-1 객체 인덱싱

   ```ts
   type Obj = {
     id: number;
     name: string;
   };

   type ObjIndex = Obj["id"]; // number
   type ObjIndexUnion = Obj["id" | "name"]; // number | string
   ```

   2-2 배열 인덱싱

   ```ts
   type ArrTypes<T extends any[]> = T[number]; // 유니언으로 내부의 요소의 타입들을 뽑아낼수있다
   type A = Test<string[]>; // string
   type B = Test<number | boolean[]>; // number | boolean

   type Tuple = [number, string, boolean];
   type First = Tuple[0]; // number
   type Second = Tuple[1]; // string
   type Third = Tuple[2]; // boolean
   ```

3. union intersection
   3-1 union(or) A | B A또는 B 둘중에하나 합집합
   3-2 intersection & A와B 모두만족 해야함 교집합

   ```ts
   type A = {name : string}
   type B = {id: number}
   type User = A & B // {name: string, id: number}

   주의해야할점
   원시타입 교차
   type Cannot = string & number // never

   객체 교차
   type A = {id:number}
   type B = {id: string}
   type C = A & B // never
   ```

   & 객체에서는 합집합 처럼보이지만, 원시타입에서는 교집합처럼 동작

4. keyof
   타입의 키들을 유니언으로 뽑아냄

   ```ts
   type User = { id: number; name: string };
   type Keys = keyof User; // "id" | "name"
   ```

5. typeof
   TS타입 시스템에서 변수/값의 타입을 뽑아오는 키워드  
    js typeof : 런타임 연산자, 문자열 반환
   ts typeof : 컴파일 타입 키워드, 타입 반환

   ```ts
   const user = {id:1, name: "leo"}
   type UserType = typeof user {id: number, name: string}

   ```

6. infer
   조건부 타입안에서 타입을 추론시 사용, 삼항연산자에서만 쓸수있음 extends 우항안에서만 작동

   ```ts
   type GetReturn<T> = T extends (...args: any[]) => infer R ? R : never;
   type A = GetReturn<() => number>; // infer R이 동작해서 number로 추론
   ```

7. in
   매핑된 타입에서 key 순회할때사용

   ```ts
   type User = { id: number; name: string };
   type CopyObject<T> = {
     [K in keyof T]: T[K];
   };
   ```

8. readonly
   읽기전용 속성

   ```ts
   type User {
   readonly id: number;
   name: string;
   }

   const u: User = {id: 1, name: "leo"}

   u.id = 2 // 프로퍼티 변경 불가

   ```

9. optional ?
   선택적 프로퍼티

   ```ts
   type User = {
     id: number;
     name?: string;
   };

   let u: User = { id: 1 }; // name 없어도 OK
   ```

10. never
    절대 발생할수 없는 타입
    집합개념에서 제일 좁은 타입

    ```ts
    type A = string & number; // never
    ```

11. unknown
    모든값을 담을수 있지만, 쓰기전엔 타입 검증 필요
    집합개념에서 제일 넓은 타입
    any 와 다르게 타입 안전성 보장

    ```ts
    let x: unknown = 10;
    x = "hello";
    if (typeof x === "string") {
      console.log(x.toUpperCase());
    }
    ```

12. any
    타입 검사 무시
    웬만하면 지양하는게 좋음

13. is
    사용자 정의 타입 가드
    함수 반환 타입에 쓰이는 타입 가드 문법

    ```ts
    function isString(x: unknown): x is string {
      return typeof x === "string";
    }
    ```

14. satisfies
    값이 특정 조건에 만족하는지 검사하고, 값 자체의 구체적인 타입은 그대로 유지

    ```ts
    const user = {
      id: 1,
      name: "leo",
    } satisfies { id: number; name: string };

    // 타입 선언
    const a: { id: number } = { id: 1 as 1 };
    // a.id 타입은 number (리터럴 정보 잃음)

    // as 단언
    const b = { id: 1 } as { id: number };
    // b.id 타입은 number (강제로 단언)

    // satisfies
    const c = { id: 1 } satisfies { id: number };
    // c.id 타입은 1 (리터럴 정보 유지)
    ```

15. as
    타입 단언
    컴파일 단에서 단언해주는거
    잘못쓰면 런타임에서 오류 발생

    ```ts
    let a: unknown = "hi";
    let b = a as string;
    ```

16. as const
    값을 리터럴 타입과 readonly로고정

    ```ts
    const arr = ["a", "b"] as const;
    type arr = (typeof arr)[number]; // "a" | "b"
    ```

17. void
    아무런 값도 반환하지않는다

18. tuple
    길이 순서가 고정된 배열
