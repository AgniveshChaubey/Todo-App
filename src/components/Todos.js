import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({ todos, onDelete }) => {
  let myStyle ={
    minHeight: "70vh",
    margin: "40px auto"
  }

  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center m-3'>Todos List</h3>
      {
        todos.length === 0 ? 'No todos to display' :
          todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
            );
          })
      }
    </div>
  )
}
