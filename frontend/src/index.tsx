import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./css/index.css";
import { UserProvider } from "./contexts/UserContext";

const container = document.getElementById("root");

container &&
  ReactDOM.createRoot(container).render(
    <BrowserRouter>
      <UserProvider>
        <Routing />
      </UserProvider>
    </BrowserRouter>
  );
