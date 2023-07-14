import React from "react";
import {
  ProductsContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from "./ProductsCheckoutStyles";
import CardProductCheckout from "../../CardProductCheckout/CardProductCheckout";
const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductsContainerStyled>
      <ProductsTitleStyled>Your Bag</ProductsTitleStyled>
      <CardsWrapperStyled>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CardProductCheckout {...item} key={item.id} />;
          })
        ) : (
          <p>Your cart is empty</p>
        )}
      </CardsWrapperStyled>

      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>${price.toFixed(2)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>${shippingCost}</span>
        </EnvioStyled>

        <HrStyled />

        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            ${(price + shippingCost).toFixed(2)}
          </PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductsContainerStyled>
  );
};

export default ProductsCheckout;
