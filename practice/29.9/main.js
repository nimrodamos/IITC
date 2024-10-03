const students = [
  { name: "David", averageGrade: 85 },
  { name: "Sara", averageGrade: 90 },
  { name: "Michael", averageGrade: 85 },
  { name: "John", averageGrade: 75 },
  { name: "Anna", averageGrade: 90 },
  { name: "Ben", averageGrade: 95 },
];

students.sort((a, b) => {
  if (b.averageGrade !== a.averageGrade) {
    return b.averageGrade - a.averageGrade;
  }
  return a.name.localeCompare(b.name);
});
console.log(students);
