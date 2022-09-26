import React from "react";
import "./styles.css";

import Task from "./components/task";
import Filters from "./components/filters";

const FILTER_MAP = {
  all: () => true,
  active: (item) => !item.isCompleted,
  completed: (item) => item.isCompleted,
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      filter: "all",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: e.target.todo.value,
      isCompleted: false,
    };

    this.setState((prevState) => ({
      ...prevState,
      todoList: [...prevState.todoList, newItem],
    }));

    e.target.todo.value = "";
  }

  deleteTodo(id) {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== id),
    }));
  }

  toggleTodo(id) {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      }),
    }));
  }

  filterChange(e) {
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
          <ul>
            {this.state.todoList
              .filter(FILTER_MAP[this.state.filter])
              .map((todo) => {
                return (
                  <Task
                    key={todo.id}
                    id={todo.id}
                    isChecked={todo.isCompleted}
                    text={todo.text}
                    deleteTodo={this.deleteTodo}
                    toggleTodo={this.toggleTodo}
                  />
                );
              })}
          </ul>
        </div>
        <Filters
          activeFilter={this.state.filter}
          onChange={this.filterChange}
        />
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
        <TodoList />
      </div>
    );
  }
}

export default App;
