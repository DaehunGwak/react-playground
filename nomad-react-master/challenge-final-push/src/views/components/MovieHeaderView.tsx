import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {BackIcon, SearchIcon} from "../icons/IimovIcons";
import {useCallback} from "react";

function MovieHeaderView() {
  const {pathname, key} = useLocation();
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    if (key === 'default') {
      navigate('/');
      return;
    }
    navigate(-1);
  }, [navigate, key]);

  const navigateSearch = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <Wrapper>
      <FixedBox>
        {pathname === "/search"
          ? <BackIcon onClick={navigateHome}/>
          : undefined}
      </FixedBox>
      <Title>iimov.</Title>
      <FixedBox>
        {pathname === "/search"
          ? undefined
          : <SearchIcon onClick={navigateSearch}/>}
      </FixedBox>
    </Wrapper>
  );
}

export default MovieHeaderView;

const Wrapper = styled.header`
  padding: 2vw 4vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.4rem;
  flex: 1;
  text-align: center;
`;

const FixedBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
