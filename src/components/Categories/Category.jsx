import React from "react";
import {
  CategoryCardStyled,
  CategoryIMGStyled,
  TitleCategoryStyled,
} from "./CategoriesStyles";
const Category = ({ img, title }) => {
  return (
    <CategoryCardStyled>
      <CategoryIMGStyled src={img} />
      <TitleCategoryStyled>{title}</TitleCategoryStyled>
    </CategoryCardStyled>
  );
};

export default Category;
