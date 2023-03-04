import main from "../img/main.png";

const Landing = () => {
  return (
    <main>
      <div className="flex flex-col h-screen items-center justify-center">
        <img src={main} width={375} alt="main" className="-mt-32" />
        <div className="space-y-2 mt-8">
          <h1 className="text-5xl font-bold text-gray-600 text-center">
            Pomo<span className="text-green-400">Duo</span> Timer
          </h1>
          <p className="text-lg text-center text-gray-600 italic font-semibold">
            Stay <span className="text-green-400">productive</span> together!
          </p>
        </div>

        <a
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mb-4 mt-8"
          href="/generate"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Start study session
          </span>
        </a>

        {/* Enter code */}
        <a
          className="text-md font-semibold text-gray-600 text-center cursor-pointer underline hover:text-gray-800"
          href="/join"
        >
          Already have a <span className="text-green-400">code</span>?
        </a>
      </div>
    </main>
  );
};

export default Landing;
