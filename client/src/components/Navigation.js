import React from "react";
import { FiSettings } from "react-icons/fi";

import logo from "../img/logo.png";

function Navigation({ setOpenSettings }) {
  return (
    <nav className="pt-5 text-green-400 flex justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-1">
        <img src={logo} width={30} alt="logo" />
        <h1 className="font-bold text-xl cursor-default">
          <span className="text-gray-600">Pomo</span>Duo
        </h1>
      </div>
      <FiSettings
        className="text-2xl cursor-pointer "
        onClick={() => setOpenSettings((value) => !value)}
      />
    </nav>
  );
}

export default React.memo(Navigation);
