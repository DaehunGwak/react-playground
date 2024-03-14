import {WhiteBox} from "../styles/AppStyles";

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
  return (
    <WhiteBox
      variants={boxVariants}
      whileHover="hover"
      whileTap="click"
      whileDrag="drag"
      drag
    />
  )
}

export default GestureBox;