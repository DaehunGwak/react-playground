import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  color: black;
  background: linear-gradient(135deg, tomato, #ff9999);
`;

const Box = styled(motion.div)`
  border-radius: 35px;
  width: 500px;
  height: 300px;
  background-color: white;
`;

const Space = styled.div`
  height: 100px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  }
}

function AnimatePresenceBox() {
  const [showing, setShowing] = useState(false);

  const toggleShowing = () => {
    setShowing(cur => !cur);
  }

  return (
    <Wrapper>
      <AnimatePresence>
        {
          showing
            ? <Box
                variants={boxVariants}
                initial="initial"
                animate="visible"
                exit="leaving"
              />
            : null
        }
      </AnimatePresence>
      <Space/>
      <button onClick={toggleShowing}>click</button>
    </Wrapper>
  );
}

export default AnimatePresenceBox;
