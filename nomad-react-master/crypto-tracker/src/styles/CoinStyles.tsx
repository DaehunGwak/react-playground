import styled from "styled-components";

export const CoinDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CoinDetailCardWrapper = styled.div`
  background-color: #1f1f1f;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CoinDetailCardItem = styled.div`
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
`;

export const CoinDetailCardTitle = styled.span`
  font-size: 0.7rem;
  margin-bottom: 6px;
`;

export const CoinDetailCardContent = styled.span`
  font-size: 1.5rem;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
`;

export const Tab = styled.div<{$isActive: boolean}>`
  flex: 1;
  border-radius: 12px;
  background-color: ${(props) => props.$isActive ? "#313131" : "#1f1f1f"};
  text-align: center;
  
  a {
    padding: 12px;
    display: block;
  }

  &:hover {
    background-color: #2f2f2f;
  }
`;
