import React from "react";
import "./task.css";

class Task extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => this.props.toggleTodo(this.props.id)}
          checked={this.props.isChecked}
        />
        <span>{this.props.text}</span>
        <button
          onClick={() => this.props.deleteTodo(this.props.id)}
          className="deleteButton"
        >
          del
        </button>
      </li>
    );
  }
}
export default Task;
