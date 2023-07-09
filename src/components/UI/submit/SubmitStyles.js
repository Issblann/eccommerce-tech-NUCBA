import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 10px 20px;
  outline: none;
  border: none;
  background: var(--color-2);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
