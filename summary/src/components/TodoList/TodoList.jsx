import React, { useState } from "react";

const todoList = [
  {
    id: 1,
    title: "밥먹기",
    status: "active",
  },
  {
    id: 2,
    title: "책보기",
    status: "active",
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState(todoList);
  return (
    <div>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))}
      </ul>
    </div>
  );
}
