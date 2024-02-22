const aa: number[] = [1, 2];
const bb: string[] = ["ab", "cd"];
const cc: boolean[] = [false, true, false];

type Age = number;
type Person = {
    name: string;
    age?: Age; // 없어도 되는 필드는 ? 키워드를 변수 뒤에 추가
};

const person1: Person = {
    name: "daehun",
};

const person2: Person = {
    name: "young",
    age: 20,
};


// 없을 수 있기 때문에 에러 발생, ! 키워드로 지금은 null일 수 없다! 를 명시할 수 있음
if (person2.age! < 10) { 
}

function personFrom(name: string): Person {
    return {
        name,
    }
}

const person3 = personFrom("min");
person3.age = 30; // 함수 반환 타입 없을 때 에러
