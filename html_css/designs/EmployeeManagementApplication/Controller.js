import { employeeService } from "./employee.service.js";

// DOM elements
const elEmployeeForm = document.getElementById("employee-form");
const elEmployeeList = document.getElementById("employee-list");
const elDepartmentFilter = document.getElementById("department-filter");

// Handling event listeners
elEmployeeForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  // Get the input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const age = Number(document.getElementById("age").value);
  const startDate = document.getElementById("start-date").value;
  const department = document.getElementById("department").value;
  const salary = Number(document.getElementById("salary").value);

  // Adding a new employee
  employeeService.addEmployee({
    firstName,
    lastName,
    age,
    startDate,
    department,
    salary,
  });

  // Clear form inputs
  elEmployeeForm.reset();

  // Render the employee list
  renderEmployees();
});

// Render the employees
function renderEmployees() {
  const employees = employeeService.getFilteredEmployees(
    elDepartmentFilter.value
  );
  elEmployeeList.innerHTML = ""; // Clear the list

  employees.forEach((employee) => {
    const elEmployee = document.createElement("li");
    elEmployee.textContent = `${employee.firstName} ${employee.lastName} - ${employee.department}`;

    // Creating delete button
    const elDeleteBtn = document.createElement("button");
    elDeleteBtn.textContent = "Delete";
    elDeleteBtn.addEventListener("click", () => {
      employeeService.deleteEmployee(employee.id);
      renderEmployees(); // Refresh the list
    });

    elEmployee.appendChild(elDeleteBtn);
    elEmployeeList.appendChild(elEmployee);
  });
}

// Filtering employees by department
elDepartmentFilter.addEventListener("input", () => {
  renderEmployees();
});

// Initial render
renderEmployees();
