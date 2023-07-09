export const addItemToCart = (cartItems, product) => {
  const productInCart = cartItems.find((item) => {
    return item.id === product.id;
  });

  if (productInCart) {
    return cartItems.map((item) => {
      return item.id === productInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [
    ...cartItems,
    {
      ...product,
      quantity: 1,
    },
  ];
};

export const removeItemFromCart = (cartItems, id) => {
  const itemToRemove = cartItems.find((item) => {
    return item.id === id;
  });

  if (itemToRemove.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }

  return cartItems.filter((item) => {
    return item.id !== itemToRemove.id;
  });
};

export const resetShippingCost = (cartItems, shippingCost) => {
  if (cartItems.length === 1 && cartItems[0].quantity === 1) {
    return 0;
  }

  return shippingCost;
};
