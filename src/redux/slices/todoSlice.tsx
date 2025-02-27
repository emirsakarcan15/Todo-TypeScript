import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState } from '/Users/emirsakarcan/Desktop/TypeScript Todo/todo/src/type/type.tsx'
import { TodoType } from '/Users/emirsakarcan/Desktop/TypeScript Todo/todo/src/type/type.tsx'

const initialState :TodoInitialState  = {
  todos : []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state: TodoInitialState, action: PayloadAction<TodoType>)=> {
      state.todos = [...state.todos, action.payload]
      console.log(state.todos)
    },
    deleteTodo : (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      const newTodos = state.todos.filter((todo: TodoType) => action.payload.id != todo.id)
      state.todos = newTodos
    },
    editTodo : (state: TodoInitialState, action: PayloadAction<TodoType> ) => {
      state.todos.map((todo) => {
        if(todo.id===action.payload.id){
          todo.content = action.payload.content
        }
      })
    }
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer