import React from "react";
import { Routes, Route } from "react-router";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default Routing;
