import { useState, useEffect } from "react";

export function getNow() {
  const now = new Date(Date.now());
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const display = now.toLocaleString();
  return {
    hours,
    minutes,
    seconds,
    display,
  };
}

const useClock = () => {
  const [time, setTime] = useState(getNow());
  const [timer, setTimer] = useState(null);

  const initTimer = () => {
    const now = Date.now();
    const nextSec = (Math.floor(now / 1000) + 1) * 1000;
    const timeLeft = nextSec - now;

    //Register a interval beginning next second
    window.setTimeout(() => {
      const interval = window.setInterval(() => {
        // on each second update the state time
        setTime(getNow());
      }, 1000);

      setTimer(interval);
    }, timeLeft);
  };

  //set timer when the application is loaded
  useEffect(() => {
    !timer && initTimer();

    //clear the timer on unmount
    return () => window.clearInterval(timer);
  }, [timer]);
  return time;
};

export default useClock;
