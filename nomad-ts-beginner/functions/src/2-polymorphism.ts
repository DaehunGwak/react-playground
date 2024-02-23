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


function takeOne<T>(arr: T[]): T {
  return arr[0];
}

console.log(takeOne([3, 4]));


type Phone<T> = {
  name: string,
  extraInfo?: T,
};

type GalaxyExtra = {
  version: string,
};

const galaxy: Phone<GalaxyExtra> = {
  name: "Galaxy S22",
  extraInfo: {
    version: "1.2.0003",
    // another: 123, // unknown property error
  }
};

const customPhone: Phone<null> = {
  name: "MyCustom",
};


type arrNumbers = Array<number>; // ts에 기본적으로 선언된 `interface Array<T>`
// react useState 도 제네릭으로 구현되어 있음

