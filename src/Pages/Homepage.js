import React from "react";
import Hero1 from "../Assets/hero1.png";
import Banner from "../Assets/hero2.png";
import Gabung from "../Assets/Button_Gabung.png";
import Kategori from "../Assets/kategori.png";
import Mobil from "../Assets/mobil.png";
import Konsol from "../Assets/game.png";
import Musik from "../Assets/gitar.png";
import Motor from "../Assets/motor.png";
import Foto from "../Assets/kamera.png";
import Buku from "../Assets/buku.png";
import LihatS from "../Assets/Button_Lihat Semua.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Homepage() {
  const [search, handleSearch] = useState("");
  const [query, setQuery] = useState("");
  const location = useLocation();
  const history = useHistory();
  const [uid, setuid] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let isLogged = location.state ? location.state.isLogged : "";

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  const handleSearchValue = async (e) => {
    if (e.keyCode === 13) {
      history.push('/search?query=' + search)
      window.location.reload()
    }
  }
  return (
    <div>
      {uid !== "" ? (
        <div className={`mt-36 flex flex-col items-center font-nunito`}>
          <div className="container -mb-36">
            <h1 className="text-blue-700 text-2xl font-extrabold my-2">
              Jadwal Pinjam
            </h1>
            <div className="flex h-96">
              <div className="w-1/2  shadow-lg border bg-gray-200 h-2/4 rounded-lg">
                <div className="flex flex-col items-center rounded-t-lg py-2 bg-blue-700">
                  <h1 className="text-white font-bold text-xl">Meminjamkan</h1>
                </div>
                <div className="flex flex-col items-center h-3/4 ">
                  <div className="flex-col flex items-center justify-center h-full">
                    {/* <p className="font-bold text-lg">Barangmu belum ada yang</p>

                    <p className="font-bold text-lg">dipinjam nih!</p> */}
                    <Link to="/tambah">
                      <button className="bg-blue-600 px-3 py-1 rounded-3xl text-white font-bold text-lg">
                        Rentalkan barangmu!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="ml-12 shadow-lg border bg-gray-200 h-20 h-2/4 w-1/2 rounded-lg">
                <div className="flex flex-col items-center rounded-t-lg py-2 bg-blue-700">
                  <h1 className="text-white font-bold text-xl">Pinjam</h1>
                </div>
                <div className="flex flex-col items-center h-3/4 ">
                  <div className="mt-4 flex-col w-full flex items-center">
                    <p className="font-bold text-lg">
                      Kamu belum pinjam barang
                    </p>

                    <p className="font-bold text-lg">lagi nih!</p>
                    <div className="flex w-full mr-10 mt-8 justify-end text-blue-600 font-bold ">
                      <p className="text-md mr-2">Lihat semua jadwal</p>
                      <ChevronRightIcon className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={
          uid !== ""
            ? "mx-auto container flex justify-center  h-full w-full"
            : "mt-36 mx-auto container flex justify-center  h-full w-full"
        }
      >
        <img src={Hero1} alt="" className="z-10 absolute" />
        <div class="z-40 relative container mx-auto flex flex-col items-center justify-center my-52 p-12 text-gray-900 antialiased">
          <div class="mb-8 px-6 py-3 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center transform transition duration-300 ">
            <input
              type="search"
              class="w-full bg-transparent text-base focus:outline-none"
              placeholder="Apa yang anda cari?"
              value={search}
              onChange={(e) => { handleSearch(e.target.value) }}
              onKeyUp={handleSearchValue}
            />
            <button class="focus:outline-none transform transition duration-300 ">
              <i class="fa fa-search text-gray-500"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 mt-8">
        <div className="mx-auto container">
          <img src={Kategori} alt="" />
          <div className="pt-6 flex justify-center space-x-3">
            <Link to="/search?query=mobil">
              <button className="transform transition duration-300 md:hover:scale-105">
                <img src={Mobil} alt="" />
              </button>
            </Link>
            <div className="flex-col space-y-4 w-52">
              <Link to="/search?query=alat_musik">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={Musik} alt="" />
                </button>
              </Link>
              <Link to="/search?query=kamera">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={Foto} alt="" />
                </button>
              </Link>
            </div>
            <div className="flex-col space-y-4 w-52">
              <Link to="/search?query=konsol">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={Konsol} alt="" />
                </button>
              </Link>
              <Link to="/search?query=buku">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={Buku} alt="" />
                </button>
              </Link>
            </div>
            <div className="flex-col space-y-4 w-52">
              <Link to="/search?query=motor">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={Motor} alt="" />
                </button>
              </Link>
              <Link to="/search?query=mobil">
                <button className="transform transition duration-300 md:hover:scale-105">
                  <img src={LihatS} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container flex justify-center mt-16 h-full w-full">
        <img src={Banner} alt="" className="z-10 absolute" />
        <div class="z-40 relative container mx-auto flex flex-col items-center justify-center my-52 p-12 pt-16 text-gray-900 antialiased">
          <button className="transform transition duration-300 scale-90 md:hover:scale-95">
            <img src={Gabung} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
