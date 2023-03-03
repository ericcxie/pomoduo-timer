import { useEffect, useState } from "react";
import main from "../img/main.png";

const Landing = () => {
  const [isCode, setCode] = useState(false);

  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center">
        <img src={main} width={375} alt="main" />
        <div className="space-y-2 mt-8">
          <h1 className="text-5xl font-bold text-gray-600 text-center">
            Pomodoro <span className="text-green">Timer</span>
          </h1>
          <p className="text-lg text-center text-gray-600 italic font-semibold">
            Stay <span className="text-green">productive</span> together!
          </p>
        </div>

        <a
          className="group relative inline-block text-sm font-medium text-green focus:outline-none focus:ring active:text-green mb-4 mt-4"
          href="/join"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Create Study Room
          </span>
        </a>

        {/* Enter code */}
        <h1
          className="text-md font-semibold text-gray-600 text-center cursor-pointer underline"
          onClick={() => setCode(!isCode)}
        >
          Already have a <span className="text-green">code</span>?
        </h1>
        <div className={isCode ? "flex flex-col text-center" : "invisible"}>
          <div class="relative mt-3">
            <label for="UserEmail" class="sr-only">
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="UserEmail"
              placeholder="Enter Code"
              class="w-full rounded-xl border border-green pr-10 py-2 pl-4 shadow-sm sm:text-sm"
            />
          </div>

          <a
            className="group relative inline-block text-sm font-medium text-green focus:outline-none focus:ring active:text-green mt-3"
            href="/room"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

            <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
              Join Room
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Landing;
