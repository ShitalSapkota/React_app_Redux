import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {type User } from "../../types/types";

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const api = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/users",
  async () => {
    const response = await axios.get<User[]>(api);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default userSlice.reducer;
