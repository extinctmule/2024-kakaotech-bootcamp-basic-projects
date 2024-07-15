import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

export default function App() {
  //todos: 투두리스트의 상태를 저장하는 배열, setTodos: 그거 상태를 업데이트하는거
  const [todos, setTodos] = useState([]);

  //newTodo: 사용자가 입력한 투두 아이템을 임시로 저장하는 문자열, setNewTodo: 그거 상태 업데이트하는거. 사용자가 입력필드에 텍스트 입력할때마다 newTodo 업데이트해주도록.
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    //입력값 유효하면, setTodos호출
    if (newTodo.trim()) {
      //모든 존재하는 todo를 담은 새로운 배열을 생성하고, 거기에 새todo를 추가한다.
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      // 인풋 필드를 클리어함
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>할 일</h1>
      <TodoInput value={newTodo} onChange={setNewTodo} onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}
