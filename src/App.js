import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Homepage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
