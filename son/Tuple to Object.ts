// 배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key;
};

// 오답
// 레오가 알려주셔서 맞췄다.
// key로 가능한 type은 string, number, symbol밖에 없다.
// 따라서 any를 해당 집합으로 좁힌다.
// 인덱스의 경우 number만가능하므로 제한했다.