import {ActionButton, ButtonSvg, PauseIconPath, PlayIconPath} from "../styles/PomodoroButtonStyle";
import {useState} from "react";

function PomodoroButtonView() {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => setPlaying(prev => !prev);

  return (
    <ActionButton
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.9}}
      onClick={togglePlaying}
    >
      <ButtonSvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {playing ? <PauseIconPath/> : <PlayIconPath/>}
      </ButtonSvg>
    </ActionButton>
  )
}

export default PomodoroButtonView;
