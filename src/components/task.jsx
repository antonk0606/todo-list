import React from "react";
import "./task.css";

class Task extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, key) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onClick={() => this.props.isDoneToggle(item)}
            />
            <span>{item.text}</span>
            <button
              onClick={() => this.props.isDeleted(item)}
              className="deleteButton"
            >
              del
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Task;
