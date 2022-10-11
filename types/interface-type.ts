/*
Type, Interface 차이점
Interface
- 원하는 메소드와 property를 클래스가 가지도록 강제할 수 있음
- 자바스크립트로 컴파일되지 않음
- 추상클래스와 비슷한 보호를 제공하지만 자바스크립트 파일에서 보이지 않음
- 클래스의 특정 모양을 정해주는 경우에 Interface를 사용하는 게 좋음(추상 클래스는 코드가 남기 때문)

Type을 쓰고 싶으면 type 키워드 사용
- object 모양을 만들거나, 타입 alias를 만듦 또는 특정된 값

보통 오브젝트 모양을 알려주기 위해서 Interface를 사용하고 이 외에는 Type을 사용
*/
type TypeA = {
  type: string;
};

type TypeAA = TypeA & {
  type2: number;
};

const typeA: TypeAA = {
  type: "string",
  type2: 1,
};

interface TypeB {
  type: string;
}

interface TypeBB extends TypeB {
  type2: number;
}

// 새로운 프로퍼티를 생성할 때
interface TypeBB {
  type3: boolean;
}

const typeB: TypeBB = {
  type: "string",
  type2: 1,
  type3: false,
};

// 추상 클래스 대체 가능
type TypeX = {
  type: string;
};

interface TypeY {
  type: string;
}

class TypeClass implements TypeX, TypeY {
  constructor(public type: string) {}
}

/* ================================ */
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

/* 추상클래스를 인터페이스로 변환 */
// before
abstract class ClassAbs {
  constructor(protected consoleStr: string, protected consoleNum: number) {}

  abstract consoleString(consoleStr: string): string;
  abstract consoleNumber(): number;
}

class BeforeConsole extends ClassAbs {
  consoleString() {
    return `${this.consoleStr}, ${this.consoleNum}`;
  }
  consoleNumber() {
    return this.consoleNum;
  }
}

// after
interface InterfaceAbs {
  consoleStr: string;
  consoleNum: number;
  consoleString(consoleStr: string): string;
  consoleNumber(): number;
}

interface PlusAbs {
  cons: string;
}

/*  
interface 상속의 문제점은 private, property 등을 사용하지 못함
추상클래스에서 처리하던 constructor가 interface에는 없음
*/
class AfterConsole implements InterfaceAbs, PlusAbs {
  constructor(
    public consoleStr: string,
    public consoleNum: number,
    public cons: string
  ) {}
  consoleString() {
    return `${this.consoleStr}, ${this.consoleNum}`;
  }
  consoleNumber() {
    return this.consoleNum;
  }
}

/* interface를 type으로 지정 */
function makeType(type: InterfaceAbs) {
  return typeof type;
}

makeType({
  consoleStr: "str",
  consoleNum: 1,
  consoleNumber: () => 5,
  consoleString: () => "str",
});
