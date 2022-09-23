import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <span>Show:</span>
        <form onChange={this.handleChange}>
          <input name="todolistseting" type="radio" value="All" /> All
          <input name="todolistseting" type="radio" value="Active" /> Active
          <input name="todolistseting" type="radio" value="Completed" />{" "}
          Completed
        </form>
      </div>
    );
  }
}
export default Footer;
