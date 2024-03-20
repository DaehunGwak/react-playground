export function toTwoDigitsString(n: number) {
  return n.toLocaleString('en-US', {minimumIntegerDigits: 2});
}
