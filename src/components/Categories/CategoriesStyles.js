import styled, { css } from "styled-components";
import { TitleContainerStyled } from "../NewProducts/NewProductsStyles";
import { motion } from "framer-motion";

export const TitleCategoryContainerStyled = styled(TitleContainerStyled)`
  text-align: center;
  font-size: 35px;
`;

export const CategoryIMGStyled = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.2s ease;
  /* opacity: 80%; */
  opacity: ${({ selected }) => (selected ? "100%" : "80%")};
`;
export const CategoryCardStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  cursor: pointer;

  &:hover {
    ${CategoryIMGStyled} {
      opacity: 100%;
      transition: all 0.2s ease;
    }
  }
`;

export const TitleCategoryStyled = styled.p`
  font-size: 13px;
  font-weight: 700;
  height: 400px;
  width: 100%;
  text-align: left;
`;
