import React from "react";
import "./AppInfo.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Number of employees in company</h1>
      <h2>Total amount of employees: {employees}</h2>
      <h2>Premium will receive: {increased}</h2>
    </div>
  );
};

export default AppInfo;
