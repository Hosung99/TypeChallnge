// 문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 Capitalize<T>를 구현하세요.

type MyCapitalize<S extends string> = S extends `${infer R}${infer U}`
  ? `${Uppercase<U>}${R}`
  : "";

// 반 정답
// Uppercase하는게 있을 것 같아서 인터넷 검색을해서 찾게되었다.
