import "./css/App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Cashier from "./pages/Cashier";
import Delivery from "./pages/Delivery";
import Orders from "./pages/Orders";
import Editor from "./pages/Editer";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Cashier} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/orders" component={Orders} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;