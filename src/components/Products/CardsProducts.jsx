import React from "react";
import { ProductsContainer } from "./CardsProductsStyles";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";

const CardsProducts = () => {
  const Products = useSelector((state) => state.Products.products);
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
