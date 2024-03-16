import {BiggerBox, WhiteBox, Wrapper} from "../styles/AppStyles";
import {useRef} from "react";

const boxVariants = {
  hover: {scale: 2, rotateZ: 90,},
  click: {scale: 1, borderRadius: "100px"},
  drag: {
    backgroundColor: "#fbc531",
    transition: {
      duration: 3
    }
  }
};


function GestureBox() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <WhiteBox
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={1}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default GestureBox;