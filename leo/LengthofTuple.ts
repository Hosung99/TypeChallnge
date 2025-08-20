type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

type Length<T extends readonly unknown[]> = T["length"];

// 1. 튜플이기 때문에 readOnly unknown[] 으로 생각하여 extends 헀고
// 2. 해당 T 배열의 길이를 구하기위해서 "length"사용
