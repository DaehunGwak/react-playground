import styled from "styled-components";
import {Link} from "react-router-dom";

function NotFoundPageView() {
  return (
    <Wrapper>
      <Text>This page is not found.. 🫠</Text>
      <HomeLink to="/">Go to home</HomeLink>
    </Wrapper>
  )
}

export default NotFoundPageView;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 43, 0);
`;

const Text = styled.span`
  font-size: 2rem;
`;

const HomeLink = styled(Link)`
  padding: 24px;
  color: darkolivegreen;
`;