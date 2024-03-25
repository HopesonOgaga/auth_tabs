// section 2
const arcade = document.getElementById("arcade");
const advance = document.getElementById("advance");
const pro = document.getElementById("pro");
const next_button = document.getElementById("next");
const toggle_btn = document.getElementById("toggle-btn");

// Select elements with correct classes
const arcade_free = document.querySelector(".arcade-free");
const arcade_advance = document.querySelector(".arcade-advance");
const arcade_pro = document.querySelector(".arcade-pro");

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

//toggle_btn button
if (toggle_btn) {
  toggle_btn.addEventListener("change", function (e) {
    e.stopPropagation()
    // Checking if the toggle_btn is checked
    if (toggle_btn.checked) {
      arcade_free.classList.remove("hidden"); // Remove the 'hidden' class to show the element
      arcade_advance.classList.remove("hidden");
      arcade_pro.classList.remove("hidden");
    } else {
      arcade_free.classList.add("hidden"); // Add the 'hidden' class to hide the element
      arcade_advance.classList.add("hidden");
      arcade_pro.classList.add("hidden");
    }
  });
}

if (next_button) {
  next_button.addEventListener("click", function () {
    location.href = "./pick.html";
  });
}
