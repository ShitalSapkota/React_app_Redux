import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { type Product } from "../../types/types";

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productSlice.reducer;
