import wallet from "../../src/Assets/wallet.png";

function paymethod() {
    return (
        <div className="flex justify-center font-nunito items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/4 my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className = "flex">
                        <h3 className = "ml-4 text-lg font-bold text-black">Pilih Pembayaran</h3>
                        <button className = "bg-transparent border-0 text-black float-right">
                                <span className="ml-40 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">x</span>
                        </button>
                    </div>
                    <div className = "pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">Pembayaran di kuRentalkan</div>
                    <div className = "ml-4 flex">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "text-base font-bold text-black">Rp 0</div>
                            <div className = "text-xs text-gray-500">Saldo Tidak Cukup</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "ml-36 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                    <div className = "pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">Kartu Kredit</div>
                    <div className = "ml-4 flex">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "text-base font-bold text-black">Rp 0</div>
                            <div className = "text-xs text-gray-500">Saldo Tidak Cukup</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "ml-36 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                    <div className = "pl-4 py-2 text-lg font-bold text-black border-t-8 border-gray-100">Transfer Virtual Account</div>
                    <div className = "ml-4 flex border-b-2 border-gray-100">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "pt-2 text-base font-bold text-black">BNI Account</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "pl-4 ml-36 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                    <div className = "ml-4 flex border-b-2 border-gray-100">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "pt-2 text-base font-bold text-black">Briva</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "ml-52 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                    <div className = "ml-4 flex border-b-2 border-gray-100">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "pt-2 text-base font-bold text-black">BCA Account</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "ml-36 text-black opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                    <div className = "ml-4 flex">
                        <div>
                            <img className = "mt-2 mr-4 w-8 mb-2" src={wallet}/>
                        </div>
                        <div>
                            <div className = "pt-2 text-base font-bold text-black">Mandiri</div>
                        </div>
                        <button className = "bg-transparent border-0 text-black float-right">
                            <span className = "pl-4 ml-44 text-black text-gray-500 opacity-7 h-8 w-8 text-xl block p-auto rounded-full">></span>
                        </button>
                    </div>
                </div>  
            </div>
        </div>
                
    );
  }
  
  export default paymethod;