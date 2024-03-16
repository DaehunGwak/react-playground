import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, tomato, #ff9999);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  border-radius: 25px;
  height: 200px;
  background-color: white;
`;

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

function LayoutSelectedBox() {
  const [clicked, setClicked] = useState(false);
  const [clickedBox, setClickedBox] = useState(0);
  const clickBox = (n: number) => {
    setClickedBox(n);
    setClicked(prev => !prev);
  };

  const unFocusOverlay = () => setClicked(false);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map(n =>
          <Box
            key={n}
            layoutId={`box-${n}`}
            onClick={() => clickBox(n)}
          />
        )}
      </Grid>
      <AnimatePresence>
        {clicked
          ? <Overlay
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              onClick={unFocusOverlay}
            >
              <Box
                layoutId={`box-${clickedBox}`}
                style={{width: "400px", height: "200px"}}
              />
            </Overlay>
          : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default LayoutSelectedBox;
