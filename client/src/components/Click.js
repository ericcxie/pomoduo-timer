import React from "react";
// import Alarm from "../assets/alarm.mp3";

const Click = React.forwardRef((_, ref) => {
  return (
    <audio ref={ref}>
      <source src="/click.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default React.memo(Click);
