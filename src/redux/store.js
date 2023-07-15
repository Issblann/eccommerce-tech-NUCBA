import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import newProductsRecuder from "./newProducts/newProductsSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";
const reducers = combineReducers({
  Categories: categoriesReducer,
  Products: productsReducer,
  NewProducts: newProductsRecuder,
  Cart: cartSlice,
  User: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart", "User"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
