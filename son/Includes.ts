// JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.

type Includes<T extends readonly unknown[], U> = {
  [key in keyof T]: Equal<T[key], U>
}[number] extends false ? false : true

// 오답
// 참 어렵다..
// 일단 처음 생각한건 in keyof로 돌면서 boolean형태로 값을 추출해 [number]로 union형태로 만들려고했다.
// 그 다음에 extends로 false, true판단을 하려고했는데..!
// boolean에서 true, false판단하는법이 떠오르지 않았다.
// 찾아보니, 다들 MyEqual이란 타입을 구현해서 재귀형태로 구현을했는데..
// 눈이 갔던건 Equal이란 타입이었다.
// 밑에 테케에서 사용하는 타입이다.
// 이걸 이용해서, 풀 생각을하다니.. 사람들 참 똑똑하다.