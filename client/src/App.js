import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Room, GenerateCode } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route path="/join" element={<GenerateCode />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
