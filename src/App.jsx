import React from "react";
import Admin from "./pages/admin/Admin";
import { Routes, Route } from "react-router-dom";
import Customer from "./pages/admin/customer/Customer";
import Store from "./pages/admin/store/Store";
import Seller from "./pages/admin/seller/Seller";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route path="customer" element={<Customer />} />
          <Route path="seller" element={<Seller />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
