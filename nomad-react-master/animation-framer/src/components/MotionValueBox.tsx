import {WhiteBox} from "../styles/AppStyles";
import {useMotionValue, useMotionValueEvent, useTransform} from "framer-motion";

function MotionValueBox() {
  // motion value 는 rerender 를 일으키지 않음 (react state 가 아님)
  const x = useMotionValue(0);
  const scale = useTransform(x, [-500, 0, 500], [2, 1, 0.1]);

  useMotionValueEvent(scale, "change", (value) => console.log(value));

  return (
    <>
      <WhiteBox
        style={{x, scale}}
        drag="x"
        dragSnapToOrigin
      />
    </>
  )
}

export default MotionValueBox;
