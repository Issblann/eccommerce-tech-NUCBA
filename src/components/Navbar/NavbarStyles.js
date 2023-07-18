import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderPrincipal = styled.header`
  height: 92px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainerStyled = styled.div`
  width: 100%;
  position: relative;
  /* pendiente para cambio navbar flotante */
  /* position: fixed; */
  /* z-index: 10000; */
  max-width: 1500px;
  height: 92px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: #ffff;
  gap: 20px;
  @media (max-width: 500px) {
    padding: 0 20px;
  }
  @media (max-width: 460px) {
    padding: unset;
    gap: 10px;
  }
`;
export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;

  @media (max-width: 768px) {
    .link-hidden,
    a:first-child {
      display: none;
    }
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  position: relative;
  gap: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: ${(props) => (props.home ? "10px 20px" : "none")};
  border-radius: 10px;
  color: ${(props) => (props.home ? "white" : "black")};
  background: ${(props) => (props.home ? "var(--color-2)" : "none")};
  padding: 10px;

  &.link-login {
    padding: 0px;

    @media (max-width: 400px) {
      gap: 10px;
      font-size: 10px;
    }
  }

  span {
    border-radius: 50%;
    width: 18px;
    height: 18px;
    text-align: center;
    background: var(--color-2);
    position: absolute;
    right: 0;
    font-size: 12px;
    top: 0;
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

export const MenuContainerStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: 0;
    height: 100vh;
    width: 266px;
    z-index: 100;
    background-color: var(--color-1);
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

export const MenuItem = styled(motion(Link))`
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--color-2);
    transition: 0.3s ease-in-out;
  }
`;
export const ContainerMenuAndLogo = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 50%;
    flex-direction: row-reverse;
  }
  & img {
    margin-top: 21px;
    margin-left: 20px;
  }
`;

export const ContainerLogo = styled.div`
  background: red;
  display: flex;
  align-items: center;
`;
export const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  &:focus {
    outline: none;
  }
`;
export const ModalOverlayMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  width: calc(100vw - 266px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(3px);
    `}
`;
