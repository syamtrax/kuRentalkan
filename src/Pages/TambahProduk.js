import React, { useEffect, useState } from "react";
import Operator_ijo from "../Assets/Operator_ijo.png";
import Operator from "../Assets/Operator.png";
import Deposit_ijo from "../Assets/Deposit_ijo.png";
import Deposit from "../Assets/Deposit.png";
import { db } from "../firebase-config";
import { useLocation } from "react-router-dom";
import { collection, addDoc } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { storage} from "../firebase-config";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"

const Usrs = () => {
  const [newName, setNewName] = useState("");
  const [newMerk, setNewMerk] = useState("");
  const [newKategori, setNewKategori] = useState("Pilih kategori");
  const [newTipe, setNewTipe] = useState("");
  const [newTahun, setNewTahun] = useState(0);
  const [newLokasi, setNewLokasi] = useState("");
  const [newAlamat, setNewAlamat] = useState("");
  const [newStok, setNewStok] = useState(0);
  const [newHarga, setNewHarga] = useState(0);
  const [newOperator, setNewOperator] = useState("Tidak");
  const [newDeposit, setNewDeposit] = useState("Tidak");
  const [newKondisi, setNewKondisi] = useState("");
  const [newDeskripsi, setNewDeskripsi] = useState("");
  const [katChanged, setkatChanged] = useState(false);
  const [newUserid, setNewUserid] = useState("default"); //delete kalo dah bs pass uid
  const [upimage, setUpimage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  console.log(url);

  // PENTING!!
  // const location = useLocation();
  // let isLogged = location.state ? location.state.isLogged : ''
  // let userid = location.state ? location.state.userid : ''

  let CollectionRef = collection(db, newKategori);

  const createProduk = async () => {
    if (newKategori === "Pilih kategori") {
      alert("Pilih kategori!");
    } else {
      const docRef = await addDoc(CollectionRef, {
        name: newName,
        kategori: newKategori,
        merk: newMerk,
        tipe: newTipe,
        tahun: newTahun,
        lokasi: newLokasi,
        alamat: newAlamat,
        stok: newStok,
        harga: newHarga,
        operator: newOperator,
        deposit: newDeposit,
        kondisi: newKondisi,
        deskripsi: newDeskripsi,
        userid: newUserid,
        imageurl : url,
      });

      const storageRef = ref(storage, `products/${upimage.name}`);
      const uploadImage = uploadBytesResumable(storageRef, upimage);
      uploadImage.on(
        "state_changed",
        snapshot => {
          const progress = 
          Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
          .then(url => {
            setUrl(url);
            console.log("upload success", url)
          });
        }
      );

      
    }
    // console.log(docRef.id)
  };



  return (
    <>
      <div className="mx-auto container my-28">
        <div className="mx-auto container border rounded-xl shadow-xl border-grey grid gap-y-4">
          <div className="text-2xl font-nunito font-black mt-10 text-blue-700">
            TAMBAH PRODUK
          </div>
          <div className="mt-3">
            <div className=" font-nunito font-bold text-lg">Nama Produk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Nama Produk"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Merk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Merk"
              onChange={(event) => {
                setNewMerk(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Kategori</div>
            <select
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center"
              value={newKategori}
              onChange={(event) => {
                setNewKategori(event.target.value);
                setkatChanged(true);
              }}
            >
              {katChanged ? (
                <option value="" default disabled>
                  Pilih Kategori
                </option>
              ) : (
                <option value="" default>
                  Pilih Kategori
                </option>
              )}
              <option value="mobil">Mobil</option>
              <option value="alat_musik">Alat Musik</option>
              <option value="motor">Motor</option>
              <option value="konsol">Konsol</option>
            </select>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Tipe Produk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Tipe Produk"
              onChange={(event) => {
                setNewTipe(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Tahun Produksi</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Tahun Produksi, contoh: 2020"
              type="number"
              onChange={(event) => {
                setNewTahun(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Lokasi</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Lokasi, contoh: Yogyakarta"
              onChange={(event) => {
                setNewLokasi(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Alamat</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Masukkan Alamat, Contoh: Jl. Pandega Marta No. 1 Kel. Caturtunggal, Kec. Depok, Kab. Sleman, DIY 55281"
              onChange={(event) => {
                setNewAlamat(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Stok Produk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="0"
              type="number"
              onChange={(event) => {
                setNewStok(event.target.value);
              }}
            />
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">Harga Sewa Produk/Hari</div>
            <div className="flex gap-x-4 items-center">
              <p className="items-center text-xl">Rp </p>
              <input
                className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
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
              Jenis Pengiriman
            </div>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">
              Keamanan Produk
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
              Upload Foto Produk
            </div>
            <div className = "flex mt-2">
                <div>
                  <input className = "form-control w-full px-2 py-1.5 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 focus-within:rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setUpimage(event.target.files[0]);
                  }}
                  />
                </div>
            </div>
            <div className = "mt-2">
              {upimage && (
                <div>
                <img alt="not found" width={"250px"} src={URL.createObjectURL(upimage)} />
                <br />
                  <button onClick={()=>setUpimage(null)}>
                    <div className = "border-1 bg-birmid text-white font-black p-2 w-full text-center rounded-md">
                      Remove
                    </div>
                  </button>  
                </div>
              )}
            </div>
          </div>
          <div className="">
            <div className=" font-nunito font-bold text-lg">
              Deskripsi Produk
            </div>
            <textarea
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray h-48 w-full space-x-6 flex items-center "
              placeholder="Deskripsikan spesifikasi barang selengkap mungkin"
              onChange={(event) => {
                setNewDeskripsi(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-12">
            <div className=" font-nunito font-bold text-lg">Kondisi Produk</div>
            <input
              className="mb-4 px-6 py-3 bg-white border-b-2 border-gray w-full space-x-6 flex items-center "
              placeholder="Contoh: ada sedikit lecet, ada sedikit goresan, dsb."
              onChange={(event) => {
                setNewKondisi(event.target.value);
              }}
            />
          </div>
          <div className="flex justify-end w-full mb-12">
            {katChanged === true ? (
              // <Link to="/">
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-birdong via-birmid to-birmud h-12 w-48 text-xl font-bold text-white font-nunito"
                  onClick={createProduk}
                >
                  Kirim
                </button>
              // </Link>
            ) : (
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-birdong via-birmid to-birmud h-12 w-48 text-xl font-bold text-white font-nunito"
                onClick={createProduk}
              >
                Simpan
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Usrs;
