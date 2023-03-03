import { useEffect } from "react";
import graphic from "../img/studycode.svg";
import BackButton from "../components/BackButton";

const GenerateCode = () => {
  return (
    <main>
      <div className="flex flex-col mt-40 items-center justify-center">
        <div className="space-y-3">
          <img src={graphic} width={375} alt="main" className="mb-8 ml-2" />
          <h1 className="text-4xl font-bold text-gray-600 text-center">
            Your study room <span className="text-green">code</span> is:
          </h1>
          <p className="text-2xl text-center text-gray-600 italic font-semibold">
            ASD23HA
          </p>
        </div>

        <a
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mb-4 mt-4"
          href="/"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Copy to clipboard
          </span>
        </a>
        <div>
          <BackButton page="/"></BackButton>
        </div>
      </div>
    </main>
  );
};

export default GenerateCode;
