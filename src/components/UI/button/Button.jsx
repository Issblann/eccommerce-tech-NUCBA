import React from "react";
import { ButtonStyled, IconChanged } from "./ButtonStyled";
const Button = ({
  variant,
  children,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} variant={variant}>
      {children} <IconChanged />
    </ButtonStyled>
  );
};

export default Button;
