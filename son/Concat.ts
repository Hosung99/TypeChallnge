// JavaScript의 Array.concat 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];


// 정답
// Concat이 뭔데.. 하고 찾아보았다.
// 배열을 합치는데 순수함수 형태로 기존배열은 안바꾸는 함수이다.
// 그래서~ T,U를 배열로 제한하고 rest로 합쳤다.
// readonly를 안써서 에러가 나, 붙여주었다.