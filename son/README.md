# TypeScript 스터디

## 1. `extends`

extends는 두가지 상황에서 사용된다.

1)제네릭에서 타입을 특정 범위로 제한한다.
`T extends string`은 T가 string의 하위 타입이어야 함을 의미한다.

```ts
function example<T extends string | number>(arg: T): T {
  return arg;
}

example(123); // 유효
example("hello"); // 유효
// example(true); // 오류: boolean은 string | number에 할당할 수 없음
```

2)조건부 타입에서 타입 체크를 수행한다.
`T extends U ? X : Y`는 T가 U에 할당 가능하면 X, 아니면 Y를 반환한다.
사실상 삼항연산자 느낌

```ts
type IsString<T> = T extends string ? "Yes" : "No";
type A = IsString<string>; // "Yes"
type B = IsString<number>; // "No"
```

## 2. **배열, 객체 인덱싱** `[]`

대괄호 표기법으로 타입의 특정 속성이나 요소의 타입을 추출한다.
`Type['property']`는 **객체** 타입의 특정 속성 타입을, `Type[number]`는 **배열** 요소의 타입을 가져옵니다.

```ts
type Person = { name: string; age: number };
type NameType = Person["name"]; // string
type AgeType = Person["age"]; // number
type StringArray = string[];
type ElementType = StringArray[number]; // string
```

## 3. `union |` & `intersection &`

Union(`|`)은 여러 타입 중 하나가 될 수 있는 타입을(합집합), Intersection(`&`)은 여러 타입을 모두 만족하는 타입(교집합)을 만든다.

```ts
type A = { name: string };
type B = { age: number };
type C = A | B; // { name: string } 또는 { age: number }
type D = A & B; // { name: string; age: number }
```

## 4. `keyof`

객체 타입의 모든 **키**를 유니온 타입으로 추출한다.

```ts
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"
```

## 5. `typeof`

JavaScript 값으로부터 TypeScript 타입을 추출한다.
변수나 함수의 타입을 가져와서 타입 비교나 선언에 활용할 수 있다.

```ts
function printNumber(arg: string | number) {
  if (typeof arg === "number") {
    console.log(arg);
  } else {
    console.log(parseInt(arg));
  }
}
```

## 6. `infer`

조건부 타입 내에서 타입을 추론하고 변수에 할당한다.
주로 함수의 반환 타입이나 매개변수 타입을 추출할 때 사용된다.
주로 extends와 함께 사용된다.
type에만 사용된다는거에 유의하자.

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Func = (x: number) => string;
type Result = ReturnType<Func>; // string
```

## 7. `in`

객체 타입의 모든 속성을 순회하거나, 타입 가드에서 속성 존재를 체크합한다.
매핑된 타입에서 `[K in keyof T]`처럼 사용하거나, `'prop' in obj`로 타입을 좁히는데 사용한다.

```ts
type Person = { name: string; age: number };
type ReadonlyPerson = { readonly [K in keyof Person]: Person[K] }; // 모든 속성을 읽기 전용으로 만듦

function hasName(obj: any): obj is { name: string } {
  return "name" in obj;
}
```

## 8. `readonly`

속성이나 배열을 읽기 전용으로 만들어 수정을 방지한다.
컴파일 타임에만 작동하며, 불변성을 보장하는 안전한 코드 작성에 도움을 준다.

```ts
type Person = { readonly name: string; age: number };
const person: Person = { name: "Alice", age: 30 };
// person.name = "Bob"; // 오류: 읽기 전용 속성이므로 수정할 수 없음
```

## 9. `?` _(optional)_

속성이나 매개변수를 선택적으로 만들어 있어도 되고 없어도 되는 값을 표현한다.
`name?: string`은 `name: string | undefined`와 유사하지만, 속성 자체가 없을 수도 있음을 의미한다.

```ts
type Person = { name: string; age?: number };
const person1: Person = { name: "Alice" }; // age 속성 없음
const person2: Person = { name: "Bob", age: 25 }; // age 속성 있음
```

## 10. `never`

절대 발생하지 않는 값의 타입으로, 도달 불가능한 코드나 불가능한 상태를 나타낸다.
함수가 예외를 던지거나 무한 루프에 빠질 때, 또는 조건부 타입에서 불가능한 케이스를 표현할 때 사용된다.
모든 타입의 공집합이다.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

## 11. `unknown`

모든 값을 할당받을 수 있지만, 타입 체크 없이는 사용할 수 없는 안전한 any다.
any와 달리 명시적 타입 체크를 강제하여 타입 안정성을 보장한다.
모든 타입의 상위 타입이다.
단, 사용시 다운 캐스팅은 안된다.

```ts
let value: unknown;
value = 123; // 유효
value = "hello"; // 유효
// let num: number = value; // 오류: 'unknown' 타입을 'number' 타입에 할당할 수 없음
if (typeof value === "number") {
  let num: number = value; // 유효: 타입이 좁혀짐
}
```

## 12. `any`

모든 타입을 허용하는 최상위 타입으로, 타입 체크를 완전히 우회한다.
타입 안정성을 포기하므로 가능한 사용을 피하고, 점진적 마이그레이션 시에만 제한적으로 사용해야 한다.

```ts
let value: any;
value = 123; // 유효
value = "hello"; // 유효
let num: number = value; // 유효: 타입 체크 없음
```

## 13. `is`

사용자 정의 타입 가드의 반환 타입으로, 타입을 좁히는 함수를 만든다.
`pet is Dog`처럼 함수가 true를 반환하면 해당 스코프에서 타입이 좁혀진다.

```ts
interface Dog {
  bark(): void;
}
interface Cat {
  meow(): void;
}
function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}
```

## 14. `satisfies`

표현식이 타입을 만족하는지 검사하면서도 더 구체적인 타입을 유지한다.
타입 체크는 하되 타입 추론은 그대로 두고 싶을 때 유용하다.

```ts
const config = {
  url: "https://api.example.com",
  method: "GET",
} satisfies { url: string; method: "GET" | "POST" };
```

## 15. `as`

타입 단언으로 컴파일러에게 특정 타입임을 알려줍니다.
타입 체크를 우회하므로 확실한 경우에만 사용하고, 가능하면 타입 가드를 사용해야 한다.
또한, 2중 as는 피하는게 좋다.

```ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

## 16. `as const`

리터럴 타입으로 추론하도록 강제하여 가장 구체적인 타입을 유지한다.
`{type: 'ADD'} as const`는 type을 string이 아닌 'ADD' 리터럴 타입으로 만든다.

```ts
let config = {
  url: "https://api.example.com",
  method: "GET",
} as const;
// config.method는 string이 아닌 "GET" 리터럴 타입
```

## 17. `generic <T>`

타입을 매개변수화하여 재사용 가능한 컴포넌트를 만들때 사용한다.
함수나 클래스가 다양한 타입과 작동하면서도 타입 안정성을 유지할 수 있게 한다.

```ts
function printArray<T>(arr: T[]): void {
  arr.forEach((item) => console.log(item));
}
```

## 18. `void`

값을 반환하지 않는 함수의 반환 타입을 나타낸다.
undefined와 다르게 명시적으로 "반환값이 없음"을 의미하며, 주로 부수 효과만 있는 함수에 사용된다.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## 19. `tuple`

고정된 길이와 각 위치별 타입이 정해진 배열을 나타낸다.
`[string, number, boolean]`처럼 각 인덱스의 타입이 다를 수 있고, 구조 분해 할당에 자주 사용된다.

```ts
type Person = [string, number, boolean];
const person: Person = ["Alice", 30, true];
```
