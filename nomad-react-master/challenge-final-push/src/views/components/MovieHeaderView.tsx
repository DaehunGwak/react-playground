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
  padding: 36px 24px 24px;
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
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
