import React from "react";
import { ProductsContainer } from "./CardsProductsStyles";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";

const CardsProducts = () => {
  let Products = useSelector((state) => state.Products.products);
  console.log(Products);
  const selectedCategory = useSelector(
    (state) => state.Categories.selectedCategory
  );

  if (selectedCategory) {
    Products = {
      [selectedCategory]: Products[selectedCategory],
    };
  }
  return (
    <ProductsContainer>
      {Object.entries(Products).map(([, ArrayProducts]) => {
        return ArrayProducts.map((Product) => {
          return <CardProduct {...Product} key={Product.id} />;
        });
      })}
    </ProductsContainer>
  );
};

export default CardsProducts;
