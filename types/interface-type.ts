type StringType = string;
type NumberType = 1 | 5 | 10;
type StringsType = "str" | "string" | "s";

// 오브젝트의 모양을 특정해주기 위해 사용
// interface보다 type이 보다 활용성이 좋음
interface InterfaceType {
  str: StringType;
  num: NumberType;
  s: StringsType;
}

const interfaceType: InterfaceType = {
  str: "",
  num: 1,
  s: "s",
};

/* interface 와 type 상속의 차이 */
interface InterfaceParents {}

interface InterfaceChild extends InterfaceParents {}

type TypeParents = {};

type TypeChile = TypeParents & {};

/* interface를 중복으로 사용하면 TS에서 합쳐줌 */
interface Types {
  one: string;
}

interface Types {
  two: string;
}

interface Types {
  three: string;
}

const type: Types = {
  one: "1",
  two: "2",
  three: "3",
};
