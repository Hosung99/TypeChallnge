// T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 이를 사용하지 않고 구현하세요.

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// 오답

// 10분정도 도전했는데 실패했다.
// 사유 : K를 수정해도되는지 몰랐다.. (너무한거아닙니까 이건)
// type MyPick<T, K> = {
//   [key in K]: T[key];
// };
// 처음엔 이렇게 풀었다.
// 그랬더니 K형식은 string | number | symbol 형식으로 할당을 못한다고 에러가 발생했다.

// keyof 키워드는 객체타입의 Property들을 뽑아내는 키워드이다.
// 이렇게 뽑아낸 집합을 K가 extends함으로써 K는 반드시 해당 집합을 포함해야한다.
// 이제 mapped타입을 이용하여 객체타입을 반복적으로 돌아준다. (인터페이스에선 불가능)
// T의 Property인 K를 T의 객체형태로 매핑을 해준다.
