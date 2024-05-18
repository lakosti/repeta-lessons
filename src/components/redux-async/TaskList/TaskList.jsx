import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../../redux-async/tasksSlice";
// import { selectTasks } from "../../../redux-async/tasksSlice";
// import { selectFilter } from "../../../redux-async/filtersSlice";

export default function TaskList() {
  const tasks = useSelector(selectVisibleTasks);

  // const tasks = useSelector(selectTasks);
  // const textFilter = useSelector(selectFilter);
  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(textFilter.toLowerCase())
  // );

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task tasks={task} />
        </li>
      ))}
    </ul>
  );
}
