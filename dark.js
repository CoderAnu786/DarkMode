var CheckBox = document.getElementById("mycheck");
var Body = document.getElementById("body");
var Mode = document.getElementById("mode");
var modeIcon = document.getElementById("mode-icon");

CheckBox.addEventListener("click", () => {
  if (CheckBox.checked) {
    Body.style.backgroundColor = "black";
    Mode.style.color = "honeydew";
    Mode.innerText = "Dark Mode";
    modeIcon.className = "fa-regular fa-moon";
    modeIcon.style.color = "honeydew";
  } else {
    Body.style.backgroundColor = "honeydew";
    Mode.style.color = "black";
    Mode.innerText = "Light Mode";
    modeIcon.className = "fa-regular fa-sun";
    modeIcon.style.color = "orange";
  }
});
