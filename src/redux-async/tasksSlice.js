import { createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks } from "./tasksOps";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    //? якщо потрібні різні лоадінги
    // loading: {
    //   adding: false,
    //   fetching: false,
    //   deelting: false
    // }
  },
  //? власні екшени
  //reducers: {},
  //? ті екшени що приходять ззовні (https..)
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload; //* відображаємо / встановляємо те що прийшло з бека
        state.isLoading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        // state.items = [...state.items, action.payload]; //! при додаванні зажди розпилюємо інакше один додамо і всі видалимо
      })
      .addCase(addTask.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      }),
});

export default slice.reducer;
