// controller.js

import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  displayEmployees,
} from "./employee.service.js";

// Function to handle form submission
document.getElementById("addEmployeeForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh
  const newEmployee = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: parseInt(document.getElementById("age").value),
    startDate: document.getElementById("startDate").value,
    department: document.getElementById("department").value,
    salary: parseFloat(document.getElementById("salary").value),
  };
  addEmployee(newEmployee);
  displayEmployees(); // Display updated employees
  e.target.reset(); // Reset the form
});

// Function to set up event listeners for edit and delete buttons
function setupEventListeners() {
  const employees = getEmployeesFromLocalStorage();
  const employeeTableBody = document.querySelector("#employeeTable tbody");

  employees.forEach((employee) => {
    const editButton = employeeTableBody.querySelector(
      `button[data-id="${employee.id}"].edit`
    );
    const deleteButton = employeeTableBody.querySelector(
      `button[data-id="${employee.id}"].delete`
    );

    if (editButton) {
      editButton.addEventListener("click", () => editEmployee(employee.id));
    }

    if (deleteButton) {
      deleteButton.addEventListener("click", () => deleteEmployee(employee.id));
    }
  });
}

// Display employees when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayEmployees();
  setupEventListeners(); // Setup event listeners for buttons
});
