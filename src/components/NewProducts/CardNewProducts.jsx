import React from "react";
import {
  CardNewProductsStyled,
  ImgCardStyled,
  CardText,
  TitleCard,
  DescriptionCard,
  PriceCard,
} from "./NewProductsStyles";
const CardNewProducts = ({ title, img, price, desc }) => {
  return (
    <div>
      <CardNewProductsStyled>
        <ImgCardStyled alt={title} src={img} />
        <CardText>
          <TitleCard>{title}</TitleCard>
          <DescriptionCard>{desc}</DescriptionCard>
          <PriceCard>${price}</PriceCard>
        </CardText>
      </CardNewProductsStyled>
    </div>
  );
};

export default CardNewProducts;
