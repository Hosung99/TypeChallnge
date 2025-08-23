// 조건 C, 참일 때 반환하는 타입 T, 거짓일 때 반환하는 타입 F를 받는 타입 If를 구현하세요. C는 true 또는 false이고, T와 F는 아무 타입입니다.


type If<C extends boolean, T, F> = C extends true ? T : F;


// 정답

// extends를 이용해 삼항연산자처럼 했다.
// 에러케이스가 하나 있었는데, C타입을 boolean으로 제한해 해결했다.