import React from "react";
import { Link } from "react-router-dom";
import Signup from '../pages/Signup';

function Navbar() {

return(
  <div className="w-full border shadow-xl">
    <div className="flex justify-between mx-auto items-center py-4 container">
      <h1 className="text-[40px] font-bold text-lime-400 cursor-pointer">Athletix</h1>

    <navitems className="flex font-semibold text-[20px] gap-6">
      <Link to={'/'}><p className="cursor-pointer hover:text-lime-400">Home</p></Link>
      <p className="cursor-pointer hover:text-lime-400">About</p>
      <p className="cursor-pointer hover:text-lime-400">Exercises</p>
      <p className="cursor-pointer hover:text-lime-400">Blog</p>
    </navitems>

    <div className="flex gap-4">
    <button className="bg-lime-400 text-white px-4 py-2 rounded-lg shadow-lg">
      Log In
    </button>
    <Link to={"/Signup"}>
    <button className="bg-lime-400 text-white px-4 py-2 rounded-lg shadow-lg">
      Sign Up
    </button>
    </Link>
    </div>
    </div>
  </div>
)}

export default Navbar;