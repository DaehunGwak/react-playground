import styled from "styled-components";

export const DetailImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 12px;
  object-fit: cover;
`;

export const DetailBigText = styled.span`
  font-size: 1.8rem;
  margin: 12px 12px 32px;
`;


export const FilmsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 300px;
`;

export const Film = styled.div`
  border-radius: 6px;
  padding: 4px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.backgroundColor};
  font-size: 1.2rem;
`;
