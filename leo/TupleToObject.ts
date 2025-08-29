const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

typeof tuple;
type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};

// 1. typeof tuple 사용하면 readonly ["tesla", "model 3", "model X", "model Y"]
// 2. T는 해당 PropertyKey === symbol | number | string 으로 사용 즉 객체 키를 받을수있는타입을 [] 배열로 받겠다 선언
// 3.T[number]를 이용해서 유니언타입으로 변경 => // "tesla" | "model 3" | "model X" | "model Y"
