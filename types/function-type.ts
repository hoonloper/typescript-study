// 함수의 리턴 타입
type Player = {
  name: string;
  age?: number;
};

const playerOne: Player = {
  name: 'one',
};

const playerTwo: Player = {
  name: 'two',
  age: 15,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const newPlayer: Player = playerMaker('newPlayer');
newPlayer.age = 20;

// Example by Arrow Func
const secondPlayerMaker = (name: string): Player => ({
  name,
});

/*
Call Signatures
- 함수 혹은 변수에 마우스를 올렸을 때 추론하는 타입을 칭함.
- 함수의 동작을 타입으로 지정할 수 있음.
*/
const beforeCallSignatures = (num1: number, num2: number) => num1 + num2;

type CallSignatures = (num1: number, num2: number) => number;
const afterCallSignatures: CallSignatures = (num1, num2) => num1 + num2;
const errorCallSignatures: CallSignatures = (num1, num2) => '' + num1 + num2; // Error

/*
Overloading(오버로딩)
- 오버로딩은 함수가 여러개의 Call Signatures를 가지고 있을 때 발생
- 핵심은 서로 다른 여러 개의 Call Signatures를 가질 때
*/
type OverloadingCallSignatures = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
const overloadingCallSignatures: OverloadingCallSignatures = (a, b) => {
  if (typeof b === 'string') {
    return a;
  }

  return a + b;
};

// 또 다른 예제
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config: string | Config) => {
  if (typeof config === 'string') {
    // ...Code
  } else {
    // ...Code
  }
};

// 다른 여러개의 argument를 가질 경우
type OverloadingArgs = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const overloadingArgs: OverloadingArgs = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

/*
Polymorphism(다형성)
Generics(제네릭)
제네릭은 Placeholder와 같음
*/
type BeforeSuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
  (arr: (number | boolean | string)[]): void;
};

const beforeSuperPrint: BeforeSuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

beforeSuperPrint([1, 2, 3, 4]);
beforeSuperPrint([true, false, true, true]);
beforeSuperPrint(['1', '2', '3', '4']);
beforeSuperPrint([1, 2, true, false]);
beforeSuperPrint([1, 2, true, false, '1']);

type AfterSuperPrint = <Type>(arr: Type[]) => void;

const afterSuperPrint: AfterSuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

afterSuperPrint([1, 2, 3, 4]);
afterSuperPrint([true, false, true, true]);
afterSuperPrint(['1', '2', '3', '4']);
afterSuperPrint([1, 2, true, false]);
afterSuperPrint([1, 2, true, false, '1']);
afterSuperPrint([1, 2, true, false, '1', [1], { str: 'string' }]); // TS에서 추론해줌

// 함수의 리턴값 추론
type NewSuperPrint = <Type>(arr: Type[]) => Type;

const newSuperPrint: NewSuperPrint = (arr) => arr[0];

const printTest1 = newSuperPrint([1, 2, 3, 4]); // printTest1 : number
const printTest2 = newSuperPrint([true, false, true, true]); // printTest2 : boolean
const printTest3 = newSuperPrint(['1', '2', '3', '4']); // printTest3 : string
const printTest4 = newSuperPrint([1, 2, true, false]); // printTest4 : number | boolean

// Generic(제네릭) 추가
type AddGeneric = <T, M>(a: T[], b: M) => T;

/* Conclusions */
function genericTest<V>(a: V[]) {
  return a[0];
}

const test1 = genericTest([1, 2, 3, 4]);
const test2 = genericTest<boolean>([1, 2, 3, 4]); // Error

// Generic을 이용해 확장 가능
type GenericType<E> = {
  str: string;
  extraInfo: E;
};

type GenericExtra = { isResult: boolean };
type PlusGenericType = GenericType<GenericExtra>;

const varGeneric: PlusGenericType = {
  str: 'string',
  extraInfo: {
    isResult: true,
  },
};
