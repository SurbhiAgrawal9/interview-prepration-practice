
import React, { useState, useEffect } from "react";

function App() {
  const initialDuration = 0; // Initial duration in seconds (e.g., 10 minutes)
  const [duration, setDuration] = useState(initialDuration);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(initialDuration);

  useEffect(() => {
    let timerInterval;

    if (running) {
      timerInterval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    // console.log(timerInterval)
    return () => {
      clearInterval(timerInterval);
    };
  }, [running, time]);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
    }
  };

  const pauseTimer = () => {
    if (running) {
      setRunning(false);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(initialDuration);
  };

  const resumeTimer = () => {
    startTimer();
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <p>{time}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resumeTimer}>Resume</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
