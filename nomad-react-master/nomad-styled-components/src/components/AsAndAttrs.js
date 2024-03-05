import styled from "styled-components";

const Father = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  padding: 10px 25px;
`;

const Input = styled.input.attrs({ required: true, minlength: 10 })`
  padding: 5px;
  background-color: tomato;
`;

// 태그 변경 as
function AsAndAttrs() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default AsAndAttrs;
