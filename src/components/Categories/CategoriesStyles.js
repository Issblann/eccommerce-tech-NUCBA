import styled, { css } from "styled-components";
import { TitleContainerStyled } from "../NewProducts/NewProductsStyles";

export const TitleCategoryContainerStyled = styled(TitleContainerStyled)`
  text-align: center;
  font-size: 35px;
`;

export const CategoryCardStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CategoryIMGStyled = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 80%;
`;

export const TitleCategoryStyled = styled.p`
  font-size: 13px;
  font-weight: 700;
  height: 400px;
  width: 100%;
  text-align: left;
`;
