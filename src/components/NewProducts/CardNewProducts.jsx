import React from 'react';
import {
  CardNewProductsStyled,
  ImgCardStyled,
  CardText,
  TitleCard,
  DescriptionCard,
  PriceCard,
} from './NewProductsStyles';
import { useDispatch } from 'react-redux';
import Button from '../UI/button/Button';
import { addToCart } from '../../redux/cart/cartSlice';
const CardNewProducts = ({ title, img, price, desc, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <CardNewProductsStyled>
        <ImgCardStyled alt={title} src={img} />
        <CardText>
          <TitleCard>{title}</TitleCard>
          <DescriptionCard>{desc}</DescriptionCard>
          <PriceCard>${price}</PriceCard>
          <Button
            onClick={() => dispatch(addToCart({ title, img, desc, price, id }))}
            variant="default"
          >
            Comprar
          </Button>
        </CardText>
      </CardNewProductsStyled>
    </div>
  );
};

export default CardNewProducts;
