import {ActionButton, ButtonSvg, PauseIconPath, PlayIconPath} from "../styles/PomodoroButtonStyle";
import {PomodoroTimerStatus} from "../../models/PomodoroTimer";

interface PomodoroButtonViewProps {
  status: PomodoroTimerStatus;
  start: () => void;
  pause: () => void;
}

function PomodoroButtonView({status, start, pause}: PomodoroButtonViewProps) {
  const togglePlaying = () => {
    switch (status) {
      case PomodoroTimerStatus.PAUSE:
        start();
        break;
      case PomodoroTimerStatus.PLAYING:
        pause();
        break;
    }
  };

  return (
    <ActionButton
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.9}}
      onClick={togglePlaying}
    >
      <ButtonSvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {status === PomodoroTimerStatus.PAUSE
          ? <PlayIconPath/>
          : <PauseIconPath/>}
      </ButtonSvg>
    </ActionButton>
  )
}

export default PomodoroButtonView;
