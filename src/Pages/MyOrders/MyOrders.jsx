import React, { useEffect } from "react";
import {
  MyOrdersPrinicipalContainerStyled,
  MyOrdersContainerStyled,
  MyOrdersTitleStyled,
  MyOrdersBtnContainerStyled,
} from "./MyOrdersStyles";
import Button from "../../components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-orders";
import { clearError, fetchOrdersFail } from "../../redux/orders/ordersSlice";
import CardsMyOrders from "../../components/MyOrders/CardsMyOrders";
const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.User.currentUser);
  const { orders, error } = useSelector((state) => state.Orders);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [currentUser, orders, error, dispatch]);
  return (
    <MyOrdersPrinicipalContainerStyled>
      <MyOrdersContainerStyled>
        <MyOrdersTitleStyled>My Orders</MyOrdersTitleStyled>
        <CardsMyOrders />
        <MyOrdersBtnContainerStyled>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </MyOrdersBtnContainerStyled>
      </MyOrdersContainerStyled>
    </MyOrdersPrinicipalContainerStyled>
  );
};

export default MyOrders;
