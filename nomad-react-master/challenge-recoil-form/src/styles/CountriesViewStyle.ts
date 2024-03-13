import styled from "styled-components";

export const CountryItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 8px 0;
  align-items: center;
`;

export const CountryName = styled.span`
  font-size: 1.6rem;
  color: lightgrey;
`;

export const CountryActionBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background-color: #0A151C;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 0 rgb(0,0,0,0.5);
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
    position: relative;
    top:1px;
  }
`;
