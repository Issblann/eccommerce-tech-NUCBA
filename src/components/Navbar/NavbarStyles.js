import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderPrincipal = styled.header`
  height: 92px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PromotionContainerStyled = styled.div`
  height: 44px;
  background: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextSectionPromotionContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1500px;

  p {
    color: #ffff;
    font-size: 12px;

    span {
      color: var(--color-3);
      margin-right: 5px;
    }
  }
`;

export const NavbarContainerStyled = styled.div`
  width: 100%;
  max-width: 1500px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;
export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 0.5rem 1.5rem;
  }

  a:first-child {
    background: var(--color-2);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  gap: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.home ? "white" : "black")};
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
