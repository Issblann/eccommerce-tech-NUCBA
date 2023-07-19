import React from 'react';
import { ContainerFormStyled, Formik, Form } from './FormCheckoutStyles';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/submit/Submit';
import { checkoutInitialValues } from '../../../Formik/initialValues';
import { checkoutValidationSchema } from '../../../Formik/validationSchema';
import { createOrder } from '../../../axios/axios-orders';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/cart/cartSlice';

const FormCheckout = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.User);
  const handleSubmit = async (values, { resetForm }) => {
    const orderData = {
      items: cartItems,
      price,
      shippingCost,
      total: price + shippingCost,
      shippingDetails: {
        ...values,
      },
    };
    try {
      await createOrder(orderData, dispatch, currentUser);
      navigate('/congratulations');
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
      alert('error al crear la orden');
    }
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
