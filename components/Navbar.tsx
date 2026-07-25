import { useState } from "react";
     import { FaGraduationCap } from "react-icons/fa"
     import { FaBell } from "react-icons/fa"
     import { user } from "../mockData";
function Navbar() {
   
  
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-900">
  <div className="flex h-16 items-center justify-between px-4 md:px-8">
    <div className="flex items-center gap-3">
      <FaGraduationCap className="text-3xl text-emerald-400" />
      <h1 className="text-xl font-bold text-white">Smart <span className="text-emerald-400">Campus Hub</span></h1>
    </div>

    <div className="flex items-center gap-7 px-6">
      <button className="relative rounded-full p-2 hover:bg-slate-800">
        <FaBell className="text-xl text-gray-300" />
        <span className="  h-2 w-2 rounded-full bg-red-500"></span>
      </button>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-semibold text-white">
          {user.name.split(" ").map(word => word[0]).join("")}
        </div>

        <div className="hidden md:block">
          <h3 className="text-sm font-semibold text-white">{user.name}</h3>
          <p className="text-xs text-gray-400">{user.role}</p>
        </div>    </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;