import styled from "styled-components";
import {motion} from "framer-motion";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  color: black;
  background: linear-gradient(135deg,tomato,#ff9999);
`;

export const Box = styled(motion.div)`
  padding: 10px;
  width: 200px;
  height: 200px;
  border-radius: 35px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Circle = styled(motion.div)`
  place-self: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;

export const WhiteBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 35px;
  background-color: white;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;