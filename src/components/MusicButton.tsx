import React, { useState, useRef, useEffect } from "react";

const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Start as playing
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 🔈 Set volume to 50%
      
      const playAudio = async () => {
        try {
          await audioRef.current!.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked by browser:", error);
          setIsPlaying(false);
        }
      };

      playAudio();
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button className="MusicButton" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}Relaxation.mp3`} />
    </div>
  );
};

export default AudioToggle;
