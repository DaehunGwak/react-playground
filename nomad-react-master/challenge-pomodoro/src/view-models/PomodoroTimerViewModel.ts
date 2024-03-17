import {useState} from "react";
import {PomodoroTimer} from "../models/PomodoroTimer";
import {useCountProgressViewModel} from "./PomodoroProgressViewModel";

const A_SECOND = 1000;

export function useTimerViewModel() {
  const [pomodoroTimer, setPomodoroTimer] = useState(new PomodoroTimer());

  useCountProgressViewModel(pomodoroTimer);

  const startTimer = () => {
    const interval = setInterval(() => {
      setPomodoroTimer(prev => prev.count());
    }, A_SECOND);
    setPomodoroTimer(prev => prev.play(interval));
  }

  const pauseTimer = () => {
    setPomodoroTimer(prev => prev.pause());
  }

  return {
    pomodoroTimer,
    startTimer,
    pauseTimer,
  };
}
