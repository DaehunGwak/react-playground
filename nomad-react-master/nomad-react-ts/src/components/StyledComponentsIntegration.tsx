import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function StyledComponentsIntegration() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default StyledComponentsIntegration;
