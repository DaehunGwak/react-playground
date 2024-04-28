export function convertToTimeSinceString(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ` year${extractS(interval)} ago`;
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ` month${extractS(interval)} ago`;
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ` day${extractS(interval)} ago`;
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ` hour${extractS(interval)} ago`;
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ` minute${extractS(interval)} ago`;
  }

  return Math.floor(seconds) + ` second${extractS(interval)} ago`;
}

function extractS(interval: number) {
  return interval < 2 ? "" : "s";
}