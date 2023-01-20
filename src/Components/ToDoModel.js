import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slices/TodoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function ToDoModel({ modelOpen, setModelOpen }) {
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('Incomplete');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleDateString(),
        })
      );
      toast.success('Task added sucessfully');
    }
  };
  return (
    <div>
      {modelOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div // below shows how a div can be made to act as a button and control state
              className={styles.closeButton}
              onClick={() => setModelOpen(false)}
              onKeyDown={() => setModelOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>
            <form
              className={styles.form}
              onSubmit={(event) => handleSubmit(event)}
            >
              <h1 className={styles.formTitle}>Add Task</h1>
              <label htmlFor="title">
                title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label htmlFor="status">
                status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModelOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoModel;
