import { LocationMarkerIcon } from "@heroicons/react/outline";
import produk from "../../Assets/produkmobil.png";
const SearchCard = () => {
  return (
    <div className="mt-4 ml-2  border shadow-lg rounded-md w-52 h-96">
      <img src={produk} className="rounded-md w-full" />
      <h1 className="mx-2 mt-2">Mobil Sangar Jos Gandos </h1>
      <p className="mx-2 font-bold">Rp20.000.000/12 Jam</p>
      <div className="flex mx-2">
        <LocationMarkerIcon className="h-6 text-blue-500" />
        <p className="text-blue-500">Yogyakarta</p>
      </div>
    </div>
  );
};

export default SearchCard;
