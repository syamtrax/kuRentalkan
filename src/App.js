import React from "react";
import Homepage from "./Pages/Homepage";
import Firetest from "./Pages/Firetest";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
          <Route path="/firetest" exact render={() => <Firetest />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
