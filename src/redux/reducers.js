import { createSlice } from "@reduxjs/toolkit";
import { getUsers, deleteUser, addUser } from "./operations";

const initialState = {
  users: [],
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    },
    [getUsers.rejected]: (state) => {
      state.loading = false;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.loading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.loading = false;
    },
    [addUser.pending]: (state) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.users = [...state.users, payload];
      state.loading = false;
    },
    [addUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
