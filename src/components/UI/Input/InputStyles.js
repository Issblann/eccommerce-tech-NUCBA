import styled from "styled-components";

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 16px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background: var(--color-1);
  outline: 1px black solid;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  height: 50px;
  padding: 8px 16px;
  color: black;
  width: 70%;
  margin-top: 16px;

  @media (max-width: 640px) {
    width: 90%;
  }

  ::placeholder {
    opacity: 60%;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
