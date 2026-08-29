import { useEffect, useRef, useState } from 'react';
import { getRandomRecording } from '../data/recordings';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();

    audioRef.current = audio;

    
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

   
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const playRecording = async () => {
   
    if (isPlaying) {
      return;
    }

    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const recording = getRandomRecording();

    
    audio.src = recording.file;

    
    audio.currentTime = 0;

    setIsPlaying(true);

    try {
      await audio.play();

      console.log(
        `Playing: ${recording.instrument} - ${recording.fullName}`
      );
    } catch (error) {
      console.error('Playback failed:', error);

     
      setIsPlaying(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        type="button"
        onClick={playRecording}
        disabled={isPlaying}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          cursor: isPlaying ? 'default' : 'pointer',
          backgroundColor: isPlaying ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        {isPlaying ? 'Playing...' : 'Play Random Note'}
      </button>
    </div>
  );
}