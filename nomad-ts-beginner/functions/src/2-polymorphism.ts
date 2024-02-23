/**
 * Polymorphism? Multi-Structure?
 * - 기존 concrete 타입 대신 generic type 사용
 */
type SuperPrint = <T>(arr: T[]) => void;

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i));
}

superPrint([1, 2, 3, 4]);
superPrint([true, false, false]);
superPrint(["a", "b", "c"]);
superPrint([1, 2, true, false]);


type TakeOne = <T>(arr: T[]) => T;

const takeOne: TakeOne = (arr) => arr[0];

console.log(takeOne([3, 4]));
