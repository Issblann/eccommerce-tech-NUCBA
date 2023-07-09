import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import {
  HeaderPrincipal,
  NavbarContainerStyled,
  PromotionContainerStyled,
  TextSectionPromotionContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  MenuContainerStyled,
  MenuButton,
  MenuItem,
  ContainerMenuAndLogo,
  ModalOverlayMenu,
} from "./NavbarStyles";
import { Link } from "react-router-dom";
import ModalCart from "./ModalCart/ModalCart";
import { toggleHiddenCart } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import hyperxLogo from "../../assets/logo/hyperx-logo-lg.svg";
const Navbar = ({ open }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCartItemsSpan = useSelector(
    (state) => state.Cart.cartItems
  ).reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* <PromotionContainerStyled>
        <TextSectionPromotionContainerStyled>
          <p>
            <span>Mon-Thu:</span> 9:00 AM - 5:30 PM
          </p>
        </TextSectionPromotionContainerStyled>
        <TextSectionPromotionContainerStyled>
          <p>
            <span>
              Visit our showroom in 257 Fireweed Ln, Ketchikan, Alaska 99901,
              USA
            </span>
            Contact Us
          </p>
        </TextSectionPromotionContainerStyled>

        <TextSectionPromotionContainerStyled>
          <p>Call Us: (00) 1234 5678</p>
        </TextSectionPromotionContainerStyled>
      </PromotionContainerStyled> */}

      <HeaderPrincipal>
        <NavbarContainerStyled>
          <ModalCart />
          <ContainerMenuAndLogo>
            <Link to="/">
              <img
                src={hyperxLogo}
                width="80px"
                height="80px"
                alt="hyperxLogo"
              />
            </Link>

            <MenuButton onClick={toggleMenu}>
              {isMenuOpen ? <GrClose size={24} /> : <HiOutlineMenu size={24} />}
            </MenuButton>
          </ContainerMenuAndLogo>

          <LinksContainerStyled>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/">
                <LinkContainerStyled className="link-hidden" home="home">
                  Home
                </LinkContainerStyled>
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="">
                <LinkContainerStyled className="link-hidden">
                  Products
                </LinkContainerStyled>
              </Link>
            </motion.div>
          </LinksContainerStyled>

          <motion.div whileTap={{ scale: 0.97 }}>
            <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
              <AiOutlineShoppingCart fontSize="20px" />
              <span>{totalCartItemsSpan}</span>
            </LinkContainerStyled>
          </motion.div>

          <motion.div whileTap={{ scale: 0.97 }}>
            <Link to="/login">
              <LinkContainerStyled className="link-hidden link-login">
                <FaUserAlt />
                Login
              </LinkContainerStyled>
            </Link>
          </motion.div>

          {isMenuOpen && <ModalOverlayMenu onClick={toggleMenu} />}
          {isMenuOpen ? (
            <MenuContainerStyled open={!open}>
              <MenuItem whileTap={{ scale: 0.95 }} className="home" to="/">
                Home
              </MenuItem>
              <MenuItem whileTap={{ scale: 0.95 }} className="home" to="/">
                Products
              </MenuItem>
              <MenuItem whileTap={{ scale: 0.95 }} to="/login">
                Iniciar Sesión
              </MenuItem>
            </MenuContainerStyled>
          ) : (
            <MenuContainerStyled open={open} />
          )}
        </NavbarContainerStyled>
      </HeaderPrincipal>
    </>
  );
};

export default Navbar;
