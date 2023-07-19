import React from 'react';
import {
  IdStyled,
  OrderContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardsMyOrdersStyles';
import { formatDate } from '../../utils/formatDate';
const CardMyOrders = ({ createdAt, total, _id }) => {
  return (
    <OrderContainerStyled>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: {_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha: {formatDate(createdAt)}hs</IdStyled>
        <PriceStyled>${total}</PriceStyled>
      </TextContainerStyled>
    </OrderContainerStyled>
  );
};

export default CardMyOrders;
