export const INSTRUMENTS = [
  'acoustic_grand_piano',
  'acoustic_guitar',
  'church_organ',
  'clarinet',
] as const;

export type Instrument = (typeof INSTRUMENTS)[number];



export const NOTE_NAMES = [
  'A',
  'Ab',
  'B',
  'Bb',
  'C',
  'D',
  'Db',
  'E',
  'Eb',
  'F',
  'G',
  'Gb',
] as const;

export type NoteName = (typeof NOTE_NAMES)[number];


const NOTE_OCTAVE_MAP: Record<NoteName, number[]> = {
  A: [0, 1, 2, 3, 4, 5, 6, 7],
  Ab: [1, 2, 3, 4, 5, 6, 7],

  B: [0, 1, 2, 3, 4, 5, 6, 7],
  Bb: [0, 1, 2, 3, 4, 5, 6, 7],

  C: [1, 2, 3, 4, 5, 6, 7, 8],

  D: [1, 2, 3, 4, 5, 6, 7],
  Db: [1, 2, 3, 4, 5, 6, 7],

  E: [1, 2, 3, 4, 5, 6, 7],
  Eb: [1, 2, 3, 4, 5, 6, 7],

  F: [1, 2, 3, 4, 5, 6, 7],

  G: [1, 2, 3, 4, 5, 6, 7],
  Gb: [1, 2, 3, 4, 5, 6, 7],
};


const allNoteOctaves: Array<{
  note: NoteName;
  octave: number;
  fullName: string;
}> = [];

for (const note of NOTE_NAMES) {
  const octaves = NOTE_OCTAVE_MAP[note];

  for (const octave of octaves) {
    allNoteOctaves.push({
      note,
      octave,
      fullName: `${note}${octave}`,
    });
  }
}


export interface Recording {
  id: string;
  instrument: Instrument;
  file: string;
  note: NoteName;
  octave: number;
  fullName: string;
}


export const recordings: Recording[] = [];

for (const instrument of INSTRUMENTS) {
  for (const { note, octave, fullName } of allNoteOctaves) {
    recordings.push({
      id: `${instrument}-${fullName}`,
      instrument,
      file: `/audio/${instrument}/${fullName}.mp3`,
      note,
      octave,
      fullName,
    });
  }
}

export function getRandomInstrument(): Instrument {
  const index = Math.floor(Math.random() * INSTRUMENTS.length);

  return INSTRUMENTS[index];
}

export function getRecordingsByInstrument(
  instrument: Instrument
): Recording[] {
  return recordings.filter(
    (recording) => recording.instrument === instrument
  );
}

export function getRandomRecording(): Recording {
  const instrument = getRandomInstrument();

  const instrumentRecordings =
    getRecordingsByInstrument(instrument);

  const index = Math.floor(
    Math.random() * instrumentRecordings.length
  );

  return instrumentRecordings[index];
}