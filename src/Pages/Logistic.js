import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import produkutama from "../../src/Assets/Gambar Utama.png";
import voucher from "../../src/Assets/Discvect.png";
import gprofil from "../../src/Assets/profile.png";
import glokasi from "../../src/Assets/Location.png";

const Logistic = () => {
    return (
      <div>
          <Navbar />
          <div className = "container mx-auto">
            <div className = "font-nunito  text-xl font-black text-blue-700 mt-36 mb-6">
              PEMBAYARAN
            </div>
            <div className = "text-lg font-nunito font-bold border-b-2 pb-2">
                  Alamat Pengiriman
            </div>
            <div className = "flex mb-3">
              <div className="mt-4 w-4/5">
                <div className="pt-0 text-lg font-nunito font-bold">Profile</div>
                <div className="pt-1 text-sm font-nunito">+6281234567890</div>
                <div className="pt-1 text-sm ">
                  Gadjah Mada University, Perpustakaan UGM, Jl Tri Darma No.2, Karang Malang, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                </div>
              </div>
              <div className="mt-5 ml-5 font-nunito content-center items-end text-xs mb-5">
                <div className="">
                  <button className = "bg-transparent hover:bg-gray-200 text-gray-700 hover:text-white py-2 px-4 border-2 font-bold border-gray-200 hover:border-transparent rounded">Tambah Alamat Baru</button>
                </div>
                <div>
                  <button className = "bg-transparent px-7 hover:bg-blue-500 text-gray-700 hover:text-white py-2 px-4 border-2 font-bold border-gray-200 hover:border-transparent rounded mt-1">Pilih Alamat Lain</button>
                </div>
              </div>
            </div>
            <div className = "flex border-t-2 mb-5">
              <div className="mt-3 font-nunito w-3/4">
                <div className = "flex">
                  <img className="h-6 mr-1" src={gprofil}></img>
                  <div className="font-bold text-lg">Profile Rental</div>
                </div>
                <div className = "flex">
                  <img class="ml-1 h-4 mr-3" src={glokasi}></img>
                  <div className="text-sm text-gray-500">Yogyakarta, DI Yogyakarta</div>
                </div>
                <div className="flex">
                  <img className=" mt-4 h-48 w-48" src = {produkutama}></img>
                  <div className="ml-16 mt-4 font-nunito">
                    <div className="font-bold text-lg">Mobil Sangar Jos Gandos Asolole Mantapp</div>
                    <div className="text-sm text-gray-600">1 barang x Rp40.000.000</div>
                    <div className="text-sm text-gray-600">Sewa 1 Hari</div>
                  </div>
                </div>
              </div>
              <div className="pl-14 border-l-2 mt-3 font-nunito">
                <div className="text-lg font-bold">Opsi Penerimaan</div>
                
                <div>
                  <label className = "pl-1 text-lg">
                    <input className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio"/>
                    Antar
                  </label>
                </div>
                <div>
                  <label className = "pl-1 text-lg">
                    <input className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio"/>
                    Jemput
                  </label>
                </div>
                <div className="mt-2 text-lg font-bold">Pilih Durasi</div>
                <button className="mt-1 rounded bg-gradient-to-r font-bold from-birdong via-birmid to-birmud text-white text-sm py-1 px-4 justify-self-end place-self-center">
                      Pengiriman
                </button>
              </div>
            </div>
            <div className = "flex border-t-2 border-b-2 pb-4">
              <div className = "border-r-2 w-3/4 mt-4">
                <div className = "font-bold text-lg">Ringkasan Pembayaran</div>
                <div className = "mt-2 flex text-base">
                  <div>Total Harga : </div>
                  <div className = "ml-1 text-gray-600">Mobil Sangar Jos Gandos Asolole Mantapp</div>
                </div>
              </div>
              <div>
                <div className = "pl-14 pt-8 font-bold text-lg">Rp40.000.000</div>
              </div>
            </div>
            <div className = "pl-20 flex p-5 mt-5 rounded-md border-2">
              <div className = "flex w-5/6">
                <img className="h-10" src = {voucher}></img>
                <div className="font-nunito font-bold text-lg pt-2 ml-3">Voucher kuRentalkan</div>
              </div>
              <div>
                <input className="pt-2 text-lg bg-white " placeholder="Masukkan Voucher"/>
              </div>
            </div>
            <div className = "flex font-nunito border-2 rounded-md pl-5 py-3 my-5 bg-gray-200 ">
              <div className = "pl-16 w-3/4">
                <div className = "text-lg font-bold">Total Tagihan</div>
                <div className = "text-lg font-bold"> Rp40.000.000</div>
              </div>
              <div>
                <button className="mt-1 text-lg bg-birmid hover:bg-birmid-500 text-white py-2 px-4 border-2 font-bold border-birmid hover:border-transparent rounded-xl">
                  Pilih Pembayaran
                </button>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    );
  };
  export default Logistic;