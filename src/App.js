import React from "react";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Firetest from "./Pages/Firetest";
import Search from "./Pages/Search";
import TambahProduk from "./Pages/TambahProduk";
import EditProduk from "./Pages/EditProduk";
import Cart from "./Pages/Cart";
import ProdukDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";
import Logistic from "./Pages/Logistic";
import Transaksi from "./Pages/Transaction"
import Navbar from "./Components/Common/Navbar"
import Footer from "./Components/Common/Footer"
import {  Route, Switch, useLocation } from "react-router-dom";
import Pembayaran from "./Pages/Pembayaran";

function App() {
  const listUrl = ['/login', '/register' ]

  const location = useLocation()
  const pathname = location.pathname
  return (
    <>
      {listUrl.includes(pathname) !== true && <div>
            <div className="block">
                <Navbar/>
            </div>
          </div>}
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/firetest" exact render={() => <Firetest />} />
          <Route path="/search" exact render={() => <Search />} />
          <Route path="/tambah" exact render={() => <TambahProduk />} />
          <Route path="/edit" exact render={() => <EditProduk />} />
          <Route path="/produk/:kategori" exact render={() => <ProdukDetail />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/checkout" exact render={() => <Logistic />} />
          <Route path="/transaksi" exact render={() => <Transaksi />} />
          <Route path="/pembayaran" exact render={() => <Pembayaran />} />
        </Switch>
      {listUrl.includes(pathname) !== true && <footer className="block"><Footer/></footer>}
    </>
  );
}

export default App;
