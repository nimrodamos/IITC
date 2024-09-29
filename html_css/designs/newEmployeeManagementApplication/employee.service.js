// employee.service.js

import { makeId } from "./utils.js";

// Function to initialize sample employees
function initializeEmployees() {
  const employees = getEmployeesFromLocalStorage();
  if (employees.length === 0) {
    const sampleEmployees = [
      {
        firstName: "Alice",
        lastName: "Smith",
        age: 28,
        startDate: "2020-06-15",
        department: "Marketing",
        salary: 50000,
        id: makeId(),
      },
      {
        firstName: "John",
        lastName: "Doe",
        age: 35,
        startDate: "2018-01-25",
        department: "Sales",
        salary: 60000,
        id: makeId(),
      },
      {
        firstName: "Emma",
        lastName: "Johnson",
        age: 42,
        startDate: "2015-03-12",
        department: "IT",
        salary: 70000,
        id: makeId(),
      },
      {
        firstName: "Michael",
        lastName: "Brown",
        age: 30,
        startDate: "2019-07-01",
        department: "Finance",
        salary: 55000,
        id: makeId(),
      },
      {
        firstName: "Sophia",
        lastName: "Williams",
        age: 26,
        startDate: "2021-05-20",
        department: "HR",
        salary: 45000,
        id: makeId(),
      },
      {
        firstName: "David",
        lastName: "Taylor",
        age: 39,
        startDate: "2017-09-14",
        department: "Operations",
        salary: 64000,
        id: makeId(),
      },
      {
        firstName: "Laura",
        lastName: "White",
        age: 32,
        startDate: "2016-11-03",
        department: "Logistics",
        salary: 50000,
        id: makeId(),
      },
    ];
    localStorage.setItem("employees", JSON.stringify(sampleEmployees));
  }
}

// Call the initialize function when the application loads
initializeEmployees();

// Function to get employees from localStorage
function getEmployeesFromLocalStorage() {
  const employees = localStorage.getItem("employees");
  return employees ? JSON.parse(employees) : [];
}

// Function to add a new employee
function addEmployee(employee) {
  const employees = getEmployeesFromLocalStorage();
  const editIndex = document.getElementById("editIndex").value;

  if (editIndex) {
    // Update existing employee by ID
    const existingEmployee = employees.find((emp) => emp.id === editIndex);
    if (existingEmployee) {
      Object.assign(existingEmployee, employee); // Update properties
      localStorage.setItem("employees", JSON.stringify(employees));
    }
    document.getElementById("editIndex").value = ""; // Reset edit index
    resetButtonText();
  } else {
    // Add new employee with a new ID
    employee.id = makeId(); // Create a unique ID for new employee
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  }
}

// Function to delete an employee by ID
function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    const employees = getEmployeesFromLocalStorage();
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    renderEmployees();
  }
}

// Function to edit an employee by ID
function editEmployee(id) {
  const employees = getEmployeesFromLocalStorage();
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    document.getElementById("firstName").value = employee.firstName;
    document.getElementById("lastName").value = employee.lastName;
    document.getElementById("age").value = employee.age;
    document.getElementById("startDate").value = employee.startDate;
    document.getElementById("department").value = employee.department;
    document.getElementById("salary").value = employee.salary;

    // Store the ID of the employee being edited
    document.getElementById("editIndex").value = employee.id;

    if (editIndex) {
      document.querySelector("button[type='submit']").textContent =
        "Update Employee";
    } else {
      document.querySelector("button[type='submit']").textContent =
        "Add Employee";
    }

    // Call renderEmployees to update the table view
    renderEmployees();
  }
}
// Function to reset button text to "Add Employee"
function resetButtonText() {
  document.querySelector("button[type='submit']").textContent = "Add Employee";
}

// Function to set up event listeners for edit and delete buttons
function setupEventListeners() {
  const employees = getEmployeesFromLocalStorage();
  const employeeTableBody = document.querySelector("#employeeTable tbody");

  // Clear existing event listeners by recreating the buttons
  employees.forEach((employee) => {
    const row = employeeTableBody.querySelector(`tr[data-id="${employee.id}"]`);

    if (row) {
      const editButton = row.querySelector("button.edit");
      const deleteButton = row.querySelector("button.delete");

      // Clear previous listeners (if needed) and add new listeners
      if (editButton) {
        editButton.onclick = () => editEmployee(employee.id);
      }

      if (deleteButton) {
        deleteButton.onclick = () => deleteEmployee(employee.id);
      }
    }
  });
}
// Function to filter employees by department
function filterEmployeesByDepartment(department) {
  const employees = getEmployeesFromLocalStorage();
  let filteredEmployees;

  if (department === "All") {
    filteredEmployees = employees;
  } else {
    filteredEmployees = employees.filter(
      (employee) => employee.department === department
    );
  }

  renderFilteredEmployees(filteredEmployees);
}

// Function to render filtered employees in the table
function renderFilteredEmployees(filteredEmployees) {
  const employeeTableBody = document.querySelector("#employeeTable tbody");
  employeeTableBody.innerHTML = "";

  filteredEmployees.forEach((employee) => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", employee.id); // Set data-id for reference
    row.innerHTML = `
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.age}</td>
              <td>${employee.startDate}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
              <td>${employee.id}</td> <!-- Displaying the unique ID -->
              <td>
                  <button class="edit" data-id="${employee.id}">Edit</button>
                  <button class="delete" data-id="${employee.id}">Delete</button>
              </td>
          `;
    employeeTableBody.appendChild(row);
  });

  // After rendering filtered employees, re-setup event listeners
  setupEventListeners();
}

// Function to render employees in the table
function renderEmployees() {
  const employees = getEmployeesFromLocalStorage();
  const employeeTableBody = document.querySelector("#employeeTable tbody");
  employeeTableBody.innerHTML = ""; // Clear previous content

  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", employee.id); // Set data-id for reference
    row.innerHTML = `
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.age}</td>
              <td>${employee.startDate}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
              <td>${employee.id}</td> <!-- Displaying the unique ID -->
              <td>
                  <button class="edit" data-id="${employee.id}">Edit</button>
                  <button class="delete" data-id="${employee.id}">Delete</button>
              </td>
          `;
    employeeTableBody.appendChild(row);
  });

  // After rendering employees, re-setup event listeners
  setupEventListeners();
}

export {
  addEmployee,
  deleteEmployee,
  editEmployee,
  renderEmployees,
  getEmployeesFromLocalStorage,
  initializeEmployees,
  setupEventListeners,
  filterEmployeesByDepartment,
};
