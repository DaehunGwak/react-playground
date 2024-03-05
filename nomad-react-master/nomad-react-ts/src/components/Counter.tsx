import {useState} from "react";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor}
`;

function Counter() {
  const [count, setCount] = useState<number>(0);

  // setCount(true); // type error

  return (
    <div>
      <Text>{count}</Text>
      <Button onClick={(_) => setCount(count + 1)}>
        up
      </Button>
    </div>
  );
}

export default Counter;
