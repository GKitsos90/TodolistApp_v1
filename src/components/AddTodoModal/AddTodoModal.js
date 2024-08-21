import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  closeModal as closeModalAction,
  modalOpen as modalOpenSelector,
  todoEditing,
  updateTodo
} from '../../store/todosSlice';
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import './AddTodoModal.scss';

export default function AddTodoModal() {
  const [todo, setTodo] = useState('');

  const modalOpen = useSelector(modalOpenSelector);

  const openedTodo = useSelector(todoEditing);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAction());
  };

  const onApply = () => {
    if (!todo) {
      return;
    }

    if (openedTodo) {
      dispatch(
        updateTodo({
          ...openedTodo,
          title: todo
        })
      );
    } else {
      dispatch(addTodo(todo));
    }
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  useEffect(() => {
    setTodo(openedTodo?.title ?? '');
  }, [openedTodo]);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName="add-note-modal-overlay"
      className="add-note-modal"
      preventScroll={true}
    >
      <h2 className="add-note-modal__title">
        {openedTodo ? 'edit note' : 'new note'}
      </h2>

      <Input
        placeholder="Input your note..."
        value={todo}
        onChange={(todo) => setTodo(todo)}
      />

      <div className="add-note-modal__buttons">
        <Btn type="secondary" onClick={closeModal}>
          cancel
        </Btn>

        <Btn type="primary" onClick={onApply}>
          apply
        </Btn>
      </div>
    </Modal>
  );
}
