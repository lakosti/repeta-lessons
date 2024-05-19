import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks } from "./tasksOps";
import { selectFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    a: 1,
    b: 2,
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
      })
      .addCase(deleteTask.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        // його id = action.payload.id
        state.items = state.items.filter((item) => item.id !== action.payload.id); //* повертаємо новий масив у якому немає ніякого співпадіння по айді з тим елементом шо видалили
        state.isLoading = false;
      }),
});

//! ПРОПИСУЄМО ТУТ ВСІ SELECTOR
// простий селектор
export const selectTasks = (state) => state.tasks.items;
export const selectLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

// складний селектор (якщо необхідні якісь оббчислення - потрібен складний селектор(їх також необіхдно отпимізовувати (МЕМОНІЗУВАТИ) - бо вони викликаються кожного разу коли змінюється ))
//*МЕМОНІЗАЦІЯ - отпимізація (кешування - зберігає ОДНЕ останнє значення)
// const [a, setA] = useState(1);
// const [b, setB] = useState(1);

// const res = useMemo(() => {
//   return a + b;
// }, [a, b]);

//! ДО
// export const selectVisibleTasks = (state) => {
//   const tasks = selectTasks(state); //? const tasks = state.tasks.items;
//   const textFilter = selectFilter(state); //? const textFilter = state.filters.text;

//   // createdAt -- значення тексту яке ми фільтруємо
//   return tasks.filter((task) => task.createdAt.toLowerCase().includes(textFilter.toLowerCase()));
// };

//! ПІСЛЯ
//* createSelector - створює мемонізований селектор --тільки коли змінюються таски або фільтр - тільки тоді вона буде викликатися

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, textFilter) => {
    return tasks.filter((task) => task.createdAt.toLowerCase().includes(textFilter.toLowerCase()));
  }
);

export const selectSum = createSelector(
  [(state) => state.tasks.a, (state) => state.tasks.b],
  (a, b) => {
    return a + b;
  }
);

export default slice.reducer;
