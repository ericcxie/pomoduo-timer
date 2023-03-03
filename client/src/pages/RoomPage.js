import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";

const Room = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);

  const switchStage = (index) => {
    setStage(index);
  };

  const getTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setTicking(false);
    setPomodoro(25);
    setLongBreak(15);
    setShortBreak(5);
  };

  const clockTicking = () => {
    const minutes = getTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      reset();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (ticking) {
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-xl min-h-screen mx-auto">
        <Navigation />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTime={getTime}
          seconds={seconds}
          ticking={ticking}
          setTicking={setTicking}
        />
      </div>
    </div>
  );
};

export default Room;
