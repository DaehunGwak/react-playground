import styled from "styled-components";

export const CharactersTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 16px;
`;
export const CharactersText = styled.span`
  font-size: 1.0rem;
`;


export const CharacterCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const CharacterCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 150px;
  border-radius: 16px;
  
  
  &:hover {
    background-color: ${(props) => props.theme.textColor};
    span {
      color: ${(props) => props.theme.backgroundColor};
    }
  }
}
`;

export const CharacterCardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 12px;
  object-fit: cover;
`;
