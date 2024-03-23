export function toDollarFormatNoFraction(target: number): string {
  return target.toLocaleString("en-US", {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function toSpecificFractionNumberString(target: number, fractionDigits: number): string {
  return target.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })
}