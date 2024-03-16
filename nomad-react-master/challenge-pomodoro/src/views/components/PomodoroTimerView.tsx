import {TimerCard, TimerDivider, TimerWrapper} from "../styles/PomodoroTimerStyle";
import {useEffect, useRef, useState} from "react";
import {toTwoDigitsString} from "../../utils/numbers";

const cardVariants = {
  initial: {
    scale: 0.6,
    opacity: 0.5,
  },
  animate: {
    scale: 1.0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

function PomodoroTimerView() {
  const [seconds, setSeconds] = useState(25 * 60);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }
    mounted.current = true;
  }, []);

  return (
    <TimerWrapper>
      <TimerCard
        key={`min-${Math.floor(seconds  / 60)}`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {toTwoDigitsString(Math.floor(seconds  / 60))}
      </TimerCard>
      <TimerDivider>:</TimerDivider>
      <TimerCard
        key={`sec-${seconds % 60}`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {toTwoDigitsString(seconds % 60)}
      </TimerCard>
    </TimerWrapper>
  )
}

export default PomodoroTimerView;
