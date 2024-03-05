import styled from "styled-components";

const Father = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Box = styled.div`
  // props 전달
  background-color: ${({bgColor}) => bgColor};
  width: 100px;
  height: 100px;
`;

// 기존 스타일 재사용
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

function AdaptingExtending() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="grey"/>
    </Father>
  );
}

export default AdaptingExtending;
