import React from "react";

function TOdoItems(props) {
  console.log(props);
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.items.completed} />
      <p>{props.items.text}</p>
    </div>
  );
}
export default TOdoItems;
