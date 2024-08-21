import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import * as fromApi from '../api';

const initialState = {
  todos: {},
  loading: false,
  loaded: true,
  todoEditing: {},
  searchQuery: '',
  filterValue: '*',
  modalOpen: false
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.searchQuery = action.payload;
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
    openModal(state, action) {
      state.modalOpen = true;
      state.todoEditing = action.payload;
    },
    closeModal(state) {
      state.modalOpen = false;
      state.todoEditing = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.pending, (state) => {
      state.loaded = false;
      state.loading = true;
    });

    builder.addCase(loadTodos.rejected, (state) => {
      state.loaded = false;
      state.loading = false;
    });

    builder.addCase(loadTodos.fulfilled, (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.todos = action.payload.reduce(
        (pr, curr) => ({
          ...pr,
          [curr.id]: curr
        }),
        {}
      );
    });

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos = {
        ...state.todos,
        [action.payload.id]: action.payload
      };

      state.todoEditing = {};
      state.modalOpen = false;
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = {
        ...state.todos,
        [action.payload.id]: action.payload,
      };
      state.todoEditing = {};
      state.modalOpen = false;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const { [action.payload]: deleted, ...rest } = state.todos;

      state.todos = rest;
    });
  }
});

export const loadTodos = createAsyncThunk('todos/load', () => {
  return fromApi.fetchTodos();
});

export const addTodo = createAsyncThunk('todos/add', (todoTitle) => {
  return fromApi.addTodo({
    title: todoTitle,
    completed: false
  });
});

export const updateTodo = createAsyncThunk('todos/update', (todo) => {
  return fromApi.updateTodo(todo);
});

export const deleteTodo = createAsyncThunk('todos/delete', (todoId) => {
  return fromApi.deleteTodo(todoId);
});

export const { setSearch, setFilterValue, openModal, closeModal } =
  todosSlice.actions;

export const search = (state) => state.todos.searchQuery;

export const todos = (state) => state.todos.todos;

export const filterValue = (state) => state.todos.filterValue;

export const filteredTodos = createSelector(
  search,
  filterValue,
  todos,
  (search, filterValue, todos) => {
    return Object.values(todos).filter((t) => {
      {
        const inSearchQuery = t.title
          .toLowerCase()
          .includes(search.toLowerCase());

        const inFilter = filterValue === '*' || t.completed === filterValue;

        return inSearchQuery && inFilter;
      }
    });
  }
);

export const modalOpen = (state) => state.todos.modalOpen;

export const todoEditing = (state) => state.todos.todoEditing;

export default todosSlice.reducer;
