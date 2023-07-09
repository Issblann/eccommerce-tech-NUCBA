import React from "react";
import {
  ContainerCartStyled,
  ModalOverlayStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  MainContainerStyled,
  TitleStyled,
  ProductsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  ShippingStyled,
  TotalStyled,
  ButtonContainerStyled,
} from "./ModalCartStyles";

import { AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import HandlerCounter from "../../UI/handlerCounter/handlerCounter";
import ModalCartCard from "./ModalCartCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleHiddenCart } from "../../../redux/cart/cartSlice";
import Submit from "../../UI/submit/Submit";
import { useNavigate } from "react-router-dom";
const ModalCart = () => {
  const hiddenCart = useSelector((state) => state.Cart.hidden);
  const { cartItems, shippingCost } = useSelector((state) => state.Cart);

  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
  const dispatch = useDispatch();

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerCartStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Your Products</h1>
                <HandlerCounter
                  onClick={() => dispatch(clearCart())}
                  bgcolor="var(--color-2)"
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </HandlerCounter>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => {
                    return <ModalCartCard {...item} key={item.id} />;
                  })
                ) : (
                  <p>Your cart is empty</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>${totalPrice.toFixed(2)}</span>
              </SubtotalStyled>
              <ShippingStyled>
                <p>Shipping:</p>
                <span>${shippingCost}</span>
              </ShippingStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <span>${(totalPrice + shippingCost).toFixed(2)}</span>
              </TotalStyled>

              <ButtonContainerStyled>
                <Submit
                  onClick={() => {
                    navigate("/checkout");
                    dispatch(toggleHiddenCart());
                  }}
                  disabled={!cartItems.length}
                >
                  checkout
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerCartStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
