type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type Includes<T extends unknown[], K extends unknown> = K extends T[number]
  ? true
  : false;

// 1. T를 unknown[]으로 배열로 받을수있도록 설정
// 2. K 값을 모르는값으로 받기
// 3. T[number]을 이용해 배열값들이 유니언으로 "Kars" | "Esidisi" | "Wamuu" | "Santana" 추출
// 4. K가 해당 유니언에 포함된다면 true 아니면 false 반환
