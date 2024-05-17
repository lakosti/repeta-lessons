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

export default function App() {
  // const lang = useSelector((state) => state.locale.lang);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading); //*отримуємо true або false з лоадінга
  const isError = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks()); //*запуск операції https запиту
  }, [dispatch]);

  return (
    // <div>
    // * РЕДАКС ориг
    //   <h1>Redux</h1>
    //   {/* <Balance /> */}
    //   {/* <LangSwitcher /> */}
    // * ТУЛКІТ
    //   <BalanceToolkit />
    //   <h2>LangSwitcher </h2>
    //   <LangSwitcherToolkit />
    //   <p>Selected lang: {lang}</p>
    //       </div>
    //
    // * ASYNC 1 lesson
    <Layout>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {isError && <Error>Opps, sorry! Something went wrong </Error>}
      {isLoading && <Loader>Loading message</Loader>}
      <TaskList />
    </Layout>
  );
}
