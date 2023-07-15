import React from "react";
import {
  RegisterContainerStyled,
  Form,
  RegisterRedirectToLogin,
} from "./RegisterStyles";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Submit from "../../components/UI/submit/Submit";
import { registerInitialValues } from "../../Formik/initialValues";
import { registerValidationSchema } from "../../Formik/validationSchema";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import { createUser } from "../../axios/axios-user";
const Register = () => {
  const navigate = useNavigate();
  return (
    <RegisterContainerStyled>
      <h1>Register</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            navigate("/login");
          }
        }}
      >
        <Form>
          <LoginInput name="name" type="text" placeholder="Name" />
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <RegisterRedirectToLogin>
            Already have an account?
            <Link to="/login">
              <span>Log in</span>
            </Link>
          </RegisterRedirectToLogin>
          <Submit>Create Account</Submit>
        </Form>
      </Formik>
    </RegisterContainerStyled>
  );
};

export default Register;
