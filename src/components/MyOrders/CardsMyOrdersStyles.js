import { styled } from 'styled-components';

export const MyOrdersContainerStyled = styled.div`
  max-width: 1600px;
  min-height: calc(100vh - 500px);
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MyOrdersTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
`;

export const MisOrdenesBtnContainerStyled = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderContainerStyled = styled.div`
  background: var(--color-2);
  width: 380px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: white;
`;
export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const PriceStyled = styled.p`
  font-weight: 500;
  font-size: 26px;
  margin: 0;
`;
export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
