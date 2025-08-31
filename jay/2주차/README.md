### 1. never, unknown, any

#### any: 어떤 타입이든 신경쓰지 않을래

```ts
let a: any;
a = 123; // a에 숫자 할당

let str: string = a; // string = any 이므로 에러 발생하지 않음.

a = {}; //na에 object 할당
const b = a - 1; // 에러 발생하지 않음
```

#### never: 절대 일어나지 않을거야

- 즉, 이 타입은 어떤 값도 가질 수 없다. (여기에 도달하면 안된다.) = 빈집합

```ts
function fail(msg: string): never {
  throw new Error(msg);
}

// exhaustive check 예시
type Shape = "circle" | "square";
function area(s: Shape) {
  if (s === "circle") return 1;
  if (s === "square") return 2;
  // 여기는 오면 안 되니까 s는 never 타입이 됨
  const check: never = s;
}
```

#### unknown: 뭐든될 수 있지만 쓰기 전에 확인부터 해야해

```ts
let u: unknown = "hello";

u.toUpperCase(); // ❌ 에러: unknown은 그냥 쓸 수 없음
if (typeof u === "string") {
  u.toUpperCase(); // ✅ 타입 좁히기 후엔 사용 가능
}
```

### 2. generic: 외부에서 타입을 정할 수 있도록 비워둔 변수 같은 것

- 역할: 재사용성과 타입 안전성을 동시에 확보
- 비유: 함수에서 파라미터

```ts
function identity<T>(value: T): T {
  return value;
}

const a = identity<string>("hello"); // T = string
const b = identity(123); // T = number (추론됨)
```

### 3. infer: 타입을 추론해서 변수처럼 꺼내 쓰자

- 역할: 복잡한 타입에서 필요한 부분을 자동으로 뽑아내기
- 비유: 이 자리에 어떤 타입이 오는지 추측해서 이름 붙여줄게라고 하는 느낌

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 함수 타입을 받으면 infer R이 리턴 타입을 잡아내고, 그걸 결과로 돌려줌
type A = MyReturnType<() => string>; // string
type B = MyReturnType<() => number>; // number
// 함수가 아니면 그냥 never
type C = MyReturnType<number>; // never
```

generic 과 infer 의 차이를 쉽게 설명하면

- generic = 타입을 “밖에서 넣어주는 변수”
- infer = 타입을 “안에서 뽑아내는 변수”

### 4. union, intersection

#### union: 여러 타입 중 하나라도 될 수 있다.

```ts
type Fruit = "apple" | "banana" | "orange";

let f1: Fruit = "apple"; // ✅ 가능
let f2: Fruit = "orange"; // ✅ 가능
let f3: Fruit = "grape"; // ❌ 불가능 (정의에 없음)
```

##### intersection: 여러 타입을 모두 만족해야 한다.

```ts
type Person = { name: string };
type Worker = { company: string };

type Employee = Person & Worker;

const e: Employee = {
  name: "홍길동",
  company: "스타트업",
}; // ✅ name + company 모두 있어야 함
```

### 5. extends: 인터페이스 확장

- 형태: T extends D

- 예시: 기본 버튼 속성에 커스텀 속성을 추가할 때

```ts
// variant에 허용할 값 정의
type ButtonVariant = "primary" | "secondary" | "danger";

// 기본 버튼 속성 + variant 확장
export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
```

### 6. extends: 조건문일때

- 형태: 조건부 타입은 JavaScript에 있는 삼항 연산자 조건문 (condition ? trueExpression : falseExpression) 같은 형태

#### 예시1: extends 여부에 따른 타입 설정

```ts
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// Example1 은 number 타입

type Example2 = RegExp extends Animal ? number : string;
// Example2 는 string 타입
```

#### 예시2: 오버로드로 작성된 타입을 generic 과 함께 사용하는 조건부 타입으로 변경한다면?

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
// ---cut---
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
```

#### 예시3: infer 키워드를 사용해서 유용한 헬퍼 타입 별칭 사용

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;
// Num 은 number 타입

type Str = GetReturnType<(x: string) => string>;
// Num 은 string 타입

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// Num 은 boolean 타입
```

이번에 사용한 infer 와 조건부 타입

```ts
/** 배열의 원소 타입을 추출 */
export type ElementOf<T> = T extends (infer D)[] ? D : never;
```

#### 예시4: 조건부 타입이 유니온 타입을 만나면 어떻게 동작하는가?

1. 기본 조건부 타입 복습

- `type T1<T> = T extends string ? "문자열" : "그 외";`
- T 가 string 이면 문자열, 아니면 '그 외'

2. 유니온과 함께 쓰면?

- `type T2<T> = T extends string ? "문자열" : "그 외";`
- `type A = T2<string | number>;`
- '그 외' 겠네라고 생각할 수 있지만, 실제로는 `type A = "문자열" | "그 외";`

3. 예상과 다른 이유? '분산적으로 동작하기 때문에

- 조건부 타입에서 T가 유니온이면, 타입스크립트는 T의 각 멤버에 대해 조건부 타입을 하나씩 적용한 뒤 결과를 다시 유니온으로 합침
- `(string | number) extends string ? ... : ...`
- -> `(string extends string ? "문자열" : "그 외") | (number extends string ? "문자열" : "그 외")`
- -> `"문자열" | "그 외"`

> 보통 조건문은 전체 집합을 통으로 검사하는 느낌인데, 타입스크립트 조건부 타입은 유니온이 오면 요소 하나하나 쪼개서 검사해요. 그래서 결과도 다시 유니온이 됩니다.

4. 분산성을 막고 싶을 때

- 그럴 땐 `[T] extends [string]` 처럼 배열로 감싸기

```ts
type T3<T> = [T] extends [string] ? "문자열" : "그 외";

type B = T3<string | number>; // "그 외"
```

#### 예시5. 실전 케이스

- Exclude: T 에서 U를 빼는 타입 -> 차집합
- 서버에서온 enum/유니온 타입 중 지금 컨텍스트에서 쓰면 안되는 값을 제거할 때 깔끔

```ts
type Exclude<T, U> = T extends U ? never : T;

// 예시 1) 상태값에서 "draft"만 제거
type Status = "draft" | "pending" | "approved";
type NonDraftStatus = Exclude<Status, "draft">; // "pending" | "approved"

// 예시 2) 이벤트 유니온에서 특정 이벤트 타입 제외
type Event =
  | { type: "click"; x: number; y: number }
  | { type: "keydown"; key: string }
  | { type: "resize"; w: number; h: number };

type UIEvent = Exclude<Event, { type: "resize"; w: number; h: number }>; // click | keydown
```

- Exclude: T 에서 U인것만 남기기 (교집합과 유사한 느낌)
- 커다란 유니온에서 부분 타입만 골라 함수를 만들거나 핸들러를 만들 때 깔끔

```ts
type Extract<T, U> = T extends U ? T : never;

// 예시 1) 특정 이벤트 타입만 추출
type KeyboardEvent = Extract<Event, { type: "keydown"; key: string }>;
// { type: "keydown"; key: string }

// 예시 2) 상태에서 승인 관련만
type ApprovedOnly = Extract<Status, "approved" | "pending">; // "pending" | "approved"
```

- NonNullable: null/undefined 제거. (분산 조건부로 각 멤버 검사)

```ts
type NonNullable<T> = T extends null | undefined ? never : T;

type MaybeNumber = number | null | undefined;
type DefinitelyNumber = NonNullable<MaybeNumber>; // number

// 실전: API 응답 후 가드
function assert(value: unknown): asserts value is NonNullable<typeof value> {
  if (value == null) throw new Error("nullish!");
}
```

- ReturnType / Parameters

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

// 예시
function fetchUser(id: string, verbose?: boolean) {
  return { id, name: "Alice" as const };
}
type FetchUserResult = ReturnType<typeof fetchUser>; // { id: string; name: "Alice" }
type FetchUserArgs = Parameters<typeof fetchUser>; // [id: string, verbose?: boolean | undefined]

// 실전: API 단일 소스 타입화
type Service = {
  getUser: (id: string) => Promise<{ id: string; name: string }>;
  listUsers: (page: number) => Promise<Array<{ id: string }>>;
};

type GetUserResult = Awaited<ReturnType<Service["getUser"]>>; // { id: string; name: string }
type ListUsersResult = Awaited<ReturnType<Service["listUsers"]>>; // Array<{ id: string }>
```

- ReturnType<T> / Parameters<T>

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

// 예시
function fetchUser(id: string, verbose?: boolean) {
  return { id, name: "Alice" as const };
}
type FetchUserResult = ReturnType<typeof fetchUser>; // { id: string; name: "Alice" }
type FetchUserArgs = Parameters<typeof fetchUser>; // [id: string, verbose?: boolean | undefined]

// 실전: API 단일 소스 타입화
type Service = {
  getUser: (id: string) => Promise<{ id: string; name: string }>;
  listUsers: (page: number) => Promise<Array<{ id: string }>>;
};

type GetUserResult = Awaited<ReturnType<Service["getUser"]>>; // { id: string; name: string }
type ListUsersResult = Awaited<ReturnType<Service["listUsers"]>>; // Array<{ id: string }>
```

### 6. keyof, typeof, in: 타입스크립트의 타입 연산자들

#### typeof: 이 변수가 어떤 타입인지 그대로 가져다 써!

```ts
const user = { id: 1, name: "Alice" };

type User = typeof user;
// User = { id: number; name: string }
```

#### keyof: 객체 키들의 유니온 뽑기

```ts
type User = { id: number; name: string };

type UserKeys = keyof User;
// "id" | "name"
```

#### in: 타입을 만들 때, 유니온을 순회해서 새로운 속성을 만듦 (map 처럼..!)

```ts
type User = { id: number; name: string };
type ReadonlyUser = {
  [K in keyof User]: User[K];
};
// { id: number; name: string }
```

### 7. typeof, instanceof, is, asserts, in, discriminated union 패턴: 타입 가드들

#### typeof, instanceof

- typeof: 원시 타입 구분 (string, number, boolean, object, function, symbol, bigint, undefined)
- instanceof: 클래스/생성자 기반 객체 구분

```ts
function printLength(x: string | number) {
  if (typeof x === "string") {
    console.log(x.length); // string으로 좁혀짐
  } else {
    console.log(x.toFixed(2)); // number로 좁혀짐
  }
}

class Person {}
function isPerson(obj: any) {
  if (obj instanceof Person) {
    // obj는 Person 타입으로 좁혀짐
  }
}
```

#### value is Type → 사용자 정의 타입 가드 (boolean 함수)

- is: “이 함수가 true를 리턴하면 컴파일러야, 얘는 string이라고 믿어도 돼"

```ts
function isString(x: unknown): x is string {
  return typeof x === "string";
}

const val: unknown = "hello";

if (isString(val)) {
  // 여기서 val은 string
  console.log(val.toUpperCase());
}
```

#### asserts → 단언 기반 타입 가드 (throw 중심)

- asserts: 리턴값이 boolean이 아니라, 실행 끝나면 무조건 타입이 보장된다는 방식.

```ts
function assertNonNull<T>(x: T): asserts x is NonNullable<T> {
  if (x == null) throw new Error("null or undefined!");
}

let maybe: string | null = getValue();
assertNonNull(maybe);

// 여기서는 string으로 확정됨
console.log(maybe.toUpperCase());
```

#### in → 프로퍼티 존재 기반 타입 가드

```ts
type Car = { wheels: number };
type Boat = { sails: number };

function move(vehicle: Car | Boat) {
  if ("wheels" in vehicle) {
    // Car로 좁혀짐
  } else {
    // Boat로 좁혀짐
  }
}
```

#### discriminated union 패턴 → 태그 기반 타입 가드

```ts
type Shape = { kind: "circle"; r: number } | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.r ** 2; // circle로 좁혀짐
    case "square":
      return shape.side ** 2; // square로 좁혀짐
  }
}
```

### 8. as, as const, 타입 주석 (: Type), satisfies, readonly: 타입스크립트에서 값과 타입 관계를 좁히거나 잠그는 도구

#### as: 컴파일러야~ 내가 더 잘 아니까 이 값을 이 타입이라고 믿어줘!

- 장점: 빠르게 타입 맞추기 가능 (특히 마이그레이션 중)
- 단점: 안전성 떨어짐 (타입 체커 무시)

```ts
const value: unknown = "hello";

const len = (value as string).length; // string이라고 믿고 length 사용
```

#### as const: 이 값을 최대한 구체적으로 잠궈줘 (Literal Assertion - 리터럴 단언)

- 장점: 리터럴 타입 유지, Enum 대체 가능
- 단점: 배열/객체는 deep readonly 처리 → 수정 불가

```ts
const color = "red"; // 타입: string
const color2 = "red" as const; // 타입: "red"

const arr = [1, 2, 3] as const;
// 타입: readonly [1, 2, 3]  (길이/값 고정)
```

#### 타입 주석 (: Type): 지정한 타입만 허용 → 타입 안정성 보장

- 장점: 지정한 타입만 허용 → 타입 안정성 보장
- 단점: 하지만 리터럴 값이 넓은 타입으로 추론됨 (예: "red" 대신 string)

```ts
const color: "red" | "blue" = "red";
const label: string = "hello";
```

#### as, as const, 타입주석 (: Type) 비교

```ts
type Colors = "red" | "blue" | "green";

// 1) 타입 주석
const config1: Record<string, Colors> = {
  primary: "red",
};
// 타입 추론 결과: config1.primary: Colors ("red" | "blue" | "green")
// 타입 안전 ✅  리터럴 "red"가 Colors 전체로 넓어짐

// 2) as const
const config2 = {
  primary: "red",
} as const;
// 타입 추론 결과: config2.primary: "red" (리터럴)  config2 전체가 readonly
// 리터럴 그대로 고정됨 🔒  변경 불가라서 딱딱함

// 3) as Type
const config3 = {
  primary: "red",
} as Record<string, Colors>;
// 타입 추론 결과: config3.primary: Colors ("red" | "blue" | "green")
// 강제 단언 🚨  TS 검사 무시 가능 → 안전성 낮음
```

#### satisfies: 이 값이 특정 타입 조건을 충족하는지 검사하면서, 구체적인 타입 추론은 그대로 두자

- 타입스크립트 4.9부터 도입된 타입 단언과 타입 추론의 중간지대 같은 키워드

```ts
// 4) satisfies
const config4 = {
  primary: "red",
  secondary: "blue",
} satisfies Record<string, Colors>;
// config4.primary: "red" (리터럴 유지) config4.secondary: "blue"
// 값은 구체적으로 추론하면서 조건(Colors만 허용)도 검사 ✅
```

- 안전한 상수 정의

```ts
type Routes = "/home" | "/about" | "/settings";

const routes = {
  home: "/home",
  about: "/about",
} satisfies Record<string, Routes>;

// routes.home → "/home"
```

- enum 대신

```ts
const STATUS = {
  Draft: "draft",
  Published: "published",
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
```

를 다음과 같이 표현 가능

```ts
const STATUS = {
  Draft: "draft",
  Published: "published",
} satisfies Record<string, string>;
```

#### readonly: 이 프로퍼티는 수정 불가 (타입 레벨에서 재할당 금지)

```ts
type User = {
  readonly id: string;
  name: string;
};

const u: User = { id: "123", name: "Alice" };
u.name = "Bob"; // ✅ ok
u.id = "456"; // ❌ Error: 읽기 전용
```

### 9. tuple

- tuple에 명시적으로 지정된 형식에 따라 아이템 순서를 설정해야 되고, 추가되는 아이템 또한 tuple에 명시된 타입만 사용 가능

```ts
let a: [string, number] = ["abc", 123];
a = [123, "abc"]; // ❌ 타입 에러 발생
```

### 10. void

- 주로 함수에서 return 값이 없는 경우 사용

하지만! 다른 타입의 값을 return 할 수 있다..?
(참고 링크: https://pozafly.github.io/typescript/why-can-typescript-return-any-value-using-void/)

```ts
type VoidFunc = () => void;

const myFunc: VoidFunc = function () {
  return "hello"; // 성공
};
const myFunc2: VoidFunc = () => {
  return "hello"; // 성공
};
```

- 반환 값이 존재하면 안된다(undefind만 반환 가능하다).
- return에 어떤 값이 와도 상관은 없지만, 사용하지 않는다는 뜻으로 해석한다.

그렇다면, 정확히 언제 void가 값을 반환할 수 있고 값을 반환할 수 없을까?

- 타입으로 분리되지 않은 함수 자체에 붙어 있는 void 값은 return 값이 존재하면 안된다.
- 타입으로 분리되거나 타입이 선언과 할당이 따로 나뉘어 있는 void 값은 값이 존재해도 된다.

```ts
function fn(): void {
  return "a"; // 👾error! : 'string' 형식은 'void' 형식에 할당할 수 없습니다.
}
const fn2: () => void = () => {
  return "a"; // 성공
};
```

### 11. ?(optional)선택 매개변수

### 12. 배열, 객체에 접근시 (인덱싱)

- 배열/객체 인덱싱은 **값에 접근하는 방법**과 **타입에 접근하는 방법**으로 나누어 생각하면 직관적

#### 배열 인덱싱

(1) 값에 접근

```ts
const arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr[2]); // 30
// 없는 index면 undefined
```

(2) 타입에 접근

```ts
type Numbers = number[];
type First = Numbers[0]; // number (모든 요소가 number)

const tuple = [10, "hi", true] as const;
type Tuple = typeof tuple;
type First = Tuple[0]; // 10
type Second = Tuple[1]; // "hi"
```

#### 객체 인덱싱

(1) 값에 접근

```ts
const user = { id: 1, name: "Alice" };

console.log(user["id"]); // 1
console.log(user.name); // "Alice"
```

(2) 타입에 접근

```ts
type User = { id: number; name: string };
type IdType = User["id"]; // number
type NameType = User["name"]; // string

// 유니온으로도 가능
type Values = User[keyof User]; // number | string
```

### 마지막! Utility Types

링크: https://www.typescriptlang.org/docs/handbook/utility-types.html

#### InstanceType<T> / ConstructorParameters<T>

- InstanceType<T>: Type의 생성자 함수의 인스턴스 타입으로 구성된 타입을 생성합니다.
- ConstructorParameters<T>: 생성자 함수 타입의 타입에서 튜플 또는 배열 타입을 생성합니다. 모든 매개변수 타입을 가지는 튜플 타입(또는 Type이 함수가 아닌 경우 타입 never)을 생성합니다.

```ts
class Repo {
  constructor(public url: string, private token?: string) {}
  connect() {}
}

type RepoInstance = InstanceType<typeof Repo>; // Repo
type RepoCtorParams = ConstructorParameters<typeof Repo>; // [url: string, token?: string | undefined]

// 실전: 팩토리/DI 컨테이너
function createRepo(...args: RepoCtorParams): RepoInstance {
  return new Repo(...args);
}
```
