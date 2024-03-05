import styled from "styled-components";

interface ContainerProps {
  $backgroundColor: string
}

interface CircleProps {
  backgroundColor: string
}

/**
 * Warning: React does not recognize the `backgroundColor` prop on a DOM element.
 * If you intentionally want it to appear in the DOM as a custom attribute,
 * spell it as lowercase `backgroundcolor` instead. If you accidentally passed
 * it from a parent component, remove it from the DOM element.
 *
 * 위 워닝은 transient props 로 해결 가능합니다.
 * props 앞에 `$` 를 선언해줘 dom tag 의 attribute 에 포함되지 않게 됩니다.
 *
 * https://summerr.tistory.com/106
 */
//
const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.$backgroundColor};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

function Circle({backgroundColor}: CircleProps) {
  return (
    <Container $backgroundColor={backgroundColor}/>
  );
}

export default Circle;


// learned
// interface PlayerShape {
//   name: string,
//   age: number,
// }
//
// const sayHello = (playerObj: PlayerShape) =>
//   `Hello ${playerObj.name} (age: ${playerObj.age})`;
//
// sayHello({name: "daehun", age:20});
// sayHello({name: "wrong", age:20, hi: "somthing"}); // type error
