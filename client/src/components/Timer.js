import { useRef } from "react";

import Click from "./Click";

function Timer({
  stage,
  switchStage,
  getTime,
  seconds,
  ticking,
  setTicking,
  reset,
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  function handleClick() {
    const audio = new Audio("/click.wav");
    audio.play();
    setTicking((ticking) => !ticking);
  }

  return (
    <div className="w-10/12 mx-auto pt-5 flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 items-center text-gray-700">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={` ${
                index === stage ? "bg-green-300 bg-opacity-50 rounded-md" : ""
              } p-1 cursor-pointer transition-all`}
              onClick={() => switchStage(index)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-8xl font-bold select-none m-0 text-green-800">
          {getTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div>
        <button
          className="px-16 py-2 text-2xl rounded-md bg-green-400 hover:bg-green-500 text-white font-semibold uppercase"
          onClick={handleClick}
        >
          {ticking ? "Stop" : "Start"}
        </button>
      </div>
      {ticking && (
        <button
          className="uppercase text-white bg-green-500 hover:bg-green-400 bg-opacity-70 rounded-md py-1 px-3 mt-5"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Timer;
