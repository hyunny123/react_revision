import React from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  return (
    <li>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="">{todo.text}</label>
      <button></button>
    </li>
  );
}
