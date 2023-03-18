import axios from "axios";

const joinRoom = async (userName, roomCode) => {
  if (!userName) {
    throw new Error("Please enter a name.");
  }

  if (!roomCode) {
    throw new Error("Please enter a room code.");
  }

  try {
    const response = await axios.post("http://localhost:5050/joinRoom", {
      roomCode,
      userName,
    });
    console.log(response.data);
    // Redirect the user to the room page
    window.location.href = "/room";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to join. Please check your room code.");
  }
};

export default joinRoom;
