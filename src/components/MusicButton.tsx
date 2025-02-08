import React, { useState, useRef } from "react";

const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button className="MusicButton" onClick={toggleAudio} >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <audio
        ref={audioRef}
        src="/Relaxation.mp3"
      />
    </div>
  );
};

export default AudioToggle;
