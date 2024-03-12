import styled from "styled-components";

export const CountryForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
`;

export const CountryInputText = styled.input`
  border-radius: 6px;
  border-color: #3f3f3f;
  border-style: solid;
  border-width: 1px;
  background-color: #152026;
  color: white;
  height: 3rem;
  padding: 12px;
  font-size: 1.3rem;
  margin-bottom: 6px;
`;

export const CountryInputErrorText = styled.span`
  padding: 6px;
  color: tomato;
  font-weight: 500;
  font-size: 1.3rem;
`;

export const CountryFormButton = styled.button`
  border-radius: 8px;
  border-style: none;
  border-width: 1px;
  padding: 10px;
  font-size: 1.3rem;
  background-color: black;
  color: white;
  box-shadow: 1px 3px 0 rgb(0,0,0,0.5);
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
    position: relative;
    top:2px;
  }
`;
