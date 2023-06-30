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
} from "./NavbarStyles";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <PromotionContainerStyled>
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
      </PromotionContainerStyled>

      <HeaderPrincipal>
        <NavbarContainerStyled>
          <ContainerMenuAndLogo>
            <p>Logo</p>
            <MenuButton onClick={toggleMenu}>
              {isMenuOpen ? <GrClose size={24} /> : <HiOutlineMenu size={24} />}
            </MenuButton>
          </ContainerMenuAndLogo>

          <LinksContainerStyled>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/">
                <LinkContainerStyled className="link-hidden" home="true">
                  Home
                </LinkContainerStyled>
              </Link>
            </motion.div>

            <LinkContainerStyled>
              <AiOutlineShoppingCart fontSize="20px" />
            </LinkContainerStyled>
            <LinkContainerStyled className="link-hidden">
              <FaUserAlt /> Inicia sesión
            </LinkContainerStyled>
          </LinksContainerStyled>
          <motion.div whileTap={{ scale: 0.95 }}>
            <MenuContainerStyled isMenuOpen={isMenuOpen}>
              <MenuItem className="home" to="/">
                Home
              </MenuItem>
              <MenuItem to="/login">Iniciar Sesión</MenuItem>
            </MenuContainerStyled>
          </motion.div>
        </NavbarContainerStyled>
      </HeaderPrincipal>
    </>
  );
};

export default Navbar;
