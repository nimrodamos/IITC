// controller.js

import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  renderEmployees,
  getEmployeesFromLocalStorage,
  initializeEmployees,
  setupEventListeners,
} from "./employee.service.js";

initializeEmployees();

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
  renderEmployees(); // Display updated employees
  e.target.reset(); // Reset the form
});

// Display employees when the page loads
document.addEventListener("DOMContentLoaded", () => {
  renderEmployees();
  setupEventListeners(); // Setup event listeners for buttons
});
