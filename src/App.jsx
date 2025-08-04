import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function getVisibleTasks(tasks, filter) {
  switch (filter) {
    case 'Done':    return tasks.filter(t => t.done);
    case 'Pending': return tasks.filter(t => !t.done);
    default:        return tasks;
  }
}

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('All');

  // Persistir tareas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask    = newTask => setTasks([newTask, ...tasks]);
  const removeTask = id      => setTasks(tasks.filter(t => t.id !== id));
  const toggleDone = id      => setTasks(
    tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
  );

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TaskList
        tasks={visibleTasks}
        onRemove={removeTask}
        onToggle={toggleDone}
      />
    </div>
  );
}
