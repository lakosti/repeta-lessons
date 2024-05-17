import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux-async/tasksOps";

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // ? values -  те що ми передаємо при діспатчі приходить першим елементом у addTask
    dispatch(addTask(values)); //? при сабміті ми діспатчимо та відправляємо форму з новим запитом (додаванням)
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        createdAt: "", //? вказуємо значення з бека і атрибут name повинен бути таким самим
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="createdAt" placeholder="Enter task text..." />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
}
