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
