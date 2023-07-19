import { styled } from 'styled-components';
export const MyOrdersPrinicipalContainerStyled = styled.div`
  width: 100%;
  background: var(--color-1);
  display: flex;
  justify-content: center;
`;
export const MyOrdersContainerStyled = styled.div`
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 500px);
  margin: 0 auto;
  padding: 32px 0;

  & button {
    width: 200px;
    height: 100px;
  }
`;

export const MyOrdersTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
`;

export const MyOrdersBtnContainerStyled = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
