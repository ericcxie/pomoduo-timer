import React from "react";
import { FiX } from "react-icons/fi";

function ModalSetting({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSettings,
  setOpenSettings,
  updateTimeDefaultValue,
}) {
  const inputs = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 15,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full left-0 top-0 bg-green-700 bg-opacity-30 backdrop-blur-sm ${
          openSettings ? "" : "hidden"
        }`}
        onClick={() => setOpenSettings(false)}
      ></div>
      <div
        className={`max-w-xl bg-gray-100 absolute sm:w-96 w-11/12 left-1/2 top-1/3  p-5 rounded-md drop-shadow-md ${
          openSettings ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="text-gray-600 flex justify-between items-center">
          <h1 className="font-semibold">Settings</h1>
          <FiX
            className="text-2xl cursor-pointer"
            onClick={() => setOpenSettings(false)}
          />
        </div>
        <div className="h-1 w-full bg-green-300 mt-5 mb-5"></div>
        <h1 className="mb-3 text-gray-600">Time (minutes)</h1>
        <div className="flex gap-7 text-center">
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <h1 className="text-gray-600 text-sm">{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  type="number"
                  className="w-full bg-green-300 bg-opacity-30 py-2 rounded-md outline-none text-center pl-3"
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <button
          className="bg-green-300 uppercase w-full mt-5 text-white rounded-md py-1"
          onClick={updateTimeDefaultValue}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default ModalSetting;
