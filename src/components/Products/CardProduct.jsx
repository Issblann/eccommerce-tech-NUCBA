import React from "react";
import { ProductsCard, ContainerPrice, CardPrice } from "./CardsProductsStyles";
import Button from "../UI/button/Button";
const CardProduct = ({ title, img, desc, price }) => {
  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>

      <ContainerPrice>
        <CardPrice>{price}</CardPrice> <Button variant="withbg">Comprar</Button>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default CardProduct;
