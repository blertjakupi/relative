// src/components/Game.tsx
import { useState } from 'react';
import { getRandomRecording } from '../data/recordings';
import type { Recording } from '../data/recordings';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { PianoKeyboard } from './PianoKeyboard';
import type { PitchClass } from '../game/pitchClasses';
import { arePitchClassesEqual } from '../game/pitchClasses';
import { TopBar } from './TopBar';
import { Footer } from './Footer';

const HIGH_SCORE_KEY = 'relative-pitch-high-score';

export function Game() {
  const { isPlaying, play } = useAudioPlayer();

  const [currentRecording, setCurrentRecording] = useState<Recording | null>(null);
  const [userAnswer, setUserAnswer] = useState<PitchClass | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem(HIGH_SCORE_KEY);
    if (saved === null) return 0;
    const parsed = Number.parseInt(saved, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  });

  const loadNewNote = async () => {
    const recording = getRandomRecording();
    setCurrentRecording(recording);
    setUserAnswer(null);
    setIsCorrect(null);
    try {
      await play(recording.file);
    } catch (error) {
      console.warn('Playback failed:', error);
    }
  };

  const handlePitchClick = (pitch: PitchClass) => {
    if (!currentRecording || userAnswer !== null || isPlaying) return;
    const correct = arePitchClassesEqual(pitch, currentRecording.note as PitchClass);
    setUserAnswer(pitch);
    setIsCorrect(correct);

    if (correct) {
      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);
      if (newCorrectCount > highScore) {
        setHighScore(newCorrectCount);
        localStorage.setItem(HIGH_SCORE_KEY, String(newCorrectCount));
      }
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  const totalAttempts = correctCount + wrongCount;
  const accuracy = totalAttempts === 0 ? 0 : Math.round((correctCount / totalAttempts) * 100);

  const isKeyboardDisabled = isPlaying || userAnswer !== null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <TopBar correct={correctCount} wrong={wrongCount} accuracy={accuracy} highScore={highScore} />

      <main className="flex-grow flex flex-col items-center justify-center p-container-padding py-12 md:py-16">
        <div className="w-full max-w-4xl flex flex-col gap-10 items-center">
          <div className="bg-surface-container-lowest w-full rounded-[32px] shadow-sm border border-surface-variant p-8 md:p-12 flex flex-col items-center text-center relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-bright to-surface opacity-50" />

            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 relative z-10 tracking-tight">
              Listen Carefully
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 relative z-10">
              Identify the note played
            </p>

            {/* START GAME button */}
            {!currentRecording ? (
              <button
                type="button"
                onClick={loadNewNote}
                disabled={isPlaying}
                className="group relative flex flex-col items-center justify-center gap-4 bg-surface-container-lowest text-primary rounded-full w-32 h-32 md:w-40 md:h-40 shadow-[0_8px_30px_rgba(0,88,190,0.15)] border border-primary-fixed hover:shadow-[0_12px_40px_rgba(0,88,190,0.2)] hover:scale-105 transition-all duration-300 active:scale-95 mb-8 z-10 disabled:opacity-50 disabled:cursor-default disabled:hover:scale-100"
              >
                <div className="absolute inset-0 rounded-full bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                <span className="material-symbols-outlined text-5xl md:text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_circle
                </span>
              </button>
            ) : (
              /* REPLAY button */
              <button
                type="button"
                onClick={() => play(currentRecording.file).catch(console.warn)}
                disabled={isPlaying || userAnswer !== null}
                className="group relative flex flex-col items-center justify-center gap-4 bg-surface-container-lowest text-primary rounded-full w-32 h-32 md:w-40 md:h-40 shadow-[0_8px_30px_rgba(0,88,190,0.15)] border border-primary-fixed hover:shadow-[0_12px_40px_rgba(0,88,190,0.2)] hover:scale-105 transition-all duration-300 active:scale-95 mb-8 z-10 disabled:opacity-50 disabled:cursor-default disabled:hover:scale-100"
              >
                <div className="absolute inset-0 rounded-full bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                <span className="material-symbols-outlined text-5xl md:text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {isPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </button>
            )}

            <p className="font-interactive text-interactive text-primary relative z-10 uppercase tracking-widest text-sm">
              {!currentRecording
                ? 'Tap to start'
                : isPlaying
                  ? 'Listening...'
                  : userAnswer !== null
                    ? isCorrect
                      ? '✅ Correct!'
                      : '❌ Wrong'
                    : 'Tap a key to answer'}
            </p>

            {/* FEEDBACK OVERLAY — CORRECT = GREEN, WRONG = RED */}
            {userAnswer !== null && currentRecording && (
              <div className="absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-md flex flex-col items-center justify-center z-20 transition-opacity duration-300 p-8 rounded-[32px]">
                <span
                  className={`material-symbols-outlined text-6xl mb-4 ${
                    isCorrect ? 'text-success' : 'text-error'
                  }`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {isCorrect ? 'check_circle' : 'cancel'}
                </span>
                <h2
                  className={`font-headline-md text-headline-md mb-2 ${
                    isCorrect ? 'text-success' : 'text-error'
                  }`}
                >
                  {isCorrect ? 'Correct!' : 'Not quite!'}
                </h2>
                <p
                  className={`font-body-lg text-body-lg mb-8 ${
                    isCorrect ? 'text-success' : 'text-error'
                  }`}
                >
                  That was a <strong>{currentRecording.note}</strong>.
                </p>
                <button
                  type="button"
                  onClick={loadNewNote}
                  className="bg-primary text-on-primary px-8 py-4 rounded-full font-interactive text-interactive shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  Next Note
                </button>
              </div>
            )}
          </div>

          <div className="w-full mt-4">
            <p className="text-center font-label-caps text-label-caps text-outline mb-6 tracking-widest">
              SELECT A KEY
            </p>
            <PianoKeyboard
              onPitchClick={handlePitchClick}
              disabled={isKeyboardDisabled}
              selectedPitch={userAnswer}
              isCorrect={isCorrect}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}