import React from 'react';
import {Box, Wrapper} from "./styles/AppStyles";

const myVariants = {
  start: { scale: 0 },
  end: { // 이름 맘대로 가능
    scale: 1,
    rotateZ: 360,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      bounce: 0.25,
    }
  }
}

function App() {
  return (
    <Wrapper>
      <Box variants={myVariants} initial="start" animate="end"/>
    </Wrapper>
  );
}

export default App;
