import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./AddToDo";
import SearchToDo from "./SearchToDo";
import { removeToDoAction } from "../../redux/slices/tasksSlices";
import BackToTop from "../BackToTop";
import FilterToDo from "./FilterToDo";

const CardView = () => {
  const dispatch = useDispatch();
  const { filterTodo, loading } = useSelector((state) => state.task);
  const onHandleDelete = (id) => {
    dispatch(removeToDoAction(id));
  };
  return (
    <div className="container">
      <AddToDo />
      <hr className="border-blue-500" />
      <SearchToDo />
      <FilterToDo />
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : filterTodo.length > 0 ? (
          filterTodo?.map((item, index) => (
            <div className="col-sm-4 p-2" key={`card-key-${index}`}>
              <div className="card items-center p-5 rounded">
                <h3 className="text-3xl">{item.title}</h3>
                <button
                  className="button bg-blue-600 p-2 text-white rounded"
                  onClick={() => onHandleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No Search Result</div>
        )}
      </div>
      <BackToTop />
    </div>
  );
};
export default CardView;
