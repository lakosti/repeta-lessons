import { useDispatch } from "react-redux";
// import css from "./Task.module.css";
// import { deleteTask } from "../../redux/tasksOps";

export default function Task() {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch();

  return (
    <div>
      <p></p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
