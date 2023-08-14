import styled, { css } from 'styled-components';

export const SectionPrincipalStyled = styled.section`
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;

export const TitleContainerStyled = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: black;
  text-align: left;
  width: 100%;
`;

export const ContainerNewProductsListStyled = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;

export const CardNewProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ImgCardStyled = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
export const CardText = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 330px;
`;
export const TitleCard = styled.h2`
  font-size: 13px;
`;
export const DescriptionCard = styled.p`
  font-size: 10px;
`;
export const PriceCard = styled.p`
  font-size: 14px;
  text-align: left;
  width: 100%;
`;
