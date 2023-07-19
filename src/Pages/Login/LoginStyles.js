import { styled } from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  margin-top: 20px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  gap: 20px;
`;

export const LoginRedirectToRegister = styled.p`
  color: var(--color-2);
  & span {
    font-weight: 800;
    color: var(--color-3);
    margin-left: 10px;
  }
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
