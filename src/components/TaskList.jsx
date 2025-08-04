import TaskItem from './TaskItem';

export default function TaskList({ tasks, onRemove, onToggle }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map(t => (
        <TaskItem
          key={t.id}
          id={t.id}
          title={t.title}
          done={t.done}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
