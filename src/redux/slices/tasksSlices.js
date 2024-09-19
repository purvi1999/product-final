import { v4 as uuid4 } from "uuid";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  filterTodo: [],
  serach: "",
  loading: false,
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 0,
};

export const addToDoAction = createAsyncThunk("todo/add", async (payload) => {
  if (payload) {
    return payload;
  } else {
    throw new Error("Todo Title is required!");
  }
});

export const removeToDoAction = createAsyncThunk(
  "todo/delete",
  async (payload) => {
    return payload;
  }
);

export const serachToDoAction = createAsyncThunk(
  "todo/serch",
  async (search) => {
    return search;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addToDoAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addToDoAction.fulfilled, (state, action) => {
        state.loading = false;
        const todo = {
          id: uuid4(),
          title: action.payload,
          status: false,
        };
        state.todos.push(todo);
        console.log("state.serach", state.serach);
        state.filterTodo = state.todos.filter((item) =>
          state.serach ? item.title.toLowerCase()?.includes(state.serach) : true
        );
        console.log("state.filterTodo", state.filterTodo);
      })
      .addCase(addToDoAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeToDoAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(removeToDoAction.fulfilled, (state, action) => {
        state.todos = state.todos.filter((item) => item.id !== action.payload);
        state.loading = false;
        state.filterTodo = state.todos.filter((item) =>
          state.serach
            ? item.title.toLowerCase()?.includes(action.payload)
            : item
        );
      })
      .addCase(removeToDoAction.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(serachToDoAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(serachToDoAction.fulfilled, (state, action) => {
        state.loading = false;
        state.serach = action.payload;
        state.filterTodo = state.todos.filter((item) =>
          action.payload
            ? item.title.toLowerCase()?.includes(action.payload)
            : item
        );
      })
      .addCase(serachToDoAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
