import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Rutas;
