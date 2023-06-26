import React from "react";
import {
  SectionPrincipalStyled,
  ContainerStyled,
  TitleContainerStyled,
  ContainerNewProductsListStyled,
} from "./NewProductsStyles";

import { newProductos } from "../../data/newproducts";
import CardNewProducts from "./CardNewProducts";
const NewProducts = () => {
  return (
    <SectionPrincipalStyled>
      <ContainerStyled>
        <TitleContainerStyled>New Products</TitleContainerStyled>
        <ContainerNewProductsListStyled>
          {newProductos.map((newProduct) => {
            return <CardNewProducts {...newProduct} key={newProduct.id} />;
          })}
        </ContainerNewProductsListStyled>
      </ContainerStyled>
    </SectionPrincipalStyled>
  );
};

export default NewProducts;
