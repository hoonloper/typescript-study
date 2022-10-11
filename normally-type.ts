// TS 기본 타입들
const str: string = "string";
const bool: boolean = true;
const num: number = 1;
const arrStr: string[] = ["string"];
const arrBool: boolean[] = [true];
const arrNum: number[] = [1, 2, 3];

const varUndefined: undefined = undefined;
const varNull: null = null;

/* 
any 타입
any 타입은 TS로부터 자유로워지고 싶을 때 사용, TS 비활성화
빈값은 any가 됨
*/
const a: any[] = [1, 2, 3, 4];
const b: any = true;

a + b; // 동작

/* unknown, void, never */
// unknown
let unknownType: unknown;
let num1 = unknownType + 1; // Error

if (typeof unknownType === "number") {
  let num1 = unknownType + 1; // 동작
}

unknownType.toUpperCase(); //Error
if (typeof unknownType === "string") {
  let str1 = unknownType.toUpperCase(); // 동작
}

// void
// 보통 아무것도 리턴하지 않는 함수에 사용
function funcVoid(): void {
  // void 타입은 선택적으로 명시
  console.log("void");
  // no return
}

// never
// 함수가 절대 리턴하지 않을 때 발생
function funcNever(): never {
  return "never"; // Error
  throw new Error("never");
}

// 혹은 타입이 두가지 이상일 때 발생
function funcNever2(name: string | number) {
  name + 1; // Error
}

function funcNever3(name: string | number) {
  if (typeof name === "string") {
    // string일 때 코드
  } else if (typeof name === "number") {
    // number일 때 코드
  } else {
    // 외 코드
  }
}
