// 타입스크립트만의 타입
/**
 * unknown
 * - 응답 객체의 필드의 타입을 모른다면 사용
 */
let tt: unknown;
// let ttt = tt + 1; // tt 가 무슨 타입인지 모르므로 error
if (typeof tt === 'number') {
    let ttt = tt + 1;
}
if (typeof tt === 'string') {
    let ttt = tt.toUpperCase();
}

/**
 * void: 리턴 없음
 */
function wow() { // 기본적으로 리턴 타입 없으면 자동적으로 void
    console.log('wow');
}

/**
 * never
 * - 오류 발생만 하는 함수일 때 사용
 * - 아무 타입도 아닐 때
 * - 거의 쓸일은 없을 것이다~ - 니꼬쌤
 */
function wwooww(): never {
    throw new Error('wwooww');
}

function checkName(name: string | number) {
    if (typeof name === 'string') {
        name // type is string
    } else if (typeof name == 'number') {
        name // type is number
    } else {
        name // type is never
    }
}
