import {
  TrashIcon,
  UserCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
const ItemList = ({
  image,
  judul,
  harga,
  hari,
  isChecked,
  handleChange,
  handleDelete,
  id,
}) => {
  const toggleCheck = (e) => {
    handleChange(e);
  };

  const toggleDelete = (id) => {
    handleDelete(id);
  };

  const [num, setNum] = useState(hari);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num === 1){
      return
    }
    else{
      setNum(num - 1);
    }
  };

  const change = (e) => {
    setNum(e.target.value);
  };
  return (
    <div className="font-nunito lg:flex lg:mt-2">
      <div className="shadow-sm border-t-2 border-b-2 lg:border-2 border-opacity-70 rounded-md lg:mx-auto mx-0.5 my-2 py-2 flex bg-white w-full h-auto lg:h-72">
        <input
          name={judul}
          className="mt-3 lg:ml-5 lg:mr-3 w-5 h-5"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            toggleCheck(e);
          }}
        />
        <img
          className="mx-5 my-3 h-36 lg:mx-6 lg:my-3 lg:h-auto"
          src={image}
          alt={image}
        />
        <div className="hidden lg:block w-4/6">
          <h1 className="mt-2 mb-2 font-bold text-lg">{judul}</h1>
          <div className="flex my-2">
            <p className=" border-r-2 pr-2 text-sm">Tersewa 100</p>

            <p className=" border-r-2 pr-2 ml-2 text-sm">
              4.9 &#40;<a className="text-gray-500 ">80 ulasan</a>&#41;
            </p>
            <p className=" ml-2 text-sm">
              Diskusi &#40;<a className="text-gray-500">25</a>&#41;
            </p>
          </div>
          <p className="text-lg font-bold mt-2 w-1/2">
            {harga.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <div className="rounded-lg border-2 flex mt-3 w-max">
            <UserCircleIcon className="text-blue-700 h-20 my-2 ml-7" />
            <div className="my-auto mx-4">
              <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                Profile
              </h1>
              <p className="-mt-2 text-sm">Online</p>
              <div className="flex -mt-1">
                <p className=" border-r-2 pr-2">4.9</p>
                <p className="ml-2">10 Menit</p>
              </div>
            </div>
            <button className="-mt-5 rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 mr-10 px-4 justify-self-end place-self-center">
              Follow
            </button>
          </div>
          <button
            className="ml-60 flex mt-1 text-gray-500 bg-white  border-2 px-4 justify-center items-center rounded-full"
            onClick={() => {
              toggleDelete(id);
            }}
          >
            <TrashIcon className=" h-6 m-2" fill="none" stroke="currentColor" />
            Hapus
          </button>
        </div>
        <div className="flex flex-col my-auto ">
          <h1 className="-mb-8 font-bold ml-10">Hari</h1>
          <div className="flex h-10 mr-10 mt-8">
            <button onClick={decrement}>
              <MinusIcon className="h-5 mr-4" />
            </button>
            <input
              className="pl-4 border-b-2 w-10"
              type="text"
              value={num}
              onChange={change}
            ></input>
            <button onClick={increment}>
              <PlusIcon className="h-5 ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
