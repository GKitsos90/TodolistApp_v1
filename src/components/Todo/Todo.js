import './Todo.scss';
import Checkbox from './../Checkbox/Checkbox';
import { ReactComponent as PencilImg } from './../../assets/pencil.svg';
import { ReactComponent as TrashcanImg } from './../../assets/trashcan.svg';

export default function Todo({ todo, onToggle, onDelete, onEdit }) {
  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="todo" onClick={onToggle}>
      <div className="todo__checkbox">
        <Checkbox
          value={todo.completed}
          label={todo.title}
          onChange={onToggle}
        />
      </div>

      <div className="todo__actions">
        <button className="todo__action-btn" onClick={handleEditClick}>
          <PencilImg />
        </button>
        <button className="todo__action-btn todo__action-btn--delete" onClick={handleDeleteClick}>
          <TrashcanImg />
        </button>
      </div>
    </div>
  );
}
