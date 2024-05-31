import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToDoSchema {
  _id: number;
  title: string;
  description: string;
  date: string;
}

type ToDoState = {
  todo: ToDoSchema[];
};

const initialState: ToDoState = {
  todo: [],
};

const ToDoSlice = createSlice({
  name: "user/todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<ToDoSchema>) => {
      state.todo = [
        ...state.todo,
        { _id: state.todo.length, ...action.payload },
      ];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((v) => v._id == action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo } = ToDoSlice.actions;

export default ToDoSlice.reducer;
