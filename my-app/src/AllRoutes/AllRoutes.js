import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../Pages/AdminPage";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";
import HomePage from "../Home_page/Home.jsx";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SignUP from "../Pages/SignUp.js";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
