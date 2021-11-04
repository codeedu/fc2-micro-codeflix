export function range(min: number, max: number): Array<number> {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}
