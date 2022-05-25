import { Routes, Route } from "react-router";
import Cashier from "pages/Cashier";
import SignIn from "pages/SignIn";
import Dashboard from "pages/Dashboard";
import ProtectedRoute from "components/routing/ProtectedRoute";
import SignUp from "pages/SignUp";

function Routing() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cashier" element={<Cashier />} />
      </Route>
    </Routes>
  );
}

export default Routing;
