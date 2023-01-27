import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import { format } from 'date-fns/esm';
import toast from 'react-hot-toast';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/GetClasses';
import { deleteTodo } from '../Slices/TodoSlice';
import ToDoModel from './ToDoModel';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return (
    <div>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton />
          <div className={styles.text}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--complete'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, mm/dd/yyyy')}
            </p>
          </div>
          <div className={styles.todoActions}>
            <div
              className={styles.icon}
              onClick={handleDelete}
              onKeyDown={handleDelete}
              role="button"
              tabIndex={0}
            >
              <MdDelete />
            </div>
            <div
              className={styles.icon}
              onClick={handleUpdate}
              onKeyDown={handleUpdate}
              role="button"
              tabIndex={0}
            >
              <MdEdit />
            </div>
          </div>
        </div>
      </div>
      <ToDoModel
        type="Update"
        modelOpen={updateModalOpen}
        setModelOpen={setUpdateModalOpen}
      />
    </div>
  );
}

export default TodoItem;
