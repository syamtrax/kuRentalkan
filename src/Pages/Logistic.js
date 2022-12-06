import produkutama from "../../src/Assets/Gambar Utama.png";
import voucher from "../../src/Assets/Discvect.png";
import gprofil from "../../src/Assets/profile.png";
import glokasi from "../../src/Assets/Location.png";
import {
  CreditCardIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";

const Logistic = () => {
  const [penerimaan, setpenerimaan] = useState("Antar");
  const [name, setname] = useState("Mobil Sangar Jos Gandos Asolole Mantapp");
  const [harga, setharga] = useState(40000000);
  const [jumlah, setjumlah] = useState(1);
  const [hari, sethari] = useState(1);
  const [newnotelp, setnewnotelp] = useState("");
  const [newalamat, setnewalamat] = useState("");
  const [newprofil, setnewprofil] = useState("");
  const [notelp, setnotelp] = useState("");
  const [alamat, setalamat] = useState("");
  const [profil, setprofil] = useState("");
  const [editid, seteditid] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [costongkir, setcostongkir] = useState(0);
  const [voucher, setvoucher] = useState("");
  const [showPay, setshowPay] = useState(false);
  const [ongkirchanged, setongkirchanged] = useState(false);
  const [tokenbayar, settokenbayar] = useState("");
  const [hargatot, sethargatot] = useState(harga * jumlah * hari + costongkir);
  const vouchergratisongkir = "mobiltistis";
  const ongkir = [
    {
      text: "-",
      cost: 0,
    },
    {
      text: "GoSend",
      cost: 115000,
    },
    {
      text: "GrabExpress",
      cost: 110000,
    },
  ];
  //user e suuuuuuuu
  const uid = "BFxZlSt5dBWsdcFGskk2";

  const [address, setaddress] = useState([]);
  const addressCollectionRef = collection(db, "address");

  const addAddress = async () => {
    await addDoc(addressCollectionRef, {
      profil: newprofil,
      alamat: newalamat,
      notelp: newnotelp,
      uid: uid,
    });

    setalamat(newalamat);
    setprofil(newprofil);
    setnotelp(newnotelp);
    setAddModal(false);
    setShowModal(false);
  };

  const updateAddress = async (id) => {
    const addressDoc = doc(db, "address", id);
    const newFields = {
      alamat: newalamat,
      profil: newprofil,
      notelp: newnotelp,
    };
    await updateDoc(addressDoc, newFields);

    setalamat(newalamat);
    setprofil(newprofil);
    setnotelp(newnotelp);
    seteditModal(false);
    setAddModal(false);
    setShowModal(false);
  };

  /*const pay = () => {
    if (alamat === '') {
      alert('Pilih alamat!')
      return
    }
    if (penerimaan === 'antar' && costongkir === 0 && ongkirchanged === false) {
      alert('Pilih metode pengiriman!')
      return
    }
    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: hargatot })
    }).then(
      res => res.text()
    ).then(
      text => settokenbayar(text)
    ).then(window.snap.pay(tokenbayar));
  }*/

  useEffect(() => {
    const getAddress = async () => {
      const data = await getDocs(addressCollectionRef);
      setaddress(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(address)
    };

    getAddress();
  }, [showModal]);

  useEffect(() => {
    sethargatot(harga * jumlah * hari + costongkir);
  }, [harga, jumlah, hari, costongkir]);

  // useEffect(() => {
  //   fetch('/api', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ amount: hargatot })
  //   }).then(
  //     res => res.text()
  //   ).then(
  //     text => settokenbayar(text)
  //   );
  // }, []);

  useEffect(() => {
    const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "SB-Mid-client-tt03aJ7OWlHB2-1Q"; //change this according to your client-key

    const script = document.createElement("script");
    script.src = snapSrcUrl;
    script.setAttribute("data-client-key", myMidtransClientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {showPay ? (
        <>
          <div className="flex justify-center font-nunito items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/4 my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-between w-full">
                  <h3 className="ml-4 font-bold text-blue-700 text-xl">
                    Pilih Pembayaran
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                      setshowPay(false);
                    }}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">
                  Pembayaran di kuRentalkan
                </div>
                <div className="px-2 py-2 flex justify-between w-full">
                  <div className="flex gap-x-4">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-black">Rp 0</div>
                      <div className="text-xs text-gray-500">
                        Saldo Tidak Cukup
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
                <div className="pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">
                  Kartu Kredit
                </div>
                <div className="px-2 py-2 flex justify-between w-full">
                  <div className="flex gap-x-4">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-black">Rp 0</div>
                      <div className="text-xs text-gray-500">
                        Saldo Tidak Cukup
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
                <div className="pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">
                  Transfer Virtual Account
                </div>
                <div className="px-2 flex justify-between w-full border-b-2 border-gray-100">
                  <div className="my-2 flex">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="pl-4 text-base font-bold text-black">
                        BNI Account
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
                <div className="px-2 flex justify-between w-full border-b-2 border-gray-100">
                  <div className="my-2 flex">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="pl-4 text-base font-bold text-black">
                        Briva
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
                <div className="px-2 flex justify-between w-full border-b-2 border-gray-100">
                  <div className="my-2 flex">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="pl-4 text-base font-bold text-black">
                        BCA Account
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
                <div className="px-2 flex justify-between w-full">
                  <div className="my-2 flex">
                    <div>
                      <CreditCardIcon className="h-6 text-blue-500" />
                    </div>
                    <div>
                      <div className="pl-4 text-base font-bold text-black">
                        Mandiri
                      </div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className=" text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      <ChevronRightIcon className="h-6 text-blue-500" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {showModal ? (
        <>
          <div className="flex justify-center font-nunito items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/3 my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-black text-blue-700">
                    {addModal && editModal !== true
                      ? "Tambah Alamat"
                      : editModal
                      ? "Edit Alamat"
                      : "Pilih Alamat Pengaraman"}
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                      seteditModal(false);
                      setAddModal(false);
                      setShowModal(false);
                    }}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">
                      x
                    </span>
                  </button>
                </div>
                {addModal !== true ? (
                  <>
                    <button
                      className="text-center font-nunito text-blue-700 text-4xl relative p-6 flex-auto rounded-lg border-2 m-4 border-blue-700 h-24"
                      onClick={() => {
                        setAddModal(true);
                        seteditModal(false);
                        setnewalamat("");
                        setnewnotelp("");
                        setnewprofil("");
                      }}
                    >
                      +
                    </button>
                    <div className="relative p-6 flex-auto">
                      {address.map((a, i) => {
                        return (
                          <div className="flex mb-3">
                            <div className="mt-4 w-full">
                              <div className="pt-0 text-lg font-nunito font-bold flex justify-between">
                                <div
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setalamat(a.alamat);
                                    setnotelp(a.notelp);
                                    setprofil(a.profil);
                                    setShowModal(false);
                                  }}
                                >
                                  {a.profil}
                                </div>
                                <div
                                  className="text-blue-700"
                                  onClick={() => {
                                    setnewalamat(a.alamat);
                                    setnewprofil(a.profil);
                                    setnewnotelp(a.notelp);
                                    seteditid(a.id);
                                    setAddModal(true);
                                    seteditModal(true);
                                  }}
                                >
                                  Edit
                                </div>
                              </div>
                              <div className="pt-1 text-sm font-nunito">
                                {a.notelp}
                              </div>
                              <div
                                className={
                                  a.alamat === ""
                                    ? "pt-1 text-sm text-red-600"
                                    : "pt-1 text-sm"
                                }
                              >
                                {a.alamat}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative p-6 flex-auto">
                      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1 mt-4">
                          Profil
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          type="text"
                          name="newprofil"
                          id="newprofil"
                          placeholder="Masukkan Profil"
                          value={newprofil}
                          onChange={(e) => setnewprofil(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1 mt-4">
                          Alamat
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          type="text"
                          name="newalamat"
                          id="newalamat"
                          placeholder="Masukkan Alamat"
                          value={newalamat}
                          onChange={(e) => setnewalamat(e.target.value)}
                        />
                        <label className="block text-black text-sm font-bold mb-1 mt-4">
                          No Telp
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                          type="text"
                          name="newnotelp"
                          id="newnotelp"
                          placeholder="Masukkan No Telp"
                          value={newnotelp}
                          onChange={(e) => setnewnotelp(e.target.value)}
                        />
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-black uppercase px-6 py-2 text-2xl outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setAddModal(false)}
                      >
                        &#8592;
                      </button>
                      {editModal === true ? (
                        <button
                          className="text-white bg-gradient-to-r from-birdong via-birmid to-birmud active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => {
                            updateAddress(editid);
                          }}
                        >
                          Submit
                        </button>
                      ) : (
                        <button
                          className="text-white bg-gradient-to-r from-birdong via-birmid to-birmud active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={addAddress}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="container mx-auto">
        <div className="font-nunito text-xl font-black text-blue-700 mt-36 mb-6">
          PEMBAYARAN
        </div>
        <div className="text-lg font-nunito font-bold border-b-2 pb-2">
          Alamat Pengiriman
        </div>
        {penerimaan === "Antar" ? (
          <>
            <div className="flex mb-3">
              <div className="mt-4 w-4/5">
                <div className="pt-0 text-lg font-nunito font-bold">
                  {alamat === "" ? "" : profil}
                </div>
                <div className="pt-1 text-sm font-nunito">{notelp}</div>
                <div
                  className={
                    alamat === "" ? "pt-1 text-sm text-red-600" : "pt-1 text-sm"
                  }
                >
                  {alamat === "" ? "Pilih alamat!!" : alamat}
                </div>
              </div>
              <div className="mt-5 ml-5 font-nunito content-center items-end text-xs mb-5">
                <div>
                  <button
                    className="bg-transparent px-4 hover:bg-blue-500 text-gray-700 hover:text-white py-2 border-2 font-bold border-gray-200 hover:border-transparent rounded mt-1 w-40"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Alamat
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="flex border-t-2 mb-5">
          <div className="mt-3 font-nunito w-3/4">
            <div className="flex">
              <img className="h-6 mr-1" src={gprofil}></img>
              <div className="font-bold text-lg">Profile Rental</div>
            </div>
            <div className="flex">
              <img className="ml-1 h-4 mr-3" src={glokasi}></img>
              <div className="text-sm text-gray-500">
                Yogyakarta, DI Yogyakarta
              </div>
            </div>
            <div className="flex">
              <img className=" mt-4 h-48 w-48" src={produkutama}></img>
              <div className="ml-16 mt-4 font-nunito">
                <div className="font-bold text-lg">{name}</div>
                <div className="text-sm text-gray-600">
                  <input
                    type="number"
                    name="jumlah"
                    id="jumlah"
                    className="border rounded-lg border-gray-300 p-1 w-10"
                    placeholder="1"
                    value={jumlah}
                    onChange={(e) => setjumlah(e.target.value)}
                  />{" "}
                  x{" "}
                  {harga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
                <div className="text-sm text-gray-600 pt-3">
                  Sewa
                  <input
                    type="number"
                    name="hari"
                    id="hari"
                    className="border rounded-lg border-gray-300 p-1 w-10"
                    placeholder="1"
                    value={hari}
                    onChange={(e) => sethari(e.target.value)}
                  />{" "}
                  Hari
                </div>
              </div>
            </div>
          </div>
          <div className="pl-14 border-l-2 mt-3 font-nunito">
            <div className="text-lg font-bold text-blue-700">
              Opsi Penerimaan
            </div>
            <div>
              <label className="pl-1 text-lg">
                <input
                  type="radio"
                  value="Antar"
                  checked={penerimaan === "Antar"}
                  onChange={(event) => {
                    setpenerimaan(event.target.value);
                  }}
                />
                Antar
              </label>
            </div>
            <div>
              <label className="pl-1 text-lg">
                <input
                  type="radio"
                  value="Ambil"
                  checked={penerimaan === "Ambil"}
                  onChange={(event) => {
                    setpenerimaan(event.target.value);
                    setcostongkir(0);
                  }}
                />
                Ambil
              </label>
            </div>
            {penerimaan === "Antar" ? (
              <div className="form-group mt-8 flex flex-col">
                <label className="font-nunito font-bold text-blue-700 text-lg">
                  Pilih Pengiriman
                </label>
                <select
                  className="border-2 border-blue-700 rounded-lg form-control"
                  value={costongkir}
                  onChange={(event) => {
                    setcostongkir(Number(event.target.value));
                    setongkirchanged(true);
                  }}
                >
                  {ongkir.map((option) => {
                    return (
                      <option
                        value={option.cost}
                        key={option.text}
                        selected={costongkir == option.cost}
                      >
                        {option.text}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex border-t-2 border-b-2 pb-4">
          <div className="border-r-2 w-3/4 mt-4">
            <div className="font-bold text-lg">Ringkasan Pembayaran</div>
            <div className="mt-2 flex text-base">
              <div>Total Harga : </div>
              <div className="ml-1 text-gray-600">
                Mobil Sangar Jos Gandos Asolole Mantapp
              </div>
            </div>
          </div>
          <div>
            <div className="pl-14 pt-8 font-bold text-lg">
              {(harga * jumlah * hari + costongkir).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
          </div>
        </div>
        <div className="pl-20 flex p-5 mt-5 rounded-md border-2">
          <div className="flex w-5/6">
            <img className="h-10" src={voucher}></img>
            <div className="font-nunito font-bold text-lg pt-2 ml-3">
              Voucher kuRentalkan
            </div>
          </div>
          <div>
            <input
              className="mt-2 text-lg bg-white "
              type="text"
              id="voucher"
              value={voucher}
              onChange={(event) => {
                setvoucher(event.target.value);
                if (voucher === vouchergratisongkir) {
                  setcostongkir(0);
                }
              }}
              placeholder="Masukkan Voucher"
            />
          </div>
        </div>
        <div className="flex font-nunito border-2 rounded-md pl-5 py-3 my-5 bg-gray-200 ">
          <div className="pl-16 w-3/4">
            <div className="text-lg font-bold">Total Tagihan</div>
            <div className="text-lg font-bold">
              {hargatot.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
          </div>
          <div>
            <button
              className="mt-1 text-lg bg-birmid hover:bg-birmid-500 text-white py-2 px-4 border-2 font-bold border-birmid hover:border-transparent rounded-xl"
              /*onClick={() => {
                pay()
              }}*/
            >
              Pilih Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logistic;
