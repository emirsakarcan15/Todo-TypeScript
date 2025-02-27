import React, { useState } from 'react'
import '/Users/emirsakarcan/Desktop/TypeScript Todo/todo/src/css/Todo.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TodoType } from '../type/type';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/slices/todoSlice';
import { FaCheck } from "react-icons/fa";


interface TodoType2 {
  todoProperty : TodoType
}


function Todo({ todoProperty }: TodoType2) { 
  const dispatch = useDispatch() 

  const [edit, setEdit] = useState<boolean>(false); 
  const [newTodoContent, setNewTodoContent] = useState(todoProperty.content)

  const falseEdit = (edit: boolean) => {
    setEdit(false)
    const editedTodo = {
      id : todoProperty.id,
      content: newTodoContent
    }
    dispatch(editTodo(editedTodo))
    if(!editedTodo.content){
      dispatch(deleteTodo(editedTodo))
    }
  } 

  const trueEdit = (edit: boolean) => {
    setEdit(true)
  }

  return (
    <div id="todo-wrapper">
      <div>
        {
          edit ? <input value={newTodoContent} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodoContent(e.target.value)} id="edit-todo" /> : <p id="todo">{todoProperty.content}</p>
        }
      </div>
      <div className="flex-row">
        {
          edit ? <FaCheck onClick={() => falseEdit(edit)} className='todo-icon'/> : <MdEdit  onClick={() => trueEdit(edit)} className='todo-icon'/>
        }
        <MdDelete onClick={() => dispatch(deleteTodo(todoProperty))} className='todo-icon'/>
      </div>
    </div>
  )
}

export default Todo