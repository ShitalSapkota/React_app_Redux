import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import usersReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});

// ✅ Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
