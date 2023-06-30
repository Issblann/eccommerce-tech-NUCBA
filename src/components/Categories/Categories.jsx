import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./sliderSwiper.css";
import {
  SectionPrincipalStyled,
  ContainerStyled,
  ContainerNewProductsListStyled,
} from "../NewProducts/NewProductsStyles.js";

import { TitleCategoryContainerStyled } from "./CategoriesStyles.js";
import Category from "./Category";
import { useSelector } from "react-redux";

const Categories = () => {
  const swiperRef = useRef();
  const categories = useSelector((state) => state.Categories.categories);
  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },

    1340: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  };

  return (
    <div>
      <SectionPrincipalStyled>
        <ContainerStyled>
          <TitleCategoryContainerStyled>
            Categories
          </TitleCategoryContainerStyled>

          <ContainerNewProductsListStyled>
            <button
              className="swiper-button-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            ></button>
            <Swiper
              breakpoints={sliderSettings}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 100,
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {categories.map((category) => {
                return (
                  <SwiperSlide key={category.id}>
                    <Category {...category} />;
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              className="swiper-button-next"
              onClick={() => swiperRef.current?.slideNext()}
            ></button>
          </ContainerNewProductsListStyled>
        </ContainerStyled>
      </SectionPrincipalStyled>
    </div>
  );
};

export default Categories;
