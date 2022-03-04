import React from "react";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="relative text-white bg-blue-700 overflow-hidden">
      <div className="md:flex-col pt-6 pb-12 md:px-8 px-6 mx-auto container mb-12">
        <div className="text-4xl font-black">kuRentalkan</div>
        <div className="text-2xl mt-4 mb-6">Perusahaan</div>
        <div classname="text-base font-normal">
          tentang kuRentalkan <br />
          FAQ <br />
          Syarat Dan ketentuan Penggunaan <br />
          Kebijakan Privasi
        </div>
      </div>
      <div className="absolute bottom-0 h-12 px-4 py-1 flex justify-end right-0 mx-auto container mt-5 mr-96">
        <div className="flex justify-end w-full mr-24 border-t"> © 2022 kuRentalkan, All Right Reserved. Yogyakarta, Indonesia
        </div>
      </div>
    </div>  );
};

export default Footer;
