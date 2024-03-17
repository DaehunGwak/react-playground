const INITIAL_REST_SECONDS = 25 * 60;

export enum PomodoroTimerStatus {
  PAUSE,
  PLAYING,
}

/**
 * useState 에 setState function 을 통해 rerender 신호를 보내려면 새로운 객체를 보내야 함!!
 */
export class PomodoroTimer {
  readonly interval?: NodeJS.Timer;
  readonly restSeconds: number;
  readonly status: PomodoroTimerStatus;

  constructor(
    interval?: NodeJS.Timer,
    restSeconds: number = INITIAL_REST_SECONDS,
    status: PomodoroTimerStatus = PomodoroTimerStatus.PAUSE
  ) {
    this.interval = interval;
    this.restSeconds = restSeconds;
    this.status = status;
  }

  pause(): PomodoroTimer {
    this.releaseInterval();
    return new PomodoroTimer(undefined, this.restSeconds, PomodoroTimerStatus.PAUSE);
  }

  play(interval: NodeJS.Timer): PomodoroTimer {
    return new PomodoroTimer(interval, this.restSeconds, PomodoroTimerStatus.PLAYING);
  }

  count(): PomodoroTimer {
    if (this.isFinished()) {
      return this.init();
    }
    return new PomodoroTimer(this.interval, this.restSeconds - 1, this.status);
  }

  isFinished(): boolean {
    return this.restSeconds <= 0;
  }

  init(): PomodoroTimer {
    this.releaseInterval();
    return new PomodoroTimer(undefined, INITIAL_REST_SECONDS, PomodoroTimerStatus.PAUSE);
  }

  private releaseInterval() {
    if (this.interval === undefined) {
      return;
    }
    clearInterval(this.interval);
  }
}
