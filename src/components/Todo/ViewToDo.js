import { useDispatch, useSelector } from "react-redux";
import { removeToDoAction } from "../../redux/slices/tasksSlices";
import { Alert } from "bootstrap";
import usePagination from "../../hooks/usePagination";

const ViewToDo = () => {
  const dispatch = useDispatch();
  const { filterTodo } = useSelector((state) => state.task);
  const { nextPage, prevPage, jumpToPage, currentItems, totalPage, page } =
    usePagination(5, filterTodo);
  console.log("currentItems", currentItems);
  console.log(totalPage);
  const onHandleDelete = (id) => {
    dispatch(removeToDoAction(id))
      .then(() => {
        if (currentItems.length == 1) {
          prevPage();
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="mt-2 flex items-center justify-center w-full">
      <div className="w-full">
        <h4 className="text-2xl mb-4 mt-4 text-center">ToDo</h4>
        {currentItems.length === 0 ? (
          <div className="text-center mb-2 font-bold">No Data Found...</div>
        ) : (
          currentItems.map((item, key) => {
            return (
              <div className="flex space-x-2" key={`todo-${key}}`}>
                <div className="m-2 pl-2 pr-2 bg-white w-full">
                  {item.title}
                </div>
                <button
                  className="rounded bg-white m-2 p-2"
                  onClick={() => onHandleDelete(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </div>
            );
          })
        )}
        {/* Pagination */}
        {currentItems.length !== 0 && (
          <nav aria-label="..." className="p-2 w-full">
            <ul class="pagination justify-center">
              <li
                class={`page-item ${page == 1 ? "disabled" : ""}`}
                onClick={() => page != 1 && prevPage()}
              >
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              {[...Array(totalPage)].map((item, index) => (
                <li
                  class={`page-item ${page == index + 1 ? "active" : ""}`}
                  onClick={() => {
                    jumpToPage(index + 1);
                  }}
                >
                  <a class="page-link" href="#">
                    {index + 1}
                  </a>
                </li>
              ))}
              <li
                class={`page-item ${page == totalPage ? "disabled" : ""}`}
                onClick={() => page != totalPage && nextPage()}
              >
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default ViewToDo;
