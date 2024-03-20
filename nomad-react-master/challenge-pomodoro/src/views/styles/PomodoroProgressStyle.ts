import styled from "styled-components";

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 24px;
`;

export const ProgressCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ProgressTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: -1px;
`;

export const ProgressContents = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;
