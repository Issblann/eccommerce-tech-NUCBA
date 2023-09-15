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
        <TitleStyled>
          Order ID <span>{_id.slice(0, 7)}</span>
        </TitleStyled>
        <IdStyled>
          DATE <span>{formatDate(createdAt)} hs</span>
        </IdStyled>
        <PriceStyled>${total}</PriceStyled>
      </TextContainerStyled>
    </OrderContainerStyled>
  );
};

export default CardMyOrders;
