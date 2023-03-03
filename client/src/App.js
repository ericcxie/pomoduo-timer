import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Room, GenerateCode, JoinRoom } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route path="/generate" element={<GenerateCode />} />
        <Route path="/join" element={<JoinRoom />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
