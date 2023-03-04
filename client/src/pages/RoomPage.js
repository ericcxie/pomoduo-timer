import { useState, useEffect, useRef } from "react";
import Alarm from "../components/Alarm";
import ModalSetting from "../components/ModalSetting";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";

const Room = () => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [secondsPassed, setSecondsPassed] = useState(0);

  const [openSettings, setOpenSettings] = useState(false);

  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSettings(false);
    setSecond(0);
    setSecondsPassed(0);
  };

  const reset = () => {
    setSecondsPassed(0);
    setTicking(false);
    setSecond(0);
    updateTimeDefaultValue();
  };

  const switchStage = (index) => {
    const isChange =
      secondsPassed && stage !== index
        ? window.confirm(
            "The timer is still running, are you sure you want to switch?"
          )
        : false;

    if (isChange) {
      reset();
      setStage(index);
    } else if (!secondsPassed) {
      setStage(index);
    }
  };

  const getTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  // const timeUp = () => {
  //   reset();
  //   setIsTimeUp(true);
  //   alarmRef.current.play();
  // };

  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const clockTicking = () => {
    const minutes = getTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      reset();
      alarmRef.current.play();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };

  const muteAlarm = () => {
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return secondsPassed ? "Show warning" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setSecondsPassed((value) => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div
      className={
        ticking
          ? "bg-green-100 min-h-screen transition-colors delay-100"
          : "bg-white min-h-screen transition-colors delay-100"
      }
    >
      <div className="max-w-xl min-h-screen mx-auto">
        <Navigation setOpenSettings={setOpenSettings} />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTime={getTime}
          seconds={seconds}
          ticking={ticking}
          setTicking={setTicking}
          muteAlarm={muteAlarm}
          reset={reset}
        />
        <Alarm ref={alarmRef} />
        <ModalSetting
          openSettings={openSettings}
          setOpenSettings={setOpenSettings}
          pomodoroRef={pomodoroRef}
          shortBreakRef={shortBreakRef}
          longBreakRef={longBreakRef}
          updateTimeDefaultValue={updateTimeDefaultValue}
        />
      </div>
    </div>
  );
};

export default Room;
