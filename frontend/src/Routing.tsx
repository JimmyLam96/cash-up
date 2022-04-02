import React from "react";
import { Routes, Route } from "react-router";
import SignIn from "./pages/SignIn";

function Routing() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default Routing;
