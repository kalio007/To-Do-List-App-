import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import ToDoModel from './ToDoModel';

function AppHeader({ children }) {
  return (
    <div className={styles.appHeader}>
      <h1>{children}</h1>
      <Button variant="secondary">Add task</Button>
      <SelectButton id="status">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
