import { LocationMarkerIcon } from "@heroicons/react/outline";
import produk from "../../Assets/produkmobil.png";
const SearchCard = (props) => {
  return (
    <div className="mt-4 ml-2  border shadow-lg rounded-md w-52 ">
      <img src={produk} className="rounded-md w-full" />
      <h1 className="mx-2 mt-2">{props.name}</h1>
      <p className="mx-2 font-bold">Rp{props.harga}/hari</p>
      <div className="flex mx-2">
        <LocationMarkerIcon className="h-6 text-blue-500" />
        <p className="text-blue-500 mb-16">{props.lokasi}</p>
      </div>
    </div>
  );
};

export default SearchCard;
