import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectFilter } from "../../../redux-async/filtersSlice";

export default function TextFilter() {
  const dispatch = useDispatch();
  const id = useId();
  const textFilter = useSelector(selectFilter);

  const handleChange = (evt) => {
    dispatch(changeTextFilter(evt.target.value));
  };
  return (
    <div>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input type="text" onChange={handleChange} value={textFilter} id={id} />
    </div>
  );
}
