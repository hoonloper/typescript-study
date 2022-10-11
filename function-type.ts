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
