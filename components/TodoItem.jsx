export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="flex justify-between bg-gray-200 p-2 mb-2 rounded">
      <span>{todo.text}</span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 cursor-pointer hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}