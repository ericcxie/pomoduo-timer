import { useState, useEffect } from "react";
import login from "../img/login.svg";
import BackButton from "../components/BackButton";
import Aos from "aos";
import "aos/dist/aos.css";

import joinRoom from "../context/joinRoom";

const JoinRoom = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const [userName, setUserName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleJoin = async () => {
    try {
      await joinRoom(userName, roomCode);
      // Redirect user to the room page
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <div
        data-aos="fade-up"
        data-aos-once
        data-aos-delay="200"
        className="flex flex-col items-center mt-36 justify-center"
      >
        <div className="space-y-3 mb-6">
          <img src={login} width={375} alt="main" className="mb-8 ml-2" />
          <h1 className="text-4xl font-bold text-gray-600 text-center cursor-default">
            Join study <span className="text-green-400">room</span>
          </h1>
        </div>

        <div class="relative mt-3">
          <input
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-xl border border-green-400 pr-10 py-2 pl-4 shadow-sm sm:text-sm outline-none"
          />
        </div>

        <div class="relative mt-3">
          <input
            type="text"
            placeholder="Enter Room Code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className="w-full rounded-xl border border-green-400 pr-10 py-2 pl-4 shadow-sm sm:text-sm outline-none"
          />
        </div>

        <button
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mt-3"
          onClick={handleJoin}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Join Room
          </span>
        </button>

        {errorMessage && (
          <div
            role="alert"
            className="rounded border-l-4 border-red-500 bg-red-50 p-4 mt-6"
          >
            <strong class="block font-medium text-red-800">
              {" "}
              Something went wrong{" "}
            </strong>

            <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
          </div>
        )}
      </div>
      <BackButton />
    </main>
  );
};

export default JoinRoom;
