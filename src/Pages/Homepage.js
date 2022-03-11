import React from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import Hero1 from '../Assets/hero1.png'
import Banner from '../Assets/hero2.png'
import Gabung from '../Assets/Button_Gabung.png'
import Kategori from '../Assets/kategori.png'
import Mobil from '../Assets/mobil.png'
import Konsol from '../Assets/game.png'
import Musik from '../Assets/gitar.png'
import Motor from '../Assets/motor.png'
import Foto from '../Assets/kamera.png'
import Buku from '../Assets/buku.png'
import LihatS from '../Assets/Button_Lihat Semua.png'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Homepage() {
  const [query, setQuery] = useState("");
  const location = useLocation();

  let isLogged = location.state ? location.state.isLogged : ''

  return (
    <div>
      <Navbar />
      <div className="mx-auto container flex justify-center mt-36 h-full w-full">
        <img src={Hero1} alt="" className="z-10 absolute"/>
        <div class="z-40 relative container mx-auto flex flex-col items-center justify-center my-52 p-12 text-gray-900 antialiased">
          <div class="mb-8 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center transform transition duration-300 md:hover:scale-105">
            <input type="search" class="w-full bg-transparent text-base focus:outline-none" placeholder="Apa yang anda cari?"/>
            <button class="focus:outline-none transform transition duration-300 md:hover:scale-105"><i class="fa fa-search text-gray-500"></i></button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 mt-8">
        <div className="mx-auto container">
          <img src={Kategori} alt="" />
          <div className="pt-6 flex justify-center space-x-3">
            <button className="transform transition duration-300 md:hover:scale-105">
              <img src={Mobil} alt="" />
            </button>
            <div className="flex-col space-y-4 w-52"> 
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={Musik} alt="" />
              </button>
              <button className="transform transition duration-300 md:hover:scale-105"> 
                <img src={Foto} alt="" />
              </button> 
            </div>
            <div className="flex-col space-y-4 w-52"> 
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={Konsol} alt="" /> 
              </button>
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={Buku} alt="" /> 
              </button>
            </div> 
            <div className="flex-col space-y-4 w-52"> 
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={Motor} alt="" /> 
              </button>
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={LihatS} alt="" />
              </button> 
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container flex justify-center mt-16 h-full w-full">
        <img src={Banner} alt="" className="z-10 absolute"/>
        <div class="z-40 relative container mx-auto flex flex-col items-center justify-center my-52 p-12 pt-16 text-gray-900 antialiased">
          <button className="transform transition duration-300 scale-90 md:hover:scale-95">
            <img src={Gabung} alt="" />
          </button> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
