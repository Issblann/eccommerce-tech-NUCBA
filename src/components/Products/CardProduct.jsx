import React from "react";
import { ProductsCard, ContainerPrice, CardPrice } from "./CardsProductsStyles";
import Button from "../UI/button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
const CardProduct = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();
  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>

      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
        <Button
          onClick={() => dispatch(addToCart({ title, img, desc, price, id }))}
          variant="withbg"
        >
          Comprar
        </Button>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default CardProduct;
