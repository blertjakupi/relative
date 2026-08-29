// src/components/PianoKeyboard.tsx
import type { PitchClass } from '../game/pitchClasses';
import './PianoKeyboard.css';

interface PianoKeyboardProps {
  /** Called when a key is pressed */
  onPitchClick: (pitch: PitchClass) => void;
  /** Disables all keys (e.g. while audio plays or after answering) */
  disabled?: boolean;
  /** The pitch the user just selected (used to show feedback) */
  selectedPitch?: PitchClass | null;
  /** Feedback state for the selected pitch: true = correct, false = wrong, null = neutral */
  isCorrect?: boolean | null;
}

// The 7 white keys in order (left to right)
const WHITE_KEYS: PitchClass[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Black keys with their corresponding white‑key gap position (0 = gap after C, 1 = after D, etc.)
const BLACK_KEYS: Array<{ pitch: PitchClass; whiteIndex: number }> = [
  { pitch: 'Db', whiteIndex: 0 }, // gap after C
  { pitch: 'Eb', whiteIndex: 1 }, // gap after D
  { pitch: 'Gb', whiteIndex: 3 }, // gap after F
  { pitch: 'Ab', whiteIndex: 4 }, // gap after G
  { pitch: 'Bb', whiteIndex: 5 }, // gap after A
];

export function PianoKeyboard({
  onPitchClick,
  disabled = false,
  selectedPitch = null,
  isCorrect = null,
}: PianoKeyboardProps) {
  // Helper: does this pitch match the user's selection?
  const isSelected = (pitch: PitchClass) => pitch === selectedPitch;

  // Helper: what feedback class (if any) does this key get?
  const getFeedbackClass = (pitch: PitchClass): string => {
    if (!isSelected(pitch)) return '';
    if (isCorrect === true) return 'key-correct';
    if (isCorrect === false) return 'key-wrong';
    return '';
  };

  // Helper: render the feedback icon (check or cross) if needed
  const renderFeedbackIcon = (pitch: PitchClass) => {
    if (!isSelected(pitch)) return null;
    if (isCorrect === true) return <span className="feedback-icon">✓</span>;
    if (isCorrect === false) return <span className="feedback-icon">✕</span>;
    return null;
  };

  return (
    <div className="piano-container">
      {/* ----- WHITE KEYS ----- */}
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

      {/* ----- BLACK KEYS ----- */}
      {BLACK_KEYS.map(({ pitch, whiteIndex }) => {
        // Left position: center the black key over the gap after the given white key.
        // 100% / 7 = width of one white key.
        // We shift left by half the black key width (which is 60% of a white key).
        const position = whiteIndex + 1; // gap after whiteIndex (0-based)
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