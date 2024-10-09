// Fetch random dog image
document.getElementById("dogButton").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const dogImage = document.getElementById("dogImage");

      dogImage.src = data.message;
      dogImage.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching the dog image:", error);
    });
});

// Fetch random cat image
document.getElementById("catButton").addEventListener("click", function () {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const catImage = document.getElementById("catImage");

      catImage.src = data[0].url;
      catImage.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching the cat image:", error);
    });
});
