// 읽기 전용
type ReadonlyPlayer = {
  readonly name: string;
  age?: number;
};

function makeReadonlyPlayer(name: string): ReadonlyPlayer {
  return {
    name,
  };
}

const readonlyPlayer: ReadonlyPlayer = makeReadonlyPlayer("player");
readonlyPlayer.age = 20;

// name을 수정할 경우 TS가 잡아줌.
readonlyPlayer.name = "readOnly";

// 또 다른 예제
const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1); // 읽기 전용 에러 발생

const names: readonly string[] = ["1", "2", "3", "4"];
names.push("1"); // 읽기 전용 에러 발생
