import React from 'react'

function TaskItem({ title, done }) {
  return(
    <li className={done ? 'line-through opacity-50' : ''}>
      {title}
    </li>
  )
}

export default TaskItem
