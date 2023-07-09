import React, { useState } from "react";
import { ProductsContainer, ContainerButtons } from "./CardsProductsStyles";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";
import Button from "../UI/button/Button";
import { INITIAL_LIMIT } from "../../utils/constants";

const CardsProducts = () => {
  let Products = useSelector((state) => state.Products.products);

  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const totalProducts = useSelector((state) => state.Products.totalProducts);
  const selectedCategory = useSelector(
    (state) => state.Categories.selectedCategory
  );

  if (selectedCategory) {
    Products = {
      [selectedCategory]: Products[selectedCategory],
    };
  }
  return (
    <div>
      <ProductsContainer>
        {Object.entries(Products).map(([, ArrayProducts]) => {
          return ArrayProducts.map((Product) => {
            if (limit >= Product.id || selectedCategory) {
              return <CardProduct {...Product} key={Product.id} />;
            } else {
              return null;
            }
          });
        })}
      </ProductsContainer>

      {!selectedCategory && (
        <ContainerButtons>
          <Button
            disabled={INITIAL_LIMIT === limit}
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            variant="default"
          >
            Ver menos
          </Button>
          <Button
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
            variant="withbg"
          >
            Ver más
          </Button>
        </ContainerButtons>
      )}
    </div>
  );
};

export default CardsProducts;
