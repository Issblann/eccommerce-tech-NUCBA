import React from 'react';
import heroIMG from '../../assets/heroimgs/CLOUD-II.jpeg';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';

import {
  HeroContainerStyled,
  SubContainerHeroStyled,
  StyledImage,
  TitleHeroStyled,
  ParagraphHeroStyled,
  LinkToActionStyled,
} from './HeroStyles';
import Button from '../UI/button/Button';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateClick = () => {
    navigate('/products');
  };
  return (
    <div>
      <HeroContainerStyled>
        <StyledImage src={heroIMG} alt="heroIMG" />
        <SubContainerHeroStyled>
          <TitleHeroStyled>Headsets</TitleHeroStyled>
          <ParagraphHeroStyled>Immerse yourself in gaming</ParagraphHeroStyled>

          <LinkToActionStyled>
            <Button variant="default" onClick={handleNavigateClick}>
              {' '}
              DISCOVER NOW{' '}
            </Button>
          </LinkToActionStyled>
        </SubContainerHeroStyled>
      </HeroContainerStyled>
    </div>
  );
};

export default Hero;
