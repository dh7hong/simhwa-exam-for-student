import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (todo, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(addTodo(todo));
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteTodo',
  async (todoId, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(deleteTodo(todoId));
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo:(state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;