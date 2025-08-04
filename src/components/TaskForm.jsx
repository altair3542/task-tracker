import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const text = title.trim();
    if (!text) return;
    onAdd({ id: Date.now(), title: text, done: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nueva tarea…"
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Añadir
      </button>
    </form>
  );
}
