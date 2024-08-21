import Todo from './../Todo/Todo';
import './Todos.scss';

export default function Todos({ todos, onToggle, onEdit, onDelete }) {
  return (
    <div className="todos-wrapper">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo)}
          onEdit={() => onEdit(todo)}
          onDelete={() => onDelete(todo)}
        />
      ))}
    </div>
  );
}
