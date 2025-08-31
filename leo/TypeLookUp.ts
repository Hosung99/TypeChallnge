interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}
type MyDogType = LookUp<Cat | Dog, "dog">; // 기대되는 결과는 `Dog`입니다.

type LookUp<T, K> = T extends { type: K } ? T : never;

// 1. 분배법칙을 이용해서 해당 타입에 type: K 로 있는지 없는지 확인한다 !
