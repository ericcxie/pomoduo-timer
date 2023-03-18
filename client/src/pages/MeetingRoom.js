import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/database";
import "firebase/auth";
import Room from "./RoomPage";

function MeetingRoom() {
  const { roomCode } = useParams();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const roomRef = db.collection("rooms").doc(roomCode);

    roomRef.get().then((doc) => {
      if (doc.exists) {
        setRoomData(doc.data());
      }
    });
  }, [roomCode]);

  // render the room data here
  return (
    <div>
      {roomData ? (
        <div>
          <h1>Meeting Room {roomCode}</h1>
          <p>Pomodoro timer: {roomData.timer}</p>
          {/* other room data */}
        </div>
      ) : (
        <Room />
      )}
    </div>
  );
}

export default MeetingRoom;
