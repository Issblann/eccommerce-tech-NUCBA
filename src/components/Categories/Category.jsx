import React from "react";
import Button from "../UI/button/Button";
import {
  CategoryCardStyled,
  CategoryIMGStyled,
  TitleCategoryStyled,
} from "./CategoriesStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoriesSlice";
const Category = ({ img, title, category }) => {
  const dispatch = useDispatch();

  const listOfCategories = useSelector(
    (state) => state.Categories.categories
  ).map((categoryList) => {
    return categoryList.category;
  });

  const selectedCategory = useSelector(
    (state) => state.Categories.selectedCategory
  );
  const handleCategoryClick = () => {
    const selectedCategory = listOfCategories.find((categoryy) => {
      return categoryy.toLowerCase() === category.toLowerCase();
    });

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
    } else {
      console.log("no es una categoria");
    }
  };

  return (
    <CategoryCardStyled
      onClick={handleCategoryClick}
      whileTap={{ scale: 0.95 }}
    >
      <CategoryIMGStyled selected={category === selectedCategory} src={img} />
      <Button variant="default"> {title} </Button>
    </CategoryCardStyled>
  );
};

export default Category;
