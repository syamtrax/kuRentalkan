import React from "react";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TambahProduk from "./Pages/TambahProduk";
import EditProduk from "./Pages/EditProduk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/tambah" exact render={() => <TambahProduk />} />
          <Route path="/edit" exact render={() => <EditProduk />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
