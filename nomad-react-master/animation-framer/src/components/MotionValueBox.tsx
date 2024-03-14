import {WhiteBox} from "../styles/AppStyles";
import {useMotionValue, useMotionValueEvent} from "framer-motion";

function MotionValueBox() {
  // motion value 는 rerender 를 일으키지 않음 (react state 가 아님)
  const x = useMotionValue(0);

  useMotionValueEvent(x, "change", (value) => console.log(value));

  return (
    <>
      <button onClick={() => x.set(200)}>move</button>
      <WhiteBox
        style={{x}}
        drag="x"
        dragSnapToOrigin
      />
    </>
  )
}

export default MotionValueBox;
