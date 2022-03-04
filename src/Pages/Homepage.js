import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import Hero1 from '../Assets/hero1.png'
import { useState } from "react";

function Homepage() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar />
      <div className="mx-auto container flex justify-center mt-36 h-full w-full">
        <img src={Hero1} alt="" className="z-10 absolute"/>
        <div class="z-40 relative container mx-auto flex flex-col items-center justify-center mt-52 p-12 text-gray-900 antialiased">
          <div class="mb-8 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center">
            <input type="search" class="w-full bg-transparent text-base focus:outline-none" placeholder="Apa yang anda cari?"/>
            <button class="focus:outline-none"><i class="fa fa-search text-gray-500"></i></button>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
