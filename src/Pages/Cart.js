/* eslint-disable multiline-ternary */
import ItemList from "../Components/ItemList/ItemList";
import discvect from "../Assets/Discvect.png";
import dataDummy from "../dummyCheckout.json";
import produkmobil from "../Assets/produkmobil.png";
import { useEffect, useState } from "react";
import {
  TrashIcon,
  UserCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("cartData");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [valueY, setValueY] = useState(0);
  const [costongkir, setcostongkir] = useState(0);
  const [voucher, setvoucher] = useState("");
  const [totalProd, settotalProd] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);
  const vouchergratisongkir = "mobiltistis";

  function parseDate(str) {
    var mdy = str.split('-');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }

  function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.floor((first.getTime() - second.getTime()) / (1000 * 3600 * 24 * 365));
  }

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "select-all") {
      const tempProduct = products.map((product) => {
        return { ...product, isChecked: checked };
      });
      setProducts(tempProduct);
    } else {
      const tempProduct = products.map((product) =>
        product.name === name ? { ...product, isChecked: checked } : product
      );
      setProducts(tempProduct);
    }
  };

  const handleDelete = (e) => {
    const items = products.filter((product) => product.id !== e);
    setProducts(items);
    localStorage.removeItem('cartData')
    localStorage.setItem('cartData', JSON.stringify(products))
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setValueY(window.scrollY);
    });
  });

  useEffect(() => {
    let tot = 0;
    let totPrice = 0;
    products.map((o, i) => {
      if (o.isChecked === true) {
        tot = tot + 1;
        totPrice = totPrice + (o.harga * o.jumlah * o.hari)
      }
    });
    settotalProd(tot);
    setcartTotal(totPrice)
    localStorage.removeItem('cartData')
    localStorage.setItem('cartData', JSON.stringify(products))
  }, [products]);

  return (
    <div>
      <div className="font-nunito ">
        <div className="md:block hidden"></div>
        <main className="h-auto lg:container mx-auto lg:px-0 pt-20 lg:pt-40">
          <div>
            <div className=" lg:w-7/12 mx-auto lg:px-0">
              <div>
                <div className="w-full">
                  <div className="shadow-sm flex rounded-sm border-2 border-opacity-20 py-1">
                    <div className="flex items-center my-2 lg:mx-4 space-x-2">
                      <input
                        className="mr-2 lg:mt-1 w-5 h-5"
                        value="checkedall"
                        type="checkbox"
                        name="select-all"
                        checked={
                          !products.some(
                            (product) => product?.isChecked !== true
                          )
                        }
                        onChange={handleChange}
                      ></input>
                      <div className="text-lg lg:text-base font-bold lg:pt-1 my-3 lg:my-0">
                        Pilih Semua
                      </div>
                    </div>
                  </div>
                </div>
                {products.map((item) => {
                  return (
                    <li className="list-none">
                      <div className="font-nunito lg:flex lg:mt-2">
                        <div className="shadow-sm border-t-2 border-b-2 lg:border-2 border-opacity-70 rounded-md lg:mx-auto mx-0.5 my-2 py-2 flex bg-white w-full h-auto lg:h-72">
                          <input
                            name={item.name}
                            className="mt-3 lg:ml-5 lg:mr-3 w-5 h-5"
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          />
                          <img
                            className="mx-5 my-3 h-36 lg:mx-6 lg:my-3 lg:h-auto w-64 object-scale-down"
                            src={item.imageurl}
                            alt={item.imageurl}
                          />
                          <div className="w-4/6 flex flex-col gap-y-0 mr-8">
                            <h1 className="mt-2 font-bold text-lg">{item.name}</h1>
                            <div className="flex">
                              <p className=" pr-2 text-sm">Stok {item.stok}</p>
                            </div>
                            <p className="text-lg font-bold mt-2 w-1/2">
                              {item.harga.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </p>
                            <label htmlFor="date" className="flex justify-around mt-4 p-2 rounded-md bg-gray-200 font-black">
                              <input type="date" className="w-2/5 bg-gray-200 font-black" value={item.startDate} onChange={(e) => {
                                const tempProduct = products.map((product) =>
                                  product.id === item.id ? { ...product, startDate: e.target.value, hari: datediff(parseDate(item.endDate), parseDate(item.startDate)) } : product
                                );
                                setProducts(tempProduct);
                              }} />
                              <p>-</p>
                              <input type="date" className="w-2/5 bg-gray-200 font-black" value={item.endDate} onChange={(e) => {
                                const tempProduct = products.map((product) =>
                                  product.id === item.id ? { ...product, endDate: e.target.value, hari: datediff(parseDate(item.endDate), parseDate(item.startDate)) } : product
                                );
                                setProducts(tempProduct);
                              }} />
                            </label>
                            <p className="self-center font-nunito text-gray-400 font-bold">{item.hari} hari</p>
                          </div>
                          <div className="flex flex-col mt-12">
                            <h1 className="-mb-8 font-bold ml-8">Jumlah</h1>
                            <div className="flex h-10 mr-10 mt-8">
                              <button onClick={() => {
                                if (item.jumlah - 1 > 0) {
                                  const tempProduct = products.map((product) =>
                                    product.id === item.id ? { ...product, jumlah: product.jumlah - 1 } : product
                                  );
                                  setProducts(tempProduct);
                                }
                              }}>
                                <MinusIcon className="h-5 mr-4" />
                              </button>
                              <input
                                className="pl-4 border-b-2 w-10"
                                type="text"
                                value={item.jumlah}
                                onChange={(e) => {
                                  const tempProduct = products.map((product) =>
                                    product.id === item.id ? { ...product, jumlah: e.target.value } : product
                                  );
                                  setProducts(tempProduct);
                                }}
                              ></input>
                              <button onClick={() => {
                                if (item.jumlah + 1 > item.stok) { return null } else {
                                  const tempProduct = products.map((product) =>
                                    product.id === item.id ? { ...product, jumlah: product.jumlah + 1 } : product
                                  );
                                  setProducts(tempProduct);
                                }
                              }}>
                                <PlusIcon className="h-5 ml-4" />
                              </button>
                            </div>
                            <button
                              className="mr-8 flex mt-1 text-gray-500 bg-white  border-2 px-4 justify-center items-center rounded-full"
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                            >
                              <TrashIcon className=" h-6 m-2" fill="none" stroke="currentColor" />
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
              <div className="flex border-2 rounded-lg my-2 justify-between">
                <div className="flex place-items-center w-1/2">
                  <img className="ml-4 h-10 my-auto " src={discvect} />
                  <p className="ml-4 text-xl font-bold ">Voucher kuRentalkan</p>
                </div>
                <input
                  className="px-1 py-4 text-lg bg-white text-center"
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
              <div className="flex bg-gray-200 rounded-lg my-2">
                <div className="w-1/2 my-3 ml-4">
                  <p className="text-xl">Total Biaya</p>
                  <p className="text-xl font-bold">
                    {cartTotal.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
                <div className="my-auto">
                  <Link to="/checkout">
                    <button
                      className={
                        totalProd === 0
                          ? "ml-72 bg-gray-500 text-white py-2 px-5 rounded-full "
                          : " ml-72 bg-blue-700 text-white py-2 px-5 rounded-full "
                      }
                    >
                      Pesan ({totalProd})
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="hidden lg:block bg-white border-t-2"></footer>
      </div>
    </div>
  );
};

export default Cart;
