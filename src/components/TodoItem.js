import React from 'react'

export function TodoItem({todo, onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
