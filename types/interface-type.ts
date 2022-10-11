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
