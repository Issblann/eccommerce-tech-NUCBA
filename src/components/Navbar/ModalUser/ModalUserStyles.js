import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalContainerStyled = styled(motion.div)`
  position: fixed;
  background-color: var(--color-2);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
  width: 450px;
  top: calc(100px + 0.5rem);
  right: 0;
  z-index: 1000;
  padding: 40px;
  color: black;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
