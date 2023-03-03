import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Room } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
