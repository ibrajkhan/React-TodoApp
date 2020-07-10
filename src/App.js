import React, { Component } from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";
import todoData from "./todoData";

class App extends Component {
  constructor() {
    super();
    this.state = { todos: todoData };
  }
  render() {
    const todoComponent = this.state.todos.map((item) => (
      <TodoItems key={item.id} items={item} />
    ));

    return <div className="todo-list">{todoComponent}</div>;
  }
}
export default App;
