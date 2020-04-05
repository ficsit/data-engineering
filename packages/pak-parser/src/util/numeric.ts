export function bigintToNumber(value: bigint) {
  if (value > Number.MAX_SAFE_INTEGER) {
    throw new Error(`bigint must be <= ${Number.MAX_SAFE_INTEGER} to cast to a number`);
  }

  return Number(value);
}
