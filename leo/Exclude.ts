type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type MyExclude<T, K> = T extends K ? never : T;

//1. T, K 로 기존배열과 뺄것 받아오기
//2.T 가 유니온 일때 분배법칙 적용  ex)  "a" extends "a", "b" extends "a", "c" extends "a"
//3. 같으면 never로 타입 없애고 , 아니면 그대로 사용
