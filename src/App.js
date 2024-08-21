import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBtn from './components/AddBtn/AddBtn';
import AddTodoModal from './components/AddTodoModal/AddTodoModal';
import AppTitle from './components/AppTitle/AppTitle';
import Dropdown from './components/Dropdown/Dropdown';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import ThemeBtn from './components/ThemeBtn/ThemeBtn';
import Todos from './components/Todos/Todos';
import './index.scss';
import {
  deleteTodo,
  filteredTodos as filteredTodosSelector,
  filterValue as filterValueSelector,
  loadTodos,
  openModal,
  setFilterValue,
  setSearch,
  updateTodo
} from './store/todosSlice';

import { toggleTheme as toggleThemeAction } from './store/themeSlice';

export default function App() {
  const filterValue = useSelector(filterValueSelector);

  const dispatch = useDispatch();

  const filterOptions = [
    {
      label: 'All',
      value: '*'
    },
    {
      label: 'Completed',
      value: true
    },
    {
      label: 'Incomplete',
      value: false
    }
  ];

  const filteredTodos = useSelector(filteredTodosSelector);

  const handleToggle = async (todo) => {
    dispatch(
      updateTodo({
        ...todo,
        completed: !todo.completed
      })
    );
  };

  const handleEdit = (todo) => {
    dispatch(openModal(todo));
  };

  const handleDelete = async (todo) => {
    dispatch(deleteTodo(todo.id));
  };

  const onAddClick = () => {
    dispatch(openModal());
  };

  const toggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <div className="app-wrapper">
      <AppTitle />

      <div className="search-wrapper">
        <Search onChange={(val) => dispatch(setSearch(val))} />
        <Dropdown
          options={filterOptions}
          onChange={(val) => dispatch(setFilterValue(val))}
          value={filterValue}
        />
        <ThemeBtn onClick={toggleTheme} />
      </div>

      {filteredTodos.length ? (
        <Todos
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <NotFound />
      )}

      <AddTodoModal />

      <AddBtn onClick={onAddClick} />
    </div>
  );
}
