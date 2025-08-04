export default function TaskItem({ id, title, done, onRemove, onToggle }) {
  return (
    <li className={`flex items-center justify-between p-3 rounded bg-white shadow
                    ${done ? 'opacity-60 line-through' : 'hover:bg-gray-50'} transition`}>
      <span
        className="cursor-pointer flex-1"
        onClick={() => onToggle(id)}
      >
        {title}
      </span>
      <button
        onClick={() => onRemove(id)}
        aria-label="Eliminar tarea"
      >
        🗑️
      </button>
    </li>
  );
}
