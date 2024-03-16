import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: black;
  background: linear-gradient(135deg, tomato, #ff9999);
`;

const Box = styled(motion.div)`
  border-radius: 35px;
  width: 200px;
  height: 150px;
  position: absolute;
  top: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const boxVariants = {
  entry: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5
      }
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5
      }
    };
  }
}

function SliderBox() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible(prev => prev === 10 ? 10 : prev + 1);
  };
  const previousPlease = () => {
    setBack(true);
    setVisible(prev => prev === 1 ? 1 : prev - 1);
  };

  return (
    <Wrapper>
      <AnimatePresence
        mode="wait"
        custom={back}
      >
        <Box
          key={visible}
          variants={boxVariants}
          custom={back}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={previousPlease}>prev</button>
    </Wrapper>
  )
}

export default SliderBox;