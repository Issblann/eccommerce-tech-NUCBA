import React from 'react';
import Hero from '../../components/Hero/Hero';
import NewProducts from '../../components/NewProducts/NewProducts';
import Categories from '../../components/Categories/Categories';
import CardsProducts from '../../components/Products/CardsProducts';
import InformationCards from '../../components/InformationCards/InformationCards';

const Home = () => {
  return (
    <>
      <Hero />
      <NewProducts />
      <InformationCards />
      <Categories />
      <CardsProducts />
    </>
  );
};

export default Home;
