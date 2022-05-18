import wallet from "../../src/Assets/wallet.png";
import { CreditCardIcon, ChevronRightIcon, UserCircleIcon } from "@heroicons/react/outline";

function Pembayaran(){
    return(
        <>
        <div className="flex justify-center font-nunito items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-1/2 my-6 mx-auto border-2 rounded-lg h-3/4">
            <div className="w-full">
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className="text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">x</span>
                  </button>
            </div>
            <div className = "my-4 font-black text-blue-600 font w-full text-center text-lg m">Pembayaran</div>
            <div className = "relative w-3/4 border-2 mx-auto rounded-lg shadow-md">
                <div className="px-2 flex justify-between w-full border-b-2 border-gray-100 border-b-1">
                  <div className="my-2 flex">
                    <div>
                      <div className="pl-2 text-base font-bold text-black">Wallet</div>
                    </div>
                  </div>
                  <button className="bg-transparent border-0 text-black float-right pr-4">
                      <img className="h-6" src = {wallet}/>
                  </button>
                </div>
                <div className = "pl-2 font-bold pt-2 text-sm">087802558582</div>
                <div className = "pl-2 pt-2 text-sm">Saldo Anda : Rp 100.000</div>
            </div>
            <div className = "relative w-3/4 border-2 mx-auto rounded-lg mt-4 shadow-md">
                <div className="px-2 flex justify-between w-full border-b-2 border-gray-100 border-b-1">
                  <div className="my-2 flex w-full justify-between pr-2">
                    <div>
                      <div className="pl-2 text-base font-bold text-black">Total tagihan</div>
                    </div>
                    <div>
                      <div className="pl-2 text-base font-bold text-blue-700">Rp 75.000</div>
                    </div>
                  </div>
                </div>
                <div className = "pl-2 font-bold pt-2 text-sm">Ringkasan belanja</div>
                <div className="my-2 flex w-full justify-between text-sm">
                    <div>
                      <div className="pl-4 text-black">Total Harga</div>
                    </div>
                    <div>
                      <div className="pr-4 text-black">Rp 100.000</div>
                    </div>
                </div>
                <div className="my-2 flex w-full justify-between text-sm">
                    <div>
                      <div className="pl-4 text-black">Biaya Pengiriman</div>
                    </div>
                    <div>
                      <div className="pr-4 text-black">Rp 15.000</div>
                    </div>
                </div>
                <div className="my-2 flex w-full justify-between text-sm">
                    <div>
                      <div className="pl-4 text-black">Total Diskon</div>
                    </div>
                    <div>
                      <div className="pr-4 text-black">-Rp 40.000</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full items-end mt-40">
              <button
                type="submit"
                className="rounded-lg bg-birmid h-10 w-3/4 text-base font-bold text-white font-nunito">
                Bayar
              </button>
            </div>
          </div>
        </div>
      </>
    );
};
export default Pembayaran;