import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ContainerCartStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 500px;
  height: 100vh;
  padding: 32px;
  background: var(--color-1);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 500px) {
    width: 100%;
    padding: 20px;
  }
`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 500px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(3px);
    `}
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: blue;
  color: white;
  cursor: pointer;
`;
export const MainContainerStyled = styled.div`
  height: 55%;
`;
export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 370px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 360px;
  flex-direction: column;
  background: var(--color-2);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const PriceContainerStyled = styled.div`
  z-index: 1000;
  background-color: var(--gray-bg);
  & p {
    text-align: center;
    font-weight: 800;
  }

  & hr {
    height: 2px;
    border: none;
    background: var(--color-4);
    width: 100%;
    margin-top: 30px;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 600;
  color: #ffff;
  font-size: 1.2rem;
  background: var(--btn-gradient);
  background-clip: text;
  text-align: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShippingStyled = styled(SubtotalStyled)``;
export const TotalStyled = styled(SubtotalStyled)`
  & span {
    color: var(--color-2);
    font-weight: 900;
  }
`;
export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
