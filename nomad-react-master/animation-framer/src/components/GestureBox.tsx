import {BiggerBox, WhiteBox} from "../styles/AppStyles";
import {useRef} from "react";

const boxVariants = {
  hover: { scale: 2, rotateZ: 90, },
  click: { scale: 1, borderRadius: "100px" },
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
  );
}

export default GestureBox;