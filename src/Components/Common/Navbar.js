import React from "react";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  ChatAlt2Icon,
  ShoppingCartIcon,
  CalendarIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  const [search, handleSearch] = useState('')
  const location = useLocation();
  const history = useHistory();
  const [uid, setuid] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const handleLogout = () => {
    localStorage.removeItem("user", JSON.stringify(uid));
    history.push("/");
  };

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
    <>
      {uid !== "" ? (
        <div className="font-nunito fixed top-0 right-0 left-0 z-50 w-full shadow-xl bg-white h-24">
          <div className="mx-auto container flex mt-4 ">
            <div className="w-2/3 ">
              <Link to="/">
                <button>
                  <img className=" pt-5 h-auto" alt="" src={Logo} />
                </button>
              </Link>
            </div>
            <div class=" px-6 py-2 mt-3 mr-20 border border-gray-200 bg-white max-w-lg max-h-min border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center transform transition duration-300 ">
              <input
                type="search"
                class="w-full bg-transparent text-base focus:outline-none"
                placeholder="Apa yang anda cari?"
                value={search}
                onChange={(e) => { handleSearch(e.target.value) }}
                onKeyUp={handleSearchValue}
              />
              <button class="focus:outline-none transform transition duration-300 md:hover:scale-105">
                <i class="fa fa-search text-gray-500"></i>
              </button>
            </div>
            <div className="pt-5  flex justify-end ">
              <ChatAlt2Icon className="mx-1 my-auto h-7 text-blue-700" />
              <Link to="/cart">
                <ShoppingCartIcon className="mx-1 my-auto h-7 text-blue-700" />
              </Link>
              <CalendarIcon className="mx-1 my-auto h-7 text-blue-700" />
              <Link to="/profile">
                <div className="flex mx-4 mt-1 ">
                  <UserCircleIcon className=" h-7 text-blue-700" />
                  <p className="font-bold text-blue-700 self-center">Profile</p>
                </div>
              </Link>
              <button
                className="font-bold text-blue-700 my-auto"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-nunito fixed top-0 right-0 left-0 z-50 w-full shadow-xl bg-white h-24">
          <div className="mx-auto container flex mt-4">
            <div className="w-1/2">
              <Link to="/">
                <button>
                  <img className=" pt-5 h-auto" alt="" src={Logo} />
                </button>
              </Link>
            </div>
            <div className="pt-4 w-full flex justify-end ">
              <Link to="/login">
                <button className="transform transition duration-300 md:hover:scale-105 text-xl border pt-1 pb-1.5 px-4 rounded-xl text-blue-700 font-bold border-blue-700">
                  Masuk
                </button>
              </Link>
              <Link to="/register">
                <button className="transform transition duration-300 md:hover:scale-105 text-xl ml-4 border pt-1 pb-1.5 px-4 rounded-xl text-white font-bold bg-blue-700">
                  Daftar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
