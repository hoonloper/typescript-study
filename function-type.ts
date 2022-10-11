// 함수의 리턴 타입
type Player = {
  name: string;
  age?: number;
};

const playerOne: Player = {
  name: "one",
};

const playerTwo: Player = {
  name: "two",
  age: 15,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const newPlayer: Player = playerMaker("newPlayer");
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
const errorCallSignatures: CallSignatures = (num1, num2) => "" + num1 + num2; // Error

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
  if (typeof b === "string") {
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
  if (typeof config === "string") {
    // ...Code
  } else {
    // ...Code
  }
};

// 다른 여러개의 argument를 가질 경우
type Args = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const args: Args = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

/*
Polymorphism(다형성)
*/

/*
Generics(제네릭)
*/
