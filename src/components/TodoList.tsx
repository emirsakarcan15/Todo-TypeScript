import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../type/type'

function TodoList() {
  const todoSlice = useSelector((store:RootState) => store.todo)
  const todos = todoSlice.todos

  return (
    <div>
        {
          todos && todos.map((todo:TodoType) => (
            <Todo key={todo.id} todoProperty={todo} />
          ))
        }
    </div>
  )
}

export default TodoList