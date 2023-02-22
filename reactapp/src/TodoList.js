import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoList, toggleTodo}) {
  return (
    todoList.map(todoa => {
        return <Todo key={todoa.id} todo={todoa} toggleTodo={toggleTodo}/>
    })
  )
}
