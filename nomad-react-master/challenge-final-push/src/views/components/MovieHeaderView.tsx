import styled from "styled-components";

function MovieHeaderView() {
  return (
    <Wrapper>
      <FixedBox/>
      <Title>iimov.</Title>
      <FixedBox>search</FixedBox>
    </Wrapper>
  );
}

export default MovieHeaderView;

const Wrapper = styled.header`
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  flex: 1;
  text-align: center;
`;

const FixedBox = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
