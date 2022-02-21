import React from "react";
import { useState } from "react";


export default function Navbar() {
  const [show, setShow] = useState(false);
  function btnfn(e)
  {
    setShow((s) => !s)

  }
  return (
    <nav className="bg-black text-white px-5 md:px-10 py-2 " >
      <div className="flex justify-between  ">
        <div className=" flex  items-center md:pl-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="font-bold">Snipe</span>
        </div>
        <div className="hidden md:flex items-center space-x-11 pr-20 sm:">
          <a className=" hover:bg-gray-400 p-2 rounded-lg"  href="#">Home</a>
          <a className=" hover:bg-gray-400 p-2 rounded-lg" href="#">Service</a>
          <a className=" hover:bg-gray-400 p-2 rounded-lg" href="#">Contact</a>
        </div>
        <button onClick={btnfn} className="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </button>

        
      </div>
      <div  style={{ display: show ? "flex" : "none" }} className="  flex-col justify-center items-baseline py-2 ">
        <a className=" hover:bg-gray-400 p-2 rounded-lg"  href="#">Home</a>
        <a className=" hover:bg-gray-400 p-2 rounded-lg" href="#">Service</a>
        <a className=" hover:bg-gray-400 p-2 rounded-lg" href="#">Contact</a>

        </div>
    </nav>
  );
}
