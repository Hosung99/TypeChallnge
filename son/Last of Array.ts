// 배열 T를 사용하고 마지막 요소를 반환하는 제네릭 Last<T>를 구현합니다.

type Last<T extends unknown[]> = T extends [...infer U, infer V] ? V : never;

// 반 정답
// 왜 반 정답이냐? infer를 두개쓸 생각을 못했다.
// [...infer V]로 스프레드해서 하려고는데.. 마지막 요소를 뽑아내는 방법을 몰랐다.
// 찾아보니 [...infer U, infer V]로 하면 V는 마지막 요소가 된다고한다! 와 신기해
// 마지막 뽑고 만약 빈 값이면 never를 반환하도록 했다.
