/* 
튜플
- 튜플은 배열을 생성할 수 있게 하는데 
  최소한의 길이를 가져야하며 특정 위치에 
  특정 타입이 있어야 함. 

- 항상 정해진 갯수의 요소를 가져야 하는 배열을 지정할 수 있음.
*/

const tuple: [string, number, boolean] = ["string", 1, false];
tuple[0] = 1; // Error

// Tuple + readonly
const readonlyTuple: readonly [string, number, boolean] = ["string", 1, false];
readonlyTuple[0] = "hi"; // 읽기 전용 Error
