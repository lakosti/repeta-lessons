import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux-async/tasksOps";

const initialValue = {
  createdAt: "", //? вказуємо значення з бека і атрибут name у Field повинен бути таким самим
  name: "",
};

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // ? values -  те що ми передаємо при діспатчі приходить першим елементом у addTask
    dispatch(addTask(values)); //? при сабміті ми діспатчимо та відправляємо форму з новим запитом (додаванням)
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <Field name="createdAt" placeholder="Enter task text..." />
        <Field name="name" placeholder="Enter your name..." />

        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
}
