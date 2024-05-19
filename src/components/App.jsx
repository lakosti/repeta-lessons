// import { useDispatch, useSelector } from "react-redux";
// import BalanceToolkit from "./redux-toolkit/BalanceToolkit";
// import LangSwitcherToolkit from "./redux-toolkit/LangSwitcherToolkit";

// import Balance from "./Balance";
// import LangSwitcher from "./LangSwitcher";

import Layout from "./redux-async/Layout/Layout";
import TaskForm from "./redux-async/TaskForm/TaskForm";
import Loader from "./redux-async/Loader/Loader";
import Error from "./redux-async/Error/Error";
import TaskList from "./redux-async/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux-async/tasksOps";
import { useEffect } from "react";
import { selectError, selectLoading, selectSum } from "../redux-async/tasksSlice";
import TextFilter from "./redux-async/TextFilter/TextFilter";

export default function App() {
  // const lang = useSelector((state) => state.locale.lang);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading); //* отримуємо true або false з лоадінга
  const isError = useSelector(selectError);
  const sum = useSelector(selectSum);

  useEffect(() => {
    dispatch(fetchTasks()); //*запуск операції
  }, [dispatch]);

  return (
    // <div>
    // ? РЕДАКС ориг
    //   <h1>Redux</h1>
    //   {/* <Balance /> */}
    //   {/* <LangSwitcher /> */}
    // ? ТУЛКІТ
    //   <BalanceToolkit />
    //   <h2>LangSwitcher </h2>
    //   <LangSwitcherToolkit />
    //   <p>Selected lang: {lang}</p>
    //       </div>
    //
    // ? ASYNC
    <Layout>
      <h1>HTTP requests with Redux </h1>
      <h2>Counter {sum}</h2>
      <TaskForm />
      <TextFilter />
      {isError && <Error>Opps, sorry! Something went wrong </Error>}
      {isLoading && <Loader>Loading message</Loader>}
      <TaskList />
    </Layout>
  );
}
