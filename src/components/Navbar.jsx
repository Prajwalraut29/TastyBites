import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/searchSlice";
import resto from '../data/restaurant (1).png'
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="shadow-md flex justify-around items-center h-20">
      <div className="flex gap-2 items-center ">
      <img className=" w-[8vw]   lg:w-[5vw] p-1" src={resto} alt="" />
        <h2 className="text-3xl font-mono">Tasty <span className="bg-orange-400 p-1 rounded-xl">B</span>ites</h2>
      </div>
      <div>
        <input
        className=" p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          type="text"
          placeholder="search your fevarite dish here "
          autoComplete="off" 
          onChange={(e)=>dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
