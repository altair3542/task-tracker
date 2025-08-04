export default function FilterBar({ filter, onChange }) {
  return (
    <div className="flex gap-2 mb-4">
      {['All','Done','Pending'].map(f => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-3 py-1 rounded ${
            filter === f
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

