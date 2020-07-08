import React from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";
import todoData from "./todoData";

function App() {
  const todoComponent = todoData.map((count) => (
    <TodoItems key={count.id} Text={count.text} Completed={count.completed} />
  ));
  return <div className="todo-list">{todoComponent}</div>;
}

export default App;
