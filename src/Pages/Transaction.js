import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import { useState } from "react";
import React from "react";
import ItemTransaction from "../Components/Card/ItemTransaction";
import data from "../dummyTransaction.json"
import data1 from "../dummyTransaction1.json"
import data2 from "../dummyTransaction2.json"
import data3 from "../dummyTransaction3.json"

const Transaction = () => {
    const [selectedTabs, setSelectedTabs] = useState('new_order')  
  const handleChangeTabs = (tabs) => {
    if (tabs !== selectedTabs) {
      setSelectedTabs(tabs)
    }
  }
  return (
    <div>
        {/* <Navbar /> */}
        <div className="mx-auto container flex justify-center h-full w-full font-nunito">
            <div>

            </div>
            <div>
                <h1 className="text-blue-600 font-bold">DAFTAR TRANSAKSI</h1>
                <div className="flex justify-between items-center">
                        <ul className="flex px-4 my-2 overflow-x-auto hide-scroll-bar">
                            <li onClick={() => handleChangeTabs('new_order')}
                                className={`${selectedTabs === 'new_order' ? ('border-b-4 border-blue-500 text-blue-500') : ('border-b-2 border-opacity-0 text-dim-gray')} px-4 py-2 font-bold text-sm md:text-base cursor-pointer w-full lg:w-auto text-center`}>
                                <span className="block w-28 w-full">Semua Transaksi</span>
                            </li>
                            <li onClick={() => handleChangeTabs('waiting_for_payment')}
                                className={`${selectedTabs === 'waiting_for_payment' ? ('border-b-4 border-blue-500 text-blue-500') : ('border-b-2 border-opacity-0 text-dim-gray')} px-4 py-2 font-bold text-sm md:text-base cursor-pointer w-full lg:w-auto text-center`}>
                                <span className="block w-40 w-full">Menunggu Pembayaran</span>
                            </li>
                            <li onClick={() => handleChangeTabs('expired_order')}
                                className={`${selectedTabs === 'expired_order' ? ('border-b-4 border-blue-500 text-blue-500') : ('border-b-2 border-opacity-0 text-dim-gray')} px-4 py-2 font-bold text-sm md:text-base cursor-pointer w-full lg:w-auto text-center`}>
                                <span className="block w-14 w-full">Gagal</span>
                            </li>
                            <li onClick={() => handleChangeTabs('order_complete')}
                                className={`${selectedTabs === 'order_complete' ? ('border-b-4 border-blue-500 text-blue-500') : ('border-b-2 border-opacity-0 text-dim-gray')} px-4 py-2 font-bold text-sm md:text-base cursor-pointer w-full lg:w-auto text-center`}>
                                <span className="block w-14 w-full">Sukses</span>
                            </li>
                        </ul>
                    </div>
                    { selectedTabs === 'new_order' ?
                    <>{data.data.map((transaksi) => {
                        return (
                    <ItemTransaction 
                    status={transaksi.status}
                    created={transaksi.created}
                    orderNumber={transaksi.orderNumber}
                    finalPrice={transaksi.finalPrice}/>
                        ) 
                    })}</> : ''
                }
                { selectedTabs === 'waiting_for_payment' ?
                    <>{data1.data.map((transaksi) => {
                        return (
                    <ItemTransaction 
                    status={transaksi.status}
                    created={transaksi.created}
                    orderNumber={transaksi.orderNumber}
                    finalPrice={transaksi.finalPrice}/>
                        ) 
                    })}</> : ''
                }
                { selectedTabs === 'expired_order' ?
                    <>{data2.data.map((transaksi) => {
                        return (
                    <ItemTransaction 
                    status={transaksi.status}
                    created={transaksi.created}
                    orderNumber={transaksi.orderNumber}
                    finalPrice={transaksi.finalPrice}/>
                        ) 
                    })}</> : ''
                }
                { selectedTabs === 'order_complete' ?
                    <>{data3.data.map((transaksi) => {
                        return (
                    <ItemTransaction 
                    status={transaksi.status}
                    created={transaksi.created}
                    orderNumber={transaksi.orderNumber}
                    finalPrice={transaksi.finalPrice}/>
                        ) 
                    })}</> : ''
                }
            </div>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Transaction