function Controls({ volume, setVolume, power, setPower }) {
  return (
    <div className="controls">
      <div className="volume-control">
        <label htmlFor="volume">MASTER VOLUME</label>

        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) =>
            setVolume(Number(event.target.value))
          }
        />

        <span>{Math.round(volume * 100)}%</span>
      </div>

      <button
        className={`power-button ${
          power ? "power-on" : "power-off"
        }`}
        onClick={() => setPower(!power)}
      >
        {power ? "POWER ON" : "POWER OFF"}
      </button>
    </div>
  );
}

export default Controls;