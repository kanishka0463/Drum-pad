import { useEffect, useRef, useState } from "react";

function DrumPad({ pad, volume, power, onPlay }) {
  const audioRef = useRef(null);
  const [active, setActive] = useState(false);

  // Update volume whenever the volume slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Stop all sounds when power is turned OFF
  useEffect(() => {
    if (!power && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setActive(false);
    }
  }, [power]);

  const playSound = () => {
    if (!power) return;

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
    audio.currentTime = 0;

    audio.play()
      .then(() => {
        console.log("Playing:", pad.name);
      })
      .catch((error) => {
        console.error("Audio error:", error);
      });

    setActive(true);
    onPlay(pad.name);

    setTimeout(() => {
      setActive(false);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === pad.key) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pad.key, power, volume]);

  return (
    <button
      className={`drum-pad ${active ? "active" : ""}`}
      onClick={playSound}
      disabled={!power}
    >
      <span className="key">
        {pad.key.toUpperCase()}
      </span>

      <span className="pad-name">
        {pad.name}
      </span>

      <audio
        ref={audioRef}
        src={pad.sound}
        preload="auto"
      />
    </button>
  );
}

export default DrumPad;