import {ProgressCategory, ProgressContents, ProgressTitle, ProgressWrapper} from "../styles/PomodoroProgressStyle";
import {toTwoDigitsString} from "../../utils/numbers";

function PomodoroProgressView() {
  return (
    <ProgressWrapper>
      <ProgressCategory>
        <ProgressContents>0⎟4</ProgressContents>
        <ProgressTitle>Rounds</ProgressTitle>
      </ProgressCategory>
      <ProgressCategory>
        <ProgressContents>{toTwoDigitsString(0)}⎟12</ProgressContents>
        <ProgressTitle>Goals</ProgressTitle>
      </ProgressCategory>
    </ProgressWrapper>
  );
}

export default PomodoroProgressView;
