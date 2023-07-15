import * as Yup from "yup";
import { regEmail } from "../utils/regExp";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Required field"),
  cellphone: Yup.string().required("Required field"),
  location: Yup.string().required("Required field"),
  address: Yup.string().required("Required field"),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Required field"),
  email: Yup.string()
    .matches(regEmail, "Invalid Email")
    .required("Required field"),
  password: Yup.string().min(6, "Min 6 characters").required("Required field"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Invalid Email")
    .required("Required field"),

  password: Yup.string().min(6, "Min 6 characters").required("Required field"),
});
