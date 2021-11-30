import { Component } from "react";
import uniqueId from "lodash/uniqueId";

import AppInfo from "../AppInfo/AppInfo";
import SearchPanel from "../SearchPanel/SearchPanel";
import AppFilter from "../AppFilter/AppFilter";
import EmployeesList from "../EmployeesList/EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm/EmplyeesAddForm";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "John C.",
          salary: 800,
          increase: false,
          rise: false,
          id: 1,
        },
        {
          name: "Alex W.",
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Richard K.",
          salary: 1500,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
    this.uniqId = uniqueId(1);
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.uniqId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newEmployee];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      const lowerName = item.name.toLowerCase();
      return lowerName.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterSearch = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onUpdateSalary = (name, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.name === name) {
          return { ...item, salary };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterSearch(
      this.searchEmployee(data, term),
      filter
    );

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onUpdateSalary={this.onUpdateSalary}
        />
        <EmployeesAddForm onAdd={this.addEmployee} />
      </div>
    );
  }
}

export default App;
