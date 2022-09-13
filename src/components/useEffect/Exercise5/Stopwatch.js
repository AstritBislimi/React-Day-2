import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(true);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;
    if (!pause) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [pause]);

  function pauseTime() {
    setPause(true);
  }

  function startTime() {
    setPause(false);
  }

  function lap() {
    if (!pause) setLaps((prevLaps) => [...prevLaps, time]);
  }

  function reset() {
    setTime(0);
    setPause(true);
    setLaps([]);
  }
  return (
    <div>
      <h1>Time: {time}s</h1>
      <button onClick={pauseTime}>Pause</button>
      <button onClick={startTime}>Start</button>
      <button onClick={lap}>Lap</button>
      <button onClick={reset}>Reset</button>
      <h2>Laps</h2>
      <ul>
        {laps.map((el, i) => (
          <li key={i}>{el}s</li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;
