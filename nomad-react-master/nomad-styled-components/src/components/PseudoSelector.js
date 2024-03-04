import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const boxRotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${boxRotation} 1s linear infinite;

  ${Emoji}:hover {
    font-size: 72px;
  }
`;

function PseudoSelector() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🥳</Emoji>
      </Box>
      <Emoji>🤐</Emoji>
    </Wrapper>
  );
}

export default PseudoSelector;
