// Rian

/**
 * 제네릭. (Generic)
 */
type Identity<T> = T
type Num = Identity<number>
type Str = Identity<string>
type Obj = Identity<{ x: 1 }>
const num: Num = 1
const str: Str = 'string'
const obj: Obj = { x: 1 }

/**
 * keyof 연산자.
 */
interface Point {
  x: number
  y: number
  label: string
}

type PointKeys = keyof Point          // 'x' | 'y' | 'label' (유니온 타입)

/**
 * 인덱스드 액세스 타입. (Indexed Access Type)
 */
interface User {
  id: number
  name: string
  isAdmin: boolean
  email?: string
}

type IdType = User['id']              // number
type NameType = User['name']          // string
type AdminType = User['isAdmin']      // boolean
type IdOrName = User['id' | 'name']   // number | string
type EmailType = User['email']        // string | undefined (옵셔널)

/**
 * 타입 제약. (Constraints)
 */
type GetProp<T, K extends keyof T> = T[K]
type UserName = GetProp<User, 'name'> // string
// type Err = GetProp<User, 'age'>    // age는 User에 없음

/**
 * 맵드 타입. (Mapped Types)
 */
type ToStringProps<K extends string> = { [P in K]: string }
type PersonStringProps = ToStringProps<'name' | 'email'>  // { name: string; email: string }

/**
 * 유니온(Union)과 분배.
 *
 * >> K가 유니온이면 맵드 타입은 각 원소를 돌며 프로퍼티를 생성한다.
 */
type U = 'a' | 'b' | 'c'
type MakeFlags<K extends string> = { [P in K]: boolean }
type Flags = MakeFlags<U>   // { a: boolean; b: boolean; c: boolean }

/**
 * 맵드 타입의 수정자. (Modifiers)
 *
 * >> 매핑 과정에서 옵셔널/readonly를 강제하거나 제거할 수 있다.
 */
interface Profile {
  id: number
  nickname?: string
  readonly createdAt: Date
}

type RequiredProfile = { [P in keyof Profile]-?: Profile[P] }         // 모든 프로퍼티를 "필수(Required)"로 변경
type OptionalProfile = { [P in keyof Profile]+?: Profile[P] }         // 모든 프로퍼티를 "선택(Optional)"으로 변경
type MutableProfile = { -readonly [P in keyof Profile]: Profile[P] }  // 모든 프로퍼티를 "읽기 전용 해제"
type ReadonlyProfile = { readonly [P in keyof Profile]: Profile[P] }  // 모든 프로퍼티를 "읽기 전용"으로 변경 (+readonly와 동일)
