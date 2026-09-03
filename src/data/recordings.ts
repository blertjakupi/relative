import hashedMapping from './_data.json';

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



export interface Recording {
  id: string;
  instrument: Instrument;
  file: string;        
  note: NoteName;      
  octave: number;
  fullName: string;    
}



const recordings: Recording[] = [];


const mapping = hashedMapping as Record<
  string,
  { instrument: string; note: string }
>;

for (const [key, value] of Object.entries(mapping)) {
  const { instrument, note } = value;

  
  const match = note.match(/^([A-G][b#]?)(\d+)$/);
  const pitch = match ? match[1] : note;
  const octave = match ? parseInt(match[2], 10) : 0;

  const hashFile = key.split('/')[1];

  recordings.push({
    id: `${instrument}-${hashFile}`,
    instrument: instrument as Instrument,
    file: `/audio/${key}`,
    note: pitch as NoteName,
    octave,
    fullName: note,
  });
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
  const instrumentRecordings = getRecordingsByInstrument(instrument);
  const index = Math.floor(Math.random() * instrumentRecordings.length);
  return instrumentRecordings[index];
}


export { recordings };