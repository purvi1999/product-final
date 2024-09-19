import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { serachToDoAction } from "../../redux/slices/tasksSlices";
import { useDispatch } from "react-redux";

const SearchToDo = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");

  const searchDebounce = useCallback(
    debounce(async (value) => {
      await dispatch(serachToDoAction(value));
    }, 300),
    []
  );

  const onHandleSearch = async (e) => {
    setSearchVal(e.target.value);
    searchDebounce(e.target.value);
  };
  useEffect(() => {
    searchDebounce.cancel();
  }, []);

  return (
    <div>
      <input
        value={searchVal}
        onChange={onHandleSearch}
        className="p-2 rounded border w-full"
        placeholder="search By Title..."
      />
    </div>
  );
};
export default SearchToDo;
