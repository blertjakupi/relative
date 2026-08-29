// src/hooks/useAudioPlayer.ts

import { useEffect, useRef, useState } from 'react';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create the Audio instance once when the hook is mounted.
  useEffect(() => {
    const audio = new Audio();

    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = () => {
      console.error('Audio playback error');
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Cleanup when the component using this hook is unmounted.
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);

      audio.pause();
      audio.src = '';

      audioRef.current = null;
    };
  }, []);

  /**
   * Play an audio file.
   *
   * The returned Promise resolves when playback has successfully started.
   * isPlaying becomes false when the audio finishes.
   */
  const play = async (file: string): Promise<void> => {
    const audio = audioRef.current;

    if (!audio) {
      throw new Error('Audio instance not initialized');
    }

    if (isPlaying) {
      console.warn('Audio is already playing. Ignoring request.');
      return;
    }

    // Set the new audio source.
    audio.src = file;
    audio.currentTime = 0;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);

      console.error('Audio playback failed:', error);

      throw error;
    }
  };

  /**
   * Stop the currently playing audio.
   */
  const stop = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return {
    isPlaying,
    play,
    stop,
  };
}