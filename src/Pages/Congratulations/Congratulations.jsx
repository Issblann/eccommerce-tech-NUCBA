import React from 'react';
import {
  ContainerStyled,
  TitleStyled,
  ParagraphStyled,
} from './CongratulationsStyles';

import checkCongratulations from '../../assets/congratulations/check-congratulations.png';
import Button from '../../components/UI/button/Button';
import { useNavigate } from 'react-router-dom';
const Congratulations = () => {
  const navigate = useNavigate();
  return (
    <ContainerStyled>
      <img src={checkCongratulations} alt="checkCongratulations" />
      <TitleStyled>Congratulations</TitleStyled>
      <ParagraphStyled>The order was completed</ParagraphStyled>

      <Button onClick={() => navigate('/my-orders')} variant="withbg">
        Go back
      </Button>
    </ContainerStyled>
  );
};

export default Congratulations;
