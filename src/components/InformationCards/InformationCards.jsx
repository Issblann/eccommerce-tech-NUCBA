import React from 'react';
import InformationCard from './InformationCard';
import { SectionInformationCardsStyled } from './InformationCardsStyles';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { AiOutlineUndo } from 'react-icons/ai';
import { IoMdRibbon } from 'react-icons/io';
import { RiCustomerServiceFill } from 'react-icons/ri';

const InformationCards = () => {
  const icons = [
    <LiaShippingFastSolid size="25%" />,
    <AiOutlineUndo size="25%" />,
    <IoMdRibbon size="25%" />,
    <RiCustomerServiceFill size="25%" />,
  ];

  const titles = [
    'Free Shipping on all Orders',
    '30-Day Hassle-Free Product Return',
    'Up to 2-year Warranty on all products',
    'Free and Easy Technical Support',
  ];
  return (
    <SectionInformationCardsStyled>
      {icons.map((icon, i) => {
        return <InformationCard key={i} icon={icon} title={titles[i]} />;
      })}
    </SectionInformationCardsStyled>
  );
};

export default InformationCards;
