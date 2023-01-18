import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function ToDoModel({ modelOpen, setModelOpen }) {
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('Incomplete');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, status });
  };
  return (
    <div>
      {modelOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              // below shows how a div can be made to act as a button and control state
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
                <Button type="submit" vairant="primary">
                  Add Task
                </Button>
                <Button
                  type="button"
                  vairant="secondary"
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
