function Display({ activePad, volume, power }) {
  return (
    <div className="display">
      <div className="display-title">
        DRUM MACHINE
      </div>

      <div className="display-screen">
        {!power
          ? "SYSTEM OFF"
          : activePad
          ? `PLAYING: ${activePad.toUpperCase()}`
          : "READY"}
      </div>

      <div className="display-info">
        <span>
          VOLUME: {Math.round(volume * 100)}%
        </span>

        <span className={power ? "status-on" : "status-off"}>
          {power ? "● ON" : "● OFF"}
        </span>
      </div>
    </div>
  );
}

export default Display;