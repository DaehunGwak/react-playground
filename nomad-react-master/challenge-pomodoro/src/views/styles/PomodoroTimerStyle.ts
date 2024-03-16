import styled from "styled-components";
import {motion} from "framer-motion";

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TimerCard = styled(motion.div)`
  width: 150px;
  height: 220px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 600;
  color: tomato;
  background-color: rgba(255, 255, 255, 0.95);
`;

export const TimerDivider = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 4rem;
  font-weight: bold;
  position: relative;
  bottom: 6px;
`;
