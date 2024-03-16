import { motion } from "framer-motion";
import styled from "styled-components";

export const ActionButton = styled(motion.button)`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  background-color: rgba(0, 0, 0, 0.12);
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSvg = styled(motion.svg)`
  width: 60px;
  height: 60px;
`;

const IconPath = styled(motion.path)`
  fill: rgba(255, 255, 255, 0.90);
`;

export const PlayIconPath = styled(IconPath)`
  d: path("M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z");
`;

export const PauseIconPath = styled(IconPath)`
  d: path("M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3h-1.5ZM12.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75h-1.5Z");
`;
