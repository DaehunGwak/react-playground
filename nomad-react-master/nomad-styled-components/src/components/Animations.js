import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// css keyframes: from, to 로도 가능
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${boxRotation} 1s linear infinite;
  // pseudo selector (일반 css 에서 nested depth 지원 안함)
  span {
    font-size: 36px;
    &:hover { // mouse over
      font-size: 72px;
    }
    &:active { // click
      opacity: 0;
    }
  }
`;

function Animations() {
  return (
    <Wrapper>
      <Box>
        <span>🥳</span>
      </Box>
    </Wrapper>
  );
}

export default Animations;
