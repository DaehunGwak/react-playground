import styled from "styled-components";
import {motion} from "framer-motion";
import {useState} from "react";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(135deg, tomato, #ff9999);
`;

const Box = styled(motion.div)`
  border-radius: 25px;
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
`;

// layout property 를 활성화 하면 자동으로 css 변화를 감지해 타겟이 애니메이팅됨
function LayoutBox() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {clicked ? null : <Circle layoutId="same-id" style={{borderRadius: "25px"}}/>}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="same-id" style={{borderRadius: 0, scale: 2}}/> : null}
      </Box>
    </Wrapper>
  );
}

export default LayoutBox;