import { utils } from "./utils.js";

const EMPLOYEES_STORAGE_KEY = "employees";
let _gEmployees = utils.getFromStorage(EMPLOYEES_STORAGE_KEY) || [];

// Adding an employee
function addEmployee(employee) {
  const newEmployee = {
    id: utils.makeId(),
    ...employee,
  };
  _gEmployees.push(newEmployee);
  utils.saveToStorage(EMPLOYEES_STORAGE_KEY, _gEmployees);
}

// Deleting an employee
function deleteEmployee(id) {
  _gEmployees = _gEmployees.filter((emp) => emp.id !== id);
  utils.saveToStorage(EMPLOYEES_STORAGE_KEY, _gEmployees);
}

// Getting filtered employees
function getFilteredEmployees(department) {
  if (!department) return _gEmployees;
  return _gEmployees.filter((emp) =>
    emp.department.toLowerCase().includes(department.toLowerCase())
  );
}

export const employeeService = {
  addEmployee,
  deleteEmployee,
  getFilteredEmployees,
};
