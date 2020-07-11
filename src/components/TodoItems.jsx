import React from "react";

function TOdoItems(props) {
  console.log(props)
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.items.completed}
        onChange={()=>props.handelChange(props.items.id)}
      />
      <p>{props.items.text}</p>
    </div>
  );
}
export default TOdoItems;
