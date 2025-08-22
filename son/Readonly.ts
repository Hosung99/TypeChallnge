// T의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 Readonly<T>를 이를 사용하지 않고 구현하세요.

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

// 정답

// T의 프로퍼티들을 뽑아와서 mapped타입으로 돌아주며 매핑한다.
// 이때 readonly키워드를 명시하여 매핑하는 속성들을 readonly로 바꿔준다.
