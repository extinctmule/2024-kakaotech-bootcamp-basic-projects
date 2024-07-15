import React from "react";

export default function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={onToggleComplete}>
        {todo.completed ? "취소" : "완료"}
      </button>
      <button onClick={onDelete}>삭제</button>
    </li>
  );
}
