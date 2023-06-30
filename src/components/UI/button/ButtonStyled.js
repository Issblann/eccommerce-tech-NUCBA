import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

export const ContainerPrueba = styled.div`
  width: 100%;

  max-width: 1200px;
  display: flex;
  background: pink;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 40px;
`;

export const IconChanged = styled(BsArrowUpRight)`
  transition: all 0.3s ease-in-out;
  width: 16px;
  height: 16px;
`;

export const ButtonStyled = styled(motion.button)`
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-weight: 900;
  background: none;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: 100%;
  border: ${({ variant }) =>
    variant === "bordered" ? "1px solid black" : "none"};
  background-color: ${({ variant }) =>
    variant === "withbg" ? "var(--color-2)" : "none"};
  color: ${({ variant }) =>
    variant === "withbg" ? "#fff" : variant === "bordered" ? "#000" : "#000"};
  padding: ${({ variant }) => (variant === "default" ? "10px 0 " : "20px")};

  &:hover {
    ${IconChanged} {
      transform: rotate(45deg);
    }
    color: ${({ variant }) =>
      variant === "withbg"
        ? "#fff"
        : variant === "bordered"
        ? "var(--color-2)"
        : "var(--color-2)"};

    opacity: ${({ variant }) => (variant === "withbg" ? "80%" : "100%")};
    border: ${({ variant }) =>
      variant === "bordered" ? "1px solid red" : "none"};
  }
`;
