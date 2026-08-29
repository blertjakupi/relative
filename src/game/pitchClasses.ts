export const PITCH_CLASSES = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
] as const;

export type PitchClass = (typeof PITCH_CLASSES)[number];


export function arePitchClassesEqual(a: PitchClass, b: PitchClass): boolean {
  return a === b;
}