import { styled } from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 20px 40px;
  color: black;
  background-color: var(--color-1);
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: black;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-3) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
