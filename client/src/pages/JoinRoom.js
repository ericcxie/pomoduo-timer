import login from "../img/login.svg";
import BackButton from "../components/BackButton";

const JoinRoom = () => {
  return (
    <main>
      <div className="flex flex-col items-center mt-36 justify-center">
        <div className="space-y-3 mb-6">
          <img src={login} width={375} alt="main" className="mb-8 ml-2" />
          <h1 className="text-4xl font-bold text-gray-600 text-center">
            Join study <span className="text-green-400">room</span>
          </h1>
        </div>

        <div class="relative mt-3">
          <label for="UserEmail" class="sr-only">
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="Enter Name"
            class="w-full rounded-xl border border-green-400 pr-10 py-2 pl-4 shadow-sm sm:text-sm"
          />
        </div>
        <div class="relative mt-3">
          <label for="UserEmail" class="sr-only">
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="Enter Room Code"
            class="w-full rounded-xl border border-green-400 pr-10 py-2 pl-4 shadow-sm sm:text-sm"
          />
        </div>

        <a
          className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400 mt-3"
          href="/room"
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-400 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-xl"></span>

          <span className="relative block border border-current bg-white px-8 py-3 rounded-xl">
            Join Room
          </span>
        </a>
        <BackButton />
      </div>
    </main>
  );
};

export default JoinRoom;
