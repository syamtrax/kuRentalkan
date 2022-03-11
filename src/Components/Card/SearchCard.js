import { LocationMarkerIcon } from "@heroicons/react/outline";

const SearchCard = () => {
  return (
    <div className="shadow-lg rounded-md w-44 h-64">
      <img src="" className="rounded-md" />
      <h1 className="">Mobil Sangar Jos Gandos</h1>
      <p>Rp20.000.000/12 Jam</p>
      <div>
        <LocationMarkerIcon className="h-10" />
        <p>Yogyakarta</p>
      </div>
    </div>
  );
};

export default SearchCard;
