// 옵셔널 타입
const beforePlayerOne: {
  name: string;
  age?: number;
} = {
  name: "one",
};

const beforePlayerTwo: {
  name: string;
  age?: number;
} = {
  name: "two",
  age: 15,
};

// 타입 지정 후
type BeforePlayer = {
  name: string;
  age?: number;
};

const afterPlayerOne: BeforePlayer = {
  name: "one",
};

const afterPlayerTwo: BeforePlayer = {
  name: "two",
  age: 15,
};

// 타입 확장, 과한 확장은 되려 독이될 수 있어 필요한 만큼만 확장하는 게 좋음.
type Age = number;
type Name = string;

type AfterPlayer = {
  name: Name;
  age?: Age;
};
