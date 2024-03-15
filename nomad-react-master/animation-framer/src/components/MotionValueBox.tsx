import {LongWrapper, WhiteBox} from "../styles/AppStyles";
import {useMotionValue, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

function MotionValueBox() {
  // motion value 는 rerender 를 일으키지 않음 (react state 가 아님)
  const x = useMotionValue(0);
  const scale = useTransform(x, [-500, 0, 500], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-500, 500], [-360, 360]);
  const gradient = useTransform(x,
    [-500, 0, 500],
    [
      "linear-gradient(135deg, #f83c3c, #ff7b7b)",
      "linear-gradient(135deg, rgb(255, 99, 21), rgb(255, 153, 153))",
      "linear-gradient(135deg, #ffaa9c, #ffd0d0)"
    ]
  );

  const {scrollYProgress} = useScroll();
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.5, 3]);

  const logValue = (value: any) => console.log(value);

  useMotionValueEvent(scale, "change", logValue);
  // useMotionValueEvent(rotateZ, "change", logValue);
  // useMotionValueEvent(gradient, "change", logValue);
  useMotionValueEvent(scrollYProgress, "change", logValue);

  return (
    <LongWrapper style={{background: gradient}}>
      <WhiteBox
        style={{x, rotateZ, scale: scrollScale}}
        drag="x"
        dragSnapToOrigin
      />
    </LongWrapper>
  )
}

export default MotionValueBox;
