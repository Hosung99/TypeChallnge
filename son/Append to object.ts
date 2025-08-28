// 주어진 인터페이스에 새로운 필드를 추가한 object 타입을 구현하세요. 이 타입은 세 개의 인자를 받습니다.

type AppendToObject<T, U extends string|number|symbol, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V
}

// 정답
// Key를 T의 키와 U의 합집합으로 설정하고, Key가 T의 키에 속하면 T[Key]를, 아니면 V를 반환한다.