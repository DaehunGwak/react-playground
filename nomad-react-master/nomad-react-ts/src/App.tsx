import React from 'react';
import Circle from "./components/Circle";
import Counter from "./components/Counter";
import Form from "./components/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <Circle
        backgroundColor="teal"
        text="pass text"
      />
      <Circle
        backgroundColor="tomato"
        borderColor="#111"
      />
      <Counter/>
      <Form/>
    </Wrapper>
  );
}

export default App;
