import React from "react";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {

    const logoutFunc = () => {
        localStorage.clear()
        window.location = "/auth"
    }

  return (
    <div className="h-20 bg-indigo-600 flex items-center justify-between px-5">
      <div className="text-white font-bold text-2xl cursor-pointer">SHARE POST</div>
      <div className="flex items-center space-x-5">
        <input type="text" placeholder="Search" className="p-2 outline-none rounded-md"/>
        <div className="w-36 border p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800 border-indigo-900">Create Post</div>
        <BiLogOut onClick={logoutFunc} size={25} className="text-white cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
