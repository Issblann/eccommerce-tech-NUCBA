import styled, { css } from 'styled-components';

export const SectionInformationCardsStyled = styled.section`
  width: 100%;
  background: rgb(242, 242, 242) hsl(0, 0%, 95%);
  display: flex;
  gap: 30px;
  padding: 20px 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InformationCardStyled = styled.div`
  width: 400px;
  border: 1px lightgray solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;

  @media (max-width: 640px) {
    width: 250px;
  }
`;

export const TitleCardStyled = styled.h2`
  text-align: center;
  font-size: 15px;
`;
