import React from "react";

export default function TodoInput({ value, onChange, onAddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAddTodo}>추가하기</button>
    </div>
  );
}
