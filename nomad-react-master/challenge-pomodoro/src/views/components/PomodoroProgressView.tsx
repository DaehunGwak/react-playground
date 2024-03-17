import {ProgressCategory, ProgressContents, ProgressTitle, ProgressWrapper} from "../styles/PomodoroProgressStyle";
import {toTwoDigitsString} from "../../utils/numbers";
import {useProgressValueViewModel} from "../../view-models/PomodoroProgressViewModel";
import {GOALS_MAX, ROUNDS_MAX} from "../../models/PomodoroProgress";

function PomodoroProgressView() {
  const progress = useProgressValueViewModel();

  return (
    <ProgressWrapper>
      <ProgressCategory>
        <ProgressContents>
          {progress.rounds}⎟{ROUNDS_MAX}
        </ProgressContents>
        <ProgressTitle>Rounds</ProgressTitle>
      </ProgressCategory>
      <ProgressCategory>
        <ProgressContents>
          {toTwoDigitsString(progress.goals)}⎟{GOALS_MAX}
        </ProgressContents>
        <ProgressTitle>Goals</ProgressTitle>
      </ProgressCategory>
    </ProgressWrapper>
  );
}

export default PomodoroProgressView;
