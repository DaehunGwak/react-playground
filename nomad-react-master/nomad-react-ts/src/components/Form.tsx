import React, {useState} from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border-color: ${(props) => props.theme.textColor};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
`;

export default function Form() {
  const [username, setUsername] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setUsername(value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("username:", username);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <Button>Log in</Button>
      </form>
    </div>
  );
}
