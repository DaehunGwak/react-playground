/**
 * implicit
 */
let a = "hello";
a = "bye";
// a = 3; // Type 'number' is not assignable to type 'string'.ts(2322)
const c = [1, 2, 3]; // number[] 타입
// c.push("1"); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
const player = {
    name: "nico"
} // type - player: {name: string;}

/**
 * explicit
 */
// let b: boolean = "x"; // Type 'string' is not assignable to type 'boolean'.ts(2322)
let b: boolean = false; // 추천하는 방식은 아니라 말함
const d: number[] = []; // ts 가 타입 추론 못할때는 명시적으로 ㄱㄱ
