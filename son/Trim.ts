// 정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 Trim<T>를 구현하십시오.

type W = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${W}${infer T}` | `${infer T}${W}`
  ? Trim<T>
  : S;

// 정답
// 좌우측을 비교했다. TrimLeft와 동일!
