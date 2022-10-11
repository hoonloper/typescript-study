/*
private - 선언한 클래스 내에서 접근 가능
protected - 선언한 클래스, 상속받은 클래스 내에서 접근 가능
public - 선언한 클래스, 상속받은 클래스, 인스턴스 내에서 접근 가능

Abstract Class(추상 클래스)
- 추상 클래스는 오직 다른곳에서 상속받을수만 있는 클래스
*/
// 추상 클래스
abstract class AbstractClass {
  constructor(
    private stringType: string,
    private numberType: number,
    protected anyType: any
  ) {}
  // 추상 메소드
  abstract getAnyType(): void;

  getStringAndNumberType() {
    return `${this.stringType}, ${this.numberType}`;
  }
}
class ClassType extends AbstractClass {
  getAnyType(): void {
    console.log(this.anyType);
  }
}

const classType = new ClassType("str", 1, true);

classType.anyType;
classType.getStringAndNumberType();
