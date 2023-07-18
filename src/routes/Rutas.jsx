import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/register">
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Rutas;
