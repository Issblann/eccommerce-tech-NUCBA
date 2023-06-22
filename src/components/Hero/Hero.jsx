import React from "react";
import heroIMG from "../../assets/heroimgs/CLOUD-II.jpeg";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";

import {
  HeroContainerStyled,
  SubContainerHeroStyled,
  StyledImage,
  TitleHeroStyled,
  ParagraphHeroStyled,
  LinkToActionStyled,
} from "./HeroStyles";
const Hero = () => {
  return (
    <div>
      <HeroContainerStyled>
        <StyledImage src={heroIMG} alt="heroIMG" />
        <SubContainerHeroStyled>
          <TitleHeroStyled>Headsets</TitleHeroStyled>
          <ParagraphHeroStyled>Immerse yourself in gaming</ParagraphHeroStyled>

          <LinkToActionStyled>
            Discover now <BsArrowRight />
          </LinkToActionStyled>
        </SubContainerHeroStyled>
      </HeroContainerStyled>
    </div>
  );
};

export default Hero;
