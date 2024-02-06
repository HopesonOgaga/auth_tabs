// section 2
const arcade = document.getElementById("arcade");
const advance = document.getElementById("advance");
const pro = document.getElementById("pro");
const next_button = document.getElementById("next");
const toggle_btn = document.getElementById("toggle-btn");
//
const arcade_free = document.querySelector(".arcade-free");

// value data
const info_val = {
  pro_value: 15,
  advance_value: 12,
  arcade_value: 9,
};

arcade.addEventListener("click", function () {
  const value = info_val.arcade_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
});

advance.addEventListener("click", function () {
  const value = info_val.advance_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
});

pro.addEventListener("click", function () {
  const value = info_val.pro_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
});

next_button.addEventListener("click", function () {
  location.href = "./pick.html"; // Navigate to the next page
});

toggle_btn.addEventListener("click", function () {
  arcade_free.classList.toggle("hidden"); // Toggle visibility of arcade button
});
