import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  const onDelete = ()=>{
    
  }
  return (
    <div className='container'>
      <h3 className='text-center m-3'>Todos List</h3>
      {
        props.todos.map((todo)=>{
          return (
            <>
            <TodoItem todo={todo} onDelete = {onDelete}/>
            </>
            )
        })
      }
    </div>
  )
}
