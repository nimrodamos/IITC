const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const faqAnswers = document.querySelectorAll(".faq-item p");

plusButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    button.classList.add("hidden");
    minusButtons[index].classList.remove("hidden");
    faqAnswers[index].classList.remove("hidden");
  });
});

minusButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    button.classList.add("hidden");
    plusButtons[index].classList.remove("hidden");
    faqAnswers[index].classList.add("hidden");
  });
});
