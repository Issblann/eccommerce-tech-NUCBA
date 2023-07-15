import React from "react";
import {
  LoginContainerStyled,
  Form,
  LoginRedirectToRegister,
} from "./LoginStyles";
import { Formik } from "formik";
import LoginInput from "../../components/UI/LoginInput/LoginInput";
import { Link } from "react-router-dom";
import Submit from "../../components/UI/submit/Submit";
import { loginInitialValues } from "../../Formik/initialValues";
import { loginValidationSchema } from "../../Formik/validationSchema";
import { loginUser } from "../../axios/axios-user";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <LoginContainerStyled>
      <h1>Login</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />

          <LoginRedirectToRegister to="/register">
            Don’t have an account?
            <Link to="/register">
              <span>Create an account</span>
            </Link>
          </LoginRedirectToRegister>

          <Submit>Login</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
