import React, { Component } from "react";
import "./EmployessAddForm.css";

class EmplyeesAddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      salary: "",
    };
  }

  onUpdateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || this.state.salary < 1) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Employee's name"
            value={this.state.name}
            name="name"
            onChange={this.onUpdateInput}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary"
            value={this.state.salary}
            name="salary"
            onChange={this.onUpdateInput}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmplyeesAddForm;
