import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

export const getUsers = createAsyncThunk(
  "users/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("users");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`users/${userId}`, {
        headers: {
          authorization: "admin",
        },
      });
      return userId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  "user/add",
  async (userObj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`users`, userObj);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
