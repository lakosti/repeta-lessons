import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./tasksOps";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  //? власні екшени
  //reducers: {},
  //? ті екшени що приходять ззовні (https..)
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload; //* відображаємо / встановляємо те що прийшло з бека
        state.isLoading = false;
      }),
});

export default slice.reducer;
