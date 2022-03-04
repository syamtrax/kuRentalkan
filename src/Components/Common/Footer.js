import React from "react";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="relative text-white bg-blue-700 overflow-hidden">
      <div className="md:flex justify-evenly pt-6 pb-12 md:px-8 px-6 mx-auto container">
      </div>
      <div className="absolute bottom-0 h-12 w-screen px-4 py-1 flex justify-end right-0 mx-auto container">
        <p> © 2022 kuRentalkan, All Right Reserved. Yogyakarta, Indonesia </p>
      </div>
    </div>
  );
};

export default Footer;
