import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import OrderManagement from "./Page/OrderManagement";
import ProductManagement from "./Page/ProductManagement";
import AddProduct from "./Page/ProductManagementSection/AddProduct";
import EditProductDetails02 from "./Page/ProductManagementSection/EditProductDetails02";
import EditProductDetails01 from "./Page/ProductManagementSection/EditProductDetails01";
import InventoryManagement from "./Page/InventoryManagement";
import PaymentsManagement from "./Page/PaymentsManagement";
import AgentManagement from "./Page/AgentManagement";
import UserManagement from "./Page/UserManagement";
import CustomerSummary from "./Page/UserManagement/CustomerSummary";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/ordermanagement" element={<OrderManagement />}></Route>
          <Route
            path="/productmanagement"
            element={<ProductManagement />}
          ></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route
            path="/editproductdetails01"
            element={<EditProductDetails01 />}
          ></Route>
          <Route
            path="/editproductdetails02"
            element={<EditProductDetails02 />}
          ></Route>
          <Route path="/usermanagement" element={<UserManagement />}></Route>
          <Route path="/customersummary" element={<CustomerSummary />}></Route>
          <Route path="/agentmanagement" element={<AgentManagement />}></Route>
          <Route
            path="/inventorymanagement"
            element={<InventoryManagement />}
          ></Route>
          <Route
            path="/paymentsmanagement"
            element={<PaymentsManagement />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
