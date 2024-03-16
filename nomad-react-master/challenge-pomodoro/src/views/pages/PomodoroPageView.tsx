import PomodoroTitleView from "../components/PomodoroTitleView";
import PomodoroTimerView from "../components/PomodoroTimerView";
import PomodoroButtonView from "../components/PomodoroButtonView";
import PomodoroProgressView from "../components/PomodoroProgressView";

function PomodoroPageView() {
  return (
    <>
      <PomodoroTitleView/>
      <PomodoroTimerView/>
      <PomodoroButtonView/>
      <PomodoroProgressView/>
    </>
  );
}

export default PomodoroPageView;
