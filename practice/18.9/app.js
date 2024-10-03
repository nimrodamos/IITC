document.addEventListener("DOMContentLoaded", () => {
  // קריאה של המשימות מ-localStorage או יצירת מערך ריק אם אין משימות שמורות
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, text: "Task 1", isWork: false },
    { id: 2, text: "Task 2", isWork: false },
    { id: 3, text: "Task 3", isWork: false },
  ];

  const todoList = document.getElementById("todo-list");
  const todoForm = document.getElementById("todo-form");
  const newTodoInput = document.getElementById("new-todo");
  const filterButtons = document.querySelectorAll("#filter-buttons button");

  // פונקציה להצגת המשימות בהתאם לסינון
  function renderTasks(filter = "all") {
    todoList.innerHTML = ""; // נקה את הרשימה לפני כל עדכון
    tasks
      .filter((task) => {
        if (filter === "completed") return task.isWork;
        if (filter === "uncompleted") return !task.isWork;
        return true;
      })
      .forEach((task) => {
        const todoItem = document.createElement("li");
        todoItem.textContent = task.text;
        todoItem.setAttribute("data-id", task.id);

        // אם המשימה בוצעה, נוסיף class שמסמן זאת
        if (task.isWork) {
          todoItem.classList.add("completed");
        }

        // הוספת אפשרות לסמן כבוצע
        todoItem.addEventListener("click", () => {
          // סמן את כל המשימות כלא בוצעו
          tasks.forEach((t) => (t.isWork = false));

          // עכשיו סמן את המשימה שנלחצה
          task.isWork = true;

          saveTasksToLocalStorage(); // שמור את השינויים ב-localStorage
          renderTasks(filter); // נעדכן את הרשימה לפי הסינון הנוכחי
        });

        // הוספת כפתור למחיקת המשימה
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (event) => {
          event.stopPropagation(); // עצור את התפשטות האירוע כך שלחיצה על כפתור לא תשנה את מצב הסימון
          const taskIndex = tasks.findIndex((t) => t.id === task.id);
          tasks.splice(taskIndex, 1); // מחיקת המשימה מהמערך
          saveTasksToLocalStorage(); // שמור את השינויים ב-localStorage
          renderTasks(filter); // נעדכן את הרשימה לפי הסינון הנוכחי
        });

        // הוספת כפתור עריכה למשימה
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", (event) => {
          event.stopPropagation();
          const newText = prompt("Edit task:", task.text); // פתח חלון קלט למשתמש לעריכת המשימה
          if (newText) {
            task.text = newText;
            saveTasksToLocalStorage();
            renderTasks(filter);
          }
        });

        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
      });
  }

  // שמירה של המשימות ל-localStorage
  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // הוספת משימה חדשה דרך הטופס
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTodoText = newTodoInput.value.trim();
    if (newTodoText === "") return;

    const newTask = {
      id: tasks.length + 1, // מזהה ייחודי חדש
      text: newTodoText,
      isWork: false,
    };

    tasks.push(newTask); // הוספת המשימה החדשה למערך
    saveTasksToLocalStorage(); // שמור את המשימות ב-localStorage
    renderTasks(); // הצגת הרשימה מחדש
    newTodoInput.value = ""; // ניקוי שדה הקלט
  });

  // טיפול בלחיצות על כפתורי הסינון
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      renderTasks(filter);
    });
  });

  renderTasks(); // הצגת המשימות כאשר הדף נטען
});
