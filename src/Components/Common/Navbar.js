import React from "react";
import Logo from "../../Assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 w-full bg-gray-100 h-24">
      <div className="mx-auto container flex mt-4">
        <div className="w-1/2">
          <img className=" pt-5 h-auto" alt="" src={Logo} />
        </div>
        <div className="pt-4 w-full flex justify-end ">
          <button className="transform transition duration-300 md:hover:scale-105 text-xl border pt-1 pb-1.5 px-4 rounded-xl text-blue-700 font-bold border-blue-700">
            Masuk
          </button>
          <button className="transform transition duration-300 md:hover:scale-105 text-xl ml-4 border pt-1 pb-1.5 px-4 rounded-xl text-white font-bold bg-blue-700">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
