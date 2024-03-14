import React from 'react';
import {Box, Circle, Wrapper} from "./styles/AppStyles";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1.0,
    transition: {
      type: "tween",
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  },
}

const circleVariants = {
  start: {
    opacity: 0,
    y: -10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
}

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box>
    </Wrapper>
  );
}

export default App;
