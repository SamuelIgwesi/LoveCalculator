const button = document.querySelector("button");
const score = document.querySelector(".love-score");
const timeSpent = document.getElementById("time-spent");
const talkTime = document.getElementById("talk-time");
const form = document.getElementsByTagName("form")[0];

// Check if input fields are empty
function checkInputFields() {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    if (input.value.trim() === "") {
      alert("Please fill in all required fields");
      return false;
    }
  }
  return true;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputFields() && button.innerText == "Check") {
    let lovePercentage;

    // Conditions for strong love score
    if ((timeSpent.value == 3 || timeSpent.value == 4) && talkTime.value == 4) {
      lovePercentage = Math.trunc(Math.random() * (100 - 70) + 70); // 70–99%
    } else {
      lovePercentage = Math.trunc(Math.random() * 70) + 1; // 1–70%
    }

    // Display score
    score.innerHTML = lovePercentage + "%";
    score.classList.remove("hidden");

    // Change button to refresh page
    button.textContent = "Refresh ";
    button.removeEventListener("click", refreshPage); // Avoid duplicates
    button.addEventListener("click", refreshPage);
  }
});

// Reload the page
function refreshPage() {
  location.reload();
}
