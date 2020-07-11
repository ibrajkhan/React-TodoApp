import React, { Component } from "react";
import TodoItems from "./components/TodoItems";
import "./App.css";
import todoData from "./todoData";

class App extends Component {
  constructor() {
    super();
    this.state = { todos: todoData };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodo,
      };
    });
  }
  render() {
    const todoComponent = this.state.todos.map((item) => (
      <TodoItems key={item.id} items={item} handelChange={this.handelChange} />
    ));

    return <div className="todo-list">{todoComponent}</div>;
  }
}
export default App;
