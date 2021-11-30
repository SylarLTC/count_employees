import React from "react";
import "./AppFilter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "Employees in promotion list" },
    { name: "moreThan1000", label: "Salary more than 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        type="button"
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
