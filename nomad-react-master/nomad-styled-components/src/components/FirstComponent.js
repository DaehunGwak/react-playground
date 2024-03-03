import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const TealBox = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const TomatoBox = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

function FirstComponent() {
  return (
    <Father>
      <TealBox>
        <Text>Hello</Text>
      </TealBox>
      <TomatoBox />
    </Father>
  );
}

export default FirstComponent;
