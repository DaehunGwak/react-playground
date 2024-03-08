import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 10vh;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
  font-weight: bold;
`;

export const Loader = styled.div`
  text-align: center;
`;
