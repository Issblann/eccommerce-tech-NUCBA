import React from "react";
import Hero from "../../components/Hero/Hero";
import NewProducts from "../../components/NewProducts/NewProducts";
import Categories from "../../components/Categories/Categories";
import CardsProducts from "../../components/Products/CardsProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <NewProducts />
      <Categories />
      <CardsProducts />
    </>
  );
};

export default Home;
