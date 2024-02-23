// type 에 overloading 반영하는 법
type Subtract = {
  (a: number, b: number): number
  (a: number, b: string): number
  (a: string, b: number): number
  (a: string, b: string): number

  (a: number, b: number, c: number) : number
};

const subtract: Subtract = (a, b) => {
  let aa = a;
  let bb = b;
  if (typeof a === "string") {
    aa = parseFloat(a);
  }
  if (typeof b === "string") {
    bb = parseFloat(b);
  }
  return aa - bb;
}

// Next Router 예시
type Config = {
  path: string,
  state: any,
}
type Push = {
  (path: string): void
  (config: Config): void
}

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
}

push("/path");
push({
  path: "/path",
  state: 1,
});
