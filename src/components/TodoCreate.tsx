import React, { useState } from 'react'
import '/Users/emirsakarcan/Desktop/TypeScript Todo/todo/src/css/TodocCreate.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlice'

function Home() {
  const dispatch = useDispatch()

  const [ todoContent, setTodoContent ] = useState<string>("")

  const handleAddTodo = () => {
    if(todoContent.trim().length===0){
      alert("Please Write a Todo")
      return;
    }
    else{
      const todo = {
        id : Math.floor(Math.random()*9999),
        content : todoContent
      }
      dispatch(addTodo(todo))
      setTodoContent("")
    }
  }

  return (
    <div>
        <div id="todo-creation" className='flex-row'>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTodoContent(e.target.value) } value={todoContent} placeholder="Write Todo" id="enter-todo" />
            <button onClick={handleAddTodo} type='submit' id="add-todo" >Add</button>
        </div>
    </div>
  )
}

export default Home