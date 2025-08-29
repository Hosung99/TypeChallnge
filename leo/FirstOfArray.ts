type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

type First<T extends readonly unknown[]> = T extends [] ? never : T[0];

// 1. 어떤 타입의 튜플이와야한다고 생각함 따라서 readOnly unknown[]
// 2. 조건문으로 빈배열일시 never를 통해 타입을없애고
// 3. 빈배열이아니면 첫번째 인덱스를 반환
