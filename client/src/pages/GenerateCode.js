import { useState, useEffect } from "react";
import graphic from "../img/studycode.svg";
import BackButton from "../components/BackButton";
import { generateRoomCode } from "../utils/generateRoomCode";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Aos from "aos";
import "aos/dist/aos.css";

import createRoom from "../context/createRoom";

const GenerateCode = () => {
  const [roomCode, setRoomCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCreateRoom = () => {
    const roomCode = generateRoomCode(6);
    setRoomCode(roomCode);
    document.getElementById("generate-code-btn").disabled = true;

    const userName = "";
    createRoom(roomCode, userName);
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <main>
      <div
        data-aos="fade-up"
        data-aos-once
        data-aos-delay="200"
        className="flex flex-col mt-40 items-center justify-center"
      >
        <div className="space-y-3">
          <img
            src={graphic}
            width={375}
            alt="main"
            className="mb-8 ml-2 -mt-12"
          />
          <h1 className="text-4xl font-bold text-gray-600 text-center cursor-default">
            Your study room <span className="text-green-400">code</span> is:
          </h1>
          <div className="bg-gray-100  rounded-md py-1">
            {roomCode && (
              <p className="text-2xl text-center text-green-700 italic font-semibold">
                {roomCode}
              </p>
            )}
            {!roomCode && <div className="h-8"></div>}
          </div>
        </div>

        <button
          id="generate-code-btn"
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mb-4 mt-4 cursor-pointer"
          onClick={handleCreateRoom}
          disabled={roomCode}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Generate room code
          </span>
        </button>
        <CopyToClipboard text={roomCode} onCopy={() => setCopied(true)}>
          <button className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mb-4 ">
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl "></span>

            <span className="relative block border border-current bg-white px-8 py-3 rounded-xl ">
              {copied ? "Copied!" : "Copy to clipboard"}
            </span>
          </button>
        </CopyToClipboard>
        <a
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mt-1"
          href="/join"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Join Room
          </span>
        </a>
      </div>

      <BackButton />
    </main>
  );
};

export default GenerateCode;
