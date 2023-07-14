import React from "react";
import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from "./CardProductCheckoutStyles";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import Count from "../../components/UI/Count/Count";
import HandlerCounter from "../../components/UI/handlerCounter/HandlerCounter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";
const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc} </TextStyled>

        <PriceStyled>${price}</PriceStyled>
      </CardInfoStyled>

      <QuantityContainerStyled>
        <HandlerCounter
          bgcolor="gray"
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </HandlerCounter>
        <Count>{quantity}</Count>
        <HandlerCounter
          bgcolor="blue"
          onClick={() =>
            dispatch(addToCart({ img, title, desc, price, quantity, id }))
          }
        >
          <BsPlusLg />
        </HandlerCounter>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
