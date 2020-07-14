import React from "react";

function TOdoItems(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through'
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.items.completed}
        onChange={()=>props.handelChange(props.items.id)}
      />
      <p style = {props.items.completed ? completedStyle : null}>{props.items.text}</p>
    </div>
  );
}
export default TOdoItems;
