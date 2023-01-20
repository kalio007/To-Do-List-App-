import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Slices/TodoSlice';

export const Store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
