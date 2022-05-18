import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";
import Operator_ijo from "../Assets/Operator_ijo.png";
import Operator from "../Assets/Operator.png";
import Deposit_ijo from "../Assets/Deposit_ijo.png";
import Deposit from "../Assets/Deposit.png";
import { db } from "../firebase-config";
import { useLocation } from "react-router-dom";
import { collection, addDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";

const Usrs = () => {
  const [newName, setNewName] = useState("");
  const [newKategori, setNewKategori] = useState("Pilih kategori");
  const [newMerk, setNewMerk] = useState("");
  const [newTipe, setNewTipe] = useState("");
  const [newTahun, setNewTahun] = useState(0);
  const [newLokasi, setNewLokasi] = useState("");
  const [newHarga, setNewHarga] = useState(0);
  const [newOperator, setNewOperator] = useState("Tidak");
  const [newDeposit, setNewDeposit] = useState("Tidak");
  const [newKondisi, setNewKondisi] = useState("");
  const [newDeskripsi, setNewDeskripsi] = useState("");
  const [newUserid, setNewUserid] = useState("default"); //delete kalo dah bs pass uid

  // PENTING!!
  // const location = useLocation();
  // let isLogged = location.state ? location.state.isLogged : ''
  // let userid = location.state ? location.state.userid : ''

  let CollectionRef = collection(db, newKategori);

  const createProduk = async () => {
    const docRef = await addDoc(CollectionRef, {
      name: newName,
      kategori: newKategori,
      merk: newMerk,
      tipe: newTipe,
      tahun: newTahun,
      lokasi: newLokasi,
      harga: newHarga,
      operator: newOperator,
      deposit: newDeposit,
      kondisi: newKondisi,
      deskripsi: newDeskripsi,
      userid: newUserid,
    });
    // console.log(docRef.id)
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto container my-28">
        <div className="mx-auto container border rounded-xl border-blue-700 grid gap-y-4">
          <div className="text-2xl font-nunito font-black mt-6 text-blue-700">
            TAMBAH PRODUK
          </div>
          <div className="mt-16">
            <div className=" font-nunito font-bold text-lg">Nama Barang</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Masukkan nama barang"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Kategori</div>
            <select
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center"
              value={newKategori}
              onChange={(event) => {
                setNewKategori(event.target.value);
                console.log(newKategori);
              }}
            >
              <option value="" disabled selected default>Pilih kategori</option>
              <option value="mobil">Mobil</option>
              <option value="alat_musik">Alat Musik</option>
              <option value="motor">Motor</option>
              <option value="konsol">Konsol</option>
            </select>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Merk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Masukkan merk"
              onChange={(event) => {
                setNewMerk(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Tipe Barang</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Masukkan tipe barang"
              onChange={(event) => {
                setNewTipe(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Tahun Produksi</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Masukkan Tahun Produksi"
              type="number"
              onChange={(event) => {
                setNewTahun(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Alamat</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Tuliskan Alamat"
              onChange={(event) => {
                setNewLokasi(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">
              Harga Barang/Hari
            </div>
            <div className="flex gap-x-4 items-center">
              <p className="items-center text-xl">Rp </p>
              <input
                className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
                placeholder="0"
                type="number"
                onChange={(event) => {
                  setNewHarga(Number(event.target.value));
                }}
              />
            </div>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">
              Keamanan Barang
            </div>
            <div className="flex space-x-8">
              {newDeposit === "Tidak" ? (
                <button
                  className="text-xl mt-4 pb-1.5"
                  onClick={(event) => {
                    setNewDeposit("Ya");
                  }}
                >
                  <img src={Deposit} alt="" />
                </button>
              ) : (
                <button
                  className="text-xl mt-4 pb-1.5"
                  onClick={(event) => {
                    setNewDeposit("Tidak");
                  }}
                >
                  <img src={Deposit_ijo} alt="" />
                </button>
              )}
              {newOperator === "Tidak" ? (
                <button
                  className="text-xl mt-4 pb-1.5"
                  onClick={(event) => {
                    setNewOperator("Ya");
                  }}
                >
                  <img src={Operator} alt="" />
                </button>
              ) : (
                <button
                  className="text-xl mt-4 pb-1.5"
                  onClick={(event) => {
                    setNewOperator("Tidak");
                  }}
                >
                  <img src={Operator_ijo} alt="" />
                </button>
              )}
            </div>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">
              Deskripsi Barang
            </div>
            <textarea
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 h-48 w-full space-x-6 flex items-center "
              placeholder="Deskripsikan spesifikasi barang selengkap mungkin"
              onChange={(event) => {
                setNewDeskripsi(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-12">
            <div className=" font-nunito font-bold text-lg">Kondisi Barang</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray-500 w-full space-x-6 flex items-center "
              placeholder="Contoh: ada sedikit lecet, agak macet, dsb."
              onChange={(event) => {
                setNewKondisi(event.target.value);
              }}
            />
          </div>
          <div className="flex justify-end w-full mb-12">
            <Link to="/">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-birdong via-birmid to-birmud h-12 w-48 text-xl font-bold text-white font-nunito"
                onClick={createProduk}
              >
                Kirim
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Usrs;
