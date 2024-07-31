import React, { useState } from 'react'
import useTodo from './useTodo'

export default function TodoInput() {
    const [todoValue, setTodoValue] = useState('')
    const {addTodo,updateTodo,deleteTodo} = useTodo()
    const handleAdd = (e)=>{
      if(todoValue.trim()!==""){
        addTodo(todoValue.trim())
        setTodoValue("")
      }
    }
  return (
    <div className='w-1/2 flex justify-center border-2 border-wheat-500 bg-zinc-200 shadow-md rounded-md overflow-hidden'>
        <input type="text" name="todoinput" id="todoinput" className='outline-none px-3 py-1.5 w-4/5 bg-transparent  font-mono font-medium' placeholder='Type your todo' value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} />

        <button className='bg-green-400 w-1/5 font-bold font-mono p-2 hover:bg-green-500' onClick={handleAdd}>&#x2B;Add</button>
    </div>
  )
}
