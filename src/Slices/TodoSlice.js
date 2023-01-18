import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodolist = window.localStorage.getItem('todoList');
  if (localTodolist) {
    return JSON.parse(localTodolist);
  }
};
const initialValue = {
  todoList: getInitialTodo(),
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push();
    },
  },
});