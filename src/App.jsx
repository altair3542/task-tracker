import { useState } from 'react'
import TaskList from './components/TaskList'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "hacer la compra", done: true},
    { id: 2, title: "Enviar correo electronico", done: true},
  ])

  return(
    <div className='container mx-auto p-4'>
      <h1 className='Text-4xl font-semibold text-indigo-600 mb-6'>Task Tracker</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}
