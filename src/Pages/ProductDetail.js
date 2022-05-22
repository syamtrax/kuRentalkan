import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/outline";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Card from "../Components/Card/SearchCard";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation()
  const [prods, setProds] = useState([])
  const [proddata, setproddata] = useState({})
  const [jumlah, setjumlah] = useState(1)
  const currDate = new Date().toISOString().slice(0, 10);
  const [startDate, setstartDate] = useState(currDate)
  const [endDate, setendDate] = useState(currDate)

  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  const params = useQuery()
  const paramsId = params !== null ? params.get('id') : ''
  const usersCollectionRef = doc(db, location.pathname.substring(8), paramsId);
  
  function parseDate(str) {
    var mdy = str.split('-');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }

  function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.floor((first.getTime() - second.getTime()) / (1000 * 3600 * 24 * 365));
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDoc(usersCollectionRef);
      setproddata(() => ({ ...data.data(), id: data.id }))
    };

    getUsers();
  }, []);

  useEffect(() => {
    if (proddata.kategori) {
      const totalCollectionRef = collection(db, proddata.kategori);

      const getTotal = async () => {
        const data = await getDocs(totalCollectionRef);
        setProds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getTotal();
    }
  }, [proddata]);

  return (
    <div>
      <div className="h-24 " />
      <div className="mx-auto container font-nunito pt-16">
        <div>
          <div className="flex border-b-2 w-full">
            <div className="flex w-full">
              <div className="">
                <div className=" flex justify-center">
                  <img className="h-96 w-5/6 rounded-lg object-contain bg-gray-200" src={proddata.imageurl} />
                </div>
                <div className="flex ml-1 my-2 mb-5 w-full justify-center border-b-2 pb-4">
                    <img className="h-16 w-16 mx-1 rounded-xl object-cover" src={proddata.imageurl} />
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
                    {/* <div>
                      <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                        Jenis Sewa
                      </h1>
                      <p className="text-md text-gray-500 ">
                        24 Jam Setelah Pesanan
                      </p>
                      <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                        Pemeriksaan
                      </h1>
                      <p className="text-md text-gray-500 ">Oleh kuRentalkan</p>
                    </div>
                  </div>
                  {/* <h1 className="text-transparent font-black text-lg bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
                    Pembatalan
                  </h1>
                  <p className="text-md text-gray-500 ">
                    Tidak Dapat Dibatalkan
                  </p> */}
                </div>
              </div>
              <div className="w-1/2 ml-10">
                <div className="">
                  <h1 className="text-2xl font-bold ">
                    {proddata.name}
                  </h1>
                  <div className="flex my-2">
                    <p className=" border-r-2 pr-2 ">Tersewa 0</p>

                    <p className=" border-r-2 pr-2 ml-2">
                      0.0 &#40;<a className="text-gray-500">0 ulasan</a>&#41;
                    </p>
                    <p className=" ml-2">
                      Diskusi &#40;<a className="text-gray-500">0</a>&#41;
                    </p>
                  </div>
                  <h1 className="text-3xl font-bold my-4">
                    Rp {proddata.harga} / Hari
                  </h1>
                  <p className="border-t-2 border-b-2 text-lg text-gray-600 font-bold mb-4">
                    Detail
                  </p>
                  <div className="border-b-2">
                    <p className="text-gray-600 text-sm font-bold"> Stok : {proddata.stok}</p>
                    <p className="text-gray-500 text-sm mt-2">Kategori : {proddata.kategori}</p>
                    <p className="text-gray-500 text-sm"> Merek : {proddata.merk}</p>
                    <p className="text-gray-500 text-sm"> Tipe Barang : {proddata.tipe}</p>
                    <p className="text-gray-500 text-sm">Tahun Produksi : {proddata.tahun}</p>
                    {/* <p className="text-gray-500 text-sm">Berat :</p>
                    <p className="text-gray-500 text-sm">Tinggi :</p>
                    <p className="text-gray-500 text-sm">Lebar :</p>
                    <p className="text-gray-500 text-sm">Panjang :</p> */}
                    <p className="mt-3 text-sm">Deskripsi :</p>
                    <p className="text-sm" >
                      {proddata.deskripsi}
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque urna nulla, laoreet ut fermentum ac, tempus at
                      sapien. Quisque quis purus eu felis facilisis tincidunt.
                      Donec a eros venenatis, venenatis metus sit amet, egestas
                      ante. Aliquam id pulvinar purus. Pellentesque est ante,
                      suscipit eget pharetra alique. */}
                    </p>
                    <p className="mt-3 text-sm">Kondisi :</p>
                    <p className="mb-3 text-sm">
                      {proddata.kondisi}
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque urna nulla, laoreet ut fermentum ac. */}
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
                        <p className=" border-r-2 pr-2">5.0</p>
                        <p className="ml-2">1 Menit</p>
                      </div>
                    </div>
                    <button className="-mt-5 rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center">
                      Follow
                    </button>
                  </div>
                  <h1 className="font-bold ">Lokasi</h1>
                  <p className="mb-3">{proddata.lokasi}</p>
                </div>
              </div>
              <div className="w-1/3 font-nunito">
                <div className="m-4 border-2 border-gray-200 rounded-lg p-4 max-h-min">
                  <label htmlFor="date" className="flex justify-around mt-4 p-2 rounded-md bg-gray-200 font-black">
                    <input type="date" className="w-2/5 bg-gray-200 font-black" value={startDate} onChange={(e) => { setstartDate(e.target.value) }} />
                    <p>-</p>
                    <input type="date" className="w-2/5 bg-gray-200 font-black" value={endDate} onChange={(e) => { setendDate(e.target.value) }} />
                  </label>
                  <p className="text-sm text-gray-400 mt-2 mb-4">Minimum 1 hari</p>
                  <div className="flex my-2 border-t-2 border-b-2 border-gray-200 justify-between">
                    <div>
                      <p>
                        Jumlah Barang
                      </p>
                      <p className="text-sm text-gray-400">
                        Stok: {proddata.stok}
                      </p>
                    </div>
                    <div className="place-self-center rounded-md bg-gray-200 flex gap-x-3 border-gray-400 border text-gray-400 p-1">
                      <button onClick={() => {
                        if (jumlah - 1 > 0) {
                          setjumlah(jumlah - 1)
                        }
                      }}>
                        -
                      </button>
                      <p className="text-gray-500">{jumlah}</p>
                      <button onClick={() => {
                        const stok = proddata.stok
                        if (jumlah + 1 > stok) {
                          setjumlah(stok)
                        } else {
                          setjumlah(jumlah + 1)
                        }
                      }}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link to="/cart" >
                      <button className="rounded-full w-full text-center bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center"
                        onClick={() => {
                          const cart = JSON.parse(localStorage.getItem('cartData') || "[]")
                          let updatecart = {
                            ...proddata,
                            jumlah: jumlah,
                            startDate: startDate,
                            endDate: endDate,
                            hari: datediff(parseDate(endDate), parseDate(startDate))
                          }
                          cart.push(updatecart)
                          localStorage.setItem('cartData', JSON.stringify(cart))
                        }}>
                        Pesan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <right></right>
          </div>
          {/* feedback */}
          <div className="border-b-2 my-4">
            <div className="flex gap-x-2 mb-2 font-nunito text-transparent font-black text-xl bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Ulasan dan Penilaian
              <div className="font-bold text-lg bg-clip-text bg-gray-700">
                (0)
              </div>
            </div>
            {/* <div className="text-black font-nunito text-md font-extrabold">
              Ulasan paling relevan
            </div> */}
            <div className="rounded-md border-2 font-semibold mb-4">
              <div className="font-semibold w-full">
                <div className="rounded-md bg-gray-100 w-full p-12 font-semibold">
                  <div className="my-auto w-full text-center font-bold">
                    Belum ada ulasan tentang produk ini
                  </div>
                  <div className="text-gray-500 text-center">
                    Jadilah yang pertama menyewa produk ini dan berikan ulasan
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex mb-4 gap-x-4">
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
            </div> */}
          </div>
          {/* end of feedback  */}
          <div className="">
            <div className="flex my-2 gap-x-2 mb-2 justify-star font-nunito text-transparent font-black text-xl bg-clip-text bg-gradient-to-br from-blue-700 to-blue-400">
              Diskusi
              <div className="font-bold text-lg bg-clip-text bg-gray-700">
                (0)
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
            <div className="rounded-md border-2 font-semibold mb-4">
              <div className="font-semibold w-full">
                <div className="rounded-md bg-gray-100 w-full p-12 font-semibold">
                  <div className="my-auto w-full text-center font">
                    Belum ada diskusi tentang produk ini
                  </div>
                  <div className="my-auto w-full text-center font-black font-nunito text-blue-700 ">
                    Jadilah yang pertama!
                  </div>
                  <div className="rounded-full bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 text-center w-1/6 mx-auto">
                    Mulai Diskusi
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4">
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
            </div> */}
          </div>
        </div>
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
            {prods.map((prod, ind) => {
              return (
                <Card
                  name={prod.name}
                  harga={prod.harga}
                  lokasi={prod.lokasi}
                  imageurl={prod.imageurl}
                  key={ind}
                />
              );
            })}
          </div>
        </bottom>
      </div>
    </div>
  );
};
export default ProductDetail;
