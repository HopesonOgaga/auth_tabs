// section 2
const arcade = document.getElementById("arcade");
const advance = document.getElementById("advance");
const pro = document.getElementById("pro");
const next_button = document.getElementById("next");
const toggle_btn = document.getElementById("toggle-btn");
//
const arcade_free = document.querySelector('.arcade-free')
const toggle = document.querySelector(".toggle__input");
// value data
const info_val = {
  pro_value: 15,
  advance_value: 12,
  arcade_value: 9,
};

arcade.addEventListener("click", function () {
  const value = info_val.arcade_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
  console.log(value);
});

advance.addEventListener("click", function () {
  const value = info_val.advance_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
  console.log(value);
});

pro.addEventListener("click", function () {
  const value = info_val.pro_value;
  localStorage.setItem("value", JSON.stringify(value)); // Store value in local storage
  console.log(value);
});

//toggle button
toggle.addEventListener("change", function () {
  // Checking if the toggle is checked
  if (toggle.checked) {
      arcade_free.classList.remove('hidden'); // Remove the 'hidden' class to show the element
  } else {
      arcade_free.classList.add('hidden'); // Add the 'hidden' class to hide the element
  }
});
