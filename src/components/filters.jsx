import React from "react";

const filterOptions = [
  { name: "todolistseting", value: "all", label: "All" },
  { name: "todolistseting", value: "active", label: "Active" },
  { name: "todolistseting", value: "completed", label: "Completed" },
];

class Filters extends React.Component {
  render() {
    return (
      <div className="Footer">
        <span>Show:</span>
        <div>
          {filterOptions.map((option) => (
            <div style={{ display: "inline-block" }} key={option.value}>
              <input
                name={option.name}
                type="radio"
                value={option.value}
                checked={this.props.activeFilter === option.value}
                onChange={this.props.onChange}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Filters;
