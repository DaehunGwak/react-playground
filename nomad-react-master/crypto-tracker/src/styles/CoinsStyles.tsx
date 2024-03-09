import styled from "styled-components";

export const CoinsUnorderedList = styled.ul``;

export const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 10px;
  margin-bottom: 10px;
  
  a {
    transition: color 0.2s ease-in;
    display: block; /* TODO: block 이 왜 상위 까지 다 링크로 만드는지 이해할 필요 있음 */
    padding: 16px;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor}
    }
  }
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
`;

export const CoinWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px
`;
