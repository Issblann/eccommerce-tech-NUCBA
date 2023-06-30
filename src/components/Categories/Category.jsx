import React from "react";
import Button from "../UI/button/Button";
import {
  CategoryCardStyled,
  CategoryIMGStyled,
  TitleCategoryStyled,
} from "./CategoriesStyles";
const Category = ({ img, title, category }) => {
  return (
    <CategoryCardStyled
      whileTap={{ scale: 0.95 }}
      onClick={(e) => e.preventDefault()}
    >
      <CategoryIMGStyled selected={false} src={img} />
      <Button variant="default"> {title} </Button>
    </CategoryCardStyled>
  );
};

export default Category;
