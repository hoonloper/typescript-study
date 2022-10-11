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
Polymorphism(다형성)
*/

/*
Overloading(오버로딩)
*/

/*
Generics(제네릭)
*/
