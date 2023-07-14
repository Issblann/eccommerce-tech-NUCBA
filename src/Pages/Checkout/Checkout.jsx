import React from "react";
import { CheckoutContainerStyled } from "./CheckoutStyles";

import FormCheckout from "../../components/Checkout/FormCheckout/FormCheckout";
import ProductsCheckout from "../../components/Checkout/ProductsCheckout/ProductsCheckout";
import { useSelector } from "react-redux";
const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.Cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  return (
    <CheckoutContainerStyled>
      <FormCheckout
        cartItems={cartItems}
        price={price}
        shippingCost={shippingCost}
      />
      <ProductsCheckout
        cartItems={cartItems}
        price={price}
        shippingCost={shippingCost}
      />
    </CheckoutContainerStyled>
  );
};

export default Checkout;
