import React from "react";
import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from "./ModalCartStyles";
import HandlerCounter from "../../UI/handlerCounter/HandlerCounter";
import Count from "../../UI/Count/Count";
import { FaMinus } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cart/cartSlice";
import { IoMdTrash } from "react-icons/io";
const ModalCartCard = ({ img, title, desc, price, quantity, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductContainerStyled>
      <img alt={title} src={img} />

      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>${price}</PriceStyled>
      </TextContainerStyled>
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
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
