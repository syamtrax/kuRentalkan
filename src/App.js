import React from "react";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Firetest from "./Pages/Firetest";
import Search from "./Pages/Search";
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
