import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import produk from "../../src/Assets/produkmobil.png";
import produkutama from "../../src/Assets/Gambar Utama.png";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/outline";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import Card from "../Components/Card/SearchCard";
const ProductDetail = () => {
  const [prods, setProds] = useState([]);
  const usersCollectionRef = collection(db, "mobil");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setProds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="h-24 " />
      <div className="mx-auto container font-nunito">
        <top>
          <div className="flex border-b-2 ">
            <left className="flex w-2/3">
              <div className="">
                <div className="border-b-2">
                  <img className="  mx-auto" src={produkutama} />
                  <div className="flex ml-1 my-2 mb-5">
                    <img className="h-20 mx-1 rounded-xl" src={produk} />
                    <img className="h-20 mx-1 rounded-xl" src={produk} />
                    <img className="h-20 mx-1 rounded-xl" src={produk} />
                    <img className="h-20 mx-1 rounded-xl" src={produk} />
                  </div>
                </div>
                <div className="mt-3">
                  <h1 className="flex   text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                    Keamanan
                  </h1>
                  <div className="flex ">
                    <p className="text-md text-gray-500 ">
                      Perlindungan kuRentalkan
                    </p>
                    <p className="text-md text-gray-500 ml-5">
                      Termasuk Operator
                    </p>
                  </div>
                  <div className="flex my-1">
                    <div>
                      <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                        Jenis Sewa
                      </h1>
                      <p className="text-md text-gray-500 ">
                        24 Jam Setelah Pesanan
                      </p>
                    </div>
                    <div className="ml-9">
                      <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                        Pemeriksaan
                      </h1>
                      <p className="text-md text-gray-500 ">Oleh kuRentalkan</p>
                    </div>
                  </div>
                  <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                    Pembatalan
                  </h1>
                  <p className="text-md text-gray-500 ">
                    Tidak Dapat Dibatalkan
                  </p>
                </div>
              </div>
              <div className="w-1/2 ml-10">
                <div className="">
                  <h1 className="text-2xl font-bold ">
                    Mobil Sangar Jos Gandosssss
                  </h1>
                  <h1 className="text-2xl font-bold ">Asolole Mantapp</h1>
                  <div className="flex my-2">
                    <p className=" border-r-2 pr-2 pr-2 ">Tersewa 100</p>

                    <p className=" border-r-2 pr-2 ml-2">
                      4.9 &#40;<a className="text-gray-500">80 ulasan</a>&#41;
                    </p>
                    <p className=" ml-2">
                      Diskusi &#40;<a className="text-gray-500">25</a>&#41;
                    </p>
                  </div>
                  <h1 className="text-3xl font-bold my-4">
                    Rp20.000.000 / Hari
                  </h1>
                  <p className="border-t-2 border-b-2 text-lg text-gray-600 font-bold">
                    Detail
                  </p>
                  <div className="border-b-2">
                    <p className="text-gray-500 text-sm mt-2">Kategori :</p>
                    <p className="text-gray-500 text-sm"> Merek :</p>
                    <p className="text-gray-500 text-sm"> Tipe Barang :</p>
                    <p className="text-gray-500 text-sm">Tahun Produksi :</p>
                    <p className="text-gray-500 text-sm">Berat :</p>
                    <p className="text-gray-500 text-sm">Tinggi :</p>
                    <p className="text-gray-500 text-sm">Lebar :</p>
                    <p className="text-gray-500 text-sm">Panjang :</p>
                    <p className="mt-3 text-sm">Deskripsi :</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque urna nulla, laoreet ut fermentum ac, tempus at
                      sapien. Quisque quis purus eu felis facilisis tincidunt.
                      Donec a eros venenatis, venenatis metus sit amet, egestas
                      ante. Aliquam id pulvinar purus. Pellentesque est ante,
                      suscipit eget pharetra alique.
                    </p>
                    <p className="mt-3 text-sm">Kondisi :</p>
                    <p className="mb-3 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque urna nulla, laoreet ut fermentum ac.
                    </p>
                  </div>
                  <div className="rounded-lg border-2 flex my-3">
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
                    <button className="-mt-5 rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center">
                      Follow
                    </button>
                  </div>
                  <h1 className="font-bold ">Lokasi</h1>
                  <p className="mb-3">Yogyakarta, Daerah Istimewa Yogyakarta</p>
                </div>
              </div>
            </left>
            <right></right>
          </div>
          {/* feedback */}
          <div className="border-b-2 my-4">
            <div className="flex gap-x-2 mb-2 font-nunito text-transparent font-black text-xl bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Ulasan dan Penilaian
              <div className="font-bold text-lg bg-clip-text bg-gray-700">
                (80)
              </div>
            </div>
            <div className="text-black font-nunito text-md font-extrabold">
              Ulasan paling relevan
            </div>
            <div className="flex mb-4 gap-x-4">
              <div className="w-1/6 flex border-r-2 rounded-r-sm font-nunito text-md text-gray-600 font-extrabold">
                <UserCircleIcon className="text-gray-400 h-8 my-2 mr-2" />
                <div className="place-self-center">Nama</div>
              </div>
              <div className="">
                <div>bintang 5</div>
                <div className="font-nunito text-sm font-bold text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque urna nulla, laoreet ut fermentum ac.
                </div>
              </div>
            </div>

            <div className="flex my-4 gap-x-4 w-full">
              <div className="w-1/6 flex border-r-2 rounded-r-sm font-nunito text-md text-gray-600 font-extrabold">
                <UserCircleIcon className="text-gray-400 h-8 my-2 mr-2" />
                <div className="place-self-center">Nama</div>
              </div>
              <div className="">
                <div>bintang 5</div>
                <div className="font-nunito text-sm font-bold text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque urna nulla, laoreet ut fermentum ac.
                </div>
              </div>
            </div>

            <div className="flex my-4 gap-x-4">
              <div className="w-1/6 flex border-r-2 rounded-r-sm font-nunito text-md text-gray-600 font-extrabold">
                <UserCircleIcon className="text-gray-400 h-8 my-2 mr-2" />
                <div className="place-self-center">Nama</div>
              </div>
              <div className="">
                <div>bintang 5</div>
                <div className="font-nunito text-sm font-bold text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque urna nulla, laoreet ut fermentum ac.
                </div>
              </div>
            </div>
            <div className="mb-6 text-transparent flex justify-end font-nunito text-md font-black bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Lihat Semua Ulasan dan Penilaian
            </div>
          </div>
          {/* end of feedback  */}
          <div className="">
            <div className="flex my-2 gap-x-2 mb-2 justify-star font-nunito text-transparent font-black text-xl bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Diskusi
              <div className="font-bold text-lg bg-clip-text bg-gray-700">
                (80)
              </div>
              <div className="w-96"></div>
              <div className="font-bold text-xs text-gray-500 h-4 place-self-center border-dotted border rounded-lg">
                Q&amp;A
              </div>
              <div className="font-bold text-sm text-gray-500 h-4 justify-self-end place-self-center">
                Ada pertanyaan?
              </div>
              <div className="font-bold text-sm text-black h-4 justify-self-end place-self-center">
                Diskusikan dengan penyewa atau pengguna
              </div>
              <div className="rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center">
                Tuliskan pertanyaan
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-md border-2 font-semibold">
                <div className="flex my-2 mx-4">
                  <UserCircleIcon className="text-gray-400 h-8 my-2 mr-2" />
                  <div className="place-self-center">
                    <div>Nama</div>
                    <div className="text-blue-400 text-sm">
                      Lorem ipsum dolor amet?
                    </div>
                  </div>{" "}
                </div>
                <div className="border-t-2 font-semibold">
                  <div className="rounded-b-md border-t-2 bg-gray-200 font-semibold">
                    <div className="flex ml-12 mt-2 mr-4">
                      <UserCircleIcon className="text-gray-400 h-8 mr-2" />
                      <div className="place-self-center">
                        <div>Nama</div>
                        <div className="text-blue-400 text-sm">
                          Lorem ipsum dolor amet?
                        </div>
                      </div>
                    </div>
                    <div className="h-2"></div>
                  </div>
                </div>
              </div>
              <div className="rounded-md border-2 font-semibold">
                <div className="flex my-2 mx-4">
                  <UserCircleIcon className="text-gray-400 h-8 my-2 mr-2" />
                  <div className="place-self-center">
                    <div>Nama</div>
                    <div className="text-blue-400 text-sm">
                      Lorem ipsum dolor amet?
                    </div>
                  </div>
                </div>
                <div className="rounded-b-md border-t-2 bg-gray-200 font-semibold">
                  <div className="flex ml-12 mt-2 mr-4">
                    <UserCircleIcon className="text-gray-400 h-8 mr-2" />
                    <div className="place-self-center">
                      <div>Nama</div>
                      <div className="text-blue-400 text-sm">
                        Lorem ipsum dolor amet?
                      </div>
                    </div>
                  </div>
                  <div className="h-2"></div>
                </div>
              </div>
            </div>
          </div>
        </top>
        <bottom>
          <div className="flex">
            <h1 className="w-10/12 my-auto text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Produk Serupa Lainnya
            </h1>
            <button className="flex my-auto ml-16">
              <p className=" text-transparent font-black bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                Lihat Semua
              </p>
              <ChevronRightIcon className="h-6 text-blue-500" />
            </button>
          </div>
          <div className=" mb-14 grid grid-cols-5 ">
            {prods.map((prod) => {
              return (
                <Card
                  name={prod.name}
                  harga={prod.harga}
                  lokasi={prod.lokasi}
                />
              );
            })}
          </div>
        </bottom>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetail;
