function add(a: number, b: number): number {
  return a + b;
}

const addArrowVer = (a: number, b: number) => a + b;

// 왜 이렇게 선언하는 거지?
// function 파라미터로 함수 넣을때,
// 파라미터 타입에 콜 시그네쳐 다 적으면 너무 길어짐.
// 그때 아래처럼 타입 정의 해서 사용하면 좋을 듯
type Add = (a: number, b: number) => number;

const addSignatureVer: Add = (a, b) => a + b;

function testCallFromSignature(a: number, b:number, addCallback: Add) {
  return addCallback(a, b);
}

testCallFromSignature(2, 3, (a, b) => a + a + b);
