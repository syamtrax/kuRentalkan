import { LocationMarkerIcon } from "@heroicons/react/outline";
import produk from "../../Assets/produkmobil.png";
const SearchCard = (props) => {
  return (
    <div className="mt-4 ml-2  border shadow-lg rounded-md w-52 h-96">
      <img src={produk} className="rounded-md w-full" />
      <h1 className="mx-2 mt-2">{props.name}</h1>
      <p className="mx-2 font-bold">{props.harga}</p>
      <div className="flex mx-2">
        <LocationMarkerIcon className="h-6 text-blue-500" />
        <p className="text-blue-500">{props.lokasi}</p>
      </div>
    </div>
  );
};

export default SearchCard;
