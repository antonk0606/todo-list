import React from "react";
import "./styles.css";

import Task from "./components/task";

class TodoListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      filter: "All",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isDeleted = this.isDeleted.bind(this);
    this.isTaskToggle = this.isTaskToggle.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: e.target.todo.value,
      taskComplited: false,
    };

    this.setState((prevState) => ({
      todo: [...prevState.todo, newItem],
      filter: "All",
    }));
    e.target.todo.value = "";
  }
  isDeleted(id) {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((item) => item.id !== id),
    }));
  }
  isTaskToggle(itemId, taskComplited) {
    this.setState((prevState) => ({
      todo: prevState.todo.map((item) => {
        if (item.id === itemId) {
          item.taskComplited = !taskComplited;
          return item;
        }
        return item;
      }),
    }));
    console.log(this.state.todo);
  }
  handleChange(e) {
    this.setState(() => ({
      filter: e.target.value,
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <form onSubmit={this.handleSubmit} className="TodoInputWrapper">
          <input type="text" name="todo" placeholder="Create a new task" />
          <button type="submit" className="addButton">
            Add
          </button>
        </form>
        <div className="TodoListTable">
          <Task
            items={this.state.todo}
            filter={this.state.filter}
            isDeleted={this.isDeleted}
            isTaskToggle={this.isTaskToggle}
          />
        </div>
        <div className="Footer">
          <span>Show:</span>
          <form onChange={this.handleChange}>
            <input
              name="todolistseting"
              type="radio"
              value="All"
              checked={this.state.filter === "All"}
            />{" "}
            All
            <input
              name="todolistseting"
              type="radio"
              value="Active"
              checked={this.state.filter === "Active"}
            />{" "}
            Active
            <input
              name="todolistseting"
              type="radio"
              value="Completed"
              checked={this.state.filter === "Completed"}
            />{" "}
            Completed
          </form>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div className="Header">
          <h1>Todo List</h1>
        </div>
        <TodoListTable />
      </div>
    );
  }
}

export default App;
