import React from "react";
import EmployeesListItem from "../EmployeesListItem/EmployeesListItem";

import "./EmployeesList.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onUpdateSalary }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onUpdateSalary={onUpdateSalary}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
