import { createSlice } from "@reduxjs/toolkit";
import { newProducts } from "../../data/newproducts";
const INITIAL_STATE = {
  newProducts: newProducts,
};
export const newProductsSlice = createSlice({
  name: "newProducts",
  initialState: INITIAL_STATE,
  reducers: {
    getNewProducts: (state) => {
      return state;
    },
  },
});

export const { getNewProducts } = newProductsSlice.actions;

export default newProductsSlice.reducer;
