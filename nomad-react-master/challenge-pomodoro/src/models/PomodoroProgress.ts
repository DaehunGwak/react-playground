import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

export const ROUNDS_MAX = 4;
export const GOALS_MAX = 12;

export interface PomodoroProgress {
  readonly rounds: number;
  readonly goals: number;
}

export function countProgress(progress: PomodoroProgress): PomodoroProgress {
  const rounds = progress.rounds + 1;
  return {
    rounds: rounds % ROUNDS_MAX,
    goals: progress.goals + Math.floor(rounds / ROUNDS_MAX),
  };
}

// 주로 library 들이 type, interface 만 쓰는 이유가 있음
// recoilPersist 는 수행 시 any 타입을 사용하기 때문에 Class 정보가 유실됨.
// 따라서, type, interface 와 같이 데이터만 담고 있어야 제대로 동작
const { persistAtom } = recoilPersist();

export const pomodoroProgressAtom = atom<PomodoroProgress>({
  key: "pomodoroProgress",
  default: {rounds: 0, goals: 0},
  effects_UNSTABLE: [persistAtom],
});
