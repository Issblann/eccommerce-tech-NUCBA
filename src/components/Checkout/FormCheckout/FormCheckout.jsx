import React from "react";
import { ContainerFormStyled, Formik, Form } from "./FormCheckoutStyles";
import Input from "../../UI/Input/Input";
import Submit from "../../UI/submit/Submit";
import { checkoutInitialValues } from "../../../Formik/initialValues";
import { checkoutValidationSchema } from "../../../Formik/validationSchema";

const FormCheckout = ({ cartItems }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <ContainerFormStyled>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input
            htmlFor="nombre"
            type="text"
            id="nombre"
            placeholder="Your name"
            name="name"
          >
            Name
          </Input>
          <Input
            htmlFor="celular"
            type="text"
            id="celular"
            placeholder="Your phone"
            name="cellphone"
          >
            Cellphone
          </Input>
          <Input
            htmlFor="localidad"
            type="text"
            id="localidad"
            placeholder="Your location"
            name="location"
          >
            Location
          </Input>
          <Input
            htmlFor="direccion"
            type="text"
            id="direccion"
            placeholder="Your address"
            name="address"
          >
            Address
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>Checkout</Submit>
          </div>
        </Form>
      </Formik>
    </ContainerFormStyled>
  );
};

export default FormCheckout;
