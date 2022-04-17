import {
  ArchiveIcon,
  StarIcon,
  InboxInIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import produk from "../../Assets/produkmobil.png";

const DetailProduk = () => {
  return (
    <div className="w-3/4 ml-10 border-2 shadow-lg rounded-lg h-full">
      <div className="p-4 flex justify-between border-b-2 border-gray font-bold content-center">
        <div className="text-blue-700 self-center">Detail Produk</div>
        <div className="rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center">
          Kembali
        </div>
      </div>
      <div className="flex flex-row p-4 border-b-2">
        <div className="mr-4">
          <img className="h-15 w-15" src={produk} />
        </div>
        <div classNama="flex flex-col gap-y-2 h-full">
          <p className="font-bold pb-1">Mobil Sangar Jos Gandosssss</p>
          <div className="flex pb-1">
            <p className="flex">
              <StarIcon className="text-yellow-500 h-4 self-center " />
              <div className="text-xs">
                {" "}
                4.9 (<a className="text-gray-500">80 ulasan</a>){" "}
              </div>
            </p>
          </div>
          <div className="text-xs pb-1">Merk - Mobil - Supercar</div>
          <p className="font-black pb-1">Rp20.000.000 / Hari</p>
          <div className="flex gap-x-4 pb-1">
            <div className="flex text-xs">
              <EyeIcon className="h-3 pr-2" /> Dilihat 120
            </div>
            <div className="flex text-xs">
              <InboxInIcon className="h-3 pr-2" /> Stok 500
            </div>
          </div>
          <div className="flex gap-x-4 pb-1">
            <div className="flex text-xs">
              <HeartIcon className="h-3 pr-2" /> Disukai 50
            </div>
            <div className="flex text-xs">
              <ShoppingCartIcon className="h-3 pr-2" /> Tersewa 10
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col border-b-2">
        <div className="flex flex-row p-4  justify-between font-bold">
          <div className="flex gap-x-4 ">
            <div className="text-blue-700 underline ">Daftar Pesanan</div>
            <div className="text-gray-500 underline">Kalender</div>
          </div>
          <div className="flex font-black">Total Pendapatan: RP 0</div>
        </div>
        <div className="flex flex-row gap-x-4 p-4 pt-0 justify-between font-bold text-black">
          <div className="">Tanggal Order</div>
          <div className="">Order ID</div>
          <div className="">Akun ID</div>
          <div className="">Kebijakan Meminjam</div>
          <div className="">Pendapatan</div>
          <div className="">Status</div>
        </div>
      </div>
      <div className="h-56 border-b-2 text-gray-200 w-full flex flex-col justify-center content-center align-center">
        <ArchiveIcon className="h-20 text-gray-200 self-center" />
        <div className="w-full text-center">Tidak ada data</div>
      </div>
      <div className="h-12 text-black border-b-2 text-gray-200 pb-4 w-full flex flex-col justify-center content-center align-center">
        <div className="w-full text-center">Total 0 items &#60; 0 &#62;</div>
      </div>
    </div>
  );
};

export default DetailProduk;
