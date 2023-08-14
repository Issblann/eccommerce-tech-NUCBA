import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Checkout from '../Pages/Checkout/Checkout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import MyOrders from '../Pages/MyOrders/MyOrders';
import Congratulations from '../Pages/Congratulations/Congratulations';
import CardsProducts from '../components/Products/CardsProducts';
const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="/products" element={<CardsProducts />} />
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
