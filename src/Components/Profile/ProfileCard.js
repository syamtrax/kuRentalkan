import {
  UserCircleIcon,
  CashIcon,
  CreditCardIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const ProfileCard = () => {
  const [showInbox, setshowInbox] = useState(false);
  const [showSewa, setshowSewa] = useState(false);
  const [showProfil, setshowProfil] = useState(false);

  return (
    <div className="w-1/4 h-3/4 border-2 rounded-lg shadow">
      <div className="flex flex-col m-5 mb-2">
        <div className="flex flex-row gap-x-2 content-center border-b-2 pb-2 font-bold">
          <UserCircleIcon className="text-blue-700 h-12" />
          <p className="self-center place-self-center text-xl">Profile</p>
        </div>
        <div className="border-b-2 flex flex-col font-semibold">
          <div className="flex flex-row gap-x-2 m-2 mb-0 content-center justify-between">
            <div className="flex flex-row">
              <CashIcon className="text-blue-700 h-5 mr-2" />
              <p className="self-center place-self-center text-sm text-gray-500">
                Dompetku
              </p>
            </div>
            <p className="font-bold text-blue-700">Rp0</p>
          </div>
          <div className="flex flex-row gap-x-2 m-2 mb-0 content-center justify-between pb-2">
            <div className="flex flex-row">
              <CreditCardIcon className="text-blue-700 h-5 mr-2" />
              <p className="self-center place-self-center text-sm text-gray-500">
                Voucherku
              </p>
            </div>
            <p className="font-bold text-blue-700">Rp0</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-5 border-b-2 mb-2 pb-2">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-gray-500">Kotak Masuk</p>
          <button
            onClick={() => {
              setshowInbox(!showInbox);
            }}
          >
            {showInbox === true ? (
              <ChevronDownIcon className="text-gray-500 h-5 mr-2" />
            ) : (
              <ChevronUpIcon className="text-gray-500 h-5 mr-2" />
            )}
          </button>
        </div>
        {showInbox === true ? (
          ""
        ) : (
          <div className="pl-4 text-sm text-gray-400">
            <p>Chat</p> <p>Diskusi</p> <p>Produk Ulasan</p>{" "}
            <p>Pesanan Dikomplain</p>
          </div>
        )}
      </div>
      <div className="flex flex-col mx-5 border-b-2 mb-2 pb-2">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-gray-500">Penyewaan</p>
          <button
            onClick={() => {
              setshowSewa(!showSewa);
            }}
          >
            {showSewa === true ? (
              <ChevronDownIcon className="text-gray-500 h-5 mr-2" />
            ) : (
              <ChevronUpIcon className="text-gray-500 h-5 mr-2" />
            )}
          </button>
        </div>
        {showSewa === true ? (
          ""
        ) : (
          <div className="pl-4 text-sm text-gray-400">
            <p>Daftar Produk</p> <p>Menunggu Pembayaran</p>{" "}
            <p>Daftar Transaksi</p> <p>Jadwal Sewa</p>
          </div>
        )}
      </div>
      <div className="flex flex-col mx-5 border-b-2 mb-2 pb-2">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-gray-500">Profil</p>
          <button
            onClick={() => {
              setshowProfil(!showProfil);
            }}
          >
            {showProfil === true ? (
              <ChevronDownIcon className="text-gray-500 h-5 mr-2" />
            ) : (
              <ChevronUpIcon className="text-gray-500 h-5 mr-2" />
            )}
          </button>
        </div>
        {showProfil === true ? (
          ""
        ) : (
          <div className="pl-4 text-sm text-gray-400">
            <p>Wishlist</p> <p>Pengaturan</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
