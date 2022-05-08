import { useState, useEffect } from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import gambar from "../../Assets/mobil.png"
const ItemTransaction = ({ status, created, orderNumber, finalPrice }) => {

  const checkStatus = () => {
    switch (status) {
      case 'Order Complete':
        return 'bg-green-100 text-green-600'
      case 'Waiting For Payment':
        return 'bg-yellow-100 text-yellow-600'
      case 'Failed':
        return 'bg-red-100 text-red-600'
    }
  }
  return (
        <div className="rounded-md shadow-card px-4 py-4 my-2 border border-opacity-30 text-sm lg:text-base">
            {/* <div className="hidden lg:flex lg:justify-between lg:px-4 lg:py-2">
                <span className="block w-1/4 text-center">
                    <span className="block font-bold">Waktu</span>
                    <span className="block font-bold">Pembelian</span>
                    <span className="block">{moment(created).format('DD-MM-YYYY')}</span>
                </span>
                <span className="block w-1/4 text-center">
                    <span className="block font-bold">Metode</span>
                    <span className="block font-bold">Pembayaran</span>
                    <span className="block">
                      {
                        paymentGateway?.filter((item:any) => item.id === id).map((item2:any) => {
                          return item2.name
                        })
                      }
                    </span>
                </span>
                <span className="block w-1/4 text-center">
                    <span className="block font-bold">Invoice</span>
                    <span className="block font-bold">Number</span>
                    <span className="block">{orderNumber}</span>
                </span>
                <span className="block w-1/4 text-center">
                    <span className="block font-bold">Status</span>
                    <span className="block font-bold h-6"></span>
                    <span className="block">{status}</span>
                </span>
            </div> */}
            <div className="block">
              <div className='flex mb-2'>
                <ShoppingBagIcon className="h-5 text-blue-500"/>
                <p className='text-sm font-bold mx-2'>Belanja</p>
                <span className="text-sm mx-1">{created}</span>
                <span className={`${checkStatus()} mx-1 px-2 rounded-full font-bold text-sm`}>{status}</span>
                <span className="text-sm mx-1">{orderNumber}</span>
              </div>
              <div className='flex my-7 justify-between'>
                <div className='flex'>
                  <img src={gambar} className="h-10"/>
                  {/* <p>{title}</p> */}
                </div>
                <div className='border-l-2 pl-5 '>
                  <p>Total Belanja</p>
                  <span className="block font-bold">{finalPrice}</span>
                </div>
              </div>
              <div className='flex mt-4 justify-between'>
                <div className=''></div>
                <div className=" flex">
                  <a className='text-sm text-blue-500 font-bold my-auto'>Lihat Detail Transaksi</a>
                  <button className='text-sm text-white font-bold bg-blue-500 px-5 py-2 rounded-lg mx-4'>Beri Ulasan</button>
                  <button className='border-2 px-3 py-2 rounded-lg '><DotsHorizontalIcon className='h-4'/></button>
                </div>
              </div>
            </div>
        </div>
  )
}

export default ItemTransaction
