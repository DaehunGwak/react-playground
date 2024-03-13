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
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.1);
`;
