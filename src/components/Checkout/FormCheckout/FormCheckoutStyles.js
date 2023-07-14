import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
export const ContainerFormStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 1280px) {
    justify-content: center;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
