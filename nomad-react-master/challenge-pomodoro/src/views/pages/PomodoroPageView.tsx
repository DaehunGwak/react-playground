import PomodoroTitleView from "../components/PomodoroTitleView";
import PomodoroTimerView from "../components/PomodoroTimerView";
import PomodoroButtonView from "../components/PomodoroButtonView";
import PomodoroProgressView from "../components/PomodoroProgressView";
import {useTimerViewModel} from "../../view-models/PomodoroTimerViewModel";

function PomodoroPageView() {
  const {pomodoroTimer, startTimer, pauseTimer} = useTimerViewModel();

  return (
    <>
      <PomodoroTitleView/>
      <PomodoroTimerView
        restSeconds={pomodoroTimer.restSeconds}
      />
      <PomodoroButtonView
        status={pomodoroTimer.status}
        start={startTimer}
        pause={pauseTimer}
      />
      <PomodoroProgressView/>
    </>
  );
}

export default PomodoroPageView;
