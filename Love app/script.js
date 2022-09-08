const button = document.querySelector("button");
const score = document.querySelector(".love-score");
// Check if input fields are empty
var x;
x = document.getElementById("input").value;
function empty() {
  var x;
  x = document.getElementById("input").value;
  if (x == "") {
    alert("Fill in the required fields");
    return false;
  }
}
// Submit form
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  if (x == true || y == true) {
    var y = document.getElementById("talk-time").options[([0], [1], [2])].text;
    var x = document.getElementById("time-spent").options[0].text;
    score.innerHTML = Math.trunc(Math.random() * 70) + 1 + "%";
  } else {
    score.innerHTML = Math.trunc(Math.random() * 100) + 1 + "%";
  }

  e.preventDefault();
  button.innerHTML = "Refresh";
  button.style.backgroundColor = "#222";
});
// Refresh button
button.addEventListener("click", (e) => {
  if (button.innerHTML == "Refresh") {
    location.reload();
  }
});
