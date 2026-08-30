import type { PitchClass } from '../game/pitchClasses';
import './PianoKeyboard.css';

interface PianoKeyboardProps {
  onPitchClick: (pitch: PitchClass) => void;
  disabled?: boolean;
  selectedPitch?: PitchClass | null;
  isCorrect?: boolean | null;
}


const WHITE_KEYS: PitchClass[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];


const BLACK_KEYS: Array<{ pitch: PitchClass; whiteIndex: number }> = [
  { pitch: 'Db', whiteIndex: 0 }, 
  { pitch: 'Eb', whiteIndex: 1 }, 
  { pitch: 'Gb', whiteIndex: 3 }, 
  { pitch: 'Ab', whiteIndex: 4 }, 
  { pitch: 'Bb', whiteIndex: 5 }, 
];

export function PianoKeyboard({
  onPitchClick,
  disabled = false,
  selectedPitch = null,
  isCorrect = null,
}: PianoKeyboardProps) {

  const isSelected = (pitch: PitchClass) => pitch === selectedPitch;


  const getFeedbackClass = (pitch: PitchClass): string => {
    if (!isSelected(pitch)) return '';
    if (isCorrect === true) return 'key-correct';
    if (isCorrect === false) return 'key-wrong';
    return '';
  };


  const renderFeedbackIcon = (pitch: PitchClass) => {
    if (!isSelected(pitch)) return null;
    if (isCorrect === true) return <span className="feedback-icon">✓</span>;
    if (isCorrect === false) return <span className="feedback-icon">✕</span>;
    return null;
  };

  return (
    <div className="piano-container">

      {WHITE_KEYS.map((pitch) => (
        <button
          key={pitch}
          className={`piano-key-white ${getFeedbackClass(pitch)}`}
          onClick={() => onPitchClick(pitch)}
          disabled={disabled}
        >
          {pitch}
          {renderFeedbackIcon(pitch)}
        </button>
      ))}

      
      {BLACK_KEYS.map(({ pitch, whiteIndex }) => {
        const position = whiteIndex + 1; 
        const blackKeyWidth = `calc(100% / 7 * 0.6)`;
        const leftOffset = `calc(100% / 7 * ${position} - (100% / 7 * 0.3))`;

        return (
          <button
            key={pitch}
            className={`piano-key-black ${getFeedbackClass(pitch)}`}
            style={{
              left: leftOffset,
              width: blackKeyWidth,
            }}
            onClick={() => onPitchClick(pitch)}
            disabled={disabled}
          >
            {pitch}
            {renderFeedbackIcon(pitch)}
          </button>
        );
      })}
    </div>
  );
}