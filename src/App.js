import React from "react";
import "./styles.css";

import Task from "./components/task";

class TodoListTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      allTodo: [],
      isChecked: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: e.target.allTodo.value,
      isDone: false,
    };

    this.setState((prevState) => ({
      allTodo: [...prevState.allTodo, newItem],
      todo: [...prevState.allTodo, newItem],
    }));
  }
  isDeleted = (item) => {
    item = item.id;

    this.setState((prevState) => ({
      allTodo: prevState.allTodo.filter((el) => el.id !== item),
    }));
  };

  isDoneToggle(item) {
    item.isDone = item.isDone ? false : true;
  }

  handleChange(e) {
    const filterValue = e.target.value;
    if (filterValue === "Active") {
      this.setState((prevState) => ({
        todo: prevState.allTodo.filter((el) => !el.isDone),
      }));
    } else if (filterValue === "Completed") {
      this.setState((prevState) => ({
        todo: prevState.allTodo.filter((el) => el.isDone),
      }));
    } else {
      this.setState((prevState) => ({
        todo: prevState.allTodo.map((el) => el),
      }));
    }
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    return (
      <div className="TodoList">
        <form onSubmit={this.handleSubmit} className="TodoInputWrapper">
          <input type="text" name="allTodo" placeholder="Create a new task" />
          <button type="submit" className="addButton">
            Add
          </button>
        </form>
        <div className="TodoListTable">
          <Task
            items={this.state.todo}
            isDeleted={this.isDeleted}
            isDoneToggle={this.isDoneToggle}
          />
        </div>
        <div className="Footer">
          <span>Show:</span>
          <form onChange={this.handleChange}>
            <input
              name="todolistseting"
              type="radio"
              value="All"
              defaultChecked={this.state.isChecked}
              onChange={this.toggleChange}
            />{" "}
            All
            <input
              name="todolistseting"
              type="radio"
              value="Active"
              onChange={this.toggleChange}
            />{" "}
            Active
            <input
              name="todolistseting"
              type="radio"
              value="Completed"
              onChange={this.toggleChange}
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
