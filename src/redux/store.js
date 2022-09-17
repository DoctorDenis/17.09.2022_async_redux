import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
