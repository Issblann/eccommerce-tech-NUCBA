import React from "react";

import { HandlerCounterStyled } from "./handlerCounterStyles";
const HandlerCounter = ({
  children,
  bgcolor,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <HandlerCounterStyled
      whileTap={{ scale: 0.95 }}
      bgcolor={bgcolor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </HandlerCounterStyled>
  );
};

export default HandlerCounter;
