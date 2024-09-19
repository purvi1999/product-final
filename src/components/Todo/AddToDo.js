import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoAction } from "../../redux/slices/tasksSlices";
const AddToDo = () => {
  const dispatch = useDispatch();
  const [task, setTasks] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDoAction(task))
      .then((res) => {
        setTasks("");
      })
      .catch((err) => {});
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <div className="pt-2 rounded row gap-3">
        <div className="col-sm-6 col-md-6">
          <input
            placeholder="Plase enter tasks"
            value={task}
            onChange={(e) => setTasks(e.target.value)}
            className="p-2 rounded border w-100"
            required
          />
        </div>
        <div className="col-sm-6 col-md-2">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded pt-2 w-100"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddToDo;
