import React from 'react';
import Circle from "./components/Circle";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Circle
        backgroundColor="teal"
        text="pass text"
      />
      <Circle
        backgroundColor="tomato"
        borderColor="#111"
      />
      <Counter/>
    </div>
  );
}

export default App;
