import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import productsReducer from "./slice/productSlice";
import usersReducer from "./slice/userSlice";

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
