import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Required field "),
  cellphone: Yup.string().required("Required field "),
  location: Yup.string().required("Required field "),
  address: Yup.string().required("Required field "),
});
