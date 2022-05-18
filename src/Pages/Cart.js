/* eslint-disable multiline-ternary */
import ItemList from "../Components/ItemList/ItemList";
import discvect from "../Assets/Discvect.png";
import dataDummy from "../dummyCheckout.json";
import produkmobil from "../Assets/produkmobil.png";
import { useEffect, useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState(dataDummy.data);
  const [valueY, setValueY] = useState(0);
  const [costongkir, setcostongkir] = useState(0);
  const [voucher, setvoucher] = useState("");
  const [totalProd, settotalProd] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);
  const vouchergratisongkir = "mobiltistis";

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
        totPrice = totPrice + (o.price*o.num)
      }
    });
    settotalProd(tot);
    setcartTotal(totPrice)
  }, [products]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "select-all") {
      const tempProduct = products.map((product) => {
        return { ...product, isChecked: checked };
      });
      setProducts(tempProduct);
    } else {
      const tempProduct = products.map((product) =>
        product.title === name ? { ...product, isChecked: checked } : product
      );
      setProducts(tempProduct);
    }
  };

  const handleDelete = (e) => {
    const items = products.filter((product) => product.id !== e);
    setProducts(items);
  };

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
                      <ItemList
                        image={produkmobil}
                        judul={item.title}
                        harga={item.price}
                        isChecked={item?.isChecked || false}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                        id={item.id}
                        hari={item.num}
                      />
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
                  <button
                    className={
                      totalProd === 0
                        ? "ml-72 bg-gray-500 text-white py-2 px-5 rounded-full "
                        : " ml-72 bg-blue-700 text-white py-2 px-5 rounded-full "
                    }
                  >
                    Pesan ({totalProd})
                  </button>
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
