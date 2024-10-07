const formElement = document.querySelector("form");
const validationParagraph = document.querySelector("#validation");
const storedPIN = "1234";
const navElement = document.querySelector("nav");
const btnNodeList = navElement.querySelectorAll("button");
const divContainer = document.querySelector(".container");

let userBalance = 1000;
const userBalanceEl = document.querySelector("#userBalance");
const renderBalance = () => {
  userBalanceEl.textContent = `Your balance is: ${userBalance}$`;
};

const userTransactions = []; // היסטוריית פעולות (מערך לאחסון עסקאות)
let userInput;
let attemptCount = 0;
const maxAttempts = 3;

// היסטוריית פעולות (מערך לאחסון עסקאות)
const addTransaction = (type, amount) => {
  userTransactions.push({ type, amount });
};

// מאזין לאירוע של שליחת הטופס
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  userInput = document.querySelector("#PIN").value;
  validationParagraph.textContent = "";
  validationParagraph.classList.remove("valid", "invalid");

  if (userInput === storedPIN) {
    validationParagraph.textContent = "PIN correct";
    validationParagraph.classList.add("valid");

    // הסתרת שדה הסיסמה והכפתור
    formElement.classList.add("hidden");
    validationParagraph.classList.add("hidden");

    // הצגת שאר התוכן
    divContainer.classList.remove("hidden");
  } else {
    attemptCount++;
    validationParagraph.textContent = "PIN incorrect";
    validationParagraph.classList.add("invalid");
    formElement.reset(); // מאפס את ה-input

    // עדכון על מספר הניסיונות שנותרו
    const attemptsLeft = maxAttempts - attemptCount;
    validationParagraph.textContent += ` Attempts left: ${attemptsLeft}`;

    // אם הגיע למספר הניסיונות המקסימלי
    if (attemptCount >= maxAttempts) {
      validationParagraph.textContent =
        "Your account is locked. Your card has been swallowed.";
      formElement.classList.add("hidden"); // הסתרת שדה הסיסמה
    }
  }
});

const containers = divContainer.querySelectorAll("div");

// הוספת מאזין לאירועים לכפתורים
btnNodeList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    containers.forEach((container) => {
      container.classList.add("hidden"); //פה אני מסתיר את כל קונטיינרים
    });
    const currentEl = document.querySelector(`#${e.target.id}El`); //פה אני מוצא את הקונטייר הנכון
    currentEl.classList.toggle("hidden");

    // כפתור balance
    if (e.target.id === "balance") {
      renderBalance();
      const balanceMessage = document.querySelector("#balanceMessage"); // בחר את הפסקה החדשה
      balanceMessage.textContent = `Your balance is: $${userBalance}`; // עדכן את התוכן שלה
    }

    // הסרת תוכן הפעולות הקודמות
    if (e.target.id === "lastTransaction") {
      const lastTransactionEl = document.querySelector("#lastTransactionEl");
      lastTransactionEl.innerHTML = ""; // נקה את התוכן הקודם

      // הצגת העסקאות האחרונות
      if (userTransactions.length > 0) {
        const transactionCount = Math.min(userTransactions.length, 5); // בודק עד כמה להציג
        for (
          let i = userTransactions.length - transactionCount;
          i < userTransactions.length;
          i++
        ) {
          const transaction = userTransactions[i]; // קבלת העסקה הנוכחית
          const transactionParagraph = document.createElement("p"); // יצירת פסקה חדשה
          transactionParagraph.textContent = `Transaction: ${transaction.type} of $${transaction.amount}`; // הוספת תוכן לפסקה
          lastTransactionEl.appendChild(transactionParagraph); // הוספת הפסקה לקונטיינר
        }
      } else {
        const noTransactionParagraph = document.createElement("p");
        noTransactionParagraph.textContent = "No transactions yet."; // הודעה אם אין עסקאות
        lastTransactionEl.appendChild(noTransactionParagraph); // הוספת הפסקה לקונטיינר
      }
    }
  });
});

// הוספת פונקציות להפקדה ומשיכה
const depositForm = document.querySelector("#depositEl form"); // בחר את טופס ההפקדה
const withdrawForm = document.querySelector("#withdrawEl form"); // בחר את טופס המשיכה

// מאזין לאירוע של שליחת טופס ההפקדה
depositForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const depositAmount = parseFloat(depositForm.querySelector("input").value); // קבלת סכום ההפקדה
  if (!isNaN(depositAmount) && depositAmount > 0) {
    // בדיקת אם הסכום חוקי
    userBalance += depositAmount; // עדכון היתרה
    renderBalance(); // עדכון התצוגה
    addTransaction("Deposit", depositAmount); // הוספת העסקה להיסטוריה
    validationParagraph.textContent = `Deposited $${depositAmount}`; // הודעה על ההפקדה
    depositForm.reset(); // מאפס את ה-input
  }
});

// מאזין לאירוע של שליחת טופס המשיכה
withdrawForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const withdrawAmount = parseFloat(withdrawForm.querySelector("input").value); // קבלת סכום המשיכה
  if (
    !isNaN(withdrawAmount) &&
    withdrawAmount > 0 &&
    withdrawAmount <= userBalance // בדיקת אם הסכום חוקי ואינו עולה על היתרה
  ) {
    userBalance -= withdrawAmount; // עדכון היתרה
    renderBalance(); // עדכון התצוגה
    addTransaction("Withdraw", withdrawAmount); // הוספת העסקה להיסטוריה
    validationParagraph.textContent = `Withdrew $${withdrawAmount}`; // הודעה על המשיכה
    withdrawForm.reset(); // מאפס את ה-input
  } else if (withdrawAmount > userBalance) {
    validationParagraph.textContent = "Insufficient funds!"; // הודעה אם אין מספיק כספים
  }
});

renderBalance();
