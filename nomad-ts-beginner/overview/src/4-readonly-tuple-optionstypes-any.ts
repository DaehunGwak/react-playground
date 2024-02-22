/**
 * readonly
 */
type Book = {
    readonly title: string;
    createdDate: Date;
}

const cleanCode: Book = {
    title: "Clean Code",
    createdDate: new Date(2024, 1, 22, 0, 0, 0), // Date 사용 시, month 는 1씩 빼줘야 함
};
// cleanCode.title = "another title"; // readonly property 는 수정 불가


const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(6); // 마찬가지로 불가


/**
 * tuple: 타입, 크기 제한 배열
 */
const pp: [string, number, boolean] = ["daehun", 20, false];
// pp[0] = 2; // 타입 에러


/**
 * optional types
 * - age?: number > age: number | undefined
 */
let nullUndefined: null | undefined = null;
nullUndefined = undefined;

/**
 * any
 * - 왠만하면 사용하지 않는 것을 권장 (타입스크립트를 사용하는 의미가 없음)
 */
let aaa; // any type
let bbb: any;
aaa = 30;
aaa = "test";
