import React from 'react';
import {Box, Wrapper} from "./styles/AppStyles";

function App() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotateZ: 360
        }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          bounce: 0.25,
        }}
      />
    </Wrapper>
  );
}

export default App;
