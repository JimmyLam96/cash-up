import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./css/index.css";
import { rootCertificates } from "tls";

const container = document.getElementById("root");

container &&
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.StrictMode>
  );
