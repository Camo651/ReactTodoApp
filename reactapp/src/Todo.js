import React from 'react'

export default function Todo({ todo, toggleTodo}) {

  function handelToDoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handelToDoClick} />
        {todo.name}
      </label>
    </div>
  )
}
