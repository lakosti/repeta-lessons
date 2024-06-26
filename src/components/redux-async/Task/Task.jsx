import { useDispatch } from "react-redux";
import { deleteTask } from "../../../redux-async/tasksOps";
// import css from "./Task.module.css";
// import { deleteTask } from "../../redux/tasksOps";

export default function Task({ tasks }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(tasks.id));

  return (
    <div>
      <p>
        {tasks.createdAt} <b>{tasks.name}</b>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
