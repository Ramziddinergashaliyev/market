import React from "react";
import Admin from "./pages/admin/Admin";
import { Routes, Route, Navigate } from "react-router-dom";
import Customer from "./pages/admin/customer/Customer";
import Store from "./pages/admin/store/Store";
import Seller from "./pages/admin/seller/Seller";
import Create from "./pages/create/Create";
import SingleCustomer from "./pages/single-customer/SingleCustomer";
import Paymet from "./pages/paymet/Paymet";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/admin/customer"} />} />
        <Route path="/admin/" element={<Admin />}>
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="store" element={<Store />} />
          <Route path="create" element={<Create />} />
          <Route path="customer/:id" element={<SingleCustomer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
