console.log("hello ts");

// error TS2365: Operator '+' cannot be applied to types 'number[]' and 'boolean'.
// console.log([1, 2, 3] + false);


function divide(a: number, b: number) {
    return a / b;
}

// error TS2554: Expected 2 arguments, but got 1.
// divide("xxxx");

// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// divide(1, "2");

console.log(divide(1, 2));


const me = {
    name: "daehun",
}

// Type 'number' is not assignable to type 'string'.ts(2322)
// me.name = 123;

// Property 'hello' does not exist on type '{ name: string; }'.ts(2339)
// me.hello();
