import { useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import Controls from "./components/Controls";
import "./App.css";

const pads = [
  { key: "q", name: "Kick", sound: "/sounds/kick.mp3" },
  { key: "w", name: "Snare", sound: "/sounds/snare drum.mp3" },
  { key: "e", name: "Clap", sound: "/sounds/clap.mp3" },
  { key: "a", name: "Hi-Hat", sound: "/sounds/hit hat.mp3" },
  { key: "s", name: "Open Hat", sound: "/sounds/open hat.mp3" },
  { key: "d", name: "Tom", sound: "/sounds/tom.mp3" },
  { key: "z", name: "Crash", sound: "/sounds/crash.mp3" },
  { key: "x", name: "Drum Set", sound: "/sounds/drumset.mp3" },
  { key: "c", name: "Techno", sound: "/sounds/techno.mp3" },
  { key: "v", name: "Multi Drum", sound: "/sounds/multidrum.mp3" }
];

function App() {
  const [volume, setVolume] = useState(0.8);
  const [power, setPower] = useState(true);
  const [activePad, setActivePad] = useState("");

  return (
    <div className="app">
      <div className="drum-machine">

        <h1>🥁 DRUM MACHINE</h1>

        <Display
          activePad={activePad}
          volume={volume}
          power={power}
        />

        <div className="pads">
          {pads.map((pad) => (
            <DrumPad
              key={pad.key}
              pad={pad}
              volume={volume}
              power={power}
              onPlay={setActivePad}
            />
          ))}
        </div>

        <Controls
          volume={volume}
          setVolume={setVolume}
          power={power}
          setPower={setPower}
        />

        <p className="instruction">
          Use your mouse or press Q W E A S D Z X C V
        </p>

      </div>
    </div>
  );
}

export default App;