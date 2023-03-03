import axios from "axios";

const createRoom = async (roomCode, userName) => {
  try {
    const response = await axios.post("http://localhost:5050/createRoom", {
      roomCode,
      userName,
    });
    console.log(response.data); // logs "Room created" if successful
  } catch (error) {
    console.error(error);
  }
};

export default createRoom;
