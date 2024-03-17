import {TimerCard, TimerDivider, TimerWrapper} from "../styles/PomodoroTimerStyle";
import {toTwoDigitsString} from "../../utils/numbers";

const SECONDS_PER_A_MINUTE = 60;

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

interface PomodoroTimerViewProps {
  restSeconds: number;
}

function PomodoroTimerView({restSeconds}: PomodoroTimerViewProps) {
  const minutes = Math.floor(restSeconds  / SECONDS_PER_A_MINUTE);
  const seconds = restSeconds % SECONDS_PER_A_MINUTE;

  return (
    <TimerWrapper>
      <TimerCard
        key={`min-${minutes}`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {toTwoDigitsString(minutes)}
      </TimerCard>
      <TimerDivider>:</TimerDivider>
      <TimerCard
        key={`sec-${seconds}`}
        variants={cardVariants}
        initial="initial"
        animate="animate"
      >
        {toTwoDigitsString(seconds)}
      </TimerCard>
    </TimerWrapper>
  )
}

export default PomodoroTimerView;
