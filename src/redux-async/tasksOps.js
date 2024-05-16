import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("fetchAllTasks", async () => {
  const response = await axios.get("/tasks");
  return response.data; //? у aхios  дані з бекенду містяться у data
});

// export const addTask =

// export const deleteTask =
