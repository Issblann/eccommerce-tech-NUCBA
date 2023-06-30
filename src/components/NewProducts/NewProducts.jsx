import React from "react";
import {
  SectionPrincipalStyled,
  ContainerStyled,
  TitleContainerStyled,
  ContainerNewProductsListStyled,
} from "./NewProductsStyles";

import CardNewProducts from "./CardNewProducts";
import { useSelector } from "react-redux";
const NewProducts = () => {
  const newProducts = useSelector((state) => state.NewProducts.newProducts);
  return (
    <SectionPrincipalStyled>
      <ContainerStyled>
        <TitleContainerStyled>New Products</TitleContainerStyled>
        <ContainerNewProductsListStyled>
          {newProducts.map((newProduct) => {
            return <CardNewProducts {...newProduct} key={newProduct.id} />;
          })}
        </ContainerNewProductsListStyled>
      </ContainerStyled>
    </SectionPrincipalStyled>
  );
};

export default NewProducts;
