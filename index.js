//  shows navbar
const h3 = document.querySelector("#navHeading");
const result = document.querySelector("#contentContainer");

h3.addEventListener("mouseover", () => {
  result.style.visibility = "visible";
});

h3.addEventListener("mouseout", () => {
  result.style.visibility = "hidden";
});

// dynamic date
const date = new Date().getFullYear();

const d = document.querySelector("#date");

d.textContent = date;
// changing text
// document.addEventListener("DOMContentLoaded", function () {
//   var dynamicText = document.getElementById("dynamic-text");
//   var texts = [
//     "Get paid by sharing Appastore as an affiliate partner.",
//     "Become a successful business person with Appastore",
//     "Become a delivery rider and easily learn",
//   ]; // Array of texts to cycle through
//   var currentIndex = 0;

//   function changeText() {
//     dynamicText.innerHTML = texts[currentIndex];
//     currentIndex = (currentIndex + 1) % texts.length;
//   }

//   setInterval(changeText, 2000); // Call changeText every 2 seconds (2000 milliseconds)
// });
