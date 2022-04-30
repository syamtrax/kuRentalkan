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
import Paymethod from "./Pages/paymethod";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/firetest" exact render={() => <Firetest />} />
          <Route path="/search" exact render={() => <Search />} />
          <Route path="/tambah" exact render={() => <TambahProduk />} />
          <Route path="/edit" exact render={() => <EditProduk />} />
          <Route path="/produk" exact render={() => <ProdukDetail />} />
          <Route path="/cart" exact render={() => <Cart />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/logistic" exact render={() => <Logistic />} />
          <Route path="/paymethod" exact render={() => <Paymethod />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
