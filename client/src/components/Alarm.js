import React from "react";
// import Alarm from "../assets/alarm.mp3";

const Alarm = React.forwardRef((_, ref) => {
  return (
    <audio ref={ref}>
      <source src="/alarm.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default React.memo(Alarm);
