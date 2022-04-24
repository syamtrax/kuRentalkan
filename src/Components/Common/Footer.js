import React from "react";
import Logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="font-nunito flex flex-col  text-white bg-blue-700 ">
      <div className="md:flex-col  py-6  mx-auto container ">
        <div className="text-4xl font-black">kuRentalkan</div>
        <div className="text-2xl mt-4 mb-6">Perusahaan</div>
        <div className="text-base ">
          tentang kuRentalkan <br />
          FAQ <br />
          Syarat Dan ketentuan Penggunaan <br />
          Kebijakan Privasi
        </div>
      </div>
      <div className="  h-12  py-1 flex  mx-auto container  ">
        <div className="flex justify-end w-full  border-t">
          {" "}
          © 2022 kuRentalkan, All Right Reserved. Yogyakarta, Indonesia
        </div>
      </div>
    </div>
  );
};

export default Footer;
