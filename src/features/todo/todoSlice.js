import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const eachTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(eachTodo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((eachTodo) => {
        if (eachTodo.id === action.payload.id) {
          eachTodo.text = action.payload.text;
        }
        return eachTodo;
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload
      );
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
