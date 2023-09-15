import React from 'react';
import {
  InformationCardStyled,
  TitleCardStyled,
} from './InformationCardsStyles';
const InformationCard = ({ icon, title }) => {
  return (
    <InformationCardStyled>
      {icon}

      <TitleCardStyled>{title}</TitleCardStyled>
    </InformationCardStyled>
  );
};

export default InformationCard;
