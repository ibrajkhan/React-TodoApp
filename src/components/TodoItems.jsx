import React from "react";

function TOdoItems(props) {
  console.log(props);
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.Text}</p>
    </div>
  );
}
export default TOdoItems;
