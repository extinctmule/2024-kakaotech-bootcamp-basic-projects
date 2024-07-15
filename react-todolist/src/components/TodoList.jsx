import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo, onToggleComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDeleteTodo(todo.id)}
          onToggleComplete={() => onToggleComplete(todo.id)}
        />
      ))}
    </ul>
  );
}
