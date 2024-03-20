import {useRecoilValue, useSetRecoilState} from "recoil";
import {countProgress, pomodoroProgressAtom} from "../models/PomodoroProgress";
import {PomodoroTimer} from "../models/PomodoroTimer";
import {useEffect} from "react";

export function useProgressValueViewModel()  {
  return useRecoilValue(pomodoroProgressAtom);
}

export function useCountProgressViewModel(timer: PomodoroTimer) {
  const setProgress = useSetRecoilState(pomodoroProgressAtom);

  useEffect(() => {
    if (timer.isFinished()) {
      setProgress(prev => countProgress(prev));
    }
  }, [timer, setProgress]);
}
