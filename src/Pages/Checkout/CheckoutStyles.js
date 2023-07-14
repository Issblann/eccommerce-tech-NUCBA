import styled from "styled-components";

export const CheckoutContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 40px;
  background: var(--color-1);

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 40px;
  }
`;
