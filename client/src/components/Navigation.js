import React from "react";
import { FiSettings } from "react-icons/fi";
import { RxTimer } from "react-icons/rx";
import logo from "../img/logo.png";

function Navigation() {
  return (
    <nav className="pt-5 text-green-400 flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1 cursor-pointer">
        <img src={logo} width={30} alt="logo" />
        <h1 className="font-bold text-xl">
          <span className="text-gray-600">Pomo</span>Duo
        </h1>
      </div>
      <FiSettings className="text-2xl cursor-pointer " />
    </nav>
  );
}

export default Navigation;
