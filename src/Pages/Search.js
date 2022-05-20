import Card from "../Components/Card/SearchCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";

const Search = () => {
  const location = useLocation();

  let isLogged = location.state ? location.state.isLogged : "";

  const [prods, setProds] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setProds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  function useQuery () {
    return new URLSearchParams(useLocation().search)
  }

  const params = useQuery()
  const paramsId = params ? params.get('query') : ''
  const usersCollectionRef = collection(db, paramsId);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="font-nunito h-screen  container mt-36  flex">
          <div className="  w-1/5 border h-4/6  shadow-lg rounded-lg">
            <div className="flex flex-col items-center rounded-t-lg py-2 bg-blue-700">
              <h1 className="text-white font-bold text-xl">Filter</h1>
            </div>
            <div className=""></div>
          </div>
            <div className="h-1/2 ml-12 grid grid-cols-4 ">
              {prods.map((prod) => {
                return (
                  <Link to={"/produk" + '/' + prod.kategori + '?id=' + prod.id} >
                  <Card
                    name={prod.name}
                    harga={prod.harga}
                    lokasi={prod.lokasi}
                  />
                  </Link>
                );
              })}

              {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
