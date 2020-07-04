import React from "react";
import TodoItems from "./components/TodoItems";
import "./App.css"

function App() {
  return (
    <div className = "todo-list">
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoItems />
    </div>
  );
}

export default App;
