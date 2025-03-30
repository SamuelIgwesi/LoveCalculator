const button = document.querySelector("button");
const score = document.querySelector(".love-score");
const timeSpent = document.getElementById("time-spent");
const talkTime = document.getElementById("talk-time");
// Check if input fields are empty

function checkInputFields() {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    if (input.value.trim === "") {
      alert("Fill in the required fields");
      return false;
    }
  }
  return true;
}
// Submit form
const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputFields) {
    if (timeSpent.value == 3 || timeSpent.value == 4) {
      if (talkTime.value == 4) {
        score.innerHTML = Math.trunc(Math.random() * (100 - 70) + 70) + "%";
      }
    } else {
      score.innerHTML = Math.trunc(Math.random() * 70) + 1 + "%";
    }
    // Change button text to "Refresh"
    button.textContent = "Refresh";

    // Modify button behavior to reload page on next click
    button.removeEventListener("click", refreshPage);
    button.addEventListener("click", refreshPage);
  }
});
function refreshPage() {
  location.reload();
}
