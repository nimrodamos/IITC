// employee.service.js

import { makeId } from "./utils.js";

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
  } else {
    // Add new employee with a new ID
    employee.id = makeId(); // Create a unique ID for new employee
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  }
}

// Function to delete an employee by ID
function deleteEmployee(id) {
  const employees = getEmployeesFromLocalStorage();
  const updatedEmployees = employees.filter((emp) => emp.id !== id);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  displayEmployees(); // Display updated employees
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
  }
}

// Function to display employees in the table
function displayEmployees() {
  const employees = getEmployeesFromLocalStorage();
  const employeeTableBody = document.querySelector("#employeeTable tbody");
  employeeTableBody.innerHTML = ""; // Clear previous content

  employees.forEach((employee) => {
    const row = document.createElement("tr");
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
}

export { addEmployee, deleteEmployee, editEmployee, displayEmployees };
