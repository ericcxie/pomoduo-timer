import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Room, GenerateCode, JoinRoom, MeetingRoom } from "./pages";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:5050/");

socket.on("message", (message) => {
  console.log(message);
});

// socket.emit("joinRoom", { username, room });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route path="/generate" element={<GenerateCode />} />
        <Route path="/join" element={<JoinRoom />} />
        {/* <Route path="/room/:roomCode" element={<MeetingRoom />} /> */}
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
