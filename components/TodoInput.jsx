"use client";
import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input} // 2-way binding
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 border p-2 rounded"
      />

      <button className="bg-blue-500 text-white px-4 rounded cursor-pointer hover:bg-blue-600 transition">
        Add
      </button>
    </form>
  );
}