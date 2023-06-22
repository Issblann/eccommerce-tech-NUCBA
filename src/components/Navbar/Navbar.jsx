import React from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import {
  HeaderPrincipal,
  NavbarContainerStyled,
  PromotionContainerStyled,
  TextSectionPromotionContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
} from "./NavbarStyles";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <div>
            <p>Logo</p>
          </div>

          <LinksContainerStyled>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/">
                <LinkContainerStyled home="true"> Home</LinkContainerStyled>
              </Link>
            </motion.div>
            <LinkContainerStyled>
              <AiOutlineShoppingCart fontSize="20px" />
            </LinkContainerStyled>
            <LinkContainerStyled>
              <FaUserAlt /> Inicia sesión
            </LinkContainerStyled>
          </LinksContainerStyled>
        </NavbarContainerStyled>
      </HeaderPrincipal>
    </>
  );
};

export default Navbar;
