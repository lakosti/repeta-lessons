import { useSelector } from "react-redux";
import Task from "../Task/Task";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);

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
