import React from "react";
import { ContainerPrueba, ButtonStyled, IconChanged } from "./ButtonStyled";
const Button = ({ variant, children }) => {
  return (
    <ButtonStyled variant={variant}>
      {children} <IconChanged />
    </ButtonStyled>
  );
};

export default Button;
