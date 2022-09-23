import React from "react";
import "./task.css";

const FILTER_MAP = {
  All: () => true,
  Active: (item) => !item.taskComplited,
  Completed: (item) => item.taskComplited,
};

class Task extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.filter(FILTER_MAP[this.props.filter]).map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() =>
                this.props.isTaskToggle(item.id, item.taskComplited)
              }
              checked={item.taskComplited}
            />
            <span>{item.text}</span>
            <button
              onClick={() => this.props.isDeleted(item.id)}
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
