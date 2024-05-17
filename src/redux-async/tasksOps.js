import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66200f043bf790e070aee15f.mockapi.io";

export const fetchTasks = createAsyncThunk("fetchAllTasks", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/tasks");
    return response.data; //? у aхios  дані з бекенду містяться у data FULFILLED
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); //* REJECTED // error.message - те що у payload
  }
});

//? ADD new task to server (POST)

export const addTask = createAsyncThunk("addTask", async (newTask, thunkAPI) => {
  try {
    const response = await axios.post("/tasks", newTask); //? newTask це value форми
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // error.message - те що у payload
  }
});

// export const deleteTask =
