import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {type Product } from "../../types/types";

interface ProductsState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
};

const api = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/products",
  async () => {
    const response = await axios.get<Product[]>(api);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
