import React from 'react';
import { MyOrdersContainerStyled } from './CardsMyOrdersStyles';
import { useSelector } from 'react-redux';
import Loader from '../../components/UI/Loader/Loader';
import CardMyOrders from './CardMyOrders';
const CardsMyOrders = () => {
  const { orders, loading, error } = useSelector((state) => state.Orders);
  if (loading && !orders) {
    return <Loader />;
  }
  if (error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }
  return (
    <MyOrdersContainerStyled>
      {orders?.length ? (
        orders.map((order) => {
          return <CardMyOrders key={order.id} {...order} />;
        })
      ) : (
        <h2>No tienes pedidos</h2>
      )}
    </MyOrdersContainerStyled>
  );
};

export default CardsMyOrders;
