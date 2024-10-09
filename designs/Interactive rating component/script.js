const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.innerHTML = rating.innerHTML;
  });
});

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});
